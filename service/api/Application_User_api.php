<?php
require_once("api.php");
require_once("../data/Application_User_Manager.php");
	class Application_User_api extends API{ 
		public function __construct() { 
	 
			parent::__construct();  
		}


		public function addUser()
		{
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);
			$Firstname= $input["Firstname"]; 
			$Lastname= $input["Lastname"];
			$Email= $input["Email"];  
			$Password= $input["Password"];
			$DOB= $input["DOB"];
			$Sex= $input["Sex"];
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->addUser($Firstname,$Lastname,$Email,$Password,$DOB,$Sex);
			echo parent::encodeToJson($result);
		}
		public function resetPassword()
		{
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);   
			$Email= $input["Email"]; 
			$Password= $input["Password"];
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->resetPassword($Email,$Password);
			echo parent::encodeToJson($result);
		}
	/*	public function getUserByID()
		{
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);   
			$Regno= $input["Regno"];   
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->getUserByID($Regno);
			echo parent::encodeToJson($result);
		}
		public function getAllUsers()
		{ 
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->getAllUsers();
			echo parent::encodeToJson($result);
		}
		public function deleteUser()
		{
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);   
			$Regno= $input["Regno"];
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->deleteUser($Regno);
			echo parent::encodeToJson($result);
		}*/
		public function loginUser()
		{
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);
			$Email= $input["Email"]; 
			$Password= $input["Password"];  
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->loginUser($Email,$Password);
			echo parent::encodeToJson($result);
		}
		public function feedBackAdd()
		{
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);
			$name= $input["name"]; 
			$email= $input["email"];
			$command= $input["command"];  
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->feedBackAdd($name,$email,$command);
			echo parent::encodeToJson($result);
		}
		public function addEmail()
		{ 
			$inputJSON = file_get_contents('php://input');
		 	$input = json_decode($inputJSON,TRUE);
			$email= $input["email"];
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->addEmail($email);
			echo parent::encodeToJson($result);
		}
	/*	public function getSeminar()
		{ 
			$application_user_manager = new Application_User_Manager;
			$result = $application_user_manager->getSeminar();
			echo parent::encodeToJson($result);
		}*/		
	}
	
	$api = new Application_User_api;
	$api->processApi();
?>
