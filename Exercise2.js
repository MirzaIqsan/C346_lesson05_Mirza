import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

// Updated datasource with all vowels and consonants
const datasource = [
    {
        data: [
            { key: 'a' },
            { key: 'e' },
            { key: 'i' },
            { key: 'o' },
            { key: 'u' },
        ],
        title: "Vowels",
    },
    {
        data: [
            { key: 'b' },
            { key: 'c' },
            { key: 'd' },
            { key: 'f' },
            { key: 'g' },
            { key: 'h' },
            { key: 'j' },
            { key: 'k' },
            { key: 'l' },
            { key: 'm' },
            { key: 'n' },
            { key: 'p' },
            { key: 'q' },
            { key: 'r' },
            { key: 's' },
            { key: 't' },
            { key: 'v' },
            { key: 'w' },
            { key: 'x' },
            { key: 'y' },
            { key: 'z' },
        ],
        title: "Consonants",
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    textStyle: {
        fontSize: 15,
        marginVertical: 10,  // Adds space between text and the line
        textAlign: 'left',
    },
    lineStyle: {
        borderBottomWidth: 1, // Adds the horizontal line
        borderColor: '#000',   // Optional: specifies the color of the line
        marginBottom: 10,      // Adds some space between the line and the next item
    },
    headerText: {
        fontSize: 20,       // Font size for the header
        margin: 10,         // Margin around the header text
        textAlign: 'center', // Center align the header text
        fontWeight: 'bold',  // Makes the header bold
        paddingVertical: 10, // Adds padding to the header
    },
    sectionContainer: {
        marginBottom: 20, // Adds margin between sections
    }
});

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.lineStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text
                        style={[
                            styles.headerText,
                            {
                                backgroundColor: title === "Vowels" ? '#ADD8E6' : '#FFFF00', // Apply color directly to section header
                            },
                        ]}
                    >
                        {title}
                    </Text>
                )}
                keyExtractor={(item) => item.key}
                contentContainerStyle={styles.sectionContainer} // Adds white space around the list
            />
            <StatusBar style="auto" />
        </View>
    );
}
