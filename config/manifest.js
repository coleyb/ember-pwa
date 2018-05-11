/* eslint-env node */
"use strict";

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Ember Progressive Web App",
    short_name: "ember-pwa",
    description: "A demo ember progressive web app",
    start_url: "/",
    display: "standalone",
    background_color: "#ffa105",
    theme_color: "#ffa105",
    icons: [],
    apple: {
      statusBarStyle: "black-translucent"
    },

    ms: {
      tileColor: "#fff"
    }
  };
};
