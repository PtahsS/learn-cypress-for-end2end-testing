describe('App E2E', () => {
    it('slould have form', () => {
        cy.visit("/");

        cy.get('input').should('have.value', '');
        cy.get('button').should('have.text', 'Add todo');
    })

    it('should add task', () => {
        cy.get('input[type="text"]').type('Learn React').should('have.value', 'Learn React');
        cy.contains('Add todo').click();
        
        cy.get('li span:first-of-type').should('have.text', 'Learn React');
        cy.get('input[type="text"]').should('value.value', '');

        cy.get('input[type="text"]').type('Learn Redux').should('have.value', 'Learn Redux');
        cy.contains('Add todo').click();
        
        cy.get('li:first-child span:first-of-type').should('have.text', 'Learn Redux');
        cy.get('input[type="text"]').should('value.value', '');
    })
    
    it('should delete task', () => {
        cy.get('li').should('have.length', 2);
        
        cy.get('li:last-child input[type="button"]').click(); 
        
        cy.get('li').should('have.length', 1);
        cy.get('input[type="text"]').type('Learn Redux').should('have.value', 'Learn Redux');
    })

    it ('should toggle status', () => {
        cy.get('li input[type="checkbox"]').should('not.have.checked').click().should('have.checked');
    })
})