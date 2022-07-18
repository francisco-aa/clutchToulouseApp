import { Highlight, IconRoundedStyle } from './locationDetailsScreen.style'
import React from 'react'

const IconRounded = (source: any) => {
  return (
<>
    <Highlight>
        <IconRoundedStyle source={source}/>
    </Highlight>
</>
  )
}

export default IconRounded
