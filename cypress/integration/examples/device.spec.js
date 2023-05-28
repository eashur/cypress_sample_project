describe('Device Test', () =>{
    it('720', () =>{
        cy.viewport(1280, 720)
        cy.visit('http://example.com/')
        cy.wait(3000)
    })
    it('1080p', () =>{
        cy.viewport(1980, 1080)
        cy.visit('http://example.com/')
        cy.wait(3000)
    })
    it('IPhone', () =>{
        cy.viewport('iphone-5')
        cy.visit('http://example.com/')
        cy.wait(3000)
    })
    it('galaxy', () =>{
        cy.viewport('samsung-s10')
        cy.visit('http://example.com/')
        cy.wait(3000)
    })
})