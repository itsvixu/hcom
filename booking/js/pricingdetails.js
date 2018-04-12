/*! generated/hcom.templates.core.analytics.universalanalytics.js*/
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.core.analytics.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.core == 'undefined') { hcom.templates.core = {}; }
if (typeof hcom.templates.core.analytics == 'undefined') { hcom.templates.core.analytics = {}; }


hcom.templates.core.analytics.universalanalytics = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  if (opt_data.params.enabled) {
    output += '<script>var universalAnalytics = {sendTransactions: function(transactions) {var transactionList, transaction, itemList, item, i, j; if (transactions instanceof Array) {transactionList = transactions;} else {transactionList = [ transactions ];}ga(\'require\', \'ec\'); for (i = 0; i < transactionList.length; i++) {transaction = transactionList[i]; ga(\'ec:setAction\', \'purchase\', {\'id\':           transaction.orderId, \'affiliation\':  this.replaceNull(transaction.affiliation), \'revenue\':      transaction.total, \'tax\':          this.replaceNull(transaction.tax), \'shipping\':     this.replaceNull(transaction.shipping), \'coupon\':       \'\', \'city\':         this.replaceNull(transaction.city), \'state\':        this.replaceNull(transaction.state), \'country\':      this.replaceNull(transaction.country)}); if (transaction.items !== undefined) {if (transaction.items instanceof Array) {itemList = transaction.items;} else {itemList = [ transaction.items ];}for (j = 0; j < itemList.length; j++) {item = itemList[j]; ga(\'ec:addProduct\', {\'id\':       item.sku, \'name\':     item.name, \'category\': this.replaceNull(item.category), \'brand\':    \'\', \'variant\':  \'\', \'price\':    item.price, \'quantity\': item.quantity});}}ga(\'send\', \'event\', \'Ecommerce\', \'Purchase\');}}, sendEvents: function(events) {var eventList, event, i; if (events instanceof Array) {eventList = events;} else {eventList = [events];}for (i = 0; i < eventList.length; i++) {event = eventList[i]; var params = [\'send\',\'event\', event.category, event.action]; if (event.label && event.value) {params = params.concat([event.label, event.value]);} else if (event.label && !event.value) {params.push(event.label);} else if (!event.label &&  event.value) {params = params.concat([\'\', event.value]);}if (event.nonInteraction) {params.push({ \'nonInteraction\': 1 });}ga.apply(this, params);}}, replaceNull: function (value) {return !value ? \'\' : value;}}; (function () {\n                    (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n                    })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n                ga(\'create\', \'' + soy.$$escapeJsString(opt_data.params.account) + '\', \'auto\', { \'userId\': \'' + soy.$$escapeJsString(opt_data.params.profileId) + '\' });' + ((opt_data.params._anonymizeIp == 'true') ? 'ga(\'set\', \'anonymizeIp\', true);' : '');
    var keyList16 = soy.$$getMapKeys(opt_data.params.page_view);
    var keyListLen16 = keyList16.length;
    for (var keyIndex16 = 0; keyIndex16 < keyListLen16; keyIndex16++) {
      var keyData16 = keyList16[keyIndex16];
      var view__soy13 = opt_data.params.page_view[keyData16];
      output += soy.$$filterNoAutoescape(view__soy13);
    }
    output += 'ga(\'send\', \'pageview\');' + ((opt_data.params.transactions) ? 'universalAnalytics.sendTransactions(' + soy.$$filterNoAutoescape(opt_data.params.transactions) + ');' : '') + ((opt_data.params.events) ? 'universalAnalytics.sendEvents(' + soy.$$filterNoAutoescape(opt_data.params.events) + ');' : '') + '})();<\/script>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.core.analytics.universalanalytics.soyTemplateName = 'hcom.templates.core.analytics.universalanalytics';
}

/*! generated/hcom.templates.modules.header.common.snippet.currencyselectorlist.js*/
// This file was automatically generated from pos-currencies.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.header.common.snippet.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }
if (typeof hcom.templates.modules.header == 'undefined') { hcom.templates.modules.header = {}; }
if (typeof hcom.templates.modules.header.common == 'undefined') { hcom.templates.modules.header.common = {}; }
if (typeof hcom.templates.modules.header.common.snippet == 'undefined') { hcom.templates.modules.header.common.snippet = {}; }


hcom.templates.modules.header.common.snippet.currencyselectorlist = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  if (opt_data.currencies.matched) {
    output += '<ul class="pos-currency-options">';
    var matchedList15 = opt_data.currencies.matched;
    var matchedListLen15 = matchedList15.length;
    for (var matchedIndex15 = 0; matchedIndex15 < matchedListLen15; matchedIndex15++) {
      var matchedData15 = matchedList15[matchedIndex15];
      output += '<li><a data-currency="' + soy.$$escapeHtmlAttribute(matchedData15.code) + '" href="/change_currency.html?currency=' + soy.$$escapeUri(matchedData15.code) + '" ><em>' + soy.$$escapeHtml(matchedData15.code) + ' </em>' + soy.$$escapeHtml(matchedData15.currency) + '</a></li>';
    }
    output += '</ul>';
  }
  if (opt_data.currencies.codes) {
    output += '<ul>';
    var currencyList30 = opt_data.currencies.codes;
    var currencyListLen30 = currencyList30.length;
    for (var currencyIndex30 = 0; currencyIndex30 < currencyListLen30; currencyIndex30++) {
      var currencyData30 = currencyList30[currencyIndex30];
      output += '<li><a data-currency="' + soy.$$escapeHtmlAttribute(currencyData30.code) + '" href="/change_currency.html?currency=' + soy.$$escapeUri(currencyData30.code) + '"><em>' + soy.$$escapeHtml(currencyData30.code) + ' </em>' + soy.$$escapeHtml(currencyData30.currency) + '</a></a></li>';
    }
    output += '</ul>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.header.common.snippet.currencyselectorlist.soyTemplateName = 'hcom.templates.modules.header.common.snippet.currencyselectorlist';
}

/*! generated/hcom.templates.modules.header.common.snippet.posselectorlist.js*/
// This file was automatically generated from pos-currencies.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.header.common.snippet.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }
if (typeof hcom.templates.modules.header == 'undefined') { hcom.templates.modules.header = {}; }
if (typeof hcom.templates.modules.header.common == 'undefined') { hcom.templates.modules.header.common = {}; }
if (typeof hcom.templates.modules.header.common.snippet == 'undefined') { hcom.templates.modules.header.common.snippet = {}; }


hcom.templates.modules.header.common.snippet.posselectorlist = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ul>';
  var posList15 = opt_data.points_of_sale.pos;
  var posListLen15 = posList15.length;
  for (var posIndex15 = 0; posIndex15 < posListLen15; posIndex15++) {
    var posData15 = posList15[posIndex15];
    output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(posData15.href)) + '" rel="nofollow" lang="' + soy.$$escapeHtmlAttribute(posData15.lang) + '" hreflang="' + soy.$$escapeHtmlAttribute(posData15.lang) + '"><span class="sprite sprite-flags sprite-flags-' + soy.$$escapeHtmlAttribute(posData15.flag_iso ? posData15.flag_iso : 'blank') + '"></span>\u200F' + soy.$$escapeHtml(posData15.label) + '</a></li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.header.common.snippet.posselectorlist.soyTemplateName = 'hcom.templates.modules.header.common.snippet.posselectorlist';
}

/*! generated/hcom.templates.modules.ddnewsletter.js*/
// This file was automatically generated from ddnewsletter.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.ddnewsletter = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="module-newsletter"><h2 class="widget-overlay-hd bg-secret-price">' + soy.$$escapeHtml(dio.i18n('newsletter.form.title')) + '</h2><div class="widget-overlay-bd"><div class="newsletter-modal-container"><div class="decoration-cont"><img class="decoration" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(opt_data.decorationImgPath)) + '" alt="" /></div><div class="container newsletter-content"><form class="newsletter-form" method="post" novalidate><fieldset><p class="intro">' + soy.$$escapeHtml(dio.i18n('newsletter.form.description')) + '</p><div class="form-field"><label class="email-label" for="dd-newsletter-email" aria-hidden="false">' + soy.$$escapeHtml(dio.i18n('sica.form.label.email_address')) + '</label><input id="dd-newsletter-email" name="email" type="email" value="" maxlength="50" aria-required="true" required /></div><p class="disclaimer">' + soy.$$escapeHtml(dio.i18n('newsletter.form.consent')) + '</p>';
  var tncStartTag__soy14 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.tncLink)) + '" target="_blank">';
  tncStartTag__soy14 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(tncStartTag__soy14);
  var ppStartTag__soy18 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.ppLink)) + '" target="_blank">';
  ppStartTag__soy18 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(ppStartTag__soy18);
  output += '<p class="legal-link-section">' + soy.$$filterNoAutoescape(dio.i18n('newsletter.form.legal_section', tncStartTag__soy14, '</a>', ppStartTag__soy18, '</a>')) + '</p><button type="submit" class="cta cta-strong">' + soy.$$escapeHtml(dio.i18n('newsletter.form.button.label')) + '</button><a class="newsletter-modal-close cta cta-link">' + soy.$$escapeHtml(dio.i18n('newsletter.form.cancel.label')) + '</a></fieldset></form>';
  if (opt_data.nativeAppUrl || opt_data.showLogin == true) {
    var downloadStartTag__soy32 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.nativeAppUrl)) + '" class="native-app-download-link" target="_blank">';
    downloadStartTag__soy32 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(downloadStartTag__soy32);
    var signInStartTag__soy36 = '<a href="#" class="signin-prompt sica-sign-in">';
    signInStartTag__soy36 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(signInStartTag__soy36);
    output += '<div class="alternatives">' + ((opt_data.nativeAppUrl && opt_data.showLogin == true) ? '<p>' + soy.$$filterNoAutoescape(dio.i18n('newsletter.form.download_and_signin', signInStartTag__soy36, '</a>', '<br/>', '<br/>', downloadStartTag__soy32, '</a>')) + '</p>' : (opt_data.nativeAppUrl) ? '<p>' + soy.$$filterNoAutoescape(dio.i18n('newsletter.form.download', downloadStartTag__soy32, '</a>')) + '</p>' : '<p>' + soy.$$filterNoAutoescape(dio.i18n('newsletter.form.signin', signInStartTag__soy36, '</a>')) + '</p>') + '</div>';
  }
  output += '</div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.ddnewsletter.soyTemplateName = 'hcom.templates.modules.ddnewsletter';
}

