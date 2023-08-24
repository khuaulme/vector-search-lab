"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="\ud83e\uddb8 Advanced Aggregation Pipelines",s={unversionedId:"aggregations/advanced-aggregation",id:"aggregations/advanced-aggregation",title:"\ud83e\uddb8 Advanced Aggregation Pipelines",description:"You can also use aggregation pipelines to perform more advanced operations on your data.",source:"@site/docs/3-aggregations/2-advanced-aggregation.mdx",sourceDirName:"3-aggregations",slug:"/aggregations/advanced-aggregation",permalink:"/vector-search-lab/docs/aggregations/advanced-aggregation",draft:!1,editUrl:"https://github.com/mongodb-developer/vector-search-lab/blob/main/docs/3-aggregations/2-advanced-aggregation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Aggregation Pipelines",permalink:"/vector-search-lab/docs/aggregations/aggregation"},next:{title:"Atlas Search",permalink:"/vector-search-lab/docs/category/atlas-search"}},l={},c=[{value:"Exercises",id:"exercises",level:2},{value:"Return a collection with the cast members of the movie with the most comments?",id:"return-a-collection-with-the-cast-members-of-the-movie-with-the-most-comments",level:3},{value:"What are the three countries that produced the most Dramas?",id:"what-are-the-three-countries-that-produced-the-most-dramas",level:3},{value:"Which actor appears in the highest number of movies?",id:"which-actor-appears-in-the-highest-number-of-movies",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-advanced-aggregation-pipelines"},"\ud83e\uddb8 Advanced Aggregation Pipelines"),(0,a.kt)("p",null,"You can also use aggregation pipelines to perform more advanced operations on your data."),(0,a.kt)("h2",{id:"exercises"},"Exercises"),(0,a.kt)("p",null,"Try finding the answer to the following questions using aggregation pipelines."),(0,a.kt)("h3",{id:"return-a-collection-with-the-cast-members-of-the-movie-with-the-most-comments"},"Return a collection with the cast members of the movie with the most comments?"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $sort:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        num_mflix_comments: -1,\n      },\n  },\n  {\n    $limit:\n      /**\n       * Provide the number of documents to limit.\n       */\n      1,\n  },\n  {\n    $unwind:\n      /**\n       * path: Path to the array field.\n       * includeArrayIndex: Optional name for index.\n       * preserveNullAndEmptyArrays: Optional\n       *   toggle to unwind null and empty values.\n       */\n      {\n        path: "$cast",\n      },\n  },\n  {\n    $project:\n      /**\n       * specifications: The fields to\n       *   include or exclude.\n       */\n      {\n        cast: 1,\n      },\n  },\n]\n')))),(0,a.kt)("h3",{id:"what-are-the-three-countries-that-produced-the-most-dramas"},"What are the three countries that produced the most Dramas?"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $match:\n      /**\n       * query: The query in MQL.\n       */\n      {\n        genres: "Drama",\n      },\n  },\n  {\n    $unwind:\n      /**\n       * path: Path to the array field.\n       * includeArrayIndex: Optional name for index.\n       * preserveNullAndEmptyArrays: Optional\n       *   toggle to unwind null and empty values.\n       */\n      {\n        path: "$countries",\n      },\n  },\n  {\n    $group:\n      /**\n       * _id: The id of the group.\n       * fieldN: The first field name.\n       */\n      {\n        _id: "$countries",\n        count: {\n          $sum: 1,\n        },\n      },\n  },\n  {\n    $sort:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        count: -1,\n      },\n  },\n  {\n    $limit:\n      /**\n       * Provide the number of documents to limit.\n       */\n      3,\n  },\n]\n')))),(0,a.kt)("h3",{id:"which-actor-appears-in-the-highest-number-of-movies"},"Which actor appears in the highest number of movies?"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $unwind:\n      /**\n       * path: Path to the array field.\n       * includeArrayIndex: Optional name for index.\n       * preserveNullAndEmptyArrays: Optional\n       *   toggle to unwind null and empty values.\n       */\n      {\n        path: "$cast",\n      },\n  },\n  {\n    $group:\n      /**\n       * _id: The id of the group.\n       * fieldN: The first field name.\n       */\n      {\n        _id: "$cast",\n        count: {\n          $sum: 1,\n        },\n      },\n  },\n  {\n    $sort:\n      /**\n       * Provide any number of field/order pairs.\n       */\n      {\n        count: -1,\n      },\n  },\n  {\n    $limit:\n      /**\n       * Provide the number of documents to limit.\n       */\n      1,\n  },\n]\n')))))}p.isMDXComponent=!0}}]);