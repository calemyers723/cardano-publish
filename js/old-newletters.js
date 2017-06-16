jQuery(document).ready(function() {
  console.log('aaa');
  $oldNewletterSection = jQuery('<div class="old-newletters"></div>');
  var index = 0;
  jQuery('.display_archive .campaign').each(function() {
    if (index % 2 == 0) {
      $row = jQuery('<div class="row"></div>');
    }
    $col = jQuery('<div class="col-md-12"></div>');
    $content = jQuery('<div></div>').addClass('content');
    $content.append(jQuery(this).find('a'));
    $content.append('<p>' + jQuery(this).text().substr(0, 10) + '</p>');
    $col.append('<em class="fa fa-file-text"></em>');
    $col.append($content);
    
    $row.append($col);
    $oldNewletterSection.append($row);
    console.log(jQuery(this).text());
    index++;
  });

  jQuery('.display_archive').after($oldNewletterSection);
  jQuery('.display_archive').remove();
})