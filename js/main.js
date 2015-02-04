/* ============================================================
 * flatui-radiocheck v0.1.0
 * ============================================================ */

+function (global, $) {
  'use strict';

  var Radiocheck = function (element, options) {
    this.init('radiocheck', element, options);
  };

  Radiocheck.DEFAULTS = {
    checkboxClass: 'custom-checkbox',
    radioClass: 'custom-radio',
    checkboxTemplate: '<span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"></span></span>',
    radioTemplate: '<span class="icons"><span class="icon-unchecked"></span><span class="icon-checked"></span></span>'
  };

  Radiocheck.prototype.init = function (type, element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Radiocheck.DEFAULTS, this.$element.data(), options);
    if (this.$element.attr('type') == 'checkbox') {
      this.$element.addClass(this.options.checkboxClass);
      this.$element.after(this.options.checkboxTemplate);
    } else if (this.$element.attr('type') == 'radio') {
      this.$element.addClass(this.options.radioClass);
      this.$element.after(this.options.radioTemplate);
    }
  };

  Radiocheck.prototype.check = function () {
    this.$element.prop('checked', true);
    this.$element.trigger('change.radiocheck').trigger('checked.radiocheck');
  },

  Radiocheck.prototype.uncheck = function () {
    this.$element.prop('checked', false);
    this.$element.trigger('change.radiocheck').trigger('unchecked.radiocheck');
  },

  Radiocheck.prototype.toggle = function () {
    this.$element.prop('checked', function (i, value) {
      return !value;
    });
    this.$element.trigger('change.radiocheck').trigger('toggled.radiocheck');
  },

  Radiocheck.prototype.indeterminate = function () {
    this.$element.prop('indeterminate', true);
    this.$element.trigger('change.radiocheck').trigger('indeterminated.radiocheck');
  },

  Radiocheck.prototype.determinate = function () {
    this.$element.prop('indeterminate', false);
    this.$element.trigger('change.radiocheck').trigger('determinated.radiocheck');
  },

  Radiocheck.prototype.disable = function () {
    this.$element.prop('disabled', true);
    this.$element.trigger('change.radiocheck').trigger('disabled.radiocheck');
  },

  Radiocheck.prototype.enable = function () {
    this.$element.prop('disabled', false);
    this.$element.trigger('change.radiocheck').trigger('enabled.radiocheck');
  },

  Radiocheck.prototype.destroy = function () {
    this.$element.removeData().removeClass(this.options.checkboxClass + ' ' + this.options.radioClass).next('.icons').remove();
    this.$element.trigger('destroyed.radiocheck');
  };

  // RADIOCHECK PLUGIN DEFINITION
  // ============================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('radiocheck');
      var options = typeof option == 'object' && option;

      if (!data && option == 'destroy') { return; }
      if (!data) {
        $this.data('radiocheck', (data = new Radiocheck(this, options)));
      }
      if (typeof option == 'string') {
        data[option]();
      }

      // Adding 'nohover' class for mobile devices

      var mobile = /mobile|tablet|phone|ip(ad|od)|android|silk|webos/i.test(global.navigator.userAgent);

      if (mobile === true) {
        $this.parent().hover(function () {
          $this.addClass('nohover');
        }, function () {
          $this.removeClass('nohover');
        });
      }
    });
  }

  var old = $.fn.radiocheck;

  $.fn.radiocheck             = Plugin;
  $.fn.radiocheck.Constructor = Radiocheck;

  // RADIOCHECK NO CONFLICT
  // ======================

  $.fn.radiocheck.noConflict = function () {
    $.fn.radiocheck = old;
    return this;
  };

}(this, jQuery);


$(function() {

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
				)
			)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}

  //Scroll To Top
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 0
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });

  //Do the following on browsers that support CSS Animations
  if (Modernizr.cssanimations) {
    //Animate Sections
    new WOW().init();
    //Loading Annimation on Button
    // $("#some-button").ladda('bind', { timeout: 1500 } ).click(function(event) {
    //   event.preventDefault();
    //   $('.some-div').addClass('fadeInUp');
    // });
  }

  //Select2 Styles and Behaviour Activate
	$('.select-plain').select2({
				placeholder: "Select",
    		allowClear: true,
    		minimumResultsForSearch: -1
	});
	$('.select-multi').select2({
				placeholder: "Select Options",
    		allowClear: true,
    		minimumResultsForSearch: -1
	});

  //Table Sortable
  $(".sortable table").tablesorter();

  //FitVids
  $(".preview-window").fitVids();

  // DateTime Picker
	// $( "#someDateTimePickerID").datetimepicker({
	// 		pickTime: false
	// });


	// Checkboxes and Radiobuttons
  // $('[data-toggle="checkbox"]').radiocheck();
  // $('[data-toggle="radio"]').radiocheck();

	// Table: Toggle all checkboxes
  // $('.check-grid table .toggle-all :checkbox').on('click', function () {
  //   var $this = $(this);
  //   var ch = $this.prop('checked');
  //   $this.closest('table').find('tbody :checkbox').radiocheck(!ch ? 'uncheck' : 'check');
  //   tableRowDeleteBtn.attr("disabled", !$this.is(":checked"));
  // });

	// Table: Add class row selected
  // $('.check-grid table tbody :checkbox').on('change.radiocheck', function () {
  //   var $this = $(this);
  //   var check = $this.prop('checked');
  //   var checkboxes = $('.check-grid table tbody :checkbox');
  //   var checkAll = checkboxes.length === checkboxes.filter(':checked').length;

  //   $this.closest('tr')[check ? 'addClass' : 'removeClass']('selected-row');
  //   $this.closest('table').find('.toggle-all :checkbox').radiocheck(checkAll ? 'check' : 'uncheck');
  //   tableRowDeleteBtn.attr("disabled", !$this.is(":checked"));
  // });

});