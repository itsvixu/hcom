/*! generated/hcom.templates.pages.cop.bookingform.paymentdetails.installments.js*/
// This file was automatically generated from installments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.paymentDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.paymentDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.paymentDetails = {}; }


hcom.templates.pages.cop.bookingForm.paymentDetails.installments = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.installments.options.length > 1) ? ((opt_data.installments.noInterestsMessage) ? '<p class="c-discount fw-bold fs-med mb-base with-small-icon icon-confirm">' + soy.$$escapeHtml(opt_data.installments.noInterestsMessage) + '</p>' : '') + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.radioList({label: dio.i18n('fastbooking.installments.label'), fieldProperties: opt_data.installments, containerClasses: 'mb-base'}, null, opt_ijData)) : '');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.paymentDetails.installments.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.paymentDetails.installments';
}

/*! generated/hcom.templates.pages.cop.bookingform.paymentdetails.installmentsinfo.js*/
// This file was automatically generated from installments-info.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.paymentDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.paymentDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.paymentDetails = {}; }


hcom.templates.pages.cop.bookingForm.paymentDetails.installmentsInfo = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var extraClasses__soy3 = '' + ((opt_data.additionalClasses) ? ' ' + ('' + opt_data.additionalClasses) : '') + (((opt_data.panelContent == null) ? null : opt_data.panelContent.highlight) ? ' no-js-hidden' : '');
  extraClasses__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(extraClasses__soy3);
  output += '<div class="installments-info mb-base' + soy.$$escapeHtmlAttribute(extraClasses__soy3) + '">' + (((opt_data.panelContent == null) ? null : opt_data.panelContent.highlight) ? '<h4>' + soy.$$escapeHtml(opt_data.panelContent.highlight.title) + '</h4><img class="w-full di-b hidden--s hidden--xs" src="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeMediaUri(dio.image('/images/common/pages/cop/installments-bank-logos.svg'))) + '" alt="Citibanamex, BBVA Bancomer, Banorte" title=""><p class="mb-small">' + soy.$$escapeHtml(opt_data.panelContent.highlight.bankInfo) + '</p><p class="mb-small">' + soy.$$escapeHtml(opt_data.panelContent.highlight.otherBanksInfo) + '</p>' : (opt_data.installments.options && opt_data.installments.options.length > 1) ? (((opt_data.selectedOptionDetails == null) ? null : opt_data.selectedOptionDetails.description) ? '<p class="installments-option-message mb-small">' + soy.$$escapeHtml(opt_data.selectedOptionDetails.description) + '</p>' : '') + (((opt_data.selectedOptionDetails == null) ? null : opt_data.selectedOptionDetails.discountMessage) ? '<div class="installments-discount-message-container mb-small">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'info', isEmphasised: true, content: opt_data.selectedOptionDetails.discountMessage}, null, opt_ijData)) + '</div>' : '') + '<p class="mb-small">' + soy.$$escapeHtml(opt_data.installments.creditCardSupportMessage) + '</p><p class="js-hidden mb-small">' + soy.$$escapeHtml(dio.i18n('booking.special.domestic.tax.message')) + '</p><p class="mb-small">' + soy.$$escapeHtml(opt_data.installments.domesticTaxMessage) + '</p>' : '') + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.paymentDetails.installmentsInfo.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.paymentDetails.installmentsInfo';
}

/*! generated/hcom.templates.pages.cop.bookingform.paymentdetails.mastercarddiscountmessage.js*/
// This file was automatically generated from mastercard-discount-message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.paymentDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.paymentDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.paymentDetails = {}; }


hcom.templates.pages.cop.bookingForm.paymentDetails.masterCardDiscountMessage = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'warning', additionalClasses: 'mastercard-discount-message mb-med hidden', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class=\'header fs-base mb-base\'><span class=\'payment-sprite payment-method-logo-small MASTERCARD\'></span>' + soy.$$escapeHtml(dio.i18n('booking.save_mastercard.discount_heading')) + '</div><div class=\'message\'><p class=\'mb-base\'>' + soy.$$escapeHtml(dio.i18n('booking.save_mastercard.dicount_code', '')) + '</p><p class=\'coupon-code mv-base pa-base bg-white di-ib fs-med\'>' + soy.$$escapeHtml(opt_data.masterCardPromotion.couponCode) + '</p><p class=\'mt-base\'>' + soy.$$escapeHtml(dio.i18n('booking.save_mastercard.type_discount_code')) + '<br>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({linkText: dio.i18n('booking.save_mastercard.terms_and_conditions'), href: opt_data.masterCardPromotion.termsAndConditionsUrl}, null, opt_ijData)) + '</p></div>')}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.paymentDetails.masterCardDiscountMessage.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.paymentDetails.masterCardDiscountMessage';
}

/*! generated/hcom.templates.pages.cop.bookingform.paymentdetails.mastercardpromotionmessage.js*/
// This file was automatically generated from mastercard-promotion-message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.paymentDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.paymentDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.paymentDetails = {}; }


hcom.templates.pages.cop.bookingForm.paymentDetails.masterCardPromotionMessage = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'warning', additionalClasses: 'mastercard-promo-message mb-med', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<div class=\'header fs-base mb-base\'><span class=\'payment-sprite payment-method-logo-small MASTERCARD\'></span>' + soy.$$escapeHtml(dio.i18n('booking.save_mastercard.heading')) + '</div><div class=\'message\'>' + ((opt_data.isUserSignedIn) ? soy.$$escapeHtml(dio.i18n('booking.save_mastercard.save_card')) : soy.$$escapeHtml(dio.i18n('booking.save_mastercard.sign_in_and_save_card'))) + '</div>')}, null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.paymentDetails.masterCardPromotionMessage.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.paymentDetails.masterCardPromotionMessage';
}

/*! generated/hcom.templates.pages.cop.bookingform.paymentdetails.securepayment.js*/
// This file was automatically generated from secure-payment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.paymentDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.paymentDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.paymentDetails = {}; }


