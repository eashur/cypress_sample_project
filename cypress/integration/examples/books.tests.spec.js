describe('Browser Actions', () =>{
    it('should load Books website', () =>{
        cy.visit('https://books.toscrape.com/', { timeout:10000 })
        // cy.url().then((url) => {
        //     cy.log('URL: ' + url);
        //   });

        cy.url().should('include', 'toscrape')
    });

    it('should click on Travel category', () =>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });

    it('should return number of links', () =>{
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on Poetry category', () =>{
        cy.get('a').contains('Poetry').click();
        cy.get('h1').contains('Poetry');


    })

    it('should click on Olio book', () =>{
        cy.get('a').contains('Olio').click()
        cy.get('h1+.price_color').contains('£23.88')
    })

});