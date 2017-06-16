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
  })
})