(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"frontMatter",function(){return m});var n=a(6),o=a(7),r=a(10),i=a(8),l=a(9),c=a(0),u=a.n(c),s=a(510),m={},h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props;return u.a.createElement(s.a,Object.assign({},e,{frontMatter:m}),u.a.createElement("div",null,u.a.createElement("p",null,"Command : Bid. Format  : bid ",u.a.createElement("amount",null," on ",u.a.createElement("lot",{number:""},", bid ",u.a.createElement("lot",{number:""},", bid Example : bid 100 on 3, bid 3, bid")))),u.a.createElement("p",null,"      This command has three different uses."),u.a.createElement("p",null,'      First use is how you actually bid on an item that has been auctioned. You must bid at least 10% or 100 coins (whichever is more) higher than the previous bid.  You may also use "min" instead of an amount to bid the minimum required amount.  Each bid will add 30 seconds to the remaining duration of the auction.  If you are outbid you will be told.  If you are the seller you are informed of each bid.  Once you bid, the money is taken directly from your account at that time.  If you are outbid your money is put back.'),u.a.createElement("p",null,"      Second use will give you some stats on that lot.  The current amount bid, the time remaining, the short desc, the long desc, any contents."),u.a.createElement("p",null,"      Third use shows everything currently on the auction block."),u.a.createElement("p",null,"      When there are around 30 seconds left in an auction the auctioneer will announce going once on auction channel with the item desc and the current bid amount.  When there are approximately 15 seconds left he will announce going twice.  He will then announce the results of the auction.  These messages all use the auction channel color.  Messages sent directly to you by the auction house can be colored via the color command."),u.a.createElement("p",null,"See also: auction, color")))}}]),t}(u.a.PureComponent)},508:function(e,t,a){"use strict";var n=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(29)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"}),o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"})),"CreateTwoTone");t.default=r},510:function(e,t,a){"use strict";var n,o=a(6),r=a(7),i=a(10),l=a(8),c=a(9),u=a(0),s=a.n(u),m=a(511),h=a(16),d=a.n(h),b=a(40),p=a.n(b),f=a(36),y=a.n(f),E=a(31),w=a.n(E),v=a(508),g=a.n(v),O=a(5),k=a(90),j=a(30),M=Object(O.withStyles)(j.a,{withTheme:!0})(n=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,a=e.toggleWikiDrawer,n=e.wikiDrawerOpen,o=e.markdown,r=e.classes;return s.a.createElement("div",null,s.a.createElement(k.a,{path:t,markdown:o,toggle:a,open:n}),s.a.createElement(w.a,{className:r.sectionDivider}),s.a.createElement(d.a,{variant:"body1",component:"section"},s.a.createElement("pre",{className:r.textSection},this.props.children)),s.a.createElement("br",null),s.a.createElement(y.a,null,s.a.createElement(p.a,{container:!0,spacing:16},s.a.createElement(p.a,{item:!0},s.a.createElement(g.a,{className:r.createIcon})),s.a.createElement(p.a,{item:!0,xs:12,sm:!0},s.a.createElement(d.a,{variant:"subtitle1"},"This article was written in plain text, most likely copied from the MUD. You can help EotL by ",s.a.createElement(m.a,{to:"/wiki/"},"converting it")," to Markdown.")))))}}]),t}(u.Component))||n;t.a=M}}]);
//# sourceMappingURL=9.0959edfc.chunk.js.map