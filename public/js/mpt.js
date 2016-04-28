/*!
 * move-post-thumbnail, (c) 2016 moritzjacobs.de
 * @version 0.0.1
 * @date 2016-04-28, 16:39
 */
!function(e,t,d,i){"use strict";var a=e("#postimagediv-hide"),s=e("#postimagediv"),o=e("#titlediv"),n="checked"===a.attr("checked");s.removeClass("postbox"),s.find(".handlediv, .hndle, #set-post-thumbnail-desc").remove(),s.find("#remove-post-thumbnail").text("");var c=s.find("#set-post-thumbnail img");c.detach(),s.find("#set-post-thumbnail").text("").append(c),n&&o.addClass("titlediv-has-replaced-postimagediv"),s.detach().appendTo("#titlediv").show(),a.on("change",function(){n="checked"===a.attr("checked"),o.toggleClass("titlediv-has-replaced-postimagediv")})}(jQuery,window,document);