import styled from 'styled-components'

const TagStyle = styled.View`
  border-color: ${({ color }) => color || 'white'};
  padding: 10px;
  margin: 0 15px 0 10px;
  text-transform: capitalize;
  border-width: 1px ;
  color: ${({ color }) => color || 'white'};
`

export default TagStyle
