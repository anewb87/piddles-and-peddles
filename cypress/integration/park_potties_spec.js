describe('Park Potties Page', () => {
    beforeEach(() => {

        cy.visit('http://localhost:3000/arch/park/potties')
    })

    it('Should have arch/park/potties url when displaying page', () => {
        cy.url()
            .should('eq', 'http://localhost:3000/arch/park/potties')
    })

    it('Should have a title, three buttons, toilet cards, and a map', () => {
        cy.get('[data-testid=title]')
            .should('contain', 'Arches Toilet Locator')
            .get('button')
            .should('have.length', 3)
            .get('[data-testid=toilet-card]')
            .should('have.length', 11)
            .get('img')
            .should('have.attr', 'src', 'https://i.postimg.cc/y8N3rT9S/arch.png')
    })

    it('Should navigate back to home', () => {
        cy.get('[data-testid=btn-home]')
            .click()
            .server()
            .route("/")
            .get('h1')
            .should('have.text', 'THE MIGHTY FIVE')
    })

    it('Should navigate back to previous page displaying the park info', () => {
        cy.get('[data-testid=btn-back-park]')
            .click()
            .server()
            .route('/arch/park/')
            .get('h1')
            .should('have.text', 'Arches National Park')
    })

    it('Should navigate to the users checked toilets', () => {
        cy.get('[data-testid=btn-bike-safe]')
            .click()
            .server()
            .route('/arch/park/mytoiletratings')
    })
})