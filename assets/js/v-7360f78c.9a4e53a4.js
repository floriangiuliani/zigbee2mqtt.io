"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82079],{483844:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-7360f78c","path":"/devices/067773.html","title":"Legrand 067773 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067773 control via MQTT","description":"Integrate your Legrand 067773 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Legacy integration","slug":"legacy-integration","link":"#legacy-integration","children":[]},{"level":3,"title":"Model numbers","slug":"model-numbers","link":"#model-numbers","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690802744000},"filePathRelative":"devices/067773.md"}')},591152:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var a=t(166252);const i=(0,a._)("h1",{id:"legrand-067773",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#legrand-067773","aria-hidden":"true"},"#"),(0,a.Uk)(" Legrand 067773")],-1),l=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"067773")],-1),o=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Wireless remote switch")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, action, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067773.jpg",alt:"Legrand 067773"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration" aria-hidden="true">#</a> Legacy integration</h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers" aria-hidden="true">#</a> Model numbers</h3><p>Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 23&quot;, &quot;0 677 73&quot;, and &quot;0 648 93&quot;. Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 13&quot;, &quot;7 418 43&quot; and &quot;7 418 73&quot;. American models are branded as radiant with Netatmo, model numbers are the same as the French ones, but sized for American boxes and plates.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',7),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Note: will only work when legacy: false is set. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},g=(0,t(983744).Z)(m,[["render",function(e,n){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[l,(0,a._)("tbody",null,[s,(0,a._)("tr",null,[o,(0,a._)("td",null,[(0,a.Wm)(t,{to:"/supported-devices/#v=Legrand"},{default:(0,a.w5)((()=>[(0,a.Uk)("Legrand")])),_:1})])]),d,r,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a._)("p",null,[(0,a.Uk)("The remote supports "),(0,a.Wm)(t,{to:"/guide/usage/binding.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("binding")])),_:1}),(0,a.Uk)(".")]),(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);