import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import config from '../../../config/config.json'

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

export default function ListarBarbearias() {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [userBarbearia, setBarbearia] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await fetch(`${config.urlRoot}listBarbearia`);
          const data = await response.json();
          setBarbearia(data);
        } catch (error) {
          console.error('Erro ao obter os registros:', error);
        }
      };

      const handleItemPress = (item) => {
        navigation.navigate('DetailsScreen', {  name: item.name,
                                                funcionario: item.funcionario,
                                                endereco: item.endereco,
                                                cortes: item.cortes,
                                                barbearia_id: item.id});
                                                
      };
    
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={{ backgroundColor: '#AE31FF', padding: 10, marginBottom: 8, borderRadius: 8}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff'  }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );

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
                    <View style={{ flex: 1, paddingHorizontal: 16}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, color: '#AE31FF'}}>Barbearias Disponíveis:</Text>
                        <FlatList
                                data={userBarbearia}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id.toString()}
                            />
                    </View>
                </Scroller>
            </Container>
    );
}