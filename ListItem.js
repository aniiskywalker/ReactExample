import React, {Component} from 'react';
import {View, Text, } from 'react-native';

class ListItem extends Component {
    render = () => {
        return(
        <View style={Style.container}>
            <Text style = {Style.name}>{this.props.name}</Text>
        </View>
        );
    };
}
const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomColor: '#979797',
        borderBottomWidth: .5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        width: '65%',
        marginLeft: '5%',
        height: 25,
        color: '#231F20',
        fontSize: 18,
    },
})
export default ListItem;