import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native"

export const ProductDetail = ({ route }) => {
    const { imagem, estudio, itemName, preco, itemDesc } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: imagem }} style={{ width: "100%", height: 200, resizeMode: "center" }}/>
            <Text style={{ textAlign: "center", fontSize: 40 }}>{itemName}</Text>
            <Text style={{ textAlign: "center", fontSize: 20 }}>{estudio}</Text>
            <View style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 18 }}>Preço: {preco.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
                <Text style={{ textAlign: "center", fontSize: 18 }}>Sobre: {itemDesc}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})
