/*! generated/hcom.templates.pages.cop.bookingform.common.taxesandfees.js*/
// This file was automatically generated from taxes-and-fees.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.common.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.common == 'undefined') { hcom.templates.pages.cop.bookingForm.common = {}; }


hcom.templates.pages.cop.bookingForm.common.taxesAndFees = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.taxesAndFees) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: opt_data.id, description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(opt_data.taxesAndFees.labelMessage) + ((opt_data.extraGuestChargesTooltipMessage) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({content: opt_data.extraGuestChargesTooltipMessage, disableCloseIcon: true}, null, opt_ijData)) : '')), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(opt_data.taxesAndFees.price)), rowClass: soydata.$$markUnsanitizedTextForInternalBlocks('pricing-details hidden-in-points-payment' + ((opt_data.isSeparatorRequired) ? ' top-separator' : ''))}, null, opt_ijData)) : soy.$$escapeHtml(hcom.templates.pages.cop.common.containers.rowDescriptionValue({id: opt_data.id, description: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(''), value: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(''), rowClass: soydata.$$markUnsanitizedTextForInternalBlocks('hidden')}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.common.taxesAndFees.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.common.taxesAndFees';
}

/*! generated/hcom.templates.pages.cop.bookingform.vipvap.js*/
// This file was automatically generated from vip-vap.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }


hcom.templates.pages.cop.bookingForm.vipvap = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  var output = '';
  var defaultIconClass__soy3 = 'value-add';
  if (opt_data.valueAddPromotions) {
    output += '<div class="vipvap fs-base ' + soy.$$escapeHtmlAttribute(opt_data.containerClasses) + '">';
    if (opt_data.valueAddPromotions.fenced) {
      var fencedLevel__soy11 = '';
      switch ((goog.isObject($$temp = opt_data.valueAddPromotions.fenced.theme)) ? $$temp.toString() : $$temp) {
        case 'GOLD':
          fencedLevel__soy11 += 'gold';
          break;
        case 'SILVER':
          fencedLevel__soy11 += 'silver';
          break;
        default:
          fencedLevel__soy11 += 'member';
      }
      fencedLevel__soy11 = soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(fencedLevel__soy11);
      output += '<div class="fenced-vap pa-base mb-base ' + soy.$$escapeHtmlAttribute(fencedLevel__soy11) + '">' + ((opt_data.valueAddPromotions.fenced.label) ? '<p class="vipvap-title fw-bold mb-small">' + soy.$$escapeHtml(opt_data.valueAddPromotions.fenced.label) + '</p>' : '') + '<ul>';
      var benefitList33 = opt_data.valueAddPromotions.fenced.benefits;
      var benefitListLen33 = benefitList33.length;
      for (var benefitIndex33 = 0; benefitIndex33 < benefitListLen33; benefitIndex33++) {
        var benefitData33 = benefitList33[benefitIndex33];
        output += '<li class="with-small-icon icon-' + soy.$$escapeHtmlAttribute(($$temp = benefitData33.icon) == null ? defaultIconClass__soy3 : $$temp) + ' mt-tiny">' + soy.$$escapeHtml(benefitData33.label) + '</li>';
      }
      output += '</ul></div>';
    }
    if (opt_data.valueAddPromotions.unfenced) {
      output += '<div class="unfenced-vap ph-base"><ul>';
      var benefitList44 = opt_data.valueAddPromotions.unfenced.benefits;
      var benefitListLen44 = benefitList44.length;
      for (var benefitIndex44 = 0; benefitIndex44 < benefitListLen44; benefitIndex44++) {
        var benefitData44 = benefitList44[benefitIndex44];
        output += '<li class="with-small-icon icon-' + soy.$$escapeHtmlAttribute(($$temp = benefitData44.icon) == null ? defaultIconClass__soy3 : $$temp) + ' mt-tiny">' + soy.$$escapeHtml(benefitData44.label) + '</li>';
      }
      output += '</ul></div>';
    }
    output += '</div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.vipvap.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.vipvap';
}

/*! generated/hcom.templates.pages.cop.bookingform.bookingsummary.termsandconditionslink.js*/
// This file was automatically generated from terms-and-conditions-link.soy.
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


hcom.templates.pages.cop.bookingForm.bookingSummary.termsAndConditionsLink = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.tooltipMessageKey) ? soy.$$filterNoAutoescape(dio.i18n(opt_data.tooltipMessageKey, opt_data.linkOpenTag, opt_data.linkCloseTag)) : soy.$$filterNoAutoescape(dio.i18n('fastbooking.taxesAndFees.tooltip', opt_data.linkOpenTag, opt_data.linkCloseTag)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.bookingSummary.termsAndConditionsLink.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.bookingSummary.termsAndConditionsLink';
}

/*! generated/hcom.templates.pages.cop.bookingform.callcentermodule.callcentermodule.js*/
// This file was automatically generated from call-center-module.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.callCenterModule.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.callCenterModule == 'undefined') { hcom.templates.pages.cop.bookingForm.callCenterModule = {}; }


hcom.templates.pages.cop.bookingForm.callCenterModule.callCenterModule = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="call-center-module" class="hidden--xs hidden--s-m ph-default-cont pv-med mb-base fs-base bd-all bdwh-none--xs bdra-big bg-white">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.sprites.general({itemName: opt_data.callCenterModuleData.isImageEastern ? 'call-center-image-eastern' : 'call-center-image-western', additionalClasses: 'hidden--xs hidden--s-m hidden--ml'}, null, opt_ijData)) + '<h2 class="fs-med">' + soy.$$escapeHtml(dio.i18n('fastbooking.help_section.title')) + '</h2><p>' + soy.$$filterNoAutoescape(opt_data.callCenterModuleData.callUsMessage) + ' <strong>' + soy.$$escapeHtml(opt_data.callCenterModuleData.phoneNumbers) + '</strong> ' + soy.$$escapeHtml(($$temp = opt_data.callCenterModuleData.costPerMinute) == null ? '' : $$temp) + ' ' + soy.$$escapeHtml(($$temp = opt_data.callCenterModuleData.hoursOfOperation) == null ? '' : $$temp) + '</p></div>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.callCenterModule.callCenterModule.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.callCenterModule.callCenterModule';
}

/*! generated/hcom.templates.pages.cop.common.sprites.general.js*/
// This file was automatically generated from general.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.sprites.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.sprites == 'undefined') { hcom.templates.pages.cop.common.sprites = {}; }


hcom.templates.pages.cop.common.sprites.general = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span class="checkout-sprite ' + soy.$$escapeHtmlAttribute(opt_data.itemName) + ' ' + soy.$$escapeHtmlAttribute(($$temp = opt_data.additionalClasses) == null ? '' : $$temp) + '">' + soy.$$escapeHtml(($$temp = opt_data.textContent) == null ? '' : $$temp) + '</span>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.sprites.general.soyTemplateName = 'hcom.templates.pages.cop.common.sprites.general';
}

/*! generated/hcom.templates.pages.cop.bookingform.cancellationpolicy.cancellationpolicycollapsed.js*/
// This file was automatically generated from cancellation-policy-collapsed.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.cancellationPolicy.
 * @hassoydelcall {mvt2638.collapsedBFTermsAndCancellationPolicySection}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.cancellationPolicy == 'undefined') { hcom.templates.pages.cop.bookingForm.cancellationPolicy = {}; }


