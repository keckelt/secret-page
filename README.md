# secret-page
Super Duper Secret Page to deploy at [Heroku](https://www.heroku.com/).
Uses Basic Authentication to restrict access.

Based on https://github.com/nulltask/heroku-static-provider

## Deploy on Heroku

* You need sign-in or sign-up to Heroku.
* Create a new app and give it a name
* Connect new app to this repository
* deploy the `main` branch manually, enable automatic deploys

## Development

1. Install packages.

    ```sh
    $ npm install
    ```

2. Add or update files in `/public`.
3. Run on the local machine.

    ```bash
    $ npm start
    ```

4. Check on browser.
  - http://localhost:5000

5. Push changes to Github, page will be automatically redeployed

## Adding Basic Auth

For the real secretiveness, set `USER` and `PASS` config vars in the settings of the Heroku App
