import React, { useState } from 'react'
import { Text, View, ScrollView, Button, Switch } from 'react-native'

const Index = () => {
  const [darkMode, setDarkMode] = useState(false)

  const items = Array.from({ length: 20}, (_, i) => `${i+1}`)
  return (
    <ScrollView style={{ flex: 1}} contentContainerStyle= {{
      padding: 16,
      alignItems: 'center',
      // backgroundColor: '#f0f0f0'
    }}>
     
      {items.map((item)=> (
        <View key={item}
        style={{
          backgroundColor: "white",
          padding: 16,
          borderRadius:10,
          marginBottom:10,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 12, // this three properties will work on ios only shadowColor, shadowOpacity, shadowRadius
          elevation:2 // this will work on android device only  
          
        }}
        >
          <Text  key ={item}style={{ fontSize: 20, color: 'red' }}> Item {item}</Text>
        </View>
      ))}

      <Button 
        title='Go to Modal' 
        color={"green"}
        onPress={()=> alert("You Pressed")}
      />

      <Switch
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{
          false:"#ffff",
          true:"red"
        }}
        thumbColor={"yellow"}
      />
    </ScrollView>
  )
}

export default Index