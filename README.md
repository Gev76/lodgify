For running the tests in this repository you should complete the following steps:

1. Install Node modules: 

    Be sure that you have already installed Node and NPM on your device 
    Open the terminal and navigate to the root directory, which you cloned
    run the following command: `npm install`

2. Be sure that the cypress is installed

    run the following command: `npm install cypress`

3. In the root directory add `cypress.env.json` file, where you will store the APItoken, login, password in the following format 
```javascript
    {
        "apiToken": "BearerToken",
        "email": "yourEmail",
        "password": "yourPassword"
    }   

    if you don't have one, you can use my testing creds: 

    {
        "apiToken": "dbdd1e545eeee8e9983be8d6be89741abbe7b589",
        "email": "gevorgtesting123@gmail.com",
        "password": "Testing1234!"
    }
```
4. Open the Cypress dashboard for running tests

    In the root directory of the repo run the following command: `npx cypress open`

5. Choose `E2E Testing`

6. Choose `Chrome` and click on `Start E2E Testing in Chrome`

7. Choose the Test that you would like to run and enjoy 