# lb-import-error-min-example

I was able to quickly set up lambdatest in my local environment. But as I tried to set it up in my Gitlab CI chain with protractor (as proposed by the Lambdatest documentation), I always received the following error:

`Cannot use import statement outside a module`

My generally use typescript and I commonly use import-commands on multiple positions of my projects. This repo is a minimum example which shall provoke the error in order to assist for debugging the issue.

The test will open Google and check if Google was load.

## To run the script with local driver execution

`yarn test`

## To run the script with lambdatest via Selenium

Create a `.env`-file (ignored in Git by default) with your Lambdatest credentials:

```dotenv
LB_USERNAME=<your_lambdatest_username>
LB_ACCESSKEY=<your_lambdatest_accesskey>
```

`cross-env USE_LAMBDATEST=1 yarn test`

## To run the script with lambdatest via protractor

`cross-env LB_USERNAME=<your_lambdatest_username> LB_ACCESSKEY=<your_lambdatest_accesskey> yarn test:ci`