import { View, Text, TouchableOpacity, Share, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { pageNames } from '../config/strings';;
import { defaultPadding } from '../config/contants';
import { colors } from '../config/colors';
import BasicHeader from '../components/BasicHeader';
import { getDynamicWidth, getDynamicHeight } from '../helpers/Basics';

const HeaderLayout = ({ children, theme, navigation, showBack, showClose, titleText, basicPadding }) => {
    return (
        <SafeAreaView style={stylesDynamic(theme).cover}>
            <View style={stylesDynamic(theme).cover}>
                <BasicHeader
                    theme={theme}
                    navigation={navigation}
                    showBack={showBack}
                    showClose={showClose}
                    titleText={titleText}
                />
                <View style={!basicPadding ? styles.inner : { flex: 1 }}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
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
        flexDirection: 'column',
        flex: 1,
    },
})
export default HeaderLayout;