import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const datasource = [
    { key: 'a' },
    { key: 'b' },
    { key: 'c' },
    { key: 'd' },
    { key: 'e' },
    { key: 'f' },
    { key: 'g' },
    { key: 'h' },
    { key: 'i' },
    { key: 'j' },
    { key: 'k' },
    { key: 'l' },
    { key: 'm' },
    { key: 'n' },
    { key: 'o' },
    { key: 'p' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    textStyle: {
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'left',
    },
    lineStyle: {
        borderBottomWidth: 1,
        borderColor: '#000',   // Optional: specifies the color of the line
        marginBottom: 10,      // Adds some space between the line and the next item
    },
});

const renderItem = ({ item }) => {
    return (
        <View style={styles.lineStyle}>
            <TouchableOpacity>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList data={datasource} renderItem={renderItem} keyExtractor={(item) => item.key} />
            <StatusBar style="auto" />
        </View>
    );
}
