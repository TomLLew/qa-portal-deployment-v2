pipeline 
{
	agent any 
	environment
	{
		ssh_ip = "51.140.11.207" //master node
		number = "${env.BUILD_NUMBER}"
	}

	stages 
	{
		stage("setup")
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
