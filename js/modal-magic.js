(function ($){
	'use strict';

	var Modal = function (element, options){
		var _ = this;
		var defaults = {};

		_.element = element;
		_.id = element.id;
		_.settings = $.extend({}, defaults, options, true);

		return _;
	};

	Modal.prototype.init = function (){
		var _ = this;

		_.modal = $(_.element).venobox(_.settings);

		_.openFromURL();

		return _;
	};

	Modal.prototype.openFromURL = function (){
		var _ = this;

		var hash = window.location.hash;

		if(hash.substring(1) === _.id){
			$(_.element).trigger('click');
		}

		return _;
	};

	$.fn.modal = function (options){
		return this.each(function (i, modal){
			return new Modal(modal, options).init();
		});
	};

	$(document).ready(function (){
		$('[data-modal]').modal();
	});
})(jQuery);