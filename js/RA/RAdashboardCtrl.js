resourceApp.controller('RAdashboardCtrl', function ($scope,$http,RAService) {
	$scope.$on('$viewContentLoaded', function () {
		
//		$scope.getPieSkills();
		
	})
	// Starts Top ten customers by requirements
	$scope.Topcustomersbyrequirements = function() {
		debugger;
			
			RAService.RAToptencustomers().then(
					function(data) {
						$scope.topdata = data;
						console.log($scope.topdata);
						 $scope.mydonut($scope.topdata);
						
					})
		}
	
	  $scope.mydonut = function(object){ 
		  
	 $scope.donutdata = {
		        type: "doughnut",
		        palette :  ['#e8a742', '#e49316', '#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96'],
		        
		        dataSource: object,
		        tooltip: {
		            enabled: true,
		            location: "center",
		            customizeTooltip: function (arg) {
		                return {
		                    text: arg.argumentText +  "  Total: "+arg.valueText
		                };
		            }
		        },
		       
		        series: [{
		            smallValuesGrouping: {
		            	mode: "topN",
		                topCount: 100
		            },            
		            argumentField: "label",
		            valueField: "value",
		            label: {
		                visible: true,
		               
		                customizeText: function (point) {
		                    return point.argumentText + ": " + point.valueText + "";
		                },
		                connector: {
		                    visible: true,
		                    width: 1
		                }
		            }
		        }]
		    };
}
	
	  //end Top ten customers by requirements
	  
	  
	 // Total resources by technology
	 
		$scope.getPieSkills = function() {
			$scope.id=localStorage.getItem('registrationId');
			RAService.RAtotalResourceByTechnology().then(
					function(data) {
						$scope.piedata = data.result;
						console.log($scope.piedata);
						$scope.mypiedata($scope.piedata);
						
					})
		}
	  $scope.mypiedata = function(object){ 
	
	
	$scope.chartOps = {
        palette:  ['#e8a742', '#e49316', '#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96'],
        dataSource: object,

        tooltip: {
            enabled: true,
            location: "center",
            customizeTooltip: function (arg) {
                return {
                    text: arg.argumentText +  "  Total: "+arg.valueText
                };
            }
        },
        series: [{
        	smallValuesGrouping: {
            	mode: "topN",
                topCount: 10
            },
            argumentField: "label",
            valueField: "value",
            label: {
                visible: true,
                connector: {
                    visible: true,
                    width: 0.5
                },
                format: "fixedPoint",
                customizeText: function (point) {
                    return point.argumentText + ": " + point.valueText + "";
                }
            },
            smallValuesGrouping: {
               
                threshold: 0.5
            }
        }]
    };
	}
	  
	  //end of  Total resources by technology//
	  
	  
	  //Start of Top Vendors by Resource
	  
	  
		 // Total resources by technology
		 
			$scope.getVendorbyResource = function() {
			
				RAService.RAToptenVendors().then(
						function(data) {
							$scope.Vendorpiedata = data;
							console.log($scope.Vendorpiedata);
							$scope.vendorpiedata($scope.Vendorpiedata);
							
						})
			}
		  $scope.vendorpiedata = function(object){ 
		
		
		$scope.vendorpieresource = {
	        palette:  ['#e8a742', '#e49316', '#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96'],
	        dataSource: object,

	        tooltip: {
	            enabled: true,
	            location: "center",
	            customizeTooltip: function (arg) {
	                return {
	                    text: arg.argumentText +  "  Total: "+arg.valueText
	                };
	            }
	        },
	        series: [{
	            argumentField: "label",
	            valueField: "value",
	            label: {
	                visible: true,
	                connector: {
	                    visible: true,
	                    width: 0.5
	                },
	                format: "fixedPoint",
	                customizeText: function (point) {
	                    return point.argumentText + ": " + point.valueText + "";
	                }
	            },
	            smallValuesGrouping: {
	               
	                threshold: 0.5
	            }
	        }]
	    };
		}
		  
		  //end of  Total resources by technology//

	  
	  
	  //End of Top Vendors by Resource
	  
		  
		  //start of stack bar charts//
		  
		  $scope.getVendorbycities = function() {
				
				RAService.Ratencities().then(
						function(data) {
							$scope.tencitiesdata = data.result;
							console.log($scope.tencitiesdata);
							$scope.myt($scope.tencitiesdata);
							
						})
			}
			 $scope.myt = function(object){
		    $scope.char = {
			
		        dataSource: object.first,
		        commonSeriesSettings: {
		            argumentField: "city",
		            type: "stackedBar"
		        },
		        palette:  ['#e8a742', '#e49316', '#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96'],
		        series:object.second ,
		        
		        valueAxis: {
		            title: {
		                text: "resources"
		            },
		            position: "left"
		        },
		       
		       
		        tooltip: {
		            enabled: true,
		            location: "edge",
		            customizeTooltip: function (arg) {
		                return {
		                    text: arg.argumentText + " : " + arg.seriesName + " resource: " + arg.valueText
		                };
		            }
		        }
		    };
			}
			 //end of stackbar charts//
			 
			 
			 
			 // start requirement by technology//
			 
			 $scope.requirementtechnology = function() {
					
					RAService.RArequirementTechnology().then(
							function(data) {
								$scope.techdata = data;
								console.log($scope.techdata);
								$scope.mytech($scope.techdata);
								
							})
				}
			 $scope.mytech=function(obj)
			 {
				 
				 $scope.chartmytech = {
					        dataSource: obj,
					        palette:  ['#e8a742', '#e49316', '#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96'],
					        
					        commonSeriesSettings: {
					            type: "bar",
					            valueField: "value",
					            argumentField: "label",
					            ignoreEmptyPoints: true
					        },
					        seriesTemplate: {
					            nameField: "label"
					        },
					        tooltip: {
					            enabled: true,
					            location: "edge",
					            customizeTooltip: function (arg) {
					                return {
					                    text: arg.seriesName + "  Requirements " + arg.valueText
					                };
					            }
					        }
					    };
				 
				 
				 
			 }
			 
			 
			 
			 // End requirement by technology//
			 
			 
			 //Start of requirement by location
			 
			 $scope.requirementcities = function() {
					
					RAService.RArequirementCities().then(
							function(data) {
								$scope.citiestechdata = data.result;
								console.log($scope.citiestechdata);
								$scope.mycitytech($scope.citiestechdata);
								
							})
				}
			 $scope.mycitytech=function(obj)
			 {
				 
				 $scope.RequirementLocation = {
					        dataSource: obj,
					        palette:  ['#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96','#e8a742', '#e49316'],
					        
					        commonSeriesSettings: {
					            type: "bar",
					            valueField: "value",
					            argumentField: "label",
					            ignoreEmptyPoints: true
					        },
					        seriesTemplate: {
					            nameField: "label"
					        },
					        tooltip: {
					            enabled: true,
					            location: "edge",
					            customizeTooltip: function (arg) {
					                return {
					                    text: arg.seriesName + "  Requirements " + arg.valueText
					                };
					            }
					        }
					    };
				 
				 
				 
			 }
			 
			 
			 //End of requirement by location
			 
			 
			 //start of Top Tech
			 $scope.TopTechres = function() {
					
					RAService.RATopTech().then(
							function(data) {
								$scope.toptechdata = data;
								console.log($scope.toptechdata);
								$scope.mytoptech($scope.toptechdata);
								
							})
				}
			 $scope.mytoptech = function(object){
			    	debugger;
			        Morris.Donut({
			        element: 'donut-example',
			        data:object,
			        colors:[ '#e8a742', '#e49316', '#285484', '#034a96', '#e8a742', '#285484', '#034a96', '#034a96','#e8a742', '#e49316', '#285484', '#034a96']

			        });
			    };
			 
			 //End of Top Tech
			 
			 
			 
	 
	 
	
            });