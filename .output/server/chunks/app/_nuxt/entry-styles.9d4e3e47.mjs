import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'vue';
import 'unhead';
import '@unhead/shared';

const main = "body,html{color:#000;height:100%;margin:0;overflow:hidden;padding:0}header{align-items:center;background-color:aqua;display:flex;height:10vh;justify-content:space-between;margin:0;padding:0 20px}ul{list-style:none}.game{display:flex;height:90vh}.left,.right{box-sizing:border-box;width:50%}.left{align-items:center;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center}.right{background-color:#ccc;position:relative}.tab1{background-color:purple}.tab1,.tab2{margin-top:30px}.tab2{background-color:#ff0}.tabs{left:0;position:absolute;top:0}.tabContent{display:none}.tabContent.active{display:block}#questions{background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.3);left:50%;padding:20px;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:9999}.planet{animation:rotateBackground 30s linear infinite;background:url(" + buildAssetsURL("planetesaine.f0928c57.png") + ");background-size:cover;height:70%;pointer-events:none;width:70%}@keyframes rotateBackground{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.cliche{background-color:red;height:50px;left:45vh;margin:3px;position:absolute;top:55vh;transition:transform 15s ease-in-out;width:50px}.upgrade-button{align-items:center;display:flex;height:70px;justify-content:space-between;margin:10px;padding:10px;width:500px}.upgrade-image{background-color:red;height:50px;width:50px}#countChoice{display:flex;justify-content:space-between;margin:10px}.Button:hover{cursor:pointer}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}";

const entryStyles_9d4e3e47 = [main];

export { entryStyles_9d4e3e47 as default };
//# sourceMappingURL=entry-styles.9d4e3e47.mjs.map
