import { View, Text, TouchableOpacity, Share, Pressable, StyleSheet } from 'react-native'
import SimpleText from '../components/SimpleText';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setThemeType } from '../redux/actions/theme';
import { colors } from '../config/colors';
import { getDynamicHeight, showAlert } from '../helpers/Basics';
import { pageNames } from '../config/strings';
import MainLayout from '../layouts/MainLayout';
import { strings } from '../config/strings';
import ListItem from '../components/ListItem';
import NavIcon from '../assets/images/nav';

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const language = useSelector(state => state.languageReducer.language);
    const theme = useSelector(state => state.themeReducer.theme);

    const changeColor = () => {
        dispatch(setThemeType('custom'));
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    }

    const changeLanguage = () => {

    }

    return (
        <MainLayout
            pageName={strings('profile', language)}
            theme={theme}
            navigation={navigation}
            language={language}>
            <View>
                <SimpleText text={strings('profile', language)} theme={theme} />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <SimpleText text={strings('go_to_home', language)} theme={theme} />
                    <SimpleText text={`${strings('current_theme_on_profile', language)} ${theme}`} theme={theme} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles(theme).btn}
                    onPress={changeColor}>
                    <Text style={{ color: 'white' }}>{strings('switch_theme', language)}</Text>
                </TouchableOpacity>

                <ListItem
                    title={strings('share', language)}
                    Icons={NavIcon}
                    borderBottom
                    onPress={() => showAlert}
                    theme={theme}
                />
                <ListItem
                    title={strings('change_language', language)}
                    Icons={NavIcon}
                    borderBottom
                    onPress={() => navigation.navigate('Language')}
                    theme={theme}
                />


            </View>
        </MainLayout>
    )

}
export default HomeScreen;

const styles = (theme) => StyleSheet.create({
    btn: {
        backgroundColor: colors(theme).primary,
        padding: 10,
    },

})
