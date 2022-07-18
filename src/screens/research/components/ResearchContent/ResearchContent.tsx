import ResearchContentEvents from './components/ResearchContentEvents'
import Loading from '../../../../components/loading/Loading'
import { TGetDataError } from '../../../../redux/store'
import Ievent from '../../../../redux/slices/Ievent'
import { Text } from 'react-native'
import React, { FC } from 'react'
import { isEmpty } from 'lodash'

type TResearchContent = {
  error: TGetDataError,
  data: Ievent[] | undefined,
  isLoading: boolean
}

const ResearchContent: FC<TResearchContent> = ({ error, data, isLoading }) => {
  if (error) {
    return (
      <Text>Une erreur est survenue</Text>
    )
  }

  if (isLoading) {
    return (
      <Loading color={'#625A96'}/>
    )
  }

  // si pas d'events
  if (!data || isEmpty(data)) {
    return (
      <Text>Désolé, aucun évènement ne correspond à votre recherche</Text>
    )
  }

  return (
    <ResearchContentEvents events={data} />
  )
}

export default ResearchContent
