import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import { styles } from './CardViewStyles'
import Logo from '../../../assets/logo.png'
import Divider from '../Divider/Divider'

export function CardView() {
  function renderLogoBox() {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={Logo} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
    </View>
  )
}
