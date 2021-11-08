window.mz_ShippingTargetPrice = 200.0;

const mzCheckout = {
  init: function () {},
  mz_number_format: function (b, c, d, e) {
    b = (b + '').replace(/[^0-9+\-Ee.]/g, '');
    b = isFinite(+b) ? +b : 0;
    c = isFinite(+c) ? Math.abs(c) : 0;
    e = 'undefined' === typeof e ? ',' : e;
    d = 'undefined' === typeof d ? '.' : d;
    var a = '',
      a = function (a, b) {
        var c = Math.pow(10, b);
        return '' + (Math.round(a * c) / c).toFixed(b);
      },
      a = (c ? a(b, c) : '' + Math.round(b)).split('.');
    3 < a[0].length && (a[0] = a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
    (a[1] || '').length < c &&
      ((a[1] = a[1] || ''), (a[1] += Array(c - a[1].length + 1).join('0')));
    return a.join(d);
  },
  cartPersonalization: function (difference, percentage) {
    var shippingCustomValue = window.mz_ShippingTargetPrice;

    var wrapper = $('.mz-v1-shipping-progress-bar-container');

    if (!wrapper.length) {
      $('.full-cart .totalizers').append(
        '<div class="mz-v1-shipping-progress-bar-container"> <div class="mz-v1-shipping-progress-bar"> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">0% Complete</span> </div> </div><p> </p><div class="tooltip bottom in"><div class="tooltip-inner"></div> </div> </div> </div>'
      );
    }

    wrapper = $('.mz-v1-shipping-progress-bar-container');

    wrapper
      .find('.tooltip.bottom.in .tooltip-inner')
      .html(
        'Faltam só <strong>R$ ' +
          mzCheckout.mz_number_format(difference, 2, ',', '.') +
          '</strong> para seu Frete Grátis!'
      );

    wrapper
      .find('.progress-bar')
      .css('width', percentage + '%')
      .attr('aria-valuenow', percentage);

    var tooltipNecessary = $(
      '<div class="tooltip-necessary"><span>Para obter frete grátis é necessário que o total calculado com desconto alcance o valor de <span class="mz-necessary-tooltip">R$ ' +
        shippingCustomValue +
        '.</span></span></div>'
    );

    tooltipNecessary.insertAfter('.tooltip.bottom.in .tooltip-inner');

    return wrapper;
  },
  shippingPersonalization: function (difference) {
    var wrapper = $('.mz-v1-shipping-alert-box');

    if (!wrapper.length) {
      wrapper = $('<div class="mz-v1-shipping-alert-box"> </div>').appendTo(
        '.shipping-data .accordion-inner'
      );
    }

    if (difference <= 0) {
      wrapper.html(
        ' <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Você ganhou <strong>Frete Grátis</strong>!!!'
      );
    } else {
      wrapper.html(
        ' <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Faltam só <strong>R$ ' +
          mzCheckout.mz_number_format(difference, 2, ',', '.') +
          '</strong> para seu Frete Grátis!'
      );
    }

    return wrapper;
  },
  wonFreeshipping: function () {
    var wrapper = $('.mz-v1-shipping-progress-bar-container');

    wrapper
      .find('.tooltip.bottom.in .tooltip-inner')
      .html('Você ganhou <strong>Frete Grátis</strong>!!!');

    wrapper
      .find('.progress-bar')
      .css('width', '100%')
      .attr('aria-valuenow', 100);

    return wrapper;
  },
  freeshippingBar: function () {
    try {
      if (
        !window.mz_ShippingTargetPrice ||
        !window.API ||
        !window.API.orderForm
      ) {
        return;
      }

      var targetPrice = window.mz_ShippingTargetPrice;
      var currentPrice = window.API.orderForm.totalizers[0].value / 100;
      var percentage = (currentPrice / targetPrice) * 100;
      var difference = targetPrice - currentPrice;
      var wrapper;

      if (!(window.location.hash.indexOf('cart') < 0)) {
        wrapper = mzCheckout.cartPersonalization(difference, percentage);
      }

      if (!(window.location.hash.indexOf('shipping') < 0)) {
        wrapper = mzCheckout.shippingPersonalization(difference);
      }

      if (difference <= 0) {
        wrapper = mzCheckout.wonFreeshipping();
      }

      if ($('.tooltip-necessary').length > 1) {
        $('.tooltip-necessary').last().remove();
      }
    } catch (e) {
      typeof console !== 'undefined' &&
        typeof console.error === 'function' &&
        console.error('Erro:', e);
    }
  }
};

$(window).on('load', function () {
  mzCheckout.init();
  mzCheckout.freeshippingBar();
});

$(window).on('hashchange', function () {
  mzCheckout.freeshippingBar();
});

$(window).on('orderFormUpdated.vtex', function () {
  mzCheckout.freeshippingBar();
});
