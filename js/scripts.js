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

    $('.photo-album').lightGallery();

});
