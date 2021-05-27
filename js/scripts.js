$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#ingredientsModal").modal("show");

    if (document.cookie.indexOf('modal_shown=') >= 0) {
        //do nothing if modal_shown cookie is present
       } else {
         $('#mailListModal').modal('show');  //show modal pop up
         document.cookie = 'modal_shown=seen'; //set cookie modal_shown
         //cookie will expire when browser is closed
       }
       



  });

