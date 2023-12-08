import { useSSRContext, defineComponent, ref, createElementBlock, unref, toRef, isRef } from 'vue';
import { u as useNuxtApp } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
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
const Cookies = () => {
  let value = { amount: 0 };
  return useState("cookie", () => value);
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
    let cookies = Cookies();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="Button noselect"><h1>Cookies : ${ssrInterpolate(unref(cookies).amount)}</h1></div></div>`);
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
    Cookies();
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    Upgrade("1", 0, 2);
    Upgrade("2", 0, 5);
    Cookies();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Cookies = _sfc_main$2;
      const _component_Upgrade = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="game"><div class="left"><div id="money"><p id="PointsCount">`);
      _push(ssrRenderComponent(_component_Cookies, null, null, _parent));
      _push(`</p><p id="PointsPerSecond">0 pts/s</p></div><div class="planet"></div><button id="toggleButton">Afficher/Cacher les questions</button><button id="toggleButton">Go</button></div><div class="right"><div class="tabs"><button id="tab1Button">Afficher Tab 1</button><button id="tab2Button">Afficher Tab 2</button></div><div class="tab1 tabContent active"><div class="choices"><ul id="countChoice"><li><button>MAX</button></li><li><button>x1</button></li><li><button>x10</button></li><li><button>x100</button></li><li><button>x1000</button></li></ul></div><div class="upgrade">`);
      _push(ssrRenderComponent(_component_Upgrade, null, null, _parent));
      _push(`</div></div><div class="tab2 tabContent"><ul><li><h3>Clich\xE9 1</h3><p>Lorem ipsum</p></li><li><h3>Clich\xE9 2</h3><p>Lorem ipsum</p></li><li><h3>Clich\xE9 3</h3><p>Lorem ipsum</p></li></ul></div></div><div id="questions" style="${ssrRenderStyle({ "display": "none" })}"><h3>Titre question</h3><ul><li><div id="answer1">reponse 1</div></li><li><div id="answer2">reponse 2</div></li><li><div id="answer3">reponse 3</div></li><li><div id="answer4">reponse 4</div></li></ul></div></div><div class="cliche" id="cliche1"></div><div class="cliche" id="cliche2"></div><div class="cliche" id="cliche3"></div><div class="cliche" id="cliche4"></div><div class="cliche" id="cliche5"></div><div class="cliche" id="cliche6"></div></div>`);
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
//# sourceMappingURL=index-e48ac898.mjs.map
