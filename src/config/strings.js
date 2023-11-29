exports.strings = (str, language) => {
    if(language === 'en'){
        return English[str];
    }else if(language === 'hi'){
        return Hindi[str];
    }
}

const English = {
    home: 'Home',
    something: 'Something',
    webview: 'Webview',
}
const Hindi = {
    ///home
    home: 'घर',
}