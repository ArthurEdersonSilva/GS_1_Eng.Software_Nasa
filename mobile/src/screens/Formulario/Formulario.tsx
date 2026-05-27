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
  ScrollView,
  Alert
} from 'react-native';
import api from '../../services/api';

export function Formulario({ navigation }: any) {
  const [titulo, setTitulo] = useState('');
  const [telemetria, setTelemetria] = useState('');
  const [criticidade, setCriticidade] = useState('Ativo');
  const [identificador, setIdentificador] = useState('');
  const [consumo, setConsumo] = useState('');

  const handleEnviar = async () => {
    if (!titulo || !telemetria || !identificador) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      const payload = {
        missao: titulo,
        local: identificador,
        data: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        status: criticidade,
        telemetria: telemetria,
        consumo: consumo ? parseFloat(consumo) : 0.0
      };

      // Ajuste o endpoint se no seu Controller o @RequestMapping for diferente de '/sistema-eventos'
      await api.post('/eventos', payload);
      
      Alert.alert('Sucesso', 'Relatório enviado para a base da NASA!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);

    } catch (error) {
      console.error('Erro ao postar evento:', error);
      Alert.alert('Falha na Comunicação', 'Não foi possível conectar com a base central.');
    }
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
          
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <Text style={styles.title}>Envio de Relatório</Text>
            <Text style={styles.subtitle}>Registre uma nova ocorrência no sistema</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Titulo da Missão *</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ex: Sonda Mars 2026" 
                placeholderTextColor="#666"
                value={titulo}
                onChangeText={setTitulo}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Descrição da Telemetria *</Text>
              <TextInput 
                style={[styles.input, styles.textArea]} 
                placeholder="Descreva os dados de telemetria..." 
                placeholderTextColor="#666"
                multiline
                numberOfLines={4}
                value={telemetria}
                onChangeText={setTelemetria}
                textAlignVertical="top"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nivel de Status Inicial *</Text>
              <View style={styles.selectPseudo}>
                <Text style={styles.selectPseudoText}>{criticidade}</Text>
                <Text style={styles.arrowIcon}>▼</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Identificador da Missão/Projeto *</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ex: MARS-2026-XP" 
                placeholderTextColor="#666"
                value={identificador}
                onChangeText={setIdentificador}
                autoCapitalize="characters"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Dados de Consumo Energético (kW)</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ex: 150" 
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={consumo}
                onChangeText={setConsumo}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleEnviar}>
              <Text style={styles.buttonText}>Enviar para a Base</Text>
            </TouchableOpacity>
          </View>

          <Image 
            source={require('../Login/EmblemaNasa.png')} 
            style={styles.logo} 
            resizeMode="contain"
          />

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Formulario;

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1 },
  scrollContainer: { flexGrow: 1, paddingTop: 40, paddingHorizontal: 20, paddingBottom: 20, alignItems: 'center' },
  backButton: { alignSelf: 'flex-start', marginBottom: 15, paddingVertical: 5 },
  backButtonText: { color: '#ff9900', fontSize: 16, fontWeight: 'bold' },
  card: { width: '100%', maxWidth: 340, backgroundColor: 'rgba(15, 15, 15, 0.85)', borderRadius: 15, padding: 20, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 25 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  subtitle: { fontSize: 13, color: '#aaa', marginBottom: 25 },
  inputGroup: { width: '100%', marginBottom: 18 },
  label: { color: '#fff', fontSize: 14, fontWeight: '600', marginBottom: 8 },
  input: { width: '100%', height: 48, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)', paddingHorizontal: 15, color: '#fff', fontSize: 15 },
  textArea: { height: 100, paddingTop: 12 },
  selectPseudo: { width: '100%', height: 48, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)', paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' },
  selectPseudoText: { color: '#fff', fontSize: 15, flex: 1 },
  arrowIcon: { color: '#fff', fontSize: 12, marginLeft: 10 },
  button: { width: '100%', height: 48, backgroundColor: '#1d61ff', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  logo: { width: 90, height: 90, marginTop: 10, marginBottom: 20 },
});