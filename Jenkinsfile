pipeline {
    agent any
    stages {
       stage('Build docker image') {
          steps {
             echo 'Building docker image...'
             script {
		 if (sh 'docker ps -q --filter ancestor=nodejs:dev') {
			 sh 'docker stop $(docker ps -q --filter ancestor=nodejs:dev)'
		 } else {
			 echo "Else statement"
		 }
                 #try {
                 #    sh 'docker stop $(docker ps -q --filter ancestor=nodejs:dev)'
                 #} catch (err) {
                 #    echo err
                 #}
                 try {
                     sh 'rm -r /home/faculty_dashboard'
                 } catch (err) {
                     echo err
                 }
                 sh 'mkdir /home/faculty_dashboard'
                 sh 'git clone https://github.com/currentlib/faculty_dashboard.git /home/faculty_dashboard'
                 sh 'cp  /var/jenkins_home/dashboard/Dockerfile /home/faculty_dashboard'
                 sh 'cp  /var/jenkins_home/dashboard/users.json /home/faculty_dashboard'
                 sh 'cp  /var/jenkins_home/dashboard/config.json /home/faculty_dashboard'
                 sh 'cd /home/faculty_dashboard'
                 sh 'docker build -t nodejs:dev /home/faculty_dashboard'
             }
          }
       }
        stage('Run docker cntainer') {
          steps {
             echo 'Running container...'
             script {
                 sh 'docker run --restart always -d -p 80:80 nodejs:dev'
             }
          }
       }
    }
}
