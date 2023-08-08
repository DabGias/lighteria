import { View, Text, Pressable, StyleSheet } from "react-native"

export const ProductDetail = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => {navigation.navigate("ListaProdutos")}}>
            <Text style={styles.text}>Lista de DetalhesProduto</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },

    text: {
        fontSize: 40
    }
})
