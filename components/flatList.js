import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Platform
} from 'react-native'


// class MyListItem extends React.PureComponent {
//     _onPress = () => {
//         this.props.onPressItem(this.props.id);
//     };

//     render() {
//         const textColor = this.props.selected ? 'red' : 'black';
//         return (
//             <TouchableOpacity onPress={this._onPress}>
//                 <View>
//                     <Text style={{ color: textColor }}>{this.props.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         );
//     }
// }

// export default class MultiSelectList extends React.PureComponent {
//     state = { selected: (new Map(): Map<string, boolean>) };

//     _keyExtractor = (item, index) => item.id;

//     _onPressItem = (id: string) => {
//         // updater functions are preferred for transactional updates
//         this.setState((state) => {
//             // copy the map rather than modifying state.
//             const selected = new Map(state.selected);
//             selected.set(id, !selected.get(id)); // toggle
//             return { selected };
//         });
//     };

//     _renderItem = ({ item }) => (
//         <MyListItem
//             id={item.id}
//             onPressItem={this._onPressItem}
//             selected={!!this.state.selected.get(item.id)}
//             title={item.title}
//         />
//     );

//     render() {
//         return (
//             <FlatList
//                 data={this.props.data}
//                 extraData={this.state}
//                 keyExtractor={this._keyExtractor}
//                 renderItem={this._renderItem}
//             />
//         );
//     }
// }



export default class FL extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
                    //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                    //   )}
                    ItemSeparatorComponent={({ highlighted }) => (
                        <View style={[highlighted && { marginLeft: 0 }]} />
                    )}
                    data={[
                        { title: 'Title Text', key: 'item1' },
                        { title: 'Title Text 2', key: 'item2' }
                    ]}
                    renderItem={({ item, separators }) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        )
    }
}