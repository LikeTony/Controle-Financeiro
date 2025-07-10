import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Antônio MR Silva</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 40,
    backgroundColor: '#1d2021',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#3b4042',
    borderTopWidth: 1,
  },
  text: {
    fontSize: 12,
    color: '#9d9488',
  },
});
