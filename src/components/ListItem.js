import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { isTablet } from 'react-native-device-info';
import RightArrow from '../assets/images/right-arrow';
import { FONT_SIZE_14, getDynamicHeight, FONT_SIZE_18, getDynamicWidth } from '../helpers/Basics';
// import { testProps } from '../helpers/TestIdHelper';
import { colors } from '../config/colors';
import SimpleText from './SimpleText';
const isTabletMode = isTablet()

const ListItem = ({
    title,
    isImgIconShow,
    titleStyle,
    Icons,
    borderBottom,
    onPress,
    theme
}) => {
    return (
        <TouchableOpacity
            style={[styles.mainBody, {
                paddingVertical: getDynamicHeight(Icons ? 12 : 17),
                borderBottomColor: colors(theme).textSecondary,
                borderBottomWidth: borderBottom ? 1 : 0,
            }]} onPress={onPress}>
            {Icons &&
                <View
                    style={stylesDynamic(theme).iconStyle}>
                    <Icons width={18} height={18} />
                </View>
            }
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    flex: 1,
                    marginLeft: getDynamicWidth(10),
                }}>
                    <SimpleText text={title} theme={theme} />
                <RightArrow color={colors(theme).textPrimary} width={6} height={12} />
            </View>
        </TouchableOpacity>
    );
};
export default ListItem;


const stylesDynamic = (theme) => StyleSheet.create({
    iconStyle: {
        width: getDynamicHeight(20),
        height: getDynamicHeight(30),
        justifyContent: "center",
        borderColor: colors(theme).textSecondary,
        borderWidth: 0,
    },
})
const styles = StyleSheet.create({
    mainBody: {
        flexDirection: 'row',
        paddingVertical: getDynamicHeight(5),
        alignItems: "center",
    },
    
    withIconData: {
        marginLeft: getDynamicHeight(13),
        ...(isTabletMode ? FONT_SIZE_18 : { fontSize: getDynamicHeight(18) }),
        fontFamily: 'reg',
        letterSpacing: 0.28,
    },
});
