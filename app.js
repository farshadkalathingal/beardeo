angular.module("BeardApp", ['ngStorage'])	 
    .controller("LoginPageCtrl",['$scope','$http','$window','$localStorage',
	function ($scope,$http,$window,$localStorage) {
		
		
		var sname = $localStorage.Name || null;
		if(sname == null)
		{
			first="login";
		}
		else
		{
			var first = sname.split(" ", 1);
		}

		var str = "How are you doing today?";
		
		//console.log(sname);
		// var index = sname.indexOf(" ");
		// var  first = sname.substr(0, index);
		if (sname === "login")
		{
			$scope.fName = "login";
		}
		else
		{
			$scope.fName = ""+first;
		}
		$scope.hoverIn = function()
		{
			if ($scope.fName != "login")
			{
				$scope.fName = "LOGOUT";
			}
		};
		$scope.hoverOut = function()
		{
			if ($scope.fName == "LOGOUT")
			{
				$scope.fName = ""+first;
			}
		};
		
		$scope.LoginPage = function() 
		{
			$localStorage.Name = "login" ;
			$window.location.href = "login.html";
		}
		$scope.showlogout = function() 
		{
			
		}
		$scope.show = true;

		$scope.closeAlert = function(index) {
			$scope.show = false;
		};
		/*$scope.showlogout = function() 
		{
			
		}*/
		   	    
 }])
   
   
   
   .controller('signupCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		
		 $scope.submitSignupForm = function() 
		{
			swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){	
			var  Firstname = $scope.form.firstname;
			var Lastname = $scope.form.lastname;
			var  Email = $scope.form.email;
			var Password = $scope.form.password;
			var dob = $scope.form.dob;
			var Gender = $scope.form.gender;
			
			$http({
            method : "post",
			url: "http://farshadkalathingal.pe.hu/beard'd/service/user/addUser",
            data: {"Firstname":Firstname,"Lastname":Lastname,"Email":Email,"Password":Password,"DOB":dob,"Sex":Gender},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$localStorage.Name = Firstname;
				swal({
				   title: "Success",
				   text: "Account Created successfuly",
				   type: "success",
				   showCancelButton: false,
				   showConfirmButton: false});
				 //swal("Success","Feedback submitted","success");
				$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'index.html';
				}, 1500);
			  }, function errorCallback(response) {
					swal({
						title: "Error",
						text: "Something went wrong try again",
						type: "error"
					});
			  });
			});  

		}
	}])

	

	.controller('emailCtrl',['$scope','$http','$window','$localStorage',
	function ($scope,$http,$window,$localStorage) {
		 $scope.submitEmailForm = function() 
		{
			swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){	
			$localStorage.Email = $scope.form.email;
					$window.location.href = 'resetp.html';
			}); 

		}
	}])
	
	 .controller('resetCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		
		 $scope.submitResetForm = function() 
		{
			var Hide = $scope.form.hide;
			console.log(Hide);
			if(Hide != null)
			{
			swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){	
			var Email = $localStorage.Email;
			console.log(Email);
			var Password = $scope.form.password;
			console.log(Password);
			
			$http({
            method : "post",
			url: "http://farshadkalathingal.pe.hu/beard'd/service/user/resetPassword",
            data: {"Email":Email,"Password":Password},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				swal({
				   title: "Success",
				   text: "Password Reset successfuly",
				   type: "success",
				   showCancelButton: false,
				   showConfirmButton: false});
				 //swal("Success","Feedback submitted","success");
				$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'login.html';
				}, 1500);
			  }, function errorCallback(response) {
					swal({
						title: "Error",
						text: "Something went wrong try again",
						type: "error"
				});
			  }); 

			});
	
		}
		}
	}])

	
	
	.controller('feedbackCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		
		 $scope.submitfeedbackForm = function() 
		{
			swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){
				
			var name = $scope.name;
			var email = $scope.email;
			var command = $scope.comment
			$http({
            method : "post",
			url: "http://farshadkalathingal.pe.hu/beard'd/service/user/feedBackAdd",
            data: {"name":name,"email":email,"command":command},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				swal({
				   title: "Success",
				   text: "Feedback submitted successfuly",
				   type: "success",
				   showCancelButton: false,
				   showConfirmButton: false});
				 //swal("Success","Feedback submitted","success");
				$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'contact.html';
				}, 1500);
			  }, function errorCallback(response) {
					swal({
						title: "Error",
						text: "Something went wrong try again",
						type: "error"
					});
			  }); 

		
		});
		}

	}])

