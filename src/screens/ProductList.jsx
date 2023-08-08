import { View, Text, Pressable, StyleSheet } from "react-native"

export const ProductList = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => {navigation.navigate("DetalhesProduto")}}>
            <Text style={styles.text}>Lista de Produtos</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },

    text: {
        fontSize: 40
    }
})
