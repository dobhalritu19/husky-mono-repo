Both-formate-are-working
"prettier": "prettier --write ."
"prettier": "prettier --write \"**/*.js\""

==================================================
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint",
    "prettier": "prettier --write ."
  },

========Common script inside package.json file to run eslint and pretter======================
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "lint": "eslint . && prettier --write \"**/*.js\""

  },