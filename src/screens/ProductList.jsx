import { Text, Pressable, StyleSheet, SafeAreaView, Image, FlatList, View } from "react-native"
import { Header } from "../components/Header"

function Item({ titulo, imagem, estudio, itemName, preco, itemDesc }) {
    return(
        <Pressable style={{ flex: 1/2, padding: 15, margin: 10, backgroundColor: "#ddd", borderRadius: 15 }}>
            <Image source={imagem} style={{ resizeMode: "center", width: "100%", height: 200, marginBottom: 30 }}/>
            <Text>{titulo}</Text>
            <Text>R$ {preco}</Text>
        </Pressable>
    )
}

export const ProductList = ({navigation}) => {
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            titulo: 'Abajur',
            imagem: require('../assets/01-tablelamps.png'),
            estudio: 'Jim&Jill Designs',
            itemName: 'Wilson',
            preco: 92.1,
            itemDesc:
            'Contrary to popular belief, Lorem Ipsum is not simply random text',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            titulo: 'Lâmpada de teto',
            imagem: require('../assets/02-ceilinglamps.png'),
            estudio: 'Gary&Fly Designs',
            itemName: 'Linda',
            preco: 123.44,
            itemDesc:
            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, lorem ipsum',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            titulo: 'Arandela',
            imagem: require('../assets/03-sconces.png'),
            estudio: 'Tom&Jim Designs',
            itemName: 'Jerry',
            preco: 33.43,
            itemDesc:
            'There are many variations of passages of Lorem Ipsum available, but the majority',
        },
        {
            id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',
            titulo: 'Luminária de chão',
            imagem: require('../assets/04-floorlamps.png'),
            estudio: 'Kerry&King Designs',
            itemName: 'Jack',
            preco: 67.23,
            itemDesc:
            'Cicero, written in 45 BC. This book is a treatise on the theory of ethics,',
        },
        {
            id: '3ac68afvvc-c605-48d3-a4f8-fbd91aa97f63',
            titulo: 'Luzes decorativas',
            imagem: require('../assets/05-lightdecor.png'),
            estudio: 'Dave&Sugar Designs',
            itemName: 'Amanda',
            preco: 98.4,
            itemDesc:
            'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic',
        },
        {
            id: '58694a0f-3deea1-471f-bd96-145571e29d72',
            titulo: 'Guirlanda',
            imagem: require('../assets/06-garlands.png'),
            estudio: 'Jeff&Lighter Designs',
            itemName: 'Julia',
            preco: 100.3,
            itemDesc:
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ',
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <FlatList 
                data={data} 
                keyExtractor={item => item.id} 
                renderItem={({ item }) => <Item imagem={item.imagem} titulo={item.titulo} preco={item.preco}/>}
                numColumns={2}    
            />
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
