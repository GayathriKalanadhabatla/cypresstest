pipeline {
  agent any

  stages {
    stage('build and test') {
      steps {
        sh 'npm i'
        sh 'npx cypress run --browser chrome --spec "cypress/e2e/test.cy.js"'
      }
    }
  }
}