hcom.templates.pages.cop.bookingForm.cancellationPolicy.cancellationPolicyCollapsed = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var cancellationPolicyCollapsedToggleTitle__soy3 = '' + ('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt2638.collapsedBFTermsAndCancellationPolicySection'), '', true)(opt_data, null, opt_ijData));
  cancellationPolicyCollapsedToggleTitle__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(cancellationPolicyCollapsedToggleTitle__soy3);
  output += '<div id="cancellation-policy-collapsed"><div class="widget-toggle mv-base"><div class="widget-toggle-bd" data-widget-toggle-text="' + soy.$$escapeHtmlAttribute(cancellationPolicyCollapsedToggleTitle__soy3) + '">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.cancellationPolicy(opt_data, null, opt_ijData)) + '</div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.cancellationPolicy.cancellationPolicyCollapsed.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.cancellationPolicy.cancellationPolicyCollapsed';
}

/*! generated/hcom.templates.pages.cop.common.cancellationpolicy.js*/
// This file was automatically generated from cancellation-policy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }


hcom.templates.pages.cop.common.cancellationPolicy = function(opt_data, opt_ignored, opt_ijData) {
  var output = '' + ((opt_data.cancellationPolicyData.multiplePartsMessage) ? '<p><em>' + soy.$$escapeHtml(dio.i18n('propertyDetails.ratePlan.mixedRatePlan.cancellation')) + '</em></p><p class="mb-big">' + soy.$$escapeHtml(opt_data.cancellationPolicyData.multiplePartsMessage) + '</p>' : '');
  var itemList99 = opt_data.cancellationPolicyData.items;
  var itemListLen99 = itemList99.length;
  for (var itemIndex99 = 0; itemIndex99 < itemListLen99; itemIndex99++) {
    var itemData99 = itemList99[itemIndex99];
    output += '<div class="cancellation-item mb-big">' + ((itemData99.roomTypeMessage) ? '<p class="cancellation-roomtype mb-small"><em>' + soy.$$escapeHtml(itemData99.roomTypeMessage) + '</em></p>' : '') + ((itemData99.dateRangeMessage) ? '<p class="cancellation-daterange"><em>' + soy.$$escapeHtml(itemData99.dateRangeMessage) + '</em></p>' : '');
    if (itemData99.cancellationPolicyText) {
      output += '<div class="non-structured-cancellation-policy">' + soy.$$filterNoAutoescape(itemData99.cancellationPolicyText) + '</div>';
    } else {
      if (itemData99.isRefundable) {
        if (itemData99.refundableInfo.hasPenalty) {
          if (itemData99.isCollapsed && ! opt_data.isBookingFormCollapsed) {
            var param34 = '<ul class="bullets mb-small">';
            var afterPenaltyList40 = itemData99.refundableInfo.afterCancelTimePenalties;
            var afterPenaltyListLen40 = afterPenaltyList40.length;
            for (var afterPenaltyIndex40 = 0; afterPenaltyIndex40 < afterPenaltyListLen40; afterPenaltyIndex40++) {
              var afterPenaltyData40 = afterPenaltyList40[afterPenaltyIndex40];
              param34 += '<li>' + soy.$$filterNoAutoescape(afterPenaltyData40) + '</li>';
            }
            param34 += '</ul>' + ((itemData99.additionalFee) ? '<p class="mb-small">' + soy.$$escapeHtml(itemData99.additionalFee) + '</p>' : '') + '<p class="mb-small cancellation-alternate">' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.general_penalty')) + '</p>';
            output += soy.$$escapeHtml(hcom.templates.pages.cop.common.toggleWidget({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(param34), buttonText: dio.i18n('hotel.cancellation_policy_alternate.after.caption', '', itemData99.refundableInfo.cancellationDate, ''), toggleClass: 'cancellation-policy-penalty mb-base'}, null, opt_ijData));
          } else {
            output += ((itemData99.refundableInfo.beforeCancelTimePenalties.length == 0) ? '<p id="cancellation-policy-caption" class="mb-small"><em>' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.after.caption', '', itemData99.refundableInfo.cancellationDate, '')) + '</em></p>' : '') + '<ul class="bullets mb-small">';
            var beforePenaltyList65 = itemData99.refundableInfo.beforeCancelTimePenalties;
            var beforePenaltyListLen65 = beforePenaltyList65.length;
            for (var beforePenaltyIndex65 = 0; beforePenaltyIndex65 < beforePenaltyListLen65; beforePenaltyIndex65++) {
              var beforePenaltyData65 = beforePenaltyList65[beforePenaltyIndex65];
              output += '<li>' + soy.$$filterNoAutoescape(beforePenaltyData65) + '</li>';
            }
            var afterPenaltyList71 = itemData99.refundableInfo.afterCancelTimePenalties;
            var afterPenaltyListLen71 = afterPenaltyList71.length;
            for (var afterPenaltyIndex71 = 0; afterPenaltyIndex71 < afterPenaltyListLen71; afterPenaltyIndex71++) {
              var afterPenaltyData71 = afterPenaltyList71[afterPenaltyIndex71];
              output += '<li>' + soy.$$filterNoAutoescape(afterPenaltyData71) + '</li>';
            }
            output += '</ul>' + ((itemData99.additionalFee) ? '<p class="mb-small">' + soy.$$escapeHtml(itemData99.additionalFee) + '</p>' : '') + '<p class="mb-small cancellation-alternate">' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.general_penalty')) + '</p>';
          }
        } else {
          output += '<p id="cancellation-policy-caption" class="mb-small"><em>' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.nopenalty.caption', '', '')) + '</em><br /></p><p class="mb-small">' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.nopenalty')) + '</p>';
        }
      } else {
        output += '<p id="cancellation-policy-caption" class="mb-small"><em>' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.nonrefundable.caption', '', '')) + '</em><br /></p><ul class="bullets mb-small"><li>' + soy.$$escapeHtml(dio.i18n('hotel.cancellation_policy_alternate.nonrefundable')) + '</li></ul>';
      }
    }
    output += ((itemData99.mandatoryFeeText) ? soy.$$filterNoAutoescape(itemData99.mandatoryFeeText) : '') + '</div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.cancellationPolicy.soyTemplateName = 'hcom.templates.pages.cop.common.cancellationPolicy';
}

/*! generated/hcom.templates.pages.cop.common.links.externallinkclosetag.js*/
// This file was automatically generated from external-link.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.links.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.links == 'undefined') { hcom.templates.pages.cop.common.links = {}; }


hcom.templates.pages.cop.common.links.externalLinkCloseTag = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('</a>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.links.externalLinkCloseTag.soyTemplateName = 'hcom.templates.pages.cop.common.links.externalLinkCloseTag';
}

/*! generated/hcom.templates.pages.cop.common.links.externallinkopentag.js*/
// This file was automatically generated from external-link.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.links.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.links == 'undefined') { hcom.templates.pages.cop.common.links = {}; }


hcom.templates.pages.cop.common.links.externalLinkOpenTag = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.href)) + '" class="external-link ' + soy.$$escapeHtmlAttribute(($$temp = opt_data.additionalClasses) == null ? '' : $$temp) + '" target="_blank"' + ((opt_data.id) ? '             id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"                    ' : '') + ((opt_data.title) ? '          title="' + soy.$$escapeHtmlAttribute(opt_data.title) + '"              ' : '') + ((opt_data.dataTitle) ? '      data-title="' + soy.$$escapeHtmlAttribute(opt_data.dataTitle) + '"     ' : '') + '>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.links.externalLinkOpenTag.soyTemplateName = 'hcom.templates.pages.cop.common.links.externalLinkOpenTag';
}

/*! generated/hcom.templates.pages.cop.bookingform.common.overlays.interstitial.js*/
// This file was automatically generated from interstitial.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.common.overlays.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.common == 'undefined') { hcom.templates.pages.cop.bookingForm.common = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.common.overlays == 'undefined') { hcom.templates.pages.cop.bookingForm.common.overlays = {}; }


