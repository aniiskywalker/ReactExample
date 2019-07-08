import React, {Component} from 'react';
import {FlatList} from 'react-native';
const data = [
{
	id: 0, 
	name: 'item0'
},
{
	id: 1, 
	name: 'item1'
},
{
	id: 2, 
	name: 'item2'
},
{
	id: 3, 
	name: 'item3'
},
{
	id: 4, 
	name: 'item4'
},
{
	id: 5, 
	name: 'item5'
},
{
	id: 6, 
	name: 'item6'
},
];
type Props = {};
export default class Example extends Component <Props> {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between'}}>
                <View >
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <ListItem name={item.nombre} id={item.id} />
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
      		</View>
		);
	}
}
