// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyChkO2SVD13BX49IX6ZadWrVrPp5p6oIl0",
    authDomain: "todolistapp-fda9f.firebaseapp.com",
    databaseURL: "https://todolistapp-fda9f.firebaseio.com",
    projectId: "todolistapp-fda9f",
    storageBucket: "",
    messagingSenderId: "1095463223079"
  }
};
