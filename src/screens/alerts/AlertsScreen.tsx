import React from "react";
import {useAppSelector} from "../../redux/hooks";
import {map, sortBy} from "lodash";
import ScreenWrapper from "../../components/ScreenWrapper";
import Message from "../../components/message/Message";
import HeaderIcons from "../../components/headers/HeadersIcons";
import TitleWithImage from "../../components/title/titleWithImage/TitleWithImage";
import {MessageContainer} from "../../components/message/message.style";
import {ScrollView} from "react-native";
const AlertsScreen = () => {

    const alerts = useAppSelector(state => state.alerts.alerts)
    return (
        <ScreenWrapper>
            <ScrollView style={{marginBottom: 40}} showsVerticalScrollIndicator={false}>

            <HeaderIcons/>

            <TitleWithImage title={"ALERTES"} image={require("../../../assets/images/clutch/Clutch_signature.png")}/>
                {sortBy(alerts, event => new Date(event.start_date)).map((event, index) => (
                    <MessageContainer index={index} key={index} >
                        <Message index={index}  event={event}/>
                    </MessageContainer>
                ))}
            </ScrollView>

        </ScreenWrapper>
    )
}

export default AlertsScreen
