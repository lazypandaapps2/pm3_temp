import {
  Platform,
  ToastAndroid,
  AlertIOS,
  Alert,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-simple-toast';
import DeviceInfo from 'react-native-device-info';


const isTablet = DeviceInfo.isTablet();
const ratio = isTablet ? 1.5 : 1
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const perceivedWidth = 414;
const perceivedHeigth = 861;
const { width, height } = Dimensions.get('window')
export const responsiveWidth = (percentage) => ((percentage / 100) * (width < height ? width : height)) / ratio
export const responsiveHeight = (percentage) => ((percentage / 100) * (width < height ? height : width)) / ratio
export const exactWidth = (percentage) => ((percentage / 100) * (width < height ? width : height))
export const exactHeight = (percentage) => ((percentage / 100) * (width < height ? height : width))
export const getPercentageOf = (percentage, value) => parseInt((percentage / 100) * value)

export const humanReadbleDate = (timestamp, withoutYear) => {
  if (timestamp === undefined || timestamp === null || timestamp.length === 0)
    return '';
  var nd = new Date(Number(timestamp));
  var todate = parseInt(nd.getDate());
  if (todate < 10) todate = '0' + todate;
  var tomonth = parseInt(nd.getMonth());
  var toyear = nd.getFullYear();
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  var original_date = '' + months[nd.getMonth()] + ' ' + todate + ', ' + toyear;
  if (withoutYear) {
    original_date = '' + months[nd.getMonth()] + ' ' + todate;
  }
  return original_date;
};
export const getDynamicHeight = (input) => {
  return parseInt(parseFloat(screenHeight / perceivedHeigth) * input) / ratio;
};
export const getDynamicWidth = (input) => {
  return parseInt(parseFloat(screenWidth / perceivedWidth) * input) / ratio;
};

export const humanReadbleDatePicker = (timestamp) => {
  if (timestamp === undefined || timestamp === null || timestamp.length === 0)
    return '';
  var nd = new Date(Number(timestamp));
  var todate = parseInt(nd.getDate());
  if (todate < 10) todate = '0' + todate;
  var tomonth = parseInt(nd.getMonth() + 1);
  if (tomonth < 10) tomonth = '0' + tomonth;
  var toyear = nd.getFullYear();
  var original_date = todate + '-' + tomonth + '-' + toyear;
  return original_date;
};

export const makeRandomId = (strLength) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < strLength; i++) {
    try {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } catch (error) {

    }
  }
  return result;
};

export const humanReadbleDateHours = (timestamp) => {
  if (timestamp === undefined || timestamp === null || timestamp.length === 0)
    return '';
  var nd = new Date(Number(timestamp));
  var todate = parseInt(nd.getDate());
  if (todate < 10) todate = '0' + todate;
  var tomonth = parseInt(nd.getMonth() + 1);
  if (tomonth < 10) tomonth = '0' + tomonth;
  var toyear = nd.getFullYear();
  var hr = nd.getHours();
  var min = nd.getMinutes();
  var sec = nd.getSeconds();

  var original_date =
    todate + '/' + tomonth + '/' + toyear + ' ' + hr + ':' + min + ':' + sec;
  return original_date;
};
export const showAlert = (msg = '') => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    // Toast.show(msg)
  }
};

export const showDisplayAlert = (title, msg, closeMsg, isCancelable) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: closeMsg,
        onPress: () => {
          // console.log('Cancel Pressed')
        },
        style: 'cancel',
      },
    ],
    { cancelable: isCancelable },
  );
};

export const basicCallToActionAlert = (
  title,
  description,
  cancelText,
  proceedText,
  cancelCb,
  proceedCb,
) => {
  Alert.alert(
    title,
    description,
    [
      {
        text: cancelText,
        onPress: cancelCb,
        style: 'cancel',
      },

      { text: proceedText, onPress: proceedCb },
    ],
    { cancelable: false },
  );
};
export const basicCallToActionAlertSingle = (
  title,
  description,
  cancelText,
  cancelCb,
) => {
  Alert.alert(
    title,
    description,
    [
      {
        text: cancelText,
        onPress: cancelCb,
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

export const capitalizeFirstLetter = (string) => {
  if (string && string.length > 1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return '';
  }
};
export const findIndexByKey = (arr, key, keyVal) => {
  let index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === keyVal) {
      index = i;
      break;
    }
  }
  return index;
};

export const prevPageName = (navigation) => {
  if (
    navigation.dangerouslyGetParent() !== undefined &&
    navigation.dangerouslyGetParent() !== null
  ) {
    return navigation.dangerouslyGetParent().state.routeName;
  } else {
    return '';
  }
};

export const getDateString = (date) => {
  // console.log('DATE >>>', dateObj)
  const dateObj = typeof date === 'string' ? new Date(date) : date
  try {
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    return day + ':' + month + ':' + year;
  } catch (error) {
    // console.log('err >>>,', dateObj)
    return '00:00:00'
  }
};

export const FONT_SIZE_8 = {
  fontSize: getDynamicHeight(8.7),
  color: '#1E1F20',
};

export const FONT_SIZE_10 = {
  fontSize: getDynamicHeight(10),
  color: '#1E1F20',
};

export const FONT_SIZE_12 = {
  fontSize: getDynamicHeight(12),
  color: '#1E1F20',
};

export const FONT_SIZE_13 = {
  fontSize: getDynamicHeight(14),
  color: '#1E1F20',
};

export const FONT_SIZE_14 = {
  fontSize: getDynamicHeight(14),
  color: '#1E1F20',
};

export const FONT_SIZE_16 = {
  lineHeight: getDynamicHeight(20),
  fontSize: getDynamicHeight(16),
};

export const FONT_SIZE_18 = {
  fontSize: getDynamicHeight(18),
  color: '#1E1F20',
};

export const FONT_SIZE_20 = {
  fontSize: getDynamicHeight(20),
  color: '#1E1F20',
};

export const FONT_SIZE_25 = {
  fontSize: getDynamicHeight(25),
  color: '#1E1F20',
};

export const FONT_SIZE_28 = {
  fontSize: getDynamicHeight(28),
  color: '#1E1F20',
};

export const formateDate = (date) => {
  let formattedDate1 = '';
  if (date === undefined || date === null || date === '') {
    return formattedDate1;
  }

  if (date) {
    const [day, month, year] = date && date.split('-');
    formattedDate1 = `${year}-${month}-${day}` + 'T12:00:00Z';
  }
  return formattedDate1;
};



export const fetchToken = async () => {
  try {
    let token = await AsyncStorage.getItem('token');
    // console.log(token)
    if (token === undefined || token === null || token.length === 0 || token === 'null') {
      return "";
    } else {
      return token;
    }
  }
  catch (error) {
    //   alert(error)
    return "";
  }
}
