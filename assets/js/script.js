$(function() {
    $('body a').click(function(e) {
        e.preventDefault(); //evitar el eventos del enlace normal
        var strAncla = $(this).attr('href'); //id del ancla
        $('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top
        }, 800);
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $("#btn_mail").click(function() {
        // alert( "El correo fue enviado correctamente..." );
        var section_alert = $('#myalert');

        var nodo = alert("Enviado");
        section_alert.append(nodo);

    });
});