hcom.templates.pages.cop.bookingForm.paymentDetails.securePayment = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var widgetClass__soy3 = opt_data.useModalOverlay ? 'widget-modaloverlay' : 'widget-overlay';
  output += '<div id="secure-payment" class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '"><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-hd">' + soy.$$escapeHtml(dio.i18n('fastbooking.cc.auth.3ds.overlay.title')) + '</div><div class="' + soy.$$escapeHtmlAttribute(widgetClass__soy3) + '-bd"><div class="primary-info"><h3>' + soy.$$escapeHtml(dio.i18n('fastbooking.cc.auth.3ds.overlay.hotels')) + '</h3>' + soy.$$filterNoAutoescape(dio.i18n('fastbooking.cc.auth.3ds.overlay.description', '<span class="selected-cardtype">' + opt_data.creditCardType + '</span>', '<a href="#" class="close-button">', '</a>')) + '</div><div class="main-section"><div class="iframe"><iframe></iframe></div><div class="secondary-info">' + soy.$$filterNoAutoescape(dio.i18n('fastbooking.cc.auth.3ds.overlay.refresh', '<a href="#" class="refresh-button">', '</a>')) + '</div></div></div></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.paymentDetails.securePayment.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.paymentDetails.securePayment';
}

/*! generated/hcom.templates.pages.cop.bookingform.roomdetails.roomdetailscollapsed.js*/
// This file was automatically generated from room-details-collapsed.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.roomDetails.
 * @hassoydelcall {mvt2638.collapsedBFRoomDetailsEditBtn}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.roomDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.roomDetails = {}; }


hcom.templates.pages.cop.bookingForm.roomDetails.roomDetailsCollapsed = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="room-details-collapsed" class="ph-default-cont mb-giant"><h2 class="hidden--ml hidden--l-xl">' + soy.$$escapeHtml(dio.i18n('fastbooking.summary.heading.responsive')) + '</h2><div id="room-type-and-occupancy" class="eh-container single-column--xs"><div class="column fixed-width"><p class="fs-big fs-med--s-m fs-med--xs fw-bold mv-small">' + soy.$$escapeHtml(dio.i18n('booking.collapsedBookingForm.roomDetails.heading')) + '</p></div><div class="column fs-base"><p class="mb-small">' + soy.$$escapeHtml(opt_data.roomDetails.roomTypeMsg) + '</p><p class="mb-small">' + soy.$$escapeHtml(dio.i18n('booking.collapsedBookingForm.roomDetails.adults', opt_data.roomDetails.numberOfAdults)) + ((opt_data.roomDetails.numberOfChildren) ? ', ' + soy.$$escapeHtml(dio.i18n('booking.collapsedBookingForm.roomDetails.children', opt_data.roomDetails.numberOfChildren)) : '') + '</p>';
  if (opt_data.roomDetails.amenities) {
    output += '<ul class="check-point-list c-assurance fw-bold">';
    var amenityList22 = opt_data.roomDetails.amenities;
    var amenityListLen22 = amenityList22.length;
    for (var amenityIndex22 = 0; amenityIndex22 < amenityListLen22; amenityIndex22++) {
      var amenityData22 = amenityList22[amenityIndex22];
      output += '<li>' + soy.$$escapeHtml(amenityData22) + '</li>';
    }
    output += '</ul>';
  }
  output += '</div></div><div class="eh-container single-column--xs mt-base"><div class="column fixed-width"><p class="fs-big fs-med--s-m fs-med--xs fw-bold mv-small">' + soy.$$escapeHtml(dio.i18n('booking.collapsedBookingForm.roomDetails.guest')) + '</p></div><div class="column fs-base"><p class="guest-name mb-small">' + soy.$$escapeHtml(opt_data.userData.firstName) + ' ' + soy.$$escapeHtml(opt_data.userData.lastName) + '</p><p class="guest-email mb-small">' + soy.$$escapeHtml(opt_data.userData.emailAddress) + '</p><p class="guest-phone">' + soy.$$escapeHtml(opt_data.userData.phone) + '</p></div></div>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.collapsedBookingForm.editBooking'))), isTextual: true, additionalClasses: 'mt-base', id: 'edit-booking-btn'}, null, opt_ijData)) + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt2638.collapsedBFRoomDetailsEditBtn'), '', true)(null, null, opt_ijData)) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.roomDetails.roomDetailsCollapsed.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.roomDetails.roomDetailsCollapsed';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.createaccountform.js*/
// This file was automatically generated from create-account-form.soy.
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


hcom.templates.pages.cop.bookingForm.sica.createAccountForm = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="sica-create-account-form ph-default-cont"><h2>' + soy.$$escapeHtml(dio.i18n('account.booking.create_an_account')) + ' <span class="c-note fw-normal fs-med">' + soy.$$escapeHtml(dio.i18n('fastbooking.text.optional')) + '</span></h2>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.createAccountData.emailAddressField, id: 'txt_email_address', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(dio.i18n('fastbooking.label.emailAddress'))), explanation: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('fastbooking.welcomerewards.signup.email.explanation'))), type: 'email'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.createAccountData.passwordField, id: 'txt_password', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(dio.i18n('fastbooking.signIn.signedOut.label.password'))), explanation: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('tsbooking.step1.sign_in.passwordrules'))), type: 'password', maxlength: 20}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: opt_data.createAccountData.rememberMeField, id: 'sica-create-account-remember-me', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<em>' + soy.$$escapeHtml(dio.i18n('fastbooking.sign_in.stay_signed_in', '', '')) + '</em>')}, null, opt_ijData)) + ((opt_data.loyaltyRewardsConfig) ? soy.$$escapeHtml(hcom.templates.core.common.hcomrewards.liveText(null, null, opt_ijData)) + '<p class="fs-base fw-bold mt-small mb-small">' + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml('') + soy.$$escapeHtml(dio.i18n('profiles.account_summary.signmeuptogetonefree' + opt_data.loyaltyRewardsConfig.freeWording, '', '')) + '<br />' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.termsAndConditionsLink({termsAndConditionsLink: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.pages.cop.common.links.externalLink({linkText: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('profiles.loyalty.termsandconditions'))), href: opt_data.termsAndConditionsUrl, dataTitle: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('profiles.loyalty.termsandconditions')))}, null, opt_ijData))), learnMoreLink: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<a href="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.loyaltyRewardsConfig.pillarPageUrl)) + '" target="_blank">' + soy.$$escapeHtml(dio.i18n('profiles.loyalty.learnmore' + opt_data.loyaltyRewardsConfig.freeWording)) + '</a>')}, null, opt_ijData)) + '</p>' : '') + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('fastbooking.welcomerewards.link.cancel_create_account'))), additionalClasses: 'sica-cancel-create-account-btn', isTextual: true}, null, opt_ijData)) + '<hr class="mt-base hidden--s-m hidden--xs"></div>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.createAccountForm.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.createAccountForm';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.termsandconditionslink.js*/
// This file was automatically generated from terms-and-conditions-link.soy.
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