hcom.templates.pages.cop.bookingForm.common.overlays.interstitial = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var widgetClass__soy3 = opt_data.useModalOverlay ? 'widget-modaloverlay' : 'widget-overlay';
  output += '<div id="interstitial" class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '"><div id="interstitial-header" class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd fw-bold">' + soy.$$escapeHtml(dio.i18n('tsbooking.interstitial.info2')) + '</div><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd"><div id="interstitial-redirect-text" class="progress-redirect-text mb-base hidden"></div><div id="interstitial-progress-text" class="progress-state-text fs-base mb-base"></div><div class="progressbar bdra-big bg-white" role="progressbar"><span class="progressbar-value" id="interstitial-progressbar-value"></span></div><p class="foot-note mt-small">' + soy.$$escapeHtml(dio.i18n('tsbooking.interstitial.will_take_a_minute')) + '</p></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.common.overlays.interstitial.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.common.overlays.interstitial';
}

/*! generated/hcom.templates.pages.cop.bookingform.common.overlays.overlaymessage.js*/
// This file was automatically generated from overlay-message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.common.overlays.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.common == 'undefined') { hcom.templates.pages.cop.bookingForm.common = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.common.overlays == 'undefined') { hcom.templates.pages.cop.bookingForm.common.overlays = {}; }


hcom.templates.pages.cop.bookingForm.common.overlays.overlayMessage = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  opt_data = opt_data || {};
  var output = '';
  var widgetClass__soy3 = opt_data.data.useModalOverlay ? 'widget-modaloverlay' : 'widget-overlay';
  var extraClass__soy4 = '' + ((opt_data.data.type == 'iframeWidget') ? ' ' + ('' + widgetClass__soy3) + '-iframe' : '') + ((opt_data.data.classes) ? ' ' + ('' + opt_data.data.classes) : '');
  extraClass__soy4 = soydata.$$markUnsanitizedTextForInternalBlocks(extraClass__soy4);
  output += '<div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + ' error-overlay-message' + soy.$$escapeHtmlAttribute(extraClass__soy4) + '"' + ((opt_data.data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.data.id) + '"' : '') + '>' + ((opt_data.data.type == 'soldOut') ? '<h2 class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd">' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.hotelNotAvailable.title.busyToday')) + '</h2><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd fs-base"><p>' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.hotelNotAvailable.rooms', opt_data.data.brandName)) + '</p></div>' : (opt_data.data.type == 'priceIncrease' || opt_data.data.type == 'priceDecrease' || opt_data.data.type == 'priceIncreaseCoupon' || opt_data.data.type == 'priceDecreaseCoupon' || opt_data.data.type == 'priceIncreaseReload' || opt_data.data.type == 'priceDecreaseReload') ? '<h2 class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd">' + ((opt_data.data.type == 'priceDecrease' || opt_data.data.type == 'priceDecreaseCoupon' || opt_data.data.type == 'priceDecreaseReload') ? soy.$$escapeHtml(dio.i18n('fastbooking.errormessageModule.priceDrop.title')) : (opt_data.data.type == 'priceIncrease' || opt_data.data.type == 'priceIncreaseCoupon' || opt_data.data.type == 'priceIncreaseReload') ? soy.$$escapeHtml(dio.i18n('fastbooking.errormessageModule.priceRise.title')) : '') + '</h2><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd fs-base"><p>' + soy.$$escapeHtml(opt_data.data.differenceMessage) + '</p>' + ((opt_data.data.newPriceMessage) ? '<p class="mt-small">' + soy.$$escapeHtml(opt_data.data.newPriceMessage) + '</p>' : '') + '</div>' : (opt_data.data.type == 'priceIncreaseOnFormLoad') ? '<h2 class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd">' + soy.$$escapeHtml(dio.i18n('booking.pricechange.increase.title')) + '</h2><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd fs-base"><p class="mb-small"><em>' + soy.$$escapeHtml(opt_data.data.differenceMessage) + '</em></p><p>' + soy.$$escapeHtml(dio.i18n('booking.pricechange.increase.options')) + '</p></div>' : (opt_data.data.type == 'duplicateBooking') ? '<h2 class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd">' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.duplicateBooking.label.title')) + '</h2><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd fs-base"><p class="mb-small">' + soy.$$filterNoAutoescape(dio.i18n('fastbooking.errorMessageModule.duplicateBooking.alreadyBookedAt', '<strong>', opt_data.data.hotelName, '</strong>', '<strong>', opt_data.data.hotelLocation, '</strong>')) + '</p><p class="mb-small">' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.duplicateBooking.label.booked')) + ': ' + soy.$$escapeHtml(opt_data.data.dateOfBook) + ' (' + soy.$$escapeHtml(opt_data.data.timeElapsed) + ')</p><p class="mb-small">' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.duplicateBooking.label.itineraryNo.brand', opt_data.data.brandName)) + ': ' + soy.$$escapeHtml(opt_data.data.itineraryNr) + '<br /><a href="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.data.viewDetailsUrl)) + '" class="external-link" target="_blank"><span>' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.duplicateBooking.label.viewBookingDetails')) + '</span></a></p><p>' + soy.$$escapeHtml(dio.i18n('fastbooking.errorMessageModule.duplicateBooking.label.wantToContinue')) + '</p></div>' : (opt_data.data.type == 'inventoryError') ? '<div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd fs-base"><p class="mb-small">' + soy.$$filterNoAutoescape(opt_data.data.errorMessage) + '</p></div>' : (opt_data.data.type == 'iframeWidget') ? '<h2 class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd">' + soy.$$escapeHtml(opt_data.data.title) + '</h2><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd"><iframe src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.data.iframeUrl)) + '"></iframe></div>' : (opt_data.data.type == 'dontMissPopup') ? '<h2 class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd mb-none">' + soy.$$escapeHtml(($$temp = opt_data.data.configuration.popupTitleMessage) == null ? dio.i18n('booking.dontmisschance.title') : $$temp) + '</h2><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd fs-base pv-med">' + ((opt_data.data.configuration.roomImage) ? '<img src="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(opt_data.data.configuration.roomImage.url)) + '" title="' + soy.$$escapeHtmlAttribute(opt_data.data.configuration.roomImage.title) + '" class="float-l mr-base thumbnail" />' : '') + '<div class="message-container"><p class="mb-small fw-bold question">' + soy.$$filterNoAutoescape(dio.i18n('booking.dontmisschance.are_you_sure', opt_data.data.hotelName)) + '</p><p>' + soy.$$escapeHtml(dio.i18n('booking.dontmisschance.if_you_leave_now')) + '</p>' + ((opt_data.data.configuration.urgencyMessage) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$filterNoAutoescape(opt_data.data.configuration.urgencyMessage)), type: 'assurance', id: 'confidence-message', additionalClasses: 'mt-base', isEmphasised: true}, null, opt_ijData)) : '') + '</div></div>' : '') + ((opt_data.buttons) ? '<div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-ft">' + soy.$$filterNoAutoescape(opt_data.buttons) + '</div>' : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.common.overlays.overlayMessage.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.common.overlays.overlayMessage';
}

/*! generated/hcom.templates.pages.cop.bookingform.contactdetails.updatebillingdetailsfield.js*/
// This file was automatically generated from update-billing-details-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.contactDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.contactDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.contactDetails = {}; }


hcom.templates.pages.cop.bookingForm.contactDetails.updateBillingDetailsField = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: opt_data.updateBillingDetailsData, id: 'update-details-field', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$filterNoAutoescape(dio.i18n('fastbooking.bookingform.update_profile'))), skipValidationMarkup: true}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.contactDetails.updateBillingDetailsField.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.contactDetails.updateBillingDetailsField';
}