/*! generated/hcom.templates.modules.ddnewsletterconfirmation.js*/
// This file was automatically generated from ddnewsletter.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.ddnewsletterconfirmation = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="module-newsletter-confirmation"><h2 class="widget-overlay-hd bg-secret-price">' + soy.$$escapeHtml(dio.i18n('newsletter.confirmation.title')) + '</h2><div class="newsletter-confirmation-modal-container widget-overlay-bd"><p>' + soy.$$filterNoAutoescape(dio.i18n('newsletter.confirmation.description', '<strong>', '</strong>')) + '</p><div class="illustration-container"><img class="conf-bg wide-bg" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(opt_data.wideImage)) + '" /><img class="conf-bg narrow-bg" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(opt_data.narrowImage)) + '" /><div class="price-notifier-container"><div class="price-notifier"><span class="highlight-text bg-secret-price">' + soy.$$escapeHtml(dio.i18n('newsletter.confirmation.price_notifier')) + '</span></div></div></div></div></div>');
};
if (goog.DEBUG) {
  hcom.templates.modules.ddnewsletterconfirmation.soyTemplateName = 'hcom.templates.modules.ddnewsletterconfirmation';
}

/*! generated/hcom.templates.modules.ddnewsletter.desktopvariants.v1.js*/
// This file was automatically generated from client_variant1.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.ddnewsletter.desktopvariants.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }
if (typeof hcom.templates.modules.ddnewsletter == 'undefined') { hcom.templates.modules.ddnewsletter = {}; }
if (typeof hcom.templates.modules.ddnewsletter.desktopvariants == 'undefined') { hcom.templates.modules.ddnewsletter.desktopvariants = {}; }


hcom.templates.modules.ddnewsletter.desktopvariants.v1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="module-newsletter"><h2 class="widget-overlay-hd bg-secret-price">' + soy.$$escapeHtml(dio.i18n('newsletter.form.title')) + '</h2><div class="widget-overlay-bd">' + soy.$$escapeHtml(hcom.templates.modules.ddnewsletter.desktopvariants.newsletter_body({showLogin: opt_data.showLogin, tncLink: opt_data.tncLink, ppLink: opt_data.ppLink, decorationImgPath: opt_data.decorationImgPath, useAlternativeButtonPlacement: true}, null, opt_ijData)) + '</div></div>');
};
if (goog.DEBUG) {
  hcom.templates.modules.ddnewsletter.desktopvariants.v1.soyTemplateName = 'hcom.templates.modules.ddnewsletter.desktopvariants.v1';
}

/*! generated/hcom.templates.modules.ddnewsletter.desktopvariants.newsletter_body.js*/
// This file was automatically generated from newsletter-desktopvariants-fragments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.ddnewsletter.desktopvariants.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }
if (typeof hcom.templates.modules.ddnewsletter == 'undefined') { hcom.templates.modules.ddnewsletter = {}; }
if (typeof hcom.templates.modules.ddnewsletter.desktopvariants == 'undefined') { hcom.templates.modules.ddnewsletter.desktopvariants = {}; }


hcom.templates.modules.ddnewsletter.desktopvariants.newsletter_body = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var introText__soy3 = '' + ((opt_data.useAlternativeCopy) ? '' + dio.i18n('newsletter.ng.form.description.v2') : '' + dio.i18n('newsletter.form.description'));
  introText__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(introText__soy3);
  output += '<div class="newsletter-modal-container"><div class="decoration-cont"><img class="decoration" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(opt_data.decorationImgPath)) + '" alt="" /></div><div class="container newsletter-content">' + ((opt_data.useContentTitle) ? '<h2 class="dd-newsletter-title c-secret-price-before">' + soy.$$escapeHtml(dio.i18n('newsletter.ng.form.title')) + '</h2>' : '') + '<form class="newsletter-form" method="post" novalidate><fieldset><p class="intro">' + soy.$$escapeHtml(introText__soy3) + '</p><div class="form-field"><label class="email-label" for="dd-newsletter-email" aria-hidden="false">' + soy.$$escapeHtml(dio.i18n('sica.form.label.email_address')) + '</label>';
  var inputAttrs__soy22 = 'id="dd-newsletter-email" name="email" type="email" value="" maxlength="50" aria-required="true" required' + ((opt_data.usePlaceholder) ? ' placeholder="' + soy.$$escapeHtmlAttribute(dio.i18n('newsletter.form.email.placeholder')) + '"' : '');
  inputAttrs__soy22 = soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(inputAttrs__soy22);
  output += '<input ' + soy.$$filterHtmlAttributes(inputAttrs__soy22) + ' /></div>' + ((opt_data.useAlternativeButtonPlacement) ? soy.$$escapeHtml(hcom.templates.modules.ddnewsletter.desktopvariants.submit_button(null, null, opt_ijData)) : '');
  if (opt_data.useAlternativeCopy) {
    output += '<p class="disclaimer">' + soy.$$escapeHtml(dio.i18n('newsletter.ng.form.consent', opt_data.brandName)) + '</p>';
  } else {
    output += '<p class="disclaimer">' + soy.$$escapeHtml(dio.i18n('newsletter.form.consent')) + '</p>';
    var tncStartTag__soy44 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.tncLink)) + '" target="_blank">';
    tncStartTag__soy44 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(tncStartTag__soy44);
    var ppStartTag__soy48 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.ppLink)) + '" target="_blank">';
    ppStartTag__soy48 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(ppStartTag__soy48);
    output += '<p class="legal-link-section">' + soy.$$filterNoAutoescape(dio.i18n('newsletter.form.legal_section', tncStartTag__soy44, '</a>', ppStartTag__soy48, '</a>')) + '</p>';
  }
  output += ((! opt_data.useAlternativeButtonPlacement) ? soy.$$escapeHtml(hcom.templates.modules.ddnewsletter.desktopvariants.submit_button(null, null, opt_ijData)) : '') + ((! opt_data.omitCloseCta) ? '<a class="newsletter-modal-close cta cta-link">' + soy.$$escapeHtml(dio.i18n('newsletter.form.cancel.label')) + '</a>' : '') + '</fieldset></form>';
  if (opt_data.showLogin == true) {
    var signInStartTag__soy67 = '<a href="#" class="signin-prompt sica-sign-in">';
    signInStartTag__soy67 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(signInStartTag__soy67);
    output += '<div class="alternatives"><p>' + soy.$$filterNoAutoescape(dio.i18n('newsletter.form.signin', signInStartTag__soy67, '</a>')) + '</p></div>';
  }
  output += '</div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.ddnewsletter.desktopvariants.newsletter_body.soyTemplateName = 'hcom.templates.modules.ddnewsletter.desktopvariants.newsletter_body';
}

/*! generated/hcom.templates.modules.ddnewsletter.desktopvariants.submit_button.js*/
// This file was automatically generated from newsletter-desktopvariants-fragments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.ddnewsletter.desktopvariants.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }
if (typeof hcom.templates.modules.ddnewsletter == 'undefined') { hcom.templates.modules.ddnewsletter = {}; }
if (typeof hcom.templates.modules.ddnewsletter.desktopvariants == 'undefined') { hcom.templates.modules.ddnewsletter.desktopvariants = {}; }


hcom.templates.modules.ddnewsletter.desktopvariants.submit_button = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<button type="submit" class="cta cta-strong">' + soy.$$escapeHtml(dio.i18n('newsletter.form.button.label')) + '</button>');
};
if (goog.DEBUG) {
  hcom.templates.modules.ddnewsletter.desktopvariants.submit_button.soyTemplateName = 'hcom.templates.modules.ddnewsletter.desktopvariants.submit_button';
}

