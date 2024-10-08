import React, {useState, useEffect} from  'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';

import Filmes from './src/Filmes/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadfilms(){
      const response = await api.get('r-api/?api=filmes')

      setFilmes(response.data);
    };
    loadfilms();

  }, [])

  return (
    <View style={styles.container}>
      
    <FlatList
    data={filmes}
    keyExtractor={(item) => String(item.id)}
    renderItem={({item}) => <Filmes data={item}/>}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
