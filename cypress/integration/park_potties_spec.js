describe('Park Potties Page', () => {
    beforeEach(() => {

        cy.visit('http://localhost:3000/arch/park/potties')
            .intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/reviews', { fixture: 'postedPotties.json' })
            .intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/toilets/arch', { fixture: 'parkPotties.json' })
    })

    it('Should have arch/park/potties url when displaying page', () => {
        cy.url()
            .should('eq', 'http://localhost:3000/arch/park/potties')
    })

    it('Should have a title, three buttons, a map, and toilet cards', () => {
        // cy.get('[data-testid=title]')
        //     .should('contain', 'Friendly Toilet')

        cy.get('h1')
            .should('have.length', 7)


    })
})