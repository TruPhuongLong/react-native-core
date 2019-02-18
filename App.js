import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import ActivityIndicatorDemo from './components/activityIndicator'
import ButtonDemo from './components/button'
import DrawerLayoutAndroidDemo from './components/drawerLayoutAndroid'
import FlatListDemo from './components/flatList'

export default class App extends React.Component {

  //DrawerLayoutAndroid
  // render() {
  //   const navigationView = (
  //     <View style={{ flex: 1, backgroundColor: '#fff' }}>
  //       <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
  //     </View>
  //   );
  //   return (
  //     <DrawerLayoutAndroid
  //       drawerWidth={300}
  //       drawerPosition={DrawerLayoutAndroid.positions.Left}
  //       renderNavigationView={() => navigationView}>
  //       <View style={{ flex: 1, alignItems: 'center' }}>
  //         <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
  //         <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
  //       </View>
  //     </DrawerLayoutAndroid>
  //   );
  // }



  //normal:
  render(){
    return(
      <View>
        <FlatListDemo data={[{key: 0, id: 0}, {key: 1, id: 1}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
