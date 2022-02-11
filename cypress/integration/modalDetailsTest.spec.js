describe("Tests to make sure each modal loads correctly", () => {
  it("Clicks on donate and makes sure modal details are correct", () => {
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

    cy.get(".donate")
      .its("length")
      .then((length) => {
        for (let i = 0; i < length; i++) {
          cy.get(".card")
            .eq(i)
            .find("h3")
            .invoke("text")
            .then((name) => {
              cy.get(".donate").eq(i).click();
              cy.get(".modal_description_title > h2").should("have.text", name);
              cy.get(".modal").click();
            });
        }
      });
  });
});
