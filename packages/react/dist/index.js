var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode
      ? (__toESMCache_node ??= new WeakMap())
      : (__toESMCache_esm ??= new WeakMap());
    var cached = cache.get(mod);
    if (cached) return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to =
    isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default")
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target;
  if ((mod && typeof mod === "object") || typeof mod === "function") {
    for (const key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true,
        });
  }
  if (canCache) cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (
  mod || cb((mod = { exports: {} }).exports, mod), mod.exports
);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name),
    });
};

// ../../node_modules/.bun/use-sync-external-store@1.7.0+0441d6f8f57aca1e/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
import * as React58 from "react";

var require_use_sync_external_store_shim_development = __commonJS((exports) => {
  (() => {
    function is(x, y) {
      return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      didWarnOld18Alpha ||
        React58.startTransition === undefined ||
        ((didWarnOld18Alpha = true),
        console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.",
        ));
      var value = getSnapshot();
      if (!didWarnUncachedGetSnapshot) {
        var cachedValue = getSnapshot();
        objectIs(value, cachedValue) ||
          (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop",
          ),
          (didWarnUncachedGetSnapshot = true));
      }
      cachedValue = useState2({
        inst: { value, getSnapshot },
      });
      var inst = cachedValue[0].inst,
        forceUpdate = cachedValue[1];
      useLayoutEffect2(() => {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      }, [subscribe, value, getSnapshot]);
      useEffect2(() => {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(() => {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      }, [subscribe]);
      useDebugValue2(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var objectIs = typeof Object.is === "function" ? Object.is : is,
      useState2 = React58.useState,
      useEffect2 = React58.useEffect,
      useLayoutEffect2 = React58.useLayoutEffect,
      useDebugValue2 = React58.useDebugValue,
      didWarnOld18Alpha = false,
      didWarnUncachedGetSnapshot = false,
      shim =
        typeof window === "undefined" ||
        typeof window.document === "undefined" ||
        typeof window.document.createElement === "undefined"
          ? useSyncExternalStore$1
          : useSyncExternalStore$2;
    exports.useSyncExternalStore =
      React58.useSyncExternalStore !== undefined
        ? React58.useSyncExternalStore
        : shim;
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// ../../node_modules/.bun/use-sync-external-store@1.7.0+0441d6f8f57aca1e/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS((exports, module) => {
  if (false) {
  } else {
    module.exports = require_use_sync_external_store_shim_development();
  }
});

// ../../node_modules/.bun/use-sync-external-store@1.7.0+0441d6f8f57aca1e/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
import * as React59 from "react";

var require_with_selector_development = __commonJS((exports) => {
  (() => {
    function is(x, y) {
      return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var shim = require_shim(),
      objectIs = typeof Object.is === "function" ? Object.is : is,
      useSyncExternalStore = shim.useSyncExternalStore,
      useRef2 = React59.useRef,
      useEffect2 = React59.useEffect,
      useMemo2 = React59.useMemo,
      useDebugValue2 = React59.useDebugValue;
    exports.useSyncExternalStoreWithSelector = (
      subscribe,
      getSnapshot,
      getServerSnapshot,
      selector,
      isEqual,
    ) => {
      var instRef = useRef2(null);
      if (instRef.current === null) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo2(() => {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (isEqual !== undefined && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return (memoizedSelection = currentSelection);
            }
            return (memoizedSelection = nextSnapshot);
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (isEqual !== undefined && isEqual(currentSelection, nextSelection))
            return (memoizedSnapshot = nextSnapshot), currentSelection;
          memoizedSnapshot = nextSnapshot;
          return (memoizedSelection = nextSelection);
        }
        var hasMemo = false,
          memoizedSnapshot,
          memoizedSelection,
          maybeGetServerSnapshot =
            getServerSnapshot === undefined ? null : getServerSnapshot;
        return [
          () => memoizedSelector(getSnapshot()),
          maybeGetServerSnapshot === null
            ? undefined
            : () => memoizedSelector(maybeGetServerSnapshot()),
        ];
      }, [getSnapshot, getServerSnapshot, selector, isEqual]);
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect2(() => {
        inst.hasValue = true;
        inst.value = value;
      }, [value]);
      useDebugValue2(value);
      return value;
    };
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// ../../node_modules/.bun/use-sync-external-store@1.7.0+0441d6f8f57aca1e/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS((exports, module) => {
  if (false) {
  } else {
    module.exports = require_with_selector_development();
  }
});

// ../tokens/src/classes.ts
function recipe(className, attrs = {}) {
  const out = { className };
  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined) continue;
    out[key.startsWith("aria-") ? key : `data-${key}`] = value;
  }
  return out;
}
function button(options = {}) {
  return recipe("fox-button", { variant: options.variant, size: options.size });
}
function badge(options = {}) {
  return recipe("fox-badge", {
    tone: options.tone,
    outline: options.outline ? "" : undefined,
    mono: options.mono ? "" : undefined,
  });
}
function card(options = {}) {
  return recipe("fox-card", {
    padding: options.padding,
    elevated: options.elevated ? "" : undefined,
    accent: options.accent ? "" : undefined,
  });
}
function table(options = {}) {
  return recipe("fox-table", { zebra: options.zebra ? "" : undefined });
}
function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
var parts = {
  cardHeader: "fox-card-header",
  cardTitle: "fox-card-title",
  cardBody: "fox-card-body",
  cardFooter: "fox-card-footer",
  dialogBackdrop: "fox-dialog-backdrop",
  dialogPopup: "fox-dialog-popup",
  dialogHeader: "fox-dialog-header",
  dialogTitle: "fox-dialog-title",
  dialogBody: "fox-dialog-body",
  dialogFooter: "fox-dialog-footer",
  popover: "fox-popover",
  popoverTitle: "fox-popover-title",
  popoverDescription: "fox-popover-description",
  tooltip: "fox-tooltip",
  menu: "fox-menu",
  menuItem: "fox-menu-item",
  menuLabel: "fox-menu-label",
  menuSeparator: "fox-menu-separator",
  tabsList: "fox-tabs-list",
  tab: "fox-tab",
  tabsPanel: "fox-tabs-panel",
  checkbox: "fox-checkbox",
  checkboxIndicator: "fox-checkbox-indicator",
  radio: "fox-radio",
  radioIndicator: "fox-radio-indicator",
  switch: "fox-switch",
  switchThumb: "fox-switch-thumb",
  selectTrigger: "fox-select-trigger",
  selectIcon: "fox-select-icon",
  selectPopup: "fox-select-popup",
  selectItem: "fox-select-item",
  toastViewport: "fox-toast-viewport",
  toast: "fox-toast",
  toastTitle: "fox-toast-title",
  toastDescription: "fox-toast-description",
  toastClose: "fox-toast-close",
  tableWrap: "fox-table-wrap",
  stack: "fox-stack",
  row: "fox-row",
  grid: "fox-grid",
  num: "fox-num",
  muted: "fox-muted",
  mono: "fox-mono",
};

// src/surface.tsx
import { jsx, jsxs } from "react/jsx-runtime";

function Button({
  variant = "outline",
  size = "md",
  className,
  type = "button",
  ...rest
}) {
  const recipe = button({ variant, size });
  return /* @__PURE__ */ jsx("button", {
    type,
    ...rest,
    ...recipe,
    className: cx(recipe.className, className),
  });
}
function IconButton({ className, variant = "ghost", ...rest }) {
  return /* @__PURE__ */ jsx(Button, {
    variant,
    size: "icon",
    className,
    ...rest,
  });
}
function Badge({ tone, outline, mono, className, ...rest }) {
  const recipe = badge({ tone, outline, mono });
  return /* @__PURE__ */ jsx("span", {
    ...rest,
    ...recipe,
    className: cx(recipe.className, className),
  });
}
function Card({ padding, elevated, accent, className, ...rest }) {
  const recipe = card({ padding, elevated, accent });
  return /* @__PURE__ */ jsx("div", {
    ...rest,
    ...recipe,
    className: cx(recipe.className, className),
  });
}
function CardHeader({ title, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs("div", {
    ...rest,
    className: cx(parts.cardHeader, className),
    children: [
      title
        ? /* @__PURE__ */ jsx("span", {
            className: parts.cardTitle,
            children: title,
          })
        : null,
      children,
    ],
  });
}
function CardBody({ className, ...rest }) {
  return /* @__PURE__ */ jsx("div", {
    ...rest,
    className: cx(parts.cardBody, className),
  });
}
function CardFooter({ className, ...rest }) {
  return /* @__PURE__ */ jsx("div", {
    ...rest,
    className: cx(parts.cardFooter, className),
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
import * as React22 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/empty.mjs
function NOOP() {}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useControlled.mjs
import * as React from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/createLogOnce.mjs
var loggedMessages;
if (true) {
  loggedMessages = new Set();
}
function createLogOnce(severity, prefix) {
  return function logOnce(...messages) {
    if (true) {
      const message = messages.join(" ");
      const output = prefix ? `${prefix}: ${message}` : message;
      const key = `${severity}:${output}`;
      if (!loggedMessages.has(key)) {
        loggedMessages.add(key);
        if (severity === "warn") {
          console.warn(output);
        } else {
          console.error(output);
        }
      }
    }
  };
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/error.mjs
var error = createLogOnce("error", "Base UI");

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useControlled.mjs
("use client");
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value",
}) {
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = React.useState(() => defaultProp);
  const value =
    isControlled && controlled !== undefined ? controlled : valueState;
  if (true) {
    React.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        error(
          [
            `A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`,
            "Elements should not switch from uncontrolled to controlled (or vice versa).",
            `Decide between using a controlled or uncontrolled ${name} ` +
              "element for the lifetime of the component.",
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            "More info: https://fb.me/react-controlled-components",
          ].join(`
`),
        );
      }
    }, [state, name, controlled]);
    const { current: defaultValue } = React.useRef(defaultProp);
    React.useEffect(() => {
      if (
        !isControlled &&
        serializeToDevModeString(defaultValue) !==
          serializeToDevModeString(defaultProp)
      ) {
        error(
          [
            `A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`,
          ].join(`
`),
        );
      }
    }, [defaultProp]);
  }
  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (
        key === "_owner" &&
        this != null &&
        typeof this === "object" &&
        "$$typeof" in this
      ) {
        return;
      }
      if (typeof value === "bigint") {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === "object") {
        const id = seen.get(value);
        if (id !== undefined) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return "__unserializable__";
  }
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
import * as React2 from "react";

("use client");
var noop = () => {};
var useIsoLayoutEffect =
  typeof document !== "undefined" ? React2.useLayoutEffect : noop;

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useRefWithInit.mjs
import * as React3 from "react";

("use client");
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React3.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useMergedRefs.mjs
function useMergedRefs(a, b, c, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: [],
  };
}
function didChange(forkRef, a, b, c, d) {
  return (
    forkRef.refs[0] !== a ||
    forkRef.refs[1] !== b ||
    forkRef.refs[2] !== c ||
    forkRef.refs[3] !== d
  );
}
function didChangeN(forkRef, newRefs) {
  return (
    forkRef.refs.length !== newRefs.length ||
    forkRef.refs.some((ref, index) => ref !== newRefs[index])
  );
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1,
};
var visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  margin: 0,
  top: 0,
  left: 0,
};
var visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute",
};

// ../../node_modules/.bun/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (
    (node == null || (_node$ownerDocument = node.ownerDocument) == null
      ? undefined
      : _node$ownerDocument.defaultView) || window
  );
}
function getDocumentElement(node) {
  var _ref;
  return (_ref =
    (isNode(node) ? node.ownerDocument : node.document) || window.document) ==
    null
    ? undefined
    : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return (
    value instanceof HTMLElement ||
    value instanceof getWindow(value).HTMLElement
  );
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return (
    value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot
  );
}
function isOverflowElement(element) {
  const { overflow, overflowX, overflowY, display } =
    getComputedStyle2(element);
  return (
    /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
    display !== "inline" &&
    display !== "contents"
  );
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {}
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss)
    ? getComputedStyle2(elementOrCss)
    : elementOrCss;
  return (
    isNotNone(css.transform) ||
    isNotNone(css.translate) ||
    isNotNone(css.scale) ||
    isNotNone(css.rotate) ||
    isNotNone(css.perspective) ||
    (!isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter))) ||
    willChangeRe.test(css.willChange || "") ||
    containRe.test(css.contain || "")
  );
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop,
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY,
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result =
    node.assignedSlot ||
    node.parentNode ||
    (isShadowRoot(node) && node.host) ||
    getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === undefined) {
    list = [];
  }
  if (traverseIframes === undefined) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody =
    scrollableAncestor ===
    ((_node$ownerDocument2 = node.ownerDocument) == null
      ? undefined
      : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(
      win,
      win.visualViewport || [],
      isOverflowElement(scrollableAncestor) ? scrollableAncestor : [],
      frameElement && traverseIframes ? getOverflowAncestors(frameElement) : [],
    );
  } else {
    return list.concat(
      scrollableAncestor,
      getOverflowAncestors(scrollableAncestor, [], traverseIframes),
    );
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent)
    ? win.frameElement
    : null;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/owner.mjs
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/getDefaultFormSubmitter.mjs
function getDefaultFormSubmitter(form) {
  if (!form) {
    return null;
  }
  for (const candidate of form.elements) {
    const tagName = candidate.tagName;
    if (tagName === "BUTTON" || tagName === "INPUT") {
      const button = candidate;
      if (button.type === "submit") {
        return button;
      }
    }
  }
  return null;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
var valid = "data-valid";
var invalid = "data-invalid";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/field-constants/constants.mjs
var DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false,
};
var DEFAULT_FIELD_STATE_ATTRIBUTES = {
  valid: null,
  touched: false,
  dirty: false,
  filled: false,
  focused: false,
};
var DEFAULT_FIELD_ROOT_STATE = {
  disabled: false,
  ...DEFAULT_FIELD_STATE_ATTRIBUTES,
};
var fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        [valid]: "",
      };
    }
    return {
      [invalid]: "",
    };
  },
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/root/CheckboxRootDataAttributes.mjs
var checked = "data-checked";
var unchecked = "data-unchecked";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/utils/getCheckboxStateAttributesMapping.mjs
function getCheckboxStateAttributesMapping(state) {
  return {
    checked(value) {
      if (state.indeterminate) {
        return {};
      }
      if (value) {
        return {
          [checked]: "",
        };
      }
      return {
        [unchecked]: "",
      };
    },
    ...fieldValidityMapping,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
function dispatchClickWithModifiers(
  target,
  sourceEvent,
  { detail = 0, pointerType = "" } = {},
) {
  target.dispatchEvent(
    new (getWindow(target).PointerEvent)("click", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail,
      pointerType,
      shiftKey: sourceEvent.shiftKey,
      ctrlKey: sourceEvent.ctrlKey,
      altKey: sourceEvent.altKey,
      metaKey: sourceEvent.metaKey,
    }),
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useRenderElement.mjs
import * as React6 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/getReactElementRef.mjs
import * as React5 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/reactVersion.mjs
import * as React4 from "react";

var majorVersion = parseInt(React4.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/getReactElementRef.mjs
function getReactElementRef(element) {
  if (!(/* @__PURE__ */ React5.isValidElement(element))) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (
    (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null
  );
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/mergeObjects.mjs
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b,
    };
  }
  return;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/warn.mjs
var warn = createLogOnce("warn", "Base UI");

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/resolveClassName.mjs
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/resolveStyle.mjs
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/merge-props/mergeProps.mjs
var EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  if (!c && !d && !e && !a) {
    return createInitialMergedProps(b);
  }
  let merged = createInitialMergedProps(a);
  if (b) {
    merged = mergeInto(merged, b);
  }
  if (c) {
    merged = mergeInto(merged, c);
  }
  if (d) {
    merged = mergeInto(merged, d);
  }
  if (e) {
    merged = mergeInto(merged, e);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...inputProps(EMPTY_PROPS),
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps,
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(
          mergedProps.style,
          externalPropValue,
        );
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(
          mergedProps.className,
          externalPropValue,
        );
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(
            mergedProps[propName],
            externalPropValue,
          );
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return (
    code0 === 111 &&
    code1 === 110 &&
    code2 >= 65 &&
    code2 <= 90 &&
    (typeof value === "function" || typeof value === "undefined")
  );
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useRenderElement.mjs
import { createElement as _createElement } from "react";

function useRenderElement(element, componentProps, params = {}) {
  let renderProp = componentProps.render;
  if (params.enabled !== false) {
    renderProp = unwrapLazyRenderProp(renderProp);
  }
  const outProps = useRenderElementProps(componentProps, params, renderProp);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params, renderProp) {
  const { className: classNameProp, style: styleProp } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping,
    enabled = true,
  } = params;
  const className = enabled
    ? resolveClassName(classNameProp, state)
    : undefined;
  const style = enabled ? resolveStyle(styleProp, state) : undefined;
  const stateProps = enabled
    ? getStateAttributesProps(state, stateAttributesMapping)
    : EMPTY_OBJECT;
  const resolvedProps =
    enabled && props ? resolveRenderFunctionProps(props) : undefined;
  const outProps = enabled
    ? (mergeObjects(stateProps, resolvedProps) ?? {})
    : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([
        outProps.ref,
        getReactElementRef(renderProp),
        ...ref,
      ]);
    } else {
      outProps.ref = useMergedRefs(
        outProps.ref,
        getReactElementRef(renderProp),
        ref,
      );
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== undefined) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== undefined) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(undefined, props);
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function unwrapLazyRenderProp(render) {
  if (render?.$$typeof !== REACT_LAZY_TYPE) {
    return render;
  }
  const unwrapped = React6.Children.toArray(render)[0];
  return /* @__PURE__ */ React6.isValidElement(unwrapped) ? unwrapped : render;
}
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render);
      }
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    if (true) {
      if (!(/* @__PURE__ */ React6.isValidElement(render))) {
        throw new Error(
          [
            "Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
            "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
            "https://base-ui.com/r/invalid-render-prop",
          ].join(`
`),
        );
      }
    }
    return /* @__PURE__ */ React6.cloneElement(render, mergedProps);
  }
  return renderTag(element, props);
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(
    `The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`,
    "This usually means a React component was passed directly as `render={Component}`.",
    "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.",
    "If this is an intentional render callback, rename it to start with a lowercase letter.",
    "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.",
    "https://base-ui.com/r/invalid-render-prop",
  );
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ _createElement("button", {
      type: "button",
      ...props,
      key: props.key,
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ _createElement("img", {
      alt: "",
      ...props,
      key: props.key,
    });
  }
  return /* @__PURE__ */ React6.createElement(Tag, props);
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useId.mjs
import * as React9 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/safeReact.mjs
import * as React7 from "react";

var SafeReact = {
  ...React7,
};

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useForcedRerendering.mjs
import * as React8 from "react";

("use client");
function useForcedRerendering() {
  const [, setState] = React8.useState({});
  return React8.useCallback(() => {
    setState({});
  }, []);
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useId.mjs
("use client");
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const defaultId = React9.useRef(undefined);
  const forceRerender = useForcedRerendering();
  const id = idOverride ?? defaultId.current;
  React9.useEffect(() => {
    if (defaultId.current == null) {
      globalId += 1;
      defaultId.current = `${prefix}-${globalId}`;
      if (idOverride == null) {
        forceRerender();
      }
    }
  }, [idOverride, prefix, forceRerender]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useBaseUiId.mjs
("use client");
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/use-button/useButton.mjs
import * as React12 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useStableCallback.mjs
("use client");
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect =
  useInsertionEffect && useInsertionEffect !== SafeReact.useLayoutEffect
    ? useInsertionEffect
    : (fn) => fn();
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: undefined,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    },
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    throw new Error("Base UI: Cannot call an event handler while rendering.");
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
import * as React10 from "react";

("use client");
var CompositeRootContext = /* @__PURE__ */ React10.createContext(undefined);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React10.useContext(CompositeRootContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
import * as React11 from "react";

("use client");
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton,
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React11.useMemo(() => {
    const additionalProps = {
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      },
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (
      (isNativeButton && (focusableWhenDisabled || isFocusableComposite)) ||
      (!isNativeButton && disabled)
    ) {
      additionalProps["aria-disabled"] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [
    composite,
    disabled,
    focusableWhenDisabled,
    isFocusableComposite,
    isNonFocusableComposite,
    isNativeButton,
    tabIndexProp,
  ]);
  return {
    props,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/use-button/useButton.mjs
("use client");
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp,
  } = parameters;
  const elementRef = React12.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
  const { props: focusableWhenDisabledProps } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton,
  });
  if (true) {
    React12.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message =
            "A component that acts as a button expected a native <button> because the " +
            "`nativeButton` prop is true. Rendering a non-<button> removes native button " +
            "semantics, which can impact forms and accessibility. Use a real <button> in the " +
            "`render` prop, or set `nativeButton` to `false`.";
          error(`${message}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message =
          "A component that acts as a button expected a non-<button> because the `nativeButton` " +
          "prop is false. Rendering a <button> keeps native behavior while Base UI applies " +
          "non-native attributes and handlers, which can add unintended extra attributes (such " +
          "as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set " +
          "`nativeButton` to `true`.";
        error(`${message}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React12.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (
      isCompositeItem &&
      disabled &&
      focusableWhenDisabledProps.disabled === undefined &&
      element.disabled
    ) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React12.useCallback(
    (externalProps = {}) => {
      const {
        onClick: externalOnClick,
        onMouseDown: externalOnMouseDown,
        onKeyUp: externalOnKeyUp,
        onKeyDown: externalOnKeyDown,
        onPointerDown: externalOnPointerDown,
        ...otherExternalProps
      } = externalProps;
      return mergeProps(
        {
          onClick(event) {
            if (disabled) {
              event.preventDefault();
              return;
            }
            externalOnClick?.(event);
          },
          onMouseDown(event) {
            if (!disabled) {
              externalOnMouseDown?.(event);
            }
          },
          onKeyDown(event) {
            if (disabled) {
              return;
            }
            makeEventPreventable(event);
            externalOnKeyDown?.(event);
            if (event.baseUIHandlerPrevented) {
              return;
            }
            const isCurrentTarget = event.target === event.currentTarget;
            const currentTarget = event.currentTarget;
            const isButton = isButtonElement(currentTarget);
            const isLink = !isNativeButton && isValidLinkElement(currentTarget);
            const shouldClick =
              isCurrentTarget && (isNativeButton ? isButton : !isLink);
            const isEnterKey = event.key === "Enter";
            const isSpaceKey = event.key === " ";
            const role = currentTarget.getAttribute("role");
            const isTextNavigationRole =
              role?.startsWith("menuitem") ||
              role === "option" ||
              role === "gridcell";
            if (isCurrentTarget && isCompositeItem && isSpaceKey) {
              if (event.defaultPrevented && isTextNavigationRole) {
                return;
              }
              event.preventDefault();
              if (!isNativeButton || isButton) {
                event.preventBaseUIHandler();
                dispatchClickWithModifiers(currentTarget, event);
              }
              return;
            }
            if (
              !shouldClick ||
              isNativeButton ||
              (!isSpaceKey && !isEnterKey)
            ) {
              if (isCurrentTarget && isLink && isSpaceKey) {
                event.preventDefault();
              }
              return;
            }
            if (event.defaultPrevented) {
              return;
            }
            event.preventDefault();
            if (isEnterKey) {
              event.preventBaseUIHandler();
              dispatchClickWithModifiers(currentTarget, event);
            }
          },
          onKeyUp(event) {
            if (disabled) {
              return;
            }
            makeEventPreventable(event);
            externalOnKeyUp?.(event);
            if (
              event.target === event.currentTarget &&
              isNativeButton &&
              isCompositeItem &&
              isButtonElement(event.currentTarget) &&
              event.key === " "
            ) {
              event.preventDefault();
              return;
            }
            if (event.baseUIHandlerPrevented) {
              return;
            }
            if (
              event.target === event.currentTarget &&
              !isNativeButton &&
              !isCompositeItem &&
              !event.defaultPrevented &&
              event.key === " "
            ) {
              event.preventBaseUIHandler();
              dispatchClickWithModifiers(event.currentTarget, event);
            }
          },
          onPointerDown(event) {
            if (disabled) {
              event.preventDefault();
              return;
            }
            externalOnPointerDown?.(event);
          },
        },
        isNativeButton
          ? {
              type: "button",
            }
          : {
              role: "button",
            },
        focusableWhenDisabledProps,
        otherExternalProps,
      );
    },
    [disabled, focusableWhenDisabledProps, isCompositeItem, isNativeButton],
  );
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef,
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "A" && Boolean(elem.href);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/field-root-context/FieldRootContext.mjs
import * as React13 from "react";

("use client");
var DEFAULT_FIELD_ROOT_CONTEXT = {
  invalid: undefined,
  name: undefined,
  validityData: {
    state: DEFAULT_VALIDITY_STATE,
    errors: [],
    error: "",
    value: "",
    initialValue: null,
  },
  setValidityData: NOOP,
  disabled: undefined,
  setTouched: NOOP,
  setDirty: NOOP,
  setFilled: NOOP,
  setFocused: NOOP,
  focusOwnerRef: {
    current: undefined,
  },
  validationMode: "onSubmit",
  shouldValidateOnChange: () => false,
  state: DEFAULT_FIELD_ROOT_STATE,
  registerFieldControl: NOOP,
  validation: {
    getValidationProps: (_disabled, props = EMPTY_OBJECT) => props,
    inputRef: {
      current: null,
    },
    registeredInputs: new Map(),
    registerInput: NOOP,
    getInputControl: () => null,
    commit: async () => {},
    change: NOOP,
  },
};
var FieldRootContext = /* @__PURE__ */ React13.createContext(
  DEFAULT_FIELD_ROOT_CONTEXT,
);
if (true) FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
  const context = React13.useContext(FieldRootContext);
  if (context.setValidityData === NOOP && !optional) {
    throw new Error(
      "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/field-root-context/useSetFieldFocused.mjs
("use client");
function useSetFieldFocused(disabled, focusTargetRef, onFocusedChange) {
  const { setFocused, focusOwnerRef } = useFieldRootContext();
  const setFieldFocused = useStableCallback((focused) => {
    if (focused ? !disabled : focusOwnerRef.current === setFieldFocused) {
      focusOwnerRef.current = focused && setFieldFocused;
      onFocusedChange?.(focused);
      setFocused(focused);
    }
  });
  useIsoLayoutEffect(() => {
    const el = focusTargetRef.current;
    const root = el?.getRootNode();
    if (root?.activeElement === el) {
      setFieldFocused(true);
    }
    return () => setFieldFocused(false);
  }, [disabled, focusTargetRef, setFieldFocused]);
  return setFieldFocused;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
("use client");
function useRegisterFieldControl(
  controlRef,
  id,
  value,
  getFormValueOverride,
  enabled = true,
  name,
) {
  const { registerFieldControl } = useFieldRootContext();
  const sourceRef = useRefWithInit(() => Symbol());
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    if (!enabled) {
      registerFieldControl(source, undefined);
      return;
    }
    const registration = {
      controlRef,
      getValue: getFormValueOverride,
      id,
      name,
      value,
    };
    registerFieldControl(source, registration);
  }, [
    controlRef,
    enabled,
    getFormValueOverride,
    id,
    name,
    registerFieldControl,
    sourceRef,
    value,
  ]);
  useIsoLayoutEffect(() => {
    const source = sourceRef.current;
    return () => {
      registerFieldControl(source, undefined);
    };
  }, [registerFieldControl, sourceRef]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/field/item/FieldItemContext.mjs
import * as React14 from "react";

("use client");
var FieldItemContext = /* @__PURE__ */ React14.createContext({
  disabled: false,
});
if (true) FieldItemContext.displayName = "FieldItemContext";
function useFieldItemContext() {
  const context = React14.useContext(FieldItemContext);
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/form-context/FormContext.mjs
import * as React15 from "react";

("use client");
var FormContext = /* @__PURE__ */ React15.createContext({
  elementRef: {
    current: null,
  },
  formRef: {
    current: {
      fields: new Map(),
    },
  },
  errors: {},
  clearErrors: NOOP,
  validationMode: "onSubmit",
  submitCountRef: {
    current: 0,
  },
});
if (true) FormContext.displayName = "FormContext";
function useFormContext() {
  return React15.useContext(FormContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
import * as React16 from "react";

("use client");
var LabelableContext = /* @__PURE__ */ React16.createContext({
  controlId: undefined,
  registerControlId: NOOP,
  resetControlId: NOOP,
  labelId: undefined,
  setLabelId: NOOP,
  messageIds: [],
  setMessageIds: NOOP,
  getDescriptionProps: (externalProps) => externalProps,
});
if (true) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
  return React16.useContext(LabelableContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/labelable-provider/useAriaLabelledBy.mjs
import * as React17 from "react";

("use client");
function useAriaLabelledBy(
  explicitAriaLabelledBy,
  labelId,
  labelSourceRef,
  enableFallback = true,
  labelSourceId,
  ariaLabel,
) {
  const [fallbackAriaLabelledBy, setFallbackAriaLabelledBy] =
    React17.useState();
  const generatedLabelId = useBaseUiId(
    labelSourceId ? `${labelSourceId}-label` : undefined,
  );
  const hasAriaLabel = Boolean(ariaLabel?.trim());
  const implicitLabelId = hasAriaLabel ? undefined : labelId;
  const ariaLabelledBy =
    explicitAriaLabelledBy ?? implicitLabelId ?? fallbackAriaLabelledBy;
  useIsoLayoutEffect(() => {
    const nextAriaLabelledBy =
      explicitAriaLabelledBy || labelId || hasAriaLabel || !enableFallback
        ? undefined
        : getAriaLabelledBy(labelSourceRef.current, generatedLabelId);
    if (fallbackAriaLabelledBy !== nextAriaLabelledBy) {
      setFallbackAriaLabelledBy(nextAriaLabelledBy);
    }
  });
  return ariaLabelledBy;
}
function getAriaLabelledBy(labelSource, generatedLabelId) {
  const label = findAssociatedLabel(labelSource);
  if (!label) {
    return;
  }
  if (!label.id && generatedLabelId) {
    label.id = generatedLabelId;
  }
  return label.id || undefined;
}
function findAssociatedLabel(labelSource) {
  if (!labelSource) {
    return;
  }
  const parent = labelSource.parentElement;
  if (parent && parent.tagName === "LABEL") {
    return parent;
  }
  const controlId = labelSource.id;
  if (controlId) {
    const nextSibling = labelSource.nextElementSibling;
    if (nextSibling && nextSibling.htmlFor === controlId) {
      return nextSibling;
    }
  }
  const labels = labelSource.labels;
  return labels && labels[0];
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
import * as React18 from "react";

("use client");
function useLabelableId(params = {}) {
  const { id, enabled = true } = params;
  const { controlId, registerControlId, resetControlId } =
    useLabelableContext();
  const defaultId = useBaseUiId();
  const controlSourceRef = useRefWithInit(() => Symbol());
  const hasRegisteredRef = React18.useRef(false);
  const hadExplicitIdRef = React18.useRef(false);
  const unregisterControlId = useStableCallback(() => {
    if (!hasRegisteredRef.current || registerControlId === NOOP) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, undefined);
  });
  useIsoLayoutEffect(() => {
    if (!enabled || registerControlId === NOOP) {
      unregisterControlId();
      return;
    }
    let nextId;
    if (id !== undefined) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      resetControlId();
      return;
    }
    if (nextId === undefined) {
      unregisterControlId();
      return;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return;
  }, [
    id,
    enabled,
    registerControlId,
    resetControlId,
    defaultId,
    controlSourceRef,
    unregisterControlId,
  ]);
  useIsoLayoutEffect(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return (enabled ? controlId : undefined) ?? id ?? defaultId;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
import * as React19 from "react";

("use client");
var CheckboxGroupContext = /* @__PURE__ */ React19.createContext(undefined);
if (true) CheckboxGroupContext.displayName = "CheckboxGroupContext";
function useCheckboxGroupContext() {
  return React19.useContext(CheckboxGroupContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/root/CheckboxRootContext.mjs
import * as React20 from "react";

("use client");
var CheckboxRootContext = /* @__PURE__ */ React20.createContext(undefined);
if (true) CheckboxRootContext.displayName = "CheckboxRootContext";
function useCheckboxRootContext() {
  const context = React20.useContext(CheckboxRootContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom,
  };
  return details;
}
function createGenericEventDetails(reason, event, customProperties) {
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    ...custom,
  };
  return details;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/reason-parts.mjs
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var missing = "missing";
var initial = "initial";
var imperativeAction = "imperative-action";
var windowResize = "window-resize";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useValueChanged.mjs
import * as React21 from "react";

("use client");
function useValueChanged(value, onChange) {
  const valueRef = React21.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current !== value) {
      onChangeCallback(valueRef.current);
    }
    valueRef.current = value;
  }, [value, onChangeCallback]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

("use client");
var PARENT_CHECKBOX = "data-parent";
var CheckboxRoot = /* @__PURE__ */ React22.forwardRef(
  function CheckboxRoot(componentProps, forwardedRef) {
    const {
      checked: checkedProp,
      className,
      defaultChecked = false,
      "aria-labelledby": ariaLabelledByProp,
      disabled: disabledProp = false,
      form,
      id: idProp,
      indeterminate = false,
      inputRef: inputRefProp,
      name: nameProp,
      onCheckedChange,
      parent = false,
      readOnly = false,
      render,
      required = false,
      uncheckedValue,
      value: valueProp,
      nativeButton = false,
      style,
      ...elementProps
    } = componentProps;
    const { clearErrors } = useFormContext();
    const {
      disabled: rootDisabled,
      name: fieldName,
      setDirty,
      setFilled,
      setTouched,
      state: fieldState,
      validationMode,
      validityData,
      validation: localValidation,
    } = useFieldRootContext();
    const fieldItemContext = useFieldItemContext();
    const { labelId, registerControlId, getDescriptionProps } =
      useLabelableContext();
    const groupContext = useCheckboxGroupContext();
    const parentContext =
      groupContext?.allValues === undefined ? undefined : groupContext.parent;
    const isGroupedWithParent = parentContext !== undefined;
    const disabled =
      rootDisabled ||
      fieldItemContext.disabled ||
      groupContext?.disabled ||
      disabledProp;
    const name = fieldName ?? nameProp;
    const value = valueProp ?? name;
    const id = useBaseUiId();
    const ownsControlId = groupContext?.registerControlId !== registerControlId;
    const controlId = useLabelableId({
      id: idProp || undefined,
      enabled: ownsControlId,
    });
    const rootId = nativeButton ? controlId : id;
    let groupProps = {};
    if (isGroupedWithParent) {
      if (parent) {
        groupProps = parentContext.getParentProps();
      } else if (value !== undefined) {
        groupProps = parentContext.getChildProps(value);
      }
    }
    const {
      checked: groupChecked = checkedProp,
      indeterminate: groupIndeterminate = indeterminate,
      onCheckedChange: groupOnChange,
      ...otherGroupProps
    } = groupProps;
    const groupValue = groupContext?.value;
    const controlRef = React22.useRef(null);
    const setFocused = useSetFieldFocused(disabled, controlRef);
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const validation = groupContext?.validation ?? localValidation;
    const [checked, setCheckedState] = useControlled({
      controlled:
        value !== undefined && groupValue !== undefined && !parent
          ? groupValue.includes(value)
          : groupChecked,
      default: defaultChecked,
      name: "Checkbox",
      state: "checked",
    });
    const computedChecked = isGroupedWithParent
      ? Boolean(groupChecked)
      : checked;
    const computedIndeterminate = isGroupedWithParent
      ? groupIndeterminate || indeterminate
      : indeterminate;
    useRegisterFieldControl(
      controlRef,
      id,
      checked,
      undefined,
      !groupContext && !disabled,
      nameProp,
    );
    const registerChildId = parentContext?.registerChildId;
    const inputRef = React22.useRef(null);
    const registerFieldInput = validation.registerInput;
    const registeredInputValue = groupContext ? value : undefined;
    const registerInput = React22.useCallback(
      (element) =>
        registerFieldInput(element, {
          controlRef,
          value: registeredInputValue,
        }),
      [registerFieldInput, registeredInputValue],
    );
    const mergedInputRef = useMergedRefs(
      inputRefProp,
      inputRef,
      parent ? undefined : registerInput,
    );
    const ariaLabelledBy = useAriaLabelledBy(
      ariaLabelledByProp,
      labelId,
      inputRef,
      !nativeButton,
      controlId,
      elementProps["aria-label"],
    );
    useIsoLayoutEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = computedIndeterminate;
      }
      if (!groupContext) {
        setFilled(checked);
      }
    }, [checked, computedIndeterminate, groupContext, setFilled]);
    useValueChanged(checked, () => {
      if (groupContext) {
        return;
      }
      clearErrors(name);
      setDirty(checked !== validityData.initialValue);
      validation.change(checked);
    });
    const inputProps = mergeProps(
      {
        checked,
        disabled,
        form,
        name: parent ? undefined : name,
        id: nativeButton ? undefined : controlId,
        required,
        ref: mergedInputRef,
        style: name ? visuallyHiddenInput : visuallyHidden,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": true,
        onChange(event) {
          if (event.nativeEvent.defaultPrevented) {
            return;
          }
          if (readOnly) {
            event.preventDefault();
            return;
          }
          const nextChecked = event.currentTarget.checked;
          const details = createChangeEventDetails(none, event.nativeEvent);
          onCheckedChange?.(nextChecked, details);
          if (details.isCanceled) {
            return;
          }
          groupOnChange?.(nextChecked, details);
          if (details.isCanceled) {
            return;
          }
          setCheckedState(nextChecked);
          if (
            value !== undefined &&
            groupContext !== undefined &&
            !parent &&
            !isGroupedWithParent
          ) {
            const nextGroupValue = nextChecked
              ? [...groupContext.value, value]
              : groupContext.value.filter((item) => item !== value);
            groupContext.setValue(nextGroupValue, details);
          }
        },
        onClick(event) {
          event.stopPropagation();
        },
        onFocus() {
          controlRef.current?.focus();
        },
      },
      valueProp !== undefined
        ? {
            value: (groupContext ? checked && valueProp : valueProp) || "",
          }
        : EMPTY_OBJECT,
      getDescriptionProps,
      (props) => validation.getValidationProps(disabled, props),
    );
    React22.useEffect(() => {
      if (!parentContext || value === undefined) {
        return;
      }
      const disabledStates = parentContext.disabledStatesRef.current;
      disabledStates.set(value, disabled);
      return () => {
        disabledStates.delete(value);
      };
    }, [parentContext, disabled, value]);
    const state = React22.useMemo(
      () => ({
        ...fieldState,
        checked: computedChecked,
        disabled,
        readOnly,
        required,
        indeterminate: computedIndeterminate,
      }),
      [
        fieldState,
        computedChecked,
        disabled,
        readOnly,
        required,
        computedIndeterminate,
      ],
    );
    const stateAttributesMapping = getCheckboxStateAttributesMapping(state);
    const element = useRenderElement("span", componentProps, {
      state,
      ref: [buttonRef, controlRef, forwardedRef],
      props: [
        {
          id: rootId,
          role: "checkbox",
          "aria-checked": computedIndeterminate ? "mixed" : computedChecked,
          "aria-readonly": readOnly || undefined,
          "aria-required": required || undefined,
          "aria-labelledby": ariaLabelledBy,
          [PARENT_CHECKBOX]: parent ? "" : undefined,
          onFocus() {
            setFocused(true);
          },
          onBlur() {
            const inputEl = inputRef.current;
            if (!inputEl) {
              return;
            }
            setTouched(true);
            setFocused(false);
            if (validationMode === "onBlur") {
              validation.commit(groupContext ? groupValue : inputEl.checked);
            }
          },
          onKeyDown(event) {
            if (event.key !== "Enter") {
              return;
            }
            event.preventBaseUIHandler();
            if (event.defaultPrevented) {
              return;
            }
            const formToSubmit = inputRef.current?.form ?? null;
            const currentTarget = event.currentTarget;
            const nativeEvent = event.nativeEvent;
            const originalPreventDefault = event.preventDefault;
            const originalNativePreventDefault = nativeEvent.preventDefault;
            let preventDefaultCalledAfterPropagation = false;
            event.preventDefault = () => {
              preventDefaultCalledAfterPropagation = true;
              originalPreventDefault.call(event);
            };
            nativeEvent.preventDefault = () => {
              preventDefaultCalledAfterPropagation = true;
              originalNativePreventDefault.call(nativeEvent);
            };
            originalNativePreventDefault.call(nativeEvent);
            getWindow(currentTarget).queueMicrotask(() => {
              event.preventDefault = originalPreventDefault;
              nativeEvent.preventDefault = originalNativePreventDefault;
              if (!preventDefaultCalledAfterPropagation) {
                getDefaultFormSubmitter(formToSubmit)?.click();
              }
            });
          },
          onClick(event) {
            if (readOnly || disabled) {
              return;
            }
            event.preventDefault();
            const input = inputRef.current;
            if (!input) {
              return;
            }
            dispatchClickWithModifiers(input, event);
          },
        },
        elementProps,
        otherGroupProps,
        getButtonProps,
        getDescriptionProps,
        (props) => validation.getValidationProps(disabled, props),
      ],
      stateAttributesMapping,
    });
    const renderedId = element.props.id;
    useIsoLayoutEffect(() => {
      if (
        !registerChildId ||
        parent ||
        value === undefined ||
        renderedId === undefined
      ) {
        return;
      }
      return registerChildId(value, renderedId);
    }, [registerChildId, parent, value, renderedId]);
    return /* @__PURE__ */ _jsxs(CheckboxRootContext.Provider, {
      value: state,
      children: [
        element,
        !checked &&
          !groupContext &&
          name &&
          !parent &&
          uncheckedValue !== undefined &&
          /* @__PURE__ */ _jsx("input", {
            type: "hidden",
            form,
            name,
            value: uncheckedValue,
            disabled,
          }),
        /* @__PURE__ */ _jsx("input", {
          ...inputProps,
          suppressHydrationWarning: true,
        }),
      ],
    });
  },
);
if (true) CheckboxRoot.displayName = "CheckboxRoot";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/indicator/CheckboxIndicator.mjs
import * as React26 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
import * as React24 from "react";
// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useOnMount.mjs
import * as React23 from "react";
// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
import * as ReactDOM from "react-dom";

("use client");
function useOnMount(fn) {
  React23.useEffect(fn, EMPTY_ARRAY);
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useAnimationFrame.mjs
("use client");
var EMPTY = null;
var LAST_RAF = globalThis.requestAnimationFrame;

class Scheduler {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange =
      LAST_RAF !== requestAnimationFrame &&
      ((LAST_RAF = requestAnimationFrame), true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index = id - this.startId;
    if (index < 0 || index >= this.callbacks.length) {
      return;
    }
    if (this.callbacks[index] === null) {
      return;
    }
    this.callbacks[index] = null;
    this.callbacksCount -= 1;
  }
}
var scheduler = new Scheduler();
class AnimationFrame {
  static create() {
    return new AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY;
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
}
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/resolveRef.mjs
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/getFiniteAnimations.mjs
function getFiniteAnimations(element, options) {
  return element.getAnimations(options).filter((animation) => {
    const timing = animation.effect?.getTiming();
    return timing?.duration !== Infinity && timing?.iterations !== Infinity;
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/TransitionStatusDataAttributes.mjs
var startingStyle = "data-starting-style";
var endingStyle = "data-ending-style";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
("use client");
var pendingCallbacks = null;
function flushBeforePaint(fn) {
  if (!pendingCallbacks) {
    const callbacks = [];
    pendingCallbacks = callbacks;
    queueMicrotask(() => {
      pendingCallbacks = null;
      ReactDOM.flushSync(() => {
        for (const callback of callbacks) {
          callback();
        }
      });
    });
  }
  pendingCallbacks.push(fn);
}
function useAnimationsFinished(
  elementOrRef,
  waitForStartingStyleRemoved = false,
  batch = false,
) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      if (!batch) {
        ReactDOM.flushSync(fnToExecute);
        return;
      }
      flushBeforePaint(() => {
        if (!signal?.aborted) {
          fnToExecute();
        }
      });
    };
    if (
      typeof resolvedElement.getAnimations !== "function" ||
      globalThis.BASE_UI_ANIMATIONS_DISABLED
    ) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(
        getFiniteAnimations(resolvedElement).map((animation) =>
          animation.finished.then(NOOP),
        ),
      ).then(
        () => {
          if (!signal?.aborted) {
            done();
          }
        },
        () => {
          if (signal?.aborted) {
            return;
          }
          const currentAnimations = getFiniteAnimations(resolvedElement);
          if (
            currentAnimations.some(
              (animation) =>
                animation.pending || animation.playState !== "finished",
            )
          ) {
            exec();
            return;
          }
          done();
        },
      );
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute],
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true,
      });
      return;
    }
    frame.request(exec);
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
("use client");
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    batch = false,
    onComplete: onCompleteParam,
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, batch);
  React24.useEffect(() => {
    if (!enabled) {
      return;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useTransitionStatus.mjs
import * as React25 from "react";

("use client");
function useTransitionStatus(
  open,
  enableIdleState = false,
  deferEndingState = false,
  animateInitialOpen = false,
) {
  const [transitionStatus, setTransitionStatus] = React25.useState(
    open && enableIdleState ? "idle" : undefined,
  );
  const [mounted, setMounted] = React25.useState(open && !animateInitialOpen);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(undefined);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState || transitionStatus === undefined) {
      return;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(undefined);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, transitionStatus]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var STARTING_HOOK = {
  [startingStyle]: "",
};
var ENDING_HOOK = {
  [endingStyle]: "",
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  },
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/checkbox/indicator/CheckboxIndicator.mjs
("use client");
var CheckboxIndicator = /* @__PURE__ */ React26.forwardRef(
  function CheckboxIndicator(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      keepMounted = false,
      ...elementProps
    } = componentProps;
    const rootState = useCheckboxRootContext();
    const rendered = rootState.checked || rootState.indeterminate;
    const { mounted, transitionStatus, setMounted } =
      useTransitionStatus(rendered);
    const indicatorRef = React26.useRef(null);
    const state = {
      ...rootState,
      transitionStatus,
    };
    useOpenChangeComplete({
      batch: true,
      enabled: !rendered,
      open: rendered,
      ref: indicatorRef,
      onComplete() {
        if (!rendered) {
          setMounted(false);
        }
      },
    });
    const baseStateAttributesMapping =
      getCheckboxStateAttributesMapping(rootState);
    const stateAttributesMapping = {
      ...baseStateAttributesMapping,
      ...transitionStatusMapping,
    };
    const shouldRender = keepMounted || mounted;
    const element = useRenderElement("span", componentProps, {
      ref: [forwardedRef, indicatorRef],
      state,
      stateAttributesMapping,
      props: elementProps,
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  },
);
if (true) CheckboxIndicator.displayName = "CheckboxIndicator";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio/root/RadioRoot.mjs
import * as React32 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio/root/RadioRootDataAttributes.mjs
var checked2 = "data-checked";
var unchecked2 = "data-unchecked";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio/utils/stateAttributesMapping.mjs
var stateAttributesMapping = {
  checked(value) {
    if (value) {
      return {
        [checked2]: "",
      };
    }
    return {
      [unchecked2]: "",
    };
  },
  ...transitionStatusMapping,
  ...fieldValidityMapping,
};
// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/constants.mjs
var ACTIVE_COMPOSITE_ITEM = "data-composite-item-active";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
import * as React29 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
import * as React28 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
import * as React27 from "react";

("use client");
var CompositeListContext = /* @__PURE__ */ React27.createContext({
  register: () => {},
  unregister: () => {},
  subscribeMapChange: () => () => {},
  nextIndexRef: {
    current: 0,
  },
});
if (true) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
  return React27.useContext(CompositeListContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
("use client");
function useCompositeListItem(params = {}) {
  const { guess, label, metadata, textRef, index: externalIndex } = params;
  const { register, unregister, subscribeMapChange, nextIndexRef } =
    useCompositeListContext();
  const indexRef = React28.useRef(-1);
  const [internalIndex, setInternalIndex] = React28.useState(
    externalIndex == null && guess
      ? () => {
          if (indexRef.current === -1) {
            const newIndex = nextIndexRef.current;
            nextIndexRef.current += 1;
            indexRef.current = newIndex;
          }
          return indexRef.current;
        }
      : -1,
  );
  const index = externalIndex ?? internalIndex;
  const componentRef = React28.useRef(null);
  const ref = React28.useCallback(
    (node) => {
      const previousNode = componentRef.current;
      if (previousNode) {
        unregister(previousNode);
      }
      componentRef.current = node;
      if (node) {
        register(node, {
          metadata: metadata ?? null,
          index: externalIndex ?? null,
          label,
          textRef,
        });
      }
    },
    [externalIndex, register, unregister, metadata, label, textRef],
  );
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return;
    }
    return subscribeMapChange((map) => {
      const i = componentRef.current
        ? map.get(componentRef.current)?.index
        : null;
      if (i != null) {
        setInternalIndex(i);
      }
    });
  }, [externalIndex, subscribeMapChange]);
  return {
    ref,
    index,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
("use client");
function useCompositeItem(params = {}) {
  const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } =
    useCompositeRootContext();
  const { ref, index } = useCompositeListItem(params);
  const isHighlighted = highlightedIndex === index;
  const itemRef = React29.useRef(null);
  const mergedRef = useMergedRefs(ref, itemRef);
  const compositeProps = {
    tabIndex: isHighlighted ? 0 : -1,
    onFocus() {
      onHighlightedIndexChange(index);
    },
    onMouseMove() {
      const item = itemRef.current;
      if (!highlightItemOnHover || !item) {
        return;
      }
      const disabled =
        item.hasAttribute("disabled") || item.ariaDisabled === "true";
      if (!isHighlighted && !disabled) {
        item.focus();
      }
    },
  };
  return {
    compositeProps,
    compositeRef: mergedRef,
    index,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
("use client");
function CompositeItem(componentProps) {
  const {
    render,
    className,
    style,
    state = EMPTY_OBJECT,
    props = EMPTY_ARRAY,
    refs = EMPTY_ARRAY,
    metadata,
    stateAttributesMapping,
    tag = "div",
    ...elementProps
  } = componentProps;
  const { compositeProps, compositeRef } = useCompositeItem({
    metadata,
  });
  return useRenderElement(tag, componentProps, {
    state,
    ref: [compositeRef, ...refs],
    props: [compositeProps, ...props, elementProps],
    stateAttributesMapping,
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio-group/RadioGroupContext.mjs
import * as React30 from "react";

("use client");
var RadioGroupContext = /* @__PURE__ */ React30.createContext(undefined);
if (true) RadioGroupContext.displayName = "RadioGroupContext";
function useRadioGroupContext() {
  return React30.useContext(RadioGroupContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/serializeValue.mjs
function serializeValue(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio/root/RadioRootContext.mjs
import * as React31 from "react";

("use client");
var RadioRootContext = /* @__PURE__ */ React31.createContext(undefined);
if (true) RadioRootContext.displayName = "RadioRootContext";
function useRadioRootContext() {
  const value = React31.useContext(RadioRootContext);
  if (value === undefined) {
    throw new Error(
      "Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>.",
    );
  }
  return value;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio/root/RadioRoot.mjs
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";

("use client");
var RadioRoot = /* @__PURE__ */ React32.forwardRef(
  function RadioRoot(componentProps, forwardedRef) {
    const {
      render,
      className,
      disabled: disabledProp = false,
      readOnly: readOnlyProp = false,
      required: requiredProp = false,
      "aria-labelledby": ariaLabelledByProp,
      value,
      inputRef: inputRefProp,
      nativeButton = false,
      id: idProp,
      style,
      ...elementProps
    } = componentProps;
    const groupContext = useRadioGroupContext();
    const {
      disabled: disabledGroup,
      readOnly: readOnlyGroup,
      required: requiredGroup,
      form: formGroup,
      checkedValue,
      touched = false,
      validation,
      name,
      setCheckedValue = NOOP,
      setTouched = NOOP,
      registerInputRef = NOOP,
    } = groupContext ?? {};
    const {
      setTouched: setFieldTouched,
      setFilled,
      state: fieldState,
      disabled: fieldDisabled,
    } = useFieldRootContext();
    const fieldItemContext = useFieldItemContext();
    const { labelId, getDescriptionProps } = useLabelableContext();
    const disabled =
      fieldDisabled ||
      fieldItemContext.disabled ||
      disabledGroup ||
      disabledProp;
    const readOnly = readOnlyGroup || readOnlyProp;
    const required = requiredGroup || requiredProp;
    const form = formGroup;
    const checked = groupContext ? checkedValue === value : value === "";
    const radioRef = React32.useRef(null);
    const setFieldFocused = useSetFieldFocused(disabled, radioRef);
    const inputRef = React32.useRef(null);
    const registerFieldInput = validation?.registerInput;
    const registerInput = React32.useCallback(
      (element) =>
        registerFieldInput?.(element, {
          controlRef: radioRef,
          value: undefined,
        }),
      [registerFieldInput],
    );
    const mergedInputRef = useMergedRefs(
      inputRefProp,
      inputRef,
      registerInputRef,
      registerInput,
    );
    useIsoLayoutEffect(() => {
      if (inputRef.current?.checked) {
        setFilled(true);
      }
    }, [setFilled]);
    useIsoLayoutEffect(() => {
      if (!inputRef.current) {
        return;
      }
      if (disabled && checked) {
        registerInputRef(null);
        return;
      }
      registerInputRef(inputRef.current);
    }, [checked, disabled, registerInputRef]);
    const id = useBaseUiId();
    const inputId = useLabelableId({
      id: idProp,
    });
    const hiddenInputId = nativeButton ? undefined : inputId;
    const ariaLabelledBy = useAriaLabelledBy(
      ariaLabelledByProp,
      labelId,
      inputRef,
      !nativeButton,
      hiddenInputId,
      elementProps["aria-label"],
    );
    const rootProps = {
      role: "radio",
      "aria-checked": checked,
      "aria-labelledby": ariaLabelledBy,
      [ACTIVE_COMPOSITE_ITEM]: checked ? "" : undefined,
      id: nativeButton ? inputId : id,
      onKeyDown(event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      },
      onClick(event) {
        if (event.defaultPrevented || disabled || readOnly) {
          return;
        }
        event.preventDefault();
        const input = inputRef.current;
        if (!input) {
          return;
        }
        dispatchClickWithModifiers(input, event);
      },
      onFocus(event) {
        setFieldFocused(true);
        if (event.defaultPrevented || disabled || readOnly || !touched) {
          return;
        }
        inputRef.current?.click();
        setTouched(false);
      },
      onBlur() {
        if (!groupContext) {
          setFieldFocused(false);
        }
      },
    };
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
      composite: false,
    });
    const inputProps = {
      type: "radio",
      ref: mergedInputRef,
      form,
      id: hiddenInputId,
      name,
      tabIndex: -1,
      style: name ? visuallyHiddenInput : visuallyHidden,
      "aria-hidden": true,
      ...(value !== undefined
        ? {
            value: serializeValue(value),
          }
        : EMPTY_OBJECT),
      disabled,
      checked,
      required,
      readOnly,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        if (disabled || readOnly || value === undefined) {
          return;
        }
        const details = createChangeEventDetails(none, event.nativeEvent);
        setCheckedValue(value, details);
        if (details.isCanceled) {
          return;
        }
        setFieldTouched(true);
      },
      onClick(event) {
        event.stopPropagation();
      },
      onFocus() {
        radioRef.current?.focus();
      },
    };
    const state = React32.useMemo(
      () => ({
        ...fieldState,
        required,
        disabled,
        readOnly,
        checked,
      }),
      [fieldState, disabled, readOnly, checked, required],
    );
    const contextValue = state;
    const isRadioGroup = groupContext !== undefined;
    const refs = [forwardedRef, radioRef, buttonRef];
    const props = [
      rootProps,
      elementProps,
      getButtonProps,
      getDescriptionProps,
      validation
        ? (validationProps) =>
            validation.getValidationProps(disabled, validationProps)
        : EMPTY_OBJECT,
    ];
    const element = useRenderElement("span", componentProps, {
      enabled: !isRadioGroup,
      state,
      ref: refs,
      props,
      stateAttributesMapping,
    });
    return /* @__PURE__ */ _jsxs2(RadioRootContext.Provider, {
      value: contextValue,
      children: [
        isRadioGroup
          ? /* @__PURE__ */ _jsx2(CompositeItem, {
              tag: "span",
              render,
              className,
              style,
              state,
              refs,
              props,
              stateAttributesMapping,
            })
          : element,
        /* @__PURE__ */ _jsx2("input", {
          ...inputProps,
          suppressHydrationWarning: true,
        }),
      ],
    });
  },
);
if (true) RadioRoot.displayName = "RadioRoot";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio/indicator/RadioIndicator.mjs
import * as React33 from "react";

("use client");
var RadioIndicator = /* @__PURE__ */ React33.forwardRef(
  function RadioIndicator(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      keepMounted = false,
      ...elementProps
    } = componentProps;
    const rootState = useRadioRootContext();
    const rendered = rootState.checked;
    const { mounted, transitionStatus, setMounted } =
      useTransitionStatus(rendered);
    const state = {
      ...rootState,
      transitionStatus,
    };
    const indicatorRef = React33.useRef(null);
    const shouldRender = keepMounted || mounted;
    const element = useRenderElement("span", componentProps, {
      ref: [forwardedRef, indicatorRef],
      state,
      props: elementProps,
      stateAttributesMapping,
    });
    useOpenChangeComplete({
      batch: true,
      enabled: !rendered,
      open: rendered,
      ref: indicatorRef,
      onComplete() {
        if (!rendered) {
          setMounted(false);
        }
      },
    });
    if (!shouldRender) {
      return null;
    }
    return element;
  },
);
if (true) RadioIndicator.displayName = "RadioIndicator";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio-group/RadioGroup.mjs
import * as React40 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/platform/os.mjs
var exports_os = {};
__export(exports_os, {
  android: () => android,
  apple: () => apple,
  ios: () => ios,
  linux: () => linux,
  mac: () => mac,
  windows: () => windows,
});

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/platform/shared.mjs
function readRawData() {
  if (typeof navigator === "undefined") {
    return {
      userAgent: "",
      platform: "",
      maxTouchPoints: 0,
    };
  }
  if (true) {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return {
        userAgent: uaData.brands
          .map(({ brand, version }) => `${brand}/${version}`)
          .join(" "),
        platform: uaData.platform ?? navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? 0,
      };
    }
  }
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0,
  };
}
var { userAgent, platform, maxTouchPoints } = readRawData();
var lowerUserAgent = userAgent.toLowerCase();
var lowerPlatform = platform.toLowerCase();

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/platform/os.mjs
var ios =
  /^i(os$|p)/.test(lowerPlatform) ||
  (lowerPlatform === "macintel" && maxTouchPoints > 1);
var ANDROID_STRING = "android";
var android =
  lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
var mac = !ios && lowerPlatform.startsWith("mac");
var windows = lowerPlatform.startsWith("win");
var linux = !android && /^(linux|chrome os)/.test(lowerPlatform);
var apple = mac || ios;
// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/platform/engine.mjs
var exports_engine = {};
__export(exports_engine, {
  blink: () => blink,
  gecko: () => gecko,
  webkit: () => webkit,
});
var webkit =
  typeof CSS !== "undefined" &&
  !!CSS.supports?.("-webkit-backdrop-filter:none");
var gecko = !webkit && lowerUserAgent.includes("firefox");
var blink = !webkit && lowerUserAgent.includes("chrom");
// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/platform/screen-reader.mjs
var exports_screen_reader = {};
__export(exports_screen_reader, {
  voiceOver: () => voiceOver,
});
var voiceOver = apple;
// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/platform/env.mjs
var exports_env = {};
__export(exports_env, {
  jsdom: () => jsdom,
});
var jsdom = /jsdom|happydom/.test(lowerUserAgent);
// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/shadowDom.mjs
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function closest(node, selector) {
  let current = node;
  while (current) {
    if (isElement(current) && current.matches(selector)) {
      return current;
    }
    current =
      current.assignedSlot ??
      current.parentNode ??
      (isShadowRoot(current) ? current.host : null);
  }
  return null;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0] ?? event.target;
  }
  return event.target;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var TYPEABLE_SELECTOR =
  "input:not([type='hidden']):not([disabled])," +
  "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/CommonPopupDataAttributes.mjs
var open = "data-open";
var closed = "data-closed";
var startingStyle2 = startingStyle;
var endingStyle2 = endingStyle;
var anchorHidden = "data-anchor-hidden";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/CommonTriggerDataAttributes.mjs
var popupOpen = "data-popup-open";
var pressed = "data-pressed";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popupStateMapping.mjs
var TRIGGER_HOOK = {
  [popupOpen]: "",
};
var PRESSABLE_TRIGGER_HOOK = {
  [popupOpen]: "",
  [pressed]: "",
};
var POPUP_OPEN_HOOK = {
  [open]: "",
};
var POPUP_CLOSED_HOOK = {
  [closed]: "",
};
var ANCHOR_HIDDEN_HOOK = {
  [anchorHidden]: "",
};
var triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return TRIGGER_HOOK;
    }
    return null;
  },
};
var pressableTriggerOpenStateMapping = {
  open(value) {
    if (value) {
      return PRESSABLE_TRIGGER_HOOK;
    }
    return null;
  },
};
var popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  },
};
var popupTransitionStateMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping,
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/trigger/TooltipTriggerDataAttributes.mjs
var popupOpen2 = popupOpen;
var triggerDisabled = "data-trigger-disabled";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function isTargetInsideEnabledTrigger(target, triggerElements) {
  if (!isElement(target)) {
    return false;
  }
  const targetElement = target;
  if (triggerElements.hasElement(targetElement)) {
    return !targetElement.hasAttribute(triggerDisabled);
  }
  for (const [, trigger] of triggerElements.entries()) {
    if (contains(trigger, targetElement)) {
      return !trigger.hasAttribute(triggerDisabled);
    }
  }
  return false;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isInteractiveElement(element) {
  return (
    closest(
      element,
      `button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`,
    ) != null
  );
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return (
    element.getAttribute("role") === "combobox" && isTypeableElement(element)
  );
}
function matchesFocusVisible(element) {
  if (!element || exports_env.jsdom) {
    return true;
  }
  try {
    return element.matches(":focus-visible");
  } catch (_e) {
    return true;
  }
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE)
    ? floatingElement
    : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) ||
        floatingElement;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => [
    ...(!onlyOpenChildren || child.context?.open ? [child] : []),
    ...getNodeChildren(nodes, child.id, onlyOpenChildren),
  ]);
}
function getNodeAncestors(nodes, id) {
  let allAncestors = [];
  let currentParentId = nodes.find((node) => node.id === id)?.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode?.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isVirtualClick(event) {
  if (event.pointerType === "" && event.isTrusted) {
    return true;
  }
  if (exports_os.android && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (exports_env.jsdom) {
    return false;
  }
  return (
    (!exports_os.android && event.width === 0 && event.height === 0) ||
    (event.type === "pointerdown" &&
      event.width === 1 &&
      event.height === 1 &&
      event.pressure === 0 &&
      event.detail === 0 &&
      event.pointerType === "mouse" &&
      (exports_os.android || event.buttons === 0)) ||
    (event.width < 1 &&
      event.height < 1 &&
      event.pressure === 0 &&
      event.detail === 0 &&
      event.pointerType === "touch")
  );
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", undefined);
  }
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return (
    type === "click" ||
    type === "mousedown" ||
    type === "keydown" ||
    type === "keyup"
  );
}

// ../../node_modules/.bun/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v,
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom",
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === undefined) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide =
    alignmentAxis === "x"
      ? alignment === (rtl ? "end" : "start")
        ? "right"
        : "left"
      : alignment === "start"
        ? "bottom"
        : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [
    getOppositeAlignmentPlacement(placement),
    oppositePlacement,
    getOppositeAlignmentPlacement(oppositePlacement),
  ];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start")
    ? placement.replace("start", "end")
    : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0,
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number"
    ? expandPaddingObject(padding)
    : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding,
      };
}
function rectToClientRect(rect) {
  const { x, y, width, height } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
function isIndexOutOfListBounds(list, index) {
  return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    disabledIndices,
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef.current, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices,
  });
}
function getNextListIndex(list, currentIndex, options) {
  const {
    decrement,
    loopFocus,
    allowEscape,
    disabledIndices,
    minIndex,
    maxIndex,
  } = options;
  const step = () =>
    findNonDisabledListIndex(list, {
      startingIndex: currentIndex,
      decrement,
      disabledIndices,
    });
  let index;
  let wrapped = false;
  if (!loopFocus) {
    index = decrement ? Math.max(minIndex, step()) : Math.min(maxIndex, step());
  } else if (decrement ? currentIndex <= minIndex : currentIndex >= maxIndex) {
    const outside = decrement ? -1 : list.length;
    if (allowEscape && currentIndex !== outside) {
      index = -1;
    } else {
      index = decrement ? maxIndex : minIndex;
      wrapped = true;
    }
  } else {
    index = step();
  }
  return {
    index: isIndexOutOfListBounds(list, index) ? -1 : index,
    wrapped,
  };
}
function findNonDisabledListIndex(
  list,
  { startingIndex = -1, decrement = false, disabledIndices, amount = 1 } = {},
) {
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (
    index >= 0 &&
    index <= list.length - 1 &&
    isListIndexDisabled(list, index, disabledIndices)
  );
  return index;
}
function isListIndexDisabled(list, index, disabledIndices) {
  const isExplicitlyDisabled =
    typeof disabledIndices === "function"
      ? disabledIndices(index)
      : (disabledIndices?.includes(index) ?? false);
  if (isExplicitlyDisabled) {
    return true;
  }
  const element = list[index];
  if (!element) {
    return false;
  }
  if (!isElementVisible(element)) {
    return true;
  }
  if (element.matches(":disabled")) {
    return true;
  }
  return (
    !disabledIndices &&
    (element.hasAttribute("disabled") ||
      element.getAttribute("aria-disabled") === "true")
  );
}
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(
  element,
  styles = element ? getComputedStyle2(element) : null,
) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var CANDIDATE_SELECTOR =
  'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return (
    element != null &&
    element.matches(CANDIDATE_SELECTOR) &&
    (nodeName !== "summary" ||
      (element.parentElement != null &&
        getNodeName(element.parentElement) === "details" &&
        getDetailsSummary(element.parentElement) === element)) &&
    (nodeName !== "details" || getDetailsSummary(element) == null) &&
    (nodeName !== "input" || element.type !== "hidden")
  );
}
function isFocusableElement(element) {
  if (
    !isFocusableCandidate(element) ||
    !element.isConnected ||
    element.matches(":disabled")
  ) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (
      (isAncestor &&
        getNodeName(current) === "details" &&
        !current.open &&
        !isWithinOpenDetailsSummary(element, current)) ||
      current.hasAttribute("hidden") ||
      (!isSlot && !isVisibleInTabbableTree(current, isAncestor))
    ) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle2(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (
      nodeName === "details" ||
      nodeName === "audio" ||
      nodeName === "video" ||
      (isHTMLElement(element) && element.isContentEditable)
    ) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return (
      radio?.name === input.name && radio.form === input.form && radio.checked
    );
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return (
    candidates.find((candidate) => {
      const radio = getNamedRadioInput(candidate);
      return radio?.name === input.name && radio.form === input.form;
    }) === input
  );
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true,
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter(
    (element) =>
      getTabIndex(element) >= 0 && isTabbableRadio(element, candidates),
  );
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return;
  }
  const active = activeElement(ownerDocument(container));
  const index = list.indexOf(active);
  const nextIndex = index === -1 ? (dir === 1 ? 0 : len - 1) : index + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return (
    getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement
  );
}
function getPreviousTabbable(referenceElement) {
  return (
    getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement
  );
}
function getTabbableNearElement(referenceElement, direction, exclude) {
  if (!referenceElement) {
    return null;
  }
  const list = [];
  appendCandidates(ownerDocument(referenceElement).body, list);
  const index = list.indexOf(referenceElement);
  if (index === -1) {
    return null;
  }
  const candidates = list.filter(isFocusableElement);
  for (let offset = 1; offset < list.length; offset += 1) {
    const element =
      list[(index + direction * offset + list.length) % list.length];
    if (
      !contains(exclude, element) &&
      isTabbable(element) &&
      isTabbableRadio(element, candidates)
    ) {
      return element;
    }
  }
  return list[index];
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/composite.mjs
var ARROW_UP2 = "ArrowUp";
var ARROW_DOWN2 = "ArrowDown";
var ARROW_LEFT2 = "ArrowLeft";
var ARROW_RIGHT2 = "ArrowRight";
var HOME = "Home";
var END = "End";
var COMPOSITE_KEYS = new Set([
  ARROW_UP2,
  ARROW_DOWN2,
  ARROW_LEFT2,
  ARROW_RIGHT2,
  HOME,
  END,
]);
var SHIFT = "Shift";
var MODIFIER_KEYS = [SHIFT, "Control", "Alt", "Meta"];
function isInputElement(element) {
  return isHTMLElement(element) && element.tagName === "INPUT";
}
function isNativeInput(element) {
  if (isInputElement(element) && element.selectionStart != null) {
    return true;
  }
  if (isHTMLElement(element) && element.tagName === "TEXTAREA") {
    return true;
  }
  return false;
}
function scrollIntoViewIfNeeded(
  scrollContainer,
  element,
  direction,
  orientation,
) {
  if (!scrollContainer || !element || !element.scrollTo) {
    return;
  }
  let targetX = scrollContainer.scrollLeft;
  let targetY = scrollContainer.scrollTop;
  const isOverflowingX =
    scrollContainer.clientWidth < scrollContainer.scrollWidth;
  const isOverflowingY =
    scrollContainer.clientHeight < scrollContainer.scrollHeight;
  if (isOverflowingX && orientation !== "vertical") {
    const elementOffsetLeft = getOffset(scrollContainer, element, "left");
    const containerStyles = getStyles(scrollContainer);
    const elementStyles = getStyles(element);
    if (direction === "ltr") {
      if (
        elementOffsetLeft +
          element.offsetWidth +
          elementStyles.scrollMarginRight >
        scrollContainer.scrollLeft +
          scrollContainer.clientWidth -
          containerStyles.scrollPaddingRight
      ) {
        targetX =
          elementOffsetLeft +
          element.offsetWidth +
          elementStyles.scrollMarginRight -
          scrollContainer.clientWidth +
          containerStyles.scrollPaddingRight;
      } else if (
        elementOffsetLeft - elementStyles.scrollMarginLeft <
        scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft
      ) {
        targetX =
          elementOffsetLeft -
          elementStyles.scrollMarginLeft -
          containerStyles.scrollPaddingLeft;
      }
    }
    if (direction === "rtl") {
      if (
        elementOffsetLeft - elementStyles.scrollMarginLeft <
        scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft
      ) {
        targetX =
          elementOffsetLeft -
          elementStyles.scrollMarginLeft -
          containerStyles.scrollPaddingLeft;
      } else if (
        elementOffsetLeft +
          element.offsetWidth +
          elementStyles.scrollMarginRight >
        scrollContainer.scrollLeft +
          scrollContainer.clientWidth -
          containerStyles.scrollPaddingRight
      ) {
        targetX =
          elementOffsetLeft +
          element.offsetWidth +
          elementStyles.scrollMarginRight -
          scrollContainer.clientWidth +
          containerStyles.scrollPaddingRight;
      }
    }
  }
  if (isOverflowingY && orientation !== "horizontal") {
    const elementOffsetTop = getOffset(scrollContainer, element, "top");
    const containerStyles = getStyles(scrollContainer);
    const elementStyles = getStyles(element);
    if (
      elementOffsetTop - elementStyles.scrollMarginTop <
      scrollContainer.scrollTop + containerStyles.scrollPaddingTop
    ) {
      targetY =
        elementOffsetTop -
        elementStyles.scrollMarginTop -
        containerStyles.scrollPaddingTop;
    } else if (
      elementOffsetTop +
        element.offsetHeight +
        elementStyles.scrollMarginBottom >
      scrollContainer.scrollTop +
        scrollContainer.clientHeight -
        containerStyles.scrollPaddingBottom
    ) {
      targetY =
        elementOffsetTop +
        element.offsetHeight +
        elementStyles.scrollMarginBottom -
        scrollContainer.clientHeight +
        containerStyles.scrollPaddingBottom;
    }
  }
  scrollContainer.scrollTo({
    left: targetX,
    top: targetY,
    behavior: "auto",
  });
}
function getOffset(ancestor, element, side) {
  const propName = side === "left" ? "offsetLeft" : "offsetTop";
  let result = 0;
  while (element.offsetParent) {
    result += element[propName];
    if (element.offsetParent === ancestor) {
      break;
    }
    element = element.offsetParent;
  }
  return result;
}
function getStyles(element) {
  const styles = getComputedStyle(element);
  return {
    scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
import * as React37 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
import * as React34 from "react";
import { jsx as _jsx3 } from "react/jsx-runtime";

("use client");
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp,
  } = props;
  const onMapChange = useStableCallback(onMapChangeProp);
  const [, setMapTick] = React34.useState(0);
  const listeners = useRefWithInit(createListeners).current;
  const map = useRefWithInit(createMap).current;
  const nextIndexRef = React34.useRef(0);
  const isDirtyRef = React34.useRef(true);
  const itemsRef = React34.useRef(null);
  const mutationObserverRef = React34.useRef(null);
  const scheduleMapUpdate = useStableCallback(() => {
    if (isDirtyRef.current) {
      return;
    }
    isDirtyRef.current = true;
    setMapTick((tick) => tick + 1);
  });
  const register = useStableCallback((node, registration) => {
    map.set(node, registration);
    scheduleMapUpdate();
  });
  const unregister = useStableCallback((node) => {
    map.delete(node);
    scheduleMapUpdate();
  });
  const syncRefs = useStableCallback((items) => {
    const nextMap = new Map();
    elementsRef.current.length = 0;
    if (labelsRef) {
      labelsRef.current.length = 0;
    }
    items.forEach((item) => {
      nextMap.set(item.element, {
        ...(item.registration.metadata ?? {}),
        index: item.index,
      });
      elementsRef.current[item.index] = item.element;
      if (labelsRef) {
        labelsRef.current[item.index] =
          item.registration.label !== undefined
            ? item.registration.label
            : (item.registration.textRef?.current?.textContent ??
              item.element.textContent);
      }
    });
    nextIndexRef.current = elementsRef.current.length;
    return nextMap;
  });
  function observe(sortedNodes) {
    mutationObserverRef.current?.disconnect();
    mutationObserverRef.current = null;
    if (typeof MutationObserver !== "function" || sortedNodes.length < 2) {
      return;
    }
    const mutationObserver = new MutationObserver((entries) => {
      if (!hasMovedNode(entries)) {
        return;
      }
      let previousConnectedNode = null;
      for (const node of sortedNodes) {
        if (!node.isConnected) {
          continue;
        }
        if (
          previousConnectedNode &&
          sortByDocumentPosition(previousConnectedNode, node) > 0
        ) {
          mutationObserver.disconnect();
          scheduleMapUpdate();
          return;
        }
        previousConnectedNode = node;
      }
    });
    mutationObserverRef.current = mutationObserver;
    const roots = new Set();
    for (let i = 1; i < sortedNodes.length; i += 1) {
      const root = getCommonAncestor(sortedNodes[i - 1], sortedNodes[i]);
      if (root) {
        roots.add(root);
      }
    }
    roots.forEach((root) =>
      mutationObserver.observe(root, {
        childList: true,
      }),
    );
  }
  const flush = useStableCallback(() => {
    const [items, automaticNodes] = getCompositeListSnapshot(map);
    const nextMap = syncRefs(items);
    const previousItems = itemsRef.current;
    const changed =
      !previousItems ||
      previousItems.length !== items.length ||
      items.some((item, index) => {
        const previousItem = previousItems[index];
        return (
          item.index !== previousItem.index ||
          item.element !== previousItem.element ||
          item.registration.index !== previousItem.registration.index ||
          item.registration.metadata !== previousItem.registration.metadata
        );
      });
    observe(automaticNodes);
    itemsRef.current = items;
    isDirtyRef.current = false;
    if (!changed) {
      return;
    }
    listeners.forEach((listener) => listener(nextMap));
    onMapChange(nextMap);
  });
  useIsoLayoutEffect(() => {
    if (!isDirtyRef.current && itemsRef.current) {
      syncRefs(itemsRef.current);
    }
    return () => {
      elementsRef.current = [];
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [elementsRef, labelsRef, syncRefs]);
  useIsoLayoutEffect(() => {
    if (isDirtyRef.current) {
      flush();
    }
  });
  useIsoLayoutEffect(() => {
    return () => {
      mutationObserverRef.current?.disconnect();
      isDirtyRef.current = true;
    };
  }, []);
  const subscribeMapChange = useStableCallback((fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  const contextValue = React34.useMemo(
    () => ({
      register,
      unregister,
      subscribeMapChange,
      nextIndexRef,
    }),
    [register, unregister, subscribeMapChange, nextIndexRef],
  );
  return /* @__PURE__ */ _jsx3(CompositeListContext.Provider, {
    value: contextValue,
    children,
  });
}
function createMap() {
  return new Map();
}
function createListeners() {
  return new Set();
}
function getCompositeListSnapshot(map) {
  const reservedIndices = new Set();
  const items = [];
  const automaticItems = [];
  map.forEach((registration, node) => {
    if (!node.isConnected) {
      return;
    }
    const index = registration.index;
    const item = {
      index: index ?? -1,
      element: node,
      registration,
    };
    if (index === null) {
      automaticItems.push(item);
    } else if (index >= 0) {
      reservedIndices.add(index);
      items.push(item);
    }
  });
  let nextAutomaticIndex = 0;
  automaticItems.sort((a, b) => sortByDocumentPosition(a.element, b.element));
  automaticItems.forEach((item) => {
    while (reservedIndices.has(nextAutomaticIndex)) {
      nextAutomaticIndex += 1;
    }
    item.index = nextAutomaticIndex;
    items.push(item);
    nextAutomaticIndex += 1;
  });
  if (reservedIndices.size > 0) {
    items.sort((a, b) => a.index - b.index);
  }
  return [items, automaticItems.map((item) => item.element)];
}
function getCommonAncestor(firstNode, lastNode) {
  let ancestor = firstNode.parentElement;
  while (ancestor && !ancestor.contains(lastNode)) {
    ancestor = ancestor.parentElement;
  }
  return ancestor;
}
function hasMovedNode(entries) {
  for (const entry of entries) {
    for (let i = 0; i < entry.removedNodes.length; i += 1) {
      if (entry.removedNodes[i].isConnected) {
        return true;
      }
    }
  }
  return false;
}
function sortByDocumentPosition(a, b) {
  if (a.nextElementSibling === b) {
    return -1;
  }
  if (b.nextElementSibling === a) {
    return 1;
  }
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/root/useCompositeRoot.mjs
import * as React35 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/isElementDisabled.mjs
function isElementDisabled(element) {
  return (
    element == null ||
    element.hasAttribute("disabled") ||
    element.getAttribute("aria-disabled") === "true"
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/root/useCompositeRoot.mjs
("use client");
function useCompositeRoot(params) {
  const {
    loopFocus = true,
    orientation = "both",
    grid,
    onLoop,
    direction,
    highlightedIndex: externalHighlightedIndex,
    onHighlightedIndexChange: externalSetHighlightedIndex,
    rootRef: externalRef,
    enableHomeAndEndKeys = false,
    stopEventPropagation,
    disabledIndices,
    modifierKeys = EMPTY_ARRAY,
  } = params;
  const [internalHighlightedIndex, internalSetHighlightedIndex] =
    React35.useState(0);
  const isGrid = grid != null;
  const rootRef = React35.useRef(null);
  const mergedRef = useMergedRefs(rootRef, externalRef);
  const elementsRef = React35.useRef([]);
  const hasSetDefaultIndexRef = React35.useRef(false);
  const highlightedElementRef = React35.useRef(null);
  const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
  const onHighlightedIndexChange = useStableCallback(
    (index, shouldScrollIntoView = false) => {
      highlightedElementRef.current = elementsRef.current[index] ?? null;
      (externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
      if (shouldScrollIntoView) {
        const newActiveItem = elementsRef.current[index];
        scrollIntoViewIfNeeded(
          rootRef.current,
          newActiveItem,
          direction,
          orientation,
        );
      }
    },
  );
  const onMapChange = useStableCallback((map) => {
    if (map.size === 0) {
      return;
    }
    if (hasSetDefaultIndexRef.current) {
      const elements = elementsRef.current;
      const nextIndex = elements.indexOf(highlightedElementRef.current);
      if (nextIndex === -1) {
        const replacement = elements[highlightedIndex];
        if (
          !replacement ||
          isListIndexDisabled(elements, highlightedIndex, disabledIndices)
        ) {
          onHighlightedIndexChange(getFallbackIndex(elements, disabledIndices));
        } else {
          highlightedElementRef.current = replacement;
        }
      } else if (nextIndex !== highlightedIndex) {
        onHighlightedIndexChange(nextIndex);
      }
      return;
    }
    hasSetDefaultIndexRef.current = true;
    const sortedElements = Array.from(map.keys());
    const activeItem =
      sortedElements.find((compositeElement) =>
        compositeElement?.hasAttribute(ACTIVE_COMPOSITE_ITEM),
      ) ?? null;
    const activeIndex = activeItem ? (map.get(activeItem)?.index ?? -1) : -1;
    if (activeIndex !== -1) {
      onHighlightedIndexChange(activeIndex);
    } else if (
      isListIndexDisabled(sortedElements, highlightedIndex, disabledIndices)
    ) {
      const firstEnabledIndex = findNonDisabledListIndex(sortedElements, {
        disabledIndices,
      });
      if (!isIndexOutOfListBounds(sortedElements, firstEnabledIndex)) {
        onHighlightedIndexChange(firstEnabledIndex);
      }
    }
    scrollIntoViewIfNeeded(rootRef.current, activeItem, direction, orientation);
  });
  useIsoLayoutEffect(() => {
    if (
      disabledIndices == null ||
      externalHighlightedIndex != null ||
      !hasSetDefaultIndexRef.current
    ) {
      return;
    }
    const elements = elementsRef.current;
    if (isListIndexDisabled(elements, highlightedIndex, disabledIndices)) {
      const firstEnabledIndex = findNonDisabledListIndex(elements, {
        disabledIndices,
      });
      if (!isIndexOutOfListBounds(elements, firstEnabledIndex)) {
        onHighlightedIndexChange(firstEnabledIndex);
      }
    }
  }, [
    disabledIndices,
    externalHighlightedIndex,
    highlightedIndex,
    elementsRef,
    onHighlightedIndexChange,
  ]);
  const wrappedOnLoop = useStableCallback((event, prevIndex, nextIndex) => {
    if (!onLoop) {
      return nextIndex;
    }
    return onLoop(event, prevIndex, nextIndex, elementsRef);
  });
  const onKeyDown = useStableCallback((event) => {
    const isHomeOrEnd = event.key === HOME || event.key === END;
    if (
      !COMPOSITE_KEYS.has(event.key) ||
      (!enableHomeAndEndKeys && isHomeOrEnd)
    ) {
      return;
    }
    if (isModifierKeySet(event, modifierKeys)) {
      return;
    }
    const element = rootRef.current;
    if (!element) {
      return;
    }
    const isRtl = direction === "rtl";
    const horizontalForwardKey = isRtl ? ARROW_LEFT2 : ARROW_RIGHT2;
    const horizontalBackwardKey = isRtl ? ARROW_RIGHT2 : ARROW_LEFT2;
    const forwardKey =
      orientation === "vertical" ? ARROW_DOWN2 : horizontalForwardKey;
    const backwardKey =
      orientation === "vertical" ? ARROW_UP2 : horizontalBackwardKey;
    const target = getTarget(event.nativeEvent);
    if (target != null && isNativeInput(target) && !isElementDisabled(target)) {
      const selectionStart = target.selectionStart;
      const selectionEnd = target.selectionEnd;
      const textContent = target.value;
      if (
        selectionStart == null ||
        event.shiftKey ||
        selectionStart !== selectionEnd
      ) {
        return;
      }
      if (event.key !== backwardKey && selectionStart < textContent.length) {
        return;
      }
      if (event.key !== forwardKey && selectionStart > 0) {
        return;
      }
    }
    let nextIndex = highlightedIndex;
    const minIndex = getMinListIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
    if (grid != null) {
      nextIndex = grid({
        disabledIndices,
        elementsRef,
        event,
        highlightedIndex,
        loopFocus,
        maxIndex,
        minIndex,
        onLoop: wrappedOnLoop,
        orientation,
        rtl: isRtl,
      });
    }
    const isForwardKey =
      (orientation !== "vertical" && event.key === horizontalForwardKey) ||
      (orientation !== "horizontal" && event.key === ARROW_DOWN2);
    const isBackwardKey =
      (orientation !== "vertical" && event.key === horizontalBackwardKey) ||
      (orientation !== "horizontal" && event.key === ARROW_UP2);
    if (enableHomeAndEndKeys) {
      if (event.key === HOME) {
        nextIndex = minIndex;
      } else if (event.key === END) {
        nextIndex = maxIndex;
      }
    }
    if (nextIndex === highlightedIndex && (isForwardKey || isBackwardKey)) {
      if (loopFocus && nextIndex === maxIndex && isForwardKey) {
        nextIndex = minIndex;
        if (onLoop) {
          nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
        }
      } else if (loopFocus && nextIndex === minIndex && isBackwardKey) {
        nextIndex = maxIndex;
        if (onLoop) {
          nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
        }
      } else {
        nextIndex = findNonDisabledListIndex(elementsRef.current, {
          startingIndex: nextIndex,
          decrement: isBackwardKey,
          disabledIndices,
        });
      }
    }
    if (
      nextIndex !== highlightedIndex &&
      !isIndexOutOfListBounds(elementsRef.current, nextIndex)
    ) {
      if (stopEventPropagation) {
        event.stopPropagation();
      }
      if (isGrid || isHomeOrEnd || isForwardKey || isBackwardKey) {
        event.preventDefault();
      }
      onHighlightedIndexChange(nextIndex, true);
      queueMicrotask(() => {
        elementsRef.current[nextIndex]?.focus();
      });
    }
  });
  const props = {
    ref: mergedRef,
    onFocus(event) {
      const element = rootRef.current;
      const target = getTarget(event.nativeEvent);
      if (!element || target == null || !isNativeInput(target)) {
        return;
      }
      target.setSelectionRange(0, target.value.length);
    },
    onKeyDown,
  };
  return {
    props,
    highlightedIndex,
    onHighlightedIndexChange,
    elementsRef,
    onMapChange,
    relayKeyboardEvent: onKeyDown,
  };
}
function getFallbackIndex(elements, disabledIndices) {
  let fallbackIndex = -1;
  for (let index = 0; index < elements.length; index += 1) {
    const element = elements[index];
    if (!element || isListIndexDisabled(elements, index, disabledIndices)) {
      continue;
    }
    if (element.hasAttribute(ACTIVE_COMPOSITE_ITEM)) {
      return index;
    }
    if (fallbackIndex === -1) {
      fallbackIndex = index;
    }
  }
  return Math.max(fallbackIndex, 0);
}
function isModifierKeySet(event, ignoredModifierKeys) {
  for (const key of MODIFIER_KEYS) {
    if (ignoredModifierKeys.includes(key)) {
      continue;
    }
    if (event.getModifierState(key)) {
      return true;
    }
  }
  return false;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
import * as React36 from "react";

("use client");
var DirectionContext = /* @__PURE__ */ React36.createContext(undefined);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React36.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
import { jsx as _jsx4 } from "react/jsx-runtime";

("use client");
function CompositeRoot(componentProps) {
  const {
    render,
    className,
    style,
    refs = EMPTY_ARRAY,
    props = EMPTY_ARRAY,
    state = EMPTY_OBJECT,
    stateAttributesMapping,
    highlightedIndex: highlightedIndexProp,
    onHighlightedIndexChange: onHighlightedIndexChangeProp,
    orientation,
    grid,
    loopFocus,
    onLoop,
    enableHomeAndEndKeys,
    onMapChange: onMapChangeProp,
    stopEventPropagation = true,
    rootRef,
    disabledIndices,
    modifierKeys,
    highlightItemOnHover = false,
    tag = "div",
    ...elementProps
  } = componentProps;
  const direction = useDirection();
  const {
    props: defaultProps,
    highlightedIndex,
    onHighlightedIndexChange,
    elementsRef,
    onMapChange: onMapChangeUnwrapped,
    relayKeyboardEvent,
  } = useCompositeRoot({
    grid,
    loopFocus,
    onLoop,
    orientation,
    highlightedIndex: highlightedIndexProp,
    onHighlightedIndexChange: onHighlightedIndexChangeProp,
    rootRef,
    stopEventPropagation,
    enableHomeAndEndKeys,
    direction,
    disabledIndices,
    modifierKeys,
  });
  const element = useRenderElement(tag, componentProps, {
    state,
    ref: refs,
    props: [defaultProps, ...props, elementProps],
    stateAttributesMapping,
  });
  const contextValue = React37.useMemo(
    () => ({
      highlightedIndex,
      onHighlightedIndexChange,
      highlightItemOnHover,
      relayKeyboardEvent,
    }),
    [
      highlightedIndex,
      onHighlightedIndexChange,
      highlightItemOnHover,
      relayKeyboardEvent,
    ],
  );
  return /* @__PURE__ */ _jsx4(CompositeRootContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ _jsx4(CompositeList, {
      elementsRef,
      onMapChange: (newMap) => {
        onMapChangeProp?.(newMap);
        onMapChangeUnwrapped(newMap);
      },
      children: element,
    }),
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/field/root/useFieldValidation.mjs
import * as React38 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useTimeout.mjs
("use client");
var EMPTY2 = 0;

class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = EMPTY2;
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY2;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY2;
  }
  clear = () => {
    if (this.currentId !== EMPTY2) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY2;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/field/root/useFieldValidation.mjs
("use client");
var validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
function isEligibleInput(input, formElement) {
  if (input.matches(":disabled")) {
    return false;
  }
  if (!formElement || input.form === formElement) {
    return true;
  }
  return input.form === null && !input.hasAttribute("form");
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
import * as React39 from "react";

("use client");
var FieldsetRootContext = /* @__PURE__ */ React39.createContext(undefined);
if (true) FieldsetRootContext.displayName = "FieldsetRootContext";
function useFieldsetRootContext(optional = false) {
  const context = React39.useContext(FieldsetRootContext);
  if (!context && !optional) {
    throw new Error(
      "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/radio-group/RadioGroup.mjs
import { jsx as _jsx5 } from "react/jsx-runtime";

("use client");
var MODIFIER_KEYS2 = [SHIFT];
var RadioGroup = /* @__PURE__ */ React40.forwardRef(
  function RadioGroup(componentProps, forwardedRef) {
    const {
      render,
      className,
      disabled: disabledProp,
      readOnly,
      required,
      onValueChange: onValueChangeProp,
      value: externalValue,
      defaultValue,
      form,
      name: nameProp,
      inputRef: inputRefProp,
      id: idProp,
      style,
      ...elementProps
    } = componentProps;
    const {
      setTouched: setFieldTouched,
      setFocused,
      validationMode,
      name: fieldName,
      disabled: fieldDisabled,
      state: fieldState,
      validation,
      setDirty,
      setFilled,
      validityData,
    } = useFieldRootContext();
    const { labelId } = useLabelableContext();
    const { clearErrors, elementRef } = useFormContext();
    const fieldsetContext = useFieldsetRootContext(true);
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const id = useBaseUiId(idProp);
    const [checkedValue, setCheckedValueUnwrapped] = useControlled({
      controlled: externalValue,
      default: defaultValue,
      name: "RadioGroup",
      state: "value",
    });
    const [touched, setTouched] = React40.useState(false);
    const setCheckedValue = useStableCallback((value, eventDetails) => {
      onValueChangeProp?.(value, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setCheckedValueUnwrapped(value);
    });
    const getInputControl = validation.getInputControl;
    const controlRef = React40.useMemo(
      () => ({
        get current() {
          return getInputControl();
        },
      }),
      [getInputControl],
    );
    const groupInputRef = React40.useRef(null);
    const firstEnabledInputRef = React40.useRef(null);
    const mergedInputRef = useMergedRefs(groupInputRef, inputRefProp);
    const lastAppliedInputRef = React40.useRef(mergedInputRef);
    const setInputRef = useStableCallback((hiddenInput) => {
      if (
        groupInputRef.current === hiddenInput &&
        lastAppliedInputRef.current === mergedInputRef
      ) {
        return;
      }
      lastAppliedInputRef.current = mergedInputRef;
      mergedInputRef?.(hiddenInput);
    });
    useIsoLayoutEffect(() => {
      setInputRef(groupInputRef.current);
    }, [mergedInputRef, setInputRef]);
    const registerInputRef = useStableCallback((input) => {
      if (!input) {
        return;
      }
      if (!input.disabled) {
        if (!firstEnabledInputRef.current) {
          firstEnabledInputRef.current = input;
        }
        const currentInput = groupInputRef.current;
        if (input.checked || currentInput == null || currentInput.disabled) {
          setInputRef(input);
        }
      }
      return () => {
        if (firstEnabledInputRef.current === input) {
          firstEnabledInputRef.current = null;
        }
        if (groupInputRef.current === input) {
          setInputRef(null);
        }
      };
    });
    const getFormValue = useStableCallback(() => {
      const formElement = elementRef.current;
      if (!formElement) {
        return checkedValue ?? null;
      }
      for (const input of validation.registeredInputs.keys()) {
        if (input.checked && isEligibleInput(input, formElement)) {
          return checkedValue ?? null;
        }
      }
      return null;
    });
    useRegisterFieldControl(
      controlRef,
      id,
      checkedValue ?? null,
      getFormValue,
      !disabled,
      nameProp,
    );
    useValueChanged(checkedValue, () => {
      clearErrors(name);
      setDirty(checkedValue !== validityData.initialValue);
      setFilled(checkedValue != null);
      validation.change(checkedValue);
      const fallbackInput = firstEnabledInputRef.current;
      if (checkedValue == null && fallbackInput && !fallbackInput.disabled) {
        setInputRef(fallbackInput);
      }
    });
    const ariaLabelledby = labelId ?? fieldsetContext?.legendId;
    const state = {
      ...fieldState,
      disabled: disabled ?? false,
      required: required ?? false,
      readOnly: readOnly ?? false,
    };
    const contextValue = React40.useMemo(
      () => ({
        checkedValue,
        disabled,
        form,
        validation,
        name,
        readOnly,
        registerInputRef,
        required,
        setCheckedValue,
        setTouched,
        touched,
      }),
      [
        checkedValue,
        disabled,
        form,
        validation,
        name,
        readOnly,
        registerInputRef,
        required,
        setCheckedValue,
        setTouched,
        touched,
      ],
    );
    const defaultProps = {
      id: idProp,
      role: "radiogroup",
      "aria-required": required || undefined,
      "aria-disabled": disabled || undefined,
      "aria-readonly": readOnly || undefined,
      "aria-labelledby": ariaLabelledby,
      onBlur(event) {
        if (!contains(event.currentTarget, event.relatedTarget)) {
          setTouched(false);
          setFieldTouched(true);
          setFocused(false);
          if (validationMode === "onBlur") {
            validation.commit(checkedValue);
          }
        }
      },
      onKeyDownCapture(event) {
        if (event.key.startsWith("Arrow")) {
          setTouched(true);
        }
      },
    };
    return /* @__PURE__ */ _jsx5(RadioGroupContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ _jsx5(CompositeRoot, {
        render,
        className,
        style,
        state,
        props: [
          defaultProps,
          elementProps,
          (props) => validation.getValidationProps(disabled ?? false, props),
        ],
        refs: [forwardedRef],
        stateAttributesMapping: fieldValidityMapping,
        enableHomeAndEndKeys: false,
        modifierKeys: MODIFIER_KEYS2,
      }),
    });
  },
);
if (true) RadioGroup.displayName = "RadioGroup";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/switch/root/SwitchRoot.mjs
import * as React42 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/switch/root/SwitchRootContext.mjs
import * as React41 from "react";

("use client");
var SwitchRootContext = /* @__PURE__ */ React41.createContext(undefined);
if (true) SwitchRootContext.displayName = "SwitchRootContext";
function useSwitchRootContext() {
  const context = React41.useContext(SwitchRootContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/switch/root/SwitchRootDataAttributes.mjs
var checked3 = "data-checked";
var unchecked3 = "data-unchecked";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/switch/stateAttributesMapping.mjs
var stateAttributesMapping2 = {
  ...fieldValidityMapping,
  checked(value) {
    if (value) {
      return {
        [checked3]: "",
      };
    }
    return {
      [unchecked3]: "",
    };
  },
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/switch/root/SwitchRoot.mjs
import { jsx as _jsx6, jsxs as _jsxs3 } from "react/jsx-runtime";

("use client");
var SwitchRoot = /* @__PURE__ */ React42.forwardRef(
  function SwitchRoot(componentProps, forwardedRef) {
    const {
      checked: checkedProp,
      className,
      defaultChecked,
      "aria-labelledby": ariaLabelledByProp,
      form,
      id: idProp,
      inputRef: externalInputRef,
      name: nameProp,
      nativeButton = false,
      onCheckedChange,
      readOnly = false,
      required = false,
      disabled: disabledProp = false,
      render,
      uncheckedValue,
      value,
      style,
      ...elementProps
    } = componentProps;
    const { clearErrors } = useFormContext();
    const {
      state: fieldState,
      setTouched,
      setDirty,
      validityData,
      setFilled,
      validationMode,
      disabled: fieldDisabled,
      name: fieldName,
      validation,
    } = useFieldRootContext();
    const { labelId } = useLabelableContext();
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const inputRef = React42.useRef(null);
    const handleInputRef = useMergedRefs(
      inputRef,
      externalInputRef,
      validation.inputRef,
    );
    const switchRef = React42.useRef(null);
    const setFocused = useSetFieldFocused(disabled, switchRef);
    const id = useBaseUiId();
    const controlId = useLabelableId({
      id: idProp,
    });
    const hiddenInputId = nativeButton ? undefined : controlId;
    const [checked, setCheckedState] = useControlled({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: "Switch",
      state: "checked",
    });
    useRegisterFieldControl(
      switchRef,
      id,
      checked,
      undefined,
      !disabled,
      nameProp,
    );
    useIsoLayoutEffect(() => {
      setFilled(checked);
    }, [checked, setFilled]);
    useValueChanged(checked, () => {
      clearErrors(name);
      setDirty(checked !== validityData.initialValue);
      validation.change(checked);
    });
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const ariaLabelledBy = useAriaLabelledBy(
      ariaLabelledByProp,
      labelId,
      inputRef,
      !nativeButton,
      hiddenInputId,
      elementProps["aria-label"],
    );
    const rootProps = {
      id: nativeButton ? controlId : id,
      role: "switch",
      "aria-checked": checked,
      "aria-readonly": readOnly || undefined,
      "aria-required": required || undefined,
      "aria-labelledby": ariaLabelledBy,
      onFocus() {
        setFocused(true);
      },
      onBlur() {
        const element = inputRef.current;
        if (!element || disabled) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(element.checked);
        }
      },
      onClick(event) {
        if (readOnly || disabled) {
          return;
        }
        event.preventDefault();
        const input = inputRef.current;
        if (!input) {
          return;
        }
        dispatchClickWithModifiers(input, event);
      },
    };
    const inputProps = {
      ...validation.getValidationProps(disabled),
      checked,
      disabled,
      form,
      id: hiddenInputId,
      name,
      required,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": true,
      ref: handleInputRef,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        if (readOnly) {
          event.preventDefault();
          return;
        }
        const nextChecked = event.currentTarget.checked;
        const eventDetails = createChangeEventDetails(none, event.nativeEvent);
        onCheckedChange?.(nextChecked, eventDetails);
        if (eventDetails.isCanceled) {
          return;
        }
        setCheckedState(nextChecked);
      },
      onClick(event) {
        event.stopPropagation();
      },
      onFocus() {
        switchRef.current?.focus();
      },
      ...(value !== undefined
        ? {
            value,
          }
        : EMPTY_OBJECT),
    };
    const state = React42.useMemo(
      () => ({
        ...fieldState,
        checked,
        disabled,
        readOnly,
        required,
      }),
      [fieldState, checked, disabled, readOnly, required],
    );
    const element = useRenderElement("span", componentProps, {
      state,
      ref: [forwardedRef, switchRef, buttonRef],
      props: [
        rootProps,
        elementProps,
        getButtonProps,
        (props) => validation.getValidationProps(disabled, props),
      ],
      stateAttributesMapping: stateAttributesMapping2,
    });
    return /* @__PURE__ */ _jsxs3(SwitchRootContext.Provider, {
      value: state,
      children: [
        element,
        !checked &&
          name &&
          uncheckedValue !== undefined &&
          /* @__PURE__ */ _jsx6("input", {
            type: "hidden",
            form,
            name,
            value: uncheckedValue,
            disabled,
          }),
        /* @__PURE__ */ _jsx6("input", {
          ...inputProps,
          suppressHydrationWarning: true,
        }),
      ],
    });
  },
);
if (true) SwitchRoot.displayName = "SwitchRoot";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/switch/thumb/SwitchThumb.mjs
import * as React43 from "react";

("use client");
var SwitchThumb = /* @__PURE__ */ React43.forwardRef(
  function SwitchThumb(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const state = useSwitchRootContext();
    return useRenderElement("span", componentProps, {
      state,
      ref: forwardedRef,
      stateAttributesMapping: stateAttributesMapping2,
      props: elementProps,
    });
  },
);
if (true) SwitchThumb.displayName = "SwitchThumb";

// src/choice.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";

function CheckboxField({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  value,
  className,
}) {
  return /* @__PURE__ */ jsxs2("label", {
    className: cx("fox-choice", className),
    "data-disabled": disabled ? "" : undefined,
    children: [
      /* @__PURE__ */ jsx2(CheckboxRoot, {
        className: parts.checkbox,
        checked,
        defaultChecked,
        onCheckedChange: (next) => onCheckedChange?.(next),
        disabled,
        name,
        value,
        children: /* @__PURE__ */ jsx2(CheckboxIndicator, {
          className: parts.checkboxIndicator,
          children: /* @__PURE__ */ jsx2("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx2("path", {
              d: "m2.5 8.5 4 4 7-9",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.2",
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx2("span", {
        children: label,
      }),
    ],
  });
}
function SwitchField({
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  className,
}) {
  return /* @__PURE__ */ jsxs2("label", {
    className: cx("fox-choice", className),
    "data-disabled": disabled ? "" : undefined,
    children: [
      /* @__PURE__ */ jsx2(SwitchRoot, {
        className: parts.switch,
        checked,
        defaultChecked,
        onCheckedChange: (next) => onCheckedChange?.(next),
        disabled,
        name,
        children: /* @__PURE__ */ jsx2(SwitchThumb, {
          className: parts.switchThumb,
        }),
      }),
      /* @__PURE__ */ jsx2("span", {
        children: label,
      }),
    ],
  });
}
function RadioGroupField({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  className,
}) {
  return /* @__PURE__ */ jsxs2("fieldset", {
    className: cx("fox-choice-group", className),
    children: [
      /* @__PURE__ */ jsx2("legend", {
        className: "fox-label",
        children: label,
      }),
      /* @__PURE__ */ jsx2(RadioGroup, {
        value,
        defaultValue,
        onValueChange: (next) => onValueChange?.(String(next)),
        disabled,
        name,
        children: options.map((option) =>
          /* @__PURE__ */ jsxs2(
            "label",
            {
              className: "fox-choice",
              "data-disabled": option.disabled || disabled ? "" : undefined,
              children: [
                /* @__PURE__ */ jsx2(RadioRoot, {
                  value: option.value,
                  className: parts.radio,
                  disabled: option.disabled,
                  children: /* @__PURE__ */ jsx2(RadioIndicator, {
                    className: parts.radioIndicator,
                  }),
                }),
                /* @__PURE__ */ jsx2("span", {
                  children: option.label,
                }),
              ],
            },
            option.value,
          ),
        ),
      }),
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
import * as React45 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/root/DialogRootContext.mjs
import * as React44 from "react";

("use client");
var DialogRootContext = /* @__PURE__ */ React44.createContext(undefined);
if (true) DialogRootContext.displayName = "DialogRootContext";
function useDialogRootContext(optional) {
  const store = React44.useContext(DialogRootContext);
  if (!optional && store === undefined) {
    throw new Error(
      "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>.",
    );
  }
  return store;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
("use client");
var DialogBackdrop = /* @__PURE__ */ React45.forwardRef(
  function DialogBackdrop(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      forceRender = false,
      ...elementProps
    } = componentProps;
    const store = useDialogRootContext();
    const open = store.useState("open");
    const nested = store.useState("nested");
    const mounted = store.useState("mounted");
    const transitionStatus = store.useState("transitionStatus");
    const state = {
      open,
      transitionStatus,
    };
    return useRenderElement("div", componentProps, {
      state,
      ref: [store.context.backdropRef, forwardedRef],
      stateAttributesMapping: popupTransitionStateMapping,
      props: [
        {
          role: "presentation",
          hidden: !mounted,
          style: {
            userSelect: "none",
            WebkitUserSelect: "none",
          },
        },
        elementProps,
      ],
      enabled: forceRender || !nested,
    });
  },
);
if (true) DialogBackdrop.displayName = "DialogBackdrop";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/close/DialogClose.mjs
import * as React46 from "react";

("use client");
var DialogClose = /* @__PURE__ */ React46.forwardRef(
  function DialogClose(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled = false,
      nativeButton = true,
      ...elementProps
    } = componentProps;
    const store = useDialogRootContext();
    const open = store.useState("open");
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const state = {
      disabled,
    };
    function handleClick(event) {
      if (open) {
        store.setOpen(
          false,
          createChangeEventDetails(closePress, event.nativeEvent),
        );
      }
    }
    return useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef],
      props: [
        {
          onClick: handleClick,
        },
        elementProps,
        getButtonProps,
      ],
    });
  },
);
if (true) DialogClose.displayName = "DialogClose";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/description/DialogDescription.mjs
import * as React47 from "react";

("use client");
var DialogDescription = /* @__PURE__ */ React47.forwardRef(
  function DialogDescription(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const store = useDialogRootContext();
    const id = useBaseUiId(idProp);
    store.useSyncedValueWithCleanup("descriptionElementId", id);
    return useRenderElement("p", componentProps, {
      ref: forwardedRef,
      props: [
        {
          id,
        },
        elementProps,
      ],
    });
  },
);
if (true) DialogDescription.displayName = "DialogDescription";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
import * as React71 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
import * as React48 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverShared.mjs
function resolveValue(value, pointerType) {
  if (pointerType != null && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function getDelay(value, prop, pointerType) {
  const result = resolveValue(value, pointerType);
  if (typeof result === "number") {
    return result;
  }
  return result?.[prop];
}
function getRestMs(value) {
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function isClickLikeOpenEvent(openEventType, interactedInside) {
  return (
    interactedInside ||
    openEventType === "click" ||
    openEventType === "mousedown"
  );
}
function isHoverOpenEvent(openEventType) {
  return openEventType?.includes("mouse") && openEventType !== "mousedown";
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
import { jsx as _jsx7 } from "react/jsx-runtime";

("use client");
var FloatingDelayGroupContext = /* @__PURE__ */ React48.createContext({
  hasProvider: false,
  timeoutMs: 0,
  delayRef: {
    current: 0,
  },
  initialDelayRef: {
    current: 0,
  },
  timeout: new Timeout(),
  currentIdRef: {
    current: null,
  },
  currentContextRef: {
    current: null,
  },
});
if (true) FloatingDelayGroupContext.displayName = "FloatingDelayGroupContext";
function resetDelayRef(delayRef, initialDelayRef) {
  delayRef.current = initialDelayRef.current;
}
function FloatingDelayGroup(props) {
  const { children, delay, timeoutMs = 0 } = props;
  const delayRef = React48.useRef(delay);
  const initialDelayRef = React48.useRef(delay);
  const currentIdRef = React48.useRef(null);
  const currentContextRef = React48.useRef(null);
  const timeout = useTimeout();
  useIsoLayoutEffect(() => {
    initialDelayRef.current = delay;
    if (!currentIdRef.current) {
      delayRef.current = delay;
      return;
    }
    delayRef.current = {
      open: getDelay(delayRef.current, "open"),
      close: getDelay(delay, "close"),
    };
  }, [delay, currentIdRef, delayRef, initialDelayRef]);
  return /* @__PURE__ */ _jsx7(FloatingDelayGroupContext.Provider, {
    value: React48.useMemo(
      () => ({
        hasProvider: true,
        delayRef,
        initialDelayRef,
        currentIdRef,
        timeoutMs,
        currentContextRef,
        timeout,
      }),
      [timeoutMs, timeout],
    ),
    children,
  });
}
function useDelayGroup(
  store,
  options = {
    open: false,
  },
) {
  const { open } = options;
  const floatingId = store.useState("floatingId");
  const groupContext = React48.useContext(FloatingDelayGroupContext);
  const {
    currentIdRef,
    delayRef,
    timeoutMs,
    initialDelayRef,
    currentContextRef,
    hasProvider,
    timeout,
  } = groupContext;
  const [isInstantPhase, setIsInstantPhase] = React48.useState(false);
  const openRef = React48.useRef(open);
  useIsoLayoutEffect(() => {
    openRef.current = open;
  }, [open]);
  useIsoLayoutEffect(() => {
    function unset() {
      currentContextRef.current?.setIsInstantPhase(false);
      currentIdRef.current = null;
      currentContextRef.current = null;
      delayRef.current = initialDelayRef.current;
      timeout.clear();
    }
    if (!currentIdRef.current) {
      return;
    }
    if (!open && currentIdRef.current === floatingId) {
      setIsInstantPhase(false);
      if (timeoutMs) {
        const closingId = floatingId;
        timeout.start(timeoutMs, () => {
          if (
            store.select("open") ||
            (currentIdRef.current && currentIdRef.current !== closingId)
          ) {
            return;
          }
          unset();
        });
        return () => {
          if (openRef.current || currentIdRef.current !== closingId) {
            timeout.clear();
          }
        };
      }
      unset();
    }
    return;
  }, [
    open,
    floatingId,
    currentIdRef,
    delayRef,
    timeoutMs,
    initialDelayRef,
    currentContextRef,
    timeout,
    store,
  ]);
  useIsoLayoutEffect(() => {
    if (!open) {
      return;
    }
    const prevContext = currentContextRef.current;
    const prevId = currentIdRef.current;
    timeout.clear();
    currentContextRef.current = {
      onOpenChange: store.setOpen,
      setIsInstantPhase,
    };
    currentIdRef.current = floatingId;
    delayRef.current = {
      open: 0,
      close: getDelay(initialDelayRef.current, "close"),
    };
    if (prevId !== null && prevId !== floatingId) {
      setIsInstantPhase(true);
      prevContext?.setIsInstantPhase(true);
      prevContext?.onOpenChange(false, createChangeEventDetails(none));
    } else {
      setIsInstantPhase(false);
      prevContext?.setIsInstantPhase(false);
    }
  }, [
    open,
    floatingId,
    store,
    currentIdRef,
    delayRef,
    initialDelayRef,
    currentContextRef,
    timeout,
  ]);
  useIsoLayoutEffect(() => {
    return () => {
      if (currentIdRef.current === floatingId) {
        currentContextRef.current = null;
        if (!openRef.current) {
          return;
        }
        currentIdRef.current = null;
        resetDelayRef(delayRef, initialDelayRef);
        timeout.clear();
      }
    };
  }, [
    currentContextRef,
    currentIdRef,
    delayRef,
    floatingId,
    initialDelayRef,
    timeout,
  ]);
  return React48.useMemo(
    () => ({
      activeIdRef: currentIdRef,
      hasProvider,
      delayRef,
      isInstantPhase,
    }),
    [currentIdRef, hasProvider, delayRef, isInstantPhase],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
import * as React52 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/addEventListener.mjs
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/mergeCleanups.mjs
function mergeCleanups(...cleanups) {
  return () => {
    for (let i = 0; i < cleanups.length; i += 1) {
      const cleanup = cleanups[i];
      if (cleanup) {
        cleanup();
      }
    }
  };
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useValueAsRef.mjs
("use client");
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    },
  };
  return latest;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/FocusGuard.mjs
import * as React49 from "react";
import { jsx as _jsx8 } from "react/jsx-runtime";

("use client");
var FocusGuard = /* @__PURE__ */ React49.forwardRef(
  function FocusGuard(props, ref) {
    const [role, setRole] = React49.useState();
    useIsoLayoutEffect(() => {
      if (exports_screen_reader.voiceOver && exports_engine.webkit) {
        setRole("button");
      }
    }, []);
    const restProps = {
      tabIndex: 0,
      role,
    };
    return /* @__PURE__ */ _jsx8("span", {
      ...props,
      ref,
      style: visuallyHidden,
      "aria-hidden": role ? undefined : true,
      ...restProps,
      "data-base-ui-focus-guard": "",
    });
  },
);
if (true) FocusGuard.displayName = "FocusGuard";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
  return `data-base-ui-${name}`;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var rafId = 0;
function enqueueFocus(el, options = {}) {
  const { preventScroll = false, sync = false, shouldFocus } = options;
  cancelAnimationFrame(rafId);
  function exec() {
    if (shouldFocus && !shouldFocus()) {
      return;
    }
    el?.focus({
      preventScroll,
    });
  }
  if (sync) {
    exec();
    return NOOP;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var markerName = "data-base-ui-inert";
var ariaHiddenCounterMap = new WeakMap();
var uncontrolledElementsSet = new WeakSet();
var markerCounterMap = new WeakMap();
var lockCount = 0;
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
var correctElements = (parent, targets) =>
  targets
    .map((target) => {
      if (parent.contains(target)) {
        return target;
      }
      const correctedTarget = unwrapHost(target);
      if (parent.contains(correctedTarget)) {
        return correctedTarget;
      }
      return null;
    })
    .filter((x) => x != null);
var buildKeepSet = (targets) => {
  const keep = new Set();
  targets.forEach((target) => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
var collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk = (parent) => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach((node) => {
      if (getNodeName(node) === "script") {
        return;
      }
      if (keepElements.has(node)) {
        walk(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk(root);
  return outside;
};
function applyAttributeToOthers(
  uncorrectedAvoidElements,
  body,
  ariaHidden,
  { mark = true },
) {
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerTargets = mark
    ? collectOutsideElements(
        body,
        buildKeepSet(avoidElements),
        new Set(avoidElements),
      )
    : [];
  const hiddenElements = [];
  const markedElements = [];
  if (ariaHidden) {
    const ariaLiveElements = correctElements(
      body,
      Array.from(body.querySelectorAll("[aria-live]")),
    );
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(
      body,
      buildKeepSet(controlElements),
      new Set(controlElements),
    );
    controlTargets.forEach((node) => {
      const attr = node.getAttribute("aria-hidden");
      const alreadyHidden = attr !== null && attr !== "false";
      const counterValue = (ariaHiddenCounterMap.get(node) || 0) + 1;
      ariaHiddenCounterMap.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        uncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute("aria-hidden", "true");
      }
    });
  }
  if (mark) {
    markerTargets.forEach((node) => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, "");
      }
    });
  }
  lockCount += 1;
  return () => {
    hiddenElements.forEach((element) => {
      const counterValue = (ariaHiddenCounterMap.get(element) || 0) - 1;
      ariaHiddenCounterMap.set(element, counterValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element)) {
          element.removeAttribute("aria-hidden");
        }
        uncontrolledElementsSet.delete(element);
      }
    });
    if (mark) {
      markedElements.forEach((element) => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      ariaHiddenCounterMap = new WeakMap();
      uncontrolledElementsSet = new WeakSet();
      markerCounterMap = new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const { ariaHidden = false, mark = true } = options;
  const body = ownerDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, {
    mark,
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
import * as React50 from "react";
import * as ReactDOM2 from "react-dom";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/constants.mjs
var TYPEAHEAD_RESET_MS = 500;
var PATIENT_CLICK_THRESHOLD = 500;
var DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none",
  },
};
var CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
var DROPDOWN_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "none",
};
var POPUP_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "end",
};
var ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0,
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
import { jsx as _jsx9, jsxs as _jsxs4 } from "react/jsx-runtime";

("use client");
var PortalContext = /* @__PURE__ */ React50.createContext(null);
if (true) PortalContext.displayName = "PortalContext";
var usePortalContext = () => React50.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps,
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = React50.useState(null);
  const [portalNode, setPortalNode] = React50.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React50.useRef(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    const resolvedContainer =
      (containerProp &&
        (isNode(containerProp) ? containerProp : containerProp.current)) ??
      parentPortalNode ??
      document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [
      {
        id: uniqueId,
        [attr]: "",
      },
      elementProps,
    ],
  });
  const portalSubtree =
    containerElement && portalElement
      ? /* @__PURE__ */ ReactDOM2.createPortal(portalElement, containerElement)
      : null;
  return {
    node: portalNode,
    nodeId: /* @__PURE__ */ React50.isValidElement(portalElement)
      ? portalElement.props.id
      : undefined,
    subtree: portalSubtree,
  };
}
var FloatingPortal = /* @__PURE__ */ React50.forwardRef(
  function FloatingPortal(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      children,
      container,
      portalOwnerRole,
      ...elementProps
    } = componentProps;
    const {
      node: portalNode,
      nodeId: portalNodeId,
      subtree: portalSubtree,
    } = useFloatingPortalNode({
      container,
      ref: forwardedRef,
      componentProps,
      elementProps,
    });
    const beforeOutsideRef = React50.useRef(null);
    const afterOutsideRef = React50.useRef(null);
    const beforeInsideRef = React50.useRef(null);
    const afterInsideRef = React50.useRef(null);
    const [focusManagerState, setFocusManagerState] = React50.useState(null);
    const focusInsideDisabledRef = React50.useRef(false);
    const modal = focusManagerState?.modal;
    const open = focusManagerState?.open;
    const shouldRenderGuards =
      !!focusManagerState &&
      !focusManagerState.modal &&
      focusManagerState.open &&
      !!portalNode;
    React50.useEffect(() => {
      if (!portalNode || modal) {
        return;
      }
      function onFocus(event) {
        if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
          if (event.type === "focusin") {
            if (focusInsideDisabledRef.current) {
              enableFocusInside(portalNode);
              focusInsideDisabledRef.current = false;
            }
          } else {
            disableFocusInside(portalNode);
            focusInsideDisabledRef.current = true;
          }
        }
      }
      return mergeCleanups(
        addEventListener(portalNode, "focusin", onFocus, true),
        addEventListener(portalNode, "focusout", onFocus, true),
      );
    }, [portalNode, modal]);
    useIsoLayoutEffect(() => {
      if (!portalNode || open !== true || !focusInsideDisabledRef.current) {
        return;
      }
      enableFocusInside(portalNode);
      focusInsideDisabledRef.current = false;
    }, [open, portalNode]);
    const portalContextValue = React50.useMemo(
      () => ({
        beforeOutsideRef,
        afterOutsideRef,
        beforeInsideRef,
        afterInsideRef,
        portalNode,
        setFocusManagerState,
      }),
      [portalNode],
    );
    return /* @__PURE__ */ _jsxs4(React50.Fragment, {
      children: [
        portalSubtree,
        /* @__PURE__ */ _jsxs4(PortalContext.Provider, {
          value: portalContextValue,
          children: [
            shouldRenderGuards &&
              portalNode &&
              /* @__PURE__ */ _jsx9(FocusGuard, {
                "data-type": "outside",
                ref: beforeOutsideRef,
                onFocus: (event) => {
                  if (isOutsideEvent(event, portalNode)) {
                    beforeInsideRef.current?.focus();
                  } else {
                    const domReference = focusManagerState
                      ? focusManagerState.domReference
                      : null;
                    const prevTabbable = getPreviousTabbable(domReference);
                    prevTabbable?.focus();
                  }
                },
              }),
            shouldRenderGuards &&
              portalNode &&
              /* @__PURE__ */ _jsx9("span", {
                role: portalOwnerRole,
                "aria-owns": portalNodeId,
                style: ownerVisuallyHidden,
              }),
            portalNode &&
              /* @__PURE__ */ ReactDOM2.createPortal(children, portalNode),
            shouldRenderGuards &&
              portalNode &&
              /* @__PURE__ */ _jsx9(FocusGuard, {
                "data-type": "outside",
                ref: afterOutsideRef,
                onFocus: (event) => {
                  if (isOutsideEvent(event, portalNode)) {
                    afterInsideRef.current?.focus();
                  } else {
                    const domReference = focusManagerState
                      ? focusManagerState.domReference
                      : null;
                    const nextTabbable = getNextTabbable(domReference);
                    nextTabbable?.focus();
                    if (focusManagerState?.closeOnFocusOut) {
                      focusManagerState?.onOpenChange(
                        false,
                        createChangeEventDetails(focusOut, event.nativeEvent),
                      );
                    }
                  }
                },
              }),
          ],
        }),
      ],
    });
  },
);
if (true) FloatingPortal.displayName = "FloatingPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
import * as React51 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
  const map = new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    },
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingTreeStore.mjs
class FloatingTreeStore {
  nodesRef = {
    current: [],
  };
  events = createEventEmitter();
  addNode(node) {
    this.nodesRef.current.push(node);
  }
  removeNode(node) {
    const index = this.nodesRef.current.findIndex((n) => n === node);
    if (index !== -1) {
      this.nodesRef.current.splice(index, 1);
    }
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
import { jsx as _jsx10 } from "react/jsx-runtime";

("use client");
var FloatingNodeContext = /* @__PURE__ */ React51.createContext(null);
if (true) FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React51.createContext(null);
if (true) FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () =>
  React51.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React51.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};
function useFloatingNodeId(externalTree) {
  const id = useId();
  const tree = useFloatingTree(externalTree);
  const parentId = useFloatingParentNodeId();
  useIsoLayoutEffect(() => {
    if (!id) {
      return;
    }
    const node = {
      id,
      parentId,
    };
    tree?.addNode(node);
    return () => {
      tree?.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
}
function FloatingNode(props) {
  const { children, id } = props;
  const parentId = useFloatingParentNodeId();
  return /* @__PURE__ */ _jsx10(FloatingNodeContext.Provider, {
    value: React51.useMemo(
      () => ({
        id,
        parentId,
      }),
      [id, parentId],
    ),
    children,
  });
}
function FloatingTree(props) {
  const { children, externalTree } = props;
  const tree = useRefWithInit(
    () => externalTree ?? new FloatingTreeStore(),
  ).current;
  return /* @__PURE__ */ _jsx10(FloatingTreeContext.Provider, {
    value: tree,
    children,
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
import { jsx as _jsx11, jsxs as _jsxs5 } from "react/jsx-runtime";

("use client");
function getEventType(event, lastInteractionType) {
  const win = getWindow(getTarget(event));
  if (event instanceof win.KeyboardEvent) {
    return "keyboard";
  }
  if (event instanceof win.FocusEvent) {
    return lastInteractionType || "keyboard";
  }
  if ("pointerType" in event) {
    return (
      event.pointerType ||
      (isVirtualClick(event) ? "keyboard" : lastInteractionType || "mouse")
    );
  }
  if ("touches" in event) {
    return "touch";
  }
  if (event instanceof win.MouseEvent) {
    return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
  }
  return "";
}
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
    return entry.deref()?.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  clearDisconnectedPreviouslyFocusedElements();
  return previouslyFocusedElements[
    previouslyFocusedElements.length - 1
  ]?.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if (isTabbable(container)) {
    return container;
  }
  return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
  if (
    floatingFocusElement.hasAttribute("tabindex") &&
    !floatingFocusElement.hasAttribute("data-tabindex")
  ) {
    return;
  }
  if (!floatingFocusElement.getAttribute("role")?.includes("dialog")) {
    return;
  }
  const focusableElements = focusable(floatingFocusElement);
  const tabbableContent = focusableElements.filter((element) => {
    const dataTabIndex = element.getAttribute("data-tabindex") || "";
    return (
      isTabbable(element) ||
      (element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-"))
    );
  });
  const tabIndex = floatingFocusElement.getAttribute("tabindex");
  if (tabbableContent.length === 0) {
    if (tabIndex !== "0") {
      floatingFocusElement.setAttribute("tabindex", "0");
      floatingFocusElement.setAttribute("data-tabindex", "0");
    }
  } else if (
    tabIndex !== "-1" ||
    (floatingFocusElement.hasAttribute("data-tabindex") &&
      floatingFocusElement.getAttribute("data-tabindex") !== "-1")
  ) {
    floatingFocusElement.setAttribute("tabindex", "-1");
    floatingFocusElement.setAttribute("data-tabindex", "-1");
  }
}
function FloatingFocusManager(props) {
  const {
    context: store,
    children,
    disabled = false,
    initialFocus = true,
    returnFocus = true,
    explicitReturnFocus,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = "",
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements,
  } = props;
  const open = store.useState("open");
  const domReference = store.useState("domReferenceElement");
  const floating = store.useState("floatingElement");
  const { events, dataRef } = store.context;
  const getNodeId = useStableCallback(
    () => dataRef.current.floatingContext?.nodeId,
  );
  const ignoreInitialFocus = initialFocus === false;
  const isUntrappedTypeableCombobox =
    isTypeableCombobox(domReference) && ignoreInitialFocus;
  const initialFocusRef = useValueAsRef(initialFocus);
  const returnFocusRef = useValueAsRef(returnFocus);
  const explicitReturnFocusRef = useValueAsRef(explicitReturnFocus);
  const openInteractionTypeRef = useValueAsRef(openInteractionType);
  const openRef = useValueAsRef(open);
  const tree = useFloatingTree(externalTree);
  const portalContext = usePortalContext();
  const preventReturnFocusRef = React52.useRef(false);
  const isPointerDownRef = React52.useRef(false);
  const pointerDownOutsideRef = React52.useRef(false);
  const lastFocusedTabbableRef = React52.useRef(null);
  const closeTypeRef = React52.useRef("");
  const lastInteractionTypeRef = React52.useRef("");
  const beforeGuardRef = React52.useRef(null);
  const afterGuardRef = React52.useRef(null);
  const mergedBeforeGuardRef = useMergedRefs(
    beforeGuardRef,
    beforeContentFocusGuardRef,
    portalContext?.beforeInsideRef,
  );
  const mergedAfterGuardRef = useMergedRefs(
    afterGuardRef,
    portalContext?.afterInsideRef,
  );
  const blurTimeout = useTimeout();
  const pointerDownTimeout = useTimeout();
  const restoreFocusFrame = useAnimationFrame();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useStableCallback(
    (container = floatingFocusElement) => {
      return container ? tabbable(container) : [];
    },
  );
  const getResolvedInsideElements = useStableCallback(
    () => getInsideElements?.().filter((element) => element != null) ?? [],
  );
  React52.useEffect(() => {
    if (disabled || !modal) {
      return;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (
          contains(
            floatingFocusElement,
            activeElement(ownerDocument(floatingFocusElement)),
          ) &&
          getTabbableContent().length === 0 &&
          !isUntrappedTypeableCombobox
        ) {
          stopEvent(event);
        }
      }
    }
    const doc = ownerDocument(floatingFocusElement);
    return addEventListener(doc, "keydown", onKeyDown);
  }, [
    disabled,
    floatingFocusElement,
    modal,
    isUntrappedTypeableCombobox,
    getTabbableContent,
  ]);
  React52.useEffect(() => {
    if (disabled || !open) {
      return;
    }
    const doc = ownerDocument(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = getTarget(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside =
        contains(floating, target) ||
        contains(domReference, target) ||
        contains(portalContext?.portalNode, target) ||
        insideElements.some(
          (element) => element === target || contains(element, target),
        );
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || "keyboard";
      if (closest(target, `[${CLICK_TRIGGER_IDENTIFIER}]`)) {
        isPointerDownRef.current = true;
        pointerDownTimeout.start(0, () => {
          isPointerDownRef.current = false;
        });
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = "keyboard";
    }
    return mergeCleanups(
      addEventListener(doc, "pointerdown", onPointerDown, true),
      addEventListener(doc, "pointerup", clearPointerDownOutside, true),
      addEventListener(doc, "pointercancel", clearPointerDownOutside, true),
      addEventListener(doc, "keydown", onKeyDown, true),
      clearPointerDownOutside,
    );
  }, [
    disabled,
    floating,
    domReference,
    floatingFocusElement,
    open,
    portalContext,
    pointerDownTimeout,
    getResolvedInsideElements,
  ]);
  React52.useEffect(() => {
    if (disabled || !closeOnFocusOut) {
      return;
    }
    const doc = ownerDocument(floatingFocusElement);
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = getTarget(event);
      if (isTabbable(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = getTarget(event);
      if (
        modal &&
        relatedTarget == null &&
        target != null &&
        contains(floating, target)
      ) {
        addPreviouslyFocusedElement(target);
      }
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard =
          relatedTarget?.hasAttribute(createAttribute("focus-guard")) &&
          [
            beforeGuardRef.current,
            afterGuardRef.current,
            portalContext?.beforeInsideRef.current,
            portalContext?.afterInsideRef.current,
            portalContext?.beforeOutsideRef.current,
            portalContext?.afterOutsideRef.current,
            resolveRef(previousFocusableElement),
            resolveRef(nextFocusableElement),
          ].includes(relatedTarget);
        const movedToUnrelatedNode = !(
          contains(domReference, relatedTarget) ||
          contains(floating, relatedTarget) ||
          contains(relatedTarget, floating) ||
          contains(portalContext?.portalNode, relatedTarget) ||
          insideElements.some(
            (element) =>
              element === relatedTarget || contains(element, relatedTarget),
          ) ||
          triggers.hasMatchingElement((trigger) =>
            contains(trigger, relatedTarget),
          ) ||
          isRelatedFocusGuard ||
          (tree &&
            (getNodeChildren(tree.nodesRef.current, nodeId).find(
              (node) =>
                contains(node.context?.elements.floating, relatedTarget) ||
                contains(node.context?.elements.domReference, relatedTarget),
            ) ||
              getNodeAncestors(tree.nodesRef.current, nodeId).find(
                (node) =>
                  [
                    node.context?.elements.floating,
                    getFloatingFocusElement(node.context?.elements.floating),
                  ].includes(relatedTarget) ||
                  node.context?.elements.domReference === relatedTarget,
              )))
        );
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement);
        }
        if (
          restoreFocus &&
          currentTarget !== domReference &&
          !isElementVisible(target) &&
          activeElement(doc) === doc.body
        ) {
          if (isHTMLElement(floatingFocusElement)) {
            floatingFocusElement.focus();
            if (restoreFocus === "popup") {
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus =
            (prevTabbable && tabbableContent.includes(prevTabbable)
              ? prevTabbable
              : null) ||
            tabbableContent[tabbableContent.length - 1] ||
            floatingFocusElement;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }
        if (
          (isUntrappedTypeableCombobox ? true : !modal) &&
          relatedTarget &&
          movedToUnrelatedNode &&
          !isPointerDownRef.current &&
          (isUntrappedTypeableCombobox ||
            relatedTarget !== getPreviouslyFocusedElement())
        ) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, createChangeEventDetails(focusOut, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = isHTMLElement(domReference)
      ? domReference
      : null;
    if (!floating && !domReferenceElement) {
      return;
    }
    return mergeCleanups(
      domReferenceElement &&
        addEventListener(domReferenceElement, "focusout", handleFocusOutside),
      domReferenceElement &&
        addEventListener(domReferenceElement, "pointerdown", handlePointerDown),
      floating && addEventListener(floating, "focusin", handleFocusIn),
      floating && addEventListener(floating, "focusout", handleFocusOutside),
      floating &&
        portalContext &&
        addEventListener(floating, "focusout", markInsideReactTree, true),
    );
  }, [
    disabled,
    domReference,
    floating,
    floatingFocusElement,
    modal,
    tree,
    portalContext,
    store,
    closeOnFocusOut,
    restoreFocus,
    getTabbableContent,
    isUntrappedTypeableCombobox,
    getNodeId,
    dataRef,
    blurTimeout,
    pointerDownTimeout,
    restoreFocusFrame,
    nextFocusableElement,
    previousFocusableElement,
    getResolvedInsideElements,
  ]);
  React52.useEffect(() => {
    if (disabled || !floating || !open) {
      return;
    }
    const portalNodes = Array.from(
      portalContext?.portalNode?.querySelectorAll(
        `[${createAttribute("portal")}]`,
      ) || [],
    );
    const ancestors = tree
      ? getNodeAncestors(tree.nodesRef.current, getNodeId())
      : [];
    const rootAncestorComboboxDomReference = ancestors.find((node) =>
      isTypeableCombobox(node.context?.elements.domReference || null),
    )?.context?.elements.domReference;
    const controlInsideElements = [
      floating,
      ...portalNodes,
      beforeGuardRef.current,
      afterGuardRef.current,
      portalContext?.beforeOutsideRef.current,
      portalContext?.afterOutsideRef.current,
      ...getResolvedInsideElements(),
    ];
    const insideElements = [
      ...controlInsideElements,
      rootAncestorComboboxDomReference,
      resolveRef(previousFocusableElement),
      resolveRef(nextFocusableElement),
      isUntrappedTypeableCombobox ? domReference : null,
    ].filter((x) => x != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false,
    });
    const markerInsideElements = [floating, ...portalNodes].filter(
      (x) => x != null,
    );
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [
    open,
    disabled,
    domReference,
    floating,
    modal,
    portalContext,
    isUntrappedTypeableCombobox,
    tree,
    getNodeId,
    nextFocusableElement,
    previousFocusableElement,
    getResolvedInsideElements,
  ]);
  useIsoLayoutEffect(() => {
    if (!open || disabled || !isHTMLElement(floatingFocusElement)) {
      return;
    }
    closeTypeRef.current = "";
    lastInteractionTypeRef.current = "";
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus =
        typeof initialFocusValueOrFn === "function"
          ? initialFocusValueOrFn(openInteractionTypeRef.current || "")
          : initialFocusValueOrFn;
      if (
        resolvedInitialFocus === undefined ||
        resolvedInitialFocus === false
      ) {
        return;
      }
      const focusAlreadyInsideFloatingEl = contains(
        floatingFocusElement,
        previouslyFocusedElement,
      );
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = resolveRef(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
      const openEvent = dataRef.current.openEvent;
      const openedByVirtualPress =
        openEvent?.type === "mousedown" && isVirtualClick(openEvent);
      enqueueFocus(elToFocus, {
        sync: openedByVirtualPress,
        preventScroll: elToFocus === floatingFocusElement,
        shouldFocus() {
          if (!openRef.current) {
            return false;
          }
          if (hadFocusInside) {
            return true;
          }
          const currentActiveElement = activeElement(doc);
          const focusMovedInside =
            currentActiveElement !== elToFocus &&
            contains(floatingFocusElement, currentActiveElement);
          return !focusMovedInside;
        },
      });
    });
  }, [
    disabled,
    open,
    floatingFocusElement,
    getTabbableContent,
    initialFocusRef,
    openInteractionTypeRef,
    openRef,
    dataRef,
  ]);
  const pendingReturnFocusRef = React52.useRef(null);
  useIsoLayoutEffect(() => {
    if (disabled || !floatingFocusElement) {
      pendingReturnFocusRef.current = null;
      return;
    }
    if (pendingReturnFocusRef.current) {
      pendingReturnFocusRef.current.cancelled = true;
      pendingReturnFocusRef.current = null;
    }
    const doc = ownerDocument(floatingFocusElement);
    const elementFocusedBeforeOpen = activeElement(doc);
    const preferPreviousFocus = openInteractionTypeRef.current == null;
    addPreviouslyFocusedElement(elementFocusedBeforeOpen);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(
          details.nativeEvent,
          lastInteractionTypeRef.current,
        );
      }
      if (
        (details.reason === focusOut &&
          details.triggerElement?.hasAttribute(
            createAttribute("focus-guard"),
          )) ||
        (details.reason === triggerHover &&
          details.nativeEvent.type === "mouseleave")
      ) {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== outsidePress) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if (
        isVirtualClick(details.nativeEvent) ||
        isVirtualPointerEvent(details.nativeEvent)
      ) {
        preventReturnFocusRef.current = false;
      } else {
        let isPreventScrollSupported = false;
        ownerDocument(floatingFocusElement)
          .createElement("div")
          .focus({
            get preventScroll() {
              isPreventScrollSupported = true;
              return false;
            },
          });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    function getReturnElement(closeType) {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue =
        typeof returnFocusValueOrFn === "function"
          ? returnFocusValueOrFn(closeType)
          : returnFocusValueOrFn;
      if (
        resolvedReturnFocusValue === undefined ||
        resolvedReturnFocusValue === false
      ) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      const referenceReturnElement = domReference?.isConnected
        ? domReference
        : null;
      const previousReturnElement =
        elementFocusedBeforeOpen?.isConnected &&
        getNodeName(elementFocusedBeforeOpen) !== "body"
          ? elementFocusedBeforeOpen
          : null;
      let defaultReturnElement = preferPreviousFocus
        ? previousReturnElement || referenceReturnElement
        : referenceReturnElement || previousReturnElement;
      if (!defaultReturnElement) {
        defaultReturnElement = getPreviouslyFocusedElement() || null;
      }
      if (typeof resolvedReturnFocusValue === "boolean") {
        return defaultReturnElement;
      }
      return (
        resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null
      );
    }
    return () => {
      events.off("openchange", onOpenChangeLocal);
      const activeEl = activeElement(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree =
        contains(floating, activeEl) ||
        insideElements.some(
          (element) => element === activeEl || contains(element, activeEl),
        ) ||
        (tree &&
          getNodeChildren(tree.nodesRef.current, getNodeId(), false).some(
            (node) => contains(node.context?.elements.floating, activeEl),
          ));
      const returnFocusValueOrFn = returnFocusRef.current;
      const closeType = closeTypeRef.current;
      const returnElement = getReturnElement(closeType);
      const job = {
        cancelled: false,
      };
      pendingReturnFocusRef.current = job;
      queueMicrotask(() => {
        if (pendingReturnFocusRef.current === job) {
          pendingReturnFocusRef.current = null;
        }
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus =
          explicitReturnFocusRef.current ??
          typeof returnFocusValueOrFn !== "boolean";
        if (
          !job.cancelled &&
          returnFocusValueOrFn &&
          !preventReturnFocusRef.current &&
          isHTMLElement(tabbableReturnElement) &&
          (!hasExplicitReturnFocus &&
          tabbableReturnElement !== activeEl &&
          activeEl !== doc.body
            ? isFocusInsideFloatingTree
            : true)
        ) {
          const focusOptions = {
            preventScroll: true,
          };
          if (closeType === "keyboard") {
            focusOptions.focusVisible = true;
          }
          tabbableReturnElement.focus(focusOptions);
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [
    disabled,
    floating,
    floatingFocusElement,
    returnFocusRef,
    explicitReturnFocusRef,
    openInteractionTypeRef,
    events,
    tree,
    domReference,
    getNodeId,
    getResolvedInsideElements,
  ]);
  useIsoLayoutEffect(() => {
    if (!exports_engine.webkit || open || !floating) {
      return;
    }
    const activeEl = activeElement(ownerDocument(floating));
    if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
      return;
    }
    if (contains(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open, floating]);
  useIsoLayoutEffect(() => {
    if (disabled || !portalContext) {
      return;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange: store.setOpen,
      domReference,
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [
    disabled,
    portalContext,
    modal,
    open,
    store,
    closeOnFocusOut,
    domReference,
  ]);
  useIsoLayoutEffect(() => {
    if (disabled || !floatingFocusElement) {
      return;
    }
    handleTabIndex(floatingFocusElement);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled, floatingFocusElement]);
  const shouldRenderGuards =
    !disabled &&
    (modal ? !isUntrappedTypeableCombobox : true) &&
    (isInsidePortal || modal);
  return /* @__PURE__ */ _jsxs5(React52.Fragment, {
    children: [
      shouldRenderGuards &&
        /* @__PURE__ */ _jsx11(FocusGuard, {
          "data-type": "inside",
          ref: mergedBeforeGuardRef,
          onFocus: (event) => {
            if (modal) {
              const els = getTabbableContent();
              enqueueFocus(els[els.length - 1]);
            } else if (portalContext?.portalNode) {
              preventReturnFocusRef.current = false;
              if (isOutsideEvent(event, portalContext.portalNode)) {
                const nextTabbable = getNextTabbable(domReference);
                nextTabbable?.focus();
              } else {
                resolveRef(
                  previousFocusableElement ?? portalContext.beforeOutsideRef,
                )?.focus();
              }
            }
          },
        }),
      children,
      shouldRenderGuards &&
        /* @__PURE__ */ _jsx11(FocusGuard, {
          "data-type": "inside",
          ref: mergedAfterGuardRef,
          onFocus: (event) => {
            if (modal) {
              enqueueFocus(getTabbableContent()[0]);
            } else if (portalContext?.portalNode) {
              if (closeOnFocusOut) {
                preventReturnFocusRef.current = true;
              }
              if (isOutsideEvent(event, portalContext.portalNode)) {
                const prevTabbable = getPreviousTabbable(domReference);
                prevTabbable?.focus();
              } else {
                resolveRef(
                  nextFocusableElement ?? portalContext.afterOutsideRef,
                )?.focus();
              }
            }
          },
        }),
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
import * as React53 from "react";

("use client");
function useClick(store, props = {}) {
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    stickIfOpen = true,
    touchOpenDelay = 0,
    reason = triggerPress,
  } = props;
  const dataRef = store.context.dataRef;
  const pointerTypeRef = React53.useRef(undefined);
  const frame = useAnimationFrame();
  const touchOpenTimeout = useTimeout();
  const reference = React53.useMemo(() => {
    function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
      const details = createChangeEventDetails(reason, nativeEvent, target);
      if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
        touchOpenTimeout.start(touchOpenDelay, () => {
          store.setOpen(true, details);
        });
      } else {
        store.setOpen(nextOpen, details);
      }
    }
    function getNextOpen(open, currentTarget, isClickLikeOpenEvent) {
      const openEvent = dataRef.current.openEvent;
      const hasClickedOnInactiveTrigger =
        store.select("domReferenceElement") !== currentTarget;
      if (open && hasClickedOnInactiveTrigger) {
        return true;
      }
      if (!open) {
        return true;
      }
      if (!toggle) {
        return true;
      }
      if (
        openEvent &&
        (typeof stickIfOpen === "function" ? stickIfOpen() : stickIfOpen)
      ) {
        return !isClickLikeOpenEvent(openEvent.type);
      }
      return false;
    }
    return {
      onPointerDown(event) {
        pointerTypeRef.current =
          isMouseLikePointerType(event.pointerType, true) &&
          isVirtualPointerEvent(event.nativeEvent)
            ? "virtual"
            : event.pointerType;
      },
      onMouseDown(event) {
        const pointerType = pointerTypeRef.current;
        const nativeEvent = event.nativeEvent;
        const open = store.select("open");
        if (
          event.button !== 0 ||
          eventOption === "click" ||
          (isMouseLikePointerType(pointerType, true) && ignoreMouse)
        ) {
          return;
        }
        const nextOpen = getNextOpen(
          open,
          event.currentTarget,
          (openEventType) =>
            openEventType === "click" || openEventType === "mousedown",
        );
        const target = getTarget(nativeEvent);
        const isTypeable = isTypeableElement(target);
        if (isTypeable || pointerType === "virtual") {
          setOpenWithTouchDelay(
            nextOpen,
            nativeEvent,
            isTypeable ? target : event.currentTarget,
            pointerType,
          );
          return;
        }
        const eventCurrentTarget = event.currentTarget;
        frame.request(() => {
          setOpenWithTouchDelay(
            nextOpen,
            nativeEvent,
            eventCurrentTarget,
            pointerType,
          );
        });
      },
      onClick(event) {
        if (eventOption === "mousedown-only") {
          return;
        }
        const pointerType = pointerTypeRef.current;
        if (eventOption === "mousedown" && pointerType) {
          pointerTypeRef.current = undefined;
          return;
        }
        if (isMouseLikePointerType(pointerType, true) && ignoreMouse) {
          return;
        }
        const open = store.select("open");
        const nextOpen = getNextOpen(
          open,
          event.currentTarget,
          (openEventType) =>
            openEventType === "click" ||
            openEventType === "mousedown" ||
            openEventType === "keydown" ||
            openEventType === "keyup",
        );
        setOpenWithTouchDelay(
          nextOpen,
          event.nativeEvent,
          event.currentTarget,
          pointerType,
        );
      },
      onKeyDown() {
        pointerTypeRef.current = undefined;
      },
    };
  }, [
    dataRef,
    eventOption,
    ignoreMouse,
    reason,
    store,
    stickIfOpen,
    toggle,
    frame,
    touchOpenTimeout,
    touchOpenDelay,
  ]);
  return React53.useMemo(
    () =>
      enabled
        ? {
            reference,
          }
        : EMPTY_OBJECT,
    [enabled, reference],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useClientPoint.mjs
import * as React54 from "react";

("use client");
function createVirtualElement(domElement, data) {
  let offsetX = null;
  let offsetY = null;
  let isAutoUpdateEvent = false;
  return {
    contextElement: domElement || undefined,
    getBoundingClientRect() {
      const domRect = domElement?.getBoundingClientRect() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      };
      const isXAxis = data.axis === "x" || data.axis === "both";
      const isYAxis = data.axis === "y" || data.axis === "both";
      const canTrackCursorOnAutoUpdate =
        ["mouseenter", "mousemove"].includes(
          data.dataRef.current.openEvent?.type || "",
        ) && data.pointerType !== "touch";
      const width = data.axis === "y" ? domRect.width : 0;
      const height = data.axis === "x" ? domRect.height : 0;
      let x = domRect.x;
      let y = domRect.y;
      if (offsetX == null && data.x && isXAxis) {
        offsetX = domRect.x - data.x;
      }
      if (offsetY == null && data.y && isYAxis) {
        offsetY = domRect.y - data.y;
      }
      x -= offsetX || 0;
      y -= offsetY || 0;
      if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
        x = isXAxis && data.x != null ? data.x : x;
        y = isYAxis && data.y != null ? data.y : y;
      }
      isAutoUpdateEvent = true;
      return {
        width,
        height,
        x,
        y,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
      };
    },
  };
}
function isMouseBasedEvent(event) {
  return event != null && event.clientX != null;
}
function useClientPoint(store, props = {}) {
  const { enabled = true, axis = "both" } = props;
  const open = store.useState("open");
  const floating = store.useState("floatingElement");
  const domReference = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const initialRef = React54.useRef(false);
  const cleanupListenerRef = React54.useRef(null);
  const [pointerType, setPointerType] = React54.useState();
  const [reactive, setReactive] = React54.useState([]);
  const resetReference = useStableCallback((reference) => {
    store.set("positionReference", reference);
  });
  const setReference = useStableCallback((newX, newY, referenceElement) => {
    if (initialRef.current) {
      return;
    }
    if (
      dataRef.current.openEvent &&
      !isMouseBasedEvent(dataRef.current.openEvent)
    ) {
      return;
    }
    store.set(
      "positionReference",
      createVirtualElement(referenceElement ?? domReference, {
        x: newX,
        y: newY,
        axis,
        dataRef,
        pointerType,
      }),
    );
  });
  const handleReferenceEnterOrMove = useStableCallback((event) => {
    if (!open) {
      setReference(event.clientX, event.clientY, event.currentTarget);
    } else if (!cleanupListenerRef.current) {
      setReference(event.clientX, event.clientY, event.currentTarget);
      setReactive([]);
    }
  });
  const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
  React54.useEffect(() => {
    if (!enabled) {
      resetReference(domReference);
      return;
    }
    if (!openCheck) {
      return;
    }
    function cleanupListener() {
      cleanupListenerRef.current?.();
      cleanupListenerRef.current = null;
    }
    const win = getWindow(floating);
    function handleMouseMove(event) {
      const target = getTarget(event);
      if (!contains(floating, target)) {
        setReference(event.clientX, event.clientY);
      } else {
        cleanupListener();
      }
    }
    if (
      !dataRef.current.openEvent ||
      isMouseBasedEvent(dataRef.current.openEvent)
    ) {
      cleanupListenerRef.current = addEventListener(
        win,
        "mousemove",
        handleMouseMove,
      );
    } else {
      resetReference(domReference);
    }
    return cleanupListener;
  }, [
    openCheck,
    enabled,
    floating,
    dataRef,
    domReference,
    store,
    setReference,
    resetReference,
    reactive,
  ]);
  React54.useEffect(
    () => () => {
      store.set("positionReference", null);
    },
    [store],
  );
  React54.useEffect(() => {
    if (enabled && !floating) {
      initialRef.current = false;
    }
  }, [enabled, floating]);
  React54.useEffect(() => {
    if (!enabled && open) {
      initialRef.current = true;
    }
  }, [enabled, open]);
  const reference = React54.useMemo(() => {
    function setPointerTypeRef(event) {
      setPointerType(event.pointerType);
    }
    return {
      onPointerDown: setPointerTypeRef,
      onPointerEnter: setPointerTypeRef,
      onMouseMove: handleReferenceEnterOrMove,
      onMouseEnter: handleReferenceEnterOrMove,
    };
  }, [handleReferenceEnterOrMove]);
  return React54.useMemo(
    () =>
      enabled
        ? {
            reference,
            trigger: reference,
          }
        : {},
    [enabled, reference],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
import * as React55 from "react";

("use client");
function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey:
      typeof normalizable === "boolean"
        ? normalizable
        : (normalizable?.escapeKey ?? false),
    outsidePress:
      typeof normalizable === "boolean"
        ? normalizable
        : (normalizable?.outsidePress ?? true),
  };
}
function useDismiss(store, props = {}) {
  const {
    enabled = true,
    escapeKey: escapeKey2 = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = "sloppy",
    referencePress = alwaysFalse,
    bubbles,
    externalTree,
  } = props;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const { dataRef, events } = store.context;
  const tree = useFloatingTree(externalTree);
  const outsidePressFn = useStableCallback(
    typeof outsidePressProp === "function" ? outsidePressProp : () => false,
  );
  const outsidePress2 =
    typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress2 !== false;
  const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
  const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } =
    normalizeProp(bubbles);
  const pressStartedInsideRef = React55.useRef(false);
  const pressStartPreventedRef = React55.useRef(false);
  const suppressNextOutsideClickRef = React55.useRef(false);
  const sawPressWhileOpenRef = React55.useRef(false);
  const isComposingRef = React55.useRef(false);
  const currentPointerTypeRef = React55.useRef("");
  const touchStateRef = React55.useRef(null);
  const cancelDismissOnEndTimeout = useTimeout();
  const clearInsideReactTreeTimeout = useTimeout();
  const compositionTimeout = useTimeout();
  const clearInsideReactTree = useStableCallback(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const hasBlockingChild = useStableCallback((bubbleKey) => {
    const nodeId = dataRef.current.floatingContext?.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    return children.some(
      (child) =>
        child.context?.open && !child.context.dataRef.current[bubbleKey],
    );
  });
  const isEventWithinOwnElements = useStableCallback((event) => {
    return (
      isEventTargetWithin(event, store.select("floatingElement")) ||
      isEventTargetWithin(event, store.select("domReferenceElement"))
    );
  });
  const closeOnReferencePress = useStableCallback((event) => {
    if (!referencePress()) {
      return;
    }
    store.setOpen(
      false,
      createChangeEventDetails(triggerPress, event.nativeEvent),
    );
  });
  const closeOnEscapeKeyDown = useStableCallback((event) => {
    if (!open || !enabled || !escapeKey2 || event.key !== "Escape") {
      return;
    }
    const native = isReactEvent(event) ? event.nativeEvent : event;
    if (isComposingRef.current || native.isComposing) {
      return;
    }
    if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) {
      return;
    }
    const eventDetails = createChangeEventDetails(escapeKey, native);
    store.setOpen(false, eventDetails);
    if (!eventDetails.isCanceled) {
      event.preventDefault();
    }
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = useStableCallback(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  const markPressStartedInsideReactTree = useStableCallback((event) => {
    if (!open || !enabled || event.button !== 0) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (!contains(store.select("floatingElement"), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = useStableCallback((event) => {
    if (!open || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  React55.useEffect(() => {
    function handleOpenChange(details) {
      if (!details.open) {
        sawPressWhileOpenRef.current = false;
      }
    }
    events.on("openchange", handleOpenChange);
    return () => {
      events.off("openchange", handleOpenChange);
    };
  }, [events]);
  React55.useEffect(() => clearInsideReactTree, [clearInsideReactTree]);
  React55.useEffect(() => {
    if (!open || !enabled) {
      if (!open) {
        sawPressWhileOpenRef.current = false;
        isComposingRef.current = false;
        currentPointerTypeRef.current = "";
        touchStateRef.current = null;
      }
      return clearInsideReactTree;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const preventedPressSuppressionTimeout = new Timeout();
    const doc = ownerDocument(floatingElement);
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      isComposingRef.current = true;
      compositionTimeout.start(exports_engine.webkit ? 5 : 0, () => {
        isComposingRef.current = false;
      });
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === "pen" || !type ? "mouse" : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved =
        typeof outsidePressEventValue === "function"
          ? outsidePressEventValue()
          : outsidePressEventValue;
      if (typeof resolved === "string") {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return (
        (computedOutsidePressEvent === "intentional" &&
          event.type !== "click") ||
        (computedOutsidePressEvent === "sloppy" && event.type === "click")
      );
    }
    function isEventWithinFloatingTree(event) {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const targetIsInsideChildren =
        tree &&
        getNodeChildren(tree.nodesRef.current, nodeId).some((node) =>
          isEventTargetWithin(event, node.context?.elements.floating),
        );
      return isEventWithinOwnElements(event) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        if (event.type !== "click" && !isEventWithinOwnElements(event)) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
        }
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = getTarget(event);
      const inertSelector = `[${createAttribute("inert")}]`;
      const targetRoot = isElement(target) ? target.getRootNode() : null;
      const markers = Array.from(
        (isShadowRoot(targetRoot)
          ? targetRoot
          : ownerDocument(store.select("floatingElement"))
        ).querySelectorAll(inertSelector),
      );
      const triggers = store.context.triggerElements;
      if (
        target &&
        (triggers.hasElement(target) ||
          triggers.hasMatchingElement((trigger) => contains(trigger, target)))
      ) {
        return;
      }
      let targetRootAncestor = isElement(target) ? target : null;
      while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
        const nextParent = getParentNode(targetRootAncestor);
        if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }
      if (
        markers.length &&
        isElement(target) &&
        !isRootElement(target) &&
        !contains(target, store.select("floatingElement")) &&
        markers.every((marker) => !contains(targetRootAncestor, marker))
      ) {
        return;
      }
      if (isHTMLElement(target) && !("touches" in event)) {
        const lastTraversableNode = isLastTraversableNode(target);
        const style = getComputedStyle2(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX =
          lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY =
          lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX =
          isScrollableX &&
          target.clientWidth > 0 &&
          target.scrollWidth > target.clientWidth;
        const canScrollY =
          isScrollableY &&
          target.clientHeight > 0 &&
          target.scrollHeight > target.clientHeight;
        const isRTL = style.direction === "rtl";
        const pressedVerticalScrollbar =
          canScrollY &&
          (isRTL
            ? event.offsetX <= target.offsetWidth - target.clientWidth
            : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar =
          canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (getOutsidePressEvent() === "intentional") {
        if (
          event.detail !== 0 &&
          !isVirtualClick(event) &&
          !sawPressWhileOpenRef.current
        ) {
          return;
        }
        if (suppressNextOutsideClickRef.current) {
          preventedPressSuppressionTimeout.clear();
          suppressNextOutsideClickRef.current = false;
          return;
        }
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      if (hasBlockingChild("__outsidePressBubbles")) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(outsidePress, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (
        getOutsidePressEvent() !== "sloppy" ||
        event.pointerType === "touch" ||
        !store.select("open") ||
        !enabled ||
        isEventWithinOwnElements(event)
      ) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (
        getOutsidePressEvent() !== "sloppy" ||
        !store.select("open") ||
        !enabled ||
        isEventWithinOwnElements(event)
      ) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true,
        };
        cancelDismissOnEndTimeout.start(1000, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = getTarget(event);
      if (!target) {
        return;
      }
      const unsubscribe = addEventListener(target, event.type, () => {
        listener(event);
        unsubscribe();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = "touch";
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === "pointerdown") {
        if (event.button === 0) {
          sawPressWhileOpenRef.current = true;
        }
        currentPointerTypeRef.current = event.pointerType;
      }
      if (
        event.type === "mousedown" &&
        touchStateRef.current &&
        !touchStateRef.current.dismissOnMouseDown
      ) {
        return;
      }
      addTargetEventListenerOnce(event, (targetEvent) => {
        if (targetEvent.type === "pointerdown") {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (event.type === "pointercancel") {
        sawPressWhileOpenRef.current = false;
      }
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== "intentional") {
        return;
      }
      if (event.type === "pointercancel") {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }
      if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (
        getOutsidePressEvent() !== "sloppy" ||
        !touchStateRef.current ||
        isEventWithinOwnElements(event)
      ) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (
        getOutsidePressEvent() !== "sloppy" ||
        !touchStateRef.current ||
        isEventWithinOwnElements(event)
      ) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const unsubscribe = mergeCleanups(
      escapeKey2 &&
        mergeCleanups(
          addEventListener(doc, "keydown", closeOnEscapeKeyDown),
          addEventListener(doc, "compositionstart", handleCompositionStart),
          addEventListener(doc, "compositionend", handleCompositionEnd),
        ),
      outsidePressEnabled &&
        mergeCleanups(
          addEventListener(doc, "click", closeOnPressOutsideCapture, true),
          addEventListener(
            doc,
            "pointerdown",
            closeOnPressOutsideCapture,
            true,
          ),
          addEventListener(doc, "pointerup", handlePressEndCapture, true),
          addEventListener(doc, "pointercancel", handlePressEndCapture, true),
          addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true),
          addEventListener(doc, "mouseup", handlePressEndCapture, true),
          addEventListener(doc, "touchstart", handleTouchStartCapture, {
            capture: true,
            passive: true,
          }),
          addEventListener(doc, "touchmove", handleTouchMoveCapture, {
            capture: true,
            passive: true,
          }),
          addEventListener(doc, "touchend", handleTouchEndCapture, {
            capture: true,
            passive: true,
          }),
        ),
    );
    return () => {
      unsubscribe();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
    };
  }, [
    dataRef,
    floatingElement,
    escapeKey2,
    outsidePressEnabled,
    outsidePress2,
    open,
    enabled,
    escapeKeyBubbles,
    outsidePressBubbles,
    closeOnEscapeKeyDown,
    clearInsideReactTree,
    getOutsidePressEventProp,
    hasBlockingChild,
    isEventWithinOwnElements,
    tree,
    store,
    cancelDismissOnEndTimeout,
    compositionTimeout,
  ]);
  const reference = React55.useMemo(
    () => ({
      onKeyDown: closeOnEscapeKeyDown,
      onPointerDown: closeOnReferencePress,
      onClick: closeOnReferencePress,
    }),
    [closeOnEscapeKeyDown, closeOnReferencePress],
  );
  const floating = React55.useMemo(
    () => ({
      onKeyDown: closeOnEscapeKeyDown,
      onPointerDown: markInsidePressStartPrevented,
      onMouseDown: markInsidePressStartPrevented,
      onClickCapture: markInsideReactTree,
      onMouseDownCapture(event) {
        markInsideReactTree();
        markPressStartedInsideReactTree(event);
      },
      onPointerDownCapture(event) {
        markInsideReactTree();
        markPressStartedInsideReactTree(event);
      },
      onMouseUpCapture: markInsideReactTree,
      onTouchEndCapture: markInsideReactTree,
      onTouchMoveCapture: markInsideReactTree,
    }),
    [
      closeOnEscapeKeyDown,
      markInsideReactTree,
      markPressStartedInsideReactTree,
      markInsidePressStartPrevented,
    ],
  );
  return React55.useMemo(
    () =>
      enabled
        ? {
            reference,
            floating,
            trigger: reference,
          }
        : {},
    [enabled, reference, floating],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
import * as React57 from "react";
import * as ReactDOM3 from "react-dom";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
("use client");
function useSyncedFloatingRootContext(options) {
  const {
    popupStore,
    treatPopupAsFloatingElement = false,
    floatingRootContext: store,
    floatingId,
    nested,
    onOpenChange,
  } = options;
  const open = popupStore.useState("open");
  const referenceElement = popupStore.useState("activeTriggerElement");
  const floatingElement = popupStore.useState(
    treatPopupAsFloatingElement ? "popupElement" : "positionerElement",
  );
  const handleOpenChange = onOpenChange;
  popupStore.useSyncedValue("floatingId", floatingId);
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId,
      referenceElement,
      floatingElement,
    };
    if (isElement(referenceElement)) {
      valuesToSync.domReferenceElement = referenceElement;
    }
    if (store.state.positionReference === store.state.referenceElement) {
      valuesToSync.positionReference = referenceElement;
    }
    store.update(valuesToSync);
  }, [open, floatingId, referenceElement, floatingElement, store]);
  store.context.onOpenChange = handleOpenChange;
  store.context.nested = nested;
  return store;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useUnmountAfterClose.mjs
import * as React56 from "react";

("use client");
function useUnmountAfterClose(parameters) {
  const {
    open,
    ref,
    preventUnmountOnClose,
    setPreventUnmountOnClose: setPreventUnmountOnCloseParam,
    onUnmount,
    animateInitialOpen,
  } = parameters;
  const setPreventUnmountOnClose = useStableCallback(
    setPreventUnmountOnCloseParam,
  );
  const { mounted, setMounted, transitionStatus } = useTransitionStatus(
    open,
    false,
    false,
    animateInitialOpen,
  );
  const preventUnmountingOnClose = open ? false : preventUnmountOnClose;
  useIsoLayoutEffect(() => {
    if (open) {
      setPreventUnmountOnClose(false);
    }
  }, [open, setPreventUnmountOnClose]);
  const mountedRef = React56.useRef(mounted);
  const pendingUnmountRef = React56.useRef(false);
  const rerender = useForcedRerendering();
  const unmount = () => {
    mountedRef.current = false;
    setMounted(false);
    onUnmount();
  };
  useIsoLayoutEffect(() => {
    mountedRef.current = mounted;
    if (pendingUnmountRef.current) {
      pendingUnmountRef.current = false;
      if (!open && mounted) {
        unmount();
      }
    }
  });
  const forceUnmount = useStableCallback(() => {
    if (!mountedRef.current) {
      return;
    }
    if (open) {
      pendingUnmountRef.current = true;
      rerender();
      return;
    }
    unmount();
  });
  useOpenChangeComplete({
    enabled: mounted && !open && !preventUnmountingOnClose,
    open,
    ref,
    onComplete() {
      if (!open) {
        forceUnmount();
      }
    },
  });
  return {
    mounted,
    transitionStatus,
    preventUnmountingOnClose,
    forceUnmount,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
("use client");
var FOCUSABLE_POPUP_PROPS = {
  tabIndex: -1,
  [FOCUSABLE_ATTRIBUTE]: "",
};
function createDefaultInitialFocus(popupRef) {
  return (interactionType) =>
    interactionType === "touch" ? popupRef.current : true;
}
function usePopupRootStore(createStore, treatPopupAsFloatingElement = false) {
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  const store = useRefWithInit(() => createStore(floatingId, nested)).current;
  useSyncedFloatingRootContext({
    popupStore: store,
    treatPopupAsFloatingElement,
    floatingRootContext: store.state.floatingRootContext,
    floatingId,
    nested,
    onOpenChange: store.setOpen,
  });
  return store;
}
function PopupHandleAttachment({ handle, store }) {
  useIsoLayoutEffect(() => {
    return handle.attachStore(store);
  }, [handle, store]);
  return null;
}
function syncTriggerCount(store) {
  const triggerCount = store.context.triggerElements.size;
  if (store.select("open") && store.state.triggerCount !== triggerCount) {
    store.set("triggerCount", triggerCount);
  }
}
function useTriggerRegistration(id, store) {
  const registrationRef = React57.useRef(null);
  return useStableCallback((element) => {
    const registration = registrationRef.current;
    if (registration !== null) {
      if (
        registration.element === element &&
        registration.store === store &&
        registration.id === id
      ) {
        return;
      }
      registrationRef.current = null;
      const registeredStore = registration.store;
      if (
        registeredStore.context.triggerElements.getById(registration.id) ===
        registration.element
      ) {
        registeredStore.context.triggerElements.delete(registration.id);
        syncTriggerCount(registeredStore);
      }
    }
    if (element !== null && id !== undefined) {
      registrationRef.current = {
        store,
        id,
        element,
      };
      store.context.triggerElements.add(id, element);
      syncTriggerCount(store);
    }
  });
}
function createPopupOpenState(
  state,
  open,
  trigger,
  preventUnmountOnClose = false,
) {
  let preventUnmountingOnClose = state.preventUnmountingOnClose;
  if (open) {
    preventUnmountingOnClose = false;
  } else if (preventUnmountOnClose) {
    preventUnmountingOnClose = true;
  }
  const triggerId = trigger?.id ?? null;
  let activeTriggerId = state.activeTriggerId;
  let activeTriggerElement = state.activeTriggerElement;
  if (triggerId || open) {
    activeTriggerId = triggerId;
    activeTriggerElement = trigger ?? null;
  }
  return {
    open,
    preventUnmountingOnClose,
    activeTriggerId,
    activeTriggerElement,
    openedWithoutTrigger: open ? trigger == null : state.openedWithoutTrigger,
  };
}
function attachPreventUnmountOnClose(eventDetails) {
  let preventUnmountOnClose = false;
  eventDetails.preventUnmountOnClose = () => {
    preventUnmountOnClose = true;
  };
  return () => preventUnmountOnClose;
}
function applyPopupOpenChange(store, nextOpen, eventDetails, options = {}) {
  const reason = eventDetails.reason;
  const isHover = reason === triggerHover;
  const isFocusOpen = nextOpen && reason === triggerFocus;
  const isDismissClose =
    !nextOpen && (reason === triggerPress || reason === escapeKey);
  const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
  store.context.onOpenChange?.(nextOpen, eventDetails);
  if (eventDetails.isCanceled) {
    return;
  }
  options.onBeforeDispatch?.();
  store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
  const changeState = () => {
    const popupOpenState = createPopupOpenState(
      store.state,
      nextOpen,
      eventDetails.trigger,
      shouldPreventUnmountOnClose(),
    );
    const updatedState = {
      ...options.extraState,
      ...popupOpenState,
    };
    if (isFocusOpen) {
      updatedState.instantType = "focus";
    } else if (isDismissClose) {
      updatedState.instantType = "dismiss";
    } else if (isHover) {
      updatedState.instantType = undefined;
    }
    store.update(updatedState);
  };
  if (isHover) {
    ReactDOM3.flushSync(changeState);
  } else {
    changeState();
  }
}
function useTriggerDataForwarding(
  triggerId,
  triggerElementRef,
  store,
  stateUpdates,
) {
  const isMountedByThisTrigger = store.useState(
    "isMountedByTrigger",
    triggerId,
  );
  const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
  const applyTriggerData = useStableCallback((element) => {
    const open = store.select("open");
    const activeTriggerId = store.select("activeTriggerId");
    if (activeTriggerId === triggerId) {
      const changes = {
        activeTriggerElement: element,
        ...(open ? stateUpdates : null),
      };
      store.update(changes);
      return;
    }
    if (activeTriggerId == null && open && !store.state.openedWithoutTrigger) {
      const changes = {
        activeTriggerId: triggerId ?? null,
        activeTriggerElement: element,
        ...stateUpdates,
      };
      store.update(changes);
    }
  });
  const registerTrigger = useStableCallback((element) => {
    baseRegisterTrigger(element);
    if (element) {
      applyTriggerData(element);
    }
  });
  useIsoLayoutEffect(() => {
    registerTrigger(triggerElementRef.current);
    return () => registerTrigger(null);
  }, [registerTrigger, triggerElementRef, store, triggerId]);
  useIsoLayoutEffect(() => {
    if (isMountedByThisTrigger) {
      const changes = {
        activeTriggerElement: triggerElementRef.current,
        ...stateUpdates,
      };
      store.update(changes);
    }
  }, [
    isMountedByThisTrigger,
    store,
    triggerElementRef,
    ...Object.values(stateUpdates),
  ]);
  return {
    registerTrigger,
    isMountedByThisTrigger,
  };
}
function useImplicitActiveTrigger(store, options = {}) {
  const { closeOnActiveTriggerUnmount = false } = options;
  const resolvedActiveTriggerIdRef = React57.useRef(null);
  const open = store.useState("open");
  const reactiveTriggerCount = store.useState("triggerCount");
  const activeTriggerId = store.useState("activeTriggerId");
  const reactiveActiveTriggerElement = store.useState("activeTriggerElement");
  useIsoLayoutEffect(() => {
    if (!open) {
      resolvedActiveTriggerIdRef.current = null;
      if (store.state.triggerCount !== 0) {
        store.set("triggerCount", 0);
      }
      if (store.state.openedWithoutTrigger) {
        store.set("openedWithoutTrigger", false);
      }
      return;
    }
    const triggerCount = store.context.triggerElements.size;
    const stateUpdates = {};
    if (store.state.triggerCount !== triggerCount) {
      stateUpdates.triggerCount = triggerCount;
    }
    const currentActiveTriggerId = store.select("activeTriggerId");
    let lostActiveTriggerId = null;
    if (currentActiveTriggerId) {
      const activeTriggerElement = store.context.triggerElements.getById(
        currentActiveTriggerId,
      );
      if (!activeTriggerElement) {
        for (const [
          triggerId,
          triggerElement,
        ] of store.context.triggerElements.entries()) {
          if (triggerElement === store.state.activeTriggerElement) {
            stateUpdates.activeTriggerId = triggerId;
            stateUpdates.activeTriggerElement = triggerElement;
            resolvedActiveTriggerIdRef.current = triggerId;
            break;
          }
        }
        if (stateUpdates.activeTriggerId === undefined) {
          if (resolvedActiveTriggerIdRef.current === currentActiveTriggerId) {
            lostActiveTriggerId = currentActiveTriggerId;
          } else {
            resolvedActiveTriggerIdRef.current = null;
          }
        }
      } else {
        resolvedActiveTriggerIdRef.current = currentActiveTriggerId;
        if (activeTriggerElement !== store.state.activeTriggerElement) {
          stateUpdates.activeTriggerElement = activeTriggerElement;
        }
      }
    } else {
      resolvedActiveTriggerIdRef.current = null;
    }
    if (
      !lostActiveTriggerId &&
      !currentActiveTriggerId &&
      !store.state.openedWithoutTrigger &&
      triggerCount === 1
    ) {
      const iteratorResult = store.context.triggerElements.entries().next();
      if (!iteratorResult.done) {
        const [implicitTriggerId, implicitTriggerElement] =
          iteratorResult.value;
        stateUpdates.activeTriggerId = implicitTriggerId;
        stateUpdates.activeTriggerElement = implicitTriggerElement;
        resolvedActiveTriggerIdRef.current = implicitTriggerId;
      }
    }
    if (
      stateUpdates.triggerCount !== undefined ||
      stateUpdates.activeTriggerId !== undefined ||
      stateUpdates.activeTriggerElement !== undefined
    ) {
      store.update(stateUpdates);
    }
    if (lostActiveTriggerId) {
      if (closeOnActiveTriggerUnmount) {
        queueMicrotask(() => {
          if (
            store.select("open") &&
            store.select("activeTriggerId") === lostActiveTriggerId &&
            !store.context.triggerElements.getById(lostActiveTriggerId)
          ) {
            const eventDetails = createChangeEventDetails(none);
            store.setOpen(false, eventDetails);
            if (!eventDetails.isCanceled) {
              store.update({
                activeTriggerId: null,
                activeTriggerElement: null,
              });
            }
          }
        });
      }
    }
  }, [
    open,
    store,
    reactiveTriggerCount,
    activeTriggerId,
    reactiveActiveTriggerElement,
    closeOnActiveTriggerUnmount,
  ]);
}
function useOpenStateTransitions(open, store, onUnmount, animateInitialOpen) {
  const { mounted, transitionStatus, forceUnmount } = useUnmountAfterClose({
    open,
    ref: store.context.popupRef,
    preventUnmountOnClose: store.useState("preventUnmountingOnClose"),
    setPreventUnmountOnClose: (preventUnmountOnClose) =>
      store.set("preventUnmountingOnClose", preventUnmountOnClose),
    animateInitialOpen,
    onUnmount() {
      store.update({
        activeTriggerId: null,
        activeTriggerElement: null,
        mounted: false,
        preventUnmountingOnClose: false,
      });
      onUnmount?.();
      store.context.onOpenChangeComplete?.(false);
    },
  });
  useRefWithInit(() => {
    store.set("mounted", mounted);
    return null;
  });
  store.useSyncedValues({
    mounted,
    transitionStatus,
  });
  return {
    forceUnmount,
    transitionStatus,
  };
}
function usePopupInteractionProps(store, statePart) {
  store.useSyncedValues(statePart);
  useIsoLayoutEffect(
    () => () => {
      store.update({
        activeTriggerProps: EMPTY_OBJECT,
        inactiveTriggerProps: EMPTY_OBJECT,
        popupProps: EMPTY_OBJECT,
      });
    },
    [store],
  );
}
function usePopupRootSync(store, open) {
  useIsoLayoutEffect(() => {
    if (!open && store.state.openMethod !== null) {
      store.set("openMethod", null);
    }
  }, [open, store]);
  useIsoLayoutEffect(
    () => () => {
      if (store.state.openMethod !== null) {
        store.set("openMethod", null);
      }
    },
    [store],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
var devElementIdsByMap;
function getDevElementIds(map) {
  devElementIdsByMap ??= new WeakMap();
  let elementIds = devElementIdsByMap.get(map);
  if (!elementIds) {
    elementIds = new WeakMap();
    devElementIdsByMap.set(map, elementIds);
  }
  return elementIds;
}

class PopupTriggerMap {
  idMap = new Map();
  add(id, element) {
    if (true) {
      const elementIds = getDevElementIds(this);
      const existingId = elementIds.get(element);
      if (existingId !== undefined && existingId !== id) {
        throw new Error(
          "Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.",
        );
      }
      const previousElement = this.idMap.get(id);
      if (previousElement !== undefined && previousElement !== element) {
        elementIds.delete(previousElement);
      }
      elementIds.set(element, id);
    }
    this.idMap.set(id, element);
  }
  delete(id) {
    if (true) {
      const element = this.idMap.get(id);
      if (element !== undefined) {
        devElementIdsByMap?.get(this)?.delete(element);
      }
    }
    this.idMap.delete(id);
  }
  hasElement(element) {
    for (const registered of this.idMap.values()) {
      if (registered === element) {
        return true;
      }
    }
    return false;
  }
  hasMatchingElement(predicate) {
    for (const element of this.idMap.values()) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  getById(id) {
    return this.idMap.get(id);
  }
  entries() {
    return this.idMap.entries();
  }
  elements() {
    return this.idMap.values();
  }
  get size() {
    return this.idMap.size;
  }
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/store/useStore.mjs
var import_shim = __toESM(require_shim(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

import * as React61 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/fastHooks.mjs
import * as React60 from "react";

var hooks = [];
var currentInstance;
function getInstance() {
  return currentInstance;
}
function register(hook) {
  hooks.push(hook);
}
function fastComponent(fn) {
  const FastComponent = (props, forwardedRef) => {
    const instance = useRefWithInit(createInstance).current;
    let result;
    try {
      currentInstance = instance;
      for (const hook of hooks) {
        hook.before(instance);
      }
      result = fn(props, forwardedRef);
      for (const hook of hooks) {
        hook.after(instance);
      }
      instance.didInitialize = true;
    } finally {
      currentInstance = undefined;
    }
    return result;
  };
  FastComponent.displayName = fn.displayName || fn.name;
  return FastComponent;
}
function fastComponentRef(fn) {
  return /* @__PURE__ */ React60.forwardRef(fastComponent(fn));
}
function createInstance() {
  return {
    didInitialize: false,
  };
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/store/useStore.mjs
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore
  ? useStoreFast
  : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React61.useCallback(
    () => selector(store.getSnapshot(), a1, a2, a3),
    [store, selector, a1, a2, a3],
  );
  return import_shim.useSyncExternalStore(
    store.subscribe,
    getSelection,
    getSelection,
  );
}
register({
  before(instance) {
    instance.syncIndex = 0;
    if (!instance.didInitialize) {
      instance.syncTick = 1;
      instance.syncHooks = [];
      instance.didChangeStore = true;
      instance.getSnapshot = () => {
        let didChange = false;
        for (let i = 0; i < instance.syncHooks.length; i += 1) {
          const hook = instance.syncHooks[i];
          const value = hook.selector(
            hook.store.state,
            hook.a1,
            hook.a2,
            hook.a3,
          );
          if (!Object.is(hook.value, value)) {
            didChange = true;
            hook.value = value;
          }
        }
        if (didChange) {
          instance.syncTick += 1;
        }
        return instance.syncTick;
      };
    }
  },
  after(instance) {
    if (instance.syncHooks.length > 0) {
      if (instance.didChangeStore) {
        instance.didChangeStore = false;
        instance.subscribe = (onStoreChange) => {
          const stores = new Set();
          for (const hook of instance.syncHooks) {
            stores.add(hook.store);
          }
          const unsubscribes = [];
          for (const store of stores) {
            unsubscribes.push(store.subscribe(onStoreChange));
          }
          return () => {
            for (const unsubscribe of unsubscribes) {
              unsubscribe();
            }
          };
        };
      }
      import_shim.useSyncExternalStore(
        instance.subscribe,
        instance.getSnapshot,
        instance.getSnapshot,
      );
    }
  },
});
function useStoreFast(store, selector, a1, a2, a3) {
  const instance = getInstance();
  if (!instance) {
    return useStoreR19(store, selector, a1, a2, a3);
  }
  const index = instance.syncIndex;
  instance.syncIndex += 1;
  let hook;
  if (!instance.didInitialize) {
    hook = {
      store,
      selector,
      a1,
      a2,
      a3,
      value: selector(store.getSnapshot(), a1, a2, a3),
    };
    instance.syncHooks.push(hook);
  } else {
    hook = instance.syncHooks[index];
    if (
      hook.store !== store ||
      hook.selector !== selector ||
      !Object.is(hook.a1, a1) ||
      !Object.is(hook.a2, a2) ||
      !Object.is(hook.a3, a3)
    ) {
      if (hook.store !== store) {
        instance.didChangeStore = true;
      }
      hook.store = store;
      hook.selector = selector;
      hook.a1 = a1;
      hook.a2 = a2;
      hook.a3 = a3;
      hook.value = selector(store.getSnapshot(), a1, a2, a3);
    }
  }
  return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return import_with_selector.useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
    (state) => selector(state, a1, a2, a3),
  );
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/store/Store.mjs
class Store {
  static create(state) {
    return new this(state);
  }
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
    this.updateTick = 0;
  }
  subscribe = (fn) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };
  getSnapshot = () => {
    return this.state;
  };
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes,
        });
        return;
      }
    }
  }
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value,
      });
    }
  }
  notifyAll() {
    const newState = {
      ...this.state,
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/store/ReactStore.mjs
import * as React62 from "react";

("use client");

class ReactStore extends Store {
  constructor(state, context = {}, selectors) {
    super(state);
    this.context = context;
    this.selectors = selectors;
  }
  useSyncedValue(key, value) {
    React62.useDebugValue(key);
    useIsoLayoutEffect(() => {
      if (this.state[key] !== value) {
        this.set(key, value);
      }
    }, [this, key, value]);
  }
  useSyncedValueWithCleanup(key, value) {
    useIsoLayoutEffect(() => {
      if (this.state[key] !== value) {
        this.set(key, value);
      }
      return () => {
        this.set(key, undefined);
      };
    }, [this, key, value]);
  }
  useSyncedValues(statePart) {
    if (true) {
      React62.useDebugValue(statePart, (p) => Object.keys(p));
      const keys = React62.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (
        keys.length !== nextKeys.length ||
        keys.some((key, index) => key !== nextKeys[index])
      ) {
        console.error(
          "ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.",
        );
      }
    }
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      this.update(statePart);
    }, [this, ...dependencies]);
  }
  useControlledProp(key, controlled) {
    React62.useDebugValue(key);
    const isControlled = controlled !== undefined;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(this.state[key], controlled)) {
        this.setState({
          ...this.state,
          [key]: controlled,
        });
      }
    }, [this, key, controlled, isControlled]);
    if (true) {
      const cache = (this.controlledValues ??= new Map());
      if (!cache.has(key)) {
        cache.set(key, isControlled);
      }
      const previouslyControlled = cache.get(key);
      if (
        previouslyControlled !== undefined &&
        previouslyControlled !== isControlled
      ) {
        console.error(
          `A component is changing the ${previouslyControlled ? "" : "un"}controlled state of ${key.toString()} to be ${previouslyControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`,
        );
      }
    }
  }
  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }
  useState(key, a1, a2, a3) {
    React62.useDebugValue(key);
    return useStore(this, this.selectors[key], a1, a2, a3);
  }
  useContextCallback(key, fn) {
    React62.useDebugValue(key);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key] = stableFunction;
  }
  useStateSetter(key) {
    const ref = React62.useRef(undefined);
    if (ref.current === undefined) {
      ref.current = (value) => {
        this.set(key, value);
      };
    }
    return ref.current;
  }
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
var selectors = {
  open: (state) => state.open,
  transitionStatus: (state) => state.transitionStatus,
  domReferenceElement: (state) => state.domReferenceElement,
  referenceElement: (state) =>
    state.positionReference ?? state.referenceElement,
  floatingElement: (state) => state.floatingElement,
  floatingId: (state) => state.floatingId,
};

class FloatingRootStore extends ReactStore {
  constructor(options) {
    const { syncOnly, nested, onOpenChange, triggerElements, ...initialState } =
      options;
    super(
      {
        ...initialState,
        positionReference: initialState.referenceElement,
        domReferenceElement: initialState.referenceElement,
      },
      {
        onOpenChange,
        dataRef: {
          current: {},
        },
        events: createEventEmitter(),
        nested,
        triggerElements,
      },
      selectors,
    );
    this.syncOnly = syncOnly;
  }
  syncOpenEvent = (newOpen, event) => {
    if (
      !newOpen ||
      !this.state.open ||
      (event != null && isClickLikeEvent(event))
    ) {
      this.context.dataRef.current.openEvent = newOpen ? event : undefined;
    }
  };
  dispatchOpenChange = (newOpen, eventDetails) => {
    this.syncOpenEvent(newOpen, eventDetails.event);
    const details = {
      open: newOpen,
      reason: eventDetails.reason,
      nativeEvent: eventDetails.event,
      nested: this.context.nested,
      triggerElement: eventDetails.trigger,
    };
    this.context.events.emit("openchange", details);
  };
  setOpen = (newOpen, eventDetails) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(newOpen, eventDetails);
      return;
    }
    this.dispatchOpenChange(newOpen, eventDetails);
    this.context.onOpenChange?.(newOpen, eventDetails);
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popups/store.mjs
function createInitialPopupStoreState(
  triggerElements,
  floatingId,
  nested = false,
) {
  return {
    open: false,
    openProp: undefined,
    mounted: false,
    transitionStatus: undefined,
    floatingRootContext: new FloatingRootStore({
      open: false,
      transitionStatus: undefined,
      floatingElement: null,
      referenceElement: null,
      triggerElements,
      floatingId,
      syncOnly: true,
      nested,
      onOpenChange: undefined,
    }),
    floatingId,
    triggerCount: 0,
    preventUnmountingOnClose: false,
    payload: undefined,
    activeTriggerId: null,
    activeTriggerElement: null,
    openedWithoutTrigger: false,
    triggerIdProp: undefined,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: EMPTY_OBJECT,
    inactiveTriggerProps: EMPTY_OBJECT,
    popupProps: EMPTY_OBJECT,
  };
}
var activeTriggerIdSelector = (state) =>
  state.triggerIdProp ?? state.activeTriggerId;
var openSelector = (state) => state.openProp ?? state.open;
var popupIdSelector = (state) => {
  const popupId = state.popupElement?.id ?? state.floatingId;
  return popupId || undefined;
};
function triggerOwnsOpenPopup(state, triggerId) {
  return (
    triggerId !== undefined &&
    openSelector(state) &&
    activeTriggerIdSelector(state) === triggerId
  );
}
function triggerOwnsOpenPopupOrIsOnlyTrigger(state, triggerId) {
  if (triggerOwnsOpenPopup(state, triggerId)) {
    return true;
  }
  return (
    triggerId !== undefined &&
    openSelector(state) &&
    activeTriggerIdSelector(state) == null &&
    !state.openedWithoutTrigger &&
    state.triggerCount === 1
  );
}
var popupStoreSelectors = {
  open: openSelector,
  mounted: (state) => state.mounted,
  transitionStatus: (state) =>
    openSelector(state) && !state.mounted ? "starting" : state.transitionStatus,
  floatingRootContext: (state) => state.floatingRootContext,
  triggerCount: (state) => state.triggerCount,
  preventUnmountingOnClose: (state) => state.preventUnmountingOnClose,
  payload: (state) => state.payload,
  activeTriggerId: activeTriggerIdSelector,
  activeTriggerElement: (state) =>
    state.mounted ? state.activeTriggerElement : null,
  popupId: popupIdSelector,
  isTriggerActive: (state, triggerId) =>
    triggerId !== undefined && activeTriggerIdSelector(state) === triggerId,
  isOpenedByTrigger: (state, triggerId) =>
    triggerOwnsOpenPopup(state, triggerId),
  isMountedByTrigger: (state, triggerId) =>
    triggerId !== undefined &&
    activeTriggerIdSelector(state) === triggerId &&
    state.mounted,
  triggerProps: (state, isActive) =>
    isActive ? state.activeTriggerProps : state.inactiveTriggerProps,
  triggerPopupId: (state, triggerId) =>
    triggerOwnsOpenPopupOrIsOnlyTrigger(state, triggerId)
      ? popupIdSelector(state)
      : undefined,
  popupProps: (state) => state.popupProps,
  popupElement: (state) => state.popupElement,
  positionerElement: (state) => state.positionerElement,
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popups/usePopupHandleStore.mjs
var import_shim2 = __toESM(require_shim(), 1);

import * as React63 from "react";

("use client");
function usePopupHandleStore(handle) {
  const subscribe = React63.useCallback(
    (listener) => {
      if (handle === undefined) {
        return NOOP;
      }
      return handle.subscribeStore(listener);
    },
    [handle],
  );
  const getSnapshot = React63.useCallback(() => {
    return handle === undefined ? undefined : handle.store;
  }, [handle]);
  return import_shim2.useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => handle?.serverStore,
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
("use client");
function useFloatingRootContext(options) {
  const { open = false, onOpenChange, elements = {} } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elements.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      console.error(
        "Cannot pass a virtual element to the `elements.reference` option,",
        "as it must be a real DOM element. Use `context.setPositionReference()`",
        "instead.",
      );
    }
  }
  const store = useRefWithInit(
    () =>
      new FloatingRootStore({
        open,
        transitionStatus: undefined,
        onOpenChange,
        referenceElement: elements.reference ?? null,
        floatingElement: elements.floating ?? null,
        triggerElements: new PopupTriggerMap(),
        floatingId,
        syncOnly: false,
        nested,
      }),
  ).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId,
    };
    if (elements.reference !== undefined) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference)
        ? elements.reference
        : null;
    }
    if (elements.floating !== undefined) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useFocus.mjs
import * as React64 from "react";

("use client");
var isMacSafari = exports_os.mac && exports_engine.webkit;
function useFocus(store, props = {}) {
  const { enabled = true, delay } = props;
  const { events, dataRef } = store.context;
  const blockFocusRef = React64.useRef(false);
  const blockedReferenceRef = React64.useRef(null);
  const keyboardModalityRef = React64.useRef(true);
  const timeout = useTimeout();
  React64.useEffect(() => {
    const domReference = store.select("domReferenceElement");
    if (!enabled) {
      return;
    }
    const win = getWindow(domReference);
    function onBlur() {
      const currentDomReference = store.select("domReferenceElement");
      if (
        !store.select("open") &&
        isHTMLElement(currentDomReference) &&
        currentDomReference ===
          activeElement(ownerDocument(currentDomReference))
      ) {
        blockFocusRef.current = true;
        blockedReferenceRef.current = currentDomReference;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    function onPointerDown() {
      keyboardModalityRef.current = false;
    }
    return mergeCleanups(
      addEventListener(win, "blur", onBlur),
      isMacSafari && addEventListener(win, "keydown", onKeyDown, true),
      isMacSafari && addEventListener(win, "pointerdown", onPointerDown, true),
    );
  }, [store, enabled]);
  React64.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onOpenChangeLocal(details) {
      if (details.reason === triggerPress || details.reason === escapeKey) {
        const referenceElement = store.select("domReferenceElement");
        if (isElement(referenceElement)) {
          blockedReferenceRef.current = referenceElement;
          blockFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    return () => {
      events.off("openchange", onOpenChangeLocal);
    };
  }, [events, enabled, store]);
  const reference = React64.useMemo(() => {
    function resetBlockedFocus() {
      blockFocusRef.current = false;
      blockedReferenceRef.current = null;
    }
    return {
      onMouseLeave() {
        resetBlockedFocus();
      },
      onFocus(event) {
        const focusTarget = event.currentTarget;
        if (blockFocusRef.current) {
          if (blockedReferenceRef.current === focusTarget) {
            return;
          }
          resetBlockedFocus();
        }
        const target = getTarget(event.nativeEvent);
        if (isElement(target)) {
          if (isMacSafari && !event.relatedTarget) {
            if (!keyboardModalityRef.current && !isTypeableElement(target)) {
              return;
            }
          } else if (!matchesFocusVisible(target)) {
            return;
          }
        }
        const movedFromOtherEnabledTrigger = isTargetInsideEnabledTrigger(
          event.relatedTarget,
          store.context.triggerElements,
        );
        const { nativeEvent, currentTarget } = event;
        if ((store.select("open") && movedFromOtherEnabledTrigger) || !delay) {
          store.setOpen(
            true,
            createChangeEventDetails(triggerFocus, nativeEvent, currentTarget),
          );
          return;
        }
        timeout.start(delay, () => {
          if (blockFocusRef.current) {
            return;
          }
          store.setOpen(
            true,
            createChangeEventDetails(triggerFocus, nativeEvent, currentTarget),
          );
        });
      },
      onBlur(event) {
        resetBlockedFocus();
        const relatedTarget = event.relatedTarget;
        const nativeEvent = event.nativeEvent;
        const movedToFocusGuard =
          isElement(relatedTarget) &&
          relatedTarget.hasAttribute(createAttribute("focus-guard")) &&
          relatedTarget.getAttribute("data-type") === "outside";
        timeout.start(0, () => {
          const domReference = store.select("domReferenceElement");
          const activeEl = activeElement(ownerDocument(domReference));
          if (!relatedTarget && activeEl === domReference) {
            return;
          }
          if (
            contains(
              dataRef.current.floatingContext?.refs.floating.current,
              activeEl,
            ) ||
            contains(domReference, activeEl) ||
            movedToFocusGuard
          ) {
            return;
          }
          const nextFocusedElement = relatedTarget ?? activeEl;
          if (
            isTargetInsideEnabledTrigger(
              nextFocusedElement,
              store.context.triggerElements,
            )
          ) {
            return;
          }
          store.setOpen(
            false,
            createChangeEventDetails(triggerFocus, nativeEvent),
          );
        });
      },
    };
  }, [dataRef, delay, store, timeout]);
  return React64.useMemo(
    () =>
      enabled
        ? {
            reference,
            trigger: reference,
          }
        : {},
    [enabled, reference],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverFloatingInteraction.mjs
import * as React65 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverInteractionSharedState.mjs
("use client");
class HoverInteraction {
  pointerType = undefined;
  interactedInside = false;
  handler = undefined;
  blockMouseMove = true;
  performedPointerEventsMutation = false;
  pointerEventsScopeElement = null;
  pointerEventsReferenceElement = null;
  pointerEventsFloatingElement = null;
  restTimeoutPending = false;
  openChangeTimeout = new Timeout();
  restTimeout = new Timeout();
  handleCloseOptions = undefined;
  static create() {
    return new HoverInteraction();
  }
  dispose = () => {
    this.openChangeTimeout.clear();
    this.restTimeout.clear();
  };
  disposeEffect = () => {
    return this.dispose;
  };
}
var pointerEventsMutationOwnerByScopeElement = new WeakMap();
function clearSafePolygonPointerEventsMutation(instance) {
  if (!instance.performedPointerEventsMutation) {
    return;
  }
  const scopeElement = instance.pointerEventsScopeElement;
  if (
    scopeElement &&
    pointerEventsMutationOwnerByScopeElement.get(scopeElement) === instance
  ) {
    instance.pointerEventsScopeElement?.style.removeProperty("pointer-events");
    instance.pointerEventsReferenceElement?.style.removeProperty(
      "pointer-events",
    );
    instance.pointerEventsFloatingElement?.style.removeProperty(
      "pointer-events",
    );
    pointerEventsMutationOwnerByScopeElement.delete(scopeElement);
  }
  instance.performedPointerEventsMutation = false;
  instance.pointerEventsScopeElement = null;
  instance.pointerEventsReferenceElement = null;
  instance.pointerEventsFloatingElement = null;
}
function applySafePolygonPointerEventsMutation(instance, options) {
  const { scopeElement, referenceElement, floatingElement } = options;
  const existingOwner =
    pointerEventsMutationOwnerByScopeElement.get(scopeElement);
  if (existingOwner && existingOwner !== instance) {
    clearSafePolygonPointerEventsMutation(existingOwner);
  }
  clearSafePolygonPointerEventsMutation(instance);
  instance.performedPointerEventsMutation = true;
  instance.pointerEventsScopeElement = scopeElement;
  instance.pointerEventsReferenceElement = referenceElement;
  instance.pointerEventsFloatingElement = floatingElement;
  pointerEventsMutationOwnerByScopeElement.set(scopeElement, instance);
  scopeElement.style.pointerEvents = "none";
  referenceElement.style.pointerEvents = "auto";
  floatingElement.style.pointerEvents = "auto";
}
function useHoverInteractionSharedState(store) {
  const data = store.context.dataRef.current;
  const instance = useRefWithInit(
    () => data.hoverInteractionState ?? HoverInteraction.create(),
  ).current;
  if (!data.hoverInteractionState) {
    data.hoverInteractionState = instance;
  }
  useOnMount(data.hoverInteractionState.disposeEffect);
  return data.hoverInteractionState;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverFloatingInteraction.mjs
("use client");
function useHoverFloatingInteraction(store, parameters = {}) {
  const {
    enabled = true,
    closeDelay: closeDelayProp = 0,
    nodeId: nodeIdProp,
  } = parameters;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const { dataRef } = store.context;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const instance = useHoverInteractionSharedState(store);
  const childClosedTimeout = useTimeout();
  const isClickLikeOpenEvent2 = useStableCallback(() => {
    return isClickLikeOpenEvent(
      dataRef.current.openEvent?.type,
      instance.interactedInside,
    );
  });
  const isHoverOpen = useStableCallback(() => {
    return isHoverOpenEvent(dataRef.current.openEvent?.type);
  });
  const clearPointerEvents = useStableCallback(() => {
    clearSafePolygonPointerEventsMutation(instance);
  });
  useIsoLayoutEffect(() => {
    if (!open) {
      instance.pointerType = undefined;
      instance.restTimeoutPending = false;
      instance.interactedInside = false;
      clearPointerEvents();
    }
  }, [open, instance, clearPointerEvents]);
  React65.useEffect(() => {
    return clearPointerEvents;
  }, [clearPointerEvents]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (
      open &&
      instance.handleCloseOptions?.blockPointerEvents &&
      isHoverOpen() &&
      isElement(domReferenceElement) &&
      floatingElement
    ) {
      const ref = domReferenceElement;
      const floatingEl = floatingElement;
      const doc = ownerDocument(floatingElement);
      const parentFloating = tree?.nodesRef.current.find(
        (node) => node.id === parentId,
      )?.context?.elements.floating;
      if (parentFloating) {
        parentFloating.style.pointerEvents = "";
      }
      const cachedScopeElement =
        instance.pointerEventsScopeElement !== floatingEl
          ? instance.pointerEventsScopeElement
          : null;
      const parentScopeElement =
        parentFloating !== floatingEl ? parentFloating : null;
      const scopeElement =
        instance.handleCloseOptions?.getScope?.() ??
        cachedScopeElement ??
        parentScopeElement ??
        closest(ref, "[data-rootownerid]") ??
        doc.body;
      applySafePolygonPointerEventsMutation(instance, {
        scopeElement,
        referenceElement: ref,
        floatingElement: floatingEl,
      });
      return () => {
        clearPointerEvents();
      };
    }
    return;
  }, [
    enabled,
    open,
    domReferenceElement,
    floatingElement,
    instance,
    isHoverOpen,
    tree,
    parentId,
    clearPointerEvents,
  ]);
  React65.useEffect(() => {
    if (!enabled) {
      return;
    }
    function hasParentChildren() {
      return !!(
        tree &&
        parentId &&
        getNodeChildren(tree.nodesRef.current, parentId).length > 0
      );
    }
    function closeWithDelay(event) {
      const closeDelay = getDelay(
        closeDelayProp,
        "close",
        instance.pointerType,
      );
      const close = () => {
        store.setOpen(false, createChangeEventDetails(triggerHover, event));
        tree?.events.emit("floating.closed", event);
      };
      if (closeDelay) {
        instance.openChangeTimeout.start(closeDelay, close);
      } else {
        instance.openChangeTimeout.clear();
        close();
      }
    }
    function handleInteractInside(event) {
      const target = getTarget(event);
      if (!isInteractiveElement(target)) {
        instance.interactedInside = false;
        return;
      }
      instance.interactedInside = closest(target, "[aria-haspopup]") != null;
    }
    function onFloatingMouseEnter() {
      instance.openChangeTimeout.clear();
      childClosedTimeout.clear();
      tree?.events.off("floating.closed", onNodeClosed);
      clearPointerEvents();
    }
    function onFloatingMouseLeave(event) {
      if (hasParentChildren() && tree) {
        tree.events.on("floating.closed", onNodeClosed);
        return;
      }
      if (
        isTargetInsideEnabledTrigger(
          event.relatedTarget,
          store.context.triggerElements,
        )
      ) {
        return;
      }
      const currentNodeId =
        dataRef.current.floatingContext?.nodeId ?? nodeIdProp;
      const relatedTarget = event.relatedTarget;
      const isMovingIntoDescendantFloating =
        tree &&
        currentNodeId &&
        isElement(relatedTarget) &&
        getNodeChildren(tree.nodesRef.current, currentNodeId, false).some(
          (node) => contains(node.context?.elements.floating, relatedTarget),
        );
      if (isMovingIntoDescendantFloating) {
        return;
      }
      if (instance.handler) {
        instance.handler(event);
        return;
      }
      clearPointerEvents();
      if (isHoverOpen() && !isClickLikeOpenEvent2()) {
        closeWithDelay(event);
      }
    }
    function onNodeClosed(event) {
      if (!tree || !parentId || hasParentChildren()) {
        return;
      }
      childClosedTimeout.start(0, () => {
        tree.events.off("floating.closed", onNodeClosed);
        store.setOpen(false, createChangeEventDetails(triggerHover, event));
        tree.events.emit("floating.closed", event);
      });
    }
    const floating = floatingElement;
    return mergeCleanups(
      floating &&
        addEventListener(floating, "mouseenter", onFloatingMouseEnter),
      floating &&
        addEventListener(floating, "mouseleave", onFloatingMouseLeave),
      floating &&
        addEventListener(floating, "pointerdown", handleInteractInside, true),
      () => {
        tree?.events.off("floating.closed", onNodeClosed);
      },
    );
  }, [
    enabled,
    floatingElement,
    store,
    dataRef,
    closeDelayProp,
    nodeIdProp,
    isHoverOpen,
    isClickLikeOpenEvent2,
    clearPointerEvents,
    instance,
    tree,
    parentId,
    childClosedTimeout,
  ]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverReferenceInteraction.mjs
import * as React66 from "react";
import * as ReactDOM4 from "react-dom";

("use client");
var EMPTY_REF = {
  current: null,
};
function useHoverReferenceInteraction(store, props = {}) {
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true,
    triggerElementRef = EMPTY_REF,
    externalTree,
    isActiveTrigger = true,
    getHandleCloseContext,
    isClosing,
    shouldOpen: shouldOpenProp,
    guardStaleOpen = false,
  } = props;
  const { dataRef, events } = store.context;
  const tree = useFloatingTree(externalTree);
  const instance = useHoverInteractionSharedState(store);
  const isHoverCloseActiveRef = React66.useRef(false);
  const handleCloseRef = useValueAsRef(handleClose);
  const delayRef = useValueAsRef(delay);
  const restMsRef = useValueAsRef(restMs);
  const enabledRef = useValueAsRef(enabled);
  const shouldOpenRef = useValueAsRef(shouldOpenProp);
  const isClosingRef = useValueAsRef(isClosing);
  const isClickLikeOpenEvent2 = useStableCallback(() => {
    return isClickLikeOpenEvent(
      dataRef.current.openEvent?.type,
      instance.interactedInside,
    );
  });
  const checkShouldOpen = useStableCallback(() => {
    return shouldOpenRef.current?.() !== false;
  });
  const isOverInactiveTrigger = useStableCallback(
    (currentDomReference, currentTarget, target) => {
      const allTriggers = store.context.triggerElements;
      if (allTriggers.hasElement(currentTarget)) {
        return (
          !currentDomReference || !contains(currentDomReference, currentTarget)
        );
      }
      if (!isElement(target)) {
        return false;
      }
      const targetElement = target;
      return (
        allTriggers.hasMatchingElement((trigger) =>
          contains(trigger, targetElement),
        ) &&
        (!currentDomReference || !contains(currentDomReference, targetElement))
      );
    },
  );
  const cleanupMouseMoveHandler = useStableCallback(() => {
    if (!instance.handler) {
      return;
    }
    const doc = ownerDocument(store.select("domReferenceElement"));
    doc.removeEventListener("mousemove", instance.handler);
    instance.handler = undefined;
  });
  const clearPointerEvents = useStableCallback(() => {
    clearSafePolygonPointerEventsMutation(instance);
  });
  if (isActiveTrigger) {
    instance.handleCloseOptions = handleClose?.__options;
  }
  React66.useEffect(() => cleanupMouseMoveHandler, [cleanupMouseMoveHandler]);
  React66.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onOpenChangeLocal(details) {
      if (!details.open) {
        isHoverCloseActiveRef.current = details.reason === triggerHover;
        cleanupMouseMoveHandler();
        instance.openChangeTimeout.clear();
        instance.restTimeout.clear();
        instance.blockMouseMove = true;
        instance.restTimeoutPending = false;
      } else {
        isHoverCloseActiveRef.current = false;
      }
    }
    events.on("openchange", onOpenChangeLocal);
    return () => {
      events.off("openchange", onOpenChangeLocal);
    };
  }, [enabled, events, instance, cleanupMouseMoveHandler]);
  React66.useEffect(() => {
    if (!enabled) {
      return;
    }
    function closeWithDelay(event, runElseBranch = true) {
      const closeDelay = getDelay(
        delayRef.current,
        "close",
        instance.pointerType,
      );
      if (closeDelay) {
        instance.openChangeTimeout.start(closeDelay, () => {
          store.setOpen(false, createChangeEventDetails(triggerHover, event));
          tree?.events.emit("floating.closed", event);
        });
      } else if (runElseBranch) {
        instance.openChangeTimeout.clear();
        store.setOpen(false, createChangeEventDetails(triggerHover, event));
        tree?.events.emit("floating.closed", event);
      }
    }
    const trigger =
      triggerElementRef.current ??
      (isActiveTrigger ? store.select("domReferenceElement") : null);
    if (!isElement(trigger)) {
      return;
    }
    function onMouseEnter(event) {
      instance.openChangeTimeout.clear();
      instance.blockMouseMove = false;
      if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
        return;
      }
      const restMsValue = getRestMs(restMsRef.current);
      const openDelay = getDelay(
        delayRef.current,
        "open",
        instance.pointerType,
      );
      const eventTarget = getTarget(event);
      const currentTarget = event.currentTarget ?? null;
      const currentDomReference = store.select("domReferenceElement");
      let triggerNode = currentTarget;
      if (
        isElement(eventTarget) &&
        !store.context.triggerElements.hasElement(eventTarget)
      ) {
        for (const triggerElement of store.context.triggerElements.elements()) {
          if (contains(triggerElement, eventTarget)) {
            triggerNode = triggerElement;
            break;
          }
        }
      }
      if (
        isElement(currentTarget) &&
        isElement(currentDomReference) &&
        !store.context.triggerElements.hasElement(currentTarget) &&
        contains(currentTarget, currentDomReference)
      ) {
        triggerNode = currentDomReference;
      }
      const isOverInactive =
        triggerNode == null
          ? false
          : isOverInactiveTrigger(
              currentDomReference,
              triggerNode,
              eventTarget,
            );
      const isOpen = store.select("open");
      const isInClosingTransition =
        isClosingRef.current?.() ??
        store.select("transitionStatus") === "ending";
      const isHoverCloseTransition =
        !isOpen && isInClosingTransition && isHoverCloseActiveRef.current;
      const isReenteringSameTriggerDuringCloseTransition =
        !isOverInactive &&
        isElement(triggerNode) &&
        isElement(currentDomReference) &&
        contains(currentDomReference, triggerNode) &&
        isHoverCloseTransition;
      const isRestOnlyDelay = restMsValue > 0 && !openDelay;
      const shouldOpenImmediately =
        (isOverInactive && (isOpen || isHoverCloseTransition)) ||
        isReenteringSameTriggerDuringCloseTransition;
      const shouldOpen = !isOpen || isOverInactive;
      if (shouldOpenImmediately) {
        if (checkShouldOpen()) {
          store.setOpen(
            true,
            createChangeEventDetails(triggerHover, event, triggerNode),
          );
        }
        return;
      }
      if (isRestOnlyDelay) {
        return;
      }
      if (openDelay) {
        instance.openChangeTimeout.start(openDelay, () => {
          if (shouldOpen && checkShouldOpen()) {
            store.setOpen(
              true,
              createChangeEventDetails(triggerHover, event, triggerNode),
            );
          }
        });
      } else if (shouldOpen) {
        if (checkShouldOpen()) {
          store.setOpen(
            true,
            createChangeEventDetails(triggerHover, event, triggerNode),
          );
        }
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent2()) {
        clearPointerEvents();
        return;
      }
      cleanupMouseMoveHandler();
      const domReferenceElement = store.select("domReferenceElement");
      const doc = ownerDocument(domReferenceElement);
      instance.restTimeout.clear();
      instance.restTimeoutPending = false;
      const handleCloseContextBase =
        dataRef.current.floatingContext ?? getHandleCloseContext?.();
      if (
        isTargetInsideEnabledTrigger(
          event.relatedTarget,
          store.context.triggerElements,
        )
      ) {
        return;
      }
      if (handleCloseRef.current && handleCloseContextBase) {
        if (!store.select("open")) {
          instance.openChangeTimeout.clear();
        }
        const currentTrigger = triggerElementRef.current;
        instance.handler = handleCloseRef.current({
          ...handleCloseContextBase,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            if (
              enabledRef.current &&
              !isClickLikeOpenEvent2() &&
              currentTrigger === store.select("domReferenceElement")
            ) {
              closeWithDelay(event, true);
            }
          },
        });
        doc.addEventListener("mousemove", instance.handler);
        instance.handler(event);
        return;
      }
      const shouldClose =
        instance.pointerType === "touch"
          ? !contains(store.select("floatingElement"), event.relatedTarget)
          : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    function onMouseOut(event) {
      if (contains(trigger, event.relatedTarget)) {
        return;
      }
      instance.openChangeTimeout.clear();
      instance.restTimeout.clear();
      instance.restTimeoutPending = false;
    }
    const staleOpenGuard = guardStaleOpen
      ? addEventListener(trigger, "mouseout", onMouseOut)
      : undefined;
    if (move) {
      return mergeCleanups(
        addEventListener(trigger, "mousemove", onMouseEnter, {
          once: true,
        }),
        addEventListener(trigger, "mouseenter", onMouseEnter),
        addEventListener(trigger, "mouseleave", onMouseLeave),
        staleOpenGuard,
      );
    }
    return mergeCleanups(
      addEventListener(trigger, "mouseenter", onMouseEnter),
      addEventListener(trigger, "mouseleave", onMouseLeave),
      staleOpenGuard,
    );
  }, [
    cleanupMouseMoveHandler,
    clearPointerEvents,
    dataRef,
    delayRef,
    store,
    enabled,
    handleCloseRef,
    instance,
    isActiveTrigger,
    isOverInactiveTrigger,
    isClickLikeOpenEvent2,
    mouseOnly,
    move,
    restMsRef,
    triggerElementRef,
    tree,
    enabledRef,
    getHandleCloseContext,
    isClosingRef,
    checkShouldOpen,
    guardStaleOpen,
  ]);
  return React66.useMemo(() => {
    if (!enabled) {
      return;
    }
    function setPointerRef(event) {
      instance.pointerType = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const { nativeEvent } = event;
        const trigger = event.currentTarget;
        const currentDomReference = store.select("domReferenceElement");
        const currentOpen = store.select("open");
        const isOverInactive = isOverInactiveTrigger(
          currentDomReference,
          trigger,
          event.target,
        );
        if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
          return;
        }
        if (
          currentOpen &&
          isOverInactive &&
          instance.handleCloseOptions?.blockPointerEvents
        ) {
          const floatingElement = store.select("floatingElement");
          if (floatingElement) {
            const scopeElement =
              instance.handleCloseOptions?.getScope?.() ??
              trigger.ownerDocument.body;
            applySafePolygonPointerEventsMutation(instance, {
              scopeElement,
              referenceElement: trigger,
              floatingElement,
            });
          }
        }
        const restMsValue = getRestMs(restMsRef.current);
        if ((currentOpen && !isOverInactive) || restMsValue === 0) {
          return;
        }
        if (
          !isOverInactive &&
          instance.restTimeoutPending &&
          event.movementX ** 2 + event.movementY ** 2 < 2
        ) {
          return;
        }
        instance.restTimeout.clear();
        function handleMouseMove() {
          instance.restTimeoutPending = false;
          if (isClickLikeOpenEvent2()) {
            return;
          }
          const latestOpen = store.select("open");
          if (
            !instance.blockMouseMove &&
            (!latestOpen || isOverInactive) &&
            checkShouldOpen()
          ) {
            store.setOpen(
              true,
              createChangeEventDetails(triggerHover, nativeEvent, trigger),
            );
          }
        }
        if (instance.pointerType === "touch") {
          ReactDOM4.flushSync(() => {
            handleMouseMove();
          });
        } else if (isOverInactive && currentOpen) {
          handleMouseMove();
        } else {
          instance.restTimeoutPending = true;
          instance.restTimeout.start(restMsValue, handleMouseMove);
        }
      },
    };
  }, [
    enabled,
    instance,
    isClickLikeOpenEvent2,
    isOverInactiveTrigger,
    mouseOnly,
    store,
    restMsRef,
    checkShouldOpen,
  ]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
import * as React67 from "react";

("use client");
function isStationaryWebKitPointer(event) {
  return (
    exports_engine.webkit && event.movementX === 0 && event.movementY === 0
  );
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return (
    doSwitch(orientation, vertical, horizontal) ||
    key === "Enter" ||
    key === " " ||
    key === ""
  );
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, grid) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  if (orientation === "both" || (orientation === "horizontal" && grid)) {
    return key === "Escape";
  }
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(store, props) {
  const {
    listRef,
    activeIndex,
    onNavigate: onNavigateProp = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loopFocus = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = "vertical",
    triggerOrientation = orientation,
    parentOrientation,
    id,
    resetOnPointerLeave = true,
    externalTree,
    nestedReturnFocusRef,
    grid: navigateGrid,
  } = props;
  const isGrid = navigateGrid != null;
  if (true) {
    if (allowEscape) {
      if (!loopFocus) {
        console.warn(
          "`useListNavigation` looping must be enabled to allow escaping.",
        );
      }
      if (!virtual) {
        console.warn("`useListNavigation` must be virtual to allow escaping.");
      }
    }
    if (orientation === "vertical" && isGrid) {
      console.warn(
        "In grid list navigation mode, the `orientation` should",
        'be either "horizontal" or "both".',
      );
    }
  }
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const floatingFocusElement = getFloatingFocusElement(floatingElement);
  const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
  const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree(externalTree);
  const focusItemOnOpenRef = React67.useRef(focusItemOnOpen);
  const indexRef = React67.useRef(selectedIndex ?? -1);
  const keyRef = React67.useRef(null);
  const isPointerModalityRef = React67.useRef(true);
  const onNavigate = useStableCallback((event) => {
    onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
  });
  const previousMountedRef = React67.useRef(!!floatingElement);
  const previousOpenRef = React67.useRef(open);
  const forceSyncFocusRef = React67.useRef(false);
  const forceScrollIntoViewRef = React67.useRef(false);
  const cancelQueuedFocusRef = React67.useRef(null);
  const disabledIndicesRef = useValueAsRef(disabledIndices);
  const latestOpenRef = useValueAsRef(open);
  const selectedIndexRef = useValueAsRef(selectedIndex);
  const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
  const focusFrame = useAnimationFrame();
  const waitForListPopulatedFrame = useAnimationFrame();
  const focusItem = useStableCallback(() => {
    focusFrame.cancel();
    function runFocus(item) {
      if (!virtual) {
        cancelQueuedFocusRef.current = enqueueFocus(item, {
          sync: forceSyncFocusRef.current,
          preventScroll: true,
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    const forceScrollIntoView = forceScrollIntoViewRef.current;
    if (initialItem) {
      runFocus(initialItem);
    }
    const scheduler = forceSyncFocusRef.current
      ? (callback) => callback()
      : (callback) => focusFrame.request(callback);
    scheduler(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) {
        return;
      }
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const shouldScrollIntoView =
        item && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        waitedItem.scrollIntoView?.({
          block: "nearest",
          inline: "nearest",
        });
      }
    });
  });
  useIsoLayoutEffect(() => {
    dataRef.current.orientation = orientation;
  }, [dataRef, orientation]);
  useIsoLayoutEffect(() => {
    if (!open) {
      keyRef.current = null;
    }
    if (!open || focusItemOnOpen !== "auto") {
      focusItemOnOpenRef.current = focusItemOnOpen;
    }
  }, [open, focusItemOnOpen]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (open && floatingElement) {
      indexRef.current = selectedIndex ?? -1;
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate();
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      onNavigate();
    }
  }, [enabled, open, floatingElement, selectedIndex, onNavigate]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    if (!open) {
      forceSyncFocusRef.current = false;
      return;
    }
    if (!floatingElement) {
      return;
    }
    if (activeIndex == null) {
      forceSyncFocusRef.current = false;
      if (selectedIndexRef.current != null) {
        return;
      }
      if (previousMountedRef.current) {
        indexRef.current = -1;
        focusItem();
      }
      if (
        (!previousOpenRef.current || !previousMountedRef.current) &&
        focusItemOnOpenRef.current &&
        (keyRef.current != null ||
          (focusItemOnOpenRef.current === true && keyRef.current == null))
      ) {
        let runs = 0;
        const waitForListPopulated = () => {
          if (listRef.current[0] == null) {
            if (runs < 2) {
              const scheduler = runs
                ? (callback) => waitForListPopulatedFrame.request(callback)
                : queueMicrotask;
              scheduler(waitForListPopulated);
            }
            runs += 1;
          } else {
            indexRef.current =
              keyRef.current == null ||
              isMainOrientationToEndKey(
                keyRef.current,
                triggerOrientation,
                rtl,
              ) ||
              nested
                ? getMinListIndex(listRef)
                : getMaxListIndex(listRef);
            keyRef.current = null;
            onNavigate();
          }
        };
        waitForListPopulated();
      }
    } else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
      indexRef.current = activeIndex;
      focusItem();
      forceScrollIntoViewRef.current = false;
    }
  }, [
    enabled,
    open,
    floatingElement,
    activeIndex,
    selectedIndexRef,
    nested,
    listRef,
    triggerOrientation,
    rtl,
    onNavigate,
    focusItem,
    waitForListPopulatedFrame,
  ]);
  useIsoLayoutEffect(() => {
    if (
      !enabled ||
      floatingElement ||
      !tree ||
      virtual ||
      !previousMountedRef.current
    ) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = nodes.find((node) => node.id === parentId)?.context?.elements
      .floating;
    const activeEl = activeElement(
      ownerDocument(domReferenceElement ?? parent ?? null),
    );
    const treeContainsActiveEl = nodes.some(
      (node) =>
        node.context && contains(node.context.elements.floating, activeEl),
    );
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true,
      });
    }
  }, [enabled, floatingElement, domReferenceElement, tree, parentId, virtual]);
  useIsoLayoutEffect(() => {
    previousOpenRef.current = open;
    previousMountedRef.current = !!floatingElement;
  });
  const hasActiveIndex = activeIndex != null;
  const syncCurrentTarget = useStableCallback((event) => {
    if (!latestOpenRef.current) {
      return;
    }
    const index = listRef.current.indexOf(event.currentTarget);
    if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
      indexRef.current = index;
      onNavigate(event);
    }
  });
  const getParentOrientation = useStableCallback(() => {
    return (
      parentOrientation ??
      tree?.nodesRef.current.find((node) => node.id === parentId)?.context
        ?.dataRef?.current.orientation
    );
  });
  const getMinEnabledIndex = useStableCallback(() => {
    return getMinListIndex(listRef, disabledIndicesRef.current);
  });
  const commonOnKeyDown = useStableCallback((event) => {
    isPointerModalityRef.current = false;
    forceSyncFocusRef.current = true;
    if (event.which === 229) {
      return;
    }
    if (
      !latestOpenRef.current &&
      event.currentTarget === floatingFocusElementRef.current
    ) {
      return;
    }
    if (
      nested &&
      isCrossOrientationCloseKey(event.key, orientation, rtl, isGrid)
    ) {
      if (!isMainOrientationKey(event.key, getParentOrientation())) {
        stopEvent(event);
      }
      store.setOpen(
        false,
        createChangeEventDetails(listNavigation, event.nativeEvent),
      );
      const returnElement =
        nestedReturnFocusRef?.current ?? domReferenceElement;
      if (isHTMLElement(returnElement)) {
        returnElement.focus();
      }
      return;
    }
    if (
      activeIndex != null &&
      activeIndex !== indexRef.current &&
      !isIndexOutOfListBounds(listRef.current, activeIndex)
    ) {
      indexRef.current = activeIndex;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinListIndex(listRef, disabledIndices);
    const maxIndex = getMaxListIndex(listRef, disabledIndices);
    if (!typeableComboboxReference) {
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(event);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(event);
      }
    }
    if (navigateGrid != null) {
      const index = navigateGrid(
        event,
        indexRef.current,
        listRef,
        orientation,
        loopFocus,
        rtl,
        disabledIndices,
        minIndex,
        maxIndex,
      );
      if (index != null && index !== indexRef.current) {
        indexRef.current = index;
        onNavigate(event);
      }
      if (orientation === "both") {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      stopEvent(event);
      const focusedElement = activeElement(event.currentTarget.ownerDocument);
      if (
        open &&
        !virtual &&
        contains(event.currentTarget, focusedElement) &&
        !listRef.current.some(
          (item) => item != null && contains(item, focusedElement),
        )
      ) {
        indexRef.current = isMainOrientationToEndKey(
          event.key,
          orientation,
          rtl,
        )
          ? minIndex
          : maxIndex;
        onNavigate(event);
        if (activeIndex === indexRef.current) {
          focusItem();
        }
        return;
      }
      const { index, wrapped } = getNextListIndex(
        listRef.current,
        currentIndex,
        {
          decrement: !isMainOrientationToEndKey(event.key, orientation, rtl),
          loopFocus,
          allowEscape,
          disabledIndices,
          minIndex,
          maxIndex,
        },
      );
      if (wrapped) {
        forceSyncFocusRef.current = false;
      }
      indexRef.current = index;
      onNavigate(event);
    }
  });
  const item = React67.useMemo(() => {
    const itemProps = {
      onFocus(event) {
        forceSyncFocusRef.current = true;
        syncCurrentTarget(event);
      },
      onClick({ currentTarget }) {
        if (!virtual) {
          currentTarget.focus({
            preventScroll: true,
          });
        }
      },
      onMouseMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        forceSyncFocusRef.current = true;
        forceScrollIntoViewRef.current = false;
        if (focusItemOnHover) {
          syncCurrentTarget(event);
        }
      },
      onPointerLeave(event) {
        if (
          !latestOpenRef.current ||
          !isPointerModalityRef.current ||
          event.pointerType === "touch"
        ) {
          return;
        }
        forceSyncFocusRef.current = true;
        const relatedTarget = event.relatedTarget;
        if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
          return;
        }
        if (!resetOnPointerLeaveRef.current) {
          return;
        }
        cancelQueuedFocusRef.current?.();
        cancelQueuedFocusRef.current = null;
        indexRef.current = -1;
        onNavigate(event);
        if (!virtual) {
          const floatingFocusEl = floatingFocusElementRef.current;
          const activeEl = activeElement(ownerDocument(floatingFocusEl));
          if (floatingFocusEl && contains(floatingFocusEl, activeEl)) {
            floatingFocusEl.focus({
              preventScroll: true,
            });
          }
        }
      },
    };
    return itemProps;
  }, [
    syncCurrentTarget,
    latestOpenRef,
    floatingFocusElementRef,
    focusItemOnHover,
    listRef,
    onNavigate,
    resetOnPointerLeaveRef,
    virtual,
  ]);
  const ariaActiveDescendantProp = React67.useMemo(() => {
    return (
      virtual &&
      open &&
      hasActiveIndex && {
        "aria-activedescendant": `${id}-${activeIndex}`,
      }
    );
  }, [virtual, open, hasActiveIndex, id, activeIndex]);
  const floating = React67.useMemo(() => {
    return {
      ...(!typeableComboboxReference ? ariaActiveDescendantProp : {}),
      onKeyDown(event) {
        if (event.key === "Tab" && event.shiftKey && open && !virtual) {
          const target = getTarget(event.nativeEvent);
          if (target && !contains(floatingFocusElementRef.current, target)) {
            return;
          }
          stopEvent(event);
          const details = createChangeEventDetails(focusOut, event.nativeEvent);
          store.setOpen(false, details);
          const returnElement =
            nestedReturnFocusRef?.current ?? domReferenceElement;
          if (!details.isCanceled && isHTMLElement(returnElement)) {
            returnElement.focus();
          }
          return;
        }
        commonOnKeyDown(event);
      },
      onPointerMove(event) {
        if (isStationaryWebKitPointer(event)) {
          return;
        }
        isPointerModalityRef.current = true;
      },
    };
  }, [
    ariaActiveDescendantProp,
    commonOnKeyDown,
    floatingFocusElementRef,
    typeableComboboxReference,
    store,
    open,
    virtual,
    domReferenceElement,
    nestedReturnFocusRef,
  ]);
  const trigger = React67.useMemo(() => {
    function openOnNavigationKeyDown(event) {
      store.setOpen(
        true,
        createChangeEventDetails(
          listNavigation,
          event.nativeEvent,
          event.currentTarget,
        ),
      );
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = !virtual;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (
        focusItemOnOpen === "auto" &&
        isVirtualPointerEvent(event.nativeEvent)
      ) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      onKeyDown(event) {
        const currentOpen = store.select("open");
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.startsWith("Arrow");
        const isParentCrossOpenKey = isCrossOrientationOpenKey(
          event.key,
          getParentOrientation(),
          rtl,
        );
        const isMainKey = isMainOrientationKey(
          event.key,
          currentOpen ? orientation : triggerOrientation,
        );
        const isNavigationKey =
          (nested ? isParentCrossOpenKey : isMainKey) ||
          event.key === "Enter" ||
          event.key.trim() === "";
        if (
          virtual &&
          currentOpen &&
          (!nested || isTypeableElement(event.currentTarget))
        ) {
          return commonOnKeyDown(event);
        }
        if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
          return;
        }
        if (isNavigationKey) {
          const isParentMainKey = isMainOrientationKey(
            event.key,
            getParentOrientation(),
          );
          keyRef.current = nested && isParentMainKey ? null : event.key;
        }
        if (nested) {
          if (isParentCrossOpenKey) {
            stopEvent(event);
            if (currentOpen) {
              indexRef.current = getMinEnabledIndex();
              onNavigate(event);
              if (virtual) {
                floatingFocusElementRef.current?.focus();
              }
            } else {
              openOnNavigationKeyDown(event);
            }
          }
          return;
        }
        if (isMainKey) {
          if (selectedIndexRef.current != null) {
            indexRef.current = selectedIndexRef.current;
          }
          stopEvent(event);
          if (!currentOpen && openOnArrowKeyDown) {
            openOnNavigationKeyDown(event);
          } else {
            commonOnKeyDown(event);
          }
          if (currentOpen) {
            onNavigate(event);
          }
        }
        return;
      },
      onFocus(event) {
        if (event.target !== event.currentTarget) {
          return;
        }
        if (store.select("open") && !virtual) {
          indexRef.current = -1;
          onNavigate(event);
        }
      },
      onPointerDown: checkVirtualPointer,
      onPointerEnter: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse,
    };
  }, [
    commonOnKeyDown,
    focusItemOnOpen,
    getMinEnabledIndex,
    nested,
    onNavigate,
    store,
    openOnArrowKeyDown,
    orientation,
    triggerOrientation,
    getParentOrientation,
    rtl,
    selectedIndexRef,
    virtual,
    floatingFocusElementRef,
  ]);
  const reference = React67.useMemo(() => {
    return {
      ...ariaActiveDescendantProp,
      ...trigger,
    };
  }, [ariaActiveDescendantProp, trigger]);
  return React67.useMemo(
    () =>
      enabled
        ? {
            reference,
            floating,
            item,
            trigger,
          }
        : {},
    [enabled, reference, floating, trigger, item],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
import * as React68 from "react";

("use client");
function useTypeahead(store, props) {
  const {
    listRef,
    elementsRef,
    activeIndex,
    onMatch: onMatchProp,
    disabledIndices,
    onTyping: onTypingProp,
    enabled = true,
    resetMs = 750,
    selectedIndex = null,
  } = props;
  const onTyping = useStableCallback(onTypingProp);
  const open = store.useState("open");
  const timeout = useTimeout();
  const stringRef = React68.useRef("");
  const prevIndexRef = React68.useRef(selectedIndex ?? activeIndex ?? -1);
  const matchIndexRef = React68.useRef(null);
  const onKeyDown = useStableCallback((event) => {
    function getElement(index) {
      return elementsRef?.current[index];
    }
    function isItemAvailable(index) {
      const element = getElement(index);
      if (
        (element && !isElementVisible(element)) ||
        element?.matches(":disabled")
      ) {
        return false;
      }
      return (
        disabledIndices == null ||
        !isListIndexDisabled(EMPTY_ARRAY, index, disabledIndices)
      );
    }
    function getMatchingIndex(list, string, startIndex = 0) {
      if (list.length === 0) {
        return -1;
      }
      const normalizedStartIndex =
        ((startIndex % list.length) + list.length) % list.length;
      const lowerString = string.toLowerCase();
      for (let offset = 0; offset < list.length; offset += 1) {
        const index = (normalizedStartIndex + offset) % list.length;
        const text = list[index];
        if (
          !text?.toLowerCase().startsWith(lowerString) ||
          !isItemAvailable(index)
        ) {
          continue;
        }
        return index;
      }
      return -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && event.key === " ") {
      stopEvent(event);
      onTyping?.(true);
    }
    if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
      if (
        getMatchingIndex(listContent, stringRef.current) === -1 &&
        event.key !== " "
      ) {
        onTyping?.(false);
      }
    }
    if (
      listContent == null ||
      event.key.length !== 1 ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey
    ) {
      return;
    }
    if (open && event.key !== " ") {
      stopEvent(event);
      onTyping?.(true);
    }
    const isNewSession = stringRef.current === "";
    if (isNewSession) {
      prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
    }
    const allowRapidSuccessionOfFirstLetter = listContent.every(
      (text, index) =>
        text && isItemAvailable(index)
          ? text[0]?.toLowerCase() !== text[1]?.toLowerCase()
          : true,
    );
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    timeout.start(resetMs, () => {
      stringRef.current = "";
      prevIndexRef.current = matchIndexRef.current;
      onTyping?.(false);
    });
    const prevIndex = isNewSession
      ? (selectedIndex ?? activeIndex ?? -1)
      : prevIndexRef.current;
    const startIndex = (prevIndex ?? 0) + 1;
    const index = getMatchingIndex(listContent, stringRef.current, startIndex);
    if (index !== -1) {
      onMatchProp?.(index, event);
      matchIndexRef.current = index;
    } else if (event.key !== " ") {
      stringRef.current = "";
      onTyping?.(false);
    }
  });
  const onBlur = useStableCallback((event) => {
    const next = event.relatedTarget;
    const currentDomReferenceElement = store.select("domReferenceElement");
    const currentFloatingElement = store.select("floatingElement");
    const withinComposite =
      contains(currentDomReferenceElement, next) ||
      contains(currentFloatingElement, next);
    if (withinComposite) {
      return;
    }
    timeout.clear();
    stringRef.current = "";
    prevIndexRef.current = matchIndexRef.current;
    onTyping?.(false);
  });
  useIsoLayoutEffect(() => {
    if (!open && selectedIndex !== null) {
      return;
    }
    timeout.clear();
    matchIndexRef.current = null;
    if (stringRef.current !== "") {
      stringRef.current = "";
      onTyping?.(false);
    }
  }, [open, selectedIndex, timeout, onTyping]);
  const sharedProps = React68.useMemo(
    () => ({
      onKeyDown,
      onBlur,
    }),
    [onKeyDown, onBlur],
  );
  return React68.useMemo(
    () =>
      enabled
        ? {
            reference: sharedProps,
            floating: sharedProps,
          }
        : {},
    [enabled, sharedProps],
  );
}
// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/safePolygon.mjs
var CURSOR_SPEED_THRESHOLD = 0.1;
var CURSOR_SPEED_THRESHOLD_SQUARED =
  CURSOR_SPEED_THRESHOLD * CURSOR_SPEED_THRESHOLD;
var POLYGON_BUFFER = 0.5;
function hasIntersectingEdge(pointX, pointY, xi, yi, xj, yj) {
  return (
    yi >= pointY !== yj >= pointY &&
    pointX <= ((xj - xi) * (pointY - yi)) / (yj - yi) + xi
  );
}
function isPointInQuadrilateral(
  pointX,
  pointY,
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  x4,
  y4,
) {
  let isInsideValue = false;
  if (hasIntersectingEdge(pointX, pointY, x1, y1, x2, y2)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x2, y2, x3, y3)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x3, y3, x4, y4)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x4, y4, x1, y1)) {
    isInsideValue = !isInsideValue;
  }
  return isInsideValue;
}
function isInsideRect(pointX, pointY, rect) {
  return (
    pointX >= rect.x &&
    pointX <= rect.x + rect.width &&
    pointY >= rect.y &&
    pointY <= rect.y + rect.height
  );
}
function isInsideAxisAlignedRect(pointX, pointY, x1, y1, x2, y2) {
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);
  return pointX >= minX && pointX <= maxX && pointY >= minY && pointY <= maxY;
}
function safePolygon(options = {}) {
  const { blockPointerEvents = false } = options;
  const timeout = new Timeout();
  const fn = ({ x, y, placement, elements, onClose, nodeId, tree }) => {
    const side = placement?.split("-")[0];
    let hasLanded = false;
    let lastX = null;
    let lastY = null;
    let lastCursorTime =
      typeof performance !== "undefined" ? performance.now() : 0;
    function isCursorMovingSlowly(nextX, nextY) {
      const currentTime = performance.now();
      const elapsedTime = currentTime - lastCursorTime;
      if (lastX === null || lastY === null || elapsedTime === 0) {
        lastX = nextX;
        lastY = nextY;
        lastCursorTime = currentTime;
        return false;
      }
      const deltaX = nextX - lastX;
      const deltaY = nextY - lastY;
      const distanceSquared = deltaX * deltaX + deltaY * deltaY;
      const thresholdSquared =
        elapsedTime * elapsedTime * CURSOR_SPEED_THRESHOLD_SQUARED;
      lastX = nextX;
      lastY = nextY;
      lastCursorTime = currentTime;
      return distanceSquared < thresholdSquared;
    }
    function close() {
      timeout.clear();
      onClose();
    }
    return function onMouseMove(event) {
      timeout.clear();
      const domReference = elements.domReference;
      const floating = elements.floating;
      if (
        !domReference ||
        !floating ||
        side == null ||
        x == null ||
        y == null
      ) {
        return;
      }
      const { clientX, clientY } = event;
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(floating, target);
      const isOverReferenceEl = contains(domReference, target);
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
        if (!isLeave) {
          hasLanded = true;
          return;
        }
      }
      if (
        isLeave &&
        isElement(event.relatedTarget) &&
        contains(floating, event.relatedTarget)
      ) {
        return;
      }
      function hasOpenChildNode() {
        return Boolean(
          tree && getNodeChildren(tree.nodesRef.current, nodeId).length > 0,
        );
      }
      function closeIfNoOpenChild() {
        if (!hasOpenChildNode()) {
          close();
        }
      }
      if (hasOpenChildNode()) {
        return;
      }
      const refRect = domReference.getBoundingClientRect();
      const rect = floating.getBoundingClientRect();
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (
        (side === "top" && y >= refRect.bottom - 1) ||
        (side === "bottom" && y <= refRect.top + 1) ||
        (side === "left" && x >= refRect.right - 1) ||
        (side === "right" && x <= refRect.left + 1)
      ) {
        closeIfNoOpenChild();
        return;
      }
      let isInsideTroughRect = false;
      switch (side) {
        case "top":
          isInsideTroughRect = isInsideAxisAlignedRect(
            clientX,
            clientY,
            left,
            refRect.top + 1,
            right,
            rect.bottom - 1,
          );
          break;
        case "bottom":
          isInsideTroughRect = isInsideAxisAlignedRect(
            clientX,
            clientY,
            left,
            rect.top + 1,
            right,
            refRect.bottom - 1,
          );
          break;
        case "left":
          isInsideTroughRect = isInsideAxisAlignedRect(
            clientX,
            clientY,
            rect.right - 1,
            bottom,
            refRect.left + 1,
            top,
          );
          break;
        case "right":
          isInsideTroughRect = isInsideAxisAlignedRect(
            clientX,
            clientY,
            refRect.right - 1,
            bottom,
            rect.left + 1,
            top,
          );
          break;
        default:
      }
      if (isInsideTroughRect) {
        return;
      }
      if (hasLanded && !isInsideRect(clientX, clientY, refRect)) {
        closeIfNoOpenChild();
        return;
      }
      if (!isLeave && isCursorMovingSlowly(clientX, clientY)) {
        closeIfNoOpenChild();
        return;
      }
      let isInsidePolygon = false;
      switch (side) {
        case "top": {
          const cursorXOffset = isFloatingWider
            ? POLYGON_BUFFER / 2
            : POLYGON_BUFFER * 4;
          const cursorPointOneX = isFloatingWider
            ? x + cursorXOffset
            : cursorLeaveFromRight
              ? x + cursorXOffset
              : x - cursorXOffset;
          const cursorPointTwoX = isFloatingWider
            ? x - cursorXOffset
            : cursorLeaveFromRight
              ? x + cursorXOffset
              : x - cursorXOffset;
          const cursorPointY = y + POLYGON_BUFFER + 1;
          const commonYLeft = cursorLeaveFromRight
            ? rect.bottom - POLYGON_BUFFER
            : isFloatingWider
              ? rect.bottom - POLYGON_BUFFER
              : rect.top;
          const commonYRight = cursorLeaveFromRight
            ? isFloatingWider
              ? rect.bottom - POLYGON_BUFFER
              : rect.top
            : rect.bottom - POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(
            clientX,
            clientY,
            cursorPointOneX,
            cursorPointY,
            cursorPointTwoX,
            cursorPointY,
            rect.left,
            commonYLeft,
            rect.right,
            commonYRight,
          );
          break;
        }
        case "bottom": {
          const cursorXOffset = isFloatingWider
            ? POLYGON_BUFFER / 2
            : POLYGON_BUFFER * 4;
          const cursorPointOneX = isFloatingWider
            ? x + cursorXOffset
            : cursorLeaveFromRight
              ? x + cursorXOffset
              : x - cursorXOffset;
          const cursorPointTwoX = isFloatingWider
            ? x - cursorXOffset
            : cursorLeaveFromRight
              ? x + cursorXOffset
              : x - cursorXOffset;
          const cursorPointY = y - POLYGON_BUFFER;
          const commonYLeft = cursorLeaveFromRight
            ? rect.top + POLYGON_BUFFER
            : isFloatingWider
              ? rect.top + POLYGON_BUFFER
              : rect.bottom;
          const commonYRight = cursorLeaveFromRight
            ? isFloatingWider
              ? rect.top + POLYGON_BUFFER
              : rect.bottom
            : rect.top + POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(
            clientX,
            clientY,
            cursorPointOneX,
            cursorPointY,
            cursorPointTwoX,
            cursorPointY,
            rect.left,
            commonYLeft,
            rect.right,
            commonYRight,
          );
          break;
        }
        case "left": {
          const cursorYOffset = isFloatingTaller
            ? POLYGON_BUFFER / 2
            : POLYGON_BUFFER * 4;
          const cursorPointOneY = isFloatingTaller
            ? y + cursorYOffset
            : cursorLeaveFromBottom
              ? y + cursorYOffset
              : y - cursorYOffset;
          const cursorPointTwoY = isFloatingTaller
            ? y - cursorYOffset
            : cursorLeaveFromBottom
              ? y + cursorYOffset
              : y - cursorYOffset;
          const cursorPointX = x + POLYGON_BUFFER + 1;
          const commonXTop = cursorLeaveFromBottom
            ? rect.right - POLYGON_BUFFER
            : isFloatingTaller
              ? rect.right - POLYGON_BUFFER
              : rect.left;
          const commonXBottom = cursorLeaveFromBottom
            ? isFloatingTaller
              ? rect.right - POLYGON_BUFFER
              : rect.left
            : rect.right - POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(
            clientX,
            clientY,
            commonXTop,
            rect.top,
            commonXBottom,
            rect.bottom,
            cursorPointX,
            cursorPointOneY,
            cursorPointX,
            cursorPointTwoY,
          );
          break;
        }
        case "right": {
          const cursorYOffset = isFloatingTaller
            ? POLYGON_BUFFER / 2
            : POLYGON_BUFFER * 4;
          const cursorPointOneY = isFloatingTaller
            ? y + cursorYOffset
            : cursorLeaveFromBottom
              ? y + cursorYOffset
              : y - cursorYOffset;
          const cursorPointTwoY = isFloatingTaller
            ? y - cursorYOffset
            : cursorLeaveFromBottom
              ? y + cursorYOffset
              : y - cursorYOffset;
          const cursorPointX = x - POLYGON_BUFFER;
          const commonXTop = cursorLeaveFromBottom
            ? rect.left + POLYGON_BUFFER
            : isFloatingTaller
              ? rect.left + POLYGON_BUFFER
              : rect.right;
          const commonXBottom = cursorLeaveFromBottom
            ? isFloatingTaller
              ? rect.left + POLYGON_BUFFER
              : rect.right
            : rect.left + POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(
            clientX,
            clientY,
            cursorPointX,
            cursorPointOneY,
            cursorPointX,
            cursorPointTwoY,
            commonXTop,
            rect.top,
            commonXBottom,
            rect.bottom,
          );
          break;
        }
        default:
      }
      if (!isInsidePolygon) {
        closeIfNoOpenChild();
      } else if (!hasLanded) {
        timeout.start(40, closeIfNoOpenChild);
      }
      return;
    };
  };
  fn.__options = {
    ...options,
    blockPointerEvents,
  };
  return fn;
}
// ../../node_modules/.bun/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  const { reference, floating } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height,
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height,
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY,
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY,
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y,
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] +=
      commonAlign *
      (alignment === "end" ? 1 : -1) *
      (rtl && isVertical ? -1 : 1);
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === undefined) {
    options = {};
  }
  const { x, y, platform, rects, elements, strategy } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0,
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(
    await platform.getClippingRect({
      element: (
        (_await$platform$isEle = await (platform.isElement == null
          ? undefined
          : platform.isElement(element))) != null
          ? _await$platform$isEle
          : true
      )
        ? element
        : element.contextElement ||
          (await (platform.getDocumentElement == null
            ? undefined
            : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy,
    }),
  );
  const rect =
    elementContext === "floating"
      ? {
          x,
          y,
          width: rects.floating.width,
          height: rects.floating.height,
        }
      : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null
    ? undefined
    : platform.getOffsetParent(elements.floating));
  const offsetScale = ((await (platform.isElement == null
    ? undefined
    : platform.isElement(offsetParent))) &&
    (await (platform.getScale == null
      ? undefined
      : platform.getScale(offsetParent)))) || {
    x: 1,
    y: 1,
  };
  const elementClientRect = rectToClientRect(
    platform.convertOffsetParentRelativeRectToViewportRelativeRect
      ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements,
          rect,
          offsetParent,
          strategy,
        })
      : rect,
  );
  return {
    top:
      (clippingClientRect.top - elementClientRect.top + paddingObject.top) /
      offsetScale.y,
    bottom:
      (elementClientRect.bottom -
        clippingClientRect.bottom +
        paddingObject.bottom) /
      offsetScale.y,
    left:
      (clippingClientRect.left - elementClientRect.left + paddingObject.left) /
      offsetScale.x,
    right:
      (elementClientRect.right -
        clippingClientRect.right +
        paddingObject.right) /
      offsetScale.x,
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform,
  } = config;
  const platformWithDetectOverflow = platform.detectOverflow
    ? platform
    : {
        ...platform,
        detectOverflow,
      };
  const rtl = await (platform.isRTL == null
    ? undefined
    : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy,
  });
  let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const { name, fn } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset,
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating,
      },
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data,
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects =
            reset.rects === true
              ? await platform.getElementRects({
                  reference,
                  floating,
                  strategy,
                })
              : reset.rects;
        }
        ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData,
  };
};
var flip = (options) => {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements,
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if (
        (_middlewareData$arrow = middlewareData.arrow) != null &&
        _middlewareData$arrow.alignmentOffset
      ) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null
        ? undefined
        : platform.isRTL(elements.floating));
      const fallbackPlacements =
        specifiedFallbackPlacements ||
        (isBasePlacement || !flipAlignment
          ? [getOppositePlacement(initialPlacement)]
          : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(
          ...getOppositeAxisPlacements(
            initialPlacement,
            flipAlignment,
            fallbackAxisSideDirection,
            rtl,
          ),
        );
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform.detectOverflow(
        state,
        detectOverflowOptions,
      );
      const overflows = [];
      let overflowsData =
        ((_middlewareData$flip = middlewareData.flip) == null
          ? undefined
          : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [
        ...overflowsData,
        {
          placement,
          overflows,
        },
      ];
      if (!overflows.every((side) => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex =
          (((_middlewareData$flip2 = middlewareData.flip) == null
            ? undefined
            : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow =
            checkCrossAxis === "alignment"
              ? initialSideAxis !== getSideAxis(nextPlacement)
              : false;
          if (
            !ignoreCrossAxisOverflow ||
            overflowsData.every((d) =>
              getSideAxis(d.placement) === initialSideAxis
                ? d.overflows[0] > 0
                : true,
            )
          ) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData,
              },
              reset: {
                placement: nextPlacement,
              },
            };
          }
        }
        let resetPlacement =
          (_overflowsData$filter = overflowsData
            .filter((d) => d.overflows[0] <= 0)
            .sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null
            ? undefined
            : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement =
                (_overflowsData$filter2 = overflowsData
                  .filter((d) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d.placement);
                      return (
                        currentSideAxis === initialSideAxis ||
                        currentSideAxis === "y"
                      );
                    }
                    return true;
                  })
                  .map((d) => [
                    d.placement,
                    d.overflows
                      .filter((overflow) => overflow > 0)
                      .reduce((acc, overflow) => acc + overflow, 0),
                  ])
                  .sort((a, b) => a[1] - b[1])[0]) == null
                  ? undefined
                  : _overflowsData$filter2[0];
              if (placement) {
                resetPlacement = placement;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement,
            },
          };
        }
      }
      return {};
    },
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const { placement, platform, elements } = state;
  const rtl = await (platform.isRTL == null
    ? undefined
    : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let { mainAxis, crossAxis, alignmentAxis } =
    typeof rawValue === "number"
      ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null,
        }
      : {
          mainAxis: rawValue.mainAxis || 0,
          crossAxis: rawValue.crossAxis || 0,
          alignmentAxis: rawValue.alignmentAxis,
        };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical
    ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti,
      }
    : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti,
      };
}
var offset = (options) => {
  if (options === undefined) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const { x, y, placement, middlewareData } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (
        placement ===
          ((_middlewareData$offse = middlewareData.offset) == null
            ? undefined
            : _middlewareData$offse.placement) &&
        (_middlewareData$arrow = middlewareData.arrow) != null &&
        _middlewareData$arrow.alignmentOffset
      ) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement,
        },
      };
    },
  };
};
var shift = (options) => {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const { x, y, placement, platform } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            const { x, y } = _ref;
            return {
              x,
              y,
            };
          },
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y,
      };
      const overflow = await platform.detectOverflow(
        state,
        detectOverflowOptions,
      );
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) =>
        clamp(
          coord + overflow[axis === "y" ? "top" : "left"],
          coord,
          coord - overflow[axis === "y" ? "bottom" : "right"],
        );
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord,
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis,
          },
        },
      };
    },
  };
};
var limitShift = (options) => {
  if (options === undefined) {
    options = {};
  }
  return {
    options,
    fn(state) {
      var _rawOffset$mainAxis, _rawOffset$crossAxis;
      const { x, y, placement, rects, middlewareData } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
      } = evaluate(options, state);
      const coords = {
        x,
        y,
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset =
        typeof rawOffset === "number"
          ? {
              mainAxis: rawOffset,
              crossAxis: 0,
            }
          : {
              mainAxis:
                (_rawOffset$mainAxis = rawOffset.mainAxis) != null
                  ? _rawOffset$mainAxis
                  : 0,
              crossAxis:
                (_rawOffset$crossAxis = rawOffset.crossAxis) != null
                  ? _rawOffset$crossAxis
                  : 0,
            };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin =
          rects.reference[mainAxis] -
          rects.floating[len] +
          computedOffset.mainAxis;
        const limitMax =
          rects.reference[mainAxis] +
          rects.reference[len] -
          computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin =
          rects.reference[crossAxis] -
          rects.floating[len] +
          (isOriginSide
            ? ((_middlewareData$offse = middlewareData.offset) == null
                ? undefined
                : _middlewareData$offse[crossAxis]) || 0
            : 0) +
          (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax =
          rects.reference[crossAxis] +
          rects.reference[len] +
          (isOriginSide
            ? 0
            : ((_middlewareData$offse2 = middlewareData.offset) == null
                ? undefined
                : _middlewareData$offse2[crossAxis]) || 0) -
          (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord,
      };
    },
  };
};
var size = (options) => {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const { placement, rects, platform, elements } = state;
      const { apply = () => {}, ...detectOverflowOptions } = evaluate(
        options,
        state,
      );
      const overflow = await platform.detectOverflow(
        state,
        detectOverflowOptions,
      );
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const { width, height } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide =
          alignment ===
          ((await (platform.isRTL == null
            ? undefined
            : platform.isRTL(elements.floating)))
            ? "start"
            : "end")
            ? "left"
            : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(
        height - overflow[heightSide],
        maximumClippingHeight,
      );
      const overflowAvailableWidth = min(
        width - overflow[widthSide],
        maximumClippingWidth,
      );
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight,
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true,
          },
        };
      }
      return {};
    },
  };
};

// ../../node_modules/.bun/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback =
    round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback,
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const { width, height, $ } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y,
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop,
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  return (
    !!floatingOffsetParent &&
    isFixed &&
    floatingOffsetParent === getWindow(element)
  );
}
function getBoundingClientRect(
  element,
  includeScale,
  isFixedStrategy,
  offsetParent,
) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(
    domElement,
    isFixedStrategy,
    offsetParent,
  )
    ? getVisualOffsets(domElement)
    : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement(offsetParent)
      ? getWindow(offsetParent)
      : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left =
        iframeRect.left +
        (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) *
          iframeScale.x;
      const top =
        iframeRect.top +
        (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y,
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x =
    htmlRect.left +
    scroll.scrollLeft -
    getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y,
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  const { elements, rect, offsetParent, strategy } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || (topLayer && isFixed)) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isFixed) {
    if (
      getNodeName(offsetParent) !== "body" ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset =
    documentElement && !isOffsetParentAnElement && !isFixed
      ? getHTMLOffset(documentElement, scroll)
      : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x:
      rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y,
  };
}
function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(
    html.scrollWidth,
    html.clientWidth,
    body.scrollWidth,
    body.clientWidth,
  );
  const height = max(
    html.scrollHeight,
    html.clientHeight,
    body.scrollHeight,
    body.clientHeight,
  );
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y,
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === undefined) {
    rootBoundary = "viewport";
  }
  const isLayoutViewport = rootBoundary === "layoutViewport";
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline =
      doc.compatMode === "CSS1Compat"
        ? parseFloat(bodyStyles.marginLeft) +
            parseFloat(bodyStyles.marginRight) || 0
        : 0;
    const reservedWidth = Math.abs(
      html.clientWidth - body.clientWidth - bodyMarginInline,
    );
    const gutter =
      getComputedStyle(html).scrollbarGutter === "stable both-edges"
        ? reservedWidth / 2
        : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height,
    x,
    y,
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y,
  };
}
function getClientRectFromClippingAncestor(
  element,
  clippingAncestor,
  strategy,
) {
  let rect;
  if (
    clippingAncestor === "viewport" ||
    clippingAncestor === "layoutViewport"
  ) {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height,
    };
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(
    (el) => isElement(el) && getNodeName(el) !== "body",
  );
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    const lastPosition = lastKeptComputedStyle
      ? lastKeptComputedStyle.position
      : elementIsFixed
        ? "fixed"
        : "";
    const shouldDropCurrentNode =
      !currentNodeIsContaining &&
      (lastPosition === "fixed" ||
        (lastPosition === "absolute" && computedStyle.position === "static"));
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  const { element, boundary, rootBoundary, strategy } = _ref;
  const elementClippingAncestors =
    boundary === "clippingAncestors"
      ? isTopLayer(element)
        ? []
        : getClippingElementAncestors(element, this._c)
      : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(
    element,
    clippingAncestors[0],
    strategy,
  );
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(
      element,
      clippingAncestors[i],
      strategy,
    );
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top,
  };
}
function getDimensions(element) {
  const { width, height } = getCssDimensions(element);
  return {
    width,
    height,
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (
      getNodeName(offsetParent) !== "body" ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(
        offsetParent,
        true,
        isFixed,
        offsetParent,
      );
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset =
    documentElement && !isOffsetParentAnElement && !isFixed
      ? getHTMLOffset(documentElement, scroll)
      : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height,
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (
    !isHTMLElement(element) ||
    getComputedStyle2(element).position === "fixed"
  ) {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    isStaticPositioned(offsetParent)
  ) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (
    offsetParent &&
    isLastTraversableNode(offsetParent) &&
    isStaticPositioned(offsetParent) &&
    !isContainingBlock(offsetParent)
  ) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(
      data.reference,
      await getOffsetParentFn(data.floating),
      data.strategy,
    ),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height,
    },
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL,
};
function rectsAreEqual(a, b) {
  return (
    a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
  );
}
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === undefined) {
      skip = false;
    }
    if (threshold === undefined) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const { left, top, width, height } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin =
      -insetTop +
      "px " +
      -insetRight +
      "px " +
      -insetBottom +
      "px " +
      -insetLeft +
      "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1,
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (
        !rectsAreEqual(
          elementRectForRootMargin,
          element.getBoundingClientRect(),
        )
      ) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 0.0000001);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        root: root.ownerDocument,
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener("resize", handleResize);
  refresh(true);
  return () => {
    win.removeEventListener("resize", handleResize);
    cleanup();
  };
}
function autoUpdate(reference, floating, update, options) {
  if (options === undefined) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false,
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors =
    ancestorScroll || ancestorResize
      ? [
          ...(referenceEl ? getOverflowAncestors(referenceEl) : []),
          ...(floating ? getOverflowAncestors(floating) : []),
        ]
      : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update);
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo =
    referenceEl && layoutShift
      ? observeMove(referenceEl, update, ancestorResize)
      : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      const [firstEntry] = _ref;
      if (
        firstEntry &&
        firstEntry.target === referenceEl &&
        resizeObserver &&
        floating
      ) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null ||
            _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null ||
      _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = new Map();
  const mergedOptions = options != null ? options : {};
  const platformWithCache = {
    ...platform2,
    ...mergedOptions.platform,
    _c: cache,
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache,
  });
};

// ../../node_modules/.bun/@floating-ui+react-dom@2.1.9+ab9c01e4ccdf52df/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React69 from "react";
import { useLayoutEffect as useLayoutEffect2 } from "react";
import * as ReactDOM5 from "react-dom";

var isClient = typeof document !== "undefined";
var noop2 = function noop() {};
var index = isClient ? useLayoutEffect2 : noop2;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.hasOwn(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React69.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === undefined) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform,
    elements: { reference: externalReference, floating: externalFloating } = {},
    transform = true,
    whileElementsMounted,
    open,
  } = options;
  const [data, setData] = React69.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false,
  });
  const [latestMiddleware, setLatestMiddleware] = React69.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React69.useState(null);
  const [_floating, _setFloating] = React69.useState(null);
  const setReference = React69.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React69.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React69.useRef(null);
  const floatingRef = React69.useRef(null);
  const dataRef = React69.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const openRef = useLatestRef(open);
  const update = React69.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware,
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then(
      (data) => {
        const fullData = {
          ...data,
          isPositioned: openRef.current !== false,
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          ReactDOM5.flushSync(() => {
            setData(fullData);
          });
        }
      },
    );
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data) => ({
        ...data,
        isPositioned: false,
      }));
    }
  }, [open]);
  const isMountedRef = React69.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [
    referenceEl,
    floatingEl,
    update,
    whileElementsMountedRef,
    hasWhileElementsMounted,
  ]);
  const refs = React69.useMemo(
    () => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating,
    }),
    [setReference, setFloating],
  );
  const elements = React69.useMemo(
    () => ({
      reference: referenceEl,
      floating: floatingEl,
    }),
    [referenceEl, floatingEl],
  );
  const floatingStyles = React69.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0,
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: "transform",
        }),
      };
    }
    return {
      position: strategy,
      left: x,
      top: y,
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React69.useMemo(
    () => ({
      ...data,
      update,
      refs,
      elements,
      floatingStyles,
    }),
    [data, update, refs, elements, floatingStyles],
  );
}
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps],
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps],
  };
};
var limitShift3 = (options, deps) => {
  const result = limitShift2(options);
  return {
    fn: result.fn,
    options: [options, deps],
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps],
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps],
  };
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/portal/DialogPortalContext.mjs
import * as React70 from "react";

("use client");
var DialogPortalContext = /* @__PURE__ */ React70.createContext(undefined);
if (true) DialogPortalContext.displayName = "DialogPortalContext";
function useDialogPortalContext() {
  const value = React70.useContext(DialogPortalContext);
  if (value === undefined) {
    throw new Error("Base UI: <Dialog.Portal> is missing.");
  }
  return value;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/popup/DialogPopupCssVars.mjs
var nestedDialogs = "--nested-dialogs";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/popup/DialogPopupDataAttributes.mjs
var open2 = open;
var closed2 = closed;
var startingStyle3 = startingStyle2;
var endingStyle3 = endingStyle2;
var nestedDialogOpen = "data-nested-dialog-open";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/utils/stateAttributesMapping.mjs
var dialogStateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping,
  nestedDialogOpen(value) {
    return value
      ? {
          [nestedDialogOpen]: "",
        }
      : null;
  },
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
import { jsx as _jsx12 } from "react/jsx-runtime";

("use client");
var DialogPopup = /* @__PURE__ */ React71.forwardRef(
  function DialogPopup(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      finalFocus,
      initialFocus,
      ...elementProps
    } = componentProps;
    const store = useDialogRootContext();
    const descriptionElementId = store.useState("descriptionElementId");
    const disablePointerDismissal = store.useState("disablePointerDismissal");
    const floatingRootContext = store.useState("floatingRootContext");
    const rootPopupProps = store.useState("popupProps");
    const modal = store.useState("modal");
    const mounted = store.useState("mounted");
    const nested = store.useState("nested");
    const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
    const open = store.useState("open");
    const openMethod = store.useState("openMethod");
    const titleElementId = store.useState("titleElementId");
    const transitionStatus = store.useState("transitionStatus");
    const role = store.useState("role");
    const floatingId = floatingRootContext.useState("floatingId");
    useDialogPortalContext();
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      },
    });
    const resolvedInitialFocus =
      initialFocus === undefined
        ? createDefaultInitialFocus(store.context.popupRef)
        : initialFocus;
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const setPopupElement = store.useStateSetter("popupElement");
    const state = {
      open,
      nested,
      transitionStatus,
      nestedDialogOpen,
    };
    const element = useRenderElement("div", componentProps, {
      state,
      props: [
        rootPopupProps,
        {
          id: floatingId,
          "aria-labelledby": titleElementId,
          "aria-describedby": descriptionElementId,
          role,
          ...FOCUSABLE_POPUP_PROPS,
          hidden: !mounted,
          onKeyDown(event) {
            if (COMPOSITE_KEYS.has(event.key)) {
              event.stopPropagation();
            }
          },
          style: {
            [nestedDialogs]: nestedOpenDialogCount,
          },
        },
        elementProps,
      ],
      ref: [forwardedRef, store.context.popupRef, setPopupElement],
      stateAttributesMapping: dialogStateAttributesMapping,
    });
    return /* @__PURE__ */ _jsx12(FloatingFocusManager, {
      context: floatingRootContext,
      openInteractionType: openMethod,
      disabled: !mounted,
      closeOnFocusOut: !disablePointerDismissal,
      initialFocus: resolvedInitialFocus,
      returnFocus: finalFocus,
      modal: modal !== false,
      restoreFocus: "popup",
      children: element,
    });
  },
);
if (true) DialogPopup.displayName = "DialogPopup";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
import * as React73 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : undefined;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/InternalBackdrop.mjs
import * as React72 from "react";
import { jsx as _jsx13 } from "react/jsx-runtime";

var InternalBackdrop = /* @__PURE__ */ React72.forwardRef(
  function InternalBackdrop(props, ref) {
    const { cutout, ...otherProps } = props;
    let clipPath;
    if (cutout) {
      const rect = cutout.getBoundingClientRect();
      clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
    }
    return /* @__PURE__ */ _jsx13("div", {
      ref,
      role: "presentation",
      "data-base-ui-inert": "",
      ...otherProps,
      style: {
        position: "fixed",
        inset: 0,
        userSelect: "none",
        WebkitUserSelect: "none",
        clipPath,
      },
    });
  },
);
if (true) InternalBackdrop.displayName = "InternalBackdrop";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
import { jsx as _jsx14, jsxs as _jsxs6 } from "react/jsx-runtime";

("use client");
var DialogPortal = /* @__PURE__ */ React73.forwardRef(
  function DialogPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const store = useDialogRootContext();
    const mounted = store.useState("mounted");
    const modal = store.useState("modal");
    const open = store.useState("open");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ _jsx14(DialogPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ _jsxs6(FloatingPortal, {
        ref: forwardedRef,
        ...portalProps,
        children: [
          mounted &&
            modal === true &&
            /* @__PURE__ */ _jsx14(InternalBackdrop, {
              ref: store.context.internalBackdropRef,
              inert: inertValue(!open),
            }),
          props.children,
        ],
      }),
    });
  },
);
if (true) DialogPortal.displayName = "DialogPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
import * as React76 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
import * as React74 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useScrollLock.mjs
("use client");
var originalHtmlStyles = {};
var originalBodyStyles = {};
var originalHtmlScrollBehavior = "";
function getViewportScroller(html, body) {
  return isOverflowElement(html) ? html : body;
}
function isPageScrollLocked(win, html, body) {
  return /hidden|clip/.test(
    win.getComputedStyle(getViewportScroller(html, body)).overflowY,
  );
}
function hasInsetScrollbars(referenceElement) {
  if (typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const win = getWindow(doc);
  return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
  const supported =
    typeof CSS !== "undefined" &&
    CSS.supports &&
    CSS.supports("scrollbar-gutter", "stable");
  if (!supported || typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const scrollContainer = getViewportScroller(html, body);
  const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
  const originalHtmlStyleGutter = html.style.scrollbarGutter;
  html.style.scrollbarGutter = "stable";
  scrollContainer.style.overflowY = "scroll";
  const before = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = "hidden";
  const after = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = originalScrollContainerOverflowY;
  html.style.scrollbarGutter = originalHtmlStyleGutter;
  return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const elementToLock = getViewportScroller(html, body);
  const originalElementToLockStyles = {
    overflowY: elementToLock.style.overflowY,
    overflowX: elementToLock.style.overflowX,
  };
  Object.assign(elementToLock.style, {
    overflowY: "hidden",
    overflowX: "hidden",
  });
  return () => {
    Object.assign(elementToLock.style, originalElementToLockStyles);
  };
}
function preventScrollInsetScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const win = getWindow(html);
  let scrollTop = 0;
  let scrollLeft = 0;
  let updateGutterOnly = false;
  const resizeFrame = AnimationFrame.create();
  if (exports_engine.webkit && (win.visualViewport?.scale ?? 1) !== 1) {
    return () => {};
  }
  function lockScroll() {
    const htmlStyles = win.getComputedStyle(html);
    const bodyStyles = win.getComputedStyle(body);
    const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || "";
    const hasBothEdges = htmlScrollbarGutterValue.includes("both-edges");
    const scrollbarGutterValue = hasBothEdges ? "stable both-edges" : "stable";
    scrollTop = html.scrollTop;
    scrollLeft = html.scrollLeft;
    originalHtmlStyles = {
      scrollbarGutter: html.style.scrollbarGutter,
      overflowY: html.style.overflowY,
      overflowX: html.style.overflowX,
    };
    originalHtmlScrollBehavior = html.style.scrollBehavior;
    originalBodyStyles = {
      position: body.style.position,
      height: body.style.height,
      width: body.style.width,
      boxSizing: body.style.boxSizing,
      overflowY: body.style.overflowY,
      overflowX: body.style.overflowX,
      scrollBehavior: body.style.scrollBehavior,
    };
    const isScrollableY = html.scrollHeight > html.clientHeight;
    const isScrollableX = html.scrollWidth > html.clientWidth;
    const hasConstantOverflowY =
      htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
    const hasConstantOverflowX =
      htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
    const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
    const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
    const marginY =
      parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
    const marginX =
      parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
    const elementToLock = getViewportScroller(html, body);
    updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
    if (updateGutterOnly) {
      html.style.scrollbarGutter = scrollbarGutterValue;
      elementToLock.style.overflowY = "hidden";
      elementToLock.style.overflowX = "hidden";
      return;
    }
    Object.assign(html.style, {
      scrollbarGutter: scrollbarGutterValue,
      overflowY: "hidden",
      overflowX: "hidden",
    });
    if (isScrollableY || hasConstantOverflowY) {
      html.style.overflowY = "scroll";
    }
    if (isScrollableX || hasConstantOverflowX) {
      html.style.overflowX = "scroll";
    }
    Object.assign(body.style, {
      position: "relative",
      height:
        marginY || scrollbarHeight
          ? `calc(100dvh - ${marginY + scrollbarHeight}px)`
          : "100dvh",
      width:
        marginX || scrollbarWidth
          ? `calc(100vw - ${marginX + scrollbarWidth}px)`
          : "100vw",
      boxSizing: "border-box",
      overflowY: "hidden",
      overflowX: "hidden",
      scrollBehavior: "unset",
    });
    body.scrollTop = scrollTop;
    body.scrollLeft = scrollLeft;
    html.setAttribute("data-base-ui-scroll-locked", "");
    html.style.scrollBehavior = "unset";
  }
  function cleanup() {
    Object.assign(html.style, originalHtmlStyles);
    Object.assign(body.style, originalBodyStyles);
    if (!updateGutterOnly) {
      html.scrollTop = scrollTop;
      html.scrollLeft = scrollLeft;
      html.removeAttribute("data-base-ui-scroll-locked");
      html.style.scrollBehavior = originalHtmlScrollBehavior;
    }
  }
  function handleResize() {
    cleanup();
    resizeFrame.request(lockScroll);
  }
  lockScroll();
  const unsubscribeResize = addEventListener(win, "resize", handleResize);
  return () => {
    resizeFrame.cancel();
    cleanup();
    if (typeof win.removeEventListener === "function") {
      unsubscribeResize();
    }
  };
}

class ScrollLocker {
  lockCount = 0;
  restore = null;
  timeoutLock = Timeout.create();
  timeoutUnlock = Timeout.create();
  acquire(referenceElement) {
    this.lockCount += 1;
    if (this.lockCount === 1 && this.restore === null) {
      this.timeoutLock.start(0, () => this.lock(referenceElement));
    }
    return this.release;
  }
  release = () => {
    this.lockCount -= 1;
    if (this.lockCount === 0 && this.restore) {
      this.timeoutUnlock.start(0, this.unlock);
    }
  };
  unlock = () => {
    if (this.lockCount === 0 && this.restore) {
      this.restore?.();
      this.restore = null;
    }
  };
  lock(referenceElement) {
    if (this.lockCount === 0 || this.restore !== null) {
      return;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = getWindow(html);
    if (isPageScrollLocked(win, html, body)) {
      const observer = new win.MutationObserver(() => {
        if (isPageScrollLocked(win, html, body)) {
          return;
        }
        observer.disconnect();
        this.restore = null;
        this.lock(referenceElement);
      });
      const options = {
        attributes: true,
      };
      observer.observe(html, options);
      observer.observe(body, options);
      this.restore = () => observer.disconnect();
      return;
    }
    const hasOverlayScrollbars =
      exports_os.ios || !hasInsetScrollbars(referenceElement);
    this.restore = hasOverlayScrollbars
      ? preventScrollOverlayScrollbars(referenceElement)
      : preventScrollInsetScrollbars(referenceElement);
  }
}
var SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    return SCROLL_LOCKER.acquire(referenceElement);
  }, [enabled, referenceElement]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
("use client");
function DialogInteractions({ store, parentContext, isDrawer }) {
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const disablePointerDismissal = store.useState("disablePointerDismissal");
  const modal = store.useState("modal");
  const popupElement = store.useState("popupElement");
  const floatingRootContext = store.useState("floatingRootContext");
  const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = React74.useState(0);
  const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = React74.useState(0);
  const isTopmost = ownNestedOpenDialogs === 0;
  const dismiss = useDismiss(floatingRootContext, {
    outsidePressEvent() {
      if (
        store.context.internalBackdropRef.current ||
        store.context.backdropRef.current
      ) {
        return "intentional";
      }
      return {
        mouse: modal === "trap-focus" ? "sloppy" : "intentional",
        touch: "sloppy",
      };
    },
    outsidePress(event) {
      if (!store.context.outsidePressEnabledRef.current) {
        return false;
      }
      if ("button" in event && event.button !== 0) {
        return false;
      }
      if ("touches" in event) {
        if (event.type === "touchend") {
          if (event.changedTouches.length !== 1 || event.touches.length !== 0) {
            return false;
          }
        } else if (event.touches.length !== 1) {
          return false;
        }
      }
      const target = getTarget(event);
      if (isTopmost && !disablePointerDismissal) {
        if (modal) {
          const internalBackdrop = store.context.internalBackdropRef.current;
          const backdrop = store.context.backdropRef.current;
          return internalBackdrop || backdrop
            ? internalBackdrop === target ||
                backdrop === target ||
                (contains(target, popupElement) &&
                  !target?.hasAttribute("data-base-ui-portal"))
            : true;
        }
        return true;
      }
      return false;
    },
    escapeKey: isTopmost,
  });
  useScrollLock(open && modal === true, popupElement);
  store.useContextCallback("onNestedDialogOpen", (dialogCount, drawerCount) => {
    if (!store.select("open") && !store.select("mounted")) {
      return;
    }
    setOwnNestedOpenDialogs(dialogCount);
    setOwnNestedOpenDrawers(drawerCount);
  });
  useIsoLayoutEffect(() => {
    if (!open && !mounted) {
      setOwnNestedOpenDialogs(0);
      setOwnNestedOpenDrawers(0);
    }
  }, [open, mounted]);
  useIsoLayoutEffect(() => {
    if (parentContext?.onNestedDialogOpen) {
      if (open) {
        parentContext.onNestedDialogOpen(
          ownNestedOpenDialogs + 1,
          ownNestedOpenDrawers + (isDrawer ? 1 : 0),
        );
      }
    }
    return () => {
      if (parentContext?.onNestedDialogOpen && open) {
        parentContext.onNestedDialogOpen(0, 0);
      }
    };
  }, [
    isDrawer,
    open,
    ownNestedOpenDialogs,
    ownNestedOpenDrawers,
    parentContext,
  ]);
  usePopupInteractionProps(store, {
    activeTriggerProps: dismiss.reference,
    inactiveTriggerProps: dismiss.trigger,
    popupProps: dismiss.floating,
    nestedOpenDialogCount: ownNestedOpenDialogs,
    nestedOpenDrawerCount: ownNestedOpenDrawers,
  });
  return null;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/store/DialogStore.mjs
import * as React75 from "react";

var selectors2 = {
  ...popupStoreSelectors,
  modal: (state) => state.modal,
  nested: (state) => state.nested,
  nestedOpenDialogCount: (state) => state.nestedOpenDialogCount,
  nestedOpenDrawerCount: (state) => state.nestedOpenDrawerCount,
  disablePointerDismissal: (state) => state.disablePointerDismissal,
  openMethod: (state) => state.openMethod,
  descriptionElementId: (state) => state.descriptionElementId,
  titleElementId: (state) => state.titleElementId,
  viewportElement: (state) => state.viewportElement,
  role: (state) => state.role,
};

class DialogStore extends ReactStore {
  constructor(initialState, floatingId, nested) {
    const triggerElements = new PopupTriggerMap();
    const state = createInitialState(
      initialState,
      triggerElements,
      floatingId,
      nested,
    );
    super(state, createInitialContext(triggerElements), selectors2);
  }
  setOpen = (nextOpen, eventDetails) => {
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    if (
      !nextOpen &&
      eventDetails.trigger == null &&
      this.state.activeTriggerId != null
    ) {
      eventDetails.trigger = this.state.activeTriggerElement ?? undefined;
    }
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    this.update(
      createPopupOpenState(this.state, nextOpen, eventDetails.trigger),
    );
  };
}
function createInitialState(
  initialState,
  triggerElements,
  floatingId,
  nested = false,
) {
  const state = {
    ...createInitialPopupStoreState(triggerElements, floatingId, nested),
    modal: true,
    disablePointerDismissal: false,
    viewportElement: null,
    descriptionElementId: undefined,
    titleElementId: undefined,
    openMethod: null,
    nested: false,
    nestedOpenDialogCount: 0,
    nestedOpenDrawerCount: 0,
    role: "dialog",
    ...initialState,
  };
  return state;
}
function createInitialContext(triggerElements) {
  return {
    popupRef: /* @__PURE__ */ React75.createRef(),
    backdropRef: /* @__PURE__ */ React75.createRef(),
    internalBackdropRef: /* @__PURE__ */ React75.createRef(),
    outsidePressEnabledRef: {
      current: true,
    },
    triggerElements,
    onOpenChange: undefined,
    onOpenChangeComplete: undefined,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
import { jsx as _jsx15, jsxs as _jsxs7 } from "react/jsx-runtime";

("use client");
function useRenderDialogRoot(mode, props) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    disablePointerDismissal: disablePointerDismissalProp = false,
    modal: modalProp = true,
    actionsRef,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
  } = props;
  const isDrawer = mode === "drawer";
  const isAlertDialog = mode === "alert-dialog";
  const modal = isAlertDialog ? true : modalProp;
  const disablePointerDismissal = isAlertDialog || disablePointerDismissalProp;
  const role = isAlertDialog ? "alertdialog" : "dialog";
  const parentStore = useDialogRootContext(true);
  const nested = parentStore != null;
  const rootState = {
    modal,
    disablePointerDismissal,
    nested,
    role,
  };
  const store = usePopupRootStore(
    (floatingId, floatingNested) =>
      new DialogStore(
        {
          open: defaultOpen,
          openProp,
          activeTriggerId: defaultTriggerIdProp,
          triggerIdProp,
          ...rootState,
        },
        floatingId,
        floatingNested,
      ),
    true,
  );
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useSyncedValues(rootState);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const payload = store.useState("payload");
  usePopupRootSync(store, open);
  useImplicitActiveTrigger(store);
  const { forceUnmount } = useOpenStateTransitions(open, store);
  React76.useImperativeHandle(
    actionsRef,
    () => ({
      unmount: forceUnmount,
      close: () =>
        store.setOpen(false, createChangeEventDetails(imperativeAction)),
    }),
    [forceUnmount, store],
  );
  const shouldRenderInteractions = open || mounted || handle != null;
  return /* @__PURE__ */ _jsxs7(DialogRootContext.Provider, {
    value: store,
    children: [
      handle &&
        /* @__PURE__ */ _jsx15(PopupHandleAttachment, {
          handle,
          store,
        }),
      shouldRenderInteractions &&
        /* @__PURE__ */ _jsx15(DialogInteractions, {
          store,
          parentContext: parentStore?.context,
          isDrawer,
        }),
      typeof children === "function"
        ? children({
            payload,
          })
        : children,
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/root/DialogRoot.mjs
("use client");
var DialogRoot = fastComponent(function DialogRoot(props) {
  return useRenderDialogRoot("dialog", props);
});
if (true) DialogRoot.displayName = "DialogRoot";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/title/DialogTitle.mjs
import * as React77 from "react";

("use client");
var DialogTitle = /* @__PURE__ */ React77.forwardRef(
  function DialogTitle(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const store = useDialogRootContext();
    const id = useBaseUiId(idProp);
    store.useSyncedValueWithCleanup("titleElementId", id);
    return useRenderElement("h2", componentProps, {
      ref: forwardedRef,
      props: [
        {
          id,
        },
        elementProps,
      ],
    });
  },
);
if (true) DialogTitle.displayName = "DialogTitle";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
import * as React80 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
import * as React79 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
import * as React78 from "react";

("use client");
function useEnhancedClickHandler(handler) {
  const lastClickInteractionTypeRef = React78.useRef("");
  const handlePointerDown = React78.useCallback(
    (event) => {
      if (event.defaultPrevented) {
        return;
      }
      lastClickInteractionTypeRef.current = event.pointerType;
      handler(event, event.pointerType);
    },
    [handler],
  );
  const handleClick = React78.useCallback(
    (event) => {
      if (event.detail === 0) {
        handler(event, "keyboard");
        return;
      }
      if ("pointerType" in event) {
        handler(event, event.pointerType);
      } else {
        handler(event, lastClickInteractionTypeRef.current);
      }
      lastClickInteractionTypeRef.current = "";
    },
    [handler],
  );
  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
("use client");
function useOpenMethodTriggerProps(open, setOpenMethod) {
  const handleTriggerClick = useStableCallback((_, interactionType) => {
    const isOpen = typeof open === "function" ? open() : open;
    if (!isOpen) {
      setOpenMethod(interactionType || (exports_os.ios ? "touch" : ""));
    }
  });
  const { onClick, onPointerDown } =
    useEnhancedClickHandler(handleTriggerClick);
  return React79.useMemo(
    () => ({
      onClick,
      onPointerDown,
    }),
    [onClick, onPointerDown],
  );
}
function useOpenInteractionType(open) {
  const [openMethod, setOpenMethod] = React79.useState(null);
  const triggerProps = useOpenMethodTriggerProps(open, setOpenMethod);
  useValueChanged(open, (previousOpen) => {
    if (previousOpen && !open) {
      setOpenMethod(null);
    }
  });
  return React79.useMemo(
    () => ({
      openMethod,
      triggerProps,
    }),
    [openMethod, triggerProps],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
("use client");
var DialogTrigger = fastComponentRef(
  function DialogTrigger(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled = false,
      nativeButton = true,
      id: idProp,
      payload,
      handle,
      ...elementProps
    } = componentProps;
    const dialogRootStore = useDialogRootContext(true);
    const handleStore = usePopupHandleStore(handle);
    const store = handleStore ?? dialogRootStore;
    if (!store) {
      throw new Error(
        "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle.",
      );
    }
    const thisTriggerId = useBaseUiId(idProp);
    const floatingContext = store.useState("floatingRootContext");
    const isOpenedByThisTrigger = store.useState(
      "isOpenedByTrigger",
      thisTriggerId,
    );
    const popupId = store.useState("triggerPopupId", thisTriggerId);
    const triggerElementRef = React80.useRef(null);
    const { registerTrigger, isMountedByThisTrigger } =
      useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
        payload,
      });
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const click = useClick(floatingContext);
    const interactionTypeProps = useOpenMethodTriggerProps(
      () => store.select("open"),
      (interactionType) => {
        store.set("openMethod", interactionType);
      },
    );
    const state = {
      disabled,
      open: isOpenedByThisTrigger,
    };
    const rootTriggerProps = store.useState(
      "triggerProps",
      isMountedByThisTrigger,
    );
    return useRenderElement("button", componentProps, {
      state,
      ref: [buttonRef, forwardedRef, registerTrigger, triggerElementRef],
      props: [
        click.reference,
        rootTriggerProps,
        interactionTypeProps,
        {
          [CLICK_TRIGGER_IDENTIFIER]: "",
          id: thisTriggerId,
          "aria-haspopup": "dialog",
          "aria-expanded": isOpenedByThisTrigger,
          "aria-controls": popupId,
        },
        elementProps,
        getButtonProps,
      ],
      stateAttributesMapping: triggerOpenStateMapping,
    });
  },
);
if (true) DialogTrigger.displayName = "DialogTrigger";

// src/dialog.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";

function Dialog({
  trigger,
  title,
  description,
  children,
  footer,
  open,
  defaultOpen,
  onOpenChange,
  closeLabel = "Close",
  className,
}) {
  return /* @__PURE__ */ jsxs3(DialogRoot, {
    open,
    defaultOpen,
    onOpenChange: (next) => onOpenChange?.(next),
    children: [
      /* @__PURE__ */ jsx3(DialogTrigger, {
        render: trigger,
      }),
      /* @__PURE__ */ jsxs3(DialogPortal, {
        children: [
          /* @__PURE__ */ jsx3(DialogBackdrop, {
            className: parts.dialogBackdrop,
          }),
          /* @__PURE__ */ jsxs3(DialogPopup, {
            className: cx("fox-dialog", "fox-dialog-popup", className),
            children: [
              /* @__PURE__ */ jsxs3("div", {
                className: parts.dialogHeader,
                children: [
                  /* @__PURE__ */ jsx3(DialogTitle, {
                    className: parts.dialogTitle,
                    children: title,
                  }),
                  /* @__PURE__ */ jsx3(DialogClose, {
                    className: "fox-button fox-dialog-close",
                    "data-size": "icon",
                    "data-variant": "ghost",
                    "aria-label": closeLabel,
                    children: "×",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs3("div", {
                className: parts.dialogBody,
                children: [
                  description
                    ? /* @__PURE__ */ jsx3(DialogDescription, {
                        className: "fox-hint",
                        children: description,
                      })
                    : null,
                  children,
                ],
              }),
              footer
                ? /* @__PURE__ */ jsx3("div", {
                    className: parts.dialogFooter,
                    children: footer,
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}

// src/field.tsx
import { useId as useId2 } from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";

function describedBy(...ids) {
  const list = ids.filter(Boolean);
  return list.length > 0 ? list.join(" ") : undefined;
}
function TextField({ label, hint, error, id, className, ...rest }) {
  const generated = useId2();
  const inputId = id ?? generated;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  return /* @__PURE__ */ jsxs4("div", {
    className: "fox-field",
    children: [
      /* @__PURE__ */ jsx4("label", {
        className: "fox-label",
        htmlFor: inputId,
        children: label,
      }),
      /* @__PURE__ */ jsx4("input", {
        ...rest,
        id: inputId,
        className: cx("fox-input", className),
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy(hintId, errorId),
      }),
      hint
        ? /* @__PURE__ */ jsx4("p", {
            className: "fox-hint",
            id: hintId,
            children: hint,
          })
        : null,
      error
        ? /* @__PURE__ */ jsx4("p", {
            className: "fox-hint",
            "data-tone": "danger",
            id: errorId,
            role: "alert",
            children: error,
          })
        : null,
    ],
  });
}
function TextArea({ label, hint, error, id, className, ...rest }) {
  const generated = useId2();
  const inputId = id ?? generated;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  return /* @__PURE__ */ jsxs4("div", {
    className: "fox-field",
    children: [
      /* @__PURE__ */ jsx4("label", {
        className: "fox-label",
        htmlFor: inputId,
        children: label,
      }),
      /* @__PURE__ */ jsx4("textarea", {
        ...rest,
        id: inputId,
        className: cx("fox-textarea", className),
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy(hintId, errorId),
      }),
      hint
        ? /* @__PURE__ */ jsx4("p", {
            className: "fox-hint",
            id: hintId,
            children: hint,
          })
        : null,
      error
        ? /* @__PURE__ */ jsx4("p", {
            className: "fox-hint",
            "data-tone": "danger",
            id: errorId,
            role: "alert",
            children: error,
          })
        : null,
    ],
  });
}

// src/layout.tsx
import { jsx as jsx5 } from "react/jsx-runtime";

function gapStyle(gap) {
  return { gap: `var(--fox-space-${gap})` };
}
function Stack({ gap = 3, className, style, ...rest }) {
  return /* @__PURE__ */ jsx5("div", {
    ...rest,
    className: cx(parts.stack, className),
    style: { ...gapStyle(gap), ...style },
  });
}
function Row({ gap = 2, className, style, ...rest }) {
  return /* @__PURE__ */ jsx5("div", {
    ...rest,
    className: cx(parts.row, className),
    style: { ...gapStyle(gap), ...style },
  });
}
function Grid({ min = 240, gap = 4, className, style, ...rest }) {
  return /* @__PURE__ */ jsx5("div", {
    ...rest,
    className: cx(parts.grid, className),
    style: {
      ...gapStyle(gap),
      gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
      ...style,
    },
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/positioner/MenuPositionerContext.mjs
import * as React81 from "react";

("use client");
var MenuPositionerContext = /* @__PURE__ */ React81.createContext(undefined);
if (true) MenuPositionerContext.displayName = "MenuPositionerContext";
function useMenuPositionerContext(optional) {
  const context = React81.useContext(MenuPositionerContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: MenuPositionerContext is missing. MenuPositioner parts must be placed within <Menu.Positioner>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/root/MenuRootContext.mjs
import * as React82 from "react";

("use client");
var MenuRootContext = /* @__PURE__ */ React82.createContext(undefined);
if (true) MenuRootContext.displayName = "MenuRootContext";
function useMenuRootContext(optional) {
  const context = React82.useContext(MenuRootContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: MenuRootContext is missing. Menu parts must be placed within <Menu.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs
import * as React83 from "react";

("use client");
var ContextMenuRootContext = /* @__PURE__ */ React83.createContext(undefined);
if (true) ContextMenuRootContext.displayName = "ContextMenuRootContext";
function useContextMenuRootContext(optional = true) {
  const context = React83.useContext(ContextMenuRootContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/filter-root/MenuFilterContext.mjs
import * as React84 from "react";

("use client");
var MenuFilterImplContext = /* @__PURE__ */ React84.createContext(null);
if (true) MenuFilterImplContext.displayName = "MenuFilterImplContext";
function useMenuFilterImpl(scope = "root") {
  const impl = React84.useContext(MenuFilterImplContext);
  const root = React84.useContext(MenuRootContext);
  if (impl === null || root === undefined) {
    return null;
  }
  const filterable =
    scope === "submenu-trigger"
      ? root.virtualFocus || root.parentVirtualFocus
      : root.virtualFocus;
  return filterable ? impl : null;
}
var UNFILTERED = {
  visible: true,
  ref: null,
};
function useUnfilteredItem() {
  return UNFILTERED;
}
function useMenuFilterItem(props, forwardedRef, scope = "root") {
  const impl = useMenuFilterImpl(scope);
  const useItem =
    (scope === "submenu-trigger" ? impl?.useSubmenuTrigger : impl?.useItem) ??
    useUnfilteredItem;
  const item = useItem({
    label: props.label,
    children: props.children,
    render: props.render,
  });
  const ref = useMergedRefs(forwardedRef, item.ref);
  return {
    visible: item.visible,
    ref,
    props: item.props,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/item/useMenuItem.mjs
import * as React86 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.mjs
import * as React85 from "react";

("use client");
function preventMouseDownDefault(event) {
  event.preventDefault();
}
function useMenuItemCommonProps(params) {
  const {
    closeOnClick,
    highlighted,
    id,
    nodeId,
    store,
    typingRef,
    itemRef,
    itemMetadata,
  } = params;
  const rootContext = useMenuRootContext();
  const contextMenuContext = useContextMenuRootContext(true);
  const isSubmenuTrigger = itemMetadata.type === "submenu-trigger";
  const virtualFocus = isSubmenuTrigger
    ? rootContext.parentVirtualFocus
    : rootContext.virtualFocus;
  const selectionStore =
    isSubmenuTrigger && rootContext.parent.type === "menu"
      ? rootContext.parent.store
      : rootContext.store;
  const ariaSelected = selectionStore.useState(
    "webkitAriaSelected",
    highlighted,
  );
  const { events: menuEvents } = store.useState("floatingTreeRoot");
  const open = store.useState("open");
  const isContextMenu = contextMenuContext !== undefined;
  const tabIndex = !virtualFocus && open && highlighted ? 0 : -1;
  return React85.useMemo(
    () => ({
      id,
      role: "menuitem",
      tabIndex,
      "aria-selected": ariaSelected,
      onMouseDown: virtualFocus ? preventMouseDownDefault : undefined,
      onKeyDown(event) {
        if (event.key === " " && typingRef?.current) {
          event.preventDefault();
        }
      },
      onMouseMove(event) {
        if (!nodeId) {
          return;
        }
        menuEvents.emit("itemhover", {
          nodeId,
          target: event.currentTarget,
        });
      },
      onClick(event) {
        if (closeOnClick) {
          menuEvents.emit("close", {
            domEvent: event.nativeEvent,
            reason: itemPress,
          });
        }
      },
      onMouseUp(event) {
        if (contextMenuContext) {
          const initialCursorPoint =
            contextMenuContext.initialCursorPointRef.current;
          contextMenuContext.initialCursorPointRef.current = null;
          if (
            isContextMenu &&
            initialCursorPoint &&
            Math.abs(event.clientX - initialCursorPoint.x) <= 1 &&
            Math.abs(event.clientY - initialCursorPoint.y) <= 1
          ) {
            return;
          }
          if (isContextMenu && !exports_os.mac && event.button === 2) {
            return;
          }
        }
        if (
          itemRef.current &&
          store.context.allowMouseUpTriggerRef.current &&
          (!isContextMenu || event.button === 2)
        ) {
          if (itemMetadata.type === "regular-item") {
            dispatchClickWithModifiers(itemRef.current, event, {
              detail: 1,
              pointerType: "mouse",
            });
          }
        }
      },
    }),
    [
      closeOnClick,
      tabIndex,
      id,
      menuEvents,
      nodeId,
      store.context.allowMouseUpTriggerRef,
      typingRef,
      itemRef,
      contextMenuContext,
      isContextMenu,
      itemMetadata.type,
      ariaSelected,
      virtualFocus,
    ],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/item/useMenuItem.mjs
("use client");
var REGULAR_ITEM = {
  type: "regular-item",
};
function useMenuItem(params) {
  const {
    closeOnClick,
    disabled,
    highlighted,
    id,
    store,
    typingRef = store.context.typingRef,
    nativeButton,
    itemMetadata,
    nodeId,
  } = params;
  const itemRef = React86.useRef(null);
  const { getButtonProps, buttonRef } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true,
  });
  const commonProps = useMenuItemCommonProps({
    closeOnClick,
    highlighted,
    id,
    nodeId,
    store,
    typingRef,
    itemRef,
    itemMetadata,
  });
  const getItemProps = React86.useCallback(
    (externalProps) => {
      return mergeProps(
        commonProps,
        {
          onMouseEnter(event) {
            if (itemMetadata.type !== "submenu-trigger") {
              return;
            }
            itemMetadata.setActive(event.nativeEvent);
          },
        },
        externalProps,
        getButtonProps,
      );
    },
    [commonProps, getButtonProps, itemMetadata],
  );
  const mergedRef = useMergedRefs(itemRef, buttonRef);
  return React86.useMemo(
    () => ({
      getItemProps,
      itemRef: mergedRef,
    }),
    [getItemProps, mergedRef],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/group/MenuGroupContext.mjs
import * as React87 from "react";

("use client");
var MenuGroupContext = /* @__PURE__ */ React87.createContext(undefined);
if (true) MenuGroupContext.displayName = "MenuGroupContext";
function useMenuGroupRootContext() {
  const context = React87.useContext(MenuGroupContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: MenuGroupContext is missing. Menu group parts must be used within <Menu.Group> or <Menu.RadioGroup>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/group-label/MenuGroupLabel.mjs
import * as React88 from "react";

("use client");
var MenuGroupLabel = /* @__PURE__ */ React88.forwardRef(
  function MenuGroupLabel(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      ...elementProps
    } = componentProps;
    const id = useBaseUiId(idProp);
    const setLabelId = useMenuGroupRootContext();
    useIsoLayoutEffect(() => {
      setLabelId(id);
      return () => {
        setLabelId((currentId) => (currentId === id ? undefined : currentId));
      };
    }, [setLabelId, id]);
    return useRenderElement("div", componentProps, {
      ref: forwardedRef,
      props: {
        id,
        "aria-hidden": true,
        ...elementProps,
      },
    });
  },
);
if (true) MenuGroupLabel.displayName = "MenuGroupLabel";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/item/MenuItem.mjs
import * as React89 from "react";
import { jsx as _jsx16 } from "react/jsx-runtime";

("use client");
var MenuItemPlain = /* @__PURE__ */ React89.forwardRef(
  function MenuItemPlain(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      label,
      nativeButton = false,
      disabled: disabledProp = false,
      closeOnClick = true,
      style,
      ...elementProps
    } = componentProps;
    const { store } = useMenuRootContext();
    const listItem = useCompositeListItem({
      guess: true,
      label,
    });
    const id = useBaseUiId(idProp);
    const rootDisabled = store.useState("disabled");
    const highlighted = store.useState("isActive", listItem.index);
    const nodeId = store.useState("floatingNodeId");
    const itemProps = store.useState("itemProps");
    const disabled = disabledProp || rootDisabled;
    const { getItemProps, itemRef } = useMenuItem({
      closeOnClick,
      disabled,
      highlighted,
      id,
      store,
      nativeButton,
      nodeId,
      itemMetadata: REGULAR_ITEM,
    });
    const state = {
      disabled,
      highlighted,
    };
    return useRenderElement("div", componentProps, {
      state,
      props: [itemProps, elementProps, getItemProps],
      ref: [itemRef, forwardedRef, listItem.ref],
    });
  },
);
if (true) MenuItemPlain.displayName = "MenuItemPlain";
var MenuItem = /* @__PURE__ */ React89.forwardRef(
  function MenuItem(props, forwardedRef) {
    const filterItem = useMenuFilterItem(props, forwardedRef);
    if (!filterItem.visible) {
      return null;
    }
    return /* @__PURE__ */ _jsx16(MenuItemPlain, {
      ...props,
      ref: filterItem.ref,
    });
  },
);
if (true) MenuItem.displayName = "MenuItem";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
import * as React94 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs
import * as React90 from "react";

("use client");
var ToolbarRootContext = /* @__PURE__ */ React90.createContext(undefined);
if (true) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
  const context = React90.useContext(ToolbarRootContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting"
    ? DISABLED_TRANSITIONS_STYLE
    : EMPTY_OBJECT;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRootContext.mjs
import * as React91 from "react";

("use client");
var MenuSubmenuRootContext = /* @__PURE__ */ React91.createContext(undefined);
if (true) MenuSubmenuRootContext.displayName = "MenuSubmenuRootContext";
function useMenuSubmenuRootContext() {
  return React91.useContext(MenuSubmenuRootContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/resolveRenderedId.mjs
import * as React92 from "react";

function resolveRenderedId(props, fallbackId) {
  const render = unwrapLazyRenderProp(props.render);
  if (/* @__PURE__ */ React92.isValidElement(render)) {
    const renderProps = render.props;
    if (Object.hasOwn(renderProps, "id")) {
      return renderProps.id ?? "";
    }
  }
  return props.id ?? fallbackId;
}
function useRenderedId(props, defaultId, setId) {
  const id = resolveRenderedId(props, defaultId);
  const registeredId = id === defaultId ? undefined : id;
  const ref = React92.useCallback(
    (element) => setId?.(element ? registeredId : undefined),
    [registeredId, setId],
  );
  return [id, ref];
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/resolvePopupLabel.mjs
import * as React93 from "react";

function resolvePopupLabel(props, activeTriggerElement, activeTriggerId) {
  const render = unwrapLazyRenderProp(props.render);
  const renderedElementProps = /* @__PURE__ */ React93.isValidElement(render)
    ? render.props
    : undefined;
  const ariaLabel = props["aria-label"] ?? renderedElementProps?.["aria-label"];
  let ariaLabelledBy =
    props["aria-labelledby"] ?? renderedElementProps?.["aria-labelledby"];
  if (ariaLabelledBy == null && !ariaLabel) {
    ariaLabelledBy = activeTriggerElement
      ? activeTriggerElement.id || undefined
      : activeTriggerId || undefined;
  }
  return ariaLabelledBy;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/popup/MenuPopup.mjs
import { jsx as _jsx17 } from "react/jsx-runtime";

("use client");
var MenuPopupPlain = /* @__PURE__ */ React94.forwardRef(
  function MenuPopupPlain(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      finalFocus,
      id: idProp,
      initialFocus: initialFocusProp,
      ...elementProps
    } = componentProps;
    const {
      store,
      defaultFloatingId,
      setRenderedFloatingId,
      virtualFocus,
      orientation,
    } = useMenuRootContext();
    const inheritedSubmenuRootContext = useMenuSubmenuRootContext();
    const { side, align } = useMenuPositionerContext();
    const insideToolbar = useToolbarRootContext(true) != null;
    const open = store.useState("open");
    const transitionStatus = store.useState("transitionStatus");
    const popupProps = store.useState("popupProps");
    const mounted = store.useState("mounted");
    const instantType = store.useState("instantType");
    const activeTriggerElement = store.useState("activeTriggerElement");
    const parent = store.useState("parent");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const rootId = store.useState("rootId");
    const floatingContext = store.useState("floatingRootContext");
    const floatingTreeRoot = store.useState("floatingTreeRoot");
    const closeDelay = store.useState("closeDelay");
    const hoverEnabled = store.useState("hoverEnabled");
    const disabled = store.useState("disabled");
    const openMethod = store.useState("openMethod");
    const activeTriggerId = store.useState("activeTriggerId");
    const listElement = store.useState("listElement");
    const [id, registerIdRef] = useRenderedId(
      componentProps,
      defaultFloatingId,
      setRenderedFloatingId,
    );
    const ariaLabelledBy = resolvePopupLabel(
      componentProps,
      activeTriggerElement,
      activeTriggerId,
    );
    const submenuRootContext =
      parent.type === "menu" ? inheritedSubmenuRootContext : undefined;
    const isContextMenu = parent.type === "context-menu";
    let initialFocus = initialFocusProp ?? parent.type !== "menu";
    if (
      initialFocusProp === undefined &&
      listElement &&
      parent.type !== "menu"
    ) {
      initialFocus = () => {
        if (store.state.activeIndex !== null) {
          return false;
        }
        return listElement;
      };
    }
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      },
    });
    React94.useEffect(() => {
      function handleClose(event) {
        store.setOpen(
          false,
          createChangeEventDetails(event.reason, event.domEvent),
        );
      }
      floatingTreeRoot.events.on("close", handleClose);
      return () => {
        floatingTreeRoot.events.off("close", handleClose);
      };
    }, [floatingTreeRoot.events, store]);
    useHoverFloatingInteraction(floatingContext, {
      enabled:
        hoverEnabled &&
        !disabled &&
        !isContextMenu &&
        parent.type !== "menubar",
      closeDelay,
    });
    const setPopupElement = store.useStateSetter("popupElement");
    const useParentHandoff =
      React94.useContext(MenuFilterImplContext)?.useParentHandoff ??
      useNoParentHandoff;
    const { parentVirtualFocusRef, handleFocus } = useParentHandoff(
      store,
      parent,
      open,
      virtualFocus,
    );
    const state = {
      transitionStatus,
      side,
      align,
      open,
      nested: parent.type === "menu",
      instant: instantType,
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [
        forwardedRef,
        store.context.popupRef,
        setPopupElement,
        registerIdRef,
      ],
      stateAttributesMapping: popupTransitionStateMapping,
      props: [
        popupProps,
        {
          id,
          ...(listElement
            ? {
                role: "presentation",
              }
            : {
                role: "menu",
                "aria-orientation":
                  orientation === "horizontal" ? "horizontal" : undefined,
                "aria-labelledby": ariaLabelledBy,
              }),
          onKeyDown(event) {
            submenuRootContext?.onPopupKeyDown?.(event);
            if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
              event.stopPropagation();
            }
          },
          onFocus: handleFocus,
        },
        getDisabledMountTransitionStyles(transitionStatus),
        elementProps,
        {
          "data-rootownerid": rootId,
        },
      ],
    });
    let returnFocus = parent.type === undefined || isContextMenu;
    if (
      activeTriggerElement ||
      (parent.type === "menubar" && lastOpenChangeReason !== outsidePress)
    ) {
      returnFocus = true;
    }
    const dynamicReturnFocus =
      submenuRootContext?.getReturnElement ?? parentVirtualFocusRef;
    return /* @__PURE__ */ _jsx17(FloatingFocusManager, {
      context: floatingContext,
      openInteractionType: openMethod,
      modal: isContextMenu,
      disabled: !mounted,
      returnFocus: finalFocus ?? dynamicReturnFocus ?? returnFocus,
      explicitReturnFocus:
        finalFocus === undefined && dynamicReturnFocus ? false : undefined,
      initialFocus,
      restoreFocus: true,
      getInsideElements:
        parent.type === undefined
          ? () => [store.context.beforeTriggerFocusGuardRef.current]
          : undefined,
      externalTree: parent.type !== "menubar" ? floatingTreeRoot : undefined,
      previousFocusableElement: activeTriggerElement,
      nextFocusableElement:
        parent.type === undefined
          ? store.context.triggerFocusTargetRef
          : undefined,
      beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
      children: element,
    });
  },
);
if (true) MenuPopupPlain.displayName = "MenuPopupPlain";
var NO_PARENT_HANDOFF = {
  parentVirtualFocusRef: undefined,
  handleFocus: undefined,
};
function useNoParentHandoff() {
  return NO_PARENT_HANDOFF;
}
var MenuPopup = /* @__PURE__ */ React94.forwardRef(
  function MenuPopup(props, forwardedRef) {
    const Popup = useMenuFilterImpl()?.Popup ?? MenuPopupPlain;
    return /* @__PURE__ */ _jsx17(Popup, {
      ...props,
      ref: forwardedRef,
    });
  },
);
if (true) MenuPopup.displayName = "MenuPopup";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
import * as React96 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/portal/MenuPortalContext.mjs
import * as React95 from "react";

("use client");
var MenuPortalContext = /* @__PURE__ */ React95.createContext(undefined);
if (true) MenuPortalContext.displayName = "MenuPortalContext";
function useMenuPortalContext() {
  const value = React95.useContext(MenuPortalContext);
  if (value === undefined) {
    throw new Error("Base UI: <Menu.Portal> is missing.");
  }
  return value;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
import { jsx as _jsx18 } from "react/jsx-runtime";

("use client");
var MenuPortal = /* @__PURE__ */ React96.forwardRef(
  function MenuPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const { store, parent } = useMenuRootContext();
    const mounted = store.useState("mounted");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    const portalOwnerRole =
      parent.type === "menu" || parent.type === "menubar" ? "group" : undefined;
    return /* @__PURE__ */ _jsx18(MenuPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ _jsx18(FloatingPortal, {
        ref: forwardedRef,
        ...portalProps,
        portalOwnerRole,
      }),
    });
  },
);
if (true) MenuPortal.displayName = "MenuPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
import * as React101 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
import * as React98 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
import * as React97 from "react";

("use client");
function useBaseUIFloating(options) {
  const { nodeId, externalTree, rootContext: store } = options;
  const referenceElement = store.useState("referenceElement");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const open = store.useState("open");
  const floatingId = store.useState("floatingId");
  const [positionReference, setPositionReferenceRaw] = React97.useState(null);
  const domReferenceRef = React97.useRef(null);
  const tree = useFloatingTree(externalTree);
  const storeElements = React97.useMemo(
    () => ({
      reference: referenceElement,
      floating: floatingElement,
      domReference: domReferenceElement,
    }),
    [referenceElement, floatingElement, domReferenceElement],
  );
  const position = useFloating({
    ...options,
    elements: {
      ...storeElements,
      ...(positionReference && {
        reference: positionReference,
      }),
    },
  });
  const setPositionReference = React97.useCallback(
    (node) => {
      const computedPositionReference = isElement(node)
        ? {
            getBoundingClientRect: () => node.getBoundingClientRect(),
            getClientRects: () => node.getClientRects(),
            contextElement: node,
          }
        : node;
      setPositionReferenceRaw(computedPositionReference);
      position.refs.setReference(computedPositionReference);
    },
    [position.refs],
  );
  const refs = React97.useMemo(
    () => ({
      ...position.refs,
      setPositionReference,
      domReference: domReferenceRef,
    }),
    [position.refs, setPositionReference],
  );
  const elements = React97.useMemo(
    () => ({
      ...position.elements,
      domReference: domReferenceElement,
    }),
    [position.elements, domReferenceElement],
  );
  const context = React97.useMemo(
    () => ({
      ...position,
      dataRef: store.context.dataRef,
      open,
      onOpenChange: store.setOpen,
      events: store.context.events,
      floatingId,
      refs,
      elements,
      nodeId,
      rootStore: store,
    }),
    [position, refs, elements, nodeId, store, open, floatingId],
  );
  useIsoLayoutEffect(() => {
    if (domReferenceElement) {
      domReferenceRef.current = domReferenceElement;
    }
  }, [domReferenceElement]);
  useIsoLayoutEffect(() => {
    store.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React97.useMemo(
    () => ({
      ...position,
      context,
      refs,
      elements,
      rootStore: store,
    }),
    [position, refs, elements, context, store],
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const { x, y, placement, rects, platform, elements, middlewareData } =
      state;
    const { element, padding = 0 } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y,
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff =
      rects.reference[length] +
      rects.reference[axis] -
      coords[axis] -
      rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const clientSize = elements.floating[clientProp] || rects.floating[length];
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding =
      clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center =
      clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min, center, max);
    const shouldAddOffset =
      !middlewareData.arrow &&
      getAlignment(placement) != null &&
      center !== offset &&
      rects.reference[length] / 2 -
        (center < min ? minPadding : maxPadding) -
        arrowDimensions[length] / 2 <
        0;
    const alignmentOffset = shouldAddOffset
      ? center < min
        ? center - min
        : center - max
      : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset,
        }),
      },
      reset: shouldAddOffset,
    };
  },
});
var arrow4 = (options, deps) => {
  const { name, fn } = baseArrow(options);
  return {
    name,
    fn,
    options: [options, deps],
  };
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/hideMiddleware.mjs
var hide4 = {
  name: "hide",
  async fn(state) {
    const { width, height, x, y } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
    const overflow = await state.platform.detectOverflow(state, {
      elementContext: "reference",
    });
    const referenceHidden =
      overflow.top - height >= 0 ||
      overflow.right - width >= 0 ||
      overflow.bottom - height >= 0 ||
      overflow.left - width >= 0;
    return {
      data: {
        referenceHidden: referenceHidden || anchorHidden,
      },
    };
  },
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/adaptiveOriginConstants.mjs
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top",
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/CommonPositionerCssVars.mjs
var availableWidth = "--available-width";
var availableHeight = "--available-height";
var anchorWidth = "--anchor-width";
var anchorHeight = "--anchor-height";
var transformOrigin = "--transform-origin";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useAnchorPositioning.mjs
("use client");
var AVAILABLE_WIDTH_VAR = availableWidth;
var AVAILABLE_HEIGHT_VAR = availableHeight;
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam =
    sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left",
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const { rects, placement } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height,
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height,
    },
  };
  return data;
}
function useAnchorPositioning(params) {
  return useAnchorPositioningWithHook(params, useBaseUIFloating);
}
function useAnchorPositioningWithHook(params, useFloatingHook) {
  const {
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    inline: inlineMiddleware,
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shift,
    nodeId,
    adaptiveOrigin,
    lazyFlip = false,
    externalTree,
  } = params;
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide =
    collisionAvoidance.fallbackAxisSide || "end";
  const shiftCrossAxis = shift?.crossAxis ?? false;
  const shiftRootBoundary = shift?.rootBoundary;
  const anchorFn = typeof anchor === "function" ? anchor : undefined;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const [mountPlacement, setMountPlacement] = React98.useState(null);
  if (!mounted && mountPlacement !== null) {
    setMountPlacement(null);
  }
  const lockAlign = lazyFlip === "placement";
  const mountSide = mountPlacement ? getSide(mountPlacement) : null;
  const mountAlign =
    mountPlacement && lockAlign
      ? getAlignment(mountPlacement) || "center"
      : null;
  const side =
    mountSide ||
    {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
      "inline-end": isRtl ? "left" : "right",
      "inline-start": isRtl ? "right" : "left",
    }[sideParam];
  const placementAlign = mountAlign || align;
  const placement =
    placementAlign === "center" ? side : `${side}-${placementAlign}`;
  let collisionPadding = collisionPaddingParam;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding,
      right: collisionPadding,
      bottom: collisionPadding,
      left: collisionPadding,
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: collisionPadding.top || 0,
      right: collisionPadding.right || 0,
      bottom: collisionPadding.bottom || 0,
      left: collisionPadding.left || 0,
    };
  }
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  const commonCollisionProps = {
    boundary:
      collisionBoundary === "clipping-ancestors"
        ? "clippingAncestors"
        : collisionBoundary,
    padding: collisionPadding,
  };
  const arrowRef = React98.useRef(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [];
  if (inlineMiddleware) {
    middleware.push(inlineMiddleware);
  }
  middleware.push(
    offset3(
      (state) => {
        const data = getOffsetData(state, sideParam, isRtl);
        const sideAxis =
          typeof sideOffsetRef.current === "function"
            ? sideOffsetRef.current(data)
            : sideOffsetRef.current;
        const alignAxis =
          typeof alignOffsetRef.current === "function"
            ? alignOffsetRef.current(data)
            : alignOffsetRef.current;
        return {
          mainAxis: sideAxis,
          crossAxis: alignAxis,
          alignmentAxis: alignAxis,
        };
      },
      [sideOffsetDep, alignOffsetDep, isRtl, sideParam],
    ),
  );
  const shiftDisabled =
    collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled =
    !shiftDisabled &&
    (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware =
    collisionAvoidanceSide === "none"
      ? null
      : flip3({
          ...commonCollisionProps,
          padding: {
            top: collisionPadding.top + bias + biasTop,
            right: collisionPadding.right + bias + biasRight,
            bottom: collisionPadding.bottom + bias + biasBottom,
            left: collisionPadding.left + bias + biasLeft,
          },
          mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
          crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
          fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide,
        });
  const shiftMiddleware = shiftDisabled
    ? null
    : shift3(
        {
          ...commonCollisionProps,
          rootBoundary: shiftRootBoundary,
          mainAxis: collisionAvoidanceAlign !== "none",
          crossAxis: crossAxisShiftEnabled,
          limiter:
            sticky || shiftCrossAxis
              ? undefined
              : limitShift3((limitData) => {
                  if (!arrowRef.current) {
                    return {};
                  }
                  const { width, height } =
                    arrowRef.current.getBoundingClientRect();
                  const sideAxis = getSideAxis(getSide(limitData.placement));
                  const arrowSize = sideAxis === "y" ? width : height;
                  const offsetAmount =
                    sideAxis === "y"
                      ? collisionPadding.left + collisionPadding.right
                      : collisionPadding.top + collisionPadding.bottom;
                  return {
                    offset: arrowSize / 2 + offsetAmount / 2,
                  };
                }),
        },
        [
          commonCollisionProps,
          sticky,
          shiftCrossAxis,
          shiftRootBoundary,
          collisionPadding,
          collisionAvoidanceAlign,
        ],
      );
  if (
    collisionAvoidanceSide === "shift" ||
    collisionAvoidanceAlign === "shift" ||
    placementAlign === "center"
  ) {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(
    size3({
      ...commonCollisionProps,
      apply({
        elements: { floating },
        availableWidth,
        availableHeight,
        rects,
      }) {
        if (!mountedRef.current) {
          return;
        }
        const floatingStyle = floating.style;
        floatingStyle.setProperty(AVAILABLE_WIDTH_VAR, `${availableWidth}px`);
        floatingStyle.setProperty(AVAILABLE_HEIGHT_VAR, `${availableHeight}px`);
        const dpr = getWindow(floating).devicePixelRatio || 1;
        const { x, y, width, height } = rects.reference;
        const anchorWidth2 =
          (Math.round((x + width) * dpr) - Math.round(x * dpr)) / dpr;
        const anchorHeight2 =
          (Math.round((y + height) * dpr) - Math.round(y * dpr)) / dpr;
        floatingStyle.setProperty(anchorWidth, `${anchorWidth2}px`);
        floatingStyle.setProperty(anchorHeight, `${anchorHeight2}px`);
      },
    }),
    arrow4(
      (state) => ({
        element:
          arrowRef.current ||
          ownerDocument(state.elements.floating).createElement("div"),
        padding: arrowRef.current ? arrowPadding : 0,
      }),
      [arrowPadding],
    ),
    {
      name: "transformOrigin",
      fn(state) {
        const {
          elements: { floating },
          middlewareData,
          placement: renderedPlacement,
          platform,
          rects,
          y,
        } = state;
        const renderedSide = getSide(renderedPlacement);
        const renderedAlign = getAlignment(renderedPlacement);
        const isVertical = getSideAxis(renderedSide) === "y";
        const arrowEl = arrowRef.current;
        const sideOffsetValue =
          typeof sideOffset === "function"
            ? sideOffset(getOffsetData(state, sideParam, isRtl))
            : sideOffset;
        let crossOrigin;
        if (
          !arrowEl &&
          renderedAlign &&
          Math.abs(
            isVertical
              ? middlewareData.shift?.x || 0
              : middlewareData.shift?.y || 0,
          ) <= 1
        ) {
          crossOrigin =
            (renderedAlign === "start") ===
            (isVertical && platform.isRTL?.(floating) === true)
              ? "100%"
              : "0%";
        } else {
          const arrowOffset = isVertical
            ? middlewareData.arrow?.x || 0
            : middlewareData.arrow?.y || 0;
          const arrowSize = isVertical
            ? arrowEl?.clientWidth || 0
            : arrowEl?.clientHeight || 0;
          crossOrigin = `${arrowOffset + arrowSize / 2}px`;
        }
        let sideOrigin =
          renderedSide === "top" || renderedSide === "left"
            ? `calc(100% + ${sideOffsetValue}px)`
            : `${-sideOffsetValue}px`;
        if (
          crossAxisShiftEnabled &&
          isVertical &&
          Math.abs(middlewareData.shift?.y || 0) > sideOffsetValue
        ) {
          sideOrigin = `${rects.reference.y + rects.reference.height / 2 - y}px`;
        }
        floating.style.setProperty(
          transformOrigin,
          isVertical
            ? `${crossOrigin} ${sideOrigin}`
            : `${sideOrigin} ${crossOrigin}`,
        );
        return {};
      },
    },
    hide4,
    adaptiveOrigin,
  );
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null,
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = React98.useMemo(
    () => ({
      ancestorScroll: !disableAnchorTracking,
      elementResize:
        !disableAnchorTracking && typeof ResizeObserver !== "undefined",
      layoutShift:
        !disableAnchorTracking && typeof IntersectionObserver !== "undefined",
    }),
    [disableAnchorTracking],
  );
  const {
    refs,
    elements,
    x,
    y,
    middlewareData,
    update,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles,
  } = useFloatingHook({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : undefined,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted
      ? undefined
      : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree,
  });
  const { sideX, sideY } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = React98.useMemo(() => {
    let base;
    if (!isPositioned) {
      base = {
        position: resolvedPosition,
        top: 0,
        left: 0,
      };
    } else if (adaptiveOrigin) {
      base = {
        position: resolvedPosition,
        [sideX]: x,
        [sideY]: y,
      };
    } else {
      base = {
        ...originalFloatingStyles,
        position: resolvedPosition,
      };
    }
    base[AVAILABLE_WIDTH_VAR] = "100vw";
    base[AVAILABLE_HEIGHT_VAR] = "100vh";
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [
    adaptiveOrigin,
    resolvedPosition,
    sideX,
    x,
    sideY,
    y,
    originalFloatingStyles,
    isPositioned,
  ]);
  const registeredPositionReferenceRef = React98.useRef(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor =
      typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement =
      (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React98.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (
      isRef(anchorValue) &&
      anchorValue.current !== registeredPositionReferenceRef.current
    ) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React98.useEffect(() => {
    if (keepMounted && mounted && elements.reference && elements.floating) {
      return autoUpdate(
        elements.reference,
        elements.floating,
        update,
        autoUpdateOptions,
      );
    }
    return;
  }, [keepMounted, mounted, elements, update, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (
      lazyFlip &&
      mounted &&
      isPositioned &&
      (renderedSide !== side || (lockAlign && renderedAlign !== placementAlign))
    ) {
      setMountPlacement(renderedPlacement);
    }
  }, [
    lazyFlip,
    lockAlign,
    mounted,
    isPositioned,
    renderedPlacement,
    renderedSide,
    renderedAlign,
    side,
    placementAlign,
  ]);
  const arrowStyles = React98.useMemo(
    () => ({
      position: "absolute",
      top: middlewareData.arrow?.y,
      left: middlewareData.arrow?.x,
    }),
    [middlewareData.arrow],
  );
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React98.useMemo(
    () => ({
      positionerStyles: floatingStyles,
      arrowStyles,
      arrowRef,
      arrowUncentered,
      side: logicalRenderedSide,
      align: renderedAlign,
      physicalSide: renderedSide,
      anchorHidden,
      refs,
      context,
      isPositioned,
      update,
    }),
    [
      floatingStyles,
      arrowStyles,
      arrowRef,
      arrowUncentered,
      logicalRenderedSide,
      renderedAlign,
      renderedSide,
      anchorHidden,
      refs,
      context,
      isPositioned,
      update,
    ],
  );
}
function isRef(param) {
  return param != null && "current" in param;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/useTriggerSwitchTransition.mjs
import * as React99 from "react";

("use client");
function useTriggerSwitchTransition(parameters) {
  const { store, domReference, positionerElement, open } = parameters;
  const previousTriggerRef = React99.useRef(null);
  const pendingSwitchRef = React99.useRef(null);
  const runOnceAnimationsFinish = useAnimationsFinished(positionerElement);
  useIsoLayoutEffect(() => {
    if (open) {
      return;
    }
    pendingSwitchRef.current?.abort();
    pendingSwitchRef.current = null;
    if (store.state.instantType === "trigger-change") {
      store.set("instantType", undefined);
    }
  }, [open, store]);
  useIsoLayoutEffect(() => {
    const currentTrigger = domReference;
    const previousTrigger = previousTriggerRef.current;
    if (currentTrigger) {
      previousTriggerRef.current = currentTrigger;
    }
    if (
      !previousTrigger ||
      !currentTrigger ||
      currentTrigger === previousTrigger
    ) {
      return;
    }
    if (!store.select("open")) {
      return;
    }
    store.set("instantType", undefined);
    const abortController = new AbortController();
    pendingSwitchRef.current = abortController;
    runOnceAnimationsFinish(() => {
      if (store.select("open")) {
        store.set("instantType", "trigger-change");
      }
    }, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [domReference, runOnceAnimationsFinish, store]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/usePositioner.mjs
("use client");
function usePositioner(
  componentProps,
  state,
  { styles, transitionStatus, props, refs, hidden, inert = false },
) {
  const style = {
    ...styles,
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement("div", componentProps, {
    state,
    ref: refs,
    props: [
      {
        role: "presentation",
        hidden,
        style,
      },
      getDisabledMountTransitionStyles(transitionStatus),
      props,
    ],
    stateAttributesMapping: popupStateMapping,
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
import * as React100 from "react";

("use client");
var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(
  enabled,
  touchOpen,
  positionerElement,
  referenceElement,
) {
  const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] =
    React100.useState(false);
  useIsoLayoutEffect(() => {
    if (!enabled || !touchOpen || positionerElement == null) {
      setTouchOpenShouldLockScroll(false);
      return;
    }
    const viewportWidth =
      ownerDocument(positionerElement).documentElement.clientWidth;
    const popupWidth = positionerElement.offsetWidth;
    setTouchOpenShouldLockScroll(
      viewportWidth > 0 &&
        popupWidth > 0 &&
        popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX,
    );
  }, [enabled, touchOpen, positionerElement]);
  useScrollLock(
    enabled && (!touchOpen || touchOpenShouldLockScroll),
    referenceElement,
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/positioner/MenuPositioner.mjs
import { jsx as _jsx19, jsxs as _jsxs8 } from "react/jsx-runtime";

("use client");
var MenuPositioner = /* @__PURE__ */ React101.forwardRef(
  function MenuPositioner(componentProps, forwardedRef) {
    const {
      anchor: anchorProp,
      positionMethod: positionMethodProp = "absolute",
      className,
      render,
      side,
      align: alignProp,
      sideOffset: sideOffsetProp = 0,
      alignOffset: alignOffsetProp = 0,
      collisionBoundary = "clipping-ancestors",
      collisionPadding = 5,
      arrowPadding = 5,
      sticky = false,
      disableAnchorTracking = false,
      collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = componentProps;
    const { store, virtualFocus, syncHighlightedItem } = useMenuRootContext();
    const keepMounted = useMenuPortalContext();
    const contextMenuContext = useContextMenuRootContext(true);
    const parent = store.useState("parent");
    const floatingRootContext = store.useState("floatingRootContext");
    const floatingTreeRoot = store.useState("floatingTreeRoot");
    const mounted = store.useState("mounted");
    const open = store.useState("open");
    const modal = store.useState("modal");
    const openMethod = store.useState("openMethod");
    const triggerElement = store.useState("activeTriggerElement");
    const transitionStatus = store.useState("transitionStatus");
    const positionerElement = store.useState("positionerElement");
    const instantType = store.useState("instantType");
    const adaptiveOrigin = store.useState("adaptiveOrigin");
    const lastOpenChangeReason = store.useState("lastOpenChangeReason");
    const floatingNodeId = store.useState("floatingNodeId");
    const floatingParentNodeId = store.useState("floatingParentNodeId");
    const domReference = floatingRootContext.useState("domReferenceElement");
    let anchor = anchorProp;
    let sideOffset = sideOffsetProp;
    let alignOffset = alignOffsetProp;
    let align = alignProp;
    let collisionAvoidance = collisionAvoidanceProp;
    if (parent.type === "context-menu") {
      anchor = anchorProp ?? parent.context?.anchor;
      align = align ?? "start";
      if (!side && align !== "center") {
        alignOffset = componentProps.alignOffset ?? 2;
        sideOffset = componentProps.sideOffset ?? -5;
      }
    }
    let computedSide = side;
    let computedAlign = align;
    if (parent.type === "menu") {
      computedSide = computedSide ?? "inline-end";
      computedAlign = computedAlign ?? "start";
      collisionAvoidance =
        componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
    } else if (parent.type === "menubar") {
      computedSide =
        computedSide ??
        (parent.context.orientation === "vertical" ? "inline-end" : "bottom");
      computedAlign = computedAlign ?? "start";
    }
    const contextMenu = parent.type === "context-menu";
    const positioner = useAnchorPositioning({
      anchor,
      floatingRootContext,
      positionMethod: contextMenuContext ? "fixed" : positionMethodProp,
      mounted,
      side: computedSide,
      sideOffset,
      align: computedAlign,
      alignOffset,
      arrowPadding: contextMenu ? 0 : arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      nodeId: floatingNodeId,
      keepMounted,
      disableAnchorTracking,
      collisionAvoidance,
      shift: contextMenu
        ? {
            crossAxis: !(
              "side" in collisionAvoidance && collisionAvoidance.side === "flip"
            ),
            rootBoundary: "layoutViewport",
          }
        : undefined,
      externalTree: floatingTreeRoot,
      adaptiveOrigin,
      lazyFlip: virtualFocus ? "placement" : false,
    });
    React101.useEffect(() => {
      function onMenuOpenChange(details) {
        if (details.open) {
          if (details.parentNodeId === floatingNodeId) {
            store.set("hoverEnabled", false);
          }
          if (
            details.nodeId !== floatingNodeId &&
            details.parentNodeId === store.select("floatingParentNodeId")
          ) {
            store.setOpen(false, createChangeEventDetails(siblingOpen));
          }
        }
      }
      floatingTreeRoot.events.on("menuopenchange", onMenuOpenChange);
      return () => {
        floatingTreeRoot.events.off("menuopenchange", onMenuOpenChange);
      };
    }, [store, floatingTreeRoot.events, floatingNodeId]);
    React101.useEffect(() => {
      if (store.select("floatingParentNodeId") == null) {
        return;
      }
      function onParentClose(details) {
        if (
          details.open ||
          details.nodeId !== store.select("floatingParentNodeId")
        ) {
          return;
        }
        const reason = details.reason ?? siblingOpen;
        store.setOpen(false, createChangeEventDetails(reason));
      }
      floatingTreeRoot.events.on("menuopenchange", onParentClose);
      return () => {
        floatingTreeRoot.events.off("menuopenchange", onParentClose);
      };
    }, [floatingTreeRoot.events, store]);
    const closeTimeout = useTimeout();
    React101.useEffect(() => {
      if (!open) {
        closeTimeout.clear();
      }
    }, [open, closeTimeout]);
    React101.useEffect(() => {
      function onItemHover(event) {
        if (!open || event.nodeId !== store.select("floatingParentNodeId")) {
          return;
        }
        if (event.target && triggerElement && triggerElement !== event.target) {
          const delay = store.select("closeDelay");
          if (delay > 0) {
            if (!closeTimeout.isStarted()) {
              closeTimeout.start(delay, () => {
                store.setOpen(false, createChangeEventDetails(siblingOpen));
              });
            }
          } else {
            store.setOpen(false, createChangeEventDetails(siblingOpen));
          }
        } else {
          closeTimeout.clear();
        }
      }
      floatingTreeRoot.events.on("itemhover", onItemHover);
      return () => {
        floatingTreeRoot.events.off("itemhover", onItemHover);
      };
    }, [floatingTreeRoot.events, open, triggerElement, store, closeTimeout]);
    React101.useEffect(() => {
      const eventDetails = {
        open,
        nodeId: floatingNodeId,
        parentNodeId: floatingParentNodeId,
        reason: store.select("lastOpenChangeReason"),
      };
      floatingTreeRoot.events.emit("menuopenchange", eventDetails);
    }, [
      floatingTreeRoot.events,
      open,
      store,
      floatingNodeId,
      floatingParentNodeId,
    ]);
    useTriggerSwitchTransition({
      store,
      domReference,
      positionerElement,
      open,
    });
    const state = {
      open,
      side: positioner.side,
      align: positioner.align,
      anchorHidden: positioner.anchorHidden,
      nested: parent.type === "menu",
      instant: instantType,
    };
    const menubarModal = parent.type === "menubar" && parent.context.modal;
    const popupModal = modal && lastOpenChangeReason !== triggerHover;
    useAnchoredPopupScrollLock(
      open && (menubarModal || popupModal),
      openMethod === "touch",
      positionerElement,
      triggerElement,
    );
    const element = usePositioner(componentProps, state, {
      styles: positioner.positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, store.useStateSetter("positionerElement")],
      hidden: !mounted,
      inert: !open,
    });
    const shouldRenderBackdrop =
      mounted &&
      parent.type !== "menu" &&
      ((parent.type !== "menubar" &&
        modal &&
        lastOpenChangeReason !== triggerHover) ||
        (parent.type === "menubar" && parent.context.modal));
    let backdropCutout = null;
    if (parent.type === "menubar") {
      backdropCutout = parent.context.contentElement;
    } else if (parent.type === undefined) {
      backdropCutout = triggerElement;
    }
    return /* @__PURE__ */ _jsxs8(MenuPositionerContext.Provider, {
      value: positioner,
      children: [
        shouldRenderBackdrop &&
          /* @__PURE__ */ _jsx19(InternalBackdrop, {
            ref:
              parent.type === "context-menu" ||
              parent.type === "nested-context-menu"
                ? parent.context.internalBackdropRef
                : null,
            inert: inertValue(!open),
            cutout: backdropCutout,
          }),
        /* @__PURE__ */ _jsx19(FloatingNode, {
          id: floatingNodeId,
          children: /* @__PURE__ */ _jsx19(CompositeList, {
            elementsRef: store.context.itemDomElements,
            labelsRef: store.context.itemLabels,
            onMapChange: syncHighlightedItem,
            children: element,
          }),
        }),
      ],
    });
  },
);
if (true) MenuPositioner.displayName = "MenuPositioner";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/root/MenuRoot.mjs
import * as React105 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menubar/MenubarContext.mjs
import * as React102 from "react";

("use client");
var MenubarContext = /* @__PURE__ */ React102.createContext(null);
if (true) MenubarContext.displayName = "MenubarContext";
function useMenubarContext(optional) {
  const context = React102.useContext(MenubarContext);
  if (context === null && !optional) {
    throw new Error(
      "Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/getHighlightReason.mjs
function getHighlightReason(event) {
  if (event == null) {
    return none;
  }
  if (event.type.startsWith("key")) {
    return keyboard;
  }
  if (event.type.startsWith("mouse") || event.type.startsWith("pointer")) {
    return pointer;
  }
  return none;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/store/MenuStore.mjs
import * as React103 from "react";

var selectors3 = {
  ...popupStoreSelectors,
  disabled: (state) =>
    state.parent.type === "menubar"
      ? state.parent.context.disabled || state.disabled
      : state.disabled,
  modal: (state) =>
    (state.parent.type === undefined || state.parent.type === "context-menu") &&
    (state.modal ?? true),
  openMethod: (state) => state.openMethod,
  keyboardOpen: (state) => state.keyboardOpen,
  allowMouseEnter: (state) => state.allowMouseEnter,
  highlightItemOnHover: (state) => state.highlightItemOnHover,
  parent: (state) => state.parent,
  rootId: (state) => {
    if (state.parent.type === "menu") {
      return state.parent.store.select("rootId");
    }
    return state.parent.type !== undefined
      ? state.parent.context.rootId
      : state.rootId;
  },
  activeIndex: (state) => state.activeIndex,
  listElement: (state) => state.listElement,
  triggerControlsId: (state, triggerId) => {
    const popupId = popupStoreSelectors.triggerPopupId(state, triggerId);
    return popupId ? state.listElement?.id || popupId : undefined;
  },
  filterTriggerProps: (state) => state.filterTriggerProps,
  inputProps: (state) => state.inputProps,
  webkitAriaSelected: (state, highlighted) =>
    exports_engine.webkit && state.inputFocused && highlighted
      ? true
      : undefined,
  highlightedItemId: (state) => state.highlightedItem?.id || undefined,
  isActive: (state, itemIndex) => state.activeIndex === itemIndex,
  hoverEnabled: (state) => state.hoverEnabled,
  instantType: (state) =>
    state.instantType === "trigger-change" && !popupStoreSelectors.open(state)
      ? undefined
      : state.instantType,
  lastOpenChangeReason: (state) => state.openChangeReason,
  floatingTreeRoot: (state) => {
    if (state.parent.type === "menu") {
      return state.parent.store.select("floatingTreeRoot");
    }
    return state.floatingTreeRoot;
  },
  floatingNodeId: (state) => state.floatingNodeId,
  floatingParentNodeId: (state) => state.floatingParentNodeId,
  itemProps: (state) => state.itemProps,
  closeDelay: (state) => state.closeDelay,
  adaptiveOrigin: (state) => state.adaptiveOrigin,
  keyboardEventRelay: (state) => {
    if (state.keyboardEventRelay) {
      return state.keyboardEventRelay;
    }
    if (state.parent.type === "menu") {
      return state.parent.store.select("keyboardEventRelay");
    }
    return;
  },
};

class MenuStore extends ReactStore {
  constructor(initialState, floatingId, nested = false) {
    const triggerElements = new PopupTriggerMap();
    const state = createInitialState2(
      triggerElements,
      floatingId,
      nested,
      initialState,
    );
    super(state, createInitialContext2(triggerElements), selectors3);
    this.observe("parent", (parent) => {
      if (parent.type === "menu") {
        this.context.allowMouseUpTriggerRef =
          parent.store.context.allowMouseUpTriggerRef;
      } else if (parent.type !== undefined) {
        this.context.allowMouseUpTriggerRef =
          parent.context.allowMouseUpTriggerRef;
      }
    });
  }
  subscribeToParentMenu() {
    const parent = this.state.parent;
    if (parent.type !== "menu") {
      return;
    }
    let rootId = parent.store.select("rootId");
    let floatingTreeRoot = parent.store.select("floatingTreeRoot");
    let keyboardEventRelay = parent.store.select("keyboardEventRelay");
    return parent.store.subscribe(() => {
      const nextRootId = parent.store.select("rootId");
      const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
      const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
      if (
        rootId === nextRootId &&
        floatingTreeRoot === nextFloatingTreeRoot &&
        keyboardEventRelay === nextKeyboardEventRelay
      ) {
        return;
      }
      rootId = nextRootId;
      floatingTreeRoot = nextFloatingTreeRoot;
      keyboardEventRelay = nextKeyboardEventRelay;
      this.notifyAll();
    });
  }
  setOpen(open, eventDetails) {
    this.state.floatingRootContext.context.events.emit("setOpen", {
      open,
      eventDetails,
    });
  }
  setActiveIndex(activeIndex, reason, event) {
    if (this.state.activeIndex !== activeIndex) {
      const item =
        activeIndex === null
          ? undefined
          : this.context.itemDomElements.current[activeIndex];
      const isWriteBack = item === this.context.reportedItem;
      this.context.highlightReason = isWriteBack ? "none" : reason;
      this.context.highlightEvent = isWriteBack ? undefined : event;
    }
    this.set("activeIndex", activeIndex);
  }
  highlightItem(element, reason, event) {
    const index = this.context.itemDomElements.current.indexOf(element);
    if (index > -1) {
      this.setActiveIndex(index, reason, event);
    }
  }
}
function createInitialContext2(triggerElements) {
  return {
    positionerRef: /* @__PURE__ */ React103.createRef(),
    popupRef: /* @__PURE__ */ React103.createRef(),
    typingRef: {
      current: false,
    },
    itemDomElements: {
      current: [],
    },
    itemLabels: {
      current: [],
    },
    highlightReason: "none",
    highlightEvent: undefined,
    reportedItem: undefined,
    allowMouseUpTriggerRef: {
      current: false,
    },
    virtualFocusRef: undefined,
    triggerFocusTargetRef: /* @__PURE__ */ React103.createRef(),
    beforeTriggerFocusGuardRef: /* @__PURE__ */ React103.createRef(),
    beforeContentFocusGuardRef: /* @__PURE__ */ React103.createRef(),
    onOpenChangeComplete: undefined,
    triggerElements,
  };
}
function createInitialState2(
  triggerElements,
  floatingId,
  nested = false,
  initialState,
) {
  return {
    ...createInitialPopupStoreState(triggerElements, floatingId, nested),
    disabled: false,
    modal: true,
    openMethod: null,
    keyboardOpen: false,
    allowMouseEnter: false,
    highlightItemOnHover: true,
    parent: {
      type: undefined,
    },
    rootId: undefined,
    activeIndex: null,
    listElement: null,
    filterTriggerProps: EMPTY_OBJECT,
    inputProps: EMPTY_OBJECT,
    inputFocused: false,
    highlightedItem: undefined,
    hoverEnabled: true,
    instantType: undefined,
    openChangeReason: null,
    floatingTreeRoot: new FloatingTreeStore(),
    floatingNodeId: undefined,
    floatingParentNodeId: null,
    itemProps: EMPTY_OBJECT,
    keyboardEventRelay: undefined,
    closeDelay: 0,
    adaptiveOrigin: undefined,
    ...initialState,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/filter-provider/MenuFilterProviderContext.mjs
import * as React104 from "react";

("use client");
var MenuFilterProviderContext = /* @__PURE__ */ React104.createContext(null);
if (true) MenuFilterProviderContext.displayName = "MenuFilterProviderContext";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/utils/isKeyboardOpen.mjs
function isKeyboardClick(reason, event) {
  return (
    (reason === triggerPress || reason === itemPress) && event?.detail === 0
  );
}
function isKeyboardOpen(reason, event) {
  return reason === listNavigation || isKeyboardClick(reason, event);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/root/MenuRoot.mjs
import { jsx as _jsx20, jsxs as _jsxs9 } from "react/jsx-runtime";

("use client");
var MenuRootInternal = fastComponent(function MenuRootInternal(props) {
  const {
    children,
    open: openProp,
    onOpenChange,
    onOpenChangeComplete,
    onItemHighlighted: onItemHighlightedProp,
    defaultOpen = false,
    disabled: disabledProp = false,
    modal: modalProp,
    loopFocus = true,
    orientation = "vertical",
    actionsRef,
    closeParentOnEsc = false,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    highlightItemOnHover = true,
    isSubmenu = false,
    virtualFocus = false,
    virtualFocusRef,
    allowEscape = true,
    resetOnPointerLeave = true,
  } = props;
  const contextMenuContext = useContextMenuRootContext(true);
  const parentMenuRootContext = useMenuRootContext(true);
  const menubarContext = useMenubarContext(true);
  const enclosingMenuStore = parentMenuRootContext?.store;
  const parentVirtualFocus = parentMenuRootContext?.virtualFocus ?? false;
  const parentFromContext = React105.useMemo(() => {
    if (isSubmenu && enclosingMenuStore) {
      return {
        type: "menu",
        store: enclosingMenuStore,
      };
    }
    if (menubarContext) {
      return {
        type: "menubar",
        context: menubarContext,
      };
    }
    if (contextMenuContext && !enclosingMenuStore) {
      return {
        type: "context-menu",
        context: contextMenuContext,
      };
    }
    return {
      type: undefined,
    };
  }, [contextMenuContext, enclosingMenuStore, menubarContext, isSubmenu]);
  const rootId = useBaseUiId();
  const defaultFloatingId = useBaseUiId();
  const [renderedFloatingId, setRenderedFloatingId] =
    React105.useState(undefined);
  const floatingId = (renderedFloatingId ?? defaultFloatingId) || undefined;
  const floatingParentNodeIdFromContext = useFloatingParentNodeId();
  const parentMenuStore =
    parentFromContext.type === "menu" ? parentFromContext.store : undefined;
  const animateInitialOpen =
    (openProp ?? defaultOpen) &&
    parentMenuStore?.state.transitionStatus === "starting";
  const seededInstantType = useRefWithInit(() =>
    animateInitialOpen ? parentMenuStore?.state.instantType : undefined,
  ).current;
  const store = useRefWithInit(() => {
    const menuStore = new MenuStore(
      {
        open: defaultOpen,
        openProp,
        activeTriggerId: defaultTriggerIdProp,
        triggerIdProp,
        parent: parentFromContext,
        disabled: disabledProp,
        highlightItemOnHover,
        modal: parentFromContext.type === undefined ? modalProp : undefined,
        rootId,
        instantType: seededInstantType,
      },
      floatingId,
      floatingParentNodeIdFromContext != null,
    );
    menuStore.context.virtualFocusRef = virtualFocusRef;
    return menuStore;
  }).current;
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const floatingTreeRoot = store.useState("floatingTreeRoot");
  const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
  const open = store.useState("open");
  const activeTriggerElement = store.useState("activeTriggerElement");
  const positionerElement = store.useState("positionerElement");
  const hoverEnabled = store.useState("hoverEnabled");
  const disabled = store.useState("disabled");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const parent = store.useState("parent");
  const activeIndex = store.useState("activeIndex");
  const keyboardOpen = store.useState("keyboardOpen");
  const payload = store.useState("payload");
  const floatingParentNodeId = store.useState("floatingParentNodeId");
  const openEventRef = React105.useRef(null);
  const allowOutsidePressDismissalRef = React105.useRef(
    parent.type !== "context-menu",
  );
  const allowOutsidePressDismissalTimeout = useTimeout();
  const allowTouchToCloseRef = React105.useRef(true);
  const allowTouchToCloseTimeout = useTimeout();
  const nested = floatingParentNodeId != null;
  if (true) {
    if (parent.type !== undefined && modalProp !== undefined) {
      console.warn(
        "Base UI: The `modal` prop is not supported on nested menus. It will be ignored.",
      );
    }
  }
  const { openMethod, triggerProps: interactionTypeProps } =
    useOpenInteractionType(open);
  store.useSyncedValues({
    disabled: disabledProp,
    highlightItemOnHover,
    modal: parent.type === undefined ? modalProp : undefined,
    openMethod,
    rootId,
  });
  useImplicitActiveTrigger(store);
  const { forceUnmount, transitionStatus } = useOpenStateTransitions(
    open,
    store,
    () => {
      store.set("allowMouseEnter", false);
    },
    animateInitialOpen,
  );
  const runOnceAnimationsFinish = useAnimationsFinished(store.context.popupRef);
  React105.useEffect(() => {
    if (seededInstantType === undefined) {
      return;
    }
    const clearSeededInstantType = () => {
      if (store.state.instantType === seededInstantType) {
        store.set("instantType", undefined);
      }
    };
    if (!open) {
      clearSeededInstantType();
      return;
    }
    if (transitionStatus !== undefined) {
      return;
    }
    if (store.context.popupRef.current == null) {
      clearSeededInstantType();
      return;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(clearSeededInstantType, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [
    seededInstantType,
    open,
    transitionStatus,
    runOnceAnimationsFinish,
    store,
  ]);
  useIsoLayoutEffect(() => {
    if (contextMenuContext && !parentMenuRootContext) {
      store.update({
        parent: {
          type: "context-menu",
          context: contextMenuContext,
        },
        floatingNodeId: floatingNodeIdFromContext,
        floatingParentNodeId: floatingParentNodeIdFromContext,
      });
    } else if (parentMenuRootContext || !store.select("activeTriggerElement")) {
      store.update({
        floatingNodeId: floatingNodeIdFromContext,
        floatingParentNodeId: floatingParentNodeIdFromContext,
      });
    }
  }, [
    contextMenuContext,
    parentMenuRootContext,
    floatingNodeIdFromContext,
    floatingParentNodeIdFromContext,
    activeTriggerElement,
    store,
  ]);
  React105.useEffect(() => {
    if (!open) {
      openEventRef.current = null;
    }
    if (parent.type !== "context-menu") {
      return;
    }
    if (!open) {
      allowOutsidePressDismissalTimeout.clear();
      allowOutsidePressDismissalRef.current = false;
      return;
    }
    allowOutsidePressDismissalTimeout.start(500, () => {
      allowOutsidePressDismissalRef.current = true;
    });
  }, [allowOutsidePressDismissalTimeout, open, parent.type]);
  useIsoLayoutEffect(() => {
    if (!open && !hoverEnabled) {
      store.set("hoverEnabled", true);
    }
  }, [open, hoverEnabled, store]);
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    const reason = eventDetails.reason;
    if (!nextOpen && !store.select("open")) {
      return;
    }
    if (
      open === nextOpen &&
      eventDetails.trigger === activeTriggerElement &&
      lastOpenChangeReason === reason
    ) {
      return;
    }
    const shouldPreventUnmountOnClose =
      attachPreventUnmountOnClose(eventDetails);
    if (!nextOpen && eventDetails.trigger == null) {
      eventDetails.trigger = activeTriggerElement ?? undefined;
    }
    onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    const nativeEvent = eventDetails.event;
    if (
      nextOpen === false &&
      reason !== itemPress &&
      nativeEvent?.type === "click" &&
      nativeEvent.pointerType === "touch" &&
      !allowTouchToCloseRef.current
    ) {
      return;
    }
    if (nextOpen && reason === triggerFocus) {
      allowTouchToCloseRef.current = false;
      allowTouchToCloseTimeout.start(300, () => {
        allowTouchToCloseRef.current = true;
      });
    } else {
      allowTouchToCloseRef.current = true;
      allowTouchToCloseTimeout.clear();
    }
    const isDismissClose =
      !nextOpen && (reason === escapeKey || reason == null);
    openEventRef.current = eventDetails.event;
    const popupOpenState = createPopupOpenState(
      store.state,
      nextOpen,
      eventDetails.trigger,
      shouldPreventUnmountOnClose(),
    );
    popupOpenState.openChangeReason = reason;
    popupOpenState.keyboardOpen =
      nextOpen && isKeyboardOpen(reason, nativeEvent);
    if (
      parent.type === "menubar" &&
      (reason === triggerFocus ||
        reason === focusOut ||
        reason === triggerHover ||
        reason === listNavigation ||
        reason === siblingOpen)
    ) {
      popupOpenState.instantType = "group";
    } else if (isKeyboardClick(reason, nativeEvent)) {
      popupOpenState.instantType = "click";
    } else if (isDismissClose) {
      popupOpenState.instantType = "dismiss";
    } else {
      popupOpenState.instantType = undefined;
    }
    store.update(popupOpenState);
  });
  const floatingRootContext = useSyncedFloatingRootContext({
    popupStore: store,
    floatingRootContext: store.state.floatingRootContext,
    floatingId,
    nested: floatingParentNodeIdFromContext != null,
    onOpenChange: setOpen,
  });
  const floatingEvents = floatingRootContext.context.events;
  useIsoLayoutEffect(() => {
    const handleSetOpenEvent = ({ open: nextOpen, eventDetails }) =>
      setOpen(nextOpen, eventDetails);
    floatingEvents.on("setOpen", handleSetOpenEvent);
    return () => {
      floatingEvents?.off("setOpen", handleSetOpenEvent);
    };
  }, [floatingEvents, setOpen]);
  useIsoLayoutEffect(() => store.subscribeToParentMenu(), [store]);
  const handleImperativeClose = React105.useCallback(() => {
    store.setOpen(false, createChangeEventDetails(imperativeAction));
  }, [store]);
  React105.useImperativeHandle(
    actionsRef,
    () => ({
      unmount: forceUnmount,
      close: handleImperativeClose,
    }),
    [forceUnmount, handleImperativeClose],
  );
  let ctx;
  if (parent.type === "context-menu") {
    ctx = parent.context;
  }
  React105.useImperativeHandle(ctx?.positionerRef, () => positionerElement, [
    positionerElement,
  ]);
  React105.useImperativeHandle(
    ctx?.actionsRef,
    () => ({
      setOpen,
    }),
    [setOpen],
  );
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !disabled,
    bubbles: {
      escapeKey: closeParentOnEsc && parent.type === "menu",
    },
    outsidePress() {
      if (
        parent.type !== "context-menu" ||
        openEventRef.current?.type === "contextmenu"
      ) {
        return true;
      }
      return allowOutsidePressDismissalRef.current;
    },
    externalTree: nested ? floatingTreeRoot : undefined,
  });
  const direction = useDirection();
  const listNavigation2 = useListNavigation(floatingRootContext, {
    enabled: !disabled,
    listRef: store.context.itemDomElements,
    activeIndex,
    virtual: virtualFocus,
    nested:
      parent.type === "menubar" || (!virtualFocus && parent.type !== undefined),
    parentOrientation:
      parent.type === "menubar" ? parent.context.orientation : undefined,
    loopFocus,
    focusItemOnOpen: virtualFocus ? keyboardOpen : undefined,
    allowEscape: virtualFocus && loopFocus && allowEscape,
    orientation,
    triggerOrientation: virtualFocus ? "vertical" : orientation,
    rtl: direction === "rtl",
    disabledIndices: EMPTY_ARRAY,
    onNavigate(nextActiveIndex, event) {
      store.setActiveIndex(
        nextActiveIndex,
        getHighlightReason(event),
        event?.nativeEvent,
      );
    },
    openOnArrowKeyDown:
      parent.type !== "context-menu" && !(virtualFocus && isSubmenu),
    externalTree: !virtualFocus && nested ? floatingTreeRoot : undefined,
    nestedReturnFocusRef: parentMenuStore?.context.virtualFocusRef,
    focusItemOnHover: highlightItemOnHover,
    resetOnPointerLeave,
  });
  const onTyping = React105.useCallback(
    (nextTyping) => {
      store.context.typingRef.current = nextTyping;
    },
    [store],
  );
  const typeahead = useTypeahead(floatingRootContext, {
    enabled: !disabled && !virtualFocus,
    listRef: store.context.itemLabels,
    elementsRef: store.context.itemDomElements,
    activeIndex,
    resetMs: TYPEAHEAD_RESET_MS,
    onMatch: (index, event) => {
      if (open && index !== activeIndex) {
        store.setActiveIndex(index, keyboard, event.nativeEvent);
      }
    },
    onTyping,
  });
  const onItemHighlighted = useStableCallback(onItemHighlightedProp);
  const lastHighlightIndexRef = React105.useRef(-1);
  const syncHighlightedItem = useStableCallback(() => {
    const index = store.state.activeIndex;
    const item =
      index === null
        ? undefined
        : (store.context.itemDomElements.current[index] ?? undefined);
    if (item?.isConnected === false) {
      return;
    }
    const itemIndex = item === undefined ? -1 : index;
    if (
      lastHighlightIndexRef.current === itemIndex &&
      store.context.reportedItem === item
    ) {
      return;
    }
    lastHighlightIndexRef.current = itemIndex;
    store.context.reportedItem = item;
    if (virtualFocus) {
      store.set("highlightedItem", item);
    }
    const { highlightReason, highlightEvent } = store.context;
    store.context.highlightReason = none;
    store.context.highlightEvent = undefined;
    if (!onItemHighlightedProp) {
      return;
    }
    onItemHighlighted(
      item,
      createGenericEventDetails(highlightReason, highlightEvent, {
        label:
          item === undefined
            ? undefined
            : (store.context.itemLabels.current[itemIndex] ?? undefined),
      }),
    );
  });
  useIsoLayoutEffect(() => {
    syncHighlightedItem();
  }, [activeIndex, syncHighlightedItem]);
  const openTriggerProps = React105.useMemo(() => {
    if (!virtualFocus) {
      return listNavigation2.reference;
    }
    if (!listNavigation2.trigger) {
      return EMPTY_OBJECT;
    }
    const { onFocus, ...rest } = listNavigation2.trigger;
    return rest;
  }, [virtualFocus, listNavigation2.reference, listNavigation2.trigger]);
  store.useSyncedValue(
    "inputProps",
    virtualFocus ? (listNavigation2.reference ?? EMPTY_OBJECT) : EMPTY_OBJECT,
  );
  const activeTriggerProps = React105.useMemo(() => {
    const mergedProps = mergeProps(
      typeahead.reference,
      openTriggerProps,
      dismiss.reference,
      {
        onMouseMove() {
          store.set("allowMouseEnter", true);
        },
      },
      interactionTypeProps,
    );
    mergedProps["aria-haspopup"] = "menu";
    mergedProps["aria-expanded"] = open;
    return mergedProps;
  }, [
    store,
    typeahead.reference,
    openTriggerProps,
    dismiss.reference,
    interactionTypeProps,
    open,
  ]);
  const inactiveTriggerProps = React105.useMemo(() => {
    const mergedProps = mergeProps(
      listNavigation2.trigger,
      dismiss.trigger,
      interactionTypeProps,
    );
    mergedProps["aria-haspopup"] = "menu";
    mergedProps["aria-expanded"] = false;
    return mergedProps;
  }, [listNavigation2.trigger, dismiss.trigger, interactionTypeProps]);
  useRefWithInit(() => {
    store.update({
      inactiveTriggerProps,
    });
    return null;
  });
  const popupProps = React105.useMemo(
    () =>
      mergeProps(
        FOCUSABLE_POPUP_PROPS,
        {
          onMouseMove() {
            store.set("allowMouseEnter", true);
            if (parent.type === "menu") {
              store.set("hoverEnabled", false);
            }
          },
          onClick() {
            if (store.select("hoverEnabled")) {
              store.set("hoverEnabled", false);
            }
          },
          onKeyDown(event) {
            const relay = store.select("keyboardEventRelay");
            if (relay && !event.isPropagationStopped()) {
              relay(event);
            }
          },
        },
        typeahead.floating,
        listNavigation2.floating,
        dismiss.floating,
      ),
    [
      parent.type,
      store,
      typeahead.floating,
      listNavigation2.floating,
      dismiss.floating,
    ],
  );
  const itemProps = listNavigation2.item ?? EMPTY_OBJECT;
  usePopupInteractionProps(store, {
    floatingRootContext,
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps,
    itemProps,
  });
  const context = React105.useMemo(
    () => ({
      store,
      parent: parentFromContext,
      orientation,
      loopFocus,
      allowEscape,
      defaultFloatingId,
      setRenderedFloatingId,
      virtualFocus,
      parentVirtualFocus,
      syncHighlightedItem,
    }),
    [
      store,
      parentFromContext,
      orientation,
      loopFocus,
      allowEscape,
      defaultFloatingId,
      virtualFocus,
      parentVirtualFocus,
      syncHighlightedItem,
    ],
  );
  const renderedChildren =
    typeof children === "function"
      ? children({
          payload,
        })
      : children;
  let content = /* @__PURE__ */ _jsxs9(MenuRootContext.Provider, {
    value: context,
    children: [
      handle &&
        /* @__PURE__ */ _jsx20(PopupHandleAttachment, {
          handle,
          store,
        }),
      renderedChildren,
    ],
  });
  if (parent.type === undefined || parent.type === "context-menu") {
    content = /* @__PURE__ */ _jsx20(FloatingTree, {
      externalTree: floatingTreeRoot,
      children: content,
    });
  }
  return content;
});
if (true) MenuRootInternal.displayName = "MenuRootInternal";
function MenuRoot(props) {
  const filterProvider = React105.useContext(MenuFilterProviderContext);
  if (filterProvider === null) {
    return /* @__PURE__ */ _jsx20(MenuRootInternal, {
      ...props,
    });
  }
  const FilterRoot = filterProvider.Root;
  return /* @__PURE__ */ _jsx20(MenuFilterProviderContext.Provider, {
    value: null,
    children: /* @__PURE__ */ _jsx20(FilterRoot, {
      ...filterProvider.options,
      ...props,
    }),
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
import * as React107 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs
var BOUNDARY_OFFSET = 5;
function isMouseWithinBounds(event, element) {
  const bounds = getPseudoElementBounds(element);
  return (
    event.clientX >= bounds.left - BOUNDARY_OFFSET &&
    event.clientX <= bounds.right + BOUNDARY_OFFSET &&
    event.clientY >= bounds.top - BOUNDARY_OFFSET &&
    event.clientY <= bounds.bottom + BOUNDARY_OFFSET
  );
}
function getPseudoElementBounds(element) {
  const elementRect = element.getBoundingClientRect();
  const win = getWindow(element);
  if (exports_env.jsdom) {
    return elementRect;
  }
  const beforeStyles = win.getComputedStyle(element, "::before");
  const afterStyles = win.getComputedStyle(element, "::after");
  const hasPseudoElements =
    beforeStyles.content !== "none" || afterStyles.content !== "none";
  if (!hasPseudoElements) {
    return elementRect;
  }
  const beforeWidth = parseFloat(beforeStyles.width) || 0;
  const beforeHeight = parseFloat(beforeStyles.height) || 0;
  const afterWidth = parseFloat(afterStyles.width) || 0;
  const afterHeight = parseFloat(afterStyles.height) || 0;
  const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
  const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
  const widthDiff = totalWidth - elementRect.width;
  const heightDiff = totalHeight - elementRect.height;
  return {
    left: elementRect.left - widthDiff / 2,
    right: elementRect.right + widthDiff / 2,
    top: elementRect.top - heightDiff / 2,
    bottom: elementRect.bottom + heightDiff / 2,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/utils/findRootOwnerId.mjs
function findRootOwnerId(node) {
  if (isHTMLElement(node) && node.hasAttribute("data-rootownerid")) {
    return node.getAttribute("data-rootownerid");
  }
  if (isLastTraversableNode(node)) {
    return;
  }
  return findRootOwnerId(getParentNode(node));
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/popups/useTriggerFocusGuards.mjs
import * as ReactDOM6 from "react-dom";

("use client");
function useTriggerFocusGuards(store, triggerElementRef) {
  function closeAndFocus(event, direction, positionerElement) {
    const guard = event.currentTarget;
    ReactDOM6.flushSync(() => {
      store.setOpen(
        false,
        createChangeEventDetails(focusOut, event.nativeEvent, guard),
      );
    });
    getTabbableNearElement(
      guard.isConnected ? guard : triggerElementRef.current,
      direction,
      positionerElement,
    )?.focus();
  }
  function handlePreFocusGuardFocus(event) {
    closeAndFocus(event, -1, store.select("positionerElement"));
  }
  function handleFocusTargetFocus(event) {
    const positionerElement = store.select("positionerElement");
    if (positionerElement && isOutsideEvent(event, positionerElement)) {
      store.context.beforeContentFocusGuardRef.current?.focus();
    } else {
      closeAndFocus(event, 1, positionerElement);
    }
  }
  return {
    handlePreFocusGuardFocus,
    handleFocusTargetFocus,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useMixedToggleClickHandler.mjs
import * as React106 from "react";

("use client");
function useMixedToggleClickHandler(params) {
  const { enabled = true, mouseDownAction, open } = params;
  const ignoreClickRef = React106.useRef(false);
  return React106.useMemo(() => {
    if (!enabled) {
      return EMPTY_OBJECT;
    }
    return {
      onMouseDown: (event) => {
        if (
          (mouseDownAction === "open" && !open) ||
          (mouseDownAction === "close" && open)
        ) {
          ignoreClickRef.current = true;
          ownerDocument(event.currentTarget).addEventListener(
            "click",
            () => {
              ignoreClickRef.current = false;
            },
            {
              once: true,
            },
          );
        }
      },
      onClick: (event) => {
        if (ignoreClickRef.current) {
          ignoreClickRef.current = false;
          event.preventBaseUIHandler();
        }
      },
    };
  }, [enabled, mouseDownAction, open]);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/menu/trigger/MenuTrigger.mjs
import { jsx as _jsx21, jsxs as _jsxs10 } from "react/jsx-runtime";

("use client");
var MenuTrigger = fastComponentRef(
  function MenuTrigger(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled: disabledProp = false,
      nativeButton = true,
      id: idProp,
      openOnHover: openOnHoverProp,
      delay = 100,
      closeDelay = 0,
      handle,
      payload,
      ...elementProps
    } = componentProps;
    const rootContext = useMenuRootContext(true);
    const handleStore = usePopupHandleStore(handle);
    const store = handleStore ?? rootContext?.store;
    if (!store) {
      throw new Error(
        "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle.",
      );
    }
    const thisTriggerId = useBaseUiId(idProp);
    const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
    const floatingRootContext = store.useState("floatingRootContext");
    const isOpenedByThisTrigger = store.useState(
      "isOpenedByTrigger",
      thisTriggerId,
    );
    const controlsId = store.useState("triggerControlsId", thisTriggerId);
    const triggerElementRef = React107.useRef(null);
    const parent = useMenuParent();
    const compositeRootContext = useCompositeRootContext(true);
    const floatingTreeRootFromContext = useFloatingTree();
    const floatingTreeRoot = React107.useMemo(() => {
      return floatingTreeRootFromContext ?? new FloatingTreeStore();
    }, [floatingTreeRootFromContext]);
    const floatingNodeId = useFloatingNodeId(floatingTreeRoot);
    const floatingParentNodeId = useFloatingParentNodeId();
    const { registerTrigger, isMountedByThisTrigger } =
      useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
        payload,
        closeDelay,
        parent,
        floatingTreeRoot,
        floatingNodeId,
        floatingParentNodeId,
        keyboardEventRelay: compositeRootContext?.relayKeyboardEvent,
      });
    const isInMenubar = parent.type === "menubar";
    const rootDisabled = store.useState("disabled");
    const disabled =
      disabledProp || rootDisabled || (isInMenubar && parent.context.disabled);
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    React107.useEffect(() => {
      if (!isOpenedByThisTrigger && parent.type === undefined) {
        store.context.allowMouseUpTriggerRef.current = false;
      }
    }, [store, isOpenedByThisTrigger, parent.type]);
    const triggerRef = React107.useRef(null);
    const allowMouseUpTriggerTimeout = useTimeout();
    const handleDocumentMouseUp = useStableCallback((mouseEvent) => {
      if (!triggerRef.current) {
        return;
      }
      allowMouseUpTriggerTimeout.clear();
      store.context.allowMouseUpTriggerRef.current = false;
      const mouseUpTarget = mouseEvent.target;
      if (
        contains(triggerRef.current, mouseUpTarget) ||
        contains(store.select("positionerElement"), mouseUpTarget) ||
        mouseUpTarget === triggerRef.current
      ) {
        return;
      }
      if (
        mouseUpTarget != null &&
        findRootOwnerId(mouseUpTarget) === store.select("rootId")
      ) {
        return;
      }
      if (isMouseWithinBounds(mouseEvent, triggerRef.current)) {
        return;
      }
      floatingTreeRoot.events.emit("close", {
        domEvent: mouseEvent,
        reason: cancelOpen,
      });
    });
    React107.useEffect(() => {
      const doc = ownerDocument(triggerRef.current);
      if (
        isOpenedByThisTrigger &&
        store.select("lastOpenChangeReason") === triggerHover
      ) {
        doc.addEventListener("mouseup", handleDocumentMouseUp, {
          once: true,
        });
        return () => {
          doc.removeEventListener("mouseup", handleDocumentMouseUp);
        };
      }
      return;
    }, [isOpenedByThisTrigger, handleDocumentMouseUp, store]);
    const parentMenubarHasSubmenuOpen =
      isInMenubar && parent.context.hasSubmenuOpen;
    const openOnHover = openOnHoverProp ?? parentMenubarHasSubmenuOpen;
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
      enabled:
        openOnHover &&
        !disabled &&
        (!isInMenubar ||
          (parentMenubarHasSubmenuOpen && !isMountedByThisTrigger)),
      handleClose: safePolygon({
        blockPointerEvents: !isInMenubar,
      }),
      mouseOnly: true,
      move: false,
      restMs: parent.type === undefined ? delay : undefined,
      delay: {
        close: closeDelay,
      },
      triggerElementRef,
      externalTree: floatingTreeRoot,
      isActiveTrigger: isTriggerActive,
      isClosing: () => store.select("transitionStatus") === "ending",
    });
    const stickIfOpen = useStickIfOpen(
      isOpenedByThisTrigger,
      store.select("lastOpenChangeReason"),
    );
    const click = useClick(floatingRootContext, {
      enabled: !disabled,
      event: isOpenedByThisTrigger && isInMenubar ? "click" : "mousedown",
      toggle: true,
      ignoreMouse: false,
      stickIfOpen: parent.type === undefined ? stickIfOpen : false,
    });
    const focus = useFocus(floatingRootContext, {
      enabled: !disabled && parentMenubarHasSubmenuOpen,
    });
    const mixedToggleHandlers = useMixedToggleClickHandler({
      open: isOpenedByThisTrigger,
      enabled: isInMenubar,
      mouseDownAction: "open",
    });
    const localInteractionProps = React107.useMemo(
      () => mergeProps(focus.reference, click.reference),
      [focus.reference, click.reference],
    );
    const rootTriggerProps = store.useState(
      "triggerProps",
      isMountedByThisTrigger,
    );
    const filterTriggerProps = store.useState("filterTriggerProps");
    const { handlePreFocusGuardFocus, handleFocusTargetFocus } =
      useTriggerFocusGuards(store, triggerElementRef);
    const state = {
      disabled,
      open: isOpenedByThisTrigger,
    };
    const ref = [
      triggerRef,
      forwardedRef,
      buttonRef,
      registerTrigger,
      triggerElementRef,
    ];
    const props = [
      localInteractionProps,
      hoverProps ?? EMPTY_OBJECT,
      rootTriggerProps,
      {
        "aria-haspopup": "menu",
        "aria-controls": controlsId,
        id: thisTriggerId,
        onMouseDown: (event) => {
          if (store.select("open")) {
            return;
          }
          allowMouseUpTriggerTimeout.start(200, () => {
            store.context.allowMouseUpTriggerRef.current = true;
          });
          const doc = ownerDocument(event.currentTarget);
          doc.addEventListener("mouseup", handleDocumentMouseUp, {
            once: true,
          });
        },
      },
      filterTriggerProps,
      isInMenubar
        ? {
            role: "menuitem",
          }
        : {},
      mixedToggleHandlers,
      elementProps,
      getButtonProps,
    ];
    const element = useRenderElement("button", componentProps, {
      enabled: !isInMenubar,
      stateAttributesMapping: pressableTriggerOpenStateMapping,
      state,
      ref,
      props,
    });
    if (isInMenubar) {
      return /* @__PURE__ */ _jsx21(CompositeItem, {
        tag: "button",
        render,
        className,
        style,
        state,
        refs: ref,
        props,
        stateAttributesMapping: pressableTriggerOpenStateMapping,
      });
    }
    if (isOpenedByThisTrigger) {
      return /* @__PURE__ */ _jsxs10(React107.Fragment, {
        children: [
          /* @__PURE__ */ _jsx21(
            FocusGuard,
            {
              ref: store.context.beforeTriggerFocusGuardRef,
              onFocus: handlePreFocusGuardFocus,
            },
            `${thisTriggerId}-pre-focus-guard`,
          ),
          /* @__PURE__ */ _jsx21(
            React107.Fragment,
            {
              children: element,
            },
            thisTriggerId,
          ),
          /* @__PURE__ */ _jsx21(
            FocusGuard,
            {
              ref: store.context.triggerFocusTargetRef,
              onFocus: handleFocusTargetFocus,
            },
            `${thisTriggerId}-post-focus-guard`,
          ),
        ],
      });
    }
    return /* @__PURE__ */ _jsx21(
      React107.Fragment,
      {
        children: element,
      },
      thisTriggerId,
    );
  },
);
if (true) MenuTrigger.displayName = "MenuTrigger";
function useStickIfOpen(open, openReason) {
  const stickIfOpenTimeout = useTimeout();
  const [stickIfOpen, setStickIfOpen] = React107.useState(false);
  useIsoLayoutEffect(() => {
    if (open && openReason === triggerHover) {
      setStickIfOpen(true);
      stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
        setStickIfOpen(false);
      });
    } else if (!open) {
      stickIfOpenTimeout.clear();
      setStickIfOpen(false);
    }
  }, [open, openReason, stickIfOpenTimeout]);
  return stickIfOpen;
}
function useMenuParent() {
  const menubarContext = useMenubarContext(true);
  const parent = React107.useMemo(() => {
    if (menubarContext) {
      return {
        type: "menubar",
        context: menubarContext,
      };
    }
    return {
      type: undefined,
    };
  }, [menubarContext]);
  return parent;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/usePreviousValue.mjs
import * as React108 from "react";

("use client");
function usePreviousValue(value) {
  const [state, setState] = React108.useState({
    current: value,
    previous: null,
  });
  if (!Object.is(value, state.current)) {
    setState({
      current: value,
      previous: state.current,
    });
  }
  return state.previous;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/separator/Separator.mjs
import * as React109 from "react";

("use client");
var Separator = /* @__PURE__ */ React109.forwardRef(
  function SeparatorComponent(componentProps, forwardedRef) {
    const {
      className,
      render,
      orientation = "horizontal",
      style,
      ...elementProps
    } = componentProps;
    const state = {
      orientation,
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: [
        {
          role: "separator",
          "aria-orientation": orientation,
        },
        elementProps,
      ],
    });
    return element;
  },
);
if (true) Separator.displayName = "Separator";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/resolveValueLabel.mjs
import * as React110 from "react";
import { jsx as _jsx22 } from "react/jsx-runtime";

("use client");
function isGroup(item) {
  return typeof item === "object" && item != null && Array.isArray(item.items);
}
function isGroupedItems(items) {
  return isGroup(items?.[0]);
}
function flattenLeafItems(items) {
  return isGroupedItems(items) ? items.flatMap((group) => group.items) : items;
}
function hasNullItemLabel(items) {
  if (!Array.isArray(items)) {
    return items != null && "null" in items;
  }
  const arrayItems = items;
  if (isGroupedItems(arrayItems)) {
    for (const group of arrayItems) {
      for (const item of group.items) {
        if (item && item.value == null && item.label != null) {
          return true;
        }
      }
    }
    return false;
  }
  for (const item of arrayItems) {
    if (item && item.value == null && item.label != null) {
      return true;
    }
  }
  return false;
}
function stringifyAsLabel(item, itemToStringLabel) {
  if (itemToStringLabel && item != null) {
    return itemToStringLabel(item) ?? "";
  }
  if (item && typeof item === "object") {
    if ("label" in item && item.label != null) {
      return String(item.label);
    }
    if ("value" in item) {
      return String(item.value);
    }
  }
  return serializeValue(item);
}
function stringifyAsValue(item, itemToStringValue) {
  if (itemToStringValue && item != null) {
    return itemToStringValue(item) ?? "";
  }
  if (item && typeof item === "object" && "value" in item && "label" in item) {
    return serializeValue(item.value);
  }
  return serializeValue(item);
}
function resolveSelectedLabel(value, items, itemToStringLabel) {
  function fallback() {
    return stringifyAsLabel(value, itemToStringLabel);
  }
  if (itemToStringLabel && value != null) {
    return itemToStringLabel(value);
  }
  if (
    value &&
    typeof value === "object" &&
    "label" in value &&
    value.label != null
  ) {
    return value.label;
  }
  if (items && !Array.isArray(items)) {
    const label = Object.hasOwn(items, value) ? items[value] : undefined;
    return label ?? fallback();
  }
  if (Array.isArray(items)) {
    const arrayItems = items;
    const flatItems = flattenLeafItems(arrayItems);
    if (value == null || typeof value !== "object") {
      const match = flatItems.find((item) => item.value === value);
      if (match && match.label != null) {
        return match.label;
      }
      return fallback();
    }
    if ("value" in value) {
      const match = flatItems.find(
        (item) => item && item.value === value.value,
      );
      if (match && match.label != null) {
        return match.label;
      }
    }
  }
  return fallback();
}
function resolveMultipleLabels(values, items, itemToStringLabel) {
  return values.reduce((acc, value, index) => {
    if (index > 0) {
      acc.push(", ");
    }
    acc.push(
      /* @__PURE__ */ _jsx22(
        React110.Fragment,
        {
          children: resolveSelectedLabel(value, items, itemToStringLabel),
        },
        index,
      ),
    );
    return acc;
  }, []);
}

// src/menu.tsx
import { Fragment as Fragment5 } from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";

function MenuButton({
  trigger,
  items,
  label,
  open,
  defaultOpen,
  onOpenChange,
  side = "bottom",
  className,
}) {
  return /* @__PURE__ */ jsxs5(MenuRoot, {
    open,
    defaultOpen,
    onOpenChange: (next) => onOpenChange?.(next),
    children: [
      /* @__PURE__ */ jsx6(MenuTrigger, {
        render: trigger,
      }),
      /* @__PURE__ */ jsx6(MenuPortal, {
        children: /* @__PURE__ */ jsx6(MenuPositioner, {
          side,
          sideOffset: 6,
          children: /* @__PURE__ */ jsxs5(MenuPopup, {
            className: cx(parts.menu, className),
            children: [
              label
                ? /* @__PURE__ */ jsx6(MenuGroupLabel, {
                    className: parts.menuLabel,
                    children: label,
                  })
                : null,
              items.map((item, index) =>
                /* @__PURE__ */ jsxs5(
                  Fragment5,
                  {
                    children: [
                      item.separatorBefore
                        ? /* @__PURE__ */ jsx6(Separator, {
                            className: parts.menuSeparator,
                          })
                        : null,
                      /* @__PURE__ */ jsxs5(MenuItem, {
                        className: parts.menuItem,
                        "data-tone": item.tone,
                        disabled: item.disabled,
                        onClick: item.onSelect,
                        children: [
                          /* @__PURE__ */ jsx6("span", {
                            children: item.label,
                          }),
                          item.hint
                            ? /* @__PURE__ */ jsx6("span", {
                                className: "fox-muted fox-mono",
                                children: item.hint,
                              })
                            : null,
                        ],
                      }),
                    ],
                  },
                  `${index}-${String(item.label)}`,
                ),
              ),
            ],
          }),
        }),
      }),
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/root/PopoverRoot.mjs
import * as React113 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/root/PopoverRootContext.mjs
import * as React111 from "react";

("use client");
var PopoverRootContext = /* @__PURE__ */ React111.createContext(undefined);
if (true) PopoverRootContext.displayName = "PopoverRootContext";
function usePopoverRootContext(optional) {
  const context = React111.useContext(PopoverRootContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/store/PopoverStore.mjs
import * as React112 from "react";
import * as ReactDOM7 from "react-dom";

("use client");
var selectors4 = {
  ...popupStoreSelectors,
  disabled: (state) => state.disabled,
  instantType: (state) =>
    state.instantType === "trigger-change" && !popupStoreSelectors.open(state)
      ? undefined
      : state.instantType,
  openMethod: (state) => state.openMethod,
  openChangeReason: (state) => state.openChangeReason,
  isPressOpenedByTrigger: (state, triggerId) =>
    state.openChangeReason === triggerPress &&
    popupStoreSelectors.isOpenedByTrigger(state, triggerId),
  isTouchPressOpen: (state, openOnHover) =>
    openOnHover &&
    state.openMethod === "touch" &&
    state.openChangeReason === triggerPress,
  hasTriggerFocusGuards: (state, triggerId) =>
    popupStoreSelectors.isOpenedByTrigger(state, triggerId) &&
    !state.focusManagerModal,
  modal: (state) => state.modal,
  titleElementId: (state) => state.titleElementId,
  descriptionElementId: (state) => state.descriptionElementId,
  openOnHover: (state) => state.openOnHover,
  closeDelay: (state) => state.closeDelay,
  adaptiveOrigin: (state) => state.adaptiveOrigin,
};

class PopoverStore extends ReactStore {
  constructor(initialState, floatingId, nested) {
    const triggerElements = new PopupTriggerMap();
    super(
      createInitialState3(initialState, triggerElements, floatingId, nested),
      createInitialContext3(triggerElements),
      selectors4,
    );
  }
  setOpen = (nextOpen, eventDetails) => {
    const isHover = eventDetails.reason === triggerHover;
    const isKeyboardClick =
      eventDetails.reason === triggerPress && eventDetails.event.detail === 0;
    const isDismissClose =
      !nextOpen &&
      (eventDetails.reason === escapeKey || eventDetails.reason == null);
    const shouldPreventUnmountOnClose =
      attachPreventUnmountOnClose(eventDetails);
    const activeTriggerId = this.select("activeTriggerId");
    if (
      !nextOpen &&
      eventDetails.reason === closePress &&
      eventDetails.trigger == null &&
      activeTriggerId != null
    ) {
      eventDetails.trigger =
        this.context.triggerElements.getById(activeTriggerId) ??
        this.select("activeTriggerElement") ??
        undefined;
    }
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    const changeState = () => {
      const popupOpenState = createPopupOpenState(
        this.state,
        nextOpen,
        eventDetails.trigger,
        shouldPreventUnmountOnClose(),
      );
      popupOpenState.openChangeReason = eventDetails.reason;
      this.update(popupOpenState);
    };
    if (isHover) {
      this.context.stickIfOpen = true;
      this.context.stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
        this.context.stickIfOpen = false;
      });
      ReactDOM7.flushSync(changeState);
    } else {
      changeState();
    }
    let instantType;
    if (isKeyboardClick) {
      instantType = "click";
    } else if (isDismissClose) {
      instantType = "dismiss";
    } else if (eventDetails.reason === focusOut) {
      instantType = "focus";
    }
    this.set("instantType", instantType);
  };
}
function createInitialState3(
  initialState,
  triggerElements,
  floatingId,
  nested = false,
) {
  const state = {
    ...createInitialPopupStoreState(triggerElements, floatingId, nested),
    disabled: false,
    modal: false,
    focusManagerModal: false,
    instantType: undefined,
    openMethod: null,
    openChangeReason: null,
    titleElementId: undefined,
    descriptionElementId: undefined,
    openOnHover: false,
    closeDelay: 0,
    adaptiveOrigin: undefined,
    ...initialState,
  };
  if (state.open && initialState?.mounted === undefined) {
    state.mounted = true;
  }
  return state;
}
function createInitialContext3(triggerElements) {
  return {
    popupRef: /* @__PURE__ */ React112.createRef(),
    onOpenChange: undefined,
    onOpenChangeComplete: undefined,
    triggerFocusTargetRef: /* @__PURE__ */ React112.createRef(),
    beforeTriggerFocusGuardRef: /* @__PURE__ */ React112.createRef(),
    beforeContentFocusGuardRef: /* @__PURE__ */ React112.createRef(),
    stickIfOpenTimeout: new Timeout(),
    stickIfOpen: true,
    triggerElements,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/root/PopoverRoot.mjs
import { jsx as _jsx23, jsxs as _jsxs11 } from "react/jsx-runtime";

("use client");
var PopoverRootComponent = fastComponent(function PopoverRootComponent({
  props,
}) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    modal = false,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
  } = props;
  const store = usePopoverRootStore(handle, {
    modal,
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp,
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const payload = store.useState("payload");
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  usePopupRootSync(store, open);
  useImplicitActiveTrigger(store);
  const { forceUnmount } = useOpenStateTransitions(open, store, () => {
    store.context.stickIfOpen = true;
    store.set("openChangeReason", null);
  });
  store.useSyncedValues({
    modal,
  });
  React113.useEffect(() => {
    if (!open) {
      store.context.stickIfOpenTimeout.clear();
    }
  }, [store, open]);
  React113.useImperativeHandle(
    props.actionsRef,
    () => ({
      unmount: forceUnmount,
      close: () =>
        store.setOpen(false, createChangeEventDetails(imperativeAction)),
    }),
    [forceUnmount, store],
  );
  const shouldRenderInteractions = open || mounted || handle != null;
  return /* @__PURE__ */ _jsxs11(PopoverRootContext.Provider, {
    value: store,
    children: [
      handle &&
        /* @__PURE__ */ _jsx23(PopupHandleAttachment, {
          handle,
          store,
        }),
      shouldRenderInteractions &&
        /* @__PURE__ */ _jsx23(PopoverInteractions, {
          store,
          modal,
        }),
      typeof children === "function"
        ? children({
            payload,
          })
        : children,
    ],
  });
});
if (true) PopoverRootComponent.displayName = "PopoverRootComponent";
function PopoverRoot(props) {
  if (usePopoverRootContext(true)) {
    return /* @__PURE__ */ _jsx23(PopoverRootComponent, {
      props,
    });
  }
  return /* @__PURE__ */ _jsx23(FloatingTree, {
    children: /* @__PURE__ */ _jsx23(PopoverRootComponent, {
      props,
    }),
  });
}
function usePopoverRootStore(handle, initialState) {
  const store = usePopupRootStore(
    (floatingId, nested) => new PopoverStore(initialState, floatingId, nested),
  );
  React113.useEffect(
    () => store.context.stickIfOpenTimeout.disposeEffect(),
    [store],
  );
  return store;
}
function PopoverInteractions({ store, modal }) {
  const floatingRootContext = store.useState("floatingRootContext");
  const dismiss = useDismiss(floatingRootContext, {
    outsidePressEvent: {
      mouse: modal === "trap-focus" ? "sloppy" : "intentional",
      touch: "sloppy",
    },
  });
  const triggerProps = dismiss.reference;
  const popupProps = dismiss.floating;
  usePopupInteractionProps(store, {
    activeTriggerProps: triggerProps,
    inactiveTriggerProps: triggerProps,
    popupProps,
  });
  return null;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.mjs
import * as React114 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/utils/constants.mjs
var OPEN_DELAY = 300;

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.mjs
import { jsx as _jsx24, jsxs as _jsxs12 } from "react/jsx-runtime";

("use client");
var PopoverTrigger = fastComponentRef(
  function PopoverTrigger(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled = false,
      nativeButton = true,
      handle,
      payload,
      openOnHover = false,
      delay = OPEN_DELAY,
      closeDelay = 0,
      id: idProp,
      ...elementProps
    } = componentProps;
    const rootStore = usePopoverRootContext(true);
    const handleStore = usePopupHandleStore(handle);
    const store = handleStore ?? rootStore;
    if (!store) {
      throw new Error(
        "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle.",
      );
    }
    const thisTriggerId = useBaseUiId(idProp);
    const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
    const floatingContext = store.useState("floatingRootContext");
    const isOpenedByThisTrigger = store.useState(
      "isOpenedByTrigger",
      thisTriggerId,
    );
    const popupId = store.useState("triggerPopupId", thisTriggerId);
    const triggerElementRef = React114.useRef(null);
    const { registerTrigger, isMountedByThisTrigger } =
      useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
        payload,
        disabled,
        openOnHover,
        closeDelay,
      });
    const isPressOpenedByThisTrigger = store.useState(
      "isPressOpenedByTrigger",
      thisTriggerId,
    );
    const isTouchPressOpen = store.useState("isTouchPressOpen", openOnHover);
    const hasFocusGuards = store.useState(
      "hasTriggerFocusGuards",
      thisTriggerId,
    );
    const hoverProps = useHoverReferenceInteraction(floatingContext, {
      enabled: !disabled && openOnHover && !isTouchPressOpen,
      mouseOnly: true,
      move: false,
      handleClose: safePolygon(),
      restMs: delay,
      delay: {
        close: closeDelay,
      },
      triggerElementRef,
      isActiveTrigger: isTriggerActive,
      isClosing: () => store.select("transitionStatus") === "ending",
    });
    const getStickIfOpen = useStableCallback(() => store.context.stickIfOpen);
    const click = useClick(floatingContext, {
      stickIfOpen: getStickIfOpen,
    });
    const interactionTypeProps = useOpenMethodTriggerProps(
      () => store.select("open"),
      (interactionType) => {
        store.set("openMethod", interactionType);
      },
    );
    const rootTriggerProps = store.useState(
      "triggerProps",
      isMountedByThisTrigger,
    );
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const stateAttributesMapping = {
      open(value) {
        if (isPressOpenedByThisTrigger) {
          return pressableTriggerOpenStateMapping.open(value);
        }
        return triggerOpenStateMapping.open(value);
      },
    };
    const { handlePreFocusGuardFocus, handleFocusTargetFocus } =
      useTriggerFocusGuards(store, triggerElementRef);
    const state = {
      disabled,
      open: isOpenedByThisTrigger,
    };
    const element = useRenderElement("button", componentProps, {
      state,
      ref: [buttonRef, forwardedRef, registerTrigger, triggerElementRef],
      props: [
        click.reference,
        hoverProps,
        rootTriggerProps,
        interactionTypeProps,
        {
          [CLICK_TRIGGER_IDENTIFIER]: "",
          id: thisTriggerId,
          "aria-haspopup": "dialog",
          "aria-expanded": isOpenedByThisTrigger,
          "aria-controls": popupId,
        },
        elementProps,
        getButtonProps,
      ],
      stateAttributesMapping,
    });
    const keyedElement = /* @__PURE__ */ _jsx24(
      React114.Fragment,
      {
        children: element,
      },
      thisTriggerId,
    );
    if (hasFocusGuards) {
      return /* @__PURE__ */ _jsxs12(React114.Fragment, {
        children: [
          /* @__PURE__ */ _jsx24(FocusGuard, {
            ref: store.context.beforeTriggerFocusGuardRef,
            onFocus: handlePreFocusGuardFocus,
          }),
          keyedElement,
          /* @__PURE__ */ _jsx24(FocusGuard, {
            ref: store.context.triggerFocusTargetRef,
            onFocus: handleFocusTargetFocus,
          }),
        ],
      });
    }
    return keyedElement;
  },
);
if (true) PopoverTrigger.displayName = "PopoverTrigger";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/portal/PopoverPortal.mjs
import * as React116 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/portal/PopoverPortalContext.mjs
import * as React115 from "react";

("use client");
var PopoverPortalContext = /* @__PURE__ */ React115.createContext(undefined);
if (true) PopoverPortalContext.displayName = "PopoverPortalContext";
function usePopoverPortalContext() {
  const value = React115.useContext(PopoverPortalContext);
  if (value === undefined) {
    throw new Error("Base UI: <Popover.Portal> is missing.");
  }
  return value;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/portal/PopoverPortal.mjs
import { jsx as _jsx25 } from "react/jsx-runtime";

("use client");
var PopoverPortal = /* @__PURE__ */ React116.forwardRef(
  function PopoverPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const store = usePopoverRootContext();
    const mounted = store.useState("mounted");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ _jsx25(PopoverPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ _jsx25(FloatingPortal, {
        ref: forwardedRef,
        ...portalProps,
      }),
    });
  },
);
if (true) PopoverPortal.displayName = "PopoverPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/positioner/PopoverPositioner.mjs
import * as React118 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/positioner/PopoverPositionerContext.mjs
import * as React117 from "react";

("use client");
var PopoverPositionerContext =
  /* @__PURE__ */ React117.createContext(undefined);
if (true) PopoverPositionerContext.displayName = "PopoverPositionerContext";
function usePopoverPositionerContext() {
  const context = React117.useContext(PopoverPositionerContext);
  if (!context) {
    throw new Error(
      "Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/positioner/PopoverPositioner.mjs
import { jsx as _jsx26, jsxs as _jsxs13 } from "react/jsx-runtime";

("use client");
var PopoverPositioner = /* @__PURE__ */ React118.forwardRef(
  function PopoverPositioner(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      anchor,
      positionMethod,
      side,
      align,
      sideOffset,
      alignOffset,
      collisionBoundary = "clipping-ancestors",
      collisionPadding,
      arrowPadding,
      sticky,
      disableAnchorTracking = false,
      collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
      ...elementProps
    } = componentProps;
    const store = usePopoverRootContext();
    const keepMounted = usePopoverPortalContext();
    const nodeId = useFloatingNodeId();
    const floatingRootContext = store.useState("floatingRootContext");
    const mounted = store.useState("mounted");
    const open = store.useState("open");
    const openReason = store.useState("openChangeReason");
    const triggerElement = store.useState("activeTriggerElement");
    const modal = store.useState("modal");
    const openMethod = store.useState("openMethod");
    const positionerElement = store.useState("positionerElement");
    const instantType = store.useState("instantType");
    const transitionStatus = store.useState("transitionStatus");
    const adaptiveOrigin = store.useState("adaptiveOrigin");
    const positioning = useAnchorPositioning({
      anchor,
      floatingRootContext,
      positionMethod,
      mounted,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      disableAnchorTracking,
      keepMounted,
      nodeId,
      collisionAvoidance,
      adaptiveOrigin,
    });
    const domReference = floatingRootContext.useState("domReferenceElement");
    useTriggerSwitchTransition({
      store,
      domReference,
      positionerElement,
      open,
    });
    const trueModalNonHover = modal === true && openReason !== triggerHover;
    useAnchoredPopupScrollLock(
      open && trueModalNonHover,
      openMethod === "touch",
      positionerElement,
      triggerElement,
    );
    const setPositionerElement = store.useStateSetter("positionerElement");
    const state = {
      open,
      side: positioning.side,
      align: positioning.align,
      anchorHidden: positioning.anchorHidden,
      instant: instantType,
    };
    const element = usePositioner(componentProps, state, {
      styles: positioning.positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, setPositionerElement],
      hidden: !mounted,
      inert: !open,
    });
    return /* @__PURE__ */ _jsxs13(PopoverPositionerContext.Provider, {
      value: positioning,
      children: [
        mounted &&
          trueModalNonHover &&
          /* @__PURE__ */ _jsx26(InternalBackdrop, {
            inert: inertValue(!open),
            cutout: triggerElement,
          }),
        /* @__PURE__ */ _jsx26(FloatingNode, {
          id: nodeId,
          children: element,
        }),
      ],
    });
  },
);
if (true) PopoverPositioner.displayName = "PopoverPositioner";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/popup/PopoverPopup.mjs
import * as React120 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/closePart.mjs
import * as React119 from "react";

("use client");
var ClosePartContext = /* @__PURE__ */ React119.createContext(undefined);
if (true) ClosePartContext.displayName = "ClosePartContext";
function useClosePartCount() {
  const [closePartCount, setClosePartCount] = React119.useState(0);
  const register = useStableCallback(() => {
    setClosePartCount((count) => count + 1);
    return () => {
      setClosePartCount((count) => Math.max(0, count - 1));
    };
  });
  const context = React119.useMemo(
    () => ({
      register,
    }),
    [register],
  );
  return {
    context,
    hasClosePart: closePartCount > 0,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/popup/PopoverPopup.mjs
import { jsx as _jsx27 } from "react/jsx-runtime";

("use client");
var PopoverPopup = /* @__PURE__ */ React120.forwardRef(
  function PopoverPopup(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      initialFocus,
      finalFocus,
      ...elementProps
    } = componentProps;
    const store = usePopoverRootContext();
    const positioner = usePopoverPositionerContext();
    const insideToolbar = useToolbarRootContext(true) != null;
    const { context: closePartContext, hasClosePart } = useClosePartCount();
    const open = store.useState("open");
    const openMethod = store.useState("openMethod");
    const instantType = store.useState("instantType");
    const transitionStatus = store.useState("transitionStatus");
    const popupProps = store.useState("popupProps");
    const titleId = store.useState("titleElementId");
    const descriptionId = store.useState("descriptionElementId");
    const modal = store.useState("modal");
    const mounted = store.useState("mounted");
    const openReason = store.useState("openChangeReason");
    const activeTriggerElement = store.useState("activeTriggerElement");
    const floatingContext = store.useState("floatingRootContext");
    const floatingId = floatingContext.useState("floatingId");
    const disabled = store.useState("disabled");
    const openOnHover = store.useState("openOnHover");
    const closeDelay = store.useState("closeDelay");
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      },
    });
    useHoverFloatingInteraction(floatingContext, {
      enabled: openOnHover && !disabled,
      closeDelay,
    });
    const resolvedInitialFocus =
      initialFocus === undefined
        ? createDefaultInitialFocus(store.context.popupRef)
        : initialFocus;
    const focusManagerModal = modal !== false && hasClosePart;
    store.useSyncedValue("focusManagerModal", focusManagerModal);
    const setPopupElement = store.useStateSetter("popupElement");
    const state = {
      open,
      side: positioner.side,
      align: positioner.align,
      instant: instantType,
      transitionStatus,
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, store.context.popupRef, setPopupElement],
      props: [
        popupProps,
        {
          id: floatingId,
          role: "dialog",
          ...FOCUSABLE_POPUP_PROPS,
          "aria-labelledby": titleId,
          "aria-describedby": descriptionId,
          onKeyDown(event) {
            if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
              event.stopPropagation();
            }
          },
        },
        getDisabledMountTransitionStyles(transitionStatus),
        elementProps,
      ],
      stateAttributesMapping: popupTransitionStateMapping,
    });
    return /* @__PURE__ */ _jsx27(FloatingFocusManager, {
      context: floatingContext,
      openInteractionType: openMethod,
      modal: focusManagerModal,
      disabled: !mounted || openReason === triggerHover,
      initialFocus: resolvedInitialFocus,
      returnFocus: finalFocus,
      restoreFocus: "popup",
      getInsideElements: () => [
        store.context.beforeTriggerFocusGuardRef.current,
      ],
      previousFocusableElement: isHTMLElement(activeTriggerElement)
        ? activeTriggerElement
        : undefined,
      nextFocusableElement: store.context.triggerFocusTargetRef,
      beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
      children: /* @__PURE__ */ _jsx27(ClosePartContext.Provider, {
        value: closePartContext,
        children: element,
      }),
    });
  },
);
if (true) PopoverPopup.displayName = "PopoverPopup";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/title/PopoverTitle.mjs
import * as React121 from "react";

("use client");
var PopoverTitle = /* @__PURE__ */ React121.forwardRef(
  function PopoverTitle(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = usePopoverRootContext();
    const id = useBaseUiId(elementProps.id);
    store.useSyncedValueWithCleanup("titleElementId", id);
    const element = useRenderElement("h2", componentProps, {
      ref: forwardedRef,
      props: [
        {
          id,
        },
        elementProps,
      ],
    });
    return element;
  },
);
if (true) PopoverTitle.displayName = "PopoverTitle";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/popover/description/PopoverDescription.mjs
import * as React122 from "react";

("use client");
var PopoverDescription = /* @__PURE__ */ React122.forwardRef(
  function PopoverDescription(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = usePopoverRootContext();
    const id = useBaseUiId(elementProps.id);
    store.useSyncedValueWithCleanup("descriptionElementId", id);
    const element = useRenderElement("p", componentProps, {
      ref: forwardedRef,
      props: [
        {
          id,
        },
        elementProps,
      ],
    });
    return element;
  },
);
if (true) PopoverDescription.displayName = "PopoverDescription";

// src/popover.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";

function PopoverPanel({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
  side = "bottom",
  className,
}) {
  return /* @__PURE__ */ jsxs6(PopoverRoot, {
    open,
    defaultOpen,
    onOpenChange: (next) => onOpenChange?.(next),
    children: [
      /* @__PURE__ */ jsx7(PopoverTrigger, {
        render: trigger,
      }),
      /* @__PURE__ */ jsx7(PopoverPortal, {
        children: /* @__PURE__ */ jsx7(PopoverPositioner, {
          side,
          sideOffset: 6,
          children: /* @__PURE__ */ jsxs6(PopoverPopup, {
            className: cx(parts.popover, className),
            children: [
              title
                ? /* @__PURE__ */ jsx7(PopoverTitle, {
                    className: parts.popoverTitle,
                    children: title,
                  })
                : null,
              description
                ? /* @__PURE__ */ jsx7(PopoverDescription, {
                    className: parts.popoverDescription,
                    children: description,
                  })
                : null,
              children,
            ],
          }),
        }),
      }),
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/root/SelectRoot.mjs
import * as React125 from "react";

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/useOnFirstRender.mjs
import * as React123 from "react";

("use client");
function useOnFirstRender(fn) {
  const ref = React123.useRef(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/root/SelectRootContext.mjs
import * as React124 from "react";

("use client");
var SelectRootContext = /* @__PURE__ */ React124.createContext(undefined);
if (true) SelectRootContext.displayName = "SelectRootContext";
var SelectFloatingContext = /* @__PURE__ */ React124.createContext(undefined);
if (true) SelectFloatingContext.displayName = "SelectFloatingContext";
function useSelectRootContext() {
  const store = React124.useContext(SelectRootContext);
  if (store === undefined) {
    throw new Error(
      "Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>.",
    );
  }
  return store;
}
function useSelectFloatingContext() {
  const context = React124.useContext(SelectFloatingContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/areArraysEqual.mjs
function areArraysEqual(array1, array2, itemComparer = Object.is) {
  const { length } = array1;
  if (length !== array2.length) {
    return false;
  }
  for (let i = 0; i < length; i += 1) {
    if (!itemComparer(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/itemEquality.mjs
var defaultItemEquality = (itemValue, selectedValue) =>
  Object.is(itemValue, selectedValue);
function compareItemEquality(itemValue, selectedValue, comparer) {
  if (itemValue == null || selectedValue == null) {
    return Object.is(itemValue, selectedValue);
  }
  return comparer(itemValue, selectedValue);
}
function isSelectedValueDirty(currentValue, initialValue, comparer) {
  if (Array.isArray(currentValue) && Array.isArray(initialValue)) {
    return !areArraysEqual(
      currentValue,
      initialValue,
      (itemValue, initialItemValue) =>
        compareItemEquality(itemValue, initialItemValue, comparer),
    );
  }
  return currentValue !== initialValue;
}
function selectedValueIncludes(selectedValues, itemValue, comparer) {
  if (!selectedValues) {
    return false;
  }
  return selectedValues.some((selectedValue) => {
    if (selectedValue === undefined) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function findItemIndex(itemValues, selectedValue, comparer) {
  if (!itemValues) {
    return -1;
  }
  return itemValues.findIndex((itemValue) => {
    if (itemValue === undefined) {
      return false;
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  });
}
function createSelectionMatcher(selectedValues, comparer) {
  if (comparer !== defaultItemEquality) {
    return (itemValue) =>
      selectedValueIncludes(selectedValues, itemValue, comparer);
  }
  const index = new Set(selectedValues);
  index.delete(undefined);
  return (itemValue) =>
    index.has(itemValue) &&
    (itemValue !== 0 || selectedValues.some((v) => Object.is(itemValue, v)));
}
function findSelectionIndex(itemValues, selectedValue, comparer, multiple) {
  const index =
    multiple && Array.isArray(selectedValue)
      ? itemValues.findIndex(createSelectionMatcher(selectedValue, comparer))
      : findItemIndex(itemValues, selectedValue, comparer);
  return index === -1 ? null : index;
}
function resolveSelectedIndex(
  index,
  itemValue,
  registry,
  selectedValues,
  comparer,
  currentIndex,
) {
  if (selectedValueIncludes(selectedValues, itemValue, comparer)) {
    return currentIndex != null &&
      index > currentIndex &&
      selectedValueIncludes(selectedValues, registry[currentIndex], comparer)
      ? currentIndex
      : index;
  }
  return index === currentIndex
    ? findSelectionIndex(registry, selectedValues, comparer, true)
    : currentIndex;
}
function removeItem(selectedValues, itemValue, comparer) {
  return selectedValues.filter(
    (selectedValue) => !compareItemEquality(itemValue, selectedValue, comparer),
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/store.mjs
var selectors5 = {
  id: (state) => state.id,
  labelId: (state) => state.labelId,
  modal: (state) => state.modal,
  multiple: (state) => state.multiple,
  disabled: (state) => state.disabled,
  readOnly: (state) => state.readOnly,
  required: (state) => state.required,
  highlightItemOnHover: (state) => state.highlightItemOnHover,
  items: (state) => state.items,
  itemToStringLabel: (state) => state.itemToStringLabel,
  isItemEqualToValue: (state) => state.isItemEqualToValue,
  value: (state) => state.value,
  hasSelectedValue: (state) => {
    const { value, multiple, itemToStringValue } = state;
    if (value == null) {
      return false;
    }
    if (multiple && Array.isArray(value)) {
      return value.length > 0;
    }
    return stringifyAsValue(value, itemToStringValue) !== "";
  },
  hasNullItemLabel: (state, enabled) => {
    return enabled ? hasNullItemLabel(state.items) : false;
  },
  open: (state) => state.open,
  mounted: (state) => state.mounted,
  forceMount: (state) => state.forceMount,
  transitionStatus: (state) => state.transitionStatus,
  openMethod: (state) => state.openMethod,
  activeIndex: (state) => state.activeIndex,
  selectedIndex: (state) => state.selectedIndex,
  isActive: (state, index) => state.activeIndex === index,
  isSelected: (state, itemValue) => {
    const comparer = state.isItemEqualToValue;
    const storeValue = state.value;
    if (state.multiple) {
      return (
        Array.isArray(storeValue) &&
        storeValue.some((selectedItem) =>
          compareItemEquality(itemValue, selectedItem, comparer),
        )
      );
    }
    return compareItemEquality(itemValue, storeValue, comparer);
  },
  isSelectedByFocus: (state, index) => {
    return state.selectedIndex === index;
  },
  popupProps: (state) => state.popupProps,
  triggerProps: (state) => state.triggerProps,
  itemRoot: (state) => state.itemRoot,
  triggerElement: (state) => state.triggerElement,
  positionerElement: (state) => state.positionerElement,
  listElement: (state) => state.listElement,
  popupSide: (state) => state.popupSide,
  scrollUpArrowVisible: (state) => state.scrollUpArrowVisible,
  scrollDownArrowVisible: (state) => state.scrollDownArrowVisible,
  hasScrollArrows: (state) => state.hasScrollArrows,
};

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/clamp.mjs
function clamp2(
  val,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
) {
  return Math.max(min, Math.min(val, max));
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/scrollEdges.mjs
var SCROLL_EDGE_TOLERANCE_PX = 1;
function getMaxScrollOffset(scrollSize, clientSize) {
  return Math.max(0, scrollSize - clientSize);
}
function normalizeScrollOffset(value, max) {
  if (max <= 0) {
    return 0;
  }
  const clamped = clamp2(value, 0, max);
  const startDistance = clamped;
  const endDistance = max - clamped;
  const withinStartTolerance = startDistance <= SCROLL_EDGE_TOLERANCE_PX;
  const withinEndTolerance = endDistance <= SCROLL_EDGE_TOLERANCE_PX;
  if (withinStartTolerance && withinEndTolerance) {
    return startDistance <= endDistance ? 0 : max;
  }
  if (withinStartTolerance) {
    return 0;
  }
  if (withinEndTolerance) {
    return max;
  }
  return clamped;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/root/SelectRoot.mjs
import { jsx as _jsx28, jsxs as _jsxs14 } from "react/jsx-runtime";

("use client");
function SelectRoot(props) {
  const {
    id,
    value: valueProp,
    defaultValue = null,
    onValueChange,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    name: nameProp,
    form,
    autoComplete,
    disabled: disabledProp = false,
    readOnly = false,
    required = false,
    modal = true,
    actionsRef,
    inputRef,
    onOpenChangeComplete,
    items,
    multiple = false,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue = defaultItemEquality,
    highlightItemOnHover = true,
    children,
  } = props;
  const { clearErrors } = useFormContext();
  const {
    setDirty,
    setTouched,
    setFocused,
    validityData,
    setFilled,
    name: fieldName,
    disabled: fieldDisabled,
    validation,
    validationMode,
  } = useFieldRootContext();
  const generatedId = useLabelableId({
    id,
  });
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const [value, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: multiple ? (defaultValue ?? EMPTY_ARRAY) : defaultValue,
    name: "Select",
    state: "value",
  });
  const [open, setOpenUnwrapped] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select",
    state: "open",
  });
  const listRef = React125.useRef([]);
  const labelsRef = React125.useRef([]);
  const popupRef = React125.useRef(null);
  const scrollHandlerRef = React125.useRef(null);
  const scrollArrowsMountedCountRef = React125.useRef(0);
  const valueRef = React125.useRef(null);
  const valuesRef = React125.useRef([]);
  const typingRef = React125.useRef(false);
  const firstItemTextRef = React125.useRef(null);
  const selectedItemTextRef = React125.useRef(null);
  const selectionRef = React125.useRef({
    allowSelectedMouseUp: false,
    allowUnselectedMouseUp: false,
    dragY: 0,
  });
  const alignItemWithTriggerActiveRef = React125.useRef(false);
  const initialValueRef = React125.useRef(value);
  const { openMethod, triggerProps: interactionTypeProps } =
    useOpenInteractionType(open);
  const store = useRefWithInit(
    () =>
      new ReactStore(
        {
          id: generatedId,
          labelId: undefined,
          modal,
          multiple,
          disabled,
          readOnly,
          required,
          highlightItemOnHover,
          itemToStringLabel,
          itemToStringValue,
          isItemEqualToValue,
          value,
          open,
          mounted: open,
          transitionStatus: undefined,
          items,
          forceMount: false,
          openMethod: null,
          activeIndex: null,
          selectedIndex: null,
          popupProps: EMPTY_OBJECT,
          triggerProps: EMPTY_OBJECT,
          itemRoot: {
            props: EMPTY_OBJECT,
            multiple,
            disabled,
            readOnly,
            isItemEqualToValue,
          },
          triggerElement: null,
          positionerElement: null,
          listElement: null,
          popupSide: null,
          scrollUpArrowVisible: false,
          scrollDownArrowVisible: false,
          hasScrollArrows: false,
        },
        {
          setValue: NOOP,
          setOpen: NOOP,
          handleScrollArrowVisibility: NOOP,
          onOpenChangeComplete: NOOP,
          listRef,
          popupRef,
          scrollHandlerRef,
          scrollArrowsMountedCountRef,
          valueRef,
          valuesRef,
          labelsRef,
          typingRef,
          selectionRef,
          firstItemTextRef,
          selectedItemTextRef,
          alignItemWithTriggerActiveRef,
          initialValueRef,
        },
        selectors5,
      ),
  ).current;
  const [preventUnmountOnClose, setPreventUnmountOnClose] =
    React125.useState(false);
  const {
    mounted,
    transitionStatus,
    forceUnmount: handleUnmount,
  } = useUnmountAfterClose({
    open,
    ref: popupRef,
    preventUnmountOnClose,
    setPreventUnmountOnClose,
    onUnmount() {
      store.update({
        activeIndex: null,
        openMethod: null,
        scrollUpArrowVisible: false,
        scrollDownArrowVisible: false,
      });
      onOpenChangeComplete?.(false);
    },
  });
  const activeIndex = store.useState("activeIndex");
  const selectedIndex = store.useState("selectedIndex");
  const triggerElement = store.useState("triggerElement");
  const positionerElement = store.useState("positionerElement");
  const previousOpenMethod = usePreviousValue(openMethod);
  const renderedOpenMethod = openMethod ?? previousOpenMethod;
  const serializedValue = React125.useMemo(() => {
    if (multiple) {
      return "";
    }
    return stringifyAsValue(value, itemToStringValue);
  }, [multiple, value, itemToStringValue]);
  const fieldStringValue = React125.useMemo(() => {
    if (multiple && Array.isArray(value)) {
      return value.map((currentValue) =>
        stringifyAsValue(currentValue, itemToStringValue),
      );
    }
    return stringifyAsValue(value, itemToStringValue);
  }, [multiple, value, itemToStringValue]);
  const controlRef = useValueAsRef(triggerElement);
  const getStringifiedValueForForm = useStableCallback(() => fieldStringValue);
  useRegisterFieldControl(
    controlRef,
    generatedId,
    value,
    getStringifiedValueForForm,
    !disabled,
    nameProp,
  );
  const hasSelectedValue = multiple
    ? Array.isArray(value) && value.length > 0
    : value != null && serializedValue !== "";
  useIsoLayoutEffect(() => {
    setFilled(hasSelectedValue);
  }, [hasSelectedValue, setFilled]);
  useIsoLayoutEffect(
    function syncSelectedIndex() {
      const nextIndex = findSelectionIndex(
        valuesRef.current,
        value,
        isItemEqualToValue,
        multiple,
      );
      if (nextIndex === null) {
        selectedItemTextRef.current = null;
      }
      if (open) {
        return;
      }
      store.set("selectedIndex", nextIndex);
    },
    [multiple, open, value, isItemEqualToValue, store],
  );
  useValueChanged(value, () => {
    clearErrors(name);
    setDirty(
      isSelectedValueDirty(
        value,
        validityData.initialValue,
        isItemEqualToValue,
      ),
    );
    validation.change(value);
  });
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    const openEventDetails = eventDetails;
    const shouldPreventUnmountOnClose =
      attachPreventUnmountOnClose(openEventDetails);
    onOpenChange?.(nextOpen, openEventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (!nextOpen) {
      setPreventUnmountOnClose(shouldPreventUnmountOnClose());
    }
    setOpenUnwrapped(nextOpen);
    if (
      !nextOpen &&
      (eventDetails.reason === focusOut || eventDetails.reason === outsidePress)
    ) {
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(value);
      }
    }
  });
  React125.useImperativeHandle(
    actionsRef,
    () => ({
      unmount: handleUnmount,
      close: () => {
        if (store.state.open) {
          setOpen(false, createChangeEventDetails(imperativeAction));
        }
      },
    }),
    [handleUnmount, setOpen, store],
  );
  const setValue = useStableCallback((nextValue, eventDetails) => {
    onValueChange?.(nextValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setValueUnwrapped(nextValue);
  });
  const handleScrollArrowVisibility = useStableCallback((scroller) => {
    const maxScrollTop = getMaxScrollOffset(
      scroller.scrollHeight,
      scroller.clientHeight,
    );
    const scrollTop = normalizeScrollOffset(scroller.scrollTop, maxScrollTop);
    const shouldShowUp = scrollTop > 0;
    const shouldShowDown = scrollTop < maxScrollTop;
    store.set("scrollUpArrowVisible", shouldShowUp);
    store.set("scrollDownArrowVisible", shouldShowDown);
  });
  const floatingContext = useFloatingRootContext({
    open,
    onOpenChange: setOpen,
    elements: {
      reference: triggerElement,
      floating: positionerElement,
    },
  });
  const click = useClick(floatingContext, {
    enabled: !disabled,
    event: "mousedown",
  });
  const dismiss = useDismiss(floatingContext);
  const listNavigation = useListNavigation(floatingContext, {
    enabled: !disabled,
    listRef,
    activeIndex,
    selectedIndex,
    disabledIndices: EMPTY_ARRAY,
    onNavigate(nextActiveIndex) {
      if (nextActiveIndex === null && !open) {
        return;
      }
      store.set("activeIndex", nextActiveIndex);
    },
    focusItemOnHover: highlightItemOnHover,
  });
  const typeahead = useTypeahead(floatingContext, {
    enabled: !disabled && (open || (!readOnly && !multiple)),
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    disabledIndices: (index) => isElementDisabled(listRef.current[index]),
    onMatch(index) {
      if (open) {
        store.set("activeIndex", index);
      } else {
        setValue(valuesRef.current[index], createChangeEventDetails(none));
      }
    },
    onTyping(typing) {
      typingRef.current = typing;
    },
  });
  const mergedTriggerProps = React125.useMemo(
    () =>
      mergeProps(
        typeahead.reference,
        listNavigation.reference,
        dismiss.reference,
        click.reference,
        interactionTypeProps,
      ),
    [
      click.reference,
      typeahead.reference,
      listNavigation.reference,
      dismiss.reference,
      interactionTypeProps,
    ],
  );
  const popupProps = React125.useMemo(
    () =>
      mergeProps(
        FOCUSABLE_POPUP_PROPS,
        typeahead.floating,
        listNavigation.floating,
        dismiss.floating,
      ),
    [typeahead.floating, listNavigation.floating, dismiss.floating],
  );
  const itemProps = listNavigation.item ?? EMPTY_OBJECT;
  const itemRoot = React125.useMemo(
    () => ({
      props: itemProps,
      multiple,
      disabled,
      readOnly,
      isItemEqualToValue,
    }),
    [itemProps, multiple, disabled, readOnly, isItemEqualToValue],
  );
  store.useContextCallback("setValue", setValue);
  store.useContextCallback("setOpen", setOpen);
  store.useContextCallback(
    "handleScrollArrowVisibility",
    handleScrollArrowVisibility,
  );
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  useOnFirstRender(() => {
    store.update({
      popupProps,
      triggerProps: mergedTriggerProps,
      itemRoot,
    });
  });
  store.useSyncedValues({
    id: generatedId,
    modal,
    multiple,
    disabled,
    readOnly,
    required,
    highlightItemOnHover,
    value,
    open,
    mounted,
    transitionStatus,
    popupProps,
    triggerProps: mergedTriggerProps,
    itemRoot,
    items,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue,
    openMethod: renderedOpenMethod,
  });
  const ref = useMergedRefs(inputRef, validation.inputRef);
  const hiddenInputName = multiple ? undefined : name;
  const hiddenInputs = React125.useMemo(() => {
    if (!multiple || !Array.isArray(value) || !name) {
      return null;
    }
    return value.map((v) => {
      const currentSerializedValue = stringifyAsValue(v, itemToStringValue);
      return /* @__PURE__ */ _jsx28(
        "input",
        {
          type: "hidden",
          form,
          name,
          value: currentSerializedValue,
          disabled,
        },
        currentSerializedValue,
      );
    });
  }, [multiple, value, form, name, itemToStringValue, disabled]);
  return /* @__PURE__ */ _jsxs14(SelectRootContext.Provider, {
    value: store,
    children: [
      /* @__PURE__ */ _jsx28(SelectFloatingContext.Provider, {
        value: floatingContext,
        children,
      }),
      /* @__PURE__ */ _jsx28("input", {
        ...validation.getValidationProps(disabled, {
          onFocus() {
            store.state.triggerElement?.focus({
              focusVisible: true,
            });
          },
          onChange(event) {
            if (event.nativeEvent.defaultPrevented || disabled || readOnly) {
              return;
            }
            const nextValue = event.currentTarget.value;
            const details = createChangeEventDetails(none, event.nativeEvent);
            function handleChange() {
              if (multiple) {
                return;
              }
              const nextValueLower = nextValue.toLowerCase();
              let matchingIndex = valuesRef.current.findIndex(
                (candidate) =>
                  stringifyAsValue(
                    candidate,
                    itemToStringValue,
                  ).toLowerCase() === nextValueLower ||
                  stringifyAsLabel(
                    candidate,
                    itemToStringLabel,
                  ).toLowerCase() === nextValueLower,
              );
              if (matchingIndex === -1) {
                matchingIndex = valuesRef.current.findIndex((_, index) => {
                  const renderedLabel = labelsRef.current[index];
                  return (
                    renderedLabel != null &&
                    renderedLabel.toLowerCase() === nextValueLower
                  );
                });
              }
              const matchingValue = valuesRef.current[matchingIndex];
              if (matchingValue != null) {
                setValue(matchingValue, details);
              }
            }
            store.set("forceMount", true);
            queueMicrotask(handleChange);
          },
        }),
        id:
          generatedId && hiddenInputName == null
            ? `${generatedId}-hidden-input`
            : undefined,
        form,
        name: hiddenInputName,
        autoComplete,
        value: serializedValue,
        disabled,
        required: required && !(multiple && hasSelectedValue),
        readOnly,
        ref,
        style: name ? visuallyHiddenInput : visuallyHidden,
        tabIndex: -1,
        "aria-hidden": true,
        suppressHydrationWarning: true,
      }),
      hiddenInputs,
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/label/SelectLabel.mjs
import * as React126 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useRegisteredLabelId.mjs
("use client");
function useRegisteredLabelId(idProp, setLabelId) {
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => (currentId === id ? undefined : currentId));
    };
  }, [id, setLabelId]);
  return id;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/labelable-provider/useLabel.mjs
("use client");
function useLabel(params = {}) {
  const {
    id: idProp,
    fallbackControlId,
    native = false,
    setLabelId: setLabelIdProp,
    focusControl: focusControlProp,
  } = params;
  const { controlId: contextControlId, setLabelId: setContextLabelId } =
    useLabelableContext();
  const syncLabelId = useStableCallback((nextLabelId) => {
    setContextLabelId(nextLabelId);
    setLabelIdProp?.(nextLabelId);
  });
  const id = useRegisteredLabelId(idProp, syncLabelId);
  const resolvedControlId = contextControlId ?? fallbackControlId;
  function focusControl(event) {
    if (focusControlProp) {
      focusControlProp(event, resolvedControlId);
      return;
    }
    if (!resolvedControlId) {
      return;
    }
    const controlElement = getControlById(
      event.currentTarget,
      resolvedControlId,
    );
    if (isHTMLElement(controlElement)) {
      focusElementWithVisible(controlElement);
    }
  }
  function handleInteraction(event) {
    const target = getTarget(event.nativeEvent);
    if (closest(target, "button,input,select,textarea")) {
      return;
    }
    if (!event.defaultPrevented && event.detail > 1) {
      event.preventDefault();
    }
    if (native) {
      return;
    }
    focusControl(event);
  }
  return native
    ? {
        id,
        htmlFor: resolvedControlId,
        onMouseDown: handleInteraction,
      }
    : {
        id,
        onClick: handleInteraction,
        onPointerDown(event) {
          event.preventDefault();
        },
      };
}
function getControlById(label, id) {
  let root = label.getRootNode();
  while (isShadowRoot(root)) {
    const element = root.getElementById(id);
    if (element) {
      return element;
    }
    root = root.host.getRootNode();
  }
  return ownerDocument(label).getElementById(id);
}
function focusElementWithVisible(element) {
  element.focus({
    focusVisible: true,
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
("use client");
function getDefaultLabelId(id) {
  return id == null ? undefined : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
  return fieldLabelId ?? localLabelId;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/label/SelectLabel.mjs
("use client");
var SelectLabel = /* @__PURE__ */ React126.forwardRef(
  function SelectLabel(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const elementPropsWithoutId = elementProps;
    delete elementPropsWithoutId.id;
    const fieldRootContext = useFieldRootContext();
    const store = useSelectRootContext();
    const triggerElement = store.useState("triggerElement");
    const rootId = store.useState("id");
    const defaultLabelId = getDefaultLabelId(rootId);
    const labelProps = useLabel({
      id: defaultLabelId,
      fallbackControlId: triggerElement?.id ?? rootId,
      setLabelId(nextLabelId) {
        const resolvedLabelId =
          typeof nextLabelId === "function"
            ? nextLabelId(store.state.labelId)
            : nextLabelId;
        store.set("labelId", resolvedLabelId);
      },
    });
    return useRenderElement("div", componentProps, {
      ref: forwardedRef,
      state: fieldRootContext.state,
      props: [labelProps, elementProps],
      stateAttributesMapping: fieldValidityMapping,
    });
  },
);
if (true) SelectLabel.displayName = "SelectLabel";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
import * as React127 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/trigger/SelectTriggerDataAttributes.mjs
var popupOpen3 = popupOpen;
var pressed2 = pressed;
var popupSide = "data-popup-side";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/trigger/SelectTrigger.mjs
("use client");
var SELECTED_DELAY = 400;
var stateAttributesMapping3 = {
  ...pressableTriggerOpenStateMapping,
  ...fieldValidityMapping,
  popupSide: (side) =>
    side
      ? {
          [popupSide]: side,
        }
      : null,
  value: () => null,
};
var SelectTrigger = /* @__PURE__ */ React127.forwardRef(
  function SelectTrigger(componentProps, forwardedRef) {
    const {
      render,
      className,
      id: idProp,
      disabled: disabledProp = false,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      setTouched,
      validationMode,
      validation,
      state: fieldState,
      disabled: fieldDisabled,
    } = useFieldRootContext();
    const { labelId: fieldLabelId } = useLabelableContext();
    const store = useSelectRootContext();
    const readOnly = store.useState("readOnly");
    const required = store.useState("required");
    const selectDisabled = store.useState("disabled");
    const disabled = fieldDisabled || selectDisabled || disabledProp;
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const value = store.useState("value");
    const triggerProps = store.useState("triggerProps");
    const positionerElement = store.useState("positionerElement");
    const listElement = store.useState("listElement");
    const popupSideValue = store.useState("popupSide");
    const rootId = store.useState("id");
    const selectLabelId = store.useState("labelId");
    const hasSelectedValue = store.useState("hasSelectedValue");
    const popupSide = mounted && positionerElement ? popupSideValue : null;
    const id = idProp ?? rootId;
    const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, selectLabelId);
    useLabelableId({
      id: idProp,
    });
    const positionerRef = useValueAsRef(positionerElement);
    const triggerRef = React127.useRef(null);
    const setFocused = useSetFieldFocused(disabled, triggerRef);
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const setTriggerElement = store.useStateSetter("triggerElement");
    const timeoutFocus = useTimeout();
    const timeoutMouseDown = useTimeout();
    const selectedDelayTimeout = useTimeout();
    React127.useEffect(() => {
      if (open) {
        selectedDelayTimeout.start(SELECTED_DELAY, () => {
          store.context.selectionRef.current.allowUnselectedMouseUp = true;
          store.context.selectionRef.current.allowSelectedMouseUp = true;
        });
        return () => {
          selectedDelayTimeout.clear();
        };
      }
      store.context.selectionRef.current = {
        allowSelectedMouseUp: false,
        allowUnselectedMouseUp: false,
        dragY: 0,
      };
      timeoutMouseDown.clear();
      return;
    }, [open, store, timeoutMouseDown, selectedDelayTimeout]);
    const mergedProps = mergeProps(
      triggerProps,
      {
        id,
        role: "combobox",
        "aria-expanded": open,
        "aria-haspopup": "listbox",
        "aria-controls": open
          ? (listElement?.id ?? getFloatingFocusElement(positionerElement)?.id)
          : undefined,
        "aria-labelledby": ariaLabelledBy,
        "aria-readonly": readOnly || undefined,
        "aria-required": required || undefined,
        tabIndex: disabled ? -1 : 0,
        onFocus(event) {
          setFocused(true);
          if (open && store.context.alignItemWithTriggerActiveRef.current) {
            store.context.setOpen(
              false,
              createChangeEventDetails(none, event.nativeEvent),
            );
          }
          timeoutFocus.start(0, () => {
            store.set("forceMount", true);
          });
        },
        onBlur(event) {
          if (contains(positionerElement, event.relatedTarget)) {
            return;
          }
          setTouched(true);
          setFocused(false);
          if (validationMode === "onBlur") {
            validation.commit(value);
          }
        },
        onMouseDown(event) {
          if (open) {
            return;
          }
          const doc = ownerDocument(event.currentTarget);
          function handleMouseUp(mouseEvent) {
            if (!triggerRef.current) {
              return;
            }
            const mouseUpTarget = mouseEvent.target;
            if (
              contains(triggerRef.current, mouseUpTarget) ||
              contains(positionerRef.current, mouseUpTarget)
            ) {
              return;
            }
            if (isMouseWithinBounds(mouseEvent, triggerRef.current)) {
              return;
            }
            store.context.setOpen(
              false,
              createChangeEventDetails(cancelOpen, mouseEvent),
            );
          }
          timeoutMouseDown.start(0, () => {
            doc.addEventListener("mouseup", handleMouseUp, {
              once: true,
            });
          });
        },
      },
      elementProps,
      getButtonProps,
    );
    const props = validation.getValidationProps(disabled, mergedProps);
    props.role = "combobox";
    const state = {
      ...fieldState,
      open,
      disabled,
      value,
      readOnly,
      popupSide,
      placeholder: !hasSelectedValue,
    };
    return useRenderElement("button", componentProps, {
      ref: [forwardedRef, triggerRef, buttonRef, setTriggerElement],
      state,
      stateAttributesMapping: stateAttributesMapping3,
      props,
    });
  },
);
if (true) SelectTrigger.displayName = "SelectTrigger";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/value/SelectValue.mjs
import * as React128 from "react";

("use client");
var stateAttributesMapping4 = {
  value: () => null,
};
var SelectValue = /* @__PURE__ */ React128.forwardRef(
  function SelectValue(componentProps, forwardedRef) {
    const {
      className,
      render,
      children: childrenProp,
      placeholder,
      style,
      ...elementProps
    } = componentProps;
    const store = useSelectRootContext();
    const value = store.useState("value");
    const items = store.useState("items");
    const itemToStringLabel = store.useState("itemToStringLabel");
    const hasSelectedValue = store.useState("hasSelectedValue");
    const shouldCheckNullItemLabel =
      !hasSelectedValue && placeholder != null && childrenProp == null;
    const hasNullLabel = store.useState(
      "hasNullItemLabel",
      shouldCheckNullItemLabel,
    );
    const state = {
      value,
      placeholder: !hasSelectedValue,
    };
    let children = null;
    if (typeof childrenProp === "function") {
      children = childrenProp(value);
    } else if (childrenProp != null) {
      children = childrenProp;
    } else if (shouldCheckNullItemLabel && !hasNullLabel) {
      children = placeholder;
    } else if (Array.isArray(value)) {
      children = resolveMultipleLabels(value, items, itemToStringLabel);
    } else {
      children = resolveSelectedLabel(value, items, itemToStringLabel);
    }
    const element = useRenderElement("span", componentProps, {
      state,
      ref: [forwardedRef, store.context.valueRef],
      props: [
        {
          children,
        },
        elementProps,
      ],
      stateAttributesMapping: stateAttributesMapping4,
    });
    return element;
  },
);
if (true) SelectValue.displayName = "SelectValue";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/icon/SelectIcon.mjs
import * as React129 from "react";

("use client");
var SelectIcon = /* @__PURE__ */ React129.forwardRef(
  function SelectIcon(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = useSelectRootContext();
    const open = store.useState("open");
    const state = {
      open,
    };
    const element = useRenderElement("span", componentProps, {
      state,
      ref: forwardedRef,
      props: [
        {
          "aria-hidden": true,
          children: "▼",
        },
        elementProps,
      ],
      stateAttributesMapping: triggerOpenStateMapping,
    });
    return element;
  },
);
if (true) SelectIcon.displayName = "SelectIcon";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/portal/SelectPortal.mjs
import * as React130 from "react";
import { jsx as _jsx29 } from "react/jsx-runtime";

("use client");
var SelectPortal = /* @__PURE__ */ React130.forwardRef(
  function SelectPortal(portalProps, forwardedRef) {
    const store = useSelectRootContext();
    const mounted = store.useState("mounted");
    const forceMount = store.useState("forceMount");
    const shouldRender = mounted || forceMount;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ _jsx29(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps,
    });
  },
);
if (true) SelectPortal.displayName = "SelectPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
import * as React132 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
import * as React131 from "react";

("use client");
var SelectPositionerContext = /* @__PURE__ */ React131.createContext(undefined);
if (true) SelectPositionerContext.displayName = "SelectPositionerContext";
function useSelectPositionerContext() {
  const context = React131.useContext(SelectPositionerContext);
  if (!context) {
    throw new Error(
      "Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/popup/utils.mjs
function clearStyles(element, originalStyles) {
  if (element) {
    Object.assign(element.style, originalStyles);
  }
}
var LIST_FUNCTIONAL_STYLES = {
  position: "relative",
  maxHeight: "100%",
  overflowX: "hidden",
  overflowY: "auto",
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
import { jsx as _jsx30, jsxs as _jsxs15 } from "react/jsx-runtime";

("use client");
var FIXED = {
  position: "fixed",
};
var SelectPositioner = /* @__PURE__ */ React132.forwardRef(
  function SelectPositioner(componentProps, forwardedRef) {
    const {
      anchor,
      className,
      render,
      positionMethod,
      side,
      align,
      sideOffset,
      alignOffset,
      collisionBoundary = "clipping-ancestors",
      collisionPadding,
      arrowPadding,
      sticky,
      disableAnchorTracking,
      alignItemWithTrigger = true,
      collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = componentProps;
    const store = useSelectRootContext();
    const floatingRootContext = useSelectFloatingContext();
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const modal = store.useState("modal");
    const value = store.useState("value");
    const openMethod = store.useState("openMethod");
    const positionerElement = store.useState("positionerElement");
    const triggerElement = store.useState("triggerElement");
    const isItemEqualToValue = store.useState("isItemEqualToValue");
    const transitionStatus = store.useState("transitionStatus");
    const scrollUpArrowRef = React132.useRef(null);
    const scrollDownArrowRef = React132.useRef(null);
    const [controlledAlignItemWithTrigger, setControlledAlignItemWithTrigger] =
      React132.useState(alignItemWithTrigger);
    const alignItemWithTriggerActive =
      mounted && controlledAlignItemWithTrigger && openMethod !== "touch";
    if (!mounted && controlledAlignItemWithTrigger !== alignItemWithTrigger) {
      setControlledAlignItemWithTrigger(alignItemWithTrigger);
    }
    React132.useImperativeHandle(
      store.context.alignItemWithTriggerActiveRef,
      () => alignItemWithTriggerActive,
    );
    useAnchoredPopupScrollLock(
      (alignItemWithTriggerActive || modal) && open,
      openMethod === "touch",
      positionerElement,
      triggerElement,
    );
    const positioning = useAnchorPositioning({
      anchor,
      floatingRootContext,
      positionMethod,
      mounted,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      disableAnchorTracking:
        disableAnchorTracking ?? alignItemWithTriggerActive,
      collisionAvoidance,
      keepMounted: true,
    });
    const renderedSide = alignItemWithTriggerActive ? "none" : positioning.side;
    const positionerStyles = alignItemWithTriggerActive
      ? FIXED
      : positioning.positionerStyles;
    const state = {
      open,
      side: renderedSide,
      align: positioning.align,
      anchorHidden: positioning.anchorHidden,
    };
    useIsoLayoutEffect(() => {
      store.set("popupSide", positioning.side);
    }, [store, positioning.side]);
    const setPositionerElement = store.useStateSetter("positionerElement");
    const element = usePositioner(componentProps, state, {
      styles: positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, setPositionerElement],
      hidden: !mounted,
      inert: !open,
    });
    const prevMapSizeRef = React132.useRef(0);
    const onMapChange = useStableCallback((map) => {
      if (store.context.valuesRef.current.length === 0) {
        return;
      }
      const prevSize = prevMapSizeRef.current;
      prevMapSizeRef.current = map.size;
      const eventDetails = createChangeEventDetails(none);
      if (prevSize !== 0 && !store.state.multiple && value !== null) {
        const selectedValueIndex = findItemIndex(
          store.context.valuesRef.current,
          value,
          isItemEqualToValue,
        );
        if (selectedValueIndex === -1) {
          const initialSelectedValue = store.context.initialValueRef.current;
          const hasInitial =
            initialSelectedValue != null &&
            findItemIndex(
              store.context.valuesRef.current,
              initialSelectedValue,
              isItemEqualToValue,
            ) !== -1;
          const nextValue = hasInitial ? initialSelectedValue : null;
          store.context.setValue(nextValue, eventDetails);
          if (nextValue === null) {
            store.set("selectedIndex", null);
            store.context.selectedItemTextRef.current = null;
          }
        }
      }
      if (prevSize !== 0 && store.state.multiple && Array.isArray(value)) {
        const nextValue = value.filter(
          (selectedItemValue) =>
            findItemIndex(
              store.context.valuesRef.current,
              selectedItemValue,
              isItemEqualToValue,
            ) !== -1,
        );
        if (nextValue.length !== value.length) {
          store.context.setValue(nextValue, eventDetails);
          if (nextValue.length === 0) {
            store.set("selectedIndex", null);
            store.context.selectedItemTextRef.current = null;
          }
        }
      }
      if (open && alignItemWithTriggerActive) {
        store.update({
          scrollUpArrowVisible: false,
          scrollDownArrowVisible: false,
        });
        const stylesToClear = {
          height: "",
        };
        clearStyles(positionerElement, stylesToClear);
        clearStyles(store.context.popupRef.current, stylesToClear);
      }
    });
    const contextValue = React132.useMemo(
      () => ({
        ...positioning,
        side: renderedSide,
        alignItemWithTriggerActive,
        setControlledAlignItemWithTrigger,
        scrollUpArrowRef,
        scrollDownArrowRef,
      }),
      [
        positioning,
        renderedSide,
        alignItemWithTriggerActive,
        setControlledAlignItemWithTrigger,
      ],
    );
    return /* @__PURE__ */ _jsx30(CompositeList, {
      elementsRef: store.context.listRef,
      labelsRef: store.context.labelsRef,
      onMapChange,
      children: /* @__PURE__ */ _jsxs15(SelectPositionerContext.Provider, {
        value: contextValue,
        children: [
          mounted &&
            modal &&
            /* @__PURE__ */ _jsx30(InternalBackdrop, {
              inert: inertValue(!open),
              cutout: triggerElement,
            }),
          element,
        ],
      }),
    });
  },
);
if (true) SelectPositioner.displayName = "SelectPositioner";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/popup/SelectPopup.mjs
import * as React134 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/styles.mjs
import { jsx as _jsx31 } from "react/jsx-runtime";

var DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
var styleDisableScrollbar = {
  className: DISABLE_SCROLLBAR_CLASS_NAME,
  getElement(nonce) {
    return /* @__PURE__ */ _jsx31("style", {
      nonce,
      href: DISABLE_SCROLLBAR_CLASS_NAME,
      precedence: "base-ui:low",
      children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`,
    });
  },
};
if (true)
  styleDisableScrollbar.getElement.displayName =
    "styleDisableScrollbar.getElement";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
import * as React133 from "react";

("use client");
var CSPContext = /* @__PURE__ */ React133.createContext(undefined);
if (true) CSPContext.displayName = "CSPContext";
var DEFAULT_CSP_CONTEXT_VALUE = {
  disableStyleElements: false,
};
function useCSPContext() {
  return React133.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/positioner/SelectPositionerCssVars.mjs
var transformOrigin2 = "--transform-origin";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/popup/SelectPopup.mjs
import { jsx as _jsx32, jsxs as _jsxs16 } from "react/jsx-runtime";

("use client");
var stateAttributesMapping5 = {
  ...popupStateMapping,
  ...transitionStatusMapping,
};
var SelectPopup = /* @__PURE__ */ React134.forwardRef(
  function SelectPopup(componentProps, forwardedRef) {
    const { render, className, style, finalFocus, ...elementProps } =
      componentProps;
    const store = useSelectRootContext();
    const multiple = store.useState("multiple");
    const readOnly = store.useState("readOnly");
    const highlightItemOnHover = store.useState("highlightItemOnHover");
    const floatingRootContext = useSelectFloatingContext();
    const {
      side,
      align,
      alignItemWithTriggerActive,
      isPositioned,
      setControlledAlignItemWithTrigger,
    } = useSelectPositionerContext();
    const insideToolbar = useToolbarRootContext(true) != null;
    const direction = useDirection();
    const { nonce, disableStyleElements } = useCSPContext();
    const id = store.useState("id");
    const open = store.useState("open");
    const openMethod = store.useState("openMethod");
    const mounted = store.useState("mounted");
    const popupProps = store.useState("popupProps");
    const transitionStatus = store.useState("transitionStatus");
    const triggerElement = store.useState("triggerElement");
    const positionerElement = store.useState("positionerElement");
    const listElement = store.useState("listElement");
    const reachedMaxHeightRef = React134.useRef(false);
    const initialPlacedRef = React134.useRef(false);
    const originalPositionerStylesRef = React134.useRef({});
    const scrollArrowFrame = useAnimationFrame();
    const handleScroll = useStableCallback((scroller) => {
      if (
        !positionerElement ||
        !store.context.popupRef.current ||
        !initialPlacedRef.current
      ) {
        return;
      }
      const isTopPositioned = positionerElement.style.top === "0px";
      const isBottomPositioned = positionerElement.style.bottom === "0px";
      if (
        reachedMaxHeightRef.current ||
        !alignItemWithTriggerActive ||
        (!isTopPositioned && !isBottomPositioned)
      ) {
        store.context.handleScrollArrowVisibility(scroller);
        return;
      }
      const scale = getScale2(positionerElement);
      const currentHeight = normalizeSize(
        positionerElement.getBoundingClientRect().height,
        "y",
        scale,
      );
      const doc = ownerDocument(positionerElement);
      const win = getWindow(positionerElement);
      const positionerStyles = win.getComputedStyle(positionerElement);
      const marginTop = parseFloat(positionerStyles.marginTop);
      const marginBottom = parseFloat(positionerStyles.marginBottom);
      const maxPopupHeight = getMaxPopupHeight(
        win.getComputedStyle(store.context.popupRef.current),
      );
      const maxAvailableHeight = Math.min(
        doc.documentElement.clientHeight - marginTop - marginBottom,
        maxPopupHeight,
      );
      const scrollTop = scroller.scrollTop;
      const maxScrollTop = getMaxScrollTop(scroller);
      let nextScrollTop = null;
      const setHeight = (height) => {
        positionerElement.style.height = `${height}px`;
      };
      const diff = isTopPositioned ? maxScrollTop - scrollTop : scrollTop;
      const nextHeight = Math.min(currentHeight + diff, maxAvailableHeight);
      if (diff <= SCROLL_EDGE_TOLERANCE_PX) {
        const heightDelta = clamp2(diff, 0, maxAvailableHeight - currentHeight);
        if (heightDelta > 0) {
          setHeight(currentHeight + heightDelta);
        }
        scroller.scrollTop = isTopPositioned ? maxScrollTop : 0;
        if (
          maxAvailableHeight - (currentHeight + heightDelta) <=
          SCROLL_EDGE_TOLERANCE_PX
        ) {
          reachedMaxHeightRef.current = true;
        }
        store.context.handleScrollArrowVisibility(scroller);
        return;
      }
      if (maxAvailableHeight - nextHeight > SCROLL_EDGE_TOLERANCE_PX) {
        nextScrollTop = isTopPositioned ? Infinity : 0;
      } else if (isBottomPositioned && scrollTop < maxScrollTop) {
        const overshoot = currentHeight + diff - maxAvailableHeight;
        nextScrollTop = scrollTop - (diff - overshoot);
      }
      const nextPositionerHeight = Math.ceil(nextHeight);
      if (nextPositionerHeight !== 0) {
        setHeight(nextPositionerHeight);
      }
      if (nextScrollTop != null) {
        const target = clamp2(nextScrollTop, 0, getMaxScrollTop(scroller));
        if (Math.abs(scroller.scrollTop - target) > SCROLL_EDGE_TOLERANCE_PX) {
          scroller.scrollTop = target;
        }
      }
      if (
        nextPositionerHeight >=
        maxAvailableHeight - SCROLL_EDGE_TOLERANCE_PX
      ) {
        reachedMaxHeightRef.current = true;
      }
      store.context.handleScrollArrowVisibility(scroller);
    });
    React134.useImperativeHandle(
      store.context.scrollHandlerRef,
      () => handleScroll,
      [handleScroll],
    );
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete(true);
        }
      },
    });
    const state = {
      open,
      transitionStatus,
      side,
      align,
    };
    useIsoLayoutEffect(() => {
      if (
        !positionerElement ||
        !store.context.popupRef.current ||
        Object.keys(originalPositionerStylesRef.current).length
      ) {
        return;
      }
      originalPositionerStylesRef.current = {
        top: positionerElement.style.top || "0",
        left: positionerElement.style.left || "0",
        right: positionerElement.style.right,
        height: positionerElement.style.height,
        bottom: positionerElement.style.bottom,
        minHeight: positionerElement.style.minHeight,
        maxHeight: positionerElement.style.maxHeight,
        marginTop: positionerElement.style.marginTop,
        marginBottom: positionerElement.style.marginBottom,
      };
    }, [store, positionerElement]);
    useIsoLayoutEffect(() => {
      if (open || alignItemWithTriggerActive) {
        return;
      }
      initialPlacedRef.current = false;
      reachedMaxHeightRef.current = false;
      clearStyles(positionerElement, originalPositionerStylesRef.current);
    }, [open, alignItemWithTriggerActive, positionerElement]);
    useIsoLayoutEffect(() => {
      const popupElement = store.context.popupRef.current;
      if (
        !open ||
        !triggerElement ||
        !positionerElement ||
        !popupElement ||
        (alignItemWithTriggerActive && !isPositioned) ||
        store.state.transitionStatus === "ending"
      ) {
        return;
      }
      initialPlacedRef.current = true;
      popupElement.style.removeProperty(transformOrigin2);
      if (!alignItemWithTriggerActive) {
        scrollArrowFrame.request(() =>
          store.context.handleScrollArrowVisibility(
            listElement || popupElement,
          ),
        );
        return;
      }
      const restoreTransformStyles = unsetTransformStyles(popupElement);
      try {
        let textElement = store.context.selectedItemTextRef.current;
        if (!textElement?.isConnected) {
          const hasSelectedValue = store.select("hasSelectedValue");
          textElement =
            !hasSelectedValue &&
            store.context.firstItemTextRef.current?.isConnected
              ? store.context.firstItemTextRef.current
              : null;
        }
        const valueElement = store.context.valueRef.current;
        const win = getWindow(positionerElement);
        const positionerStyles = win.getComputedStyle(positionerElement);
        const popupStyles = win.getComputedStyle(popupElement);
        const doc = ownerDocument(triggerElement);
        const scale = getScale2(triggerElement);
        const triggerRect = normalizeRect(
          triggerElement.getBoundingClientRect(),
          scale,
        );
        const positionerRect = normalizeRect(
          positionerElement.getBoundingClientRect(),
          scale,
        );
        const triggerHeight = triggerRect.height;
        const scroller = listElement || popupElement;
        const scrollHeight = scroller.scrollHeight;
        const borderBottom = parseFloat(popupStyles.borderBottomWidth);
        const marginTop = parseFloat(positionerStyles.marginTop) || 10;
        const marginBottom = parseFloat(positionerStyles.marginBottom) || 10;
        const minHeight = parseFloat(positionerStyles.minHeight) || 100;
        const maxPopupHeight = getMaxPopupHeight(popupStyles);
        const paddingLeft = 5;
        const paddingRight = 5;
        const triggerCollisionThreshold = 20;
        const viewportHeight =
          doc.documentElement.clientHeight - marginTop - marginBottom;
        const viewportWidth = doc.documentElement.clientWidth;
        const availableSpaceBeneathTrigger =
          viewportHeight - triggerRect.bottom + triggerHeight;
        let textRect;
        let alignedLeft =
          direction === "rtl"
            ? triggerRect.right - positionerRect.width
            : triggerRect.left;
        let offsetY = 0;
        if (textElement && valueElement) {
          const valueRect = normalizeRect(
            valueElement.getBoundingClientRect(),
            scale,
          );
          textRect = normalizeRect(textElement.getBoundingClientRect(), scale);
          alignedLeft =
            positionerRect.left +
            (direction === "rtl"
              ? valueRect.right - textRect.right
              : valueRect.left - textRect.left);
          const valueCenterFromTriggerTop =
            valueRect.top - triggerRect.top + valueRect.height / 2;
          const textCenterFromPositionerTop =
            textRect.top - positionerRect.top + textRect.height / 2;
          offsetY = textCenterFromPositionerTop - valueCenterFromTriggerTop;
        }
        const idealHeight =
          availableSpaceBeneathTrigger + offsetY + marginBottom + borderBottom;
        let height = Math.min(viewportHeight, idealHeight);
        const maxHeight = viewportHeight - marginTop - marginBottom;
        const scrollTop = idealHeight - height;
        const maxRight = viewportWidth - paddingRight;
        positionerElement.style.left = `${clamp2(alignedLeft, paddingLeft, maxRight - positionerRect.width)}px`;
        positionerElement.style.height = `${height}px`;
        positionerElement.style.maxHeight = "none";
        positionerElement.style.marginTop = `${marginTop}px`;
        positionerElement.style.marginBottom = `${marginBottom}px`;
        popupElement.style.height = "100%";
        const maxScrollTop = getMaxScrollTop(scroller);
        const isTopPositioned =
          scrollTop >= maxScrollTop - SCROLL_EDGE_TOLERANCE_PX;
        if (isTopPositioned) {
          height =
            Math.min(viewportHeight, positionerRect.height) -
            (scrollTop - maxScrollTop);
        }
        const fallbackToAlignPopupToTrigger =
          triggerRect.top < triggerCollisionThreshold ||
          triggerRect.bottom > viewportHeight - triggerCollisionThreshold ||
          Math.ceil(height) + SCROLL_EDGE_TOLERANCE_PX <
            Math.min(scrollHeight, minHeight);
        const isPinchZoomed =
          (win.visualViewport?.scale ?? 1) !== 1 && exports_engine.webkit;
        if (fallbackToAlignPopupToTrigger || isPinchZoomed) {
          clearStyles(positionerElement, originalPositionerStylesRef.current);
          setControlledAlignItemWithTrigger(false);
          return;
        }
        const initialHeight = Math.max(minHeight, height);
        if (isTopPositioned) {
          const topOffset = Math.max(0, viewportHeight - idealHeight);
          positionerElement.style.top =
            positionerRect.height >= maxHeight ? "0" : `${topOffset}px`;
          positionerElement.style.height = `${height}px`;
          scroller.scrollTop = getMaxScrollTop(scroller);
        } else {
          positionerElement.style.bottom = "0";
          scroller.scrollTop = scrollTop;
        }
        if (textRect) {
          const popupTop = positionerRect.top;
          const popupHeight = positionerRect.height;
          const textCenterY = textRect.top + textRect.height / 2;
          const clampedY = clamp2(
            popupHeight > 0
              ? ((textCenterY - popupTop) / popupHeight) * 100
              : 50,
            0,
            100,
          );
          popupElement.style.setProperty(transformOrigin2, `50% ${clampedY}%`);
        }
        if (initialHeight === viewportHeight || height >= maxPopupHeight) {
          reachedMaxHeightRef.current = true;
        }
        store.context.handleScrollArrowVisibility(scroller);
        if (
          highlightItemOnHover &&
          store.state.selectedIndex === null &&
          store.state.activeIndex === null &&
          store.context.listRef.current[0] != null
        ) {
          store.set("activeIndex", 0);
        }
      } finally {
        restoreTransformStyles();
      }
    }, [
      store,
      open,
      positionerElement,
      triggerElement,
      alignItemWithTriggerActive,
      setControlledAlignItemWithTrigger,
      scrollArrowFrame,
      listElement,
      highlightItemOnHover,
      direction,
      isPositioned,
    ]);
    React134.useEffect(() => {
      if (!alignItemWithTriggerActive || !positionerElement || !open) {
        return;
      }
      const win = getWindow(positionerElement);
      function handleResize(event) {
        store.context.setOpen(
          false,
          createChangeEventDetails(windowResize, event),
        );
      }
      return addEventListener(win, "resize", handleResize);
    }, [store, alignItemWithTriggerActive, positionerElement, open]);
    const defaultProps = {
      ...(listElement
        ? {
            role: "presentation",
          }
        : {
            role: "listbox",
            "aria-multiselectable": multiple || undefined,
            "aria-readonly": readOnly || undefined,
            id: `${id}-list`,
          }),
      onKeyDown(event) {
        if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      },
      onScroll(event) {
        if (listElement) {
          return;
        }
        handleScroll(event.currentTarget);
      },
      ...(alignItemWithTriggerActive && {
        style: listElement
          ? {
              height: "100%",
            }
          : LIST_FUNCTIONAL_STYLES,
      }),
      className:
        !listElement && alignItemWithTriggerActive
          ? styleDisableScrollbar.className
          : undefined,
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, store.context.popupRef],
      state,
      stateAttributesMapping: stateAttributesMapping5,
      props: [
        popupProps,
        defaultProps,
        getDisabledMountTransitionStyles(transitionStatus),
        elementProps,
      ],
    });
    return /* @__PURE__ */ _jsxs16(React134.Fragment, {
      children: [
        !disableStyleElements && styleDisableScrollbar.getElement(nonce),
        /* @__PURE__ */ _jsx32(FloatingFocusManager, {
          context: floatingRootContext,
          modal: false,
          disabled: !mounted,
          openInteractionType: openMethod,
          returnFocus: finalFocus,
          restoreFocus: true,
          children: element,
        }),
      ],
    });
  },
);
if (true) SelectPopup.displayName = "SelectPopup";
function getMaxPopupHeight(popupStyles) {
  const maxHeightStyle = popupStyles.maxHeight;
  return maxHeightStyle.endsWith("px")
    ? parseFloat(maxHeightStyle) || Infinity
    : Infinity;
}
function getMaxScrollTop(scroller) {
  return getMaxScrollOffset(scroller.scrollHeight, scroller.clientHeight);
}
function getScale2(element) {
  return platform2.getScale(element);
}
function normalizeSize(size, axis, scale) {
  return size / scale[axis];
}
function normalizeRect(rect, scale) {
  return rectToClientRect({
    x: normalizeSize(rect.x, "x", scale),
    y: normalizeSize(rect.y, "y", scale),
    width: normalizeSize(rect.width, "x", scale),
    height: normalizeSize(rect.height, "y", scale),
  });
}
var TRANSFORM_STYLE_RESETS = [
  ["transform", "none"],
  ["scale", "1"],
  ["translate", "0 0"],
];
function unsetTransformStyles(popupElement) {
  const { style } = popupElement;
  const originalStyles = {};
  for (const [property, value] of TRANSFORM_STYLE_RESETS) {
    originalStyles[property] = style.getPropertyValue(property);
    style.setProperty(property, value, "important");
  }
  return () => {
    for (const [property] of TRANSFORM_STYLE_RESETS) {
      const originalValue = originalStyles[property];
      if (originalValue) {
        style.setProperty(property, originalValue);
      } else {
        style.removeProperty(property);
      }
    }
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/list/SelectList.mjs
import * as React135 from "react";

("use client");
var SelectList = /* @__PURE__ */ React135.forwardRef(
  function SelectList(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = useSelectRootContext();
    const multiple = store.useState("multiple");
    const readOnly = store.useState("readOnly");
    const { alignItemWithTriggerActive } = useSelectPositionerContext();
    const hasScrollArrows = store.useState("hasScrollArrows");
    const openMethod = store.useState("openMethod");
    const id = store.useState("id");
    const defaultProps = {
      id: `${id}-list`,
      role: "listbox",
      "aria-multiselectable": multiple || undefined,
      "aria-readonly": readOnly || undefined,
      onScroll(event) {
        store.context.scrollHandlerRef.current?.(event.currentTarget);
      },
      ...(alignItemWithTriggerActive && {
        style: LIST_FUNCTIONAL_STYLES,
      }),
      className:
        hasScrollArrows && openMethod !== "touch"
          ? styleDisableScrollbar.className
          : undefined,
    };
    const setListElement = store.useStateSetter("listElement");
    return useRenderElement("div", componentProps, {
      ref: [forwardedRef, setListElement],
      props: [defaultProps, elementProps],
    });
  },
);
if (true) SelectList.displayName = "SelectList";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/item/SelectItem.mjs
import * as React137 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/item/SelectItemContext.mjs
import * as React136 from "react";

("use client");
var SelectItemContext = /* @__PURE__ */ React136.createContext(undefined);
if (true) SelectItemContext.displayName = "SelectItemContext";
function useSelectItemContext() {
  const context = React136.useContext(SelectItemContext);
  if (!context) {
    throw new Error(
      "Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/item/SelectItem.mjs
import { jsx as _jsx33 } from "react/jsx-runtime";

("use client");
var SelectItem = /* @__PURE__ */ React137.memo(
  /* @__PURE__ */ React137.forwardRef(
    function SelectItem(componentProps, forwardedRef) {
      const {
        render,
        className,
        style,
        value: itemValue = null,
        label,
        disabled: disabledProp = false,
        nativeButton = false,
        ...elementProps
      } = componentProps;
      const textRef = React137.useRef(null);
      const listItem = useCompositeListItem({
        guess: true,
        label,
        textRef,
      });
      const store = useSelectRootContext();
      const {
        props: itemProps,
        multiple,
        disabled: selectDisabled,
        readOnly,
        isItemEqualToValue,
      } = store.useState("itemRoot");
      const disabled = selectDisabled || disabledProp;
      const highlighted = store.useState("isActive", listItem.index);
      const open = store.useState("open");
      const selected = store.useState("isSelected", itemValue);
      const selectedByFocus = store.useState(
        "isSelectedByFocus",
        listItem.index,
      );
      const index = listItem.index;
      const itemRef = React137.useRef(null);
      useIsoLayoutEffect(() => {
        const values = store.context.valuesRef.current;
        values[index] = itemValue;
        return () => {
          delete values[index];
        };
      }, [index, itemValue, store]);
      useIsoLayoutEffect(() => {
        const selectedValue = store.state.value;
        const currentIndex = store.state.selectedIndex;
        let nextIndex = currentIndex;
        let claims;
        if (multiple && Array.isArray(selectedValue)) {
          nextIndex = resolveSelectedIndex(
            index,
            itemValue,
            store.context.valuesRef.current,
            selectedValue,
            isItemEqualToValue,
            currentIndex,
          );
          claims = nextIndex === index;
          if (index === currentIndex && !claims) {
            store.context.selectedItemTextRef.current = null;
          }
        } else {
          claims =
            selectedValue !== undefined &&
            compareItemEquality(itemValue, selectedValue, isItemEqualToValue);
          if (claims) {
            nextIndex = index;
          }
        }
        store.set("selectedIndex", nextIndex);
        if (claims && textRef.current) {
          store.context.selectedItemTextRef.current = textRef.current;
        }
      }, [index, multiple, isItemEqualToValue, store, itemValue]);
      const pointerTypeRef = React137.useRef("mouse");
      const allowMouseSelectionRef = React137.useRef(false);
      const { getButtonProps, buttonRef } = useButton({
        disabled,
        focusableWhenDisabled: true,
        native: nativeButton,
        composite: true,
      });
      const state = {
        disabled,
        selected,
        highlighted,
      };
      function commitSelection(event) {
        if (selectDisabled || readOnly) {
          return;
        }
        const selectedValue = store.state.value;
        if (multiple) {
          const currentValue = Array.isArray(selectedValue)
            ? selectedValue
            : [];
          const nextValue = selected
            ? removeItem(currentValue, itemValue, isItemEqualToValue)
            : [...currentValue, itemValue];
          store.context.setValue(
            nextValue,
            createChangeEventDetails(itemPress, event),
          );
        } else {
          store.context.setValue(
            itemValue,
            createChangeEventDetails(itemPress, event),
          );
          store.context.setOpen(
            false,
            createChangeEventDetails(itemPress, event),
          );
        }
      }
      function resetDragMovement() {
        store.context.selectionRef.current.dragY = 0;
      }
      const defaultProps = {
        role: "option",
        "aria-selected": selected,
        tabIndex: open && highlighted ? 0 : -1,
        onKeyDown(event) {
          store.set("activeIndex", index);
          if (event.key === " " && store.context.typingRef.current) {
            event.preventDefault();
          }
        },
        onClick(event) {
          const isMouseClick = pointerTypeRef.current !== "touch";
          const clickPointerType = event.nativeEvent.pointerType;
          const isVirtualMouseClick =
            isMouseClick &&
            isVirtualClick(event.nativeEvent) &&
            (clickPointerType !== undefined || highlighted);
          const isInvalidMouseClick =
            isMouseClick &&
            !isVirtualMouseClick &&
            !allowMouseSelectionRef.current;
          allowMouseSelectionRef.current = false;
          if (disabled || isInvalidMouseClick) {
            return;
          }
          commitSelection(event.nativeEvent);
        },
        onPointerEnter(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onPointerMove(event) {
          if (event.pointerType === "mouse" && event.buttons === 1) {
            const selection = store.context.selectionRef.current;
            selection.dragY += event.movementY;
            if (selection.dragY ** 2 >= 64) {
              selection.allowUnselectedMouseUp = true;
            }
          }
        },
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
          allowMouseSelectionRef.current = true;
          resetDragMovement();
        },
        onMouseUp() {
          resetDragMovement();
          if (disabled || pointerTypeRef.current === "touch") {
            return;
          }
          if (allowMouseSelectionRef.current) {
            return;
          }
          const disallowSelectedMouseUp =
            !store.context.selectionRef.current.allowSelectedMouseUp &&
            selected;
          const disallowUnselectedMouseUp =
            !store.context.selectionRef.current.allowUnselectedMouseUp &&
            !selected;
          if (disallowSelectedMouseUp || disallowUnselectedMouseUp) {
            return;
          }
          allowMouseSelectionRef.current = true;
          itemRef.current?.click();
          allowMouseSelectionRef.current = false;
        },
      };
      const element = useRenderElement("div", componentProps, {
        ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
        state,
        props: [itemProps, defaultProps, elementProps, getButtonProps],
      });
      const contextValue = React137.useMemo(
        () => ({
          selected,
          index,
          textRef,
          selectedByFocus,
        }),
        [selected, index, textRef, selectedByFocus],
      );
      return /* @__PURE__ */ _jsx33(SelectItemContext.Provider, {
        value: contextValue,
        children: element,
      });
    },
  ),
);
if (true) SelectItem.displayName = "SelectItem";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
import * as React139 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/ItemIndicator.mjs
import * as React138 from "react";

("use client");
var ItemIndicator = /* @__PURE__ */ React138.memo(
  /* @__PURE__ */ React138.forwardRef(
    function ItemIndicator(componentProps, forwardedRef) {
      const {
        render,
        className,
        style,
        keepMounted,
        selected,
        ...elementProps
      } = componentProps;
      const indicatorRef = React138.useRef(null);
      const { transitionStatus, setMounted } = useTransitionStatus(selected);
      const state = {
        selected,
        transitionStatus,
      };
      const element = useRenderElement("span", componentProps, {
        ref: [forwardedRef, indicatorRef],
        state,
        props: [
          {
            "aria-hidden": true,
            children: "✔️",
          },
          elementProps,
        ],
        stateAttributesMapping: transitionStatusMapping,
      });
      useOpenChangeComplete({
        batch: true,
        enabled: !selected,
        open: selected,
        ref: indicatorRef,
        onComplete() {
          if (!selected) {
            setMounted(false);
          }
        },
      });
      return element;
    },
  ),
);
if (true) ItemIndicator.displayName = "ItemIndicator";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/item-indicator/SelectItemIndicator.mjs
import { jsx as _jsx34 } from "react/jsx-runtime";

("use client");
var SelectItemIndicator = /* @__PURE__ */ React139.forwardRef(
  function SelectItemIndicator(componentProps, forwardedRef) {
    const { selected } = useSelectItemContext();
    const shouldRender = componentProps.keepMounted || selected;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ _jsx34(ItemIndicator, {
      ...componentProps,
      selected,
      ref: forwardedRef,
    });
  },
);
if (true) SelectItemIndicator.displayName = "SelectItemIndicator";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/select/item-text/SelectItemText.mjs
import * as React140 from "react";

("use client");
var SelectItemText = /* @__PURE__ */ React140.memo(
  /* @__PURE__ */ React140.forwardRef(
    function SelectItemText(componentProps, forwardedRef) {
      const { index, textRef, selectedByFocus } = useSelectItemContext();
      const store = useSelectRootContext();
      const { render, className, style, ...elementProps } = componentProps;
      const localRef = React140.useCallback(
        (node) => {
          if (!node) {
            return;
          }
          if (index === 0) {
            store.context.firstItemTextRef.current = node;
          }
          if (selectedByFocus) {
            store.context.selectedItemTextRef.current = node;
          }
        },
        [store, index, selectedByFocus],
      );
      const element = useRenderElement("div", componentProps, {
        ref: [localRef, forwardedRef, textRef],
        props: elementProps,
      });
      return element;
    },
  ),
);
if (true) SelectItemText.displayName = "SelectItemText";

// src/select.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";

function Select({
  options,
  label,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select…",
  disabled,
  name,
  id,
  className,
}) {
  return /* @__PURE__ */ jsx8("div", {
    className: cx("fox-field", className),
    children: /* @__PURE__ */ jsxs7(SelectRoot, {
      items: options,
      value,
      defaultValue,
      onValueChange: (next) => onValueChange?.(String(next)),
      disabled,
      name,
      id,
      children: [
        /* @__PURE__ */ jsx8(SelectLabel, {
          className: "fox-label",
          children: label,
        }),
        /* @__PURE__ */ jsxs7(SelectTrigger, {
          className: parts.selectTrigger,
          children: [
            /* @__PURE__ */ jsx8(SelectValue, {
              placeholder,
            }),
            /* @__PURE__ */ jsx8(SelectIcon, {
              className: parts.selectIcon,
              "aria-hidden": "true",
              children: "▾",
            }),
          ],
        }),
        /* @__PURE__ */ jsx8(SelectPortal, {
          children: /* @__PURE__ */ jsx8(SelectPositioner, {
            sideOffset: 4,
            children: /* @__PURE__ */ jsx8(SelectPopup, {
              className: parts.selectPopup,
              children: /* @__PURE__ */ jsx8(SelectList, {
                children: options.map((option) =>
                  /* @__PURE__ */ jsxs7(
                    SelectItem,
                    {
                      value: option.value,
                      className: parts.selectItem,
                      children: [
                        /* @__PURE__ */ jsx8(SelectItemText, {
                          children: option.label,
                        }),
                        /* @__PURE__ */ jsx8(SelectItemIndicator, {
                          "aria-hidden": "true",
                          children: "✓",
                        }),
                      ],
                    },
                    option.value,
                  ),
                ),
              }),
            }),
          }),
        }),
      ],
    }),
  });
}

// src/table.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";

function Table({
  zebra,
  scroll = true,
  caption,
  className,
  children,
  ...rest
}) {
  const recipe = table({ zebra });
  const element = /* @__PURE__ */ jsxs8("table", {
    ...rest,
    ...recipe,
    className: cx(recipe.className, className),
    children: [
      caption
        ? /* @__PURE__ */ jsx9("caption", {
            children: caption,
          })
        : null,
      children,
    ],
  });
  return scroll
    ? /* @__PURE__ */ jsx9("div", {
        className: parts.tableWrap,
        children: element,
      })
    : element;
}
function THead(props) {
  return /* @__PURE__ */ jsx9("thead", {
    ...props,
  });
}
function TBody(props) {
  return /* @__PURE__ */ jsx9("tbody", {
    ...props,
  });
}
function Tr(props) {
  return /* @__PURE__ */ jsx9("tr", {
    ...props,
  });
}
function Th({ numeric, className, ...rest }) {
  return /* @__PURE__ */ jsx9("th", {
    ...rest,
    scope: rest.scope ?? "col",
    className: cx(numeric && parts.num, className),
  });
}
function Td({ numeric, className, ...rest }) {
  return /* @__PURE__ */ jsx9("td", {
    ...rest,
    className: cx(numeric && parts.num, className),
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
import * as React142 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/root/TabsRootContext.mjs
import * as React141 from "react";

("use client");
var TabsRootContext = /* @__PURE__ */ React141.createContext(undefined);
if (true) TabsRootContext.displayName = "TabsRootContext";
function useTabsRootContext() {
  const context = React141.useContext(TabsRootContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/root/TabsRootDataAttributes.mjs
var activationDirection = "data-activation-direction";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/root/stateAttributesMapping.mjs
var tabsStateAttributesMapping = {
  tabActivationDirection: (dir) => ({
    [activationDirection]: dir,
  }),
};

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
import { jsx as _jsx35 } from "react/jsx-runtime";

("use client");
var TabsRoot = /* @__PURE__ */ React142.forwardRef(
  function TabsRoot(componentProps, forwardedRef) {
    const {
      className,
      defaultValue: defaultValueProp = 0,
      onValueChange: onValueChangeProp,
      orientation = "horizontal",
      render,
      value: valueProp,
      style,
      ...elementProps
    } = componentProps;
    const hasExplicitDefaultValueProp =
      componentProps.defaultValue !== undefined;
    const tabPanelRefs = React142.useRef([]);
    const [mountedTabPanels, setMountedTabPanels] = React142.useState(
      () => new Map(),
    );
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValueProp,
      name: "Tabs",
      state: "value",
    });
    const isControlled = valueProp !== undefined;
    const [tabMap, setTabMap] = React142.useState(() => new Map());
    const lastKnownTabElementRef = React142.useRef(undefined);
    const getTabElementBySelectedValue = React142.useCallback(
      (selectedValue) => findTabElement(tabMap, selectedValue),
      [tabMap],
    );
    const [activationDirectionState, setActivationDirectionState] =
      React142.useState(() => ({
        previousValue: value,
        tabActivationDirection: "none",
      }));
    const {
      previousValue,
      tabActivationDirection: committedTabActivationDirection,
    } = activationDirectionState;
    let tabActivationDirection = committedTabActivationDirection;
    let directionComputationIncomplete = false;
    if (previousValue !== value) {
      tabActivationDirection = computeActivationDirection(
        previousValue,
        value,
        orientation,
        tabMap,
      );
      directionComputationIncomplete =
        previousValue != null &&
        value != null &&
        getTabElementBySelectedValue(value) == null;
    }
    const nextPreviousValue = directionComputationIncomplete
      ? previousValue
      : value;
    const shouldSyncActivationDirectionState =
      previousValue !== nextPreviousValue ||
      committedTabActivationDirection !== tabActivationDirection;
    useIsoLayoutEffect(() => {
      if (!shouldSyncActivationDirectionState) {
        return;
      }
      setActivationDirectionState({
        previousValue: nextPreviousValue,
        tabActivationDirection,
      });
    }, [
      nextPreviousValue,
      shouldSyncActivationDirectionState,
      tabActivationDirection,
    ]);
    const onValueChange = useStableCallback((newValue, eventDetails) => {
      const activationDirection = computeActivationDirection(
        value,
        newValue,
        orientation,
        tabMap,
      );
      eventDetails.activationDirection = activationDirection;
      onValueChangeProp?.(newValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setValue(() => newValue);
    });
    const notifyAutomaticValueChange = useStableCallback(
      (nextValue, reason) => {
        onValueChangeProp?.(
          nextValue,
          createChangeEventDetails(reason, undefined, undefined, {
            activationDirection: "none",
          }),
        );
      },
    );
    const registerMountedTabPanel = useStableCallback((panelValue, panelId) => {
      setMountedTabPanels((prev) => {
        const next = new Map(prev);
        next.set(panelValue, panelId);
        return next;
      });
      return () => {
        setMountedTabPanels((prev) => {
          if (prev.get(panelValue) !== panelId) {
            return prev;
          }
          const next = new Map(prev);
          next.delete(panelValue);
          return next;
        });
      };
    });
    const getTabPanelIdByValue = React142.useCallback(
      (tabValue) => {
        return mountedTabPanels.get(tabValue);
      },
      [mountedTabPanels],
    );
    const getTabIdByPanelValue = React142.useCallback(
      (tabPanelValue) => {
        for (const tabMetadata of tabMap.values()) {
          if (tabPanelValue === tabMetadata.value) {
            return tabMetadata.id;
          }
        }
        return;
      },
      [tabMap],
    );
    const tabsContextValue = React142.useMemo(
      () => ({
        getTabElementBySelectedValue,
        getTabIdByPanelValue,
        getTabPanelIdByValue,
        onValueChange,
        orientation,
        registerMountedTabPanel,
        setTabMap,
        tabActivationDirection,
        value,
      }),
      [
        getTabElementBySelectedValue,
        getTabIdByPanelValue,
        getTabPanelIdByValue,
        onValueChange,
        orientation,
        registerMountedTabPanel,
        setTabMap,
        tabActivationDirection,
        value,
      ],
    );
    const selectedTabMetadata = React142.useMemo(() => {
      for (const tabMetadata of tabMap.values()) {
        if (tabMetadata.value === value) {
          return tabMetadata;
        }
      }
      return;
    }, [tabMap, value]);
    const firstEnabledTabValue = React142.useMemo(() => {
      for (const tabMetadata of tabMap.values()) {
        if (!tabMetadata.disabled) {
          return tabMetadata.value;
        }
      }
      return;
    }, [tabMap]);
    const shouldNotifyInitialValueChangeRef = React142.useRef(
      !hasExplicitDefaultValueProp,
    );
    const initialDefaultValueRef = React142.useRef(defaultValueProp);
    const shouldHonorDisabledDefaultValueRef = React142.useRef(
      hasExplicitDefaultValueProp,
    );
    const didRegisterTabsRef = React142.useRef(false);
    useIsoLayoutEffect(() => {
      if (isControlled) {
        return;
      }
      function commitAutomaticValueChange(fallbackValue, fallbackReason) {
        setValue(() => fallbackValue);
        setActivationDirectionState({
          previousValue: fallbackValue,
          tabActivationDirection: "none",
        });
        notifyAutomaticValueChange(fallbackValue, fallbackReason);
        shouldNotifyInitialValueChangeRef.current = false;
      }
      if (tabMap.size === 0) {
        if (
          didRegisterTabsRef.current &&
          value !== null &&
          !lastKnownTabElementRef.current?.isConnected
        ) {
          commitAutomaticValueChange(null, missing);
        }
        return;
      }
      didRegisterTabsRef.current = true;
      lastKnownTabElementRef.current = tabMap.keys().next().value;
      const selectionIsDisabled = selectedTabMetadata?.disabled;
      const selectionIsMissing = selectedTabMetadata == null && value !== null;
      if (!selectionIsDisabled && value === initialDefaultValueRef.current) {
        shouldHonorDisabledDefaultValueRef.current = false;
      }
      if (
        shouldHonorDisabledDefaultValueRef.current &&
        selectionIsDisabled &&
        value === initialDefaultValueRef.current
      ) {
        return;
      }
      const shouldNotifyInitialValueChange =
        shouldNotifyInitialValueChangeRef.current;
      if (selectionIsDisabled || selectionIsMissing) {
        const fallbackValue = firstEnabledTabValue ?? null;
        if (value === fallbackValue) {
          shouldNotifyInitialValueChangeRef.current = false;
          return;
        }
        let fallbackReason = missing;
        if (shouldNotifyInitialValueChange) {
          fallbackReason = initial;
        } else if (selectionIsDisabled) {
          fallbackReason = disabled;
        }
        commitAutomaticValueChange(fallbackValue, fallbackReason);
        return;
      }
      if (shouldNotifyInitialValueChange && selectedTabMetadata != null) {
        notifyAutomaticValueChange(value, initial);
        shouldNotifyInitialValueChangeRef.current = false;
      }
    }, [
      firstEnabledTabValue,
      isControlled,
      notifyAutomaticValueChange,
      selectedTabMetadata,
      setValue,
      tabMap,
      value,
    ]);
    const state = {
      orientation,
      tabActivationDirection,
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: forwardedRef,
      props: elementProps,
      stateAttributesMapping: tabsStateAttributesMapping,
    });
    return /* @__PURE__ */ _jsx35(TabsRootContext.Provider, {
      value: tabsContextValue,
      children: /* @__PURE__ */ _jsx35(CompositeList, {
        elementsRef: tabPanelRefs,
        children: element,
      }),
    });
  },
);
if (true) TabsRoot.displayName = "TabsRoot";
function findTabElement(tabMap, value) {
  for (const [tabElement, tabMetadata] of tabMap.entries()) {
    if (value === tabMetadata.value) {
      return tabElement;
    }
  }
  return null;
}
function computeActivationDirection(oldValue, newValue, orientation, tabMap) {
  if (oldValue == null || newValue == null) {
    return "none";
  }
  const [positionProp, backward, forward] =
    orientation === "horizontal"
      ? ["left", "left", "right"]
      : ["top", "up", "down"];
  const oldTab = findTabElement(tabMap, oldValue);
  const newTab = findTabElement(tabMap, newValue);
  if (oldTab == null || newTab == null) {
    if (
      oldTab !== newTab &&
      (typeof oldValue === "number" || typeof oldValue === "string") &&
      typeof oldValue === typeof newValue
    ) {
      return newValue > oldValue ? forward : backward;
    }
    return "none";
  }
  const oldPosition = oldTab.getBoundingClientRect()[positionProp];
  const newPosition = newTab.getBoundingClientRect()[positionProp];
  if (newPosition < oldPosition) {
    return backward;
  }
  if (newPosition > oldPosition) {
    return forward;
  }
  return "none";
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
import * as React144 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
import * as React143 from "react";

("use client");
var TabsListContext = /* @__PURE__ */ React143.createContext(undefined);
if (true) TabsListContext.displayName = "TabsListContext";
function useTabsListContext() {
  const context = React143.useContext(TabsListContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
("use client");
var TabsTab = /* @__PURE__ */ React144.forwardRef(
  function TabsTab(componentProps, forwardedRef) {
    const {
      className,
      disabled = false,
      render,
      value,
      id: idProp,
      nativeButton = true,
      style,
      ...elementProps
    } = componentProps;
    const {
      value: activeTabValue,
      getTabPanelIdByValue,
      onValueChange,
      orientation,
      tabActivationDirection,
    } = useTabsRootContext();
    const {
      activateOnFocus,
      registerTabResizeObserverElement,
      tabsListElement,
    } = useTabsListContext();
    const { highlightedIndex, onHighlightedIndexChange } =
      useCompositeRootContext();
    const id = useBaseUiId(idProp);
    const tabMetadata = React144.useMemo(
      () => ({
        disabled,
        id,
        value,
      }),
      [disabled, id, value],
    );
    const { compositeProps, compositeRef, index } = useCompositeItem({
      metadata: tabMetadata,
    });
    const active = value === activeTabValue;
    const isNavigatingRef = React144.useRef(false);
    const unobserveTabElementRef = React144.useRef(null);
    const observeTabElement = useStableCallback((element) => {
      unobserveTabElementRef.current?.();
      unobserveTabElementRef.current = element
        ? registerTabResizeObserverElement(element)
        : null;
    });
    useIsoLayoutEffect(() => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        return;
      }
      if (!(active && index > -1 && highlightedIndex !== index)) {
        return;
      }
      const listElement = tabsListElement;
      if (listElement != null) {
        const activeEl = activeElement(ownerDocument(listElement));
        if (activeEl && contains(listElement, activeEl)) {
          return;
        }
      }
      if (!disabled) {
        onHighlightedIndexChange(index);
      }
    }, [
      active,
      index,
      highlightedIndex,
      onHighlightedIndexChange,
      disabled,
      tabsListElement,
    ]);
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
      focusableWhenDisabled: true,
    });
    const tabPanelId = getTabPanelIdByValue(value);
    const isPressingRef = React144.useRef(false);
    const isMainButtonRef = React144.useRef(false);
    function activate(event) {
      onValueChange(
        value,
        createChangeEventDetails(none, event.nativeEvent, undefined, {
          activationDirection: "none",
        }),
      );
    }
    function onClick(event) {
      if (active || disabled) {
        return;
      }
      activate(event);
    }
    function onFocus(event) {
      if (active || disabled) {
        return;
      }
      if (
        activateOnFocus &&
        (!isPressingRef.current || isMainButtonRef.current)
      ) {
        activate(event);
      }
    }
    function onPointerDown(event) {
      if (active || disabled) {
        return;
      }
      isPressingRef.current = true;
      isMainButtonRef.current = event.button === 0;
      const doc = ownerDocument(event.currentTarget);
      function handlePointerEnd() {
        isPressingRef.current = false;
        isMainButtonRef.current = false;
        doc.removeEventListener("pointerup", handlePointerEnd);
        doc.removeEventListener("pointercancel", handlePointerEnd);
      }
      doc.addEventListener("pointerup", handlePointerEnd);
      doc.addEventListener("pointercancel", handlePointerEnd);
    }
    const state = {
      disabled,
      active,
      orientation,
      tabActivationDirection,
    };
    const element = useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, buttonRef, compositeRef, observeTabElement],
      props: [
        compositeProps,
        {
          role: "tab",
          "aria-controls": tabPanelId,
          "aria-selected": active,
          id,
          onClick,
          onFocus,
          onPointerDown,
          [ACTIVE_COMPOSITE_ITEM]: active ? "" : undefined,
          onKeyDownCapture() {
            isNavigatingRef.current = true;
          },
        },
        elementProps,
        getButtonProps,
      ],
      stateAttributesMapping: tabsStateAttributesMapping,
    });
    return element;
  },
);
if (true) TabsTab.displayName = "TabsTab";
// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/getElementTransform.mjs
function getElementTransform(element, computedStyle) {
  const transform = (
    computedStyle ?? getWindow(element).getComputedStyle(element)
  ).transform;
  let translateX = 0;
  let translateY = 0;
  let scale = 1;
  if (transform && transform !== "none") {
    const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (matrix) {
      const values = matrix[1].split(", ").map(parseFloat);
      if (values.length === 6) {
        translateX = values[4];
        translateY = values[5];
        scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
      } else if (values.length === 16) {
        translateX = values[12];
        translateY = values[13];
        scale = values[0];
      }
    }
  }
  return {
    x: translateX,
    y: translateY,
    scale,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
import * as React145 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/panel/TabsPanelDataAttributes.mjs
var index2 = "data-index";
var startingStyle4 = startingStyle;
var endingStyle4 = endingStyle;

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
("use client");
var stateAttributesMapping6 = {
  ...tabsStateAttributesMapping,
  ...transitionStatusMapping,
};
var TabsPanel = /* @__PURE__ */ React145.forwardRef(
  function TabsPanel(componentProps, forwardedRef) {
    const {
      className,
      value,
      render,
      keepMounted = false,
      style,
      ...elementProps
    } = componentProps;
    const {
      value: selectedValue,
      getTabIdByPanelValue,
      orientation,
      tabActivationDirection,
      registerMountedTabPanel,
    } = useTabsRootContext();
    const id = useBaseUiId();
    const { ref: listItemRef, index } = useCompositeListItem();
    const open = value === selectedValue;
    const { mounted, transitionStatus, setMounted } = useTransitionStatus(open);
    const hidden = !mounted;
    const correspondingTabId = getTabIdByPanelValue(value);
    const state = {
      hidden,
      orientation,
      tabActivationDirection,
      transitionStatus,
    };
    const panelRef = React145.useRef(null);
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, listItemRef, panelRef],
      props: [
        {
          "aria-labelledby": correspondingTabId,
          hidden,
          id,
          role: "tabpanel",
          tabIndex: open ? 0 : -1,
          inert: inertValue(!open),
          [index2]: index,
        },
        elementProps,
      ],
      stateAttributesMapping: stateAttributesMapping6,
    });
    useOpenChangeComplete({
      open,
      ref: panelRef,
      onComplete() {
        if (!open) {
          setMounted(false);
        }
      },
    });
    useIsoLayoutEffect(() => {
      if (id == null || (hidden && !keepMounted)) {
        return;
      }
      return registerMountedTabPanel(value, id);
    }, [hidden, keepMounted, value, id, registerMountedTabPanel]);
    const shouldRender = keepMounted || mounted;
    if (!shouldRender) {
      return null;
    }
    return element;
  },
);
if (true) TabsPanel.displayName = "TabsPanel";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tabs/list/TabsList.mjs
import * as React146 from "react";
import { jsx as _jsx36 } from "react/jsx-runtime";

("use client");
var TabsList = /* @__PURE__ */ React146.forwardRef(
  function TabsList(componentProps, forwardedRef) {
    const {
      activateOnFocus = false,
      className,
      loopFocus = true,
      render,
      style,
      ...elementProps
    } = componentProps;
    const { orientation, setTabMap, tabActivationDirection } =
      useTabsRootContext();
    const [highlightedTabIndex, setHighlightedTabIndex] = React146.useState(0);
    const [tabsListElement, setTabsListElement] = React146.useState(null);
    const indicatorUpdateListenersRef = React146.useRef(new Set());
    const tabResizeObserverElementsRef = React146.useRef(new Set());
    const resizeObserverRef = React146.useRef(null);
    useIsoLayoutEffect(() => {
      if (typeof ResizeObserver === "undefined") {
        return;
      }
      const resizeObserver = new ResizeObserver(() => {
        indicatorUpdateListenersRef.current.forEach((listener) => {
          listener();
        });
      });
      resizeObserverRef.current = resizeObserver;
      if (tabsListElement) {
        resizeObserver.observe(tabsListElement);
      }
      tabResizeObserverElementsRef.current.forEach((element) => {
        resizeObserver.observe(element);
      });
      return () => {
        resizeObserver.disconnect();
        resizeObserverRef.current = null;
      };
    }, [tabsListElement]);
    const registerIndicatorUpdateListener = useStableCallback((listener) => {
      indicatorUpdateListenersRef.current.add(listener);
      return () => {
        indicatorUpdateListenersRef.current.delete(listener);
      };
    });
    const registerTabResizeObserverElement = useStableCallback((element) => {
      tabResizeObserverElementsRef.current.add(element);
      resizeObserverRef.current?.observe(element);
      return () => {
        tabResizeObserverElementsRef.current.delete(element);
        resizeObserverRef.current?.unobserve(element);
      };
    });
    const state = {
      orientation,
      tabActivationDirection,
    };
    const defaultProps = {
      "aria-orientation": orientation === "vertical" ? "vertical" : undefined,
      role: "tablist",
    };
    const tabsListContextValue = React146.useMemo(
      () => ({
        activateOnFocus,
        registerIndicatorUpdateListener,
        registerTabResizeObserverElement,
        tabsListElement,
      }),
      [
        activateOnFocus,
        registerIndicatorUpdateListener,
        registerTabResizeObserverElement,
        tabsListElement,
      ],
    );
    return /* @__PURE__ */ _jsx36(TabsListContext.Provider, {
      value: tabsListContextValue,
      children: /* @__PURE__ */ _jsx36(CompositeRoot, {
        render,
        className,
        style,
        state,
        refs: [forwardedRef, setTabsListElement],
        props: [defaultProps, elementProps],
        stateAttributesMapping: tabsStateAttributesMapping,
        highlightedIndex: highlightedTabIndex,
        enableHomeAndEndKeys: true,
        loopFocus,
        orientation,
        onHighlightedIndexChange: setHighlightedTabIndex,
        onMapChange: setTabMap,
        disabledIndices: EMPTY_ARRAY,
      }),
    });
  },
);
if (true) TabsList.displayName = "TabsList";

// src/tabs.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";

function TabsView({
  tabs,
  label,
  value,
  defaultValue,
  onValueChange,
  className,
}) {
  return /* @__PURE__ */ jsxs9(TabsRoot, {
    value,
    defaultValue: defaultValue ?? tabs[0]?.value,
    onValueChange: (next) => onValueChange?.(String(next)),
    className,
    children: [
      /* @__PURE__ */ jsx10(TabsList, {
        className: parts.tabsList,
        "aria-label": label,
        children: tabs.map((tab) =>
          /* @__PURE__ */ jsx10(
            TabsTab,
            {
              value: tab.value,
              className: parts.tab,
              disabled: tab.disabled,
              children: tab.label,
            },
            tab.value,
          ),
        ),
      }),
      tabs.map((tab) =>
        /* @__PURE__ */ jsx10(
          TabsPanel,
          {
            value: tab.value,
            className: parts.tabsPanel,
            children: tab.content,
          },
          tab.value,
        ),
      ),
    ],
  });
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/provider/ToastProvider.mjs
import * as React148 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/provider/ToastProviderContext.mjs
import * as React147 from "react";

("use client");
var ToastContext = /* @__PURE__ */ React147.createContext(undefined);
if (true) ToastContext.displayName = "ToastContext";
function useToastProviderContext() {
  const context = React147.useContext(ToastContext);
  if (!context) {
    throw new Error(
      "Base UI: useToastManager must be used within <Toast.Provider>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+utils@0.5.0+2fde69a3fd50c568/node_modules/@base-ui/utils/generateId.mjs
var counter = 0;
function generateId(prefix) {
  counter += 1;
  return `${prefix}-${Math.random().toString(36).slice(2, 6)}-${counter}`;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/utils/resolvePromiseOptions.mjs
function resolvePromiseOptions(options, result) {
  if (typeof options === "string") {
    return {
      description: options,
    };
  }
  if (typeof options === "function") {
    const resolvedOptions = options(result);
    return typeof resolvedOptions === "string"
      ? {
          description: resolvedOptions,
        }
      : resolvedOptions;
  }
  return options;
}
// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/store.mjs
function createToastMetadata(toasts) {
  const metadata = new Map();
  let visibleIndex = 0;
  let offsetY = 0;
  toasts.forEach((toast, toastIndex) => {
    const isEnding = toast.transitionStatus === "ending";
    metadata.set(toast.id, {
      value: toast,
      domIndex: toastIndex,
      visibleIndex: isEnding ? -1 : visibleIndex,
      offsetY,
    });
    offsetY += toast.height || 0;
    if (!isEnding) {
      visibleIndex += 1;
    }
  });
  return metadata;
}
function applyLimited(toasts, limit) {
  let activeIndex = 0;
  return toasts.map((toast) => {
    if (toast.transitionStatus === "ending") {
      return toast;
    }
    const limited = activeIndex >= limit;
    activeIndex += 1;
    return toast.limited === limited
      ? toast
      : {
          ...toast,
          limited,
        };
  });
}
var selectors6 = {
  toasts: (state) => state.toasts,
  isEmpty: (state) => state.toasts.length === 0,
  toast: (state, id) => state.toastMetadata.get(id)?.value,
  toastIndex: (state, id) => state.toastMetadata.get(id)?.domIndex ?? -1,
  toastOffsetY: (state, id) => state.toastMetadata.get(id)?.offsetY ?? 0,
  toastVisibleIndex: (state, id) =>
    state.toastMetadata.get(id)?.visibleIndex ?? -1,
  focused: (state) => state.focused,
  expanded: (state) => state.hovering || state.focused,
  expandedOrOutOfFocus: (state) =>
    state.hovering || state.focused || !state.isWindowFocused,
  prevFocusElement: (state) => state.prevFocusElement,
};

class ToastStore extends ReactStore {
  timers = new Map();
  areTimersPaused = false;
  constructor(initialState) {
    super(
      {
        ...initialState,
        toastMetadata: createToastMetadata(initialState.toasts),
      },
      {},
      selectors6,
    );
  }
  setViewport = (viewport) => {
    this.set("viewport", viewport);
  };
  syncProviderProps(timeout, limit) {
    const limitChanged = this.state.limit !== limit;
    if (this.state.timeout === timeout && !limitChanged) {
      return;
    }
    const updates = {
      timeout,
      limit,
    };
    if (limitChanged) {
      const newToasts = applyLimited(this.state.toasts, limit);
      updates.toasts = newToasts;
      updates.toastMetadata = createToastMetadata(newToasts);
    }
    this.update(updates);
  }
  disposeEffect = () => {
    return () => {
      this.timers.forEach((timer) => {
        timer.timeout?.clear();
      });
      this.timers.clear();
    };
  };
  removeToast(toastId, skipOnRemove = false) {
    const index = selectors6.toastIndex(this.state, toastId);
    if (index === -1) {
      return;
    }
    const toast = this.state.toasts[index];
    if (!skipOnRemove) {
      toast?.onRemove?.();
    }
    const newToasts = [...this.state.toasts];
    newToasts.splice(index, 1);
    this.setToasts(newToasts);
  }
  addToast = (toast) => {
    const { timeout, limit } = this.state;
    const id = toast.id || generateId("toast");
    if (toast.id) {
      const existingToast = selectors6.toast(this.state, toast.id);
      if (existingToast) {
        if (existingToast.transitionStatus === "ending") {
          this.removeToast(toast.id, true);
        } else {
          const {
            id: ignoredId,
            transitionStatus: ignoredTransitionStatus,
            ...updates
          } = toast;
          this.updateToastInternal(toast.id, updates, true, true);
          return toast.id;
        }
      }
    }
    const toastToAdd = {
      ...toast,
      id,
      updateKey: 0,
      transitionStatus: "starting",
    };
    const updatedToasts = [toastToAdd, ...this.state.toasts];
    this.setToasts(applyLimited(updatedToasts, limit));
    const duration = toastToAdd.timeout ?? timeout;
    if (toastToAdd.type !== "loading" && duration > 0) {
      this.scheduleTimer(id, duration, () => this.closeToast(id));
    }
    if (selectors6.expandedOrOutOfFocus(this.state)) {
      this.pauseTimers();
    }
    return id;
  };
  updateToast = (id, updates) => {
    const prevToast = selectors6.toast(this.state, id);
    if (!prevToast || prevToast.transitionStatus === "ending") {
      return;
    }
    this.updateToastInternal(
      id,
      typeof updates === "function" ? updates(prevToast) : updates,
      false,
      true,
    );
  };
  updateToastInternal = (
    id,
    updates,
    resetTimer = false,
    markUpdated = false,
  ) => {
    const { timeout, toasts } = this.state;
    const prevToast = selectors6.toast(this.state, id);
    if (!prevToast) {
      return;
    }
    if (prevToast.transitionStatus === "ending") {
      return;
    }
    const nextToast = {
      ...prevToast,
      ...updates,
      ...(markUpdated && {
        updateKey: prevToast.updateKey + 1,
      }),
    };
    this.setToasts(
      toasts.map((toast) => (toast.id === id ? nextToast : toast)),
    );
    const nextTimeout = nextToast.timeout ?? timeout;
    const prevTimeout = prevToast.timeout ?? timeout;
    const timeoutUpdated = Object.hasOwn(updates, "timeout");
    const shouldHaveTimer =
      nextToast.transitionStatus !== "ending" &&
      nextToast.type !== "loading" &&
      nextTimeout > 0;
    const hasTimer = this.timers.has(id);
    const timeoutChanged = prevTimeout !== nextTimeout;
    const wasLoading = prevToast.type === "loading";
    if (!shouldHaveTimer && hasTimer) {
      this.clearTimer(id);
      return;
    }
    if (
      shouldHaveTimer &&
      (!hasTimer ||
        timeoutChanged ||
        timeoutUpdated ||
        wasLoading ||
        resetTimer)
    ) {
      this.clearTimer(id);
      this.scheduleTimer(id, nextTimeout, () => this.closeToast(id));
      if (selectors6.expandedOrOutOfFocus(this.state)) {
        this.pauseTimers();
      }
    }
  };
  closeToast = (toastId) => {
    const closeAll = toastId === undefined;
    const { limit, toasts } = this.state;
    let toastsToClose;
    if (closeAll) {
      toastsToClose = toasts;
      this.clearTimers();
    } else {
      const toast = selectors6.toast(this.state, toastId);
      if (!toast) {
        return;
      }
      toastsToClose = [toast];
      this.clearTimer(toastId);
    }
    const endingToasts = toasts.map((item) =>
      closeAll || item.id === toastId
        ? {
            ...item,
            transitionStatus: "ending",
            height: 0,
          }
        : item,
    );
    const newToasts = applyLimited(endingToasts, limit);
    this.setToasts(
      newToasts,
      !newToasts.some((toast) => toast.transitionStatus !== "ending"),
    );
    toastsToClose.forEach((toast) => {
      if (toast.transitionStatus !== "ending") {
        toast.onClose?.();
      }
    });
    this.handleFocusManagement(toastId);
  };
  promiseToast = (promiseValue, options) => {
    const loadingOptions = resolvePromiseOptions(options.loading);
    const id = this.addToast({
      ...loadingOptions,
      type: "loading",
    });
    const handledPromise = promiseValue
      .then((result) => {
        const successOptions = resolvePromiseOptions(options.success, result);
        this.updateToast(id, {
          ...successOptions,
          type: "success",
          timeout: successOptions.timeout,
        });
        return result;
      })
      .catch((error) => {
        const errorOptions = resolvePromiseOptions(options.error, error);
        this.updateToast(id, {
          ...errorOptions,
          type: "error",
          timeout: errorOptions.timeout,
        });
        return Promise.reject(error);
      });
    if (Object.hasOwn(options, "setPromise")) {
      options.setPromise(handledPromise);
    }
    return handledPromise;
  };
  pauseTimers() {
    if (this.areTimersPaused) {
      return;
    }
    this.areTimersPaused = true;
    this.timers.forEach((timer) => {
      if (timer.timeout) {
        timer.timeout.clear();
        timer.remaining = Math.max(
          timer.remaining - (Date.now() - timer.start),
          0,
        );
      }
    });
  }
  resumeTimers() {
    if (!this.areTimersPaused) {
      return;
    }
    this.areTimersPaused = false;
    this.timers.forEach((timer, id) => {
      timer.remaining = timer.remaining > 0 ? timer.remaining : timer.delay;
      timer.timeout ??= Timeout.create();
      timer.timeout.start(timer.remaining, () => {
        this.handleTimerFired(id);
        timer.callback();
      });
      timer.start = Date.now();
    });
  }
  restoreFocusToPrevElement() {
    this.state.prevFocusElement?.focus({
      preventScroll: true,
    });
  }
  handleDocumentPointerDown = (event) => {
    if (event.pointerType !== "touch") {
      return;
    }
    const target = getTarget(event);
    if (contains(this.state.viewport, target)) {
      return;
    }
    this.resumeTimers();
    this.update({
      hovering: false,
      focused: false,
    });
  };
  scheduleTimer(id, delay, callback) {
    const start = Date.now();
    const shouldStartActive = !selectors6.expandedOrOutOfFocus(this.state);
    const currentTimeout = shouldStartActive ? Timeout.create() : undefined;
    currentTimeout?.start(delay, () => {
      this.handleTimerFired(id);
      callback();
    });
    this.timers.set(id, {
      timeout: currentTimeout,
      start,
      delay,
      remaining: delay,
      callback,
    });
  }
  clearTimers() {
    this.timers.forEach((timer) => {
      timer.timeout?.clear();
    });
    this.timers.clear();
    this.areTimersPaused = false;
  }
  clearTimer(id) {
    const timer = this.timers.get(id);
    timer?.timeout?.clear();
    this.timers.delete(id);
    this.resetPausedStateIfNoTimersRemain();
  }
  handleTimerFired(id) {
    this.timers.delete(id);
    this.resetPausedStateIfNoTimersRemain();
  }
  resetPausedStateIfNoTimersRemain() {
    if (this.timers.size === 0) {
      this.areTimersPaused = false;
    }
  }
  setToasts(newToasts, clearInteraction = newToasts.length === 0) {
    const updates = {
      toasts: newToasts,
      toastMetadata: createToastMetadata(newToasts),
    };
    if (clearInteraction) {
      updates.hovering = false;
      updates.focused = false;
    }
    this.update(updates);
  }
  handleFocusManagement(toastId) {
    const activeEl = activeElement(ownerDocument(this.state.viewport));
    if (
      !this.state.viewport ||
      !contains(this.state.viewport, activeEl) ||
      !matchesFocusVisible(activeEl)
    ) {
      return;
    }
    if (toastId === undefined) {
      this.restoreFocusToPrevElement();
      return;
    }
    const toasts = selectors6.toasts(this.state);
    const currentIndex = selectors6.toastIndex(this.state, toastId);
    const scan = (from, step) => {
      for (
        let index = from;
        index >= 0 && index < toasts.length;
        index += step
      ) {
        if (toasts[index].transitionStatus !== "ending") {
          return toasts[index];
        }
      }
      return null;
    };
    const nextToast = scan(currentIndex + 1, 1) ?? scan(currentIndex - 1, -1);
    if (nextToast) {
      nextToast.ref?.current?.focus();
    } else {
      this.restoreFocusToPrevElement();
    }
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/provider/ToastProvider.mjs
import { jsx as _jsx37, jsxs as _jsxs17 } from "react/jsx-runtime";

("use client");
var ToastProvider = function ToastProvider(props) {
  const { children, timeout = 5000, limit = 3, toastManager } = props;
  const store = useRefWithInit(
    () =>
      new ToastStore({
        timeout,
        limit,
        viewport: null,
        toasts: [],
        hovering: false,
        focused: false,
        isWindowFocused: true,
        prevFocusElement: null,
      }),
  ).current;
  useOnMount(store.disposeEffect);
  React148.useEffect(
    function subscribeToToastManager() {
      if (!toastManager) {
        return;
      }
      const unsubscribe = toastManager[" subscribe"](({ action, options }) => {
        const id = options.id;
        if (action === "promise" && options.promise) {
          store.promiseToast(options.promise, options);
        } else if (action === "update" && id) {
          store.updateToast(id, options.updates);
        } else if (action === "close") {
          store.closeToast(id);
        } else {
          store.addToast(options);
        }
      });
      return unsubscribe;
    },
    [store, toastManager],
  );
  return /* @__PURE__ */ _jsxs17(ToastContext.Provider, {
    value: store,
    children: [
      /* @__PURE__ */ _jsx37(ToastProviderPropsSynchronizer, {
        store,
        timeout,
        limit,
      }),
      children,
    ],
  });
};
if (true) ToastProvider.displayName = "ToastProvider";
function ToastProviderPropsSynchronizer(props) {
  const { store, timeout, limit } = props;
  useIsoLayoutEffect(() => {
    store.syncProviderProps(timeout, limit);
  }, [store, timeout, limit]);
  return null;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/viewport/ToastViewport.mjs
import * as React149 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/viewport/ToastViewportCssVars.mjs
var frontmostHeight = "--toast-frontmost-height";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/viewport/ToastViewport.mjs
import { jsx as _jsx38, jsxs as _jsxs18 } from "react/jsx-runtime";

("use client");
var ToastViewport = /* @__PURE__ */ React149.forwardRef(
  function ToastViewport(componentProps, forwardedRef) {
    const { render, className, style, children, ...elementProps } =
      componentProps;
    const store = useToastProviderContext();
    const windowFocusTimeout = useTimeout();
    const handlingFocusGuardRef = React149.useRef(false);
    const markedReadyForMouseLeaveRef = React149.useRef(false);
    const touchActiveRef = React149.useRef(false);
    const isEmpty = store.useState("isEmpty");
    const toasts = store.useState("toasts");
    const focused = store.useState("focused");
    const expanded = store.useState("expanded");
    const prevFocusElement = store.useState("prevFocusElement");
    const frontmostHeight2 = toasts[0]?.height;
    const hasTransitioningToasts = toasts.some(
      (toast) => toast.transitionStatus === "ending",
    );
    const highPriorityToasts = toasts.filter(
      (toast) => toast.priority === "high",
    );
    React149.useEffect(() => {
      const viewport = store.state.viewport;
      if (!viewport || isEmpty) {
        return;
      }
      const win = getWindow(viewport);
      const doc = ownerDocument(viewport);
      function handleGlobalKeyDown(event) {
        if (event.key === "F6" && getTarget(event) !== viewport) {
          event.preventDefault();
          store.set("prevFocusElement", activeElement(doc));
          viewport?.focus({
            preventScroll: true,
          });
          store.pauseTimers();
          store.set("focused", true);
        }
      }
      function handleWindowBlur(event) {
        if (getTarget(event) !== win) {
          return;
        }
        store.set("isWindowFocused", false);
        store.pauseTimers();
      }
      function handleWindowFocus(event) {
        if (event.relatedTarget) {
          return;
        }
        const target = getTarget(event);
        const activeEl = activeElement(ownerDocument(viewport));
        if (
          target === win ||
          !contains(viewport, target) ||
          !matchesFocusVisible(activeEl)
        ) {
          store.resumeTimers();
        }
        windowFocusTimeout.start(0, () => store.set("isWindowFocused", true));
      }
      return mergeCleanups(
        addEventListener(win, "keydown", handleGlobalKeyDown),
        addEventListener(win, "blur", handleWindowBlur, true),
        addEventListener(win, "focus", handleWindowFocus, true),
        addEventListener(
          doc,
          "pointerdown",
          store.handleDocumentPointerDown,
          true,
        ),
      );
    }, [store, windowFocusTimeout, isEmpty]);
    function handleFocusGuard(event) {
      handlingFocusGuardRef.current = true;
      const firstFocusableToast =
        event.relatedTarget === store.state.viewport
          ? toasts.find(
              (toast) => toast.transitionStatus !== "ending" && !toast.limited,
            )
          : undefined;
      if (firstFocusableToast) {
        firstFocusableToast.ref?.current?.focus();
      } else {
        store.restoreFocusToPrevElement();
      }
    }
    function handleKeyDown(event) {
      if (
        event.key === "Tab" &&
        event.shiftKey &&
        getTarget(event.nativeEvent) === store.state.viewport
      ) {
        event.preventDefault();
        store.restoreFocusToPrevElement();
      }
    }
    function flushMouseLeave() {
      const hasEndingToasts = store.state.toasts.some(
        (toast) => toast.transitionStatus === "ending",
      );
      if (
        hasEndingToasts ||
        touchActiveRef.current ||
        !markedReadyForMouseLeaveRef.current
      ) {
        return;
      }
      store.set("hovering", false);
      if (!store.select("expandedOrOutOfFocus")) {
        store.resumeTimers();
      }
      markedReadyForMouseLeaveRef.current = false;
    }
    React149.useEffect(flushMouseLeave, [hasTransitioningToasts, store]);
    function handleMouseEnter() {
      store.pauseTimers();
      store.set("hovering", true);
      markedReadyForMouseLeaveRef.current = false;
    }
    function handleMouseLeave() {
      markedReadyForMouseLeaveRef.current = true;
      flushMouseLeave();
    }
    function handlePointerDown(event) {
      if (event.pointerType === "touch") {
        touchActiveRef.current = true;
      }
    }
    function handlePointerEnd(event) {
      if (event.pointerType !== "touch") {
        return;
      }
      touchActiveRef.current = false;
      flushMouseLeave();
    }
    function handleFocus() {
      if (handlingFocusGuardRef.current) {
        handlingFocusGuardRef.current = false;
        return;
      }
      if (focused) {
        return;
      }
      if (
        matchesFocusVisible(activeElement(ownerDocument(store.state.viewport)))
      ) {
        store.set("focused", true);
        store.pauseTimers();
      }
    }
    function handleBlur(event) {
      if (!focused || contains(store.state.viewport, event.relatedTarget)) {
        return;
      }
      store.set("focused", false);
      if (!store.select("expandedOrOutOfFocus")) {
        store.resumeTimers();
      }
    }
    const defaultProps = {
      tabIndex: -1,
      role: "region",
      "aria-live": "polite",
      "aria-atomic": false,
      "aria-relevant": "additions text",
      "aria-label": "Notifications",
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onClick: handleFocus,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerEnd,
      onPointerCancel: handlePointerEnd,
      style: {
        [frontmostHeight]: frontmostHeight2
          ? `${frontmostHeight2}px`
          : undefined,
      },
    };
    const state = {
      expanded,
    };
    const focusGuard =
      !isEmpty &&
      prevFocusElement &&
      /* @__PURE__ */ _jsx38(FocusGuard, {
        onFocus: handleFocusGuard,
      });
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, store.setViewport],
      state,
      props: [
        defaultProps,
        elementProps,
        {
          children: /* @__PURE__ */ _jsxs18(React149.Fragment, {
            children: [focusGuard, children, focusGuard],
          }),
        },
      ],
    });
    return /* @__PURE__ */ _jsxs18(React149.Fragment, {
      children: [
        focusGuard,
        element,
        !focused &&
          highPriorityToasts.length > 0 &&
          /* @__PURE__ */ _jsx38("div", {
            style: visuallyHidden,
            children: highPriorityToasts.map((toast) =>
              /* @__PURE__ */ _jsxs18(
                "div",
                {
                  role: "alert",
                  "aria-atomic": true,
                  children: [
                    /* @__PURE__ */ _jsx38("div", {
                      children: toast.title,
                    }),
                    /* @__PURE__ */ _jsx38("div", {
                      children: toast.description,
                    }),
                  ],
                },
                toast.id,
              ),
            ),
          }),
      ],
    });
  },
);
if (true) ToastViewport.displayName = "ToastViewport";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/root/ToastRoot.mjs
import * as React152 from "react";
// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/root/ToastRootContext.mjs
import * as React150 from "react";
import * as ReactDOM8 from "react-dom";

("use client");
var ToastRootContext = /* @__PURE__ */ React150.createContext(undefined);
if (true) ToastRootContext.displayName = "ToastRootContext";
function useToastRootContext() {
  const context = React150.useContext(ToastRootContext);
  if (!context) {
    throw new Error(
      "Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/useSwipeDismiss.mjs
import * as React151 from "react";

("use client");
function getDisplacement(direction, deltaX, deltaY) {
  switch (direction) {
    case "up":
      return -deltaY;
    case "down":
      return deltaY;
    case "left":
      return -deltaX;
    case "right":
      return deltaX;
    default:
      return 0;
  }
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/root/ToastRootCssVars.mjs
var index3 = "--toast-index";
var offsetY = "--toast-offset-y";
var height = "--toast-height";
var swipeMovementX = "--toast-swipe-movement-x";
var swipeMovementY = "--toast-swipe-movement-y";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/root/ToastRootDataAttributes.mjs
var swipeDirection = "data-swipe-direction";
var startingStyle5 = startingStyle;
var endingStyle5 = endingStyle;

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/root/ToastRoot.mjs
import { jsx as _jsx39 } from "react/jsx-runtime";

("use client");
var toastRootStateAttributesMapping = {
  ...transitionStatusMapping,
  swipeDirection(value) {
    return value
      ? {
          [swipeDirection]: value,
        }
      : null;
  },
};
var SWIPE_THRESHOLD = 40;
var REVERSE_CANCEL_THRESHOLD = 10;
var OPPOSITE_DIRECTION_DAMPING_FACTOR = 0.5;
var MIN_DRAG_THRESHOLD = 1;
var TOAST_SWIPE_IGNORE_SELECTOR = `${BASE_UI_SWIPE_IGNORE_SELECTOR},${LEGACY_SWIPE_IGNORE_SELECTOR}`;
var ToastRoot = /* @__PURE__ */ React152.forwardRef(
  function ToastRoot(componentProps, forwardedRef) {
    const {
      toast,
      render,
      className,
      swipeDirection = ["down", "right"],
      style,
      ...elementProps
    } = componentProps;
    const isAnchored = toast.positionerProps?.anchor !== undefined;
    let swipeDirections = [];
    if (!isAnchored) {
      swipeDirections = Array.isArray(swipeDirection)
        ? swipeDirection
        : [swipeDirection];
    }
    const swipeEnabled = swipeDirections.length > 0;
    const store = useToastProviderContext();
    const [currentSwipeDirection, setCurrentSwipeDirection] =
      React152.useState(undefined);
    const [isSwiping, setIsSwiping] = React152.useState(false);
    const [isRealSwipe, setIsRealSwipe] = React152.useState(false);
    const [dragOffset, setDragOffset] = React152.useState({
      x: 0,
      y: 0,
    });
    const [initialTransform, setInitialTransform] = React152.useState({
      x: 0,
      y: 0,
      scale: 1,
    });
    const [titleId, setTitleId] = React152.useState();
    const [descriptionId, setDescriptionId] = React152.useState();
    const [lockedDirection, setLockedDirection] = React152.useState(null);
    const rootRef = React152.useRef(null);
    const lastToastIdRef = React152.useRef(undefined);
    const dragStartPosRef = React152.useRef({
      x: 0,
      y: 0,
    });
    const initialTransformRef = React152.useRef({
      x: 0,
      y: 0,
      scale: 1,
    });
    const intendedSwipeDirectionRef = React152.useRef(undefined);
    const maxSwipeDisplacementRef = React152.useRef(0);
    const cancelledSwipeRef = React152.useRef(false);
    const swipeCancelBaselineRef = React152.useRef({
      x: 0,
      y: 0,
    });
    const isFirstPointerMoveRef = React152.useRef(false);
    const dragOffsetRef = React152.useRef({
      x: 0,
      y: 0,
    });
    const activePointerIdRef = React152.useRef(null);
    const dragAbortControllerRef = React152.useRef(null);
    const domIndex = store.useState("toastIndex", toast.id);
    const visibleIndex = store.useState("toastVisibleIndex", toast.id);
    const offsetY2 = store.useState("toastOffsetY", toast.id);
    const focused = store.useState("focused");
    const expanded = store.useState("expanded");
    useOpenChangeComplete({
      open: toast.transitionStatus !== "ending",
      ref: rootRef,
      onComplete() {
        if (toast.transitionStatus === "ending") {
          store.removeToast(toast.id);
        }
      },
    });
    const recalculateHeight = useStableCallback((flushSync = false) => {
      const element = rootRef.current;
      if (!element) {
        return;
      }
      const previousHeight = element.style.height;
      element.style.height = "auto";
      const height = element.offsetHeight;
      element.style.height = previousHeight;
      function update() {
        store.updateToastInternal(toast.id, {
          ref: rootRef,
          height,
          transitionStatus: undefined,
        });
      }
      if (flushSync) {
        ReactDOM8.flushSync(update);
      } else {
        update();
      }
    });
    useIsoLayoutEffect(() => {
      const previousToastId = lastToastIdRef.current;
      if (
        toast.transitionStatus !== "starting" &&
        previousToastId === toast.id
      ) {
        return;
      }
      if (previousToastId !== undefined) {
        setCurrentSwipeDirection(undefined);
        setInitialTransform({
          x: 0,
          y: 0,
          scale: 1,
        });
        setResolvedDragOffset({
          x: 0,
          y: 0,
        });
      }
      lastToastIdRef.current = toast.id;
      recalculateHeight();
    }, [recalculateHeight, toast.id, toast.transitionStatus]);
    function setResolvedDragOffset(nextDragOffset) {
      dragOffsetRef.current = nextDragOffset;
      setDragOffset(nextDragOffset);
    }
    useIsoLayoutEffect(() => {
      return () => {
        dragAbortControllerRef.current?.abort();
      };
    }, []);
    function applyDirectionalDamping(deltaX, deltaY) {
      const damp = (delta) =>
        delta > 0
          ? delta ** OPPOSITE_DIRECTION_DAMPING_FACTOR
          : -(Math.abs(delta) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
      const dampX =
        (deltaX > 0 && !swipeDirections.includes("right")) ||
        (deltaX < 0 && !swipeDirections.includes("left"));
      const dampY =
        (deltaY > 0 && !swipeDirections.includes("down")) ||
        (deltaY < 0 && !swipeDirections.includes("up"));
      return {
        x: dampX ? damp(deltaX) : deltaX,
        y: dampY ? damp(deltaY) : deltaY,
      };
    }
    const handleSwipeEnd = useStableCallback((event) => {
      if (event.pointerId !== activePointerIdRef.current) {
        return;
      }
      activePointerIdRef.current = null;
      dragAbortControllerRef.current?.abort();
      dragAbortControllerRef.current = null;
      setIsSwiping(false);
      setIsRealSwipe(false);
      setLockedDirection(null);
      const resolvedInitialTransform = initialTransformRef.current;
      if (event.type === "pointercancel" || cancelledSwipeRef.current) {
        setResolvedDragOffset({
          x: resolvedInitialTransform.x,
          y: resolvedInitialTransform.y,
        });
        setCurrentSwipeDirection(undefined);
        return;
      }
      const resolvedDragOffset = dragOffsetRef.current;
      const deltaX = resolvedDragOffset.x - resolvedInitialTransform.x;
      const deltaY = resolvedDragOffset.y - resolvedInitialTransform.y;
      let dismissDirection;
      for (const direction of swipeDirections) {
        if (getDisplacement(direction, deltaX, deltaY) > SWIPE_THRESHOLD) {
          dismissDirection = direction;
          break;
        }
      }
      if (dismissDirection) {
        setCurrentSwipeDirection(dismissDirection);
        store.closeToast(toast.id);
      } else {
        setResolvedDragOffset({
          x: resolvedInitialTransform.x,
          y: resolvedInitialTransform.y,
        });
        setCurrentSwipeDirection(undefined);
      }
    });
    function handlePointerDown(event) {
      if (event.button !== 0) {
        return;
      }
      if (event.pointerType === "touch") {
        store.pauseTimers();
      }
      const target = getTarget(event.nativeEvent);
      const isInteractiveElement = closest(
        target,
        `button,a,input,textarea,[role="button"],${TOAST_SWIPE_IGNORE_SELECTOR}`,
      );
      if (isInteractiveElement) {
        return;
      }
      cancelledSwipeRef.current = false;
      intendedSwipeDirectionRef.current = undefined;
      maxSwipeDisplacementRef.current = 0;
      activePointerIdRef.current = event.pointerId;
      dragStartPosRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
      swipeCancelBaselineRef.current = dragStartPosRef.current;
      const element = event.currentTarget;
      const transform = getElementTransform(element);
      initialTransformRef.current = transform;
      setInitialTransform(transform);
      setResolvedDragOffset({
        x: transform.x,
        y: transform.y,
      });
      store.set("hovering", true);
      setIsSwiping(true);
      setIsRealSwipe(false);
      setLockedDirection(null);
      isFirstPointerMoveRef.current = true;
      dragAbortControllerRef.current?.abort();
      const dragAbortController = new AbortController();
      dragAbortControllerRef.current = dragAbortController;
      const doc = ownerDocument(element);
      doc.addEventListener("pointerup", handleSwipeEnd, {
        signal: dragAbortController.signal,
      });
      doc.addEventListener("pointercancel", handleSwipeEnd, {
        signal: dragAbortController.signal,
      });
      element.setPointerCapture?.(event.pointerId);
    }
    function handlePointerMove(event) {
      if (event.pointerId !== activePointerIdRef.current) {
        return;
      }
      event.preventDefault();
      if (isFirstPointerMoveRef.current) {
        dragStartPosRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
        isFirstPointerMoveRef.current = false;
      }
      const { clientY, clientX, movementX, movementY } = event;
      if (
        (movementY < 0 && clientY > swipeCancelBaselineRef.current.y) ||
        (movementY > 0 && clientY < swipeCancelBaselineRef.current.y)
      ) {
        swipeCancelBaselineRef.current = {
          x: swipeCancelBaselineRef.current.x,
          y: clientY,
        };
      }
      if (
        (movementX < 0 && clientX > swipeCancelBaselineRef.current.x) ||
        (movementX > 0 && clientX < swipeCancelBaselineRef.current.x)
      ) {
        swipeCancelBaselineRef.current = {
          x: clientX,
          y: swipeCancelBaselineRef.current.y,
        };
      }
      const deltaX = clientX - dragStartPosRef.current.x;
      const deltaY = clientY - dragStartPosRef.current.y;
      const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
      const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
      let resolvedLockedDirection = lockedDirection;
      if (!isRealSwipe) {
        const movementDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (movementDistance >= MIN_DRAG_THRESHOLD) {
          setIsRealSwipe(true);
          const hasHorizontal =
            swipeDirections.includes("left") ||
            swipeDirections.includes("right");
          const hasVertical =
            swipeDirections.includes("up") || swipeDirections.includes("down");
          if (hasHorizontal && hasVertical) {
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            resolvedLockedDirection = absX > absY ? "horizontal" : "vertical";
            setLockedDirection(resolvedLockedDirection);
          }
        }
      }
      let candidate;
      if (!intendedSwipeDirectionRef.current) {
        if (resolvedLockedDirection === "vertical") {
          if (deltaY > 0) {
            candidate = "down";
          } else if (deltaY < 0) {
            candidate = "up";
          }
        } else if (resolvedLockedDirection === "horizontal") {
          if (deltaX > 0) {
            candidate = "right";
          } else if (deltaX < 0) {
            candidate = "left";
          }
        } else if (Math.abs(deltaX) >= Math.abs(deltaY)) {
          candidate = deltaX > 0 ? "right" : "left";
        } else {
          candidate = deltaY > 0 ? "down" : "up";
        }
        if (candidate && swipeDirections.includes(candidate)) {
          intendedSwipeDirectionRef.current = candidate;
          maxSwipeDisplacementRef.current = getDisplacement(
            candidate,
            deltaX,
            deltaY,
          );
          setCurrentSwipeDirection(candidate);
        }
      } else {
        const direction = intendedSwipeDirectionRef.current;
        const currentDisplacement = getDisplacement(
          direction,
          cancelDeltaX,
          cancelDeltaY,
        );
        if (currentDisplacement > SWIPE_THRESHOLD) {
          cancelledSwipeRef.current = false;
          setCurrentSwipeDirection(direction);
        } else if (
          !(
            swipeDirections.includes("left") &&
            swipeDirections.includes("right")
          ) &&
          !(
            swipeDirections.includes("up") && swipeDirections.includes("down")
          ) &&
          maxSwipeDisplacementRef.current - currentDisplacement >=
            REVERSE_CANCEL_THRESHOLD
        ) {
          cancelledSwipeRef.current = true;
        }
      }
      const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
      let newOffsetX = initialTransformRef.current.x;
      let newOffsetY = initialTransformRef.current.y;
      const hasHorizontalDir =
        swipeDirections.includes("left") || swipeDirections.includes("right");
      const hasVerticalDir =
        swipeDirections.includes("up") || swipeDirections.includes("down");
      if (resolvedLockedDirection !== "vertical" && hasHorizontalDir) {
        newOffsetX += dampedDelta.x;
      }
      if (resolvedLockedDirection !== "horizontal" && hasVerticalDir) {
        newOffsetY += dampedDelta.y;
      }
      setResolvedDragOffset({
        x: newOffsetX,
        y: newOffsetY,
      });
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (
          !rootRef.current ||
          !contains(
            rootRef.current,
            activeElement(ownerDocument(rootRef.current)),
          )
        ) {
          return;
        }
        store.closeToast(toast.id);
      }
    }
    React152.useEffect(() => {
      const element = rootRef.current;
      if (!swipeEnabled || !element) {
        return;
      }
      function preventDefaultTouchStart(event) {
        if (
          activePointerIdRef.current === null ||
          !contains(element, getTarget(event))
        ) {
          return;
        }
        event.preventDefault();
      }
      return addEventListener(element, "touchmove", preventDefaultTouchStart, {
        passive: false,
      });
    }, [swipeEnabled]);
    function getDragStyles() {
      const deltaX = dragOffset.x - initialTransform.x;
      const deltaY = dragOffset.y - initialTransform.y;
      return {
        transition: isSwiping ? "none" : undefined,
        transform: isSwiping
          ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) scale(${initialTransform.scale})`
          : undefined,
        [swipeMovementX]: `${deltaX}px`,
        [swipeMovementY]: `${deltaY}px`,
      };
    }
    const isHighPriority = toast.priority === "high";
    const defaultProps = {
      role: isHighPriority ? "alertdialog" : "dialog",
      tabIndex: 0,
      "aria-modal": false,
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      "aria-hidden": isHighPriority && !focused ? true : undefined,
      onPointerDown: swipeEnabled ? handlePointerDown : undefined,
      onPointerMove: swipeEnabled ? handlePointerMove : undefined,
      onPointerUp: swipeEnabled ? handleSwipeEnd : undefined,
      onPointerCancel: swipeEnabled ? handleSwipeEnd : undefined,
      onKeyDown: handleKeyDown,
      inert: inertValue(toast.limited),
      style: {
        ...getDragStyles(),
        [index3]: toast.transitionStatus === "ending" ? domIndex : visibleIndex,
        [offsetY]: `${offsetY2}px`,
        [height]: toast.height ? `${toast.height}px` : undefined,
      },
    };
    const toastRoot = React152.useMemo(
      () => ({
        toast,
        setTitleId,
        setDescriptionId,
        recalculateHeight,
        visibleIndex,
        expanded,
      }),
      [
        toast,
        setTitleId,
        setDescriptionId,
        recalculateHeight,
        visibleIndex,
        expanded,
      ],
    );
    const state = {
      transitionStatus: toast.transitionStatus,
      expanded,
      limited: toast.limited || false,
      type: toast.type,
      swiping: isSwiping,
      swipeDirection: currentSwipeDirection,
    };
    const element = useRenderElement("div", componentProps, {
      ref: [forwardedRef, rootRef],
      state,
      stateAttributesMapping: toastRootStateAttributesMapping,
      props: [defaultProps, elementProps],
    });
    return /* @__PURE__ */ _jsx39(ToastRootContext.Provider, {
      value: toastRoot,
      children: element,
    });
  },
);
if (true) ToastRoot.displayName = "ToastRoot";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/description/ToastDescription.mjs
import * as React154 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/utils/isRenderableNode.mjs
import * as React153 from "react";

function isRenderableNode(node) {
  if (node == null || typeof node === "boolean" || node === "") {
    return false;
  }
  if (Array.isArray(node)) {
    return node.some(isRenderableNode);
  }
  return true;
}
function hasRenderableChildren(element) {
  return (
    /* @__PURE__ */ React153.isValidElement(element) &&
    isRenderableNode(element.props.children)
  );
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/utils/useToastLabelPart.mjs
("use client");
function useToastLabelPart(idProp, childrenProp, part) {
  const { toast, setTitleId, setDescriptionId } = useToastRootContext();
  const setId = part === "title" ? setTitleId : setDescriptionId;
  const children =
    childrenProp ?? (part === "title" ? toast.title : toast.description);
  const id = useId(idProp);
  return {
    id,
    children,
    type: toast.type,
    setId,
  };
}
function useToastLabelElement(element, id, setId) {
  const shouldRender = hasRenderableChildren(element);
  useIsoLayoutEffect(() => {
    if (!shouldRender) {
      return;
    }
    setId(id);
    return () => {
      setId((currentId) => (currentId === id ? undefined : currentId));
    };
  }, [shouldRender, id, setId]);
  return shouldRender ? element : null;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/description/ToastDescription.mjs
("use client");
var ToastDescription = /* @__PURE__ */ React154.forwardRef(
  function ToastDescription(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      children: childrenProp,
      ...elementProps
    } = componentProps;
    const { id, children, type, setId } = useToastLabelPart(
      idProp,
      childrenProp,
      "description",
    );
    const state = {
      type,
    };
    const element = useRenderElement("p", componentProps, {
      ref: forwardedRef,
      state,
      props: {
        ...elementProps,
        id,
        children,
      },
    });
    return useToastLabelElement(element, id, setId);
  },
);
if (true) ToastDescription.displayName = "ToastDescription";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/title/ToastTitle.mjs
import * as React155 from "react";

("use client");
var ToastTitle = /* @__PURE__ */ React155.forwardRef(
  function ToastTitle(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      id: idProp,
      children: childrenProp,
      ...elementProps
    } = componentProps;
    const { id, children, type, setId } = useToastLabelPart(
      idProp,
      childrenProp,
      "title",
    );
    const state = {
      type,
    };
    const element = useRenderElement("h2", componentProps, {
      ref: forwardedRef,
      state,
      props: {
        ...elementProps,
        id,
        children,
      },
    });
    return useToastLabelElement(element, id, setId);
  },
);
if (true) ToastTitle.displayName = "ToastTitle";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/close/ToastClose.mjs
import * as React156 from "react";

("use client");
var ToastClose = /* @__PURE__ */ React156.forwardRef(
  function ToastClose(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      disabled,
      nativeButton = true,
      ...elementProps
    } = componentProps;
    const store = useToastProviderContext();
    const { toast, expanded } = useToastRootContext();
    const [hasFocus, setHasFocus] = React156.useState(false);
    const { getButtonProps, buttonRef } = useButton({
      disabled,
      native: nativeButton,
    });
    const state = {
      type: toast.type,
    };
    return useRenderElement("button", componentProps, {
      ref: [forwardedRef, buttonRef],
      state,
      props: [
        {
          "aria-hidden": !expanded && !hasFocus,
          onClick() {
            store.closeToast(toast.id);
          },
          onFocus() {
            setHasFocus(true);
          },
          onBlur() {
            setHasFocus(false);
          },
        },
        elementProps,
        getButtonProps,
      ],
    });
  },
);
if (true) ToastClose.displayName = "ToastClose";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/portal/ToastPortal.mjs
import * as React158 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/utils/FloatingPortalLite.mjs
import * as React157 from "react";
import { jsxs as _jsxs19 } from "react/jsx-runtime";
import * as ReactDOM9 from "react-dom";

("use client");
var FloatingPortalLite = /* @__PURE__ */ React157.forwardRef(
  function FloatingPortalLite(componentProps, forwardedRef) {
    const { children, container, className, render, style, ...elementProps } =
      componentProps;
    const { node: portalNode, subtree: portalSubtree } = useFloatingPortalNode({
      container,
      ref: forwardedRef,
      componentProps,
      elementProps,
    });
    if (!portalSubtree && !portalNode) {
      return null;
    }
    return /* @__PURE__ */ _jsxs19(React157.Fragment, {
      children: [
        portalSubtree,
        portalNode &&
          /* @__PURE__ */ ReactDOM9.createPortal(children, portalNode),
      ],
    });
  },
);
if (true) FloatingPortalLite.displayName = "FloatingPortalLite";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/portal/ToastPortal.mjs
import { jsx as _jsx40 } from "react/jsx-runtime";

("use client");
var ToastPortal = /* @__PURE__ */ React158.forwardRef(
  function ToastPortal(props, forwardedRef) {
    return /* @__PURE__ */ _jsx40(FloatingPortalLite, {
      ref: forwardedRef,
      ...props,
    });
  },
);
if (true) ToastPortal.displayName = "ToastPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/toast/useToastManager.mjs
import * as React159 from "react";

("use client");
function useToastManager() {
  const store = useToastProviderContext();
  const toasts = store.useState("toasts");
  return React159.useMemo(
    () => ({
      toasts,
      add: store.addToast,
      close: store.closeToast,
      update: store.updateToast,
      promise: store.promiseToast,
    }),
    [toasts, store],
  );
}

// src/toast.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";

function ToastProvider2({ children }) {
  return /* @__PURE__ */ jsxs10(ToastProvider, {
    children: [
      /* @__PURE__ */ jsx11(ToastPortal, {
        children: /* @__PURE__ */ jsx11(ToastViewport, {
          className: parts.toastViewport,
          children: /* @__PURE__ */ jsx11(ToastList, {}),
        }),
      }),
      children,
    ],
  });
}
function ToastList() {
  const { toasts } = useToastManager();
  return toasts.map((toast) =>
    /* @__PURE__ */ jsxs10(
      ToastRoot,
      {
        toast,
        className: parts.toast,
        "data-tone": toast.data?.tone,
        children: [
          /* @__PURE__ */ jsxs10("div", {
            children: [
              /* @__PURE__ */ jsx11(ToastTitle, {
                className: parts.toastTitle,
              }),
              /* @__PURE__ */ jsx11(ToastDescription, {
                className: parts.toastDescription,
              }),
            ],
          }),
          /* @__PURE__ */ jsx11(ToastClose, {
            className: parts.toastClose,
            "aria-label": "Dismiss",
            children: "×",
          }),
        ],
      },
      toast.id,
    ),
  );
}
function useToast() {
  const manager = useToastManager();
  return {
    add: (toast) =>
      manager.add({
        title: toast.title,
        description: toast.description,
        data: { tone: toast.tone },
      }),
    close: (id) => manager.close(id),
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
import * as React162 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/root/TooltipRootContext.mjs
import * as React160 from "react";

("use client");
var TooltipRootContext = /* @__PURE__ */ React160.createContext(undefined);
if (true) TooltipRootContext.displayName = "TooltipRootContext";
function useTooltipRootContext(optional) {
  const context = React160.useContext(TooltipRootContext);
  if (context === undefined && !optional) {
    throw new Error(
      "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/store/TooltipStore.mjs
import * as React161 from "react";

var selectors7 = {
  ...popupStoreSelectors,
  disabled: (state) => state.disabled,
  instantType: (state) => state.instantType,
  isInstantPhase: (state) => state.isInstantPhase,
  trackCursorAxis: (state) => state.trackCursorAxis,
  disableHoverablePopup: (state) => state.disableHoverablePopup,
  lastOpenChangeReason: (state) => state.openChangeReason,
  closeOnClick: (state) => state.closeOnClick,
  appliedTriggerProps: (state, apply) =>
    apply ? state.activeTriggerProps : undefined,
  closeDelay: (state) => state.closeDelay,
  adaptiveOrigin: (state) => state.adaptiveOrigin,
};

class TooltipStore extends ReactStore {
  constructor(initialState, floatingId, nested) {
    const triggerElements = new PopupTriggerMap();
    super(
      createInitialState4(initialState, triggerElements, floatingId, nested),
      createInitialContext4(triggerElements),
      selectors7,
    );
  }
  setOpen = (nextOpen, eventDetails) => {
    applyPopupOpenChange(this, nextOpen, eventDetails, {
      extraState: {
        openChangeReason: eventDetails.reason,
      },
    });
  };
  cancelPendingOpen(event) {
    this.state.floatingRootContext.dispatchOpenChange(
      false,
      createChangeEventDetails(triggerPress, event),
    );
  }
}
function createInitialState4(
  initialState,
  triggerElements,
  floatingId,
  nested = false,
) {
  const state = {
    ...createInitialPopupStoreState(triggerElements, floatingId, nested),
    disabled: false,
    instantType: undefined,
    isInstantPhase: false,
    trackCursorAxis: "none",
    disableHoverablePopup: false,
    openChangeReason: null,
    closeOnClick: true,
    closeDelay: 0,
    adaptiveOrigin: undefined,
    ...initialState,
  };
  return state;
}
function createInitialContext4(triggerElements) {
  return {
    popupRef: /* @__PURE__ */ React161.createRef(),
    onOpenChange: undefined,
    onOpenChangeComplete: undefined,
    triggerElements,
  };
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
import { jsx as _jsx41, jsxs as _jsxs20 } from "react/jsx-runtime";

("use client");
var TooltipRoot = fastComponent(function TooltipRoot(props) {
  const {
    disabled: disabled2 = false,
    defaultOpen = false,
    open: openProp,
    disableHoverablePopup = false,
    trackCursorAxis = "none",
    actionsRef,
    onOpenChange,
    onOpenChangeComplete,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    children,
  } = props;
  const store = usePopupRootStore(
    (floatingId, nested) =>
      new TooltipStore(
        {
          open: defaultOpen,
          openProp,
          activeTriggerId: defaultTriggerIdProp,
          triggerIdProp,
        },
        floatingId,
        nested,
      ),
  );
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const openState = store.useState("open");
  const open = !disabled2 && openState;
  const activeTriggerId = store.useState("activeTriggerId");
  const mounted = store.useState("mounted");
  const payload = store.useState("payload");
  store.useSyncedValues({
    trackCursorAxis,
    disableHoverablePopup,
    disabled: disabled2,
  });
  useImplicitActiveTrigger(store, {
    closeOnActiveTriggerUnmount: true,
  });
  const { forceUnmount, transitionStatus } = useOpenStateTransitions(
    open,
    store,
  );
  const isInstantPhase = store.useState("isInstantPhase");
  const instantType = store.useState("instantType");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const previousInstantTypeRef = React162.useRef(null);
  useIsoLayoutEffect(() => {
    if (openState && disabled2) {
      store.setOpen(false, createChangeEventDetails(disabled));
    }
  }, [openState, disabled2, store]);
  useIsoLayoutEffect(() => {
    if (
      (transitionStatus === "ending" && lastOpenChangeReason === none) ||
      (transitionStatus !== "ending" && isInstantPhase)
    ) {
      if (instantType !== "delay") {
        previousInstantTypeRef.current = instantType;
      }
      store.set("instantType", "delay");
    } else if (previousInstantTypeRef.current !== null) {
      store.set("instantType", previousInstantTypeRef.current);
      previousInstantTypeRef.current = null;
    }
  }, [
    transitionStatus,
    isInstantPhase,
    lastOpenChangeReason,
    instantType,
    store,
  ]);
  useIsoLayoutEffect(() => {
    if (open) {
      if (activeTriggerId == null) {
        store.set("payload", undefined);
      }
    }
  }, [store, activeTriggerId, open]);
  React162.useImperativeHandle(
    actionsRef,
    () => ({
      unmount: forceUnmount,
      close: () =>
        store.setOpen(false, createChangeEventDetails(imperativeAction)),
    }),
    [forceUnmount, store],
  );
  const shouldRenderInteractions =
    open || mounted || (!disabled2 && trackCursorAxis !== "none");
  return /* @__PURE__ */ _jsxs20(TooltipRootContext.Provider, {
    value: store,
    children: [
      handle &&
        /* @__PURE__ */ _jsx41(PopupHandleAttachment, {
          handle,
          store,
        }),
      shouldRenderInteractions &&
        /* @__PURE__ */ _jsx41(TooltipInteractions, {
          store,
          disabled: disabled2,
          trackCursorAxis,
        }),
      typeof children === "function"
        ? children({
            payload,
          })
        : children,
    ],
  });
});
if (true) TooltipRoot.displayName = "TooltipRoot";
function TooltipInteractions({ store, disabled: disabled2, trackCursorAxis }) {
  const floatingRootContext = store.useState("floatingRootContext");
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !disabled2,
    referencePress: () => store.select("closeOnClick"),
  });
  const clientPoint = useClientPoint(floatingRootContext, {
    enabled: !disabled2 && trackCursorAxis !== "none",
    axis: trackCursorAxis === "none" ? undefined : trackCursorAxis,
  });
  const triggerProps = React162.useMemo(
    () => mergeProps(clientPoint.reference, dismiss.reference),
    [clientPoint.reference, dismiss.reference],
  );
  usePopupInteractionProps(store, {
    activeTriggerProps: triggerProps,
    inactiveTriggerProps: triggerProps,
    popupProps: dismiss.floating ?? EMPTY_OBJECT,
  });
  return null;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.mjs
import * as React164 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/provider/TooltipProviderContext.mjs
import * as React163 from "react";

("use client");
var TooltipProviderContext = /* @__PURE__ */ React163.createContext(undefined);
if (true) TooltipProviderContext.displayName = "TooltipProviderContext";
function useTooltipProviderContext() {
  return React163.useContext(TooltipProviderContext);
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/utils/constants.mjs
var OPEN_DELAY2 = 600;

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/trigger/TooltipTrigger.mjs
("use client");
var TOOLTIP_TRIGGER_IDENTIFIER = "data-base-ui-tooltip-trigger";
function getTargetElement(event) {
  const target = getTarget(event);
  return isElement(target) ? target : null;
}
var TooltipTrigger = fastComponentRef(
  function TooltipTrigger(componentProps, forwardedRef) {
    const {
      render,
      className,
      style,
      handle,
      payload,
      disabled: disabledProp,
      delay,
      closeOnClick = true,
      closeDelay,
      id: idProp,
      ...elementProps
    } = componentProps;
    const rootContext = useTooltipRootContext(true);
    const handleStore = usePopupHandleStore(handle);
    const store = handleStore ?? rootContext;
    if (!store) {
      throw new Error(
        "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle.",
      );
    }
    const thisTriggerId = useBaseUiId(idProp);
    const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
    const isOpenedByThisTrigger = store.useState(
      "isOpenedByTrigger",
      thisTriggerId,
    );
    const floatingRootContext = store.useState("floatingRootContext");
    const triggerElementRef = React164.useRef(null);
    const closeDelayWithDefault = closeDelay ?? 0;
    const { registerTrigger, isMountedByThisTrigger } =
      useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
        payload,
        closeOnClick,
        closeDelay: closeDelayWithDefault,
      });
    const providerDelay = useTooltipProviderContext();
    const { activeIdRef, delayRef, isInstantPhase, hasProvider } =
      useDelayGroup(floatingRootContext, {
        open: isOpenedByThisTrigger,
      });
    const hoverInteraction =
      useHoverInteractionSharedState(floatingRootContext);
    store.useSyncedValue("isInstantPhase", isInstantPhase);
    const rootDisabled = store.useState("disabled");
    const disabled = disabledProp ?? rootDisabled;
    const disabledRef = useValueAsRef(disabled);
    const trackCursorAxis = store.useState("trackCursorAxis");
    const disableHoverablePopup = store.useState("disableHoverablePopup");
    const isNestedTriggerHoveredRef = React164.useRef(false);
    const nestedTriggerOpenTimeout = useTimeout();
    const pointerTypeRef = React164.useRef(undefined);
    function getOpenDelay() {
      if (hasProvider && activeIdRef.current != null) {
        return 0;
      }
      return delay ?? providerDelay ?? OPEN_DELAY2;
    }
    function isEnabledNestedTriggerTarget(target) {
      const triggerEl = triggerElementRef.current;
      if (!triggerEl || !target) {
        return false;
      }
      const nearestTrigger = closest(target, `[${TOOLTIP_TRIGGER_IDENTIFIER}]`);
      return (
        nearestTrigger !== null &&
        nearestTrigger !== triggerEl &&
        contains(triggerEl, nearestTrigger)
      );
    }
    function detectNestedTriggerHover(target) {
      const nestedTriggerHovered = isEnabledNestedTriggerTarget(target);
      isNestedTriggerHoveredRef.current = nestedTriggerHovered;
      if (nestedTriggerHovered) {
        hoverInteraction.openChangeTimeout.clear();
        hoverInteraction.restTimeout.clear();
        hoverInteraction.restTimeoutPending = false;
        nestedTriggerOpenTimeout.clear();
      }
      return nestedTriggerHovered;
    }
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
      enabled: !disabled,
      mouseOnly: true,
      move: false,
      handleClose:
        !disableHoverablePopup && trackCursorAxis !== "both"
          ? safePolygon()
          : null,
      restMs: getOpenDelay,
      delay() {
        if (closeDelay == null && hasProvider) {
          return {
            close: getDelay(delayRef.current, "close"),
          };
        }
        return {
          close: closeDelayWithDefault,
        };
      },
      triggerElementRef,
      isActiveTrigger: isTriggerActive,
      isClosing: () => store.select("transitionStatus") === "ending",
      shouldOpen() {
        return !isNestedTriggerHoveredRef.current;
      },
    });
    const focusProps = useFocus(floatingRootContext, {
      enabled: !disabled,
    }).reference;
    const handleNestedTriggerHover = (event) => {
      const wasNestedTriggerHovered = isNestedTriggerHoveredRef.current;
      const target = getTargetElement(event);
      const nestedTriggerHovered = detectNestedTriggerHover(target);
      const triggerEl = triggerElementRef.current;
      const targetInsideTrigger =
        triggerEl && target && contains(triggerEl, target);
      if (
        nestedTriggerHovered &&
        store.select("open") &&
        store.select("lastOpenChangeReason") === triggerHover
      ) {
        store.setOpen(false, createChangeEventDetails(triggerHover, event));
        return;
      }
      if (
        wasNestedTriggerHovered &&
        !nestedTriggerHovered &&
        targetInsideTrigger &&
        !disabledRef.current &&
        !store.select("open") &&
        triggerEl &&
        isMouseLikePointerType(pointerTypeRef.current)
      ) {
        const open = () => {
          if (
            !isNestedTriggerHoveredRef.current &&
            !disabledRef.current &&
            !store.select("open")
          ) {
            store.setOpen(
              true,
              createChangeEventDetails(triggerHover, event, triggerEl),
            );
          }
        };
        const openDelay = getOpenDelay();
        if (openDelay === 0) {
          nestedTriggerOpenTimeout.clear();
          open();
        } else {
          nestedTriggerOpenTimeout.start(openDelay, open);
        }
      }
    };
    const rootTriggerProps = store.useState(
      "appliedTriggerProps",
      isMountedByThisTrigger || trackCursorAxis !== "none",
    );
    const state = {
      open: isOpenedByThisTrigger,
    };
    const element = useRenderElement("button", componentProps, {
      state,
      ref: [forwardedRef, registerTrigger, triggerElementRef],
      props: [
        hoverProps,
        focusProps,
        rootTriggerProps,
        {
          onMouseOver(event) {
            handleNestedTriggerHover(event.nativeEvent);
          },
          onFocus(event) {
            if (
              isEnabledNestedTriggerTarget(getTargetElement(event.nativeEvent))
            ) {
              event.preventBaseUIHandler();
            }
          },
          onMouseLeave() {
            isNestedTriggerHoveredRef.current = false;
            nestedTriggerOpenTimeout.clear();
            pointerTypeRef.current = undefined;
          },
          onPointerEnter(event) {
            pointerTypeRef.current = event.pointerType;
          },
          onPointerDown(event) {
            pointerTypeRef.current = event.pointerType;
            store.set("closeOnClick", closeOnClick);
            if (closeOnClick && !store.select("open")) {
              store.cancelPendingOpen(event.nativeEvent);
            }
          },
          onClick(event) {
            if (closeOnClick && !store.select("open")) {
              store.cancelPendingOpen(event.nativeEvent);
            }
          },
          id: thisTriggerId,
          [triggerDisabled]: disabled ? "" : undefined,
          [TOOLTIP_TRIGGER_IDENTIFIER]: disabled ? undefined : "",
        },
        elementProps,
      ],
      stateAttributesMapping: triggerOpenStateMapping,
    });
    return element;
  },
);
if (true) TooltipTrigger.displayName = "TooltipTrigger";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
import * as React166 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/portal/TooltipPortalContext.mjs
import * as React165 from "react";

("use client");
var TooltipPortalContext = /* @__PURE__ */ React165.createContext(undefined);
if (true) TooltipPortalContext.displayName = "TooltipPortalContext";
function useTooltipPortalContext() {
  const value = React165.useContext(TooltipPortalContext);
  if (value === undefined) {
    throw new Error("Base UI: <Tooltip.Portal> is missing.");
  }
  return value;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
import { jsx as _jsx42 } from "react/jsx-runtime";

("use client");
var TooltipPortal = /* @__PURE__ */ React166.forwardRef(
  function TooltipPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const store = useTooltipRootContext();
    const mounted = store.useState("mounted");
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
      return null;
    }
    return /* @__PURE__ */ _jsx42(TooltipPortalContext.Provider, {
      value: keepMounted,
      children: /* @__PURE__ */ _jsx42(FloatingPortalLite, {
        ref: forwardedRef,
        ...portalProps,
      }),
    });
  },
);
if (true) TooltipPortal.displayName = "TooltipPortal";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
import * as React168 from "react";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/positioner/TooltipPositionerContext.mjs
import * as React167 from "react";

("use client");
var TooltipPositionerContext =
  /* @__PURE__ */ React167.createContext(undefined);
if (true) TooltipPositionerContext.displayName = "TooltipPositionerContext";
function useTooltipPositionerContext() {
  const context = React167.useContext(TooltipPositionerContext);
  if (context === undefined) {
    throw new Error(
      "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>.",
    );
  }
  return context;
}

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
import { jsx as _jsx43 } from "react/jsx-runtime";

("use client");
var TooltipPositioner = /* @__PURE__ */ React168.forwardRef(
  function TooltipPositioner(componentProps, forwardedRef) {
    const {
      render,
      className,
      anchor,
      positionMethod = "absolute",
      side = "top",
      align = "center",
      sideOffset = 0,
      alignOffset = 0,
      collisionBoundary = "clipping-ancestors",
      collisionPadding = 5,
      arrowPadding = 5,
      sticky = false,
      disableAnchorTracking = false,
      collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
      style,
      ...elementProps
    } = componentProps;
    const store = useTooltipRootContext();
    const keepMounted = useTooltipPortalContext();
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const trackCursorAxis = store.useState("trackCursorAxis");
    const disableHoverablePopup = store.useState("disableHoverablePopup");
    const floatingRootContext = store.useState("floatingRootContext");
    const instantType = store.useState("instantType");
    const transitionStatus = store.useState("transitionStatus");
    const adaptiveOrigin = store.useState("adaptiveOrigin");
    const positioning = useAnchorPositioning({
      anchor,
      positionMethod,
      floatingRootContext,
      mounted,
      side,
      sideOffset,
      align,
      alignOffset,
      collisionBoundary,
      collisionPadding,
      sticky,
      arrowPadding,
      disableAnchorTracking,
      keepMounted,
      collisionAvoidance,
      adaptiveOrigin,
    });
    const state = React168.useMemo(
      () => ({
        open,
        side: positioning.side,
        align: positioning.align,
        anchorHidden: positioning.anchorHidden,
        instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType,
      }),
      [
        open,
        positioning.side,
        positioning.align,
        positioning.anchorHidden,
        trackCursorAxis,
        instantType,
      ],
    );
    const element = usePositioner(componentProps, state, {
      styles: positioning.positionerStyles,
      transitionStatus,
      props: elementProps,
      refs: [forwardedRef, store.useStateSetter("positionerElement")],
      hidden: !mounted,
      inert: !open || trackCursorAxis === "both" || disableHoverablePopup,
    });
    return /* @__PURE__ */ _jsx43(TooltipPositionerContext.Provider, {
      value: positioning,
      children: element,
    });
  },
);
if (true) TooltipPositioner.displayName = "TooltipPositioner";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/popup/TooltipPopup.mjs
import * as React169 from "react";

("use client");
var TooltipPopup = /* @__PURE__ */ React169.forwardRef(
  function TooltipPopup(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const store = useTooltipRootContext();
    const { side, align } = useTooltipPositionerContext();
    const open = store.useState("open");
    const instantType = store.useState("instantType");
    const transitionStatus = store.useState("transitionStatus");
    const popupProps = store.useState("popupProps");
    const floatingContext = store.useState("floatingRootContext");
    const disabled = store.useState("disabled");
    const closeDelay = store.useState("closeDelay");
    useOpenChangeComplete({
      open,
      ref: store.context.popupRef,
      onComplete() {
        if (open) {
          store.context.onOpenChangeComplete?.(true);
        }
      },
    });
    useHoverFloatingInteraction(floatingContext, {
      enabled: !disabled,
      closeDelay,
    });
    const setPopupElement = store.useStateSetter("popupElement");
    const state = {
      open,
      side,
      align,
      instant: instantType,
      transitionStatus,
    };
    const element = useRenderElement("div", componentProps, {
      state,
      ref: [forwardedRef, store.context.popupRef, setPopupElement],
      props: [
        FOCUSABLE_POPUP_PROPS,
        popupProps,
        getDisabledMountTransitionStyles(transitionStatus),
        elementProps,
      ],
      stateAttributesMapping: popupTransitionStateMapping,
    });
    return element;
  },
);
if (true) TooltipPopup.displayName = "TooltipPopup";

// ../../node_modules/.bun/@base-ui+react@1.9.0+2fde69a3fd50c568/node_modules/@base-ui/react/tooltip/provider/TooltipProvider.mjs
import * as React170 from "react";
import { jsx as _jsx44 } from "react/jsx-runtime";

("use client");
var TooltipProvider = function TooltipProvider(props) {
  const { delay, closeDelay, timeout = 400 } = props;
  const delayValue = React170.useMemo(
    () => ({
      open: delay,
      close: closeDelay,
    }),
    [delay, closeDelay],
  );
  return /* @__PURE__ */ _jsx44(TooltipProviderContext.Provider, {
    value: delay,
    children: /* @__PURE__ */ _jsx44(FloatingDelayGroup, {
      delay: delayValue,
      timeoutMs: timeout,
      children: props.children,
    }),
  });
};
if (true) TooltipProvider.displayName = "TooltipProvider";

// src/tooltip.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";

function TooltipHint({ trigger, content, side = "top" }) {
  return /* @__PURE__ */ jsxs11(TooltipRoot, {
    children: [
      /* @__PURE__ */ jsx12(TooltipTrigger, {
        render: trigger,
      }),
      /* @__PURE__ */ jsx12(TooltipPortal, {
        children: /* @__PURE__ */ jsx12(TooltipPositioner, {
          side,
          sideOffset: 6,
          children: /* @__PURE__ */ jsx12(TooltipPopup, {
            className: parts.tooltip,
            children: content,
          }),
        }),
      }),
    ],
  });
}
function TooltipProvider2({ children, delay = 400 }) {
  return /* @__PURE__ */ jsx12(TooltipProvider, {
    delay,
    children,
  });
}

export {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckboxField,
  Dialog,
  Grid,
  IconButton,
  MenuButton,
  PopoverPanel,
  RadioGroupField,
  Row,
  Select,
  Stack,
  SwitchField,
  Table,
  TabsView,
  TBody,
  Td,
  TextArea,
  TextField,
  THead,
  Th,
  ToastProvider2 as ToastProvider,
  TooltipHint,
  TooltipProvider2 as TooltipProvider,
  Tr,
  useToast,
};
