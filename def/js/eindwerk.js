$(document).ready(function () {

    // --- FULL PAGE DROPDOWN NELE
    $('.btn02').on('click', (function () {
        $('.drop-down').animate({ top: "0px" }, 600);
    }));

    $('h3.nav02').on('click', (function () {
        $('.drop-down').animate({ top: "-100vh" }, 600);
    }));

    // --- ACHTERGROND POLYGON- JASMIEN
    let $sitelading = $('#site-landing');
    $sitelading.polygonizr();
    $(window).on('resize', (function () {
        $sitelading.polygonizr("stop");
        $sitelading.polygonizr({
            canvasHeight: $(this).height(),
            canvasWidth: $(this).width()
        });
        $sitelading.polygonizr("refresh");
    }));

    // --- TYPEWRITER PLUGIN - NELE
    $(function () {
        $('#t').t({
            delay: 2,
            speed: 50,
            speed_vary: false,
            beep: false,
            mistype: 3,
            locale: 'en',
            caret: '\u2589',
            blink: true,
            blink_perm: false,
            repeat: 0,
            tag: 'span',
            pause_on_click: true,
            pause_on_tab_switch: true,
            init: function (elm) { },
            typing: function (elm, chr_or_elm, left, total) { },
            fin: function (elm) { }
        });
    });

    // --- FADE IN ELKE PAGINA - JASMINE
    $('#container4').fadeOut(100, function () {
        $('#container4').fadeIn(2000, function () {
        });
    })

    $('.container2').fadeOut(1500, function () {
        $('.container2').fadeIn(2000, function () {
        });
    })

    // AJAX - JASMINE
    $('#content1').on('click', function () {
        getContent('data-ajax/content1.html');
    });
    $('#content2').on('click', function () {
        getContent('data-ajax/content2.html');
    });
    $('#content3').on('click', function () {
        getContent('data-ajax/content3.html');
    });
    function getContent(filename) {
        $.ajax({
            url: filename,
            type: 'GET',
            dataType: 'html',
            beforeSend: function () {
                $('#contentarea').html('<img class="loading" src = "images/loading.gif" /> ');
            },
            success: function (data, textStatus, xhr) {
                $('#contentarea').html(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#contentarea').html(textStatus);
            }
        });
    }

    $("#hide").on('click'(function () {
        $(".ajax").hide();
    }));
    $("#show").on('click'(function () {
        $(".ajax").show();
    }));

    // img wordt groter met hover Jasmine
    let $img = $('.img')
    $img.on('mouseenter', (function () {
        $(this).animate({
            width: '65%',
            height: '38%'
        })
    }));

    $img.on('mouseleave', (function () {
        $(this).animate({
            width: '50%',
            height: '28%'
        })
    }));

    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });

    // UI Jasmine NOG DUBBEL!!!
    $("#tabs").tabs();

    // UI Jasmine NOG DUBBEL!!!
    $("#button").button();


    // slider 
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });


    // Inschrijfformulier DAVY
    let $input = $('input');
    $input.on('focus', (function () {
        $(this).parent().find(".label-txt").addClass('label-active');
    }));

    $input.on('focusout', (function () {
        if ($(this).val() == '') {
            $(this).parent().find(".label-txt").removeClass('label-active');
        };
    }));

    // Formulier data toevoegen aan database Davy
    let $container = $("#container");
    let $naam = $("#naam");
    let $email = $("#email");
    let $opleidingstraject = $("#opleidingstraject");
    let $loading = $('#loading');

    $('#submit').on('click', (function (e) {
        $('#errorMsg').remove();
        $container.append('<img src="images/loading.gif" alt="Loading" id="loading" />');
        let naamVal = $naam.val();
        let emailVal = $email.val();
        let opleidingstrajectVal = $opleidingstraject.val();
        e.preventDefault();
        if (naamVal != "" && emailVal != "" && opleidingstrajectVal != "") {
            $.ajax({
                url: 'submit_to_db_pdo.php',
                type: 'POST',
                data: 'naam=' + naamVal + '&email=' + emailVal + '&opleidingstraject=' + opleidingstrajectVal,
                success: function (result) {
                    $('#response').remove();
                    $container.append('<p id="response">' + result + '</p>');
                    $loading.fadeOut(500, function () {
                        $(this).remove();
                    });
                    $naam.val("");
                    $email.val("");
                    $opleidingstraject.val("");
                }
            });
        } else {
            $container.append("<p id='errorMsg'>Niet alle velden zijn ingevuld!</p>");
            $loading.fadeOut(500, function () {
                $(this).remove();
            });
        }
    }));

    // Data opvragen uit database Davy
    $.ajax({
        url: 'opvragen.php',
        type: 'GET',
        success: function (result) {
            $('#box').append(result);
        }
    });

    //POPUP Davy
    // Open Popup
    let $popup = $('.popup')
    $('.openBtn').on('click', function () {
        $popup.fadeIn(300);
    });

    // Close Popup
    $('.closeBtn').on('click', function () {
        $popup.fadeOut(300);
    });

    // Close Popup when Click outside
    $popup.on('click', function () {
        $popup.fadeOut(300);
    }).children().on('click', (function () {
        return false;
    }));

});