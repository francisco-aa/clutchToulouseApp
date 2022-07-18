import { Highlight, IconRoundedStyle } from './locationDetailsScreen.style'
import React from 'react'

const IconRounded = ({ source }) => {
  return (
<>
    <Highlight>
        <IconRoundedStyle source={source}/>
    </Highlight>
</>
  )
}

export default IconRounded
