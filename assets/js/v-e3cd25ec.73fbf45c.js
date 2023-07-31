"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[65762],{640525:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-e3cd25ec","path":"/devices/ZNCLDJ11LM.html","title":"Xiaomi ZNCLDJ11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi ZNCLDJ11LM control via MQTT","description":"Integrate your Xiaomi ZNCLDJ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Configuration of device attributes","slug":"configuration-of-device-attributes","link":"#configuration-of-device-attributes","children":[]},{"level":3,"title":"Lost configuration on long power outage","slug":"lost-configuration-on-long-power-outage","link":"#lost-configuration-on-long-power-outage","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Running (binary)","slug":"running-binary","link":"#running-binary","children":[]},{"level":3,"title":"Motor_state (enum)","slug":"motor-state-enum","link":"#motor-state-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690802744000},"filePathRelative":"devices/ZNCLDJ11LM.md"}')},221689:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(166252);const a=(0,o._)("h1",{id:"xiaomi-zncldj11lm",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-zncldj11lm","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi ZNCLDJ11LM")],-1),s=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),i=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZNCLDJ11LM")],-1),l=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Aqara curtain motor")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"cover (state, position), running, motor_state, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCLDJ11LM.jpg",alt:"Xiaomi ZNCLDJ11LM"})])],-1),d=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Hold button for about 5 seconds until blue light turn on.</p><p>If you need to reset device first, hold button longer until red light turn on.</p><h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes" aria-hidden="true">#</a> Configuration of device attributes</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token property">&quot;reverse_direction&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;hand_open&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;reset_limits&quot;</span><span class="token operator">:</span> xxx\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>reverse_direction</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Device can be configured to act in an opposite direction.</li><li><strong>hand_open</strong>: (<code>true</code>/<code>false</code>, default: <code>true</code>). By default motor starts rotating when you pull the curtain by hand. You can disable this behaviour.</li><li><strong>reset_limits</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Reset the motor. When a path was cleared from obstacles.</li></ul><p>You can send a subset of options, all options that won&#39;t be specified will be revered to default.</p><p>After changing <code>reverse_direction</code> you will need to fully open and fully close the curtain so the motor will re-detect edges. <code>reverse_direction</code> will get new state only after this recalibration.</p><h3 id="lost-configuration-on-long-power-outage" tabindex="-1"><a class="header-anchor" href="#lost-configuration-on-long-power-outage" aria-hidden="true">#</a> Lost configuration on long power outage</h3><p>If motor is used without battery it may lose configuration after long power outage. In that case you need to perform end stops calibration again publishing the following command sequence with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><ol><li><code>{ &quot;options&quot;: { &quot;reset_limits&quot;: true } }</code></li><li><code>{ &quot;state&quot;: &quot;close&quot; }</code></li><li>Wait here for curtain closure.</li><li><code>{ &quot;state&quot;: &quot;open&quot; }</code></li></ol><p>Home Assistant automation example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">alias</span><span class="token punctuation">:</span> Calibrate curtain\n  <span class="token key atrule">trigger</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> homeassistant\n    <span class="token key atrule">event</span><span class="token punctuation">:</span> start\n  <span class="token key atrule">action</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish\n    <span class="token key atrule">data</span><span class="token punctuation">:</span>\n      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set\n      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&quot;{ \\&quot;options\\&quot;: { \\&quot;reset_limits\\&quot;: true } }&quot;</span>\n      <span class="token comment"># note &quot;&quot; are escaped with \\ else will not work if you want to send payload as json</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> cover.close_cover\n    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> cover.&lt;COVER_ID<span class="token punctuation">&gt;</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">delay</span><span class="token punctuation">:</span>\n      <span class="token key atrule">seconds</span><span class="token punctuation">:</span> <span class="token number">13</span> <span class="token comment">#wait for closure complete</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> cover.open_cover\n    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> cover.&lt;COVER_ID<span class="token punctuation">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Motor leaves calibration mode automatically after it reaches the both open and close curtain position limits. Calibration is mandatory for proper position reporting and ability to set intermediate positions.</p>',16),p=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),h=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),v=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="running-binary" tabindex="-1"><a class="header-anchor" href="#running-binary" aria-hidden="true">#</a> Running (binary)</h3><p>Whether the motor is moving or not. Value can be found in the published state on the <code>running</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> running is ON, if <code>false</code> OFF.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum" aria-hidden="true">#</a> Motor_state (enum)</h3><p>Motor state. Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>stopped</code>, <code>opening</code>, <code>closing</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),g={},m=(0,n(983744).Z)(g,[["render",function(e,t){const n=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[s,(0,o._)("tbody",null,[i,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(n,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),r,c,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),d,(0,o.kq)(" Notes END: Do not edit below this line "),p,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),h,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);