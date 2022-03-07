describe('Error page', () => {

    it('Should have a message and a button to take to home page', () => {
        cy.visit('http://localhost:3000/error')

        cy.get('[data-testid=message]')
            .contains('Looks like')
            .get('button')
            .should('have.text', 'Take Me Home (Country Roads)')
    })

    it('Should handle 404 errors on park info page', () => {
        cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd', { statusCode: 404 })

        cy.visit('http://localhost:3000/arch/park')

        cy.get('[data-testid=message]')
            .contains('Looks like')
            .get('button')
            .should('have.text', 'Take Me Home (Country Roads)')
    })

    it('Should handle 404 errors on park potties page', () => {
        cy.intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/toilets/arch', { statusCode: 404 })

        cy.visit('http://localhost:3000/arch/park/potties')

        cy.get('[data-testid=message]')
            .contains('Looks like')
            .get('button')
            .should('have.text', 'Take Me Home (Country Roads)')
    })

    it('Should handle 404 errors on selected safe toilets page', () => {
        cy.intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/reviews', { statusCode: 404 })

        cy.visit('http://localhost:3000/mytoiletratings')

        cy.get('[data-testid=message]')
            .contains('Looks like')
            .get('button')
            .should('have.text', 'Take Me Home (Country Roads)')
    })

    it('Should reroute to the error page upon typing in an incorrect url', () => {
        cy.visit('http://localhost:3000/lexyisthebest')
            .url()
            .should('eq', 'http://localhost:3000/error')
    })
})