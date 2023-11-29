
exports.colors = (theme) => {
    return {
        primary: theme !== 'light' ? darkTheme.primary : lightTheme.primary,
        secondary: theme !== 'light' ? darkTheme.secondary : lightTheme.secondary,
        background: theme !== 'light' ? darkTheme.background : lightTheme.background,
        textPrimary: theme !== 'light' ? darkTheme.textPrimary : lightTheme.textPrimary,
        textSecondary: theme !== 'light' ? darkTheme.textSecondary : lightTheme.textSecondary,
        backgroundSecondary: theme !== 'light' ? darkTheme.backgroundSecondary : lightTheme.backgroundSecondary,
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
        success: '#4CAF50'
    }
}

const darkTheme = {
    primary: '#0088cc',
    secondary:'#00b8d4',
    background:'#1e1e1e',
    backgroundSecondary: '#2e2e2e',
    textPrimary:'#ffffff',
    textSecondary:'#ccc',
}
const lightTheme = {
    primary: '#0088cc',
    secondary:'#00b8d4',
    background:'#ffffff',
    backgroundSecondary: '#F6F6F6',
    textPrimary:'#1e1e1e',
    textSecondary:'#eee',
}