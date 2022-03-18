describe('Home/Landing Page and selection of a park', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should have the basic / url when displaying page', () => {
        cy.url()
            .should('eq', 'http://localhost:3000/')
    })

    it('Should be able to visit the page and render the correct elements', () => {
        cy.get('img')
            .first()
            .should('have.attr', 'alt', 'bike logo with toilet paper back wheel')
            .get('p')
            .first()
            .should('have.text', 'piddles & peddles')
            .get('h1')
            .contains('THE MIGHTY FIVE')
            .get('a')
            .should('have.length', 7)
            .eq(1)
            .should('have.text', '& their toilets')
            .get('p')
            .eq(1)
            .contains('You deserve a poo with a view!')
            .get('img')
            .should('have.length', 6)
            .first()
            .should('have.attr', 'alt', 'bike logo with toilet paper back wheel')
            .get('img')
            .eq(1)
            .should('have.attr', 'alt', 'Picture of Arches National Park that is a link to take you to Arches Main Page')
            .get('img')
            .eq(2)
            .should('have.attr', 'alt', 'Picture of Bryce Canyon National Park that is a link to take you to Bryce Main Page')
            .get('img')
            .eq(3)
            .should('have.attr', 'alt', 'Picture of Canyonlands National Park that is a link to take you to Canyonlands Main Page')
            .get('img')
            .eq(4)
            .should('have.attr', 'alt', 'Picture of Capitol Reef National Park that is a link to take you to Capitol Reef Main Page')
            .get('img')
            .eq(5)
            .should('have.attr', 'alt', 'Picture of Zion National Park that is a link to take you to Zion Main Page')
    });

    it('Should be able to select a link that directs to an informational page about toilet types from which can then click a button to return to home page', () => {
        cy.get('a')
            .eq(1)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/toilettypes')
            .get('button')
            .click()
            .url()
            .should('eq', 'http://localhost:3000/')
    })

    it('Should be able to select a park and be taken to that park\'s information page', () => {
        cy.get('a')
            .eq(1)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/toilettypes')
            .get('button')
            .eq(0)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/')
            .get('a')
            .eq(2)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/arch/park')
            .get('a')
            .eq(0)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/')
            .get('a')
            .eq(3)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/brca/park')
            .get('a')
            .eq(0)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/')
            .get('a')
            .eq(4)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/cany/park')
            .get('a')
            .eq(0)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/')
            .get('a')
            .eq(5)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/care/park')
            .get('a')
            .eq(0)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/')
            .get('a')
            .eq(6)
            .click()
            .url()
            .should('eq', 'http://localhost:3000/zion/park')
    })
});
