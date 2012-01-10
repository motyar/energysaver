/*
 * jQuery EnergySaver Screen Saver plugin 0.1
 *
 * Copyright (c) 2010 Dharmveer Motyar
 * http://motyar.blogspot.com
 *
 * $Id$
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Creates a energysaver.
 *
 * @example $.energysaver();
 *
 * @name EnergySaver
 * @type jQuery
 * @cat Plugins/supernova
 */
(function($) {
	/*
	 * Plugin defaults 
	 */
	var defaults = {
		delay: 5000,
		events: 'mousemove mousedown keydown'
	};
	
	$.energysaver = function(settings) {
		$.energysaver.settings = $.extend({}, defaults, settings);
		$.energysaver.startCounter($.energysaver.settings.delay);
		bindEvents($.energysaver.settings.events);
		return;
	};
	
	/*
	 * Public Functions
	 */
	$.energysaver.end = function() {
		
		$(document.body).css({'background':'#ffffff'});
		$.energysaver.resetCounter();
		
	};
	$.energysaver.start = function() {
        $(document.body).css({
                           background:'#000'
						});

	};
	$.energysaver.startCounter = function(timeout) {
		$.energysaver.counter = setInterval("$.energysaver.start()", timeout);
	};
	$.energysaver.resetCounter = function() {
		clearInterval($.energysaver.counter);
		$.energysaver.startCounter($.energysaver.settings.delay);
	};
	
	/*
	 * Private functions
	 */
	function bindEvents(events, elmt) {
		$(document).bind(events, $.energysaver.end);
	};
	
})(jQuery);