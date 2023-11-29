import { View, Text, TouchableOpacity, Share, Pressable, StyleSheet } from 'react-native';
import { colors } from '../config/colors';
import { getDynamicHeight, FONT_SIZE_16 } from '../helpers/Basics';

const SimpleText = ({ text, theme, fontSize, additionalClass, numberOfLines }) => {
    return (
        <Text
            style={[stylesDynamic(theme).text,
            {
                fontSize: fontSize ? getDynamicHeight(fontSize) : getDynamicHeight(16),
            },
            additionalClass ? additionalClass : {}
            ]}
            numberOfLines={numberOfLines ? numberOfLines : null}
        >
            {text}
        </ Text>
    )
}

const stylesDynamic = (theme) => StyleSheet.create({
    text: {
        color: colors(theme).textPrimary,

    }
});

export default SimpleText;