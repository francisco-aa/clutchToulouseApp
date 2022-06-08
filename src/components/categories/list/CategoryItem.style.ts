import styled from "styled-components";
import {TouchableOpacity} from "react-native";

export const CategoryItemStyle = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  padding: 25px 10px;
  margin-top: 20px;
`
export const CategoryName = styled.Text`
color: white;
  text-transform: uppercase;
  font-weight: bold;
`
