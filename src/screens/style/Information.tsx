import React, {FC} from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import Container from "./Container";
import styled from "styled-components";

type TInformation = {
    text: string,
    icon: string,
    bold?: boolean,
    underline?: boolean,
    onPress?: () => any
}

const TextStyle = styled.Text`
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
  text-decoration: ${({underline}) => underline ? 'underline' : 'none'};
`
const Information: FC<TInformation> = ({text, icon, bold, underline, onPress}) => {
    return (
        <Container onPress={onPress} position={"relative"} justify={'space-around'} align={'center'} style={{
            marginTop: 5
        }}>
            <FontAwesome5 style={{
                marginRight: 15
            }} name={icon} size={18} color="black" />
        <TextStyle bold={bold} underline={underline}>{text}</TextStyle>
        </Container>
    )
}

export default Information