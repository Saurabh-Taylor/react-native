import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TextWrapper{
    textContent:string
    color?: string
    fontSize?: number
    padding?: number
}

const TextWrapper = ({ textContent, color, fontSize, padding }: TextWrapper) => {
  return (
    <Text style={{
        color: color || "black",
        fontSize: fontSize || 16,
        padding: padding || 0,
    }}>
        {textContent}
    </Text>
  )
}

export default TextWrapper

const styles = StyleSheet.create({})