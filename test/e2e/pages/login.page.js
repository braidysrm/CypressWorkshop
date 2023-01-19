export default class LoginPage {
    userNameInputField = "#user-name"
    passwordInputField = "#password"
    loginButton = "#login-button"

    succesfulLogin() { 
    cy.get(this.userNameInputField).should("be.visible")
    cy.get(this.passwordInputField).should("be.visible")
    cy.get(this.loginButton).should("be.visible")
    cy.get(this.userNameInputField).type("standard_user")
    cy.get(this.passwordInputField).type("secret_sauce")
    cy.get(this.loginButton).click()
}
        
    
}


