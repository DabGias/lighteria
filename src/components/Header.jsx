import { StyleSheet, Text, View } from "react-native"

export function Header() {
    return(
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                width: '100%',
                height: '100%',
                padding: 32,
        }}>
            <View>
                <Text style={{color: 'white', fontSize: 48}}>Lighteria</Text>
            </View>
            <View
                style={{
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    backgroundColor: 'white',
                }}
            />
        </View>
    )
}
