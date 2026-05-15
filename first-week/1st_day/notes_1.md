import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function HomeScreen() {
  const [name, setName] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.textContainer}>
        Hey world tari maa chod deoau
        Hey world tari maa chod deoau
        Hey world tari maa chod deoau
        Hey world tari maa chod deoau
      </Text>

      {/* Remote Image from Internet */}
      <Image
        source={{
          uri:"https://bolt-gcdn.sc-cdn.net/3/vTwXel5ogS5vRnhZbKegK?bo=EhgaABoAMgF9OgEEQgYIzfi0pgZIAlASYAE%3D&uc=18",
        }}
        style= {
          {
            height: 250,
            width: 250,
          }
        }
      />

      {/* Local Image */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 250,
          width: 250,
        }}
        blurRadius={50}
      />

      {/* Text Input Component */}
      < TextInput 
        style={styles.textInput} 
        placeholder='enter you name'  
        value={name} 
        onChangeText={setName}
        placeholderTextColor={"blue"}
      />
      
      {/* Pressable Text Component */}
      <Pressable 
        // onLongPress={}
        // onPressIn={}
        // onPressOut={}
        hitSlop={{
            top:23, 
            left: 23, 
            bottom: 23, 
            right: 23
        }}
        onPress={()=> alert("Button Presses")}
        style= {
          ({pressed})=>({
            backgroundColor: pressed ? "green" : "red",
          })
        }
      > 
        {/* call back passed here */}
        {({pressed})=>(pressed ? <Text>Pressing</Text>: <Text>Press me</Text>)}
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'black' 
  },
  textContainer: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  textInput: {
    marginTop: 20,
    padding: 10,
    height: 50,
    width: 200,
    color: 'black',
    backgroundColor: 'red',
    borderRadius: 10,
    fontSize: 24,
    borderColor: "blue",
    borderWidth: 2,
  },
});
