import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "font-family": "monospace", "margin": "20px" } }, _attrs))}><h1>Sources</h1><h2>Toutes les donn\xE9es utilis\xE9es sur ce site sont issues de sources de confiance.</h2><h2>Vous pouvez les retrouver ci-dessous.</h2><p style="${ssrRenderStyle({ "font-size": "15px" })}"><a href="https://reseauactionclimat.org/urgence-climatique/" target="blank"> - L\u2019urgence climatique</a> <br><br><a href="https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/" target="blank"> - Quelles solutions face au changement climatique ?</a><br><br><a href="https://www.ademe.fr/" target="blank"> - ADEME</a><br><a href="https://data.ademe.fr/" target="blank"> - Donn\xE9es ADEME 1</a> <br><a href="https://data-transitions2050.ademe.fr/" target="blank"> - Donn\xE9es ADEME 2</a><br><br><a href="https://nosgestesclimat.fr/" target="blank"> - Simulateur d\u2019empreinte carbone</a><br><br><a href="https://www.ipcc.ch/" target="blank"> - GIEC</a><br><a href="https://huggingface.co/spaces/Ekimetrics/climate-question-answering" target="blank"> - Une IA qui conna\xEEt les contenus du dernier rapport du GIEC</a><br><br><a href="https://www.hautconseilclimat.fr/" target="blank"> - Haut conseil pour le climat</a> <br><br><a href="https://bonpote.com/" target="blank"> - Bon Pote</a> <br><br><a href="https://climat.cned.fr/formations/" target="blank"> - Le B.A.-BA du climat</a><br><br></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/documentation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const documentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { documentation as default };
//# sourceMappingURL=documentation-1902de26.mjs.map
