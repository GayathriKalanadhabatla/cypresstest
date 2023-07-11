pipeline {
  agent    { 
    docker {
      image 'cypress/base:18.14.1'
    }
  }


  stages {
    stage('build and test') {
      steps {
        sh 'npm ci'
        sh 'npx cypress run --browser chrome --spec "cypress/e2e/test.cy.js"'
      }
    }
  }
}