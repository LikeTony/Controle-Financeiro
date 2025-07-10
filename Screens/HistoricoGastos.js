import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { GastosContext } from '../components/CardGasto';

export default function HistoricoGastosScreen() {
  const contexto = useContext(GastosContext);

  return (
    <View style={styles.container}>
      {contexto.gastos.length == 0 ? (
        <Text style={styles.aviso}>Sem gastos</Text>
      ) : (
        <FlatList
          data={contexto.gastos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.gastoBox, { backgroundColor: item.tipo === 'ganho' ? 'lightgreen' : 'pink' }]}>
              <Text style={styles.txt}>{item.descricao}</Text>
              <Text style={styles.txt}>R$ {item.valor}</Text>
              <Text style={styles.txt}>{item.categoria}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#333',
    flex: 1,
  },
  aviso: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
  gastoBox: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
  },
  txt: {
    color: '#000',
  },
});
