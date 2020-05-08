import React from 'react';

import { Container, Content } from './styles';

export default function Main() {
  return (
    <Container>
      <div className="title-box">
        <h1>Saiba em quanto tempo você se tornaria milionário se conseguisse poupar dinheiro.</h1>
      </div>

      <Content>
        <form>
          <label>Com quanto você quer começar?</label>
          <input type="text" name="start" id="" placeholder="R$ 00,00" />

          <label>Qual o aporte mensal?</label>
          <input type="text" name="start" id="" placeholder="R$ 00,00" />

          <label>Por quanto tempo?</label>
          <input type="text" name="start" id="" placeholder="R$ 00,00" />

          <label>Qual a rentabilidade média esperada?</label>
          <input type="text" name="start" id="" placeholder="R$ 00,00" />

          <button type="submit">Calcular</button>

        </form>
      </Content>
    </Container>
  );
}