hcom.templates.pages.cop.bookingForm.sica.termsAndConditionsLink = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$filterNoAutoescape(dio.i18n('profiles.account_summary.enrollingagreement', opt_data.termsAndConditionsLink, opt_data.learnMoreLink)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.termsAndConditionsLink.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.termsAndConditionsLink';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.forgottenpasswordconfirmation.js*/
// This file was automatically generated from forgotten-password-confirmation.soy.
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


hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordConfirmation = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var emphasizedEmail__soy3 = '<em>' + soy.$$escapeHtml(opt_data.email) + '</em>';
  emphasizedEmail__soy3 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(emphasizedEmail__soy3);
  output += '<div class="forgotten-password-confirmation bdra-big  bdc-assurance bg-assurance c-assurance bd-solid bdwa-tiny ph-base pv-base mb-base fs-base"><div class="with-medium-icon icon-email fw-bold fs-med mb-med">' + soy.$$escapeHtml(dio.i18n('booking.forgottenpassword.confirmation.title')) + '</div><p class="mb-med">' + soy.$$filterNoAutoescape(dio.i18n('booking.forgottenpassword.confirmation.emailsent', emphasizedEmail__soy3)) + '</p>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.toggleWidget({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<ul class="bullets"><li class="pv-small">' + soy.$$escapeHtml(dio.i18n('booking.forgottenpassword.confirmation.bullets.checkspam')) + '</li><li class="pv-small">' + soy.$$escapeHtml(dio.i18n('booking.forgottenpassword.confirmation.bullets.checkemail')) + '</li></ul>'), buttonText: soydata.$$markUnsanitizedTextForInternalBlocks('' + ('' + dio.i18n('booking.forgottenpassword.confirmation.noemail'))), buttonClasses: 'fw-bold'}, null, opt_ijData)) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordConfirmation.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordConfirmation';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.forgottenpassworderror.js*/
// This file was automatically generated from forgotten-password-error.soy.
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


hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordError = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  var errorMessage__soy3 = '';
  if (opt_data.showNoAccountError) {
    var emphasizedEmail__soy6 = '<em>' + soy.$$escapeHtml(opt_data.email) + '</em>';
    emphasizedEmail__soy6 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(emphasizedEmail__soy6);
    errorMessage__soy3 += '<p class="mb-base">' + soy.$$filterNoAutoescape(dio.i18n('booking.forgottenpassword.error.noaccount.checkyouraddress', emphasizedEmail__soy6)) + '</p><p>' + soy.$$escapeHtml(dio.i18n('booking.forgottenpassword.error.noaccount.dontworry', opt_data.brandName)) + '</p>';
  } else {
    errorMessage__soy3 += '<p>' + soy.$$escapeHtml(dio.i18n('booking.forgottenpassword.error.technical')) + '</p>';
  }
  errorMessage__soy3 = soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks(errorMessage__soy3);
  output += soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'error', isEmphasised: true, additionalClasses: 'mb-base fs-base', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$filterNoAutoescape(errorMessage__soy3))}, null, opt_ijData));
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordError.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.forgottenPasswordError';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.identifieduser.js*/
// This file was automatically generated from identified-user.soy.
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


