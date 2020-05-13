pipeline {
    agent any
    stages {
       stage('Build docker image') {
          steps {
             echo 'Building docker image...'
             script {
		 sh 'docker ps -f name=faculty-dashboard -q | xargs --no-run-if-empty docker container stop'
		 sh 'docker container ls -a -fname=faculty-dashboard -q | xargs -r docker container rm'
                 sh 'rm -rf /home/faculty_dashboard'
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
                 sh 'docker run --restart always -d -p 80:80 --name faculty-dashboard nodejs:dev'
             }
          }
       }
    }
}
