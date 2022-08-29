$(document).ready(function(){
    $(".btnAdd").on("click", function(){
            if(!!$(".InputMassage").val()){
                $(".continer").append("<div class='con2'>"+$(".InputMassage").val()+"<button class='delete'>Delete</button> <button class='done'>Done</button>"+"</div>");
            }else{
                alert("The Value is Empty...!");
            }
    });
});
$(document).on("click", ".done", function(){
    $(this).parent(".con2").toggleClass("active");
});
$(document).on("click", ".delete", function(){
    $(this).parent(".con2").remove();
});