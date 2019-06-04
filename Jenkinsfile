pipeline{
    agent any
    stages{
        stage("Checkout") {
            steps {
                checkout(scm)
            }
        }
        stage("Run containers"){
            steps{
                sh "docker-compose up -d mysql"
                sh "docker-compose up graphql"
            }            
        }

        stage("Remove containers") {
            steps {
                sh "docker-compose down"
            }
        }
    }
    
}