/*! generated/hcom.templates.modules.standardnewsletter.js*/
// This file was automatically generated from standardnewsletter.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.standardnewsletter = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="module-newsletter"><h2 class="widget-overlay-hd">' + soy.$$escapeHtml(dio.i18n('newsletter.generic.common.title')) + '</h2><div class="widget-overlay-bd"><div class="container clearfix"><form class="newsletter-form" method="post" novalidate><fieldset><p>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.form.intro')) + '</p><div class="form-field"><label class="email-label" for="standard-newsletter-email" aria-hidden="false">' + soy.$$escapeHtml(dio.i18n('sica.form.label.email_address')) + '</label><input id="standard-newsletter-email" name="email" type="email" value="" maxlength="50" aria-required="true" required /></div>';
  var tncStartTag__soy10 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.tncLink)) + '" target="_blank">';
  tncStartTag__soy10 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(tncStartTag__soy10);
  var ppStartTag__soy14 = '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.ppLink)) + '" target="_blank">';
  ppStartTag__soy14 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(ppStartTag__soy14);
  output += '<p class="disclaimer">' + soy.$$filterNoAutoescape(dio.i18n('newsletter.generic.form.legal', tncStartTag__soy10, '</a>', ppStartTag__soy14, '</a>')) + '</p><button type="submit" class="cta cta-strong unlock-button">' + soy.$$escapeHtml(dio.i18n('newsletter.generic.form.unlock_button')) + '</button></fieldset></form><div class="benefits"><p>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.form.benefits.heading')) + '</p><ul><li>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.form.benefits.access_to_secret_prices')) + '</li><li>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.form.benefits.deals_and_offers')) + '</li><li>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.form.benefits.coupons')) + '</li></ul></div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.standardnewsletter.soyTemplateName = 'hcom.templates.modules.standardnewsletter';
}

/*! generated/hcom.templates.modules.standardnewsletterconfirmation.js*/
// This file was automatically generated from standardnewsletter-confirmation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.standardnewsletterconfirmation = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="module-newsletter-confirmation"><h2 class="widget-overlay-hd">' + soy.$$escapeHtml(dio.i18n('newsletter.generic.common.title')) + '</h2><div class="newsletter-confirmation-modal-container widget-overlay-bd"><div class="highlight msg-assurance msg-assurance msg-emphasised msg-with-large-icon msg-icon-confirm"><p class="headline">' + soy.$$escapeHtml(dio.i18n('newsletter.generic.confirmation.headline')) + '</p><p>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.confirmation.description.unlocked')) + '</p><p>' + soy.$$escapeHtml(dio.i18n('newsletter.generic.confirmation.description.look_out')) + '</p></div><p class="outro">' + soy.$$escapeHtml(dio.i18n('newsletter.generic.confirmation.outro')) + '</p></div></div>');
};
if (goog.DEBUG) {
  hcom.templates.modules.standardnewsletterconfirmation.soyTemplateName = 'hcom.templates.modules.standardnewsletterconfirmation';
}

/*! generated/hcom.templates.core.common.hcomrewards.livetext.js*/
// This file was automatically generated from hcomrewards.livetext.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.core.common.hcomrewards.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.core == 'undefined') { hcom.templates.core = {}; }
if (typeof hcom.templates.core.common == 'undefined') { hcom.templates.core.common = {}; }
if (typeof hcom.templates.core.common.hcomrewards == 'undefined') { hcom.templates.core.common.hcomrewards = {}; }


hcom.templates.core.common.hcomrewards.liveText = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span class="hr-live-text">' + soy.$$escapeHtml(($$temp = opt_data.customText) == null ? dio.i18n('brand.hotelscomrewards.name') : $$temp) + '</span>');
};
if (goog.DEBUG) {
  hcom.templates.core.common.hcomrewards.liveText.soyTemplateName = 'hcom.templates.core.common.hcomrewards.liveText';
}

/*! generated/hcom.templates.modules.wrloyaltycard.js*/
// This file was automatically generated from welcome-rewards.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.wrloyaltycard = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  var output = '';
  var premiumLevelClass__soy3 = '' + ((opt_data.premiumLevel) ? (opt_data.premiumLevel == 'gold') ? ' wr-gold' : (opt_data.premiumLevel == 'silver') ? ' wr-silver' : '' : '');
  premiumLevelClass__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(premiumLevelClass__soy3);
  output += '<div class="wr-loyalty-card' + soy.$$escapeHtmlAttribute(opt_data.additionalClasses ? ' ' + opt_data.additionalClasses : '') + soy.$$escapeHtmlAttribute(premiumLevelClass__soy3) + soy.$$escapeHtmlAttribute(opt_data.isHorizontal ? ' wr-horizontal' : '') + soy.$$escapeHtmlAttribute(opt_data.withAlternatedColours ? ' wr-alt-color' : '') + soy.$$escapeHtmlAttribute(opt_data.isPlain ? ' wr-plain' : '') + soy.$$escapeHtmlAttribute(opt_data.imageLogo ? ' image-logo' : '') + soy.$$escapeHtmlAttribute(opt_data.isSmall ? ' small-card' : '') + '">';
  if (opt_data.withHeader) {
    output += '<div class="wr-header">';
    if (opt_data.imageLogo == true) {
      var premiumVariant__soy25 = opt_data.premiumLevel ? '-' + opt_data.premiumLevel : '';
      output += soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.logo({variant: 'white' + premiumVariant__soy25, moon: 'no-moon', size: ($$temp = opt_data.headerLogoSize) == null ? 'medium' : $$temp, locale: opt_data.locale ? opt_data.locale : opt_ijData.request.locale}, null, opt_ijData));
    } else {
      output += soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.liveText(null, null, opt_ijData)) + ((opt_data.showWRDescription) ? '<span class="wr-description">' + soy.$$escapeHtml(dio.i18n('wrpremium.text.our_loyalty_program')) + '</span>' : '');
    }
    output += '</div>';
  }
  output += ((opt_data.pointCard) ? soy.$$filterNoAutoescape(opt_data.pointCard) : '') + ((opt_data.loyaltyMessage) ? soy.$$filterNoAutoescape(opt_data.loyaltyMessage) : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.wrloyaltycard.soyTemplateName = 'hcom.templates.modules.wrloyaltycard';
}

/*! generated/hcom.templates.core.common.hcomrewards.logo.js*/
// This file was automatically generated from hcomrewards.logo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.core.common.hcomrewards.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.core == 'undefined') { hcom.templates.core = {}; }
if (typeof hcom.templates.core.common == 'undefined') { hcom.templates.core.common = {}; }
if (typeof hcom.templates.core.common.hcomrewards == 'undefined') { hcom.templates.core.common.hcomrewards = {}; }


hcom.templates.core.common.hcomrewards.logo = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  var requestLocale__soy3 = opt_data.locale ? opt_data.locale : opt_ijData.request.locale;
  var logoVariant__soy4 = opt_data.variant ? opt_data.variant : 'purple';
  var withMoon__soy5 = opt_data.moon ? opt_data.moon : 'moon';
  var logoSize__soy6 = opt_data.size ? opt_data.size : 'medium';
  var wrapped__soy7 = opt_data.isWrapped || false;
  var sizeMap__soy8 = {'moon': {small: '24', medium: '32', large: '48'}, 'no-moon': {small: '12', medium: '16', large: '24'}};
  var sizeMapWrapped__soy9 = {'no-moon': {small: '24', medium: '32', large: '48'}};
  var imgPath__soy10 = '/images/brands/hcomrewards/logos/rewards-logo-' + logoVariant__soy4 + '-' + withMoon__soy5 + '-' + (wrapped__soy7 ? 'wrapped-' : '') + requestLocale__soy3 + '.png';
  var height__soy11 = wrapped__soy7 ? sizeMapWrapped__soy9[withMoon__soy5][logoSize__soy6] : sizeMap__soy8[withMoon__soy5][logoSize__soy6];
  output += '<img alt="' + soy.$$escapeHtmlAttribute(dio.i18n('brand.hotelscomrewards.name')) + '" class="hr-logo" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(dio.image(imgPath__soy10))) + '" height="' + soy.$$escapeHtmlAttribute(height__soy11) + '" />';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.core.common.hcomrewards.logo.soyTemplateName = 'hcom.templates.core.common.hcomrewards.logo';
}

/*! generated/hcom.templates.modules.wrloyaltymessage.js*/
// This file was automatically generated from welcome-rewards.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.wrloyaltymessage = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  var loyaltyMessageClasses__soy3 = 'wr-loyalty-message' + ((opt_data.additionalClasses) ? ' ' + ('' + opt_data.additionalClasses) : '') + ((opt_data.isRedeemMessage) ? ' wr-redeem-message' : '') + ((opt_data.withDivider) ? ' wr-with-divider' : '');
  loyaltyMessageClasses__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(loyaltyMessageClasses__soy3);
  output += '<div class="' + soy.$$escapeHtmlAttribute(loyaltyMessageClasses__soy3) + '"><p class="wr-main-message"><em>' + soy.$$filterNoAutoescape(opt_data.mainMessage) + '</em></p>' + ((opt_data.additionalMessage) ? '<p class="wr-additional-message">' + soy.$$filterNoAutoescape(opt_data.additionalMessage) + '</p>' : '') + ((opt_data.subMessage) ? '<p class="wr-sub-message">' + soy.$$filterNoAutoescape(opt_data.subMessage) + '</p>' : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.wrloyaltymessage.soyTemplateName = 'hcom.templates.modules.wrloyaltymessage';
}

/*! generated/hcom.templates.modules.wrpointcard.js*/
// This file was automatically generated from welcome-rewards.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.modules.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.modules == 'undefined') { hcom.templates.modules = {}; }


hcom.templates.modules.wrpointcard = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="wr-point-card' + soy.$$escapeHtmlAttribute(opt_data.additionalClasses ? ' ' + opt_data.additionalClasses : '') + '"><ol>';
  for (var i6 = 1; i6 < 11; i6++) {
    output += (i6 <= opt_data.earnedCreditsCount) ? '<li class="wr-earned">' + soy.$$escapeHtml(i6) + ' - earned night</li>' : (i6 > opt_data.earnedCreditsCount && i6 <= opt_data.earnedCreditsCount + opt_data.pendingCreditsCount) ? '<li class="wr-pending">' + soy.$$escapeHtml(i6) + ' - pending night</li>' : '<li class="wr-placeholder">' + soy.$$escapeHtml(i6) + '</li>';
  }
  output += '</ol><p class="wr-free-nights ' + soy.$$escapeHtmlAttribute(opt_data.showText ? 'wr-with-text' : '') + '"><span class="wr-equals">= </span>' + ((opt_data.showText) ? soy.$$escapeHtml(dio.i18n('homepage_social.welcome_rewards.free')) : '') + '</p></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.modules.wrpointcard.soyTemplateName = 'hcom.templates.modules.wrpointcard';
}

