import React from "react";
import {Highlight, IconRoundedStyle} from "./locationDetailsScreen.style"

const IconRounded = ({source}) => {
    return (
<>
    <Highlight>
        <IconRoundedStyle source={source}/>
    </Highlight>
</>
    )
}

export default IconRounded