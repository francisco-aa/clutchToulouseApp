import React, {FC} from "react";
import {CategoryItemStyle, CategoryName} from "./CategoryItem.style";
import {Text} from "react-native";


type TCategoryItem = {
categoryName: string,
    onPress: (catName: string) => any,
    color: string
}
const CategoryItem: FC<TCategoryItem> = ({categoryName, onPress, color}) => {
    return (
        <CategoryItemStyle color={color} onPress={onPress} >
            <CategoryName>{categoryName}</CategoryName>
        </CategoryItemStyle>
    )
}

export default CategoryItem