/*! generated/hcom.templates.pages.cop.common.formelements.select.js*/
// This file was automatically generated from select.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.formElements.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.formElements == 'undefined') { hcom.templates.pages.cop.common.formElements = {}; }


hcom.templates.pages.cop.common.formElements.select = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.fieldContainer(soy.$$augmentMap(opt_data, {inputType: 'select', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<label for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="fw-bold mb-tiny' + ((opt_data.isLabelOffscreen) ? ' offscreen' : '') + '">' + soy.$$escapeHtml(opt_data.label) + ((opt_data.explanation) ? '<br><i class="c-note fw-normal">' + soy.$$escapeHtml(opt_data.explanation) + '</i>' : '') + '</label><select id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" name="' + soy.$$escapeHtmlAttribute(opt_data.fieldProperties.name) + '"' + ((opt_data.classes) ? ' class="' + soy.$$escapeHtmlAttribute(opt_data.classes) + '"' : '') + ((opt_data.errorTitle) ? ' data-error-title="' + soy.$$escapeHtmlAttribute(opt_data.errorTitle) + '"' : '') + '>' + ((opt_data.fieldProperties.options) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.options({optionList: opt_data.fieldProperties.options}, null, opt_ijData)) : '') + '</select>')}), null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.select.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.select';
}

/*! generated/hcom.templates.pages.cop.common.formelements.fieldcontainer.js*/
// This file was automatically generated from field-container.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.formElements.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.formElements == 'undefined') { hcom.templates.pages.cop.common.formElements = {}; }


hcom.templates.pages.cop.common.formElements.fieldContainer = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var stateClass__soy3 = '';
  if (! opt_data.skipValidationMarkup) {
    var isTextual__soy6 = opt_data.inputType == 'text' || opt_data.inputType == 'textarea';
    var hasErrorMessage__soy7 = opt_data.fieldProperties.errorMessage != null;
    var hasValue__soy8 = opt_data.fieldProperties.value != null && opt_data.fieldProperties.value != '';
    var isChecked__soy9 = opt_data.inputType == 'checkbox' && opt_data.fieldProperties.checked;
    var notEmptyTextual__soy10 = isTextual__soy6 && hasValue__soy8;
    var selectedOption__soy11 = '';
    if (opt_data.inputType == 'select' && opt_data.fieldProperties.options && ! hasErrorMessage__soy7) {
      var optionList17 = opt_data.fieldProperties.options;
      var optionListLen17 = optionList17.length;
      for (var optionIndex17 = 0; optionIndex17 < optionListLen17; optionIndex17++) {
        var optionData17 = optionList17[optionIndex17];
        selectedOption__soy11 += (optionData17.selected) ? '' + optionData17.value : '';
      }
    }
    selectedOption__soy11 = soydata.$$markUnsanitizedTextForInternalBlocks(selectedOption__soy11);
    var hasSelected__soy19 = selectedOption__soy11 != null && selectedOption__soy11 != '';
    stateClass__soy3 += (hasErrorMessage__soy7) ? 'state-error' : (notEmptyTextual__soy10 || isChecked__soy9 || hasSelected__soy19) ? 'state-valid' : '';
  }
  stateClass__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(stateClass__soy3);
  var class__soy25 = 'field-container' + ((! opt_data.noDistance) ? ' mb-base' : '') + ((opt_data.verticalError) ? ' vertical-error' : '') + ((opt_data.containerClasses) ? ' ' + ('' + opt_data.containerClasses) : '') + ((stateClass__soy3) ? ' ' + ('' + stateClass__soy3) : '');
  class__soy25 = soydata.$$markUnsanitizedTextForInternalBlocks(class__soy25);
  output += '<div class="' + soy.$$escapeHtmlAttribute(class__soy25) + '" data-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' + ((opt_data.containerId) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.containerId) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.content) + ((! opt_data.skipValidationMarkup) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.stateIndicator({message: opt_data.fieldProperties.errorMessage, indicatedId: opt_data.id}, null, opt_ijData)) : '') + ((opt_data.kickboxStateIndicator) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.kickboxStateIndicator({indicatedId: opt_data.id}, null, opt_ijData)) : '') + ((opt_data.helperText) ? '<span class="helper-text" data-for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$filterNoAutoescape(opt_data.helperText) + '</span>' : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.fieldContainer.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.fieldContainer';
}

/*! generated/hcom.templates.pages.cop.common.formelements.textinput.js*/
// This file was automatically generated from text-input.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.formElements.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.formElements == 'undefined') { hcom.templates.pages.cop.common.formElements = {}; }


