import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <View>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
                </View>
                <View style={styles.container}>
                    
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      }
})