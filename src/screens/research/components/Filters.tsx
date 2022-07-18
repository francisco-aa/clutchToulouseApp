import React, {FC} from "react";
import Container from "../../../components/ContainerTouchable";
import { Fontisto, Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import {useAppSelector} from "../../../redux/hooks";

type TFilters = {
    onChangeFilter: (filter: string) => any
}
const Filters: FC<TFilters> = ({onChangeFilter}) => {

    const currentFilter = useAppSelector(state => state.events.currentFilter)
    return (
        <Container justify={'flex-start'} style={{
            marginTop: 15,
        }}>
            <Fontisto onPress={() => onChangeFilter('place')} style={{
                marginLeft: 20
            }} name="map-marker-alt" size={34} color={currentFilter === 'place' ? '#FA4E74' : "white" } />
            <Ionicons onPress={() => onChangeFilter('calendar')} style={{
                marginLeft: 20
            }} name="md-calendar-sharp" size={34} color={currentFilter === 'calendar' ? '#FA4E74' : "white" } />
            <AntDesign name="staro"  style={{
                marginLeft: 20
            }} size={34}  onPress={() => onChangeFilter('categories')} color={currentFilter === 'categories' ? '#FA4E74' : "white" } />
        </Container>
    )
}

export default Filters
