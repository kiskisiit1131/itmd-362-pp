// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// added in so we can detect if the font is loaded or not
  WebFont.load({
    google: {
      families: ['Roboto']
    }
  });
