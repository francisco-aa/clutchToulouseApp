import AppLoading from 'expo-app-loading'
import TitleStyle from './titleStyle'
import { useFonts } from 'expo-font'
import React, { FC } from 'react'

type TTitle = {
    title: string,
    marginTop: number,
    weight?: string,
    transform?: 'uppercase' | 'lowercase',
    align?: string,
    size: number,
    color?: string,
    marginBottom: number
}
const Title: FC<TTitle> = ({ title, marginTop, weight, transform, align, size, color, marginBottom }) => {
  const [fontsLoaded] = useFonts({
    Popins: require('../../../assets/fonts/Poppins-Bold.otf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
            <TitleStyle style={{
              marginTop,
              marginBottom
            }} font={'Popins'} align={align} weight={weight} transform={transform} size={size} color={color}>
                {title}
            </TitleStyle>
    )
  }
}

export default Title
