"use client"

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  height: 100vh;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 2rem;
  background-color: #333;
  color: white;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  padding: 2rem;
  height: 100vh;
  width: 100%;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: beige;
  padding: 2rem;
  height: 100vh;
  width: 100%;
`;

// export const IconImage = styled.div`
//   width: 100px;
//   height: 100px;
//   cursor: pointer;
//   /* background-color: aliceblue; */
//   background-image: url('../assets/images/profile.png');
//   margin: 1rem;
// `;