$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const $counter = $(this).next().children(".counter");
    const remainingChars = 140 - this.value.length;

    $counter.html(remainingChars);

    if (remainingChars < 0) {
      $counter.addClass("red");
    } else {
      $counter.removeClass("red");
    }
  });
});
