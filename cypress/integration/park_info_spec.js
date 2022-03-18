describe('User-selected specific park information', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd',
        { fixture: 'parkInfo.json' }).as('getParkInfo')

        cy.visit('http://localhost:3000/arch/park')
    })

    it('Should have arch/park url when displaying page', () => {
        cy.url()
            .should('eq', 'http://localhost:3000/arch/park')
    })

    it('Should display a page full of oh-so-wonderous national park information and have a button to navigate home', () => {
        cy.wait('@getParkInfo').then((interception) => {
            assert.isNotNull(interception.response.body, 'Have data from API call')
        })

        cy.get('h1')
            .should('have.text', 'Arches National Park')
            .get('[data-testid=description]')
            .should('contain', 'Visit Arches')
            .get('[data-testid=sub-heading]')
            .should('have.length', 3)
            .eq(0)
            .should('have.text', 'CYCLING / NON-CAR ADMISSION: $15.00')
            .get('[data-testid=sub-heading]')
            .eq(1)
            .should('have.text', 'OPERATING HOURS')
            .get('[data-testid=sub-heading]')
            .eq(2)
            .should('have.text', 'WEATHER')
            .get('[data-testid=info-bite]')
            .should('have.length', 3)
            .get('[data-testid=info-bite]')
            .eq(0)
            .contains('Admits one')
            .get('[data-testid=info-bite]')
            .eq(1)
            .contains('Arches National Park')
            .get('[data-testid=info-bite]')
            .eq(2)
            .contains('Arches is part')
            .get('a')
            .first()
            .should('exist')
            .click()
            .server()
            .route("/")
            .get('h1')
            .should('have.text', 'THE MIGHTY FIVE')
    })

    it('Should be able to navigate to the National Park Service website for the specific park', () => {
    cy.get('[data-testid=nps-button]')
        .click()
        .url()
        .should('eq', 'https://www.nps.gov/arch/planyourvisit/directions.htm')
    });

    it('Should be able to navigate to the park potties page for the specific park', () => {
        cy.get('[data-testid=potties-button]')
        .click()
        .server()
        .route('/arch/park/potties')
        .get('h1')
        .should('have.text', 'Arches Toilet Locator')
    })
});