hcom.templates.pages.cop.bookingForm.sica.identifiedUser = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var output = '';
  var premiumLevel__soy3 = '' + ((opt_data.identifiedUser.loyalty.isSilverLevel) ? 'silver' : (opt_data.identifiedUser.loyalty.isGoldLevel) ? 'gold' : '');
  premiumLevel__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(premiumLevel__soy3);
  var signInFormHeaderDependentClasses__soy9 = '' + ((opt_data.identifiedUser.headerMessage) ? 'pb-base--l-xl pb-base--ml bdrb-big' : 'pv-base--l-xl pv-base--ml bdra-big');
  signInFormHeaderDependentClasses__soy9 = soydata.$$markUnsanitizedTextForInternalBlocks(signInFormHeaderDependentClasses__soy9);
  output += '<div id="identified-user-container"><form class="identified-user-sign-in-form mh-small mh-none--xs ph-overflow-cont clearfix ' + soy.$$escapeHtmlAttribute(signInFormHeaderDependentClasses__soy9) + ' ' + soy.$$escapeHtmlAttribute(premiumLevel__soy3) + '" novalidate="true" autocomplete="off">' + ((opt_data.identifiedUser.headerMessage) ? '<div class="identified-user-sign-in-header c-white fs-big mb-base pa-base bdrt-big bd-rad-none--xs mh-overflow-cont">' + soy.$$escapeHtml(opt_data.identifiedUser.headerMessage) + '</div>' : '') + '<div class="identified-user-sign-in-error js-placeholder"></div><div class="identified-user-sign-in-notification js-placeholder"></div>';
  var loyaltyDialUpEnabled__soy26 = ($$temp = opt_data.loyaltyRewardsConfig && opt_data.loyaltyRewardsConfig.loyaltyDialUpEnabled) == null ? false : $$temp;
  var loyaltyCardAdditionalClasses__soy27 = loyaltyDialUpEnabled__soy26 ? 'loyalty-rewards-dial-up bdra-big' : 'bdra-big';
  output += '<div class="hidden--ml hidden--s-m hidden--xs float-r ml-base mb-tiny">' + soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.vipvap({valueAddPromotions: opt_data.identifiedUser.valueAddPromotions, containerClasses: 'mb-base'}, null, opt_ijData)) + ((opt_data.loyaltyRewardsConfig) ? soy.$$escapeHtml(hcom.templates.modules.wrloyaltycard({additionalClasses: loyaltyCardAdditionalClasses__soy27, withHeader: true, withAlternatedColours: true, premiumLevel: premiumLevel__soy3, pointCard: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(hcom.templates.modules.wrpointcard({earnedCreditsCount: opt_data.identifiedUser.loyalty.earnedCreditsCount, pendingCreditsCount: opt_data.identifiedUser.loyalty.pendingCreditsCount, showText: opt_data.loyaltyRewardsConfig.freeTextVisible, additionalClasses: 'smaller bdrb-big'}, null, opt_ijData)))}, null, opt_ijData)) : '') + '</div><h2><span>' + soy.$$escapeHtml(opt_data.identifiedUser.mainMessage) + '</span>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: opt_data.identifiedUser.clearIdentityMessage, additionalClasses: 'identified-user-cancel-sign-in-btn va-b ml-big', isTextual: true}, null, opt_ijData)) + '</h2><p id="identified-user-loyalty-card-main-message" class="mb-big fs-base">' + ((opt_data.identifiedUser.loyalty.loyaltyCardMainMessageKey) ? (opt_data.identifiedUser.loyalty.rewardNightsCount > 0) ? soy.$$filterNoAutoescape(dio.i18n(opt_data.identifiedUser.loyalty.loyaltyCardMainMessageKey, opt_data.identifiedUser.loyalty.pendingCreditsCount, opt_data.identifiedUser.loyalty.rewardNightsCount, '<b>', '</b>')) : (opt_data.identifiedUser.loyalty.pendingCreditsCount > 0) ? soy.$$filterNoAutoescape(dio.i18n(opt_data.identifiedUser.loyalty.loyaltyCardMainMessageKey, opt_data.identifiedUser.loyalty.pendingCreditsCount, '<b>', '</b>')) : soy.$$filterNoAutoescape(dio.i18n(opt_data.identifiedUser.loyalty.loyaltyCardMainMessageKey, '<b>', '</b>')) : soy.$$escapeHtml(opt_data.identifiedUser.loyalty.loyaltyCardMainMessage)) + '</p>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.signInData.passwordField, id: 'identified_user_mobile_booking_login_passwd', label: dio.i18n('fastbooking.signIn.signedOut.label.password'), type: 'password', verticalError: true, containerClasses: 'of-h'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: opt_data.signInData.rememberMeField, id: 'identified-user-remember-me', label: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<em>' + soy.$$escapeHtml(dio.i18n('fastbooking.sign_in.stay_signed_in', '', '')) + '</em>'), skipValidationMarkup: true, containerClasses: 'of-h'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({type: 'submit', content: dio.i18n('fastbooking.signIn.signedOut.link.text.signIn'), additionalClasses: 'identified-user-sign-in-btn', title: dio.i18n('fastbooking.signIn.hint.enterEmailAndPass'), isStrong: true, isDisabledByDefault: true}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: dio.i18n('account.forgot_password.forgot_password', '', ''), additionalClasses: 'identified-user-forgotten-password-btn mb-base', isTextual: true}, null, opt_ijData)) + '</form><form class="identified-user-forgotten-password-form bdra-big mh-small mh-none--xs ph-overflow-cont pv-base--l-xl pv-base--ml" action="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.forgottenPasswordData.resetPasswordURL)) + '" novalidate="true"><div class="identified-user-forgotten-password-error js-placeholder"></div><h2><span>' + soy.$$escapeHtml(opt_data.identifiedUser.mainMessage) + '</span>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: opt_data.identifiedUser.clearIdentityMessage, additionalClasses: 'identified-user-cancel-sign-in-btn va-b ml-big', isTextual: true}, null, opt_ijData)) + '</h2><p class="fs-base mb-small">' + soy.$$escapeHtml(dio.i18n('profiles.forgottenpassword.email.instructions.brand', opt_data.baseConfig.brandName)) + '</p>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: opt_data.forgottenPasswordData.emailAddressField, id: 'identified-user-forgotten-password-email', label: dio.i18n('fastbooking.label.emailAddress'), type: 'email'}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({type: 'submit', content: dio.i18n('profiles.forgottenpassword.email.button_reset'), additionalClasses: 'identified-user-reset-password-btn', isStrong: true}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.ctaButton({content: dio.i18n('fastbooking.welcomerewards.link.cancel'), additionalClasses: 'identified-user-cancel-forgot-password-btn', isTextual: true}, null, opt_ijData)) + '</form></div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.identifiedUser.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.identifiedUser';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.mobilecollectmessage.js*/
// This file was automatically generated from mobile-collect-message.soy.
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


hcom.templates.pages.cop.bookingForm.sica.mobileCollectMessage = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$filterNoAutoescape(dio.i18n('fastbooking.sica.welcomerewards.collectmessage.mobile', opt_data.freeWordingOpenTag, opt_data.freeWordingCloseTag, opt_data.loyaltyRewardsLogo)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.mobileCollectMessage.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.mobileCollectMessage';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.notsignedin.js*/
// This file was automatically generated from not-signed-in.soy.
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


hcom.templates.pages.cop.bookingForm.sica.notSignedIn = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var loyaltyDialUpEnabled__soy3 = opt_data.loyaltyRewardsConfig && opt_data.loyaltyRewardsConfig.loyaltyDialUpEnabled;
  output += ((loyaltyDialUpEnabled__soy3) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedInDialUp(opt_data, null, opt_ijData)) : soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.loyaltyRewards.notSignedIn(opt_data, null, opt_ijData))) + ((opt_data.identifiedUser) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.sica.identifiedUser({identifiedUser: opt_data.identifiedUser, signInData: opt_data.sicaData.signIn, forgottenPasswordData: opt_data.sicaData.forgottenPassword, baseConfig: opt_data.baseConfig, loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig}, null, opt_ijData)) : '');
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.notSignedIn.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.notSignedIn';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.signincreateaccountbutton.js*/
// This file was automatically generated from sign-in-create-account-button.soy.
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


