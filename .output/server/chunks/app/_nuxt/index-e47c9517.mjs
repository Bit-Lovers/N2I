import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, ref, createElementBlock, resolveComponent, unref, toRef, isRef } from 'vue';
import { u as useNuxtApp } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const Upgrade = (id, initialAmount, value_price) => {
  let object = { amount: initialAmount, price: value_price };
  return useState(id, () => object);
};
const Cookies = (id) => {
  let value = { amount: 0 };
  return useState(id, () => value);
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Cookies",
  __ssrInlineRender: true,
  setup(__props) {
    Upgrade("1", 0, 2);
    Upgrade("2", 0, 5);
    Upgrade("3", 0, 10);
    Upgrade("4", 0, 20);
    Upgrade("5", 0, 50);
    let cookies = Cookies("current");
    let totalCookies = Cookies("total");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="Button noselect"><h1>Cookies : ${ssrInterpolate(unref(cookies).amount)}</h1></div><div class="Button noselect"><h1>Total Cookies earned : ${ssrInterpolate(unref(totalCookies).amount)}</h1></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cookies.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Upgrade",
  __ssrInlineRender: true,
  setup(__props) {
    Upgrade("1", 5, 2);
    Upgrade("2", 0, 5);
    Upgrade("3", 0, 10);
    Upgrade("4", 0, 20);
    Upgrade("5", 0, 50);
    Cookies("current");
    Cookies("total");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Upgrade.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("Earth1.png");
const _imports_1 = "" + publicAssetsURL("obstacle1.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    Upgrade("1", 0, 2);
    Upgrade("2", 0, 5);
    Cookies("current");
    Cookies("total");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Cookies = _sfc_main$2;
      const _component_Choices = resolveComponent("Choices");
      const _component_Upgrade = _sfc_main$1;
      _push(`<!--[--><div><div class="game"><div class="left"><div id="money"><p id="PointsCount">`);
      _push(ssrRenderComponent(_component_Cookies, null, null, _parent));
      _push(`</p><p id="PointsPerSecond">0 pts/s</p></div><div id="planets"><img id="planet"${ssrRenderAttr("src", _imports_0)}></div><button id="toggleButton">Go</button></div><div class="right"><div class="tabs"><button id="tab1Button">Afficher Tab 1</button><button id="tab2Button">Afficher Tab 2</button></div><div class="tab1 tabContent active">`);
      _push(ssrRenderComponent(_component_Choices, null, null, _parent));
      _push(`<div class="upgrade">`);
      _push(ssrRenderComponent(_component_Upgrade, null, null, _parent));
      _push(`</div></div><div class="tab2 tabContent"><ul><li><h3>Clich\xE9 1</h3><p>Lorem ipsum</p></li><li><h3>Clich\xE9 2</h3><p>Lorem ipsum</p></li><li><h3>Clich\xE9 3</h3><p>Lorem ipsum</p></li></ul></div></div><div class="questions" id="questions1" style="${ssrRenderStyle({ "display": "none" })}"><h3>1. Le changement climatique n&#39;est qu&#39;un cycle naturel de la Terre</h3><ul><li><div id="answer11"><b>a)</b> Il y a eu beaucoup de changement climatique par le pass\xE9, le changement climatique constat\xE9 actuellement est naturel</div></li><li><div id="answer12"><b>b)</b> La temp\xE9rature de l\u2019atmosph\xE8re terrestre a beaucoup \xE9volu\xE9 sur longue une \xE9chelle de temps, mais les activit\xE9s de l\u2019homme sont responsable d\u2019un changement climatique beaucoup plus rapide que les pr\xE9c\xE9dents</div></li><li><div id="answer13"><b>c)</b> Les changements climatiques naturels n\u2019existent pas, ce sont les activit\xE9s humaines qui en sont responsable</div></li><li><div id="answer14" style="${ssrRenderStyle({ "display": "none" })}">Il y a eu des changement climatique par le pass\xE9, qu\u2019on est capable de retracer gr\xE2ce aux carottes de glace r\xE9alis\xE9 par les scientifiques (http://www2.cnrs.fr/sites/communique/fichier/fiche_epica_last.pdf) mais le changement climatique d\u2019aujourd\u2019hui est </div></li></ul></div><div class="questions" id="questions2" style="${ssrRenderStyle({ "display": "none" })}"><h3>2. La France \xE9met seulement 1% du CO2 mondial, c&#39;est \xE0 la Chine et aux \xC9tats-Unis de r\xE9duire leurs \xE9missions</h3><ul><li><div id="answer21"><b>a)</b>Ce chiffre est vrai mais masque la r\xE9elle responsabilit\xE9 de la France dans le changement climatique</div></li><li><div id="answer22"><b>b)</b>Ce chiffre est faux et rel\xE8ve d\u2019une erreur d\u2019un seul rapport scientifique</div></li><li><div id="answer23"><b>c)</b>C\u2019est Vrai</div></li><li><div id="answer24" style="${ssrRenderStyle({ "display": "none" })}">Le Haut Conseil du climat explique qu\u2019il faut privil\xE9gier les chiffre donn\xE9 t \xE9q co2/h/an car ils exprime de mani\xE8re plus juste la responsabilit\xE9 dans le changement climatique des pays. Tout le monde doit contribuer \xE0 la r\xE9duction de GES HCC: https://www.hautconseilclimat.fr/wp-content/uploads/2020/10/hcc_rapport_empreinte-carbone.pdf#%5B%7B%22num%22%3A52%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22FitR%22%7D%2C-421%2C-1%2C1017%2C843%5D</div></li></ul></div><div class="questions" id="questions3" style="${ssrRenderStyle({ "display": "none" })}"><h3>3. R\xE9chauffement climatique ? Alors qu&#39;il fait -5 degr\xE9s dehors\xA0?</h3><ul><li><div id="answer31"><b>a)</b> Votez Trump</div></li><li><div id="answer32"><b>b)</b> Il ne faut pas confondre Climat et m\xE9t\xE9o</div></li><li><div id="answer33"><b>c)</b> Oui mais cet \xE9t\xE9 il a fait super chaud c\u2019est bien la preuve du changement climatique</div></li><li><div id="answer34" style="${ssrRenderStyle({ "display": "none" })}">Le Climat est l\u2019 ensemble des ph\xE9nom\xE8nes m\xE9t\xE9orologiques qui caract\xE9risent l&#39;\xE9tat moyen de l&#39;atmosph\xE8re en un lieu donn\xE9. (Larousse) Donc pour parler de changement climatique il faut consid\xE9rer un plus grand \xE9chantillons de donn\xE9es m\xE9t\xE9orologiques que celle du jour m\xEAme c\u2019est pour cela que le GIEC publie des donn\xE9es \xE0 partir de 1850\xA0: https://report.ipcc.ch/ar6syr/pdf/IPCC_AR6_SYR_LongerReport.pdf#%5B%7B%22num%22%3A18%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C569%2C0%5D</div></li></ul></div><div class="questions" id="questions4" style="${ssrRenderStyle({ "display": "none" })}"><h3>4. Cela fait 30 ans qu&#39;on nous dit que le p\xE9trole va s&#39;\xE9puiser ! Il n&#39;en est rien, on en aura toujours assez</h3><ul><li><div id="answer41"><b>a)</b> Les nouvelle technologies permettent d\u2019exploiter tr\xE8s facilement le p\xE9trole de schiste pr\xE9sent en tr\xE8s grande quantit\xE9 autour du globe</div></li><li><div id="answer42"><b>b)</b> Les lois du march\xE9 mondiale va naturellement faire augmenter le prix du p\xE9trole et faire donc baisser les consommations</div></li><li><div id="answer43"><b>c)</b> Produire davantage de p\xE9trole n\u2019est pas une solution</div></li><li><div id="answer44" style="${ssrRenderStyle({ "display": "none" })}">La combustion des \xE9nergie fossiles repr\xE9sentent 75\xA0% des \xE9missions de CO2, sachant que les \xE9missions mondiale de gaz \xE0 effet de serre doivent \xEAtre r\xE9duite de 43\xA0% d\u2019apr\xE8s le Giec https://www.ouest-france.fr/environnement/rechauffement-climatique/le-giec-a-publie-le-resume-de-ses-six-derniers-rapports-voici-ce-quil-faut-en-retenir-730e4174-c5c8-11ed-bd88-a48dbce3e894 Il serait donc contre productif de tenter de produire davantage de p\xE9trole au lieu d\u2019essayer de r\xE9guler la consommation A cause de la d\xE9pendance en p\xE9trole de l\u2019\xE9conomie : il n\u2019y pas de lien entre le prix du p\xE9trole et son volume, on ne peut pas pr\xE9dire le prix du p\xE9trole en fonction de sa disponibilit\xE9. https://jancovici.com/publications-et-co/articles-de-presse/le-petrole-est-il-elastique/</div></li></ul></div><div class="questions" id="questions5" style="${ssrRenderStyle({ "display": "none" })}"><h3>5. Le changement climatique provoque la fonte des glace qui provoque une mont\xE9e des eaux</h3><ul><li><div id="answer51"><b>a)</b>La mont\xE9e des eau est principalement due \xE0 la dilatation thermique</div></li><li><div id="answer52"><b>b)</b>La mont\xE9e des eaux est principalement due \xE0 la fonte de la banquise</div></li><li><div id="answer53"><b>c)</b>La mont\xE9e des eaux est principalement due \xE0 la fonte des glace continentales</div></li><li><div id="answer54" style="${ssrRenderStyle({ "display": "none" })}">La fonte de la banquise ne fait pas monter le niveau de la mer car le volume immerg\xE9 de la banquise est \xE9gale au volume totale de l\u2019eau de la banquise sous forme liquide. La mont\xE9 des eaux li\xE9 \xE0 la fonte de l\u2019antarctique est n\xE9gligeable face \xE0 la dilatation thermique https://www.pnas.org/doi/full/10.1073/pnas.1519132113</div></li></ul></div><div class="questions" id="questions6" style="${ssrRenderStyle({ "display": "none" })}"><h3>6. Les cons\xE9quences du changement climatiques ne concernent que nos enfants et petits enfants</h3><ul><li><div id="answer61"><b>a)</b>Les cons\xE9quences du changements climatiques sont d\xE9j\xE0 visible aujourd\u2019hui mais ne sont pas encore trop grave</div></li><li><div id="answer62"><b>b)</b>l\u2019Europe ne subit pas encore les cons\xE9quences du changement climatique c\u2019est l\u2019Afrique qui est principalement concern\xE9e</div></li><li><div id="answer63"><b>c)</b>La France se r\xE9chauffe plus vite que la moyenne plan\xE9taire et subie d\xE9j\xE0 des ph\xE9nom\xE8ne climatiques exceptionnel qui perturbe l\xA0\u2018\xE9conomie</div></li><li><div id="answer64" style="${ssrRenderStyle({ "display": "none" })}">Le GIEC avertis sur de nombreux risques \xE0 long terme mais aussi \xE0 court terme du changement climatique comme une perte importante de biodiversit\xE9, une hausse de la mortalit\xE9 ainsi qu\u2019un multiplication des ph\xE9nom\xE8ne m\xE9trologique extr\xEAme https://report.ipcc.ch/ar6syr/pdf/IPCC_AR6_SYR_LongerReport.pdf#%5B%7B%22num%22%3A108%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C620%2C0%5D</div></li></ul></div><div id="reponse1" style="${ssrRenderStyle({ "display": "none" })}">La temp\xE9rature de l\u2019atmosph\xE8re terrestre a beaucoup \xE9volu\xE9 sur longue une \xE9chelle de temps, mais les activit\xE9s de l\u2019homme sont responsable d\u2019un changement climatique beaucoup plus rapide que les pr\xE9c\xE9dents.</div><div id="reponse2" style="${ssrRenderStyle({ "display": "none" })}">Ce chiffre est vrai mais masque la r\xE9elle responsabilit\xE9 de la France dans le changement climatique.</div><div id="reponse3" style="${ssrRenderStyle({ "display": "none" })}">Il ne faut pas confondre Climat et m\xE9t\xE9o</div><div id="reponse4" style="${ssrRenderStyle({ "display": "none" })}">Produire davantage de p\xE9trole n\u2019est pas une solution</div><div id="reponse5" style="${ssrRenderStyle({ "display": "none" })}">La mont\xE9e des eau est principalement due \xE0 la dilatation thermique</div><div id="reponse6" style="${ssrRenderStyle({ "display": "none" })}">La France se r\xE9chauffe plus vite que la moyenne plan\xE9taire et subie d\xE9j\xE0 des ph\xE9nom\xE8ne climatiques exceptionnel qui perturbe l\xA0\u2018\xE9conomie et tende \xE0 se multiplier </div></div><div class="cliche" id="cliche1"></div><div class="cliche" id="cliche2"></div><div class="cliche" id="cliche3"></div><div class="cliche" id="cliche4"></div><div class="cliche" id="cliche5"></div><div class="cliche" id="cliche6"></div><div class="cliche" id="cliche7"></div></div><img id="planet"${ssrRenderAttr("src", _imports_1)} alt="There was a problem"><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e47c9517.mjs.map
