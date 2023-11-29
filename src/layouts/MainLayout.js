import { View, Text, TouchableOpacity, Share, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import HomeIcon from '../assets/images/home';
import MoreIcon from '../assets/images/more';
import { pageNames } from '../config/strings';;
import { defaultPadding } from '../config/contants';
import { colors } from '../config/colors';
import { strings } from '../config/strings';
import { getDynamicHeight, getDynamicWidth } from '../helpers/Basics';

const MainLayout = ({ children, theme, pageName, navigation, language }) => {
    console.log('language', language)
    return (
        <SafeAreaView style={stylesDynamic(theme).cover}>
        <View style={stylesDynamic(theme).cover}>
            <View style={styles.inner}>
                {children}
            </View>
            {/* bottom naviation menu */}
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.item}
                >
                    <HomeIcon clr={pageName === strings('home', language) ? colors(theme).primary : '#666666'} width={24} height={24} />
                    <Text style={[styles.itemText, {
                        color: pageName === strings('home', language) ? colors(theme).primary : '#666666'
                    }]}>
                        {strings('home', language)}
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.item}
                >
                    <HomeIcon clr={pageName === strings('home', language) ? colors(theme).primary : '#666666'} width={24} height={24} />
                    <Text style={[styles.itemText, {
                        color: pageName === strings('home', language) ? colors(theme).primary : '#666666'
                    }]}>
                        {strings('something', language)}

                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.item}
                >
                    <HomeIcon clr={pageName === strings('home', language) ? colors(theme).primary : '#666666'} width={24} height={24} />
                    <Text style={[styles.itemText, {
                        color: pageName === strings('home', language) ? colors(theme).primary : '#666666'
                    }]}>
                        {strings('something', language)}
                        
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BasicWebview')}
                    style={styles.item}
                >
                    <HomeIcon clr={pageName === strings('home', language) ? colors(theme).primary : '#666666'} width={24} height={24} />
                    <Text style={[styles.itemText, {
                        color: pageName === strings('home', language) ? colors(theme).primary : '#666666'
                    }]}>
                        {strings('webview', language)}
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={styles.item}
                >
                    <MoreIcon clr={pageName === strings('profile', language) ? colors(theme).primary : '#666666'} width={24} height={24} />
                    <Text style={[styles.itemText, {
                        color: pageName === strings('profile', language) ? colors(theme).primary : '#666666'
                    }]}>
                        {strings('more', language)}
                    </Text>
                </TouchableOpacity>
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
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 100,
        borderTopWidth: 1,
        paddingTop: 10,
        paddingBottom: 8,
        borderTopColor: '#e0e0e0',
    },
    item: {
        alignItems: 'center',
    }, itemText: {
        // backgroundColor:'blue'
    }
});
const stylesDynamic = (theme) => StyleSheet.create({
    cover: {
        backgroundColor: colors(theme).background,
        flex: 1,
    },

})

export default MainLayout;