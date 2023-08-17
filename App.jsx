import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProductList } from './src/screens/ProductList'
import { ProductDetail } from './src/screens/ProductDetail'

const Stack = createStackNavigator()

const App = () => {
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
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
