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

export function Cadastro({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    console.log('Criando conta para:', { nome, email, usuario, senha });
    // Após cadastrar, joga o usuário de volta para a tela de Login
    navigation.navigate('Login');
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
              source={require('../Login/EmblemaNasa.png')} 
              style={styles.logo} 
              resizeMode="contain"
            />
            <Text style={styles.title}>Novo Operador</Text>
            <Text style={styles.subtitle}>Crie suas credenciais de acesso</Text>
            
            {/* Nome Completo */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome Completo:</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Digite seu nome" 
                placeholderTextColor="#888"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            {/* E-mail Institucional */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail:</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ex: operador@nasa.gov" 
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Usuário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Usuário:</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Crie um usuário" 
                placeholderTextColor="#888"
                autoCapitalize="none"
                value={usuario}
                onChangeText={setUsuario}
              />
            </View>

            {/* Senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha:</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Crie uma senha" 
                placeholderTextColor="#888"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Já tenho conta (Login)</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Cadastro;

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
    paddingTop: 40,
    paddingBottom: 40,
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
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
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