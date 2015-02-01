//
// Copyright (c) 2008-2015 the Urho3D project.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

$(document).ready(function() {
  // Show/hide binary packages based on package-filter's criteria
  $('.package-filter .criteria').change(function() {
    // There could be more than one package-filter in a page, so find the actual one containing the checkbox that received the change event
    var $packageFilter = $(this).parents('.package-filter');
    $packageFilter.data('criterias')[this.name] = this.checked; // Update the filter criteria
    // Then find the package grid which should be located next to the changed package-filter
    var data = $packageFilter.data('criterias');
    $packageFilter.next()
      .find('.binary-package')
        // Perform the actual filtering
        .find('.64-bit.STATIC').toggleClass('hidden', !(data['64-bit'] && data.STATIC)).end()
        .find('.64-bit.SHARED').toggleClass('hidden', !(data['64-bit'] && data.SHARED)).end()
        .find('.32-bit.STATIC').toggleClass('hidden', !(data['32-bit'] && data.STATIC)).end()
        .find('.32-bit.SHARED').toggleClass('hidden', !(data['32-bit'] && data.SHARED)).end()
        .each(function() {
          // Hide list header when the list itself is hidden
          var $this = $(this);
          $this.prev().toggleClass('hidden', !$this.find('li:not(.hidden)').length);
        }).end()
      .masonry(); // Relayout the package grid to minimize unused space
  }).each(function() {
    // Ensure package-filter's criterias agree with their default values on page reload
    this.checked = this.defaultChecked;
  });

  // Give some time for Disqus async content to populate then scroll to the anchor one more time
  $(window).on("load", function() {
    if (/disqus_thread$/.test(window.location.hash)) {
      setTimeout(function() {
        $('html, body').scrollTop($(window.location.hash).position().top);
      }, 800);
    }
  });
});
