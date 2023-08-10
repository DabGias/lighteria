import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProductList } from './src/screens/ProductList'
import { ProductDetail } from './src/screens/ProductDetail'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ListaProdutos"
            component={ProductList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetalhesProduto"
            component={ProductDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
})

export default App
