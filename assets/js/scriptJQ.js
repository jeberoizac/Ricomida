//click para enviar correo
$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
    });
    
});

//Cambiar color de encabezados h3
$(document).ready(function(){
  $("h3").on({
    
    dblclick: function(){
      $(this).css("color", "red");
    }  
  });
});

//esconder parrafos de card card-title
$(document).ready(function(){
  $(".card-title").click(function(){
    $(".card-text").toggle("slow");
  });
});
