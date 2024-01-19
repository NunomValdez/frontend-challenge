import mockedData from '../../src/assets/mocked-data.json'

describe('TranscriptionHeader Component', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', 'https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3', {
      fixture: 'mocked-data.json'
    }).as('mocked-data')
    cy.intercept('POST', 'https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3', {}).as(
      'uploadData'
    )
  })

  it('has the transcriptions title', () => {
    cy.get('h1').contains('Transcriptions')
  })

  it('loads data on Get Data button click', () => {
    cy.get('[data-cy="get-data-btn"]').click()
    cy.get('[data-cy="list-item"]').should('have.length', mockedData.length)
  })

  it('calls uploadData on Upload Data button click', () => {
    cy.get('[data-cy="upload-data-btn"]').click()
    cy.wait('@uploadData')
  })

  it('adds a new row on button click', () => {
    cy.get('[data-cy="add-row-btn"]').click()
    cy.get('[data-cy="list-item"]').should('have.length', 1)
  })

  it('deletes an item when delete button is clicked', () => {
    cy.get('[data-cy="get-data-btn"]').click()
    cy.get('[data-cy="list-item"]').should('have.length', mockedData.length)
  })
})
