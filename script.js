window.onload=function(){ 

        var chamada = new XMLHttpRequest();
        chamada.open('GET', 'Home.php', true);
        chamada.send(null);
        chamada.onreadystatechange = function(){
    
            if ( this.readyState == 4 && this.status == 200 ) {
            var div = document.getElementById('intro');
             div.innerHTML = this.responseText;
            }
    
    };
};




function caller(n){
	
	switch(n){
	case 0: t="Home.php " ;break;
	case 1: t=" Servicos.html" ;break;
	case 2: t="Contato.html" ;break;
	case 3: t="Evream.html" ;break;
	
	
	}
	
  httpreq=new XMLHttpRequest();	
 	
	  httpreq.onreadystatechange=function(){
		  
		
		if(httpreq.readyState==4){
			  document.getElementById('intro').innerHTML=httpreq.responseText;
		  
		   
			
		  } 
	
		function browserVer4Detect()

{

  if(navigator.appVersion.substring(0,1) < 4)

    URLStr = "1.html";

  else

    URLStr = "2.html";

  window.location = URLStr;

}



		  
		  }
	
	  httpreq.open("GET",t,true)
	  httpreq.send(null)
	
	};


    
  

