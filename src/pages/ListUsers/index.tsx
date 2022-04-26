import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../components/Header'
import { ListCard } from '../../components/ListCard';

interface LisUsersProps {
  id: string;
  name: string;
  cpf: string;
  email: string;
}

export function ListUsers() {
  const [users, setUsers] = useState<LisUsersProps[]>([])

  async function loadUsers() {
    const storagedUsers = await AsyncStorage.getItem('@si:users')
    if (storagedUsers) {
      setUsers(JSON.parse(storagedUsers))
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Listagem de Usuários' />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListCard
            item={item}
          />
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f2f5'
  }
})