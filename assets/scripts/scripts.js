function updateNav(){var e=mr_scrollTop;if(e<=0)return mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight")),void(mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled")));if(e>mr_navOuterHeight+mr_fixedAt){if(!mr_navScrolled)return mr_nav.addClass("scrolled"),void(mr_navScrolled=!0)}else e>mr_navOuterHeight?(mr_navFixed||(mr_nav.addClass("fixed"),mr_navFixed=!0),e>mr_navOuterHeight+10?mr_outOfSight||(mr_nav.addClass("outOfSight"),mr_outOfSight=!0):mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))):(mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))),mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled"))}function capitaliseFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function initializeMasonry(){$(".masonry").each(function(){var e=$(this).get(0),t=new Masonry(e,{itemSelector:".masonry-item"});t.on("layoutComplete",function(){mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0),$(".filters.floating").length&&(setupFloatingProjectFilters(),updateFloatingFilters(),window.addEventListener("scroll",updateFloatingFilters,!1)),$(".masonry").addClass("fadeIn"),$(".masonry-loader").addClass("fadeOut"),$(".masonryFlyIn").length&&masonryFlyIn()}),t.layout()})}function masonryFlyIn(){var e=0;$(".masonryFlyIn .masonry-item").each(function(){var t=$(this);setTimeout(function(){t.addClass("fadeIn")},e),e+=170})}function setupFloatingProjectFilters(){mr_floatingProjectSections=[],$(".filters.floating").closest("section").each(function(){var e=$(this);mr_floatingProjectSections.push({section:e.get(0),outerHeight:e.outerHeight(),elemTop:e.offset().top,elemBottom:e.offset().top+e.outerHeight(),filters:e.find(".filters.floating"),filersHeight:e.find(".filters.floating").outerHeight(!0)})})}function updateFloatingFilters(){for(var e=mr_floatingProjectSections.length;e--;){var t=mr_floatingProjectSections[e];t.elemTop<mr_scrollTop&&void 0===window.mr_variant?(t.filters.css({position:"fixed",top:"16px",bottom:"auto"}),mr_navScrolled&&t.filters.css({transform:"translate3d(-50%,48px,0)"}),mr_scrollTop>t.elemBottom-70&&(t.filters.css({position:"absolute",bottom:"16px",top:"auto"}),t.filters.css({transform:"translate3d(-50%,0,0)"}))):t.filters.css({position:"absolute",transform:"translate3d(-50%,0,0)"})}}function prepareSignup(e){var t,o=jQuery("<form />"),a=jQuery("<div />");return jQuery(a).html(e.attr("srcdoc")),t=jQuery(a).find("form").attr("action"),/list-manage\.com/.test(t)&&"//"==(t=t.replace("/post?","/post-json?")+"&c=?").substr(0,2)&&(t="http:"+t),/createsend\.com/.test(t)&&(t+="?callback=?"),o.attr("action",t),jQuery(a).find("input, select, textarea").not('input[type="submit"]').each(function(){jQuery(this).clone().appendTo(o)}),o}var mr_firstSectionHeight,mr_nav,mr_fixedAt,mr_navOuterHeight,mr_navScrolled=!1,mr_navFixed=!1,mr_outOfSight=!1,mr_floatingProjectSections,mr_scrollTop=0;$(document).ready(function(){"use strict";function e(e){var t,o;return $(e).find('.validate-required[type="checkbox"]').each(function(){$('[name="'+$(this).attr("name")+'"]:checked').length||(o=1,t=$(this).attr("name").replace("[]",""),e.find(".form-error").text("Please tick at least one "+t+" box."))}),$(e).find(".validate-required").each(function(){""===$(this).val()?($(this).addClass("field-error"),o=1):$(this).removeClass("field-error")}),$(e).find(".validate-email").each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),o=1)}),$(e).find(".validate-tel").each(function(){/^([7-9])\d{9}$/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),e.find(".form-error").text("Enter a valid phone number without +91 or 0"),o=1)}),$(e).find(".validate-text-only-letters").each(function(){/^([A-Za-z ]+)$/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),o=1)}),e.find(".field-error").length||e.find(".form-error").fadeOut(1e3),o}function t(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}var o=$("a.inner-link");if(o.length){o.each(function(){var e=$(this);"#"!==e.attr("href").charAt(0)&&e.removeClass("inner-link")});var a=0;$("body[data-smooth-scroll-offset]").length&&(a=$("body").attr("data-smooth-scroll-offset"),a*=1),smoothScroll.init({selector:".inner-link",selectorHeader:null,speed:750,easing:"easeInOutCubic",offset:a})}if(addEventListener("scroll",function(){mr_scrollTop=window.pageYOffset},!1),$(".background-image-holder").each(function(){var e=$(this).children("img").attr("src");$(this).css("background",'url("'+e+'")'),$(this).children("img").hide(),$(this).css("background-position","initial")}),setTimeout(function(){$(".background-image-holder").each(function(){$(this).addClass("fadeIn")})},200),$('[data-toggle="tooltip"]').tooltip(),$("ul[data-bullet]").each(function(){var e=$(this).attr("data-bullet");$(this).find("li").prepend('<i class="'+e+'"></i>')}),$(".progress-bar").each(function(){$(this).css("width",$(this).attr("data-progress")+"%")}),$("nav").hasClass("fixed")||$("nav").hasClass("absolute")?$("body").addClass("nav-is-overlay"):($(".nav-container").css("min-height",$("nav").outerHeight(!0)),$(window).resize(function(){$(".nav-container").css("min-height",$("nav").outerHeight(!0))}),$(window).width()>768&&$(".parallax:nth-of-type(1) .background-image-holder").css("top",-$("nav").outerHeight(!0)),$(window).width()>768&&$("section.fullscreen:nth-of-type(1)").css("height",$(window).height()-$("nav").outerHeight(!0))),$("nav").hasClass("bg-dark")&&$(".nav-container").addClass("bg-dark"),mr_nav=$("body .nav-container nav:first"),mr_navOuterHeight=$("body .nav-container nav:first").outerHeight(),mr_fixedAt=void 0!==mr_nav.attr("data-fixed-at")?parseInt(mr_nav.attr("data-fixed-at").replace("px","")):parseInt($("section:nth-of-type(1)").outerHeight()),window.addEventListener("scroll",updateNav,!1),$(".menu > li > ul").each(function(){var e=$(this).offset(),t=e.left+$(this).outerWidth(!0);if(t>$(window).width()&&!$(this).hasClass("mega-menu"))$(this).addClass("make-right");else if(t>$(window).width()&&$(this).hasClass("mega-menu")){var o=$(window).width()-e.left,a=$(this).outerWidth(!0)-o;$(this).css("margin-left",-a)}}),$(".mobile-toggle").click(function(){$(".nav-bar").toggleClass("nav-open"),$(this).toggleClass("active")}),$(".menu li").click(function(e){e||(e=window.event),e.stopPropagation(),$(this).find("ul").length?$(this).toggleClass("toggle-sub"):$(this).parents(".toggle-sub").removeClass("toggle-sub")}),$(".menu li a").click(function(){$(this).hasClass("inner-link")&&$(this).closest(".nav-bar").removeClass("nav-open")}),$(".module.widget-handle").click(function(){$(this).toggleClass("toggle-widget-handle")}),$(".search-widget-handle .search-form input").click(function(e){e||(e=window.event),e.stopPropagation()}),$(".offscreen-toggle").length?$("body").addClass("has-offscreen-nav"):$("body").removeClass("has-offscreen-nav"),$(".offscreen-toggle").click(function(){$(".main-container").toggleClass("reveal-nav"),$("nav").toggleClass("reveal-nav"),$(".offscreen-container").toggleClass("reveal-nav")}),$(".main-container").click(function(){$(this).hasClass("reveal-nav")&&($(this).removeClass("reveal-nav"),$(".offscreen-container").removeClass("reveal-nav"),$("nav").removeClass("reveal-nav"))}),$(".offscreen-container a").click(function(){$(".offscreen-container").removeClass("reveal-nav"),$(".main-container").removeClass("reveal-nav"),$("nav").removeClass("reveal-nav")}),$(".projects").each(function(){var e="";$(this).find(".project").each(function(){$(this).attr("data-filter").split(",").forEach(function(t){-1==e.indexOf(t)&&(e+='<li data-filter="'+t+'">'+capitaliseFirstLetter(t)+"</li>")}),$(this).closest(".projects").find("ul.filters").empty().append('<li data-filter="all" class="active">All</li>').append(e)})}),$(".filters li").click(function(){var e=$(this).attr("data-filter");$(this).closest(".filters").find("li").removeClass("active"),$(this).addClass("active"),$(this).closest(".projects").find(".project").each(function(){-1==$(this).attr("data-filter").indexOf(e)?$(this).addClass("inactive"):$(this).removeClass("inactive")}),"all"==e&&$(this).closest(".projects").find(".project").removeClass("inactive")}),$(".slider-all-controls, .slider-paging-controls, .slider-arrow-controls, .slider-thumb-controls, .logo-carousel").length&&($(".slider-all-controls").flexslider({start:function(e){e.find(".slides li:first-child").find(".fs-vid-background video").length&&e.find(".slides li:first-child").find(".fs-vid-background video").get(0).play()},after:function(e){e.find(".fs-vid-background video").length&&(e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").length&&e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").get(0).pause(),e.find(".flex-active-slide").find(".fs-vid-background video").length&&e.find(".flex-active-slide").find(".fs-vid-background video").get(0).play())}}),$(".slider-paging-controls").flexslider({animation:"slide",directionNav:!1}),$(".slider-arrow-controls").flexslider({controlNav:!1}),$(".slider-thumb-controls .slides li").each(function(){var e=$(this).find("img").attr("src");$(this).attr("data-thumb",e)}),$(".slider-thumb-controls").flexslider({animation:"slide",controlNav:"thumbnails",directionNav:!0}),$(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1})),$(".lightbox-grid li a").each(function(){var e=$(this).closest(".lightbox-grid").attr("data-gallery-title");$(this).attr("data-lightbox",e)}),$("iframe[data-provider]").each(function(){var e=jQuery(this).attr("data-provider"),t=jQuery(this).attr("data-video-id"),o=jQuery(this).attr("data-autoplay"),a="";"vimeo"==e?(a="http://player.vimeo.com/video/"+t+"?badge=0&title=0&byline=0&title=0&autoplay="+o,$(this).attr("data-src",a)):"youtube"==e?(a="https://www.youtube.com/embed/"+t+"?showinfo=0&autoplay="+o,$(this).attr("data-src",a)):console.log("Only Vimeo and Youtube videos are supported at this time")}),jQuery(".foundry_modal[modal-link]").remove(),$(".foundry_modal").length&&!jQuery(".modal-screen").length)jQuery("<div />").addClass("modal-screen").appendTo("body");if(jQuery(".foundry_modal").click(function(){jQuery(this).addClass("modal-acknowledged")}),jQuery(document).on("wheel mousewheel scroll",".foundry_modal, .modal-screen",function(e){return $(this).get(0).scrollTop+=e.originalEvent.deltaY,!1}),$(".modal-container:not([modal-link])").each(function(e){if(jQuery(this).find("iframe[src]").length){jQuery(this).find(".foundry_modal").addClass("iframe-modal");var t=jQuery(this).find("iframe");t.attr("data-src",t.attr("src")),t.attr("src","")}jQuery(this).find(".btn-modal").attr("modal-link",e),jQuery('.foundry_modal[modal-link="'+e+'"]').length||jQuery(this).find(".foundry_modal").clone().appendTo("body").attr("modal-link",e).prepend(jQuery('<i class="ti-close close-modal">'))}),$(".btn-modal").unbind("click").click(function(){var e=jQuery('.foundry_modal[modal-link="'+jQuery(this).attr("modal-link")+'"]'),t="";if(jQuery(".modal-screen").toggleClass("reveal-modal"),e.find("iframe").length){if("1"===e.find("iframe").attr("data-autoplay"))t="&autoplay=1";e.find("iframe").attr("src",e.find("iframe").attr("data-src")+t)}return e.find("video").length&&e.find("video").get(0).play(),e.toggleClass("reveal-modal"),!1}),$(".foundry_modal[data-time-delay]").each(function(){var e=$(this),t=e.attr("data-time-delay");e.prepend($('<i class="ti-close close-modal">')),void 0!==e.attr("data-cookie")?mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal")},t):setTimeout(function(){e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal")},t)}),$(".foundry_modal[data-show-on-exit]").each(function(){var e=$(this),t=$(e.attr("data-show-on-exit"));$(t).length&&(e.prepend($('<i class="ti-close close-modal">')),$(document).on("mouseleave",t,function(){$("body .reveal-modal").length||(void 0!==e.attr("data-cookie")?mr_cookies.hasItem(e.attr("data-cookie"))||(e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal")):(e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal")))}))}),$(".foundry_modal[data-hide-after]").each(function(){var e=$(this),t=e.attr("data-hide-after");void 0!==e.attr("data-cookie")?mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.hasClass("modal-acknowledged")||(e.removeClass("reveal-modal"),$(".modal-screen").removeClass("reveal-modal"))},t):setTimeout(function(){e.hasClass("modal-acknowledged")||(e.removeClass("reveal-modal"),$(".modal-screen").removeClass("reveal-modal"))},t)}),jQuery(".close-modal:not(.modal-strip .close-modal)").unbind("click").click(function(){var e=jQuery(this).closest(".foundry_modal");e.toggleClass("reveal-modal"),void 0!==e.attr("data-cookie")&&mr_cookies.setItem(e.attr("data-cookie"),"true",1/0),e.find("iframe").length&&e.find("iframe").attr("src",""),jQuery(".modal-screen").removeClass("reveal-modal")}),jQuery(".modal-screen").unbind("click").click(function(){jQuery(".foundry_modal.reveal-modal").find("iframe").length&&jQuery(".foundry_modal.reveal-modal").find("iframe").attr("src",""),jQuery(".foundry_modal.reveal-modal").toggleClass("reveal-modal"),jQuery(this).toggleClass("reveal-modal")}),jQuery(document).keyup(function(e){27==e.keyCode&&(jQuery(".foundry_modal").find("iframe").length&&jQuery(".foundry_modal").find("iframe").attr("src",""),jQuery(".foundry_modal").removeClass("reveal-modal"),jQuery(".modal-screen").removeClass("reveal-modal"))}),jQuery(".modal-strip").each(function(){jQuery(this).find(".close-modal").length||jQuery(this).append(jQuery('<i class="ti-close close-modal">'));var e=jQuery(this);void 0!==e.attr("data-cookie")?mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.addClass("reveal-modal")},1e3):setTimeout(function(){e.addClass("reveal-modal")},1e3)}),jQuery(".modal-strip .close-modal").click(function(){var e=jQuery(this).closest(".modal-strip");return void 0!==e.attr("data-cookie")&&mr_cookies.setItem(e.attr("data-cookie"),"true",1/0),jQuery(this).closest(".modal-strip").removeClass("reveal-modal"),!1}),jQuery(".close-iframe").click(function(){jQuery(this).closest(".modal-video").removeClass("reveal-modal"),jQuery(this).siblings("iframe").attr("src",""),jQuery(this).siblings("video").get(0).pause()}),$(".checkbox-option").on("click",function(){$(this).toggleClass("checked");var e=$(this).find("input");!1===e.prop("checked")?e.prop("checked",!0):e.prop("checked",!1)}),$(".radio-option").click(function(){var e=$(this).hasClass("checked"),t=$(this).find("input").attr("name");e||($('input[name="'+t+'"]').parent().removeClass("checked"),$(this).addClass("checked"),$(this).find("input").prop("checked",!0))}),$(".accordion li").click(function(){$(this).closest(".accordion").hasClass("one-open")?($(this).closest(".accordion").find("li").removeClass("active"),$(this).addClass("active")):$(this).toggleClass("active"),void 0!==window.mr_parallax&&setTimeout(mr_parallax.windowLoad,500)}),$(".tabbed-content").each(function(){$(this).append('<ul class="content"></ul>')}),$(".tabs li").each(function(){var e=$(this),t="";e.is(".tabs>li:first-child")&&(t=' class="active"');var o=e.find(".tab-content").detach().wrap("<li"+t+"></li>").parent();e.closest(".tabbed-content").find(".content").append(o)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var e=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+e+")").addClass("active")}),$("section").closest("body").find(".local-video-container .play-button").click(function(){$(this).siblings(".background-image-holder").removeClass("fadeIn"),$(this).siblings(".background-image-holder").css("z-index",-1),$(this).css("opacity",0),$(this).siblings("video").get(0).play()}),$("section").closest("body").find(".player").each(function(){$(this).closest("section").find(".container").addClass("fadeOut");var e=$(this).attr("data-video-id"),t=$(this).attr("data-start-at");$(this).attr("data-property","{videoURL:'http://youtu.be/"+e+"',containment:'self',autoPlay:true, mute:true, startAt:"+t+", opacity:1, showControls:false}")}),$(".player").length&&$(".player").each(function(){var e=$(this).closest("section"),t=e.find(".player");t.YTPlayer(),t.on("YTPStart",function(t){e.find(".container").removeClass("fadeOut"),e.find(".masonry-loader").addClass("fadeOut")})}),$(".map-holder").click(function(){$(this).addClass("interact")}),$(".map-holder").length&&$(window).scroll(function(){$(".map-holder.interact").length&&$(".map-holder.interact").removeClass("interact")}),$(".countdown").length&&$(".countdown").each(function(){var e=$(this).attr("data-date");$(this).countdown(e,function(e){$(this).text(e.strftime("%D days %H:%M:%S"))})}),$("form.form-email, form.form-newsletter").submit(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1;var o,a,n,i,r,s,l,d,c,u=$(this).closest("form.form-email, form.form-newsletter"),f=u.find('button[type="submit"]'),m=u.attr("original-error");if(a=$(u).find("iframe.mail-list-form"),u.find(".form-error, .form-success").remove(),f.attr("data-text",f.text()),u.append('<div class="form-error" style="display: none;">'+u.attr("data-error")+"</div>"),u.append('<div class="form-success" style="display: none;">'+u.attr("data-success")+"</div>"),d=u.find(".form-error"),c=u.find(".form-success"),u.addClass("attempted-submit"),a.length&&void 0!==a.attr("srcdoc")&&""!==a.attr("srcdoc"))if(console.log("Mail list form signup detected."),void 0!==m&&!1!==m&&d.html(m),n=$(u).find(".signup-email-field").val(),i=$(u).find(".signup-name-field").val(),r=$(u).find("input.signup-first-name-field").length?$(u).find("input.signup-first-name-field").val():$(u).find(".signup-name-field").val(),s=$(u).find(".signup-last-name-field").val(),1!==e(u)){(o=prepareSignup(a)).find("#mce-EMAIL, #fieldEmail").val(n),o.find("#mce-LNAME, #fieldLastName").val(s),o.find("#mce-FNAME, #fieldFirstName").val(r),o.find("#mce-NAME, #fieldName").val(i),u.removeClass("attempted-submit"),d.fadeOut(200),f.html(jQuery("<div />").addClass("form-loading")).attr("disabled","disabled");try{$.ajax({url:o.attr("action"),crossDomain:!0,data:o.serialize(),method:"GET",cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",success:function(e){"success"!=e.result&&200!=e.Status?(d.attr("original-error",d.text()),d.html(e.msg).fadeIn(1e3),c.fadeOut(1e3),f.html(f.attr("data-text")).removeAttr("disabled")):(f.html(f.attr("data-text")).removeAttr("disabled"),void 0!==(l=u.attr("success-redirect"))&&!1!==l&&""!==l&&(window.location=l),u.find('input[type="text"]').val(""),u.find("textarea").val(""),c.fadeIn(1e3),d.fadeOut(1e3),setTimeout(function(){c.fadeOut(500)},5e3))}})}catch(e){d.attr("original-error",d.text()),d.html(e.message).fadeIn(1e3),c.fadeOut(1e3),setTimeout(function(){d.fadeOut(500)},5e3),f.html(f.attr("data-text")).removeAttr("disabled")}}else d.fadeIn(1e3),setTimeout(function(){d.fadeOut(500)},5e3);else if(void 0!==m&&!1!==m&&d.text(m),1===e(u))d.fadeIn(200),setTimeout(function(){d.fadeOut(500)},3e3);else{u.removeClass("attempted-submit"),d.fadeOut(200),f.html(jQuery("<div />").addClass("form-loading")).attr("disabled","disabled");var g,h;switch(u.attr("id")){case"message-form":console.log("Send message form detected."),h="/mail/send";break;case"signup-form":console.log("Send signup form detected."),h="/api/signup";break;case"signup-taarangana":console.log("Send event form detected."),h="/api/event_signup";break;case"job_signup":console.log("Send event form detected."),h="/api/job_signup";break;case"startup_signup":console.log("Send event form detected."),h="/api/startup_signup";break;case"projects":console.log("Send event form detected."),h="/api/projects"}g="https://cbcom.cb.lk",console.log("url = "+h),jQuery.ajax({type:"POST",url:g+h,data:u.serialize()+"&url="+window.location.href,success:function(e){f.html(f.attr("data-text")).removeAttr("disabled"),console.log("response = "+e),"OK"==e?(void 0!==(l=u.attr("success-redirect"))&&!1!==l&&""!==l&&(window.location=l),u.find('input[type="text"]').val(""),u.find("textarea").val(""),u.find(".form-success").fadeIn(1e3),d.fadeOut(1e3),setTimeout(function(){c.fadeOut(500)},5e3)):(d.attr("original-error",d.text()),d.text(e).fadeIn(1e3),c.fadeOut(1e3))},error:function(e,t,o){d.attr("original-error",d.text()),d.text(o).fadeIn(1e3),c.fadeOut(1e3),f.html(f.attr("data-text")).removeAttr("disabled")}})}return!1}),$(".validate-required, .validate-email").on("blur change",function(){e($(this).closest("form"))}),$("form").each(function(){$(this).find(".form-error").length&&$(this).attr("original-error",$(this).find(".form-error").text())}),t("ref")&&$("form.form-email").append('<input type="text" name="referrer" class="hidden" value="'+t("ref")+'"/>'),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)&&$("section").removeClass("parallax"),$(".disqus-comments").length){var n=$(".disqus-comments").attr("data-shortname");!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+n+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}if(document.querySelector("[data-maps-api-key]")&&!document.querySelector(".gMapsAPI")&&$("[data-maps-api-key]").length){var i=document.createElement("script"),r=$("[data-maps-api-key]:first").attr("data-maps-api-key");i.type="text/javascript",i.src="https://maps.googleapis.com/maps/api/js?key="+r+"&callback=initializeMaps",i.className="gMapsAPI",document.body.appendChild(i)}!function(){function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//code.jivosite.com/script/widget/"+t;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)}var t="mm3xh9v8wk",o=document,a=window;"complete"==o.readyState?e():a.attachEvent?a.attachEvent("onload",e):a.addEventListener("load",e,!1)}()}),$(window).load(function(){"use strict";setTimeout(initializeMasonry,1e3),mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0)}),window.initializeMaps=function(){"undefined"!=typeof google&&void 0!==google.maps&&$(".map-canvas[data-maps-api-key]").each(function(){var e,t,o=this,a=void 0!==$(this).attr("data-map-style")&&$(this).attr("data-map-style"),n=JSON.parse(a)||[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],i=void 0!==$(this).attr("data-map-zoom")&&""!==$(this).attr("data-map-zoom")?1*$(this).attr("data-map-zoom"):17,r=void 0!==$(this).attr("data-latlong")&&$(this).attr("data-latlong"),s=!!r&&1*r.substr(0,r.indexOf(",")),l=!!r&&1*r.substr(r.indexOf(",")+1),d=new google.maps.Geocoder,c=void 0!==$(this).attr("data-address")?$(this).attr("data-address").split(";"):[""],u="We Are Here",f={draggable:$(document).width()>766,scrollwheel:!1,zoom:i,disableDefaultUI:!1,styles:n};void 0!=$(this).attr("data-marker-title")&&""!=$(this).attr("data-marker-title")&&(u=$(this).attr("data-marker-title")),void 0!=c&&""!=c[0]?d.geocode({address:c[0].replace("[nomarker]","")},function(e,a){if(a==google.maps.GeocoderStatus.OK){var n=new google.maps.Map(o,f);n.setCenter(e[0].geometry.location),c.forEach(function(e){if(t={url:"/assets/images/cb/cb_marker.png",scaledSize:new google.maps.Size(60,100),origin:new google.maps.Point(0,0)},/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(e))var o=e.split(","),a=new google.maps.Marker({position:{lat:1*o[0],lng:1*o[1]},map:n,icon:t,title:u,optimised:!1});else e.indexOf("[nomarker]")<0&&(new google.maps.Geocoder).geocode({address:e.replace("[nomarker]","")},function(e,o){o==google.maps.GeocoderStatus.OK&&(a=new google.maps.Marker({map:n,icon:t,title:u,position:e[0].geometry.location,optimised:!1}))})})}else console.log("There was a problem geocoding the address.")}):void 0!=s&&""!=s&&0!=s&&void 0!=l&&""!=l&&0!=l&&(f.center={lat:s,lng:l},e=new google.maps.Map(o,f),new google.maps.Marker({position:{lat:s,lng:l},map:e,icon:t,title:u}))})},initializeMaps();var mr_cookies={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,t,o,a,n,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var r="";if(o)switch(o.constructor){case Number:r=o===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+o;break;case String:r="; expires="+o;break;case Date:r="; expires="+o.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+(n?"; domain="+n:"")+(a?"; path="+a:"")+(i?"; secure":""),!0},removeItem:function(e,t,o){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,o=0;o<t;o++)e[o]=decodeURIComponent(e[o]);return e}};(function(){function e(e){return"number"!=typeof e&&"string"!=typeof e?"":T(e.toString())}function t(e){if(void 0==(e=e?e.title:"")||""==e)return"";e=encodeURIComponent(e);for(var t=256;!function(e){try{return decodeURIComponent(e),!0}catch(e){return!1}}(e.substr(0,t));)t--;return"&tiba="+e.substr(0,t)}function o(){return new Image}function a(e,t,o,a){if((R?C(3):"")==N.g.b)try{var n;e:if(3!=y(o,"fmt"))n=!1;else{if(a){var i=y(o,"random"),r=y(o,"label");if(!i||!r){n=!1;break e}for(var s,l=decodeURIComponent(r.replace(/\+/g," "))+":"+decodeURIComponent(i.replace(/\+/g," ")),i=[],d=r=0;d<l.length;d++){for(var c=l.charCodeAt(d);255<c;)i[r++]=255&c,c>>=8;i[r++]=c}if(!x)for(x={},O={},l=0;65>l;l++)x[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l),O[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(l);for(l=O,c=[],r=0;r<i.length;r+=3){var u=i[r],f=r+1<i.length,m=f?i[r+1]:0,g=r+2<i.length,h=g?i[r+2]:0,d=u>>2,v=(3&u)<<4|m>>4,b=(15&m)<<2|h>>6,k=63&h;g||(k=64,f||(b=64)),c.push(l[d],l[v],l[b],l[k])}var w,j=c.join("").replace(/[.]*$/,""),S=e.GooglebQhCsO;if(S||(S={},e.GooglebQhCsO=S),(w=S)[j]?s=!1:(w[j]=[],w[j][0]=a,s=!0),!s){n=!1;break e}}var T=o.search(_);e=0;var Q;for(a=[];0<=(Q=p(o,e,"fmt",T));)a.push(o.substring(e,Q)),e=Math.min(o.indexOf("&",Q)+1||T,T);a.push(o.substr(e));var I=[a.join("").replace($,"$1"),"&","fmt"];if(I.push("=",encodeURIComponent("4")),I[1]){var E=I[0],A=E.indexOf("#");0<=A&&(I.push(E.substr(A)),I[0]=E=E.substr(0,A));var M=E.indexOf("?");0>M?I[1]="?":M==E.length-1&&(I[1]=void 0)}var P=t.createElement("script");P.src=I.join(""),t.getElementsByTagName("script")[0].parentElement.appendChild(P),n=!0}return n}catch(e){}return!1}var n=this,i=function(e){return"string"==typeof e},r=function(e){return e=parseFloat(e),isNaN(e)||1<e||0>e?0:e},s=r("0.20"),l=r("0.01"),d=!!/^true$/.test("false"),c=Array.prototype.indexOf?function(e,t,o){return Array.prototype.indexOf.call(e,t,o)}:function(e,t,o){if(o=null==o?0:0>o?Math.max(0,e.length+o):o,i(e))return i(t)&&1==t.length?e.indexOf(t,o):-1;for(;o<e.length;o++)if(o in e&&e[o]===t)return o;return-1},u=Array.prototype.filter?function(e,t,o){return Array.prototype.filter.call(e,t,o)}:function(e,t,o){for(var a=e.length,n=[],r=0,s=i(e)?e.split(""):e,l=0;l<a;l++)if(l in s){var d=s[l];t.call(o,d,l,e)&&(n[r++]=d)}return n},f=Array.prototype.map?function(e,t,o){return Array.prototype.map.call(e,t,o)}:function(e,t,o){for(var a=e.length,n=Array(a),r=i(e)?e.split(""):e,s=0;s<a;s++)s in r&&(n[s]=t.call(o,r[s],s,e));return n},m=function(e){return Array.prototype.concat.apply([],arguments)},g=function(e){var t,o=[],a=0;for(t in e)o[a++]=e[t];return o},h=function(e){return h[" "](e),e};h[" "]=function(){};var v=function(e,t){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(void 0,e[o],o,e)};!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});n.addEventListener("test",null,t)}catch(e){}}();var p=function(e,t,o,a){for(var n=o.length;0<=(t=e.indexOf(o,t))&&t<a;){var i=e.charCodeAt(t-1);if(!(38!=i&&63!=i||(i=e.charCodeAt(t+n))&&61!=i&&38!=i&&35!=i))return t;t+=n+1}return-1},_=/#|$/,y=function(e,t){var o=e.search(_),a=p(e,0,t,o);if(0>a)return null;var n=e.indexOf("&",a);return(0>n||n>o)&&(n=o),a+=t.length+1,decodeURIComponent(e.substr(a,n-a).replace(/\+/g," "))},$=/[?&]($|#)/,b=function(){this.h={},this.a={};for(var e=[2,3],t=0,o=e.length;t<o;++t)this.a[e[t]]=""},k=function(){try{var e=n.top.location.hash;if(e){var t=e.match(/\bdeid=([\d,]+)/);return t&&t[1]||""}}catch(e){}return""},w=function(e,t,o){var a=R;if(o?a.a.hasOwnProperty(o)&&""==a.a[o]:1){var i;if(i=(i=k().match(new RegExp("\\b("+e.join("|")+")\\b")))&&i[0]||null)e=i;else if(1e-4>Math.random()||!((i=Math.random())<t))e=null;else{try{var r=new Uint32Array(1);n.crypto.getRandomValues(r),i=r[0]/65536/65536}catch(e){i=Math.random()}e=e[Math.floor(i*e.length)]}e&&""!=e&&(o?a.a.hasOwnProperty(o)&&(a.a[o]=e):a.h[e]=!0)}},C=function(e){var t=R;return t.a.hasOwnProperty(e)?t.a[e]:""},j=function(){var e=R,t=[];return v(e.h,function(e,o){t.push(o)}),v(e.a,function(e){""!=e&&t.push(e)}),t},x=null,O=null,S="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),T=function(e){return null!=e?encodeURIComponent(e.toString()):""},Q=function(e){return null!=e?e.toString().substring(0,512):""},I=function(e,t){return""!=(t=T(t))&&""!=(e=T(e))?"&".concat(e,"=",t):""},E=function(e){var t=typeof e;return null==e||"object"==t||"function"==t?null:String(e).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},A=function(e){var t;if((e=e.google_custom_params)&&"object"==typeof e&&"function"!=typeof e.join){var o=[];for(t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=e[t];if(a&&"function"==typeof a.join){for(var n=[],i=0;i<a.length;++i){var r=E(a[i]);null!=r&&n.push(r)}a=n.length?n.join(","):null}else a=E(a);(n=E(t))&&null!=a&&o.push(n+"="+a)}t=o.join(";")}else t="";return""==t?"":"&".concat("data=",encodeURIComponent(t))},M=function(t){if(!t)return"";if(!(t=t.google_conversion_items))return"";for(var o=[],a=0,n=t.length;a<n;a++){var i=t[a],r=[];i&&(r.push(e(i.value)),r.push(e(i.quantity)),r.push(e(i.item_id)),r.push(e(i.adwords_grouping)),r.push(e(i.sku)),o.push("("+r.join("*")+")"))}return 0<o.length?"&item="+o.join(""):""},P=function(e,t,o){var a=[];if(e){var n=e.screen;n&&(a.push(I("u_h",n.height)),a.push(I("u_w",n.width)),a.push(I("u_ah",n.availHeight)),a.push(I("u_aw",n.availWidth)),a.push(I("u_cd",n.colorDepth))),e.history&&a.push(I("u_his",e.history.length))}return o&&"function"==typeof o.getTimezoneOffset&&a.push(I("u_tz",-o.getTimezoneOffset())),t&&("function"==typeof t.javaEnabled&&a.push(I("u_java",t.javaEnabled())),t.plugins&&a.push(I("u_nplug",t.plugins.length)),t.mimeTypes&&a.push(I("u_nmime",t.mimeTypes.length))),a.join("")},F=function(e,t,o,a){var n="";if(t){var i;if(e.top==e)i=0;else{var r=e.location.ancestorOrigins;if(r)i=r[r.length-1]==e.location.origin?1:2;else{r=e.top;try{var s;if(s=!!r&&null!=r.location.href)e:{try{h(r.foo),s=!0;break e}catch(e){}s=!1}i=s}catch(e){i=!1}i=i?1:2}}e=o||(1==i?e.top.location.href:e.location.href),n+=I("frm",i),n+=I("url",Q(e)),n+=I("ref",Q(a||t.referrer))}return n},H=function(e,t){return!(d||t&&U.test(navigator.userAgent))||e&&e.location&&e.location.protocol&&"https:"==e.location.protocol.toString().toLowerCase()?"https:":"http:"},N={g:{c:"27391101",b:"27391102"},f:{c:"376635470",b:"376635471"}},R=null,L=function(){var e=m.apply([],f(g(N),function(e){return g(e)},void 0)),t=u(k().split(","),function(t){return""!=t&&!(0<=c(e,t))});return 0<t.length?"&debug_experiment_id="+t.join(","):""},U=/Android ([01]\.|2\.[01])/i,z=function(e,t){var o=t.createElement("iframe");o.style.display="none",o.src=H(e,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE",t.body.appendChild(o)},q=function(e,t,n,i,r,s){var l,d=n.opt_image_generator&&n.opt_image_generator.call;l=r&&n.onload_callback&&n.onload_callback.call?n.onload_callback:function(){},i+=I("async","1"),!d&&s&&a(e,t,i,l)||(e=o,d&&(e=n.opt_image_generator),n=e(),n.src=i,n.onload=l)},B=function(e,t){for(var o=document.createElement("iframe"),a=[],n=[],i=0;i<t.google_conversion_items.length;i++){var r=t.google_conversion_items[i];r&&r.quantity&&r.sku&&(a.push(r.sku),n.push(r.quantity))}return e=H(e,!1)+"//www.google.com/ads/mrc",o.src=e+"?sku="+a.join(",")+"&qty="+n.join(",")+"&oid="+t.google_conversion_order_id+"&mcid="+t.google_conversion_merchant_id,o.style.width="1px",o.style.height="1px",o.style.display="none",o},D=function(e,t,o){var a=function(){o.documentElement.appendChild(B(e,t))};"complete"===o.readyState?a():e.addEventListener?e.addEventListener("load",a):e.attachEvent("onload",a)},G=function(e,t){(R?C(2):"")==N.f.b&&("complete"===t.readyState?z(e,t):e.addEventListener?e.addEventListener("load",function(){z(e,t)}):e.attachEvent("onload",function(){z(e,t)}))},W=function(e,t){for(var o={},a=function(a){o[a]=t&&null!=t[a]?t[a]:e[a]},n=0;n<S.length;n++)a(S[n]);return a("onload_callback"),o};window.google_trackConversion=function(e){var o=window,a=navigator,n=document;(e=W(o,e)).google_conversion_format=3;var i=!1;if(e&&3==e.google_conversion_format){try{var r;if("landing"==e.google_conversion_type||!e.google_conversion_id||e.google_remarketing_only&&e.google_disable_viewthrough?r=!1:(e.google_conversion_date=new Date,e.google_conversion_time=e.google_conversion_date.getTime(),e.google_conversion_snippets="number"==typeof e.google_conversion_snippets&&0<e.google_conversion_snippets?e.google_conversion_snippets+1:1,"number"!=typeof e.google_conversion_first_time&&(e.google_conversion_first_time=e.google_conversion_time),e.google_conversion_js_version="8",0!=e.google_conversion_format&&1!=e.google_conversion_format&&2!=e.google_conversion_format&&3!=e.google_conversion_format&&(e.google_conversion_format=1),!1!==e.google_enable_display_cookie_match&&(e.google_enable_display_cookie_match=!0),R=new b,r=!0),r){if(e.google_remarketing_only&&e.google_enable_display_cookie_match&&R&&w([N.f.c,N.f.b],s,2),!e.google_remarketing_only&&!e.google_conversion_domain){var d=N.g;R&&w([d.c,d.b],l,3)}r="/?","landing"==e.google_conversion_type&&(r="/extclk?");var c,u=[e.google_remarketing_only?"viewthroughconversion/":"conversion/",T(e.google_conversion_id),r,"random=",T(e.google_conversion_time)].join(""),f=e.google_remarketing_only?"googleads.g.doubleclick.net":e.google_conversion_domain||"www.googleadservices.com";c=H(o,/www[.]googleadservices[.]com/i.test(f))+"//"+f+"/pagead/"+u;var m,g;e:{var h=e.google_conversion_language;if(null!=h){var v=h.toString();if(2==v.length){g=I("hl",v);break e}if(5==v.length){g=I("hl",v.substring(0,2))+I("gl",v.substring(3,5));break e}}g=""}if(m=[I("cv",e.google_conversion_js_version),I("fst",e.google_conversion_first_time),I("num",e.google_conversion_snippets),I("fmt",e.google_conversion_format),I("value",e.google_conversion_value),I("currency_code",e.google_conversion_currency),I("label",e.google_conversion_label),I("oid",e.google_conversion_order_id),I("bg",e.google_conversion_color),g,I("guid","ON"),I("disvt",e.google_disable_viewthrough),I("eid",j().join()),M(e),P(o,a,e.google_conversion_date),A(e),F(o,n,e.google_conversion_page_url,e.google_conversion_referrer_url),e.google_remarketing_for_search&&!e.google_conversion_domain?"&srr=n":"",t(n)].join("")+L(),q(o,n,e,c+m,!0,!0),e.google_remarketing_for_search&&!e.google_conversion_domain){var p,_=[T(e.google_conversion_id),"/?random=",Math.floor(1e9*Math.random())].join("");p=H(o,!1)+"//www.google.com/ads/user-lists/"+_,p+=[I("label",e.google_conversion_label),I("fmt","3"),F(o,n,e.google_conversion_page_url,e.google_conversion_referrer_url)].join(""),q(o,n,e,p,!1,!1)}e.google_remarketing_only&&e.google_enable_display_cookie_match&&G(o,n),i=!0}e.google_conversion_merchant_id&&e.google_conversion_order_id&&e.google_conversion_items&&(D(o,e,n),i=!0)}catch(e){}o=i}else o=!1;return o}}).call(this),window.google_trackConversion({google_conversion_id:858471704,google_custom_params:{page:window.location.pathname},google_remarketing_only:!0}),window.addEventListener("message",function(e){switch(e.data.event){case"register":console.log("LMS register");break;case"signup":console.log("LMS signup"),fbq("track","CompleteRegistration");break;case"submitted":console.log("LMS submitted");break;case"bought":console.log("LMS bought"),fbq("track","Purchase")}});