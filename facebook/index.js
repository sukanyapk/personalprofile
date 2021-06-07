$(document).ready(function(){
    $("#sform").validate({
       rules:{
           fname:{
               required:true,
               minlength:4,
               maxlength:6
           },
              lname:{
               required:true,
               minlength:4
           },
           email:{
               required:true,
               email:true
           },
           password:{
             required:true,
             minlength:4
           },
           mon:{
               required:true,
               
               
           },
           dy:{
              required:true,

           },
           yr:{
            required:true,
           },
           gender:{
               required:true,
           },
           messages:{
               fname:{
               required:"enter firstname",
               minlength:"enter atleast 4 charecters"
               }
           }

       
        }
   })

})