import React from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'

export default class AI extends React.Component{
    render(){
        return (
            <View>
                <Text>ActivityIndicator example</Text>
                <ActivityIndicator size="small" color="green" />
                <ActivityIndicator size="large" color="blue" />
            </View>
        )
    }
}