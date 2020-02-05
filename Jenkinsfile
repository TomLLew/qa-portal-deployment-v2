pipeline 
{
	agent any 
	environment
	{
		ssh_ip = "51.140.11.207" //playground2
		number = "${env.BUILD_NUMBER}"
	}

	stages 
	{
		stage("install_apt_packages")
		{
			steps 
			{
				sh '''ssh -o StrictHostKeyChecking=no ${ssh_ip} << EOF
					echo thing	
				'''
			}
		}
	}
}
