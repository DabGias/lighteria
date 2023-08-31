import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProductList } from './src/screens/ProductList'
import { ProductDetail } from './src/screens/ProductDetail'
import { FavoriteProdtList } from './src/screens/FavoriteProdtList'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

const App = () => {
    useEffect(() => {
        async function clean() {
            await AsyncStorage.setItem("prodts", "")
        }

        clean()
    }, [])

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="ListaProdutos">
                    <Stack.Screen
                        name="ListaProdutos"
                        component={ProductList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DetalheProduto"
                        component={ProductDetail}
                        options={({ route }) => ({ title: route.params.titulo })}
                    />
                    <Stack.Screen
                        name='ListaFavoritos'
                        component={FavoriteProdtList}
                        options={{ title: "Favoritos" }}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default App
