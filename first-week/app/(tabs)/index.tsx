import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
// import { StatusBar } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";


const Homepage = () => {
  const { width, height } = useWindowDimensions();
  console.log({
    height,
    width
  });

  const isTablet = width > 768;

  const isLandscape = width > height;

  const lockLandscape = async ()=>{
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    )
  }

  const lockPortrait = async ()=>{
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    )
  }
  
  return (
    <SafeAreaView style={styles.view}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <StatusBar style="dark" />
      <Text>Saurabh</Text>
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  view: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:"red", 
    flex: 1 
  }
})