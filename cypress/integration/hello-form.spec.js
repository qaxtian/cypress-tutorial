describe('Hello world component', () => {
    it('does not display on load', () => {
        cy.get('[data-testid="hello-world-output"]')
            .should('have.length', 0)
    })

    it('Displays the appropriate message', () => {
        cy.visit('/')

        // get the input by its test id and type "Hello"

        // get the output and insure that it contains "Hello, World!"

        // change the text to say "What a wonderful, World!"
        // reference https://docs.cypress.io/api/commands/type.html

        cy.get('[data-testid="hello-world-output"]')
            .should('not.contain', 'Hello')

    })
})
