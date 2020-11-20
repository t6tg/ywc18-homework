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
        shortcuts: [
            {
                name: 'คนละครึ่ง.com',
                short_name: 'คนละครึ่ง.com',
                url: 'https://www.xn--42caj4e6bk1f5b1j.com/',
                icons: [
                    {
                        src: '/img/icons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    }
                ]
            }
        ],
        appleMobileWebAppStatusBarStyle: '#27397c'
    }
}
