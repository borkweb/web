(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{351:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f}),a.d(t,"frontMatter",function(){return c});var n=a(6),l=a(7),s=a(10),r=a(8),o=a(9),u=a(0),i=a.n(u),m=a(510),c={},f=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props;return i.a.createElement(m.a,Object.assign({},e,{frontMatter:c}),i.a.createElement("div",null,i.a.createElement("p",null,"Command : Muffs Format  : muffs || muffs ",i.a.createElement("command",null)),i.a.createElement("p",null,"    This command is designed to help you block out players that you do not wish to talk to. Use these commands to set up your muffs and then the muffs will check tells and emotes as they come to you and block them if nessasary."),i.a.createElement("p",null,"    These muffs will not block wizards."),i.a.createElement("p",null,"muffs Lists all your muffs settings."),i.a.createElement("p",null,"muffs m Display your current muffs message."),i.a.createElement("p",null,"muffs m ",i.a.createElement("msg",null,"Sets your muffs message to ",i.a.createElement("msg",null,". This message will be used when someone who is in a group that you are blocking or screening talks to you or emotes to you. They will then get the message."))),i.a.createElement("p",null,"**Settings for the muffs are:"),i.a.createElement("p",null,"  off Lets the message through with no muffs message to the sender."),i.a.createElement("p",null,"  screen Displays the muffs message to the sender and appears not to get through to the target. The target receives the message in the format: (Muffled) ",i.a.createElement("message",null)),i.a.createElement("p",null,"  block Displays the muffs message to the sender and appears not to get through to the target. The target does not receive the message at all."),i.a.createElement("p",null,"**Setting the muffs:"),i.a.createElement("p",null,"muffs c This setting is linked to the player body notifier (help notify). This will list all your muffs settings for the categories in your notify list. muffs c ",i.a.createElement("category",null," ",i.a.createElement("setting",null,"Sets the muffs to ",i.a.createElement("setting",null," for that ",i.a.createElement("category",null,"e.g. muffs c friends screen This example would mean that anyone in your notify friends category who sends you a message will be screened as specified above."))))),i.a.createElement("p",null,"muffs eval Tells you the settings for the eval you are blocking. This muffs setting will be effective on players who are not on your notify list and are BELOW (not the same eval, at a lower eval only) the eval that you specify. muffs eval ",i.a.createElement("number",null," ",i.a.createElement("setting",null,"Sets the muffs setting for players below ",i.a.createElement("number",null," eval. e.g. muffs eval 2 block This will block anyone below eval 2 who trys to send you a message.")))),i.a.createElement("p",null,"muffs else Tells you the muffs setting for all those players who are not on your notify list and are above or equal to the specified eval. muffs else ",i.a.createElement("setting",null,"Muffs will be set to ",i.a.createElement("setting",null," for anyone not on notify list or below eval setting."))),i.a.createElement("p",null,"muffs RESET Will turn off all settings and delete your muffs message.")))}}]),t}(i.a.PureComponent)},508:function(e,t,a){"use strict";var n=a(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),s=(0,n(a(29)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),l.default.createElement("path",{d:"M5 18.08V19h.92l9.06-9.06-.92-.92z",opacity:".3"}),l.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"})),"CreateTwoTone");t.default=s},510:function(e,t,a){"use strict";var n,l=a(6),s=a(7),r=a(10),o=a(8),u=a(9),i=a(0),m=a.n(i),c=a(511),f=a(16),h=a.n(f),p=a(40),d=a.n(p),g=a(36),y=a.n(g),E=a(31),w=a.n(E),b=a(508),v=a.n(b),k=a(5),T=a(90),O=a(30),j=Object(k.withStyles)(O.a,{withTheme:!0})(n=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,a=e.toggleWikiDrawer,n=e.wikiDrawerOpen,l=e.markdown,s=e.classes;return m.a.createElement("div",null,m.a.createElement(T.a,{path:t,markdown:l,toggle:a,open:n}),m.a.createElement(w.a,{className:s.sectionDivider}),m.a.createElement(h.a,{variant:"body1",component:"section"},m.a.createElement("pre",{className:s.textSection},this.props.children)),m.a.createElement("br",null),m.a.createElement(y.a,null,m.a.createElement(d.a,{container:!0,spacing:16},m.a.createElement(d.a,{item:!0},m.a.createElement(v.a,{className:s.createIcon})),m.a.createElement(d.a,{item:!0,xs:12,sm:!0},m.a.createElement(h.a,{variant:"subtitle1"},"This article was written in plain text, most likely copied from the MUD. You can help EotL by ",m.a.createElement(c.a,{to:"/wiki/"},"converting it")," to Markdown.")))))}}]),t}(i.Component))||n;t.a=j}}]);
//# sourceMappingURL=58.9e3619a3.chunk.js.map