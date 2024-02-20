import {
  PreventableEvent,
  contains,
  isDocumentAvailable,
  parseCSSClassNames,
  validatePackage
} from "./chunk-PRCW75SL.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-RJHJ44KO.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewContainerRef,
  filter,
  fromEvent,
  isDevMode,
  merge,
  setClassMetadata,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-2R43C4QI.js";

// node_modules/@progress/kendo-draggable-common/dist/es/algorithms/intersect.js
var getRatio = function(element, target) {
  var elementRect = element.getBoundingClientRect();
  var targetRect = target.getBoundingClientRect();
  var top = Math.max(targetRect.top, elementRect.top);
  var left = Math.max(targetRect.left, elementRect.left);
  var right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
  var bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
  var width = right - left;
  var height = bottom - top;
  if (left < right && top < bottom) {
    var targetArea = targetRect.width * targetRect.height;
    var entryArea = elementRect.width * elementRect.height;
    var intersectionArea = width * height;
    var intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
};
var intersect = function(element, candidates) {
  var max = 0;
  var result = null;
  candidates.forEach(function(candidate) {
    if (candidate && element) {
      var ration = getRatio(element, candidate);
      if (ration > max) {
        max = ration;
        result = candidate;
      }
    }
  });
  return result;
};

// node_modules/@progress/kendo-draggable-common/dist/es/utils/index.js
var detectBrowser = function() {
  var ua = window && window.navigator.userAgent;
  if (!ua) {
    return false;
  }
  var browser = false;
  var match = [];
  var browserRxs = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome|crios)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
  };
  for (var agent in browserRxs) {
    if (browserRxs.hasOwnProperty(agent)) {
      match = ua.match(browserRxs[agent]);
      if (match) {
        browser = {};
        browser[agent] = true;
        browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browser.version = parseInt(document.DOCUMENT_NODE || match[2], 10);
        break;
      }
    }
  }
  return browser;
};
var getDocument = function(element) {
  return element ? element.ownerDocument || window.document : window.document;
};
var getWindow = function(element) {
  var document2 = getDocument(element);
  return document2 ? document2.defaultView || window : window;
};
var scrollableRoot = function(element) {
  var support = { browser: detectBrowser() };
  var document2 = getDocument(element);
  return support.browser.edge || support.browser.safari ? document2.body : document2.documentElement;
};
var isScrollable = function(el) {
  if (el && el.className && typeof el.className === "string" && el.className.indexOf("k-auto-scrollable") > -1) {
    return true;
  }
  var overflow = window.getComputedStyle(el, "overflow").overflow;
  return overflow.indexOf("auto") > -1 || overflow.indexOf("scroll") > -1;
};
var getScrollableParent = function(el) {
  var root = scrollableRoot(el);
  if (!el || el === document.body || el === document.documentElement) {
    return root;
  }
  var parent = el;
  while (parent && parent !== document.body && parent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && parent.nodeType !== Node.DOCUMENT_NODE && !isScrollable(parent)) {
    parent = parent.parentNode;
  }
  if (parent && (parent === document.body || parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE)) {
    return root;
  }
  return parent;
};
var autoScrollVelocity = function(mouseX, mouseY, rect) {
  var velocity = { x: 0, y: 0 };
  var AUTO_SCROLL_AREA = 50;
  if (mouseX - rect.left < AUTO_SCROLL_AREA) {
    velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
  } else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
    velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
  }
  if (mouseY - rect.top < AUTO_SCROLL_AREA) {
    velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
  } else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
    velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
  }
  return velocity;
};
var scrollableViewPort = function(el, window2) {
  var root = scrollableRoot(el);
  if (el === root) {
    return {
      top: root.scrollTop,
      left: root.scrollLeft,
      bottom: root.scrollTop + window2.innerHeight,
      right: root.scrollLeft + window2.innerWidth
    };
  } else {
    var rect = el.getBoundingClientRect();
    return {
      bottom: rect.top + rect.height,
      right: rect.left + rect.width,
      left: rect.left,
      top: rect.top
    };
  }
};
var isPointerInsideContainer = function(x, y, container) {
  var rect = container.getBoundingClientRect();
  return rect.top <= y && rect.left <= x && y <= rect.bottom && x <= rect.right;
};

// node_modules/@progress/kendo-draggable-common/dist/es/drag-n-drop.js
var DRAG_AND_DROP_DISPATCH_ACTION;
(function(DRAG_AND_DROP_DISPATCH_ACTION2) {
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_DOWN"] = "pointerdown";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_MOVE"] = "pointermove";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_UP"] = "pointerup";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_CANCEL"] = "pointercancel";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_DOWN"] = "mousedown";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_MOVE"] = "mousemove";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_UP"] = "mouseup";
  DRAG_AND_DROP_DISPATCH_ACTION2["CONTEXT_MENU"] = "contextmenu";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_START"] = "touchstart";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_MOVE"] = "touchmove";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_END"] = "touchend";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_CANCEL"] = "touchcancel";
  DRAG_AND_DROP_DISPATCH_ACTION2["SCROLL"] = "scroll";
  DRAG_AND_DROP_DISPATCH_ACTION2["START"] = "KENDO_DRAG_AND_DROP_START";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOVE"] = "KENDO_DRAG_AND_DROP_MOVE";
  DRAG_AND_DROP_DISPATCH_ACTION2["END"] = "KENDO_DRAG_AND_DROP_END";
  DRAG_AND_DROP_DISPATCH_ACTION2["CANCEL"] = "KENDO_DRAG_AND_DROP_CANCEL";
})(DRAG_AND_DROP_DISPATCH_ACTION || (DRAG_AND_DROP_DISPATCH_ACTION = {}));
var isTouchEvent = function(event) {
  return /^touch/.test(event.type);
};
var isScrollEvent = function(event) {
  return /^(scroll)/.test(event.type);
};
var normalizeEvent = function(event, state) {
  return isTouchEvent(event) ? {
    pageX: event.changedTouches[0].pageX,
    pageY: event.changedTouches[0].pageY,
    clientX: event.changedTouches[0].clientX,
    clientY: event.changedTouches[0].clientY,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    offsetX: state.offset.x,
    offsetY: state.offset.y,
    type: event.type,
    originalEvent: event,
    isTouch: true,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false
  } : isScrollEvent(event) ? {
    pageX: state.pageOffset.x,
    pageY: state.pageOffset.y,
    clientX: state.clientOffset.x,
    clientY: state.clientOffset.y,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    offsetX: state.offset.x,
    offsetY: state.offset.y,
    type: event.type,
    originalEvent: event,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false
  } : {
    pageX: event.pageX,
    pageY: event.pageY,
    clientX: event.clientX,
    clientY: event.clientY,
    offsetX: event.offsetX,
    offsetY: event.offsetY,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    type: event.type,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey,
    originalEvent: event
  };
};
var noop = function() {
};
var dispatchDragAndDrop = function(state, action, callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }
  var _a = callbacks.onIsPressedChange, onIsPressedChange = _a === void 0 ? noop : _a, _b = callbacks.onIsScrollingChange, onIsScrollingChange = _b === void 0 ? noop : _b, _c = callbacks.onVelocityChange, onVelocityChange = _c === void 0 ? noop : _c, _d = callbacks.onOffsetChange, onOffsetChange = _d === void 0 ? noop : _d, _e = callbacks.onPageOffsetChange, onPageOffsetChange = _e === void 0 ? noop : _e, _f = callbacks.onClientOffsetChange, onClientOffsetChange = _f === void 0 ? noop : _f, _g = callbacks.onScrollOffsetChange, onScrollOffsetChange = _g === void 0 ? noop : _g, _h = callbacks.onInitialScrollOffsetChange, onInitialScrollOffsetChange = _h === void 0 ? noop : _h;
  var drag = action.payload;
  var element = drag.element;
  var hint = drag.hint;
  var autoScrollDirection = state.autoScrollDirection;
  var overrideScrollableParent = state.scrollableParent;
  var event = normalizeEvent(action.event, state);
  switch (event.type) {
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN && (!event.originalEvent.isPrimary || event.originalEvent.button !== 0)) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN && (event.originalEvent.which && event.originalEvent.which > 1) || state.ignoreMouse) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.START: {
      var scrollableParent_1 = overrideScrollableParent || getScrollableParent(action.payload.element);
      onInitialScrollOffsetChange(scrollableParent_1 instanceof Window ? { x: scrollableParent_1.scrollX, y: scrollableParent_1.scrollY } : { x: scrollableParent_1.scrollLeft, y: scrollableParent_1.scrollTop });
      onClientOffsetChange({
        x: event.clientX,
        y: event.clientY
      });
      onPageOffsetChange({
        x: event.pageX,
        y: event.pageY
      });
      onOffsetChange({
        x: event.offsetX,
        y: event.offsetY
      });
      onIsPressedChange(true);
      if (drag.onPress) {
        drag.onPress(event);
      }
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.SCROLL:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.SCROLL && !state.pressed) {
        break;
      }
      var scrollableParent = overrideScrollableParent || getScrollableParent(element);
      var scrollOffset = scrollableParent instanceof Window ? { x: scrollableParent.scrollX, y: scrollableParent.scrollY } : { x: scrollableParent.scrollLeft, y: scrollableParent.scrollTop };
      event.scrollX = scrollOffset.x - state.initialScrollOffset.x;
      event.scrollY = scrollOffset.y - state.initialScrollOffset.y;
      onScrollOffsetChange({
        x: event.scrollX,
        y: event.scrollY
      });
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE && !event.originalEvent.isPrimary) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_MOVE:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOVE: {
      if (state.pressed) {
        if (state.autoScroll && event.originalEvent.type !== "scroll") {
          if (element) {
            var document_1 = getDocument(element);
            var scrollableParent_2 = overrideScrollableParent || getScrollableParent(document_1.elementFromPoint(event.clientX, event.clientY));
            var newVelocity = autoScrollVelocity(event.clientX, event.clientY, scrollableViewPort(scrollableParent_2, getWindow(element)));
            onVelocityChange({
              x: autoScrollDirection && autoScrollDirection.horizontal === false ? 0 : newVelocity.x,
              y: autoScrollDirection && autoScrollDirection.vertical === false ? 0 : newVelocity.y
            });
            onIsScrollingChange(newVelocity.y !== 0 || newVelocity.x !== 0);
          }
        }
        if (!state.drag && drag.onDragStart) {
          drag.onDragStart(event);
        }
        if (drag.onDrag) {
          drag.onDrag(event);
        }
        var dropElement_1 = intersect(hint || element, state.drops.map(function(drop2) {
          return drop2 && drop2.element;
        }).filter(function(d) {
          return d !== (hint || element);
        }));
        var drop = state.drops.find(function(drop2) {
          return drop2.element === dropElement_1;
        });
        if (drop && dropElement_1 && isPointerInsideContainer(event.clientX, event.clientY, overrideScrollableParent || getScrollableParent(dropElement_1)) && dropElement_1 !== element) {
          if ((state.drop && state.drop.element) !== dropElement_1) {
            if (state.drop && state.drop.onDragLeave) {
              state.drop.onDragLeave(event);
            }
            if (drop.onDragEnter) {
              drop.onDragEnter(event);
            }
          } else {
            if (drop.onDragOver) {
              drop.onDragOver(event);
            }
          }
        } else if (state.drop && state.drop.onDragLeave) {
          state.drop.onDragLeave(event);
        }
      }
      onClientOffsetChange({
        x: event.clientX,
        y: event.clientY
      });
      onPageOffsetChange({
        x: event.pageX,
        y: event.pageY
      });
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP && !event.originalEvent.isPrimary) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_UP:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.END: {
      onIsPressedChange(false);
      onIsScrollingChange(false);
      onScrollOffsetChange({ x: 0, y: 0 });
      if (drag.onRelease) {
        drag.onRelease(event);
      }
      if (state.drop && state.drop.onDrop) {
        state.drop.onDrop(event);
      }
      if (state.drag && drag.onDragEnd) {
        drag.onDragEnd(event);
      }
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_CANCEL:
    case DRAG_AND_DROP_DISPATCH_ACTION.CONTEXT_MENU:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_CANCEL:
    case DRAG_AND_DROP_DISPATCH_ACTION.CANCEL: {
      onIsPressedChange(false);
      onIsScrollingChange(false);
      onScrollOffsetChange({ x: 0, y: 0 });
      if (drag.onDragEnd) {
        drag.onDragEnd(event);
      }
      if (state.drop && state.drop.onDragLeave) {
        state.drop.onDragLeave(event);
      }
      break;
    }
    default:
      break;
  }
};