/*! generated/hcom.templates.pages.cop.common.formelements.checkbox.js*/
// This file was automatically generated from check-box.soy.
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


hcom.templates.pages.cop.common.formElements.checkbox = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.fieldContainer(soy.$$augmentMap(opt_data, {inputType: 'checkbox', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<label class="option-label"><input type="checkbox" value="' + soy.$$escapeHtmlAttribute(($$temp = opt_data.fieldProperties.value) == null ? 'true' : $$temp) + '"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '') + ((opt_data.classes) ? ' class="' + soy.$$escapeHtmlAttribute(opt_data.classes) + '"' : '') + ((opt_data.fieldProperties.name) ? ' name="' + soy.$$escapeHtmlAttribute(opt_data.fieldProperties.name) + '"' : '') + ((opt_data.errorTitle) ? ' data-error-title="' + soy.$$escapeHtmlAttribute(opt_data.errorTitle) + '"' : '') + ((opt_data.fieldProperties.checked) ? ' checked="true"' : '') + ((opt_data.fieldProperties.disabled) ? ' disabled="disabled"' : '') + '/><span class="option-label-text">' + soy.$$filterNoAutoescape(opt_data.label) + '</span></label>')}), null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.checkbox.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.checkbox';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.couponcode.js*/
// This file was automatically generated from coupon-code.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.couponCode = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.couponCodeData) ? '<div id="coupon-code-container" class="discount-option fs-small" ><div class="discount-option-name-container mb-tiny">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.radio({fieldProperties: {name: 'discountSelector', value: 'discountCode'}, id: 'deals-and-discounts-coupon-code-selector', classes: 'discount-option-radio', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<em class="fs-base">' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.applyDiscountCode')) + '</em>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<em>' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.getDiscountCode')) + '</em><br>' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.getDiscountCode.description'))), disableCloseIcon: true}, null, opt_ijData)))}, null, opt_ijData)) + '</div><div class="discount-option-active-content"><form id="coupon-code-form">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.couponCodeData.couponInputField, id: 'coupon-code-field', label: dio.i18n('fastbooking.summary.applyDiscountCode'), isLabelOffscreen: true, noDistance: true, skipValidationMarkup: true, maxlength: 25}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('fastbooking.summary.applyCoupon'))), isDisabledByDefault: true, title: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('fastbooking.summary.clickToApplyDiscount'))), id: 'coupon-code-apply-btn', additionalClasses: 'ml-tiny pv-tiny fs-base', type: 'submit'}, null, opt_ijData)) + '</form><p id="coupon-code-error-message"><em>' + soy.$$escapeHtml(dio.i18n('fastbooking.invalidChars.couponIdentifier.code.short')) + '</em> ' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({id: 'coupon-code-error-t-and-c', linkText: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.form.terms_conditions'))), href: '', dataTitle: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.form.terms_conditions')))}, null, opt_ijData)) + '</p>' + ((opt_data.couponCodeData.multiRoomBookingWarningMessageEnabled) ? '<p id="coupon-code-multi-room-warning" class="c-note hidden mt-tiny">' + soy.$$escapeHtml(dio.i18n('fastbooking.multiroom.coupon.warning')) + '</p>' : '') + '</div></div><p id="coupon-applied-info" class="fs-base">' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.couponApplied')) + '</p>' : '');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.couponCode.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.couponCode';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.dealsanddiscounts.js*/
// This file was automatically generated from deals-and-discounts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.
 * @hassoydelcall {mvt5651.dealsAndDiscountsHeader}
 * @hassoydelcall {mvt5651.dealsAndDiscountsOpenClass}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.dealsAndDiscounts = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="deals-and-discounts" class="ph-default-cont mt-med pv-med--xs bg-light--xs hidden"><hr class="hidden--xs mb-med">' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt5651.dealsAndDiscountsHeader'), '', true)({toBeShown: opt_data.dealsAndDiscountsData.coupon || opt_data.dealsAndDiscountsData.loyaltyRewards}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.toggleWidget({buttonText: soydata.$$markUnsanitizedTextForInternalBlocks('' + ((opt_data.signedIn) ? '' + dio.i18n('fastbooking.summary.applyDealOrDiscountSignedIn') : '' + dio.i18n('fastbooking.summary.applyDealOrDiscountNotSignedIn'))), isAutoOpen: soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks('' + soy.$$filterHtmlAttributes(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt5651.dealsAndDiscountsOpenClass'), '', true)(null, null, opt_ijData))), toggleClass: 'deals-and-discounts-toggle', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({id: 'remove-gift-card-message', type: 'neutral', isEmphasised: true, content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(dio.i18n('fastbooking.bookingform.gift_card.message_remove_gift_card'))), additionalClasses: 'hidden mb-base'}, null, opt_ijData)) + '<!-- ********************************* COUPON ******************************** -->' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.couponCode({couponCodeData: opt_data.dealsAndDiscountsData.coupon}, null, opt_ijData)) + '<!-- ********************************* WELCOME REWARDS ******************************** -->' + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeem({loyaltyRewardsRedeemData: opt_data.dealsAndDiscountsData.loyaltyRewards, loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig, baseConfig: opt_data.baseConfig}, null, opt_ijData)) + '<!-- ********************************* GENERAL ******************************** -->' + ((! opt_data.dealsAndDiscountsData.coupon && ! opt_data.dealsAndDiscountsData.loyaltyRewards && opt_data.dealsAndDiscountsData.couponsEnabled) ? (opt_data.loyaltyRewardsConfig) ? '<p id="hc-cannot-redeem-discount-message" class="fs-base">' + soy.$$escapeHtml(dio.i18n('booking.postpayment.hc.rewards.redeem.text', opt_data.loyaltyRewardsConfig.brandName)) + '</p>' : '<p class="fs-base">' + soy.$$escapeHtml(dio.i18n('booking.postpayment.no_coupon_redeem.text')) + '</p>' : '<p id="one-discount-per-booking-disclaimer" class="mt-small pt-small fs-small">' + soy.$$escapeHtml(dio.i18n('tsbooking.financial.discounts.oneDiscountPerBooking')) + '</p>'))}, null, opt_ijData)) + '<div id="discount-progress-overlay" class="bdra-big bd-rad-none--xs"><span><em id="discount-progress-text"></em></span></div></div>' + soy.$$escapeHtml('') + soy.$$escapeHtml(''));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.dealsAndDiscounts.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.dealsAndDiscounts';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.loyaltyrewardsredeem.loyaltyrewardsredeem.js*/
// This file was automatically generated from loyalty-rewards-redeem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeem = function(opt_data, opt_ignored, opt_ijData) {
  var output = soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemClientData(null, null, opt_ijData)) + '<div id="loyalty-rewards-option-container" class="clearfix">';
  if (opt_data.loyaltyRewardsRedeemData) {
    var redeemableNightsCount__soy7 = opt_data.loyaltyRewardsRedeemData.redeemableNights ? opt_data.loyaltyRewardsRedeemData.redeemableNights.length : 0;
    var isOptionDisabled__soy8 = opt_data.loyaltyRewardsRedeemData.maxNumberOfRedeemableNights == 0;
    var isSingleRedeemableNight__soy9 = redeemableNightsCount__soy7 == 1;
    var termsAndConditionsLinkText__soy10 = '' + ('' + dio.i18n('tsbooking.financial.discounts.termsAndConditions'));
    termsAndConditionsLinkText__soy10 = soydata.$$markUnsanitizedTextForInternalBlocks(termsAndConditionsLinkText__soy10);
    var loyaltyRewardsLogo__soy12 = '<div class="top-separator pt-base"><em>' + soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.liveText(null, null, opt_ijData)) + '</em></div>';
    loyaltyRewardsLogo__soy12 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(loyaltyRewardsLogo__soy12);
    output += '<div id="loyalty-rewards-redeem-container" class="discount-option fs-small' + soy.$$escapeHtmlAttribute(isOptionDisabled__soy8 ? ' loyalty-rewards-redeem-disabled disabled' : '') + soy.$$escapeHtmlAttribute(isSingleRedeemableNight__soy9 ? ' single-redeemable-night' : '') + '">' + soy.$$escapeHtml(loyaltyRewardsLogo__soy12) + '<div class="discount-option-name-container mb-tiny mt-base">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.radio({fieldProperties: {name: 'discountSelector', value: 'loyaltyRewards'}, id: 'deals-and-discounts-loyalty-rewards-selector', classes: 'discount-option-radio', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<span id="loyalty-rewards-redeem-intro-text">' + ((isSingleRedeemableNight__soy9) ? soy.$$filterNoAutoescape(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.singleNightRedeem' + opt_data.loyaltyRewardsConfig.freeWording, '<span class="c-loyalty fw-bold">', '</span>')) + '<br />' + soy.$$escapeHtml(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.amountOfSavingSingleNight' + opt_data.loyaltyRewardsConfig.freeWording, opt_data.loyaltyRewardsRedeemData.redeemableNights[0].rewardAmount)) : soy.$$filterNoAutoescape(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.multipleNightRedeem' + opt_data.loyaltyRewardsConfig.freeWording, '<span class="c-loyalty fw-bold">', opt_data.loyaltyRewardsRedeemData.maxNumberOfRedeemableNights, '</span>'))) + ((opt_data.loyaltyRewardsConfig.rewardsRedemptionFeeEnabled) ? ' ' + soy.$$escapeHtml(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.fixedFee')) : '') + '</span>'), disabled: isOptionDisabled__soy8}, null, opt_ijData)) + '</div>' + ((isSingleRedeemableNight__soy9) ? '<p class="ml-big mt-small">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({linkText: termsAndConditionsLinkText__soy10, href: opt_data.baseConfig.termsAndConditionsUrl, dataTitle: termsAndConditionsLinkText__soy10}, null, opt_ijData)) + '</p>' : '') + ((! isOptionDisabled__soy8 && redeemableNightsCount__soy7 != 0) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'error', isEmphasised: true, id: 'loyalty-rewards-error-message', content: ''}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemForm({loyaltyRewardsRedeemData: opt_data.loyaltyRewardsRedeemData, loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig, isSingleRedeemableNight: isSingleRedeemableNight__soy9, termsAndConditionsLinkText: termsAndConditionsLinkText__soy10, termsAndConditionsUrl: opt_data.baseConfig.termsAndConditionsUrl}, null, opt_ijData)) : '') + '</div>' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemAppliedInfoBox({loyaltyRewardsLogo: loyaltyRewardsLogo__soy12, termsAndConditionsUrl: opt_data.baseConfig.termsAndConditionsUrl, termsAndConditionsLinkText: termsAndConditionsLinkText__soy10}, null, opt_ijData));
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeem.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeem';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.loyaltyrewardsredeem.loyaltyrewardsredeemclientdata.js*/
// This file was automatically generated from loyalty-rewards-redeem-client-data.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemClientData = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml(''));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemClientData.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemClientData';
}

