const _0x5988=['remote','I18n','init','session_code','msg_api_url','indexOf','sessionToken','session_token','init\x20failed,\x20cannot\x20get\x20session\x20id','__esModule','https://creator-api.cocos.com/api','getData','getRedirectUrl','/service/get_im_setting','getImSetting\x20failed','session_id','getSessionToken','imSetting','getButtonTitle','entry_url','&redirect_url=','getInstance','sessionCode','getLanguage','show_entrance','get\x20session\x20failed','lang=','getSessionCode','sessionId','button_title','requestService','then','getUserData','data','User','cleanImSetting','default','getImSetting','/session/token','sessionChanged','error','instance'];(function(_0x3794a9,_0x4da26c){const _0x598883=function(_0x44d1f8){while(--_0x44d1f8){_0x3794a9['push'](_0x3794a9['shift']());}};_0x598883(++_0x4da26c);}(_0x5988,0x9e));const _0x44d1=function(_0x3794a9,_0x4da26c){_0x3794a9=_0x3794a9-0x1b6;let _0x598883=_0x5988[_0x3794a9];return _0x598883;};const _0x4c6a9e=_0x44d1;'use strict';Object['defineProperty'](exports,_0x4c6a9e(0x1c9),{'value':!0x0});const http_utils_1=require('./http-utils'),apiBaseUrl=_0x4c6a9e(0x1ca);class Service{constructor(){const _0xe51044=_0x4c6a9e;this[_0xe51044(0x1dc)]=null,this[_0xe51044(0x1d6)]=null,this[_0xe51044(0x1c6)]=null,this[_0xe51044(0x1d1)]=null;}static async[_0x4c6a9e(0x1d5)](){const _0x5753b0=_0x4c6a9e;if(Service[_0x5753b0(0x1bf)]&&!await Service[_0x5753b0(0x1bf)][_0x5753b0(0x1bd)]())return Service[_0x5753b0(0x1bf)];const _0x115e05=new Service();return await _0x115e05['init'](),Service[_0x5753b0(0x1bf)]=_0x115e05,_0x115e05;}async['sessionChanged'](){const _0x56f5db=_0x4c6a9e;return(await this['getUserData']())[_0x56f5db(0x1cf)]!==this[_0x56f5db(0x1dc)];}async[_0x4c6a9e(0x1b6)](){const _0x3061c1=_0x4c6a9e;let _0x124612=null;return _0x124612=Editor[_0x3061c1(0x1b8)][_0x3061c1(0x1cb)](),_0x124612[_0x3061c1(0x1df)]||(_0x124612=Editor[_0x3061c1(0x1c0)][_0x3061c1(0x1b8)][_0x3061c1(0x1cb)]()),_0x124612;}async[_0x4c6a9e(0x1c2)](){const _0x241dd8=_0x4c6a9e,_0x12ce19=await this['getUserData']();if(this[_0x241dd8(0x1dc)]=_0x12ce19['session_id'],this[_0x241dd8(0x1dc)])try{this[_0x241dd8(0x1d6)]=await this[_0x241dd8(0x1db)](this[_0x241dd8(0x1dc)]),this[_0x241dd8(0x1c6)]=await this[_0x241dd8(0x1d0)](this['sessionCode']);}catch(_0x2e55ca){console[_0x241dd8(0x1be)](_0x241dd8(0x1d9)),console[_0x241dd8(0x1be)](_0x2e55ca);}else console[_0x241dd8(0x1be)](_0x241dd8(0x1c8));}async['getImSetting'](){const _0x20cfe4=_0x4c6a9e;try{const _0x5be435=await this[_0x20cfe4(0x1de)](apiBaseUrl+_0x20cfe4(0x1cd),{'session_token':this[_0x20cfe4(0x1c6)]});return this[_0x20cfe4(0x1d1)]=_0x5be435[_0x20cfe4(0x1b7)],_0x5be435[_0x20cfe4(0x1b7)];}catch(_0x5bae9){return console['error'](_0x20cfe4(0x1ce)),null;}}[_0x4c6a9e(0x1b9)](){const _0x527bfe=_0x4c6a9e;this[_0x527bfe(0x1d1)]=null;}async[_0x4c6a9e(0x1d2)](){const _0x33a469=_0x4c6a9e,_0x1c295f=await this[_0x33a469(0x1bb)]();return _0x1c295f?_0x1c295f[_0x33a469(0x1dd)]:'';}async['isVip'](){const _0x2b7f2a=_0x4c6a9e,_0x43d131=await this[_0x2b7f2a(0x1bb)]();return!!_0x43d131&&!!_0x43d131['user_licnese'];}async['getNewMsgCount'](){const _0x30768a=_0x4c6a9e,_0x561570=await this[_0x30768a(0x1bb)]();if(!_0x561570)return 0x0;try{const _0x3b15e5=await http_utils_1['postData'](_0x561570[_0x30768a(0x1c4)]);return _0x3b15e5[_0x30768a(0x1b7)]?_0x3b15e5[_0x30768a(0x1b7)]:0x0;}catch(_0x3a3ea0){return 0x0;}}async['shouldShowEntrance'](){const _0x52925d=_0x4c6a9e,_0x18c3b2=await this[_0x52925d(0x1bb)]();return!!_0x18c3b2&&!!_0x18c3b2[_0x52925d(0x1d8)];}async['getSignInUrl'](){const _0x518bc5=_0x4c6a9e,_0x42640a=await this['getImSetting']();return _0x42640a?this['getRedirectUrl'](_0x42640a[_0x518bc5(0x1d3)]):null;}[_0x4c6a9e(0x1cc)](_0xde746c){const _0xc08487=_0x4c6a9e,_0x5cbc15=_0xde746c+(_0xde746c[_0xc08487(0x1c5)]('?')>=0x0?'&':'?')+(_0xc08487(0x1da)+Editor[_0xc08487(0x1c1)][_0xc08487(0x1d7)]());return apiBaseUrl+'/account/client_signin?session_id='+this['sessionId']+_0xc08487(0x1d4)+encodeURIComponent(_0x5cbc15);}async['getSessionCode'](_0x5bd823){const _0x5a4ffe=_0x4c6a9e;return(await this[_0x5a4ffe(0x1de)](apiBaseUrl+'/session/code',{'session_id':_0x5bd823}))[_0x5a4ffe(0x1b7)][_0x5a4ffe(0x1c3)];}async[_0x4c6a9e(0x1d0)](_0x31a2e9){const _0xb81ba3=_0x4c6a9e;return(await this['requestService'](apiBaseUrl+_0xb81ba3(0x1bc),{'session_code':_0x31a2e9}))[_0xb81ba3(0x1b7)][_0xb81ba3(0x1c7)];}async[_0x4c6a9e(0x1de)](_0x22c0ab,_0xb313a0){return http_utils_1['postData'](_0x22c0ab,http_utils_1['encodeParams'](_0xb313a0));}}exports[_0x4c6a9e(0x1ba)]=Service,Service[_0x4c6a9e(0x1bf)]=null;