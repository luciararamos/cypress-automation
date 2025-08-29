describe('template spec', () => {
  it('cadastrar usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Lulu');
    cy.get('input[name="email"]').type('lulu_teste@email.com');
    cy.get('input[name="password"]').type('Lu87654321');
    cy.get('input[name="confirm_password"]').type('Lu87654321');
    cy.contains('button','Cadastrar').click();
  })

   it('realizar login', () => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/login');
     cy.get('#email').should('exist');
     cy.get('input[name= "email"]').type('lulu_teste@email.com');
     cy.get('input[name= "password"]').type('Lu87654321');
     cy.contains('button','Entrar').click();
     cy.get('.home').should('exist');


 })
})