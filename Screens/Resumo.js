import React, { useContext } from 'react';
import { GastosContext } from '../components/CardGasto';
import Resumo from '../components/ResumoFinanceiro';

export default function TelaResumo() {
  const { gastos } = useContext(GastosContext);

  return <Resumo gastos={gastos} />;
}
