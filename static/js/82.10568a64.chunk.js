(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{374:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"frontMatter",function(){return h});var n=a(8),l=a(9),o=a(12),r=a(10),s=a(11),u=a(0),c=a.n(u),i=a(509),h={},m=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props;return c.a.createElement(i.a,Object.assign({},e,{frontMatter:h}),c.a.createElement("div",null,c.a.createElement("p",null,"Command : shout Format  : shout ",c.a.createElement("msg",null,"shout -d ",c.a.createElement("name",null,"shout -a ",c.a.createElement("name",null,"shout -l shout /last [",c.a.createElement("num",null,"] shout /hist shout /censor [on|off]"))))),c.a.createElement("p",null,"The shout command echoes a message to the entire mud, prepended by \"Name shouts: \".  It works much the same way as 'say', but echoes to everyone instead of just to those in your room."),c.a.createElement("p",null,"The shout command is often used as a replacement for 'channel', because it has the added bonus of everyone being able to hear what you say, regardless of whether they want to or not.",c.a.createElement("br",null),"This is understandably abused quite often, so the options -d, -a, and -l were added, with the following uses:"),c.a.createElement("p",null,"        -d ",c.a.createElement("name",null,"     Denies ",c.a.createElement("name",null," from shouting.  When they attempt to shout in the future, they will get a denied message. -a ",c.a.createElement("name",null,"     allows ",c.a.createElement("name",null," to shout again. -l            Lists everyone who is currently shoutbanned."))))),c.a.createElement("p",null,"Then, history was added to the shout channel, in the form of /last, and /hist.  /hist backlogs the last 20 or so shouts (depending on your screen size), and /last lists the last shout made, or the last number of shouts if a number is passed (ie, shout /last 12.)"),c.a.createElement("p",null,"The /censor flag can be used to check whether the shout object is currently censored, and, if you hold Arch rank or above, can be used to change the censorship status for this command."),c.a.createElement("h2",null,"NOTES"),c.a.createElement("ul",null,c.a.createElement("li",null,"Frobs may never shout."),c.a.createElement("li",null,"Mortals cannot generally shout, but there are a few notable exceptions that won't be explained here."),c.a.createElement("li",null,"Wizards may shout, but only if they are not shout banned."),c.a.createElement("li",null,"Arches and above may always shout, regardless."),c.a.createElement("li",null,"Only Arches and above may deny or allow shouters."),c.a.createElement("li",null,"All users may list the shoutbanned, and all users may use the /last and /hist options."),c.a.createElement("li",null,"It is recommended that you use the channel command as an alternative to shouting."),c.a.createElement("li",null,"Mortals that really want to shout can occasionally do so with the suicide command.")),c.a.createElement("p",null,"BUGS"),c.a.createElement("p",null,"    The -a option doesn't appear to work for everyone.",c.a.createElement("br",null),"SEE ALSO"),c.a.createElement("p",null,"    channel, say, tell, whisper, suicide")))}}]),t}(c.a.PureComponent)},507:function(e,t,a){"use strict";var n=a(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),o=(0,n(a(29)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),l.default.createElement("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"}),l.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"})),"CreateTwoTone");t.default=o},509:function(e,t,a){"use strict";var n,l=a(8),o=a(9),r=a(12),s=a(10),u=a(11),c=a(0),i=a.n(c),h=a(510),m=a(17),d=a.n(m),p=a(79),E=a.n(p),b=a(42),f=a.n(b),y=a(31),w=a.n(y),v=a(507),g=a.n(v),O=a(5),k=a(90),j=a(30),M=Object(O.withStyles)(j.a,{withTheme:!0})(n=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,a=e.toggleWikiDrawer,n=e.wikiDrawerOpen,l=e.markdown,o=e.classes;return i.a.createElement("div",null,i.a.createElement(k.a,{path:t,markdown:l,toggle:a,open:n}),i.a.createElement(w.a,{className:o.sectionDivider}),i.a.createElement(d.a,{variant:"body1",component:"section"},i.a.createElement("pre",{className:o.textSection},this.props.children)),i.a.createElement("br",null),i.a.createElement(f.a,null,i.a.createElement(E.a,{container:!0,spacing:16},i.a.createElement(E.a,{item:!0},i.a.createElement(g.a,{className:o.createIcon})),i.a.createElement(E.a,{item:!0,xs:12,sm:!0},i.a.createElement(d.a,{variant:"subtitle1"},"This article was written in plain text, most likely copied from the MUD. You can help EotL by ",i.a.createElement(h.a,{to:"/wiki/"},"converting it")," to Markdown.")))))}}]),t}(c.Component))||n;t.a=M}}]);
//# sourceMappingURL=82.10568a64.chunk.js.map