/*! generated/hcom.templates.pages.cop.common.togglewidget.js*/
// This file was automatically generated from toggle-widget.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }


hcom.templates.pages.cop.common.toggleWidget = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '';
  var _tag__soy3 = ($$temp = opt_data.tag) == null ? 'div' : $$temp;
  var _speed__soy4 = ($$temp = opt_data.speed) == null ? 'normal' : $$temp;
  var _toggleClass__soy5 = 'widget-toggle' + ((opt_data.toggleClass) ? ' ' + ('' + opt_data.toggleClass) : '') + ((opt_data.isAutoOpen) ? ' widget-toggle-open' : '');
  _toggleClass__soy5 = soydata.$$markUnsanitizedTextForInternalBlocks(_toggleClass__soy5);
  var _toggleBdClass__soy14 = 'widget-toggle-bd' + ((opt_data.toggleBdClass) ? ' ' + ('' + opt_data.toggleBdClass) : '');
  _toggleBdClass__soy14 = soydata.$$markUnsanitizedTextForInternalBlocks(_toggleBdClass__soy14);
  var autoOpen__soy20 = '' + ((opt_data.isAutoOpen) ? ' data-widget-toggle-auto-open="true"' : '');
  autoOpen__soy20 = soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(autoOpen__soy20);
  var toggleBdStyle__soy24 = '' + ((opt_data.isAutoOpen) ? ' style="display: block;"' : '');
  toggleBdStyle__soy24 = soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(toggleBdStyle__soy24);
  var responsive__soy28 = '' + ((opt_data.isResponsive) ? ' data-widget-toggle-responsive="true"' : '');
  responsive__soy28 = soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(responsive__soy28);
  var buttonDataAttributes__soy32 = '' + ((opt_data.buttonClasses) ? ' data-widget-toggle-btn-classes="' + soy.$$escapeHtmlAttribute(opt_data.buttonClasses) + '"' : '');
  buttonDataAttributes__soy32 = soydata.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks(buttonDataAttributes__soy32);
  output += '<' + soy.$$filterNoAutoescape(_tag__soy3) + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" ' : '') + ' class="' + soy.$$escapeHtmlAttribute(_toggleClass__soy5) + '"' + soy.$$filterHtmlAttributes(buttonDataAttributes__soy32) + '><div class="' + soy.$$escapeHtmlAttribute(_toggleBdClass__soy14) + '" data-widget-toggle-text="' + soy.$$escapeHtmlAttribute(opt_data.buttonText) + '" data-widget-toggle-speed="' + soy.$$escapeHtmlAttribute(_speed__soy4) + '"' + soy.$$filterHtmlAttributes(toggleBdStyle__soy24) + soy.$$filterHtmlAttributes(autoOpen__soy20) + soy.$$filterHtmlAttributes(responsive__soy28) + '>' + soy.$$filterNoAutoescape(opt_data.content) + '</div></' + soy.$$filterNoAutoescape(_tag__soy3) + '>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.toggleWidget.soyTemplateName = 'hcom.templates.pages.cop.common.toggleWidget';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.loyaltylogo.js*/
// This file was automatically generated from loyalty-logo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyLogo = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$filterNoAutoescape(dio.i18n('tsbooking.financial.discounts.redeemWelcomerewards', opt_data.logo)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyLogo.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyLogo';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.loyaltyrewardsredeem.loyaltyrewardsredeemappliedinfobox.js*/
// This file was automatically generated from loyalty-rewards-redeem-applied-info.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.
 * @hassoydelcall {mvt6073.emailNotification}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemAppliedInfoBox = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="loyalty-rewards-applied-info" class="fs-base">';
  var loyaltyRewardsSavingContainer__soy4 = '<span id="loyalty-rewards-saved-value"></span>';
  loyaltyRewardsSavingContainer__soy4 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(loyaltyRewardsSavingContainer__soy4);
  output += soy.$$escapeHtml(opt_data.loyaltyRewardsLogo) + soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'assurance', isEmphasised: true, id: 'loyalty-applied-message', additionalClasses: 'mv-base', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<p id="loyalty-rewards-saving-text" class="mb-small"><em>' + soy.$$filterNoAutoescape(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.amountOfSaving', loyaltyRewardsSavingContainer__soy4)) + '</em></p><p id="loyalty-rewards-redeemed-nights"></p>' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6073.emailNotification'), '', true)(null, null, opt_ijData)))}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.removeDiscount'))), type: 'submit', isSecondary: true, id: 'loyalty-rewards-remove-button', additionalClasses: 'pv-tiny w-full mb-small remove-discount-btn'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({linkText: opt_data.termsAndConditionsLinkText, href: opt_data.termsAndConditionsUrl, dataTitle: opt_data.termsAndConditionsLinkText, additionalClasses: 'fs-small'}, null, opt_ijData)) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemAppliedInfoBox.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemAppliedInfoBox';
}

