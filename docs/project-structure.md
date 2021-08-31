# Project Structure

Most of the code lives in the `src` folder and looks like this:

```
src
|
+-- assets            # assets folder can contain all the static data such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- apps              # app based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `apps` folder, which should contain different app-based things. Every `app` folder should contain domain specific code for a specific app. This will allow you to keep functionalities scoped to a app and not mix it with the shared things. This is much easier to maintain than a flat folder structure with many files.

A app could have the following structure:

```
src/apps/awesome-app
|
+-- api         # exported API request declarations and api hooks related to the app
|
+-- components  # components scoped to the app, not used anywhere else
|
+-- hooks       # hooks scoped to the app, not used anywhere else
|
+-- routes      # route components for the given app
|
+-- types       # typescript types for the given app
|
+-- utils       # utility functions used only by the app
|
+-- index.ts    # entry point for the app, it should serve as the public API of the given app and exports everything that should be used outside the app
```

A app folder could also contain other apps (if used only within the parent app) or be kept separated, it's a matter of preference.

Everything from a app should be exported from the `index.ts` file which behaves as the public API of the app.

You should import stuff from other apps only by using:

`import {AwesomeComponent} from "@/apps/awesome-app" `js

and not

`import {AwesomeComponent} from "@/apps/awesome-app/components/AwesomeComponent`

This can also be configured in the ESLint configuration to disallow the later import by the following rule:

```
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
            patterns: ['@/apps/*/*'],
            },
        ],

    ...rest of the configuration
}
```

Inspired from how [NX](https://nx.dev/) handles libraries that are isolated but available to be used by the other modules. Think of a app as a library or a module that is self-contained but can expose different parts to other apps via its entry point.