import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, StyleSheet } from 'react-native';

import Resumo from '../Screens/Resumo';
import NovosGastos from '../Screens/NovosGastos';
import Historico from '../Screens/HistoricoGastos';
import Perfil from '../Screens/Perfil';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
    >
      <Tab.Screen
        name="Resumo"
        component={Resumo}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icones/resumo.png')}
              style={[styles.icon, focused ? styles.active : styles.inactive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.labelActive : styles.labelInactive}>RESUMO</Text>
          ),
        }}
      />
      <Tab.Screen
        name="NOVOS GASTOS"
        component={NovosGastos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icones/adicionar.png')}
              style={[styles.icon, focused ? styles.active : styles.inactive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.labelActive : styles.labelInactive}>NOVOS</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icones/historico.png')}
              style={[styles.icon, focused ? styles.active : styles.inactive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.labelActive : styles.labelInactive}>HISTÓRICO</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icones/perfil.png')}
              style={[styles.icon, focused ? styles.active : styles.inactive]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.labelActive : styles.labelInactive}>PERFIL</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: '#181a1b',
    borderColor: '#3b4042',
  },
  icon: {
    width: 24,
    height: 24,
  },
  active: {
    tintColor: '#6750A4',
  },
  inactive: {
    tintColor: '#9E9E9E',
  },
  labelActive: {
    color: '#6750A4',
    fontSize: 10,
    fontWeight: 'bold',
  },
  labelInactive: {
    color: '#9E9E9E',
    fontSize: 10,
  },
});
