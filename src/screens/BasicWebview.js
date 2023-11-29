import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../config/colors";
import { getDynamicWidth, getDynamicHeight } from "../helpers/Basics";
import HeaderLayout from "../layouts/HeaderLayout";
import { WebView } from 'react-native-webview';
import { defaultPadding } from "../config/contants";

const BasicWebview = ({ navigation }) => {
    const theme = useSelector(state => state.themeReducer.theme);
    const [url, setUrl] = React.useState('https://www.youtube.com/');

    return (
        <HeaderLayout
            titleText={'Basic Webview'}
            theme={theme}
            navigation={navigation}
            showBack={true}
            showClose={true}
        >
            <WebView
                style={{ flex: 1 }}
                source={{ uri: url }}
            />
        </HeaderLayout>
    )
}

const styles = StyleSheet.create({
    inner: {
        flex: 1,
        paddingHorizontal: getDynamicWidth(defaultPadding),
        paddingVertical: getDynamicHeight(defaultPadding),
    },
});

const stylesDynamic = (theme) => StyleSheet.create({
    cover: {
        backgroundColor: colors(theme).background,
        flex: 1,
    },

});

export default BasicWebview;