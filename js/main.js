/*globals $*/
$(document).ready(function (e) {
    e(".scroll").click(function (t) {
        t.preventDefault();
        e("html,body").animate({
                                   scrollTop: e(this.hash).offset().top
                               }, 1e3)
    });

    var lightbox = $('#light-box').find('img');

    $('.lightbox--enabled').click(function () {
        lightbox.attr('src', $(this).find('img').attr('src'));
    });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function() {
    }, function() {
    });
} else {
}
