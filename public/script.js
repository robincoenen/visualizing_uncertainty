function myFunction(){
    const input = document.getElementById("myText").value;
    $.get( '/perspective',{text:input}, function(data) {       
        console.log('get new results')
        let result = data*100
        $('#demo').html(`<b>${result.toFixed(2)}</b>`)
        if (result < 3){
            $("#myImage").attr("src","1-3.gif");
         } else if (result < 5) {
            $("#myImage").attr("src","3-5.gif"); 
         } else if (result < 7) {
            $("#myImage").attr("src","5-7.gif"); 
         } else if (result < 9) {
            $("#myImage").attr("src","7-9.gif"); 
         }  else if (result < 91) {
            $("#myImage").attr("src","sonst_1.gif"); 
         }else if (result < 93) {
            $("#myImage").attr("src","91-93.gif"); 
         } else if (result < 95) {
            $("#myImage").attr("src","93-95.gif"); 
         } else if (result < 97) {
            $("#myImage").attr("src","95-97.gif"); 
         } else if (result < 100) {
            $("#myImage").attr("src","97-100.gif"); 
         }  else {
            $("#myImage").attr("src","status.png"); 
        }
    });
}



//.attr("src","second.jpg");