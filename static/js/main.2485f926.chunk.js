(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,r){},21:function(e,r){e.exports={user_AUTHENTICATION:"user_AUTHENTICATION",room_EXIT:"room_EXIT",match_STROKE:"match_STROKE",match_READY_NEW_GAME:"match_READY_NEW_GAME",match_WIN:"match_WIN"}},23:function(e,r){e.exports={room_ADD_NEW:"room_ADD_NEW",room_REMOVE:"room_REMOVE",room_UPDATE:"room_UPDATE",room_JOIN:"room_JOIN",room_EXIT:"room_EXIT",match_STROKE:"match_STROKE",match_READY_NEW_GAME:"match_READY_NEW_GAME",score_UPDATE:"score_UPDATE"}},233:function(e,r,t){},234:function(e,r,t){},235:function(e,r,t){},236:function(e,r,t){},237:function(e,r,t){},238:function(e,r,t){},239:function(e,r,t){},245:function(e,r,t){},247:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(34),c=t.n(a),s=t(3),i=t(4),u=t(6),m=t(5),l=t(7),d=t(8),p=t(84),f=t(19),b=t(85),O=t(58),h=t(86),E=t.n(h),v=t(16),g=t.n(v),I=t(22),A=t(252),U=t(249),R=t(25),j=t(20),_=t(96),k=t(57),T=t.n(k),w=t(87),y=t.n(w),C={X:"X",O:"O"},N={API_SERVER_URL:"https://caro-api.herokuapp.com/v1",SOCKET_SERVER_URL:"https://caro-socket.herokuapp.com",CARO_BOARD_ROW:30,CARO_BOARD_COLUMN:48,FIRST_MOVE_SQUARE_TYPE:C.X,SECOND_MOVE_SQUARE_TYPE:C.O},S=t(2),x=t.n(S),D=t(21),P=t.n(D),M=t(88),B=t(10),L=t(13),W=t(23),G=t.n(W),Y=t(89),J=Object(Y.create)({baseURL:N.API_SERVER_URL,headers:{Accept:"application/json","Content-Type":"application/json"}}),q={GET:function(){var e=Object(I.a)(g.a.mark(function e(r){var t,n,o,a,c,s=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{},n=Le.getState(),o=n.user,a=x.a.get(o,["currentUser","token"]),e.prev=3,e.next=6,J.get(r,t,{headers:{Authorization:"Bearer "+a}});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error(c.data.message);case 9:return e.abrupt("return",c.data);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}},e,null,[[3,12]])}));return function(r){return e.apply(this,arguments)}}(),POST:function(){var e=Object(I.a)(g.a.mark(function e(r){var t,n,o,a,c,s=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{},n=Le.getState(),o=n.user,a=x.a.get(o,["currentUser","token"]),e.prev=3,e.next=6,J.post(r,t,{headers:{Authorization:"Bearer "+a}});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error(c.data.message);case 9:return e.abrupt("return",c.data);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}},e,null,[[3,12]])}));return function(r){return e.apply(this,arguments)}}(),PUT:function(){var e=Object(I.a)(g.a.mark(function e(r){var t,n,o,a,c,s=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{},n=Le.getState(),o=n.user,a=x.a.get(o,["currentUser","token"]),e.prev=3,e.next=6,J.put(r,t,{headers:{Authorization:"Bearer "+a}});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error(c.data.message);case 9:return e.abrupt("return",c.data);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}},e,null,[[3,12]])}));return function(r){return e.apply(this,arguments)}}(),DELETE:function(){}},H={getRooms:function(e){return q.GET("/rooms/available",{page:e})},createRoom:function(){return q.POST("/rooms")},joinRoom:function(e){return q.PUT("/rooms/join",{roomId:e})}},V=t(90),K=t.n(V),Q=t(91),X={theme:"sunset",timeout:1e3,layout:"bottomCenter",progressBar:!1},z=function(e){new K.a(Object(L.a)({type:"alert",text:e},X)).show()},F={firstMoveUserId:null,winnerId:null,isCurentUserTurn:!1,squares:{},winningSquares:{},currentUserReadyNewGame:!1,competitorUserReadyNewGame:!1},Z=function(e,r,t,n,o,a){for(var c=Object(B.a)({},e+","+r,!0),s=r-1;s>=0;s--){var i=e+","+s;if(t[i]!==n)break;c[i]=!0}for(var u=r+1;u<a;u++){var m=e+","+u;if(t[m]!==n)break;c[m]=!0}return x.a.keys(c).length>=5?c:null},$=function(e,r,t,n,o){for(var a=Object(B.a)({},e+","+r,!0),c=e-1;c>=0;c--){var s=c+","+r;if(t[s]!==n)break;a[s]=!0}for(var i=e+1;i<o;i++){var u=i+","+r;if(t[u]!==n)break;a[u]=!0}return x.a.keys(a).length>=5?a:null},ee=function(e,r,t,n,o,a){for(var c=Object(B.a)({},e+","+r,!0),s=e-1,i=r-1;s>=0&&i>=0;s--,i--){var u=s+","+i;if(t[u]!==n)break;c[u]=!0}for(var m=e+1,l=r+1;m<o&&l<a;m++,l++){var d=m+","+l;if(t[d]!==n)break;c[d]=!0}return x.a.keys(c).length>=5?c:null},re=function(e,r,t,n,o,a){for(var c=Object(B.a)({},e+","+r,!0),s=e-1,i=r+1;s>=0&&i<a;s--,i++){var u=s+","+i;if(t[u]!==n)break;c[u]=!0}for(var m=e+1,l=r-1;m<o&&l>=0;m++,l--){var d=m+","+l;if(t[d]!==n)break;c[d]=!0}return x.a.keys(c).length>=5?c:null},te=function(e,r,t){for(var n=e[r+","+t],o=[Z,$,ee,re],a=0;a<o.length;a++){var c=o[a](r,t,e,n,N.CARO_BOARD_ROW,N.CARO_BOARD_COLUMN);if(c)return c}},ne=Object(A.a)("match_RESET"),oe=Object(A.a)("match_UPDATE_STATE"),ae=Object(U.a)({match_RESET:function(e,r){var t=r.payload;return Object(L.a)({},x.a.cloneDeep(F),t)},match_UPDATE_STATE:function(e,r){var t=r.payload;return Object(R.a)(e).mergeDeep(t).toJS()}},F),ce=Object(j.a)(function(e,r,t){return{squares:e.squares,row:r,column:t}},function(e){return e.squares[e.row+","+e.column]}),se=Object(j.a)(function(e,r,t){return{winningSquares:e.winningSquares,row:r,column:t}},function(e){return e.winningSquares[e.row+","+e.column]||!1}),ie=ae,ue=t(92),me=t.n(ue),le=Object(A.a)("room_UPDATE_STATE"),de=(Object(A.a)("room_UPDATE_ONE"),Object(A.a)("room_REMOVE")),pe=Object(U.a)({room_UPDATE_STATE:function(e,r){var t=r.payload;return Object(R.a)(e).mergeDeep(t).toJS()},room_REMOVE:function(e,r){var t=r.payload.roomId;return Object(R.a)(e).removeIn(["rooms",t]).toJS()}},{rooms:{},total:0,page:1,limit:20,isGettingRooms:!1,getRoomsError:null,creatingRoom:!1,createRoomError:null,currentRoomId:null}),fe=Object(j.a)(function(e,r){return{rooms:e.rooms,currentUser:r.currentUser}},function(e){var r=e.rooms,t=e.currentUser,n=x.a.filter(r,function(e){return e.status===me.a.WAITING&&e.creatorUserId!==t.id}),o=x.a.sortBy(n,function(e){return-e.updated});return x.a.map(o,function(e){return e.id})}),be=Object(j.a)(function(e,r){return{rooms:e.rooms,roomId:r}},function(e){return e.rooms[e.roomId]}),Oe=pe,he=function(e,r){switch(e){case G.a.room_ADD_NEW:Me(Te({otherUsers:Object(B.a)({},r.creatorUser._id,Object(L.a)({id:r.creatorUser._id},r.creatorUser))})),Me(le({rooms:Object(B.a)({},r.room._id,Object(L.a)({id:r.room._id},r.room))}));break;case G.a.room_REMOVE:var t=r.roomId;Me(de({roomId:t}));break;case G.a.room_JOIN:Me(Te({otherUsers:Object(B.a)({},r.competitorUser._id,Object(L.a)({id:r.competitorUser._id},r.competitorUser))})),Me(le({rooms:Object(B.a)({},r.room._id,Object(L.a)({id:r.room._id},r.room))})),Me(ne({firstMoveUserId:r.room.creatorUserId,isCurentUserTurn:!0}));break;case G.a.room_EXIT:var n=r.roomId,o=Be(),a=o.user,c=o.room,s=a.currentUser;if(n!==c.currentRoomId)return;Me(le({rooms:Object(B.a)({},n,{creatorUserId:s.id,competitorUserId:null})})),Me(ne({firstMoveUserId:null}))}},Ee=function(e,r){switch(e){case G.a.match_STROKE:var t=r.roomId,n=r.row,o=r.column,a=r.competitorUserId,c=Be(),s=c.room,i=c.match,u=c.user;if(t!==s.currentRoomId)return;var m=u.currentUser,l=i.firstMoveUserId,d=n+","+o,p=m.id===l?N.SECOND_MOVE_SQUARE_TYPE:N.FIRST_MOVE_SQUARE_TYPE;Me(oe({squares:Object(B.a)({},d,p)}));var f=Be().match,b=te(f.squares,n,o);Me(oe(b?{winningSquares:b,winnerId:a}:{isCurentUserTurn:!0}));break;case G.a.match_READY_NEW_GAME:if(r.roomId!==Be().room.currentRoomId)return;Me(oe({competitorUserReadyNewGame:!0}))}},ve=Object(A.a)("score_UPDATE_STATE"),ge=Object(U.a)({score_UPDATE_STATE:function(e,r){var t=r.payload;return Object(R.a)(e).mergeDeep(t).toJS()}},{scores:{}}),Ie=Object(j.a)(function(e,r,t){return{scores:e.scores,userId:r,competitorUserId:t}},function(e){return e.scores[e.userId+","+e.competitorUserId]||0}),Ae=ge,Ue=function(e,r){switch(e){case G.a.score_UPDATE:var t=r.scores,n=x.a.reduce(t,function(e,r){var t=r.userId,n=r.competitorUserId,o=r.score;return e[t+","+n]=o,e},{});Me(ve({scores:Object(L.a)({},n)}))}},Re=T()(N.SOCKET_SERVER_URL);y()(T.a.Manager)(Re);var je=Object(M.a)([he,Ee,Ue]);Re.on("connect",function(){var e=Be().user,r=x.a.get(e,["currentUser","token"]);r&&Re.emit(P.a.user_AUTHENTICATION,{token:r}),Re.on("*",function(e){var r=e.data,t=Object(_.a)(r,2),n=t[0],o=t[1];je(n,o)})});var _e=Re,ke={login:function(e){var r=e.accessToken,t=e.facebookId;return q.POST("/users/facebook/login",{accessToken:r,facebookId:t})}},Te=Object(A.a)("user_UPDATE_STATE"),we=Object(U.a)({user_UPDATE_STATE:function(e,r){var t=r.payload;return Object(R.a)(e).mergeDeep(t).toJS()}},{otherUsers:{},currentUser:{},isLogging:!1,loginError:null}),ye=Object(j.a)(function(e,r){return{otherUsers:e.otherUsers,userId:r}},function(e){return e.otherUsers[e.userId]}),Ce=we,Ne=Object(f.c)({global:Ce,room:Oe,user:Object(O.a)({key:"user-a",storage:E.a,whitelist:["currentUser"]},Ce),match:ie,score:Ae}),Se=[b.a],xe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):function(e){return e})(f.a.apply(void 0,Se)),De=Object(f.d)(Ne,xe),Pe=Object(O.b)(De),Me=De.dispatch,Be=De.getState,Le=De,We=t(250),Ge=t(251),Ye=t(43),Je=function(){if(!document.getElementById("caro-spinner")){var e=document.createElement("div");e.id="caro-spinner",document.body.appendChild(e),c.a.render(o.a.createElement("div",{className:"caro-spinner-container"},o.a.createElement(Ye.PacmanLoader,{color:"#95a5a6",size:25})),document.getElementById("caro-spinner"))}},qe=function(){document.getElementById("caro-spinner").remove()},He=(t(233),function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"componentWillMount",value:function(){this.props.currentUserId&&this.props.history.push("/rooms")}},{key:"componentDidUpdate",value:function(e){!e.isLogging&&this.props.isLogging&&Je(),e.isLogging&&!this.props.isLogging&&qe(),!e.currentUserId&&this.props.currentUserId&&this.props.history.push("/rooms")}},{key:"onLoginButtonPressed",value:function(){var e=this,r=window.FB;r.login(function(){r.getLoginStatus(function(r){if("connected"===r.status){var t=r.authResponse,n=t.accessToken,o=t.userID;e.props._login(n,o)}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"login-screen"},o.a.createElement("h1",null,"Caro online"),o.a.createElement("button",{className:"loginBtn loginBtn--facebook",onClick:function(){return e.onLoginButtonPressed()}},"Login with Facebook"))}}]),r}(n.PureComponent)),Ve=Object(d.b)(function(e){var r=e.user;return{currentUserId:r.currentUser.id,isLogging:r.isLogging}},function(e){return{_login:function(r,t){return e(function(e){var r=e.accessToken,t=e.facebookId;return function(){var e=Object(I.a)(g.a.mark(function e(n){var o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(Te({isLogging:!0,loginError:null})),e.prev=1,e.next=4,ke.login({accessToken:r,facebookId:t});case 4:o=e.sent,n(Te({isLogging:!1,currentUser:{id:o._id,facebookId:o.facebookId,username:o.username,avatar:o.avatar,token:o.token}})),_e.emit(P.a.user_AUTHENTICATION,{token:o.token}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Te({isLogging:!1,loginError:e.t0.message}));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(r){return e.apply(this,arguments)}}()}({accessToken:r,facebookId:t}))}}})(He),Ke=function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=this.props.user;return e?o.a.createElement("span",null,e.username):null}}]),r}(n.PureComponent),Qe=Object(d.b)(function(e,r){var t=e.user;return{user:ye(t,r.userId)}})(Ke),Xe=function(e){function r(){var e,t;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=Object(u.a)(this,(e=Object(m.a)(r)).call.apply(e,[this].concat(o)))).onRoomItemClicked=function(){var e=t.props.room;if(!e)return null;t.props._joinRoom(e.id)},t}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=this.props.room;return e?o.a.createElement("tr",{className:"room-item",onClick:this.onRoomItemClicked},o.a.createElement("td",null,o.a.createElement(Qe,{userId:e.creatorUserId})),o.a.createElement("td",{className:"text-right"},"1/2")):null}}]),r}(n.PureComponent),ze=Object(d.b)(function(e,r){var t=e.room;return{room:be(t,r.roomId)}},function(e){return{_joinRoom:function(r){return e(function(e){return function(){var r=Object(I.a)(g.a.mark(function r(t){var n,o,a;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t(le({creatingRoom:!0,createRoomError:null})),r.prev=1,r.next=4,H.joinRoom(e);case 4:n=r.sent,o=n.room,a=n.creatorUser,t(Te({otherUsers:Object(B.a)({},a._id,Object(L.a)({id:a._id},a))})),t(le({rooms:Object(B.a)({},o._id,Object(L.a)({id:o._id},o)),currentRoomId:o._id,creatingRoom:!1})),t(ne({firstMoveUserId:a._id})),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),t(le({creatingRoom:!1,createRoomError:r.t0.message}));case 14:case"end":return r.stop()}},r,null,[[1,11]])}));return function(e){return r.apply(this,arguments)}}()}(r))}}})(Xe),Fe=(t(234),function(e){function r(){var e,t;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=Object(u.a)(this,(e=Object(m.a)(r)).call.apply(e,[this].concat(o)))).trackScrolling=function(){var e=document.getElementById("room-screen-container");t.isBottom(e)&&t.props._getRooms()},t.onNewRoomButtonClicked=function(){t.props._createRoom()},t}return Object(l.a)(r,e),Object(i.a)(r,[{key:"componentDidMount",value:function(){this.props._getRooms(!0),document.addEventListener("scroll",this.trackScrolling)}},{key:"componentDidUpdate",value:function(e){!e.creatingRoom&&this.props.creatingRoom&&Je(),e.creatingRoom&&!this.props.creatingRoom&&qe(),!e.currentRoomId&&this.props.currentRoomId&&this.props.history.push("match")}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"isBottom",value:function(e){return e.getBoundingClientRect().bottom<=window.innerHeight}},{key:"render",value:function(){var e=this.props,r=e.roomIds,t=e.isGettingRooms;return o.a.createElement("div",{id:"room-screen"},o.a.createElement("div",{id:"room-screen-container",className:"container grid-sm"},o.a.createElement("div",{className:"room-status-container"},o.a.createElement("button",{className:"add-button",onClick:this.onNewRoomButtonClicked},"New room")),o.a.createElement("table",{className:"table table-hover"},o.a.createElement("tbody",null,x.a.map(r,function(e){return o.a.createElement(ze,{key:e,roomId:e})}))),o.a.createElement("div",{className:"spinner"},o.a.createElement(Ye.BeatLoader,{size:8,color:"#95a5a6",loading:t}))))}}]),r}(n.PureComponent)),Ze=Object(d.b)(function(e){var r=e.room,t=e.user;return{totalRooms:r.total,roomIds:fe(r,t),isGettingRooms:r.isGettingRooms,creatingRoom:r.creatingRoom,currentRoomId:r.currentRoomId}},function(e){return{_getRooms:function(r){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var r=Object(I.a)(g.a.mark(function r(t,n){var o,a,c,s,i,u,m,l,d;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=n(),a=o.room,c=e?1:a.page+1,!a.isGettingRooms){r.next=4;break}return r.abrupt("return");case 4:if(e||!((c-1)*a.limit>a.total)){r.next=6;break}return r.abrupt("return");case 6:return t(le({isGettingRooms:!0,getRoomsError:null})),r.prev=7,r.next=10,H.getRooms(c,a.limit);case 10:s=r.sent,i=s.rooms,u=s.total,m=s.creatorUsers,l=x.a.reduce(m,function(e,r){return e[r._id]=Object(L.a)({id:r._id},r),e},{}),t(Te({otherUsers:Object(L.a)({},l)})),d=x.a.reduce(i,function(e,r){return e[r._id]=Object(L.a)({id:r._id},r),e},{}),t(le({isGettingRooms:!1,rooms:d,total:u,page:c})),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(7),t(le({isGettingRooms:!1,getRoomsError:r.t0.message}));case 21:case"end":return r.stop()}},r,null,[[7,18]])}));return function(e,t){return r.apply(this,arguments)}}()}(r))},_createRoom:function(){return e(function(){var e=Object(I.a)(g.a.mark(function e(r){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(le({creatingRoom:!0,createRoomError:null})),e.prev=1,e.next=4,H.createRoom();case 4:t=e.sent,r(le({rooms:Object(B.a)({},t._id,Object(L.a)({id:t._id},t)),currentRoomId:t._id,creatingRoom:!1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(le({creatingRoom:!1,createRoomError:e.t0.message}));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(r){return e.apply(this,arguments)}}())}}})(Fe),$e=t(93),er=t.n($e),rr=t(94),tr=t.n(rr),nr=(t(235),function(e){function r(){var e,t;Object(s.a)(this,r);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(m.a)(r)).call.apply(e,[this].concat(c)))).stroke=function(){var e=t.props,r=e.row,n=e.column;t.props._stroke(r,n)},t.renderXO=function(){var e=t.props.squareType;return e?o.a.createElement(n.Fragment,null,e===C.O?o.a.createElement("img",{className:"caro-board-image",alt:"o",src:er.a}):o.a.createElement("img",{className:"caro-board-image",alt:"x",src:tr.a})):null},t}return Object(l.a)(r,e),Object(i.a)(r,[{key:"renderWinningOverlay",value:function(){if(this.props.isWinningSquare)return o.a.createElement("div",{className:"caro-board-square-winning"})}},{key:"render",value:function(){return o.a.createElement("div",{id:"caro-board-square",onClick:this.stroke},this.renderXO(),this.renderWinningOverlay())}}]),r}(n.PureComponent)),or=Object(d.b)(function(e,r){var t=e.match;return{squareType:ce(t,r.row,r.column),isWinningSquare:se(t,r.row,r.column)}},function(e){return{_stroke:function(r,t){return e(function(e,r){return function(t,n){var o=n(),a=o.match,c=o.user,s=o.room,i=a.isCurentUserTurn,u=a.squares,m=a.firstMoveUserId;if(m)if(i){var l=e+","+r;if(!u[l]){var d=c.currentUser,p=d.id===m?N.FIRST_MOVE_SQUARE_TYPE:N.SECOND_MOVE_SQUARE_TYPE,f=s.rooms[s.currentRoomId],b=f.creatorUserId===d.id?f.competitorUserId:f.creatorUserId;t(oe({isCurentUserTurn:!1,squares:Object(B.a)({},l,p)})),_e.emit(P.a.match_STROKE,{roomId:f.id,row:e,column:r,competitorUserId:b,userId:d.id});var O=n().match,h=te(O.squares,e,r);h&&(t(oe({winningSquares:h,winnerId:d.id})),_e.emit(P.a.match_WIN,{userId:d.id,competitorUserId:b}))}}else z("Not your turn!");else z("Waiting user ...")}}(r,t))}}})(nr),ar=(t(236),function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){return o.a.createElement("div",{id:"caro-board"},x.a.map(new Array(N.CARO_BOARD_ROW),function(e,r){return o.a.createElement("div",{className:"caro-board-row",key:r},x.a.map(new Array(N.CARO_BOARD_COLUMN),function(e,t){return o.a.createElement(or,{key:t,row:r,column:t})}))}))}}]),r}(n.PureComponent)),cr=Object(d.b)(function(){return{}},function(e){return{}})(ar),sr=function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=this.props.score;return o.a.createElement("div",{className:"chip"},"Wins: ",e)}}]),r}(n.PureComponent),ir=Object(d.b)(function(e,r){var t=e.score;return{score:Ie(t,r.userId,r.competitorUserId)}},function(e){return{}})(sr),ur=(t(237),function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=this.props,r=e.competitorUser,t=e.userId;return o.a.createElement("div",{id:"current-user"},r?o.a.createElement(n.Fragment,null,o.a.createElement("img",{className:"user-avatar",alt:"avatar",src:r.avatar}),o.a.createElement("p",{className:"user-name text-bold"},r.username),o.a.createElement(ir,{userId:r.id,competitorUserId:t}),o.a.createElement("div",{className:"tool-box"})):o.a.createElement("p",null,"Waiting user..."))}}]),r}(n.PureComponent)),mr=Object(d.b)(function(e,r){var t=e.user;return{competitorUser:ye(t,r.competitorUserId)}},function(e){return{}})(ur),lr=(t(238),function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=this.props,r=e.currentUser,t=e.competitorUserId;return o.a.createElement("div",{id:"current-user"},o.a.createElement("img",{className:"user-avatar",alt:"avatar",src:r.avatar}),o.a.createElement("p",{className:"user-name text-bold"},r.username),o.a.createElement(ir,{userId:r.id,competitorUserId:t}),o.a.createElement("div",{className:"tool-box"}))}}]),r}(n.PureComponent)),dr=Object(d.b)(function(e){return{currentUser:e.user.currentUser}},function(e){return{}})(lr),pr=(t(239),function(e){function r(){var e,t;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=Object(u.a)(this,(e=Object(m.a)(r)).call.apply(e,[this].concat(o)))).onBackButtonPressed=function(){t.props._exitRoom()},t.onExitRoomButtonClicked=function(){t.props._exitRoom()},t}return Object(l.a)(r,e),Object(i.a)(r,[{key:"componentWillMount",value:function(){this.props.room||this.props.history.push("/rooms")}},{key:"componentDidMount",value:function(){window.addEventListener("popstate",this.onBackButtonPressed,!1)}},{key:"componentDidUpdate",value:function(e){var r=this.props,t=r.history,n=r.winnerId,o=r.currentUser,a=r.currentUserReadyNewGame,c=r.competitorUserReadyNewGame,s=r.room,i=r._playNewGame,u=r._reMatch,m=r._exitRoom;if(!e.room||s){if(!e.winnerId&&n)!function(e){var r=e.title,t=e.message,n=e.confirmText,o=void 0===n?"Yes":n,a=e.onConfirm,c=e.cancelText,s=void 0===c?"No":c,i=e.onCancel;Object(Q.confirmAlert)({title:r,message:t,buttons:[{label:o,onClick:a},{label:s,onClick:i}]})}({title:n===o.id?"You win":"You lose",message:"Play new game?",cancelText:"Exit room",onConfirm:function(){i()},onCancel:function(){m()}});!e.currentUserReadyNewGame&&a&&Je(),e.currentUserReadyNewGame&&!a&&qe(),!a||!c||e.currentUserReadyNewGame&&e.competitorUserReadyNewGame||u()}else t.push("/rooms")}},{key:"render",value:function(){var e=this.props,r=e.room,t=e.currentUser;if(!r)return null;var n=r.creatorUserId===t.id?r.competitorUserId:r.creatorUserId;return o.a.createElement("div",{id:"match-screen"},o.a.createElement(cr,null),o.a.createElement("div",{className:"user-container"},o.a.createElement(mr,{userId:t.id,competitorUserId:n}),o.a.createElement(dr,{competitorUserId:n}),o.a.createElement("button",{className:"exit-button",onClick:this.onExitRoomButtonClicked},o.a.createElement("i",{className:"fas fa-sign-out-alt fa-lg text-dark"}))))}}]),r}(n.PureComponent)),fr=Object(d.b)(function(e){var r=e.room,t=e.user,n=e.match;return{room:be(r,r.currentRoomId),currentUser:t.currentUser,winnerId:n.winnerId,currentUserReadyNewGame:n.currentUserReadyNewGame,competitorUserReadyNewGame:n.competitorUserReadyNewGame}},function(e){return{_playNewGame:function(){return e(function(e,r){var t=r(),n=t.user,o=t.room,a=t.match,c=n.currentUser;if(a.winnerId){var s=o.rooms[o.currentRoomId],i=s.creatorUserId===c.id?s.competitorUserId:s.creatorUserId;s.competitorUserId&&(e(oe({currentUserReadyNewGame:!0})),_e.emit(P.a.match_READY_NEW_GAME,{roomId:s.id,competitorUserId:i}))}})},_reMatch:function(){return e(function(e,r){var t=r(),n=t.match,o=t.user,a=t.room,c=o.currentUser,s=n.winnerId,i=a.rooms[a.currentRoomId],u=c.id!==s,m=i.creatorUserId===c.id?i.competitorUserId:i.creatorUserId;e(ne({isCurentUserTurn:u,firstMoveUserId:u?c.id:m}))})},_exitRoom:function(){return e(function(e,r){var t=r(),n=t.room,o=t.user,a=n.currentRoomId,c=o.currentUser;if(a){var s=n.rooms[a],i=s.creatorUserId===c.id?s.competitorUserId:s.creatorUserId;e(le({currentRoomId:null})),e(ne()),_e.emit(P.a.room_EXIT,{roomId:a,userId:c.id,competitorUserId:i})}})}}})(pr),br=function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){return o.a.createElement(We.a,null,o.a.createElement("div",{id:"router"},o.a.createElement(Ge.a,{path:"/",exact:!0,component:Ve}),o.a.createElement(Ge.a,{path:"/rooms",exact:!0,component:Ze}),o.a.createElement(Ge.a,{path:"/match",exact:!0,component:fr})))}}]),r}(n.PureComponent),Or=(t(241),t(242),t(243),t(244),t(245),t(246),function(e){function r(){return Object(s.a)(this,r),Object(u.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(l.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){return o.a.createElement(d.a,{store:Le},o.a.createElement(p.a,{loading:null,persistor:Pe},o.a.createElement(br,null)))}}]),r}(n.Component));c.a.render(o.a.createElement(Or,null),document.getElementById("root"))},88:function(e,r,t){"use strict";(function(e){r.a=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t,n){for(var o=function(o){e(function(){r[o](t,n)})},a=0;a<r.length;a++)o(a)}}}).call(this,t(140).setImmediate)},92:function(e,r){e.exports={WAITING:"WAITING",PLAYING:"PLAYING"}},93:function(e,r,t){e.exports=t.p+"static/media/o.daaada35.png"},94:function(e,r){e.exports="data:image/png;base64,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"},97:function(e,r,t){e.exports=t(247)}},[[97,1,2]]]);
//# sourceMappingURL=main.2485f926.chunk.js.map