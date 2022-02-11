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
});