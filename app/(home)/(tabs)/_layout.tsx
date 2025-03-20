import { Tabs } from 'expo-router'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Chats',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user" color={color} size={size} />
                    ),
                }}
            />


        </Tabs>
    )
}

export default TabsLayout