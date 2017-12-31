Package.describe({
  name   : 'valodya:instagram-config-ui',
  summary: 'Blaze configuration templates for Instagram OAuth.',
  version: '1.0.0',
  git    : 'https://github.com/Valodya/meteor-instagram-config-ui.git'
})

Package.onUse(function (api) {
  api.versionsFrom('1.4.3')

  api.use('templating@1.2.13', 'client')

  api.addFiles('instagram-login-button.css', 'client')
  api.addFiles(['instagram-configure.html', 'instagram-configure.js'], 'client')
})