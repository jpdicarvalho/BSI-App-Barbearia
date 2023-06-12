import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    //LoadingIcon,
    //ListArea
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');


    return (
        <Container>
            <Scroller>
                
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#AE31FF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                    placeholder="Onde você está?"
                    placeholderTextColor="#FFFFFF"
                    value={locationText}
                    onChangeText={t=>setLocationText(t)}
                    />
                    <LocationFinder>
                        <MyLocationIcon width="24" height="24" fill="#FFF" />
                    </LocationFinder>
                </LocationArea>

            </Scroller>
        </Container>
    );
}