/*! generated/hcom.templates.pages.cop.common.links.externallink.js*/
// This file was automatically generated from external-link.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.common.links.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.common == 'undefined') { hcom.templates.pages.cop.common = {}; }
if (typeof hcom.templates.pages.cop.common.links == 'undefined') { hcom.templates.pages.cop.common.links = {}; }


hcom.templates.pages.cop.common.links.externalLink = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLinkOpenTag(opt_data, null, opt_ijData)) + soy.$$escapeHtml(opt_data.linkText) + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLinkCloseTag(null, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.links.externalLink.soyTemplateName = 'hcom.templates.pages.cop.common.links.externalLink';
}

/*! generated/hcom.templates.pages.cop.bookingform.dealsanddiscounts.loyaltyrewardsredeem.loyaltyrewardsredeemform.js*/
// This file was automatically generated from loyalty-rewards-redeem-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem == 'undefined') { hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem = {}; }


hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemForm = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<form id="loyalty-rewards-redeem-form" class="discount-option-active-content"><p class="multi-room-note c-note fs-base">' + soy.$$escapeHtml(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.applyToFirstRoom')) + '</p><ul id="loyalty-rewards-redeemable-nights" class="mv-base">';
  var redeemableNightList15 = opt_data.loyaltyRewardsRedeemData.redeemableNights;
  var redeemableNightListLen15 = redeemableNightList15.length;
  for (var redeemableNightIndex15 = 0; redeemableNightIndex15 < redeemableNightListLen15; redeemableNightIndex15++) {
    var redeemableNightData15 = redeemableNightList15[redeemableNightIndex15];
    output += '<li>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: redeemableNightData15, id: 'deals-and-discounts-loyalty-rewards-night-' + redeemableNightIndex15, label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$filterNoAutoescape(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.freeNightValue' + opt_data.loyaltyRewardsConfig.freeWording, '<span class="fw-bold">' + redeemableNightData15.rewardAmount + '</span>'))), skipValidationMarkup: true}, null, opt_ijData)) + '</li>';
  }
  output += '</ul>' + ((! opt_data.isSingleRedeemableNight) ? '<p id="loyalty-redeem-minimum" class="fs-base mb-tiny">' + soy.$$filterNoAutoescape(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.selectionMinimum' + opt_data.loyaltyRewardsConfig.freeWording, '<span class="fw-bold">', '</span>')) + '</p><p id="loyalty-rewards-pending-credits-count-text" class="mb-small fs-base">' + soy.$$filterNoAutoescape(dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.saveAndEarn', '', 0, '')) + '</p>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'warning', isEmphasised: true, id: 'loyalty-exceeded-warning-message', additionalClasses: 'mv-base', content: dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.selectionMaximumExceeded', opt_data.loyaltyRewardsRedeemData.maxNumberOfRedeemableNights)}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'error', isEmphasised: true, id: 'loyalty-exceeded-error-message', additionalClasses: 'mv-base', content: dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.selectionMaximum', opt_data.loyaltyRewardsRedeemData.maxNumberOfRedeemableNights)}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.redeemNights'))), type: 'submit', id: 'loyalty-rewards-apply-btn', additionalClasses: 'pv-tiny fs-base w-full mb-base'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.dealsAndDiscounts.loyaltyRewardsRedeem.cancel'))), type: 'submit', isSecondary: true, id: 'loyalty-cancel-btn', additionalClasses: 'pv-tiny fs-base w-full'}, null, opt_ijData)) + '<p class="terms-and-conditions mt-small">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({linkText: opt_data.termsAndConditionsLinkText, href: opt_data.termsAndConditionsUrl, dataTitle: opt_data.termsAndConditionsLinkText}, null, opt_ijData)) + '</p>' : '') + '</form>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemForm.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.dealsAndDiscounts.loyaltyRewardsRedeem.loyaltyRewardsRedeemForm';
}

/*! generated/hcom.templates.pages.cop.bookingform.homedetails.statefield.js*/
// This file was automatically generated from state-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.homeDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.homeDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.homeDetails = {}; }


hcom.templates.pages.cop.bookingForm.homeDetails.stateField = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.fieldProperties.options && opt_data.fieldProperties.options.length > 0) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.select({fieldProperties: opt_data.fieldProperties, id: 'home-details-state', containerId: 'home-details-state-container', label: opt_data.label, errorTitle: opt_data.label}, null, opt_ijData)) : soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.fieldProperties, id: 'home-details-state', containerId: 'home-details-state-container', label: opt_data.label, errorTitle: opt_data.label, maxlength: 255}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.homeDetails.stateField.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.homeDetails.stateField';
}

/*! generated/hcom.templates.pages.cop.bookingform.loyaltyrewards.createaccountdialup.js*/
// This file was automatically generated from create-account-dial-up.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.loyaltyRewards.
 * @hassoydelcall {mvt6662.createAccountDialUpAssets}
 * @hassoydelcall {mvt6662.disclosureBenefits}
 * @hassoydelcall {mvt6662.wrloyaltycard_light}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.loyaltyRewards == 'undefined') { hcom.templates.pages.cop.bookingForm.loyaltyRewards = {}; }


hcom.templates.pages.cop.bookingForm.loyaltyRewards.createAccountDialUp = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6662.createAccountDialUpAssets'), '', true)(null, null, opt_ijData));
  var containerClasses__soy4 = 'bg-light mb-giant mb-none--xs mh-small mh-none--xs' + ((opt_data.isHidden) ? ' hidden' : '');
  containerClasses__soy4 = soydata.$$markUnsanitizedTextForInternalBlocks(containerClasses__soy4);
  output += '<div id="loyalty-rewards-dial-up-create-account" class="' + soy.$$escapeHtmlAttribute(containerClasses__soy4) + '"><div class="messages-container ph-overflow-cont pv-med hidden--ml hidden--s-m hidden--xs">';
  var loyaltyDialUpEnabled__soy12 = ($$temp = opt_data.loyaltyRewardsConfig && opt_data.loyaltyRewardsConfig.loyaltyDialUpEnabled) == null ? false : $$temp;
  var isLoyaltyCardDisplayed__soy13 = ($$temp = opt_data.loyaltyData && opt_data.loyaltyData.isLoyaltyCardDisplayed) == null ? false : $$temp;
  output += ((loyaltyDialUpEnabled__soy12 && isLoyaltyCardDisplayed__soy13) ? soy.$$escapeHtml(hcom.templates.modules.wrloyaltycard({additionalClasses: 'loyalty-rewards-dial-up', withHeader: false, pointCard: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.modules.wrpointcard({earnedCreditsCount: opt_data.loyaltyData.earnedCreditsCount, pendingCreditsCount: opt_data.loyaltyData.pendingCreditsCount, showText: opt_data.loyaltyRewardsConfig.freeTextVisible, additionalClasses: 'smaller bdra-big'}, null, opt_ijData)))}, null, opt_ijData)) : '') + '<ul class="check-point-list bullet-loyalty fs-base mt-big"><li><em>' + soy.$$escapeHtml(dio.i18n('booking.loyalty.promo.collect_and_earn' + opt_data.loyaltyRewardsConfig.freeWording)) + '</em></li><li><em>' + soy.$$escapeHtml(dio.i18n('booking.loyalty.promo.secret_prices')) + '</em></li><li><em>' + soy.$$escapeHtml(dio.i18n('booking.loyalty.promo.book_faster')) + '</em></li></ul></div><div class="password-fields-container ph-overflow-cont pv-med"><p class="fs-med join-message c-loyalty"><em>' + soy.$$escapeHtml(dio.i18n('booking.loyalty.promo.title.no_free', opt_data.loyaltyRewardsConfig.brandName)) + '</em></p><p class="c-note fw-normal fs-base">' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.optional')) + '</p><p class="mt-small c-loyalty-dark fw-bold hidden--l-xl">' + soy.$$escapeHtml(dio.i18n('booking.loyalty.promo.collect_and_earn' + opt_data.loyaltyRewardsConfig.freeWording)) + '</p>' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6662.wrloyaltycard_light'), '', true)(opt_data, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.createAccountData.passwordField, id: 'txt_password', label: dio.i18n('fastbooking.signIn.signedOut.label.createPassword'), explanation: dio.i18n('tsbooking.step1.sign_in.passwordrules'), type: 'password', maxlength: 20, classes: 'medium', verticalError: true, containerClasses: 'mt-big'}, null, opt_ijData)) + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6662.disclosureBenefits'), '', true)(opt_data, null, opt_ijData)) + '</div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.loyaltyRewards.createAccountDialUp.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.loyaltyRewards.createAccountDialUp';
}

