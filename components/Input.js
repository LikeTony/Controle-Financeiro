import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input( {placeholder, keyboardType, value, onChangeText} ){
  return(
    <TextInput 
    style={styles.inputPers} 
    keyboardType={keyboardType} 
    placeholder={placeholder}
    placeholderTextColor="#878787"
    value={value}
    onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  inputPers: {
    width: '90%',
    height: 48,
    backgroundColor: '#26292b',
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#878787',
    borderRadius: 8,
  }
});
