form-input-list
===============
[![Build Status](https://travis-ci.org/darkowlzz/simple-headers.svg?branch=master)](https://travis-ci.org/darkowlzz/form-input-list)

Get form input fields with values from a given html doc.


## To use

  1. Install it:

    ```bash
    $ npm i form-input-list
    ```


  2. Require it and use:

    ```js
    var formInput = require('form-input-list').formInput;
    var html = ''; // some html text
    formInput(html) // returns a promise
    .then(function (list) { // promise is completed
      console.log(list);
    });

    // [ { formIndex: 0, inputs: [ 'mail', 'username' ] },
    //   { formIndex: 1, inputs: [ 'msg' ] } ]
    ```

## License

MIT &copy; 2015 Sunny (darkowlzz)
