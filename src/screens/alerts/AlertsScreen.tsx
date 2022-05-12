import React from "react";
import {useAppSelector} from "../../redux/hooks";
import {map, sortBy} from "lodash";
import ScreenWrapper from "../style/ScreenWrapper";
import Message from "../style/message/Message";
import HeaderIcons from "../style/headers/HeadersIcons";
import TitleWithImage from "../style/title/titleWithImage/TitleWithImage";
import {MessageContainer} from "../style/message/message.style";
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