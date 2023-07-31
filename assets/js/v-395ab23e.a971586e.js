"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29037],{24448:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-395ab23e","path":"/devices/MULTI-ZIG-SW.html","title":"smarthjemmet.dk MULTI-ZIG-SW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"smarthjemmet.dk MULTI-ZIG-SW control via MQTT","description":"Integrate your smarthjemmet.dk MULTI-ZIG-SW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:44:08.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Switch type","slug":"switch-type","link":"#switch-type","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch_type_1 (enum, button_1 endpoint)","slug":"switch-type-1-enum-button-1-endpoint","link":"#switch-type-1-enum-button-1-endpoint","children":[]},{"level":3,"title":"Switch_type_2 (enum, button_2 endpoint)","slug":"switch-type-2-enum-button-2-endpoint","link":"#switch-type-2-enum-button-2-endpoint","children":[]},{"level":3,"title":"Switch_type_3 (enum, button_3 endpoint)","slug":"switch-type-3-enum-button-3-endpoint","link":"#switch-type-3-enum-button-3-endpoint","children":[]},{"level":3,"title":"Switch_type_4 (enum, button_4 endpoint)","slug":"switch-type-4-enum-button-4-endpoint","link":"#switch-type-4-enum-button-4-endpoint","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690802744000},"filePathRelative":"devices/MULTI-ZIG-SW.md"}')},942790:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var o=i(166252);const n=(0,o._)("h1",{id:"smarthjemmet-dk-multi-zig-sw",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#smarthjemmet-dk-multi-zig-sw","aria-hidden":"true"},"#"),(0,o.Uk)(" smarthjemmet.dk MULTI-ZIG-SW")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"MULTI-ZIG-SW")],-1),l=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("td",null,"Description",-1),u={href:"https://smarthjemmet.dk",target:"_blank",rel:"noopener noreferrer"},s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch_type_1, switch_type_2, switch_type_3, switch_type_4, battery, action, voltage, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MULTI-ZIG-SW.jpg",alt:"smarthjemmet.dk MULTI-ZIG-SW"})])],-1),r=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>If the device did not automatically start in pairing mode (LED blinking), you can start it manually by powering on and off the device five times, keeping it on the 5th time.</p><ul><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery</li></ul><p>The LED should now be blinking with 5-10 second interval.</p><h3 id="switch-type" tabindex="-1"><a class="header-anchor" href="#switch-type" aria-hidden="true">#</a> Switch type</h3><p>MULTI-ZIG-SW has two modes for the four inputs: Switch and multi-click.</p><p>Switch turns the input into an on/off switch like a lamp switch. Multi-click allows the input to click multiple times. These are the different clicks:</p><ul><li>Single (button_X_single)</li><li>Double (button_X_double)</li><li>Triple (button_X_triple)</li><li>Hold (button_X_hold)</li><li>Release (button_X_release)</li></ul><p>Since the device is battery powered, it will not switch mode until it&#39;s awake. Make sure to keep the device online when changing mode, by enabling the input with a click.</p>',10),p=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-type-1-enum-button-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-1-enum-button-1-endpoint" aria-hidden="true">#</a> Switch_type_1 (enum, button_1 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_1_button_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_1_button_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_1_button_1&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="switch-type-2-enum-button-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-2-enum-button-2-endpoint" aria-hidden="true">#</a> Switch_type_2 (enum, button_2 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_2_button_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_2_button_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_2_button_2&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="switch-type-3-enum-button-3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-3-enum-button-3-endpoint" aria-hidden="true">#</a> Switch_type_3 (enum, button_3 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_3_button_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_3_button_3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_3_button_3&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="switch-type-4-enum-button-4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-4-enum-button-4-endpoint" aria-hidden="true">#</a> Switch_type_4 (enum, button_4 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_4_button_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_4_button_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_4_button_4&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>, <code>hold</code>, <code>release</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),m={},b=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,o.up)("RouterLink"),m=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[a,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=smarthjemmet.dk"},{default:(0,o.w5)((()=>[(0,o.Uk)("smarthjemmet.dk")])),_:1})])]),(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o._)("a",u,[(0,o.Uk)("Multi switch from Smarthjemmet.dk"),(0,o.Wm)(m)])])]),s,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,(0,o.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);