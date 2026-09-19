import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import apiClient from '../api/axiosConfig';
import UsuarioCard from '../components/UsuarioCard';

export default function HomeScreen({ navigation }) {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [refrescando, setRefrescando] = useState(false);

  const cargarUsuarios = async () => {
    try {
      setError(null);
      const respuesta = await apiClient.get('/users');
      setUsuarios(respuesta.data);
    } catch (err) {
      setError('No se pudieron cargar los usuarios. Verifica tu conexión.');
    } finally {
      setCargando(false);
      setRefrescando(false);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const onRefresh = () => {
    setRefrescando(true);
    cargarUsuarios();
  };

  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.textoCargando}>Cargando usuarios...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centrado}>
        <Text style={styles.textoError}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UsuarioCard
            usuario={item}
            onPress={() => navigation.navigate('Detalle', { usuario: item })}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refrescando} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
  },
  textoCargando: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  textoError: {
    color: '#D9534F',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});