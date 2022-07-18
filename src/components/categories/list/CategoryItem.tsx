import { CategoryItemStyle, CategoryName } from './CategoryItem.style'
import React, { FC } from 'react'

type TCategoryItem = {
categoryName: string,
    onPress: (catName: string) => any,
    color: string
}
const CategoryItem: FC<TCategoryItem> = ({ categoryName, onPress, color }) => {
  return (
      <CategoryItemStyle color={color} onPress={onPress} >
          <CategoryName>{categoryName}</CategoryName>
      </CategoryItemStyle>
  )
}

export default CategoryItem
