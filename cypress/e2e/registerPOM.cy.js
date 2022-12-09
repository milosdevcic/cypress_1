/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import { loginPage } from "../page_objects/loginPOM";
import { registerPage } from "../page_objects/registerPage";

describe("register POM", () => {
  let randomUser = {
    randomEmail: faker.internet.email(),
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomPassword: faker.internet.password(),
  };

  beforeEach("visit register page", () => {
    cy.visit("/register");
    cy.url().should("include", "/register");
  });

  it("register with valid data", () => {
    registerPage.register(
      randomUser.randomFirstName,
      randomUser.randomLastName,
      randomUser.randomEmail,
      randomUser.randomPassword
    );
    cy.url().should("not.include", "/register");
  });

  it("register with existing email address", () => {
    registerPage.register(
      randomUser.randomFirstName,
      randomUser.randomLastName,
      randomUser.randomEmail,
      randomUser.randomPassword
    );
    cy.url().should("include", "/register");
  });

  it.only("regiister via BE", () => {
    cy.request(
      "POST",
      "https://gallery-api.vivifyideas.com/api/auth/register",
      {
        email: randomUser.randomEmail,
        first_name: randomUser.randomFirstName,
        last_name: randomUser.randomLastName,
        password: randomUser.randomPassword,
        password_confirmation: randomUser.randomPassword,
        terms_and_conditions: true,
      }
    );
    cy.visit("\login");
    loginPage.login(randomUser.randomEmail, randomUser.randomPassword);

  })
});