import React, {FC} from "react";
import {MessageStyle, MessageContentStyle, MessageTimestampLeft} from "./message.style";
import Ievent from "../../../redux/slices/Ievent";
import {Text} from "react-native";
import fr from "date-fns/locale/fr"
import {format, getHours, isBefore} from "date-fns";
import {capitalize} from "lodash";
type TMessage = {
    event: Ievent,
    index: number,
}
const Message: FC<TMessage> = ({event, index}) => {
    const whenEventIs = (date) => {
        const hours = getHours(new Date(date))
        if(hours < 18 && hours > 12){
            return 'Cette après-midi'
        }else if (hours < 12){
            return 'Ce matin'
        }else{
            return 'Ce soir'
        }
    }
    return (
    <MessageStyle  index={index}>
        <MessageContentStyle>
            <Text style={{
                color: 'white',
                fontWeight: 'bold'
            }}>
                {capitalize(format(new Date(event.start_date), 'PPPPp', {locale: fr})) }
            </Text>
            <Text style={{
                color: 'white'
            }}>
                {whenEventIs(event.start_date)} {event.name.toUpperCase()} AU {event.location.name.toUpperCase()}
            </Text>
        </MessageContentStyle>
        <MessageTimestampLeft>
        </MessageTimestampLeft>
    </MessageStyle>
    )
}

export default Message