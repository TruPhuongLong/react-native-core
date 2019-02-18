import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class B extends React.Component {

    onPressLearnMore(){
        console.log('btn click')
    }

    render() {
        return (
            <View>
                <Text>Button example</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    // color="#841584"
                    // accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}