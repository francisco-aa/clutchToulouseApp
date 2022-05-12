import React, {useEffect, useState} from "react";
import CardEvent from "../../../style/card/CardEvent";
import {useGetAllEventsQuery} from "../../../../api/events.service.";
import {filter, map} from "lodash";
import Ievent from "../../../../redux/slices/Ievent";

const NextEvents = ({locationId}) => {

    const {data} = useGetAllEventsQuery()
    const [dataFiltered, setDataFiletred] = useState<Ievent[] | null>(null)


    useEffect(() => {
        if (data){
            const updatedData = filter(data, event => event.location["@id"] === locationId)
            setDataFiletred(updatedData)
        }
    }, [data])
    return (
        <>
            {dataFiltered && map(dataFiltered, (event, index) => (
                <CardEvent key={index} color={"#FA4E74"} event={event} marginTop={10}/>

            ))}
        </>
    )
}

export default NextEvents