pipeline {
    agent {
        dockerfile {
            filename "Dockerfile"
            dir "."
        }
    }
    stages {
        stage('install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('deploy') {
            steps {
                sh "cd dist && tar -zcvf dist.tar.gz *"
            }
        }
    }
}
