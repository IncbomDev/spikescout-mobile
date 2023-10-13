import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

const App1 = () => {
    return (
        <View>
            <Text style={styles.date}>Thursday</Text>
            <Text style={styles.day}>12 October</Text>
            <Text style={styles.name}>Hi Nathan.</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    date: {
        fontSize: 14,
        color: '#7F7F7F',
        textAlign: 'left',
        marginLeft: 24,
        marginTop: 60, 
        fontWeight: 400,
        fontFamily: 'Product Sans',
        letterSpacing: 0.2,
    },
    day: {
        fontSize: 24,
        color: '#040415',
        textAlign: 'left',
        marginLeft: 24,
        marginTop: 0,
        fontFamily: 'Product Sans',
        fontWeight: 700,
        letterSpacing: 0.5,
    },
    name: {
        fontSize: 28,
        textAlign: 'left',
        marginLeft: 24,
        marginTop: 36,
        color: '#2F394B',
        fontWeight: 700,
        fontFamily: 'Product Sans',
        letterSpacing: -0.5,
        lineHeight: 45,
    }
    
});

export default App1;
