function myFunction(){
    const input = document.getElementById("myText").value;
    $.get( '/perspective',{text:input}, function(data) {       
        console.log('get new results')
        let result = data*100
        $('#demo').html(`<b>${result.toFixed(2)}</b>`)
        if (result < 10){
            $("#demo").css("color","blue")
         } else if (result < 20) {
            $("#demo").css("color","red") 
         } else if (result < 30) {
            $("#demo").css("color","orange") 
        } else {
            $("#demo").css("color","black")
        }
    });
}



