$(".stick").stick_in_parent();

$('.form').each(function() {
   var it = $(this);
    it.validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                digits: true,
            },
            messages: {
                required: true,
            },
            name: {
                required: false,
            },
            password: {
                required: true,            
                
            },
            passwordYet: {
                required: true,  
                equalTo: "#password"          
            }
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            // $(".form input, .form textarea").val('');
            $.ajax({
                // type: 'POST',
                // url: 'mail.php',
                // data: data,
                success: function(data){
                    it.find('.form__content').addClass('invisible');
                    it.find('.thanx').addClass('visible');             
                }
            });
        },  
    });
}); 

$('.form-sign').each(function() {
    var it = $(this);
     it.validate({
         rules: {
             email: {
                 required: true,
                 email: true,
             },
             phone: {
                 required: true,
                 digits: true,
             },
             messages: {
                 required: true,
             },
             name: {
                 required: false,
             },
             password: {
                 required: true,            
                 
             },
             passwordYet: {
                 required: true,  
                 equalTo: "#password"          
             }
         },
     
         errorPlacement: function (error, element) {},
     
         submitHandler: function() {
             $("input, textarea").val('');
             $.ajax({
                 // type: 'POST',
                 // url: 'mail.php',
                 // data: data,
                 success: function(data){
                 }
             });
         },  
     });
 }); 

$('.m-img-cont').each(function(){
    var imgCont = $(this).find('img').attr('src');
    $(this).css('background-image','url('+imgCont+')');
});

new WOW({
    mobile: false,
}).init();

$(document).ready(function () {
    $('select').niceSelect();
});

$( ".tabs" ).tabs({
    hide: { effect: "fade", duration: 150 },
    show: { effect: "fade", duration: 150 },
});
$(".accordion").accordion ({
    hide: { effect: "fade", duration: 150 },
    show: { effect: "fade", duration: 150 },
    heightStyle: "content",
    collapsible: true,
});

$(function () {

    $('.popup_close, .overlay, .humburger-overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .header-menu, .humburger-overlay, .period').removeClass('visible');
    });

    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        var popup = $(this).attr('data-popupBlock');
        if ($('.' + popup).hasClass('popup--notfixed')) {
            $('.' + popup).css('top', $(window).scrollTop() + $(window).height() / 2);
        };
        $('body').css('overflow-y', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
    });

});


$('.buy__item-img').click(function(e) {
    e.preventDefault();
    $(this).closest('.buy__item').find('.popup, .overlay').addClass('visible');
});

$('.menu-open').click(function() {
    $('.header-menu, .humburger-overlay').addClass("visible");
    $('body').css('overflow-y', 'hidden');
});

$(".close-menu").click(function() {
    $(".header-menu, .humburger-overlay").removeClass("visible");
    $('body').css('overflow-y', 'auto');
});

$('.html table').each(function () {
    $(this).wrap('<div class="main-table-container"></div>');
});

if($('div').is('#map')) {
    $(document).ready(function () {
        var x = $('#map').attr('data-x');
        var y = $('#map').attr('data-y');

        var myMap;

        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('map', {
                center: [x , y],
                zoom: 10,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            var myPlacemark = new ymaps.Placemark([x, y], {
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.controls.remove('zoomControl');
            myMap.controls.remove('searchbox');
        }
    });
};

$('.buy__item').each(function() {
    var galleryThumbs = new Swiper('.slider-prev', {
        spaceBetween: 18,
        slidesPerView: 2,
        slidesPerColumn: 3,
        
      });
      var galleryTop = new Swiper('.slider-top', {
        spaceBetween: 20,
        grabCursor: true,
        thumbs: {
          swiper: galleryThumbs,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    
      });
    
});

