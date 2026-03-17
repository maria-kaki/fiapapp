import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LoginItem as LoginItemType } from '../mocks/LoginData';
import { useState } from 'react';

interface LoginItemProps {
  onTypeChange?: (isEmail: boolean) => void;
}

export function LoginItem({ onTypeChange }: LoginItemProps) {

    const [isEmail, setIsEmail] = useState<boolean>(true);

    const selectEmail = () => {
      console.log('Email selecionado');
      setIsEmail(true);
      onTypeChange?.(true);
    };

    const selectPhone = () => {
      console.log('Phone selecionado');
      setIsEmail(false);
      onTypeChange?.(false);
    };

  return (
    <View style={[styles.container]}>
      <View style={styles.info}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, isEmail && styles.tabActive]} onPress={selectEmail}>
            <Text style={[styles.tabText, isEmail && styles.tabTextActive]}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, !isEmail && styles.tabActive]} onPress={selectPhone}>
            <Text style={[styles.tabText, !isEmail && styles.tabTextActive]}>Phone</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Text style={styles.room}>{isEmail ? 'E' : 'P'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#ED145B',
  },
  breakItem: {
    backgroundColor: '#2a2a2a',
    borderLeftColor: '#666',
  },
  info: {
    flex: 1,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#ED145B',
  },
  room: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#ED145B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },

  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#121212',
    borderRadius: 8,
    padding: 3,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  tabActive: {
    backgroundColor: '#ED145B',
  },
  tabText: {
    color: '#ccc',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
  },
});
