"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2116],{35990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);const l={title:"Import Models Using Absolute Filepath",slug:"/guides/using-models/import-models-using-absolute-filepath",description:"Guide to import model using absolute filepath in Jan.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","absolute-filepath"]},s=void 0,a={id:"guides/using-models/import-models-using-absolute-filepath",title:"Import Models Using Absolute Filepath",description:"Guide to import model using absolute filepath in Jan.",source:"@site/docs/guides/04-using-models/03-import-models-using-absolute-filepath.mdx",sourceDirName:"guides/04-using-models",slug:"/guides/using-models/import-models-using-absolute-filepath",permalink:"/guides/using-models/import-models-using-absolute-filepath",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/04-using-models/03-import-models-using-absolute-filepath.mdx",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1708673495,formattedLastUpdatedAt:"Feb 23, 2024",sidebarPosition:3,frontMatter:{title:"Import Models Using Absolute Filepath",slug:"/guides/using-models/import-models-using-absolute-filepath",description:"Guide to import model using absolute filepath in Jan.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model","import-models-manually","absolute-filepath"]},sidebar:"guidesSidebar",previous:{title:"Import Models Manually",permalink:"/guides/using-models/import-manually"},next:{title:"Integrate With a Remote Server",permalink:"/guides/using-models/integrate-with-remote-server"}},r={},d=[{value:"1. Get the Absolute Filepath of the Model",id:"1-get-the-absolute-filepath-of-the-model",level:3},{value:"2. Configure the Model JSON",id:"2-configure-the-model-json",level:3},{value:"3. Start the Model",id:"3-start-the-model",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In this guide, we will walk you through the process of importing a model using an absolute filepath in Jan, using our latest model, ",(0,o.jsx)(t.a,{href:"https://huggingface.co/janhq/trinity-v1-GGUF",children:"Trinity"}),", as an example."]}),"\n",(0,o.jsx)(t.h3,{id:"1-get-the-absolute-filepath-of-the-model",children:"1. Get the Absolute Filepath of the Model"}),"\n",(0,o.jsx)(t.p,{children:"After downloading .gguf model, you can get the absolute filepath of the model file."}),"\n",(0,o.jsx)(t.h3,{id:"2-configure-the-model-json",children:"2. Configure the Model JSON"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to the ",(0,o.jsx)(t.code,{children:"~/jan/models"})," folder."]}),"\n",(0,o.jsxs)(t.li,{children:["Create a folder named ",(0,o.jsx)(t.code,{children:"<modelname>"}),", for example, ",(0,o.jsx)(t.code,{children:"tinyllama"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Create a ",(0,o.jsx)(t.code,{children:"model.json"})," file inside the folder, including the following configurations:"]}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Ensure the ",(0,o.jsx)(t.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure the ",(0,o.jsx)(t.code,{children:"url"})," property is the direct binary download link ending in ",(0,o.jsx)(t.code,{children:".gguf"}),". Now, you can use the absolute filepath of the model file."]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure the ",(0,o.jsx)(t.code,{children:"engine"})," property is set to ",(0,o.jsx)(t.code,{children:"nitro"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "sources": [\n    {\n      "filename": "tinyllama.gguf",\n      // highlight-next-line\n      "url": "<absolute-filepath-of-the-model-file>"\n    }\n  ],\n  "id": "tinyllama-1.1b",\n  "object": "model",\n  "name": "(Absolute Path) TinyLlama Chat 1.1B Q4",\n  "version": "1.0",\n  "description": "TinyLlama is a tiny model with only 1.1B. It\'s a good model for less powerful computers.",\n  "format": "gguf",\n  "settings": {\n    "ctx_len": 4096,\n    "prompt_template": "<|system|>\\n{system_message}<|user|>\\n{prompt}<|assistant|>",\n    "llama_model_path": "tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf"\n  },\n  "parameters": {\n    "temperature": 0.7,\n    "top_p": 0.95,\n    "stream": true,\n    "max_tokens": 2048,\n    "stop": [],\n    "frequency_penalty": 0,\n    "presence_penalty": 0\n  },\n  "metadata": {\n    "author": "TinyLlama",\n    "tags": ["Tiny", "Foundation Model"],\n    "size": 669000000\n  },\n  "engine": "nitro"\n}\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you are using Windows, you need to use double backslashes in the url property, for example: ",(0,o.jsx)(t.code,{children:"C:\\\\Users\\\\username\\\\filename.gguf"}),"."]}),"\n"]})}),"\n",(0,o.jsx)(t.h3,{id:"3-start-the-model",children:"3. Start the Model"}),"\n",(0,o.jsx)(t.p,{children:"Restart Jan and navigate to the Hub. Locate your model and click the Use button."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Demo",src:n(70448).Z+"",width:"1036",height:"720"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},70448:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/03-demo-absolute-filepath-30eba9b3b5fefab730db5cd5f2557f22.gif"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const i={},l=o.createContext(i);function s(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);