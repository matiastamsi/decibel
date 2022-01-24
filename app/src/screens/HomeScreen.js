import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen () {
  const [decibels, setDecibels] = useState(0)

  return (
    <View>
      <Text>Decibels: {decibels}</Text>
    </View>
  )
}