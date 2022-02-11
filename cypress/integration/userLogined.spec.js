describe("Tests to see if user is currently logined through localstorage", () => {
  it("visits the page and expects the user data to be showing", () => {
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
    cy.get(".nav_right > *").first().should("have.text", "tz2T6p*****");

    //Expects that once localstorage is set, the user should be logined
  });
});
