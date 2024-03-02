import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    keyboardRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    calcBtn: {
        width: '20%',
        height: Dimensions.get('screen').width * 0.2,
        borderRadius: 20,
        backgroundColor: '#f5f4eb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    btnText: {
        fontSize: 20
    }

})


export default function CalcKeyboard({ onClick }) {
    const calcKeyboard = [[7, 8, 9, '/'], [4, 5, 6, '*'], [1, 2, 3, '-'], [0, '.', 'AC', '+'], ['Del', '=']];

    return (
        <SafeAreaView>
            {
                // duyệt qua các hàng. Ex: [7, 8, 9, '/']
                // mỗi hàng được duyệt sẽ tạo 1 View có display là flex, direction là row
                // để chứa 4 nút cho mỗi hàng
                calcKeyboard.map((row) => {
                    return (<View style={styles.keyboardRow}>
                        {
                            // duyệt qua các nút của row. Ex: 7, 8, 9, /
                            row.map((calcBtn) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.calcBtn}
                                        onPress={() => onClick(calcBtn)}
                                    >
                                        <Text
                                            style={styles.btnText}
                                        >
                                            {calcBtn}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                    </View>
                    )
                })
            }
        </SafeAreaView>
    );
}