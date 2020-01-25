
        $(document).ready(function(){

	
	
    
  // PROTOCOL O3
    

    console.log("hello!");
    $("#Au, #Bu, #Cu, #Du, #Eu, #Fu, #Gu, #Hu").hide();
    $("#Ad, #Bd, #Cd, #Dd, #Ed, #Fd, #Gd, #Hd").hide();
    $(".gifdA, .gifdB, .gifdC, .gifdD, .gifdE, .gifdF, .gifdG, .gifdH").hide();
    $(".gifuA, .gifuB, .gifuC, .gifuD, .gifuE, .gifuF").hide();
    $("#arrotonda").hide();
    // .hover donna
     
    $("#E").hover(function() {
        $("#Ed").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdE").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Ed").hide();  
        $(".gifdE").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
        
    });
        
    $("#A").hover(function() {
        $("#Ad").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdA").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Ad").hide();
        $(".gifdA").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#B").hover(function() {
        $("#Bd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdB").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Bd").hide();
        $(".gifdB").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#C").hover(function() {
        $("#Cd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdC").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Cd").hide();
        $(".gifdC").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#D").hover(function() {
        $("#Dd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdD").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Dd").hide();
        $(".gifdD").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#F").hover(function() {
        $("#Fd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdF").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Fd").hide();
        $(".gifdF").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#G").hover(function() {
        $("#Gd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdG").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Gd").hide();
        $(".gifdG").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
        
    $("#H").hover(function() {
        $("#Hd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdH").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Hd").hide();
        $(".gifdH").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
        // .hover uomo
    
    $("#A_1_").hover(function() {
        $("#Au").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuA").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Au").hide();
        $(".gifuA").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#B_2_").hover(function() {
        $("#Bu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuB").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Bu").hide();
        $(".gifuB").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#C_2_").hover(function() {
        $("#Cu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuC").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Cu").hide();
        $(".gifuC").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#D_1_").hover(function() {
        $("#Du").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuD").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Du").hide();
        $(".gifuD").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#E_2_").hover(function() {
        $("#Eu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuE").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Eu").hide();
        $(".gifuE").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#F_2_").hover(function() {
        $("#Fu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuF").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Fu").hide();
        $(".gifuF").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    }); 




  // PROTOCOL O1

 $(document).ready(function() {
	console.log("ciao");
//.nascondere
    $("#snapchat").hide();
    $("#instagram").hide();
    $("#instapieno").hide();
    $("#snappieno").hide();
     
   
     
    $("#bottone_snap").click(function(){
         //.mostra
         $("#snapchat").toggle();
         $("#snappieno").toggle();
        //.nascondi
        $("#faceapp").hide();
         $("#instagram").hide();
        $("#instapieno").hide();
       $("#facepieno").hide();
        
     });
     
       $("#bottone_insta").click(function(){
         //.mostra
         $("#instagram").toggle();
         $("#instapieno").toggle();
        //.nascondi
        $("#faceapp").hide();
         $("#snapchat").hide();
        $("#snappieno").hide();
       $("#facepieno").hide();
        
     });
    
        $("#bottone_face").click(function(){
         //.mostra
         $("#faceapp").toggle();
         $("#facepieno").toggle();
        //.nascondi
        $("#instagram").hide();
         $("#snapchat").hide();
        $("#snappieno").hide();
       $("#instapieno").hide();
        
     });
     
   
  
    
     
});



