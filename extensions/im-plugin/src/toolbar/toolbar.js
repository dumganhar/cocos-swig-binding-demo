const _0x46f2=['-hide','innerText','./style-generator','-non-vip-btn-single-digit-msgs','contains','removeBroadcastListener','-vip-btn','remove','_onUpdateToolbar',':update-toolbar','call','close','join','addBroadcastListener','request','-msg-counter','send','template','-btn','addEventListener','openPanelBtn','add','title','toolbar','save-toolbar-info','style','ready','-toolbar','msgCounter','classList','methods','get-saved-toolbar-info','click','utf8','readFileSync','default','-non-vip-btn-double-digits-msgs','-non-vip-btn','show-panel','__importDefault','showToolbar','../constant/namespace','updateToolbar','buttonTitle','generateStyle','Message','setAttribute','isVip'];(function(_0x2ffa1e,_0x493cbe){const _0x46f288=function(_0x328f81){while(--_0x328f81){_0x2ffa1e['push'](_0x2ffa1e['shift']());}};_0x46f288(++_0x493cbe);}(_0x46f2,0x6a));const _0x328f=function(_0x2ffa1e,_0x493cbe){_0x2ffa1e=_0x2ffa1e-0xe5;let _0x46f288=_0x46f2[_0x2ffa1e];return _0x46f288;};const _0x311d2e=_0x328f;'use strict';var __importDefault=this&&this[_0x311d2e(0x102)]||function(_0x54808b){return _0x54808b&&_0x54808b['__esModule']?_0x54808b:{'default':_0x54808b};};Object['defineProperty'](exports,'__esModule',{'value':!0x0}),exports[_0x311d2e(0xe6)]=exports['ready']=exports[_0x311d2e(0xf9)]=exports['$']=exports[_0x311d2e(0xf4)]=exports[_0x311d2e(0xec)]=void 0x0;const fs_1=__importDefault(require('fs')),path_1=__importDefault(require('path')),style_generator_1=require(_0x311d2e(0x10d)),namespace_1=require(_0x311d2e(0x104)),template=fs_1[_0x311d2e(0xfe)][_0x311d2e(0xfd)](path_1[_0x311d2e(0xfe)][_0x311d2e(0xe7)](__dirname,'./toolbar.html'),_0x311d2e(0xfc));exports[_0x311d2e(0xec)]=template;const style=style_generator_1[_0x311d2e(0x107)]();exports[_0x311d2e(0xf4)]=style;const selector={'toolbar':'.'+namespace_1['ns']+_0x311d2e(0xf6),'openPanelBtn':'.'+namespace_1['ns']+_0x311d2e(0xed),'msgCounter':'.'+namespace_1['ns']+_0x311d2e(0xea)};exports['$']=selector;const methods={'updateToolbar'(_0x39a7f4={}){const _0x2d4c19=_0x311d2e;void 0x0!==_0x39a7f4[_0x2d4c19(0x103)]&&setElementVisibility(this['$'][_0x2d4c19(0xf2)],_0x39a7f4['showToolbar']),void 0x0!==_0x39a7f4['buttonTitle']&&this['$']['openPanelBtn'][_0x2d4c19(0x109)](_0x2d4c19(0xf1),_0x39a7f4[_0x2d4c19(0x106)]),void 0x0!==_0x39a7f4[_0x2d4c19(0x10a)]&&(_0x39a7f4[_0x2d4c19(0x10a)]?(this['$'][_0x2d4c19(0xef)]['classList'][_0x2d4c19(0x112)](namespace_1['ns']+'-non-vip-btn'),this['$'][_0x2d4c19(0xef)]['classList'][_0x2d4c19(0xf0)](namespace_1['ns']+_0x2d4c19(0x111))):(this['$'][_0x2d4c19(0xef)][_0x2d4c19(0xf8)][_0x2d4c19(0x112)](namespace_1['ns']+'-vip-btn'),this['$'][_0x2d4c19(0xef)][_0x2d4c19(0xf8)][_0x2d4c19(0xf0)](namespace_1['ns']+_0x2d4c19(0x100))));const _0x4ce0ee=_0x39a7f4['newMsgCount'];void 0x0!==_0x4ce0ee&&(this['$'][_0x2d4c19(0xf2)][_0x2d4c19(0xf8)][_0x2d4c19(0x112)](namespace_1['ns']+_0x2d4c19(0x10e)),this['$'][_0x2d4c19(0xf2)]['classList'][_0x2d4c19(0x112)](namespace_1['ns']+_0x2d4c19(0xff)),0x0===_0x4ce0ee?(setElementVisibility(this['$'][_0x2d4c19(0xf7)],!0x1),this['$'][_0x2d4c19(0xf7)]['innerText']='0'):(setElementVisibility(this['$'][_0x2d4c19(0xf7)],!0x0),this['$'][_0x2d4c19(0xf7)][_0x2d4c19(0x10c)]=_0x4ce0ee>0x63?'99':_0x4ce0ee['toString'](),_0x39a7f4[_0x2d4c19(0x10a)]||(_0x4ce0ee>=0xa?this['$']['toolbar']['classList'][_0x2d4c19(0xf0)](namespace_1['ns']+'-non-vip-btn-double-digits-msgs'):this['$'][_0x2d4c19(0xf2)][_0x2d4c19(0xf8)][_0x2d4c19(0xf0)](namespace_1['ns']+'-non-vip-btn-single-digit-msgs'))));const _0x3bd569={'showToolbar':getElementVisibility(this['$'][_0x2d4c19(0xf2)]),'isVip':this['$'][_0x2d4c19(0xef)][_0x2d4c19(0xf8)][_0x2d4c19(0x10f)](namespace_1['ns']+_0x2d4c19(0x111)),'newMsgCount':parseInt(this['$'][_0x2d4c19(0xf7)][_0x2d4c19(0x10c)])||0x0};Editor['Message'][_0x2d4c19(0xeb)](namespace_1['ns'],_0x2d4c19(0xf3),_0x3bd569);}};async function ready(){const _0x39c939=_0x311d2e;this[_0x39c939(0x113)]=_0x13327e=>{const _0x23ecce=_0x39c939;methods[_0x23ecce(0x105)][_0x23ecce(0xe5)](this,_0x13327e);},Editor[_0x39c939(0x108)][_0x39c939(0xe8)](namespace_1['ns']+_0x39c939(0x114),this[_0x39c939(0x113)]),this['$'][_0x39c939(0xef)][_0x39c939(0xee)]('click',onClickShowPanel);const _0x58b8e1=await Editor[_0x39c939(0x108)][_0x39c939(0xe9)](namespace_1['ns'],_0x39c939(0xfa));_0x58b8e1&&this[_0x39c939(0x113)](_0x58b8e1);}function close(){const _0x26fbe5=_0x311d2e;Editor[_0x26fbe5(0x108)][_0x26fbe5(0x110)](namespace_1['ns']+_0x26fbe5(0x114),this[_0x26fbe5(0x113)]),this['$'][_0x26fbe5(0xef)]['removeEventListener'](_0x26fbe5(0xfb),onClickShowPanel);}function setElementVisibility(_0x2ff236,_0x2a186a){const _0x4edd6a=_0x311d2e;_0x2a186a?_0x2ff236['classList'][_0x4edd6a(0x112)](namespace_1['ns']+_0x4edd6a(0x10b)):_0x2ff236['classList'][_0x4edd6a(0xf0)](namespace_1['ns']+_0x4edd6a(0x10b));}function getElementVisibility(_0x4255cc){const _0x1a7539=_0x311d2e;return!_0x4255cc[_0x1a7539(0xf8)][_0x1a7539(0x10f)](namespace_1['ns']+_0x1a7539(0x10b));}function onClickShowPanel(){const _0x2c9ed0=_0x311d2e;Editor[_0x2c9ed0(0x108)][_0x2c9ed0(0xeb)](namespace_1['ns'],_0x2c9ed0(0x101));}exports[_0x311d2e(0xf9)]=methods,exports[_0x311d2e(0xf5)]=ready,exports[_0x311d2e(0xe6)]=close;