hcom.templates.pages.cop.bookingForm.sica.signInCreateAccountButton = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((! opt_data.mobile) ? soy.$$filterNoAutoescape(dio.i18n('fastbooking.sica.signinorcreate', opt_data.signInOpenTag, opt_data.signInCloseTag, opt_data.createAccountOpenTag, opt_data.createAccountCloseTag)) : soy.$$filterNoAutoescape(dio.i18n('fastbooking.sica.signinorcreate.optional', opt_data.signInOpenTag, opt_data.signInCloseTag, opt_data.createAccountOpenTag, opt_data.createAccountCloseTag, opt_data.optionalTextOpenTag, opt_data.optionalTextCloseTag)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.signInCreateAccountButton.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.signInCreateAccountButton';
}

/*! generated/hcom.templates.pages.cop.bookingform.sica.signedin.js*/
// This file was automatically generated from signed-in.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.sica.
 * @hassoydelcall {mvt2638.collapsedBFsignedInMessage}
 * @hassoydelcall {mvt6661.noEarnedNightsOnAppliedCouponHighlightControl}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.sica == 'undefined') { hcom.templates.pages.cop.bookingForm.sica = {}; }


hcom.templates.pages.cop.bookingForm.sica.signedIn = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="sica-signed-in-panel" class="fs-small ph-big--l-xl ph-med--ml ph-med--s-m">' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt2638.collapsedBFsignedInMessage'), '', true)({isBookingFormCollapsed: opt_data.isBookingFormCollapsed, signOutURL: opt_data.signOutURL, showSignOutLink: opt_data.showSignOutLink, firstName: opt_data.user.firstName}, null, opt_ijData)) + soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'assurance', id: 'signed-in-message', iconSize: 'small', iconName: 'confirm', isEmphasised: true, isFullWideOnXS: true, additionalClasses: 'mb-base mb-none--xs bd-rad-none--xs bd-none--xs fs-base', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<p>' + soy.$$filterNoAutoescape(dio.i18n('fastbooking.welcomerewards.you.are.signed.in.as', '<em>' + opt_data.user.emailAddress + '</em>')) + ' ' + ((opt_data.showSignOutLink) ? '<a class="sica-sign-out-link" href="../' + soy.$$filterNoAutoescape(opt_data.signOutURL) + '">' + soy.$$escapeHtml(dio.i18n('header.sign_out')) + '</a>' : '') + '</p>')}, null, opt_ijData)) + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6661.noEarnedNightsOnAppliedCouponHighlightControl'), '', false)({loyaltyData: opt_data.user.loyalty, loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig}, null, opt_ijData)) + ((opt_data.protectionData) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.nudataProtectionWidget({id: 'sign-in-form-protection-widget', createContainer: true, actions: opt_data.protectionData.actions, protectionWidgetData: opt_data.protectionData.signinFormWidget}, null, opt_ijData)) : '') + '</div>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.sica.signedIn.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.sica.signedIn';
}

/*! generated/hcom.mvts.mvt6661.noearnednightsonappliedcouponhighlightcontrol.js*/
// This file was automatically generated from variant0-no-earned-nights-on-applied-coupon-highlight-control.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.mvts.
 * @hassoydeltemplate {mvt6661.noEarnedNightsOnAppliedCouponHighlightControl}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.mvts == 'undefined') { hcom.mvts = {}; }


hcom.mvts.__deltemplate_s2_4f95b1da = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.loyaltyData.isLoyaltyCardDisplayed && opt_data.loyaltyRewardsConfig) ? (opt_data.loyaltyRewardsConfig.loyaltyDialUpEnabled) ? soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCardDialUp({loyaltyRewardsConfig: opt_data.loyaltyRewardsConfig, loyaltyData: opt_data.loyaltyData, signedIn: true}, null, opt_ijData)) : soy.$$escapeHtml(hcom.templates.pages.cop.bookingForm.loyaltyRewards.loyaltyCard(opt_data, null, opt_ijData)) : '');
};
if (goog.DEBUG) {
  hcom.mvts.__deltemplate_s2_4f95b1da.soyTemplateName = 'hcom.mvts.__deltemplate_s2_4f95b1da';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('mvt6661.noEarnedNightsOnAppliedCouponHighlightControl'), '', 0, hcom.mvts.__deltemplate_s2_4f95b1da);

/*! generated/hcom.templates.pages.cop.common.formelements.radiolist.js*/
// This file was automatically generated from radio-list.soy.
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


hcom.templates.pages.cop.common.formElements.radioList = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<fieldset' + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '') + ' class="radio-list' + ((opt_data.containerClasses) ? ' ' + soy.$$escapeHtmlAttribute(opt_data.containerClasses) : '') + '" ><legend class="fw-bold mb-tiny ' + ((opt_data.isLabelHidden) ? 'offscreen' : '') + '">' + soy.$$escapeHtml(opt_data.label) + '</legend><ul>';
  var radioList47 = opt_data.fieldProperties.options;
  var radioListLen47 = radioList47.length;
  for (var radioIndex47 = 0; radioIndex47 < radioListLen47; radioIndex47++) {
    var radioData47 = radioList47[radioIndex47];
    var extendedItemClasses__soy21 = '' + ('' + (opt_data.noGrid ? 'no-grid pv-tiny' : 'pa-base')) + ((radioData47.selected) ? ' selected' : '') + ((opt_data.itemClasses) ? ' ' + ('' + opt_data.itemClasses) : '');
    extendedItemClasses__soy21 = soydata.$$markUnsanitizedTextForInternalBlocks(extendedItemClasses__soy21);
    output += '<li class="radio-list-item ' + soy.$$escapeHtmlAttribute(extendedItemClasses__soy21) + '" data-value="' + soy.$$escapeHtmlAttribute(radioData47.value) + '">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.radio({label: radioData47.label, asideLabel: radioData47.asideLabel, fieldProperties: {checked: radioData47.selected, name: opt_data.fieldProperties.name, value: radioData47.value}, errorTitle: opt_data.errorTitle, classes: opt_data.classes}, null, opt_ijData)) + ((radioData47.description) ? '<div class="js-hidden mt-tiny">' + soy.$$escapeHtml(radioData47.description) + '</div>' : '') + '</li>';
  }
  output += '</ul></fieldset>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.radioList.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.radioList';
}

