import { View, Text, TouchableOpacity, Share, Pressable, StyleSheet, NativeModules } from 'react-native';

import SimpleText from '../components/SimpleText';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setThemeType } from '../redux/actions/theme';
import { colors } from '../config/colors';
import { getDynamicHeight, showAlert } from '../helpers/Basics';
import { pageNames } from '../config/strings';
// import CodePush from 'react-native-code-push';
import MainLayout from '../layouts/MainLayout';
import HeaderLayout from '../layouts/HeaderLayout';
import ListItem from '../components/ListItem';
import NavIcon from '../assets/images/nav';
import { strings } from '../config/strings';
import { setLanguage } from '../redux/actions/languages';

const languagesAvaliable = [
    {
        name: 'English',
        id: 'en'
    }, {
        name: 'हिंदी',
        id: 'hi'
    }
]

const Language = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.themeReducer.theme);
    const language = useSelector(state => state.languageReducer.language);

    const changeColor = () => {
        dispatch(setThemeType('custom'));
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    }

    const changeLanguage = () => {
        dispatch(setThemeType('custom'));

    }

    return (
        <HeaderLayout
            titleText={strings('language_page_title', language)}
            theme={theme}
            navigation={navigation}
            showBack={true}
            showClose={false}
        >
            <View>
                {languagesAvaliable.map((item, index) => {
                    return <ListItem
                        title={item.name}
                        // Icons={NavIcon}
                        borderBottom
                        onPress={() => {
                            dispatch(setLanguage(item.id));
                            setTimeout(() => {
                                // CodePush.restartApp();
                                // ReloadManager.reload();
                                NativeModules.DevSettings.reload();

                            }, 100);
                        }}
                        theme={theme}
                    />
                })}

            </View>
        </HeaderLayout>
    )
}

const styles = StyleSheet.create({

});

const stylesDynamic = (theme) => StyleSheet.create({
    btn: {
        backgroundColor: colors(theme).primary,
        padding: 10,
    },

})
export default Language;