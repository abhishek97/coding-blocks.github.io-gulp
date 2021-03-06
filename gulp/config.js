const dest = "dist"
const src = 'src'
const tmp = '.tmp'
const assets = 'assets'
const imagesSrc = 'assets/images'
const scriptsSrc = 'assets/scripts'
const stylesSrc = 'assets/styles'
const partialsSrc = 'partials'
const helpersSrc = 'helpers'
const dataSrc = 'data'

module.exports = {
    compress: {
        src: src,
        dest: src,
        imagesSrc: '/' + imagesSrc,
    },
    validate: {},
    clean: {
        src: [
            tmp,
            dest
        ]
    },
    envSetup: {
        src: [
            src + '/**/*.*',
            '!' + src + '/**/..*',
            '!' + src + '/' + assets + '/**/*.*'
        ],
        dest: tmp
    },
    compliePartials: {
        name: "/index",
        partialsSrc: tmp + '/' + partialsSrc,
        partialsDest: tmp + '/' + partialsSrc
    },
    html: {
        src: tmp,
        dest: dest,
        partialsSrc: tmp + '/' + partialsSrc,
        helpersSrc: tmp + '/' + helpersSrc,
        dataSrc: tmp + '/' + dataSrc
    },
    minify: {
        src: src,
        dest: dest,
        assets: assets,
        imagesSrc: '/' + imagesSrc,
        scriptsSrc: '/' + scriptsSrc,
        stylesSrc: '/' + stylesSrc
    },
    completeMigrate: {
        src: [
            tmp + "/**/*.*",
            "!" + tmp + "/**/*.{hbs,json}",
            "!" + tmp + '/' + partialsSrc + "/**/*.*",
            "!" + tmp + '/' + helpersSrc + "/**/*.*",
            "!" + tmp + '/' + dataSrc + "/**/*.*"
        ],
        jsonSrc: [
          tmp + '/manifest.json'
        ],
        dest: dest
    },
    cleanBuild: {
        src: [
            tmp
        ]
    }
}
