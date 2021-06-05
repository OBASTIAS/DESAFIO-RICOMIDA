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

        var nodo = alert("El correo fue enviado correctamente...");
        section_alert.append(nodo);

    });
});

$(function() {
    $("#dbclick-color, #dbclick-color_2").dblclick(function() {

        $(this).css('color', '#FF0000');

    });
});
$(function() {
    $("#dbclick-color, #dbclick-color_2").mouseenter(function() {
        $(this).css('cursor', 'pointer');


    });
});
$(function() {

    $(".show-panqueques").click(function() {
        $(".complete1").show(500, function() {
            $(".complete2").hide(500, function() {
                $(".complete3").hide(500, function() {

                });
            });
        });
    });
});

$(function() {
    $(".show-tiramisu").click(function() {
        $(".complete2").show(500, function() {
            $(".complete1").hide(500, function() {
                $(".complete3").hide(500, function() {

                });
            });
        });
    });
});
$(function() {
    $(".show-plateada").click(function() {
        $(".complete3").show(500, function() {
            $(".complete1").hide(500, function() {
                $(".complete2").hide(500, function() {

                });
            });
        });
    });
});
$(function() {
    $("windows").scrollTop(function() {
        $(".complete3").hide(500, function() {
            $(".complete1").hide(500, function() {
                $(".complete2").hide(500, function() {

                });
            });
        });
    });
});

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".complete1").hide("complete1");
        } else {
            $(".complete2").show("complete1");
        }
    });
});
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".complete2").hide("complete2");
        } else {
            $(".complete2").show("complete1");
        }
    });
});
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".complete3").hide("complete3");
        } else {
            $(".complete2").show("complete1");
        }
    });
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});