import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = () => {

  const isActive = true

  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null
  )

  return (
    <View style={styles.container}>
      <View style= {buttonStyle}>
        <Text style={styles.buttonText}>Composed Style</Text>
      </View> 
    </View>
  )
}

export default HomePage

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'red',
//     borderRadius: 20,
//     margin: 16,
//     padding: 20,
//     shadowColor: 'green',
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   title: {

//   },
//   subtitle: {

//   }
// })

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#6C63FF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})