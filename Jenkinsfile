pipeline {
    agent {
        docker {
            image 'node:10-alpine'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage("Test") {
          steps{
            sh "npm run test-headless"
          }
    }

        stage("Build") {
            steps{
              sh "npm run build --prod"
            }
        }
        stage("Copy") {
          steps{
          sh "cp -a /var/jenkins_home/workspace/angular-test/. /var/www/jenkins_test/html/"
        }
    }
  }
}
