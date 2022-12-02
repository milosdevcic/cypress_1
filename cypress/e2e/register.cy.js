/// <reference types="Cypress" />

const Locators = require("../fixtures/Locators.json");

describe("registration test", () => {
    function makeId(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      let email = `${makeId(5)}@test.com`;

    it("register with valid data", () => {
        cy.visit("/");
        cy.get(Locators.Register.registerButton).click();
        cy.get(Locators.Register.firstNameInput).type("Milos");
        cy.get(Locators.Register.lastNameInput).type("Devcic");
        cy.get(Locators.Common.emailInput).type(email);
        cy.get(Locators.Common.passwordInput).type("milos1234");
        cy.get(Locators.Register.passwordConfirmationInput).type("milos1234");
        cy.get(Locators.Register.checkBox).check();
        cy.get(Locators.Common.submitButton).click();
        cy.url().should("not.include", "/register");
    })
})