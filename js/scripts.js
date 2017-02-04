$(document).ready(function(){
    $('#sidebar').affix({
      offset: {
        top: 240
      }
    });

    $('a').click(function(e){
        if( ! $(this).data('autoclick') ){
            $(this).data('autoclick' , true);
            e.preventDefault();
            var href = $(this).attr('href');
            var component = this;
            ga('send', {
                hitType: 'event',
                eventCategory: 'click',
                eventAction: 'links',
                eventLabel: href,
                hitCallback: function() {
                    $(component)[0].click();
                }
            });
        }
    });

    $('#sidebar li a').click(function(){
        var anchor = $(this).attr('href').substr(1);
        scrollToElement( $('#'+anchor).prev().prev() );
        return false;
    });

    $('.photo-album').each(function(){
        $(this).lightGallery({
            download: false,
            galleryId: $(this).attr('id')
        });
    });

});

function scrollToElement( $element , time = 500, success ){ 
    $('html, body').animate({
        scrollTop: $element.offset().top
    }, time , success ); 
}
