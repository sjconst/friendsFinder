# friendsFinder

![node](https://img.shields.io/node/v/express) ![npm](https://img.shields.io/npm/v/express) ![GitHub issues](https://img.shields.io/github/issues/sjconst/friendsFinder)

A node.js app/full-stack site that takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. Express is used to handle the routing.

![friendFinder](https://user-images.githubusercontent.com/42453320/67243900-723f1600-f40d-11e9-82da-2d33a0def9b8.gif)

## Installation and setup

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with npm) installed on your computer. From your command line: 

If you've forked this repo with the package.json file, in your CLI, simply: 

```
# Clone this repository
$ git clone git@github.com:sjconst/friendsFinder.git

# Go to the repository
$ cd friendsFinder

# Install dependencies
$ npm install

# Run the app
$ node server.js

```
## Key Features

* Calculates the user's survey input and compares it to all other users at /api/friends
* A folder structure that separates routes, data, and UI components
* Form validation using checkValidity() 

```
const inputs = document.querySelectorAll("input, select");

function getValidated(inputs){    
    let allValid = 0;
    inputs.forEach(input => {
    let isValid = input.checkValidity();
    if(isValid){
            allValid++;
        }
    });
    return allValid;
}

let allValid = getValidated(inputs);
```

## Credits

This software uses the following open source packages:

* [Node.js](https://nodejs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Bootstrap-select](https://www.npmjs.com/package/bootstrap-select)
* [Express](https://expressjs.com/)
* [jQuery](https://jquery.com/)

## Author

* Author: Stephanie Lake - https://github.com/sjconst
* FriendFinder github repo: https://github.com/sjconst/friendsFinder

## License

https://img.shields.io/bower/l/bootstrap

