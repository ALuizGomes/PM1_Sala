import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface ListCardProps {
    item: object;
}

export function ListCard({item}: ListCardProps) {
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonCard}>
            {Object.values(item).map((data, index) => (
                <Text style={styles.textCard}>
                    {index > 0 && data}
                </Text>
            ))}
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    buttonCard: {
        width: '100%',
        padding: 6,
        backgroundColor: '#969cb2',
        borderRadius: 10
    },
    textCard: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        flexDirection: 'row'
    }
})

  