hcom.templates.pages.cop.common.formElements.textInput = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.fieldContainer(soy.$$augmentMap(opt_data, {inputType: 'text', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<label for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="fw-bold mb-tiny' + ((opt_data.isLabelOffscreen) ? ' offscreen' : '') + '">' + soy.$$filterNoAutoescape(opt_data.label) + ((opt_data.explanation) ? '<br><i class="c-note fw-normal' + ((opt_data.explanationClasses) ? ' ' + soy.$$escapeHtmlAttribute(opt_data.explanationClasses) : '') + '">' + soy.$$escapeHtml(opt_data.explanation) + '</i>' : '') + '</label>' + ((opt_data.icon) ? '<span class="icon bg-light ' + soy.$$escapeHtmlAttribute(opt_data.icon) + '"></span>' : '') + '<input type="' + soy.$$escapeHtmlAttribute(($$temp = opt_data.type) == null ? 'text' : $$temp) + '" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" name="' + soy.$$escapeHtmlAttribute(opt_data.fieldProperties.name) + '" value="' + soy.$$escapeHtmlAttribute(($$temp = opt_data.fieldProperties.value) == null ? '' : $$temp) + '" autocomplete="off"' + ((opt_data.classes) ? ' class="' + soy.$$escapeHtmlAttribute(opt_data.classes) + '"' : '') + ((opt_data.errorTitle) ? ' data-error-title="' + soy.$$escapeHtmlAttribute(opt_data.errorTitle) + '"' : '') + ((opt_data.maxlength) ? ' maxlength="' + soy.$$escapeHtmlAttribute(opt_data.maxlength) + '"' : '') + ((opt_data.placeholder) ? ' placeholder="' + soy.$$escapeHtmlAttribute(opt_data.placeholder) + '"' : '') + '/>')}), null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.textInput.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.textInput';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookbuttonarea.bookbuttonsummary.js*/
// This file was automatically generated from book-button-summary.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookButtonArea.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookButtonArea == 'undefined') { hcom.templates.pages.cop.bookingForm.bookButtonArea = {}; }


hcom.templates.pages.cop.bookingForm.bookButtonArea.bookButtonSummary = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var containerClasses__soy3 = 'pa-base fs-base bdra-small' + ((opt_data.bookingSummary.theme == 'dark') ? ' dark-theme' : '');
  containerClasses__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(containerClasses__soy3);
  var taxesMessageClasses__soy8 = 'fs-small ml-tiny' + ((opt_data.bookingSummary.theme == 'light') ? ' c-note' : '');
  taxesMessageClasses__soy8 = soydata.$$markUnsanitizedTextForInternalBlocks(taxesMessageClasses__soy8);
  output += '<div id="book-button-summary" class="' + soy.$$escapeHtmlAttribute(containerClasses__soy3) + '"><div class="pb-small bottom-separator"><p class="fs-big fw-bold">' + soy.$$filterNoAutoescape(opt_data.bookingSummary.hotelSummary.hotelName) + '</p><p>' + soy.$$escapeHtml(opt_data.bookingSummary.hotelSummary.city) + ((opt_data.bookingSummary.hotelSummary.state) ? ', ' + soy.$$escapeHtml(opt_data.bookingSummary.hotelSummary.state) : '') + ', ' + soy.$$escapeHtml(opt_data.bookingSummary.hotelSummary.country) + ((opt_data.bookingSummary.numberOfRooms > 1) ? ', ' + soy.$$escapeHtml(dio.i18n('booking.bookButtonArea.bookButtonSummary.numberOfRooms', opt_data.bookingSummary.numberOfRooms)) : '') + ', ' + soy.$$escapeHtml(opt_data.bookingSummary.hotelSummary.roomType) + '</p></div><div class="pv-small bottom-separator"><p>' + soy.$$escapeHtml(opt_data.bookingSummary.travelDates.checkInDate) + '</p><p class="mt-tiny">' + soy.$$escapeHtml(opt_data.bookingSummary.travelDates.checkOutDate) + '</p><p class="fw-bold mt-base">' + soy.$$filterNoAutoescape(dio.i18n('bookingform.pricepanel.length.of.stay', opt_data.bookingSummary.travelDates.numberOfNights)) + '</p></div><div class="pv-small"><p class="fs-med">' + soy.$$escapeHtml(opt_data.bookingSummary.totalPriceSummary.totalMessage) + '</p><p class="mt-tiny"><span class="price fs-big fw-bold">' + soy.$$escapeHtml(opt_data.bookingSummary.totalPriceSummary.totalPrice) + '</span>' + ((opt_data.bookingSummary.totalPriceSummary.includingTaxesMessage) ? '<span class="' + soy.$$escapeHtmlAttribute(taxesMessageClasses__soy8) + '">' + soy.$$escapeHtml(opt_data.bookingSummary.totalPriceSummary.includingTaxesMessage) + '</span>' : '') + '</p></div>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({content: dio.i18n('booking.summary.info'), type: 'assurance', isEmphasised: true}, null, opt_ijData)) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookButtonArea.bookButtonSummary.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookButtonArea.bookButtonSummary';
}

/*! generated/hcom.templates.pages.cop.common.messages.generalmessage.js*/
// This file was automatically generated from general-message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.messages.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.messages == 'undefined') { hcom.templates.pages.cop.common.messages = {}; }


hcom.templates.pages.cop.common.messages.generalMessage = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '';
  var idAttr__soy3 = '' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '');
  idAttr__soy3 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(idAttr__soy3);
  var typeClasses__soy9 = '';
  switch ((goog.isObject($$temp = opt_data.type)) ? $$temp.toString() : $$temp) {
    case 'neutral':
      typeClasses__soy9 += ' bdc-neutral bg-neutral c-neutral';
      break;
    case 'info':
      typeClasses__soy9 += ' bdc-default bg-light c-text';
      break;
    case 'notification':
      typeClasses__soy9 += ' bdc-darkish bg-darkish c-white';
      break;
    case 'assurance':
      typeClasses__soy9 += ' bdc-assurance bg-assurance c-assurance';
      break;
    case 'warning':
      typeClasses__soy9 += ' bdc-warning bg-warning c-text';
      break;
    case 'error':
      typeClasses__soy9 += ' bdc-error bg-error c-error';
      break;
  }
  typeClasses__soy9 = soydata.$$markUnsanitizedTextForInternalBlocks(typeClasses__soy9);
  var emphasisClass__soy23 = '' + ((opt_data.isEmphasised) ? ' bd-solid bdwa-tiny' : '');
  emphasisClass__soy23 = soydata.$$markUnsanitizedTextForInternalBlocks(emphasisClass__soy23);
  var fullWidthClass__soy27 = '' + ((opt_data.isFullWideOnXS) ? ' bdwh-none--xs bd-rad-none--xs' : '');
  fullWidthClass__soy27 = soydata.$$markUnsanitizedTextForInternalBlocks(fullWidthClass__soy27);
  var paddingClasses__soy31 = ' ph-base';
  if (opt_data.iconSize != null) {
    switch ((goog.isObject($$temp = opt_data.iconSize)) ? $$temp.toString() : $$temp) {
      case 'small':
        paddingClasses__soy31 += ' pv-small';
        break;
      case 'medium':
        paddingClasses__soy31 += ' pv-base';
        break;
      case 'large':
        paddingClasses__soy31 += ' pv-med';
        break;
    }
  } else {
    paddingClasses__soy31 += ' pv-small';
  }
  paddingClasses__soy31 = soydata.$$markUnsanitizedTextForInternalBlocks(paddingClasses__soy31);
  var iconClasses__soy44 = '';
  if (opt_data.iconSize != null && opt_data.iconName != null) {
    switch ((goog.isObject($$temp = opt_data.iconSize)) ? $$temp.toString() : $$temp) {
      case 'small':
        iconClasses__soy44 += ' with-small-icon';
        break;
      case 'medium':
        iconClasses__soy44 += ' with-medium-icon';
        break;
      case 'large':
        iconClasses__soy44 += ' with-large-icon';
        break;
    }
    iconClasses__soy44 += ' icon-' + ('' + opt_data.iconName);
  }
  iconClasses__soy44 = soydata.$$markUnsanitizedTextForInternalBlocks(iconClasses__soy44);
  output += '<div ' + soy.$$filterNoAutoescape(idAttr__soy3) + ' class="msg bdra-big ' + soy.$$escapeHtmlAttribute(typeClasses__soy9) + soy.$$escapeHtmlAttribute(fullWidthClass__soy27) + soy.$$escapeHtmlAttribute(emphasisClass__soy23) + soy.$$escapeHtmlAttribute(paddingClasses__soy31) + soy.$$escapeHtmlAttribute(opt_data.additionalClasses ? ' ' + opt_data.additionalClasses : '') + '">' + ((opt_data.iconSize != null && opt_data.iconName != null) ? '<div class="' + soy.$$escapeHtmlAttribute(iconClasses__soy44) + '">' + soy.$$filterNoAutoescape(opt_data.content) + '</div>' : soy.$$filterNoAutoescape(opt_data.content)) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.messages.generalMessage.soyTemplateName = 'hcom.templates.pages.cop.common.messages.generalMessage';
}

/*! generated/hcom.templates.pages.cop.common.formelements.ctabutton.js*/
// This file was automatically generated from cta-button.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.formElements.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.formElements == 'undefined') { hcom.templates.pages.cop.common.formElements = {}; }


hcom.templates.pages.cop.common.formElements.ctaButton = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag(opt_data, null, opt_ijData)) + soy.$$escapeHtml(opt_data.content) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.ctaButton.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.ctaButton';
}

/*! generated/hcom.templates.pages.cop.common.formelements.ctabuttonclosetag.js*/
// This file was automatically generated from cta-button.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.formElements.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.formElements == 'undefined') { hcom.templates.pages.cop.common.formElements = {}; }


hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('</button>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag';
}

/*! generated/hcom.templates.pages.cop.common.formelements.ctabuttonopentag.js*/
// This file was automatically generated from cta-button.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.formElements.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.formElements == 'undefined') { hcom.templates.pages.cop.common.formElements = {}; }


hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  var output = '<button type="' + soy.$$escapeHtmlAttribute(($$temp = opt_data.type) == null ? 'button' : $$temp) + '"';
  var ctaClasses__soy6 = 'cta' + ((opt_data.isDisabledByDefault) ? ' cta-disabled' : '') + ((opt_data.isStrong) ? ' cta-strong' : '') + ((opt_data.isTextual) ? ' cta-link' : '') + ((opt_data.isSecondary) ? ' cta-secondary' : '') + ((opt_data.additionalClasses) ? ' ' + ('' + opt_data.additionalClasses) : '');
  ctaClasses__soy6 = soydata.$$markUnsanitizedTextForInternalBlocks(ctaClasses__soy6);
  output += 'class="' + soy.$$escapeHtmlAttribute(ctaClasses__soy6) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" ' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtmlAttribute(opt_data.title) + '" ' : '') + ((opt_data.errorTitle) ? ' data-error-title="' + soy.$$escapeHtmlAttribute(opt_data.errorTitle) + '" ' : '') + ((opt_data.data) ? ' ' + soy.$$filterHtmlAttributes(opt_data.data) + ' ' : '') + 'tabindex="0">';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookbuttonarea.bookbuttontooltip.js*/
// This file was automatically generated from book-button-tooltip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookButtonArea.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookButtonArea == 'undefined') { hcom.templates.pages.cop.bookingForm.bookButtonArea = {}; }


hcom.templates.pages.cop.bookingForm.bookButtonArea.bookButtonTooltip = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="button-error-panel pa-small bdra-small bg-error bdwa-tiny bd-solid bdc-error fs-base"><strong class="fs-base c-error">' + soy.$$escapeHtml(dio.i18n('fastbooking.book_error_overlay.title')) + '</strong><ul class="mb-tiny">';
  var errorList13 = opt_data.errors;
  var errorListLen13 = errorList13.length;
  for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
    var errorData13 = errorList13[errorIndex13];
    output += '<li class="pt-tiny"><a href="#' + soy.$$escapeHtmlAttribute(errorData13.id) + '" class="c-error" data-error-position="' + soy.$$escapeHtmlAttribute(errorData13.y) + '">' + soy.$$escapeHtml(errorData13.description) + '</a></li>';
  }
  output += '</ul><span class="c-note">' + soy.$$escapeHtml(dio.i18n('fastbooking.submit.scrollUpForMoreInformation')) + '</span></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookButtonArea.bookButtonTooltip.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookButtonArea.bookButtonTooltip';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookingsummary.pricechangemessage.js*/
// This file was automatically generated from price-change-message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookingSummary.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookingSummary == 'undefined') { hcom.templates.pages.cop.bookingForm.bookingSummary = {}; }


hcom.templates.pages.cop.bookingForm.bookingSummary.priceChangeMessage = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.priceChangeMessage) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({id: 'price-change-message', type: 'info', isEmphasised: true, content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(opt_data.priceChangeMessage)), additionalClasses: 'price-change-info mb-base'}, null, opt_ijData)) : '');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookingSummary.priceChangeMessage.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookingSummary.priceChangeMessage';
}

/*! generated/hcom.templates.pages.cop.common.containers.rowdescriptionvalue.js*/
// This file was automatically generated from row-description-value.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.containers.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.containers == 'undefined') { hcom.templates.pages.cop.common.containers = {}; }


