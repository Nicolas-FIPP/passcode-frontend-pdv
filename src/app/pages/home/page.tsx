import { PDVIcons } from "@/app/themes/icons";
import styles from "../../page.module.css";

import { Container, DivColumnWithSpace, DivIconImage, DivRowWithSpace, ExitButton, FormContainer, InfoListBlock, InfoValueBlock, InputGroup, MainBlock, NavBar, ProfileIcon, StyledTable, TitleImage } from "./home-style";

export default function Home() {
  return (
    <Container> 
      <NavBar>
        <DivIconImage>
          <TitleImage/>
        </DivIconImage>
        <DivColumnWithSpace>
          <DivIconImage>
            <ProfileIcon/>
          </DivIconImage>
          <ExitButton>
            Sair
          </ExitButton>
        </DivColumnWithSpace>
      </NavBar>
      <MainBlock>
        <InfoListBlock>
          <StyledTable>
            <thead>
              <tr>
                <th align="center">QTD</th>
                <th align="left">Produto</th>
                <th align="center">Vl. Unit</th>
                <th align="left">Total Produto</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index}>
                  <td align="center">1</td>
                  <td align="left">CAMISINHA TAMANHO PP EREC...</td>
                  <td align="center">1</td>
                  <td align="left">R$ 10,00</td>
                  <td align="center"></td>
                </tr>
                ))}
            </tbody>
          </StyledTable>
        </InfoListBlock>
        <InfoValueBlock>
          <FormContainer>
            <InputGroup>
              <label>Ṕroduto</label>
              <input type="text" placeholder="Código de barras ou nome do produto" />
            </InputGroup>
            <DivRowWithSpace>
                <InputGroup>
                <label>Quantidade</label>
                <input type="number" placeholder="0" style={{ textAlign: 'center' }} />
                </InputGroup>
              <InputGroup>
                <label>Valor Unitário</label>
                <input type="number" placeholder="0,00" style={{ textAlign: 'center' }} />
              </InputGroup>
            </DivRowWithSpace>
            <InputGroup>
              <label>Desconto</label>
              <input type="text" placeholder="0,00" />
            </InputGroup>
            <InputGroup>
              <label>Total</label>
              <input type="text" placeholder="0,00" />
            </InputGroup>
          </FormContainer>
        </InfoValueBlock>
      </MainBlock>
    </Container>
  );
}
