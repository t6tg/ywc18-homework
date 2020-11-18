module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/ywc18-homework/' : '/',
    pwa: {
        name: 'คนละครึ่ง',
        themeColor: '#27397c',
        msTileColor: '#27397c',
        display: 'standalone',
        appleMobileWebAppCache: 'yes',
        manifestOptions: {
            background_color: '#27397c'
        },
        appleMobileWebAppStatusBarStyle: '#27397c'
    }
}
