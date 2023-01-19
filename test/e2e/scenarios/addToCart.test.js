import LoginPage from "../pages/login.page"
import ItemsPage from "../pages/items.page"
import ShoppingCartPage from "../pages/shoppingcart.page"

const loginPage = new LoginPage()
const itemsPage = new ItemsPage()
const shoppingcart = new ShoppingCartPage()

describe("Given I want to add an item to the shopping cart", () => {
    it ("Then I should be able to add it", () => {
        cy.visit("https://www.saucedemo.com/")
        loginPage.succesfulLogin ()
        cy.get(itemsPage.backPackItemLabel).should("be.visible")
        cy.get(itemsPage.addToCartBackPackButton).should("be.visible")
        cy.get(itemsPage.addToCartBackPackButton).click()
        cy.get(itemsPage.removeFromCartBackPackButton).should("be.visible")
        cy.get (itemsPage.shoppinCartBadge).should("be.visible")   
                                                                          
    } )
} )