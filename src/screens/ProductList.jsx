import AsyncStorage from "@react-native-async-storage/async-storage"
import { Text, Pressable, SafeAreaView, Image, FlatList, View } from "react-native"
import { Header } from "../components/Header"
import { useEffect, useState } from "react"

function Item({ navigation, id, imagem, titulo, estudio, itemName, preco, itemDesc }) {
    async function addProdt(item) {
        if (await AsyncStorage.getItem("prodts") === null) {
            await AsyncStorage.setItem("prodts", JSON.stringify([]))
        } 
       
        const prodts = JSON.parse(await AsyncStorage.getItem("prodts"))
    
        prodts.push(item)
    
        await AsyncStorage.setItem("prodts", JSON.stringify(prodts))
    }

    return(
        <Pressable 
            style={{ flex: 1/2, padding: 15, margin: 10, backgroundColor: "#ddd", borderRadius: 15 }} 
            onPress={() => { 
                addProdt({ id, imagem, titulo, estudio, itemName, preco })
                navigation.navigate("DetalheProduto", { titulo, imagem, estudio, itemName, preco, itemDesc }) 
            }}
        >
            <Image source={{ uri: imagem }} style={{ width: "100%", height: 200 }}/>
            <Text style={{ textAlign: "center" }}>{titulo}</Text>
            <Text>{itemName}</Text>
            <Text>{preco.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
        </Pressable>
    )
}

export const ProductList = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        fetch("https://run.mocky.io/v3/8810362d-ffa4-4635-9180-dfefa47242f4")
        .then((resp) => resp.json())
        .then((json) => { setData(json) })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header/>
            <FlatList 
                data={data} 
                keyExtractor={item => item.id} 
                renderItem={({ item }) => <Item navigation={navigation} {...item}/>}
                numColumns={2}    
            />
            <View style={{ padding: 10 }}>
                <Pressable 
                    style={{ padding: 15, width: "80%", marginLeft: "auto", marginRight: "auto", borderRadius: 15, backgroundColor: "#71b18f" }}
                    onPress={() => { navigation.navigate("ListaFavoritos") }}
                >
                    <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Ver meus favoritos</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
