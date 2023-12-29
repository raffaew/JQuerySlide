$(function () {
  $("#opt1").click(function () {
    $("#img1").show();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
  });

  $("#opt2").click(function () {
    $("#img1").hide();
    $("#img2").show();
    $("#img3").hide();
    $("#img4").hide();
  });

  $("#opt3").click(function () {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").show();
    $("#img4").hide();
  });

  $("#opt4").click(function () {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").show();
  });
});

$(function () {
  $("#opt1").click(function () {
    $("#mbl1").show();
    $("#mbl2").hide();
    $("#mbl3").hide();
    $("#mbl4").hide();
  });

  $("#opt2").click(function () {
    $("#mbl1").hide();
    $("#mbl2").show();
    $("#mbl3").hide();
    $("#mbl4").hide();
  });

  $("#opt3").click(function () {
    $("#mbl1").hide();
    $("#mbl2").hide();
    $("#mbl3").show();
    $("#mbl4").hide();
  });

  $("#opt4").click(function () {
    $("#mbl1").hide();
    $("#mbl2").hide();
    $("#mbl3").hide();
    $("#mbl4").show();
  });
});

$(function () {
  let isClick = false;

  $(".menu").click(function () {
    isClick = !isClick;

    if (isClick) {
      $(".logo").hide();
      $(".links a").css({
        display: "inline",
        "font-size": "18px",
      });
    } else {
      location.reload();
    }
  });
});
