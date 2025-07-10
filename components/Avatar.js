import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Perfil() {
  const nome = 'Antônio MR Silva';
  const email = 'antonio.matheus@aluno.ifsp.edu.br';
  const copy = '© 2025 Antônio MR Silva'

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icones/avatar.png')}
        style={styles.foto}
      />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.copy}>{copy}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2021',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  copy: {
    fontSize: 16,
    color: '#9d9488',
    marginBottom: 20,
  }
});
