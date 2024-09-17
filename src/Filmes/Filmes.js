import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button} from 'react-native';

import Detalhes from '../Detalhes/index'

export default function Filmes({data}){

    const [visibleModal, setVisibleModal] = useState(false)

    return(
        <View>

            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>

                <Image 
                source={{uri: data.foto}}
                style={styles.foto}
                />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.tituloBotao}>LEIA MAIS!</Text>
                    </TouchableOpacity>
                </View>

            </View> 

            <Modal visible={visibleModal} animationType='slide' transparent={true}>
                <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
            </Modal>

        </View>
    );
};


const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        elevation: 2,
        margin: 15,
    },
    titulo:{
        padding: 15,
        fontSize: 18,
        textAlign: 'center'
    },
    foto:{
        height: 250,
        zIndex: 2
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 3
    },
    botao:{
        backgroundColor: '#09a6ff',
        padding: 8,
        opacity: 1,
        borderTopLeftRadius: 5,
        borderBottomLeft: 5,
        width: 100
    },
    tituloBotao:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})