.controller('tipsCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		
		 $scope.submittipsForm = function() 
		{
			swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){
				
			var email = $scope.email
			$http({
            method : "post",
			url: "http://farshadkalathingal.pe.hu/beard'd/service/user/addEmail",
            data: {"email":email},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				swal({
				   title: "Success",
				   text: "Email submitted successfuly",
				   type: "success",
				   showCancelButton: false,
				   showConfirmButton: false});
				 //swal("Success","Feedback submitted","success");
				$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'index.html';
				}, 1500);
			  }, function errorCallback(response) {
					swal({
						title: "Error",
						text: "Something went wrong try again",
						type: "error"
					});
			  }); 

		
		});
		}

	}])
	.controller('loginCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
	   
	   $scope.submitLoginForm = function() 
		{
			swal({
				 	  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){	
			var  email = $scope.form.email;
			var password = $scope.form.password;
			
			$http({
            method : "post",
			url: "http://farshadkalathingal.pe.hu/beard'd/service/user/loginUser",
            data: {"Email":email,"Password":password},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.posts = response.data;
				var result =response.data[0].count ;
                if(result == 1)
				{
					$scope.show = true;
					$localStorage.Name = response.data[0].Name;
					$localStorage.Email = email;
					swal({
					title: "Success",
					text: "Login Success ",
					type: "success",
					showCancelButton: false,
					showConfirmButton: false});
					//swal("Success","Feedback submitted","success");
					$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'index.html';
					}, 1500);
					
                }
                else
                {
					swal({
					title: "Error",
					text: "Incorrect Username or Password",
					type: "error",
					showCancelButton: false,
					showConfirmButton: false});
					//swal("Success","Feedback submitted","success");
					$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'login.html';
					}, 1500);
                }
			  }, function errorCallback(response) {
                  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  }); 	
	       }); 
    }
   }]);
