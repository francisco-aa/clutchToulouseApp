import { AntDesign, Feather } from '@expo/vector-icons'
import Container from '../ContainerTouchable'
import React from 'react'

const HeaderIcons = () => {
  return (
        <Container style={{
          marginTop: 20
        }} justify={'space-between'}>
            <AntDesign onPress={() => {
              // TODO: revoir l'implémentation
              // navigation.navigate(Eroutes.ALERTS_SCREEN)
            }} name="heart" size={30} color="black" />
            <Feather name="settings" size={30} color="black" />
        </Container>
  )
}

export default HeaderIcons
