describe('User Sign-up App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const checkboxInput = () => cy.get('input[name=termsOfService]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })
    
    describe('Filling out the inputs', () => {
        describe('Text inputs', () => {
            it('can type in the inputs', () => {
                nameInput()
                    .should('have.value', '')
                    .type('Josh Scanlan')
                    .should('have.value', 'Josh Scanlan')
                emailInput()
                    .should('have.value', '')
                    .type('josh@test.com')
                    .should('have.value', 'josh@test.com')
                passwordInput()
                    .should('have.value', '')
                    .type('abcd1234')
                    .should('have.value', 'abcd1234')
            })
        })

        describe('Checkbox', () => {
            it('can check the checkbox', () => {
                checkboxInput()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
            })
        })
    })

})