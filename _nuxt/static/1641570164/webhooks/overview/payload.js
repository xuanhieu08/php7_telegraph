__NUXT_JSONP__("/webhooks/overview", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{document:{slug:"overview",description:"",title:"Webhooks Overview",menuTitle:"Overview",category:"Webhooks",fullscreen:false,position:40,toc:[{id:v,depth:p,text:w},{id:x,depth:p,text:y},{id:z,depth:p,text:A},{id:B,depth:3,text:q}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"Telegram bots can interact with chats and users through a webhook system that enables it to be updated about chats changes, new commands and user interactions without continuously polling Telegram APIs for updates."}]},{type:a,value:e},{type:b,tag:r,props:{id:v},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#default-handler",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:w}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"A default \"do nothing\" handler is shipped with Telegraph installation, it can only handle a single chat command:"}]},{type:a,value:e},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,"language-text"]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"\u002Fchatid\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"And answers with the ID of the chat the command is issued into. It is useful to get the ChatID in order to register a new chat in Telegraph"}]},{type:a,value:e},{type:b,tag:r,props:{id:x},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#custom-handler",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In order to write custom webhook and commands handlers the default handler must be switched with a custom one"}]},{type:a,value:e},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,"language-php"]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F app\u002FHttp\u002FWebhooks\u002FMyWebhookHandler.php"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"class"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"class-name-definition",H]},children:[{type:a,value:"MyWebhookHandler"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"extends"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,H,"class-name-fully-qualified"]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"DefStudio"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"Telegraph"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"Handlers"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"WebhookHandler"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"public"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"function-definition",J]},children:[{type:a,value:"myCustomHandler"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:")"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,"return-type"]},children:[{type:a,value:"void"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F ... My awesome code"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:L,props:{type:L},children:[{type:a,value:e},{type:b,tag:u,props:{},children:[{type:a,value:"Note:"}]},{type:a,value:"\n A custom webhook handler must extend \n"},{type:b,tag:s,props:{},children:[{type:a,value:"DefStudio\\Telegraph\\Handlers\\WebhookHandler"}]},{type:a,value:"\n.\n"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"A detailed description of how WebhookHandlers work can be found in the next sections"}]},{type:a,value:e},{type:b,tag:r,props:{id:z},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#webhook-request-types",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Telegraph can handle two incoming webhook request types: "},{type:b,tag:u,props:{},children:[{type:a,value:q}]},{type:a,value:" and "},{type:b,tag:u,props:{},children:[{type:a,value:"Callback Queries"}]}]},{type:a,value:e},{type:b,tag:"h3",props:{id:B},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#chat-messages",tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:q}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Telegraph bots can receive commands from chats where they are member of. A command starts with"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"[TODO after having checked if telegraph can handle entire messages alongside commands]"}]}]},dir:"\u002Fen\u002Fwebhooks",path:"\u002Fen\u002Fwebhooks\u002Foverview",extension:".md",createdAt:M,updatedAt:M,to:"\u002Fwebhooks\u002Foverview"},prev:{title:"Adding a chat to a Telegraph Bot",path:"\u002Fen\u002Fquickstart\u002Fregister-new-chat",to:"\u002Fquickstart\u002Fregister-new-chat"},next:null}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","p"," ","keyword","a","true",-1,"icon","icon-link","\\",2,"Chat Messages","h2","code","\n    ","strong","default-handler","Default Handler","custom-handler","Custom Handler","webhook-request-types","Webhook request types","chat-messages","div","nuxt-content-highlight","pre","line-numbers","comment","class-name","{","function","}","alert","2022-01-07T15:41:19.502Z")));