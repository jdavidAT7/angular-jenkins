pipeline {
  agent {
    docker { image 'node:16.13.1-alpine' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }

    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}