import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, Text, View } from "react-native"

function FavCard({ imagem, itemName, titulo, estudio, preco }) {
    return(
        <Pressable style={{ flex: 1,  flexDirection: "row", padding: 15, margin: 10, backgroundColor: "#ddd", borderRadius: 15 }}>
            <Image source={{ uri: imagem }} style={{ width: "30%", height: 100, resizeMode: "center" }}/>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 17, marginLeft: 15 }}>{itemName} ({ titulo })</Text>
                <Text style={{ fontSize: 17, marginLeft: 15 }}>{estudio}</Text>
                <Text style={{ fontSize: 17, marginLeft: 15 }}>{preco.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
            </View>
        </Pressable>
    )
}

export function FavoriteProdtList({ navigation }) {
    const [favList, setFavList] = useState([])

    useEffect(() => {
        getItem("prodts")
    }, [])

    async function getItem(itemName) {
        setFavList(JSON.parse(await AsyncStorage.getItem(itemName)))
    }

    return(
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {
                favList === null || favList.length === 0 ?
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", fontSize: 30, width: "60%", marginRight: "auto", marginLeft: "auto" }}>Você ainda não favoritou um produto!</Text>
                    </View>
                :
                    <FlatList
                        data={favList} 
                        keyExtractor={prodt => prodt.id} 
                        renderItem={({ item }) => <FavCard {...item}/>}
                    />
            }
        </View>
    )
}