hcom.templates.pages.cop.common.containers.rowDescriptionValue = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '';
  var descId__soy3 = '' + ((opt_data.descriptionId) ? ' id="' + soy.$$escapeHtml(opt_data.descriptionId) + '"' : '');
  descId__soy3 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(descId__soy3);
  var valId__soy9 = '' + ((opt_data.valueId) ? ' id="' + soy.$$escapeHtml(opt_data.valueId) + '"' : '');
  valId__soy9 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(valId__soy9);
  var columnDescriptionClasses__soy15 = 'col-description va-t' + ((opt_data.verticalPaddingClasses) ? ' ' + ('' + opt_data.verticalPaddingClasses) : ' pv-small') + ((opt_data.descriptionClass) ? ' ' + ('' + opt_data.descriptionClass) : '');
  columnDescriptionClasses__soy15 = soydata.$$markUnsanitizedTextForInternalBlocks(columnDescriptionClasses__soy15);
  var columnValueClasses__soy27 = 'col-value va-t ta-r' + ((! opt_data.enableMultilineText) ? ' ws-nw' : '') + ((opt_data.verticalPaddingClasses) ? ' ' + ('' + opt_data.verticalPaddingClasses) : ' pv-small') + ((opt_data.valueClass) ? ' ' + ('' + opt_data.valueClass) : '');
  columnValueClasses__soy27 = soydata.$$markUnsanitizedTextForInternalBlocks(columnValueClasses__soy27);
  output += '<tr' + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '') + ((opt_data.rowClass) ? ' class="' + soy.$$escapeHtmlAttribute(opt_data.rowClass) + '"' : '') + ' ' + soy.$$filterNoAutoescape(($$temp = opt_data.dataAttributes) == null ? '' : $$temp) + '><td class="' + soy.$$escapeHtmlAttribute(columnDescriptionClasses__soy15) + '"' + soy.$$filterNoAutoescape(descId__soy3) + '>' + soy.$$escapeHtml(opt_data.description) + '</td><td class="' + soy.$$escapeHtmlAttribute(columnValueClasses__soy27) + '"' + soy.$$filterNoAutoescape(valId__soy9) + '>' + soy.$$escapeHtml(opt_data.value) + '</td></tr>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.containers.rowDescriptionValue.soyTemplateName = 'hcom.templates.pages.cop.common.containers.rowDescriptionValue';
}

/*! generated/hcom.templates.pages.cop.common.containers.rowmerged.js*/
// This file was automatically generated from row-merged.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.containers.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.containers == 'undefined') { hcom.templates.pages.cop.common.containers = {}; }


hcom.templates.pages.cop.common.containers.rowMerged = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '';
  var mergedColumnClasses__soy3 = 'col-merged va-t' + ((opt_data.verticalPaddingClasses) ? ' ' + ('' + opt_data.verticalPaddingClasses) : ' pv-small');
  mergedColumnClasses__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(mergedColumnClasses__soy3);
  output += '<tr' + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '') + ' class="merged ' + soy.$$escapeHtmlAttribute(($$temp = opt_data.rowClass) == null ? '' : $$temp) + '" ><td colspan="' + soy.$$escapeHtmlAttribute(($$temp = opt_data.numberOfMergedColumns) == null ? 2 : $$temp) + '" class="' + soy.$$escapeHtmlAttribute(mergedColumnClasses__soy3) + '">' + soy.$$filterNoAutoescape(opt_data.content) + '</td></tr>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.containers.rowMerged.soyTemplateName = 'hcom.templates.pages.cop.common.containers.rowMerged';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookingsummary.financialdetails.js*/
// This file was automatically generated from financial-details.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookingSummary.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookingSummary == 'undefined') { hcom.templates.pages.cop.bookingForm.bookingSummary = {}; }


hcom.templates.pages.cop.bookingForm.bookingSummary.financialDetails = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '<div id="financial-details-wrapper" class="ph-default-cont fs-base"><table id="financial-details">';
  if (opt_data.financialDetailsData.drr.isDisplayed) {
    var dealsClass__soy6 = '';
    switch ((goog.isObject($$temp = opt_data.financialDetailsData.drr.discountType)) ? $$temp.toString() : $$temp) {
      case 'PACKAGE_RATES':
        dealsClass__soy6 += 'c-assurance';
        break;
      case 'DEAL_OF_THE_DAY':
        dealsClass__soy6 += 'dod c-price';
        break;
      case 'SECRET_PRICE':
        dealsClass__soy6 += 'c-secret-price';
        break;
      default:
        dealsClass__soy6 += 'c-price';
    }
    dealsClass__soy6 = soydata.$$markUnsanitizedTextForInternalBlocks(dealsClass__soy6);
    var dealsWrapperClass__soy16 = '';
    switch ((goog.isObject($$temp = opt_data.financialDetailsData.drr.discountType)) ? $$temp.toString() : $$temp) {
      case 'PACKAGE_RATES':
        dealsWrapperClass__soy16 += 'with-small-icon icon-airport';
        break;
      case 'DEAL_OF_THE_DAY':
        break;
      default:
        dealsWrapperClass__soy16 += 'with-medium-icon icon-drr';
    }
    dealsWrapperClass__soy16 = soydata.$$markUnsanitizedTextForInternalBlocks(dealsWrapperClass__soy16);
    var dealsContent__soy23 = '';
    switch ((goog.isObject($$temp = opt_data.financialDetailsData.drr.discountType)) ? $$temp.toString() : $$temp) {
      case 'PACKAGE_RATES':
        dealsContent__soy23 += '' + dio.i18n('booking.package.rate.promo.prefix');
        break;
      case 'DEAL_OF_THE_DAY':
        dealsContent__soy23 += '' + dio.i18n('bookingform.pricepanel.includes.deal.of.the.day', '');
        break;
      case 'SECRET_PRICE':
        dealsContent__soy23 += '' + opt_data.financialDetailsData.drr.dealMessage;
        break;
      default:
        dealsContent__soy23 += '' + dio.i18n('fastbooking.promo.offer.prefix');
    }
    dealsContent__soy23 = soydata.$$markUnsanitizedTextForInternalBlocks(dealsContent__soy23);
    var promoMessageSeparator__soy33 = '';
    switch ((goog.isObject($$temp = opt_data.financialDetailsData.drr.discountType)) ? $$temp.toString() : $$temp) {
      case 'SECRET_PRICE':
        promoMessageSeparator__soy33 += ' ';
        break;
      default:
        promoMessageSeparator__soy33 += '<br/>';
    }
    promoMessageSeparator__soy33 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(promoMessageSeparator__soy33);
    output += soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowMerged({id: 'includes-special-offer', rowClass: dealsClass__soy6 + ' bottom-separator', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class="' + soy.$$escapeHtmlAttribute(dealsWrapperClass__soy16) + '"><strong>' + soy.$$escapeHtml(dealsContent__soy23) + '</strong>' + soy.$$escapeHtml(promoMessageSeparator__soy33) + soy.$$escapeHtml(opt_data.financialDetailsData.drr.promoMessage) + '</div>')}, null, opt_ijData));
  }
  output += '<!-- ********************************* CURRENCY MISMATCH NOTE (conditional) ******************************** -->';
  if (opt_data.financialDetailsData.currencyMismatchNote.isDisplayed) {
    var currencyMismatchClasses__soy54 = 'hidden-in-points-payment' + ((opt_data.financialDetailsData.paymentActionSummary.nonBillableCurrencyNotice.nonBillableCurrencyCode) ? ' hidden--touch' : '');
    currencyMismatchClasses__soy54 = soydata.$$markUnsanitizedTextForInternalBlocks(currencyMismatchClasses__soy54);
    output += soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowMerged({id: 'approximate-price', rowClass: currencyMismatchClasses__soy54, content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.approxPriceInNatCurrency', opt_data.financialDetailsData.currencyMismatchNote.actualCurrency)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({disableCloseIcon: true, content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.venereCurrencyPopDiv.title')) + '</strong><br>' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.venereCurrencyPopDiv.content', opt_data.financialDetailsData.currencyMismatchNote.actualCurrency)))}, null, opt_ijData)))}, null, opt_ijData));
  }
  output += ((opt_data.financialDetailsData.pricingDetails && opt_data.financialDetailsData.pricingDetails.averageNightlyPrice) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: 'average-nightly-price', description: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.financial_column.average_nightly_rate'))), value: opt_data.financialDetailsData.pricingDetails.averageNightlyPrice, rowClass: 'average-nightly fw-bold bottom-separator hidden-in-points-payment'}, null, opt_ijData)) : '') + '<!-- ********************************* NIGHTLY PRICE BREAKDOWN ******************************** -->' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.bookingSummary.nightlyPriceBreakdown({rooms: opt_data.financialDetailsData.nightlyPriceBreakdown.rooms, hasFreeCancellation: opt_data.baseConfig.isFreeCancellationAvailable}, null, opt_ijData)) + '<!-- ********************************* PRICING DETAILS ******************************** -->' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.bookingSummary.pricingDetails({subTotal: opt_data.financialDetailsData.pricingDetails.subTotal, breakfast: opt_data.financialDetailsData.pricingDetails.breakfast, taxesAndFees: opt_data.financialDetailsData.pricingDetails.taxesAndFees, mandatoryFee: opt_data.financialDetailsData.pricingDetails.expediaCollectedMandatoryFees, couponCodeApplied: opt_data.financialDetailsData.pricingDetails.couponCodeApplied, serviceFee: opt_data.financialDetailsData.pricingDetails.serviceFee, total: opt_data.financialDetailsData.pricingDetails.total, baseConfig: opt_data.baseConfig, depositDetails: opt_data.depositDetails, paymentActionSummary: opt_data.financialDetailsData.paymentActionSummary, isPriceDisplayRegulated: opt_data.financialDetailsData.isPriceDisplayRegulated, bestPriceGuaranteeEnabled: opt_data.baseConfig.bestPriceGuaranteeEnabled, isBookingFormCollapsed: opt_data.isBookingFormCollapsed}, null, opt_ijData)) + '<!-- ********************************* PAYMENT ACTION SUMMARY ******************************** -->' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.bookingSummary.paymentActionSummary(soy.$$augmentMap(opt_data.financialDetailsData.paymentActionSummary, {isPriceDisplayRegulated: opt_data.financialDetailsData.isPriceDisplayRegulated}), null, opt_ijData)) + '</table></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookingSummary.financialDetails.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookingSummary.financialDetails';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookingsummary.nightlypricebreakdown.js*/
// This file was automatically generated from nightly-price-breakdown.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookingSummary.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookingSummary == 'undefined') { hcom.templates.pages.cop.bookingForm.bookingSummary = {}; }


hcom.templates.pages.cop.bookingForm.bookingSummary.nightlyPriceBreakdown = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var roomList95 = opt_data.rooms;
  var roomListLen95 = roomList95.length;
  for (var roomIndex95 = 0; roomIndex95 < roomListLen95; roomIndex95++) {
    var roomData95 = roomList95[roomIndex95];
    var param4 = '<span class="room-type">' + soy.$$escapeHtml(soy.$$truncate(roomData95.roomType, 47, true)) + '</span> ';
    if (roomData95.amenities) {
      param4 += '<span class="room-amenities">';
      var amenityList16 = roomData95.amenities;
      var amenityListLen16 = amenityList16.length;
      for (var amenityIndex16 = 0; amenityIndex16 < amenityListLen16; amenityIndex16++) {
        var amenityData16 = amenityList16[amenityIndex16];
        param4 += soy.$$escapeHtml(amenityData16) + ((! (amenityIndex16 == amenityListLen16 - 1)) ? ', ' : '');
      }
      param4 += '</span>';
    }
    param4 += (opt_data.hasFreeCancellation) ? '<p class="c-discount mt-tiny">' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.freeCancellation')) + '</p>' : '';
    output += soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowMerged({id: 'room-type-and-amenities', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param4)}, null, opt_ijData));
    output += (roomData95.nights.length > 1) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<button class="widget-toggle-btn widget-toggle-btn-icon">' + soy.$$escapeHtml(dio.i18n('search.mstep.calendar.night_plural', roomData95.nights.length)) + '</button>'), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="room-subtotal-price">' + soy.$$escapeHtml(roomData95.roomTotal) + '</span>'), rowClass: 'room-price-breakdown-switcher hidden-in-points-payment', dataAttributes: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('data-room-id="room' + soy.$$escapeHtml(roomIndex95) + '"')}, null, opt_ijData)) : '';
    var nightList93 = roomData95.nights;
    var nightListLen93 = nightList93.length;
    for (var nightIndex93 = 0; nightIndex93 < nightListLen93; nightIndex93++) {
      var nightData93 = nightList93[nightIndex93];
      output += soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: nightData93.date, descriptionClass: soydata.$$markUnsanitizedTextForInternalBlocks('room-' + ('' + roomIndex95) + ' day-' + ('' + nightIndex93)), value: nightData93.price, valueClass: soydata.$$markUnsanitizedTextForInternalBlocks('room-' + ('' + roomIndex95) + ' price-' + ('' + nightIndex93)), rowClass: soydata.$$markUnsanitizedTextForInternalBlocks('' + ((roomData95.nights.length > 1) ? 'collapsible-row ' : '') + ((nightData93.reward) ? 'price-details-discounted ' : '') + 'hidden-in-points-payment' + ((nightIndex93 == 0) ? ' first-night' : '') + ((nightIndex93 == nightListLen93 - 1) ? ' last-night' : '')), dataAttributes: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('data-belongs-to="room' + soy.$$escapeHtml(roomIndex95) + '"')}, null, opt_ijData)) + ((nightData93.reward) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(dio.i18n('tsbooking.financial.reward.night.applied', nightData93.reward.rewardValue)) + '</strong>'), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(nightData93.reward.rewardedPrice) + '</strong>'), rowClass: soydata.$$markUnsanitizedTextForInternalBlocks(((roomData95.nights.length > 1) ? 'collapsible-row ' : '') + 'price-details-reward hidden-in-points-payment'), verticalPaddingClasses: 'pb-small', dataAttributes: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('data-belongs-to="room' + soy.$$escapeHtml(roomIndex95) + '"')}, null, opt_ijData)) : '');
    }
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookingSummary.nightlyPriceBreakdown.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookingSummary.nightlyPriceBreakdown';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookingsummary.paymentactionsummary.js*/
// This file was automatically generated from payment-action-summary.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookingSummary.
 * @hassoydelcall {mvt6632.payInHotelCurrencyDisclamer}
 * @hassoydelcall {mvt6632.payInHotelCurrencyNotice}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookingSummary == 'undefined') { hcom.templates.pages.cop.bookingForm.bookingSummary = {}; }


