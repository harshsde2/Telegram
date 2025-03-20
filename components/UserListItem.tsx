import { View, Text } from 'react-native'
import React from 'react'

const UserListItem = ({ user }: { user: any }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', backgroundColor: 'white' }}>
      <Text>{user?.full_name}</Text>
    </View>
  )
}

export default UserListItem