import React, {FC} from "react";
import {Text} from 'react-native'
import TagStyle from "./tag.style";

type TButton = {
    title: string,
    color: string
}
const Tag: FC<TButton> = ({title, color = 'white'}) => {
    return (
        <TagStyle color={color}>
            <Text style={{
                color
            }}>{title.toUpperCase()}</Text>
        </TagStyle>
    )
}

export default Tag