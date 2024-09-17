import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


export default function Filmes({data}){
    return(
        <View>

            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>

                <Image 
                source={{uri: data.foto}}
                style={styles.foto}
                />
            </View> 

        </View>
    );
};


const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        elevation: 2,
        margin: 15
    },
    titulo:{

    },
    foto:{
        height: 250,
        zIndex: 2
    }
})