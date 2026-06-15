import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextWrapper from '../my-comp/TextWrapper'

const Header = () => {
  return (
    <View>
      <TextWrapper textContent ="Sign In" color='black' fontSize={45}  />
      <TextWrapper textContent ="Let's Experience the joy of telecare AI" color='grey' fontSize={20} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})