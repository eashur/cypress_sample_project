describe('Browser Actions', () =>{
    it('should load correct url', () =>{
        cy.visit('http://example.com/', { timeout:1000 })
    })

    it('should check correct url', () =>{
        cy.url().should('include', 'example.com')
    })
    it('should check for element', () =>{
        cy.get('h1').should('be.visible')
    })
    it('should wait 3 seconds', () =>{
        cy.wait(3000)
    })
    it('it should pause the test for debugging', () =>{
        cy.pause();
    })

})