import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetalleScreen({ route }) {
  const { usuario } = route.params;

  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <View style={styles.avatarGrande}>
          <Text style={styles.avatarTexto}>
            {usuario.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.nombre}>{usuario.name}</Text>
        <Text style={styles.username}>@{usuario.username}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>📧 Contacto</Text>
        <Text style={styles.dato}>Correo: {usuario.email}</Text>
        <Text style={styles.dato}>Teléfono: {usuario.phone}</Text>
        <Text style={styles.dato}>Sitio web: {usuario.website}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>🏠 Dirección</Text>
        <Text style={styles.dato}>Calle: {usuario.address.street}</Text>
        <Text style={styles.dato}>Suite: {usuario.address.suite}</Text>
        <Text style={styles.dato}>Ciudad: {usuario.address.city}</Text>
        <Text style={styles.dato}>Código postal: {usuario.address.zipcode}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>🏢 Empresa</Text>
        <Text style={styles.dato}>Nombre: {usuario.company.name}</Text>
        <Text style={styles.dato}>Eslogan: {usuario.company.catchPhrase}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  encabezado: {
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatarGrande: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarTexto: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 14,
    color: '#EAF2FB',
    marginTop: 4,
  },
  seccion: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  dato: {
    fontSize: 14,
    color: '#555',
    marginVertical: 3,
  },
});