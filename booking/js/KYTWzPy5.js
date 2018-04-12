



/* ControlTag Loader for Hotels.com 02d2217e-241c-41fc-8e84-d173c0414fe1 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"KYTWzPy5","context_terms":[],"publisher":{"name":"Hotels.com","active":true,"uuid":"02d2217e-241c-41fc-8e84-d173c0414fe1","version_bucket":"stable","id":1877},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":true,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"asap","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"global_user_match":"site","link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"buckets":"meso","optimize_realtime_segments":true,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","controltag_interchange_segment_buckets":"meso","dfp_premium":true,"control_tag_namespace":"hotelscom"},"prioritized_segments":[],"realtime_segments":[{"id":"rotfsgmfs","test":["and",["and",["or",["intersects","$user_attr_userbrand",["hcom"]]]]]},{"id":"r5f61kvdf","test":["and",["and",["or",["intersects","$user_attr_userbrand",["hcom"]],["intersects","$user_attr_kevin",["registeredneverbooked"]]],["andNot",["intersects","$user_segments",["r2lknl7rn","r7u97jh5q","r7vardhc2","r7vbeo41j","r7vbj5ha4","r2lk3vjc0"]]]]]},{"id":"rmd3rsbh1","test":["and",["and",["or",["contains","$page_attr_pagepage_name",["hotel details page"]],["contains","$page_attr_pagepage_name",["hotel details rating"]],["contains","$page_attr_pagepage_name",["hotel details landing"]],["contains","$page_attr_pagepage_name",["search result"]],["contains","$page_attr_pagepage_name",["city attribute"]],["contains","$page_attr_pagepage_name",["city landing"]]]]]},{"id":"rvrfb7jqc","test":["and",["and",["or",["contains","$page_attr_pagepage_name",["hotel details page"]],["contains","$page_attr_pagepage_name",["hotel details rating"]],["contains","$page_attr_pagepage_name",["hotel details landing"]]],["andNot",["contains","$page_attr_pagesite_section",["booking enter details"]],["contains","$page_attr_pagesite_section",["booking confirmation"]]]]]},{"id":"rmd3c2v2m","test":["and",["and",["or",["contains","$page_attr_pagesite_section",["booking confirmation"]]]]]},{"id":"rpk62qg4m","test":["and",["and",["or",["contains","$page_attr_pagepage_name",["city all"]],["contains","$page_attr_pagepage_name",["city attribute"]],["contains","$page_attr_pagepage_name",["city landing"]],["contains","$page_attr_pagepage_name",["city list"]]]]]},{"id":"rotd6j4pt","test":["and",["and",["or",["contains","$page_attr_pagepage_name",["search result without dates"]],["contains","$page_attr_pagepage_name",["search result on map without dates"]]]]]},{"id":"rmd2btyc6","test":["and",["and",["or",["contains","$page_attr_pagesite_section",["booking enter details"]]]]]},{"id":"rmd3iavjk","test":["and",["and",["or",["intersects","$page_attr_pagepage_name",["mob :: aapp :: search result with dates","mob :: iapp :: search result with dates","mob :: ipad :: search result with dates","mob :: tabweb :: search result on map","mob :: tabweb :: search result with dates","mob :: web :: search result on map","mob :: web :: search result with dates","search result on map","search result with dates"]]]]]},{"id":"rpk5m33ml","test":["and",["and",["or",["contains","$page_attr_pagepage_name",["hotel details without dates"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/02d2217e-241c-41fc-8e84-d173c0414fe1","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/02d2217e-241c-41fc-8e84-d173c0414fe1","consent_set":"https://consumer.krxd.net/consent/set/02d2217e-241c-41fc-8e84-d173c0414fe1","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/02d2217e-241c-41fc-8e84-d173c0414fe1","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Hotels.com","cap":50,"id":502702,"organization_id":1877,"uid":"KYTWzPy5"},"tags":[{"id":17969,"name":"Technographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"apply","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17970,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":18038,"name":"User ID","content":null,"target":null,"target_action":"append","timing":"onload","method":"apply","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":20384,"name":"DataLayer DTC","content":null,"target":null,"target_action":"append","timing":"onload","method":"apply","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":22721,"name":"CSP testing","content":null,"target":null,"target_action":"append","timing":"onload","method":"apply","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["contains","$url","KruxTestCSP"]]]]},{"id":23383,"name":"Krux DTC Campaign tracking","content":null,"target":null,"target_action":"append","timing":"onload","method":"apply","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[{"id":5,"name":"DataXu User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = location.protocol;\n        if (kuid) {\n           var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\n           var i = new Image();\n           i.src = dxu_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\n(function()\n{ var i = new Image(); i.src = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1'; }\n)();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":45,"name":"TubeMogul user match","content":"<script>\r\n    (function() {\r\n        new Image().src = location.protocol + '//sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + encodeURIComponent('https://beacon.krxd.net/usermatch.gif?partner_id=cb276571-e0d9-4438-9fd4-80a1ff034b01&puid=${TM_USER_ID}');\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":71,"name":"AppNexus Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":32,"name":"Casale (Index Exchange) user match","content":"<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = window.location.protocol;\n      var casale_url = '';\n      var kurl = '//beacon.krxd.net/usermatch.gif?partner=casale&partner_uid=__UID__';\n      var encode_krux_url = encodeURIComponent(prefix + kurl);\n      \n      if (prefix == \"http:\") {\n         casale_url = prefix + '//ssum.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url;\n      }\n      else if (prefix == \"https:\") { \n         casale_url = prefix + '//ssum-sec.casalemedia.com/usermatchredir?s=183716&cb='+ encode_krux_url; \n      }\n\n      new Image().src = casale_url;\n   }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":25,"name":"eXelate Media","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//loadm.exelator.com/load\",\n      data: {\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\n          buid: kuid,\n          p: '204',\n          g: '270',\n          j: '0'\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":33,"name":"Criteo Usermatch","content":"<script>\n(function(){\nvar kuid = Krux('get', 'user');\nif (kuid) {\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\nvar purl = '//gum.criteo.com/sync?c=83&r=1&a=1&u=';\nvar kurl = '//beacon.krxd.net/usermatch.gif?partner=criteo&partner_uid=@USERID@';\n(new Image()).src  = p + purl + p + encodeURIComponent(kurl); \n}\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":79,"name":"Quantcast S2S User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n           var qcast_url = '//pixel.quantserve.com/pixel/p-j_f_9hh7_PWUw.gif?idmatch=0';\n           var i = new Image();\n           i.src = qcast_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix - Legacy","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":10,"name":"Rubicon User Match","content":"<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n       var rubicon_url = '//token.rubiconproject.com/token?pid=27384&puid=' + kuid;\r\n       var i = new Image();\r\n       i.src = rubicon_url;\r\n    }\r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":4,"template_replacement":false,"internal":true,"criteria":[]},{"id":23,"name":"BlueKai S2S","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":5,"template_replacement":false,"internal":true,"criteria":[]},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":5,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.e10e6504b45d287709c1597d6e20c8ae', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
    
    obj['17969'] = function() {
      /* this tag is intentionally blank */
    };
  
    
    obj['18038'] = function() {
      (function(){
	Krux('scrape',{
		'user_attr_hcomID':{'js_global':'commonDataBlock.user.guid'},
		'user_attr_authenticatedID':{'js_global':'commonDataBlock.user.dossierId'}
	});
})();
    };
  
    
    obj['20384'] = function() {
      /* Data Transfer Code for hotels */
var getData = Krux('scrape.js_global', 'Bootstrapper.dataManager.getData');
if (typeof getData == 'function') {
    var temp_obj = getData();
    if (temp_obj._d) {
        window.HotelsKruxDL = temp_obj._d.KruxDataLayer;
        Krux('ingestDataLayer', HotelsKruxDL, {
            userKeys: [/User.*/],
            omitKeys: ['PagefullURL'],
            convertAttrNames: [{
                pattern: /bookingnum_adults|searchnum_adults/,
                replacement: 'bookingnum_adults_master'
            }, {
                pattern: /bookingnum_children|searchnum_children/,
                replacement: 'bookingnum_children_master'
            }, {
                pattern: /propertydestination_id|searchdestination_i_d|bookingdestination_id/,
                replacement: 'bookingdestination_id_master'

            }, {
                pattern: /search_roomnum_room_people|num_room_people|booking_roomnum_room_people/,
                replacement: 'booking_roomnum_room_people_master'
            }, {
                pattern: /searchcheckout_date|bookingcheckout_date/,
                replacement: 'bookingcheckout_date_master'
            }, {
                pattern: /searchcheckin_date|bookingcheckin_date/,
                replacement: 'bookingcheckin_date_master'
            }, {
                pattern: /searchnum_rooms|propertyrooms_count/,
                replacement: 'propertyrooms_count_master'
            }]

        });
        Krux('set', 'user_attr_email_md5', Krux('get', 'user_attr_userhash_email'));
    }
}
    };
  
    
    obj['22721'] = function() {
      console.log('this is running under CSP');
console.log('Krux is as follows');
console.log(Krux);
    };
  
    
    obj['23383'] = function() {
      (function(){
    var k,p = Krux('require:util').urlParams();
    for(k in p) {
        if (k.indexOf('utm_') === 0){
            Krux('set', 'page_attr_' + k, decodeURIComponent(p[k]));
        }
    }
})();
    };
  
  return obj;
})());
