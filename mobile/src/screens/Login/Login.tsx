import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';

export function Login({ navigation }: any) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Tentando logar com:', usuario, senha);
    navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1000' }} 
      style={styles.background}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          <View style={styles.card}>
            <Image 
              source={require('./EmblemaNasa.png')} 
              style={styles.logo} 
              resizeMode="contain"
            />
            <Text style={styles.title}>NASA Mission Control</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Usuário:</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Digite seu usuário" 
                placeholderTextColor="#888"
                value={usuario}
                onChangeText={setUsuario}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha:</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Digite sua senha" 
                placeholderTextColor="#888"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* AQUI: Adicionado o onPress para abrir a tela de Cadastro */}
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.linkText}>cadastre-se</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: 'rgba(30, 30, 30, 0.75)',
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 15,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#1d61ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    color: '#1d61ff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});