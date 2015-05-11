/**
 * jQuery custom radiobuttons
 * 
 * Copyright (c) 2010-2012 Tomasz Wójcik (bthlabs.pl)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 2.0
 * @category visual
 * @package jquery
 * @subpakage ui.checkbox
 * @author Tomasz Wójcik <labs@tomekwojcik.pl>
 */(function(e){jQuery.fn.radiobutton=function(t){t=t||{};var n={className:"jquery-radiobutton",checkedClass:"jquery-radiobutton-on"},r=jQuery.extend(n,t||{});return this.each(function(){var t=e(this),n=jQuery('<div class="'+r.className+'-wrapper">'+'<a class="'+r.className+'" href="#" name="'+t.attr("id")+'" rel="'+t.attr("name")+'"></a>'+"</div>"),i=jQuery("a",n);t.attr("checked")==="checked"&&i.addClass(r.checkedClass);i.on("click",function(e){e.preventDefault();e.stopPropagation();var t=jQuery("input#"+jQuery(this).attr("name"),n.parent());t.attr("checked")==="checked"?t.removeAttr("checked"):t.attr("checked","checked");t.trigger("change");jQuery(this).closest("li").trigger("click");return!1});t.on("change",function(e){var t=jQuery(this);jQuery('a[rel="'+t.attr("name")+'"].'+r.checkedClass).removeClass(r.checkedClass);t.attr("checked")==="checked"?jQuery("a[name="+t.attr("id")+"]",n.parent()).addClass(r.checkedClass):jQuery("a[name="+t.attr("id")+"]",n.parent()).removeClass(r.checkedClass)});t.css({position:"absolute",top:"-200px",left:"-200px"}).before(n);n.parent().css("overflow","hidden")})}})(jQuery);