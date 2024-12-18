/*
  Forty by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
    xxsmall: "(max-width: 360px)",
  });

  $(function () {
    var $window = $(window),
      $body = $("body"),
      $wrapper = $("#wrapper"),
      $header = $("#header"),
      $banner = $("#banner");

    // Disable animations/transitions until the page has loaded.
    $body.addClass("is-loading");

    window.setTimeout(function () {
      $body.removeClass("is-loading");
    }, 200);

    // Clear transitioning state on unload/hide.
    $window.on("unload pagehide", function () {
      window.setTimeout(function () {
        $(".is-transitioning").removeClass("is-transitioning");
      }, 250);
    });

    // Formspree
    window.onbeforeunload = () => {
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }

    // Fix: Enable IE-only tweaks.
    if (skel.vars.browser == "ie" || skel.vars.browser == "edge")
      $body.addClass("is-ie");

    // Fix: Placeholder polyfill.
    $("form").placeholder();

    // Prioritize "important" elements on medium.
    skel.on("+medium -medium", function () {
      $.prioritize(
        ".important\\28 medium\\29",
        skel.breakpoint("medium").active
      );
    });

    // Scrolly.
    $(".scrolly").scrolly({
      offset: function () {
        return $header.height() - 2;
      },
    });

    // Tiles.
    var $tiles = $(".tiles > article");

    $tiles.each(function () {
      var $this = $(this),
        $image = $this.find(".image"),
        $img = $image.find("img"),
        $link = $this.find(".link"),
        x;

      // Image.

      // Set image.
      $this.css("background-image", "url(" + $img.attr("src") + ")");

      // Set position.
      if ((x = $img.data("position"))) $image.css("background-position", x);

      // Hide original.
      $image.hide();

      // Link.
      if ($link.length > 0) {
        $x = $link.clone().text("").addClass("primary").appendTo($this);

        $x.attr("aria-label", $link.text());

        $link = $link.add($x);

        $link.on("click", function (event) {
          var href = $link.attr("href");

          // Prevent default.
          event.stopPropagation();
          event.preventDefault();

          // Start transitioning.
          $this.addClass("is-transitioning");
          $wrapper.addClass("is-transitioning");

          // Redirect.
          window.setTimeout(function () {
            if ($link.attr("target") == "_blank") window.open(href);
            else location.href = href;
          }, 500);
        });
      }
    });

    // Header.
    if (skel.vars.IEVersion < 9) $header.removeClass("alt");

    if ($banner.length > 0 && $header.hasClass("alt")) {
      $window.on("resize", function () {
        $window.trigger("scroll");
      });

      $window.on("load", function () {
        $banner.scrollex({
          bottom: 400,
          terminate: function () {
            $header.removeClass("alt");
          },
          enter: function () {
            $header.addClass("alt");
          },
          leave: function () {
            $header.removeClass("alt");
            $header.addClass("reveal");
          },
        });

        window.setTimeout(function () {
          $window.triggerHandler("scroll");
        }, 100);
      });
    }

    // Banner.
    $banner.each(function () {
      var $this = $(this),
        $image = $this.find(".image"),
        $img = $image.find("img");

      // Image.
      if ($image.length > 0) {
        // Set image.
        $this.css("background-image", "url(" + $img.attr("src") + ")");

        // Hide original.
        $image.hide();
      }
    });

    // Menu.
    var $menu = $("#menu"),
      $menuInner;

    $menu.wrapInner('<div class="inner"></div>');
    $menuInner = $menu.children(".inner");
    $menu._locked = false;

    $menu._lock = function () {
      if ($menu._locked) return false;

      $menu._locked = true;

      window.setTimeout(function () {
        $menu._locked = false;
      }, 350);

      return true;
    };

    $menu._show = function () {
      if ($menu._lock()) $body.addClass("is-menu-visible");
    };

    $menu._hide = function () {
      if ($menu._lock()) $body.removeClass("is-menu-visible");
    };

    $menu._toggle = function () {
      if ($menu._lock()) $body.toggleClass("is-menu-visible");
    };

    $menuInner
      .on("click", function (event) {
        event.stopPropagation();
      })
      .on("click", "a", function (event) {
        var href = $(this).attr("href");

        event.preventDefault();
        event.stopPropagation();

        // Hide.
        $menu._hide();

        // Redirect.
        window.setTimeout(function () {
          window.location.href = href;
        }, 250);
      });

    $menu
      .appendTo($body)
      .on("click", function (event) {
        event.stopPropagation();
        event.preventDefault();

        $body.removeClass("is-menu-visible");
      })
      .append('<a class="close" href="#menu">Close</a>');

    $body
      .on("click", 'a[href="#menu"]', function (event) {
        event.stopPropagation();
        event.preventDefault();

        // Toggle.
        $menu._toggle();
      })
      .on("click", function (event) {
        // Hide.
        $menu._hide();
      })
      .on("keydown", function (event) {
        // Hide on escape.
        if (event.keyCode == 27) $menu._hide();
      });

    // Async iframes load
    $('iframe[data-async-src]').each(function() {
      $(this).attr('src', $(this).data('async-src'));
    });

    // Modal
    $('a[data-modal]').on('click', function(_event) {
      $(this).modal({
        fadeDuration: 150
      });
      return false;
    });

    // Calendar past dates
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const todayTimestamp = parseInt(year + month + day);

    $('tr[data-date]').each(function() {
      const eventTimestamp = $(this).data('date');
      if (eventTimestamp < todayTimestamp) {
        $(this).css({ 'opacity': 0.5 });
      }
    });
  });
})(jQuery);
