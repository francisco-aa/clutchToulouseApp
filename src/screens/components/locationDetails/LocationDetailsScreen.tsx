import {HeaderImage} from "../eventDetails/eventDetailsScreen.style"
import Container from '../../../components/ContainerTouchable'
import Information from "../../../components/Information"
import {useNavigation} from "@react-navigation/native"
import {Content} from "./locationDetailsScreen.style"
import {useAppSelector} from "../../../redux/hooks"
import Title from "../../../components/title/Title"
import NextEvents from "./components/NextEvents"
import {ScrollView, Text} from "react-native"
import Tag from "../../../components/tag/Tag"
import {Ionicons} from "@expo/vector-icons"
import IconRounded from "./IconRounded"
import {map} from "lodash"
import React from "react"

const LocationDetailsScreen = () => {
    const navigation = useNavigation()
    const location = useAppSelector(state => state.events.selectedEvent?.location)
    return (
        <>
            <HeaderImage source={{uri: `https://clutchmag.fr/images/locations/${location?.image}`}}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back-circle-outline" size={40}
                          color="white" style={{
                    position: 'absolute',
                    top: 60,
                    left: 20,
                }}/>
            </HeaderImage>
            <Content>
                <Container justify={'center'}>
                    <IconRounded source={{uri: `https://clutchmag.fr/images/locations/${location?.image}`}}/>
                </Container>
                <Title title={location?.name} marginTop={100} size={20} marginBottom={20}/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Container justify={'space-around'} >
                        {location?.tags && map(location.tags, (tag, key) => (
                            <Tag title={tag} color={'#625A96'} key={key}/>
                        ))}
                    </Container>
                    <Container style={{
                        marginTop: 30
                    }} direction={'column'} align={'flex-start'}>
                        <Information
                            text={location.business_hours}
                            icon={'clock'}
                            display={location.business_hours ? 'flex' : 'none'}/>
                        <Information
                            text={location.street_name}
                            icon={'map-marker-alt'}
                            display={`${location.street_name}`.length < 4 ? 'none' : 'flex'}/>
                        <Information
                            text={location.phone}
                            icon={'phone'}
                            display={location.phone ? 'flex' : 'none'}/>
                        <Information
                            text={location.website}
                            icon={'link'}
                            display={location.website ? 'flex' : 'none'}/>
                    </Container>
                    <Container style={{
                        marginTop: 30
                    }} >
                        <Text>{location.content}</Text>
                    </Container>
                    <Title title={"LES PROCHAINS EVENEMENTS DANS CE LIEU"} color={"#085066"} marginTop={20} size={15} marginBottom={0}/>
                    <NextEvents locationId={location["@id"]}/>
                </ScrollView>
            </Content>
        </>
    )
}

export default LocationDetailsScreen
