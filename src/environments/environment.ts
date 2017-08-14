// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
        apiKey: "AIzaSyBXbXaCTRIyOtH8tS8KnwnuOh8_lxN8l48",
        authDomain: "doppelgunner-blog-test.firebaseapp.com",
        databaseURL: "https://doppelgunner-blog-test.firebaseio.com",
        projectId: "doppelgunner-blog-test",
        storageBucket: "doppelgunner-blog-test.appspot.com",
        messagingSenderId: "31049223051"
    }
};

