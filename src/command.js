/* eslint-disable no-undef */

function compareSnapshotCommand() {
  Cypress.Commands.add('compareSnapshot', (name) => {
    // take snapshot
    cy.screenshot(`${name}`);

    // run visual tests
    const options = {
      fileName: name,
      specDirectory: Cypress.spec.name,
    };
    cy.task('compareSnapshotsPlugin', options).then((results) => {
      if (results.code <= 1) throw new Error(`${name} images are different`);
    });
  });
}

/* eslint-enable no-undef */

module.exports = compareSnapshotCommand;
