import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content } from './styles';

export default function Main() {
  const [result, setResult] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [resultIsVisible, setResultIsVisible] = useState(false);

  const numberFormat = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };

  function handleSubmit(data) {
    const { start, monthly, time, rentability } = data;
    const schema = Yup.object().shape({
      time: Yup.number().required(),
      rentability: Yup.number(),
    });

    // schema
    //   .validate(data, {
    //     abortEarly: false,
    //   })
    //   .catch(console.log('err'));

    // if (schema.isValid(data)) {
    //   console.log('entrei1');
    // } else {
    //   setResultIsVisible(false);
    //   console.log('entrei2');
    // }

    // schema.isValid(data).then(valid => {
    //   console.log('oi');
    // });

    setResultIsVisible(true);
    const adjustedRentability = Number(rentability) / 100;

    const futureValueWithoutMonthly = parseFloat(
      start * (1 + adjustedRentability) ** time
    );
    const monthlyValue = parseFloat(
      (monthly * ((1 + adjustedRentability) ** time - 1)) / adjustedRentability
    );

    setResult(parseFloat(futureValueWithoutMonthly + monthlyValue));
    setTotalInvested(parseFloat(Number(start) + Number(monthly) * time));

    setEarnings(
      parseFloat(futureValueWithoutMonthly + monthlyValue) -
        parseFloat(Number(start) + Number(monthly) * time)
    );
  }

  const opacityProps = useSpring({
    opacity: resultIsVisible ? 1 : 0,
  });

  return (
    <Container>
      <div className="title-box">
        <h1>
          Saiba em quanto tempo você se tornaria
          <br /> milionário se conseguisse poupar dinheiro.
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

          <label htmlFor="time">Por quantos meses?</label>
          <Input
            type="number"
            name="time"
            id="time"
            placeholder="120"
            autoComplete="off"
          />

          <label htmlFor="rentability">
            Qual a rentabilidade média esperada ao mês?
          </label>
          <Input
            type="number"
            pattern="[0-9]+([,\.][0-9]+)?"
            min="0"
            step="0.1"
            name="rentability"
            id="rentability"
            placeholder="0,7 %"
            autoComplete="off"
          />

          <button type="submit">Calcular</button>
        </Form>

        <animated.div className="result" style={opacityProps}>
          <h1>
            Valor Investido:{' '}
            {totalInvested.toLocaleString('pt-BR', numberFormat)}
          </h1>
          <h1>
            Recebido em Juros Compostos:
            {earnings.toLocaleString('pt-BR', numberFormat)}
          </h1>
          <h1>Resultado {result.toLocaleString('pt-BR', numberFormat)}</h1>
        </animated.div>
      </Content>
    </Container>
  );
}
