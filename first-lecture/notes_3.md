import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


//  flatlist - performance optimization for large lists and will render only the items that are currently visible on the screen
// sectionlist

const USERS = [
  { id: '1', name: 'John Doe', role: 'Admin' },
  { id: '2', name: 'Jane Smith', role: 'User' },
  { id: '3', name: 'Alice Johnson', role: 'Moderator' },
  { id: '4', name: 'Bob Brown', role: 'User' },
  { id: '5', name: 'Charlie Davis', role: 'Admin' },
  { id: '6', name: 'Eve Wilson', role: 'User' },
  { id: '7', name: 'Frank Miller', role: 'Moderator' },
  { id: '8', name: 'Grace Lee', role: 'User' },
  { id: '9', name: 'Hank Taylor', role: 'Admin' },
  { id: '10', name: 'Ivy Anderson', role: 'User' },
]
const index = () => {
  return (
    <FlatList
      style={{flex: 1, marginTop: 16}}
      contentContainerStyle={{alignItems: 'center', marginTop: 24}}
      data={USERS}
      // horizontal // this is to make list horizontal
      keyExtractor={(item)=> item.id}
      renderItem={({item})=> (
        <Text style={{color: 'white'}}> {item.name} </Text>
      )}
      ItemSeparatorComponent={()=>(
        <View
          style={{
            height: 1,
            backgroundColor: 'red',
            // marginVertical: 8,
          }}
        />
      )}
    />
  )
}

export default index

const styles = StyleSheet.create({})