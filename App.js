import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Alert,
  Picker
} from 'react-native';

import ActivityIndicatorDemo from './components/activityIndicator'
import ButtonDemo from './components/button'
import DrawerLayoutAndroidDemo from './components/drawerLayoutAndroid'
import FlatListDemo from './components/flatList'
import ImageBackgroundDemo from './components/imageBackground'
import KeyboardAvoidingViewDemo from './components/keyboardAvoidingView'
import ModalDemo from './components/modal'

import styles from './styles/bg'




export default class App extends React.Component {
  render() {
    return (
      <View >
        <PickerDemo />
      </View>
    )
  }
}



const TextDemo = () => {
  return (
    <View>
      <Text style={{ color: 'red', fontSize: 50 }}>
        <Text>my name is Long. </Text>
        <Text>what is your name</Text>
        <Text style={{ color: 'blue' }}>
          <Text>my name is Long</Text>
          <Text>what is your name</Text>
        </Text>
      </Text>
      <Text
        onPress={() => console.log('hi')}
        onLongPress={() => Alert.alert('longPress')}
      >guest this is break new line</Text>
      <Text>it new too</Text>
    </View>
  )
}


const PickerDemo = () => {
  return (
    <Picker style={{
      marginTop: 20,
      height: 200,
      width: '50%',
      backgroundColor: 'orange'
    }}
      onValueChange={(inValue, inIndex) => console.log(inValue, inIndex)}
    >
      <Picker.Item label="James Kirk" value="james_kirk" />
      <Picker.Item label="John Sheridan" value="john_sheridan" />
      <Picker.Item label="Han Solo" value="han_solo" />
      <Picker.Item label="Ahab" value="ahab" />
    </Picker>
  )
}
