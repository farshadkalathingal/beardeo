<?php
class Connect_Db
{
	var $conn = null;
	var $servername = "mysql.hostinger.in";
	var $username = "u507490112_cam";
	var $password = "cam123";
	var $dbname="u507490112_fb";	
	
	public function __construct()
	{
		$this->conn = new mysqli($this->servername, $this->username, $this->password,$this->dbname);		
	}
	/*public dbconnect()
	{
		$this->conn = new mysqli($this->servername, $this->username, $this->password,$this->dbname);		
	}*/
	function Connect()
	{		
		$connectionObj = $this->conn;
		if ($connectionObj->connect_error) 
		{
			die("Connection failed: " . $connectionObj->connect_error);
		} 
		return $this->conn;
	}
	
	function Disconnect()
	{
		$connectionObj = $this->conn;
		$connectionObj->close();
	}
}
?>
