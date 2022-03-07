describe('User selects, deslects, and views safe toilet cards', () => {

    beforeEach(() => {

        cy.intercept('GET', 'https://piddles-api.herokuapp.com/api/v1/reviews', {

        } )
    })

    it('Should be able to select and deslect toilet cards on the park toilet locator page, navigate to selected safe toilet page to view selected toilet cards, and delete those cards', () => {

        cy.visit('http://localhost:3000/zion/park/potties')
            .get('[type=checkbox]')
            .eq(0)
            .check()
            .get('[type=checkbox]')
            .eq(3)
            .check()
            .get('[type=checkbox]')
            .eq(5)
            .check()
            .get('[type=checkbox]')
            .eq(5)
            .uncheck()
            .get('[data-testid=btn-bike-safe]')
            .click()
            .server()
            .route('/arch/park/mytoiletratings')
            .get('[data-testid=toilet-card]')
            .should('have.length', 3)
    })
})