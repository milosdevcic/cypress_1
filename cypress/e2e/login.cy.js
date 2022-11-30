/// <reference types="Cypress"/>

describe("login test",() => {
    it("login with valid credentials", () => {
        cy.visit("/");
        // cy.get('a[href="/login"]');
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        // cy.get('input[id="email"]');
        cy.get("#email").type("devcicmilos91@gmail.com");
        cy.get("#password").type("Somborac91");
        cy.get("button").click();
    });

    it("logout", () => {
        // cy.wait(500);
        cy.get(".nav-link").should("have.length", 4);
       cy.get(".nav-link").eq(3).click();
    })
});