/*! generated/hcom.templates.pages.cop.bookingform.loyaltyrewards.loyaltycard.js*/
// This file was automatically generated from loyalty-card.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.loyaltyRewards.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.loyaltyRewards == 'undefined') { hcom.templates.pages.cop.bookingForm.loyaltyRewards = {}; }


hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCard = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.modules.wrloyaltycard({additionalClasses: soydata.$$markUnsanitizedTextForInternalBlocks('loyalty-rewards-dial-up bdra-big ' + ('' + (($$temp = opt_data.additionalClasses) == null ? '' : $$temp))), isHorizontal: true, withAlternatedColours: true, premiumLevel: soydata.$$markUnsanitizedTextForInternalBlocks('' + ((opt_data.loyaltyData.isSilverLevel) ? 'silver' : (opt_data.loyaltyData.isGoldLevel) ? 'gold' : '')), pointCard: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.modules.wrpointcard({earnedCreditsCount: opt_data.loyaltyData.earnedCreditsCount, pendingCreditsCount: opt_data.loyaltyData.pendingCreditsCount, showText: opt_data.loyaltyRewardsConfig.freeTextVisible}, null, opt_ijData))), loyaltyMessage: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.modules.wrloyaltymessage({mainMessage: opt_data.loyaltyData.loyaltyCardMainMessage, additionalMessage: opt_data.loyaltyData.loyaltyCardAdditionalMessage, subMessage: opt_data.loyaltyData.loyaltyCardSubMessage}, null, opt_ijData)))}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCard.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCard';
}

/*! generated/hcom.templates.pages.cop.bookingform.loyaltyrewards.loyaltycarddialup.js*/
// This file was automatically generated from loyalty-card-dial-up.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.loyaltyRewards.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.loyaltyRewards == 'undefined') { hcom.templates.pages.cop.bookingForm.loyaltyRewards = {}; }


hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCardDialUp = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.modules.wrloyaltycard({additionalClasses: soydata.$$markUnsanitizedTextForInternalBlocks('loyalty-rewards-dial-up bdra-big' + ((! opt_data.signedIn) ? ' mb-base dial-up-loyalty-card mh-big mh-med--ml mh-med--s-m mh-base--xs' : '')), isHorizontal: true, pointCard: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.modules.wrpointcard({earnedCreditsCount: opt_data.loyaltyData.earnedCreditsCount, pendingCreditsCount: opt_data.loyaltyData.pendingCreditsCount, showText: opt_data.loyaltyRewardsConfig.freeTextVisible}, null, opt_ijData))), loyaltyMessage: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.modules.wrloyaltymessage({mainMessage: opt_data.loyaltyData.loyaltyCardMainMessage, additionalMessage: opt_data.loyaltyData.loyaltyCardAdditionalMessage, subMessage: opt_data.loyaltyData.loyaltyCardSubMessage}, null, opt_ijData)))}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCardDialUp.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCardDialUp';
}

/*! generated/hcom.templates.pages.cop.bookingform.loyaltyrewards.notsignedin.js*/
// This file was automatically generated from not-signed-in.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.loyaltyRewards.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.loyaltyRewards == 'undefined') { hcom.templates.pages.cop.bookingForm.loyaltyRewards = {}; }


hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedIn = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.flowSelector({loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig, createAccount: opt_data.sicaData.createAccount}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.signInForm({signInData: opt_data.sicaData.signIn, protectionData: opt_data.protectionData}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordForm({forgottenPasswordData: opt_data.sicaData.forgottenPassword, baseConfig: opt_data.baseConfig}, null, opt_ijData)) + ((opt_data.sicaData.createAccount) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.createAccountForm({createAccountData: opt_data.sicaData.createAccount, termsAndConditionsUrl: opt_data.baseConfig.termsAndConditionsUrl, loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig}, null, opt_ijData)) : ''));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedIn.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedIn';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.flowselector.js*/
// This file was automatically generated from flow-selector.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.sica.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.sica == 'undefined') { hcom.templates.pages.cop.bookingForm.sica = {}; }


hcom.templates.pages.cop.bookingForm.sica.flowSelector = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '' + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + '<div class="sica-flow-selector-form fs-base ph-default-cont"><h2 class="hidden--xs">' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.signIn')) + ' <span class="c-note fw-normal fs-med">' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.optional')) + '</span></h2><div class="sica-control-panel-copy-block">';
  var freeWordingOpenTag__soy14 = '<span class="sica-control-panel-copy">';
  freeWordingOpenTag__soy14 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(freeWordingOpenTag__soy14);
  var freeWordingCloseTag__soy16 = '</span>';
  freeWordingCloseTag__soy16 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(freeWordingCloseTag__soy16);
  output += '<div class="hidden--xs"><div class="sica-buttons">' + ((opt_data.createAccount) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.signInCreateAccountButton({signInOpenTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag({additionalClasses: 'sica-sign-in-control-btn', isTextual: true}, null, opt_ijData))), signInCloseTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData))), createAccountOpenTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag({additionalClasses: 'sica-create-account-control-btn', isTextual: true}, null, opt_ijData))), createAccountCloseTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData)))}, null, opt_ijData)) + ' ' : soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag({additionalClasses: 'sica-sign-in-control-btn', isTextual: true}, null, opt_ijData)) + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.collapsed.text.faster.booking')) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData))) + '</div>' + ((opt_data.loyaltyRewardsConfig && ! opt_data.loyaltyRewardsConfig.loyaltyDialUpEnabled) ? soy.$$filterNoAutoescape(dio.i18n('fastbooking.sica.welcomerewards.collectmessage' + opt_data.loyaltyRewardsConfig.freeWording, freeWordingOpenTag__soy14, freeWordingCloseTag__soy16)) + ' <a href="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.loyaltyRewardsConfig.pillarPageUrl)) + '" target="_blank">' + soy.$$escapeHtml(dio.i18n('profiles.loyalty.learnmore' + opt_data.loyaltyRewardsConfig.freeWording)) + '</a> ' + soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.liveText(null, null, opt_ijData)) : '') + '</div><div class="hidden--s-m hidden--ml hidden--l-xl"><div class="sica-buttons">' + ((opt_data.createAccount) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.signInCreateAccountButton({signInOpenTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag({additionalClasses: 'sica-sign-in-control-btn', isTextual: true}, null, opt_ijData))), signInCloseTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData))), createAccountOpenTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag({additionalClasses: 'sica-create-account-control-btn', isTextual: true}, null, opt_ijData))), createAccountCloseTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData))), mobile: true, optionalTextOpenTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(' <span class="c-note">'), optionalTextCloseTag: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('</span>')}, null, opt_ijData)) + ' ' : soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonOpenTag({additionalClasses: 'sica-sign-in-control-btn', isTextual: true}, null, opt_ijData)) + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.collapsed.text.faster.booking')) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButtonCloseTag(null, null, opt_ijData)) + ' ' + soy.$$escapeHtml(dio.i18n('fastbooking.text.optional')) + ' ') + '</div>' + ((opt_data.loyaltyRewardsConfig && ! opt_data.loyaltyRewardsConfig.loyaltyDialUpEnabled) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.mobileCollectMessage({freeWordingOpenTag: freeWordingOpenTag__soy14, freeWordingCloseTag: freeWordingCloseTag__soy16, loyaltyRewardsLogo: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.liveText(null, null, opt_ijData)))}, null, opt_ijData)) : '') + '</div><hr class="mt-base hidden--s-m hidden--xs"></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.flowSelector.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.flowSelector';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.forgottenpasswordform.js*/
