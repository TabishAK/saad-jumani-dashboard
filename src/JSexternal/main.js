import $ from "jquery"
$(function ($) {
    $('#sidebarCollapse')
        .on('click', function (e) {

            $('#sidebar').toggleClass('active');
        });
});

