import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { Image } from "expo-image";

const App = () => {
  return (
    <SafeAreaView style={{
      flex:1,
    }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        
        <Text style={styles.title} >Sign In</Text>
        <Text  style={styles.subtitle}>Let's Experience the joy of telecare AI</Text>


        {/*  Email Field */}
        <View>
          <Text style={styles.label}>Email Address</Text>
          <View>
             <Ionicons name="mail-outline" size={20} color="#8A8A8A" />
            <TextInput placeholder="test@gmail.com" />
          </View>
        </View>

        {/*  Password Field */}
        <View>
          <Text>Password</Text>
          <View>
             <Ionicons name="lock-closed" size={20} color="#8A8A8A" />
            <TextInput placeholder="test@gmail.com" />
          </View>
        </View>

        <TouchableOpacity>
          <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent: "center",
            gap: 10
          }}>
            <Text>Sign in</Text>
            <Ionicons name="arrow-up-right-box" size={32} color="red" />
          </View>
          
        </TouchableOpacity>

        {/* social media icons */}
        <View style={{
          flexDirection:"row",
          gap: 20,
          justifyContent: "center",
          paddingBottom: 20,
          paddingTop: 20 
        }}>
          <Ionicons name="logo-facebook" size={32} color="red" />
          <Ionicons name="logo-google" size={32} color="red" />
          <Ionicons name="logo-instagram" size={32} color="red" />
        </View>

        <View>
          <Text> Dont have an account? </Text>
          <Text>
            Sign Up
          </Text>
        </View>

        < Text>
          Forgot Your Password
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor : "#F2F4F3",
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#8A8A8A",
    marginBottom:32
  },
  label: {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 8,
    marginTop: 16
  }
  

});
