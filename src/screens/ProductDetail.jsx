import { Text, Pressable, StyleSheet, SafeAreaView } from "react-native"

export const ProductDetail = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <Pressable onPress={() => {navigation.navigate("ListaProdutos")}}>
            <Text style={styles.text}>Lista de DetalhesProduto</Text>
        </Pressable>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        fontSize: 40
    }
})
