import React, {FC, useEffect, useState} from "react";
import {SearchBarStyle, SearchBarContainer} from "./searchBar.style";
import { FontAwesome } from '@expo/vector-icons';
import {format, isDate} from "date-fns";
import fr from "date-fns/locale/fr";

type TSearchBar = {
    placeholder: string,
    iconRight: {name: string, color: string},
    onSearch: (status: boolean) => any,
    onChange: (value: string) => any,
    currentSearch: string,
}
const SearchBar: FC<TSearchBar> = ({placeholder, iconRight, onSearch, onChange, currentSearch}) => {

    return (

                <SearchBarContainer>
                    <SearchBarStyle value={currentSearch}  onChange={(e) => onChange(e.nativeEvent.text)} placeholder={placeholder.toUpperCase()}/>
                    <FontAwesome onPress={() => onSearch(true)} name={iconRight.name} size={24} color={iconRight.color} />
                </SearchBarContainer>

            )
}

export default SearchBar
