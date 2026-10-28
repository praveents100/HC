import { View, Text } from 'react-native'
import React from 'react'

interface CustomViewProps {
    title: string;
    backgroundColor: string;
    height: number
    width?: number
    radius?: number
    margin: number
    padding: number
 fontSize?: number
}

const CustomView = ({ title, backgroundColor, height, width, radius, margin, padding, fontSize }: CustomViewProps) => {
    return (
        <View style={{ backgroundColor, height, width, margin, padding, borderRadius: radius }}>
            <Text style={{ color: 'black', textAlign: 'center' ,fontWeight: 'bold',fontSize: fontSize || 35,justifyContent: 'center', alignItems: 'center' }}>{title}</Text>
        </View>
    )
}

export default CustomView