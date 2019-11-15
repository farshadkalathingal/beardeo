<?php
require_once("Connect_Db.php");

class Application_User_Manager{
	public function __construct() { 
	   
	}
	public function addUser($Firstname,$Lastname,$Email,$Password,$DOB,$Sex)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "INSERT INTO `register` (`f_name`, `l_name`, `email`, `password`, `dob`, `gender`) VALUES ( '".$Firstname."', '".$Lastname."', '".$Email."', '".$Password."', '".$DOB."', '".$Sex."');";
		//$sql = "INSERT INTO `register` ( `f_name`, `l_name`, `email`, `password`, `dob`, `gender`) VALUES ( '".$Firstname."', '".$Lastname."', '".$Email."', '".$Password."', '".$DOB."', '".$Sex"')";
		if($result = $Conn->query($sql))
		{	
			return $statusCode = 1;
	  	} 
		else
		{
			return $statusCode = 0;
		}
		    
	}
	public function loginUser($Email,$Password)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "SELECT count(*),f_name FROM `register` where email='".$Email."' and password ='".$Password."'";
		$result = $Conn->query($sql);
		if ($result->num_rows >0)  {
	      		while($row = $result->fetch_assoc())    {
			       $business_locations[] = array(
				       'count'=>$row['count(*)'],
					 'Name'=>$row['f_name']);   
			}
		return $business_locations;
	  	} 
		else
		{
		return $statusCode = 404;
		}
		    
	}
	public function resetPassword($Email,$Password)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "UPDATE `register` set password='".$Password."'  where email='".$Email."'";
		if($result = $Conn->query($sql))
		{	
			return $statusCode = 1;
	  	} 
		else
		{
			return $statusCode = 0;
		}
		    
	}
	/*public function getUserByID($Regno)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "SELECT * from register where Reg_NO='".$Regno."'";
		$result = $Conn->query($sql);
		if ($result->num_rows >0)  {
	      		while($row = $result->fetch_assoc())    {
			       $business_locations[] = array(
				     'Regno'=>$row['Reg_NO'],
				     'Name'=>$row['Name'],
				     'DOB'=>$row['DOB'],
				     'Sex'=>$row['Sex'],
				     'Branch'=>$row['Branch'],
				     'Semester'=>$row['Semester']);   
			}
		return $business_locations;
	  	} 
		else
		{
		return $statusCode = 404;
		}
		    
	}
	public function getAllUsers()
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "SELECT * from register";
		$result = $Conn->query($sql);
		if ($result->num_rows >0)  {
	      		while($row = $result->fetch_assoc())    {
			       $business_locations[] = array(
				     'Regno'=>$row['Reg_NO'],
				     'Name'=>$row['Name'],
				     'DOB'=>$row['DOB'],
				     'Sex'=>$row['Sex'],
				     'Branch'=>$row['Branch'],
				     'Semester'=>$row['Semester']);   
			}
		return $business_locations;
	  	} 
		else
		{
		return $statusCode = 404;
		}
		    
	}
	public function deleteUser($Regno)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "DELETE from register where Reg_NO='".$Regno."'";
		$result = $Conn->query($sql);
		if($result = $Conn->query($sql))
		{	
			return $statusCode = 204;
	  	} 
		else
		{
			return $statusCode = 404;
		}
		    
	}
	public function getSeminar()
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "SELECT * from seminar";
		$result = $Conn->query($sql);
		if ($result->num_rows >0)  {
	      		while($row = $result->fetch_assoc())    {
			       $business_locations[] = array(
				     'topic'=>$row['Topic'],
				     'desc'=>$row['Desc'],
				     'branch'=>$row['Branch']);   
			}
		return $business_locations;
	  	} 
		else
		{
		return $statusCode = 404;
		}
		    
	}*/
	public function feedBackAdd($name,$email,$command)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "INSERT INTO `feedback` (`name`, `email`, `message`) VALUES ('".$name."', '".$email."', '".$command."')";
		if($result = $Conn->query($sql))
		{	
			return $statusCode = 1;
	  	} 
		else
		{
			return $statusCode = 0;
		}
		    
	}
	
	
	public function addEmail($email)
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "INSERT INTO `tips` ( `email`) VALUES ('".$email."')";
		if($result = $Conn->query($sql))
		{	
			return $statusCode = 1;
	  	} 
		else
		{
			return $statusCode = 0;
		}
		    
	}
	/*
	public function getFeedback()
	{
		$connectDb = new Connect_Db();
		$Conn = $connectDb->Connect();
		$sql = "SELECT * from feedback";
		$result = $Conn->query($sql);
		if ($result->num_rows >0)  {
	      		while($row = $result->fetch_assoc())    {
			       $business_locations[] = array(
				     'Name'=>$row['StudName'],
				     'Email'=>$row['Email'],
					 'Command'=>$row['Command']);   
			}
		return $business_locations;
	  	} 
		else
		{
		return $statusCode = 404;
		}
		    
	}*/	
}
?>
