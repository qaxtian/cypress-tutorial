describe('Input form', () => {
  beforeEach(() => {
    cy.seedAndVisit([])
  })

  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo')
  })

  it('accepts input', () => {
    const typedText = 'Buy Milk'

    // type the value of `typedText` in .new-todo and insure that it has that value
  })

  context('Form submission', () => {
    beforeEach(() => {
      cy.server()
    })

    it('Adds a new todo on submit', () => {
      const itemText = 'Buy eggs'
      cy.route('POST', '/api/todos', {
        name: itemText,
        id: 1,
        isComplete: false
      })

      // type and submit the value of `itemText` and insure that the field is emptied

      // check that there is a list with 1 item in it and that it contains the correct text
    })

    it('Shows an error message on a failed submission', () => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: {}
      })

      cy.get('.new-todo')
        .type('test{enter}')

      cy.get('.todo-list li')
        .should('not.exist')

      cy.get('.error')
        .should('be.visible')
    })
  })
})
