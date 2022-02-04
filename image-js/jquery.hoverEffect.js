(function($){
    $.fn.imageHover = function(options){

        var settings = $.extend({
            opacity: 1,
            height: '160px',
            width: '190px',
            time: 1000,
            
            
        }, options)

        return this.each(function(){
            enter()
            leave()
            
            function enter(event){

                $("img").mouseenter(function(){
                    $(this).css({"opacity": settings.opacity}).animate({"height": settings.height, "width": settings.width,}, settings.time);
                    var title = $(this).attr('alt');
                    $(this).after('<p></p>');
                    $(this).next().text(title).animate({"right": "0px",}, settings.time);
                })

            }

            function leave(event){
                $("img").mouseleave(function(){
                    $(this).css({"opacity": "1"}).animate({"height": "140px", "width": "170px"}, 1000);
                    $(this).next().animate({"left": "-15px", "opacity": "0"}, settings.time, function(){
                        $(this).next().remove();
                    });
                });
            }
        }); 
    }

    
}(jQuery));