/*! generated/hcom.templates.pages.cop.common.formelements.radio.js*/
// This file was automatically generated from radio.soy.
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


hcom.templates.pages.cop.common.formElements.radio = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<label class="option-label"><input type="radio"' + ((opt_data.id) ? ' id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '') + 'name="' + soy.$$escapeHtmlAttribute(opt_data.fieldProperties.name) + '" value="' + soy.$$escapeHtmlAttribute(opt_data.fieldProperties.value) + '"' + ((opt_data.classes) ? ' class="' + soy.$$escapeHtmlAttribute(opt_data.classes) + '"' : '') + ((opt_data.fieldProperties.checked) ? ' checked="true"' : '') + ((opt_data.disabled) ? ' disabled' : '') + ((opt_data.errorTitle) ? ' data-error-title="' + soy.$$escapeHtmlAttribute(opt_data.errorTitle) + '"' : '') + '/><span class="option-label-text">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.asideLabel) ? '<span class="option-aside-label-text">' + soy.$$escapeHtml(opt_data.asideLabel) + '</span>' : '') + '</label>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.radio.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.radio';
}

/*! generated/hcom.templates.pages.cop.common.formelements.kickboxstateindicator.js*/
// This file was automatically generated from kickbox-state-indicator.soy.
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


hcom.templates.pages.cop.common.formElements.kickboxStateIndicator = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span class="state-indicator kickbox-state-indicator" data-for="' + soy.$$escapeHtmlAttribute(opt_data.indicatedId) + '">' + ((opt_data.isClosable) ? '<span class="state-indicator-close-icon crsr-pointer"></span>' : '') + ((opt_data.message) ? soy.$$filterNoAutoescape(opt_data.message) : '') + '</span>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.kickboxStateIndicator.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.kickboxStateIndicator';
}

/*! generated/hcom.templates.pages.cop.common.formelements.options.js*/
// This file was automatically generated from options.soy.
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


hcom.templates.pages.cop.common.formElements.options = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var optionList17 = opt_data.optionList;
  var optionListLen17 = optionList17.length;
  for (var optionIndex17 = 0; optionIndex17 < optionListLen17; optionIndex17++) {
    var optionData17 = optionList17[optionIndex17];
    output += '<option' + ((optionData17.value) ? ' value="' + soy.$$escapeHtmlAttribute(optionData17.value) + '"' : ' value=""') + ((optionData17.selected) ? ' selected="selected"' : '') + '>' + soy.$$escapeHtml(optionData17.label) + '</option>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.options.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.options';
}

/*! generated/hcom.templates.pages.cop.common.formelements.stateindicator.js*/
// This file was automatically generated from state-indicator.soy.
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


hcom.templates.pages.cop.common.formElements.stateIndicator = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var stateIndicatorClasses__soy3 = 'state-indicator validation-state-indicator' + ((opt_data.additionalClasses) ? ' ' + ('' + opt_data.additionalClasses) : '');
  stateIndicatorClasses__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(stateIndicatorClasses__soy3);
  output += '<span class="' + soy.$$escapeHtmlAttribute(stateIndicatorClasses__soy3) + '" data-for="' + soy.$$escapeHtmlAttribute(opt_data.indicatedId) + '">' + ((opt_data.message != null) ? soy.$$filterNoAutoescape(opt_data.message) : '') + '</span>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.stateIndicator.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.stateIndicator';
}

/*! generated/hcom.templates.pages.cop.common.nudataprotectionwidget.js*/
// This file was automatically generated from nudata-protection-widget.soy.
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


hcom.templates.pages.cop.common.nudataProtectionWidget = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(((opt_data.createContainer) ? '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nudata-protection-widget ' + soy.$$escapeHtmlAttribute(($$temp = opt_data.containerClasses) == null ? '' : $$temp) + '">' : '') + ((opt_data.actions) ? '<input type="hidden" name="actions" value="' + soy.$$escapeHtmlAttribute(opt_data.actions) + '"/>' : '') + ((opt_data.protectionWidgetData) ? ((opt_data.protectionWidgetData.captchaPresent) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.messages.generalMessage({type: 'error', isEmphasised: true, additionalClasses: 'captcha-message mb-base fs-base', content: dio.i18n('account.validation.captcha')}, null, opt_ijData)) : '') + ((opt_data.protectionWidgetData.protectionWidget) ? soy.$$filterNoAutoescape(opt_data.protectionWidgetData.protectionWidget) : '') : '') + ((opt_data.createContainer) ? '</div>' : ''));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.nudataProtectionWidget.soyTemplateName = 'hcom.templates.pages.cop.common.nudataProtectionWidget';
}

/*! generated/hcom.templates.pages.cop.common.tooltipwidget.js*/
// This file was automatically generated from tooltip-widget.soy.
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


