import { Highlight, IconRoundedStyle } from './locationDetailsScreen.style'

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
