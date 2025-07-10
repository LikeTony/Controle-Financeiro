import React from 'react';

export const GastosContext = React.createContext();

export function GastosProvider(props) {
  const [gastos, setGastos] = React.useState([]);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <GastosContext.Provider value={{ gastos: gastos, adicionarGasto: adicionarGasto }}>
      {props.children}
    </GastosContext.Provider>
  );
}
