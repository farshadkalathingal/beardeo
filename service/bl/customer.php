<?php
require_once("../data/Connect_Db.php");


	public function GetCustomerByID($customerID){		
		$customer = array($customerID => ($this->customers[$customerID]) ? $this->customers[$cudtomerID] : $this->customers[1]);
		return $customer;
	}
?>
