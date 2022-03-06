describe('Home/Landing Page and selection of a park', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd',
        { fixture: 'parkInfo.json' }).as('getParkInfo')

        cy.visit('http://localhost:3000/arch/park')
    })

    it('Should display a page full of oh so wonderous national park information and have a button to navigate home', () => {
        cy.wait('@getParkInfo').then((interception) => {
            assert.isNotNull(interception.response.body, '1st API call has data')
        })

        cy.get('section')
            .eq(0)
            .get('h1')
            .contains('Arches')
    })

});

