describe('Home/Landing Page and selection of a park', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd', { fixture: 'parkInfo.json' })

        cy.visit('http://localhost:3000')

    })
});