Template.configureLoginServiceDialogForInstagram.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl()
  }
})

Template.configureLoginServiceDialogForInstagram.fields = () => ([
  { property: 'appId', label: 'App ID' },
  { property: 'secret', label: 'App Secret' }
])