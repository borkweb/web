(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"frontMatter",function(){return m});var a=n(6),o=n(7),i=n(10),r=n(8),l=n(9),c=n(0),s=n.n(c),u=n(510),m={},h=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props;return s.a.createElement(u.a,Object.assign({},e,{frontMatter:m}),s.a.createElement("div",null,s.a.createElement("p",null,"Command : Auction. Format  : auction ",s.a.createElement("item",null," for ",s.a.createElement("amount",null," coins, auction status, auction ",s.a.createElement("text",null,"Example : auction sword for 100 coins")))),s.a.createElement("p",null,"      This command has three different uses."),s.a.createElement("p",null,"      First use is to put something up on the auction block.  Once an item is put up for auction it is transferred to a secure location to protect the investment of the auction house.  An auction starts at 30 minutes displayed as 1800 seconds.  Once someone has bid it will drop to 3 minutes to go, displayed as 180 seconds.  See bidding for more on the actual guts of how the auction runs once started.  Once it is over the money, minus a 5% handling fee, is transferred to the buyer's bank account from the seller's and the item is transferred to the buyer's inventory.",s.a.createElement("br",null),"When you first put the item up for auction you will be asked if you wish to buy the item back if no one bids on it.  The buyback fee is the lower of the starting bid amount or 500 coins.  If no one bids on the item and you do not select buyback then the item is kept by the auction house."),s.a.createElement("p",null,"      Second use will tell you if you have anything on the block and what the current status (who's bid, how much, time left) of the auction is."),s.a.createElement("p",null,"      Third use is to talk on the auction channel.  This is essentially an alias for 'channel auction'."),s.a.createElement("p",null,"      Messages relating to the auction are sent to the seller, bidders, and on the auction channel.  This is covered more in depth in the bid file.  The messages can be colored, see the color command."),s.a.createElement("p",null,"      It is worth noting that once you put an item up for bid you do not need to remain logged on for the auction to proceed normally.  Any money you make from items put up for bid is put directly into your account regardless of you being logged in or not."),s.a.createElement("p",null,"See also: bid, color")))}}]),t}(s.a.PureComponent)},508:function(e,t,n){"use strict";var a=n(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=(0,a(n(29)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"}),o.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"})),"CreateTwoTone");t.default=i},510:function(e,t,n){"use strict";var a,o=n(6),i=n(7),r=n(10),l=n(8),c=n(9),s=n(0),u=n.n(s),m=n(511),h=n(16),d=n.n(h),p=n(40),f=n.n(p),b=n(36),y=n.n(b),E=n(31),w=n.n(E),g=n(508),v=n.n(g),k=n(5),O=n(90),j=n(30),M=Object(k.withStyles)(j.a,{withTheme:!0})(a=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,n=e.toggleWikiDrawer,a=e.wikiDrawerOpen,o=e.markdown,i=e.classes;return u.a.createElement("div",null,u.a.createElement(O.a,{path:t,markdown:o,toggle:n,open:a}),u.a.createElement(w.a,{className:i.sectionDivider}),u.a.createElement(d.a,{variant:"body1",component:"section"},u.a.createElement("pre",{className:i.textSection},this.props.children)),u.a.createElement("br",null),u.a.createElement(y.a,null,u.a.createElement(f.a,{container:!0,spacing:16},u.a.createElement(f.a,{item:!0},u.a.createElement(v.a,{className:i.createIcon})),u.a.createElement(f.a,{item:!0,xs:12,sm:!0},u.a.createElement(d.a,{variant:"subtitle1"},"This article was written in plain text, most likely copied from the MUD. You can help EotL by ",u.a.createElement(m.a,{to:"/wiki/"},"converting it")," to Markdown.")))))}}]),t}(s.Component))||a;t.a=M}}]);
//# sourceMappingURL=7.a6d50a4a.chunk.js.map