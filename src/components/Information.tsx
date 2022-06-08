import React, {FC} from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import Container, {ContainerTouchable} from "./ContainerTouchable";
import styled from "styled-components";

type TInformation = {
    text: string,
    icon: string,
    bold?: boolean,
    underline?: boolean,
    color?: string,
    onPress?: () => any
    isTouchable?: boolean,
    display?: string
}

const TextStyle = styled.Text`
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
  text-decoration: ${({underline}) => underline ? 'underline' : 'none'};
  color: ${({color}) => color ? color : 'black'};
`
const Information: FC<TInformation> = ({text, icon, bold, underline, color, onPress, isTouchable= true, display}) => {
    return (
        <>
            {isTouchable ? (
                <ContainerTouchable display={display} onPress={onPress} position={"relative"} justify={'space-around'} align={'center'} style={{
                    marginTop: 5
                }}>
                    <FontAwesome5 style={{marginRight: 15}} name={icon} size={18} color="black" />
                    <TextStyle bold={bold} underline={underline} color={color}>{text}</TextStyle>
                </ContainerTouchable>
            ) : (
                <Container display={display} onPress={onPress} position={"relative"} justify={'space-around'} align={'center'} style={{
                    marginTop: 5
                }}>
                    <FontAwesome5 style={{marginRight: 15}} name={icon} size={18} color="black" />
                    <TextStyle bold={bold} underline={underline} color={color}>{text}</TextStyle>
                </Container>
            )}
        </>
    )
}

export default Information
