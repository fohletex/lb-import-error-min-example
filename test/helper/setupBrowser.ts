import fs from 'fs';
import dotenv from 'dotenv';
import webdriver from 'selenium-webdriver';
import commonCapabilites from '../common.json';

const loadEnv = () => {
  if (!fs.existsSync('.env')) {
    throw new Error('No .env file found to run lamdatest locally!');
  }

  return dotenv.config({ path: '.env' }).parsed as Partial<Record<string, string>>;
};

let env: Partial<Record<string, string>> = (process.env.USE_LAMBDATEST) ? loadEnv() : {};
export const setupBrowser = (whichBrowser: string) => {
  if (process.env.USE_PROTRACTOR) {
    return (browser as any).driver;
  }
  
  if (env.LB_USERNAME && env.LB_ACCESSKEY) {
    const gridUrl = `https://${env.LB_USERNAME}:${env.LB_ACCESSKEY}@hub.lambdatest.com/wd/hub`;
    const capabilities = {
      ...commonCapabilites,
      browserName: 'Chrome',
      platform: 'Windows 10',
      version: '92.0',
    };

    console.log(`Loading test with capabilites: ${JSON.stringify(capabilities, undefined, 2)}`);
    return new webdriver.Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
  }
  
  return new webdriver.Builder().forBrowser(whichBrowser).build();
};