hcom.templates.pages.cop.bookingForm.bookingSummary.paymentActionSummary = function(opt_data, opt_ignored, opt_ijData) {
  var output = '' + (((opt_data.nonBillableCurrencyNotice == null) ? null : opt_data.nonBillableCurrencyNotice.payInHotelCurrencyPrice) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6632.payInHotelCurrencyNotice'), '', false)(null, null, opt_ijData)) + '</strong>'), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong id="financial-details-pay-hotel">' + soy.$$escapeHtml(opt_data.nonBillableCurrencyNotice.payInHotelCurrencyPrice) + '</strong>'), rowClass: 'hidden-in-points-payment'}, null, opt_ijData)) : '') + (((opt_data.nonBillableCurrencyNotice == null) ? null : opt_data.nonBillableCurrencyNotice.nonBillableCurrencyCode) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowMerged({rowClass: 'hidden-in-points-payment', verticalPaddingClasses: 'pb-small', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span class="c-note fs-small">' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6632.payInHotelCurrencyDisclamer'), '', false)({nonBillableCurrencyCode: opt_data.nonBillableCurrencyNotice.nonBillableCurrencyCode}, null, opt_ijData)) + '</span>')}, null, opt_ijData)) : '') + '<!-- ******************************* POST-PAY (conditional) ******************************** -->' + ((opt_data.paymentMessageNotice && opt_data.paymentMessageNotice.fullPostPayNotice && opt_data.paymentMessageNotice.fullPostPayNotice.totalDueNowMessage && opt_data.paymentMessageNotice.fullPostPayNotice.totalDueNowPrice) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: 'financial-details-total-due-now', rowClass: 'fs-base c-discount bg-assurance top-separator hidden-in-points-payment', verticalPaddingClasses: 'pv-med', descriptionClass: 'ph-small', valueClass: opt_data.isPriceDisplayRegulated ? 'ph-small fs-big' : 'ph-small', description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(opt_data.paymentMessageNotice.fullPostPayNotice.totalDueNowMessage) + '</strong>'), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong id="financial-details-due-now">' + soy.$$escapeHtml(opt_data.paymentMessageNotice.fullPostPayNotice.totalDueNowPrice) + '</strong>')}, null, opt_ijData)) : '') + '<!-- ********************************* PREPAY (conditional) ******************************** -->' + ((opt_data.paymentMessageNotice.prePayNoticeMessage) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowMerged({id: 'prepay-message', rowClass: 'top-separator', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<small>' + soy.$$escapeHtml(opt_data.paymentMessageNotice.prePayNoticeMessage) + '</small>')}, null, opt_ijData)) : '') + '<!-- ********************************* BILLING CURRENCY DISCLAIMER (conditional) ******************************** -->' + ((opt_data.nonBillableCurrencyNotice && opt_data.nonBillableCurrencyNotice.billingCurrencyDisclaimer && opt_data.nonBillableCurrencyNotice.billingCurrencyDisclaimer.billingCurrencyDisclaimerMessage) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(opt_data.nonBillableCurrencyNotice.billingCurrencyDisclaimer.billingCurrencyDisclaimerMessage) + '</strong>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong>' + soy.$$escapeHtml(dio.i18n('tsbooking.financial.totalCharges.totalAmountWillBeCharged')) + '</strong><br>' + soy.$$escapeHtml(dio.i18n('booking.displaywarn.message3'))), disableCloseIcon: true}, null, opt_ijData))), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<strong id="financial-details-diff-currency">' + soy.$$escapeHtml(opt_data.nonBillableCurrencyNotice.billingCurrencyDisclaimer.price) + '</strong>'), rowClass: 'hidden-in-points-payment'}, null, opt_ijData)) : '') + '<!-- ************************************ MANDATORY FEE *********************************** *-->';
  if (opt_data.mandatoryFee) {
    var param75 = '' + soy.$$escapeHtml(opt_data.mandatoryFee.labelMessage);
    var param77 = '';
    var feeList98 = opt_data.mandatoryFee.mandatoryFeeTooltipItems;
    var feeListLen98 = feeList98.length;
    for (var feeIndex98 = 0; feeIndex98 < feeListLen98; feeIndex98++) {
      var feeData98 = feeList98[feeIndex98];
      param77 += (feeData98.text) ? (feeData98.type == 'listItem') ? '<span class="mandatory-fee-list-item">' + soy.$$filterNoAutoescape(feeData98.text) + '</span>' : soy.$$filterNoAutoescape(feeData98.text) + ((! (feeIndex98 == feeListLen98 - 1)) ? '<br>' : '') : soy.$$filterNoAutoescape(feeData98) + ((! (feeIndex98 == feeListLen98 - 1)) ? '<br>' : '');
    }
    param75 += soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param77), disableCloseIcon: true}, null, opt_ijData));
    output += soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param75), rowClass: opt_data.isPriceDisplayRegulated ? 'c-black fw-normal' : 'mandatory-fee c-note', valueClass: opt_data.isPriceDisplayRegulated ? 'c-black' : 'c-dark', value: opt_data.mandatoryFee.totalMandatoryFee, valueId: 'financial-details-mandatory-fee'}, null, opt_ijData));
    if (opt_data.mandatoryFee.totalPriceWithMandatoryFee) {
      var totalPriceWithMandatoryFee__soy109 = '' + ((opt_data.mandatoryFee.displayTotalPriceWithApprox) ? soy.$$filterNoAutoescape(dio.i18n('booking.bookingForm.mandatoryFee.hotelCollected.priceWithApprox', '<span class="fs-base va-t">', '</span>', opt_data.mandatoryFee.totalPriceWithMandatoryFee)) : soy.$$escapeHtml(opt_data.mandatoryFee.totalPriceWithMandatoryFee));
      totalPriceWithMandatoryFee__soy109 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(totalPriceWithMandatoryFee__soy109);
      output += soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: 'total-cost-with-mandatory-fee', rowClass: soydata.$$markUnsanitizedTextForInternalBlocks('hidden-in-points-payment ' + ((opt_data.isPriceDisplayRegulated) ? 'mandatory-fee c-text fw-bold' : 'mandatory-fee c-note')), valueClass: opt_data.isPriceDisplayRegulated ? 'c-text fs-big' : 'c-dark', description: dio.i18n('booking.financial_column.charges.total'), value: totalPriceWithMandatoryFee__soy109, valueId: 'financial-details-total-booking'}, null, opt_ijData));
    }
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookingSummary.paymentActionSummary.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookingSummary.paymentActionSummary';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookingsummary.pricingdetails.js*/
// This file was automatically generated from pricing-details.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.bookingSummary.
 * @hassoydelcall {mvt2638.collapsedBFTotalPriceRow}
 * @hassoydelcall {mvt5370.scarcityMessageOriginalPosition}
 * @hassoydelcall {mvt6099.priceIncreaseMessage}
 * @hassoydelcall {mvt6632.totalPricePostFix}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.bookingSummary == 'undefined') { hcom.templates.pages.cop.bookingForm.bookingSummary = {}; }


