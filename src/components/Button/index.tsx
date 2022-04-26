import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native'

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  //handleAddUser: () => void;
}

export function Button({ title, ...rest }: IButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
          {...rest}
          /* onPress={handleAddUser} */ 
          style={styles.buttonCard}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  buttonCard: {
    width: '100%',
    padding: 20,
    fontSize: 20,
    height: 70,
    backgroundColor: '#ff872c',
    borderRadius: 9,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
})

