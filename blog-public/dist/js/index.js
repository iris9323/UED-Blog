"use strict";$(function(){var n;n=$(".public-header .navbar"),$(window).on("scroll",function(){$(document).scrollTop()>$(".banner").height()-n.height()?n.css({"background-image":"linear-gradient(330deg, #6f18d7, #4962dc)",opacity:.9}):n.css("background","transparent")}),tabToggle($(".content-tab li"),"content-current"),borderSlide(),backTop($(".btn-back-top"))});