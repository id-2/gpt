"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8130],{51945:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=n(85893),a=n(11151);const i={title:"Assistants",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},o=void 0,r={id:"docs/engineering/assistants",title:"Assistants",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/docs/03-engineering/assistants.md",sourceDirName:"docs/03-engineering",slug:"/docs/engineering/assistants",permalink:"/docs/engineering/assistants",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/03-engineering/assistants.md",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1708673495,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"Assistants",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"docsSidebar",previous:{title:"Engineering Specs",permalink:"/docs/engineering"},next:{title:"Chats",permalink:"/docs/engineering/chats"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>assistant.json</code>",id:"assistantjson",level:2},{value:"Examples",id:"examples",level:3},{value:"Events",id:"events",level:2},{value:"Custom Code",id:"custom-code",level:2},{value:"Tools",id:"tools",level:2},{value:"Functions",id:"functions",level:2},{value:"Files",id:"files",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"This is currently under development."})}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:["In Jan, assistants are ",(0,t.jsx)(s.code,{children:"primary"})," entities with the following capabilities:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Assistants can use ",(0,t.jsx)(s.code,{children:"models"}),", ",(0,t.jsx)(s.code,{children:"tools"}),", handle and emit ",(0,t.jsx)(s.code,{children:"events"}),", and invoke ",(0,t.jsx)(s.code,{children:"custom code"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Users can create custom assistants with saved ",(0,t.jsx)(s.code,{children:"model"})," settings and parameters."]}),"\n",(0,t.jsxs)(s.li,{children:["An ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants",children:"OpenAI Assistants API"})," compatible endpoint at ",(0,t.jsx)(s.code,{children:"localhost:1337/v1/assistants"}),"."]}),"\n",(0,t.jsx)(s.li,{children:'Jan ships with a default assistant called "Jan" that lets you use all models.'}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"/jan\n    /models/\n    /threads/\n    /assistants\n        /jan                  # An assistant available to you by default\n            assistant.json    # See below\n            /src              # Assistants can invoke custom code\n                index.js      # Entrypoint\n                process.js    # For server processes (needs better name)\n            package.json      # Import any npm libraries, e.g. Langchain, Llamaindex\n        /shakespeare          # You can create custom assistants\n            assistant.json\n        /chicken_man\n"})}),"\n",(0,t.jsx)(s.h2,{id:"assistantjson",children:(0,t.jsx)(s.code,{children:"assistant.json"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Each ",(0,t.jsx)(s.code,{children:"assistant"})," folder contains an ",(0,t.jsx)(s.code,{children:"assistant.json"})," file, which is a representation of an assistant."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assistant.json"})," contains metadata and model parameter overrides"]}),"\n",(0,t.jsx)(s.li,{children:"There are no required fields."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'{\n  "id": "asst_abc123",                // Defaults to foldername\n  "object": "assistant",              // Always "assistant"\n  "version": 1,                       // Defaults to 1\n  "created_at": 1698984975,\n  "name": "Math Tutor",               // Defaults to foldername\n  "description": null,\n  "avatar": "https://pic.png",\n  "models": [                         // Defaults to "*" all models\n      { ...model_0 }\n  ],\n  "instructions": "Be concise",       // A system prompt for the assistant\n  "events": [],                       // Defaults to "*"\n  "metadata": {},                     // Defaults to {}\n  // "tools": [],                     // Coming soon\n  // "file_ids": [],                  // Coming soon\n  // "memory/threads": true,          // Coming soon\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Here's what the default Jan assistant's json file looks like:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'{\n  "name": "Jan",\n  "description": "A global assistant that lets you chat with all downloaded models",\n  "avatar": "https://jan.ai/img/logo.svg",\n  // All other properties are not explicitly declared and use the default values (see above).\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(s.p,{children:"Jan assistants can respond to event hooks. More powerfully, Jan assistants can register their own pubsub, so other entities, like other assistants can respond to your assistants events."}),"\n",(0,t.jsx)(s.h2,{id:"custom-code",children:"Custom Code"}),"\n",(0,t.jsx)(s.p,{children:"Jan assistants are Turing complete. This means you can write freeform code, and use any dependencies, when customizing your assistant."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:'import {events, models} from "@janhq/core"\nimport {retrieval} from "@hiro/best-rag-ever" // This can be featured on Jan hub but install from npm\n\nevents.on(\'assistant:asst_abc123\', (event) => async {\n    const result = models[0].process(event)\n    events.emit("assistant:asst_abc123", result)\n    resolve()\n})\n'})}),"\n",(0,t.jsx)(s.h2,{id:"tools",children:"Tools"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Coming soon"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Coming soon"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Coming soon"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>o});var t=n(67294);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);