import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const index = () => {
  const insets = useSafeAreaInsets()
  console.log("insets::", insets);
  
  return (
    <View style={{flex:1, backgroundColor:"red", paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <StatusBar barStyle='light-content' />
      <Text style={{color: 'white', fontSize:18, padding:16}}>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})