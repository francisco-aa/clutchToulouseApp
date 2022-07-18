import styled from 'styled-components'
import { Image } from 'react-native'

export const IconRoundedStyle = styled(Image)`
  border-radius: 75px;
  width: 150px;
  height: 150px;
  background-color: white;
`

export const Highlight = styled.View`
  width: 165px;
  height: 165px;
  position: absolute;
  top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 85px;
  background-color: white;
`

export const Content = styled.View`
  background-color: white;
  padding: 0 20px 60px 20px;
  height: 60%
`
