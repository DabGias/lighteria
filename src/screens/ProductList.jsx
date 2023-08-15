import { Text, Pressable, StyleSheet, SafeAreaView, Image, FlatList, View } from "react-native"
import { Header } from "../components/Header"
import { useEffect, useState } from "react"

function Item({ navigation, titulo, imagem, estudio, itemName, preco, itemDesc }) {
    return(
        <Pressable style={{ flex: 1/2, padding: 15, margin: 10, backgroundColor: "#ddd", borderRadius: 15 }} onPress={() => { navigation.navigate("DetalheProduto") }}>
            <Image src={imagem} style={{ resizeMode: "center", width: "100%", height: 150, marginBottom: 30 }}/>
            <Text style={{ textAlign: "center" }}>{titulo}</Text>
        </Pressable>
    )
}

export const ProductList = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        fetch("https://run.mocky.io/v3/6e1a79f0-968f-40de-992f-3d218ab1f249")
        .then((resp) => resp.json())
        .then((json) => { setData(json) })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header/>
            <FlatList 
                data={data} 
                keyExtractor={item => item.id} 
                renderItem={({ item }) => <Item navigation={navigation} imagem={item.imagem} titulo={item.titulo}/>}
                numColumns={2}    
            />
        </SafeAreaView>
    )
}
