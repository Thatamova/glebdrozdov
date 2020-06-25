// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-nested": {},
    "o3inline-svg": {
      path: './src/assets/img'
    },
    "autoprefixer": {},
    "postcss-custom-properties": {
      importFrom: './src/assets/css/_variables.css',
      preserve: false,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-mod-function': true,
      },
    },
    "postcss-css-variables": {},
  }
}
