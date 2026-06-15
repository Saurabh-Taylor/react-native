import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <SafeAreaView >
      <StatusBar style="light" />
      <Text>Hello Saurabh</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})