pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                sh 'cd server && npm install'
                sh 'cd client && npm install && npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t mern-app .'
            }
        }

        stage('Push to ECR') {
            steps {
                sh 'docker tag mern-app:latest <ECR_URI>'
                sh 'docker push <ECR_URI>'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}