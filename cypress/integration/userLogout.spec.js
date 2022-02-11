describe("Tests to see user can logout", () => {
  it("visits the page and logsout, checking localstorage after", () => {
    cy.fixture("localstorage")
      .as("localstorage")
      .then((dataFound) => {
        let data = JSON.parse(dataFound);
        Object.keys(data).forEach(function (k) {
          localStorage.setItem(k, data[k]);
        });
      });

    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get(".logoutButton").as("logoutButton").should("be.visible");
    //Expects that once localstorage is set, the user should be logined
    cy.get("@logoutButton")
      .click()
      .should(() => {
        expect(localStorage.getItem("beacon:active-account")).to.eq(
          "undefined"
        );
        expect(localStorage.getItem("beacon:donations")).to.be.null;
      });
  });
});
