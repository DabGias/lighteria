import { Text, Pressable, SafeAreaView, Image, FlatList } from "react-native"
import { Header } from "../components/Header"
import { useEffect, useState } from "react"

function Item({ navigation, titulo, imagem, estudio, itemName, preco, itemDesc }) {
    console.debug(imagem)

    return(
        <Pressable style={{ flex: 1/2, padding: 15, margin: 10, backgroundColor: "#ddd", borderRadius: 15 }} onPress={() => { navigation.navigate("DetalheProduto", { titulo, imagem, estudio, itemName, preco, itemDesc }) }}>
            <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }}/>
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
        </SafeAreaView>
    )
}
