describe("Checks to see if donation history was saved on refresh/stored in LocalStorage", () => {
  it("refreshes the page to ensure donations are pulled through localstorage", () => {
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
    cy.get(".historyButton").click();
    cy.get(".donation_details > h4").should("have.text", "Boogie Woogie");
    cy.get(".donation_card").its("length").should("eq", 1);

    //Expects that once localstorage is set, the user should be logined
  });
});
