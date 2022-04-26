import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  StyleSheet,
  Alert
} from 'react-native'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function Dashboard() {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')

  async function handleAddUser() {
    const user = {
      id: new Date().getTime(),
      name,
      cpf,
      email
    }
    try {
      const data = await AsyncStorage.getItem('@si:users')
      const currentData = data ? JSON.parse(data) : []
      const dataFormatted = [
        ...currentData,
        user
      ]
      await AsyncStorage.setItem('@si:users', JSON.stringify(dataFormatted))
      setName('')
      setCpf('')
      setEmail('')
    } catch(err) {
      console.log(err)
      Alert.alert('Error ao salvar o usuário')
    }

    async function loadDataUser() {
      const data = await AsyncStorage.getItem('@si:users')
      const currentData = data ? JSON.parse(data) : []
      console.log(currentData)
    }

    useEffect(() => {
      loadDataUser()
    }, [])
  }

  return (
    <View style={styles.container}>
      <Header title='Cadastro' />

      <Input 
        placeholder='Nome'
        value={name}
        onChangeText={value => setName(value)}
      />

      <Input
        placeholder='CPF'
        value={cpf}
        onChangeText={value => setCpf(value)}
      />

      <Input
        placeholder='Email'
        value={email}
        onChangeText={value => setEmail(value)}
      />
      
      <Button 
        //handleAddUser={handleAddUser}
        onPress={handleAddUser}
        title='Incluir' />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f2f5'
  }
})