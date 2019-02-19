import React from 'react'
import {
    View,
    Text,
    Button,
    ImageBackground,
} from 'react-native'

export default class Com extends React.Component {


    render() {
        return (
            <ImageBackground source={require('../assets/anton-exterior.jpg')} style={{width: '100%', height: '100%'}}>
                <View>
                    <Text>ImageBackground example</Text>

                </View>
            </ImageBackground>

        )
    }
}