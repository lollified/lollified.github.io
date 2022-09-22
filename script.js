var navOffset = 100;

$("a[href^=#]").click(function() {
  var target = $(this.hash);
  target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  if ( target.length ) {
    $("html, body").animate({ scrollTop: target.offset().top - navOffset }, 700);
    return false;
  }
});