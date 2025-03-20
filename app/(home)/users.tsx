import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import UserListItem from "@/components/UserListItem";   

export default function UsersScreen() {
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { user } = useAuth()

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .neq('id', user?.id)
            if (error) {
                setError(error as any)
            } else {
                setUsers(data || [])
            }
            console.log(data)
        }
        fetchUsers()
    }, [])
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserListItem user={item} />}
            />
        </View>
    )
}