// node_modules/@progress/kendo-draggable-common/dist/es/auto-scroll.js
var autoScroll = function(scrollableParent, vel) {
  if (!scrollableParent) {
    return;
  }
  var yIsScrollable;
  var xIsScrollable;
  var isRootNode = scrollableParent === scrollableRoot(scrollableParent);
  if (isRootNode) {
    yIsScrollable = document.body.scrollHeight > window.innerHeight;
    xIsScrollable = document.body.scrollWidth > window.innerWidth;
  } else {
    yIsScrollable = scrollableParent.offsetHeight <= scrollableParent.scrollHeight;
    xIsScrollable = scrollableParent.offsetWidth <= scrollableParent.scrollWidth;
  }
  var yDelta = scrollableParent.scrollTop + vel.y;
  var yInBounds = yIsScrollable && yDelta > 0 && yDelta < scrollableParent.scrollHeight;
  var xDelta = scrollableParent.scrollLeft + vel.x;
  var xInBounds = xIsScrollable && xDelta > 0 && xDelta < scrollableParent.scrollWidth;
  if (yInBounds) {
    scrollableParent.scrollTop += vel.y;
  } else if (yIsScrollable && yDelta < 0) {
    scrollableParent.scrollTop = 0;
  }
  if (xInBounds) {
    scrollableParent.scrollLeft += vel.x;
  } else if (xIsScrollable && xDelta < 0) {
    scrollableParent.scrollLeft = 0;
  }
};

