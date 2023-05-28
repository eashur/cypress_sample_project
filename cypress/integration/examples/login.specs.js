

describe('Working with input fields', () =>{
    it('should create timestamp from date', () =>{
        const date = new Date(2023, 5, 27).getTime();
        cy.log(date)
        cy.clock(date)
        cy.log(date)
    })


    it('should open login page', () =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({ log: true })
        cy.title().should('include', 'Zero - Log in')
    })
    it('shluld fill the username', () =>{
        cy.get('#user_login').clear();
        cy.get('#user_login').type('someuser', { delay: 30})
    })

    it('should fill the pw', () =>{
        cy.get('#user_password').clear();
        cy.get('#user_password').type('somepw')
    })
    it('should mark checkbox', () =>{
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })
    it('should click login btn', () =>{
        cy.contains('Sign in').click()
    })


    it('should display error message', () =>{
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.');

    })
})