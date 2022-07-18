import React, { FC } from 'react'
import Ievent from '../../../../../redux/slices/Ievent'
import { map } from 'lodash'
import CardEvent from '../../../../../components/card/CardEvent'

type TResearchContentEvents = {
    events: Ievent[] | undefined
}
const ResearchContentEvents: FC<TResearchContentEvents> = ({ events }) => {
  return (

      <>
          {events && map(events, (event, index) => (
              <CardEvent event={event} key={index} tags={event.tags} color={'#625A96'} marginTop={10}/>
          ))}
      </>
  )
}

export default ResearchContentEvents
