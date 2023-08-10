import { StyleSheet, Text, View } from "react-native"

export function Header() {
    return(
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                alignItems: "center",
                padding: 32,
        }}>
            <View>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>LIGHTERIA</Text>
            </View>
            <View
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    backgroundColor: 'white',
                }}
            />
        </View>
    )
}
