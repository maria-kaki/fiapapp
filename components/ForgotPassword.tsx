import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

interface ForgotPasswordProps {
  onSent?: () => void;
  exampleEmail?: string;
}

export function ForgotPassword({ onSent, exampleEmail }: ForgotPasswordProps) {
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const open = () => setVisible(true);
  const close = () => {
    setVisible(false);
    setSending(false);
    setSent(false);
  };

  const send = () => {
    setSending(true);
    // simulando envio
    setTimeout(() => {
      setSending(false);
      setSent(true);
      onSent?.();
    }, 900);
  };

  return (
    <>
      <TouchableOpacity onPress={open}>
        <Text style={styles.link}>Esqueceu minha senha?</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade" onRequestClose={close}>
        <View style={styles.backdrop}>
          <View style={styles.modal}>
            {!sent ? (
              <>
                <Text style={styles.title}>Recuperar senha</Text>
                <Text style={styles.message}>
                  Será enviado um email com instruções para {exampleEmail ?? 'seu endereço cadastrado'}.
                </Text>

                <View style={styles.actions}>
                  <TouchableOpacity style={styles.btn} onPress={close}>
                    <Text style={styles.btnText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={send}>
                    <Text style={[styles.btnText, styles.btnPrimaryText]}>{sending ? 'Enviando...' : 'Enviar'}</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.title}>Sucesso</Text>
                <Text style={styles.message}>Um email foi enviado com sucesso.</Text>
                <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={close}>
                  <Text style={[styles.btnText, styles.btnPrimaryText]}>OK</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#ED145B',
    textAlign: 'right',
    marginBottom: 8,
    fontWeight: '600',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  message: {
    color: '#ddd',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginLeft: 8,
  },
  btnPrimary: {
    backgroundColor: '#ED145B',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  btnPrimaryText: {
    color: '#fff',
  },
});
