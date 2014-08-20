// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(document).ready(function() {
  var $documentSwitcher = $('#document-switcher');
  if ($documentSwitcher) {
    $('+ .dropdown-menu [href]', $documentSwitcher).each(function(i, elem) {
      $.ajax({ url: elem, type: 'HEAD', async: false, statusCode: {
        200: function() {
          $documentSwitcher.data('new', i == 0);
        },
        404: function() {
          if (i == 0) $documentSwitcher.addClass('deprecated-page');
          $(elem).removeAttr('href').parent().addClass("disabled");
        }
      }});
    });
    if ($documentSwitcher.data('new')) $documentSwitcher.addClass('new-page');
  }
});
