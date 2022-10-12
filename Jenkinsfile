node {
    stage('Checkout SCM') {
        git branch: 'master', url: 'https://github.com/jdavidAT7/angular-jenkins.git'
    }

    stage('Install node modules') {
        sh "npm install"
    }

    stage("Test") {
        sh "npm run test"
    }

    stage("Build") {
        sh "npm run build --prod"
    }
    
}