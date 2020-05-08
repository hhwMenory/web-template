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
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh "rsync -R ./dist /storage-workspace/web/ && ls -l /storage-workspace/web/"
            }
        }
    }
}
