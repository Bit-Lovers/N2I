import { useSSRContext, defineComponent, unref, toRef, isRef } from 'vue';
import { d as useNuxtApp } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Upgrade",
  __ssrInlineRender: true,
  setup(__props) {
    let station1 = Upgrade("1", 0, 2);
    let station2 = Upgrade("2", 0, 5);
    Cookies();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="Button noselect"><h1>Arbres : ${ssrInterpolate(unref(station1).amount)}</h1></div><div class="Button noselect"><h1>V\xE9lo : ${ssrInterpolate(unref(station2).amount)}</h1></div></div>`);
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Cookies, null, null, _parent));
      _push(ssrRenderComponent(_component_Upgrade, null, null, _parent));
      _push(`</div>`);
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
//# sourceMappingURL=index-dd831c2e.mjs.map
