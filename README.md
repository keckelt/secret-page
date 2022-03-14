# secret-page
Super Duper  Secret Stuff

Based on https://github.com/nulltask/heroku-static-provider

## Installation

You need sign-in or sign-up to Heroku.

    $ git clone git@github.com:keckelt/secret-page.git
    $ cd secret-page
    $ heroku create
    $ git push -u heroku master
    $ heroku open

## Development

0. Install packages.

    ```sh
    $ npm install
    ```

0. Add or update files in `/public`.
0. Run on the local machine.

    ```bash
    $ npm start
    ```

0. Check on browser.
  - http://localhost:5000

## Deployment

    $ git add .
    $ git commit -a -m 'some commit message'
    $ git push heroku master
    $ heroku open

## Notes

### Adding Basic Auth

	$ heroku config:set USER=username
	$ heroku config:set PASS=password

### Screencast

  * https://vimeo.com/71315109

## License

MIT
