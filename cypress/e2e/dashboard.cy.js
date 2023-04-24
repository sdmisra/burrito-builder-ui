import { fakeData, sadData, falsePostResp } from "../fixtures/burritoFixture";



describe('User should be able to visit page and order a burrito:', () => {

  beforeEach(() => {
    cy.intercept({method: 'GET', url: 'http://localhost:3001/api/v1/orders'}, fakeData)
    cy.intercept({method: 'POST', url: 'http://localhost:3001/api/v1/orders'}, falsePostResp)
    cy.visit('http://localhost:3000')
  })
  
  it('User should be greeted with a header that provides the site title:', () => {

    cy.get('h1')
      .should('exist').should('be.visible').contains('Burrito Builder')
  })

  it('User should see input form, and it should respond to their input by showing an order in progress:', ()=> {

    cy.get('p')
      .contains('Order: Nothing selected')

    cy.get('input').should('exist').should('be.visible')
      .type('S')
      .should('have.value', 'S')
      .type('ha')
      .should('have.value', 'Sha')
      .type('ne')
      .should('have.value', 'Shane')

    cy.get('[name="beans"]')
      .click()
    cy.get('p')
      .contains('Order: beans')

    cy.get('[name="sofritas"]')
      .click()
    cy.get('p')
      .contains('Order: beans, sofritas')
  })

  it('User should see stored orders as they are retrieved from API data as they arrive:', () => {

    cy.get('.order').should('exist').should('be.visible').should('have.length', 3).contains('Patrick')

    cy.get('.order').contains('Samuel')

    cy.get('.order').contains('Alexis')

    cy.get('.order').contains('sofritas')
  })

  it('User should be able to submit their order, and see it updated in the scheduled orders at bottom of page:', ()=> {

    cy.get('input')
    .type('Shane')

    cy.get('[name="beans"]')
    .click()
    cy.get('[name="sofritas"]')
    .click()
    cy.get('[name="queso fresco"]')
    .click()

    cy.get('.submit')
    .click()

    cy.get('.order').should('have.length', 4)
      .contains('Shane')

    // Checking for Shane's unique ingredient preference:
    cy.get('.ingredient-list')
      .contains('hot sauce')
  })
})

describe('User should be able to visit page - SAD:', () => {

  beforeEach(()=>  {
    cy.intercept({method: 'GET', url: 'http://localhost:3001/api/v1/orders'}, sadData)
    cy.visit('http://localhost:3000')
  })

  it('User should see a message indicating a lack of orders, when there are none accessible from the API array', () => {

    cy.get('.order-error')
      .should('exist').should('be.visible').contains('No orders yet!')
  })
})