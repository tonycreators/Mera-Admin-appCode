import React from 'react'
import { Image, View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'

function NoWifi() {
    return (
        <View style={{flex: 1, backgroundColor: '#fff9f4'}}>
                <Image source={require('./assets/wifi4.png')} style={styles.image}/>
                <Text style={styles.heading}>
                    Connection Error!
                </Text>

                <TouchableOpacity>
                    <Text style={styles.button}>
                        Retry
                    </Text>
                </TouchableOpacity>
                    
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        justifyContent: "center",
        alignSelf:'center'
    },
    white: {
        flex: 0.9, 
        backgroundColor: '#fff9f4',
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
    },
    heading: {
        justifyContent: 'center',
        fontSize: 30,
        color: '#000',
        fontWeight: '800',
        alignSelf: 'center',
    },
    button: {
        width: '37%',
        height: '23%',
        backgroundColor: '#0100ab',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 34,
        color: '#fff',
        borderRadius: 50
    }
})

export default NoWifi
