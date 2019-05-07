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
        backgroundColor: '#F0F0F0'
    },
    textStyle: {
        fontSize: 30
    }
};

//Make the component available to other parts of the app
export default Header;