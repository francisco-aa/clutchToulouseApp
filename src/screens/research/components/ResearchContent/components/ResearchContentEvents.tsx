import CardEvent from '../../../../../components/card/CardEvent'
import Ievent from '../../../../../redux/slices/Ievent'
import { map } from 'lodash'
import { FC } from 'react'

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
