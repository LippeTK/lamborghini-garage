import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { styles } from './BuyButtonStyle'

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign
          name="shoppingcart"
          size={20}
          style={styles.icon}
          color="white"
        />
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  )
}
