# WPGatsby Headless Demo

A simple headless demo site with Gatsby on the frontend and WordPress on the backend as a data source.
Bulma CSS was added to style the demo site.

_This project was created with Gatsby Default Starter, you can find it here: https://github.com/gatsbyjs/gatsby-starter-default_

## Prerequisite
* Node
* Yarn
* Gatsby CLI (globally installed)
* A WordPress install

## Let's get started
1.  **Clone this repo.**

1.  **Install dependencies.**
    ```npm install```
    or
    ```yarn install```

1.  **Edit Gatsby config file.**
     Open `gatsby-config.js` and change these lines with your WordPress data
    ```
      options: {
        baseUrl: `wptestsite.local`, // Add the URL of your WordPress install.
        protocol: `https`, // Use https or http
        hostingWPCOM: false,
        useACF: false,
      },
    ```

1.  **Run Gatsby.**
    ```gatsby develop```

1.  **Start crafting.**

