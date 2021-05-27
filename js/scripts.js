$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#ingredientsModal").modal("show");

    if ($.cookie("pop") === null) {
        $("#mailListModal").modal("show");
        $.cookie("pop", "1");
    }



  });

