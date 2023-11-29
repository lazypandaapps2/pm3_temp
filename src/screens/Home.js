import { View, Text, TouchableOpacity, Share, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/actions/theme';
import MainLayout from '../layouts/MainLayout';
import { strings } from '../config/strings';
import { colors } from '../config/colors';
import { useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.themeReducer.theme);
    const language = useSelector(state => state.languageReducer.language);
    const themeType = useSelector(state => state.themeReducer.theme_type);
    

    return (
        <MainLayout
            language={language}
            pageName={strings('home',language)}
            theme={theme}
            navigation={navigation}>

            <View >
                <Text>{strings('home',language)}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text>{strings('go_to_profile',language)}</Text>
                    {/* <Text>Current Theme on home {theme}</Text> */}

                </TouchableOpacity>
            </View>
        </MainLayout>
    )
}
export default HomeScreen;