System.register("chunks:///_virtual/buttons.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,e,i,u,s;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.AudioSource,u=t.Node,s=t.Component}],execute:function(){var c;n._RF.push({},"de417Vx3QxN3ptFyzZl3bTV","buttons",void 0);var r=e.ccclass;e.property,t("buttons",r("buttons")(c=function(t){function n(){for(var o,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return(o=t.call.apply(t,[this].concat(e))||this).time=0,o.audio=void 0,o}o(n,t);var e=n.prototype;return e.onLoad=function(){var t=this;this.audio=this.getComponent(i),this.node.on(u.EventType.MOUSE_ENTER,(function(o){console.log(t.name),0===o.getButton()&&t.audio.play()}),this)},e.update=function(t){0==this.audio.playing&&(this.time=0),this.time+=t},e.onEnable=function(){},e.onClick=function(){this.getComponent(i).play()},n}(s))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./buttons.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});