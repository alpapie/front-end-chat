/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
    'use strict';
  
    var rtsJs = {
        m: function (e) {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            rtsJs.stickyHeader();
            rtsJs.backToTopInit();
            rtsJs.swiperJs();
            rtsJs.textAnimation();
            rtsJs.vedioActivation();
            rtsJs.metismenu();
            rtsJs.sideMenu();
            rtsJs.searchOpton();
            rtsJs.cartOpton();
            rtsJs.audioGenerate();
            rtsJs.megnifyingPopup();
        },
        
        // sticky header activation
        stickyHeader: function (e) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.header--sticky').addClass('sticky')
            } else {
                $('.header--sticky').removeClass('sticky')
            }
        })
        },

        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },

        swiperJs: function () {
          $(document).ready(function(){

            var menu = ['01', '02', '03']
            var mySwiper = new Swiper ('.swiper-container', {
                // If we need pagination
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + (menu[index]) + '</span>';
                    },
                },
            
                // Navigation arrows
                // navigation: {
                //   nextEl: '.swiper-button-next',
                //   prevEl: '.swiper-button-prev',
                // },
            })
          
          });
          
          $(document).ready(function(){
            var swiper = new Swiper(".mySwiper-t4", {
              slidesPerView: 4.5,
              spaceBetween: 30,
              centeredSlides: true,
              loopAdditionalSlides: 30,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              loop: true,
              breakpoints: {
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1140: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                512: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }

            });
          });


        },
        
        textAnimation: function(){

          $(document).ready(function(){
              var TxtRotate = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
              };
              
              TxtRotate.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];
              
                if (this.isDeleting) {
                  this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                  this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
              
                this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
              
                var that = this;
                var delta = 300 - Math.random() * 100;
              
                if (this.isDeleting) { delta /= 2; }
              
                if (!this.isDeleting && this.txt === fullTxt) {
                  delta = this.period;
                  this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                  this.isDeleting = false;
                  this.loopNum++;
                  delta = 500;
                }
              
                setTimeout(function() {
                  that.tick();
                }, delta);
              };
              
              window.onload = function() {
                var elements = document.getElementsByClassName('txt-rotate');
                for (var i=0; i<elements.length; i++) {
                  var toRotate = elements[i].getAttribute('data-rotate');
                  var period = elements[i].getAttribute('data-period');
                  if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                  }
                }
                // INJECT CSS
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
                document.body.appendChild(css);
              };
          });

          
        },
        
        vedioActivation: function (e) {
          $(document).ready(function(){
            $('.popup-youtube, .popup-vimeo').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
            });
          });
        },
        metismenu:function(){
          $('#mobile-menu-active').metisMenu();
        },
        // side menu desktop
        sideMenu:function(){
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },
        // Search Bar show & hide
      searchOpton:function(){
        $(document).on('click', '.search-icon', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-area input', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-inner before', function () {
          $(".search-input-area").addClass("show");
        });
        $('html').click(function (e) {
          if (!$(e.target).hasClass('show')) {
            $(".search-input-area").removeClass("show");
          }
          $(document).on('click', '.search-close-icon', function () {
            $(".search-input-area").removeClass("show");
          });
        });
      },
        // Cart Bar show & hide
        cartOpton:function(){
          $(document).on('click', '.cart-icon', function () {
            $(".cart-bar").addClass("show");
            $(".anywere").addClass("bgshow");
          });
          $(document).on('click', '.close-cart', function () {
            $(".cart-bar").removeClass("show");
            $(".anywere").removeClass("bgshow");
          });
          $(document).on('click', '.anywere', function () {
            $(".cart-bar").removeClass("show");
            $(".anywere").removeClass("bgshow");
          });
        },
        audioGenerate:function(){
          $(document).ready(function(){
            var clicked_id;
              var audio_var = new Audio();


              $('.ppbutton').on("click",function(){
                var datasrc = $(this).attr('data-src');
                clicked_id= $(this).attr('id');
                console.log(clicked_id);
                audio_var.pause();
                
                $('.ppbutton').not(this).each(function(){
                    $(this).removeClass('fa-pauses');
                    $(this).addClass('fa-plays');
                });
                
                if($(this).hasClass('fa-plays')){
                  console.log('play_click');
                  audio_var.src=datasrc;
                  $(this).removeClass('fa-plays');
                  $(this).addClass('fa-pauses');
                  console.log(audio_var);
                  audio_var.play();
                } else {
                  console.log('pause_click');
                  $(this).removeClass('fa-pauses');
                  $(this).addClass('fa-plays');
                  console.log(audio_var);
                  audio_var.pause();
                  //audio_var.src='';
                  //audio_var.load();
                console.log(audio_var);
                }
              });

              audio_var.onended = function() {
                $("#"+clicked_id).removeClass('fa-pauses');
                $("#"+clicked_id).addClass('fa-plays');
              };
          })
        },
        megnifyingPopup: function (){
          $('#open-popup').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupa').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupb').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupc').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupd').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupe').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupf').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
          $('#open-popupg').magnificPopup({
            items: [
              {
                src: 'assets/images/feature/img-16.png',
                title: 'Gallery 08'
              },
              {
                src: 'assets/images/feature/img-9.png',
                title: 'Gallery 01'
              },
              {
                src: 'assets/images/feature/img-10.png',
                title: 'Gallery 02'
              },
              {
                src: 'assets/images/feature/img-11.png',
                title: 'Gallery 03'
              },
              {
                src: 'assets/images/feature/img-12.png',
                title: 'Gallery 04'
              },
              {
                src: 'assets/images/feature/img-13.png',
                title: 'Gallery 05'
              },
              {
                src: 'assets/images/feature/img-14.png',
                title: 'Gallery 06'
              },
              {
                src: 'assets/images/feature/img-15.png',
                title: 'Gallery 07'
              },
            ],
            gallery: {
              enabled: true
            },
            type: 'image' // this is a default type
        });
        },

    }

    rtsJs.m();
    	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 0,
				gutter: 0
			}
		});
		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
  $(function () {
    $(".button").on("click", function () {
      var $button = $(this);
      var $parent = $button.parent();
      var oldValue = $parent.find('.input').val();

      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $parent.find('a.add-to-cart').attr('data-quantity', newVal);
      $parent.find('.input').val(newVal);
    });
  });
  })(jQuery, window) 