hcom.templates.pages.cop.bookingForm.bookingSummary.pricingDetails = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<!-- ********************************* SUB TOTAL (conditional) ******************************** -->' + ((opt_data.subTotal) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: 'sub-total-row', description: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('fastbooking.summary.subtotal'))), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span id="financial-details-subtotal">' + soy.$$escapeHtml(opt_data.subTotal) + '</span>'), rowClass: 'pricing-details top-separator hidden-in-points-payment'}, null, opt_ijData)) : '') + '<!-- ********************************* BREAKFAST (conditional) ******************************** -->' + ((opt_data.breakfast) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.breakfast'))), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span id="financial-details-breakfast">' + soy.$$escapeHtml(opt_data.breakfast) + '</span>'), rowClass: soydata.$$markUnsanitizedTextForInternalBlocks('hidden-in-points-payment' + ((! opt_data.subTotal) ? ' top-separator' : ''))}, null, opt_ijData)) : '') + '<!-- ********************************* TAXES AND FEES ******************************** -->';
  var isSeparatorRequired__soy31 = ! opt_data.subTotal && ! opt_data.breakfast;
  output += soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.common.taxesAndFees({taxesAndFees: opt_data.taxesAndFees, id: 'taxes-and-fees-row', extraGuestChargesTooltipMessage: opt_data.baseConfig.extraGuestChargesTooltipMessage, isSeparatorRequired: isSeparatorRequired__soy31}, null, opt_ijData)) + '<!-- ********************************* MANDATORY FEE ******************************** -->' + ((opt_data.mandatoryFee) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: 'expedia-collected-mandatory-fee', description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(opt_data.mandatoryFee.labelMessage) + ((opt_data.mandatoryFee.tooltipText) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({content: opt_data.mandatoryFee.tooltipText, disableCloseIcon: true}, null, opt_ijData)) : '')), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(opt_data.mandatoryFee.price)), rowClass: soydata.$$markUnsanitizedTextForInternalBlocks('pricing-details hidden-in-points-payment')}, null, opt_ijData)) : '') + '<!-- ********************************* DISCOUNT CODE APPLIED (conditional) ******************************** -->' + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + ((opt_data.couponCodeApplied) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(soy.$$escapeHtml(dio.i18n('fastbooking.summary.discount')) + '<br />' + soy.$$escapeHtml(opt_data.couponCodeApplied.couponDescription) + '<br /><small>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({linkText: dio.i18n('fastbooking.summary.termsAndConditions'), href: opt_data.couponCodeApplied.couponTermsConditionsUrl, title: dio.i18n('fastbooking.summary.clickToSeeDiscountTC'), dataTitle: dio.i18n('fastbooking.summary.termsAndConditions')}, null, opt_ijData)) + '</small>'), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(soy.$$escapeHtml(opt_data.couponCodeApplied.discountAmount) + '<br>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: dio.i18n('fastbooking.summary.removeDiscount'), title: dio.i18n('fastbooking.summary.clickToRemoveDiscount'), isTextual: true, id: 'coupon-code-remove-btn', additionalClasses: 'remove-discount-btn'}, null, opt_ijData))), rowClass: 'discount c-discount top-separator'}, null, opt_ijData)) : '') + '<!-- ********************************* SERVICE FEE (conditional) ******************************** -->' + ((opt_data.serviceFee) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: 'service-fee-row', description: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('tsbooking.financial.totalCharges.serviceFee'))), value: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + opt_data.serviceFee)), rowClass: 'hidden-in-points-payment'}, null, opt_ijData)) : '') + '<!-- ********************************* TOTAL PRICE ******************************** -->' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt2638.collapsedBFTotalPriceRow'), '', true)({total: opt_data.total, paymentActionSummary: opt_data.paymentActionSummary, termsAndConditionsUrl: opt_data.baseConfig.termsAndConditionsUrl, isBookingFormCollapsed: opt_data.isBookingFormCollapsed, isPriceDisplayRegulated: opt_data.isPriceDisplayRegulated}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowMerged({id: 'total-price-row', rowClass: 'top-separator', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div id="financial-details-total-text" class="hidden-in-points-payment float-l"><strong>' + soy.$$escapeHtml(opt_data.total.price.label) + '</strong></div><div id="financial-details-total-price-container" class="hidden-in-points-payment float-r ta-r mb-tiny ' + soy.$$escapeHtmlAttribute(opt_data.isPriceDisplayRegulated ? 'fs-big' : 'fs-colossal fs-enorm--xs fs-giant--xxs') + '">' + ((opt_data.total.preDealPrice) ? '<span id="financial-details-pre-deal-price" class="fs-big ml-enorm c-note td-lt ws-nw">' + soy.$$escapeHtml(opt_data.total.preDealPrice) + '</span> ' : '') + '<strong id="financial-details-total-price" class="c-dark ws-nw">' + soy.$$escapeHtml(opt_data.total.price.amount) + (((opt_data.paymentActionSummary.nonBillableCurrencyNotice == null) ? null : opt_data.paymentActionSummary.nonBillableCurrencyNotice.nonBillableCurrencyCode) ? soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6632.totalPricePostFix'), '', true)(null, null, opt_ijData)) : '') + '</strong></div>' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6099.priceIncreaseMessage'), '', true)(null, null, opt_ijData)) + ((opt_data.baseConfig.bestPriceGuaranteeEnabled && opt_data.baseConfig.bestPriceGuaranteeInPaymentSectionEnabled) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.bestPriceGuaranteeBadge({additionalClasses: 'pv-tiny ta-r fw-normal fs-small clear'}, null, opt_ijData)) : '') + ((opt_data.total.customerUrgencyMessage) ? soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt5370.scarcityMessageOriginalPosition'), '', true)({customerUrgencyMessage: opt_data.total.customerUrgencyMessage}, null, opt_ijData)) : '') + '<div class="hidden-in-points-payment c-note fs-small clear mt-small float-r" id="financial-details-includes-text">' + soy.$$escapeHtml(opt_data.total.totalPriceTaxesAndFees.includingTaxesMessage) + ((opt_data.total.totalPriceTaxesAndFees.taxesAndFeesExplanationTooltipMessageKey) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.bookingSummary.termsAndConditionsLink({linkOpenTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLinkOpenTag({href: opt_data.baseConfig.termsAndConditionsUrl, dataTitle: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('fastbooking.title.termsConditions')))}, null, opt_ijData))), linkCloseTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLinkCloseTag(null, null, opt_ijData))), tooltipMessageKey: opt_data.total.totalPriceTaxesAndFees.taxesAndFeesExplanationTooltipMessageKey}, null, opt_ijData))), disableCloseIcon: true}, null, opt_ijData)) : '') + ((opt_data.total.totalPriceTaxesAndFees.vatExplanationMessage) ? '<br>' + soy.$$escapeHtml(opt_data.total.totalPriceTaxesAndFees.vatExplanationMessage) : '') + '</div>')}, null, opt_ijData)) + '<!-- ********************************* DEPOSIT (conditional) ******************************** -->' + ((opt_data.depositDetails) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.deposit.deposit(opt_data, null, opt_ijData)) : '');
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookingSummary.pricingDetails.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookingSummary.pricingDetails';
}
