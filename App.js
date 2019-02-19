import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Alert,
  Picker,
  Slider,
  Switch,
  FlatList,
  SectionList,
  Modal,
  TouchableHighlight,
  WebView,
  DatePickerAndroid,
  Button,
  TimePickerAndroid,
  ViewPagerAndroid,
  AppState,
  BackHandler,
  Clipboard
} from 'react-native';

import ActivityIndicatorDemo from './components/activityIndicator'
import ButtonDemo from './components/button'
import DrawerLayoutAndroidDemo from './components/drawerLayoutAndroid'
import FlatListDemo from './components/flatList'
import ImageBackgroundDemo from './components/imageBackground'
import KeyboardAvoidingViewDemo from './components/keyboardAvoidingView'
import ModalDemo from './components/modal'

import styles from './styles/bg'


//

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <ClipboardDemo />
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


const SliderDemo = () => {
  return (
    <Slider style={{ width: "75%", height: 100 }} step={1} minimumValue={0}
      maximumValue={84}
      onValueChange={inValue => console.log(inValue)}
    />
  )
}


const SwitchDemo = () => {//
  return (
    <Switch style={{ width: '50%', }}
      tintColor={'red'}
      thumbColor={'black'}
      onValueChange={(inValue) => console.log(inValue)}
    />
  )
}


const _FlatListDemo = () => {
  return (
    <FlatList style={{ height: 80 }}
      data={[
        { key: "1", text: "Dream Theater" }, { key: "2", text: "Enchant" },
        { key: "3", text: "Fates Warning" }, { key: "4", text: "Kamelot" },
        { key: "5", text: "Pyramaze" }, { key: "6", text: "Rush" },
        { key: "7", text: "Serenity" }, { key: "8", text: "Shadow Gallery" },
        { key: "9", text: "Pink Floyd" }, { key: "10", text: "Queensryche" }
      ]}
      renderItem={({ item }) => <Text>{item.text}</Text>}
    />
  )
}


const SectionListDemo = () => {
  return (
    <SectionList style={{ height: 100, borderWidth: 1, padding: 20 }}
      renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{
          backgroundColor: "#e0e0e0", fontWeight: "bold"
        }}>{title}</Text>
      )}
      sections={sciFiCharacters} keyExtractor={(inItem, inIndex) => inItem +
        inIndex}
    />
  )
}

const sciFiCharacters = [
  {
    title: "Babylon 5",
    data: ["John Sheridan", "Michael Garibaldi", "Stephen Franklin", "Jeffrey Sinclair"]
  },
  {
    title: "Star Trek",
    data: ["James Kirk", "Leonard McCoy", "Hikaru Sulu", "Pavel Chekov"]
  },
  {
    title: "Star Wars",
    data: ["Han Solo", "Luke Skywalker", "LeiaOrgana"]
  },
  {
    title: "Battlestar Galactica",
    data: ["Kara Thrace", "Gaius Baltar", "William Adama", "Laura Roslin"]
  }
];


class _ModalDemo extends React.Component {

  state = {
    modalVisible: false
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            this.setState({ modalVisible: true })
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Modal animationType="fade" transparent={false}
          visible={this.state.modalVisible} presentationStyle="formSheet"
          onRequestClose={() => { console.log("onRequestClose"); }}
        >
          <View style={{ marginTop: 100, flex: 1, alignItems: "center" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>I am a modal. Ain't I cool??</Text>
              <TouchableHighlight style={{ marginTop: 100 }}
                onPress={() => { this.setState({ modalVisible: false }); }}
              ><Text>Tap me to hide modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}


const DatePickerAndroidDemo = () => {
  return (
    <Button title="Open DatePickerAndroid"
      onPress={async () => {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: new Date()
        });
        if (action === DatePickerAndroid.dateSetAction) {
          console.log(year + " " + month + " " + day);
        }
        if (action === DatePickerAndroid.dismissedAction) {
          console.log("Dismissed");
        }
      }}
    />
  )
}



const TimePickerAndroidDemo = () => {
  return (
    <Button title="Open TimePickerAndroid"
      onPress={async () => {
        const { action, hour, minute } = await TimePickerAndroid.open({
          hour: 16, minute: 30, is24Hour: false
        });
        if (action === TimePickerAndroid.timeSetAction) {
          console.log(hour + ":" + minute);
        }
        if (action === TimePickerAndroid.dismissedAction) {
          console.log("Dismissed");
        }
      }}
    />
  )
}


const styles1 = StyleSheet.create(
  {
    viewPager: {
      flex: 1
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    }
  }
)

const ViewPagerAndroidDemo = () => {

  return (
    <ViewPagerAndroid
      style={styles1.viewPager}
      initialPage={0}>
      <View style={styles1.pageStyle} key="1">
        <Text>First page</Text>
      </View>
      <View style={styles1.pageStyle} key="2">
        <Text>Second page</Text>
      </View>
    </ViewPagerAndroid>
  )
}



// not work
class AccessibilityInfoDemo extends React.Component {


  state = { isEnabled: false, };
  componentDidMount() {
    AccessibilityInfo.addEventListener("change", this.toggleState);
    AccessibilityInfo.fetch().done((isEnabled) => {
      this.setState({ isEnabled: isEnabled, });
    });
  }


  componentWillUnmount() {
    AccessibilityInfo.removeEventListener("change", this.toggleState);
  }
  toggleState = (isEnabled) => {
    this.setState({ isEnabled: isEnabled });
  };
  render() {
    return (
      <View>
        <Text>
          The screen reader is{" "}
          {this.state.isEnabled ? "enabled" : "disabled"}.
        </Text>
      </View>
    );
  }
}



const AlertDemo = () => {
  return (
    <View>
      <Button onPress={() => {
        Alert.alert("Greetings, human!",
          "You know just how to push my buttons!",
          [{ text: "OK khong" }], { cancelable: false }
        )
      }}
        title="show alert"
      />
    </View>
  )
}



class AppStateExample extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
  };

  render() {
    return <Text>Current state is: {this.state.appState}</Text>;
  }
}



class BackHandlerDemo extends Component{
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    console.log('BackHandlerDemo run')
    this.goBack(); // works best when the goBack is async, 
    return true;
  }
  render(){
    return(
      <View>
        <Text>BackHandlerDemo</Text>
      </View>
    )
  }
}



const ClipboardDemo = () => {
  return(
    <View>
      <Text onPress={() => {
        console.log('da copy')
        Clipboard.setString('https://google.com')
      }}>https://google.com</Text>
    </View>
  )
}