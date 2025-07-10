import React from 'react';
import { Text, StyleSheet, TouchableOpacity }  from 'react-native';

export default function MeuBotao( {title, onPress} ) {
  return(
    <TouchableOpacity style={styles.botao} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#6750A4',
    paddingHorizontal: 24,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

  