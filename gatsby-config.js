const postCssPresetEnv = require(`postcss-preset-env`);
const postCSSNested = require("postcss-nested");
const postCSSUrl = require("postcss-url");
const postCSSImports = require("postcss-import");
const cssnano = require("cssnano");
const postCSSMixins = require("postcss-mixins");

module.exports = {
  siteMetadata: {
    title: `Omer Bayram`,
    description: `Portfolio website of a Full Stack Web developer.`,
    copyrights: "Copyright @Omer Bayram 2020",
    author: `@Omer Bayram`,
    logo: {
      src: "",
      alt: "",
    },
    logoText: "Omer Bayram",
    defaultTheme: "dark",
    showMenuItems: 2,
    menuMoreText: "Show more",
    mainMenu: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Contact Me",
        path: "/contact",
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: "src/styles/variables.css",
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: "default",
          }),
        ],
      },
    },
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omer Bayram portfolio site`,
        short_name: `Omer`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
