/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
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
});