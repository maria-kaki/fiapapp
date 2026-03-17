import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginItem } from './components/LoginItem';
import { ForgotPassword } from './components/ForgotPassword';

import { account } from './mocks/LoginData';

function MainContent() {
    const insets = useSafeAreaInsets();
    const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
    const [googleModalVisible, setGoogleModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.statusBarBackground, { height: insets.top }]} />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 20 }]}
      >

        <View style={styles.header}>
          <Image
            source={require('./assets/logo-fiap.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Login</Text>
        </View>

        <LoginItem onTypeChange={(isEmail) => setLoginType(isEmail ? 'email' : 'phone')} />

        <View style={styles.inputLabelRow}>
          <Text style={styles.inputLabel}>{loginType === 'email' ? 'Email' : 'Phone number'}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={loginType === 'email' ? 'ex: pedroexemplo@email.com' : 'ex: (11) 96909-0438'}
          placeholderTextColor="#999"
          keyboardType={loginType === 'email' ? 'email-address' : 'phone-pad'}
        />

        <View style={styles.inputLabelRow}>
          <Text style={styles.inputLabel}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={'ex: mínimo 6 caracteres'}
          placeholderTextColor="#999"
          secureTextEntry
        />

        <ForgotPassword exampleEmail={account.email} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.googleIcon}>
            <Text style={styles.googleIconText}>G</Text>
          </View>
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: '#ED145B',
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ED145B',
    justifyContent: 'flex-start'
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#ED145B',
    marginBottom: 15,
  },
  inputLabel: {
    color: '#fff',
    marginBottom: 6,
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  inputLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputExample: {
    color: '#999',
    fontSize: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 10,
  },
  currentPeriod: {
    fontSize: 18,
    color: '#ED145B',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
  },
  emptyMessage: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 30,
  },
  button: {
    backgroundColor: '#ED145B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    borderWidth: 1,
    borderColor: '#ED145B',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  registerButtonText: {
    color: '#ED145B',
    fontWeight: '700',
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#222',
  },
  orText: {
    color: '#999',
    marginHorizontal: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 30,
  },
  googleIcon: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleIconText: {
    fontWeight: '700',
    color: '#DB4437',
  },
  googleButtonText: {
    color: '#222',
    fontWeight: '700',
    fontSize: 16,
  },
});
