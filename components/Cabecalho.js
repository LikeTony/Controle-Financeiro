import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Controle Financeiro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#222426',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});