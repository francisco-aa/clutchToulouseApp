import styled from "styled-components";
import {TouchableOpacity} from "react-native";

const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: ${({direction}) => direction ? direction : 'row'};
  justify-content: ${({justify}) => justify ? justify : 'center'};
  align-items: ${({align}) => align ? align : 'center'};
  position: ${({position}) => position ? position : "relative"};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : 0}px;
`

export const Content = styled.View`
  height: 75%;
  padding: 15px 15px 0px 15px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: white;
`


export default Container