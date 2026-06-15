import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/my-sections/Header'
import MainSection from '@/components/my-sections/MainSection'
import { StatusBar } from "expo-status-bar";

const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header/>
      <MainSection/>
      {/* <Bottom/> */}
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:"#fff", 
    borderColor: 'yellow',
    borderWidth: 5,
  }
})