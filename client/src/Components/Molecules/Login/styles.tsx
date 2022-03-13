import styled from "styled-components";

const LoginLogo = styled.div`
  background-image: url("/assets/Items/Logo.png");
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 50%;
`;

const InputContainer = styled.div`
  padding: 90px 30px;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/asset/Login/loginL.png");
  background-repeat: no-repeat;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/asset/Login/loginR.png");
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  position: relative;
  display: inline-block;
  color: #0c218b;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin: 6px 0 16px;
`;

export { LoginLogo, Container, Left, Right, Title, InputContainer };
