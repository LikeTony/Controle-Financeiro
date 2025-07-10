import React from 'react';
import { View, StyleSheet } from 'react-native';
import MeuBotao from '../components/Botao';
import Input from '../components/Input';
import { GastosContext } from '../components/CardGasto';

export default function NovosGastosScreen({ navigation }) {
  const contexto = React.useContext(GastosContext);
  const [texto, setTexto] = React.useState('');
  const [valor, setValor] = React.useState('');
  const [categoria, setCategoria] = React.useState('');

  function handleAdicionarGasto() {
    if (texto == '' || valor == '' || categoria == '') {
      return;
    }

    let novoGasto = {
      id: Math.floor(Math.random() * 100000),
      descricao: texto,
      valor: Number(valor),
      categoria: categoria,
      tipo: valor > 0 ? 'ganho' : 'perda',
    };

    contexto.adicionarGasto(novoGasto);
    navigation.navigate('Historico');

    setTexto('');
    setValor('');
    setCategoria('');
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Digite a descrição aqui"
        keyboardType="default"
        value={texto}
        onChangeText={(t) => setTexto(t)}
      />
      <Input
        placeholder="Digite o valor aqui"
        keyboardType="numeric"
        value={valor}
        onChangeText={(v) => setValor(v)}
      />
      <Input
        placeholder="Digite a categoria aqui"
        keyboardType="default"
        value={categoria}
        onChangeText={(c) => setCategoria(c)}
      />
      <MeuBotao title="ENVIAR" onPress={handleAdicionarGasto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e2021',
    padding: 0,
  }
});
