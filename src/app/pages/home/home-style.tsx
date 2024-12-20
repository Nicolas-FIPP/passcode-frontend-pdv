"use client"

import styled from "styled-components";
import { PDVIcons } from "@/app/themes/icons";
import { PDVColors } from "@/app/themes/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 1rem;
  background-color: ${PDVColors.mainBlue};
  color: white;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${PDVColors.lightGray};
  padding: 0 0 2rem 0;
  height: 100%;
  width: 100%;
`;

export const InfoListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: ${PDVColors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 60%;
`;

export const InfoValueBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: ${PDVColors.lightGray};
  padding: 1.5rem;
  height: 100%;
  width: 40%;
`;

export const DivIconImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivColumnWithSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const DivRowWithSpace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ProfileIcon = styled(PDVIcons.ProfileIcon)`
  width: 2.5rem;
`;

export const TitleImage = styled(PDVIcons.TitlePdvIcon)`
  width: 4rem;  
`

export const ExitButton = styled.button`
  background-color: ${PDVColors.white};
  color: ${PDVColors.mainBlue};
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${PDVColors.black};
  font-size: large;

  th {
    background-color: ${PDVColors.lightGray};
    padding: 1.5rem;
  }

  td {
    padding: 1.5rem;
  }

  tr:nth-child(even) {
    background-color: ${PDVColors.lightGray};
  }

  tr:nth-child(odd) {
    background-color: ${PDVColors.white};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  label {
    font-size: large;
    color: ${PDVColors.black};
  }

  input {
    height: 40px;
    color: ${PDVColors.black};
    padding: 1.5rem;
    background-color: ${PDVColors.white};
    border: transparent;
    border-radius: 1.2rem;
    font-size: large;
  }
  span {
    font-size: 16px;
    color: #333;
  }
`;