hcom.templates.pages.cop.common.tooltipWidget = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var containerClasses__soy3 = 'additional-info widget-tooltip widget-tooltip-responsive' + ((! opt_data.onHover) ? ' widget-tooltip-trigger' : '') + ((opt_data.additionalClasses) ? ' ' + ('' + opt_data.additionalClasses) : '');
  containerClasses__soy3 = soydata.$$markUnsanitizedTextForInternalBlocks(containerClasses__soy3);
  output += '<span class="' + soy.$$escapeHtmlAttribute(containerClasses__soy3) + '"><span class="widget-tooltip-bd">' + ((! opt_data.disableCloseIcon) ? '<span class="widget-tooltip-close widget-tooltip-close-icon"></span>' : '') + soy.$$filterNoAutoescape(opt_data.content) + '</span></span>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.tooltipWidget.soyTemplateName = 'hcom.templates.pages.cop.common.tooltipWidget';
}

/*! generated/hcom.templates.pages.cop.common.bestpriceguaranteebadge.js*/
// This file was automatically generated from best-price-guarantee-badge.soy.
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


hcom.templates.pages.cop.common.bestPriceGuaranteeBadge = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="best-price-badge ' + soy.$$escapeHtmlAttribute(opt_data.additionalClasses) + '">' + ((opt_data.bestPriceGuaranteeUrl) ? '<a href="../' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.bestPriceGuaranteeUrl)) + '" target="_blank" class="c-price-match with-large-icon icon-price-match">' + soy.$$escapeHtml(dio.i18n('common.priceGuarantee')) + '</a>' : '<span class="with-large-icon icon-price-match">' + soy.$$escapeHtml(dio.i18n('common.priceGuarantee')) + '</span>') + soy.$$escapeHtml(hcom.templates.pages.cop.common.tooltipWidget({additionalClasses: 'tooltip-icon', disableCloseIcon: true, content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$escapeHtml(dio.i18n('propertyDetails.priceMatchGuarantee.tooltip')))}, null, opt_ijData)) + '</div>');
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.bestPriceGuaranteeBadge.soyTemplateName = 'hcom.templates.pages.cop.common.bestPriceGuaranteeBadge';
}

/*! generated/hcom.templates.mvt6411.expirydateoneinputfield.js*/
// This file was automatically generated from expiry-date-one-input-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.mvt6411.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.mvt6411 == 'undefined') { hcom.templates.mvt6411 = {}; }


hcom.templates.mvt6411.expiryDateOneInputField = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="expiry-date-fields">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textInput({fieldProperties: '', id: 'grouped-expiry-date-field', label: dio.i18n('fastbooking.label.expiryDate'), placeholder: dio.i18n('fastbooking.label.expiryDate.placeholder'), maxlength: 10, type: 'tel', errorTitle: dio.i18n('fastbooking.label.expiryDate')}, null, opt_ijData)) + '<input type="tel" id="expiry-month" autocomplete="off" class="offscreen" maxlength="2" tabindex="-1" /><input type="tel" id="expiry-year" autocomplete="off" class="offscreen" maxlength="4" tabindex="-1" /></div>');
};
if (goog.DEBUG) {
  hcom.templates.mvt6411.expiryDateOneInputField.soyTemplateName = 'hcom.templates.mvt6411.expiryDateOneInputField';
}

/*! generated/hcom.mvts.mvt7022.padlockoncvvfield.mvt7022.variant1.js*/
// This file was automatically generated from variant1-padlock-on-cvv-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.mvts.
 * @modName {mvt7022.variant1}
 * @hassoydeltemplate {mvt7022.padlockOnCvvField}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.mvts == 'undefined') { hcom.mvts = {}; }


hcom.mvts.__deltemplate_s2_15b49ca4 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="cvv-field-container" class="clearfix">' + soy.$$escapeHtml(formElements.textInput({fieldProperties: opt_data.fieldProperties, id: 'payment-details-cvv', type: 'tel', label: dio.i18n('fastbooking.label.securityCode'), maxlength: 4, errorTitle: dio.i18n('fastbooking.label.securityCode'), icon: 'padlock'}, null, opt_ijData)) + '</div>');
};
if (goog.DEBUG) {
  hcom.mvts.__deltemplate_s2_15b49ca4.soyTemplateName = 'hcom.mvts.__deltemplate_s2_15b49ca4';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('mvt7022.padlockOnCvvField'), '', 1, hcom.mvts.__deltemplate_s2_15b49ca4);

/*! generated/hcom.templates.pages.cop.bookingform.roomdetails.specialrequests.js*/
// This file was automatically generated from special-requests.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.roomDetails.
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.roomDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.roomDetails = {}; }


hcom.templates.pages.cop.bookingForm.roomDetails.specialRequests = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div class="room-details-special-requests"><p class="mb-small">' + soy.$$escapeHtml(dio.i18n('bookingPage.bookingForm.roomDetails.specialRequests.confirmationContact')) + '</p>';
  var collapsedPrefix__soy6 = opt_data.isBookingFormCollapsed ? 'collapsedbf-' : '';
  if (opt_data.specialRequests.fields) {
    output += '<ul>';
    var specialRequestList17 = opt_data.specialRequests.fields;
    var specialRequestListLen17 = specialRequestList17.length;
    for (var specialRequestIndex17 = 0; specialRequestIndex17 < specialRequestListLen17; specialRequestIndex17++) {
      var specialRequestData17 = specialRequestList17[specialRequestIndex17];
      output += '<li>' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: specialRequestData17, id: collapsedPrefix__soy6 + 'room-details-room-' + opt_data.roomIndex + '-special-request-' + specialRequestIndex17, label: specialRequestData17.label, skipValidationMarkup: true}, null, opt_ijData)) + '</li>';
    }
    output += '</ul>';
  }
  output += soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.textarea({fieldProperties: opt_data.specialRequests.freeTextField, id: collapsedPrefix__soy6 + 'room-details-room-' + opt_data.roomIndex + '-special-request', label: dio.i18n('accessibility.special.requests'), errorTitle: dio.i18n('accessibility.special.requests'), isLabelOffscreen: true, maxlength: 250}, null, opt_ijData)) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.roomDetails.specialRequests.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.roomDetails.specialRequests';
}

/*! generated/hcom.templates.pages.cop.common.formelements.textarea.js*/
// This file was automatically generated from textarea.soy.
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


