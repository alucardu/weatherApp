describe('Navigate to page', () => {
  it('Navigate to page', () => {
    cy.visit('http://localhost:4200')
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

  it('Has header information', () => {
    cy.get('[data-cy="weatherHeader"]').contains('Groningen')
  })

  it('Weather table has initial result', () => {
    cy.get('[data-cy="weatherTable"]').find('tbody').children().should('have.length', 1)
  })
})

describe('Toggle view', () => {
  it('Toggle view', () => {
    cy.get('[data-cy="toggleView"]').click();
  })

  it('Weather table has multiple results', () => {
    cy.get('[data-cy="weatherTable"]').find('tbody').children().should('have.length.greaterThan', 1)
  })
})

describe('Change detail view', () => {
  it('Change detail view', () => {
    cy.get('[data-cy="weatherTable"]').find('tbody').children().last().children().first().invoke('text').as('date');
    cy.get('[data-cy="weatherTable"]').find('tbody').children().last().click();
  })

  it('Check if weather details is updated', function () {
    cy.get('[data-cy="weatherDetails"]').contains((this['date']).slice(4))
  })
})

describe('Change location changes detail view', () => {
  it('Search for a city', () => {
    cy.get('[data-cy="queryLocation"]').type('Sneek')
  })

  it('Query should have results', () => {
    cy.get('[data-cy="displayLocations"]').children().should('have.class', 'locationContainer')
  })

  it('Display weather information', () => {
    cy.get('[data-cy="weatherTable"]').find('tbody').children().first().children().first().invoke('text').as('date');
    cy.get('[data-cy="displayLocations"]').children().eq(0).click();
  })

  it('Check if weather details is updated', function () {
    cy.get('[data-cy="weatherDetails"]').contains((this['date']).slice(4))
  })

})
