import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SimpleText from './SimpleText';
import { colors } from '../config/colors';
import BackButton from '../assets/images/back-button';
import CloseButton from '../assets/images/close-button';
import { getDynamicWidth,getDynamicHeight, responsiveWidth} from '../helpers/Basics';

const BasicHeader = ({ showBack, showClose, theme, navigation, titleText, gobackCall,subtitleText,onPress2 }) => {

    return (
        <View style={stylesDynamic(theme).headerStyle}>
            {showBack &&
                <TouchableOpacity
                    style={[stylesDynamic(theme).centervertical]}
                    onPress={() => { gobackCall ? gobackCall() : navigation.goBack()}}>
                    <BackButton clr={colors(theme).textPrimary} />
                </TouchableOpacity>
            }
            <View style={stylesDynamic(theme).coverView}>
                {titleText ? (
                    <SimpleText text={titleText} theme={theme} numberOfLines={1} fontSize={20}/>
                ) : null}
                {subtitleText ? (
                    <SimpleText
                        numberOfLines={1}
                        subtitleSize={14}
                        text={subtitleText}/>
                ) : null}
            </View>
            {showClose ? (
                <TouchableOpacity
                    style={[stylesDynamic(theme).centervertical1]} onPress={
                        onPress2? onPress2 : () => navigation.goBack()
                    }>
                    <CloseButton clr={colors(theme).textPrimary} width={getDynamicWidth(12)} />
                </TouchableOpacity>
            ) : null}
        </View>
    )

}

const styles = StyleSheet.create({

});

const stylesDynamic = (theme) => StyleSheet.create({
    headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors(theme).textSecondary,
        paddingHorizontal: getDynamicWidth(16),
        paddingVertical: getDynamicHeight(10),
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    centervertical: {
        justifyContent: 'space-evenly',
        backgroundColor: colors(theme).backgroundSecondary,
        borderRadius: getDynamicWidth(10),
        marginRight: getDynamicWidth(20),
        width: getDynamicWidth(42),
        alignItems: 'center',
        height: getDynamicHeight(42),
    },

    centervertical1: {
        justifyContent: 'space-evenly',
        backgroundColor: colors(theme).backgroundSecondary,
        borderRadius: getDynamicWidth(10),
        width: getDynamicWidth(42),
        alignItems: 'center',
        height: getDynamicHeight(42),
    },
    centervertical2: {
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0, 0, 0, 0.38)',
        borderRadius: getDynamicWidth(20),
        marginRight: getDynamicWidth(20),
        width: getDynamicWidth(40),
        alignItems: 'center',
        height: getDynamicHeight(40),
    } /*sideMenuStyle: {
            width: 26,
            height: 26,
            borderColor: 'red',
        },*/,
      /*logoStyle: {
            width: 100,
            height: 50,
        },*/ iconStyle: {
        width: getDynamicWidth(24),
        height: getDynamicHeight(24),
        marginHorizontal: 5,
    },
    iconStyle1: {
        width: getDynamicWidth(24),
        height: getDynamicHeight(24),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 10,
    } /*cartStyle: {
            width: 40,
            height: 30,
        },*/,
    profileName: {
        fontFamily: 'AvenirNextLTPro-Demi',
        color: '#1B1C1E',
        fontSize: getDynamicHeight(18),
        marginRight: responsiveWidth(2.5)
    },
    coverView: {
        flex: 1,
    },
    wishIcon: {
        position: 'absolute',
        left: 2,
        bottom: 0,
    },
    subtitle: {
        fontSize: getDynamicHeight(14),
        marginTop: getDynamicHeight(4),
        fontFamily: 'Avenir Next LT Pro',
    },
    iconStyle2: {
        width: getDynamicWidth(18),
        height: getDynamicHeight(18),
        marginTop: getDynamicHeight(4),
        marginRight: getDynamicHeight(24),
    },
})

export default BasicHeader;