// node_modules/@progress/kendo-angular-utils/fesm2020/progress-kendo-angular-utils.mjs
function HintComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  data: a2
});
var packageMetadata = {
  name: "@progress/kendo-angular-utils",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1706873907,
  version: "15.0.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DragHandleDirective = class {
  constructor(element) {
    this.element = element;
    this.cursorStyle = "move";
  }
};
DragHandleDirective.ɵfac = function DragHandleDirective_Factory(t) {
  return new (t || DragHandleDirective)(ɵɵdirectiveInject(ElementRef));
};
DragHandleDirective.ɵdir = ɵɵdefineDirective({
  type: DragHandleDirective,
  selectors: [["", "kendoDragHandle", ""]],
  hostVars: 2,
  hostBindings: function DragHandleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("cursor", ctx.cursorStyle);
    }
  },
  exportAs: ["kendoDragHandle"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDragHandle]",
      exportAs: "kendoDragHandle"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    cursorStyle: [{
      type: HostBinding,
      args: ["style.cursor"]
    }]
  });
})();
var DragStateService = class {
  constructor() {
    this.dragTarget = null;
    this.dropTarget = null;
    this.dragTargets = [];
    this.dropTargets = [];
    this.pressed = false;
    this.ignoreMouse = false;
    this.autoScroll = true;
    this.isScrolling = false;
    this.scrollableParent = null;
    this.autoScrollDirection = {
      horizontal: true,
      vertical: true
    };
    this.initialClientOffset = {
      x: 0,
      y: 0
    };
    this.clientOffset = {
      x: 0,
      y: 0
    };
    this.initialScrollOffset = {
      x: 0,
      y: 0
    };
    this.scrollOffset = {
      x: 0,
      y: 0
    };
    this.offset = {
      x: 0,
      y: 0
    };
    this.pageOffset = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.dragIndex = null;
    this.dropIndex = null;
    this.callbacks = {};
    this.scrollInterval = null;
    this.setCallbacks();
  }
  handleDragAndDrop(action) {
    this.updateState();
    dispatchDragAndDrop(this.state, action, this.callbacks);
  }
  setPressed(pressed) {
    this.pressed = pressed;
  }
  setScrolling(isScrolling) {
    this.isScrolling = isScrolling;
    if (isScrolling) {
      const scrollableParent = getScrollableParent(document.elementFromPoint(this.clientOffset.x, this.clientOffset.y));
      window.clearInterval(this.scrollInterval);
      this.scrollInterval = window.setInterval(() => {
        autoScroll(scrollableParent, {
          x: this.velocity.x,
          y: this.velocity.y
        });
      }, 50);
    } else {
      if (this.scrollInterval) {
        window.clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    }
  }
  setVelocity(velocity) {
    this.velocity = velocity;
  }
  setOffset(offset) {
    this.offset = offset;
  }
  setClientOffset(clientOffset) {
    this.clientOffset = clientOffset;
  }
  setPageOffset(pageOffset) {
    this.pageOffset = pageOffset;
  }
  setInitialClientOffset(initialClientOffset) {
    this.initialClientOffset = initialClientOffset;
  }
  setScrollOffset(scrollOffset) {
    this.scrollOffset = scrollOffset;
  }
  setInitialScrollOffset(initialScrollOffset) {
    this.initialScrollOffset = initialScrollOffset;
  }
  updateState() {
    this.state = {
      drag: this.dragTarget,
      drop: this.dropTarget,
      drags: this.dragTargets,
      drops: this.dropTargets,
      pressed: this.pressed,
      ignoreMouse: this.ignoreMouse,
      autoScroll: this.autoScroll,
      isScrolling: this.isScrolling,
      scrollableParent: this.scrollableParent,
      autoScrollDirection: this.autoScrollDirection,
      initialClientOffset: this.initialClientOffset,
      clientOffset: this.clientOffset,
      initialScrollOffset: this.initialScrollOffset,
      scrollOffset: this.scrollOffset,
      offset: this.offset,
      pageOffset: this.pageOffset,
      velocity: this.velocity
    };
  }
  setCallbacks() {
    this.callbacks = {
      onVelocityChange: this.setVelocity.bind(this),
      onOffsetChange: this.setOffset.bind(this),
      onClientOffsetChange: this.setClientOffset.bind(this),
      onPageOffsetChange: this.setPageOffset.bind(this),
      onInitialClientOffsetChange: this.setInitialClientOffset.bind(this),
      onScrollOffsetChange: this.setScrollOffset.bind(this),
      onInitialScrollOffsetChange: this.setInitialScrollOffset.bind(this),
      onIsPressedChange: this.setPressed.bind(this),
      onIsScrollingChange: this.setScrolling.bind(this)
    };
  }
  ngOnDestroy() {
    if (this.scrollInterval) {
      window.clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }
};
DragStateService.ɵfac = function DragStateService_Factory(t) {
  return new (t || DragStateService)();
};
DragStateService.ɵprov = ɵɵdefineInjectable({
  token: DragStateService,
  factory: DragStateService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
function isDocumentNode(container) {
  return container.nodeType === 9;
}
var getAction = (event, draggable) => {
  return {
    event,
    payload: draggable
  };
};
var dragTargetTransition = "transform .3s ease-in-out";
var isPresent = (value) => value !== null && value !== void 0;
function closestBySelector(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
var intersect2 = (element, candidates) => {
  let max = 0;
  let result = null;
  candidates.forEach((candidate) => {
    if (candidate && element) {
      const ration = getRatio2(element, candidate);
      if (ration > max) {
        max = ration;
        result = candidate;
      }
    }
  });
  return result;
};
var getRatio2 = (element, target) => {
  const elementRect = element.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const top = Math.max(targetRect.top, elementRect.top);
  const left = Math.max(targetRect.left, elementRect.left);
  const right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
  const bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = targetRect.width * targetRect.height;
    const entryArea = elementRect.width * elementRect.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
};
var setElementStyles = (renderer, elem, styles) => {
  const props = Object.keys(styles);
  props.forEach((p) => {
    renderer.setStyle(elem, p, styles[p]);
  });
};
var allPointerDownEvents = ["pointerdown", "mousedown", "touchstart"];
var allPointerMoveEvents = ["pointermove", "mousemove", "touchmove"];
var allPointerUpEvents = ["pointerup", "pointercancel", "mouseup", "contextmenu", "touchend", "touchcancel"];
var HintComponent = class {
  constructor(element) {
    this.element = element;
    this.pointerEvents = "none";
  }
};
HintComponent.ɵfac = function HintComponent_Factory(t) {
  return new (t || HintComponent)(ɵɵdirectiveInject(ElementRef));
};
HintComponent.ɵcmp = ɵɵdefineComponent({
  type: HintComponent,
  selectors: [["kendo-draghint"]],
  hostVars: 2,
  hostBindings: function HintComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("pointer-events", ctx.pointerEvents);
    }
  },
  inputs: {
    template: "template",
    directive: "directive",
    targetIndex: "targetIndex",
    contextData: "contextData"
  },
  decls: 1,
  vars: 6,
  consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function HintComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, HintComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c0, ctx.directive, ctx.targetIndex, ctx.contextData));
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HintComponent, [{
    type: Component,
    args: [{
      selector: "kendo-draghint",
      template: `
        <ng-container *ngTemplateOutlet="template; context: { $implicit: directive, index: targetIndex, data: contextData }">
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    template: [{
      type: Input
    }],
    directive: [{
      type: Input
    }],
    targetIndex: [{
      type: Input
    }],
    contextData: [{
      type: Input
    }],
    pointerEvents: [{
      type: HostBinding,
      args: ["style.pointer-events"]
    }]
  });
})();
var DragTargetPressEvent = class {
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
};
var DragTargetDragReadyEvent = class {
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var DragTargetDragStartEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
};
var DragTargetDragEndEvent = class {
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
};
var DragTargetDragEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
};
var DragTargetReleaseEvent = class {
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
};
var isDragStartPrevented$1 = false;
var isDragPrevented$1 = false;
var DragTargetDirective = class {
  constructor(element, renderer, ngZone, service, viewContainer) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.service = service;
    this.viewContainer = viewContainer;
    this.hint = false;
    this.threshold = 0;
    this.autoScroll = true;
    this.dragDelay = 0;
    this.mode = "auto";
    this.onPress = new EventEmitter();
    this.onDragStart = new EventEmitter();
    this.onDrag = new EventEmitter();
    this.onDragReady = new EventEmitter();
    this.onRelease = new EventEmitter();
    this.onDragEnd = new EventEmitter();
    this.dragTarget = null;
    this.domSubscriptions = [];
    this.hintComponent = null;
    this.dragStarted = false;
    this.pressed = false;
    this.dragTimeout = null;
    this.initialPosition = {
      x: 0,
      y: 0
    };
    this.position = {
      x: 0,
      y: 0
    };
    this.scrollableParent = null;
    this.defaultHint = null;
    this._dragData = () => null;
    validatePackage(packageMetadata);
  }
  /**
   * Defines a callback function used for attaching custom data to the dragTarget.
   * The data will be available in the events of the respective [`DropTarget`]({% slug api_utils_droptargetdirective %}) or [`DropTargetContainer`]({% slug api_utils_droptargetcontainerdirective %}) directives.
   * The current DragTarget HTML element and its `dragTargetId` will be available as arguments.
   */
  set dragData(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`dragData must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._dragData = fn;
  }
  get dragData() {
    return this._dragData;
  }
  get hintTemplate() {
    return isPresent(this.hint) && typeof this.hint === "object" ? this.hint.hintTemplate : null;
  }
  get nativeElement() {
    return this.element.nativeElement;
  }
  get hintElem() {
    return this.hintTemplate && isPresent(this.hintComponent) ? this.hintComponent.instance.element.nativeElement : this.defaultHint;
  }
  onPointerDown(event) {
    if (this.dragHandles.length && !this.isDragHandle(event.target)) {
      return;
    }
    event.preventDefault();
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
    this.service.autoScroll = typeof this.autoScroll === "object" ? this.autoScroll.enabled !== false : this.autoScroll;
    this.service.scrollableParent = this.getAutoScrollContainer();
    this.service.autoScrollDirection = typeof this.autoScroll === "object" ? this.autoScroll.direction : {
      horizontal: true,
      vertical: true
    };
    this.attachDomHandlers();
  }
  onPointerMove(event) {
    event.preventDefault();
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
  }
  onPointerUp(event) {
    event.preventDefault();
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
    this.attachDomHandlers();
  }
  ngOnInit() {
    this.initializeDragTarget();
  }
  ngAfterContentInit() {
    if (isPresent(this.element) || isPresent(this.dragTarget)) {
      this.attachDomHandlers();
      if (!this.dragHandles.length) {
        this.renderer.setStyle(this.nativeElement, "cursor", "move");
      }
    }
    this.service.dragTargets.push(this.dragTarget);
  }
  ngOnDestroy() {
    this.domSubscriptions.forEach((subscription) => subscription());
  }
  handlePress(event) {
    if (this.dragDelay > 0) {
      this.dragTimeout = window.setTimeout(() => {
        this.pressed = true;
        this.emitZoneAwareEvent("onDragReady", event);
      }, this.dragDelay);
    } else {
      this.pressed = true;
    }
    this.scrollableParent = this.dragTarget.element ? getScrollableParent(this.dragTarget.element) : null;
    this.emitZoneAwareEvent("onPress", event);
  }
  handleDragStart(event) {
    if (!this.pressed) {
      if (this.dragTimeout) {
        window.clearTimeout(this.dragTimeout);
        this.dragTimeout = null;
      }
      return;
    }
    isDragStartPrevented$1 = this.emitZoneAwareEvent("onDragStart", event).isDefaultPrevented();
    if (isDragStartPrevented$1) {
      return;
    }
    if (this.hint) {
      this.createHint();
      if (this.mode === "auto") {
        this.renderer.setStyle(this.nativeElement, "opacity", "0.7");
      }
      this.initialPosition = {
        x: event.offsetX,
        y: event.offsetY
      };
    } else {
      this.initialPosition = {
        x: event.clientX - this.position.x,
        y: event.clientY - this.position.y
      };
    }
    this.dragStarted = this.threshold === 0;
    this.service.dragTarget = this.dragTarget;
    this.service.dragTargetDirective = this;
    this.service.dragData = this.dragData({
      dragTarget: this.dragTarget.element,
      dragTargetId: this.dragTargetIdResult,
      dragTargetIndex: null
    });
  }
  handleDrag(event) {
    if (!this.pressed || isDragStartPrevented$1) {
      return;
    }
    const elem = this.hint ? this.hintElem : this.nativeElement;
    this.position = this.calculatePosition(elem, event);
    const thresholdNotReached = Math.abs(this.position.x) < this.threshold && Math.abs(this.position.y) < this.threshold;
    if (!this.dragStarted && thresholdNotReached) {
      return;
    }
    if (!this.dragStarted && this.threshold > 0) {
      this.dragStarted = true;
    }
    isDragPrevented$1 = this.emitZoneAwareEvent("onDrag", event).isDefaultPrevented();
    if (isDragPrevented$1) {
      return;
    }
    if (this.mode === "auto") {
      this.performDrag();
    } else {
      this.dragStarted = true;
    }
  }
  handleRelease(event) {
    if (this.dragTimeout) {
      clearTimeout(this.dragTimeout);
      this.dragTimeout = null;
      this.pressed = false;
    }
    this.emitZoneAwareEvent("onRelease", event);
  }
  handleDragEnd(event) {
    if (this.mode === "auto") {
      const isDroppedOverParentTarget = isPresent(this.service.dropTarget) && !contains(this.service.dropTarget?.element, this.service.dragTarget?.element, true);
      const elem = this.hint ? this.hintElem : this.nativeElement;
      if (isDroppedOverParentTarget || this.service.dropTargets.length > 0 && isPresent(elem)) {
        this.renderer.removeStyle(elem, "transform");
        setElementStyles(this.renderer, elem, {
          transition: dragTargetTransition
        });
        this.position = {
          x: 0,
          y: 0
        };
      }
    }
    if (this.hint && isPresent(this.hintElem)) {
      this.destroyHint();
      if (this.mode === "auto") {
        this.renderer.removeStyle(this.nativeElement, "opacity");
      }
    }
    this.service.dragTarget = null;
    this.service.dragTargetDirective = null;
    if (!this.dragStarted || isDragStartPrevented$1 || isDragPrevented$1) {
      return;
    }
    this.emitZoneAwareEvent("onDragEnd", event);
    this.dragStarted = false;
  }
  initializeDragTarget() {
    this.dragTarget = {
      element: this.nativeElement,
      hint: null,
      onPress: this.handlePress.bind(this),
      onRelease: this.handleRelease.bind(this),
      onDragStart: this.handleDragStart.bind(this),
      onDrag: this.handleDrag.bind(this),
      onDragEnd: this.handleDragEnd.bind(this)
    };
  }
  attachDomHandlers() {
    this.ngZone.runOutsideAngular(() => {
      if (this.domSubscriptions.length > 0) {
        this.domSubscriptions.forEach((subscription) => subscription());
      }
      if (!(isDocumentAvailable() && isPresent(this.element))) {
        return;
      }
      if (this.service.pressed) {
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
        this.domSubscriptions = [this.renderer.listen(document, "pointermove", this.onPointerMove), this.renderer.listen(document, "mousemove", this.onPointerMove), this.renderer.listen(document, "touchmove", this.onPointerMove), this.renderer.listen(document, "pointerup", this.onPointerUp), this.renderer.listen(document, "pointercancel", this.onPointerUp), this.renderer.listen(document, "mouseup", this.onPointerUp), this.renderer.listen(document, "contextmenu", this.onPointerUp), this.renderer.listen(document, "touchend", this.onPointerUp), this.renderer.listen(document, "touchcancel", this.onPointerUp)];
        if (isPresent(this.scrollableParent)) {
          if (this.scrollableParent === document.getElementsByTagName("html")[0]) {
            this.scrollableParent = window;
          }
          this.domSubscriptions.push(this.renderer.listen(this.scrollableParent, "scroll", this.onPointerMove));
        }
      } else {
        this.onPointerDown = this.onPointerDown.bind(this);
        const element = this.nativeElement;
        this.domSubscriptions = [this.renderer.listen(element, "pointerdown", this.onPointerDown), this.renderer.listen(element, "mousedown", this.onPointerDown), this.renderer.listen(element, "touchstart", this.onPointerDown)];
      }
    });
  }
  isDragHandle(el) {
    return this.dragHandles.toArray().some((dh) => contains(dh.element.nativeElement, el, true));
  }
  getAutoScrollContainer() {
    return typeof this.autoScroll === "object" && this.autoScroll.boundaryElementRef && this.autoScroll.boundaryElementRef.nativeElement ? this.autoScroll.boundaryElementRef.nativeElement : null;
  }
  createHint() {
    if (!(isDocumentAvailable() && isPresent(this.element))) {
      return;
    }
    if (isPresent(this.hint) && typeof this.hint === "object") {
      if (isPresent(this.hint.hintTemplate)) {
        this.createCustomHint();
      } else {
        this.createDefaultHint();
      }
    } else {
      this.createDefaultHint();
    }
    this.dragTarget.hint = this.hintElem;
    if (typeof this.hint === "object" && isPresent(this.hint.appendTo)) {
      this.hint.appendTo.element.nativeElement.appendChild(this.hintElem);
    } else {
      document.body.appendChild(this.hintElem);
    }
  }
  createDefaultHint() {
    this.defaultHint = this.nativeElement.cloneNode(true);
    if (typeof this.hint === "object") {
      if (isPresent(this.hint.hintClass)) {
        const hintClasses = parseCSSClassNames(this.hint.hintClass);
        hintClasses.forEach((className) => this.renderer.addClass(this.defaultHint, className));
      }
    }
  }
  createCustomHint() {
    if (isPresent(this.hint.appendTo)) {
      this.hintComponent = this.hint.appendTo.createComponent(HintComponent);
    } else {
      this.hintComponent = this.viewContainer.createComponent(HintComponent);
    }
    this.hintComponent.instance.template = this.hintTemplate;
    this.hintComponent.instance.directive = this;
    this.hintComponent.changeDetectorRef.detectChanges();
  }
  destroyHint() {
    if (isPresent(this.hintTemplate)) {
      this.hintComponent.destroy();
      this.hintComponent.changeDetectorRef.detectChanges();
      this.hintComponent = null;
    } else {
      if (typeof this.hint === "object" && isPresent(this.hint.appendTo)) {
        this.hint.appendTo.element.nativeElement.removeChild(this.defaultHint);
      } else {
        document.body.removeChild(this.defaultHint);
      }
      this.defaultHint = null;
    }
    this.dragTarget.hint = null;
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const eventProps = {
      dragTarget: this.nativeElement,
      dragEvent: normalizedEvent
    };
    if (this.hint && isPresent(this.hintElem)) {
      eventProps.hintElement = this.hintElem;
    }
    if (this.dragTargetId && this.dragTargetId !== "") {
      eventProps.dragTargetId = this.dragTargetIdResult;
    }
    let eventArgs;
    switch (event) {
      case "onDragReady":
        eventArgs = new DragTargetDragReadyEvent(eventProps);
        break;
      case "onPress":
        eventArgs = new DragTargetPressEvent(eventProps);
        break;
      case "onDragStart":
        eventArgs = new DragTargetDragStartEvent(eventProps);
        break;
      case "onDrag":
        eventArgs = new DragTargetDragEvent(eventProps);
        break;
      case "onRelease":
        eventArgs = new DragTargetReleaseEvent(eventProps);
        break;
      case "onDragEnd":
        eventArgs = new DragTargetDragEndEvent(eventProps);
        break;
      default:
        break;
    }
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
    return eventArgs;
  }
  get dragTargetIdResult() {
    if (this.dragTargetId && this.dragTargetId !== "") {
      return typeof this.dragTargetId === "string" ? this.dragTargetId : this.dragTargetId({
        dragTarget: this.dragTarget.element,
        dragTargetIndex: null
      });
    }
  }
  performDrag() {
    const elem = this.hint ? this.hintElem : this.nativeElement;
    if (elem) {
      const styles = this.getStylesPerElement(elem);
      setElementStyles(this.renderer, elem, styles);
    }
  }
  calculatePosition(element, event) {
    let position = null;
    if (element === this.hintElem) {
      position = {
        x: event.clientX,
        y: event.clientY
      };
    } else {
      position = {
        x: event.clientX - this.initialPosition.x + event.scrollX,
        y: event.clientY - this.initialPosition.y + event.scrollY
      };
    }
    if (this.restrictByAxis === "horizontal") {
      position.y = 0;
    } else if (this.restrictByAxis === "vertical") {
      position.x = 0;
    }
    return position;
  }
  getStylesPerElement(element) {
    if (element === this.hintElem) {
      const hintCoordinates = {
        x: this.position.x - this.initialPosition.x,
        y: this.position.y - this.initialPosition.y
      };
      return {
        top: `${hintCoordinates.y}px`,
        left: `${hintCoordinates.x}px`,
        transition: "none",
        position: "absolute",
        zIndex: 1999
      };
    } else {
      const transform = `translate(${this.position.x}px, ${this.position.y}px)`;
      return {
        transform,
        transition: "none"
      };
    }
  }
};
DragTargetDirective.ɵfac = function DragTargetDirective_Factory(t) {
  return new (t || DragTargetDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ViewContainerRef));
};
DragTargetDirective.ɵdir = ɵɵdefineDirective({
  type: DragTargetDirective,
  selectors: [["", "kendoDragTarget", ""]],
  contentQueries: function DragTargetDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DragHandleDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dragHandles = _t);
    }
  },
  inputs: {
    hint: "hint",
    threshold: "threshold",
    autoScroll: "autoScroll",
    dragTargetId: "dragTargetId",
    dragDelay: "dragDelay",
    restrictByAxis: "restrictByAxis",
    mode: "mode",
    dragData: "dragData"
  },
  outputs: {
    onPress: "onPress",
    onDragStart: "onDragStart",
    onDrag: "onDrag",
    onDragReady: "onDragReady",
    onRelease: "onRelease",
    onDragEnd: "onDragEnd"
  },
  exportAs: ["kendoDragTarget"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragTargetDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDragTarget]",
      exportAs: "kendoDragTarget"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: DragStateService
    }, {
      type: ViewContainerRef
    }];
  }, {
    hint: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    autoScroll: [{
      type: Input
    }],
    dragTargetId: [{
      type: Input
    }],
    dragDelay: [{
      type: Input
    }],
    restrictByAxis: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    dragData: [{
      type: Input
    }],
    onPress: [{
      type: Output
    }],
    onDragStart: [{
      type: Output
    }],
    onDrag: [{
      type: Output
    }],
    onDragReady: [{
      type: Output
    }],
    onRelease: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    dragHandles: [{
      type: ContentChildren,
      args: [DragHandleDirective]
    }]
  });
})();
var DropTargetEvent = class {
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
  /**
   * Left for backward compatibility for the DropTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DropTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dropTarget;
  }
};
var DropTargetDirective = class {
  constructor(service, element, ngZone) {
    this.service = service;
    this.element = element;
    this.ngZone = ngZone;
    this.onDragEnter = new EventEmitter();
    this.onDragOver = new EventEmitter();
    this.onDragLeave = new EventEmitter();
    this.onDrop = new EventEmitter();
    validatePackage(packageMetadata);
  }
  ngOnInit() {
    this.initializeDropTarget();
    this.service.dropTargets.push(this.dropTarget);
  }
  /**
   * @hidden
   */
  handleDragEnter(event) {
    if (!this.service.dragTarget) {
      return;
    }
    this.service.dropTarget = this.dropTarget;
    this.emitZoneAwareEvent("onDragEnter", event);
  }
  /**
   * @hidden
   */
  handleDragLeave(event) {
    this.service.dropTarget = null;
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDragLeave", event);
  }
  /**
   * @hidden
   */
  handleDragOver(event) {
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDragOver", event);
  }
  /**
   * @hidden
   */
  handleDrop(event) {
    this.emitZoneAwareEvent("onDrop", event);
    this.service.dropTarget = null;
  }
  initializeDropTarget() {
    this.dropTarget = {
      element: this.element.nativeElement,
      onDragEnter: this.handleDragEnter.bind(this),
      onDragLeave: this.handleDragLeave.bind(this),
      onDragOver: this.handleDragOver.bind(this),
      onDrop: this.handleDrop.bind(this)
    };
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const eventProps = {
      dropTarget: this.element.nativeElement,
      dragTarget: this.service.dragTarget?.element,
      dragEvent: normalizedEvent,
      dragData: this.service.dragData
    };
    if (isPresent(this.service.dragTarget?.hint)) {
      eventProps.hintElement = this.service.dragTarget.element;
    }
    const eventArgs = new DropTargetEvent(eventProps);
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
  }
};
DropTargetDirective.ɵfac = function DropTargetDirective_Factory(t) {
  return new (t || DropTargetDirective)(ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
DropTargetDirective.ɵdir = ɵɵdefineDirective({
  type: DropTargetDirective,
  selectors: [["", "kendoDropTarget", ""]],
  outputs: {
    onDragEnter: "onDragEnter",
    onDragOver: "onDragOver",
    onDragLeave: "onDragLeave",
    onDrop: "onDrop"
  },
  exportAs: ["kendoDropTarget"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropTargetDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropTarget]",
      exportAs: "kendoDropTarget"
    }]
  }], function() {
    return [{
      type: DragStateService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    onDragEnter: [{
      type: Output
    }],
    onDragOver: [{
      type: Output
    }],
    onDragLeave: [{
      type: Output
    }],
    onDrop: [{
      type: Output
    }]
  });
})();
var isDragStartPrevented = false;
var isDragPrevented = false;
var DragTargetContainerDirective = class {
  constructor(wrapper, ngZone, renderer, service, viewContainer, cdr) {
    this.wrapper = wrapper;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.service = service;
    this.viewContainer = viewContainer;
    this.cdr = cdr;
    this.hint = false;
    this.dragDelay = 0;
    this.threshold = 0;
    this.mode = "auto";
    this.onDragReady = new EventEmitter();
    this.onPress = new EventEmitter();
    this.onDragStart = new EventEmitter();
    this.onDrag = new EventEmitter();
    this.onRelease = new EventEmitter();
    this.onDragEnd = new EventEmitter();
    this.currentDragTarget = null;
    this.dragTimeout = null;
    this.pressed = false;
    this.dragStarted = false;
    this.hintComponent = null;
    this.defaultHint = null;
    this.currentDragTargetElement = null;
    this.scrollableParent = null;
    this.previousDragTargets = [];
    this.initialPosition = {
      x: 0,
      y: 0
    };
    this.position = {
      x: 0,
      y: 0
    };
    this.positionsMap = /* @__PURE__ */ new Map();
    this._dragTargetFilter = null;
    this._dragDisabled = false;
    this._dragData = () => null;
    this._dragTargetId = () => null;
    validatePackage(packageMetadata);
  }
  /**
   * Specifies a selector for elements within a container which will be configured as draggable
   * ([see example]({% slug drag_target_container %})). The possible values include any
   * DOM `selector`.
   */
  set dragTargetFilter(value) {
    this._dragTargetFilter = value;
    if (!this.dragDisabled) {
      this.initializeDragTargets();
    }
  }
  get dragTargetFilter() {
    return this._dragTargetFilter;
  }
  /**
   * Defines a unique identifier for each drag target.
   * It exposes the current DragTarget HTML element and its index in the collection of drag targets as arguments.
   */
  set dragTargetId(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`dragTargetId must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._dragTargetId = fn;
  }
  get dragTargetId() {
    return this._dragTargetId;
  }
  /**
   * Defines a callback function which returns custom data passed to the DropTarget events.
   * It exposes the current DragTarget HTML element, its `dragTargetId` and its index in the collection of drag targets as arguments.
   */
  set dragData(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`dragData must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._dragData = fn;
  }
  get dragData() {
    return this._dragData;
  }
  /**
   * If set to true, the dragging of DragTargets within the container will be disabled.
   *
   * @default false
   */
  set dragDisabled(value) {
    this._dragDisabled = value;
    if (value) {
      this.clearPreviousTargets();
      this.unsubscribe();
      if (isPresent(this.hintElem)) {
        this.destroyHint();
      }
    } else {
      if (isPresent(this.wrapper) || isPresent(this.currentDragTarget)) {
        this.subscribe();
      }
      this.initializeDragTargets();
    }
  }
  get dragDisabled() {
    return this._dragDisabled;
  }
  /**
   * Used for notifying the DragTargetContainer that its content has changed.
   */
  notify() {
    this.cdr.detectChanges();
    this.initializeDragTargets();
  }
  get allDragTargets() {
    return this.queryHost(this.dragTargetFilter);
  }
  get dragHandles() {
    return this.isHandleSelectorValid ? this.queryHost(this.dragHandle) : null;
  }
  get hintTemplate() {
    return isPresent(this.hint) && typeof this.hint === "object" ? this.hint.hintTemplate : null;
  }
  ngAfterViewInit() {
    const isTargetPresent = isPresent(this.wrapper) || isPresent(this.currentDragTarget);
    if (!this.dragDisabled && isTargetPresent) {
      this.subscribe();
    }
    !this.dragDisabled && this.initializeDragTargets();
  }
  onPointerDown(event) {
    if (isPresent(this.dragHandles) && !this.isDragHandle(event.target)) {
      return;
    }
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
    this.subscribe();
  }
  onPointerMove(event) {
    event.preventDefault();
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
  }
  onPointerUp(event) {
    event.preventDefault();
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
    this.ngZone.runOutsideAngular(() => {
      this.subscribe();
    });
  }
  handlePress(event) {
    if (this.dragDelay > 0) {
      this.dragTimeout = window.setTimeout(() => {
        this.pressed = true;
        this.emitZoneAwareEvent("onDragReady", event);
      }, this.dragDelay);
    } else {
      this.pressed = true;
    }
    const eventTarget = event.originalEvent.target;
    this.currentDragTargetElement = closestBySelector(eventTarget, this.dragTargetFilter);
    this.currentDragTarget.element = this.currentDragTargetElement;
    this.service.dragIndex = this.getDragIndex();
    this.scrollableParent = this.hintTemplate ? document.body : this.currentDragTargetElement ? getScrollableParent(this.currentDragTargetElement) : null;
    this.emitZoneAwareEvent("onPress", event);
  }
  handleDragStart(event) {
    if (!this.pressed) {
      if (this.dragTimeout) {
        window.clearTimeout(this.dragTimeout);
        this.dragTimeout = null;
      }
      return;
    }
    isDragStartPrevented = this.emitZoneAwareEvent("onDragStart", event).isDefaultPrevented();
    if (isDragStartPrevented) {
      return;
    }
    this.position = this.positionsMap.has(this.currentDragTargetElement) ? this.positionsMap.get(this.currentDragTargetElement) : {
      x: 0,
      y: 0
    };
    if (this.hint) {
      this.createHint();
      if (this.mode === "auto") {
        this.renderer.setStyle(this.currentDragTargetElement, "opacity", "0.7");
      }
    } else {
      this.initialPosition = {
        x: event.clientX - this.position.x,
        y: event.clientY - this.position.y
      };
    }
    this.dragStarted = this.threshold === 0;
    this.service.dragTarget = this.currentDragTarget;
    const targetIdArgs = {
      dragTarget: this.currentDragTargetElement,
      dragTargetIndex: this.service.dragIndex
    };
    this.service.dragTargetId = this.dragTargetId(targetIdArgs);
    const targetDataArgs = Object.assign({
      dragTargetId: this.service.dragTargetId
    }, targetIdArgs);
    this.service.dragData = this.dragData(targetDataArgs);
  }
  handleDrag(event) {
    if (!this.pressed || isDragStartPrevented) {
      return;
    }
    const elem = this.hint ? this.hintElem : this.currentDragTargetElement;
    this.position = this.calculatePosition(elem, event);
    const thresholdNotReached = Math.abs(this.position.x) < this.threshold && Math.abs(this.position.y) < this.threshold;
    if (!this.dragStarted && thresholdNotReached) {
      return;
    }
    if (!this.dragStarted && this.threshold > 0) {
      this.dragStarted = true;
    }
    isDragPrevented = this.emitZoneAwareEvent("onDrag", event).isDefaultPrevented();
    if (isDragPrevented) {
      return;
    }
    if (this.mode === "auto") {
      this.performDrag();
    } else {
      this.dragStarted = true;
    }
  }
  handleRelease(event) {
    if (this.dragStarted) {
      this.positionsMap.set(this.currentDragTargetElement, this.position);
    }
    if (this.dragTimeout) {
      clearTimeout(this.dragTimeout);
      this.dragTimeout = null;
      this.pressed = false;
    }
    this.emitZoneAwareEvent("onRelease", event);
  }
  handleDragEnd(event) {
    if (!this.dragStarted) {
      return;
    }
    if (this.mode === "auto") {
      const isDroppedOverParentTarget = isPresent(this.service.dropTarget) && !contains(this.service.dropTarget?.element, this.service.dragTarget?.element, true);
      const elem = this.hint ? this.hintElem : this.currentDragTargetElement;
      if (isDroppedOverParentTarget || this.service.dropTargets.length > 0 && isPresent(elem)) {
        this.renderer.removeStyle(elem, "transform");
        setElementStyles(this.renderer, elem, {
          transition: dragTargetTransition
        });
        this.positionsMap.delete(this.currentDragTargetElement);
      }
    }
    if (this.hint && isPresent(this.hintElem)) {
      this.destroyHint();
      if (this.mode === "auto") {
        this.renderer.removeStyle(this.currentDragTargetElement, "opacity");
      }
    }
    this.service.dragTarget = null;
    this.service.dragIndex = null;
    this.currentDragTarget.element = null;
    this.emitZoneAwareEvent("onDragEnd", event);
    if (isDragStartPrevented || isDragPrevented) {
      return;
    }
    this.dragStarted = false;
  }
  get nativeElement() {
    return this.wrapper.nativeElement;
  }
  get hintElem() {
    return this.hintTemplate && isPresent(this.hintComponent) ? this.hintComponent.instance.element.nativeElement : this.defaultHint;
  }
  unsubscribe() {
    if (this.pointerDownSubscription) {
      this.pointerDownSubscription.unsubscribe();
    }
    if (this.pointerMoveSubscription) {
      this.pointerMoveSubscription.unsubscribe();
    }
    if (this.pointerUpSubscription) {
      this.pointerUpSubscription.unsubscribe();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
  subscribe() {
    this.ngZone.runOutsideAngular(() => {
      this.unsubscribe();
      if (!(isDocumentAvailable() && isPresent(this.wrapper))) {
        return;
      }
      const element = this.nativeElement;
      if (this.service.pressed) {
        const pointerMoveStreams = allPointerMoveEvents.map((ev) => fromEvent(document, ev));
        const pointerUpStreams = allPointerUpEvents.map((ev) => fromEvent(document, ev));
        this.pointerMoveSubscription = merge(...pointerMoveStreams).pipe(filter(() => this.dragTargetFilter !== "")).subscribe((e) => this.onPointerMove(e));
        this.pointerUpSubscription = merge(...pointerUpStreams).subscribe((e) => this.onPointerUp(e));
        if (isPresent(this.scrollableParent)) {
          this.scrollSubscription = fromEvent(this.scrollableParent, "scroll").subscribe((e) => this.onPointerMove(e));
        }
      } else {
        const pointerDownStreams = allPointerDownEvents.map((ev) => fromEvent(element, ev));
        this.pointerDownSubscription = merge(...pointerDownStreams).pipe(filter(() => this.dragTargetFilter !== "")).subscribe((e) => {
          const filterElement = closestBySelector(e.target, this.isHandleSelectorValid ? this.dragHandle : this.dragTargetFilter);
          if (filterElement) {
            this.onPointerDown(e);
          }
        });
      }
    });
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const targetIdArgs = {
      dragTarget: this.currentDragTargetElement,
      dragTargetIndex: this.service.dragIndex
    };
    const eventProps = {
      dragTarget: this.currentDragTargetElement,
      dragEvent: normalizedEvent,
      dragTargetIndex: this.service.dragIndex,
      dragTargetId: this.dragTargetId(targetIdArgs)
    };
    if (this.hint && isPresent(this.hintElem)) {
      eventProps.hintElement = this.hintElem;
    }
    let eventArgs;
    switch (event) {
      case "onDragReady":
        eventArgs = new DragTargetDragReadyEvent(eventProps);
        break;
      case "onPress":
        eventArgs = new DragTargetPressEvent(eventProps);
        break;
      case "onDragStart":
        eventArgs = new DragTargetDragStartEvent(eventProps);
        break;
      case "onDrag":
        eventArgs = new DragTargetDragEvent(eventProps);
        break;
      case "onRelease":
        eventArgs = new DragTargetReleaseEvent(eventProps);
        break;
      case "onDragEnd":
        eventArgs = new DragTargetDragEndEvent(eventProps);
        break;
      default:
        break;
    }
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
    return eventArgs;
  }
  createHint() {
    if (!(isDocumentAvailable() && isPresent(this.wrapper))) {
      return;
    }
    if (isPresent(this.hint) && typeof this.hint === "object") {
      if (isPresent(this.hint.hintTemplate)) {
        this.createCustomHint();
      } else {
        this.createDefaultHint();
      }
    } else {
      this.createDefaultHint();
    }
    this.currentDragTarget.hint = this.hintElem;
    if (typeof this.hint === "object" && isPresent(this.hint.appendTo)) {
      this.hint.appendTo.element.nativeElement.appendChild(this.hintElem);
    } else {
      document.body.appendChild(this.hintElem);
    }
  }
  createDefaultHint() {
    this.defaultHint = this.currentDragTargetElement.cloneNode(true);
    if (typeof this.hint === "object") {
      if (isPresent(this.hint.hintClass)) {
        const hintClasses = parseCSSClassNames(this.hint.hintClass);
        hintClasses.forEach((className) => this.renderer.addClass(this.defaultHint, className));
      }
    }
  }
  createCustomHint() {
    if (isPresent(this.hint.appendTo)) {
      this.hintComponent = this.hint.appendTo.createComponent(HintComponent);
    } else {
      this.hintComponent = this.viewContainer.createComponent(HintComponent);
    }
    this.hintComponent.instance.template = this.hintTemplate;
    this.hintComponent.instance.directive = this;
    this.hintComponent.instance.targetIndex = this.service.dragIndex;
    const targetDataArgs = {
      dragTarget: this.currentDragTargetElement,
      dragTargetId: this.service.dragTargetId,
      dragTargetIndex: this.service.dragIndex
    };
    this.hintComponent.instance.contextData = this.dragData(targetDataArgs);
    this.hintComponent.changeDetectorRef.detectChanges();
  }
  destroyHint() {
    if (isPresent(this.hintTemplate)) {
      this.hintComponent.destroy();
      this.hintComponent.changeDetectorRef.detectChanges();
      this.hintComponent = null;
    } else {
      document.body.removeChild(this.defaultHint);
      this.defaultHint = null;
    }
    this.currentDragTarget.hint = null;
  }
  getDragIndex() {
    return this.allDragTargets.indexOf(this.currentDragTargetElement);
  }
  initializeDragTargets() {
    if (!isPresent(this.allDragTargets)) {
      if (this.previousDragTargets.length > 0) {
        this.clearPreviousTargets();
      }
      return;
    }
    this.allDragTargets.forEach((dragTargetEl) => {
      const isDragTargetInitialized = this.service.dragTargets.find((dt) => dt.element === dragTargetEl);
      if (!isDragTargetInitialized) {
        this.service.dragTargets.push({
          element: dragTargetEl,
          hint: null,
          onPress: this.handlePress.bind(this),
          onRelease: this.handleRelease.bind(this),
          onDragStart: this.handleDragStart.bind(this),
          onDrag: this.handleDrag.bind(this),
          onDragEnd: this.handleDragEnd.bind(this)
        });
      }
    });
    if (this.previousDragTargets.length > 0) {
      const dragTargetsToRemove = this.previousDragTargets.filter((dt) => !this.allDragTargets.includes(dt));
      dragTargetsToRemove.forEach((dragTarget) => {
        const idx = this.service.dragTargets.findIndex((serviceDragTarget) => serviceDragTarget.element === dragTarget);
        if (idx > -1) {
          this.service.dragTargets.splice(idx, 1);
        }
      });
    }
    this.previousDragTargets = this.allDragTargets;
    this.currentDragTarget = {
      element: null,
      hint: null,
      onPress: this.handlePress.bind(this),
      onRelease: this.handleRelease.bind(this),
      onDragStart: this.handleDragStart.bind(this),
      onDrag: this.handleDrag.bind(this),
      onDragEnd: this.handleDragEnd.bind(this)
    };
    this.setCursorStyle();
  }
  isDragHandle(el) {
    return this.dragHandles.some((dh) => contains(dh, el, true));
  }
  get isHandleSelectorValid() {
    return isPresent(this.dragHandle) && this.dragHandle !== "";
  }
  setCursorStyle() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (isPresent(this.dragHandle) && this.dragHandle !== "") {
      if (isPresent(this.dragHandles) && this.dragHandles.length > 0) {
        this.dragHandles.forEach((handle) => {
          this.renderer.setStyle(handle, "cursor", "move");
        });
      }
    } else {
      this.allDragTargets.forEach((target) => {
        this.renderer.setStyle(target, "cursor", "move");
      });
    }
  }
  queryHost(selector) {
    if (isPresent(selector) && selector !== "") {
      return Array.from(this.nativeElement.querySelectorAll(selector));
    }
  }
  clearPreviousTargets() {
    this.previousDragTargets.forEach((dragTarget) => {
      const idx = this.service.dragTargets.findIndex((serviceDragTarget) => serviceDragTarget.element === dragTarget);
      if (idx > -1) {
        this.service.dragTargets.splice(idx, 1);
      }
    });
    this.previousDragTargets = [];
  }
  performDrag() {
    const elem = this.hint ? this.hintElem : this.currentDragTargetElement;
    if (elem) {
      const styles = this.getStylesPerElement(elem);
      setElementStyles(this.renderer, elem, styles);
    }
  }
  calculatePosition(element, event) {
    let position = null;
    if (element === this.hintElem) {
      position = {
        x: event.clientX,
        y: event.clientY
      };
    } else {
      position = {
        x: event.clientX - this.initialPosition.x + event.scrollX,
        y: event.clientY - this.initialPosition.y + event.scrollY
      };
    }
    return position;
  }
  getStylesPerElement(element) {
    if (element === this.hintElem) {
      const hintCoordinates = {
        x: this.position.x - this.initialPosition.x,
        y: this.position.y - this.initialPosition.y
      };
      return {
        top: `${hintCoordinates.y}px`,
        left: `${hintCoordinates.x}px`,
        transition: "none",
        position: "absolute",
        zIndex: 1999
      };
    } else {
      const transform = `translate(${this.position.x}px, ${this.position.y}px)`;
      return {
        transform,
        transition: "none"
      };
    }
  }
};
DragTargetContainerDirective.ɵfac = function DragTargetContainerDirective_Factory(t) {
  return new (t || DragTargetContainerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
DragTargetContainerDirective.ɵdir = ɵɵdefineDirective({
  type: DragTargetContainerDirective,
  selectors: [["", "kendoDragTargetContainer", ""]],
  inputs: {
    hint: "hint",
    dragTargetFilter: "dragTargetFilter",
    dragHandle: "dragHandle",
    dragDelay: "dragDelay",
    threshold: "threshold",
    dragTargetId: "dragTargetId",
    dragData: "dragData",
    dragDisabled: "dragDisabled",
    mode: "mode"
  },
  outputs: {
    onDragReady: "onDragReady",
    onPress: "onPress",
    onDragStart: "onDragStart",
    onDrag: "onDrag",
    onRelease: "onRelease",
    onDragEnd: "onDragEnd"
  },
  exportAs: ["kendoDragTargetContainer"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragTargetContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDragTargetContainer]",
      exportAs: "kendoDragTargetContainer"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: DragStateService
    }, {
      type: ViewContainerRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hint: [{
      type: Input
    }],
    dragTargetFilter: [{
      type: Input
    }],
    dragHandle: [{
      type: Input
    }],
    dragDelay: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    dragTargetId: [{
      type: Input
    }],
    dragData: [{
      type: Input
    }],
    dragDisabled: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    onDragReady: [{
      type: Output
    }],
    onPress: [{
      type: Output
    }],
    onDragStart: [{
      type: Output
    }],
    onDrag: [{
      type: Output
    }],
    onRelease: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }]
  });
})();
var DropTargetContainerDirective = class {
  constructor(service, element, ngZone, cdr) {
    this.service = service;
    this.element = element;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.onDragEnter = new EventEmitter();
    this.onDragOver = new EventEmitter();
    this.onDragLeave = new EventEmitter();
    this.onDrop = new EventEmitter();
    this.currentDropTarget = null;
    this.currentDropTargetElement = null;
    this.previousDropTargets = [];
    this._dropTargetFilter = null;
    this._dropDisabled = false;
    validatePackage(packageMetadata);
  }
  /**
   * Specifies a selector for elements within a container which will be configured as drop targets
   * ([see example]({% slug drop_target_container %})). The possible values include any
   * DOM `selector`.
   */
  set dropTargetFilter(value) {
    this._dropTargetFilter = value;
    if (!this.dropDisabled) {
      this.initializeDropTargets();
    }
  }
  get dropTargetFilter() {
    return this._dropTargetFilter;
  }
  /**
   * Specifies whether the Drop Targets within the container will emit the corresponding events upon interaction with a Drag Target.
   */
  set dropDisabled(value) {
    this._dropDisabled = value;
    if (value) {
      this.clearPreviousTargets();
    } else {
      this.initializeDropTargets();
    }
  }
  get dropDisabled() {
    return this._dropDisabled;
  }
  /**
   * Used for notifying the DropTargetContainer that its content has changed.
   */
  notify() {
    this.cdr.detectChanges();
    this.initializeDropTargets();
  }
  get nativeElement() {
    return this.element.nativeElement;
  }
  ngAfterViewInit() {
    !this.dropDisabled && this.initializeDropTargets();
  }
  get allDropTargets() {
    if (isPresent(this.dropTargetFilter) && this.dropTargetFilter !== "") {
      return Array.from(this.nativeElement.querySelectorAll(this.dropTargetFilter));
    }
  }
  /**
   * @hidden
   */
  handleDragEnter(event) {
    if (!this.service.dragTarget) {
      return;
    }
    const eventTarget = event.originalEvent.target;
    this.currentDropTargetElement = intersect2(eventTarget, this.allDropTargets);
    this.currentDropTarget = this.service.dropTargets.find((dt) => dt.element === this.currentDropTargetElement);
    this.service.dropTarget = this.currentDropTarget;
    this.service.dropIndex = this.getDropIndex();
    this.emitZoneAwareEvent("onDragEnter", event);
  }
  /**
   * @hidden
   */
  handleDragLeave(event) {
    const containsEventTarget = isPresent(this.service.dropTarget) && contains(this.service.dropTarget?.element, event.originalEvent.target, false);
    if (containsEventTarget) {
      return;
    }
    this.service.dropTarget = null;
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDragLeave", event);
  }
  /**
   * @hidden
   */
  handleDragOver(event) {
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDragOver", event);
  }
  /**
   * @hidden
   */
  handleDrop(event) {
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDrop", event);
    this.currentDropTarget = null;
    this.currentDropTargetElement = null;
    this.service.dropIndex = null;
  }
  initializeDropTargets() {
    if (!isPresent(this.allDropTargets)) {
      if (this.previousDropTargets.length > 0) {
        this.clearPreviousTargets();
      }
      return;
    }
    this.allDropTargets.forEach((dropTargetEl) => {
      const isDropTargetInitialized = this.service.dropTargets.find((dt) => dt.element === dropTargetEl);
      if (!isDropTargetInitialized) {
        this.service.dropTargets.push({
          element: dropTargetEl,
          onDragEnter: this.handleDragEnter.bind(this),
          onDragLeave: this.handleDragLeave.bind(this),
          onDragOver: this.handleDragOver.bind(this),
          onDrop: this.handleDrop.bind(this)
        });
      }
    });
    if (this.previousDropTargets.length > 0) {
      const dropTargetsToRemove = this.previousDropTargets.filter((dt) => !this.allDropTargets.includes(dt));
      dropTargetsToRemove.forEach((dropTarget) => {
        const idx = this.service.dropTargets.findIndex((serviceDropTarget) => serviceDropTarget.element === dropTarget);
        if (idx > -1) {
          this.service.dropTargets.splice(idx, 1);
        }
      });
    }
    this.previousDropTargets = this.allDropTargets;
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const eventProps = {
      dragTarget: this.service.dragTarget?.element,
      dropTarget: this.currentDropTargetElement,
      dragData: this.service.dragData,
      dragEvent: normalizedEvent,
      dropTargetIndex: this.service.dropIndex
    };
    if (isPresent(this.service.dragTarget?.hint)) {
      eventProps.hintElement = this.service.dragTarget.hint;
    }
    const eventArgs = new DropTargetEvent(eventProps);
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
  }
  getDropIndex() {
    const allTargets = this.nativeElement.querySelectorAll(this.dropTargetFilter);
    return Array.from(allTargets).indexOf(this.currentDropTargetElement);
  }
  clearPreviousTargets() {
    this.previousDropTargets.forEach((dropTarget) => {
      const idx = this.service.dropTargets.findIndex((serviceDropTarget) => serviceDropTarget.element === dropTarget);
      if (idx > -1) {
        this.service.dropTargets.splice(idx, 1);
      }
    });
    this.previousDropTargets = [];
  }
};
DropTargetContainerDirective.ɵfac = function DropTargetContainerDirective_Factory(t) {
  return new (t || DropTargetContainerDirective)(ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
};
DropTargetContainerDirective.ɵdir = ɵɵdefineDirective({
  type: DropTargetContainerDirective,
  selectors: [["", "kendoDropTargetContainer", ""]],
  inputs: {
    dropTargetFilter: "dropTargetFilter",
    dropDisabled: "dropDisabled"
  },
  outputs: {
    onDragEnter: "onDragEnter",
    onDragOver: "onDragOver",
    onDragLeave: "onDragLeave",
    onDrop: "onDrop"
  },
  exportAs: ["kendoDropTargetContainer"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropTargetContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropTargetContainer]",
      exportAs: "kendoDropTargetContainer"
    }]
  }], function() {
    return [{
      type: DragStateService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    dropTargetFilter: [{
      type: Input
    }],
    dropDisabled: [{
      type: Input
    }],
    onDragEnter: [{
      type: Output
    }],
    onDragOver: [{
      type: Output
    }],
    onDragLeave: [{
      type: Output
    }],
    onDrop: [{
      type: Output
    }]
  });
})();
var EXPORTS = [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent];
var DragAndDropModule = class {
};
DragAndDropModule.ɵfac = function DragAndDropModule_Factory(t) {
  return new (t || DragAndDropModule)();
};
DragAndDropModule.ɵmod = ɵɵdefineNgModule({
  type: DragAndDropModule,
  declarations: [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent],
  imports: [CommonModule],
  exports: [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent]
});
DragAndDropModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropModule, [{
    type: NgModule,
    args: [{
      declarations: [...EXPORTS],
      exports: [...EXPORTS],
      imports: [CommonModule],
      entryComponents: [HintComponent]
    }]
  }], null, null);
})();
var UtilsModule = class {
};
UtilsModule.ɵfac = function UtilsModule_Factory(t) {
  return new (t || UtilsModule)();
};
UtilsModule.ɵmod = ɵɵdefineNgModule({
  type: UtilsModule,
  exports: [DragAndDropModule]
});
UtilsModule.ɵinj = ɵɵdefineInjector({
  imports: [DragAndDropModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsModule, [{
    type: NgModule,
    args: [{
      exports: [DragAndDropModule]
    }]
  }], null, null);
})();
export {
  DragAndDropModule,
  DragHandleDirective,
  DragTargetContainerDirective,
  DragTargetDirective,
  DragTargetDragEndEvent,
  DragTargetDragEvent,
  DragTargetDragReadyEvent,
  DragTargetDragStartEvent,
  DragTargetPressEvent,
  DragTargetReleaseEvent,
  DropTargetContainerDirective,
  DropTargetDirective,
  DropTargetEvent,
  HintComponent,
  UtilsModule
};
//# sourceMappingURL=@progress_kendo-angular-utils.js.map
