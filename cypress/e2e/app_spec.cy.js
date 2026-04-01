describe('Express App', () => {
  it('should display the welcome message', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Bienvenue sur notre application CI/CD !');
  });

  it('should return a successful response', () => {
    cy.request('http://localhost:3000').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
