jQuery(document).ready(function() {
  jQuery('.item.member .piece .more').on('click', function(e) {
    e.preventDefault();
    _this = jQuery(this);
    _this.toggleClass('close-desc');
    if (_this.hasClass('close-desc')) {
      _this.parent().find('p').text(_this.parent().find('.all-desc').val());
      _this.text(jQuery('#close_str').val());
    } else {
      _this.parent().find('p').text(_this.parent().find('.short-desc').val());
      _this.text(jQuery('#read_more_str').val());
    }
  });

  var language = jQuery('#language').val();
  if (language == 'ja') {
    jQuery('.select-language').val('ja');
  } else if (language == 'cn') {
    jQuery('.select-language').val('cn');
  } else {
    jQuery('.select-language').val('en');
  }
  jQuery('.select-language').selectpicker();

  jQuery('select.select-language').on('change', function() {
    console.log(jQuery(this).val());
    var language = jQuery(this).val();
    var defaultUrl = jQuery('#default-url').val();
    if (language == 'en') {
      window.location.href = window.location.origin + defaultUrl;
    } else if (language == 'ja') {
      window.location.href = window.location.origin + '/ja' + defaultUrl;
    } else if (language == 'cn') {
      window.location.href = window.location.origin + '/cn' + defaultUrl;
    }

  })
})