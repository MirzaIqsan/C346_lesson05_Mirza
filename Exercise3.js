import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Button, Image } from 'react-native';

// Data source for Pokemon sections and Pokemon items
const datasource = [
    {
        data: [
            { key: 'Charmander', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png' }, // Fire type
            { key: 'Vulpix', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png' },   // Grass type
        ],
        title: "Fire", // Element type
    },
    {
        data: [
            { key: 'Squirtle', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png' }, // Water type
            { key: 'Blastoise', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png' },   // Electric type
        ],
        title: "Water", // Element type
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
        marginVertical: 10,
        textAlign: 'left',
    },
    lineStyle: {
        flexDirection: 'row', // Aligns the Pokemon name and image horizontally
        borderBottomWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
        paddingVertical: 10,
        justifyContent: 'space-between', // Creates space between name and image
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    image: {
        width: 100,  // Set the width of the image
        height: 140, // Set the height of the image
    },
    addButton: {
        marginVertical: 10,
        marginBottom: 20,
    }
});

// Function to render each Pokemon item
const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.lineStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
    );
};

// Function to render each section header with appropriate color based on element type
const renderSectionHeader = ({ section: { title } }) => {
    let backgroundColor = '#f0f0f0'; // Default header color
    if (title === 'Fire') {
        backgroundColor = '#FF6347'; // Fire type (Tomato)
    } else if (title === 'Water') {
        backgroundColor = '#4682B4'; // Water type (SteelBlue)
    }

    return (
        <Text
            style={[
                styles.headerText,
                { backgroundColor: backgroundColor },
            ]}
        >
            {title}
        </Text>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            {/* Add Pokemon button */}
            <View style={styles.addButton}>
                <Button title="Add Pokemon"  />
            </View>

            {/* SectionList displaying Pokemon */}
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item) => item.key}
                contentContainerStyle={styles.sectionContainer}
            />
            <StatusBar style="auto" />
        </View>
    );
}
