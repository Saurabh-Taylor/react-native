import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../my-comp/LoginForm'
import SocialMediaButtons from '../my-comp/SocialMediaButtons'
import SignInBtn from '../my-comp/SignInBtn'

const MainSection = () => {

  return (
    <View style={styles.section}>
        <LoginForm/>
        <SignInBtn/>
        <SocialMediaButtons/>
    </View>
  )
}

export default MainSection

const styles = StyleSheet.create({
    section: {
        flex: 1,
        width: '90%',
        gap: 20,
        marginTop: 40
    }
})