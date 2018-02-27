$(document).ready(()=>{

    $("#hide").click(()=>{
        $("img.hide").hide();
    });

    $("#show").click(()=>{
        $("img.hide").show();
    });

    $("#toggle").click(()=>{
        $("img.hide").toggle();
    });

    $("#slideUp").click(()=>{
        $("img.slideUp").slideUp();
    });

    $("#slideDown").click(()=>{
        $("img.slideUp").slideDown();
    });

    $("#slideToggle").click(()=>{
        $("img.slideUp").slideToggle();
    });

    $("#fadeOut").click(()=>{
        $("p.fadeOut").fadeOut();
    });

    $("#fadeIn").click(()=>{
        $("p.fadeOut").fadeIn();
    });

    $("#addClass").click(()=>{
        $("p.addClass").addClass("red");
    });

    $("#before").click(()=>{
        $("p.before").before("Tada!!!!");
    });

    $("#after").click(()=>{
        $("p.after").after("<p>Woohoo!!!!</p>");
    });

    $("#setHTML").click(()=>{
        $("p.setHTML").html("<b>some random text!!!</b>");
    })

    $("#setText").click(()=>{
        $("p.setText").text("hdjakjhkjhdl");
    });

    $("#setAttr").click(()=>{
        $("img.setAttr").attr("width","450");
    });

    $("#getVal").click(()=>{
        $("#getVal").html($("input:text").val());
    });

    $("#setVal").click(()=>{
        $(".setVal").val("Your Name Here");
    });

    $("#setData").click(()=>{
        $(".setData").data("greeting","Have a nice day!!! :) :) :)");
    });

    $("#getData").click(()=>{
        alert($(".setData").data("greeting"));
    });
});
