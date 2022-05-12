import styled from "styled-components";
import {Image, ImageBackground} from "react-native";

export const HeaderImage = styled(ImageBackground)`
width: 100%;
  display: flex;
  align-items: center;
  height: 40%;
`
export const Content = styled.View`
  height: 70%;
  border-top-right-radius: 50px;
  padding: 15px 15px 0px 15px;
  border-top-left-radius: 50px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: white;
`