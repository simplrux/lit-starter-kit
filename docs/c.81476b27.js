System.register(["./c.9e0d7ca5.js"],(function(t){var e,n,r,i,s,o,a,c,h,u,l,f;return{setters:[function(t){e=t._,n=t.a,r=t.b,i=t.d,s=t.f,o=t.g,a=t.h,c=t.A,h=t.C,u=t.T,l=t.e,f=t.c}],execute:function(){
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
var d=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */var m=function(t){function n(e,r,i){var s=t.call(this,r)||this;return s.code=e,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,g.prototype.create),s}return e(n,t),n}(Error),g=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?y(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new m(i,a,r);return c},t}();function y(t,e){return t.replace(v,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var v=/\{\$([^}]+)}/g;
/**
                 * @license
                 * Copyright 2021 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function w(t){return t&&t._delegate?t._delegate:t}var b,E,T,I=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),S="[DEFAULT]",A=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Set}return t.prototype.get=function(t){void 0===t&&(t=S);var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new d;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e=n({identifier:S,optional:!1},t),r=e.identifier,i=e.optional,s=this.normalizeInstanceIdentifier(r);if(!this.isInitialized(s)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n,s;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===(s=t).instantiationMode)try{this.getOrInitializeService({instanceIdentifier:S})}catch(s){}try{for(var o=r(this.instancesDeferred.entries()),a=o.next();!a.done;a=o.next()){var c=i(a.value,2),h=c[0],u=c[1],l=this.normalizeInstanceIdentifier(h);try{var f=this.getOrInitializeService({instanceIdentifier:l});u.resolve(f)}catch(s){}}}catch(s){e={error:s}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=S),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return s(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(a(a([],i(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),i(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=S),this.instances.has(t)},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var s=t.instanceIdentifier,o=void 0===s?S:s,a=t.options,c=void 0===a?{}:a,h=this.normalizeInstanceIdentifier(o);if(this.isInitialized(h))throw Error(this.name+"("+h+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var u=this.getOrInitializeService({instanceIdentifier:h,options:c});try{for(var l=r(this.instancesDeferred.entries()),f=l.next();!f.done;f=l.next()){var d=i(f.value,2),p=d[0],m=d[1];h===this.normalizeInstanceIdentifier(p)&&m.resolve(u)}}catch(g){e={error:g}}finally{try{f&&!f.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}return this.invokeOnInitCallbacks(u,h),u},t.prototype.onInit=function(t){var e=this;return this.onInitCallbacks.add(t),function(){e.onInitCallbacks.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i;try{for(var s=r(this.onInitCallbacks),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(t,e)}catch(c){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===S?void 0:e),options:i}),this.instances.set(n,s),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return this.component?this.component.multipleInstances?t:S:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}(),_=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new A(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
/*! *****************************************************************************
                Copyright (c) Microsoft Corporation. All rights reserved.
                Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                this file except in compliance with the License. You may obtain a copy of the
                License at http://www.apache.org/licenses/LICENSE-2.0
    
                THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                MERCHANTABLITY OR NON-INFRINGEMENT.
    
                See the Apache Version 2.0 License for specific language governing permissions
                and limitations under the License.
                ***************************************************************************** */
function N(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */(T=E||(E={}))[T.DEBUG=0]="DEBUG",T[T.VERBOSE=1]="VERBOSE",T[T.INFO=2]="INFO",T[T.WARN=3]="WARN",T[T.ERROR=4]="ERROR",T[T.SILENT=5]="SILENT";var D={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},C=E.INFO,R=((b={})[E.DEBUG]="log",b[E.VERBOSE]="log",b[E.INFO]="info",b[E.WARN]="warn",b[E.ERROR]="error",b),k=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=R[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,N(["["+i+"]  "+t.name+":"],n))}},L=function(){function t(t){this.name=t,this._logLevel=C,this._logHandler=k,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in E))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?D[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,N([this,E.DEBUG],t)),this._logHandler.apply(this,N([this,E.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,N([this,E.VERBOSE],t)),this._logHandler.apply(this,N([this,E.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,N([this,E.INFO],t)),this._logHandler.apply(this,N([this,E.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,N([this,E.WARN],t)),this._logHandler.apply(this,N([this,E.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,N([this,E.ERROR],t)),this._logHandler.apply(this,N([this,E.ERROR],t))},t}();
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class x{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const O="@firebase/app-exp",M=new L("@firebase/app"),P={[O]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},V=new Map,U=new Map;function F(t,e){try{t.container.addComponent(e)}catch(n){M.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t){const e=t.name;if(U.has(e))return M.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of V.values())F(n,t);return!0}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const B=new g("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class j{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new I("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function $(t,e,n){var r;let i=null!==(r=P[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void M.warn(t.join(" "))}q(new I(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */q(new I("platform-logger",(t=>new x(t)),"PRIVATE")),$(O,"0.0.900-exp.d92a36260",undefined),$("fire-js","");
/*! *****************************************************************************
                Copyright (c) Microsoft Corporation.
    
                Permission to use, copy, modify, and/or distribute this software for any
                purpose with or without fee is hereby granted.
    
                THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                PERFORMANCE OF THIS SOFTWARE.
                ***************************************************************************** */
var K=function(t,e){return(K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function H(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var G,z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Q=Q||{},W=z||self;function Y(){}function X(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function J(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}Math.random();function Z(t,e,n){return t.call.apply(t.bind,arguments)}function tt(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return(et=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Z:tt).apply(null,arguments)}function nt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function rt(){return Date.now()}function it(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Kb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function st(){this.j=this.j,this.i=this.i}st.prototype.j=!1,st.prototype.ja=function(){!this.j&&(this.j=!0,this.G())},st.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var ot=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},at=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ct(t){return Array.prototype.concat.apply([],arguments)}function ht(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function ut(t){return/^[\s\xa0]*$/.test(t)}var lt,ft=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dt(t,e){return-1!=t.indexOf(e)}function pt(t,e){return t<e?-1:t>e?1:0}t:{var mt=W.navigator;if(mt){var gt=mt.userAgent;if(gt){lt=gt;break t}}lt=""}function yt(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function vt(t){var e={};for(var n in t)e[n]=t[n];return e}var wt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bt(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<wt.length;s++)n=wt[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Et(t){return Et[" "](t),t}Et[" "]=Y;var Tt,It,St=dt(lt,"Opera"),At=dt(lt,"Trident")||dt(lt,"MSIE"),_t=dt(lt,"Edge"),Nt=_t||At,Dt=dt(lt,"Gecko")&&!(dt(lt.toLowerCase(),"webkit")&&!dt(lt,"Edge"))&&!(dt(lt,"Trident")||dt(lt,"MSIE"))&&!dt(lt,"Edge"),Ct=dt(lt.toLowerCase(),"webkit")&&!dt(lt,"Edge");function Rt(){var t=W.document;return t?t.documentMode:void 0}t:{var kt="",Lt=(It=lt,Dt?/rv:([^\);]+)(\)|;)/.exec(It):_t?/Edge\/([\d\.]+)/.exec(It):At?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(It):Ct?/WebKit\/(\S+)/.exec(It):St?/(?:Version)[ \/]?(\S+)/.exec(It):void 0);if(Lt&&(kt=Lt?Lt[1]:""),At){var xt=Rt();if(null!=xt&&xt>parseFloat(kt)){Tt=String(xt);break t}}Tt=kt}var Ot,Mt={};function Pt(t){return e=t,n=Mt,Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=function(){for(var e=0,n=ft(String(Tt)).split("."),r=ft(String(t)).split("."),i=Math.max(n.length,r.length),s=0;0==e&&s<i;s++){var o=n[s]||"",a=r[s]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==o[0].length&&0==a[0].length)break;e=pt(0==o[1].length?0:parseInt(o[1],10),0==a[1].length?0:parseInt(a[1],10))||pt(0==o[2].length,0==a[2].length)||pt(o[2],a[2]),o=o[3],a=a[3]}while(0==e)}return 0<=e}();var e,n}W.document&&At?Ot=Rt()||parseInt(Tt,10)||void 0:Ot=void 0;var Vt=Ot,Ut=!At||9<=Number(Vt),Ft=At&&!Pt("9"),qt=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Y,e),W.removeEventListener("test",Y,e)}catch(n){}return t}();function Bt(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function jt(t,e){if(Bt.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(Dt){t:{try{Et(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$t[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}Bt.prototype.b=function(){this.defaultPrevented=!0},it(jt,Bt);var $t={2:"touch",3:"pen",4:"mouse"};jt.prototype.b=function(){jt.X.b.call(this);var t=this.c;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Ft)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(e){}};var Kt="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function Gt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++Ht,this.Y=this.Z=!1}function zt(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function Qt(t){this.src=t,this.a={},this.b=0}function Wt(t,e){var n=e.type;if(n in t.a){var r,i=t.a[n],s=ot(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(zt(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function Yt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.Y&&s.listener==e&&s.capture==!!n&&s.ca==r)return i}return-1}Qt.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.a[s])||(t=this.a[s]=[],this.b++);var o=Yt(t,e,r,i);return-1<o?(e=t[o],n||(e.Z=!1)):((e=new Gt(e,this.src,s,!!r,i)).Z=n,t.push(e)),e};var Xt="closure_lm_"+(1e6*Math.random()|0),Jt={};function Zt(t,e,n,r,i){if(r&&r.once)return ee(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zt(t,e[s],n,r,i);return null}return n=he(n),t&&t[Kt]?t.va(e,n,J(r)?!!r.capture:!!r,i):te(t,e,n,!1,r,i)}function te(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=J(i)?!!i.capture:!!i;if(o&&!Ut)return null;var a,c,h=ae(t);if(h||(t[Xt]=h=new Qt(t)),(n=h.add(e,n,r,o,s)).proxy)return n;if(a=oe,r=c=Ut?function(t){return a.call(c.src,c.listener,t)}:function(t){if(!(t=a.call(c.src,c.listener,t)))return t},n.proxy=r,r.src=t,r.listener=n,t.addEventListener)qt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ie(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ee(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ee(t,e[s],n,r,i);return null}return n=he(n),t&&t[Kt]?t.wa(e,n,J(r)?!!r.capture:!!r,i):te(t,e,n,!0,r,i)}function ne(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ne(t,e[s],n,r,i);else r=J(r)?!!r.capture:!!r,n=he(n),t&&t[Kt]?(t=t.c,(e=String(e).toString())in t.a&&-1<(n=Yt(s=t.a[e],n,r,i))&&(zt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.a[e],t.b--))):t&&(t=ae(t))&&(e=t.a[e.toString()],t=-1,e&&(t=Yt(e,n,r,i)),(n=-1<t?e[t]:null)&&re(n))}function re(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src;if(e&&e[Kt])Wt(e.c,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ie(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ae(e))?(Wt(n,t),0==n.b&&(n.src=null,e[Xt]=null)):zt(t)}}}function ie(t){return t in Jt?Jt[t]:Jt[t]="on"+t}function se(t,e){var n=t.listener,r=t.ca||t.src;return t.Z&&re(t),n.call(r,e)}function oe(t,e){if(t.Y)return!0;if(!Ut){if(!e)t:{e=["window","event"];for(var n=W,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null;break t}e=n}return se(t,e=new jt(e,this))}return se(t,new jt(e,this))}function ae(t){return(t=t[Xt])instanceof Qt?t:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(t){return"function"==typeof t?t:(t[ce]||(t[ce]=function(e){return t.handleEvent(e)}),t[ce])}function ue(){st.call(this),this.c=new Qt(this),this.J=this,this.C=null}function le(t,e){var n,r=t.C;if(r)for(n=[];r;r=r.C)n.push(r);if(t=t.J,r=e.type||e,"string"==typeof e)e=new Bt(e,t);else if(e instanceof Bt)e.target=e.target||t;else{var i=e;bt(e=new Bt(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.a=n[s];i=fe(o,r,!0,e)&&i}if(i=fe(o=e.a=t,r,!0,e)&&i,i=fe(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=fe(o=e.a=n[s],r,!1,e)&&i}function fe(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.Y&&o.capture==n){var a=o.listener,c=o.ca||o.src;o.Z&&Wt(t.c,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}it(ue,st),ue.prototype[Kt]=!0,(G=ue.prototype).addEventListener=function(t,e,n,r){Zt(this,t,e,n,r)},G.removeEventListener=function(t,e,n,r){ne(this,t,e,n,r)},G.G=function(){if(ue.X.G.call(this),this.c){var t,e=this.c;for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)zt(n[r]);delete e.a[t],e.b--}}this.C=null},G.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},G.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)};var de=W.JSON.stringify;function pe(){this.b=this.a=null}var me,ge=new(function(){function t(t,e){this.c=t,this.f=e,this.b=0,this.a=null}return t.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new ve}),(function(t){t.reset()}));function ye(){var t=Te,e=null;return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function ve(){this.next=this.b=this.a=null}function we(t){W.setTimeout((function(){throw t}),0)}function be(t,e){var n;me||(n=W.Promise.resolve(void 0),me=function(){n.then(Ie)}),Ee||(me(),Ee=!0),Te.add(t,e)}pe.prototype.add=function(t,e){var n=ge.get();n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},ve.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},ve.prototype.reset=function(){this.next=this.b=this.a=null};var Ee=!1,Te=new pe;function Ie(){for(var t;t=ye();){try{t.a.call(t.b)}catch(n){we(n)}var e=ge;e.f(t),100>e.b&&(e.b++,t.next=e.a,e.a=t)}Ee=!1}function Se(t,e){ue.call(this),this.b=t||1,this.a=e||W,this.f=et(this.Za,this),this.g=rt()}function Ae(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function _e(t,e,n){if("function"==typeof t)n&&(t=et(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=et(t.handleEvent,t)}return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Ne(t){t.a=_e((function(){t.a=null,t.c&&(t.c=!1,Ne(t))}),t.h);var e=t.b;t.b=null,t.g.apply(null,e)}it(Se,ue),(G=Se.prototype).aa=!1,G.M=null,G.Za=function(){if(this.aa){var t=rt()-this.g;0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),le(this,"tick"),this.aa&&(Ae(this),this.start()))}},G.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=rt())},G.G=function(){Se.X.G.call(this),Ae(this),delete this.a};var De=function(t){function e(e,n){var r=t.call(this)||this;return r.g=e,r.h=n,r.b=null,r.c=!1,r.a=null,r}return function(t,e){function n(){this.constructor=t}K(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:Ne(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(W.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(st);function Ce(t){st.call(this),this.b=t,this.a={}}it(Ce,st);var Re=[];function ke(t,e,n,r){Array.isArray(n)||(n&&(Re[0]=n.toString()),n=Re);for(var i=0;i<n.length;i++){var s=Zt(e,n[i],r||t.handleEvent,!1,t.b||t);if(!s)break;t.a[s.key]=s}}function Le(t){yt(t.a,(function(t,e){this.a.hasOwnProperty(e)&&re(t)}),t),t.a={}}function xe(){this.a=!0}function Oe(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return de(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}Ce.prototype.G=function(){Ce.X.G.call(this),Le(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},xe.prototype.info=function(){};var Me={},Pe=null;function Ve(){return Pe=Pe||new ue}function Ue(t){Bt.call(this,Me.Fa,t)}function Fe(t){var e=Ve();le(e,new Ue(e,t))}function qe(t,e){Bt.call(this,Me.STAT_EVENT,t),this.stat=e}function Be(t){var e=Ve();le(e,new qe(e,t))}function je(t){Bt.call(this,Me.Ga,t)}function $e(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return W.setTimeout((function(){t()}),e)}Me.Fa="serverreachability",it(Ue,Bt),Me.STAT_EVENT="statevent",it(qe,Bt),Me.Ga="timingevent",it(je,Bt);var Ke={NO_ERROR:0,$a:1,nb:2,mb:3,hb:4,lb:5,ob:6,Da:7,TIMEOUT:8,rb:9},He={fb:"complete",Bb:"success",Ea:"error",Da:"abort",tb:"ready",ub:"readystatechange",TIMEOUT:"timeout",pb:"incrementaldata",sb:"progress",ib:"downloadprogress",Jb:"uploadprogress"};function Ge(){}function ze(t){var e;return(e=t.a)||(e=t.a={}),e}function Qe(){}Ge.prototype.a=null;var We,Ye={OPEN:"a",eb:"b",Ea:"c",qb:"d"};function Xe(){Bt.call(this,"d")}function Je(){Bt.call(this,"c")}function Ze(){}function tn(t,e,n,r){this.g=t,this.c=e,this.f=n,this.S=r||1,this.J=new Ce(this),this.P=en,t=Nt?125:void 0,this.R=new Se(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.T=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.V=this.C=this.U=this.I=!1}it(Xe,Bt),it(Je,Bt),it(Ze,Ge),We=new Ze;var en=45e3,nn={},rn={};function sn(t,e,n){t.H=1,t.i=Nn(En(e)),t.j=n,t.I=!0,on(t,null)}function on(t,e){t.u=rt(),hn(t),t.l=En(t.i);var n,r,i,s,o,a,c=t.l,h=t.S;Array.isArray(h)||(h=[String(h)]),qn(c.b,"t",h),t.D=0,t.a=Or(t.g,t.g.C?e:null),0<t.O&&(t.F=new De(et(t.Ca,t,t.a),t.O)),ke(t.J,t.a,"readystatechange",t.Xa),e=t.B?vt(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),Fe(1),n=t.c,r=t.m,i=t.l,s=t.f,o=t.S,a=t.j,n.info((function(){if(n.a)if(a)for(var t="",e=a.split("&"),c=0;c<e.length;c++){var h=e[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");t=2<=l.length&&"type"==l[1]?t+(u+"=")+h+"&":t+(u+"=redacted&")}}else t=null;else t=a;return"XMLHTTP REQ ("+s+") [attempt "+o+"]: "+r+"\n"+i+"\n"+t}))}function an(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=cn(t,n);if(i==rn){4==e&&(t.h=4,Be(14),r=!1),Oe(t.c,t.f,null,"[Incomplete Response]");break}if(i==nn){t.h=4,Be(15),Oe(t.c,t.f,n,"[Invalid Chunk]"),r=!1;break}Oe(t.c,t.f,i,null),pn(t,i)}4==e&&0==n.length&&(t.h=1,Be(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.V&&(t.V=!0,(e=t.g).a==t&&e.U&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),_r(e),e.F=!0,Be(11))):(Oe(t.c,t.f,n,"[Invalid Chunked Response]"),dn(t),fn(t))}function cn(t,e){var n=t.D,r=e.indexOf("\n",n);return-1==r?rn:(n=Number(e.substring(n,r)),isNaN(n)?nn:(r+=1)+n>e.length?rn:(e=e.substr(r,n),t.D=r+n,e))}function hn(t){t.T=rt()+t.P,un(t,t.P)}function un(t,e){if(null!=t.o)throw Error("WatchDog timer not null");t.o=$e(et(t.Va,t),e)}function ln(t){t.o&&(W.clearTimeout(t.o),t.o=null)}function fn(t){0==t.g.v||t.A||Cr(t.g,t)}function dn(t){ln(t);var e=t.F;e&&"function"==typeof e.ja&&e.ja(),t.F=null,Ae(t.R),Le(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function pn(t,e){try{var n=t.g;if(0!=n.v&&(n.a==t||zn(n.b,t)))if(n.I=t.N,!t.C&&zn(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t;Dr(n),yr(n)}Ar(n),Be(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=$e(et(n.Sa,n),6e3));if(1>=Gn(n.b)&&n.ea){try{n.ea()}catch(g){}n.ea=void 0}}else kr(n,11)}else if((t.C||n.a==t)&&Dr(n),!ut(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2];var s=i[3];null!=s&&(n.ha=s,n.c.info("VER="+n.ha));var o=i[4];null!=o&&(n.pa=o,n.c.info("SVER="+n.pa));var a=i[5];if(null!=a&&"number"==typeof a&&0<a){var c=1.5*a;n.D=c,n.c.info("backChannelRequestTimeoutMs_="+c)}c=n;var h=t.a;if(h){var u=h.a?h.a.getResponseHeader("X-Client-Wire-Protocol"):null;if(u){var l=c.b;!l.a&&(dt(u,"spdy")||dt(u,"quic")||dt(u,"h2"))&&(l.f=l.g,l.a=new Set,l.b&&(Qn(l,l.b),l.b=null))}if(c.A){var f=h.a?h.a.getResponseHeader("X-HTTP-Session-Id"):null;f&&(c.na=f,_n(c.B,c.A,f))}}n.v=3,n.f&&n.f.ta(),n.U&&(n.N=rt()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"));var d=t;if((c=n).la=xr(c,c.C?c.ga:null,c.fa),d.C){Wn(c.b,d);var p=d,m=c.D;m&&p.setTimeout(m),p.o&&(ln(p),hn(p)),c.a=d}else Sr(c);0<n.g.length&&br(n)}else"stop"!=i[0]&&"close"!=i[0]||kr(n,7);else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?kr(n,7):gr(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0);Fe(4)}catch(g){}}function mn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(X(t)||"string"==typeof t)at(t,e,void 0);else{if(t.L&&"function"==typeof t.L)var n=t.L();else if(t.K&&"function"==typeof t.K)n=void 0;else if(X(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K();if("string"==typeof t)return t.split("");if(X(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function gn(t,e){this.b={},this.a=[],this.c=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof gn)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function yn(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e];vn(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={};for(n=e=0;e<t.a.length;)vn(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++;t.a.length=n}}function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(G=tn.prototype).setTimeout=function(t){this.P=t},G.Xa=function(t){t=t.target;var e=this.F;e&&3==fr(t)?e.f():this.Ca(t)},G.Ca=function(t){try{if(t==this.a)t:{var e=fr(this.a),n=this.a.ua(),r=this.a.W();if(!(3>e||3==e&&!Nt&&!this.a.$())){this.A||4!=e||7==n||Fe(8==n||0>=r?3:2),ln(this);var i=this.a.W();this.N=i;var s=this.a.$();if(this.b=200==i,h=this.c,u=this.m,l=this.l,f=this.f,d=this.S,p=e,m=i,h.info((function(){return"XMLHTTP RESP ("+f+") [ attempt "+d+"]: "+u+"\n"+l+"\n"+p+" "+m})),this.b){if(this.U&&!this.C){e:{if(this.a){var o,a=this.a;if((o=a.a?a.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ut(o)){var c=o;break e}}c=null}if(!c){this.b=!1,this.h=3,Be(12),dn(this),fn(this);break t}Oe(this.c,this.f,c,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,pn(this,c)}this.I?(an(this,e,s),Nt&&this.b&&3==e&&(ke(this.J,this.R,"tick",this.Wa),this.R.start())):(Oe(this.c,this.f,s,null),pn(this,s)),4==e&&dn(this),this.b&&!this.A&&(4==e?Cr(this.g,this):(this.b=!1,hn(this)))}else 400==i&&0<s.indexOf("Unknown SID")?(this.h=3,Be(12)):(this.h=0,Be(13)),dn(this),fn(this)}}}catch(h){}var h,u,l,f,d,p,m},G.Wa=function(){if(this.a){var t=fr(this.a),e=this.a.$();this.D<e.length&&(ln(this),an(this,t,e),this.b&&4!=t&&hn(this))}},G.cancel=function(){this.A=!0,dn(this)},G.Va=function(){this.o=null;var t,e,n=rt();0<=n-this.T?(t=this.c,e=this.l,t.info((function(){return"TIMEOUT: "+e})),2!=this.H&&(Fe(3),Be(17)),dn(this),this.h=2,fn(this)):un(this,this.T-n)},(G=gn.prototype).K=function(){yn(this);for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]]);return t},G.L=function(){return yn(this),this.a.concat()},G.get=function(t,e){return vn(this.b,t)?this.b[t]:e},G.set=function(t,e){vn(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},G.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var wn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bn(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof bn){this.a=void 0!==e?e:t.a,Tn(this,t.f),this.j=t.j,In(this,t.c),Sn(this,t.h),this.g=t.g,e=t.b;var n=new Pn;n.c=e.c,e.a&&(n.a=new gn(e.a),n.b=e.b),An(this,n),this.i=t.i}else t&&(n=String(t).match(wn))?(this.a=!!e,Tn(this,n[1]||"",!0),this.j=Dn(n[2]||""),In(this,n[3]||"",!0),Sn(this,n[4]),this.g=Dn(n[5]||"",!0),An(this,n[6]||"",!0),this.i=Dn(n[7]||"")):(this.a=!!e,this.b=new Pn(null,this.a))}function En(t){return new bn(t)}function Tn(t,e,n){t.f=n?Dn(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function In(t,e,n){t.c=n?Dn(e,!0):e}function Sn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.h=e}else t.h=null}function An(t,e,n){var r,i;e instanceof Pn?(t.b=e,r=t.b,(i=t.a)&&!r.f&&(Vn(r),r.c=null,r.a.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Un(this,e),qn(this,n,t))}),r)),r.f=i):(n||(e=Cn(e,On)),t.b=new Pn(e,t.a))}function _n(t,e,n){t.b.set(e,n)}function Nn(t){return _n(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^rt()).toString(36)),t}function Dn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Rn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Rn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}bn.prototype.toString=function(){var t=[],e=this.f;e&&t.push(Cn(e,kn,!0),":");var n=this.c;return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(Cn(e,kn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(Cn(n,"/"==n.charAt(0)?xn:Ln,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",Cn(n,Mn)),t.join("")};var kn=/[#\/\?@]/g,Ln=/[#\?:]/g,xn=/[#\?]/g,On=/[#\?@]/g,Mn=/#/g;function Pn(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Vn(t){t.a||(t.a=new gn,t.b=0,t.c&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Un(t,e){Vn(t),e=Bn(t,e),vn(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,vn((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&yn(t)))}function Fn(t,e){return Vn(t),e=Bn(t,e),vn(t.a.b,e)}function qn(t,e,n){Un(t,e),0<n.length&&(t.c=null,t.a.set(Bn(t,e),ht(n)),t.b+=n.length)}function Bn(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}(G=Pn.prototype).add=function(t,e){Vn(this),this.c=null,t=Bn(this,t);var n=this.a.get(t);return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},G.forEach=function(t,e){Vn(this),this.a.forEach((function(n,r){at(n,(function(n){t.call(e,n,r,this)}),this)}),this)},G.L=function(){Vn(this);for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},G.K=function(t){Vn(this);var e=[];if("string"==typeof t)Fn(this,t)&&(e=ct(e,this.a.get(Bn(this,t))));else{t=this.a.K();for(var n=0;n<t.length;n++)e=ct(e,t[n])}return e},G.set=function(t,e){return Vn(this),this.c=null,Fn(this,t=Bn(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},G.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},G.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.K(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.c=t.join("&")};var jn=function(t,e){this.b=t,this.a=e};function $n(t){this.g=t||Kn,t=W.PerformanceNavigationTiming?0<(t=W.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(W.ia&&W.ia.ya&&W.ia.ya()&&W.ia.ya().Lb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}var Kn=10;function Hn(t){return!!t.b||!!t.a&&t.a.size>=t.f}function Gn(t){return t.b?1:t.a?t.a.size:0}function zn(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function Qn(t,e){t.a?t.a.add(e):t.b=e}function Wn(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function Yn(t){var e,n;if(null!=t.b)return t.c.concat(t.b.s);if(null!=t.a&&0!==t.a.size){var r=t.c;try{for(var i=H(t.a.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.s)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return ht(t.c)}function Xn(){}function Jn(){this.a=new Xn}function Zn(t,e,n){var r=n||"";try{mn(t,(function(t,n){var i=t;J(t)&&(i=de(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function tr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}$n.prototype.cancel=function(){var t,e;if(this.c=Yn(this),this.b)this.b.cancel(),this.b=null;else if(this.a&&0!==this.a.size){try{for(var n=H(this.a.values()),r=n.next();!r.done;r=n.next())r.value.cancel()}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},Xn.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)},Xn.prototype.parse=function(t){return W.JSON.parse(t,void 0)};var er=W.JSON.parse;function nr(t){ue.call(this),this.headers=new gn,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=rr,this.D=this.F=!1}it(nr,ue);var rr="",ir=/^https?$/i,sr=["POST","PUT"];function or(t){return"content-type"==t.toLowerCase()}function ar(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,cr(t),ur(t)}function cr(t){t.u||(t.u=!0,le(t,"complete"),le(t,"error"))}function hr(t){if(t.b&&void 0!==Q&&(!t.s[1]||4!=fr(t)||2!=t.W()))if(t.l&&4==fr(t))_e(t.za,0,t);else if(le(t,"readystatechange"),4==fr(t)){t.b=!1;try{var e,n=t.W();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.B).match(wn)[1]||null;if(!s&&W.self&&W.self.location){var o=W.self.location.protocol;s=o.substr(0,o.length-1)}i=!ir.test(s?s.toLowerCase():"")}e=i}if(e)le(t,"complete"),le(t,"success");else{t.h=6;try{var a=2<fr(t)?t.a.statusText:""}catch(c){a=""}t.f=a+" ["+t.W()+"]",cr(t)}}finally{ur(t)}}}function ur(t,e){if(t.a){lr(t);var n=t.a,r=t.s[0]?Y:null;t.a=null,t.s=null,e||le(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function lr(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(W.clearTimeout(t.m),t.m=null)}function fr(t){return t.a?t.a.readyState:0}function dr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}var i;r||(i="",yt(n,(function(t,e){i+=e,i+=":",i+=t,i+="\r\n"})),n=i,"string"==typeof t?null!=n&&encodeURIComponent(String(n)):_n(t,e,n))}function pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mr(t){this.pa=0,this.g=[],this.c=new xe,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.V=this.i=this.O=this.l=null,this.Oa=this.R=0,this.La=pr("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.S=!0,this.I=this.oa=this.P=-1,this.T=this.o=this.u=0,this.Ha=pr("baseRetryDelayMs",5e3,t),this.Ra=pr("retryDelaySeedMs",1e4,t),this.Ma=pr("forwardChannelMaxRetries",2,t),this.ma=pr("forwardChannelRequestTimeoutMs",2e4,t),this.Na=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new $n(t&&t.concurrentRequestLimit),this.ka=new Jn,this.da=t&&t.fastHandshake||!1,this.Ia=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.S=!1),this.U=!this.da&&this.S&&t&&t.detectBufferingProxy||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null,(this.Ka=t&&t.c||!1)&&this.c.info("Opt-in to enable Chrome Origin Trials.")}function gr(t){if(vr(t),3==t.v){var e=t.R++,n=En(t.B);_n(n,"SID",t.J),_n(n,"RID",e),_n(n,"TYPE","terminate"),Tr(t,n),(e=new tn(t,t.c,e,void 0)).H=2,e.i=Nn(En(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.i.toString(),"")),!n&&W.Image&&((new Image).src=e.i,n=!0),n||(e.a=Or(e.g,null),e.a.ba(e.i)),e.u=rt(),hn(e)}Lr(t)}function yr(t){t.a&&(_r(t),t.a.cancel(),t.a=null)}function vr(t){yr(t),t.j&&(W.clearTimeout(t.j),t.j=null),Dr(t),t.b.cancel(),t.h&&("number"==typeof t.h&&W.clearTimeout(t.h),t.h=null)}function wr(t,e){t.g.push(new jn(t.Oa++,e)),3==t.v&&br(t)}function br(t){Hn(t.b)||t.h||(t.h=!0,be(t.Ba,t),t.u=0)}function Er(t,e){var n;n=e?e.f:t.R++;var r=En(t.B);_n(r,"SID",t.J),_n(r,"RID",n),_n(r,"AID",t.P),Tr(t,r),t.i&&t.l&&dr(r,t.i,t.l),n=new tn(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=Ir(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),Qn(t.b,n),sn(n,r,e)}function Tr(t,e){t.f&&mn({},(function(t,n){_n(e,n,t)}))}function Ir(t,e,n){n=Math.min(t.g.length,n);var r=t.f?et(t.f.Ja,t.f,t):null;t:for(var i=t.g,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].b,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var h=i[c].b,u=i[c].a;if(0>(h-=s))s=Math.max(0,i[c].b-100),a=!1;else try{Zn(u,o,"req"+h+"_")}catch(l){r&&r(u)}}if(a){r=o.join("&");break t}}return t=t.g.splice(0,n),e.s=t,r}function Sr(t){t.a||t.j||(t.T=1,be(t.Aa,t),t.o=0)}function Ar(t){return!(t.a||t.j||3<=t.o||(t.T++,t.j=$e(et(t.Aa,t),Rr(t,t.o)),t.o++,0))}function _r(t){null!=t.s&&(W.clearTimeout(t.s),t.s=null)}function Nr(t){t.a=new tn(t,t.c,"rpc",t.T),null===t.i&&(t.a.B=t.l),t.a.O=0;var e=En(t.la);_n(e,"RID","rpc"),_n(e,"SID",t.J),_n(e,"CI",t.H?"0":"1"),_n(e,"AID",t.P),Tr(t,e),_n(e,"TYPE","xmlhttp"),t.i&&t.l&&dr(e,t.i,t.l),t.D&&t.a.setTimeout(t.D);var n=t.a;t=t.ga,n.H=1,n.i=Nn(En(e)),n.j=null,n.I=!0,on(n,t)}function Dr(t){null!=t.m&&(W.clearTimeout(t.m),t.m=null)}function Cr(t,e){var n,r,i=null;if(t.a==e){Dr(t),_r(t),t.a=null;var s=2}else{if(!zn(t.b,e))return;i=e.s,Wn(t.b,e),s=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==s){i=e.j?e.j.length:0,e=rt()-e.u;var o=t.u;le(s=Ve(),new je(s,i,e,o)),br(t)}else Sr(t);else if(3==(o=e.h)||0==o&&0<t.I||(1!=s||(r=e,Gn((n=t).b)>=n.b.f-(n.h?1:0)||(n.h?(n.g=r.s.concat(n.g),0):1==n.v||2==n.v||n.u>=(n.La?0:n.Ma)||(n.h=$e(et(n.Ba,n,r),Rr(n,n.u)),n.u++,0))))&&(2!=s||!Ar(t)))switch(i&&0<i.length&&(e=t.b,e.c=e.c.concat(i)),o){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}function Rr(t,e){var n=t.Ha+Math.floor(Math.random()*t.Ra);return t.f||(n*=2),n*e}function kr(t,e){if(t.c.info("Error code "+e),2==e){var n=null;t.f&&(n=null);var r=et(t.Ya,t);n||(n=new bn("//www.google.com/images/cleardot.gif"),W.location&&"http"==W.location.protocol||Tn(n,"https"),Nn(n)),function(t,e){var n=new xe;if(W.Image){var r=new Image;r.onload=nt(tr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nt(tr,n,r,"TestLoadImage: error",!1,e),r.onabort=nt(tr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nt(tr,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Be(2);t.v=0,t.f&&t.f.ra(e),Lr(t),vr(t)}function Lr(t){t.v=0,t.I=-1,t.f&&(0==Yn(t.b).length&&0==t.g.length||(t.b.c.length=0,ht(t.g),t.g.length=0),t.f.qa())}function xr(t,e,n){var r,i=(r=n)instanceof bn?En(r):new bn(r,void 0);if(""!=i.c)e&&In(i,e+"."+i.c),Sn(i,i.h);else{var s=W.location;i=function(t,e,n,r){var i=new bn(null,void 0);return t&&Tn(i,t),e&&In(i,e),n&&Sn(i,n),r&&(i.g=r),i}(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.V&&yt(t.V,(function(t,e){_n(i,e,t)})),e=t.A,n=t.na,e&&n&&_n(i,e,n),_n(i,"VER",t.ha),Tr(t,i),i}function Or(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new nr(t.Na)).F=t.C,e}function Mr(){}function Pr(){if(At&&!(10<=Number(Vt)))throw Error("Environmental error: no available transport.")}function Vr(t,e){ue.call(this),this.a=new mr(e),this.o=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!ut(t)&&(this.a.i=t),this.m=e&&e.supportsCrossDomainXhr||!1,this.l=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ut(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&e in(t=this.b)&&delete t[e]),this.f=new qr(this)}function Ur(t){Xe.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function Fr(){Je.call(this),this.status=1}function qr(t){this.a=t}(G=nr.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t);e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?ze(this.H):ze(We),this.a.onreadystatechange=et(this.za,this);try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(i){return void ar(this,i)}t=n||"";var i,s=new gn(this.headers);r&&mn(r,(function(t,e){s.set(e,t)})),r=function(t){t:{for(var e=or,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.L()),n=W.FormData&&t instanceof W.FormData,!(0<=ot(sr,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{lr(this),0<this.o&&((this.D=(i=this.a,At&&Pt(9)&&"number"==typeof i.timeout&&void 0!==i.ontimeout))?(this.a.timeout=this.o,this.a.ontimeout=et(this.xa,this)):this.m=_e(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(i){ar(this,i)}},G.xa=function(){void 0!==Q&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,le(this,"timeout"),this.abort(8))},G.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,le(this,"complete"),le(this,"abort"),ur(this))},G.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),ur(this,!0)),nr.X.G.call(this)},G.za=function(){this.j||(this.A||this.l||this.g?hr(this):this.Ua())},G.Ua=function(){hr(this)},G.W=function(){try{return 2<fr(this)?this.a.status:-1}catch(T){return-1}},G.$=function(){try{return this.a?this.a.responseText:""}catch(T){return""}},G.Pa=function(t){if(this.a){var e=this.a.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),er(e)}},G.ua=function(){return this.h},G.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(G=mr.prototype).ha=8,G.v=1,G.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++;var e,n=new tn(this,this.c,t,void 0),r=this.l;if(this.O&&(r?bt(r=vt(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var s=this.g[i];if(void 0===(s="__data__"in s.a&&"string"==typeof(s=s.a.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=i;break t}if(4096===e||i===this.g.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Ir(this,n,e),_n(i=En(this.B),"RID",t),_n(i,"CVER",22),this.A&&_n(i,"X-HTTP-Session-Id",this.A),Tr(this,i),this.i&&r&&dr(i,this.i,r),Qn(this.b,n),this.Ia&&_n(i,"TYPE","init"),this.da?(_n(i,"$req",e),_n(i,"SID","null"),n.U=!0,sn(n,i,null)):sn(n,i,e),this.v=2}}else 3==this.v&&(t?Er(this,t):0==this.g.length||Hn(this.b)||Er(this))},G.Aa=function(){if(this.j=null,Nr(this),this.U&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N;this.c.info("BP detection timer enabled: "+t),this.s=$e(et(this.Ta,this),t)}},G.Ta=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,Be(10),yr(this),Nr(this))},G.Sa=function(){null!=this.m&&(this.m=null,yr(this),Ar(this),Be(19))},G.Ya=function(t){t?(this.c.info("Successfully pinged google.com"),Be(2)):(this.c.info("Failed to ping google.com"),Be(1))},(G=Mr.prototype).ta=function(){},G.sa=function(){},G.ra=function(){},G.qa=function(){},G.Ja=function(){},Pr.prototype.a=function(t,e){return new Vr(t,e)},it(Vr,ue),Vr.prototype.g=function(){this.a.f=this.f,this.m&&(this.a.C=!0);var t=this.a,e=this.o,n=this.b||void 0;Be(0),t.fa=e,t.V=n||{},t.H=t.S,t.B=xr(t,null,t.fa),br(t)},Vr.prototype.close=function(){gr(this.a)},Vr.prototype.h=function(t){if("string"==typeof t){var e={};e.__data__=t,wr(this.a,e)}else this.l?((e={}).__data__=de(t),wr(this.a,e)):wr(this.a,t)},Vr.prototype.G=function(){this.a.f=null,delete this.f,gr(this.a),delete this.a,Vr.X.G.call(this)},it(Ur,Xe),it(Fr,Je),it(qr,Mr),qr.prototype.ta=function(){le(this.a,"a")},qr.prototype.sa=function(t){le(this.a,new Ur(t))},qr.prototype.ra=function(t){le(this.a,new Fr(t))},qr.prototype.qa=function(){le(this.a,"b")},Pr.prototype.createWebChannel=Pr.prototype.a,Vr.prototype.send=Vr.prototype.h,Vr.prototype.open=Vr.prototype.g,Vr.prototype.close=Vr.prototype.close,Ke.NO_ERROR=0,Ke.TIMEOUT=8,Ke.HTTP_ERROR=6,He.COMPLETE="complete",Qe.EventType=Ye,Ye.OPEN="a",Ye.CLOSE="b",Ye.ERROR="c",Ye.MESSAGE="d",ue.prototype.listen=ue.prototype.va,nr.prototype.listenOnce=nr.prototype.wa,nr.prototype.getLastError=nr.prototype.Qa,nr.prototype.getLastErrorCode=nr.prototype.ua,nr.prototype.getStatus=nr.prototype.W,nr.prototype.getResponseJson=nr.prototype.Pa,nr.prototype.getResponseText=nr.prototype.$,nr.prototype.send=nr.prototype.ba;var Br=Ke,jr=He,$r=Me,Kr=Qe,Hr=nr;
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */let Gr="8.6.1";
/**
                 * @license
                 * Copyright 2018 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class zr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.t(t),this.i=t=>e.writeSequenceNumber(t))}t(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.i&&this.i(t),t}}zr.o=-1;
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wr extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const Yr=new L("@firebase/firestore");function Xr(){return Yr.logLevel}function Jr(t,...e){if(Yr.logLevel<=E.DEBUG){const n=e.map(ei);Yr.debug(`Firestore (${Gr}): ${t}`,...n)}}function Zr(t,...e){if(Yr.logLevel<=E.ERROR){const n=e.map(ei);Yr.error(`Firestore (${Gr}): ${t}`,...n)}}function ti(t,...e){if(Yr.logLevel<=E.WARN){const n=e.map(ei);Yr.warn(`Firestore (${Gr}): ${t}`,...n)}}function ei(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function ni(t="Unexpected state"){const e=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function ri(t,e){t||ni()}function ii(t,e){return t}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function si(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class oi{static u(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=si(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ai(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}class hi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Wr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Wr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Wr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Wr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ai(this.nanoseconds,t.nanoseconds):ai(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ui{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ui(t)}static min(){return new ui(new hi(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function li(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function di(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class pi{constructor(t,e,n){void 0===e?e=0:e>t.length&&ni(),void 0===n?n=t.length-e:n>t.length-e&&ni(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===pi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class mi extends pi{construct(t,e,n){return new mi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Wr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new mi(e)}static emptyPath(){return new mi([])}}const gi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yi extends pi{construct(t,e,n){return new yi(t,e,n)}static isValidIdentifier(t){return gi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new yi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Wr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Wr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Wr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Wr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yi(e)}static emptyPath(){return new yi([])}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class vi{constructor(t){this.fields=t,t.sort(yi.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ci(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class wi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new wi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new wi(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ai(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wi.EMPTY_BYTE_STRING=new wi("");const bi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(ri(!!t),"string"==typeof t){let e=0;const n=bi.exec(t);if(ri(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ti(t.seconds),nanos:Ti(t.nanos)}}function Ti(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ii(t){return"string"==typeof t?wi.fromBase64String(t):wi.fromUint8Array(t)}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function Si(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ai(t){const e=t.mapValue.fields.__previous_value__;return Si(e)?Ai(e):e}function _i(t){const e=Ei(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function Ni(t){return null==t}function Di(t){return 0===t&&1/t==-1/0}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Ci{constructor(t){this.path=t}static fromPath(t){return new Ci(mi.fromString(t))}static fromName(t){return new Ci(mi.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===mi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return mi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ci(new mi(t.slice()))}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function Ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Si(t)?4:10:ni()}function ki(t,e){const n=Ri(t);if(n!==Ri(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ei(t.timestampValue),r=Ei(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Ii(t.bytesValue).isEqual(Ii(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ti(t.geoPointValue.latitude)===Ti(e.geoPointValue.latitude)&&Ti(t.geoPointValue.longitude)===Ti(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ti(t.integerValue)===Ti(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ti(t.doubleValue),r=Ti(e.doubleValue);return n===r?Di(n)===Di(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],ki);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(li(n)!==li(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ki(n[i],r[i])))return!1;return!0}(t,e);default:return ni()}var r}function Li(t,e){return void 0!==(t.values||[]).find((t=>ki(t,e)))}function xi(t,e){const n=Ri(t),r=Ri(e);if(n!==r)return ai(n,r);switch(n){case 0:return 0;case 1:return ai(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ti(t.integerValue||t.doubleValue),r=Ti(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Oi(t.timestampValue,e.timestampValue);case 4:return Oi(_i(t),_i(e));case 5:return ai(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ii(t),r=Ii(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=ai(n[i],r[i]);if(0!==t)return t}return ai(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ai(Ti(t.latitude),Ti(e.latitude));return 0!==n?n:ai(Ti(t.longitude),Ti(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=xi(n[i],r[i]);if(t)return t}return ai(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=ai(r[o],s[o]);if(0!==t)return t;const e=xi(n[r[o]],i[s[o]]);if(0!==e)return e}return ai(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ni()}}function Oi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ai(t,e);const n=Ei(t),r=Ei(e),i=ai(n.seconds,r.seconds);return 0!==i?i:ai(n.nanos,r.nanos)}function Mi(t){return Pi(t)}function Pi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ei(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ci.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Pi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Pi(t.fields[i])}`;return n+"}"}(t.mapValue):ni();var e,n}function Vi(t){return!!t&&"integerValue"in t}function Ui(t){return!!t&&"arrayValue"in t}function Fi(t){return!!t&&"nullValue"in t}function qi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bi(t){return!!t&&"mapValue"in t}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ji{constructor(t){this.overlayMap=new Map,this.partialValue=t}static empty(){return new ji({mapValue:{}})}field(t){return ji.extractNestedValue(this.buildProto(),t)}toProto(){return this.field(yi.emptyPath())}set(t,e){this.setOverlay(t,e)}setAll(t){t.forEach(((t,e)=>{t?this.set(e,t):this.delete(e)}))}delete(t){this.setOverlay(t,null)}isEqual(t){return ki(this.buildProto(),t.buildProto())}setOverlay(t,e){let n=this.overlayMap;for(let r=0;r<t.length-1;++r){const e=t.get(r);let i=n.get(e);i instanceof Map?n=i:i&&10===Ri(i)?(i=new Map(Object.entries(i.mapValue.fields||{})),n.set(e,i),n=i):(i=new Map,n.set(e,i),n=i)}n.set(t.lastSegment(),e)}applyOverlay(t,e){let n=!1;const r=ji.extractNestedValue(this.partialValue,t),i=Bi(r)?Object.assign({},r.mapValue.fields):{};return e.forEach(((e,r)=>{if(e instanceof Map){const s=this.applyOverlay(t.child(r),e);null!=s&&(i[r]=s,n=!0)}else null!==e?(i[r]=e,n=!0):i.hasOwnProperty(r)&&(delete i[r],n=!0)})),n?{mapValue:{fields:i}}:null}buildProto(){const t=this.applyOverlay(yi.emptyPath(),this.overlayMap);return null!=t&&(this.partialValue=t,this.overlayMap.clear()),this.partialValue}static extractNestedValue(t,e){if(e.isEmpty())return t;{let n=t;for(let t=0;t<e.length-1;++t){if(!n.mapValue.fields)return null;if(n=n.mapValue.fields[e.get(t)],!Bi(n))return null}return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}clone(){return new ji(this.buildProto())}}function $i(t){const e=[];return fi(t.fields||{},((t,n)=>{const r=new yi([t]);if(Bi(n)){const t=$i(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new vi(e);
/**
                   * @license
                   * Copyright 2017 Google LLC
                   *
                   * Licensed under the Apache License, Version 2.0 (the "License");
                   * you may not use this file except in compliance with the License.
                   * You may obtain a copy of the License at
                   *
                   *   http://www.apache.org/licenses/LICENSE-2.0
                   *
                   * Unless required by applicable law or agreed to in writing, software
                   * distributed under the License is distributed on an "AS IS" BASIS,
                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                   * See the License for the specific language governing permissions and
                   * limitations under the License.
                   */}class Ki{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Ki(t,0,ui.min(),ji.empty(),0)}static newFoundDocument(t,e,n){return new Ki(t,1,e,n,0)}static newNoDocument(t,e){return new Ki(t,2,e,ji.empty(),0)}static newUnknownDocument(t,e){return new Ki(t,3,e,ji.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ji.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ki&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Ki(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Hi{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function Gi(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Hi(t,e,n,r,i,s,o)}function zi(t){const e=ii(t);if(null===e.h){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Mi(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=os(e.startAt)),e.endAt&&(t+="|ub:",t+=os(e.endAt)),e.h=t}return e.h}function Qi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!cs(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ki(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!us(t.startAt,e.startAt)&&us(t.endAt,e.endAt)}function Wi(t){return Ci.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Yi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.l(t,e,n):new Xi(t,e,n):"array-contains"===e?new es(t,n):"in"===e?new ns(t,n):"not-in"===e?new rs(t,n):"array-contains-any"===e?new is(t,n):new Yi(t,e,n)}static l(t,e,n){return"in"===e?new Ji(t,n):new Zi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.m(xi(e,this.value)):null!==e&&Ri(this.value)===Ri(e)&&this.m(xi(e,this.value))}m(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ni()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xi extends Yi{constructor(t,e,n){super(t,e,n),this.key=Ci.fromName(n.referenceValue)}matches(t){const e=Ci.comparator(t.key,this.key);return this.m(e)}}class Ji extends Yi{constructor(t,e){super(t,"in",e),this.keys=ts("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Zi extends Yi{constructor(t,e){super(t,"not-in",e),this.keys=ts("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ts(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ci.fromName(t.referenceValue)))}class es extends Yi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ui(e)&&Li(e.arrayValue,this.value)}}class ns extends Yi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Li(this.value.arrayValue,e)}}class rs extends Yi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Li(this.value.arrayValue,e)}}class is extends Yi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Li(this.value.arrayValue,t)))}}class ss{constructor(t,e){this.position=t,this.before=e}}function os(t){return`${t.before?"b":"a"}:${t.position.map((t=>Mi(t))).join(",")}`}class as{constructor(t,e="asc"){this.field=t,this.dir=e}}function cs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function hs(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ci.comparator(Ci.fromName(o.referenceValue),n.key):xi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function us(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ki(t.position[n],e.position[n]))return!1;return!0}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ls{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function fs(t){return new ls(t)}function ds(t){return!Ni(t.limit)&&"F"===t.limitType}function ps(t){return!Ni(t.limit)&&"L"===t.limitType}function ms(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gs(t){for(const e of t.filters)if(e.g())return e.field;return null}function ys(t){const e=ii(t);if(null===e.p){e.p=[];const t=gs(e),n=ms(e);if(null!==t&&null===n)t.isKeyField()||e.p.push(new as(t)),e.p.push(new as(yi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.p.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.p.push(new as(yi.keyField(),t))}}}return e.p}function vs(t){const e=ii(t);if(!e.T)if("F"===e.limitType)e.T=Gi(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ys(e)){const e="desc"===i.dir?"asc":"desc";t.push(new as(i.field,e))}const n=e.endAt?new ss(e.endAt.position,!e.endAt.before):null,r=e.startAt?new ss(e.startAt.position,!e.startAt.before):null;e.T=Gi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.T}function ws(t,e,n){return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bs(t,e){return Qi(vs(t),vs(e))&&t.limitType===e.limitType}function Es(t){return`${zi(vs(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Mi(e.value)}`;var e})).join(", ")}]`),Ni(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+os(t.startAt)),t.endAt&&(e+=", endAt: "+os(t.endAt)),`Target(${e})`}(vs(t))}; limitType=${t.limitType})`}function Is(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ci.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!hs(n.startAt,ys(n),r)||n.endAt&&hs(n.endAt,ys(n),r)));var n,r}function Ss(t){return(e,n)=>{let r=!1;for(const i of ys(t)){const t=As(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function As(t,e,n){const r=t.field.isKeyField()?Ci.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?xi(r,i):ni()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ni()}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function _s(t,e){if(t.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function Ns(t){return{integerValue:""+t}}
/**
                 * @license
                 * Copyright 2018 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
class Ds{constructor(){this._=void 0}}function Cs(t,e,n){return t instanceof Ls?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof xs?Os(t,e):t instanceof Ms?Ps(t,e):function(t,e){const n=ks(t,e),r=Us(n)+Us(t.A);return Vi(n)&&Vi(t.A)?Ns(r):_s(t.R,r)}(t,e)}function Rs(t,e,n){return t instanceof xs?Os(t,e):t instanceof Ms?Ps(t,e):n}function ks(t,e){return t instanceof Vs?Vi(r=e)||(n=r)&&"doubleValue"in n?e:{integerValue:0}:null;var n,r}class Ls extends Ds{}class xs extends Ds{constructor(t){super(),this.elements=t}}function Os(t,e){const n=Fs(e);for(const r of t.elements)n.some((t=>ki(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ms extends Ds{constructor(t){super(),this.elements=t}}function Ps(t,e){let n=Fs(e);for(const r of t.elements)n=n.filter((t=>!ki(t,r)));return{arrayValue:{values:n}}}class Vs extends Ds{constructor(t,e){super(),this.R=t,this.A=e}}function Us(t){return Ti(t.integerValue||t.doubleValue)}function Fs(t){return Ui(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class qs{constructor(t,e){this.version=t,this.transformResults=e}}class Bs{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bs}static exists(t){return new Bs(void 0,t)}static updateTime(t){return new Bs(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function js(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class $s{}function Ks(t,e,n){var r;t instanceof Ws?function(t,e,n){const r=t.value.clone(),i=Js(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ys?function(t,e,n){if(!js(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Js(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Xs(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Hs(t,e,n){var r;t instanceof Ws?function(t,e,n){if(!js(t.precondition,e))return;const r=t.value.clone(),i=Zs(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Qs(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ys?function(t,e,n){if(!js(t.precondition,e))return;const r=Zs(t.fieldTransforms,n,e),i=e.data;i.setAll(Xs(t)),i.setAll(r),e.convertToFoundDocument(Qs(e),i).setHasLocalMutations()}(t,e,n):(r=e,js(t.precondition,r)&&r.convertToNoDocument(ui.min()))}function Gs(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ks(r.transform,t||null);null!=i&&(null==n&&(n=ji.empty()),n.set(r.field,i))}return n||null}function zs(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&ci(n,r,((t,e)=>{return r=e,(n=t).field.isEqual(r.field)&&(i=n.transform,s=r.transform,i instanceof xs&&s instanceof xs||i instanceof Ms&&s instanceof Ms?ci(i.elements,s.elements,ki):i instanceof Vs&&s instanceof Vs?ki(i.A,s.A):i instanceof Ls&&s instanceof Ls);var n,r,i,s}))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}function Qs(t){return t.isFoundDocument()?t.version:ui.min()}class Ws extends $s{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ys extends $s{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Xs(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Js(t,e,n){const r=new Map;ri(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Rs(o,a,n[i]))}return r}function Zs(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Cs(t,s,e))}return r}class to extends $s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class eo extends $s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class no{constructor(t){this.count=t}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */var ro,io;function so(t){if(void 0===t)return Zr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case ro.OK:return Qr.OK;case ro.CANCELLED:return Qr.CANCELLED;case ro.UNKNOWN:return Qr.UNKNOWN;case ro.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case ro.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case ro.INTERNAL:return Qr.INTERNAL;case ro.UNAVAILABLE:return Qr.UNAVAILABLE;case ro.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case ro.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case ro.NOT_FOUND:return Qr.NOT_FOUND;case ro.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case ro.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case ro.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case ro.ABORTED:return Qr.ABORTED;case ro.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case ro.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case ro.DATA_LOSS:return Qr.DATA_LOSS;default:return ni()}}(io=ro||(ro={}))[io.OK=0]="OK",io[io.CANCELLED=1]="CANCELLED",io[io.UNKNOWN=2]="UNKNOWN",io[io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",io[io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",io[io.NOT_FOUND=5]="NOT_FOUND",io[io.ALREADY_EXISTS=6]="ALREADY_EXISTS",io[io.PERMISSION_DENIED=7]="PERMISSION_DENIED",io[io.UNAUTHENTICATED=16]="UNAUTHENTICATED",io[io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",io[io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",io[io.ABORTED=10]="ABORTED",io[io.OUT_OF_RANGE=11]="OUT_OF_RANGE",io[io.UNIMPLEMENTED=12]="UNIMPLEMENTED",io[io.INTERNAL=13]="INTERNAL",io[io.UNAVAILABLE=14]="UNAVAILABLE",io[io.DATA_LOSS=15]="DATA_LOSS";
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
class oo{constructor(t,e){this.comparator=t,this.root=e||co.EMPTY}insert(t,e){return new oo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,co.BLACK,null,null))}remove(t){return new oo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,co.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ao(this.root,t,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ao(this.root,t,this.comparator,!0)}}class ao{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class co{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:co.RED,this.left=null!=r?r:co.EMPTY,this.right=null!=i?i:co.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new co(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return co.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return co.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,co.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,co.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ni();if(this.right.isRed())throw ni();const t=this.left.check();if(t!==this.right.check())throw ni();return t+(this.isRed()?0:1)}}co.EMPTY=null,co.RED=!0,co.BLACK=!1,co.EMPTY=new class{constructor(){this.size=0}get key(){throw ni()}get value(){throw ni()}get color(){throw ni()}get left(){throw ni()}get right(){throw ni()}copy(t,e,n,r,i){return this}insert(t,e,n){return new co(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
class ho{constructor(t){this.comparator=t,this.data=new oo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new uo(this.data.getIterator())}getIteratorFrom(t){return new uo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ho))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ho(this.comparator);return e.data=t,e}}class uo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const lo=new oo(Ci.comparator);function fo(){return lo}const po=new oo(Ci.comparator);function mo(){return po}const go=new oo(Ci.comparator),yo=new ho(Ci.comparator);function vo(...t){let e=yo;for(const n of t)e=e.add(n);return e}const wo=new ho(ai);function bo(){return wo}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Eo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,To.createSynthesizedTargetChangeForCurrentChange(t,e)),new Eo(ui.min(),n,bo(),fo(),vo())}}class To{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new To(wi.EMPTY_BYTE_STRING,e,vo(),vo(),vo())}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Io{constructor(t,e,n,r){this.P=t,this.removedTargetIds=e,this.key=n,this.v=r}}class So{constructor(t,e){this.targetId=t,this.V=e}}class Ao{constructor(t,e,n=wi.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class _o{constructor(){this.S=0,this.D=Co(),this.C=wi.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get $(){return 0!==this.S}get O(){return this.k}M(t){t.approximateByteSize()>0&&(this.k=!0,this.C=t)}F(){let t=vo(),e=vo(),n=vo();return this.D.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ni()}})),new To(this.C,this.N,t,e,n)}L(){this.k=!1,this.D=Co()}B(t,e){this.k=!0,this.D=this.D.insert(t,e)}U(t){this.k=!0,this.D=this.D.remove(t)}q(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class No{constructor(t){this.W=t,this.G=new Map,this.H=fo(),this.J=Do(),this.Y=new ho(ai)}X(t){for(const e of t.P)t.v&&t.v.isFoundDocument()?this.Z(e,t.v):this.tt(e,t.key,t.v);for(const e of t.removedTargetIds)this.tt(e,t.key,t.v)}et(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.st(e)&&n.M(t.resumeToken);break;case 1:n.K(),n.$||n.L(),n.M(t.resumeToken);break;case 2:n.K(),n.$||this.removeTarget(e);break;case 3:this.st(e)&&(n.j(),n.M(t.resumeToken));break;case 4:this.st(e)&&(this.it(e),n.M(t.resumeToken));break;default:ni()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.G.forEach(((t,n)=>{this.st(n)&&e(n)}))}rt(t){const e=t.targetId,n=t.V.count,r=this.ot(e);if(r){const t=r.target;if(Wi(t))if(0===n){const n=new Ci(t.path);this.tt(e,n,Ki.newNoDocument(n,ui.min()))}else ri(1===n);else this.ct(e)!==n&&(this.it(e),this.Y=this.Y.add(e))}}at(t){const e=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Wi(i.target)){const e=new Ci(i.target.path);null!==this.H.get(e)||this.ut(r,e)||this.tt(r,e,Ki.newNoDocument(e,t))}n.O&&(e.set(r,n.F()),n.L())}}));let n=vo();this.J.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ot(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Eo(t,e,this.Y,this.H,n);return this.H=fo(),this.J=Do(),this.Y=new ho(ai),r}Z(t,e){if(!this.st(t))return;const n=this.ut(t,e.key)?2:0;this.nt(t).B(e.key,n),this.H=this.H.insert(e.key,e),this.J=this.J.insert(e.key,this.ht(e.key).add(t))}tt(t,e,n){if(!this.st(t))return;const r=this.nt(t);this.ut(t,e)?r.B(e,1):r.U(e),this.J=this.J.insert(e,this.ht(e).delete(t)),n&&(this.H=this.H.insert(e,n))}removeTarget(t){this.G.delete(t)}ct(t){const e=this.nt(t).F();return this.W.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}q(t){this.nt(t).q()}nt(t){let e=this.G.get(t);return e||(e=new _o,this.G.set(t,e)),e}ht(t){let e=this.J.get(t);return e||(e=new ho(ai),this.J=this.J.insert(t,e)),e}st(t){const e=null!==this.ot(t);return e||Jr("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.G.get(t);return e&&e.$?null:this.W.lt(t)}it(t){this.G.set(t,new _o),this.W.getRemoteKeysForTarget(t).forEach((e=>{this.tt(t,e,null)}))}ut(t,e){return this.W.getRemoteKeysForTarget(t).has(e)}}function Do(){return new oo(Ci.comparator)}function Co(){return new oo(Ci.comparator)}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const Ro={asc:"ASCENDING",desc:"DESCENDING"},ko={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Lo{constructor(t,e){this.databaseId=t,this.I=e}}function xo(t,e){return t.I?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oo(t,e){return t.I?e.toBase64():e.toUint8Array()}function Mo(t,e){return xo(t,e.toTimestamp())}function Po(t){return ri(!!t),ui.fromTimestamp(function(t){const e=Ei(t);return new hi(e.seconds,e.nanos)}(t))}function Vo(t,e){return(n=t,new mi(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Uo(t){const e=mi.fromString(t);return ri(ia(e)),e}function Fo(t,e){return Vo(t.databaseId,e.path)}function qo(t,e){const n=Uo(e);if(n.get(1)!==t.databaseId.projectId)throw new Wr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Wr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ci($o(n))}function Bo(t,e){return Vo(t.databaseId,e)}function jo(t){return new mi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $o(t){return ri(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ko(t,e,n){return{name:Fo(t,e),fields:n.toProto().mapValue.fields}}function Ho(t,e){return{documents:[Bo(t,e.path)]}}function Go(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Bo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(qi(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NAN"}};if(Fi(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qi(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NAN"}};if(Fi(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zo(t.field),op:Jo(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Zo((e=t).field),direction:Xo(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.I||Ni(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Wo(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Wo(e.endAt)),n}function zo(t){let e=function(t){const e=Uo(t);return 4===e.length?mi.emptyPath():$o(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ri(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Qo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new as(ta((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ni(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Yo(n.startAt));let h=null;return n.endAt&&(h=Yo(n.endAt)),new ls(e,i,o,s,a,"F",c,h)}function Qo(t){return t?void 0!==t.unaryFilter?[na(t)]:void 0!==t.fieldFilter?[ea(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Qo(t))).reduce(((t,e)=>t.concat(e))):ni():[]}function Wo(t){return{before:t.before,values:t.position}}function Yo(t){const e=!!t.before,n=t.values||[];return new ss(n,e)}function Xo(t){return Ro[t]}function Jo(t){return ko[t]}function Zo(t){return{fieldPath:t.canonicalString()}}function ta(t){return yi.fromServerFormat(t.fieldPath)}function ea(t){return Yi.create(ta(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return ni()}}(t.fieldFilter.op),t.fieldFilter.value)}function na(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ta(t.unaryFilter.field);return Yi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ta(t.unaryFilter.field);return Yi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ta(t.unaryFilter.field);return Yi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ta(t.unaryFilter.field);return Yi.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return ni()}}function ra(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ia(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class sa{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class oa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ni(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new oa(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof oa?e:oa.resolve(e)}catch(e){return oa.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):oa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):oa.reject(e)}static resolve(t){return new oa(((e,n)=>{e(t)}))}static reject(t){return new oa(((e,n)=>{n(t)}))}static waitFor(t){return new oa(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=oa.resolve(!1);for(const n of t)e=e.next((t=>t?oa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function aa(t){return"IndexedDbTransactionError"===t.name}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ca{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ks(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Hs(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Hs(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(ui.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vo())}isEqual(t){return this.batchId===t.batchId&&ci(this.mutations,t.mutations,((t,e)=>zs(t,e)))&&ci(this.baseMutations,t.baseMutations,((t,e)=>zs(t,e)))}}class ha{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ri(t.mutations.length===n.length);let r=go;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ha(t,e,n,r)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ua{constructor(t,e,n,r,i=ui.min(),s=ui.min(),o=wi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new ua(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ua(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ua(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class la{constructor(t){this.Lt=t}}function fa(t){const e=zo({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ws(e,e.limit,"L"):e}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class da{constructor(){this.Bt=new pa}addToCollectionParentIndex(t,e){return this.Bt.add(e),oa.resolve()}getCollectionParents(t,e){return oa.resolve(this.Bt.getEntries(e))}}class pa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ho(mi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ho(mi.comparator)).toArray()}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ma{constructor(t){this.Ht=t}next(){return this.Ht+=2,this.Ht}static Jt(){return new ma(0)}static Yt(){return new ma(-1)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */async function ga(t){if(t.code!==Qr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Jr("LocalStore","Unexpectedly lost primary lease")}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ya{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){fi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return di(this.inner)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class va{constructor(t,e,n){this.qe=t,this._n=e,this.qt=n}mn(t,e){return this._n.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.gn(t,e,n)))}gn(t,e,n){return this.qe.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}yn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}pn(t,e){return this.qe.getEntries(t,e).next((e=>this.En(t,e).next((()=>e))))}En(t,e){return this._n.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.yn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,Ci.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.In(t,e,n):this.An(t,e,n);var r}Tn(t,e){return this.mn(t,new Ci(e)).next((t=>{let e=mo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}In(t,e,n){const r=e.collectionGroup;let i=mo();return this.qt.getCollectionParents(t,r).next((s=>oa.forEach(s,(s=>{const o=(a=e,c=s.child(r),new ls(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}An(t,e,n){let r,i;return this.qe.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Rn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Ki.newInvalidDocument(n),r=r.insert(n,i)),Hs(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Is(e,n)||(r=r.remove(t))})),r)))}Rn(t,e,n){let r=vo();for(const s of e)for(const t of s.mutations)t instanceof Ys&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.qe.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class wa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pn=n,this.bn=r}static vn(t,e){let n=vo(),r=vo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wa(t,e.fromCache,n,r)}}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ba{Vn(t){this.Sn=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(ui.min())?this.Dn(t,e):this.Sn.pn(t,r).next((i=>{const s=this.Cn(e,i);return(ds(e)||ps(e))&&this.Nn(e.limitType,s,r,n)?this.Dn(t,e):(Xr()<=E.DEBUG&&Jr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ts(e)),this.Sn.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Cn(t,e){let n=new ho(Ss(t));return e.forEach(((e,r)=>{Is(t,r)&&(n=n.add(r))})),n}Nn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(t,e){return Xr()<=E.DEBUG&&Jr("QueryEngine","Using full collection scan to execute query:",Ts(e)),this.Sn.getDocumentsMatchingQuery(t,e,ui.min())}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Ea{constructor(t,e,n,r){this.persistence=t,this.xn=e,this.R=r,this.kn=new oo(ai),this.$n=new ya((t=>zi(t)),Qi),this.On=ui.min(),this._n=t.getMutationQueue(n),this.Mn=t.getRemoteDocumentCache(),this.Ue=t.getTargetCache(),this.Fn=new va(this.Mn,this._n,this.persistence.getIndexManager()),this.Ke=t.getBundleCache(),this.xn.Vn(this.Fn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.kn)))}}async function Ta(t,e){const n=ii(t);let r=n._n,i=n.Fn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n._n.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new va(n.Mn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=vo();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.pn(t,o).next((t=>({Ln:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Fn=i,n.xn.Vn(n.Fn),s}function Ia(t){const e=ii(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ue.getLastRemoteSnapshotVersion(t)))}function Sa(t,e){const n=ii(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n._n.getNextMutationBatchAfterBatchId(t,e))))}async function Aa(t,e,n){const r=ii(t),i=r.kn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!aa(o))throw o;Jr("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.kn=r.kn.remove(e),r.$n.delete(i.target)}function _a(t,e,n){const r=ii(t);let i=ui.min(),s=vo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=ii(t),i=r.$n.get(n);return void 0!==i?oa.resolve(r.kn.get(i)):r.Ue.getTargetData(e,n)}(r,t,vs(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ue.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.xn.getDocumentsMatchingQuery(t,e,n?i:ui.min(),n?s:vo()))).next((t=>({documents:t,Bn:s})))))}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Na{constructor(t){this.R=t,this.Qn=new Map,this.jn=new Map}getBundleMetadata(t,e){return oa.resolve(this.Qn.get(e))}saveBundleMetadata(t,e){var n;return this.Qn.set(e.id,{id:(n=e).id,version:n.version,createTime:Po(n.createTime)}),oa.resolve()}getNamedQuery(t,e){return oa.resolve(this.jn.get(e))}saveNamedQuery(t,e){return this.jn.set(e.name,{name:(n=e).name,query:fa(n.bundledQuery),readTime:Po(n.readTime)}),oa.resolve();var n}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Da{constructor(){this.Wn=new ho(Ca.Gn),this.zn=new ho(Ca.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(t,e){const n=new Ca(t,e);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Yn(new Ca(t,e))}Xn(t,e){t.forEach((t=>this.removeReference(t,e)))}Zn(t){const e=new Ci(new mi([])),n=new Ca(e,t),r=new Ca(e,t+1),i=[];return this.zn.forEachInRange([n,r],(t=>{this.Yn(t),i.push(t.key)})),i}ts(){this.Wn.forEach((t=>this.Yn(t)))}Yn(t){this.Wn=this.Wn.delete(t),this.zn=this.zn.delete(t)}es(t){const e=new Ci(new mi([])),n=new Ca(e,t),r=new Ca(e,t+1);let i=vo();return this.zn.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ca(t,0),n=this.Wn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ca{constructor(t,e){this.key=t,this.ns=e}static Gn(t,e){return Ci.comparator(t.key,e.key)||ai(t.ns,e.ns)}static Hn(t,e){return ai(t.ns,e.ns)||Ci.comparator(t.key,e.key)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Ra{constructor(t,e){this.qt=t,this.referenceDelegate=e,this._n=[],this.ss=1,this.rs=new ho(Ca.Gn)}checkEmpty(t){return oa.resolve(0===this._n.length)}addMutationBatch(t,e,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new ca(i,e,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new Ca(o.key,i)),this.qt.addToCollectionParentIndex(t,o.key.path.popLast());return oa.resolve(s)}lookupMutationBatch(t,e){return oa.resolve(this.os(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.cs(n),i=r<0?0:r;return oa.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return oa.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(t){return oa.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ca(e,0),r=new Ca(e,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(t=>{const e=this.os(t.ns);i.push(e)})),oa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ho(ai);return e.forEach((t=>{const e=new Ca(t,0),r=new Ca(t,Number.POSITIVE_INFINITY);this.rs.forEachInRange([e,r],(t=>{n=n.add(t.ns)}))})),oa.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const s=new Ca(new Ci(i),0);let o=new ho(ai);return this.rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ns)),!0)}),s),oa.resolve(this.us(o))}us(t){const e=[];return t.forEach((t=>{const n=this.os(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ri(0===this.hs(e.batchId,"removed")),this._n.shift();let n=this.rs;return oa.forEach(e.mutations,(r=>{const i=new Ca(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.rs=n}))}Gt(t){}containsKey(t,e){const n=new Ca(e,0),r=this.rs.firstAfterOrEqual(n);return oa.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this._n.length,oa.resolve()}hs(t,e){return this.cs(t)}cs(t){return 0===this._n.length?0:t-this._n[0].batchId}os(t){const e=this.cs(t);return e<0||e>=this._n.length?null:this._n[e]}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class ka{constructor(t,e){this.qt=t,this.ls=e,this.docs=new oo(Ci.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.qt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return oa.resolve(n?n.document.clone():Ki.newInvalidDocument(e))}getEntries(t,e){let n=fo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Ki.newInvalidDocument(t))})),oa.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=fo();const i=new Ci(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Is(e,i)&&(r=r.insert(i.key,i.clone()))}return oa.resolve(r)}fs(t,e){return oa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new La(this)}getSize(t){return oa.resolve(this.size)}}class La extends class{constructor(){this.changes=new ya((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:ui.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Ki.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?oa.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Ie=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Ie.addEntry(t,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),oa.waitFor(e)}getFromCache(t,e){return this.Ie.getEntry(t,e)}getAllFromCache(t,e){return this.Ie.getEntries(t,e)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class xa{constructor(t){this.persistence=t,this.ds=new ya((t=>zi(t)),Qi),this.lastRemoteSnapshotVersion=ui.min(),this.highestTargetId=0,this.ws=0,this._s=new Da,this.targetCount=0,this.gs=ma.Jt()}forEachTarget(t,e){return this.ds.forEach(((t,n)=>e(n))),oa.resolve()}getLastRemoteSnapshotVersion(t){return oa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return oa.resolve(this.ws)}allocateTargetId(t){return this.highestTargetId=this.gs.next(),oa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ws&&(this.ws=e),oa.resolve()}te(t){this.ds.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.gs=new ma(e),this.highestTargetId=e),t.sequenceNumber>this.ws&&(this.ws=t.sequenceNumber)}addTargetData(t,e){return this.te(e),this.targetCount+=1,oa.resolve()}updateTargetData(t,e){return this.te(e),oa.resolve()}removeTargetData(t,e){return this.ds.delete(e.target),this._s.Zn(e.targetId),this.targetCount-=1,oa.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),oa.waitFor(i).next((()=>r))}getTargetCount(t){return oa.resolve(this.targetCount)}getTargetData(t,e){const n=this.ds.get(e)||null;return oa.resolve(n)}addMatchingKeys(t,e,n){return this._s.Jn(e,n),oa.resolve()}removeMatchingKeys(t,e,n){this._s.Xn(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),oa.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._s.Zn(e),oa.resolve()}getMatchingKeysForTargetId(t,e){const n=this._s.es(e);return oa.resolve(n)}containsKey(t,e){return oa.resolve(this._s.containsKey(e))}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Oa{constructor(t,e){var n;this.ys={},this.Ne=new zr(0),this.xe=!1,this.xe=!0,this.referenceDelegate=t(this),this.Ue=new xa(this),this.qt=new da,this.qe=(n=this.qt,new ka(n,(t=>this.referenceDelegate.ps(t)))),this.R=new la(e),this.Ke=new Na(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.qt}getMutationQueue(t){let e=this.ys[t.toKey()];return e||(e=new Ra(this.qt,this.referenceDelegate),this.ys[t.toKey()]=e),e}getTargetCache(){return this.Ue}getRemoteDocumentCache(){return this.qe}getBundleCache(){return this.Ke}runTransaction(t,e,n){Jr("MemoryPersistence","Starting transaction:",t);const r=new Ma(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((t=>this.referenceDelegate.Ts(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Is(t,e){return oa.or(Object.values(this.ys).map((n=>()=>n.containsKey(t,e))))}}class Ma extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Pa{constructor(t){this.persistence=t,this.As=new Da,this.Rs=null}static Ps(t){return new Pa(t)}get bs(){if(this.Rs)return this.Rs;throw ni()}addReference(t,e,n){return this.As.addReference(n,e),this.bs.delete(n.toString()),oa.resolve()}removeReference(t,e,n){return this.As.removeReference(n,e),this.bs.add(n.toString()),oa.resolve()}markPotentiallyOrphaned(t,e){return this.bs.add(e.toString()),oa.resolve()}removeTarget(t,e){this.As.Zn(e.targetId).forEach((t=>this.bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Es(){this.Rs=new Set}Ts(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oa.forEach(this.bs,(n=>{const r=Ci.fromPath(n);return this.vs(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Rs=null,e.apply(t))))}updateLimboDocument(t,e){return this.vs(t,e).next((t=>{t?this.bs.delete(e.toString()):this.bs.add(e.toString())}))}ps(t){return 0}vs(t,e){return oa.or([()=>oa.resolve(this.As.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Is(t,e)])}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Va{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Va.UNAUTHENTICATED=new Va(null),Va.GOOGLE_CREDENTIALS=new Va("google-credentials-uid"),Va.FIRST_PARTY=new Va("first-party-uid");class Ua{constructor(){this.activeTargetIds=bo()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}Cs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fa{constructor(){this.li=new Ua,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.li.Ds(t),this.fi[t]||"not-current"}updateQueryState(t,e,n){this.fi[t]=e}removeLocalQueryTarget(t){this.li.Cs(t)}isLocalQueryTarget(t){return this.li.activeTargetIds.has(t)}clearQueryState(t){delete this.fi[t]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(t){return this.li.activeTargetIds.has(t)}start(){return this.li=new Ua,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class qa{di(t){}shutdown(){}}
/**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Ba{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(t){this.yi.push(t)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){Jr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.yi)t(0)}gi(){Jr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.yi)t(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const ja={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class $a{constructor(t){this.Ei=t.Ei,this.Ti=t.Ti}Ii(t){this.Ai=t}Ri(t){this.Pi=t}onMessage(t){this.bi=t}close(){this.Ti()}send(t){this.Ei(t)}vi(){this.Ai()}Vi(t){this.Pi(t)}Si(t){this.bi(t)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Ka extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Di=e+"://"+t.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(t,e,n,r){const i=this.xi(t,e);Jr("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.$i(t,i,s,n).then((t=>(Jr("RestConnection","Received: ",t),t)),(e=>{throw ti("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Oi(t,e,n,r){return this.Ni(t,e,n,r)}ki(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+Gr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}xi(t,e){const n=ja[t];return`${this.Di}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling}$i(t,e,n,r){return new Promise(((i,s)=>{const o=new Hr;o.listenOnce(jr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Br.NO_ERROR:const e=o.getResponseJson();Jr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Br.TIMEOUT:Jr("Connection",'RPC "'+t+'" timed out'),s(new Wr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const n=o.getStatus();if(Jr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);s(new Wr(e,t.message))}else s(new Wr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Wr(Qr.UNAVAILABLE,"Connection failed."));break;default:ni()}}finally{Jr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}Mi(t,e){const n=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Pr,i=Ve(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};var o,a;this.ki(s.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())||"object"==typeof navigator&&"ReactNative"===navigator.product||p().indexOf("Electron/")>=0||((a=p()).indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0)||p().indexOf("MSAppHost/")>=0||"object"==typeof(o="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==o.id||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");Jr("Connection","Creating WebChannel: "+c,s);const h=r.createWebChannel(c,s);let u=!1,l=!1;const f=new $a({Ei:t=>{l?Jr("Connection","Not sending because WebChannel is closed:",t):(u||(Jr("Connection","Opening WebChannel transport."),h.open(),u=!0),Jr("Connection","WebChannel sending:",t),h.send(t))},Ti:()=>h.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(h,Kr.EventType.OPEN,(()=>{l||Jr("Connection","WebChannel transport opened.")})),d(h,Kr.EventType.CLOSE,(()=>{l||(l=!0,Jr("Connection","WebChannel transport closed"),f.Vi())})),d(h,Kr.EventType.ERROR,(t=>{l||(l=!0,ti("Connection","WebChannel transport errored:",t),f.Vi(new Wr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(h,Kr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];ri(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Jr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=ro[t];if(void 0!==e)return so(e)}(t),n=i.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,f.Vi(new Wr(e,n)),h.close()}else Jr("Connection","WebChannel received:",n),f.Si(n)}})),d(i,$r.STAT_EVENT,(t=>{10===t.stat?Jr("Connection","Detected buffering proxy"):11===t.stat&&Jr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.vi()}),0),f}}function Ha(){return"undefined"!=typeof document?document:null}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function Ga(t){return new Lo(t,!0)}class za{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Se=t,this.timerId=e,this.Fi=n,this.Li=r,this.Bi=i,this.Ui=0,this.qi=null,this.Ki=Date.now(),this.reset()}reset(){this.Ui=0}Qi(){this.Ui=this.Bi}ji(t){this.cancel();const e=Math.floor(this.Ui+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,e-n);r>0&&Jr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ui} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qi=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),t()))),this.Ui*=this.Li,this.Ui<this.Fi&&(this.Ui=this.Fi),this.Ui>this.Bi&&(this.Ui=this.Bi)}Gi(){null!==this.qi&&(this.qi.skipDelay(),this.qi=null)}cancel(){null!==this.qi&&(this.qi.cancel(),this.qi=null)}Wi(){return(Math.random()-.5)*this.Ui}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Qa{constructor(t,e,n,r,i,s){this.Se=t,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new za(t,e)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(t){this.ar(),this.stream.send(t)}async rr(){if(this.er())return this.close(0)}ar(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(t,e){this.ar(),this.Zi.cancel(),this.Yi++,3!==t?this.Zi.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(Zr(e.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):e&&e.code===Qr.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ur(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ri(e)}ur(){}auth(){this.state=1;const t=this.hr(this.Yi),e=this.Yi;this.Ji.getToken().then((t=>{this.Yi===e&&this.lr(t)}),(e=>{t((()=>{const t=new Wr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.dr(t)}))}))}lr(t){const e=this.hr(this.Yi);this.stream=this.wr(t),this.stream.Ii((()=>{e((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((t=>{e((()=>this.dr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}nr(){this.state=4,this.Zi.ji((async()=>{this.state=0,this.start()}))}dr(t){return Jr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}hr(t){return e=>{this.Se.enqueueAndForget((()=>this.Yi===t?e():(Jr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wa extends Qa{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.R=r}wr(t){return this.Hi.Mi("Listen",t)}onMessage(t){this.Zi.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ni(),s=e.targetChange.targetIds||[],o=function(t,e){return t.I?(ri(void 0===e||"string"==typeof e),wi.fromBase64String(e||"")):(ri(void 0===e||e instanceof Uint8Array),wi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Qr.UNKNOWN:so(t.code);return new Wr(e,t.message||"")}(a);n=new Ao(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qo(t,r.document.name),s=Po(r.document.updateTime),o=new ji({mapValue:{fields:r.document.fields}}),a=Ki.newFoundDocument(i,s,o),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Io(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qo(t,r.document),s=r.readTime?Po(r.readTime):ui.min(),o=Ki.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qo(t,r.document),s=r.removedTargetIds||[];n=new Io([],s,i,null)}else{if(!("filter"in e))return ni();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new no(r),s=t.targetId;n=new So(s,i)}}var r;return n}(this.R,t),n=function(t){if(!("targetChange"in t))return ui.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ui.min():e.readTime?Po(e.readTime):ui.min()}(t);return this.listener._r(e,n)}mr(t){const e={};e.database=jo(this.R),e.addTarget=function(t,e){let n;const r=e.target;return n=Wi(r)?{documents:Ho(t,r)}:{query:Go(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Oo(t,e.resumeToken):e.snapshotVersion.compareTo(ui.min())>0&&(n.readTime=xo(t,e.snapshotVersion.toTimestamp())),n}(this.R,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ni()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,t);n&&(e.labels=n),this.cr(e)}gr(t){const e={};e.database=jo(this.R),e.removeTarget=t,this.cr(e)}}class Ya extends Qa{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.R=r,this.yr=!1}get pr(){return this.yr}start(){this.yr=!1,this.lastStreamToken=void 0,super.start()}ur(){this.yr&&this.Er([])}wr(t){return this.Hi.Mi("Write",t)}onMessage(t){if(ri(!!t.streamToken),this.lastStreamToken=t.streamToken,this.yr){this.Zi.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(ri(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Po(t.updateTime):Po(e);return n.isEqual(ui.min())&&(n=Po(e)),new qs(n,t.transformResults||[])}(t,n)))):[]),i=Po(t.commitTime);return this.listener.Tr(i,r)}var e,n;return ri(!t.writeResults||0===t.writeResults.length),this.yr=!0,this.listener.Ir()}Ar(){const t={};t.database=jo(this.R),this.cr(t)}Er(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Ws)n={update:Ko(t,e.key,e.value)};else if(e instanceof to)n={delete:Fo(t,e.key)};else if(e instanceof Ys)n={update:Ko(t,e.key,e.data),updateMask:ra(e.fieldMask)};else{if(!(e instanceof eo))return ni();n={verify:Fo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ls)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof xs)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ms)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Vs)return{fieldPath:e.field.canonicalString(),increment:n.A};throw ni()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Mo(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:ni())),n;var r,i}(this.R,t)))};this.cr(e)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Xa extends class{}{constructor(t,e,n){super(),this.credentials=t,this.Hi=e,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new Wr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Wr(Qr.UNKNOWN,t.toString())}))}Oi(t,e,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Oi(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Wr(Qr.UNKNOWN,t.toString())}))}terminate(){this.Rr=!0}}class Ja{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(t){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Dr("Offline")))}set(t){this.kr(),this.br=0,"Online"===t&&(this.Vr=!1),this.Dr(t)}Dr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Cr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(Zr(e),this.Vr=!1):Jr("OnlineStateTracker",e)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Za{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.$r=[],this.Or=new Map,this.Mr=new Set,this.Fr=[],this.Lr=i,this.Lr.di((t=>{n.enqueueAndForget((async()=>{cc(this)&&(Jr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ii(t);e.Mr.add(4),await ec(e),e.Br.set("Unknown"),e.Mr.delete(4),await tc(e)}(this))}))})),this.Br=new Ja(n,r)}}async function tc(t){if(cc(t))for(const e of t.Fr)await e(!0)}async function ec(t){for(const e of t.Fr)await e(!1)}function nc(t,e){const n=ii(t);n.Or.has(e.targetId)||(n.Or.set(e.targetId,e),ac(n)?oc(n):Sc(n).er()&&ic(n,e))}function rc(t,e){const n=ii(t),r=Sc(n);n.Or.delete(e),r.er()&&sc(n,e),0===n.Or.size&&(r.er()?r.ir():cc(n)&&n.Br.set("Unknown"))}function ic(t,e){t.Ur.q(e.targetId),Sc(t).mr(e)}function sc(t,e){t.Ur.q(e),Sc(t).gr(e)}function oc(t){t.Ur=new No({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.Or.get(e)||null}),Sc(t).start(),t.Br.Sr()}function ac(t){return cc(t)&&!Sc(t).tr()&&t.Or.size>0}function cc(t){return 0===ii(t).Mr.size}function hc(t){t.Ur=void 0}async function uc(t){t.Or.forEach(((e,n)=>{ic(t,e)}))}async function lc(t,e){hc(t),ac(t)?(t.Br.Nr(e),oc(t)):t.Br.set("Unknown")}async function fc(t,e,n){if(t.Br.set("Online"),e instanceof Ao&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Or.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Or.delete(r),t.Ur.removeTarget(r))}(t,e)}catch(r){Jr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dc(t,r)}else if(e instanceof Io?t.Ur.X(e):e instanceof So?t.Ur.rt(e):t.Ur.et(e),!n.isEqual(ui.min()))try{const e=await Ia(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Ur.at(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Or.get(r);i&&t.Or.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Or.get(e);if(!n)return;t.Or.set(e,n.withResumeToken(wi.EMPTY_BYTE_STRING,n.snapshotVersion)),sc(t,e);const r=new ua(n.target,e,1,n.sequenceNumber);ic(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){Jr("RemoteStore","Failed to raise snapshot:",i),await dc(t,i)}}async function dc(t,e,n){if(!aa(e))throw e;t.Mr.add(1),await ec(t),t.Br.set("Offline"),n||(n=()=>Ia(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Jr("RemoteStore","Retrying IndexedDB access"),await n(),t.Mr.delete(1),await tc(t)}))}function pc(t,e){return e().catch((n=>dc(t,n,e)))}async function mc(t){const e=ii(t),n=Ac(e);let r=e.$r.length>0?e.$r[e.$r.length-1].batchId:-1;for(;gc(e);)try{const t=await Sa(e.localStore,r);if(null===t){0===e.$r.length&&n.ir();break}r=t.batchId,yc(e,t)}catch(i){await dc(e,i)}vc(e)&&wc(e)}function gc(t){return cc(t)&&t.$r.length<10}function yc(t,e){t.$r.push(e);const n=Ac(t);n.er()&&n.pr&&n.Er(e.mutations)}function vc(t){return cc(t)&&!Ac(t).tr()&&t.$r.length>0}function wc(t){Ac(t).start()}async function bc(t){Ac(t).Ar()}async function Ec(t){const e=Ac(t);for(const n of t.$r)e.Er(n.mutations)}async function Tc(t,e,n){const r=t.$r.shift(),i=ha.from(r,e,n);await pc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await mc(t)}async function Ic(t,e){e&&Ac(t).pr&&await async function(t,e){if(function(t){switch(t){case Qr.OK:return ni();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0;default:return ni()}}(n=e.code)&&n!==Qr.ABORTED){const n=t.$r.shift();Ac(t).sr(),await pc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await mc(t)}var n}(t,e),vc(t)&&wc(t)}function Sc(t){return t.qr||(t.qr=function(t,e,n){const r=ii(t);return r.Pr(),new Wa(e,r.Hi,r.credentials,r.R,n);
/**
                     * @license
                     * Copyright 2018 Google LLC
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */}(t.datastore,t.asyncQueue,{Ii:uc.bind(null,t),Ri:lc.bind(null,t),_r:fc.bind(null,t)}),t.Fr.push((async e=>{e?(t.qr.sr(),ac(t)?oc(t):t.Br.set("Unknown")):(await t.qr.stop(),hc(t))}))),t.qr}function Ac(t){return t.Kr||(t.Kr=function(t,e,n){const r=ii(t);return r.Pr(),new Ya(e,r.Hi,r.credentials,r.R,n)}(t.datastore,t.asyncQueue,{Ii:bc.bind(null,t),Ri:Ic.bind(null,t),Ir:Ec.bind(null,t),Tr:Tc.bind(null,t)}),t.Fr.push((async e=>{e?(t.Kr.sr(),await mc(t)):(await t.Kr.stop(),t.$r.length>0&&(Jr("RemoteStore",`Stopping write stream with ${t.$r.length} pending writes`),t.$r=[]))}))),t.Kr;
/**
                   * @license
                   * Copyright 2017 Google LLC
                   *
                   * Licensed under the Apache License, Version 2.0 (the "License");
                   * you may not use this file except in compliance with the License.
                   * You may obtain a copy of the License at
                   *
                   *   http://www.apache.org/licenses/LICENSE-2.0
                   *
                   * Unless required by applicable law or agreed to in writing, software
                   * distributed under the License is distributed on an "AS IS" BASIS,
                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                   * See the License for the specific language governing permissions and
                   * limitations under the License.
                   */}class _c{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new sa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new _c(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Wr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nc(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),aa(t))return new Wr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Dc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ci.comparator(e.key,n.key):(t,e)=>Ci.comparator(t.key,e.key),this.keyedMap=mo(),this.sortedSet=new oo(this.comparator)}static emptySet(t){return new Dc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Dc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Dc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Cc{constructor(){this.Qr=new oo(Ci.comparator)}track(t){const e=t.doc.key,n=this.Qr.get(e);n?0!==t.type&&3===n.type?this.Qr=this.Qr.insert(e,t):3===t.type&&1!==n.type?this.Qr=this.Qr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Qr=this.Qr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Qr=this.Qr.remove(e):1===t.type&&2===n.type?this.Qr=this.Qr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Qr=this.Qr.insert(e,{type:2,doc:t.doc}):ni():this.Qr=this.Qr.insert(e,t)}jr(){const t=[];return this.Qr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Rc{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Rc(t,e,Dc.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class kc{constructor(){this.Wr=void 0,this.listeners=[]}}class Lc{constructor(){this.queries=new ya((t=>Es(t)),bs),this.onlineState="Unknown",this.Gr=new Set}}async function xc(t,e){const n=ii(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new kc),i)try{s.Wr=await n.onListen(r)}catch(o){const t=Nc(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(t)}n.queries.set(r,s),s.listeners.push(e),e.zr(n.onlineState),s.Wr&&e.Hr(s.Wr)&&Vc(n)}async function Oc(t,e){const n=ii(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Mc(t,e){const n=ii(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Hr(i)&&(r=!0);e.Wr=i}}r&&Vc(n)}function Pc(t,e,n){const r=ii(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Vc(t){t.Gr.forEach((t=>{t.next()}))}class Uc{constructor(t,e,n){this.query=t,this.Jr=e,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Rc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Yr?this.Zr(t)&&(this.Jr.next(t),e=!0):this.eo(t,this.onlineState)&&(this.no(t),e=!0),this.Xr=t,e}onError(t){this.Jr.error(t)}zr(t){this.onlineState=t;let e=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,t)&&(this.no(this.Xr),e=!0),e}eo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.so&&n||t.docs.isEmpty()&&"Offline"!==e)}Zr(t){if(t.docChanges.length>0)return!0;const e=this.Xr&&this.Xr.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}no(t){t=Rc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Yr=!0,this.Jr.next(t)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Fc{constructor(t){this.key=t}}class qc{constructor(t){this.key=t}}class Bc{constructor(t,e){this.query=t,this.ao=e,this.uo=null,this.current=!1,this.ho=vo(),this.mutatedKeys=vo(),this.lo=Ss(t),this.fo=new Dc(this.lo)}get wo(){return this.ao}_o(t,e){const n=e?e.mo:new Cc,r=e?e.fo:this.fo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ds(this.query)&&r.size===this.query.limit?r.last():null,c=ps(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const h=r.get(t),u=Is(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let d=!1;h&&u?h.data.isEqual(u.data)?l!==f&&(n.track({type:3,doc:u}),d=!0):this.yo(h,u)||(n.track({type:2,doc:u}),d=!0,(a&&this.lo(u,a)>0||c&&this.lo(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),d=!0):h&&!u&&(n.track({type:1,doc:h}),d=!0,(a||c)&&(o=!0)),d&&(u?(s=s.add(u),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),ds(this.query)||ps(this.query))for(;s.size>this.query.limit;){const t=ds(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.fo;this.fo=t.fo,this.mutatedKeys=t.mutatedKeys;const i=t.mo.jr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ni()}};return n(t)-n(e)}(t.type,e.type)||this.lo(t.doc,e.doc))),this.po(n);const s=e?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.uo;return this.uo=o,0!==i.length||a?{snapshot:new Rc(this.query,t.fo,r,i,t.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({fo:this.fo,mo:new Cc,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(t){return!this.ao.has(t)&&!!this.fo.has(t)&&!this.fo.get(t).hasLocalMutations}po(t){t&&(t.addedDocuments.forEach((t=>this.ao=this.ao.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ao=this.ao.delete(t))),this.current=t.current)}Eo(){if(!this.current)return[];const t=this.ho;this.ho=vo(),this.fo.forEach((t=>{this.Io(t.key)&&(this.ho=this.ho.add(t.key))}));const e=[];return t.forEach((t=>{this.ho.has(t)||e.push(new qc(t))})),this.ho.forEach((n=>{t.has(n)||e.push(new Fc(n))})),e}Ao(t){this.ao=t.Bn,this.ho=vo();const e=this._o(t.documents);return this.applyChanges(e,!0)}Ro(){return Rc.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.uo)}}class jc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class $c{constructor(t){this.key=t,this.Po=!1}}class Kc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new ya((t=>Es(t)),bs),this.Vo=new Map,this.So=new Set,this.Do=new oo(Ci.comparator),this.Co=new Map,this.No=new Da,this.xo={},this.ko=new Map,this.$o=ma.Yt(),this.onlineState="Unknown",this.Oo=void 0}get isPrimaryClient(){return!0===this.Oo}}async function Hc(t,e){const n=function(t){const e=ii(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ch.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yc.bind(null,e),e.bo._r=Mc.bind(null,e.eventManager),e.bo.Fo=Pc.bind(null,e.eventManager),e}(t);let r,i;const s=n.vo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const t=await function(t,e){const n=ii(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ue.getTargetData(t,e).next((i=>i?(r=i,oa.resolve(r)):n.Ue.allocateTargetId(t).next((i=>(r=new ua(e,i,0,t.currentSequenceNumber),n.Ue.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.kn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(t.targetId,t),n.$n.set(e,t.targetId)),t}))}(n.localStore,vs(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Mo=(e,n,r)=>async function(t,e,n,r){let i=e.view._o(n);i.Nn&&(i=await _a(t.localStore,e.query,!1).then((({documents:t})=>e.view._o(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return rh(t,e.targetId,o.To),o.snapshot}(t,e,n,r);const i=await _a(t.localStore,e,!0),s=new Bc(e,i.Bn),o=s._o(i.documents),a=To.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);rh(t,n,c.To);const h=new jc(e,n,s);return t.vo.set(e,h),t.Vo.has(n)?t.Vo.get(n).push(e):t.Vo.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&nc(n.remoteStore,t)}return i}async function Gc(t,e){const n=ii(t),r=n.vo.get(e),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((t=>!bs(t,e)))),void n.vo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Aa(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),rc(n.remoteStore,r.targetId),eh(n,r.targetId)})).catch(ga)):(eh(n,r.targetId),await Aa(n.localStore,r.targetId,!0))}async function zc(t,e,n){const r=function(t){const e=ii(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jc.bind(null,e),e}(t);try{const t=await function(t,e){const n=ii(t),r=hi.now(),i=e.reduce(((t,e)=>t.add(e.key)),vo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Fn.pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=Gs(t,s.get(t.key));null!=e&&o.push(new Ys(t.key,e,$i(e.toProto().mapValue),Bs.exists(!0)))}return n._n.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.xo[t.currentUser.toKey()];r||(r=new oo(ai)),r=r.insert(e,n),t.xo[t.currentUser.toKey()]=r}(r,t.batchId,n),await oh(r,t.changes),await mc(r.remoteStore)}catch(i){const t=Nc(i,"Failed to persist write");n.reject(t)}}async function Qc(t,e){const n=ii(t);try{const t=await function(t,e){const n=ii(t),r=e.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Mn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.Ue.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.Ue.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const f=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,f),h=a,l=e,ri((u=f).resumeToken.approximateByteSize()>0),(0===h.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size>0)&&o.push(n.Ue.updateTargetData(t,f))}var h,u,l}));let a=fo();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=vo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let i=fo();return n.forEach(((n,s)=>{const o=t.get(n),a=r;s.isNoDocument()&&s.version.isEqual(ui.min())?(e.removeEntry(n,a),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s,a),i=i.insert(n,s)):Jr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),i}))}(t,s,e.documentUpdates,r).next((t=>{a=t}))),!r.isEqual(ui.min())){const e=n.Ue.getLastRemoteSnapshotVersion(t).next((e=>n.Ue.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return oa.waitFor(o).next((()=>s.apply(t))).next((()=>n.Fn.En(t,a))).next((()=>a))})).then((t=>(n.kn=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Co.get(e);r&&(ri(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Po=!0:t.modifiedDocuments.size>0?ri(r.Po):t.removedDocuments.size>0&&(ri(r.Po),r.Po=!1))})),await oh(n,t,e)}catch(r){await ga(r)}}function Wc(t,e,n){const r=ii(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ii(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.zr(e)&&(r=!0)})),r&&Vc(n)}(r.eventManager,e),t.length&&r.bo._r(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yc(t,e,n){const r=ii(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Co.get(e),s=i&&i.key;if(s){let t=new oo(Ci.comparator);t=t.insert(s,Ki.newNoDocument(s,ui.min()));const n=vo().add(s),i=new Eo(ui.min(),new Map,new ho(ai),t,n);await Qc(r,i),r.Do=r.Do.remove(s),r.Co.delete(e),sh(r)}else await Aa(r.localStore,e,!1).then((()=>eh(r,e,n))).catch(ga)}async function Xc(t,e){const n=ii(t),r=e.batch.batchId;try{const t=await function(t,e){const n=ii(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Mn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=oa.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ri(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t._n.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n._n.performConsistencyCheck(t))).next((()=>n.Fn.pn(t,r)))}))}(n.localStore,e);th(n,r,null),Zc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oh(n,t)}catch(i){await ga(i)}}async function Jc(t,e,n){const r=ii(t);try{const t=await function(t,e){const n=ii(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n._n.lookupMutationBatch(t,e).next((e=>(ri(null!==e),r=e.keys(),n._n.removeMutationBatch(t,e)))).next((()=>n._n.performConsistencyCheck(t))).next((()=>n.Fn.pn(t,r)))}))}(r.localStore,e);th(r,e,n),Zc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oh(r,t)}catch(i){await ga(i)}}function Zc(t,e){(t.ko.get(e)||[]).forEach((t=>{t.resolve()})),t.ko.delete(e)}function th(t,e,n){const r=ii(t);let i=r.xo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.xo[r.currentUser.toKey()]=i}}function eh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vo.get(e))t.vo.delete(r),n&&t.bo.Fo(r,n);t.Vo.delete(e),t.isPrimaryClient&&t.No.Zn(e).forEach((e=>{t.No.containsKey(e)||nh(t,e)}))}function nh(t,e){t.So.delete(e.path.canonicalString());const n=t.Do.get(e);null!==n&&(rc(t.remoteStore,n),t.Do=t.Do.remove(e),t.Co.delete(n),sh(t))}function rh(t,e,n){for(const r of n)r instanceof Fc?(t.No.addReference(r.key,e),ih(t,r)):r instanceof qc?(Jr("SyncEngine","Document no longer in limbo: "+r.key),t.No.removeReference(r.key,e),t.No.containsKey(r.key)||nh(t,r.key)):ni()}function ih(t,e){const n=e.key,r=n.path.canonicalString();t.Do.get(n)||t.So.has(r)||(Jr("SyncEngine","New document in limbo: "+n),t.So.add(r),sh(t))}function sh(t){for(;t.So.size>0&&t.Do.size<t.maxConcurrentLimboResolutions;){const e=t.So.values().next().value;t.So.delete(e);const n=new Ci(mi.fromString(e)),r=t.$o.next();t.Co.set(r,new $c(n)),t.Do=t.Do.insert(n,r),nc(t.remoteStore,new ua(vs(fs(n.path)),r,2,zr.o))}}async function oh(t,e,n){const r=ii(t),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((t,a)=>{o.push(r.Mo(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=wa.vn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.bo._r(i),await async function(t,e){const n=ii(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>oa.forEach(e,(e=>oa.forEach(e.Pn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>oa.forEach(e.bn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!aa(r))throw r;Jr("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.kn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(t,i)}}}(r.localStore,s))}async function ah(t,e){const n=ii(t);if(!n.currentUser.isEqual(e)){Jr("SyncEngine","User change. New user:",e.toKey());const t=await Ta(n.localStore,e);n.currentUser=e,(r=n).ko.forEach((t=>{t.forEach((t=>{t.reject(new Wr(Qr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await oh(n,t.Ln)}var r}function ch(t,e){const n=ii(t),r=n.Co.get(e);if(r&&r.Po)return vo().add(r.key);{let t=vo();const r=n.Vo.get(e);if(!r)return t;for(const e of r){const r=n.vo.get(e);t=t.unionWith(r.view.wo)}return t}}class hh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.R=Ga(t.databaseInfo.databaseId),this.sharedClientState=this.Bo(t),this.persistence=this.Uo(t),await this.persistence.start(),this.gcScheduler=this.qo(t),this.localStore=this.Ko(t)}qo(t){return null}Ko(t){return e=this.persistence,n=new ba,r=t.initialUser,i=this.R,new Ea(e,n,r,i);var e,n,r,i}Uo(t){return new Oa(Pa.Ps,this.R)}Bo(t){return new Fa}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Wc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ah.bind(null,this.syncEngine),await async function(t,e){const n=ii(t);e?(n.Mr.delete(2),await tc(n)):e||(n.Mr.add(2),await ec(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Lc}createDatastore(t){const e=Ga(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ka(r));var r,i;return i=t.credentials,new Xa(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Wc(this.syncEngine,t,0),s=Ba.gt()?new Ba:new qa,new Za(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Kc(t,e,n,r,i,s);return o&&(a.Oo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ii(t);Jr("RemoteStore","RemoteStore shutting down."),e.Mr.add(5),await ec(e),e.Lr.shutdown(),e.Br.set("Unknown")}(this.remoteStore)}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class lh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.jo(this.observer.next,t)}error(t){this.observer.error?this.jo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Wo(){this.muted=!0}jo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class fh{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Va.UNAUTHENTICATED,this.clientId=oi.u(),this.credentialListener=()=>Promise.resolve(),this.credentials.setChangeListener(e,(async t=>{Jr("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),t.resolve()}catch(e){const n=Nc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function dh(t){return t.onlineComponents||(Jr("FirestoreClient","Using default OnlineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Jr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Jr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ta(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new hh)),t.offlineComponents}(t);Jr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=ii(t);n.asyncQueue.verifyOperationInProgress(),Jr("RemoteStore","RemoteStore received new credentials");const r=cc(n);n.Mr.add(3),await ec(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Mr.delete(3),await tc(n)}(e.remoteStore,t))),t.onlineComponents=e}(t,new uh)),t.onlineComponents}async function ph(t){const e=await dh(t),n=e.eventManager;return n.onListen=Hc.bind(null,e.syncEngine),n.onUnlisten=Gc.bind(null,e.syncEngine),n}class mh{constructor(t,e,n,r,i,s,o){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o}}class gh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof gh&&t.projectId===this.projectId&&t.database===this.database}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const yh=new Map;
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class vh{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class wh{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(Va.UNAUTHENTICATED)))}removeChangeListener(){this.changeListener=null}}class bh{constructor(t){this.currentUser=Va.UNAUTHENTICATED,this.oc=new sa,this.cc=0,this.changeListener=()=>Promise.resolve(),this.ac=!1,this.forceRefresh=!1,this.auth=null,this.asyncQueue=null,this.uc=()=>{this.cc++,this.currentUser=this.hc(),this.oc.resolve(),this.ac&&this.asyncQueue.enqueueRetryable((()=>this.changeListener(this.currentUser)))};const e=t=>{Jr("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.lc(),this.auth.addAuthTokenListener(this.uc)};t.onInit((t=>e(t))),setTimeout((()=>{if(!this.auth){const n=t.getImmediate({optional:!0});n?e(n):this.ac&&(Jr("FirebaseCredentialsProvider","Auth not yet detected"),this.asyncQueue.enqueueRetryable((()=>this.changeListener(this.currentUser))))}}),0)}getToken(){const t=this.cc,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.cc!==t?(Jr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ri("string"==typeof e.accessToken),new vh(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(t,e){this.ac=!0,this.asyncQueue=t,this.changeListener=e}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.uc),this.changeListener=()=>Promise.resolve()}hc(){const t=this.auth&&this.auth.getUid();return ri(null===t||"string"==typeof t),new Va(t)}lc(){this.ac&&(this.ac=!1,this.asyncQueue.enqueueRetryable((async()=>{await this.oc.promise,await this.changeListener(this.currentUser),this.ac=!0})))}}class Eh{constructor(t,e,n){this.fc=t,this.dc=e,this.wc=n,this.type="FirstParty",this.user=Va.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.dc},e=this.fc.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.wc&&(t["X-Goog-Iam-Authorization-Token"]=this.wc),t}}class Th{constructor(t,e,n){this.fc=t,this.dc=e,this.wc=n}getToken(){return Promise.resolve(new Eh(this.fc,this.dc,this.wc))}setChangeListener(t,e){t.enqueueRetryable((()=>e(Va.FIRST_PARTY)))}removeChangeListener(){}invalidateToken(){}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function Ih(t,e,n){if(!n)throw new Wr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sh(t){if(!Ci.isDocumentKey(t))throw new Wr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ah(t){if(Ci.isDocumentKey(t))throw new Wr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _h(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ni()}function Nh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Wr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_h(t);throw new Wr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Dh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Wr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Wr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,function(t,e,n,r){if(!0===e&&!0===r)throw new Wr(Qr.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Ch{constructor(t,e){this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dh({}),this._settingsFrozen=!1,t instanceof gh?(this._databaseId=t,this._credentials=new wh):(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Wr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gh(t.options.projectId)}(t),this._credentials=new bh(e))}get app(){if(!this._app)throw new Wr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Wr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dh(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new wh;switch(t.type){case"gapi":const e=t.client;return ri(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Th(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Wr(Qr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=yh.get(t);e&&(Jr("ComponentProvider","Removing Datastore"),yh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Rh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rh(this.firestore,t,this._key)}}class kh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new kh(this.firestore,t,this._query)}}class Lh extends kh{constructor(t,e,n){super(t,e,fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rh(this.firestore,null,new Ci(t))}withConverter(t){return new Lh(this.firestore,t,this._path)}}function xh(t,e,...n){if(t=w(t),Ih("collection","path",e),t instanceof Ch){const r=mi.fromString(e,...n);return Ah(r),new Lh(t,null,r)}{if(!(t instanceof Rh||t instanceof Lh))throw new Wr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=mi.fromString(t.path,...n).child(mi.fromString(e));return Ah(r),new Lh(t.firestore,null,r)}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Oh{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Ec=null,this.Tc=!1,this.Ic=[],this.Zi=new za(this,"async_queue_retry"),this.Ac=()=>{const t=Ha();t&&Jr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Zi.Gi()};const t=Ha();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ac)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Rc(),this.Pc(t)}enterRestrictedMode(){if(!this.gc){this.gc=!0;const t=Ha();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ac)}}enqueue(t){return this.Rc(),this.gc?new Promise((t=>{})):this.Pc(t)}enqueueRetryable(t){this.enqueueAndForget((()=>(this.mc.push(t),this.bc())))}async bc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.Zi.reset()}catch(T){if(!aa(T))throw T;Jr("AsyncQueue","Operation failed with retryable error: "+T)}this.mc.length>0&&this.Zi.ji((()=>this.bc()))}}Pc(t){const e=this._c.then((()=>(this.Tc=!0,t().catch((t=>{throw this.Ec=t,this.Tc=!1,Zr("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Tc=!1,t))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.Rc(),this.Ic.indexOf(t)>-1&&(e=0);const r=_c.createAndSchedule(this,t,e,n,(t=>this.vc(t)));return this.yc.push(r),r}Rc(){this.Ec&&ni()}verifyOperationInProgress(){}async Vc(){let t;do{t=this._c,await t}while(t!==this._c)}Sc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Dc(t){return this.Vc().then((()=>{this.yc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Vc()}))}Cc(t){this.Ic.push(t)}vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}function Mh(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of["next","error","complete"])if(r in n&&"function"==typeof n[r])return!0;return!1}(t)}class Ph extends Ch{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Oh,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Uh(this),this._firestoreClient.terminate()}}function Vh(t){return t._firestoreClient||Uh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uh(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new mh(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling));var i,s,o,a;t._firestoreClient=new fh(t._credentials,t._queue,r)}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Fh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Wr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class qh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qh(wi.fromBase64String(t))}catch(e){throw new Wr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qh(wi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class Bh{constructor(t){this._methodName=t}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class jh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Wr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Wr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ai(this._lat,t._lat)||ai(this._long,t._long)}}
/**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */const $h=/^__.*__$/;class Kh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ys(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ws(t,this.data,e,this.fieldTransforms)}}function Hh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ni()}}class Gh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Nc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xc(){return this.settings.xc}kc(t){return new Gh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}$c(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.kc({path:n,Oc:!1});return r.Mc(t),r}Fc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.kc({path:n,Oc:!1});return r.Nc(),r}Lc(t){return this.kc({path:void 0,Oc:!0})}Bc(t){return ru(t,this.settings.methodName,this.settings.Uc||!1,this.path,this.settings.qc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Nc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(0===t.length)throw this.Bc("Document fields must not be empty");if(Hh(this.xc)&&$h.test(t))throw this.Bc('Document fields cannot begin and end with "__"')}}class zh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.R=n||Ga(t)}Kc(t,e,n,r=!1){return new Gh({xc:t,methodName:e,qc:n,path:yi.emptyPath(),Oc:!1,Uc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)}}function Qh(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new zh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wh(t,e,n,r,i,s={}){const o=t.Kc(s.merge||s.mergeFields?2:0,e,n,i);Zh("Data must be an object, but it was:",o,r);const a=Xh(r,o);let c,h;if(s.merge)c=new vi(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=tu(e,r,n);if(!o.contains(i))throw new Wr(Qr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);iu(t,i)||t.push(i)}c=new vi(t),h=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,h=o.fieldTransforms;return new Kh(new ji(a),c,h)}function Yh(t,e){if(Jh(t=w(t)))return Zh("Unsupported field value:",e,t),Xh(t,e);if(t instanceof Bh)return function(t,e){if(!Hh(e.xc))throw e.Bc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oc&&4!==e.xc)throw e.Bc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Yh(i,e.Lc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=w(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,e){return"number"==typeof(n=e)&&Number.isInteger(n)&&!Di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?Ns(e):_s(t,e);var n}(e.R,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hi.fromDate(t);return{timestampValue:xo(e.R,n)}}if(t instanceof hi){const n=new hi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xo(e.R,n)}}if(t instanceof jh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof qh)return{bytesValue:Oo(e.R,t._byteString)};if(t instanceof Rh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Bc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Vo(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Bc(`Unsupported field value: ${_h(t)}`)}(t,e)}function Xh(t,e){const n={};return di(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,((t,r)=>{const i=Yh(r,e.$c(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Jh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hi||t instanceof jh||t instanceof qh||t instanceof Rh||t instanceof Bh)}function Zh(t,e,n){if(!Jh(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=_h(n);throw"an object"===r?e.Bc(t+" a custom object"):e.Bc(t+" "+r)}var r}function tu(t,e,n){if((e=w(e))instanceof Fh)return e._internalPath;if("string"==typeof e)return nu(t,e);throw ru("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const eu=new RegExp("[~\\*/\\[\\]]");function nu(t,e,n){if(e.search(eu)>=0)throw ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fh(...e.split("."))._internalPath}catch(r){throw ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Wr(Qr.INVALID_ARGUMENT,a+t+c)}function iu(t,e){return t.some((t=>t.isEqual(e)))}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class su{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ou(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.toProto())}}get(t){if(this._document){const e=this._document.data.field(au("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ou extends su{data(){return super.data()}}function au(t,e){return"string"==typeof e?nu(t,e):e instanceof Fh?e._internalPath:e._delegate._internalPath}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */class cu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hu extends su{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.toProto(),t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(au("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class uu extends hu{data(t={}){return super.data(t)}}class lu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new cu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new uu(this._firestore,this._userDataWriter,n.key,n,new cu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Wr(Qr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new uu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new cu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new uu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new cu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:fu(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ni()}}
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */function du(t){if(ps(t)&&0===t.explicitOrderBy.length)throw new Wr(Qr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}class mu extends pu{constructor(t,e){super(),this.Wc=t,this.Hc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Wr(Qr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Wr(Qr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new as(e,n);return function(t,e){if(null===ms(t)){const n=gs(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new Wr(Qr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,n,e.field)}}(t,r),r}(t._query,this.Wc,this.Hc);return new kh(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ls(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}class gu extends pu{constructor(t,e,n){super(),this.type=t,this.Jc=e,this.Yc=n}_apply(t){return new kh(t.firestore,t.converter,ws(t._query,this.Jc,this.Yc))}}class yu extends class{convertValue(t,e="none"){switch(Ri(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ti(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ii(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ni()}}convertObject(t,e){const n={};return fi(t.fields||{},((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new jh(Ti(t.latitude),Ti(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ai(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_i(t));default:return null}}convertTimestamp(t){const e=Ei(t);return new hi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=mi.fromString(t);ri(ia(n));const r=new gh(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(e)||Zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new qh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rh(this.firestore,null,e)}}Gr="9.0.0-beta.2",q(new I("firestore-exp",((t,{options:e})=>{const n=t.getProvider("app-exp").getImmediate(),r=new Ph(n,t.getProvider("auth-internal"));return e&&r._setSettings(e),r}),"PUBLIC")),$("@firebase/firestore","0.0.900-exp.d92a36260",void 0),
/**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
$("firebase-exp","9.0.0-beta.2","app");var vu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,bu=(t,e,n,r)=>{for(var i,s=r>1?void 0:r?wu(e,n):e,o=t.length-1;o>=0;o--)(i=t[o])&&(s=(r?i(e,n,s):i(s))||s);return r&&s&&vu(e,n,s),s};let Eu=t("HomeApp",class extends h{constructor(){super(),this.unsubscribe=()=>{},this.userName=this.assignId(),this.reading=!1,this.exclude=["you","is","the","they","them","he","she","it","am","my","i","are","how","what","why"],this.msgs=[],this.initFirebase(),this.focusInput()}initFirebase(){!function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw B.create("bad-app-name",{appName:String(r)});if(V.has(r))throw B.create("duplicate-app",{appName:r});const i=new _(r);for(const o of U.values())i.addComponent(o);const s=new j(t,n,i);V.set(r,s)}({apiKey:"AIzaSyBVY5QVSXVlrCpjaBykH13eP5JGlgnQBBk",authDomain:"litbot-afd7a.firebaseapp.com",projectId:"litbot-afd7a",storageBucket:"litbot-afd7a.appspot.com",messagingSenderId:"165785304938",appId:"1:165785304938:web:d1587b0791b17c6f5a6f13"}),this.db=function(t=function(t="[DEFAULT]"){const e=V.get(t);if(!e)throw B.create("no-app",{appName:t});return e}()){return(e=t,e.container.getProvider("firestore-exp")).getImmediate();var e}(),this.read()}async send(t,e,n){var r;(null==(r=null==n?void 0:n.target)?void 0:r.value)&&(n.target.value="");try{await function(t,e){const n=Nh(t.firestore,Ph),r=function(t,e,...n){if(t=w(t),1===arguments.length&&(e=oi.u()),Ih("doc","path",e),t instanceof Ch){const r=mi.fromString(e,...n);return Sh(r),new Rh(t,null,new Ci(r))}{if(!(t instanceof Rh||t instanceof Lh))throw new Wr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(mi.fromString(e,...n));return Sh(r),new Rh(t.firestore,t instanceof Lh?t.converter:null,new Ci(r))}}(t),i=function(t,e,n){let r;return r=t?t.toFirestore(e):e,r}(t.converter,e);return(s=n,o=[Wh(Qh(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Bs.exists(!1))],function(t,e){const n=new sa;return t.asyncQueue.enqueueAndForget((async()=>{return zc(await(r=t,dh(r).then((t=>t.syncEngine))),e,n);var r})),n.promise}(Vh(s),o)).then((()=>r));var s,o}(xh(this.db,"chat"),{msg:t,time:new Date,sender:e})}catch(i){console.log(i)}this.scrollToBottom()}async focusInput(){await this.updateComplete,this.shadowRoot.getElementById("chatInput").focus()}async scrollToBottom(){const t=this.shadowRoot.getElementById("scroller");t.scrollTop=t.scrollHeight}async read(){const t=function(t,...e){for(const n of e)t=n._apply(t);return t}(xh(this.db,"chat"),function(t,e="asc"){const n=e,r=au("orderBy","time");return new mu(r,n)}(0,"desc"),function(t){return function(t,e){if(e<=0)throw new Wr(Qr.INVALID_ARGUMENT,`Function limit() requires a positive number, but it was: ${e}.`)}(0,t),new gu("limit",t,"F")}(1));this.unsubscribe=function(t,...e){var n,r,i;t=w(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Mh(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Mh(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,h,u;if(t instanceof Rh)h=Nh(t.firestore,Ph),u=fs(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const r=n.docs.get(e._key),i=new yu(t);return new hu(t,i,e._key,r,new cu(n.hasPendingWrites,n.fromCache),e.converter)}(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Nh(t,kh);h=Nh(n.firestore,Ph),u=n._query;const r=new yu(h);c={next:t=>{e[o]&&e[o](new lu(h,r,n,t))},error:e[o+1],complete:e[o+2]},du(t._query)}return function(t,e,n,r){const i=new lh(r),s=new Uc(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>xc(await ph(t),s))),()=>{i.Wo(),t.asyncQueue.enqueueAndForget((async()=>Oc(await ph(t),s)))}}(Vh(h),u,a,c)}(t,(t=>{if(t.docs.length>0&&this.reading){const e=t.docs[0].data();this.msgs=[...this.msgs,e],e.msg.includes("?")&&this.checkIfAnswered(e)}else this.reading=!0}))}formatString(t){return t.toLowerCase().replace(/[^a-zA-Z ]/g,"")}compareStrings(t,e){const n=[];let r,i,s=t.split(/\s+/g),o=e.split(/\s+/g);for(r=0;r<s.length;r++)for(i=0;i<o.length;i++)this.formatString(s[r])!=this.formatString(o[i])||this.exclude.includes(s[r])||n.push(s[r]);return n}async checkIfAnswered(t){const e=xh(this.db,"chat"),n=(await function(t){t=Nh(t,kh);const e=Nh(t.firestore,Ph),n=Vh(e),r=new yu(e);return du(t._query),function(t,e,n={}){const r=new sa;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new lh({next:n=>{e.enqueueAndForget((()=>Oc(t,o))),n.fromCache&&"server"===r.source?i.reject(new Wr(Qr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Uc(n,s,{includeMetadataChanges:!0,so:!0});return xc(t,o)}(await ph(t),t.asyncQueue,e,n,r))),r.promise}(n,t._query).then((n=>new lu(e,r,t,n)))}(e)).docs.filter((e=>this.validate(e.data(),t)));if(n.length>0){const t=n[0].data();this.requestUpdate();const e=Math.floor(8*Math.random())+1;this.msgs=[...this.msgs,{gifUrl:`rick${e}.gif`,msg:`was probably answered by @${t.sender} at ${this.convertTimestamp(t.time)}: "${t.msg}"`,sender:"rickBot",time:Date.now()/1e3}],setTimeout((()=>{this.scrollToBottom()}),500)}}validate(t,e){return!t.msg.includes("?")&&this.compareStrings(t.msg,e.msg).length>0&&t.msg.split(" ").length>0}stopReading(){this.unsubscribe()}convertTimestamp(t){const e=new Date(1e3*t),n=e.getHours(),r="0"+e.getMinutes(),i="0"+e.getSeconds();return n+":"+r.substr(-2)+":"+i.substr(-2)}assignId(){return"_"+Math.random().toString(36).substr(2,5)}render(){return u`<link rel="stylesheet" href="../style.css"><div class="chat-wrap"><div class="chat"><div class="top"><div class="top_cam"></div><div class="top_speaker"></div></div><div class="screen"><div class="screen_inner"><form onsubmit="return!1"><input id="chatInput" @change="${t=>this.send(t.target.value,this.userName,t)}" placeholder="Type a message..." type="text"></form><ul class="screen_inner_view" id="scroller"><li class="intro"><span>${this.convertTimestamp(Date.now()/1e3)}</span><br><span>this chat is unencrypted, unsecure and probably totally useless, have fun!</span></li>${this.msgs.map((t=>{return u`<li class="${t.sender!==this.userName?"guest":"user"}"><div class="message"><span class="details"><span>${t.sender===this.userName?"you ("+this.userName+")":t.sender} </span><span>${this.convertTimestamp(t.time)} </span></span><img src="assets/${e=t.gifUrl,null!=e?e:c}"> <span>${t.msg}</span></div></li>`;var e}))}</ul></div></div><div class="bottom"><button class="help">?</button></div></div></div>`}});bu([l({type:Array})],Eu.prototype,"msgs",2),Eu=t("HomeApp",bu([f("home-app")],Eu))}}}));
