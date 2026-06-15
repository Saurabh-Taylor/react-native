import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const SignInBtn = () => {
    const handleSignIn = ()=>{
        console.log("Sign in pressed");
    }
  return (
    <View style={styles.container}>
        <Pressable
            style={({ pressed }) => ({
                backgroundColor: pressed ? 'green' : '#32CD32',
                padding: 12,
                borderRadius: 8,
                opacity: pressed ? 0.85 : 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 8,
                width: '100%',
            })}
            onPress={handleSignIn}
        >
            <Text style={styles.text}>Sign In</Text>
            <Ionicons name="arrow-forward" size={24} color="white" />
        </Pressable>
    </View>
  )
}

export default SignInBtn

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',  
    },
    text: {
        color: '#fff', 
        fontWeight: 'bold'
    }
})