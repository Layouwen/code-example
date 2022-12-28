import config from "../../config";
describe("login", () => {
  it("enter page", () => {
    cy.visit("http://lp.locnavi.com:3126/#/user/login");
    cy.get("#username").clear("ad");
    cy.get("#username").type(config.username);
    cy.get("#password").clear();
    cy.get("#password").type(config.password);
    cy.get(".ant-btn").click();

    cy.get(".ant-page-header-heading-title").contains("监控首页");
    //    cy.get('.ant-page-header-heading-title').contains('梁又文')
  });
});