// This file was automatically generated from forgotten-password-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.sica.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.sica == 'undefined') { hcom.templates.pages.cop.bookingForm.sica = {}; }


hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordForm = function(opt_data, opt_ignored, opt_ijData) {
  var output = '' + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('');
  var sicaContainerClasses__soy6 = opt_data.hideTitle ? 'sica-forgotten-password-form' : 'sica-forgotten-password-form ph-default-cont';
  output += '<form class="' + soy.$$escapeHtmlAttribute(sicaContainerClasses__soy6) + '" action="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.forgottenPasswordData.resetPasswordURL)) + '" novalidate="true"><div class="sica-forgotten-password-error js-placeholder"></div>' + ((! opt_data.hideTitle) ? '<h2>' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.signIn')) + ' <i class="c-note fs-med fw-normal">' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.optional')) + '</i></h2>' : '') + '<p class="fs-base mb-small">' + soy.$$escapeHtml(dio.i18n('profiles.forgottenpassword.email.instructions.brand', opt_data.baseConfig.brandName)) + '</p>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.forgottenPasswordData.emailAddressField, id: 'sica-forgotten-password-email', label: dio.i18n('fastbooking.label.emailAddress'), type: 'email'}, null, opt_ijData)) + '<div class="ta-r">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: dio.i18n('fastbooking.welcomerewards.link.cancel'), additionalClasses: 'sica-cancel-forgot-password-btn mr-base', isTextual: true}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({type: 'submit', content: dio.i18n('profiles.forgottenpassword.email.button_reset'), additionalClasses: 'sica-reset-password-btn', isStrong: true}, null, opt_ijData)) + '</div><hr class="mt-base hidden--s-m hidden--xs"></form>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordForm.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordForm';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.signinform.js*/
// This file was automatically generated from sign-in-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.sica.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.sica == 'undefined') { hcom.templates.pages.cop.bookingForm.sica = {}; }


hcom.templates.pages.cop.bookingForm.sica.signInForm = function(opt_data, opt_ignored, opt_ijData) {
  var output = '' + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('');
  var sicaContainerClasses__soy9 = opt_data.hideTitle ? 'sica-sign-in-form' : 'sica-sign-in-form ph-default-cont';
  output += '<form class="' + soy.$$escapeHtmlAttribute(sicaContainerClasses__soy9) + '" novalidate="true" autocomplete="off"><div class="sica-sign-in-error js-placeholder"></div>' + ((! opt_data.hideTitle) ? '<h2>' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.signIn')) + ' <span class="c-note fw-normal fs-med">' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.link.text.optional')) + '</span></h2>' : '') + '<div class="sica-sign-in-notification js-placeholder"></div>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.signInData.emailAddressField, id: 'mobile_booking_login_email_addr', type: 'email', label: dio.i18n('fastbooking.label.emailAddress')}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.signInData.passwordField, id: 'mobile_booking_login_passwd', label: dio.i18n('fastbooking.signIn.signedOut.label.password'), type: 'password'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: opt_data.signInData.rememberMeField, id: 'sica-remember-me', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<em>' + soy.$$escapeHtml(dio.i18n('fastbooking.sign_in.stay_signed_in', '', '')) + '</em>'), skipValidationMarkup: true}, null, opt_ijData)) + ((opt_data.protectionData) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.nudataProtectionWidget({id: 'sign-in-form-protection-widget', createContainer: true, containerClasses: 'mb-base', actions: opt_data.protectionData.actions, protectionWidgetData: opt_data.protectionData.signinFormWidget}, null, opt_ijData)) : '') + '<div class="ta-r">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: dio.i18n('account.forgot_password.forgot_password', '', ''), additionalClasses: 'sica-forgotten-password-btn mb-base', isTextual: true}, null, opt_ijData)) + '<br>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: dio.i18n('fastbooking.welcomerewards.link.cancel'), additionalClasses: 'sica-cancel-sign-in-btn mr-base', isTextual: true}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({type: 'submit', content: dio.i18n('fastbooking.signIn.signedOut.link.text.signIn'), additionalClasses: 'sica-sign-in-btn', title: dio.i18n('fastbooking.signIn.hint.enterEmailAndPass'), isStrong: true, isDisabledByDefault: true}, null, opt_ijData)) + '</div><hr class="mt-base hidden--s-m hidden--xs"></form>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.signInForm.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.signInForm';
}

/*! generated/hcom.templates.pages.cop.bookingform.loyaltyrewards.notsignedindialup.js*/
// This file was automatically generated from not-signed-in-dial-up.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.loyaltyRewards.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.loyaltyRewards == 'undefined') { hcom.templates.pages.cop.bookingForm.loyaltyRewards = {}; }


hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedInDialUp = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var signInText__soy3 = '' + dio.i18n('fastbooking.signIn.signedOut.link.text.signIn') + ' ' + ('' + dio.i18n('fastbooking.signIn.signedOut.link.text.optional'));
  signInText__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(signInText__soy3);
  output += '<div class="not-signed-in-dial-up-new mh-big mh-med--ml mh-med--s-m mh-base--xs">' + ((opt_data.loyaltyData.isLoyaltyCardDisplayed) ? '<div id="loyalty-card-encouragement" class="mb-small"><span id="loyalty-card-main-message" class="main-message mr-small">' + soy.$$escapeHtml(opt_data.loyaltyData.loyaltyCardMainMessage) + '</span>' + soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.liveText(null, null, opt_ijData)) + '</div>' : '') + '<div id="sign-in-widget" class="widget-toggle mb-giant" data-widget-toggle-btn-classes="fw-bold fs-base sica-sign-in-control-btn" data-widget-toggle-event-id="sign-in-widget"><div class="widget-toggle-bd fs-base" data-widget-toggle-text="' + soy.$$escapeHtmlAttribute(signInText__soy3) + '" data-widget-toggle-speed="normal">' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.signInForm({signInData: opt_data.sicaData.signIn, protectionData: opt_data.protectionData, hideTitle: true}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordForm({forgottenPasswordData: opt_data.sicaData.forgottenPassword, baseConfig: opt_data.baseConfig, hideTitle: true}, null, opt_ijData)) + '</div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedInDialUp.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedInDialUp';
}
