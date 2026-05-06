import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>SubscriptionDetails: {id}</Text>
      <Link to="/subscriptions">Back to Subscriptions</Link>
    </View>
  )
}

export default SubscriptionDetails