import Hindi from './hindi';
import English from './english';

exports.strings = (strName, language) => {
    if(!language) {
        language = 'en';
    }
    if(language === 'hi') {
        return Hindi[strName];
    }
    if(language === 'en') {
        return English[strName];
    }

    return English[strName];
}