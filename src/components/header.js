//Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

//Make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItem: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { wodth: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 30
    }
};

//Make the component available to other parts of the app
export default Header;