import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function PressableTab({ tab, onPress, style }) {
  return (
    <Pressable 
            style={({pressed}) => pressed? [style, styles.pressed] : style}
            onPress={onPress}
    >
      <Text style={styles.tabText}>{tab}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    tab: {
        borderBottomColor: '#A020F0',
        borderBottomWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingBottom: 8,
        width: '25%',
    },
    pressed: {
        opacity: 0.5,
    },
    tabText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
})