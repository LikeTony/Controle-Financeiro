import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Resumo({ gastos }) {
  let receitas = 0;
  let despesas = 0;

  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i].valor > 0) {
      receitas += gastos[i].valor;
    } else {
      despesas += gastos[i].valor;
    }
  }

  let saldo = receitas + despesas;
  let cor = saldo >= 0 ? 'green' : 'red';

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo</Text>
      <Text style={styles.texto}>Receitas: R$ {receitas.toFixed(2)}</Text>
      <Text style={styles.texto}>Despesas: R$ {despesas.toFixed(2)}</Text>
      <Text style={{ color: cor }}>Saldo: R$ {saldo.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    flex: 1,
    backgroundColor: '#1e2021',
  },
  titulo: {
    fontSize: 22, 
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  texto: {
    color: '#FFF',
  },
});
