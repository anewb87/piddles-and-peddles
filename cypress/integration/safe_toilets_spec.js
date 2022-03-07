describe('User-selected specific park information', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/reviews',
            { fixture: 'postedPotties.json' })

        cy.visit('http://localhost:3000/mytoiletratings')
    })

    it('Should display a title, a button to go home, and the posted toilet cards', () => {
        cy.get('h1')
            .should('have.text', 'My Safe Bike Locations')
            .get('button')
            .should('have.text', 'Home')
            .get('[data-testid=toilet-card]')
            .should('have.length', 3)

    })

    it('Shoud be able to navigate to home page', () => {
        cy.get('button')
            .click()
            .server()
            .route('/')
            .get('h1')
            .should('have.text', 'THE MIGHTY FIVE')
    })
})