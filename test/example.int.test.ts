import { WebDriver, until } from "selenium-webdriver";
import { setupBrowser } from "./helper/setupBrowser";

jest.setTimeout(60000);
describe('MyTest', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await setupBrowser('chrome');
  });

  it('calls up google', async () => {
    await driver.get('https://www.google.com');
    await driver.wait(until.titleMatches(/google/i));

    // testing something simple just to have a clear test scenario
    expect(await driver.getCurrentUrl()).toMatch(/google/i);
  });

  afterAll(() => {
    return driver.quit();
  })
});