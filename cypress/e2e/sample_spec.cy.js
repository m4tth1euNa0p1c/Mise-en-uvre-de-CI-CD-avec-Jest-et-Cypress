describe('Sample Test', () => {
  it('should visit a page and check the title', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
  });

  it('should contain a link', () => {
    cy.visit('https://example.com');
    cy.get('a').should('have.attr', 'href');
  });
});
