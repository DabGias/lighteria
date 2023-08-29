import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Image, Pressable, Text, View } from "react-native"

function FavCard({ imagem, nome, estudio, preco }) {
    return(
        <Pressable style={{ display: "flex" }}>
            <Image source={{ uri: imagem }} style={{ width: "30%", height: 100 }}/>
            <View>
                <Text>{nome}</Text>
                <Text>{estudio}</Text>
                <Text>{preco}</Text>
            </View>
        </Pressable>
    )
}

export function FavoriteProdtList() {
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
                getItem("prodts") === null ?
                    <Text>Você ainda não favoritou um produto!</Text>
                :
                    favList.map((prodt) => {
                        console.debug(prodt)

                        return <FavCard key={prodt.id} {...prodt}/>
                    })
            }
        </View>
    )
}
