import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View } from "react-native"


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },

    dataArea: {
        color: '#212529',
        fontSize: 30,
        width: '100%',
        flex: 1,
        backgroundColor: '#c5eae7',
        borderRadius: 20,
        padding: 15,
        margin: 10
    }
});

export default function CalcScreen(props) {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Text
                    style={styles.dataArea}
                >
                    {props.data}
                </Text>
            </View>
        </SafeAreaView>
    )
}


