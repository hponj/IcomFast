document.addEventListener('DOMContentLoaded', function() {
// Fungsi mengganti mobil untuk bagian Home pakai jquery
const carplace = $('#Car-home');
const bmw = $('#bmw-btn');
const GTR = $('#gtr-btn');
const frerari = $('#frerari-btn');
const bg = $('#Home');

function fadeOutImage() {
    carplace.css('transition', 'opacity 0.3s ease').css('opacity', '0');
}

function fadeInImage(newSrc) {
    carplace.attr('src', newSrc).css('opacity', '1');
}

function smoothImageTransition(newSrc) {
    fadeOutImage();
    setTimeout(() => {
        fadeInImage(newSrc);
    }, 300);
}

bmw.on('click', function() {
    smoothImageTransition('image/Wayang/kriss.png');
    bmw.css('border-color', '#FFD700');
    GTR.css('border-color', '#F0F0F0');
    frerari.css('border-color', '#F0F0F0');
    bg.css('background-image', "url('image/backgroundhero/image (6).png')");
});

frerari.on('click', function() {
    smoothImageTransition('image/Wayang/Delman.png');
    bmw.css('border-color', '#F0F0F0');
    GTR.css('border-color', '#F0F0F0');
    frerari.css('border-color', '#FFD700');
    bg.css('background-image', "url('image/backgroundhero/Delman.png')");
});

GTR.on('click', function() {
    smoothImageTransition('image/Wayang/Wayang4.png');
    bmw.css('border-color', '#F0F0F0');
    GTR.css('border-color', '#FFD700');
    frerari.css('border-color', '#F0F0F0');
    bg.css('background-image', "url('image/backgroundhero/Wayang.png')");
});


  // Ensure the navbar is hidden initially

  $(document).ready(function() {
    const $swiperAbout = $('.swiper-About');
    const $swiperWrap = $swiperAbout.find('.swiper-About-wrap');
    const $swiperSlides = $swiperWrap.find('.swiper-slides');
    const $swiperPrev = $('<button class="swiper-prev" style="display: none;"><i class="fas fa-chevron-left"></i></button>');
    const $swiperNext = $('<button class="swiper-next" style="display: none;"><i class="fas fa-chevron-right"></i></button>');
    const $swiperPagination = $('<div class="swiper-pagination"></div>');
    let currentIndex = 0;

    function showSlide(index) {
        $swiperWrap.css('transform', `translateX(-${index * 100}%)`);
        $swiperPagination.find('.swiper-thumb').removeClass('active');
        $swiperPagination.find('.swiper-thumb').eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % $swiperSlides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + $swiperSlides.length) % $swiperSlides.length;
        showSlide(currentIndex);
    }

    $swiperNext.on('click', nextSlide);
    $swiperPrev.on('click', prevSlide);

    $swiperSlides.each(function(index) {
        const $thumb = $('<div class="swiper-thumb"></div>');
        $thumb.on('click', function() {
            currentIndex = index;
            showSlide(currentIndex);
        });
        $swiperPagination.append($thumb);
    });

    $swiperAbout.append($swiperPrev, $swiperNext, $swiperPagination);
    showSlide(currentIndex);

    setInterval(nextSlide, 2000); // Auto-scroll every 2 seconds
  });

  // Custom slider functionality
  const $splideList = $('.splide__list');
  const $splideSlides = $('.splide__slide');
  const $splidePagination = $('<div class="splide__pagination"></div>');
  let currentIndex = 0;

  $splideSlides.each(function(index) {
      const $thumb = $('<div class="splide__pagination__thumb"></div>');
      $thumb.on('click', function() {
          $splideList.animate({ scrollLeft: index * $splideSlides.outerWidth(true) }, 300);
          $splidePagination.find('.splide__pagination__thumb').removeClass('active');
          $thumb.addClass('active');
          currentIndex = index;
      });
      $splidePagination.append($thumb);
  });

  $('.splide').append($splidePagination);
  $splidePagination.find('.splide__pagination__thumb').first().addClass('active');

  function nextSlide() {
      currentIndex = (currentIndex + 1) % $splideSlides.length;
      $splideList.animate({ scrollLeft: currentIndex * $splideSlides.outerWidth(true) }, 300);
      $splidePagination.find('.splide__pagination__thumb').removeClass('active');
      $splidePagination.find('.splide__pagination__thumb').eq(currentIndex).addClass('active');
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + $splideSlides.length) % $splideSlides.length;
      $splideList.animate({ scrollLeft: currentIndex * $splideSlides.outerWidth(true) }, 300);
      $splidePagination.find('.splide__pagination__thumb').removeClass('active');
      $splidePagination.find('.splide__pagination__thumb').eq(currentIndex).addClass('active');
  }

  // Auto-scroll every 2 seconds
  setInterval(nextSlide, 2000);

  // card

  $("#Gadangbtn").click(function(){
    
    $("#gadang").css("display", "block");

    setTimeout(function(){
        $("#gadang").css("top", "0");
      }, 500);
    });

  $("#ExitGadang").click(function(){
    $("#gadang").css("top", "-100%");
    $("#GadangSound")[0].pause();
    $("#GadangSound")[0].currentTime = 0;
    setTimeout(function(){
      $("#gadang").css("display", "none");
    }, 500);
    
  });

    //   Toraja

    $("#Torajabtn").click(function(){
    
        $("#Toraja").css("display", "block");

        setTimeout(function(){
            $("#Toraja").css("top", "0");
        }, 500);
        });

    $("#ExitToraja").click(function(){
        $("#Toraja").css("top", "-100%");
        $("#TorajaSound")[0].pause();
        $("#TorajaSound")[0].currentTime = 0;
        setTimeout(function(){
        $("#Toraja").css("display", "none");
    }, 500);
    
    
    });

    // Belah

    $("#Belahbtn").click(function(){
    
        $("#Belah").css("display", "block");

        setTimeout(function(){
            $("#Belah").css("top", "0");
        }, 500);
        });

    $("#ExitBelah").click(function(){
        $("#Belah").css("top", "-100%");
        $("#BelahSound")[0].pause();
        $("#BelahSound")[0].currentTime = 0;
        setTimeout(function(){
        $("#Belah").css("display", "none");
    }, 500);
    
    
    });

    // Krong

    $("#Krongbtn").click(function(){
    
        $("#Krong").css("display", "block");

        setTimeout(function(){
            $("#Krong").css("top", "0");
        }, 500);
        });

    $("#ExitKrong").click(function(){
        $("#Krong").css("top", "-100%");
        $("#KrongSound")[0].pause();
        $("#KrongSound")[0].currentTime = 0;
        setTimeout(function(){
        $("#Krong").css("display", "none");
    }, 500);
    
    
    });

    // Selaso
    $("#Selasobtn").click(function(){
    
        $("#Selaso").css("display", "block");

        setTimeout(function(){
            $("#Selaso").css("top", "0");
        }, 500);
        });

    $("#ExitSelaso").click(function(){
        $("#Selaso").css("top", "-100%");
        $("#SelasoSound")[0].pause();
        $("#SelasoSound")[0].currentTime = 0;
        setTimeout(function(){
        $("#Selaso").css("display", "none");
    }, 500);
    
    
    });

    // Tongkonan

    $("#Tongkonanbtn").click(function(){
    
        $("#Tongkonan").css("display", "block");

        setTimeout(function(){
            $("#Tongkonan").css("top", "0");
        }, 500);
        });

    $("#ExitTongkonan").click(function(){
        $("#Tongkonan").css("top", "-100%");
        $("#TongkonanSound")[0].pause();
        $("#TongkonanSound")[0].currentTime = 0;
        setTimeout(function(){
        $("#Tongkonan").css("display", "none");
    }, 500);
    
    
    });

    // Bolon
    $("#Bolonbtn").click(function(){
    
        $("#Bolon").css("display", "block");

        setTimeout(function(){
            $("#Bolon").css("top", "0");
        }, 500);
        });

    $("#ExitBolon").click(function(){
        $("#Bolon").css("top", "-100%");
        $("#BolonSound")[0].pause();
        $("#BolonSound")[0].currentTime = 0;
        setTimeout(function(){
        $("#Bolon").css("display", "none");
    }, 500);
    
    
    });

});




