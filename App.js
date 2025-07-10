    import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { GastosProvider } from './components/CardGasto';

import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Tabs from './components/Menu';

export default function App() {
  return (
    <GastosProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Cabecalho />
            <View style={styles.content}>
              <Tabs />
            </View>
            <Rodape />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </GastosProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E2021',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});