hcom.templates.pages.cop.common.formElements.textarea = function(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.fieldContainer(soy.$$augmentMap(opt_data, {inputType: 'textarea', content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<label for="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="fw-bold mb-tiny' + ((opt_data.isLabelOffscreen) ? ' offscreen' : '') + '">' + soy.$$filterNoAutoescape(opt_data.label) + ((opt_data.explanation) ? '<br><i class="c-note fw-normal">' + soy.$$escapeHtml(opt_data.explanation) + '</i>' : '') + '</label><textarea id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" name="' + soy.$$escapeHtmlAttribute(opt_data.fieldProperties.name) + '"' + ((opt_data.classes) ? ' class="' + soy.$$escapeHtmlAttribute(opt_data.classes) + '"' : '') + ((opt_data.maxlength) ? ' maxlength="' + soy.$$escapeHtmlAttribute(opt_data.maxlength) + '"' : '') + ((opt_data.errorTitle) ? ' data-error-title="' + soy.$$escapeHtmlAttribute(opt_data.errorTitle) + '"' : '') + '>' + soy.$$escapeHtmlRcdata(($$temp = opt_data.fieldProperties.value) == null ? '' : $$temp) + '</textarea>')}), null, opt_ijData)));
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.common.formElements.textarea.soyTemplateName = 'hcom.templates.pages.cop.common.formElements.textarea';
}

/*! generated/hcom.templates.pages.cop.bookingform.roomdetails.preferences.js*/
// This file was automatically generated from preferences.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.templates.pages.cop.bookingForm.roomDetails.
 * @hassoydelcall {mvt6108.clearerRoomPreferenceMessage}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.templates == 'undefined') { hcom.templates = {}; }
if (typeof hcom.templates.pages == 'undefined') { hcom.templates.pages = {}; }
if (typeof hcom.templates.pages.cop == 'undefined') { hcom.templates.pages.cop = {}; }
if (typeof hcom.templates.pages.cop.bookingForm == 'undefined') { hcom.templates.pages.cop.bookingForm = {}; }
if (typeof hcom.templates.pages.cop.bookingForm.roomDetails == 'undefined') { hcom.templates.pages.cop.bookingForm.roomDetails = {}; }


hcom.templates.pages.cop.bookingForm.roomDetails.preferences = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<fieldset class="room-details-preferences mb-base"><legend class="fw-bold mb-tiny">' + soy.$$escapeHtml(dio.i18n('fastbooking.roomDetails.preferences')) + ((opt_data.preferencesData.disclaimer) ? '<br><i id="preferences-not-guaranteed-message" class="permanent c-note fw-normal">' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('mvt6108.clearerRoomPreferenceMessage'), '', false)(opt_data, null, opt_ijData)) + '</i>' : '') + '</legend>';
  var collapsedPrefix__soy12 = opt_data.isBookingFormCollapsed ? 'collapsedbf-' : '';
  if (opt_data.preferencesData.bedType.options) {
    output += '<div class="va-m di-ib mr-giant">';
    var bedOptions__soy16 = opt_data.preferencesData.bedType.options;
    output += ((bedOptions__soy16.length > 0) ? soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.select({fieldProperties: opt_data.preferencesData.bedType, id: collapsedPrefix__soy12 + 'room-details-room-' + opt_data.roomIndex + '-bed-type', label: dio.i18n('fastbooking.roomDetails.bedtypes'), containerClasses: 'custom-length', isLabelOffscreen: true, noDistance: true, skipValidationMarkup: true}, null, opt_ijData)) : '') + '</div>';
  }
  output += ((opt_data.preferencesData.smoking.name) ? '<div class="va-m di-ib">' + soy.$$escapeHtml(hcom.templates.pages.cop.common.formElements.checkbox({fieldProperties: opt_data.preferencesData.smoking, id: collapsedPrefix__soy12 + 'room-details-room-' + opt_data.roomIndex + '-smoking-pref', label: dio.i18n(opt_data.preferencesData.smoking.label), noDistance: true, skipValidationMarkup: true}, null, opt_ijData)) + '</div>' : '') + '</fieldset>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  hcom.templates.pages.cop.bookingForm.roomDetails.preferences.soyTemplateName = 'hcom.templates.pages.cop.bookingForm.roomDetails.preferences';
}

/*! generated/hcom.mvts.mvt6108.clearerroompreferencemessage.mvt6108.variant2.js*/
// This file was automatically generated from variant2-clearer-room-preference-message.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.mvts.
 * @modName {mvt6108.variant2}
 * @hassoydeltemplate {mvt6108.clearerRoomPreferenceMessage}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.mvts == 'undefined') { hcom.mvts = {}; }


hcom.mvts.__deltemplate_s2_1b19f443 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(dio.i18n('fastbooking.roomDetails.preferences.cantBeGuaranteed')));
};
if (goog.DEBUG) {
  hcom.mvts.__deltemplate_s2_1b19f443.soyTemplateName = 'hcom.mvts.__deltemplate_s2_1b19f443';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('mvt6108.clearerRoomPreferenceMessage'), '', 1, hcom.mvts.__deltemplate_s2_1b19f443);

/*! generated/hcom.mvts.mvt5370.scarcitymessageoriginalposition.mvt5370.variant1.js*/
// This file was automatically generated from variant1-scarcity-message-original-position.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hcom.mvts.
 * @modName {mvt5370.variant1}
 * @hassoydeltemplate {mvt5370.scarcityMessageOriginalPosition}
 * @public
 */

if (typeof hcom == 'undefined') { window.hcom = {}; }
if (typeof hcom.mvts == 'undefined') { hcom.mvts = {}; }


hcom.mvts.__deltemplate_s2_1041806d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('');
};
if (goog.DEBUG) {
  hcom.mvts.__deltemplate_s2_1041806d.soyTemplateName = 'hcom.mvts.__deltemplate_s2_1041806d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('mvt5370.scarcityMessageOriginalPosition'), '', 1, hcom.mvts.__deltemplate_s2_1041806d);
