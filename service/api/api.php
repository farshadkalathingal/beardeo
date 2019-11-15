<?php
//header("Access-Control-Allow-Origin: *");
require_once("Rest.inc.php");
require_once("../data/Connect_Db.php");

class API extends REST 
{
	protected $auth_token = "";
	protected $user_id = 0;
		const ACTIVITY_SIGNUP = 1;		
		const ACTIVITY_LOGIN = 2;
		const ACTIVITY_SEARCH = 3;
		const ACTIVITY_LIKE = 4;
		const ACTIVITY_RATING = 5;
		const ACTIVITY_VIEW = 6;
		const ACTIVITY_POSTING = 7;
		const ACTIVITY_FOLLOW = 8;
		const ACTIVITY_UPDATE_PROFILE = 9;
		const ACTIVITY_UPDATE_LOCATION = 9;
	public function __construct()
	{
		parent::__construct();
		
	}	

	//Public method for access api.
	//This method dynmically call the method based on the query string
	public function processApi()
	{
		$this->getAuthenticationToken();
		$func = strtolower(trim(str_replace("/","",$_REQUEST['rquest'])));
		$param = null;
		if(isset($_REQUEST['id']))
		{
			$param = strtolower(trim(str_replace("/","",$_REQUEST['id'])));
		}
		if((int)method_exists($this,$func) > 0)
		{
			if($param != null)
			{
				$this->$func($param);
				//$this->$func();
			}
			else
			{
				$this->$func();
			}
		}
		else
		{
			$this->response('',404); 
		}
		// If the method not exist with in this class, response would be "Page not found".
	}
	
	//Encode array into JSON
	public function encodeToJson($data)
	{
		//if(is_array($data))
		//	
			return json_encode($data);
		//
	}
	
	public function haii()
	{
		//if(is_array($data))
		//
			return "halooo";
		//
	}
	
	function getdomainname(){
	
	$connectDb=new Connect_Db();
	$Conn = $connectDb->Connect();
	$sql = "SELECT config_value FROM  application_config where config_key = 'domain_url'";				
		$result = $Conn->query($sql);					
		if ($result->num_rows >0)
		{
			while($row = $result->fetch_array()) 
			{
				return $row['config_value'];  																											
			}			
		}
	$Conn->close();
	}
	
	/*private function getAuthenticationToken()
	{
		foreach (getallheaders() as $name => $value) {
			if(trim($name) == "qboard-token")
			{
				$this->auth_token = $value;
				$this->getUserIdByToken($value);
			}
		}
	}*/
	
	private function getAuthenticationToken()
	{
  
	  $headers = array();
	  foreach ($_SERVER as $k => $v)
		{
	   if (substr($k, 0, 5) == "HTTP_")
	   {
			$k = str_replace('_', ' ', substr($k, 5));
			$k = str_replace(' ', '-', ucwords(strtolower($k)));
			if(trim(strtolower($k)) == "qboard-token")
			{		
			 $this->auth_token = $v;
			 $this->getUserIdByToken($v);
			}
	   }
		}
	}
	
	private function getUserIdByToken($token)
	{
		$connectDb=new Connect_Db();
		$userConn = $connectDb->Connect();
		$sql = "SELECT `user_uid` FROM `sign_in_logs` where `access_token` = '".$token."'";
		$result = $userConn->query($sql);		
		if($result != null && $result->num_rows >0)
		{
			while($row = $result->fetch_assoc()) 
			{
				$this->user_id = $row["user_uid"];				
			}
			
		}
		else
		{
			
		}
		$connectDb->Disconnect();
	}
	public function logData($userId,$user_activity_id,$detail)
	{
		$connectDb=new Connect_Db();
		$candidateConn = $connectDb->Connect();
		$t=time();
		$timestamp=(date("Y-m-d"));
		
		$sql = "INSERT INTO user_activity_log( user_id, user_activity_id,detail, created_timestamp	)
		VALUES ( '".$userId."','".$user_activity_id."','".$detail."','".$timestamp."');";
		
		if ($candidateConn->query($sql) === TRUE)
		{
			return "New record created successfully";
		} 
		else 
		{
			return "Error: " . $sql . "<br>" . $candidateConn->error;
		}	
		$connectDb->Disconnect();
	}
	//log user keywords
	
	
}


?>
