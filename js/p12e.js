
	var aa=[1,2,3,45,6];
	
	function tests() {
		
		console.log(aa);
		}
		
	function tests2() {
			var vid=0.0;
			var su=0.;
		
			var i;
			for (i = 0; i < aa.length; i++) {
				su = su + aa[i];
			}		
			vid = su/5;
			for (i = 0; i < aa.length; i++) {
				su = vid-aa[i];
				console.log("Mod vid vert="+su);
			}				
		}		
		
		
		
		
		
		
		
	function myfu() {
		var i;
		var kk=10;
		var te="";
		var cars=["Buba","Opel","BMV","Audio"];
		for (i = 0; i < cars.length; i++) {
				te += cars[i] + "<br>";
				console.log(te);
			}
		}
		function jpplus() {
		var myEl = document.getElementById("mu");
		var myE2 = document.getElementById("m1");
		x = parseInt(myEl.value);
		if(x<12){
			
			x = x + 1;
			myEl.value = String(x);
		}
		myE2.innerHTML = "Teksts "+x
	}