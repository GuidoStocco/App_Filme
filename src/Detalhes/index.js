import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



export default function Detalhes(props){
    return(
        <View style={styles.container}>
            
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={props.voltar}>
                    <Text style={styles.botaoModal}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.tituloModal}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.sinopseText}>{props.filme.sinopse}</Text>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 10,
        marginRight: 10

    },
    modalContainer:{
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5   
    
    },
    botaoModal:{
        color: '#fff',
        fontSize: 16,
    },
    botaoVoltar:{
        backgroundColor: '#e52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5   
    },
    tituloModal:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 10
    },
    sinopse:{
        color: '#fff',
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 10
    },
    sinopseText:{
        color:"#fff",
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
    }
})