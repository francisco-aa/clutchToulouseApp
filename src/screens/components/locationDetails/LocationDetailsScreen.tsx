import { Content, IconRoundedStyle } from './locationDetailsScreen.style'
import { HeaderImage } from '../eventDetails/eventDetailsScreen.style'
import Container from '../../../components/ContainerTouchable'
import Information from '../../../components/Information'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../../../redux/hooks'
import Title from '../../../components/title/Title'
// import NextEvents from './components/NextEvents'
import { ScrollView, Text } from 'react-native'
import Tag from '../../../components/tag/Tag'
import { Ionicons } from '@expo/vector-icons'
import { map } from 'lodash'

const LocationDetailsScreen = () => {
  const navigation = useNavigation()
  const location = useAppSelector(state => state.events.selectedEvent?.location)
  const texture6 = require('../../../../assets/images/Textures/TEXTURE6.png')
  const icon = require('../../../../assets/icon.png')
  const bGImage = (imagePath: string) => location?.image === null || location?.image === 'clutch.gif'
    ? imagePath
    : { uri: `https://clutchmag.fr/images/locations/${location?.image}` }
  return (
    <>
      <HeaderImage source={bGImage(texture6)}>
        <Ionicons onPress={() => navigation.goBack()} name="chevron-back-circle-outline" size={40}
          color="white" style={{
            position: 'absolute',
            top: 60,
            left: 20
          }}/>
      </HeaderImage>
      <Content>
        <Container justify={'center'}>
          <IconRoundedStyle source={bGImage(icon)}/>
        </Container>
        <Title title={location !== undefined && location !== null ? location!.name : ''} marginTop={100} size={20} marginBottom={20}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Container justify={'space-around'} align={'center'}>
              {location?.tags && map(location.tags, (tag, key) => (
                <Tag title={tag} color={'#625A96'} key={key}/>
              ))}
            </Container>
          </ScrollView>
          <Container style={{ marginTop: 30 }} direction={'column'} align={'flex-start'}>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.business_hours : ''}
              icon={'clock'}
              display={location!.business_hours ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.street_name : ''}
              icon={'map-marker-alt'}
              display={`${location!.street_name}`.length < 4 ? 'none' : 'flex'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.phone : ''}
              icon={'phone'}
              display={location!.phone ? 'flex' : 'none'}/>
            <Information isTouchable={false}
              text={location !== undefined && location !== null ? location!.website : ''}
              icon={'link'}
              display={location!.website ? 'flex' : 'none'}/>
          </Container>
          <Container style={{ marginTop: 30 }} >
            <Text>{location !== undefined && location !== null ? location!.content : ''}</Text>
          </Container>
          {/* <Title title={'LES PROCHAINS EVENEMENTS DANS CE LIEU'} color={'#085066'} marginTop={20} size={15} marginBottom={0}/> */}
          {/* <NextEvents locationId={location !== undefined && location !== null ? location!['@id'] : ''}/> */}
        </ScrollView>
      </Content>
    </>
  )
}

export default LocationDetailsScreen
