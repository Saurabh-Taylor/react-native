import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function UnSafeScreen(){
  return (
    <View style={{flex:1, backgroundColor:"#1c1c1c" }}>
      <Text style={{color: 'white', fontSize:18, padding:16}}>Header (bleeds under notch)</Text>
      <Text style={{color: 'white', padding:16}}>This Content Might be hidden behind the status bar in dark mode</Text>
    </View>
  )
}

function SafeScreen(){
  return (
    <SafeAreaView edges={["bottom"]} style={{flex:1, backgroundColor:"#1c1c1c" }}>
      <Text style={{color: 'white', fontSize:18, padding:16}}>Header (respects safe area)</Text>
      <Text style={{color: 'white', padding:16}}>This Content is properly inset</Text>
    </SafeAreaView>
  )
}

const HomeScreen = () => {
  return (
    <>
      {/* <UnSafeScreen/> */}
      <SafeScreen/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})