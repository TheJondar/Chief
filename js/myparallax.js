//  Hero fade transition
window.HeroFade_Object = {};
(function (window, $, that) {
  // Constructor.
  that.init = function () {
    that.cache();

    if (that.meetsRequirements) {
      that.bindEvents();
    }
  };

  // Cache all the things.
  that.cache = function () {
    that.$c = {
      window: $(window),
      heroSelector: $(".hero"),
    };
  };

  // Combine all events.
  that.bindEvents = function () {
    that.$c.window.on("load", that.doHero);
  };

  // Do we meet the requirements?
  that.meetsRequirements = function () {
    return that.$c.heroSelector.length;
  };

  // Watch the user scroll position and fade the hero
  that.doHero = function () {
    $(window).scroll(function () {
      // transition the fade by dividing div height & opacity
      $(".hero").css(
        "opacity",
        1 - $(window).scrollTop() / $(".hero").height()
      );
    });
  };

  // Engage!
  $(that.init);
})(window, jQuery, window.HeroFade_Object);
