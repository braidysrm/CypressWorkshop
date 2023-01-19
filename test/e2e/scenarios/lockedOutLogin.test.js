import LoginPage from "../pages/login.page"
import ItemsPage from "../pages/items.page"

const loginPage = new LoginPage()
const itemsPage = new ItemsPage()

describe("Given I want to login", () => {
    it("Then I should be able to login", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get(loginPage.userNameInputField).should("be.visible")
        cy.get(loginPage.passwordInputField).should("be.visible")
        cy.get(loginPage.loginButton).should("be.visible")
        cy.get(loginPage.userNameInputField).type("standard_user")
        cy.get(loginPage.passwordInputField).type("secret_sauce")
        cy.get(loginPage.loginButton).click()
        cy.get(itemsPage.backPackItemLabel).should("be.visible")
    } )
} )