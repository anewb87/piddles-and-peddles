describe('User posts and deletes safe toilet cards', () => {

    it('Should be able to post a safe toilet card', () => {
        cy.intercept('POST', 'https://piddles-api.herokuapp.com/api/v1/reviews', {
            "id": 22,
            "location": "Backyard",
            "type": "pit"
        }).as('post')

        cy.visit('http://localhost:3000/arch/park/potties')

        cy.get('[type=checkbox]')
        .first()
        .click()
        cy.wait('@post').then(console.log)
    })

    it('Should be able to delete a safe toilet card', () => {
        cy.intercept('DELETE', 'https://piddles-api.herokuapp.com/api/v1/reviews/22', {
            statusCode: 200,
            body: {
                message: 'Bike safety review has been deleted'
            }
        })

        cy.intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/reviews', { fixture: 'postedPotties.json' })

        cy.visit('http://localhost:3000/mytoiletratings')
            .get('[type=checkbox]')
            .first()
            .click()
            .get('[type=checkbox]')
            .should('have.length', 2)
    })
})