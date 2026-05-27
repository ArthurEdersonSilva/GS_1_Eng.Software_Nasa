import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ImageBackground, 
  Image, 
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import api from '../../services/api';

interface Relatorio {
  id: number;
  missao: string;
  local: string;
  data: string;
  status: string;
}

export function Dashboard({ navigation }: any) {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [carregando, setCarregando] = useState(true);
  const isFocused = useIsFocused();

  const buscarDados = async () => {
    try {
      setCarregando(true);
      // Ajuste o endpoint se no seu Controller o @RequestMapping for diferente de '/sistema-eventos'
      const response = await api.get('/eventos');
      setRelatorios(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do backend:', error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      buscarDados();
    }
  }, [isFocused]);

  const totalRegistros = relatorios.length;
  const missoesAtivas = relatorios.filter(r => r.status === 'Ativo').length;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Ativo': return styles.badgeAtivo;
      case 'Pendente': return styles.badgePendente;
      case 'Concluido': return styles.badgeConcluido;
      default: return styles.badgePendente;
    }
  };

  const getStatusTextStyle = (status: string) => {
    switch (status) {
      case 'Ativo': return styles.badgeTextAtivo;
      case 'Pendente': return styles.badgeTextPendente;
      case 'Concluido': return styles.badgeTextConcluido;
      default: return styles.badgeTextPendente;
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1000' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          <Text style={styles.welcomeText}>Bem-vindo, Operador NASA</Text>
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Status do Sistema: Operacional</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Total de Registros</Text>
            <Text style={styles.metricValue}>{totalRegistros}</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Missões Ativas</Text>
            <Text style={[styles.metricValue, { color: '#00ff66' }]}>{missoesAtivas}</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Última Atualização</Text>
            <Text style={styles.metricValue}>Online</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
            {['Todos', 'Pendente', 'Ativo', 'Concluido'].map((filtro) => (
              <TouchableOpacity 
                key={filtro} 
                style={[styles.filterButton, filtroAtivo === filtro && styles.filterButtonSelected]}
                onPress={() => setFiltroAtivo(filtro)}
              >
                <Text style={styles.filterButtonText}>
                  {filtro === 'Concluido' ? 'Concluído' : filtro}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Relatórios de Telemetria e Logs</Text>
          <Text style={styles.sectionSubtitle}>Dados enviados pela central FIAP/NASA</Text>

          {carregando ? (
            <ActivityIndicator size="large" color="#1d61ff" style={{ marginTop: 20 }} />
          ) : (
            relatorios
              .filter(r => filtroAtivo === 'Todos' || r.status === filtroAtivo)
              .map((item) => (
                <View key={item.id} style={styles.itemCard}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemTitle}>{item.missao}</Text>
                    <View style={[styles.badge, getStatusStyle(item.status)]}>
                      <Text style={[styles.badgeText, getStatusTextStyle(item.status)]}>
                        {item.status === 'Concluido' ? 'Concluído' : item.status}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.itemSub}>{item.local}</Text>
                  <Text style={styles.itemDate}>Data: {item.data}</Text>
                </View>
              ))
          )}

          <View style={styles.logoContainer}>
            <Image 
              source={require('../Login/EmblemaNasa.png')} 
              style={styles.logo} 
              resizeMode="contain"
            />
          </View>

        </ScrollView>

        <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Formulario')}>
          <Text style={styles.fabText}>+ Nova Missão</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1 },
  scrollContainer: { paddingTop: 50, paddingHorizontal: 20, paddingBottom: 100 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  statusContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#00ff66', marginRight: 8 },
  statusText: { color: '#00ff66', fontSize: 14, fontWeight: '500' },
  metricCard: { width: '100%', backgroundColor: 'rgba(30, 30, 30, 0.75)', borderRadius: 12, padding: 15, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 12 },
  metricLabel: { color: '#aaa', fontSize: 13, marginBottom: 5 },
  metricValue: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  filterRow: { flexDirection: 'row', marginVertical: 15 },
  filterButton: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.08)', marginRight: 10, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)', height: 38 },
  filterButtonSelected: { backgroundColor: '#1d61ff', borderColor: '#1d61ff' },
  filterButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: 15 },
  sectionSubtitle: { fontSize: 13, color: '#aaa', marginBottom: 15 },
  itemCard: { width: '100%', backgroundColor: 'rgba(20, 20, 20, 0.8)', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.08)', marginBottom: 12 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  itemTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  badge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, borderWidth: 1 },
  badgeAtivo: { backgroundColor: 'rgba(0, 255, 102, 0.1)', borderColor: '#00ff66' },
  badgePendente: { backgroundColor: 'rgba(255, 153, 0, 0.1)', borderColor: '#ff9900' },
  badgeConcluido: { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: '#888' },
  badgeText: { fontSize: 12, fontWeight: 'bold' },
  badgeTextAtivo: { color: '#00ff66' },
  badgeTextPendente: { color: '#ff9900' },
  badgeTextConcluido: { color: '#ccc' },
  itemSub: { color: '#aaa', fontSize: 14, marginBottom: 12 },
  itemDate: { color: '#666', fontSize: 12 },
  logoContainer: { alignItems: 'center', marginTop: 20, width: '100%' },
  logo: { width: 90, height: 90 },
  fab: { position: 'absolute', right: 20, bottom: 25, backgroundColor: '#1d61ff', paddingHorizontal: 20, paddingVertical: 14, borderRadius: 25, flexDirection: 'row', alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 },
  fabText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
});