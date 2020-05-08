import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { Container, Content } from './styles';

export default function Main() {
  const [result, setResult] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [earnings, setEarnings] = useState(0);

  function handleSubmit(data) {
    const { start, monthly, time, rentability } = data;
    const adjustedRentability = Number(rentability) / 100;

    const futureValueWithoutMonthly = parseFloat(
      start * (1 + adjustedRentability) ** time
    );
    const monthlyValue = parseFloat(
      (monthly * ((1 + adjustedRentability) ** time - 1)) / adjustedRentability
    );

    setResult(
      parseFloat((futureValueWithoutMonthly + monthlyValue).toFixed(2))
    );
  }

  return (
    <Container>
      <div className="title-box">
        <h1>
          Saiba em quanto tempo você se tornaria milionário se conseguisse
          poupar dinheiro.
        </h1>
      </div>
      <Content>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="start">Com quanto você quer começar?</label>
          <Input
            type="number"
            name="start"
            id="start"
            placeholder="R$ 00,00"
            autoComplete="off"
          />

          <label htmlFor="monthly">Qual o aporte mensal?</label>
          <Input
            type="number"
            name="monthly"
            id="monthly"
            placeholder="R$ 00,00"
            autoComplete="off"
          />

          <label htmlFor="time">Por quanto tempo?</label>
          <Input
            type="number"
            name="time"
            id="time"
            placeholder="R$ 00,00"
            autoComplete="off"
          />

          <label htmlFor="rentability">
            Qual a rentabilidade média esperada ao ano?
          </label>
          <Input
            // type="number"
            name="rentability"
            id="rentability"
            placeholder="3 %"
            autoComplete="off"
          />

          <button type="submit">Calcular</button>
        </Form>

        <h1>Resultado {result}</h1>
      </Content>
    </Container>
  );
}
