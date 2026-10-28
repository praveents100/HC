import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps{
    title: string;
     colorButton: string;
      width?: number
    height?: number
    margin: number
    padding: number
    fontSize?: number
    onPress: () => void;
}

export default function CustomButton({ title, onPress, colorButton, width, height, margin, padding, fontSize }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: colorButton, width, height, margin, padding ,borderRadius: 10}}>
        <Text style={{ color: 'black', textAlign: 'center' ,fontWeight: 'bold',fontSize: fontSize || 25 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}