import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SocialMediaButtons = () => {
  return (
    <View style={styles.container}>
        <FontAwesome style={styles.icon} name="facebook" size={32} color="black" />
        <FontAwesome style={styles.icon} name="google" size={32} color="black" />
        <FontAwesome style={styles.icon} name="instagram" size={32} color="black" />
    </View>
  )
}

export default SocialMediaButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        gap: 10,
        marginTop: 20,
    },
    icon: {
        width: 56,
        height: 56,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 1,
        borderRadius: 20,
    }
})