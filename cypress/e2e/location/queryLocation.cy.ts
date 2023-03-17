describe('Navigate to page', () => {
  it('Navigate to page', () => {
    cy.visit('http://localhost:4200')
  })
})

describe('Search for a city', () => {
  it('Search a City', () => {
    cy.get('[data-cy="queryLocation"]').type('Groningen')
  })

  it('Query should have results', () => {
    cy.get('[data-cy="displayLocations"]').children().should('have.class', 'locationContainer')
  })

  it('Clear input', () => {
    cy.get('[data-cy="queryLocation"]').clear();
  })
})

describe('Fail a search', () => {
  it('Search a non exisiting City', () => {
    cy.get('[data-cy="queryLocation"]').type('Qwerty')
  })

  it('Query should have no results', () => {
    cy.get('[data-cy="displayLocations"]').children().should('have.class', 'noResults')
  })

  it('Clear input', () => {
    cy.get('[data-cy="queryLocation"]').clear();
  })
})

describe('Show weather information', () => {
  it('Search for a city', () => {
    cy.get('[data-cy="queryLocation"]').type('Groningen')
  })

  it('Query should have results', () => {
    cy.get('[data-cy="displayLocations"]').children().should('have.class', 'locationContainer')
  })

  it('Display weather information', () => {
    cy.get('[data-cy="displayLocations"]').children().eq(0).click();
  })
})
