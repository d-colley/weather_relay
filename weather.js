
// constructor for employees
function Employee(name, address, city, country, telNo, role, email)
{
	this.name = name;
	this.address = address;
	this.city = city;
	this.country = country;
	this.telNo = telNo;
	this.role = role;
	this.email = email;
}

// test employees
var emp_kgn = new Employee("Kgn Employee", "1 Par Drive", "Kingston", "Jamaica", "555-5555", "Factory Worker", "kgnworker@gmail.com");
var emp_mbay = new Employee("Mbay Employee", "2 Blue Lagoon", "Montego_Bay", "Jamaica", "555-5556", "IT Guy", "mbayworker@gmail.com");
var employees = [emp_kgn, emp_mbay];

function weatherCheck(result_panel)
{

//if it is sunny
if (($("#("+ result_panel + "):contains(Clear)")))
{
	var sSubject = 'Confirmation'; 
	var sBody    = 'Hi,\\n\\n You are scheduled for work.' ; 
	var sDisplay = 'E-mail the employees'; 
	document.write( 
		'<a href="mailto:' + '?subject=' + escape(sSubject) 
		+ '&body=' + escape(sBody) + '">' + sDisplay + '</a>' 
		); 
}


//if it rains
if (($("#(" + result_panel + "):contains(Rain)")))
{
	city_search(result_panel);
}
};

// to display someone's name
function printEmp(emp) {
	console.log(emp.name);
}

//to list the employees
function list() {
	var empLength = employees.length;
	for (var i = 0; i < empLength; i++) {
		printEmp(employees[i]);
	}
}

//to add a new employee
function add(name, address, city, country, telNo, role, email)
{
	var newEmp = {
		name = name;
		address = address;
		city = city;
		country = country;
		telNo = telNo;
		role = role;
		email = email;    
	}

	employees[employees.length] = newEmp;
}

//to search for an employee
function search(lastName)
{
	var empLength = employees.length;
	for (var i = 0; i < empLength; i++) {
		if(employees[i].lastName == lastName)
		{
			printEmp(employees[i]);
		}
	}
}

//search for employees in a city
function city_search(city)
{
	var empLength = employees.length;
	for (var i = 0; i < empLength; i++) {
		if(employees[i].city == city)
		{
			printEmp(employees[i]);
		}
	}
}

function kgn_check()
{
	var result;
	var i = 0;
	function getJSONP(url, success) 
	{

		var ud = '_' + +new Date,
		script = document.createElement('script'),
		head = document.getElementsByTagName('head')[0] 
		|| document.documentElement;

		window[ud] = function(data) {
			success && success(data);
			var testweath = data.weather[0];
			result = (testweath.main);
		};

		script.src = url.replace('callback=?', 'callback=' + ud);
		head.appendChild(script);

	}

	// while loop to get rid of replacement errors
	while (i < 2)
	{
		getJSONP('http://api.openweathermap.org/data/2.5/weather?q=kingston,jm&callback=?', function(data){
			document.getElementById("Kingston").innerHTML = window.result;
		});

		i++;
	}
}

function mobay_check()
{
	var result;
	var i = 0;
	function getJSONP(url, success) 
	{

		var ud = '_' + +new Date,
		script = document.createElement('script'),
		head = document.getElementsByTagName('head')[0] 
		|| document.documentElement;

		window[ud] = function(data) {
			success && success(data);
			var testweath = data.weather[0];
			result = (testweath.main);
		};

		script.src = url.replace('callback=?', 'callback=' + ud);
		head.appendChild(script);

	}

	// while loop to get rid of replacement errors
	while (i < 2)
	{
		getJSONP('http://api.openweathermap.org/data/2.5/weather?q=montego%20bay,jm&callback=?', function(data){
			document.getElementById("Montego_Bay").innerHTML = window.result;
		});

		i++;
	}
}