/*
.controller('ShowStudItem',['$scope','$http','$window','$localStorage',
	function ($scope,$http,$window,$localStorage) {
		
		$http({
					method : "post",
					url: 'http://localhost/mainpro/service/Sports/ShowStudItem',
					data: {"regno":$localStorage.regsId},
					headers : {'Content-Type':'application/x-www-form-urlencoded'}
					}).then(function successCallback(response) {
						$scope.student= response.data;
					}, function errorCallback(response) {
						swal({
							title: "Error",
							text: "Something went wrong try again",
							type: "error"
						});

		 });
		
	}])	
	.controller('ShowStudEvent',['$scope','$http','$window','$localStorage',
	function ($scope,$http,$window,$localStorage) {
		
		$http({
					method : "post",
					url: 'http://localhost/mainpro/service/Arts/ShowStudEvent',
					data: {"regno":$localStorage.regsId},
					headers : {'Content-Type':'application/x-www-form-urlencoded'}
					}).then(function successCallback(response) {
						$scope.student= response.data;
					}, function errorCallback(response) {
						swal({
							title: "Error",
							text: "Something went wrong try again",
							type: "error"
						});
	
		 });
		
	}])	
		
	.controller('ArtsRegCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		
		$scope.indicount;
		$scope.groupcount;
		
		$http({
					method : "post",
					url: 'http://localhost/mainpro/service/Arts/getGroupcount',
					data: {"Category":"Group","regno":$localStorage.regsId},
					headers : {'Content-Type':'application/x-www-form-urlencoded'}
					}).then(function successCallback(response) {
						$scope.groupcount= response.data[0].count;
					}, function errorCallback(response) {
						swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
		 });
		 $http({
					method : "post",
					url: 'http://localhost/mainpro/service/Arts/getGroupcount',
					data: {"Category":"Individul","regno":$localStorage.regsId},
					headers : {'Content-Type':'application/x-www-form-urlencoded'}
					}).then(function successCallback(response) {
						$scope.indicount = response.data[0].count;
					}, function errorCallback(response) {
						swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
					
		 });	
		
		 $scope.submitArtsRegForm = function(selected,selected1) { 
			 swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){
				var regno = $localStorage.regsId;
				var name=$localStorage.Name;
				if($localStorage.regsId != null)
				{
					
					$scope.result = angular.equals(selected, "group");
					if($scope.result)
					{
						var grnum = parseInt($scope.groupcount)
						if(grnum >= 2)
						{
							swal({
								title: "Error",
								text: "You registered 2 Group events",
								type: "error",
								timer:2000,
								showCancelButton: false,
								showConfirmButton: false});
						}
						else	
						{
							$http({
								method : "post",
								url: 'http://localhost/mainpro/service/Arts/EventRegadd',
								data:{"regno":regno,"name":name,"eventName":selected1,"eventNature":selected},
								headers : {'Content-Type':'application/x-www-form-urlencoded'}
								}).then(function successCallback(response) {
									swal({
									   title: "Success",
									   text: "Event Registered",
									   type: "success",
									   showCancelButton: false,
									   showConfirmButton: false});
									 //swal("Success","Feedback submitted","success");
									$timeout(function() { 
										$scope.displayErrorMsg = true;
										$window.location.href = 'ArtsPage.html';
									}, 1500);
								}, function errorCallback(response) {
									swal({
									  title: "Error",
									  text: "Something went wrong try again",
									  type: "error"
									});
								
								});
						 }
					 }
					 else
					 {
						var intnum = parseInt($scope.indicount)
						if(intnum >= 3)
						{
							swal({
								title: "Error",
								text: "You registered 3 Indivigual events",
								type: "error",
								timer:2000,
								showCancelButton: false,
								showConfirmButton: false});
						}
						else	
						{
							$http({
								method : "post",
								url: 'http://localhost/mainpro/service/Arts/EventRegadd',
								data:{"regno":regno,"name":name,"eventName":selected1,"eventNature":selected},
								headers : {'Content-Type':'application/x-www-form-urlencoded'}
								}).then(function successCallback(response) {
									swal({
									   title: "Success",
									   text: "Event Registered",
									   type: "success",
									   showCancelButton: false,
									   showConfirmButton: false});
									 //swal("Success","Feedback submitted","success");
									$timeout(function() { 
										$scope.displayErrorMsg = true;
										$window.location.href = 'ArtsPage.html';
									}, 1500);
								}, function errorCallback(response) {
									swal({
									  title: "Error",
									  text: "Something went wrong try again",
									  type: "error"
									});
								});
						 }
					 }	
			}
			else
			{
				swal({
					title: "Error",
					text: "Sign in needed !! please Login",
					type: "error",
					showCancelButton: false,
					showConfirmButton: false});
					$timeout(function() { 
						$scope.displayErrorMsg = true;
						$window.location.href = 'Login.html';
					}, 1500);	
			}
		
		
		});
		}
		$scope.updateList = function(selected) {    
			$http({
            method : "post",
			url: 'http://localhost/mainpro/service/Arts/getEventCat',
            data: {"Category":selected},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.Events = response.data;
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
              
			  });
		}
	}])
	
//sports controller 
.controller('SportssRegCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		
		$scope.indicount;
		$scope.groupcount;
		$http({
					method : "post",
					url: 'http://localhost/mainpro/service/Sports/getItemcount',
					data: {"Category":"Group","regno":$localStorage.regsId},
					headers : {'Content-Type':'application/x-www-form-urlencoded'}
					}).then(function successCallback(response) {
						$scope.groupcount= response.data[0].count;
					}, function errorCallback(response) {
						swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
		 });
		 $http({
					method : "post",
					url: 'http://localhost/mainpro/service/Sports/getItemcount',
					data: {"Category":"Single","regno":$localStorage.regsId},
					headers : {'Content-Type':'application/x-www-form-urlencoded'}
					}).then(function successCallback(response) {
						$scope.indicount = response.data[0].count;
					}, function errorCallback(response) {
						swal({
						  title: "Error",
						  text: "Something went wrong try again",
						  type: "error"
						});
					
		 });	
		 $scope.submitSportsRegForm = function(selected,selected1) {
				swal({
				  title: "Conformation",
				  text: "Are you want to submit",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){
				var regno=$localStorage.regsId;
				var name=$localStorage.Name;
				if($localStorage.regsId != null)
				{
					
					$scope.result = angular.equals(selected, "Group");
					if($scope.result)
					{
						var grnum = parseInt($scope.groupcount)
						if(grnum >= 2)
						{
							
							swal({
								title: "Error",
								text: "You registered 2 Group Items",
								type: "error",
								timer:2000,
								showCancelButton: false,
								showConfirmButton: false});
							
						}
						else	
						{
							$http({
								method : "post",
								url: 'http://localhost/mainpro/service/Sports/ItemRegadd',
								data:{"regno":regno,"name":name,"eventName":selected1,"eventNature":selected},
								headers : {'Content-Type':'application/x-www-form-urlencoded'}
								}).then(function successCallback(response) {
									swal({
									   title: "Success",
									   text: "Item Registered",
									   type: "success",
									   showCancelButton: false,
									   showConfirmButton: false});
									 //swal("Success","Feedback submitted","success");
									$timeout(function() { 
										$scope.displayErrorMsg = true;
										$window.location.href = 'SportsPage.html';
									}, 1500);
									
								}, function errorCallback(response) {
									swal({
									  title: "Error",
									  text: "Something went wrong try again",
									  type: "error"
									});
								
								});
						 }
					 }
					 else
					 {
						var intnum = parseInt($scope.indicount)
						if(intnum >= 3)
						{
							swal({
								title: "Error",
								text: "You registered 3 Indivigual items",
								type: "error",
								timer:2000,
								showCancelButton: false,
								showConfirmButton: false});
						}
						else	
						{
							$http({
								method : "post",
								url: 'http://localhost/mainpro/service/Sports/ItemRegadd',
								data:{"regno":regno,"name":name,"eventName":selected1,"eventNature":selected},
								headers : {'Content-Type':'application/x-www-form-urlencoded'}
								}).then(function successCallback(response) {
									swal({
									   title: "Success",
									   text: "Item Registered",
									   type: "success",
									   showCancelButton: false,
									   showConfirmButton: false});
									 //swal("Success","Feedback submitted","success");
									$timeout(function() { 
										$scope.displayErrorMsg = true;
										$window.location.href = 'SportsPage.html';
									}, 1500);
									
								}, function errorCallback(response) {
									swal({
									  title: "Error",
									  text: "Something went wrong try again",
									  type: "error"
									});
								});
						 }
					 }	
			}
			else
			{
				swal({
					title: "Error",
					text: "Sign in needed !! please Login",
					type: "error",
					showCancelButton: false,
					showConfirmButton: false});
					$timeout(function() { 
						$scope.displayErrorMsg = true;
						$window.location.href = 'Login.html';
				}, 1500);
			}
		});
		}
		$scope.updateList = function(selected) {  
		
			$http({
            method : "post",
			url: 'http://localhost/mainpro/service/Sports/getItemCat',
            data: {"Category":selected},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.Events = response.data;
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  });
		}
	}])
	
	.controller('SportsdelCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		var regno=$localStorage.regsId;
		$http({
            method : "post",
			url: 'http://localhost/mainpro/service/Sports/showRegItems',
            data: {"Category":regno},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.Del_Items = response.data;
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  });
			  	  
			$scope.submitSportsDelForm = function(selected) {
				swal({
				  title: "Conformation",
				  text: "Are you want to Delete",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){	
			$http({
            method : "post",
			url: 'http://localhost/mainpro/service/Sports/DeleteSportsItem',
            data: {"regno":regno,"itemName":selected},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				swal({
					title: "Success",
					text: "Item Deleted ",
					type: "success",
					showCancelButton: false,
					showConfirmButton: false});
					//swal("Success","Feedback submitted","success");
					$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'SportsDelete.html';;
					}, 1500);
				
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
				});
			});
		}
		
		
		
	}])
	//end
	 .controller('ArtsdelCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
		var regno=$localStorage.regsId;
		$http({
            method : "post",
			url: 'http://localhost/mainpro/service/Arts/showRegEvents',
            data: {"Category":regno},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.Del_Events = response.data;
				
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  });
			  
			$scope.submitArtsDelForm = function(selected) {  
			swal({
				  title: "Conformation",
				  text: "Are you want to Delete",
				  showCancelButton: true,
				  confirmButtonText: "Yes",
				  cancelButtonText: "No",
				  closeOnConfirm: false,
				  showLoaderOnConfirm: true,
				},
				function(){	
			$http({
            method : "post",
			url: 'http://localhost/mainpro/service/Arts/DeleteArtsItem',
            data: {"regno":regno,"itemName":selected},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				swal({
					title: "Success",
					text: "Event Deleted ",
					type: "success",
					showCancelButton: false,
					showConfirmButton: false});
					//swal("Success","Feedback submitted","success");
					$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'ArtsDelete.html';
					}, 1500);
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  });
			});
		}	
	}])
	
// end of sports controller 

.controller('AsrtsResultCtrl',['$scope','$http','$window','$localStorage',
	function ($scope,$http,$window,$localStorage) {
		
		 $http({     
            method : "post",
			url: 'http://localhost/mainpro/service/Arts/getArtsResult',
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.semi = response.data;
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  });

		
	}])
.controller('SportsResultCtrl',['$scope','$http','$window','$localStorage',
	function ($scope,$http,$window,$localStorage) {
		
		 $http({     
            method : "post",
			url: 'http://localhost/mainpro/service/Sports/getSportsResult',
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.semi = response.data;
			  }, function errorCallback(response) {
				  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  });

		
	}])


    .controller('loginCtrl',['$scope','$http','$window','$localStorage','$timeout',
	function ($scope,$http,$window,$localStorage,$timeout) {
	   
	   $scope.submitLoginForm = function() 
		{
			swal({
				  title: "Are you want to Login",
				  showCancelButton: false,
				  closeOnConfirm: false,
				  confirmButtonText: "Yes",
				  showLoaderOnConfirm: true,
				},
				function(){	
			var  reg = $scope.form.regno;
			var dobs = $scope.form.dob;
			
			$http({
            method : "post",
			url: "http://localhost/mainpro/service/user/loginStudent",
            data: {"Regno":reg,"DOB":dobs},
			headers : {'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function successCallback(response) {
				$scope.posts = response.data;
				var result =response.data[0].count ;
                if(result == 1)
                {
					$scope.show = true;
					$localStorage.Name = response.data[0].Name;
					$localStorage.regsId = reg;
					
					swal({
					title: "Success",
					text: "login Success ",
					type: "success",
					showCancelButton: false,
					showConfirmButton: false});
					//swal("Success","Feedback submitted","success");
					$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'index.html';
					}, 1500);
					
                }
                else
                {
					swal({
					title: "Error",
					text: "incorrect username or password",
					type: "error",
					showCancelButton: false,
					showConfirmButton: false});
					//swal("Success","Feedback submitted","success");
					$timeout(function() { 
					$scope.displayErrorMsg = true;
					$window.location.href = 'Login.html';
					}, 1500);
                }
			  }, function errorCallback(response) {
                  swal({
					  title: "Error",
					  text: "Something went wrong try again",
					  type: "error"
					});
			  }); 	
	       });  
    }
   }]);*/
   
