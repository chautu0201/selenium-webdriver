//let LoginPage = require("../page-objects/loginPage.js");
describe("Page object", function () {
  it("login to page ", async function () {
    let pageurl = "https://the-internet.herokuapp.com/login";
    await browser.url(pageurl);
    await browser.pause(3000);
  });
});
