$(document).ready(function hasan(){
    $("#bars").click(function(){
        $("#manu_main_box").show();
        $("#bars").click(function(){
            $("#manu_main_box").hide();
            $("#bars").click(hasan());
        });
    });
});