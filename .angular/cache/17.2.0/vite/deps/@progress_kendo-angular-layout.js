import {
  AUTO_STYLE,
  AnimationBuilder,
  animate,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger
} from "./chunk-4Y2WGNKK.js";
import {
  Draggable,
  DraggableDirective,
  DraggableModule,
  EventsModule,
  EventsOutsideAngularDirective,
  Keys,
  PreventableEvent,
  ResizeSensorComponent,
  ResizeSensorModule,
  WatermarkModule,
  WatermarkOverlayComponent,
  anyChanged,
  focusableSelector,
  guid,
  hasObservers,
  isChanged,
  isDocumentAvailable,
  isFirefox,
  isPresent,
  isSafari,
  shouldShowValidationUI,
  validatePackage
} from "./chunk-WYRGBF26.js";
import {
  DomSanitizer
} from "./chunk-VSIMSFJZ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-NXXEQXSF.js";
import {
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  auditTime,
  delay,
  filter,
  forwardRef,
  from,
  fromEvent,
  isDevMode,
  map,
  merge,
  of,
  setClassMetadata,
  skip,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CVGECWBE.js";
import "./chunk-QOHD3WUR.js";

// node_modules/@progress/kendo-angular-l10n/fesm2020/progress-kendo-angular-l10n.mjs
var MessageService = class {
  /**
   * @hidden
   */
  constructor() {
    this.changes = new BehaviorSubject({
      rtl: void 0
    });
  }
  /**
   * Notifies the components that the messages were changed.
   *
   * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
   */
  notify(rtl) {
    this.changes.next({
      rtl
    });
  }
  /**
   * Returns a localized message for the supplied key.
   *
   * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
   * @return - The localized message for this key or `undefined` if not found.
   */
  get(_key) {
    return void 0;
  }
};
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)();
};
MessageService.ɵprov = ɵɵdefineInjectable({
  token: MessageService,
  factory: MessageService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var ComponentMessages = class {
  get override() {
    return false;
  }
  ngOnChanges(changes) {
    this.register(changes);
    if (Object.keys(changes).some((field) => !changes[field].isFirstChange())) {
      this.service.notifyChanges();
    }
  }
  ngOnInit() {
    this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  register(changes) {
    const keys = Object.keys(changes);
    keys.forEach((key) => this.service.register(key, this[key], this.override));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
ComponentMessages.ɵfac = function ComponentMessages_Factory(t) {
  return new (t || ComponentMessages)();
};
ComponentMessages.ɵdir = ɵɵdefineDirective({
  type: ComponentMessages,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentMessages, [{
    type: Directive,
    args: [{}]
  }], null, null);
})();
var RTL = new InjectionToken("Kendo UI Right-to-Left token");
var L10N_PREFIX = new InjectionToken("Localization key prefix");
var LocalizationService = class {
  constructor(prefix, messageService, _rtl) {
    this.prefix = prefix;
    this.messageService = messageService;
    this._rtl = _rtl;
    this.changes = new BehaviorSubject({
      rtl: this._rtl
    });
    this.dictionary = {};
    if (messageService) {
      this.subscription = messageService.changes.pipe(map(({
        rtl
      }) => rtl !== void 0 ? rtl : this._rtl), tap((rtl) => this._rtl = rtl)).subscribe((rtl) => {
        this.dictionary = {};
        this.changes.next({
          rtl
        });
      });
    }
  }
  get rtl() {
    return this._rtl;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  get(shortKey) {
    const key = this.key(shortKey);
    return this.dictionary[key];
  }
  register(shortKey, value, override = false) {
    const key = this.key(shortKey);
    let message = value;
    if (!override) {
      if (Object.hasOwnProperty.call(this.dictionary, key)) {
        return;
      }
      message = this.defaultValue(key, value);
    }
    this.dictionary[key] = message;
  }
  notifyChanges() {
    this.changes.next({
      rtl: this.rtl
    });
  }
  key(shortKey) {
    return this.prefix + "." + shortKey;
  }
  defaultValue(key, value) {
    if (!this.messageService) {
      return value;
    }
    const alt = this.messageService.get(key);
    return alt === void 0 ? value : alt;
  }
};
LocalizationService.ɵfac = function LocalizationService_Factory(t) {
  return new (t || LocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8));
};
LocalizationService.ɵprov = ɵɵdefineInjectable({
  token: LocalizationService,
  factory: LocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }];
  }, null);
})();

// node_modules/@progress/kendo-svg-icons/dist/index.es.js
var caretAltUpIcon = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
};
var caretAltRightIcon = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
};
var caretAltDownIcon = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
};
var caretAltLeftIcon = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
};
var chevronUpIcon = {
  name: "chevron-up",
  content: '<path d="m129.941 353.941 126.06-126.06 126.061 126.06L416 320 256.001 160 96 320z" />',
  viewBox: "0 0 512 512"
};
var chevronDownIcon = {
  name: "chevron-down",
  content: '<path d="m382.059 158.059-126.06 126.06-126.061-126.06L96 192l159.999 160L416 192z" />',
  viewBox: "0 0 512 512"
};
var moreVerticalIcon = {
  name: "more-vertical",
  content: '<path d="M240 128c26.4 0 48-21.6 48-48s-21.6-48-48-48-48 21.6-48 48 21.6 48 48 48m0 64c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48m0 160c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48" />',
  viewBox: "0 0 512 512"
};
var checkCircleIcon = {
  name: "check-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m-32 352L96 256l45-45 83 83 147-147 45 45z" />',
  viewBox: "0 0 512 512"
};
var xIcon = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
};
var xCircleIcon = {
  name: "x-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7z" />',
  viewBox: "0 0 512 512"
};
var exclamationCircleIcon = {
  name: "exclamation-circle",
  content: '<path d="M224 128h64v160h-64zm0 256h64v-64h-64zm256-128c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224m-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192" />',
  viewBox: "0 0 512 512"
};

// node_modules/@progress/kendo-angular-icons/fesm2020/progress-kendo-angular-icons.mjs
function SVGIconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("pointer-events", "none");
    ɵɵproperty("innerHTML", ctx_r0.content, ɵɵsanitizeHtml);
    ɵɵattribute("viewBox", ctx_r0.icon.viewBox);
  }
}
function IconWrapperComponent_kendo_svgicon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-svgicon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("icon", ctx_r0.svgIcon)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_ng_template_1_kendo_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r3.innerCssClass)("name", ctx_r3.name)("size", ctx_r3.size || (ctx_r3.iconSettings == null ? null : ctx_r3.iconSettings.size))("themeColor", ctx_r3.iconSettings == null ? null : ctx_r3.iconSettings.themeColor)("flip", ctx_r3.iconSettings == null ? null : ctx_r3.iconSettings.flip);
  }
}
function IconWrapperComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r4.customClasses);
  }
}
function IconWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, IconWrapperComponent_ng_template_1_kendo_icon_0_Template, 1, 5, "kendo-icon", 3)(1, IconWrapperComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const _r5 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r1.customFontIconClass)("ngIfElse", _r5);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-icons",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1706873892,
  version: "15.0.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var sizeClasses = {
  "default": "k-icon",
  "xsmall": "k-icon-xs",
  "small": "k-icon-sm",
  "medium": "k-icon-md",
  "large": "k-icon-lg",
  "xlarge": "k-icon-xl",
  "xxlarge": "k-icon-xxl",
  "xxxlarge": "k-icon-xxxl"
};
var IconBaseDirective = class {
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    validatePackage(packageMetadata);
  }
  get horizontalFlip() {
    return this.flip === "horizontal" || this.flip === "both";
  }
  get verticalFlip() {
    return this.flip === "vertical" || this.flip === "both";
  }
  /**
   * Specifies the theme color for the Icon.
   *
   * The possible values are:
   * * `inherit` (Default)&mdash;Applies coloring based on the current color.
   * * `primary` &mdash;Applies coloring based on primary theme color.
   * * `secondary`&mdash;Applies coloring based on secondary theme color.
   * * `tertiary`&mdash; Applies coloring based on tertiary theme color.
   * * `info`&mdash;Applies coloring based on info theme color.
   * * `success`&mdash; Applies coloring based on success theme color.
   * * `warning`&mdash; Applies coloring based on warning theme color.
   * * `error`&mdash; Applies coloring based on error theme color.
   * * `dark`&mdash; Applies coloring based on dark theme color.
   * * `light`&mdash; Applies coloring based on light theme color.
   * * `inverse`&mdash; Applies coloring based on inverse theme color.
   *
   */
  set themeColor(themeColor) {
    const element = this.element.nativeElement;
    if (this._themeColor) {
      this.renderer.removeClass(element, `!k-color-${this._themeColor}`);
    }
    this._themeColor = themeColor;
    if (themeColor) {
      this.renderer.addClass(element, `!k-color-${themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the Icon.
   *
   * The possible values are:
   * * `default` (Default) (Font-size: 16px; Width: 16px; Height: 16px)
   * * `xsmall` (Font-size: 12px; Width: 12px; Height: 12px;)
   * * `small` (Font-size: 14px; Width: 14px; Height: 14px;)
   * * `medium` (Font-size: 16px; Width: 16px; Height: 16px;)
   * * `large` (Font-size: 20px; Width: 20px; Height: 20px;)
   * * `xlarge` (Font-size: 24px; Width: 24px; Height: 24px;)
   * * `xxlarge` (Font-size: 32px; Width: 32px; Height: 32px;)
   * * `xxxlarge` (Font-size: 48px; Width: 48px; Height: 48px;)
   *
   */
  set size(size) {
    const currentClass = sizeClasses[this.size];
    const newClass = sizeClasses[size];
    const element = this.element.nativeElement;
    this.renderer.removeClass(element, currentClass);
    if (size && size !== "default") {
      this.renderer.addClass(element, newClass);
    }
    this._size = size;
  }
  get size() {
    return this._size;
  }
};
IconBaseDirective.ɵfac = function IconBaseDirective_Factory(t) {
  return new (t || IconBaseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
IconBaseDirective.ɵdir = ɵɵdefineDirective({
  type: IconBaseDirective,
  selectors: [["", "kendoIconBase", ""]],
  hostVars: 4,
  hostBindings: function IconBaseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-flip-h", ctx.horizontalFlip)("k-flip-v", ctx.verticalFlip);
    }
  },
  inputs: {
    flip: "flip",
    themeColor: "themeColor",
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconBaseDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoIconBase]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    horizontalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-h"]
    }],
    verticalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-v"]
    }],
    flip: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconComponent = class extends IconBaseDirective {
  constructor(element, renderer) {
    super(element, renderer);
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this.hostAriaHidden = true;
  }
  /**
   * Defines the name for an existing icon in a Kendo UI theme, which will be rendered.
   * All [Kendo UI Icons](slug:icon_list) are supported.
   */
  set name(name) {
    if (isDocumentAvailable()) {
      const element = this.element.nativeElement;
      this.renderer.removeClass(element, `k-i-${this.name}`);
      this.renderer.addClass(element, `k-i-${name}`);
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
};
IconComponent.ɵfac = function IconComponent_Factory(t) {
  return new (t || IconComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
IconComponent.ɵcmp = ɵɵdefineComponent({
  type: IconComponent,
  selectors: [["kendo-icon"]],
  hostVars: 5,
  hostBindings: function IconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
      ɵɵclassProp("k-icon", ctx.hostClass)("k-font-icon", ctx.hostClass);
    }
  },
  inputs: {
    name: "name"
  },
  exportAs: ["kendoIcon"],
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function IconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIcon",
      selector: "kendo-icon",
      template: ""
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-font-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    name: [{
      type: Input
    }]
  });
})();
var SVGIconComponent = class extends IconBaseDirective {
  constructor(domSanitizer, element, renderer) {
    super(element, renderer);
    this.domSanitizer = domSanitizer;
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this.hostAriaHidden = true;
  }
  /**
   * Defines the SVG icon, which will be rendered. All [Kendo UI SVG Icons](slug:svgicon_list) are supported.
   */
  set icon(icon) {
    const element = this.element.nativeElement;
    const hasDocument = isDocumentAvailable();
    if (this._icon && this._icon.name && hasDocument) {
      this.renderer.removeClass(element, `k-svg-i-${this._icon.name}`);
    }
    this._icon = icon;
    if (hasDocument) {
      this.renderer.addClass(element, `k-svg-i-${this._icon.name}`);
    }
  }
  get icon() {
    return this._icon;
  }
  get content() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.icon.content);
  }
  get visible() {
    return this.icon && isDocumentAvailable();
  }
  ngOnInit() {
    this.verifyIconProperty();
  }
  verifyIconProperty() {
    if (!isDevMode()) {
      return;
    }
    if (!this._icon) {
      throw new Error(`
                Invalid configuration.
                The input [icon] is required for the Kendo UI SVG Icon component for Angular.
                See https://www.telerik.com/kendo-angular-ui/components/icons/svg-icon
            `);
    }
  }
};
SVGIconComponent.ɵfac = function SVGIconComponent_Factory(t) {
  return new (t || SVGIconComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
SVGIconComponent.ɵcmp = ɵɵdefineComponent({
  type: SVGIconComponent,
  selectors: [["kendo-svg-icon"], ["kendo-svgicon"]],
  hostVars: 5,
  hostBindings: function SVGIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
      ɵɵclassProp("k-svg-icon", ctx.hostClass)("k-icon", ctx.hostClass);
    }
  },
  inputs: {
    icon: "icon"
  },
  exportAs: ["kendoSVGIcon"],
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "pointerEvents", "innerHTML", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "innerHTML"]],
  template: function SVGIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SVGIconComponent__svg_svg_0_Template, 1, 4, "svg", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSVGIcon",
      selector: "kendo-svg-icon, kendo-svgicon",
      template: `
        <svg [style.pointerEvents]="'none'" *ngIf="visible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             [attr.viewBox]="icon.viewBox" [innerHTML]="content">
        </svg>`
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-svg-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    icon: [{
      type: Input
    }]
  });
})();
var isPresent2 = (value) => value !== null && value !== void 0;
var IconSettingsService = class {
  constructor() {
    this.changes = new Subject();
  }
  /**
   * Notifies subscribers that the icon settings were changed.
   *
   * @param iconSettings - (Optional) A new value for the [icon settings token]({% slug api_icons_icon_settings %}).
   */
  notify(iconSettings) {
    this.changes.next(iconSettings);
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   *
   * @hidden
   */
  getSvgIcon(_name) {
    return null;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   *
   * @hidden
   */
  getCustomFontIconClass(_key) {
    return null;
  }
};
IconSettingsService.ɵfac = function IconSettingsService_Factory(t) {
  return new (t || IconSettingsService)();
};
IconSettingsService.ɵprov = ɵɵdefineInjectable({
  token: IconSettingsService,
  factory: IconSettingsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSettingsService, [{
    type: Injectable
  }], null, null);
})();
var ICON_SETTINGS = new InjectionToken("Kendo UI Icon-Settings token");
var IconsService = class {
  constructor(_iconSettings, iconSettingsService) {
    this._iconSettings = _iconSettings;
    this.iconSettingsService = iconSettingsService;
    this.changes = new BehaviorSubject(this.iconSettings || {
      type: "svg"
    });
    this.subs = new Subscription();
    if (iconSettingsService) {
      this.subs.add(iconSettingsService.changes.pipe(map((iconSettings) => isPresent2(iconSettings) ? iconSettings : this._iconSettings), tap((iconSettings) => this._iconSettings = iconSettings)).subscribe((iconSettings) => this.changes.next(iconSettings)));
    }
  }
  /**
   * @hidden
   */
  get iconSettings() {
    return this._iconSettings;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   */
  getSvgIcon(name) {
    const customIcon = this.iconSettingsService && this.iconSettingsService.getSvgIcon(name);
    return customIcon;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   */
  getCustomFontIconClass(key) {
    const customClass = this.iconSettingsService && this.iconSettingsService.getCustomFontIconClass(key);
    return customClass;
  }
};
IconsService.ɵfac = function IconsService_Factory(t) {
  return new (t || IconsService)(ɵɵinject(ICON_SETTINGS, 8), ɵɵinject(IconSettingsService, 8));
};
IconsService.ɵprov = ɵɵdefineInjectable({
  token: IconsService,
  factory: IconsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ICON_SETTINGS]
      }]
    }, {
      type: IconSettingsService,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var IconWrapperComponent = class {
  constructor(iconsService) {
    this.iconsService = iconsService;
    this.hostClass = true;
    this.innerCssClass = "";
    this.customFontClass = "";
    this.subs = new Subscription();
    this.subs = iconsService.changes.subscribe((iconSettings) => {
      this.iconSettings = iconSettings;
    });
  }
  get customClasses() {
    const classes = [this.customFontClass, this.innerCssClass, this.customFontIconClass].filter((cl) => !!cl).join(" ");
    return classes;
  }
  get hasSvgIcon() {
    this.svgIcon = this.iconsService.getSvgIcon(this.name) || this.svgIcon;
    if (this.svgIcon) {
      return true;
    }
    if (isDevMode()) {
      console.groupCollapsed(`Kendo UI for Angular: Icon type is set to 'svg', but only font icon name is provided. The "${this.name}" font icon will be rendered instead.`);
      console.warn(`
Starting from v7.0.0 (October, 2023) of the Kendo Themes, the font icons will be removed from the theme.
* To render an SVG icon, update the component configuration by setting the "svgIcon" input to the respective icon definition.
* To continue to use font icons, install the "@progress/kendo-font-icons" package and import "@progress/kendo-font-icons/dist/index.css".

Please note, that font icons are not compatible with a strict Content Security Policy and require the use of the "unsafe-inline" override.

For further details, check the following documentation articles:
https://www.telerik.com/kendo-angular-ui/components/icons/icon-settings
https://www.telerik.com/kendo-angular-ui/components/styling/icons/
https://www.telerik.com/kendo-angular-ui/components/styling/svg-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/
            `);
      console.groupEnd();
    }
    return false;
  }
  get customFontIconClass() {
    return this.iconsService.getCustomFontIconClass(this.name) || this.customFontClass;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
};
IconWrapperComponent.ɵfac = function IconWrapperComponent_Factory(t) {
  return new (t || IconWrapperComponent)(ɵɵdirectiveInject(IconsService));
};
IconWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: IconWrapperComponent,
  selectors: [["kendo-icon-wrapper"]],
  hostVars: 2,
  hostBindings: function IconWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-icon-wrapper-host", ctx.hostClass);
    }
  },
  inputs: {
    name: "name",
    svgIcon: "svgIcon",
    innerCssClass: "innerCssClass",
    customFontClass: "customFontClass",
    size: "size"
  },
  exportAs: ["kendoIconWrapper"],
  decls: 3,
  vars: 2,
  consts: [[3, "ngClass", "icon", "size", "themeColor", "flip", 4, "ngIf", "ngIfElse"], ["font", ""], [3, "ngClass", "icon", "size", "themeColor", "flip"], [3, "ngClass", "name", "size", "themeColor", "flip", 4, "ngIf", "ngIfElse"], ["custom", ""], [3, "ngClass", "name", "size", "themeColor", "flip"], [3, "ngClass"]],
  template: function IconWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconWrapperComponent_kendo_svgicon_0_Template, 1, 5, "kendo-svgicon", 0)(1, IconWrapperComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", (ctx.iconSettings == null ? null : ctx.iconSettings.type) === "svg" && ctx.hasSvgIcon)("ngIfElse", _r2);
    }
  },
  dependencies: [SVGIconComponent, IconComponent, NgIf, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconWrapperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIconWrapper",
      selector: "kendo-icon-wrapper",
      template: `
        <kendo-svgicon
            *ngIf="iconSettings?.type === 'svg' && hasSvgIcon; else font"
            [ngClass]="innerCssClass"
            [icon]="svgIcon"
            [size]="size || iconSettings?.size"
            [themeColor]="iconSettings?.themeColor"
            [flip]="iconSettings?.flip"></kendo-svgicon>
        <ng-template #font>
            <kendo-icon
                *ngIf="!customFontIconClass; else custom"
                [ngClass]="innerCssClass"
                [name]="name"
                [size]="size || iconSettings?.size"
                [themeColor]="iconSettings?.themeColor"
                [flip]="iconSettings?.flip"></kendo-icon>
            <ng-template #custom>
                <span [ngClass]="customClasses"></span>
            </ng-template>
        </ng-template>
    `
    }]
  }], function() {
    return [{
      type: IconsService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon-wrapper-host"]
    }],
    name: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    innerCssClass: [{
      type: Input
    }],
    customFontClass: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var exportedModules$2 = [IconComponent];
var declarations$2 = [...exportedModules$2];
var IconModule = class {
};
IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || IconModule)();
};
IconModule.ɵmod = ɵɵdefineNgModule({
  type: IconModule,
  declarations: [IconComponent],
  imports: [CommonModule],
  exports: [IconComponent, CommonModule]
});
IconModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule], CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$2],
      exports: [exportedModules$2, CommonModule],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var exportedModules$1 = [SVGIconComponent];
var declarations$1 = [...exportedModules$1];
var SVGIconModule = class {
};
SVGIconModule.ɵfac = function SVGIconModule_Factory(t) {
  return new (t || SVGIconModule)();
};
SVGIconModule.ɵmod = ɵɵdefineNgModule({
  type: SVGIconModule,
  declarations: [SVGIconComponent],
  imports: [CommonModule],
  exports: [SVGIconComponent]
});
SVGIconModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$1],
      exports: [exportedModules$1],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var exportedModules = [IconWrapperComponent];
var declarations = [...exportedModules];
var IconsModule = class {
};
IconsModule.ɵfac = function IconsModule_Factory(t) {
  return new (t || IconsModule)();
};
IconsModule.ɵmod = ɵɵdefineNgModule({
  type: IconsModule,
  declarations: [IconWrapperComponent],
  imports: [IconModule, SVGIconModule],
  exports: [IconModule, SVGIconModule, IconWrapperComponent]
});
IconsModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [[IconModule, SVGIconModule], IconModule, SVGIconModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsModule, [{
    type: NgModule,
    args: [{
      declarations,
      imports: [IconModule, SVGIconModule],
      exports: [IconModule, SVGIconModule, exportedModules],
      providers: [IconsService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0)
    margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
  return element.ownerDocument || element.document || element;
}

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return ownerDocument(element).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element) {
  return ownerDocument(element).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div = document.createElement("div");
    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    cachedWidth = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element) {
  var win = window_default(element);
  var document2 = document_default(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var ref = element.style;
  var display = ref.display;
  var left = ref.left;
  var position2 = ref.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return rect;
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element) {
  var documentElement = document_default(element);
  var win = window_default(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element) {
  var parent = offset_parent_default(element);
  return parent ? element_scroll_position_default(parent) : { x: 0, y: 0 };
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = window_default(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset_default(element);
  var parentElement = parent || offset_parent_default(element);
  var ownerDocument2 = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = { top: 0, left: 0 };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element, parent, scale) {
  if (scale === void 0)
    scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(ref) {
  var offset2 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0)
    margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element) {
  var result = [];
  var sibling = element.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(
      function(list, p) {
        return list.concat(siblingElements.filter(function(s) {
          return s === p;
        }));
      },
      []
    )[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};

// node_modules/@progress/kendo-angular-popup/fesm2020/progress-kendo-angular-popup.mjs
var _c0 = ["container"];
function PopupComponent_ng_template_4_Template(rf, ctx) {
}
var _c1 = ["*"];
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
    return null;
  }
  const sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents_default(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class {
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align_default(settings);
  }
  boundingOffset(el) {
    return bounding_offset_default(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset_default(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition: transition2
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset_default(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition2;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return position_with_scroll_default(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrict_to_view_default(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset_default(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
};
DOMService.ɵfac = function DOMService_Factory(t) {
  return new (t || DOMService)();
};
DOMService.ɵprov = ɵɵdefineInjectable({
  token: DOMService,
  factory: DOMService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
};
AlignService.ɵfac = function AlignService_Factory(t) {
  return new (t || AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
AlignService.ɵprov = ɵɵdefineInjectable({
  token: AlignService,
  factory: AlignService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var PositionService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
};
PositionService.ɵfac = function PositionService_Factory(t) {
  return new (t || PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
PositionService.ɵprov = ɵɵdefineInjectable({
  token: PositionService,
  factory: PositionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var ResizeService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
};
ResizeService.ɵfac = function ResizeService_Factory(t) {
  return new (t || ResizeService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ResizeService.ɵprov = ɵɵdefineInjectable({
  token: ResizeService,
  factory: ResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
};
ScrollableService.ɵfac = function ScrollableService_Factory(t) {
  return new (t || ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ScrollableService.ɵprov = ɵɵdefineInjectable({
  token: ScrollableService,
  factory: ScrollableService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class {
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
    this.start = new EventEmitter();
    this.end = new EventEmitter();
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
};
AnimationService.ɵfac = function AnimationService_Factory(t) {
  return new (t || AnimationService)(ɵɵinject(AnimationBuilder));
};
AnimationService.ɵprov = ɵɵdefineInjectable({
  token: AnimationService,
  factory: AnimationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationBuilder
    }];
  }, null);
})();
var packageMetadata2 = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1706873894,
  version: "15.0.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class {
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    this.animate = true;
    this.anchorAlign = {
      horizontal: "left",
      vertical: "bottom"
    };
    this.collision = {
      horizontal: "fit",
      vertical: "flip"
    };
    this.popupAlign = {
      horizontal: "left",
      vertical: "top"
    };
    this.copyAnchorStyles = false;
    this.positionMode = "fixed";
    this.offset = DEFAULT_OFFSET;
    this.anchorViewportLeave = new EventEmitter();
    this.close = new EventEmitter();
    this.open = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.resolvedPromise = Promise.resolve(null);
    this.initialCheck = true;
    validatePackage(packageMetadata2);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
};
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
PopupComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupComponent,
  selectors: [["kendo-popup"]],
  viewQuery: function PopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(ResizeSensorComponent, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
    }
  },
  inputs: {
    animate: "animate",
    anchor: "anchor",
    anchorAlign: "anchorAlign",
    collision: "collision",
    popupAlign: "popupAlign",
    copyAnchorStyles: "copyAnchorStyles",
    popupClass: "popupClass",
    positionMode: "positionMode",
    offset: "offset",
    margin: "margin"
  },
  outputs: {
    anchorViewportLeave: "anchorViewportLeave",
    close: "close",
    open: "open",
    positionChange: "positionChange"
  },
  exportAs: ["kendo-popup"],
  features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 4,
  consts: [[1, "k-child-animation-container"], [1, "k-popup", 3, "ngClass"], ["container", ""], [3, "ngTemplateOutlet", "ngIf"], [3, "rateLimit", "resize"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1, 2);
      ɵɵprojection(3);
      ɵɵtemplate(4, PopupComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      ɵɵelementStart(5, "kendo-resize-sensor", 4);
      ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
        return ctx.onResize();
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.popupClass);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.content)("ngIf", ctx.content);
      ɵɵadvance();
      ɵɵproperty("rateLimit", 100);
    }
  },
  dependencies: [ResizeSensorComponent, NgClass, NgTemplateOutlet, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
            <div class="k-popup" [ngClass]="popupClass" #container>
                <ng-content></ng-content>
                <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
                <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
                </kendo-resize-sensor>
            </div>
        </div>
     `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AlignService
    }, {
      type: DOMService
    }, {
      type: PositionService
    }, {
      type: ResizeService
    }, {
      type: ScrollableService
    }, {
      type: AnimationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class {
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Gets the root view container into which the component will be injected.
   *
   * @returns {ComponentRef<any>}
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See http://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Sets or gets the HTML element of the root component container.
   *
   * @returns {HTMLElement}
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  /**
   * Opens a Popup component. Created Popups are mounted
   * in the DOM directly in the root application component.
   *
   * @param {PopupSettings} options - The options which define the Popup.
   * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <ng-template #template>
   *      Popup content
   *     </ng-template>
   *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
   *   `
   * })
   * export class AppComponent {
   *     public popupRef: PopupRef;
   *
   *     constructor( private popupService: PopupService ) {}
   *
   *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
   *         if (this.popupRef) {
   *              this.popupRef.close();
   *              this.popupRef = null;
   *              return;
   *         }
   *
   *         this.popupRef = this.popupService.open({
   *           anchor: anchor,
   *           content: template
   *         });
   *     }
   * }
   * ```
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        removeElement(popupElement);
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef
   * @returns {HTMLElement}
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by its type.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` type class.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the inputs on the component.
   *
   * @param {ComponentRef<any>} component
   * @param {*} options
   * @returns {ComponentRef<any>}
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).map((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and the nodes to append from the `content` option.
   *
   * @param {*} content
   * @returns {any}
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
};
PopupService.ɵfac = function PopupService_Factory(t) {
  return new (t || PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
};
PopupService.ɵprov = ɵɵdefineInjectable({
  token: PopupService,
  factory: PopupService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [POPUP_CONTAINER]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var POPUP_DIRECTIVES = [PopupComponent];
var PopupModule = class {
};
PopupModule.ɵfac = function PopupModule_Factory(t) {
  return new (t || PopupModule)();
};
PopupModule.ɵmod = ɵɵdefineNgModule({
  type: PopupModule,
  declarations: [PopupComponent],
  imports: [CommonModule, ResizeSensorModule],
  exports: [PopupComponent]
});
PopupModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService],
  imports: [[CommonModule, ResizeSensorModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      declarations: [POPUP_DIRECTIVES],
      entryComponents: [POPUP_DIRECTIVES],
      exports: [POPUP_DIRECTIVES],
      imports: [CommonModule, ResizeSensorModule],
      providers: [PopupService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-buttons/fesm2020/progress-kendo-angular-buttons.mjs
var _c02 = ["kendoButton", ""];
function ButtonComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ButtonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r1.imageUrl, ɵɵsanitizeUrl);
  }
}
function ButtonComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.iconClass);
  }
}
function ButtonComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.arrowIcon.iconClass);
  }
}
function ButtonComponent_kendo_icon_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r4.arrowIcon.icon || "caret-alt-down")("svgIcon", ctx_r4.arrowIcon.svgIcon || ctx_r4.caretAltDownIcon);
  }
}
var _c12 = ["*"];
var _c2 = [[["", "kendoButton", ""], ["kendo-button"]]];
var _c3 = ["[kendoButton], kendo-button"];
function ListComponent_li_1_ng_template_1_ng_template_1_Template(rf, ctx) {
}
var _c4 = (a0, a1) => ({
  templateRef: a0,
  $implicit: a1
});
function ListComponent_li_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r1.disabled);
    ɵɵproperty("ngClass", dataItem_r1.cssClass);
    ɵɵadvance();
    ɵɵproperty("templateContext", ɵɵpureFunction2(4, _c4, ctx_r3.itemTemplate == null ? null : ctx_r3.itemTemplate.templateRef, dataItem_r1));
  }
}
function ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("name", dataItem_r1.icon)("svgIcon", dataItem_r1.svgIcon)("customFontClass", dataItem_r1.iconClass);
  }
}
function ListComponent_li_1_ng_template_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("src", dataItem_r1.imageUrl, ɵɵsanitizeUrl);
  }
}
function ListComponent_li_1_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r9.getText(dataItem_r1), " ");
  }
}
function ListComponent_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 6)(2, ListComponent_li_1_ng_template_2_img_2_Template, 1, 1, "img", 7)(3, ListComponent_li_1_ng_template_2_span_3_Template, 2, 1, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r1.disabled);
    ɵɵproperty("ngClass", dataItem_r1.cssClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r1.icon || dataItem_r1.iconClass || dataItem_r1.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r1.imageUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.getText(dataItem_r1));
  }
}
function ListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 2);
    ɵɵlistener("click", function ListComponent_li_1_Template_li_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r15);
      const index_r2 = restoredCtx.index;
      const ctx_r14 = ɵɵnextContext();
      $event.stopImmediatePropagation();
      return ɵɵresetView(ctx_r14.onClick(index_r2));
    })("blur", function ListComponent_li_1_Template_li_blur_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.onBlur());
    });
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_Template, 2, 7, "ng-template", 3)(2, ListComponent_li_1_ng_template_2_Template, 4, 6, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("index", index_r2);
    ɵɵattribute("aria-disabled", dataItem_r1.disabled ? true : false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef));
  }
}
var _c5 = ["button"];
var _c6 = ["arrowButton"];
var _c7 = ["popupTemplate"];
var _c8 = ["container"];
function SplitButtonComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
  }
}
function SplitButtonComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 10);
    ɵɵlistener("onItemClick", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onItemClick($event));
    })("keydown", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.keyDownHandler($event));
    })("keyup", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r3.listId)("data", ctx_r3.data)("textField", ctx_r3.textField)("itemTemplate", ctx_r3.itemTemplate)("size", ctx_r3.size);
    ɵɵattribute("dir", ctx_r3.dir);
  }
}
var _c9 = ["buttonList"];
function DropDownButtonComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 4, 5);
    ɵɵlistener("onItemClick", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onItemClick($event));
    })("keydown", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.keyDownHandler($event));
    })("keyup", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.listId)("data", ctx_r1.data)("textField", ctx_r1.textField)("itemTemplate", ctx_r1.itemTemplate)("size", ctx_r1.size);
    ɵɵattribute("dir", ctx_r1.dir)("aria-labelledby", ctx_r1.buttonId);
  }
}
function ChipComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ChipComponent_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("customFontClass", ctx_r1.customIconClass);
  }
}
function ChipComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelement(1, "span", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r2.chipAvatarClass);
  }
}
function ChipComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.label, " ");
  }
}
function ChipComponent_ng_content_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!label"]);
  }
}
function ChipComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 14);
    ɵɵlistener("click", function ChipComponent_span_7_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onMenuClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r5.defaultMenuIcon || ctx_r5.menuSvgIcon)("customFontClass", ctx_r5.menuIcon);
  }
}
function ChipComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function ChipComponent_span_8_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onRemoveClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r6.removeSvgIcon || ctx_r6.defaultRemoveIcon)("customFontClass", ctx_r6.removeIcon);
  }
}
var _c10 = ["kendoDialItem", ""];
function DialItemComponent_0_ng_template_0_Template(rf, ctx) {
}
var _c11 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  isFocused: a2
});
function DialItemComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DialItemComponent_0_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dialItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c11, ctx_r0.item, ctx_r0.index, ctx_r0.isFocused));
  }
}
function DialItemComponent_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.item.label);
  }
}
function DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r4.item.icon)("customFontClass", ctx_r4.item.iconClass)("svgIcon", ctx_r4.item.svgIcon);
  }
}
function DialItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialItemComponent_ng_container_1_span_1_Template, 2, 1, "span", 2)(2, DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.item.label);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.item.icon || ctx_r1.item.iconClass || ctx_r1.item.svgIcon);
  }
}
var _c122 = ["kendoDialList", ""];
function DialListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", ctx_r0.dialItems[idx_r2])("index", idx_r2)("dialItemTemplate", ctx_r0.dialItemTemplate)("isFocused", ctx_r0.isFocused(idx_r2))("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("align", ctx_r0.align);
  }
}
function FloatingActionButtonComponent_2_ng_template_0_Template(rf, ctx) {
}
function FloatingActionButtonComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FloatingActionButtonComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fabTemplate == null ? null : ctx_r1.fabTemplate.templateRef);
  }
}
function FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r6.icon)("customFontClass", ctx_r6.iconClass)("svgIcon", ctx_r6.svgIcon);
  }
}
function FloatingActionButtonComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r7.text);
  }
}
function FloatingActionButtonComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 5)(2, FloatingActionButtonComponent_ng_container_3_span_2_Template, 2, 1, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.icon || ctx_r2.iconClass || ctx_r2.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.text);
  }
}
function FloatingActionButtonComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 9);
    ɵɵlistener("click", function FloatingActionButtonComponent_ng_template_4_Template_ul_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r3.dialListId)("ngClass", ctx_r3.dialClass)("dialItems", ctx_r3.dialItems)("dialItemTemplate", ctx_r3.dialItemTemplate == null ? null : ctx_r3.dialItemTemplate.templateRef)("align", ctx_r3.align);
    ɵɵattribute("aria-labelledby", ctx_r3.id);
  }
}
var _c13 = (a0, a1) => ({
  keydown: a0,
  click: a1
});
var KendoButtonService = class {
  constructor() {
    this.buttonClicked = new Subject();
    this.buttonClicked$ = this.buttonClicked.asObservable();
  }
  click(button) {
    this.buttonClicked.next(button);
  }
};
KendoButtonService.ɵfac = function KendoButtonService_Factory(t) {
  return new (t || KendoButtonService)();
};
KendoButtonService.ɵprov = ɵɵdefineInjectable({
  token: KendoButtonService,
  factory: KendoButtonService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KendoButtonService, [{
    type: Injectable
  }], null, null);
})();
var packageMetadata3 = {
  name: "@progress/kendo-angular-buttons",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1706873983,
  version: "15.0.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var resolvedPromise = Promise.resolve(null);
var isPresent3 = (value) => value !== null && value !== void 0;
function isDocumentNode(container) {
  return container.nodeType === 9;
}
function closest(element, selector) {
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
var replaceMessagePlaceholder = (message, name, value) => message.replace(new RegExp(`{\\s*${name}\\s*}`, "g"), value);
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDNESS[newValue]}` : ""
      };
    case "fillMode":
      return {
        toRemove: `k-${componentType}-${previousValue}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${newValue}` : ""
      };
    default:
      break;
  }
};
var getThemeColorClasses = (componentType, prevFillMode, fillMode, previousValue, newValue) => {
  return {
    toRemove: `k-${componentType}-${prevFillMode}-${previousValue}`,
    toAdd: newValue !== "none" ? `k-${componentType}-${fillMode}-${newValue}` : ""
  };
};
var SPAN_TAG_NAME = "SPAN";
var BUTTON_TAG_NAME = "BUTTON";
var KENDO_BUTTON_TAG_NAME = "KENDO-BUTTON";
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_SIZE$2 = "medium";
var DEFAULT_THEME_COLOR$2 = "base";
var DEFAULT_FILL_MODE$3 = "solid";
var ButtonComponent = class {
  constructor(element, renderer, service, localization, ngZone) {
    this.renderer = renderer;
    this.service = service;
    this.ngZone = ngZone;
    this.arrowIcon = false;
    this.toggleable = false;
    this.role = "button";
    this.selectedChange = new EventEmitter();
    this.click = new EventEmitter();
    this.isDisabled = false;
    this.caretAltDownIcon = caretAltDownIcon;
    this._size = DEFAULT_SIZE$2;
    this._rounded = DEFAULT_ROUNDED$3;
    this._fillMode = DEFAULT_FILL_MODE$3;
    this._themeColor = DEFAULT_THEME_COLOR$2;
    this._focused = false;
    this.subs = new Subscription();
    validatePackage(packageMetadata3);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = element.nativeElement;
  }
  /**
   * Backwards-compatible alias
   *
   * @hidden
   */
  get togglable() {
    return this.toggleable;
  }
  /**
   * @hidden
   */
  set togglable(value) {
    this.toggleable = value;
  }
  /**
   * Sets the selected state of the Button.
   *
   * @default false
   */
  get selected() {
    return this._selected || false;
  }
  set selected(value) {
    this._selected = value;
  }
  /**
   * @hidden
   */
  set tabIndex(index) {
    this.element.tabIndex = index;
  }
  get tabIndex() {
    return this.element.tabIndex;
  }
  /**
   * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
   * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
   */
  set iconClass(value) {
    if (isDevMode() && value && (this.icon || this.svgIcon)) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._iconClass = value;
  }
  get iconClass() {
    return this._iconClass;
  }
  /**
   * Defines the name for an existing font icon in the Kendo UI theme.
   */
  set icon(name) {
    if (isDevMode() && name && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._icon = name;
  }
  get icon() {
    return this._icon;
  }
  /**
   * If set to `true`, it disables the Button.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * The size property specifies the padding of the Button
   * ([see example]({% slug appearance_button %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$2;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the Button
   * ([see example]({% slug appearance_button %}#toc-rounded)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$3;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the Button
   * ([see example]({% slug appearance_button %}#toc-fillMode)).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$3;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The Button allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color while also amending the text color accordingly
   * ([see example]({% slug appearance_button %}#toc-themeColor)).
   *
   * @default 'base'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$2;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Defines an SVGIcon to be rendered within the button.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  set isFocused(isFocused) {
    this.toggleClass("k-focus", isFocused);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  get classButton() {
    return true;
  }
  get isToggleable() {
    return this.toggleable;
  }
  get iconButtonClass() {
    const hasIcon = this.icon || this.iconClass || this.imageUrl || this.svgIcon;
    return hasIcon && !this.hasText;
  }
  get roleSetter() {
    const isButtonElementAndRole = this.element.tagName === BUTTON_TAG_NAME && this.role === "button";
    return isButtonElementAndRole ? void 0 : this.role;
  }
  get classDisabled() {
    return this.isDisabled;
  }
  get classActive() {
    return this.selected;
  }
  get getDirection() {
    return this.direction;
  }
  /**
   * @hidden
   */
  onFocus() {
    this.isFocused = true;
  }
  /**
   * @hidden
   */
  onBlur() {
    this.isFocused = false;
  }
  /**
   * @hidden
   */
  set primary(value) {
    this.themeColor = value ? "primary" : "base";
  }
  /**
   * @hidden
   */
  set look(value) {
    switch (value) {
      case "default":
        this.fillMode = "solid";
        break;
      default:
        this.fillMode = value;
        break;
    }
  }
  /**
   * Alias for ElementRef.nativeElement to workaround
   * ViewChild() selectors that used to return the host element before v11.
   *
   * @hidden
   */
  get nativeElement() {
    return this.element;
  }
  ngOnInit() {
    const elementTagName = this.element.tagName;
    const isSpanOrKendoButton = elementTagName === SPAN_TAG_NAME || elementTagName === KENDO_BUTTON_TAG_NAME;
    if (!this.element.hasAttribute("role") && this.togglable) {
      this.toggleAriaPressed(this.toggleable);
    }
    if (this.role) {
      const isButtonElementAndRole = elementTagName === BUTTON_TAG_NAME && this.role === "button";
      if (!isButtonElementAndRole) {
        this.setAttribute("role", this.role);
      }
    }
    if (isSpanOrKendoButton && !this.isDisabled) {
      this.tabIndex = 0;
    }
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this._onButtonClick.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "keydown", (event) => {
        const isSpaceOrEnter = event.keyCode === Keys.Space || event.keyCode === Keys.Enter;
        if (isSpanOrKendoButton && isSpaceOrEnter) {
          this.ngZone.run(() => {
            this.click.emit(event);
          });
          this._onButtonClick();
        }
      }));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const elementTagName2 = this.element.tagName;
        const isButton = elementTagName2 === BUTTON_TAG_NAME;
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isButton && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
    });
  }
  ngOnChanges(change) {
    if (isChanged("togglable", change) || isChanged("toggleable", change)) {
      this.toggleAriaPressed(this.toggleable);
    }
  }
  ngAfterViewInit() {
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  /**
   * Focuses the Button component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Blurs the Button component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  /**
   * @hidden
   */
  setAttribute(attribute, value) {
    this.renderer.setAttribute(this.element, attribute, value);
  }
  /**
   * @hidden
   */
  removeAttribute(attribute) {
    this.renderer.removeAttribute(this.element, attribute);
  }
  /**
   * @hidden
   *
   * Internal setter that triggers selectedChange
   */
  setSelected(value) {
    const changed = this.selected !== value;
    this.selected = value;
    this.setAttribute("aria-pressed", this.selected.toString());
    this.toggleClass("k-selected", this.selected);
    if (changed && hasObservers(this.selectedChange)) {
      this.ngZone.run(() => {
        this.selectedChange.emit(value);
      });
    }
  }
  toggleAriaPressed(shouldSet) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (shouldSet) {
      this.setAttribute("aria-pressed", this.selected.toString());
    } else {
      this.removeAttribute("aria-pressed");
    }
  }
  toggleClass(className, add) {
    if (add) {
      this.renderer.addClass(this.element, className);
    } else {
      this.renderer.removeClass(this.element, className);
    }
  }
  _onButtonClick() {
    if (!this.disabled && this.service) {
      this.ngZone.run(() => {
        this.service.click(this);
      });
    }
    if (this.togglable && !this.service) {
      this.setSelected(!this.selected);
    }
  }
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("button", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
};
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
  return new (t || ButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(KendoButtonService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
ButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonComponent,
  selectors: [["button", "kendoButton", ""], ["span", "kendoButton", ""], ["kendo-button"]],
  hostVars: 13,
  hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function ButtonComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function ButtonComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.roleSetter)("aria-disabled", ctx.classDisabled)("dir", ctx.getDirection);
      ɵɵclassProp("k-button", ctx.classButton)("k-toggle-button", ctx.isToggleable)("k-icon-button", ctx.iconButtonClass)("k-disabled", ctx.classDisabled)("k-selected", ctx.classActive);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    toggleable: "toggleable",
    togglable: "togglable",
    selected: "selected",
    tabIndex: "tabIndex",
    imageUrl: "imageUrl",
    iconClass: "iconClass",
    icon: "icon",
    disabled: "disabled",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    svgIcon: "svgIcon",
    role: "role",
    primary: "primary",
    look: "look"
  },
  outputs: {
    selectedChange: "selectedChange",
    click: "click"
  },
  exportAs: ["kendoButton"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵNgOnChangesFeature],
  attrs: _c02,
  ngContentSelectors: _c12,
  decls: 7,
  vars: 5,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ButtonComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ButtonComponent_span_1_Template, 2, 1, "span", 1)(2, ButtonComponent_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵtemplate(5, ButtonComponent_span_5_Template, 1, 1, "span", 2)(6, ButtonComponent_kendo_icon_wrapper_6_Template, 1, 2, "kendo-icon-wrapper", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.arrowIcon.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.arrowIcon && !ctx.arrowIcon.iconClass);
    }
  },
  dependencies: [IconWrapperComponent, NgIf, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoButton], span[kendoButton], kendo-button",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
        <span *ngIf="$any(arrowIcon).iconClass" class="k-button-icon" [ngClass]="$any(arrowIcon).iconClass"></span>
        <kendo-icon-wrapper
            *ngIf="arrowIcon && !$any(arrowIcon).iconClass"
            innerCssClass="k-button-icon"
            [name]="$any(arrowIcon).icon || 'caret-alt-down'"
            [svgIcon]="$any(arrowIcon).svgIcon || caretAltDownIcon"></kendo-icon-wrapper>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: KendoButtonService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    toggleable: [{
      type: Input
    }],
    togglable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    classButton: [{
      type: HostBinding,
      args: ["class.k-button"]
    }],
    isToggleable: [{
      type: HostBinding,
      args: ["class.k-toggle-button"]
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    roleSetter: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    classActive: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    primary: [{
      type: Input
    }],
    look: [{
      type: Input
    }]
  });
})();
var PreventableEvent2 = class {
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var tabindex = "tabindex";
var ButtonGroupComponent = class {
  constructor(service, localization, renderer, element) {
    this.service = service;
    this.renderer = renderer;
    this.element = element;
    this.selection = "multiple";
    this.navigable = true;
    this.navigate = new EventEmitter();
    this._tabIndex = 0;
    this.currentTabIndex = 0;
    this.lastFocusedIndex = -1;
    this.subs = new Subscription();
    this.role = "group";
    this.focusHandler = () => {
      this.currentTabIndex = -1;
      this.defocus(this.buttons.toArray());
      const firstFocusableIndex = this.buttons.toArray().findIndex((current) => !current.disabled);
      const index = this.lastFocusedIndex === -1 ? firstFocusableIndex : this.lastFocusedIndex;
      this.focus(this.buttons.filter((_current, i) => {
        return i === index;
      }));
    };
    validatePackage(packageMetadata3);
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
  }
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabIndex(value) {
    this._tabIndex = value;
    this.currentTabIndex = value;
  }
  get tabIndex() {
    return this._tabIndex;
  }
  get wrapperClass() {
    return true;
  }
  get disabledClass() {
    return this.disabled;
  }
  get stretchedClass() {
    return !!this.width;
  }
  get dir() {
    return this.direction;
  }
  get ariaDisabled() {
    return this.disabled;
  }
  get wrapperWidth() {
    return this.width;
  }
  get wrapperTabIndex() {
    return this.disabled ? void 0 : this.navigable ? this.currentTabIndex : void 0;
  }
  ngOnInit() {
    this.subs.add(this.service.buttonClicked$.subscribe((button) => {
      let newSelectionValue;
      if (this.isSelectionSingle()) {
        newSelectionValue = true;
        this.deactivate(this.buttons.filter((current) => current !== button));
      } else {
        if (this.navigable) {
          this.defocus(this.buttons.toArray());
        }
        newSelectionValue = !button.selected;
      }
      if (button.togglable) {
        button.setSelected(newSelectionValue);
      }
      if (this.navigable) {
        this.currentTabIndex = -1;
        this.renderer.setAttribute(button, tabindex, "0");
      }
    }));
    this.handleSubs("focus", () => this.navigable, this.focusHandler);
    this.handleSubs("keydown", () => this.navigable && !this.disabled, (event) => this.navigateFocus(event));
    this.handleSubs("focusout", (event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement, () => {
      this.lastFocusedIndex = this.buttons.toArray().findIndex((button) => button.tabIndex !== -1);
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    });
    this.subs.add(fromEvent(this.element.nativeElement, "focusout").pipe(filter((event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement)).subscribe(() => {
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    }));
  }
  ngOnChanges(changes) {
    if (isChanged("disabled", changes)) {
      this.buttons.forEach((button) => {
        if (isPresent3(this.disabled)) {
          button.disabled = this.disabled;
        }
      });
    }
    if (isChanged("navigable", changes)) {
      if (changes["navigable"].currentValue) {
        this.defocus(this.buttons.toArray());
        this.currentTabIndex = 0;
      } else {
        this.currentTabIndex = -1;
        this.buttons.forEach((button) => this.renderer.setAttribute(button, tabindex, "0"));
      }
    }
  }
  ngAfterContentInit() {
    if (!this.navigable) {
      return;
    }
    this.defocus(this.buttons.toArray());
  }
  ngAfterViewChecked() {
    if (this.buttons.length) {
      this.renderer.addClass(this.buttons.first.element, "k-group-start");
      this.renderer.addClass(this.buttons.last.element, "k-group-end");
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  navigateFocus(event) {
    const navigationButtons = this.buttons.toArray().filter((button) => !button.disabled);
    const focusedIndex = navigationButtons.findIndex((current) => current.element.tabIndex !== -1);
    const firstIndex = 0;
    const lastIndex = navigationButtons.length - 1;
    const eventArgs = new PreventableEvent2();
    if (event.keyCode === Keys.ArrowRight && focusedIndex < lastIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex + 1;
        }));
      }
    }
    if (event.keyCode === Keys.ArrowLeft && focusedIndex > firstIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex - 1;
        }));
      }
    }
  }
  deactivate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(false);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "-1");
      }
    });
  }
  activate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(true);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "0");
      }
      button.focus();
    });
  }
  defocus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "-1");
    });
  }
  focus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "0");
      button.focus();
    });
  }
  verifySettings() {
    if (isDevMode()) {
      if (this.isSelectionSingle() && this.buttons.filter((button) => button.selected).length > 1) {
        throw new Error("Having multiple selected buttons with single selection mode is not supported");
      }
    }
  }
  isSelectionSingle() {
    return this.selection === "single";
  }
  handleSubs(eventName, predicate, handler) {
    this.subs.add(fromEvent(this.element.nativeElement, eventName).pipe(filter(predicate)).subscribe(handler));
  }
};
ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(t) {
  return new (t || ButtonGroupComponent)(ɵɵdirectiveInject(KendoButtonService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
ButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonGroupComponent,
  selectors: [["kendo-buttongroup"]],
  contentQueries: function ButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t);
    }
  },
  hostVars: 12,
  hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("dir", ctx.dir)("aria-disabled", ctx.ariaDisabled)("tabindex", ctx.wrapperTabIndex);
      ɵɵstyleProp("width", ctx.wrapperWidth);
      ɵɵclassProp("k-button-group", ctx.wrapperClass)("k-disabled", ctx.disabledClass)("k-button-group-stretched", ctx.stretchedClass);
    }
  },
  inputs: {
    disabled: "disabled",
    selection: "selection",
    width: "width",
    tabIndex: "tabIndex",
    navigable: "navigable"
  },
  outputs: {
    navigate: "navigate"
  },
  exportAs: ["kendoButtonGroup"],
  features: [ɵɵProvidersFeature([KendoButtonService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.buttongroup"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function ButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButtonGroup",
      providers: [KendoButtonService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.buttongroup"
      }],
      selector: "kendo-buttongroup",
      template: `
        <ng-content select="[kendoButton], kendo-button"></ng-content>
    `
    }]
  }], function() {
    return [{
      type: KendoButtonService
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    disabled: [{
      type: Input,
      args: ["disabled"]
    }],
    selection: [{
      type: Input,
      args: ["selection"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    tabIndex: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    buttons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-button-group-stretched"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    wrapperWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    wrapperTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var ButtonModule = class {
};
ButtonModule.ɵfac = function ButtonModule_Factory(t) {
  return new (t || ButtonModule)();
};
ButtonModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonModule,
  declarations: [ButtonComponent],
  imports: [IconsModule],
  exports: [ButtonComponent]
});
ButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [[IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      declarations: [ButtonComponent],
      imports: [IconsModule],
      exports: [ButtonComponent]
    }]
  }], null, null);
})();
var ButtonGroupModule = class {
};
ButtonGroupModule.ɵfac = function ButtonGroupModule_Factory(t) {
  return new (t || ButtonGroupModule)();
};
ButtonGroupModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonGroupModule,
  declarations: [ButtonGroupComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonGroupComponent]
});
ButtonGroupModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, ButtonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      declarations: [ButtonGroupComponent],
      exports: [ButtonGroupComponent],
      imports: [CommonModule, ButtonModule]
    }]
  }], null, null);
})();
var ButtonItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ButtonItemTemplateDirective.ɵfac = function ButtonItemTemplateDirective_Factory(t) {
  return new (t || ButtonItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
ButtonItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: ButtonItemTemplateDirective,
  selectors: [["", "kendoDropDownButtonItemTemplate", ""], ["", "kendoSplitButtonItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FocusService = class {
  constructor() {
    this.onFocus = new EventEmitter();
  }
  isFocused(index) {
    return index === this.focused;
  }
  focus(index) {
    if (this.isFocused(index)) {
      return;
    }
    this.focused = index;
    this.onFocus.emit(index);
  }
  resetFocus() {
    this.focused = -1;
  }
  get focused() {
    return this.focusedIndex;
  }
  set focused(index) {
    this.focusedIndex = index;
    this.onFocus.emit(index);
  }
};
FocusService.ɵfac = function FocusService_Factory(t) {
  return new (t || FocusService)();
};
FocusService.ɵprov = ɵɵdefineInjectable({
  token: FocusService,
  factory: FocusService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusService, [{
    type: Injectable
  }], null, null);
})();
var FocusableDirective = class {
  constructor(focusService, elementRef, renderer) {
    this.focusService = focusService;
    this.renderer = renderer;
    this.subs = new Subscription();
    this.element = elementRef.nativeElement;
    this.subscribeEvents();
  }
  ngOnInit() {
    if (this.index === this.focusService.focused) {
      this.renderer.addClass(this.element, "k-focus");
    } else {
      this.renderer.removeClass(this.element, "k-focus");
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.focusService.onFocus.subscribe((index) => {
      if (this.index === index) {
        this.renderer.addClass(this.element, "k-focus");
        this.renderer.setAttribute(this.element, "tabidnex", "0");
        this.element.focus();
      } else {
        this.renderer.setAttribute(this.element, "tabidnex", "-1");
        this.renderer.removeClass(this.element, "k-focus");
      }
    }));
  }
};
FocusableDirective.ɵfac = function FocusableDirective_Factory(t) {
  return new (t || FocusableDirective)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
FocusableDirective.ɵdir = ɵɵdefineDirective({
  type: FocusableDirective,
  selectors: [["", "kendoButtonFocusable", ""]],
  inputs: {
    index: "index"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoButtonFocusable]"
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    index: [{
      type: Input
    }]
  });
})();
var TemplateContextDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  set templateContext(context) {
    if (this.insertedViewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
      this.insertedViewRef = void 0;
    }
    if (context.templateRef) {
      this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
    }
  }
};
TemplateContextDirective.ɵfac = function TemplateContextDirective_Factory(t) {
  return new (t || TemplateContextDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
TemplateContextDirective.ɵdir = ɵɵdefineDirective({
  type: TemplateContextDirective,
  selectors: [["", "templateContext", ""]],
  inputs: {
    templateContext: "templateContext"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateContextDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[templateContext]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    templateContext: [{
      type: Input
    }]
  });
})();
var ListComponent = class {
  constructor() {
    this.onItemClick = new EventEmitter();
    this.onItemBlur = new EventEmitter();
    this.sizeClass = "";
    validatePackage(packageMetadata3);
  }
  set size(size) {
    if (size) {
      this.sizeClass = `k-menu-group-${SIZES[size]}`;
    } else {
      this.sizeClass = "";
    }
  }
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  getIconClasses(dataItem) {
    const icon = dataItem.icon ? "k-icon k-i-" + dataItem.icon : void 0;
    const classes = {};
    classes[icon || dataItem.iconClass] = true;
    return classes;
  }
  onClick(index) {
    this.onItemClick.emit(index);
  }
  onBlur() {
    this.onItemBlur.emit();
  }
};
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)();
};
ListComponent.ɵcmp = ɵɵdefineComponent({
  type: ListComponent,
  selectors: [["kendo-button-list"]],
  inputs: {
    data: "data",
    textField: "textField",
    itemTemplate: "itemTemplate",
    size: "size"
  },
  outputs: {
    onItemClick: "onItemClick",
    onItemBlur: "onItemBlur"
  },
  decls: 2,
  vars: 2,
  consts: [["unselectable", "on", "role", "menu", 1, "k-group", "k-menu-group", "k-reset", 3, "ngClass"], ["role", "menuitem", "unselectable", "on", "kendoButtonFocusable", "", "tabindex", "-1", "class", "k-item k-menu-item", 3, "index", "click", "blur", 4, "ngFor", "ngForOf"], ["role", "menuitem", "unselectable", "on", "kendoButtonFocusable", "", "tabindex", "-1", 1, "k-item", "k-menu-item", 3, "index", "click", "blur"], [3, "ngIf"], [1, "k-link", "k-menu-link", 3, "ngClass"], [3, "templateContext"], [3, "name", "svgIcon", "customFontClass", 4, "ngIf"], ["class", "k-image", "alt", "", 3, "src", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [3, "name", "svgIcon", "customFontClass"], ["alt", "", 1, "k-image", 3, "src"], [1, "k-menu-link-text"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 0);
      ɵɵtemplate(1, ListComponent_li_1_Template, 3, 4, "li", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.sizeClass);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.data);
    }
  },
  dependencies: [IconWrapperComponent, NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-button-list",
      template: `
        <ul class="k-group k-menu-group k-reset" [ngClass]="sizeClass" unselectable="on" role="menu">
            <li role="menuitem"
                unselectable="on"
                kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                tabindex="-1"
                class="k-item k-menu-item"
                (click)="$event.stopImmediatePropagation(); onClick(index);"
                (blur)="onBlur()"
                [attr.aria-disabled]="dataItem.disabled ? true : false">
                <ng-template [ngIf]="itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <ng-template
                            [templateContext]="{ templateRef: itemTemplate?.templateRef, $implicit: dataItem }"
                        ></ng-template>
                    </span>
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <kendo-icon-wrapper
                            *ngIf="dataItem.icon || dataItem.iconClass || dataItem.svgIcon"
                            [name]="dataItem.icon"
                            [svgIcon]="dataItem.svgIcon"
                            [customFontClass]="dataItem.iconClass"
                        ></kendo-icon-wrapper>
                        <img
                            *ngIf="dataItem.imageUrl"
                            class="k-image"
                            [src]="dataItem.imageUrl"
                            alt=""
                        >
                        <span *ngIf="getText(dataItem)" class="k-menu-link-text">
                            {{ getText(dataItem) }}
                        </span>
                    </span>
                </ng-template>
            </li>
        </ul>
    `
    }]
  }], function() {
    return [];
  }, {
    data: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    onItemBlur: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var EXPORTED_DIRECTIVES = [ListComponent, FocusableDirective, ButtonItemTemplateDirective, TemplateContextDirective];
var ListModule = class {
};
ListModule.ɵfac = function ListModule_Factory(t) {
  return new (t || ListModule)();
};
ListModule.ɵmod = ɵɵdefineNgModule({
  type: ListModule,
  declarations: [ListComponent, FocusableDirective, ButtonItemTemplateDirective, TemplateContextDirective],
  imports: [CommonModule, IconsModule],
  exports: [ListComponent, FocusableDirective, ButtonItemTemplateDirective, TemplateContextDirective]
});
ListModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListModule, [{
    type: NgModule,
    args: [{
      declarations: [EXPORTED_DIRECTIVES],
      exports: [EXPORTED_DIRECTIVES],
      imports: [CommonModule, IconsModule]
    }]
  }], null, null);
})();
var KeyEvents;
(function(KeyEvents2) {
  KeyEvents2[KeyEvents2["keydown"] = 0] = "keydown";
  KeyEvents2[KeyEvents2["keypress"] = 1] = "keypress";
  KeyEvents2[KeyEvents2["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));
var NavigationAction;
(function(NavigationAction2) {
  NavigationAction2[NavigationAction2["Undefined"] = 0] = "Undefined";
  NavigationAction2[NavigationAction2["Open"] = 1] = "Open";
  NavigationAction2[NavigationAction2["Close"] = 2] = "Close";
  NavigationAction2[NavigationAction2["Enter"] = 3] = "Enter";
  NavigationAction2[NavigationAction2["EnterPress"] = 4] = "EnterPress";
  NavigationAction2[NavigationAction2["EnterUp"] = 5] = "EnterUp";
  NavigationAction2[NavigationAction2["Tab"] = 6] = "Tab";
  NavigationAction2[NavigationAction2["Esc"] = 7] = "Esc";
  NavigationAction2[NavigationAction2["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));
var NAVIGATION_CONFIG = new InjectionToken("navigation.config");
var NavigationService = class {
  constructor(config) {
    this.navigate = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.enter = new EventEmitter();
    this.enterpress = new EventEmitter();
    this.enterup = new EventEmitter();
    this.tab = new EventEmitter();
    this.esc = new EventEmitter();
    this.useLeftRightArrows = config.useLeftRightArrows;
  }
  process(args) {
    const keyCode = args.keyCode;
    const keyEvent = args.keyEvent;
    let index;
    let action = NavigationAction.Undefined;
    if (keyEvent === KeyEvents.keyup) {
      if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.EnterUp;
      }
    } else {
      if (args.altKey && keyCode === Keys.ArrowDown) {
        action = NavigationAction.Open;
      } else if (args.altKey && keyCode === Keys.ArrowUp) {
        action = NavigationAction.Close;
      } else if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.Enter;
      } else if (keyCode === Keys.Escape) {
        action = NavigationAction.Esc;
      } else if (keyCode === Keys.Tab) {
        action = NavigationAction.Tab;
      } else if (keyCode === Keys.ArrowUp || this.useLeftRightArrows && keyCode === Keys.ArrowLeft) {
        const step = args.flipNavigation ? 1 : -1;
        const start = args.flipNavigation ? args.min : args.max;
        const end = args.flipNavigation ? args.max : args.min;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.ArrowDown || this.useLeftRightArrows && keyCode === Keys.ArrowRight) {
        const step = args.flipNavigation ? -1 : 1;
        const start = args.flipNavigation ? args.max : args.min;
        const end = args.flipNavigation ? args.min : args.max;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.Home) {
        index = args.min;
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.End) {
        index = args.max;
        action = NavigationAction.Navigate;
      }
    }
    if (action !== NavigationAction.Undefined) {
      this[NavigationAction[action].toLowerCase()].emit({
        index,
        target: args.target
      });
    }
    return action;
  }
  isEnterOrSpace(keyCode) {
    return keyCode === Keys.Enter || keyCode === Keys.Space;
  }
  next(args) {
    if (!isPresent3(args.current)) {
      return args.start;
    } else {
      return args.current !== args.end ? args.current + args.step : args.end;
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(t) {
  return new (t || NavigationService)(ɵɵinject(NAVIGATION_CONFIG));
};
NavigationService.ɵprov = ɵɵdefineInjectable({
  token: NavigationService,
  factory: NavigationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NAVIGATION_CONFIG]
      }]
    }];
  }, null);
})();
var PopupContainerService = class {
};
PopupContainerService.ɵfac = function PopupContainerService_Factory(t) {
  return new (t || PopupContainerService)();
};
PopupContainerService.ɵprov = ɵɵdefineInjectable({
  token: PopupContainerService,
  factory: PopupContainerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupContainerService, [{
    type: Injectable
  }], null, null);
})();
var ListButton = class {
  constructor(focusService, navigationService, wrapperRef, _zone, popupService, elRef, localization, cdr, containerService) {
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapperRef = wrapperRef;
    this._zone = _zone;
    this.popupService = popupService;
    this.elRef = elRef;
    this.cdr = cdr;
    this.containerService = containerService;
    this._open = false;
    this._disabled = false;
    this._active = false;
    this._popupSettings = {
      animate: true,
      popupClass: ""
    };
    this.listId = guid();
    this._isFocused = false;
    this.subs = new Subscription();
    this.popupSubs = new Subscription();
    this.tabIndex = 0;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.isClosePrevented = false;
    validatePackage(packageMetadata3);
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapper = wrapperRef.nativeElement;
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.subscribeEvents();
  }
  /**
   * Sets the disabled state of the DropDownButton.
   */
  set disabled(value) {
    if (value && this.openState) {
      this.openState = false;
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.containerService.container : appendTo;
  }
  /**
   * Configures the popup of the DropDownButton.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  ngOnChanges(changes) {
    if (isChanged("popupSettings", changes) && isPresent3(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  get popupClasses() {
    const popupClasses = ["k-menu-popup"];
    if (this._popupSettings.popupClass) {
      popupClasses.push(this._popupSettings.popupClass);
    }
    return popupClasses.join(" ");
  }
  get openState() {
    return this._open;
  }
  /**
   * @hidden
   */
  set openState(open) {
    if (this.disabled) {
      return;
    }
    this._open = open;
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this._open;
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (this._disabled) {
      return;
    }
    this._toggle(!this.openState, true);
    if (!this.isClosePrevented) {
      this.focusService.focus(this.openState ? 0 : -1);
    }
  }
  /**
   * @hidden
   */
  onItemClick(index) {
    this.emitItemClickHandler(index);
    this.togglePopupVisibility();
    if (isDocumentAvailable() && !this.isClosePrevented) {
      this.focusButton();
    }
  }
  ngOnDestroy() {
    this.openState = false;
    this.subs.unsubscribe();
    this.destroyPopup();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscribeListItemFocusEvent();
    this.subscribeComponentBlurredEvent();
    this.subscribeNavigationEvents();
  }
  subscribeListItemFocusEvent() {
    this.subs.add(this.focusService.onFocus.subscribe(() => {
      this._isFocused = true;
    }));
  }
  subscribeComponentBlurredEvent() {
    this._zone.runOutsideAngular(() => {
      this.subs.add(this.navigationService.tab.pipe(filter(() => this._isFocused), tap(() => this.focusButton())).subscribe(this.handleTab.bind(this)));
      this.subs.add(fromEvent(document, "click").pipe(filter((event) => !this.wrapperContains(event.target)), filter(() => this._isFocused)).subscribe(() => this._zone.run(() => this.blurWrapper())));
    });
  }
  subscribeNavigationEvents() {
    this.subs.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subs.add(this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this)));
    this.subs.add(this.navigationService.open.subscribe(this.onNavigationOpen.bind(this)));
    this.subs.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  /**
   * Toggles the visibility of the popup.
   * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
   *
   * @param open - The state of the popup.
   */
  toggle(open) {
    if (this.disabled) {
      return;
    }
    const value = open === void 0 ? !this.openState : open;
    this._toggle(value, false);
  }
  /**
   * @hidden
   */
  keyDownHandler(event, isHost) {
    this.keyHandler(event, null, isHost);
  }
  /**
   * @hidden
   */
  keyUpHandler(event) {
    this.keyHandler(event, KeyEvents.keyup);
  }
  /**
   * @hidden
   */
  keyHandler(event, keyEvent, isHost) {
    if (this._disabled) {
      return;
    }
    const eventData = event;
    if (!isHost) {
      eventData.stopImmediatePropagation();
    }
    const focused = this.focusService.focused || 0;
    const action = this.navigationService.process({
      altKey: eventData.altKey,
      current: focused,
      keyCode: eventData.keyCode,
      keyEvent,
      max: this._data ? this._data.length - 1 : 0,
      min: 0,
      target: event.target
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab && (action !== NavigationAction.Enter || action === NavigationAction.Enter && this.openState)) {
      if (!(event.keyCode === Keys.Space && action === NavigationAction.EnterUp)) {
        eventData.preventDefault();
      }
    }
  }
  emitItemClickHandler(index) {
    const dataItem = this._data[index];
    if (this._itemClick && !dataItem.disabled) {
      this._itemClick.emit(dataItem);
    }
    if (dataItem && dataItem.click && !dataItem.disabled) {
      dataItem.click(dataItem);
    }
    this.focusService.focus(index);
  }
  focusWrapper() {
    if (this.openState) {
      this.togglePopupVisibility();
      this.focusButton();
    }
  }
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  blurWrapper(emit = true) {
    if (!this._isFocused) {
      return;
    }
    if (this.openState) {
      this.togglePopupVisibility();
    }
    this._isFocused = false;
    if (emit) {
      this._blur.emit();
      this.cdr.markForCheck();
    }
  }
  focusButton() {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }
  handleTab() {
    this.blurWrapper();
  }
  onNavigationEnterUp() {
    if (!this._disabled && !this.openState) {
      this._active = false;
    }
    if (this.openState) {
      const focused = this.focusService.focused;
      if (isPresent3(focused) && focused !== -1) {
        this.emitItemClickHandler(focused);
      }
    }
    this.togglePopupVisibility();
    if (!this.openState && isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  onNavigationOpen() {
    if (!this._disabled && !this.openState) {
      this.togglePopupVisibility();
    }
  }
  onNavigationClose() {
    if (this.openState && !this.isClosePrevented) {
      this.togglePopupVisibility();
      if (isDocumentAvailable()) {
        this.button.nativeElement.focus();
      }
    }
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  _toggle(open, emitEvent) {
    if (this.openState === open) {
      return;
    }
    const eventArgs = new PreventableEvent2();
    if (emitEvent) {
      if (open && !this.openState) {
        this.open.emit(eventArgs);
      } else if (!open && this.openState) {
        this.close.emit(eventArgs);
      }
      if (eventArgs.isDefaultPrevented()) {
        this.isClosePrevented = true;
        return;
      }
    }
    this.openState = open;
    this.destroyPopup();
    if (this.openState) {
      this.createPopup();
    }
  }
  createPopup() {
    this.popupRef = this.popupService.open({
      anchor: this.elRef,
      anchorAlign: this.anchorAlign,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.containerService.template,
      popupAlign: this.popupAlign,
      popupClass: this.popupClasses
    });
    this.popupSubs = this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.togglePopupVisibility();
    });
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.popupSubs.unsubscribe();
      this.isClosePrevented = false;
    }
  }
};
ListButton.ɵfac = function ListButton_Factory(t) {
  return new (t || ListButton)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService));
};
ListButton.ɵcmp = ɵɵdefineComponent({
  type: ListButton,
  selectors: [["ng-component"]],
  inputs: {
    disabled: "disabled",
    tabIndex: "tabIndex",
    buttonClass: "buttonClass",
    popupSettings: "popupSettings"
  },
  outputs: {
    open: "open",
    close: "close"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function ListButton_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListButton, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }];
  }, {
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    popupSettings: [{
      type: Input
    }]
  });
})();
var Messages = class extends ComponentMessages {
};
Messages.ɵfac = /* @__PURE__ */ (() => {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(t) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(Messages)))(t || Messages);
  };
})();
Messages.ɵdir = ɵɵdefineDirective({
  type: Messages,
  selectors: [["kendo-splitbutton-messages-base"]],
  inputs: {
    splitButtonLabel: "splitButtonLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-splitbutton-messages-base"
    }]
  }], null, {
    splitButtonLabel: [{
      type: Input
    }]
  });
})();
var LocalizedSplitButtonMessagesDirective = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedSplitButtonMessagesDirective.ɵfac = function LocalizedSplitButtonMessagesDirective_Factory(t) {
  return new (t || LocalizedSplitButtonMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedSplitButtonMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedSplitButtonMessagesDirective,
  selectors: [["", "kendoSplitButtonLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSplitButtonMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
      }],
      selector: "[kendoSplitButtonLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var NAVIGATION_SETTINGS$2 = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER$2 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$2
};
var DEFAULT_ROUNDED$2 = "medium";
var DEFAULT_FILL_MODE$2 = "solid";
var SplitButtonComponent = class extends ListButton {
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, renderer, containerService) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.localization = localization;
    this.renderer = renderer;
    this.text = "";
    this.icon = "";
    this.type = "button";
    this.imageUrl = "";
    this.size = "medium";
    this.themeColor = "base";
    this.tabIndex = 0;
    this.arrowButtonIcon = "caret-alt-down";
    this.arrowButtonSvgIcon = caretAltDownIcon;
    this.buttonClick = new EventEmitter();
    this.itemClick = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.activeArrow = false;
    this.listId = guid();
    this.buttonText = "";
    this.arrowButtonClicked = false;
    this._rounded = DEFAULT_ROUNDED$2;
    this._fillMode = DEFAULT_FILL_MODE$2;
    this._buttonAttributes = null;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
  }
  /**
   * The rounded property specifies the border radius of the SplitButton
   * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-rounded)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the SplitButton
   * ([see example]({% slug api_buttons_splitbuttoncomponent %}#toc-fillMode)).
   *
   * The available values are:
   * * `solid` (default)
   * * `flat`
   * * `outline`
   * * `link`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
    this._fillMode = fillMode === "clear" ? "flat" : newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * When set to `true`, disables a SplitButton item
   * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
   */
  set disabled(value) {
    if (this.isOpen) {
      this.toggle(false);
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Configures the popup of the SplitButton.
   *
   * The available options are:
   * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
   * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
   * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
   * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the data of the SplitButton.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    if (!this._data) {
      this.data = [];
    }
    return this._data;
  }
  /**
   * Sets attributes to the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * @hidden
   */
  get hasContent() {
    return this.button?.nativeElement.childElementCount > 0;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  set isFocused(value) {
    this._isFocused = value;
  }
  get isFocused() {
    return this._isFocused && !this._disabled && isDocumentAvailable() && this.wrapperContains(document.activeElement);
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get ariaLabel() {
    const localizationMsg = this.localization.get("splitButtonLabel") || "";
    return replaceMessagePlaceholder(localizationMsg, "buttonText", this.buttonText);
  }
  /**
   * @hidden
   */
  onButtonFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  onArrowButtonClick() {
    this.togglePopupVisibility();
    this.arrowButtonClicked = false;
  }
  /**
   * @hidden
   */
  toggleButtonActiveState(enable) {
    this._active = enable;
  }
  /**
   * @hidden
   */
  toggleArrowButtonActiveState(enable) {
    this.arrowButtonClicked = true;
    this.activeArrow = enable;
  }
  /**
   * @hidden
   */
  onButtonClick() {
    this.buttonClick.emit();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.isOpen && !this.arrowButtonClicked) {
      this.blurWrapper();
    }
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space) {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this._active = false;
    if (event.keyCode !== Keys.Space) {
      this.keyUpHandler(event);
    }
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.containerService.container = this.containerRef;
    this.containerService.template = this.popupTemplate;
    this.updateButtonText();
    this.handleClasses(this.rounded, "rounded");
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("text")) {
      this.updateButtonText();
    }
    if (anyChanged(["text", "icon", "svgIcon", "iconClass", "imageUrl"], changes)) {
      this.toggleButtonIconClass();
    }
    if (isChanged("popupSettings", changes) && isPresent3(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterUp(args) {
    if (args.target !== this.button.nativeElement) {
      super.onNavigationEnterUp();
    }
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (isDocumentAvailable() && this.wrapperContains(document.activeElement) && this.arrowButtonClicked) {
      this.button.nativeElement.focus();
    }
    super.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent3(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get isIconButton() {
    const hasIcon = this.icon || this.svgIcon || this.iconClass || this.imageUrl;
    const hasTextContent = isDocumentAvailable() && this.button?.nativeElement.textContent.trim().length > 0;
    return hasIcon && !hasTextContent;
  }
  /**
   * Focuses the SplitButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the SplitButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this.openState;
  }
  updateButtonText() {
    if (isDocumentAvailable()) {
      const innerText = this.wrapper.innerText.split("\n").join("").trim();
      setTimeout(() => this.buttonText = innerText, 0);
    }
  }
  handleClasses(value, input) {
    const elem = this.wrapperRef.nativeElement;
    const classes = getStylingClasses("button", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  toggleButtonIconClass() {
    this.button.nativeElement.classList[this.isIconButton ? "add" : "remove"]("k-button-icon");
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button.nativeElement;
    if (isPresent3(this.buttonAttributes) && isPresent3(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent3(newButtonAttributes) && isPresent3(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
};
SplitButtonComponent.ɵfac = function SplitButtonComponent_Factory(t) {
  return new (t || SplitButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopupContainerService));
};
SplitButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitButtonComponent,
  selectors: [["kendo-splitbutton"]],
  contentQueries: function SplitButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  viewQuery: function SplitButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c6, 5, ElementRef);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.arrowButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function SplitButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keyup", function SplitButtonComponent_keyup_HostBindingHandler($event) {
        return ctx.keyup($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-focus", ctx.isFocused)("k-split-button", ctx.widgetClasses)("k-button-group", ctx.widgetClasses);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    type: "type",
    imageUrl: "imageUrl",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    disabled: "disabled",
    popupSettings: "popupSettings",
    tabIndex: "tabIndex",
    textField: "textField",
    data: "data",
    buttonClass: "buttonClass",
    arrowButtonClass: "arrowButtonClass",
    arrowButtonIcon: "arrowButtonIcon",
    arrowButtonSvgIcon: "arrowButtonSvgIcon",
    buttonAttributes: "buttonAttributes"
  },
  outputs: {
    buttonClick: "buttonClick",
    itemClick: "itemClick",
    onFocus: "focus",
    onBlur: "blur",
    open: "open",
    close: "close"
  },
  exportAs: ["kendoSplitButton"],
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.splitbutton"
  }, PopupContainerService]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  ngContentSelectors: _c12,
  decls: 12,
  vars: 32,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2020_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0 = goog.getMsg("{$interpolation}", {
        "interpolation": "�0�"
      }, {
        original_code: {
          "interpolation": "{{ '{buttonText} splitbutton' }}"
        }
      });
      i18n_0 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2020_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label:${"�0�"}:INTERPOLATION:`;
    }
    return [["kendoSplitButtonLocalizedMessages", "", 6, "splitButtonLabel"], ["splitButtonLabel", i18n_0], ["kendoButton", "", 3, "type", "tabindex", "disabled", "size", "rounded", "fillMode", "themeColor", "icon", "svgIcon", "iconClass", "imageUrl", "ngClass", "focus", "click", "blur", "mousedown", "mouseup"], ["button", ""], ["class", "k-button-text", 4, "ngIf"], ["kendoButton", "", "type", "button", "aria-hidden", "true", 1, "k-split-button-arrow", 3, "ngClass", "disabled", "icon", "svgIcon", "size", "rounded", "fillMode", "themeColor", "tabindex", "click", "mousedown", "mouseup"], ["arrowButton", ""], ["popupTemplate", ""], ["container", ""], [1, "k-button-text"], [3, "id", "data", "textField", "itemTemplate", "size", "onItemClick", "keydown", "keyup"]];
  },
  template: function SplitButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0, 0);
      ɵɵi18nAttributes(1, 1);
      ɵɵelementContainerEnd();
      ɵɵelementStart(2, "button", 2, 3);
      ɵɵlistener("focus", function SplitButtonComponent_Template_button_focus_2_listener($event) {
        return ctx.onButtonFocus($event);
      })("click", function SplitButtonComponent_Template_button_click_2_listener() {
        return ctx.onButtonClick();
      })("blur", function SplitButtonComponent_Template_button_blur_2_listener() {
        return ctx.onButtonBlur();
      })("mousedown", function SplitButtonComponent_Template_button_mousedown_2_listener() {
        return ctx.toggleButtonActiveState(true);
      })("mouseup", function SplitButtonComponent_Template_button_mouseup_2_listener() {
        return ctx.toggleButtonActiveState(false);
      });
      ɵɵtemplate(4, SplitButtonComponent_span_4_Template, 2, 1, "span", 4);
      ɵɵprojection(5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "button", 5, 6);
      ɵɵlistener("click", function SplitButtonComponent_Template_button_click_6_listener() {
        return ctx.onArrowButtonClick();
      })("mousedown", function SplitButtonComponent_Template_button_mousedown_6_listener() {
        return ctx.toggleArrowButtonActiveState(true);
      })("mouseup", function SplitButtonComponent_Template_button_mouseup_6_listener() {
        return ctx.toggleArrowButtonActiveState(false);
      });
      ɵɵelementEnd();
      ɵɵtemplate(8, SplitButtonComponent_ng_template_8_Template, 1, 6, "ng-template", null, 7, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(10, null, 8);
    }
    if (rf & 2) {
      ɵɵi18nExp("{buttonText} splitbutton");
      ɵɵi18nApply(1);
      ɵɵadvance(2);
      ɵɵclassProp("k-active", ctx.active);
      ɵɵproperty("type", ctx.type)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass);
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.openState)("aria-haspopup", "menu")("aria-owns", ctx.listId)("aria-label", ctx.ariaLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.text);
      ɵɵadvance(2);
      ɵɵclassProp("k-active", ctx.activeArrow);
      ɵɵproperty("ngClass", ctx.arrowButtonClass)("disabled", ctx.disabled)("icon", ctx.arrowButtonIcon)("svgIcon", ctx.arrowButtonSvgIcon)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("tabindex", -1);
    }
  },
  dependencies: [ButtonComponent, ListComponent, LocalizedSplitButtonMessagesDirective, NgClass, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.splitbutton"
      }, PopupContainerService],
      selector: "kendo-splitbutton",
      template: `
        <ng-container kendoSplitButtonLocalizedMessages
            i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
            splitButtonLabel="{{ '{buttonText} splitbutton' }}">
        </ng-container>
        <button
            kendoButton
            #button
            [type]="type"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [class.k-active]="active"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus($event)"
            (click)="onButtonClick()"
            (blur)="onButtonBlur()"
            (mousedown)="toggleButtonActiveState(true)"
            (mouseup)="toggleButtonActiveState(false)"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="'menu'"
            [attr.aria-owns]="listId"
            [attr.aria-label]="ariaLabel"
        >
            <span *ngIf="text" class="k-button-text">
                {{ text }}
            </span><ng-content></ng-content>
        </button>
        <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [svgIcon]="arrowButtonSvgIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            aria-hidden="true"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
        ></button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: PopupContainerService
    }];
  }, {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    arrowButtonClass: [{
      type: Input
    }],
    arrowButtonIcon: [{
      type: Input
    }],
    arrowButtonSvgIcon: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    arrowButton: [{
      type: ViewChild,
      args: ["arrowButton", {
        read: ElementRef
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    containerRef: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    isFocused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-split-button"]
    }, {
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var SplitButtonCustomMessagesComponent = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
SplitButtonCustomMessagesComponent.ɵfac = function SplitButtonCustomMessagesComponent_Factory(t) {
  return new (t || SplitButtonCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
SplitButtonCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitButtonCustomMessagesComponent,
  selectors: [["kendo-splitbutton-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function SplitButtonCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
      }],
      selector: "kendo-splitbutton-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SplitButtonModule = class {
};
SplitButtonModule.ɵfac = function SplitButtonModule_Factory(t) {
  return new (t || SplitButtonModule)();
};
SplitButtonModule.ɵmod = ɵɵdefineNgModule({
  type: SplitButtonModule,
  declarations: [SplitButtonComponent, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
  imports: [CommonModule, PopupModule, ButtonModule, ListModule],
  exports: [SplitButtonComponent, ListModule, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent]
});
SplitButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PopupModule, ButtonModule, ListModule], ListModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      declarations: [SplitButtonComponent, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
      exports: [SplitButtonComponent, ListModule, LocalizedSplitButtonMessagesDirective, SplitButtonCustomMessagesComponent],
      imports: [CommonModule, PopupModule, ButtonModule, ListModule]
    }]
  }], null, null);
})();
var NAVIGATION_SETTINGS$1 = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER$1 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$1
};
var DEFAULT_FILL_MODE$1 = "solid";
var DropDownButtonComponent = class extends ListButton {
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService, renderer) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.containerService = containerService;
    this.renderer = renderer;
    this.arrowIcon = false;
    this.icon = "";
    this.iconClass = "";
    this.imageUrl = "";
    this.size = "medium";
    this.rounded = "medium";
    this.themeColor = "base";
    this.itemClick = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.listId = guid();
    this.buttonId = guid();
    this._fillMode = DEFAULT_FILL_MODE$1;
    this._buttonAttributes = null;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
  }
  /**
   * Sets or gets the data of the DropDownButton.
   *
   * > The data has to be provided in an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    return this._data;
  }
  /**
   * The fillMode property specifies the background and border styles of the DropDownButton
   * ([see example]({% slug api_buttons_dropdownbuttoncomponent %}#toc-fillMode)).
   *
   * The available values are:
   * * `solid` (default)
   * * `flat`
   * * `outline`
   * * `link`
   * * `none`
   */
  set fillMode(fillMode) {
    this._fillMode = fillMode === "clear" ? "flat" : fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets attributes to the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  get focused() {
    return this._isFocused && !this._disabled;
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space || event.keyCode === Keys.Enter) {
      this._active = true;
    }
    if (event.keyCode === Keys.Enter) {
      event.preventDefault();
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this.keyUpHandler(event);
    this._active = false;
  }
  /**
   * @hidden
   */
  mousedown(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = true;
  }
  /**
   * @hidden
   */
  mouseup(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = false;
  }
  /**
   * @hidden
   */
  openPopup() {
    this._isFocused = true;
    this.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.openState) {
      this.blurWrapper();
    }
  }
  /**
   * Focuses the DropDownButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element) || this.popupRef && this.popupRef.popupElement.contains(element);
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button?.nativeElement;
    if (isPresent(this.buttonAttributes) && isPresent(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent(newButtonAttributes) && isPresent(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
};
DropDownButtonComponent.ɵfac = function DropDownButtonComponent_Factory(t) {
  return new (t || DropDownButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService), ɵɵdirectiveInject(Renderer2));
};
DropDownButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: DropDownButtonComponent,
  selectors: [["kendo-dropdownbutton"]],
  contentQueries: function DropDownButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  viewQuery: function DropDownButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5, ElementRef);
      ɵɵviewQuery(_c9, 5);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function DropDownButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function DropDownButtonComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      })("keyup", function DropDownButtonComponent_keyup_HostBindingHandler($event) {
        return ctx.keyup($event);
      })("mousedown", function DropDownButtonComponent_mousedown_HostBindingHandler($event) {
        return ctx.mousedown($event);
      })("mouseup", function DropDownButtonComponent_mouseup_HostBindingHandler($event) {
        return ctx.mouseup($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-focus", ctx.focused)("k-dropdown-button", ctx.widgetClasses);
    }
  },
  inputs: {
    arrowIcon: "arrowIcon",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    imageUrl: "imageUrl",
    textField: "textField",
    data: "data",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor",
    buttonAttributes: "buttonAttributes"
  },
  outputs: {
    itemClick: "itemClick",
    onFocus: "focus",
    onBlur: "blur"
  },
  exportAs: ["kendoDropDownButton"],
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.dropdownbutton"
  }, PopupContainerService]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c12,
  decls: 7,
  vars: 19,
  consts: [["kendoButton", "", "type", "button", 3, "id", "tabindex", "disabled", "icon", "svgIcon", "arrowIcon", "iconClass", "imageUrl", "ngClass", "size", "rounded", "fillMode", "themeColor", "click", "focus", "blur"], ["button", ""], ["popupTemplate", ""], ["container", ""], [3, "id", "data", "textField", "itemTemplate", "size", "onItemClick", "keydown", "keyup"], ["buttonList", ""]],
  template: function DropDownButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 0, 1);
      ɵɵlistener("click", function DropDownButtonComponent_Template_button_click_0_listener() {
        return ctx.openPopup();
      })("focus", function DropDownButtonComponent_Template_button_focus_0_listener($event) {
        return ctx.handleFocus($event);
      })("blur", function DropDownButtonComponent_Template_button_blur_0_listener() {
        return ctx.onButtonBlur();
      });
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, DropDownButtonComponent_ng_template_3_Template, 2, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(5, null, 3);
    }
    if (rf & 2) {
      ɵɵclassProp("k-active", ctx.active);
      ɵɵproperty("id", ctx.buttonId)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("arrowIcon", ctx.arrowIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.fillMode ? ctx.themeColor : null);
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.openState)("aria-haspopup", "menu")("aria-controls", ctx.listId);
    }
  },
  dependencies: [ButtonComponent, ListComponent, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdownbutton"
      }, PopupContainerService],
      selector: "kendo-dropdownbutton",
      template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [arrowIcon]="arrowIcon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="fillMode ? themeColor : null"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="'menu'"
            [attr.aria-controls]="listId"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }, {
      type: Renderer2
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-dropdown-button"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    buttonList: [{
      type: ViewChild,
      args: ["buttonList"]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    mousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    mouseup: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }]
  });
})();
var DropDownButtonModule = class {
};
DropDownButtonModule.ɵfac = function DropDownButtonModule_Factory(t) {
  return new (t || DropDownButtonModule)();
};
DropDownButtonModule.ɵmod = ɵɵdefineNgModule({
  type: DropDownButtonModule,
  declarations: [DropDownButtonComponent],
  imports: [CommonModule, PopupModule, ListModule, ButtonModule],
  exports: [DropDownButtonComponent, ListModule]
});
DropDownButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PopupModule, ListModule, ButtonModule], ListModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonModule, [{
    type: NgModule,
    args: [{
      declarations: [DropDownButtonComponent],
      exports: [DropDownButtonComponent, ListModule],
      imports: [CommonModule, PopupModule, ListModule, ButtonModule]
    }]
  }], null, null);
})();
var DEFAULT_SIZE$1 = "medium";
var DEFAULT_ROUNDED$1 = "medium";
var DEFAULT_THEME_COLOR$1 = "base";
var DEFAULT_FILL_MODE = "solid";
var ChipComponent = class {
  constructor(element, renderer, ngZone, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    this.selected = false;
    this.removable = false;
    this.hasMenu = false;
    this.disabled = false;
    this.remove = new EventEmitter();
    this.menuToggle = new EventEmitter();
    this.contentClick = new EventEmitter();
    this.tabIndex = 0;
    this.hostClass = true;
    this.defaultRemoveIcon = xCircleIcon;
    this.defaultMenuIcon = moreVerticalIcon;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._themeColor = "base";
    this.focused = false;
    this.subs = new Subscription();
    validatePackage(packageMetadata3);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the padding of the Chip
   * ([see example]({% slug appearance_chip %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the Chip
   * ([see example]({% slug appearance_chip %}#toc-rounded)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the Chip
   * ([see example]({% slug appearance_chip %}#toc-fillMode)).
   *
   * The possible values are:
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * The Chip allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color while also amending the text color accordingly
   * ([see example]({% slug appearance_chip %}#toc-themeColor)).
   *
   * The possible values are:
   * * `base` (default)
   * * `info`
   * * `success`
   * * `warning`
   * * `error`
   * * `none`
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$1;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  get hasIconClass() {
    return Boolean(this.icon || this.iconClass || this.avatarClass);
  }
  get disabledClass() {
    return this.disabled;
  }
  get selectedClass() {
    return this.selected;
  }
  get focusedClass() {
    return this.focused;
  }
  ngOnInit() {
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.renderer.setAttribute(this.element.nativeElement, "role", "button");
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(changes) {
    if (changes && changes["selected"]) {
      const hasAriaSelected = this.element.nativeElement.hasAttribute("aria-selected");
      if (!hasAriaSelected) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-pressed", `${this.selected}`);
      }
    }
  }
  ngAfterViewInit() {
    const chip = this.element.nativeElement;
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers(chip);
  }
  /**
   * @hidden
   */
  get kendoIconClass() {
    this.verifyIconSettings([this.iconClass, this.avatarClass]);
    return `k-i-${this.icon}`;
  }
  /**
   * @hidden
   */
  get customIconClass() {
    this.verifyIconSettings([this.icon, this.avatarClass]);
    return this.iconClass;
  }
  /**
   * @hidden
   */
  get chipAvatarClass() {
    this.verifyIconSettings([this.icon, this.iconClass]);
    return this.avatarClass;
  }
  /**
   * @hidden
   */
  get removeIconClass() {
    return this.removeIcon ? this.removeIcon : "k-i-x-circle";
  }
  /**
   * Focuses the Chip component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Chip component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  onRemoveClick(e) {
    if (this.removable) {
      this.remove.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  /**
   * @hidden
   */
  onMenuClick(e) {
    if (this.hasMenu) {
      this.menuToggle.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  attachElementEventHandlers(chip) {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chip, "focus", () => {
        this.renderer.addClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "blur", () => {
        this.renderer.removeClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "click", (e) => {
        const isActionClicked = closest(e.target, ".k-chip-action");
        if (!isActionClicked) {
          this.ngZone.run(() => {
            this.contentClick.emit({
              sender: this,
              originalEvent: e
            });
          });
        }
      }));
      this.subs.add(this.renderer.listen(chip, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  /**
   * @hidden
   */
  verifyIconSettings(iconsToCheck) {
    if (isDevMode()) {
      if (iconsToCheck.filter((icon) => icon !== null && icon !== void 0).length > 0) {
        this.renderer.removeClass(this.element.nativeElement, "k-chip-has-icon");
        throw new Error("Invalid configuration: Having multiple icons is not supported. Only a single icon on a chip can be displayed.");
      }
    }
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element.nativeElement;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("chip", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    if (this.disabled) {
      return;
    }
    if (isEnterOrSpace) {
      this.ngZone.run(() => {
        this.contentClick.emit({
          sender: this,
          originalEvent: e
        });
      });
    } else if (isDeleteOrBackspace && this.removable) {
      this.ngZone.run(() => {
        this.remove.emit({
          sender: this,
          originalEvent: e
        });
      });
    }
  }
};
ChipComponent.ɵfac = function ChipComponent_Factory(t) {
  return new (t || ChipComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
};
ChipComponent.ɵcmp = ɵɵdefineComponent({
  type: ChipComponent,
  selectors: [["kendo-chip"]],
  hostVars: 13,
  hostBindings: function ChipComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.disabledClass)("dir", ctx.direction);
      ɵɵclassProp("k-chip", ctx.hostClass)("k-chip-has-icon", ctx.hasIconClass)("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass)("k-focus", ctx.focusedClass);
    }
  },
  inputs: {
    label: "label",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    avatarClass: "avatarClass",
    selected: "selected",
    removable: "removable",
    removeIcon: "removeIcon",
    removeSvgIcon: "removeSvgIcon",
    hasMenu: "hasMenu",
    menuIcon: "menuIcon",
    menuSvgIcon: "menuSvgIcon",
    disabled: "disabled",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    themeColor: "themeColor"
  },
  outputs: {
    remove: "remove",
    menuToggle: "menuToggle",
    contentClick: "contentClick"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chip"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c12,
  decls: 9,
  vars: 7,
  consts: [["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass", 4, "ngIf"], ["class", "k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full", 4, "ngIf"], [1, "k-chip-content"], ["class", "k-chip-label", 4, "ngIf"], [4, "ngIf"], [1, "k-chip-actions"], ["class", "k-chip-action", 3, "click", 4, "ngIf"], ["class", "k-chip-action k-chip-remove-action", 3, "click", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass"], [1, "k-chip-avatar", "k-avatar", "k-avatar-md", "k-avatar-solid", "k-avatar-solid-primary", "k-rounded-full"], [1, "k-avatar-image", 3, "ngClass"], [1, "k-chip-label"], [1, "k-chip-action", 3, "click"], ["name", "more-vertical", "size", "small", 3, "svgIcon", "customFontClass"], [1, "k-chip-action", "k-chip-remove-action", 3, "click"], ["name", "x-circle", "size", "small", 3, "svgIcon", "customFontClass"]],
  template: function ChipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ChipComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ChipComponent_kendo_icon_wrapper_1_Template, 1, 1, "kendo-icon-wrapper", 1)(2, ChipComponent_span_2_Template, 2, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵtemplate(4, ChipComponent_span_4_Template, 2, 1, "span", 4)(5, ChipComponent_ng_content_5_Template, 1, 0, "ng-content", 5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "span", 6);
      ɵɵtemplate(7, ChipComponent_span_7_Template, 2, 2, "span", 7)(8, ChipComponent_span_8_Template, 2, 2, "span", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.avatarClass);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.label);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.label);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hasMenu);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.removable);
    }
  },
  dependencies: [IconWrapperComponent, NgIf, NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chip",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            size="small"
            innerCssClass="k-chip-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>

        <kendo-icon-wrapper
            *ngIf="iconClass"
            size="small"
            innerCssClass="k-chip-icon"
            [customFontClass]="customIconClass"></kendo-icon-wrapper>

        <span
            *ngIf="avatarClass"
            class="k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full">
            <span class="k-avatar-image" [ngClass]="chipAvatarClass"></span>
        </span>

        <span class="k-chip-content">
            <span class="k-chip-label" *ngIf="label">
                {{ label }}
            </span>
            <ng-content *ngIf="!label"></ng-content>
        </span>

        <span class="k-chip-actions">
            <span class="k-chip-action"
                *ngIf="hasMenu"
                (click)="onMenuClick($event)">
                <kendo-icon-wrapper
                    name="more-vertical"
                    size="small"
                    [svgIcon]="defaultMenuIcon || menuSvgIcon"
                    [customFontClass]="menuIcon"></kendo-icon-wrapper>
            </span>
            <span class="k-chip-action k-chip-remove-action"
                *ngIf="removable"
                (click)="onRemoveClick($event)">
                <kendo-icon-wrapper
                    name="x-circle"
                    size="small"
                    [svgIcon]="removeSvgIcon || defaultRemoveIcon"
                    [customFontClass]="removeIcon"></kendo-icon-wrapper>
            </span>
        </span>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chip"
      }]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    avatarClass: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    removeSvgIcon: [{
      type: Input
    }],
    hasMenu: [{
      type: Input
    }],
    menuIcon: [{
      type: Input
    }],
    menuSvgIcon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    remove: [{
      type: Output
    }],
    menuToggle: [{
      type: Output
    }],
    contentClick: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip"]
    }],
    hasIconClass: [{
      type: HostBinding,
      args: ["class.k-chip-has-icon"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var ChipListComponent = class {
  constructor(localizationService, renderer, element, ngZone) {
    this.localizationService = localizationService;
    this.renderer = renderer;
    this.element = element;
    this.ngZone = ngZone;
    this.hostClass = true;
    this.orientation = "horizontal";
    this.selection = "none";
    this.selectedChange = new EventEmitter();
    this.remove = new EventEmitter();
    this.role = "listbox";
    this._size = "medium";
    this.subs = new Subscription();
    this._navigable = false;
    this.currentActiveIndex = 0;
    validatePackage(packageMetadata3);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the gap between the Chips in the ChipList
   * ([see example]({% slug appearance_chiplist %}#toc-size)).
   *
   * The possible values are:
   * * `'small'`
   * * `'medium'` (default)
   * * `'large'`
   * * `none`
   */
  set size(size) {
    const sizeValue = size ? size : "medium";
    this.handleClasses(sizeValue, "size");
    this._size = sizeValue;
  }
  get size() {
    return this._size;
  }
  get single() {
    return this.selection === "single";
  }
  get multiple() {
    return this.selection === "multiple";
  }
  /**
   * @hidden
   */
  onClick($event) {
    const target = $event.target;
    const isRemoveClicked = closest(target, ".k-chip-remove-action");
    const clickedChip = closest(target, ".k-chip");
    const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
    this.currentActiveIndex = this.chips.toArray().indexOf(chip);
    chip && chip.focus();
    if (chip && this.navigable) {
      this.chips.forEach((c) => {
        this.renderer.setAttribute(c.element.nativeElement, "tabindex", "-1");
      });
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
    }
    if (isRemoveClicked && clickedChip) {
      const removeEventArgs = {
        sender: this,
        originalEvent: $event,
        removedChip: chip
      };
      this.remove.emit(removeEventArgs);
    }
    if (this.selection !== "none" && clickedChip && !isRemoveClicked) {
      this.setSelection(chip);
    }
  }
  /**
   * When set to `true`, keyboard navigation is available through arrow keys and roving tabindex. Otherwise, all chips
   * are part of the default tabbing sequence of the page.
   *
   * @default false
   */
  set navigable(value) {
    this._navigable = value;
    this.chips?.forEach((c) => this.renderer.setAttribute(c.element.nativeElement, "tabindex", value ? "-1" : "0"));
    this.chips?.first && this.renderer.setAttribute(this.chips.first.element.nativeElement, "tabindex", "0");
  }
  get navigable() {
    return this._navigable;
  }
  ngOnInit() {
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers();
    this.updateChips();
  }
  ngAfterContentInit() {
    this.subs.add(this.chips?.changes.subscribe(() => this.updateChips()));
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subs.unsubscribe();
  }
  selectedChips() {
    return this.chips.reduce((acc, cur, idx2) => {
      return cur.selected ? acc.concat(idx2) : acc;
    }, []);
  }
  /**
   * Updates the selection on click of a Chip. Emits events.
   */
  setSelection(chip) {
    if (this.selection === "single") {
      this.clearSelection(chip);
    }
    chip.selected = !chip.selected;
    const chipEl = chip.element.nativeElement;
    this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
    this.selectedChange.emit(this.selectedChips());
  }
  clearSelection(chip) {
    this.chips.forEach((c) => {
      if (chip !== c) {
        c.selected = false;
        this.renderer.setAttribute(c.element.nativeElement, "aria-selected", "false");
      }
    });
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip-list", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  attachElementEventHandlers() {
    const chiplist = this.element.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chiplist, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    const isLeftArrow = e.keyCode === Keys.ArrowLeft;
    const isRightArrow = e.keyCode === Keys.ArrowRight;
    if (isEnterOrSpace) {
      const target = e.target;
      const clickedChip = closest(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      this.currentActiveIndex = this.chips.toArray().findIndex((chip2) => clickedChip === chip2.element.nativeElement);
      if (this.selection !== "none" && clickedChip) {
        this.ngZone.run(() => {
          this.setSelection(chip);
        });
      }
    } else if (isDeleteOrBackspace) {
      const target = e.target;
      const clickedChip = closest(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      if (clickedChip) {
        const removeEventArgs = {
          sender: this,
          originalEvent: e,
          removedChip: chip
        };
        this.ngZone.run(() => {
          this.remove.emit(removeEventArgs);
        });
      }
    } else if (isLeftArrow) {
      this.handleArrowKeys("left");
    } else if (isRightArrow) {
      this.handleArrowKeys("right");
    }
  }
  handleArrowKeys(direction) {
    if (!this.navigable) {
      return;
    }
    const directionDelta = direction === "left" ? -1 : 1;
    this.currentActiveIndex = this.currentActiveIndex + directionDelta;
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = 0;
    } else if (this.currentActiveIndex < 0) {
      this.currentActiveIndex = this.chips.length - 1;
    }
    this.chips.forEach((chip, idx2) => {
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "-1");
      if (idx2 === this.currentActiveIndex) {
        this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
        chip.focus();
      }
    });
  }
  updateChips() {
    this.normalizeActiveIndex();
    this.chips.forEach((chip, idx2) => {
      const chipEl = chip.element.nativeElement;
      this.renderer.removeAttribute(chipEl, "aria-pressed");
      this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
      this.role === "listbox" && this.renderer.setAttribute(chipEl, "role", "option");
      if (!this.navigable) {
        return;
      }
      this.renderer.setAttribute(chipEl, "tabindex", "-1");
      if (idx2 === this.currentActiveIndex) {
        this.renderer.setAttribute(chipEl, "tabindex", "0");
        if (isDocumentAvailable() && document.activeElement.closest(".k-chip-list")) {
          chip.focus();
        }
      }
      if (chip.removable) {
        this.renderer.setAttribute(chipEl, "aria-keyshortcuts", "Enter Delete");
      }
    });
  }
  normalizeActiveIndex() {
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = Math.max(this.chips.length - 1, 0);
    }
  }
};
ChipListComponent.ɵfac = function ChipListComponent_Factory(t) {
  return new (t || ChipListComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ChipListComponent.ɵcmp = ɵɵdefineComponent({
  type: ChipListComponent,
  selectors: [["kendo-chiplist"], ["kendo-chip-list"]],
  contentQueries: function ChipListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ChipComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chips = _t);
    }
  },
  hostVars: 10,
  hostBindings: function ChipListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ChipListComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-orientation", ctx.orientation)("dir", ctx.direction)("aria-multiselectable", ctx.multiple)("role", ctx.role);
      ɵɵclassProp("k-chip-list", ctx.hostClass)("k-selection-single", ctx.single)("k-selection-multiple", ctx.multiple);
    }
  },
  inputs: {
    selection: "selection",
    size: "size",
    role: "role",
    navigable: "navigable"
  },
  outputs: {
    selectedChange: "selectedChange",
    remove: "remove"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chiplist"
  }])],
  ngContentSelectors: _c12,
  decls: 1,
  vars: 0,
  template: function ChipListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chiplist, kendo-chip-list",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chiplist"
      }]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip-list"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    selection: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    chips: [{
      type: ContentChildren,
      args: [ChipComponent]
    }],
    single: [{
      type: HostBinding,
      args: ["class.k-selection-single"]
    }],
    multiple: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }, {
      type: HostBinding,
      args: ["class.k-selection-multiple"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    navigable: [{
      type: Input
    }]
  });
})();
var exportedModules$12 = [ChipComponent, ChipListComponent];
var declarations$12 = [...exportedModules$12];
var ChipModule = class {
};
ChipModule.ɵfac = function ChipModule_Factory(t) {
  return new (t || ChipModule)();
};
ChipModule.ɵmod = ɵɵdefineNgModule({
  type: ChipModule,
  declarations: [ChipComponent, ChipListComponent],
  imports: [CommonModule, IconsModule],
  exports: [ChipComponent, ChipListComponent]
});
ChipModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$12],
      exports: [exportedModules$12],
      imports: [CommonModule, IconsModule]
    }]
  }], null, null);
})();
function getAnchorAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "bottom"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "top";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "top";
  }
  return align2;
}
function getPopupAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "top"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "bottom";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "bottom";
  }
  return align2;
}
function openAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }), stagger(gap, [animate(`${duration}ms ease-in`, style({
    opacity: "*",
    transform: "translateY(0)"
  }))])], {
    optional: true
  })]);
}
function closeAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: "*",
    transform: "translateY(0)"
  }), stagger(-gap, [animate(`${duration}ms ease-in`, style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }))])], {
    optional: true
  })]);
}
var DialItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DialItemTemplateDirective.ɵfac = function DialItemTemplateDirective_Factory(t) {
  return new (t || DialItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DialItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DialItemTemplateDirective,
  selectors: [["", "kendoDialItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var FloatingActionButtonTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
FloatingActionButtonTemplateDirective.ɵfac = function FloatingActionButtonTemplateDirective_Factory(t) {
  return new (t || FloatingActionButtonTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
FloatingActionButtonTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: FloatingActionButtonTemplateDirective,
  selectors: [["", "kendoFloatingActionButtonTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFloatingActionButtonTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DialItemComponent = class {
  constructor(element, renderer, localisationService) {
    this.element = element;
    this.renderer = renderer;
    this.localisationService = localisationService;
    this.hostClass = true;
    this.role = "menuitem";
  }
  get disabledClass() {
    return this.item.disabled;
  }
  get title() {
    const label = this.item.label;
    return label || this.itemTitle;
  }
  get indexAttr() {
    return this.index;
  }
  get iconClasses() {
    const classes = [];
    if (this.item.iconClass) {
      classes.push(`${this.item.iconClass}`);
    }
    if (this.item.icon) {
      classes.push(`k-fab-item-icon k-icon k-i-${this.item.icon}`);
    }
    return classes;
  }
  get itemTitle() {
    const icon = this.item.icon;
    const itemTitle = this.item.itemTitle;
    return icon && itemTitle ? itemTitle : icon;
  }
  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const rtl = this.localisationService.rtl;
    const hAlign = this.align.horizontal;
    this.renderer.addClass(element, this.getTextDirectionClass(rtl, hAlign));
  }
  getTextDirectionClass(rtl, hAlign) {
    const dir = rtl ? "rtl" : "ltr";
    const align2 = hAlign === "end" ? "end" : "start";
    const directions = {
      rtl: {
        end: "k-text-left",
        start: "k-text-right"
      },
      ltr: {
        start: "k-text-left",
        end: "k-text-right"
      }
    };
    return directions[dir][align2];
  }
};
DialItemComponent.ɵfac = function DialItemComponent_Factory(t) {
  return new (t || DialItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
DialItemComponent.ɵcmp = ɵɵdefineComponent({
  type: DialItemComponent,
  selectors: [["", "kendoDialItem", ""]],
  hostVars: 9,
  hostBindings: function DialItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("aria-disabled", ctx.disabledClass)("title", ctx.title)("aria-label", ctx.title)("data-fab-item-index", ctx.indexAttr);
      ɵɵclassProp("k-fab-item", ctx.hostClass)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    cssClass: "cssClass",
    cssStyle: "cssStyle",
    isFocused: "isFocused",
    index: "index",
    item: "item",
    dialItemTemplate: "dialItemTemplate",
    align: "align"
  },
  attrs: _c10,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "k-fab-item-text", 4, "ngIf"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], [1, "k-fab-item-text"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon"]],
  template: function DialItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DialItemComponent_0_Template, 1, 6, null, 0)(1, DialItemComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.dialItemTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.dialItemTemplate);
    }
  },
  dependencies: [IconWrapperComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialItem]",
      template: `
        <ng-template *ngIf="dialItemTemplate"
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
        >
        </ng-template>

        <ng-container *ngIf="!dialItemTemplate">
            <span *ngIf="item.label" class="k-fab-item-text">{{ item.label }}</span>
            <kendo-icon-wrapper
                *ngIf="item.icon || item.iconClass || item.svgIcon"
                [name]="item.icon"
                innerCssClass="k-fab-item-icon"
                [customFontClass]="item.iconClass"
                [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-item"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    title: [{
      type: HostBinding,
      args: ["attr.title"]
    }, {
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    indexAttr: [{
      type: HostBinding,
      args: ["attr.data-fab-item-index"]
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DialListComponent = class {
  constructor(focusService, cdr) {
    this.focusService = focusService;
    this.cdr = cdr;
    this.hostClass = true;
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
  }
  get bottomClass() {
    return this.align.vertical === "top" || this.align.vertical === "middle";
  }
  get topClass() {
    return this.align.vertical === "bottom";
  }
  isFocused(index) {
    return this.focusService.isFocused(index);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
DialListComponent.ɵfac = function DialListComponent_Factory(t) {
  return new (t || DialListComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ChangeDetectorRef));
};
DialListComponent.ɵcmp = ɵɵdefineComponent({
  type: DialListComponent,
  selectors: [["", "kendoDialList", ""]],
  hostVars: 6,
  hostBindings: function DialListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-fab-items", ctx.hostClass)("k-fab-items-bottom", ctx.bottomClass)("k-fab-items-top", ctx.topClass);
    }
  },
  inputs: {
    dialItems: "dialItems",
    dialItemTemplate: "dialItemTemplate",
    align: "align"
  },
  attrs: _c122,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "kendoDialItem", "", 3, "item", "index", "dialItemTemplate", "isFocused", "ngClass", "ngStyle", "align"]],
  template: function DialListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DialListComponent_ng_container_0_Template, 2, 7, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.dialItems);
    }
  },
  dependencies: [DialItemComponent, NgForOf, FocusableDirective, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialList]",
      template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-items"]
    }],
    bottomClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-bottom"]
    }],
    topClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-top"]
    }],
    dialItems: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS = {
  useLeftRightArrows: false
};
var NAVIGATION_SETTINGS_PROVIDER = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS
};
var SIZE_CLASSES = {
  small: "k-fab-sm",
  medium: "k-fab-md",
  large: "k-fab-lg"
};
var ROUNDED_CLASSES = {
  small: "k-rounded-sm",
  medium: "k-rounded-md",
  large: "k-rounded-lg",
  full: "k-rounded-full"
};
var FILLMODE_CLASS = "k-fab-solid";
var DEFAULT_DURATION2 = 180;
var DEFAULT_ITEM_GAP = 90;
var DEFAULT_OFFSET2 = "16px";
var DEFAULT_ROUNDED = "full";
var DEFAULT_SIZE = "medium";
var DEFAULT_THEME_COLOR = "primary";
var FloatingActionButtonComponent = class {
  constructor(renderer, element, focusService, navigationService, ngZone, popupService, builder, localizationService) {
    this.renderer = renderer;
    this.element = element;
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.builder = builder;
    this.localizationService = localizationService;
    this.positionMode = "fixed";
    this.dialItemAnimation = true;
    this.tabIndex = 0;
    this.dialItems = [];
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.dialItemClick = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.id = `k-${guid()}`;
    this.dialListId = `k-dial-list-${guid()}`;
    this._themeColor = DEFAULT_THEME_COLOR;
    this._size = DEFAULT_SIZE;
    this._rounded = DEFAULT_ROUNDED;
    this._disabled = false;
    this._align = {
      horizontal: "end",
      vertical: "bottom"
    };
    this._offset = {
      x: DEFAULT_OFFSET2,
      y: DEFAULT_OFFSET2
    };
    this.subscriptions = new Subscription();
    this.rtl = false;
    this.animationEnd = new EventEmitter();
    this.initialSetup = true;
    validatePackage(packageMetadata3);
    this.subscribeNavigationEvents();
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
  }
  get fixedClass() {
    return this.positionMode === "fixed";
  }
  get absoluteClass() {
    return this.positionMode === "absolute";
  }
  /**
   * Specifies the theme color of the FloatingActionButton
   * ([see example]({% slug appearance_floatingactionbutton %}#toc-themeColor)).
   * The theme color will be applied as background color of the component.
   *
   * The possible values are:
   * * `primary` (Default)&mdash;Applies coloring based on the `primary` theme color.
   * * `secondary`&mdash;Applies coloring based on the `secondary` theme color.
   * * `tertiary`&mdash; Applies coloring based on the `tertiary` theme color.
   * * `info`&mdash;Applies coloring based on the `info` theme color.
   * * `success`&mdash; Applies coloring based on the `success` theme color.
   * * `warning`&mdash; Applies coloring based on the `warning` theme color.
   * * `error`&mdash; Applies coloring based on the `error` theme color.
   * * `dark`&mdash; Applies coloring based on the `dark` theme color.
   * * `light`&mdash; Applies coloring based on the `light` theme color.
   * * `inverse`&mdash; Applies coloring based on the `inverse` theme color.
   * * `none`&mdash; Removes the built in theme color.
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
    this.handleClasses(newThemeColor, "themeColor");
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the FloatingActionButton
   * ([see example]({% slug appearance_floatingactionbutton %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the FloatingActionButton.
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `full` (default)
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies whether the FloatingActionButton is disabled.
   */
  set disabled(disabled) {
    this._disabled = disabled;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the horizontal and vertical alignment of the FloatingActionButton
   * ([see example]({% slug positioning_floatingactionbutton %}#toc-align)).
   *
   * The possible values are:
   * * `{ horizontal: 'start'|'center'|'end', vertical: 'top'|'middle'|'bottom' }`
   *
   * The default value is:
   * * `{ horizontal: 'end', vertical: 'bottom' }`
   *
   */
  set align(align2) {
    this._align = Object.assign(this._align, align2);
  }
  get align() {
    return this._align;
  }
  /**
   * Specifies the horizontal and vertical offset position of the FloatingActionButton
   * ([see example]({% slug positioning_floatingactionbutton %}#toc-offset)).
   *
   * * The default value is:
   * * `{ x: '16px', y: '16px' }`
   */
  set offset(offset2) {
    this._offset = Object.assign(this._offset, offset2);
    this.offsetStyles();
  }
  get offset() {
    return this._offset;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  ngAfterViewInit() {
    ["size", "rounded", "themeColor"].forEach((option) => this.handleClasses(this[option], option));
    this.renderer.addClass(this.element.nativeElement, this.alignClass());
    this.offsetStyles();
    this.initialSetup = false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Indicates whether the FloatingActionButton is currently open.
   */
  get isOpen() {
    return isPresent3(this.popupRef);
  }
  /**
   * Focuses the FloatingActionButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the FloatingActionButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
    }
  }
  /**
   * Toggles the visibility of the FloatingActionButton dial items popup.
   *
   * If you use the `toggleDial` method to open or close the dial items,
   * the `open` and `close` events do not fire ([more information and examples]({% slug openstate_floatingactionbutton %}#toc-events)).
   *
   * @param open - The state of dial items popup.
   */
  toggleDial(open) {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    const shouldOpen = isPresent3(open) ? open : !this.isOpen;
    if (this.disabled || shouldOpen === this.isOpen) {
      return;
    }
    if (shouldOpen) {
      setTimeout(() => this.openDial());
    } else {
      this.closeDial();
    }
  }
  /**
   * @hidden
   */
  get ariaExpanded() {
    return this.hasDialItems ? this.isOpen : null;
  }
  /**
   * @hidden
   */
  get ariaHasPopup() {
    return this.hasDialItems ? "menu" : null;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    return this.hasDialItems ? this.dialListId : null;
  }
  /**
   * @hidden
   */
  get iconClasses() {
    const classes = [];
    if (this.iconClass) {
      classes.push(`${this.iconClass}`);
    }
    if (this.icon) {
      classes.push(`k-fab-icon k-icon k-i-${this.icon}`);
    }
    return classes;
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    this.ngZone.run(() => {
      const shouldOpen = !this.isOpen;
      this.toggleDialWithEvents(shouldOpen);
    });
  }
  /**
   * @hidden
   */
  keyDownHandler(event) {
    this.keyHandler(event);
  }
  /**
   * @hidden
   */
  keyHandler(event, keyEvent) {
    if (this.disabled) {
      return;
    }
    const focused = this.focusService.focused || 0;
    const keyCode = event.keyCode;
    const action = this.navigationService.process({
      altKey: event.altKey,
      current: focused,
      keyCode,
      keyEvent,
      max: this.dialItems ? this.dialItems.length - 1 : 0,
      min: 0,
      flipNavigation: this.align.vertical === "bottom"
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab) {
      event.preventDefault();
    }
    if (action === NavigationAction.EnterUp && !this.hasDialItems) {
      this.button.nativeElement.click();
    } else if (action === NavigationAction.Open || action === NavigationAction.Close) {
      const toggleDial = action === NavigationAction.Open;
      this.ngZone.run(() => {
        this.toggleDialWithEvents(toggleDial);
      });
    }
  }
  /**
   * @hidden
   */
  onItemClick(event) {
    const item = closest(event.target, ".k-fab-item");
    if (!item) {
      return;
    }
    const index = parseInt(item.getAttribute("data-fab-item-index"));
    this.emitItemClick(index);
  }
  /**
   * @hidden
   */
  focusHandler() {
    if (!this.disabled) {
      this.onFocus.emit();
    }
  }
  /**
   * @hidden
   */
  blurHandler() {
    this.onBlur.emit();
    this.toggleDialWithEvents(false);
  }
  handleClasses(inputValue, input) {
    if (isPresent3(this.button) && (this[input] !== inputValue || this.initialSetup)) {
      const button = this.button.nativeElement;
      const classesToRemove = {
        themeColor: `${FILLMODE_CLASS}-${this.themeColor}`,
        size: SIZE_CLASSES[this.size],
        rounded: ROUNDED_CLASSES[this.rounded]
      };
      const classesToAdd = {
        themeColor: inputValue !== "none" ? `${FILLMODE_CLASS}-${inputValue}` : "",
        size: SIZE_CLASSES[inputValue],
        rounded: ROUNDED_CLASSES[inputValue]
      };
      this.renderer.removeClass(button, classesToRemove[input]);
      if (classesToAdd[input]) {
        this.renderer.addClass(button, classesToAdd[input]);
      }
    }
  }
  onEnterPressed() {
    const index = this.focusService.focused;
    this.emitItemClick(index);
  }
  emitItemClick(index) {
    const item = this.dialItems[index];
    if (item && !item.disabled) {
      const clickEventArgs = {
        item,
        index
      };
      this.dialItemClick.emit(clickEventArgs);
      this.toggleDialWithEvents(false);
      this.focusService.focused = index;
    }
  }
  subscribeNavigationEvents() {
    this.subscriptions.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subscriptions.add(this.navigationService.enter.subscribe(this.onNavigationEnterPress.bind(this)));
    this.subscriptions.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  onNavigationEnterPress() {
    this.ngZone.run(() => {
      if (this.isOpen) {
        const focusedIndex = this.focusService.focused;
        const focusedItem = this.dialItems[focusedIndex];
        if (focusedItem && focusedItem.disabled) {
          return;
        }
        if (isPresent3(focusedIndex) && focusedIndex !== -1) {
          this.onEnterPressed();
          return;
        }
      }
      if (!this.isOpen && isDocumentAvailable()) {
        this.toggleDialWithEvents(true);
        this.button.nativeElement.focus();
      }
    });
  }
  onNavigationClose() {
    if (this.isOpen) {
      this.ngZone.run(() => {
        this.toggleDialWithEvents(false);
        if (isDocumentAvailable()) {
          this.button.nativeElement.focus();
        }
      });
    }
  }
  alignClass() {
    return `k-pos-${this.align.vertical}-${this.align.horizontal}`;
  }
  toggleDialWithEvents(open) {
    if (open === this.isOpen) {
      return;
    }
    const event = new PreventableEvent2();
    if (open) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    if (open) {
      this.openDial();
    } else {
      this.closeDial();
    }
  }
  openPopup() {
    if (this.isOpen) {
      return;
    }
    const isIconFab = this.icon && !this.text;
    const rtl = this.rtl;
    const align2 = this.align;
    this.popupRef = this.popupService.open({
      anchor: this.element.nativeElement,
      animate: false,
      content: this.popupTemplate,
      anchorAlign: getAnchorAlign(align2, rtl),
      popupAlign: getPopupAlign(align2, rtl),
      popupClass: "k-fab-popup k-popup-transparent"
    });
    const popupElement = this.popupRef.popupElement;
    this.renderer.setStyle(popupElement, "box-shadow", "none");
    if (isIconFab) {
      this.subscriptions.add(this.popupRef.popupOpen.subscribe(() => this.positionPopup()));
    }
    this.ngZone.runOutsideAngular(() => {
      this.popupMouseDownListener = this.renderer.listen(popupElement, "mousedown", (event) => {
        event.preventDefault();
      });
    });
    this.popupRef.popupAnchorViewportLeave.subscribe(() => this.toggleDialWithEvents(false));
  }
  closePopup() {
    if (this.isOpen) {
      if (this.popupMouseDownListener) {
        this.popupMouseDownListener();
      }
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  openDial() {
    this.openPopup();
    this.focusService.focus(0);
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(true);
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "true");
  }
  closeDial() {
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(false);
      this.animationEnd.pipe(take(1)).subscribe(() => this.closePopup());
    } else {
      this.closePopup();
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "false");
  }
  isValidAnimation() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean") {
      return animation.duration !== 0;
    }
    return true;
  }
  positionPopup() {
    if (this.dialItemTemplate) {
      return;
    }
    if (!this.popupRef) {
      return;
    }
    const fab = this.element.nativeElement;
    const fabWidth = fab.getBoundingClientRect().width;
    const popupEl = this.popupRef.popupElement;
    const icon = popupEl.querySelector(".k-fab-item-icon");
    if (!icon) {
      return;
    }
    const iconWidth = icon.getBoundingClientRect().width;
    const left = fabWidth / 2 - iconWidth / 2;
    const popupLeft = popupEl.getBoundingClientRect().left;
    const isEndAlign = this.align.horizontal === "end";
    const leftValue = isEndAlign ? popupLeft - left : left + popupLeft;
    const rtlLeftValue = isEndAlign ? left + popupLeft : popupLeft - left;
    popupEl.style.left = this.rtl ? `${rtlLeftValue}px` : `${leftValue}px`;
  }
  offsetStyles() {
    const hostElement = this.element.nativeElement;
    this.renderer.setStyle(hostElement, this.horizontalPosition, this.horizontalOffset);
    this.renderer.setStyle(hostElement, this.verticalPosition, this.verticalOffset);
  }
  get hasDialItems() {
    return isPresent3(this.dialItems) && this.dialItems.length !== 0;
  }
  /**
   * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
   */
  get verticalPosition() {
    return {
      top: "top",
      middle: "top",
      bottom: "bottom"
    }[this.align.vertical];
  }
  /**
   * Gets the offset according to the selected vertical position.
   */
  get verticalOffset() {
    if (this.align.vertical === "middle") {
      return this.offset.y === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.y})`;
    }
    return this.offset.y;
  }
  /**
   * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
   */
  get horizontalPosition() {
    const {
      horizontal
    } = this.align;
    return {
      end: this.rtl ? "left" : "right",
      center: "left",
      start: this.rtl ? "right" : "left"
    }[horizontal];
  }
  /**
   * Gets the offset according to the selected horizontal position.
   */
  get horizontalOffset() {
    if (this.align.horizontal === "center") {
      return this.offset.x === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.x})`;
    }
    return this.offset.x;
  }
  playerFor(element, animation) {
    const factory = this.builder.build(animation);
    return factory.create(element);
  }
  playAnimation(open) {
    const durationSettings = this.durationSettings();
    const animationSettings = {
      duration: durationSettings.duration,
      gap: durationSettings.gap,
      align: this.align
    };
    const animation = open ? openAnimation(animationSettings) : closeAnimation(animationSettings);
    let player = this.playerFor(this.popupRef.popupElement, animation);
    player.play();
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
  }
  durationSettings() {
    return {
      duration: this.animationDuration(),
      gap: this.animationGap()
    };
  }
  animationGap() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent3(animation.gap)) {
      return animation.gap;
    }
    return DEFAULT_ITEM_GAP;
  }
  animationDuration() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent3(animation.duration)) {
      return animation.duration;
    }
    return DEFAULT_DURATION2;
  }
};
FloatingActionButtonComponent.ɵfac = function FloatingActionButtonComponent_Factory(t) {
  return new (t || FloatingActionButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService));
};
FloatingActionButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: FloatingActionButtonComponent,
  selectors: [["kendo-floatingactionbutton"]],
  contentQueries: function FloatingActionButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DialItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, FloatingActionButtonTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fabTemplate = _t.first);
    }
  },
  viewQuery: function FloatingActionButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 7);
      ɵɵviewQuery(_c7, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function FloatingActionButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-pos-fixed", ctx.fixedClass)("k-pos-absolute", ctx.absoluteClass);
    }
  },
  inputs: {
    themeColor: "themeColor",
    size: "size",
    rounded: "rounded",
    disabled: "disabled",
    align: "align",
    offset: "offset",
    positionMode: "positionMode",
    icon: "icon",
    svgIcon: "svgIcon",
    iconClass: "iconClass",
    buttonClass: "buttonClass",
    dialClass: "dialClass",
    text: "text",
    dialItemAnimation: "dialItemAnimation",
    tabIndex: "tabIndex",
    dialItems: "dialItems"
  },
  outputs: {
    onBlur: "blur",
    onFocus: "focus",
    dialItemClick: "dialItemClick",
    open: "open",
    close: "close"
  },
  features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.floatingactionbutton"
  }])],
  decls: 6,
  vars: 17,
  consts: [["type", "button", 1, "k-fab", "k-fab-solid", 3, "tabIndex", "ngClass", "disabled", "kendoEventsOutsideAngular", "scope", "focus", "blur"], ["button", ""], [4, "ngIf"], ["popupTemplate", ""], [3, "ngTemplateOutlet"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-fab-text", 4, "ngIf"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-fab-text"], ["kendoDialList", "", "role", "menu", 3, "id", "ngClass", "dialItems", "dialItemTemplate", "align", "click"]],
  template: function FloatingActionButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0, 1);
      ɵɵlistener("focus", function FloatingActionButtonComponent_Template_button_focus_0_listener() {
        return ctx.focusHandler();
      })("blur", function FloatingActionButtonComponent_Template_button_blur_0_listener() {
        return ctx.blurHandler();
      });
      ɵɵtemplate(2, FloatingActionButtonComponent_2_Template, 1, 1, null, 2)(3, FloatingActionButtonComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵtemplate(4, FloatingActionButtonComponent_ng_template_4_Template, 1, 6, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵclassProp("k-disabled", ctx.disabled);
      ɵɵproperty("tabIndex", ctx.componentTabIndex)("ngClass", ctx.buttonClass)("disabled", ctx.disabled)("kendoEventsOutsideAngular", ɵɵpureFunction2(14, _c13, ctx.keyDownHandler, ctx.clickHandler))("scope", ctx);
      ɵɵattribute("id", ctx.id)("aria-disabled", ctx.disabled)("aria-expanded", ctx.ariaExpanded)("aria-haspopup", ctx.ariaHasPopup)("aria-controls", ctx.ariaControls);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.fabTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.fabTemplate);
    }
  },
  dependencies: [IconWrapperComponent, DialListComponent, NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-floatingactionbutton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.floatingactionbutton"
      }],
      template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab k-fab-solid"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler()"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler
            }"
            [scope]="this"
        >
            <ng-template *ngIf="fabTemplate"
                [ngTemplateOutlet]="fabTemplate?.templateRef"
            >
            </ng-template>

            <ng-container *ngIf="!fabTemplate">
                <kendo-icon-wrapper
                    *ngIf="icon || iconClass || svgIcon"
                    [name]="icon"
                    innerCssClass="k-fab-icon"
                    [customFontClass]="iconClass"
                    [svgIcon]="svgIcon"></kendo-icon-wrapper>
                <span *ngIf="text" class="k-fab-text">{{ text }}</span>
            </ng-container>
        </button>

        <ng-template #popupTemplate>
            <ul
                kendoDialList
                role="menu"
                [id]="dialListId"
                [ngClass]="dialClass"
                [dialItems]="dialItems"
                [dialItemTemplate]='dialItemTemplate?.templateRef'
                [align]="align"
                [attr.aria-labelledby]="id"
                (click)="onItemClick($event)"
            >
            </ul>
        </ng-template>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: AnimationBuilder
    }, {
      type: LocalizationService
    }];
  }, {
    fixedClass: [{
      type: HostBinding,
      args: ["class.k-pos-fixed"]
    }],
    absoluteClass: [{
      type: HostBinding,
      args: ["class.k-pos-absolute"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    dialItemTemplate: [{
      type: ContentChild,
      args: [DialItemTemplateDirective, {
        static: false
      }]
    }],
    fabTemplate: [{
      type: ContentChild,
      args: [FloatingActionButtonTemplateDirective, {
        static: false
      }]
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    dialClass: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    dialItemAnimation: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    dialItems: [{
      type: Input
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    dialItemClick: [{
      type: Output,
      args: ["dialItemClick"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var exportedModules2 = [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective];
var declarations2 = [...exportedModules2, DialListComponent, DialItemComponent];
var FloatingActionButtonModule = class {
};
FloatingActionButtonModule.ɵfac = function FloatingActionButtonModule_Factory(t) {
  return new (t || FloatingActionButtonModule)();
};
FloatingActionButtonModule.ɵmod = ɵɵdefineNgModule({
  type: FloatingActionButtonModule,
  declarations: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, DialListComponent, DialItemComponent],
  imports: [CommonModule, PopupModule, ListModule, EventsModule, IconsModule],
  exports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective]
});
FloatingActionButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PopupModule, ListModule, EventsModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations2],
      exports: [exportedModules2],
      imports: [CommonModule, PopupModule, ListModule, EventsModule, IconsModule]
    }]
  }], null, null);
})();
var ButtonsModule = class {
};
ButtonsModule.ɵfac = function ButtonsModule_Factory(t) {
  return new (t || ButtonsModule)();
};
ButtonsModule.ɵmod = ɵɵdefineNgModule({
  type: ButtonsModule,
  exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule]
});
ButtonsModule.ɵinj = ɵɵdefineInjector({
  imports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonsModule, [{
    type: NgModule,
    args: [{
      exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule, ChipModule, FloatingActionButtonModule]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-progressbar/fesm2020/progress-kendo-angular-progressbar.mjs
var _c03 = ["progressStatus"];
var _c14 = ["progressStatusWrap"];
function ProgressBarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.formattedLabelValue);
  }
}
function ProgressBarComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.formattedLabelValue);
  }
}
function ChunkProgressBarComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 3);
  }
  if (rf & 2) {
    const chunk_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r0.orientationStyles.width)("height", ctx_r0.orientationStyles.height);
    ɵɵclassProp("k-first", i_r2 === 0)("k-last", i_r2 === ctx_r0.chunkCount - 1)("k-selected", chunk_r1);
    ɵɵproperty("ngClass", chunk_r1 ? ctx_r0.progressCssClass : ctx_r0.emptyCssClass)("ngStyle", chunk_r1 ? ctx_r0.progressCssStyle : ctx_r0.emptyCssStyle);
  }
}
var _c22 = ["progress"];
var _c32 = ["scale"];
var _c42 = ["label"];
var _c52 = ["surface"];
function CircularProgressBarComponent_div_11_ng_template_2_Template(rf, ctx) {
}
function CircularProgressBarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 10, 11);
    ɵɵtemplate(2, CircularProgressBarComponent_div_11_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.centerTemplate.templateRef)("ngTemplateOutletContext", ctx_r4.centerTemplateContext);
  }
}
var packageMetadata4 = {
  name: "@progress/kendo-angular-progressbar",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1706873960,
  version: "15.0.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var MIN_MAX_ERROR_MESSAGE = `The max value should be greater than the min.`;
var LABEL_DECIMALS = 3;
var MIN_RATIO = 1e-4;
var formatValue = (value, min, max, label) => {
  const defaultFormattedValue = truncateNumber(value);
  if (typeof label !== "boolean") {
    if (typeof label.format === "string") {
      switch (label.format) {
        case "value":
          return defaultFormattedValue;
        case "percent":
          return `${Math.floor(calculatePercentage(value, min, max))}%`;
        default:
          return defaultFormattedValue;
      }
    } else if (typeof label.format === "function") {
      return label.format(value);
    } else {
      return defaultFormattedValue;
    }
  }
  return defaultFormattedValue;
};
var validateRange = (min, max) => {
  if (isDevMode && min > max) {
    throw new Error(MIN_MAX_ERROR_MESSAGE);
  }
};
var adjustValueToRange = (min, max, value) => Math.max(Math.min(value, max), min);
var calculatePercentage = (value, min, max) => {
  const decimalValue = Math.abs((value - min) / (max - min));
  return decimalValue * 100;
};
var truncateNumber = (value) => {
  const numberParts = value.toString().split(".");
  return numberParts.length === 1 ? `${numberParts[0]}` : `${numberParts[0]}.${numberParts[1].substr(0, LABEL_DECIMALS)}`;
};
var calculateRatio = (min, max, value) => Math.max((value - min) / (max - min), MIN_RATIO);
var extractValueFromChanges = (changes, type, value) => changes[type] && changes[type].currentValue !== void 0 ? changes[type].currentValue : value;
var runAnimation = (changes, animation, previousValue, displayValue) => animation && typeof requestAnimationFrame !== "undefined" && changes["value"] && previousValue !== displayValue;
var stopCurrentAnimation = (changes) => {
  const isAnimationChanged = Boolean(changes["animation"]);
  const hasAnimation = isAnimationChanged && changes["animation"].currentValue;
  return isAnimationChanged && !hasAnimation;
};
var setProgressBarStyles = (props, renderer) => {
  props.forEach((prop) => {
    renderer[prop.method](prop.el, prop.attr, `${prop.attrValue}`);
  });
};
var removeProgressBarStyles = (props, renderer) => {
  props.forEach((prop) => {
    renderer[prop.method](prop.el, prop.attr);
  });
};
var hasElementSize = (element) => {
  return !!(element.style.width && element.style.height);
};
var ProgressBarBase = class {
  /**
   * @hidden
   */
  constructor(elem, renderer, localization) {
    this.elem = elem;
    this.renderer = renderer;
    this.localization = localization;
    this.hostClasses = true;
    this.roleAttribute = "progressbar";
    this.max = 100;
    this.min = 0;
    this.value = 0;
    this.orientation = "horizontal";
    this.disabled = false;
    this.reverse = false;
    this.indeterminate = false;
    this.displayValue = 0;
    this.previousValue = 0;
    validatePackage(packageMetadata4);
    this.localizationChangeSubscription = localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  get isHorizontal() {
    return this.orientation === "horizontal";
  }
  get isVertical() {
    return this.orientation === "vertical";
  }
  get disabledClass() {
    return this.disabled;
  }
  get reverseClass() {
    return this.reverse;
  }
  get indeterminateClass() {
    return this.indeterminate;
  }
  get dirAttribute() {
    return this.direction;
  }
  get ariaMinAttribute() {
    return String(this.min);
  }
  get ariaMaxAttribute() {
    return String(this.max);
  }
  get ariaValueAttribute() {
    return this.indeterminate ? void 0 : String(this.displayValue);
  }
  /**
   * @hidden
   */
  get isCompleted() {
    return this.value === this.max;
  }
  /**
   * @hidden
   */
  get statusWidth() {
    return this.orientation === "horizontal" ? this._progressRatio * 100 : 100;
  }
  /**
   * @hidden
   */
  get statusHeight() {
    return this.orientation === "vertical" ? this._progressRatio * 100 : 100;
  }
  /**
   * @hidden
   */
  get statusWrapperWidth() {
    return this.orientation === "horizontal" ? 100 / this._progressRatio : 100;
  }
  /**
   * @hidden
   */
  get statusWrapperHeight() {
    return this.orientation === "vertical" ? 100 / this._progressRatio : 100;
  }
  get _progressRatio() {
    return calculateRatio(this.min, this.max, this.displayValue);
  }
  ngAfterViewInit() {
    const elem = this.elem.nativeElement;
    const label = this.localization.get("progressBarLabel");
    this.renderer.setAttribute(elem, "aria-label", label);
  }
  ngOnChanges(changes) {
    const min = extractValueFromChanges(changes, "min", this.min);
    const max = extractValueFromChanges(changes, "max", this.max);
    const value = extractValueFromChanges(changes, "value", this.value);
    if (changes["min"] || changes["max"] || changes["value"]) {
      if (changes["min"] || changes["max"]) {
        validateRange(min, max);
      }
      if (changes["value"]) {
        if (value == null || Number.isNaN(value)) {
          this.value = min;
        }
        const previousValue = this.displayValue;
        this.displayValue = adjustValueToRange(this.min, this.max, value);
        this.previousValue = previousValue;
      }
      this.min = min;
      this.max = max;
      this.displayValue = adjustValueToRange(this.min, this.max, value);
    }
  }
  ngOnDestroy() {
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
  }
};
ProgressBarBase.ɵfac = function ProgressBarBase_Factory(t) {
  return new (t || ProgressBarBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
ProgressBarBase.ɵcmp = ɵɵdefineComponent({
  type: ProgressBarBase,
  selectors: [["ng-component"]],
  hostVars: 17,
  hostBindings: function ProgressBarBase_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dirAttribute)("role", ctx.roleAttribute)("aria-valuemin", ctx.ariaMinAttribute)("aria-valuemax", ctx.ariaMaxAttribute)("aria-valuenow", ctx.ariaValueAttribute);
      ɵɵclassProp("k-progressbar", ctx.hostClasses)("k-progressbar-horizontal", ctx.isHorizontal)("k-progressbar-vertical", ctx.isVertical)("k-disabled", ctx.disabledClass)("k-progressbar-reverse", ctx.reverseClass)("k-progressbar-indeterminate", ctx.indeterminateClass);
    }
  },
  inputs: {
    max: "max",
    min: "min",
    value: "value",
    orientation: "orientation",
    disabled: "disabled",
    reverse: "reverse",
    indeterminate: "indeterminate"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function ProgressBarBase_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarBase, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-progressbar"]
    }],
    isHorizontal: [{
      type: HostBinding,
      args: ["class.k-progressbar-horizontal"]
    }],
    isVertical: [{
      type: HostBinding,
      args: ["class.k-progressbar-vertical"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    reverseClass: [{
      type: HostBinding,
      args: ["class.k-progressbar-reverse"]
    }],
    indeterminateClass: [{
      type: HostBinding,
      args: ["class.k-progressbar-indeterminate"]
    }],
    dirAttribute: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    roleAttribute: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaMinAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaMaxAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }],
    ariaValueAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }]
  });
})();
var ProgressBarMessages = class extends ComponentMessages {
};
ProgressBarMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵProgressBarMessages_BaseFactory;
  return function ProgressBarMessages_Factory(t) {
    return (ɵProgressBarMessages_BaseFactory || (ɵProgressBarMessages_BaseFactory = ɵɵgetInheritedFactory(ProgressBarMessages)))(t || ProgressBarMessages);
  };
})();
ProgressBarMessages.ɵdir = ɵɵdefineDirective({
  type: ProgressBarMessages,
  inputs: {
    progressBarLabel: "progressBarLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarMessages, [{
    type: Directive,
    args: [{}]
  }], null, {
    progressBarLabel: [{
      type: Input
    }]
  });
})();
var LocalizedProgressBarMessagesDirective = class extends ProgressBarMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedProgressBarMessagesDirective.ɵfac = function LocalizedProgressBarMessagesDirective_Factory(t) {
  return new (t || LocalizedProgressBarMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedProgressBarMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedProgressBarMessagesDirective,
  selectors: [["", "kendoProgressBarLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: ProgressBarMessages,
    useExisting: forwardRef(() => LocalizedProgressBarMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedProgressBarMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ProgressBarMessages,
        useExisting: forwardRef(() => LocalizedProgressBarMessagesDirective)
      }],
      selector: `[kendoProgressBarLocalizedMessages]`
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var ProgressBarComponent = class extends ProgressBarBase {
  /**
   * @hidden
   */
  constructor(localization, elem, renderer, zone) {
    super(elem, renderer, localization);
    this.localization = localization;
    this.elem = elem;
    this.renderer = renderer;
    this.zone = zone;
    this.label = true;
    this.animation = false;
    this.animationEnd = new EventEmitter();
  }
  /**
   * @hidden
   */
  get showLabel() {
    if (typeof this.label === "boolean") {
      return this.label;
    } else {
      if (this.label && !this.label.hasOwnProperty("visible")) {
        this.label.visible = true;
      }
      return this.label.visible;
    }
  }
  /**
   * @hidden
   */
  get labelPosition() {
    if (typeof this.label === "boolean") {
      return "end";
    } else {
      if (this.label && !this.label.hasOwnProperty("position")) {
        this.label.position = "end";
      }
      return this.label.position;
    }
  }
  /**
   * @hidden
   */
  get isPositionStart() {
    return this.labelPosition === "start";
  }
  /**
   * @hidden
   */
  get isPositionCenter() {
    return this.labelPosition === "center";
  }
  /**
   * @hidden
   */
  get isPositionEnd() {
    return this.labelPosition === "end";
  }
  /**
   * @hidden
   */
  get formattedLabelValue() {
    return formatValue(this.displayValue, this.min, this.max, this.label);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
    if (this.isAnimationInProgress && stopCurrentAnimation(changes)) {
      this.cancelCurrentAnimation = true;
    }
    if (runAnimation(changes, this.animation, this.previousValue, this.displayValue) && !changes["value"].firstChange) {
      this.startAnimation(this.previousValue);
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
  /**
   * @hidden
   */
  startAnimation(previousValue) {
    this.isAnimationInProgress = true;
    const element = this.progressStatusElement.nativeElement;
    const wrapperElement = this.progressStatusWrapperElement.nativeElement;
    const animationOptions = this.getAnimationOptions(previousValue);
    this.zone.runOutsideAngular(() => {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
      const animate2 = () => {
        const elapsed = (/* @__PURE__ */ new Date()).getTime() - animationOptions.startTime;
        const position2 = Math.min(elapsed / animationOptions.duration, 1);
        const size = animationOptions.startSize + animationOptions.deltaSize * position2;
        const wrapperSize = 100 / size * 100;
        this.renderValueChange(element, wrapperElement, animationOptions.property, size, wrapperSize);
        if (position2 < 1) {
          if (this.cancelCurrentAnimation) {
            this.resetProgress(element, wrapperElement, animationOptions.property);
            return;
          }
          this.animationFrame = requestAnimationFrame(animate2);
        } else {
          this.stopAnimation(previousValue);
        }
      };
      animate2();
    });
  }
  /**
   * @hidden
   */
  get animationDuration() {
    if (typeof this.animation === "boolean") {
      return 400;
    } else {
      if (this.animation && !this.animation.hasOwnProperty("duration")) {
        this.animation.duration = 400;
      }
      return this.animation.duration;
    }
  }
  stopAnimation(value) {
    if (hasObservers(this.animationEnd)) {
      this.zone.run(() => {
        this.animationEnd.emit({
          from: value,
          to: this.displayValue
        });
      });
    }
    this.zone.run(() => {
      this.isAnimationInProgress = false;
    });
  }
  getAnimationOptions(value) {
    const isHorizontal = this.orientation === "horizontal";
    const previousRatio = calculateRatio(this.min, this.max, value);
    const previousStatusWidth = isHorizontal ? previousRatio * 100 : 100;
    const previousStatusHeight = !isHorizontal ? previousRatio * 100 : 100;
    const property = isHorizontal ? "width" : "height";
    const startTime = (/* @__PURE__ */ new Date()).getTime();
    const startSize = isHorizontal ? previousStatusWidth : previousStatusHeight;
    const deltaSize = isHorizontal ? this.statusWidth - previousStatusWidth : this.statusHeight - previousStatusHeight;
    const duration = this.animationDuration * Math.abs(deltaSize / 100);
    return {
      property,
      startTime,
      startSize,
      deltaSize,
      duration
    };
  }
  renderValueChange(element, wrapperElement, property, size, wrapperSize) {
    this.renderer.setStyle(element, property, size + "%");
    this.renderer.setStyle(wrapperElement, property, wrapperSize + "%");
  }
  resetProgress(element, wrapperElement, property) {
    const size = calculateRatio(this.min, this.max, this.value);
    const newSize = size * 100;
    const newWrapperSize = 100 / size;
    this.renderValueChange(element, wrapperElement, property, newSize, newWrapperSize);
    this.zone.run(() => {
      this.cancelCurrentAnimation = false;
      this.isAnimationInProgress = false;
    });
  }
};
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
ProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressBarComponent,
  selectors: [["kendo-progressbar"]],
  viewQuery: function ProgressBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c03, 5);
      ɵɵviewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressStatusElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressStatusWrapperElement = _t.first);
    }
  },
  inputs: {
    label: "label",
    progressCssStyle: "progressCssStyle",
    progressCssClass: "progressCssClass",
    emptyCssStyle: "emptyCssStyle",
    emptyCssClass: "emptyCssClass",
    animation: "animation"
  },
  outputs: {
    animationEnd: "animationEnd"
  },
  exportAs: ["kendoProgressBar"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.progressbar"
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 8,
  vars: 28,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_0 = goog.getMsg("Progressbar");
      i18n_0 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.progressbar.progressBarLabel|The aria-label attribute for the ProgressBar component.:Progressbar`;
    }
    return [["kendoProgressBarLocalizedMessages", "", "progressBarLabel", i18n_0], [1, "k-progress-status-wrap", 3, "ngStyle", "ngClass"], ["class", "k-progress-status", 4, "ngIf"], [1, "k-selected", "k-progressbar-value", 3, "ngStyle", "ngClass"], ["progressStatus", ""], [1, "k-progress-status-wrap"], ["progressStatusWrap", ""], [1, "k-progress-status"]];
  },
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "span", 1);
      ɵɵtemplate(2, ProgressBarComponent_span_2_Template, 2, 1, "span", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3, 4)(5, "span", 5, 6);
      ɵɵtemplate(7, ProgressBarComponent_span_7_Template, 2, 1, "span", 2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("k-progress-start", ctx.isPositionStart)("k-progress-center", ctx.isPositionCenter)("k-progress-end", ctx.isPositionEnd);
      ɵɵproperty("ngStyle", ctx.emptyCssStyle)("ngClass", ctx.emptyCssClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLabel);
      ɵɵadvance();
      ɵɵstyleProp("width", ctx.statusWidth, "%")("height", ctx.statusHeight, "%");
      ɵɵclassProp("k-complete", ctx.isCompleted);
      ɵɵproperty("ngStyle", ctx.progressCssStyle)("ngClass", ctx.progressCssClass);
      ɵɵadvance(2);
      ɵɵstyleProp("width", ctx.statusWrapperWidth, "%")("height", ctx.statusWrapperHeight, "%");
      ɵɵclassProp("k-progress-start", ctx.isPositionStart)("k-progress-center", ctx.isPositionCenter)("k-progress-end", ctx.isPositionEnd);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLabel);
    }
  },
  dependencies: [LocalizedProgressBarMessagesDirective, NgStyle, NgClass, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoProgressBar",
      selector: "kendo-progressbar",
      template: `
        <ng-container kendoProgressBarLocalizedMessages
            i18n-progressBarLabel="kendo.progressbar.progressBarLabel|The aria-label attribute for the ProgressBar component."
            progressBarLabel="Progressbar"
        >
        </ng-container>
        <span class="k-progress-status-wrap"
            [class.k-progress-start]="isPositionStart"
            [class.k-progress-center]="isPositionCenter"
            [class.k-progress-end]="isPositionEnd"
            [ngStyle]="emptyCssStyle"
            [ngClass]="emptyCssClass">
            <span *ngIf="showLabel" class="k-progress-status">{{formattedLabelValue}}</span>
        </span>
        <div
            #progressStatus
            class="k-selected k-progressbar-value"
            [class.k-complete]="isCompleted"
            [ngStyle]="progressCssStyle"
            [ngClass]="progressCssClass"
            [style.width.%]="statusWidth"
            [style.height.%]="statusHeight"
            >
            <span
                #progressStatusWrap
                class="k-progress-status-wrap"
                [style.width.%]="statusWrapperWidth"
                [style.height.%]="statusWrapperHeight"
                [class.k-progress-start]="isPositionStart"
                [class.k-progress-center]="isPositionCenter"
                [class.k-progress-end]="isPositionEnd"
                >
                <span *ngIf="showLabel" class="k-progress-status">{{formattedLabelValue}}</span>
            </span>
        </div>
       `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.progressbar"
      }]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    label: [{
      type: Input
    }],
    progressCssStyle: [{
      type: Input
    }],
    progressCssClass: [{
      type: Input
    }],
    emptyCssStyle: [{
      type: Input
    }],
    emptyCssClass: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    animationEnd: [{
      type: Output
    }],
    progressStatusElement: [{
      type: ViewChild,
      args: ["progressStatus", {
        static: false
      }]
    }],
    progressStatusWrapperElement: [{
      type: ViewChild,
      args: ["progressStatusWrap", {
        static: false
      }]
    }]
  });
})();
var ChunkProgressBarComponent = class extends ProgressBarBase {
  /**
   * @hidden
   */
  constructor(localization, elem, renderer) {
    super(elem, renderer, localization);
    this.localization = localization;
    this.elem = elem;
    this.renderer = renderer;
    this.chunkClass = true;
    this.chunkCount = 5;
    this._orientationStyles = {
      width: `${this.chunkSizePercentage}%`,
      height: null
    };
  }
  /**
   * @hidden
   */
  get chunks() {
    const count = this.chunkCount;
    const chunks = Array(count).fill(false);
    const completedChunks = Math.floor(this._progressRatio * count);
    for (let i = 0; i < completedChunks; i++) {
      chunks[i] = true;
    }
    return chunks;
  }
  /**
   * @hidden
   */
  get chunkSizePercentage() {
    return 100 / this.chunkCount;
  }
  /**
   * @hidden
   */
  get orientationStyles() {
    if (this.orientation === "horizontal") {
      this._orientationStyles.width = `${this.chunkSizePercentage}%`;
      this._orientationStyles.height = null;
    } else {
      this._orientationStyles.height = `${this.chunkSizePercentage}%`;
      this._orientationStyles.width = null;
    }
    return this._orientationStyles;
  }
};
ChunkProgressBarComponent.ɵfac = function ChunkProgressBarComponent_Factory(t) {
  return new (t || ChunkProgressBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
ChunkProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: ChunkProgressBarComponent,
  selectors: [["kendo-chunkprogressbar"]],
  hostVars: 2,
  hostBindings: function ChunkProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-chunk-progressbar", ctx.chunkClass);
    }
  },
  inputs: {
    chunkCount: "chunkCount",
    progressCssStyle: "progressCssStyle",
    progressCssClass: "progressCssClass",
    emptyCssStyle: "emptyCssStyle",
    emptyCssClass: "emptyCssClass"
  },
  exportAs: ["kendoChunkProgressBar"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.chunkprogressbar"
  }]), ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 1,
  consts: () => {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_1 = goog.getMsg("Chunk progressbar");
      i18n_1 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.chunkprogressbar.progressBarLabel|The aria-label attribute for the ChunkProgressBar component.:Chunk progressbar`;
    }
    return [["kendoProgressBarLocalizedMessages", "", "progressBarLabel", i18n_1], [1, "k-reset", "k-progressbar-chunks"], ["class", "k-progressbar-chunk", 3, "k-first", "k-last", "k-selected", "ngClass", "ngStyle", "width", "height", 4, "ngFor", "ngForOf"], [1, "k-progressbar-chunk", 3, "ngClass", "ngStyle"]];
  },
  template: function ChunkProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "ul", 1);
      ɵɵtemplate(2, ChunkProgressBarComponent_li_2_Template, 1, 12, "li", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.chunks);
    }
  },
  dependencies: [LocalizedProgressBarMessagesDirective, NgForOf, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChunkProgressBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoChunkProgressBar",
      selector: "kendo-chunkprogressbar",
      template: `
        <ng-container kendoProgressBarLocalizedMessages
            i18n-progressBarLabel="kendo.chunkprogressbar.progressBarLabel|The aria-label attribute for the ChunkProgressBar component."
            progressBarLabel="Chunk progressbar"
        >
        </ng-container>
        <ul class="k-reset k-progressbar-chunks">
            <li class="k-progressbar-chunk" *ngFor="let chunk of chunks; let i = index;"
                [class.k-first]="i === 0"
                [class.k-last]="i === chunkCount - 1"
                [class.k-selected]="chunk"
                [ngClass]="chunk ? progressCssClass : emptyCssClass"
                [ngStyle]="chunk ? progressCssStyle : emptyCssStyle"
                [style.width]="orientationStyles.width"
                [style.height]="orientationStyles.height"
                >
            </li>
        </ul>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chunkprogressbar"
      }]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    chunkClass: [{
      type: HostBinding,
      args: ["class.k-chunk-progressbar"]
    }],
    chunkCount: [{
      type: Input
    }],
    progressCssStyle: [{
      type: Input
    }],
    progressCssClass: [{
      type: Input
    }],
    emptyCssStyle: [{
      type: Input
    }],
    emptyCssClass: [{
      type: Input
    }]
  });
})();
var CircularProgressbarCenterTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
CircularProgressbarCenterTemplateDirective.ɵfac = function CircularProgressbarCenterTemplateDirective_Factory(t) {
  return new (t || CircularProgressbarCenterTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
CircularProgressbarCenterTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: CircularProgressbarCenterTemplateDirective,
  selectors: [["", "kendoCircularProgressbarCenterTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularProgressbarCenterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCircularProgressbarCenterTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var DEFAULT_SURFACE_SIZE = 200;
var CircularProgressBarComponent = class {
  constructor(renderer, cdr, localization, element, zone) {
    this.renderer = renderer;
    this.cdr = cdr;
    this.localization = localization;
    this.element = element;
    this.zone = zone;
    this.hostClasses = true;
    this.roleAttribute = "progressbar";
    this.animation = false;
    this.opacity = 1;
    this.animationEnd = new EventEmitter();
    this.centerTemplateContext = {};
    this._indeterminate = false;
    this._max = 100;
    this._min = 0;
    this._value = 0;
    this.previousValue = 0;
    this.internalValue = 0;
    this.subscriptions = new Subscription();
    validatePackage(packageMetadata4);
    this.subscriptions.add(this.localization.changes.subscribe(this.rtlChange.bind(this)));
  }
  get ariaMinAttribute() {
    return String(this.min);
  }
  get ariaMaxAttribute() {
    return String(this.max);
  }
  get ariaValueAttribute() {
    return this.indeterminate ? void 0 : String(this.value);
  }
  /**
   * Sets the default value of the Circular Progressbar between `min` and `max`.
   *
   * @default 0
   */
  set value(value) {
    if (value > this.max) {
      this.handleErrors("value > max");
    }
    if (value < this.min) {
      this.handleErrors("value < min");
    }
    this.previousValue = this.value;
    this._value = value;
  }
  get value() {
    return this._value;
  }
  /**
   * The maximum value which the Circular Progressbar can accept.
   *
   * @default 100
   */
  set max(max) {
    if (max < this.min) {
      this.handleErrors("max < min");
    }
    this._max = max;
  }
  get max() {
    return this._max;
  }
  /**
   * The minimum value which the Circular Progressbar can accept.
   *
   * @default 0
   */
  set min(min) {
    if (min > this.max) {
      this.handleErrors("max < min");
    }
    this._min = min;
  }
  get min() {
    return this._min;
  }
  /**
   * Puts the Circular ProgressBar in indeterminate state.
   * @default false
   */
  set indeterminate(indeterminate) {
    this._indeterminate = indeterminate;
  }
  get indeterminate() {
    return this._indeterminate;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    const elem = this.element.nativeElement;
    const ariaLabel = this.localization.get("progressBarLabel");
    this.renderer.setAttribute(elem, "aria-label", ariaLabel);
    this.initProgressArc();
  }
  ngOnChanges(changes) {
    const skipFirstChange = true;
    if (isChanged("value", changes, skipFirstChange) && this.progress) {
      if (this.animation) {
        this.progressbarAnimation();
      } else {
        const value = this.value - this.min;
        this.internalValue = changes["value"].currentValue;
        this.calculateProgress(value);
      }
    }
    if (changes["opacity"] && this.progress) {
      setProgressBarStyles([{
        method: "setAttribute",
        el: this.progress.nativeElement,
        attr: "opacity",
        attrValue: this.opacity.toString()
      }], this.renderer);
    }
    if (changes["indeterminate"] && !changes["indeterminate"].firstChange) {
      this.indeterminateState();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  onResize() {
    this.setStyles();
    const value = this.animation ? this.internalValue : this.value;
    this.calculateProgress(value);
    this.updateCenterTemplate(value);
  }
  initProgressArc() {
    this.setStyles();
    if (this.indeterminate) {
      this.indeterminateState();
    } else {
      if (!this.animation) {
        const value = this.value - this.min;
        this.calculateProgress(value);
      } else {
        this.progressbarAnimation();
      }
    }
  }
  calculateProgress(value) {
    if (this.progressColor) {
      this.updateProgressColor(value);
    }
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.updateCenterTemplate(value + this.min);
    });
    const progressArc = this.progress.nativeElement;
    const radius = this.progress.nativeElement.r.baseVal.value;
    const circumference = Math.PI * (radius * 2);
    const dir = this.rtl ? circumference * -1 : circumference;
    const strokeDashOffest = circumference - dir * (value / (this.max - this.min));
    const progressCalculations = [{
      method: "setStyle",
      el: progressArc,
      attr: "strokeDasharray",
      attrValue: circumference.toString()
    }, {
      method: "setStyle",
      el: progressArc,
      attr: "strokeDashoffset",
      attrValue: strokeDashOffest.toString()
    }];
    setProgressBarStyles(progressCalculations, this.renderer);
  }
  progressbarAnimation() {
    const forwardProgress = {
      isOngoing: this.internalValue > this.value - this.min,
      isPositive: this.value >= this.previousValue
    };
    const backwardProgress = {
      isOngoing: this.internalValue < this.value - this.min,
      isNegative: this.value <= this.previousValue
    };
    if (forwardProgress.isOngoing && forwardProgress.isPositive || backwardProgress.isOngoing && backwardProgress.isNegative) {
      return;
    }
    this.calculateProgress(this.internalValue);
    const from2 = this.internalValue;
    if (hasObservers(this.animationEnd)) {
      this.animationEnd.emit({
        from: from2,
        to: this.internalValue
      });
    }
    forwardProgress.isPositive ? this.internalValue += 1 : this.internalValue -= 1;
    requestAnimationFrame(this.progressbarAnimation.bind(this));
  }
  setStyles() {
    const progressArc = this.progress.nativeElement;
    const scale = this.scale.nativeElement;
    const surface = this.surface.nativeElement;
    const element = this.element.nativeElement;
    let elWidth = element.getBoundingClientRect().width;
    ;
    if (!hasElementSize(element)) {
      const surfaceSize = [{
        method: "setStyle",
        el: surface,
        attr: "width",
        attrValue: `${DEFAULT_SURFACE_SIZE}px`
      }, {
        method: "setStyle",
        el: surface,
        attr: "height",
        attrValue: `${DEFAULT_SURFACE_SIZE}px`
      }];
      elWidth = DEFAULT_SURFACE_SIZE;
      setProgressBarStyles(surfaceSize, this.renderer);
    }
    const attributesArray = [{
      method: "setAttribute",
      el: progressArc,
      attr: "r",
      attrValue: String(elWidth / 2 - 10)
    }, {
      method: "setAttribute",
      el: progressArc,
      attr: "cx",
      attrValue: String(elWidth / 2)
    }, {
      method: "setAttribute",
      el: progressArc,
      attr: "cy",
      attrValue: String(elWidth / 2)
    }, {
      method: "setAttribute",
      el: progressArc,
      attr: "opacity",
      attrValue: String(this.opacity)
    }, {
      method: "setAttribute",
      el: scale,
      attr: "r",
      attrValue: String(elWidth / 2 - 10)
    }, {
      method: "setAttribute",
      el: scale,
      attr: "cx",
      attrValue: String(elWidth / 2)
    }, {
      method: "setAttribute",
      el: scale,
      attr: "cy",
      attrValue: String(elWidth / 2)
    }];
    setProgressBarStyles(attributesArray, this.renderer);
  }
  indeterminateState() {
    const progressArc = this.progress.nativeElement;
    if (this.indeterminate) {
      this.calculateProgress(this.value - this.min);
      const rotate = this.rtl ? {
        from: 360,
        to: 0
      } : {
        from: 0,
        to: 360
      };
      let color;
      if (!this.progressColor) {
        color = getComputedStyle(progressArc).stroke;
      }
      const indeterminateStyles = [{
        method: "setStyle",
        el: progressArc,
        attr: "transform-origin",
        attrValue: "center"
      }, {
        method: "setStyle",
        el: progressArc,
        attr: "fill",
        attrValue: "none"
      }, {
        method: "setStyle",
        el: progressArc,
        attr: "stroke-linecap",
        attrValue: "round"
      }, {
        method: "setStyle",
        el: progressArc,
        attr: "stroke",
        attrValue: color ? color : this.currentColor
      }];
      setProgressBarStyles(indeterminateStyles, this.renderer);
      this.renderer.removeClass(progressArc, "k-circular-progressbar-arc");
      progressArc.innerHTML = `<animateTransform attributeName="transform" type="rotate" from="${rotate.from} 0 0" to="${rotate.to} 0 0" dur="1s" repeatCount="indefinite" />`;
    } else {
      this.renderer.addClass(progressArc, "k-circular-progressbar-arc");
      const removeIndeterminateStyles = [{
        method: "removeStyle",
        el: progressArc,
        attr: "transform-origin"
      }, {
        method: "removeStyle",
        el: progressArc,
        attr: "fill"
      }, {
        method: "removeStyle",
        el: progressArc,
        attr: "stroke-linecap"
      }];
      removeProgressBarStyles(removeIndeterminateStyles, this.renderer);
      progressArc.innerHTML = "";
      if (this.animation) {
        this.progressbarAnimation();
      }
    }
  }
  updateCenterTemplate(value) {
    if (!this.centerTemplate) {
      return;
    }
    this.centerTemplateContext.value = value;
    this.centerTemplateContext.color = this.currentColor;
    this.cdr.detectChanges();
    this.positionLabel();
  }
  positionLabel() {
    const labelEl = this.labelElement.nativeElement;
    const element = this.element.nativeElement;
    const surface = this.surface.nativeElement;
    let elWidth;
    let elHeight;
    if (!hasElementSize(element)) {
      const surfaceSize = surface.getBoundingClientRect();
      elWidth = surfaceSize.width;
      elHeight = surfaceSize.height;
    } else {
      const elementSize = element.getBoundingClientRect();
      elWidth = elementSize.width;
      elHeight = elementSize.height;
    }
    const left = elWidth / 2 - labelEl.offsetWidth / 2;
    const top = elHeight / 2 - labelEl.offsetHeight / 2;
    const labelCalculations = [{
      method: "setStyle",
      el: labelEl,
      attr: "left",
      attrValue: `${left}px`
    }, {
      method: "setStyle",
      el: labelEl,
      attr: "top",
      attrValue: `${top}px`
    }];
    setProgressBarStyles(labelCalculations, this.renderer);
  }
  get currentColor() {
    const currentColor = this.progress.nativeElement.style.stroke;
    return currentColor;
  }
  updateProgressColor(value) {
    const progressArc = this.progress.nativeElement;
    if (typeof this.progressColor === "string") {
      this.renderer.setStyle(progressArc, "stroke", this.progressColor);
    } else {
      for (let i = 0; i < this.progressColor.length; i++) {
        const from2 = this.progressColor[i].from;
        const to = this.progressColor[i].to;
        if (value >= from2 && value <= to || !from2 && value <= to) {
          this.renderer.setStyle(progressArc, "stroke", this.progressColor[i].color);
          break;
        }
        if (!to && value >= from2) {
          this.renderer.setStyle(progressArc, "stroke", this.progressColor[i].color);
        }
      }
    }
  }
  handleErrors(type) {
    if (isDevMode()) {
      switch (type) {
        case "value > max":
          throw new Error("The value of the CircularProgressbar cannot exceed the max value");
        case "value < min":
          throw new Error("The value of the CircularProgressbar cannot be lower than the min value");
        case "max < min":
          throw new Error("The min value cannot be higher than the max value");
        default:
      }
    }
  }
  setDirection() {
    this.rtl = this.localization.rtl;
    if (this.element) {
      this.renderer.setAttribute(this.element.nativeElement, "dir", this.rtl ? "rtl" : "ltr");
    }
    if (this.labelElement) {
      this.renderer.setAttribute(this.labelElement.nativeElement, "dir", this.rtl ? "rtl" : "ltr");
    }
  }
  rtlChange() {
    if (this.element && this.rtl !== this.localization.rtl) {
      this.setDirection();
    }
  }
};
CircularProgressBarComponent.ɵfac = function CircularProgressBarComponent_Factory(t) {
  return new (t || CircularProgressBarComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
CircularProgressBarComponent.ɵcmp = ɵɵdefineComponent({
  type: CircularProgressBarComponent,
  selectors: [["kendo-circularprogressbar"]],
  contentQueries: function CircularProgressBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CircularProgressbarCenterTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centerTemplate = _t.first);
    }
  },
  viewQuery: function CircularProgressBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c22, 5);
      ɵɵviewQuery(_c32, 5);
      ɵɵviewQuery(_c42, 5);
      ɵɵviewQuery(_c52, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progress = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scale = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.surface = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function CircularProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-valuemin", ctx.ariaMinAttribute)("aria-valuemax", ctx.ariaMaxAttribute)("aria-valuenow", ctx.ariaValueAttribute)("role", ctx.roleAttribute);
      ɵɵclassProp("k-circular-progressbar", ctx.hostClasses);
    }
  },
  inputs: {
    value: "value",
    max: "max",
    min: "min",
    animation: "animation",
    opacity: "opacity",
    indeterminate: "indeterminate",
    progressColor: "progressColor"
  },
  outputs: {
    animationEnd: "animationEnd"
  },
  exportAs: ["kendoCircularProgressBar"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.circularprogressbar"
  }]), ɵɵNgOnChangesFeature],
  decls: 13,
  vars: 1,
  consts: () => {
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_2 = goog.getMsg("Circular progressbar");
      i18n_2 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PROGRESSBAR_FESM2020_PROGRESS_KENDO_ANGULAR_PROGRESSBAR_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.circularprogressbar.progressBarLabel|The aria-label attribute for the Circular ProgressBar component.:Circular progressbar`;
    }
    return [["kendoProgressBarLocalizedMessages", "", "progressBarLabel", i18n_2], [1, "k-circular-progressbar-surface"], ["surface", ""], ["svg", ""], ["stroke-width", "9.5", 1, "k-circular-progressbar-scale"], ["scale", ""], ["stroke-width", "9.5", 1, "k-circular-progressbar-arc"], ["progress", ""], ["class", "k-circular-progressbar-label", 4, "ngIf"], [3, "resize"], [1, "k-circular-progressbar-label"], ["label", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]];
  },
  template: function CircularProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "div", 1, 2)(3, "div");
      ɵɵnamespaceSVG();
      ɵɵelementStart(4, "svg", null, 3)(6, "g");
      ɵɵelement(7, "circle", 4, 5)(9, "circle", 6, 7);
      ɵɵelementEnd()();
      ɵɵtemplate(11, CircularProgressBarComponent_div_11_Template, 3, 2, "div", 8);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(12, "kendo-resize-sensor", 9);
      ɵɵlistener("resize", function CircularProgressBarComponent_Template_kendo_resize_sensor_resize_12_listener() {
        return ctx.onResize();
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(11);
      ɵɵproperty("ngIf", ctx.centerTemplate);
    }
  },
  dependencies: [ResizeSensorComponent, LocalizedProgressBarMessagesDirective, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularProgressBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoCircularProgressBar",
      selector: "kendo-circularprogressbar",
      template: `
        <ng-container kendoProgressBarLocalizedMessages
            i18n-progressBarLabel="kendo.circularprogressbar.progressBarLabel|The aria-label attribute for the Circular ProgressBar component."
            progressBarLabel="Circular progressbar"
        >
        </ng-container>
        <div #surface class="k-circular-progressbar-surface">
            <div>
                <svg #svg>
                    <g>
                        <circle class="k-circular-progressbar-scale" #scale stroke-width="9.5"></circle>
                        <circle class="k-circular-progressbar-arc" #progress stroke-width="9.5"></circle>
                    </g>
                </svg>
                <div class="k-circular-progressbar-label" *ngIf="centerTemplate" #label>
                    <ng-template [ngTemplateOutlet]="centerTemplate.templateRef" [ngTemplateOutletContext]="centerTemplateContext"></ng-template>
                </div>
            </div>
        </div>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.circularprogressbar"
      }]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-circular-progressbar"]
    }],
    ariaMinAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaMaxAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }],
    ariaValueAttribute: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    roleAttribute: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    progressColor: [{
      type: Input
    }],
    animationEnd: [{
      type: Output
    }],
    progress: [{
      type: ViewChild,
      args: ["progress"]
    }],
    scale: [{
      type: ViewChild,
      args: ["scale"]
    }],
    labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    surface: [{
      type: ViewChild,
      args: ["surface"]
    }],
    centerTemplate: [{
      type: ContentChild,
      args: [CircularProgressbarCenterTemplateDirective]
    }]
  });
})();
var ProgressBarCustomMessagesComponent = class extends ProgressBarMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
ProgressBarCustomMessagesComponent.ɵfac = function ProgressBarCustomMessagesComponent_Factory(t) {
  return new (t || ProgressBarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
ProgressBarCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressBarCustomMessagesComponent,
  selectors: [["kendo-progressbar-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: ProgressBarMessages,
    useExisting: forwardRef(() => ProgressBarCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function ProgressBarCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ProgressBarMessages,
        useExisting: forwardRef(() => ProgressBarCustomMessagesComponent)
      }],
      selector: "kendo-progressbar-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var COMPONENT_DIRECTIVES = [ProgressBarComponent, ChunkProgressBarComponent, CircularProgressBarComponent, CircularProgressbarCenterTemplateDirective, LocalizedProgressBarMessagesDirective, ProgressBarCustomMessagesComponent];
var MODULES = [CommonModule, ResizeSensorModule];
var ProgressBarModule = class {
};
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) {
  return new (t || ProgressBarModule)();
};
ProgressBarModule.ɵmod = ɵɵdefineNgModule({
  type: ProgressBarModule,
  declarations: [ProgressBarComponent, ChunkProgressBarComponent, CircularProgressBarComponent, CircularProgressbarCenterTemplateDirective, LocalizedProgressBarMessagesDirective, ProgressBarCustomMessagesComponent],
  imports: [CommonModule, ResizeSensorModule],
  exports: [ProgressBarComponent, ChunkProgressBarComponent, CircularProgressBarComponent, CircularProgressbarCenterTemplateDirective, LocalizedProgressBarMessagesDirective, ProgressBarCustomMessagesComponent]
});
ProgressBarModule.ɵinj = ɵɵdefineInjector({
  imports: [MODULES]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      declarations: COMPONENT_DIRECTIVES,
      exports: COMPONENT_DIRECTIVES,
      imports: MODULES
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-layout/fesm2020/progress-kendo-angular-layout.mjs
var _c04 = ["header"];
var _c15 = ["contentWrapper"];
function PanelBarItemComponent_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.iconClasses)("customFontClass", ctx_r1.customIconClasses)("svgIcon", ctx_r1.svgIcon);
  }
}
function PanelBarItemComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r2.imageUrl, ɵɵsanitizeUrl);
  }
}
function PanelBarItemComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 8);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.title);
  }
}
function PanelBarItemComponent_5_ng_template_0_Template(rf, ctx) {
}
var _c23 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({
  title: a0,
  id: a1,
  icon: a2,
  iconClass: a3,
  svgIcon: a4,
  imageUrl: a5,
  selected: a6,
  expanded: a7,
  disabled: a8,
  focused: a9,
  content: a10
});
var _c33 = (a0) => ({
  item: a0
});
function PanelBarItemComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelBarItemComponent_5_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.titleTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c33, ɵɵpureFunctionV(2, _c23, [ctx_r4.title, ctx_r4.id, ctx_r4.icon, ctx_r4.iconClass, ctx_r4.svgIcon, ctx_r4.imageUrl, ctx_r4.selected, ctx_r4.expanded, ctx_r4.disabled, ctx_r4.focused, ctx_r4.content])));
  }
}
function PanelBarItemComponent_kendo_icon_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 10);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r5.expanded ? "arrow-chevron-up" : "chevron-down")("svgIcon", ctx_r5.expanderSVGIcon)("innerCssClass", ctx_r5.dirInnerCssClasses);
  }
}
function PanelBarItemComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵstyleProp("overflow", ctx_r9.contentOverflow)("height", ctx_r9.contentHeight);
  }
}
function PanelBarItemComponent_div_7_div_3_ng_template_1_Template(rf, ctx) {
}
var _c43 = (a0, a1, a2, a3, a4, a5) => ({
  title: a0,
  id: a1,
  icon: a2,
  imageUrl: a3,
  disabled: a4,
  content: a5
});
var _c53 = (a0) => ({
  $implicit: a0
});
function PanelBarItemComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, PanelBarItemComponent_div_7_div_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵstyleProp("overflow", ctx_r10.contentOverflow)("height", ctx_r10.contentHeight);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r10.contentTemplate.first.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c53, ɵɵpureFunction6(6, _c43, ctx_r10.title, ctx_r10.id, ctx_r10.icon, ctx_r10.imageUrl, ctx_r10.disabled, ctx_r10.content)));
  }
}
function PanelBarItemComponent_div_7_div_4_ng_container_1_kendo_panelbar_item_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-panelbar-item", 18);
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().$implicit;
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("title", item_r15.title)("id", item_r15.id)("icon", item_r15.icon)("iconClass", item_r15.iconClass)("svgIcon", item_r15.svgIcon)("imageUrl", item_r15.imageUrl)("selected", !!item_r15.selected)("expanded", !!item_r15.expanded)("disabled", !!item_r15.disabled)("template", ctx_r16.template)("items", item_r15.children)("content", item_r15.content);
  }
}
function PanelBarItemComponent_div_7_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelBarItemComponent_div_7_div_4_ng_container_1_kendo_panelbar_item_1_Template, 1, 12, "kendo-panelbar-item", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r15.hidden);
  }
}
function PanelBarItemComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, PanelBarItemComponent_div_7_div_4_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵstyleProp("overflow", ctx_r11.contentOverflow)("height", ctx_r11.contentHeight);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r11.items);
  }
}
function PanelBarItemComponent_div_7_div_5_ng_template_1_Template(rf, ctx) {
}
function PanelBarItemComponent_div_7_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵtextInterpolate(ctx_r19.content);
  }
}
function PanelBarItemComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, PanelBarItemComponent_div_7_div_5_ng_template_1_Template, 0, 0, "ng-template", 9)(2, PanelBarItemComponent_div_7_div_5_ng_template_2_Template, 1, 1, "ng-template", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵstyleProp("overflow", ctx_r12.contentOverflow)("height", ctx_r12.contentHeight);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.template)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c53, ɵɵpureFunction6(7, _c43, ctx_r12.title, ctx_r12.id, ctx_r12.icon, ctx_r12.imageUrl, ctx_r12.disabled, ctx_r12.content)));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r12.template);
  }
}
function PanelBarItemComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 11);
    ɵɵtemplate(2, PanelBarItemComponent_div_7_div_2_Template, 2, 4, "div", 12)(3, PanelBarItemComponent_div_7_div_3_Template, 2, 15, "div", 13)(4, PanelBarItemComponent_div_7_div_4_Template, 2, 5, "div", 12)(5, PanelBarItemComponent_div_7_div_5_Template, 3, 16, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("@toggle", ctx_r6.state);
    ɵɵattribute("role", "group")("aria-hidden", !ctx_r6.disabled && !ctx_r6.expanded);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r6.hasChildItems && !(ctx_r6.items == null ? null : ctx_r6.items.length));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.hasContent && !ctx_r6.content);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.hasItems);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.content);
  }
}
var _c62 = [[["kendo-panelbar-item"]]];
var _c72 = ["kendo-panelbar-item"];
function PanelBarComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "contentChildItems && !items"]);
  }
}
function PanelBarComponent_ng_template_1_ng_container_0_kendo_panelbar_item_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-panelbar-item", 5);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("title", item_r4.title)("id", item_r4.id)("icon", item_r4.icon)("iconClass", item_r4.iconClass)("svgIcon", item_r4.svgIcon)("imageUrl", item_r4.imageUrl)("selected", !!item_r4.selected)("expanded", !!item_r4.expanded)("disabled", !!item_r4.disabled)("template", ctx_r5.templateRef)("items", item_r4.children)("content", item_r4.content);
  }
}
function PanelBarComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelBarComponent_ng_template_1_ng_container_0_kendo_panelbar_item_1_Template, 1, 12, "kendo-panelbar-item", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r4.hidden);
  }
}
function PanelBarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelBarComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
function PanelBarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
}
function SplitterPaneComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function SplitterPaneComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
}
var _c82 = ["*"];
function SplitterBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function SplitterBarComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.togglePrevious());
    });
    ɵɵelement(1, "kendo-icon-wrapper", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.previousArrowClass())("svgIcon", ctx_r0.previousSVGArrowClass());
  }
}
function SplitterBarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function SplitterBarComponent_div_2_Template_div_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.toggleNext());
    });
    ɵɵelement(1, "kendo-icon-wrapper", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("name", ctx_r1.nextArrowClass())("svgIcon", ctx_r1.nextSVGArrowClass());
  }
}
var _c92 = (a0, a1) => ({
  width: a0,
  height: a1
});
function SplitterComponent_ng_container_1_kendo_splitter_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-splitter-bar", 2);
  }
  if (rf & 2) {
    const index_r2 = ɵɵnextContext().index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("index", index_r2)("orientation", ctx_r4.orientation)("ngStyle", ɵɵpureFunction2(3, _c92, ctx_r4.orientation === "horizontal" ? ctx_r4.splitbarWidth + "px" : void 0, ctx_r4.orientation === "vertical" ? ctx_r4.splitbarWidth + "px" : void 0));
  }
}
function SplitterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SplitterComponent_ng_container_1_kendo_splitter_bar_1_Template, 1, 6, "kendo-splitter-bar", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const last_r3 = ctx.last;
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r3);
  }
}
var _c102 = [[["kendo-splitter-pane"]]];
var _c112 = ["kendo-splitter-pane"];
var _c123 = ["kendoTabStripScrollableButton", ""];
var _c132 = ["kendoTabStripTab", ""];
function TabComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.tab.title);
  }
}
function TabComponent_ng_container_0_span_2_ng_template_1_Template(rf, ctx) {
}
function TabComponent_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, TabComponent_ng_container_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.tab.tabTitle == null ? null : ctx_r5.tab.tabTitle.templateRef);
  }
}
function TabComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabComponent_ng_container_0_span_1_Template, 2, 1, "span", 4)(2, TabComponent_ng_container_0_span_2_Template, 2, 1, "span", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.tab.tabTitle);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.tab.tabTitle);
  }
}
function TabComponent_ng_template_1_Template(rf, ctx) {
}
function TabComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TabComponent_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.closeTab(ctx_r7.index));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r3.closeButtonClasses)("iconClass", ctx_r3.customCloseButtonClasses)("svgIcon", ctx_r3.closeSVGIconClass)("title", ctx_r3.closeButtonTitle);
    ɵɵattribute("aria-label", ctx_r3.closeButtonTitle);
  }
}
var _c142 = ["tablist"];
var _c152 = ["prevScrollButton"];
var _c16 = ["nextScrollButton"];
var _c17 = ["tabHeaderContainer"];
function TabStripComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabStripComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r5 = ɵɵreference(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
function TabStripComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabStripComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6)(2, TabStripComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r3 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showContentArea);
  }
}
function TabStripComponent_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabStripComponent_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r5 = ɵɵreference(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
function TabStripComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabStripComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1)(2, TabStripComponent_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r3 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showContentArea);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function TabStripComponent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12, 13);
    ɵɵlistener("tabScroll", function TabStripComponent_ng_template_3_span_1_Template_span_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r19 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r19.tabScroll.emit($event));
    })("onClick", function TabStripComponent_ng_template_3_span_1_Template_span_onClick_0_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r21 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r21.onScrollButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("scrollable", ctx_r14.scrollable)("tabPosition", ctx_r14.tabPosition)("prev", true)("title", ctx_r14.localization.get("previousTabButton"));
  }
}
function TabStripComponent_ng_template_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 14, 15);
    ɵɵlistener("tabClose", function TabStripComponent_ng_template_3_ng_container_4_Template_li_tabClose_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r25 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r25.tabClose.emit($event));
    })("click", function TabStripComponent_ng_template_3_ng_container_4_Template_li_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r26);
      const i_r23 = restoredCtx.index;
      const ctx_r27 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r27.onTabClick($event, i_r23));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tab_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", tab_r22.cssClass)("ngStyle", tab_r22.cssStyle)("tab", tab_r22)("index", i_r23)("tabStripClosable", ctx_r16.closable)("tabStripCloseIcon", ctx_r16.closeIcon)("customTabstripCloseIcon", ctx_r16.closeIconClass)("closeSVGIcon", ctx_r16.closeSVGIcon)("id", ctx_r16.getTabId(i_r23));
    ɵɵattribute("aria-controls", ctx_r16.showContentArea && tab_r22.selected ? ctx_r16.getTabPanelId(i_r23) : void 0);
  }
}
function TabStripComponent_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12, 16);
    ɵɵlistener("tabScroll", function TabStripComponent_ng_template_3_span_5_Template_span_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r30);
      const ctx_r29 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r29.tabScroll.emit($event));
    })("onClick", function TabStripComponent_ng_template_3_span_5_Template_span_onClick_0_listener($event) {
      ɵɵrestoreView(_r30);
      const ctx_r31 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r31.onScrollButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵproperty("scrollable", ctx_r17.scrollable)("tabPosition", ctx_r17.tabPosition)("prev", false)("title", ctx_r17.localization.get("nextTabButton"));
  }
}
function TabStripComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, TabStripComponent_ng_template_3_span_1_Template, 2, 4, "span", 8);
    ɵɵelementStart(2, "ul", 9, 10);
    ɵɵtemplate(4, TabStripComponent_ng_template_3_ng_container_4_Template, 3, 10, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵtemplate(5, TabStripComponent_ng_template_3_span_5_Template, 2, 4, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.itemsWrapperClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasScrollButtons);
    ɵɵadvance();
    ɵɵstyleProp("justify-content", ctx_r2.tabsAlignmentStyles)("width", ctx_r2.tabListWidth)("height", ctx_r2.tabListHeight);
    ɵɵattribute("aria-orientation", ctx_r2.tabPosition === "left" || ctx_r2.tabPosition === "right" ? "vertical" : "horizontal");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.tabs);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasScrollButtons);
  }
}
function TabStripComponent_ng_template_5_ng_template_0_div_0_ng_template_1_Template(rf, ctx) {
}
function TabStripComponent_ng_template_5_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, TabStripComponent_ng_template_5_ng_template_0_div_0_ng_template_1_Template, 0, 0, "ng-template", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = ɵɵnextContext();
    const tab_r33 = ctx_r37.$implicit;
    const i_r34 = ctx_r37.index;
    const ctx_r35 = ɵɵnextContext(2);
    ɵɵproperty("@state", tab_r33.selected && ctx_r35.animate ? "active" : "inactive")("ngClass", !ctx_r35.keepTabContent || tab_r33.selected ? "k-tabstrip-content k-active" : "k-tabstrip-content")("tabIndex", 0)("id", ctx_r35.getTabPanelId(i_r34));
    ɵɵattribute("aria-hidden", !tab_r33.selected)("aria-expanded", tab_r33.selected)("aria-labelledby", ctx_r35.getTabId(i_r34))("aria-disabled", tab_r33.disabled);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tab_r33.tabContent == null ? null : tab_r33.tabContent.templateRef);
  }
}
function TabStripComponent_ng_template_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_ng_template_5_ng_template_0_div_0_Template, 2, 9, "div", 18);
  }
  if (rf & 2) {
    const tab_r33 = ctx.$implicit;
    const ctx_r32 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", tab_r33.selected || ctx_r32.keepTabContent);
  }
}
function TabStripComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_ng_template_5_ng_template_0_Template, 1, 1, "ng-template", 17);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r4.tabs);
  }
}
function TabStripComponent_kendo_resize_sensor_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 21);
    ɵɵlistener("resize", function TabStripComponent_kendo_resize_sensor_7_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r39);
      const ctx_r38 = ɵɵnextContext();
      return ɵɵresetView(ctx_r38.onResize());
    });
    ɵɵelementEnd();
  }
}
function TabStripComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 22);
  }
}
var _c18 = ["kendoDrawerItem", ""];
function DrawerItemComponent_0_ng_template_0_Template(rf, ctx) {
}
var _c19 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  isItemExpanded: a1,
  hasChildren: a2,
  level: a3
});
function DrawerItemComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerItemComponent_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c19, ctx_r0.item, ctx_r0.viewItem.isExpanded, ctx_r0.viewItem.hasChildren, ctx_r0.viewItem.level));
  }
}
function DrawerItemComponent_ng_template_1_ng_container_0_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r6.iconClasses)("customFontClass", ctx_r6.customIconClasses)("svgIcon", ctx_r6.item.svgIcon)("innerCssClass", ctx_r6.innerCssClasses);
  }
}
function DrawerItemComponent_ng_template_1_ng_container_0_kendo_icon_wrapper_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r7.viewItem.isExpanded ? "arrow-chevron-up" : "arrow-chevron-down")("svgIcon", ctx_r7.viewItem.isExpanded ? ctx_r7.arrowUpIcon : ctx_r7.arrowDownIcon);
  }
}
function DrawerItemComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DrawerItemComponent_ng_template_1_ng_container_0_kendo_icon_wrapper_1_Template, 1, 4, "kendo-icon-wrapper", 4);
    ɵɵelementStart(2, "span", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, DrawerItemComponent_ng_template_1_ng_container_0_kendo_icon_wrapper_4_Template, 1, 2, "kendo-icon-wrapper", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.item.icon || ctx_r4.item.iconClass || ctx_r4.item.svgIcon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.item.text);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.viewItem.hasChildren);
  }
}
function DrawerItemComponent_ng_template_1_ng_container_1_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r8.iconClasses)("customFontClass", ctx_r8.customIconClasses)("svgIcon", ctx_r8.item.svgIcon)("innerCssClass", ctx_r8.innerCssClasses);
  }
}
function DrawerItemComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DrawerItemComponent_ng_template_1_ng_container_1_kendo_icon_wrapper_1_Template, 1, 4, "kendo-icon-wrapper", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.item.icon || ctx_r5.item.iconClass || ctx_r5.item.svgIcon);
  }
}
function DrawerItemComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerItemComponent_ng_template_1_ng_container_0_Template, 5, 3, "ng-container", 3)(1, DrawerItemComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.mini && !ctx_r1.expanded);
  }
}
var _c20 = ["kendoDrawerList", ""];
function DrawerListComponent_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 3);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const v_r1 = ctx_r5.$implicit;
    const idx_r2 = ctx_r5.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("k-drawer-item ", ctx_r3.expanded ? " k-level-" + v_r1.level : "", "");
    ɵɵproperty("viewItem", v_r1)("index", idx_r2)("mini", ctx_r3.mini)("expanded", ctx_r3.expanded)("itemTemplate", ctx_r3.itemTemplate)("ngClass", v_r1.item.cssClass)("ngStyle", v_r1.item.cssStyle)("tabindex", v_r1.index === 0 ? "0" : "-1");
    ɵɵattribute("data-kendo-drawer-index", v_r1.index);
  }
}
function DrawerListComponent_ng_container_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", v_r1.item.cssClass)("ngStyle", v_r1.item.cssStyle);
  }
}
function DrawerListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DrawerListComponent_ng_container_0_li_1_Template, 1, 12, "li", 1)(2, DrawerListComponent_ng_container_0_li_2_Template, 2, 2, "li", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", !v_r1.item.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", v_r1.item.separator);
  }
}
function DrawerComponent_div_0_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function DrawerComponent_div_0_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerComponent_div_0_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.headerTemplate == null ? null : ctx_r4.headerTemplate.templateRef);
  }
}
function DrawerComponent_div_0_ng_container_1_3_ng_template_0_Template(rf, ctx) {
}
function DrawerComponent_div_0_ng_container_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerComponent_div_0_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.footerTemplate == null ? null : ctx_r5.footerTemplate.templateRef);
  }
}
function DrawerComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DrawerComponent_div_0_ng_container_1_1_Template, 1, 1, null, 3);
    ɵɵelementStart(2, "ul", 4);
    ɵɵlistener("select", function DrawerComponent_div_0_ng_container_1_Template_ul_select_2_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onSelect($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, DrawerComponent_div_0_ng_container_1_3_Template, 1, 1, null, 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("mini", ctx_r2.mini)("expanded", ctx_r2.expanded)("view", ctx_r2.viewItems)("itemTemplate", ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.footerTemplate);
  }
}
function DrawerComponent_div_0_2_ng_template_0_Template(rf, ctx) {
}
function DrawerComponent_div_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerComponent_div_0_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.drawerTemplate == null ? null : ctx_r3.drawerTemplate.templateRef);
  }
}
function DrawerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, DrawerComponent_div_0_ng_container_1_Template, 4, 6, "ng-container", 3)(2, DrawerComponent_div_0_2_Template, 1, 1, null, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r0.drawerWidth, "px");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.drawerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.drawerTemplate);
  }
}
function DrawerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
}
function DrawerContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function DrawerContainerComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeDrawer());
    });
    ɵɵelementEnd();
  }
}
var _c21 = ["stepLink"];
var _c222 = ["kendoStepperStep", ""];
function StepperStepComponent_2_ng_template_0_Template(rf, ctx) {
}
var _c232 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function StepperStepComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_2_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.stepTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c232, ctx_r1.step, ctx_r1.index));
  }
}
function StepperStepComponent_ng_container_3_span_1_1_ng_template_0_Template(rf, ctx) {
}
function StepperStepComponent_ng_container_3_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_ng_container_3_span_1_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.indicatorTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c232, ctx_r6.step, ctx_r6.index));
  }
}
function StepperStepComponent_ng_container_3_span_1_ng_container_2_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r9.indicatorIconClass)("customFontClass", ctx_r9.customIndicatorIconClass)("svgIcon", ctx_r9.SVGIndicatorIcon);
  }
}
function StepperStepComponent_ng_container_3_span_1_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r10.indicatorText);
  }
}
function StepperStepComponent_ng_container_3_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperStepComponent_ng_container_3_span_1_ng_container_2_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 7)(2, StepperStepComponent_ng_container_3_span_1_ng_container_2_span_2_Template, 2, 1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.showIndicatorIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r7.showIndicatorIcon);
  }
}
function StepperStepComponent_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, StepperStepComponent_ng_container_3_span_1_1_Template, 1, 5, null, 2)(2, StepperStepComponent_ng_container_3_span_1_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵstyleProp("transition-duration", ctx_r4.transitionDuration, "ms");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.indicatorTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.indicatorTemplate);
  }
}
function StepperStepComponent_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function StepperStepComponent_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r11.labelTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c232, ctx_r11.step, ctx_r11.index));
  }
}
function StepperStepComponent_ng_container_3_span_2_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r14.step.label);
  }
}
function StepperStepComponent_ng_container_3_span_2_ng_container_2_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 16);
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r15.validationIconClasses)("customFontClass", ctx_r15.customValidationIconClasses)("svgIcon", ctx_r15.validationSVGIcon);
  }
}
function StepperStepComponent_ng_container_3_span_2_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", ctx_r16.optionalText, ")");
  }
}
function StepperStepComponent_ng_container_3_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperStepComponent_ng_container_3_span_2_ng_container_2_span_1_Template, 2, 1, "span", 12)(2, StepperStepComponent_ng_container_3_span_2_ng_container_2_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 13)(3, StepperStepComponent_ng_container_3_span_2_ng_container_2_span_3_Template, 2, 1, "span", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r12.showLabelText);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r12.showLabelIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r12.step.optional);
  }
}
function StepperStepComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, StepperStepComponent_ng_container_3_span_2_1_Template, 1, 5, null, 2)(2, StepperStepComponent_ng_container_3_span_2_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.labelTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r5.labelTemplate);
  }
}
function StepperStepComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StepperStepComponent_ng_container_3_span_1_Template, 3, 4, "span", 4)(2, StepperStepComponent_ng_container_3_span_2_Template, 3, 2, "span", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showIndicator);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showLabel);
  }
}
var _c24 = ["kendoStepperList", ""];
function StepperListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("max-width", ctx_r0.maxStepWidth, "%")("max-height", ctx_r0.maxStepHeight, "%");
    ɵɵclassProp("k-step-first", idx_r2 === 0)("k-step-last", idx_r2 === ctx_r0.steps.length - 1)("k-step-done", idx_r2 < ctx_r0.currentStep)("k-step-current", idx_r2 === ctx_r0.currentStep)("k-step-optional", step_r1.optional)("k-disabled", step_r1.disabled)("k-focus", idx_r2 === ctx_r0.focusedStep);
    ɵɵproperty("type", ctx_r0.stepType)("step", step_r1)("index", idx_r2)("current", ctx_r0.currentStep)("successIcon", ctx_r0.successIcon)("successSVGIcon", ctx_r0.successSVGIcon)("errorIcon", ctx_r0.errorIcon)("errorSVGIcon", ctx_r0.errorSVGIcon)("svgIcon", ctx_r0.svgIcon)("indicatorTemplate", ctx_r0.indicatorTemplate)("labelTemplate", ctx_r0.labelTemplate)("stepTemplate", ctx_r0.stepTemplate)("ngClass", step_r1.cssClass)("ngStyle", step_r1.cssStyle);
    ɵɵattribute("data-kendo-stepper-index", idx_r2);
  }
}
function StepperComponent_kendo_progressbar_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-progressbar", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("animation", ctx_r0.progressAnimation)("max", ctx_r0.steps.length - 1)("label", false)("orientation", ctx_r0.orientation)("reverse", !ctx_r0.isHorizontal)("value", ctx_r0.currentStep)("ngStyle", ctx_r0.progressBarStyling);
    ɵɵattribute("aria-hidden", true);
  }
}
function AvatarComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "customAvatar"]);
  }
}
function AvatarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 2);
    ɵɵelement(2, "img", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("src", ctx_r1.imageSrc, ɵɵsanitizeUrl);
    ɵɵproperty("alt", ctx_r1.textFor("avatarAlt"))("ngStyle", ctx_r1.cssStyle);
  }
}
function AvatarComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r2.cssStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.initials.substring(0, 2));
  }
}
function AvatarComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵelement(2, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ctx_r3.cssStyle)("name", ctx_r3.icon)("customFontClass", ctx_r3.iconClass)("svgIcon", ctx_r3.svgIcon);
  }
}
function CardActionsComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!actionsArray && !actionsTemplate"]);
  }
}
function CardActionsComponent_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function CardActionsComponent_ng_container_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const action_r4 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.onClick(action_r4));
    });
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const action_r4 = ctx.$implicit;
    ɵɵclassProp("k-button-solid", !action_r4.flat)("k-button-flat", action_r4.flat)("k-button-solid-base", !action_r4.primary && !action_r4.flat)("k-button-solid-primary", action_r4.primary && !action_r4.flat)("k-button-flat-base", !action_r4.primary && action_r4.flat)("k-button-flat-primary", action_r4.primary && action_r4.flat);
    ɵɵadvance(2);
    ɵɵtextInterpolate(action_r4.text);
  }
}
function CardActionsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CardActionsComponent_ng_container_1_button_1_Template, 3, 13, "button", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.actionsArray);
  }
}
function CardActionsComponent_2_ng_template_0_Template(rf, ctx) {
}
function CardActionsComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CardActionsComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.actionsTemplate);
  }
}
var _c25 = ["content"];
function ExpansionPanelComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r4.title);
  }
}
function ExpansionPanelComponent_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r5.subtitle, " ");
  }
}
function ExpansionPanelComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ExpansionPanelComponent_ng_container_2_div_1_Template, 2, 1, "div", 8);
    ɵɵelement(2, "span", 9);
    ɵɵtemplate(3, ExpansionPanelComponent_ng_container_2_div_3_Template, 2, 1, "div", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.title);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.subtitle);
  }
}
function ExpansionPanelComponent_3_ng_template_0_Template(rf, ctx) {
}
function ExpansionPanelComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExpansionPanelComponent_3_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.titleTemplate == null ? null : ctx_r2.titleTemplate.templateRef);
  }
}
function TileLayoutItemComponent_kendo_tilelayout_item_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-tilelayout-item-header", 2)(1, "h5", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("reorderable", ctx_r0.isReorderable);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.titleId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function TileLayoutItemComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const dir_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("k-resize-handle k-cursor-", dir_r3, "-resize k-touch-action-none");
    ɵɵproperty("rtl", ctx_r2.rtl)("resizeDirection", dir_r3);
  }
}
function TileLayoutItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TileLayoutItemComponent_ng_container_2_div_1_Template, 1, 5, "div", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.resizeDirections);
  }
}
var _c26 = ["hint"];
function TileLayoutComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
}
var packageMetadata5 = {
  name: "@progress/kendo-angular-layout",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1706874050,
  version: "15.0.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var PanelBarExpandMode;
(function(PanelBarExpandMode2) {
  PanelBarExpandMode2[PanelBarExpandMode2["Single"] = 0] = "Single";
  PanelBarExpandMode2[PanelBarExpandMode2["Full"] = 1] = "Full";
  PanelBarExpandMode2[PanelBarExpandMode2["Multiple"] = 2] = "Multiple";
  PanelBarExpandMode2[PanelBarExpandMode2["Default"] = 2] = "Default";
})(PanelBarExpandMode || (PanelBarExpandMode = {}));
var nextPanelbarId = 0;
var PanelBarService = class {
  constructor() {
    this.parentSource = new Subject();
    this.keepContentSource = new BehaviorSubject(false);
    this.childSource = new Subject();
    this.itemClick = new Subject();
    this.parent$ = this.parentSource.asObservable();
    this.children$ = this.childSource.asObservable();
    this.keepContent$ = this.keepContentSource.asObservable();
    this.pbId = nextPanelbarId++;
  }
  onKeepContent(keepContent) {
    this.keepContentSource.next(keepContent);
  }
  onSelect(event) {
    this.childSource.next(event);
  }
  onFocus() {
    this.parentSource.next(true);
  }
  onBlur() {
    this.parentSource.next(false);
  }
};
PanelBarService.ɵfac = function PanelBarService_Factory(t) {
  return new (t || PanelBarService)();
};
PanelBarService.ɵprov = ɵɵdefineInjectable({
  token: PanelBarService,
  factory: PanelBarService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var PanelBarContentDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PanelBarContentDirective.ɵfac = function PanelBarContentDirective_Factory(t) {
  return new (t || PanelBarContentDirective)(ɵɵdirectiveInject(TemplateRef));
};
PanelBarContentDirective.ɵdir = ɵɵdefineDirective({
  type: PanelBarContentDirective,
  selectors: [["", "kendoPanelBarContent", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarContentDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPanelBarContent]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var PanelBarItemTitleDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PanelBarItemTitleDirective.ɵfac = function PanelBarItemTitleDirective_Factory(t) {
  return new (t || PanelBarItemTitleDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PanelBarItemTitleDirective.ɵdir = ɵɵdefineDirective({
  type: PanelBarItemTitleDirective,
  selectors: [["", "kendoPanelBarItemTitle", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarItemTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPanelBarItemTitle]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var nextId$1 = 0;
var SIZES2 = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS2 = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var SHAPE_TO_ROUNDED = {
  rounded: "large",
  circle: "full"
};
var parsePanelBarItems = (data) => {
  return data.map((item) => {
    if (!isPresent4(item.id)) {
      item.id = `default-${nextId$1++}`;
    }
    if (item.children) {
      item.children = parsePanelBarItems(item.children);
    }
    return item;
  });
};
var isPresent4 = (value) => value !== null && value !== void 0;
var isHorizontalArrowKey = (keyCode) => keyCode === Keys.ArrowLeft || keyCode === Keys.ArrowRight;
var isVerticalArrowKey = (keyCode) => keyCode === Keys.ArrowUp || keyCode === Keys.ArrowDown;
var isArrowKey = (keyCode) => isHorizontalArrowKey(keyCode) || isVerticalArrowKey(keyCode);
var isNavigationKey = (keyCode) => keyCode === Keys.PageUp || keyCode === Keys.PageDown || keyCode === Keys.Home || keyCode === Keys.End;
var getStylingClasses2 = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES2[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES2[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDNESS2[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDNESS2[newValue]}` : ""
      };
    default:
      break;
  }
};
var mapShapeToRounded = (shape) => SHAPE_TO_ROUNDED[shape] || "none";
var isNumber = (value) => typeof value === "number" && isFinite(value);
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var toClassList = (classNames) => String(classNames).trim().split(" ");
var isFocusable = (element) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    const skipTab = tabIndex === "-1";
    let focusable = tabIndex !== null && !skipTab;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled && !skipTab;
    }
    return focusable;
  }
  return false;
};
var hasClass = (element, className) => Boolean(toClassList(element.className).find((name) => name === className));
var closestInScope = (target, predicate, scope, targetAttr) => {
  while (target && target !== scope && !predicate(target, targetAttr)) {
    target = target.parentNode;
  }
  if (target !== scope) {
    return target;
  }
};
var itemIndex = (item, indexAttr) => +item.getAttribute(indexAttr);
var hasItemIndex = (item, indexAttr) => isPresent4(item.getAttribute(indexAttr));
var closestItem = (target, targetAttr, scope) => closestInScope(target, hasItemIndex, scope, targetAttr);
var nextId = 0;
var PanelBarItemComponent = class {
  constructor(parent, eventService, element, renderer) {
    this.parent = parent;
    this.eventService = eventService;
    this.element = element;
    this.renderer = renderer;
    this.id = `default-${nextId++}`;
    this.icon = "";
    this.iconClass = "";
    this.imageUrl = "";
    this.disabled = false;
    this.selected = false;
    this.keepContent = false;
    this.hasChildItems = false;
    this.hasItems = false;
    this.hasContent = false;
    this.state = "inactive";
    this.role = "treeitem";
    this.titleAttribute = null;
    this.kItemClass = true;
    this.focused = false;
    this.wrapperFocused = false;
    this.subscriptions = new Subscription(() => {
    });
    this._expanded = false;
    this.subscriptions.add(eventService.parent$.subscribe((focused) => this.onWrapperFocusChange(focused)));
    this.subscriptions.add(eventService.keepContent$.subscribe((keepContent) => this.keepContent = keepContent));
    this.wrapperFocused = parent ? parent.focused : false;
    this.level = this.parent ? this.parent.level + 1 : 0;
  }
  /**
   * Defines an SVGIcon to be rendered.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * When set to `true`, expands the PanelBar item ([see example]({% slug items_panelbar %}#toc-expanded-state)).
   */
  set expanded(value) {
    const activeState = this.animate ? "active" : "activeWithoutAnimation";
    this.state = value ? activeState : "inactive";
    if (!this.keepContent) {
      this.toggleExpandedChildAnimations(value);
    }
    this._expanded = value;
  }
  get expanded() {
    return this._expanded;
  }
  get animate() {
    return this.eventService.animate;
  }
  get kStateDefaultClass() {
    return !this.disabled;
  }
  get kStateExpandedClass() {
    return !this.disabled && this.expanded && (this.hasChildItems || this.hasContent);
  }
  get itemId() {
    return "k-panelbar-" + this.eventService.pbId + "-item-" + this.id;
  }
  get ariaExpanded() {
    return this.hasChildItems || this.hasContent ? !this.disabled && this.expanded : null;
  }
  get ariaSelected() {
    return !this.disabled && this.selected;
  }
  get ariaDisabled() {
    return this.disabled ? true : null;
  }
  get headerClass() {
    return this.parent ? null : true;
  }
  /**
   * @hidden
   */
  get titleTemplate() {
    return this.titleTemplates.length > 0 ? this.titleTemplates.toArray()[0].templateRef : void 0;
  }
  /**
   * @hidden
   */
  headerHeight() {
    return this.element.nativeElement.offsetHeight - (this.contentWrapper ? this.contentWrapper.nativeElement.offsetHeight : 0);
  }
  ngOnInit() {
    this.addLevelClass();
  }
  ngAfterContentChecked() {
    this.hasItems = this.items && this.items.filter((item) => !item.hidden).length > 0;
    this.hasChildItems = this.contentItems.filter((item) => item !== this).length > 0 || this.hasItems;
    this.hasContent = this.contentTemplate !== void 0 && this.contentTemplate.length > 0 || this.content !== void 0;
    this.validateConfiguration();
  }
  ngAfterViewChecked() {
    if (this.items) {
      this.childrenItems = this.viewChildItems.toArray();
    } else {
      this.childrenItems = this.contentItems.filter((item) => item !== this);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  onItemAction() {
    if (!this.disabled) {
      this.eventService.onSelect(this);
    }
  }
  /**
   * @hidden
   */
  onItemClick(e) {
    if (!isFocusable(e.target)) {
      this.eventService.itemClick.next({
        item: this.serialize(),
        originalEvent: e
      });
      this.onItemAction();
    }
  }
  /**
   * @hidden
   */
  get iconClasses() {
    if (this.icon) {
      return `${this.icon}`;
    }
  }
  /**
   * @hidden
   */
  get customIconClasses() {
    if (this.iconClass) {
      return `${this.iconClass}`;
    }
  }
  /**
   * @hidden
   */
  get dirInnerCssClasses() {
    const dirClass = this.expanded ? "k-panelbar-collapse" : "k-panelbar-expand";
    return `k-panelbar-toggle ${dirClass}`;
  }
  /**
   * @hidden
   */
  get expanderSVGIcon() {
    return this.expanded ? chevronUpIcon : chevronDownIcon;
  }
  /**
   * @hidden
   */
  serialize() {
    return {
      content: this.content,
      disabled: this.disabled,
      expanded: this.expanded,
      focused: this.focused,
      icon: this.icon,
      iconClass: this.iconClass,
      svgIcon: this.svgIcon,
      id: this.id,
      imageUrl: this.imageUrl,
      selected: this.selected,
      title: this.title,
      children: this.items
    };
  }
  /**
   * @hidden
   */
  subTreeViewItems() {
    let subTree = [];
    this.viewChildItems.forEach((item) => {
      subTree = subTree.concat(item.subTreeViewItems());
      subTree.push(item);
    });
    return subTree;
  }
  /**
   * @hidden
   */
  validateConfiguration() {
    if (isDevMode()) {
      if (this.content && this.contentTemplate !== void 0 && this.contentTemplate.length > 0) {
        throw new Error("Invalid configuration: mixed template components and component property.");
      }
    }
  }
  /**
   * @hidden
   */
  toggleAnimationState(value) {
    if (!this.animate) {
      return;
    }
    this.state = value && this.eventService.expandMode !== PanelBarExpandMode.Single ? "active" : "activeWithoutAnimation";
  }
  /**
   * @hidden
   */
  toggleExpandedChildAnimations(value) {
    if (this.childrenItems) {
      this.childrenItems.forEach((child) => {
        if (child.expanded) {
          child.toggleAnimationState(value);
          child.toggleExpandedChildAnimations(value);
        }
      });
    }
  }
  /**
   * @hidden
   */
  addLevelClass() {
    if (this.level >= 0) {
      this.renderer.addClass(this.element.nativeElement, `k-level-${this.level}`);
    }
  }
  onWrapperFocusChange(focused) {
    this.wrapperFocused = focused;
  }
};
PanelBarItemComponent.ɵfac = function PanelBarItemComponent_Factory(t) {
  return new (t || PanelBarItemComponent)(ɵɵdirectiveInject(PanelBarItemComponent, 13), ɵɵdirectiveInject(PanelBarService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
PanelBarItemComponent.ɵcmp = ɵɵdefineComponent({
  type: PanelBarItemComponent,
  selectors: [["kendo-panelbar-item"]],
  contentQueries: function PanelBarItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PanelBarItemComponent, 4);
      ɵɵcontentQuery(dirIndex, PanelBarContentDirective, 4);
      ɵɵcontentQuery(dirIndex, PanelBarItemTitleDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentItems = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplates = _t);
    }
  },
  viewQuery: function PanelBarItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c04, 5);
      ɵɵviewQuery(_c15, 5);
      ɵɵviewQuery(PanelBarItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewChildItems = _t);
    }
  },
  hostVars: 14,
  hostBindings: function PanelBarItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.itemId);
      ɵɵattribute("role", ctx.role)("title", ctx.titleAttribute)("aria-expanded", ctx.ariaExpanded)("aria-selected", ctx.ariaSelected)("aria-disabled", ctx.ariaDisabled);
      ɵɵclassProp("k-panelbar-item", ctx.kItemClass)("k-state-default", ctx.kStateDefaultClass)("k-expanded", ctx.kStateExpandedClass)("k-panelbar-header", ctx.headerClass);
    }
  },
  inputs: {
    title: "title",
    id: "id",
    icon: "icon",
    iconClass: "iconClass",
    svgIcon: "svgIcon",
    imageUrl: "imageUrl",
    disabled: "disabled",
    expanded: "expanded",
    selected: "selected",
    content: "content",
    items: "items",
    template: "template"
  },
  exportAs: ["kendoPanelbarItem"],
  ngContentSelectors: _c72,
  decls: 8,
  vars: 14,
  consts: [[3, "click"], ["header", ""], ["innerCssClass", "k-panelbar-item-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-image k-panelbar-item-icon", "alt", "", 3, "src", 4, "ngIf"], [4, "ngIf"], [3, "name", "svgIcon", "innerCssClass", 4, "ngIf"], ["innerCssClass", "k-panelbar-item-icon", 3, "name", "customFontClass", "svgIcon"], ["alt", "", 1, "k-image", "k-panelbar-item-icon", 3, "src"], [1, "k-panelbar-item-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "name", "svgIcon", "innerCssClass"], ["contentWrapper", ""], ["class", "k-panel k-group k-panelbar-group", 3, "overflow", "height", 4, "ngIf"], ["class", "k-content k-panelbar-content", 3, "overflow", "height", 4, "ngIf"], [1, "k-panel", "k-group", "k-panelbar-group"], [1, "k-content", "k-panelbar-content"], [4, "ngFor", "ngForOf"], [3, "title", "id", "icon", "iconClass", "svgIcon", "imageUrl", "selected", "expanded", "disabled", "template", "items", "content", 4, "ngIf"], [3, "title", "id", "icon", "iconClass", "svgIcon", "imageUrl", "selected", "expanded", "disabled", "template", "items", "content"], [3, "ngIf"]],
  template: function PanelBarItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c62);
      ɵɵelementStart(0, "span", 0, 1);
      ɵɵlistener("click", function PanelBarItemComponent_Template_span_click_0_listener($event) {
        return ctx.onItemClick($event);
      });
      ɵɵtemplate(2, PanelBarItemComponent_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 2)(3, PanelBarItemComponent_img_3_Template, 1, 1, "img", 3)(4, PanelBarItemComponent_ng_container_4_Template, 3, 1, "ng-container", 4)(5, PanelBarItemComponent_5_Template, 1, 16, null, 4)(6, PanelBarItemComponent_kendo_icon_wrapper_6_Template, 1, 3, "kendo-icon-wrapper", 5);
      ɵɵelementEnd();
      ɵɵtemplate(7, PanelBarItemComponent_div_7_Template, 6, 7, "div", 4);
    }
    if (rf & 2) {
      ɵɵclassProp("k-link", true)("k-selected", !ctx.disabled && ctx.selected)("k-focus", ctx.focused && ctx.wrapperFocused)("k-disabled", ctx.disabled);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.icon || ctx.iconClass || ctx.svgIcon);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.titleTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.titleTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasChildItems || ctx.hasContent);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.keepContent || !ctx.disabled && ctx.expanded && (ctx.hasChildItems || ctx.hasContent));
    }
  },
  dependencies: [IconWrapperComponent, PanelBarItemComponent, NgIf, NgTemplateOutlet, NgForOf],
  encapsulation: 2,
  data: {
    animation: [trigger("toggle", [state("inactive", style({
      display: "none"
    })), transition("* => active", [style({
      overflow: "hidden",
      display: "block",
      height: 0
    }), animate(200, style({
      height: AUTO_STYLE
    }))]), transition("active => *", [style({
      overflow: "hidden",
      height: AUTO_STYLE
    }), animate(200, style({
      height: 0,
      display: "none"
    }))])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarItemComponent, [{
    type: Component,
    args: [{
      animations: [trigger("toggle", [state("inactive", style({
        display: "none"
      })), transition("* => active", [style({
        overflow: "hidden",
        display: "block",
        height: 0
      }), animate(200, style({
        height: AUTO_STYLE
      }))]), transition("active => *", [style({
        overflow: "hidden",
        height: AUTO_STYLE
      }), animate(200, style({
        height: 0,
        display: "none"
      }))])])],
      exportAs: "kendoPanelbarItem",
      selector: "kendo-panelbar-item",
      template: `
            <span
                #header
                [class.k-link]="true"
                [class.k-selected]="!disabled && selected"
                [class.k-focus]="focused && wrapperFocused"
                [class.k-disabled]="disabled"
                (click)="onItemClick($event)">
                <kendo-icon-wrapper
                    *ngIf="icon || iconClass || svgIcon"
                    [name]="iconClasses"
                    [customFontClass]="customIconClasses"
                    [svgIcon]="svgIcon"
                    innerCssClass="k-panelbar-item-icon"
                >
                </kendo-icon-wrapper>
                <img
                    *ngIf="imageUrl"
                    class="k-image k-panelbar-item-icon"
                    [src]="imageUrl"
                    alt="">
                <ng-container *ngIf="!titleTemplate"><span class="k-panelbar-item-text">{{title}}</span></ng-container>
                <ng-template *ngIf="titleTemplate"
                [ngTemplateOutlet]="titleTemplate"
                [ngTemplateOutletContext]="{
                    item: {
                        title: title,
                        id: id,
                        icon: icon,
                        iconClass: iconClass,
                        svgIcon: svgIcon,
                        imageUrl: imageUrl,
                        selected: selected,
                        expanded: expanded,
                        disabled: disabled,
                        focused: focused,
                        content: content
                    }
                }"></ng-template>
                <kendo-icon-wrapper
                    *ngIf="hasChildItems || hasContent"
                    [name]="expanded ? 'arrow-chevron-up' : 'chevron-down'"
                    [svgIcon]="expanderSVGIcon"
                    [innerCssClass]="dirInnerCssClasses"
                >
                </kendo-icon-wrapper>
            </span>
            <div 
                #contentWrapper
                *ngIf="keepContent || (!disabled && expanded && (hasChildItems || hasContent))"
                [@toggle]="state"
                [attr.role]="'group'"
                [attr.aria-hidden]="!disabled && !expanded"
            >
                <div
                    *ngIf="hasChildItems && !items?.length"
                    [style.overflow]="contentOverflow"
                    [style.height]="contentHeight"
                    class="k-panel k-group k-panelbar-group"
                >
                    <ng-content select="kendo-panelbar-item"></ng-content>
                </div>
                <div
                    *ngIf="hasContent && !content"
                    [style.overflow]="contentOverflow"
                    [style.height]="contentHeight"
                    class="k-content k-panelbar-content">
                    <ng-template
                        [ngTemplateOutlet]="contentTemplate.first.templateRef"
                        [ngTemplateOutletContext]="{
                            $implicit: {
                                title: title,
                                id: id,
                                icon: icon,
                                imageUrl: imageUrl,
                                disabled: disabled,
                                content: content
                            }
                        }">
                    </ng-template>
                </div>
                <div *ngIf="hasItems"
                    [style.overflow]="contentOverflow"
                    [style.height]="contentHeight"
                    class="k-panel k-group k-panelbar-group">
                    <ng-container *ngFor="let item of items">
                        <kendo-panelbar-item *ngIf="!item.hidden"
                            [title]="item.title"
                            [id]="item.id"
                            [icon]="item.icon"
                            [iconClass]="item.iconClass"
                            [svgIcon]="item.svgIcon"
                            [imageUrl]="item.imageUrl"
                            [selected]="!!item.selected"
                            [expanded]="!!item.expanded"
                            [disabled]="!!item.disabled"
                            [template]="template"
                            [items]="item.children"
                            [content]="item.content">
                        </kendo-panelbar-item>
                    </ng-container>
                </div>
                <div
                    *ngIf="content"
                    [style.overflow]="contentOverflow"
                    [style.height]="contentHeight"
                    class="k-content k-panelbar-content">
                    <ng-template
                        [ngTemplateOutlet]="template"
                        [ngTemplateOutletContext]="{
                            $implicit: {
                                title: title,
                                id: id,
                                icon: icon,
                                imageUrl: imageUrl,
                                disabled: disabled,
                                content: content
                            }
                        }">
                    </ng-template>
                    <ng-template [ngIf]="!template">{{content}}</ng-template>
                </div>
            </div>`
    }]
  }], function() {
    return [{
      type: PanelBarItemComponent,
      decorators: [{
        type: SkipSelf
      }, {
        type: Host
      }, {
        type: Optional
      }]
    }, {
      type: PanelBarService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    title: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    header: [{
      type: ViewChild,
      args: ["header", {
        static: false
      }]
    }],
    contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    titleAttribute: [{
      type: HostBinding,
      args: ["attr.title"]
    }],
    kItemClass: [{
      type: HostBinding,
      args: ["class.k-panelbar-item"]
    }],
    kStateDefaultClass: [{
      type: HostBinding,
      args: ["class.k-state-default"]
    }],
    kStateExpandedClass: [{
      type: HostBinding,
      args: ["class.k-expanded"]
    }],
    itemId: [{
      type: HostBinding,
      args: ["id"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    ariaSelected: [{
      type: HostBinding,
      args: ["attr.aria-selected"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    headerClass: [{
      type: HostBinding,
      args: ["class.k-panelbar-header"]
    }],
    viewChildItems: [{
      type: ViewChildren,
      args: [PanelBarItemComponent]
    }],
    contentItems: [{
      type: ContentChildren,
      args: [PanelBarItemComponent]
    }],
    contentTemplate: [{
      type: ContentChildren,
      args: [PanelBarContentDirective, {
        descendants: false
      }]
    }],
    titleTemplates: [{
      type: ContentChildren,
      args: [PanelBarItemTitleDirective, {
        descendants: false
      }]
    }]
  });
})();
var PanelBarItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PanelBarItemTemplateDirective.ɵfac = function PanelBarItemTemplateDirective_Factory(t) {
  return new (t || PanelBarItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PanelBarItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PanelBarItemTemplateDirective,
  selectors: [["", "kendoPanelBarItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPanelBarItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var PreventableEvent3 = class {
  /**
   * @hidden
   */
  constructor(args) {
    this.prevented = false;
    Object.assign(this, args);
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var PanelBarCollapseEvent = class extends PreventableEvent3 {
};
var PanelBarExpandEvent = class extends PreventableEvent3 {
};
var PanelBarSelectEvent = class extends PreventableEvent3 {
};
var PanelBarStateChangeEvent = class {
};
var PanelBarItemClickEvent = class {
};
var PanelBarComponent = class {
  constructor(elementRef, eventService, localization) {
    this.localization = localization;
    this.expandMode = PanelBarExpandMode.Default;
    this.selectable = true;
    this.animate = true;
    this.height = "400px";
    this.stateChange = new EventEmitter();
    this.select = new EventEmitter();
    this.expand = new EventEmitter();
    this.collapse = new EventEmitter();
    this.itemClick = new EventEmitter();
    this.hostClasses = true;
    this.tabIndex = 0;
    this.role = "tree";
    this.activeDescendant = "";
    this.showLicenseWatermark = false;
    this.isViewInit = true;
    this.focused = false;
    this._keepItemContent = false;
    this.subs = new Subscription();
    this.updateChildrenHeight = () => {
      let childrenHeight = 0;
      const panelbarHeight = this.elementRef.nativeElement.offsetHeight;
      const contentOverflow = this.expandMode === PanelBarExpandMode.Full ? "auto" : "visible";
      this.childrenItems.forEach((item) => {
        childrenHeight += item.headerHeight();
      });
      this.childrenItems.forEach((item) => {
        item.contentHeight = PanelBarExpandMode.Full === this.expandMode ? panelbarHeight - childrenHeight + "px" : "auto";
        item.contentOverflow = contentOverflow;
      });
    };
    const isValid = validatePackage(packageMetadata5);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.keyBindings = this.computedKeys;
    this.elementRef = elementRef;
    this.eventService = eventService;
    this.subs.add(this.eventService.children$.subscribe((event) => this.onItemAction(event)));
    this.subs.add(this.eventService.itemClick.subscribe((ev) => this.itemClick.emit(ev)));
  }
  /**
   * When set to `true`, the PanelBar renders the content of all items and they are persisted in the DOM
   * ([see example]({% slug templates_panelbar %}#toc-collections)).
   * By default, this option is set to `false`.
   */
  get keepItemContent() {
    return this._keepItemContent;
  }
  set keepItemContent(keepItemContent) {
    this._keepItemContent = keepItemContent;
    this.eventService.onKeepContent(keepItemContent);
  }
  /**
   * Sets the items of the PanelBar as an array of `PanelBarItemModel` instances
   * ([see example]({% slug items_panelbar %})).
   */
  set items(data) {
    if (data) {
      this._items = parsePanelBarItems(data);
    }
  }
  get items() {
    return this._items;
  }
  get hostHeight() {
    return this.expandMode === PanelBarExpandMode.Full ? this.height : "auto";
  }
  get overflow() {
    return this.expandMode === PanelBarExpandMode.Full ? "hidden" : "visible";
  }
  get dir() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  /**
   * @hidden
   */
  invertKeys(original, inverted) {
    return this.localization.rtl ? inverted : original;
  }
  get computedKeys() {
    return {
      [Keys.Space]: () => this.selectFocusedItem(),
      [Keys.Enter]: () => this.selectFocusedItem(),
      [Keys.ArrowUp]: () => this.focusPreviousItem(),
      [this.invertKeys(Keys.ArrowLeft, Keys.ArrowRight)]: () => this.collapseItem(),
      [Keys.ArrowDown]: () => this.focusNextItem(),
      [this.invertKeys(Keys.ArrowRight, Keys.ArrowLeft)]: () => this.expandItem(),
      [Keys.End]: () => this.focusLastItem(),
      [Keys.Home]: () => this.focusFirstItem()
    };
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnInit() {
    this.subs.add(this.localization.changes.subscribe(() => this.keyBindings = this.computedKeys));
    this.eventService.animate = this.animate;
    this.eventService.expandMode = this.expandMode;
  }
  ngAfterViewChecked() {
    if (this.items) {
      this.childrenItems = this.viewChildItems.toArray();
      this.allItems = this.viewItems;
    } else {
      this.childrenItems = this.contentChildItems.toArray();
      this.allItems = this.contentItems.toArray();
    }
    if (this.isViewInit && this.childrenItems.length) {
      this.isViewInit = false;
      setTimeout(() => this.updateChildrenHeight());
    }
    this.validateConfiguration();
  }
  ngOnChanges(changes) {
    if (changes["height"] || changes["expandMode"] || changes["items"]) {
      if (this.childrenItems) {
        setTimeout(this.updateChildrenHeight);
      }
    }
    if (changes["animate"]) {
      this.eventService.animate = this.animate;
    }
    if (changes["expandMode"]) {
      this.eventService.expandMode = this.expandMode;
    }
  }
  get templateRef() {
    return this.template ? this.template.templateRef : void 0;
  }
  /**
   * @hidden
   */
  onComponentClick(event) {
    const itemClicked = this.visibleItems().some((item) => {
      return item.header.nativeElement.contains(event.target);
    });
    if (!isFocusable(event.target) && !this.focused && itemClicked) {
      this.elementRef.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onComponentFocus() {
    this.eventService.onFocus();
    this.focused = true;
    if (this.allItems.length > 0) {
      const visibleItems = this.visibleItems();
      const focusedItems = visibleItems.filter((item) => item.focused);
      if (!focusedItems.length && visibleItems.length > 0) {
        visibleItems[0].focused = true;
        this.activeDescendant = visibleItems[0].itemId;
      }
    }
  }
  /**
   * @hidden
   */
  onComponentBlur() {
    this.eventService.onBlur();
    this.focused = false;
    this.activeDescendant = "";
  }
  /**
   * @hidden
   */
  onComponentKeyDown(event) {
    if (event.target === this.elementRef.nativeElement) {
      if (event.keyCode === Keys.Space || event.keyCode === Keys.ArrowUp || event.keyCode === Keys.ArrowDown || event.keyCode === Keys.ArrowLeft || event.keyCode === Keys.ArrowRight || event.keyCode === Keys.Home || event.keyCode === Keys.End || event.keyCode === Keys.PageUp || event.keyCode === Keys.PageDown) {
        event.preventDefault();
      }
      const handler = this.keyBindings[event.keyCode];
      if (handler) {
        handler();
      }
    }
  }
  /**
   * @hidden
   */
  emitEvent(event, item) {
    let eventArgs;
    switch (event) {
      case "select":
        eventArgs = new PanelBarSelectEvent();
        break;
      case "collapse":
        eventArgs = new PanelBarCollapseEvent();
        break;
      default:
        eventArgs = new PanelBarExpandEvent();
        break;
    }
    eventArgs.item = item.serialize();
    this[event].emit(eventArgs);
    return eventArgs;
  }
  get viewItems() {
    let treeItems = [];
    this.viewChildItems.toArray().forEach((item) => {
      treeItems.push(item);
      treeItems = treeItems.concat(item.subTreeViewItems());
    });
    return treeItems;
  }
  validateConfiguration() {
    if (isDevMode()) {
      if (this.items && this.contentItems && this.contentItems.length > 0) {
        throw new Error("Invalid configuration: mixed template components and items property.");
      }
    }
  }
  onItemAction(item) {
    if (!item) {
      return;
    }
    const modifiedItems = new Array();
    const selectPreventedItems = [];
    this.allItems.forEach((currentItem) => {
      let selectedState = currentItem === item;
      const focusedState = selectedState;
      selectedState = this.selectable ? selectedState : currentItem.selected;
      if (currentItem.selected !== selectedState || currentItem.focused !== focusedState) {
        const isSelectPrevented = selectedState ? this.emitEvent("select", currentItem).isDefaultPrevented() : false;
        if (!isSelectPrevented) {
          currentItem.selected = selectedState;
          currentItem.focused = focusedState;
          this.activeDescendant = focusedState ? currentItem.itemId : "";
          modifiedItems.push(currentItem);
        } else {
          selectPreventedItems.push(currentItem);
        }
      }
    });
    if (this.expandMode === PanelBarExpandMode.Multiple) {
      if ((item.hasChildItems || item.hasContent) && !selectPreventedItems.includes(item)) {
        const isEventPrevented = item.expanded ? this.emitEvent("collapse", item).isDefaultPrevented() : this.emitEvent("expand", item).isDefaultPrevented();
        if (!isEventPrevented) {
          item.expanded = !item.expanded;
          if (modifiedItems.indexOf(item) < 0) {
            modifiedItems.push(item);
          }
        }
      }
    } else {
      const siblings = item.parent ? item.parent.childrenItems : this.childrenItems;
      let preventedCollapseItem;
      const expandedItems = [];
      if ((item.hasChildItems || item.hasContent) && !selectPreventedItems.includes(item)) {
        siblings.forEach((currentItem) => {
          const expandedState = currentItem === item;
          if (currentItem.expanded !== expandedState) {
            const isEventPrevented = currentItem.expanded ? this.emitEvent("collapse", currentItem).isDefaultPrevented() : this.emitEvent("expand", currentItem).isDefaultPrevented();
            if (!isEventPrevented) {
              currentItem.expanded = expandedState;
              if (currentItem.expanded) {
                expandedItems.push(currentItem);
              }
              if (modifiedItems.indexOf(currentItem) < 0) {
                modifiedItems.push(currentItem);
              }
            } else if (isEventPrevented && currentItem.expanded) {
              preventedCollapseItem = currentItem;
            }
          } else if (currentItem.expanded === expandedState && expandedState) {
            const isCollapsePrevented = this.emitEvent("collapse", currentItem).isDefaultPrevented();
            if (!isCollapsePrevented) {
              currentItem.expanded = !currentItem.expanded;
              if (modifiedItems.indexOf(currentItem) < 0) {
                modifiedItems.push(currentItem);
              }
            }
          }
        });
        expandedItems.forEach((item2) => {
          if (preventedCollapseItem && item2.id !== preventedCollapseItem.id) {
            item2.expanded = false;
            if (isDevMode()) {
              const expandMode = PanelBarExpandMode[this.expandMode].toLowerCase();
              console.warn(`
                            The ${expandMode} expandMode allows the expansion of only one item at a time.
                            See https://www.telerik.com/kendo-angular-ui-develop/components/layout/panelbar/expand-modes/`);
            }
          }
        });
      }
    }
    if (modifiedItems.length > 0) {
      const eventArgs = new PanelBarStateChangeEvent();
      eventArgs.items = modifiedItems.map((currentItem) => currentItem.serialize());
      this.stateChange.emit(eventArgs);
    }
  }
  isVisible(item) {
    const visibleItems = this.visibleItems();
    return visibleItems.some((i) => i === item);
  }
  getVisibleParent(item) {
    const visibleItems = this.visibleItems();
    if (!item.parent) {
      return item;
    }
    return visibleItems.some((i) => i === item.parent) ? item.parent : this.getVisibleParent(item.parent);
  }
  focusItem(action) {
    const visibleItems = this.visibleItems();
    let currentIndex = visibleItems.findIndex((item) => item.focused);
    let currentItem = visibleItems[currentIndex];
    let nextItem;
    if (currentIndex === -1) {
      const focusedItem = this.allItems.find((item) => item.focused);
      focusedItem.focused = false;
      currentItem = this.getVisibleParent(focusedItem);
      currentIndex = visibleItems.findIndex((item) => item === currentItem);
    }
    switch (action) {
      case "lastItem":
        nextItem = visibleItems[visibleItems.length - 1];
        break;
      case "firstItem":
        nextItem = visibleItems[0];
        break;
      case "nextItem":
        nextItem = visibleItems[currentIndex < visibleItems.length - 1 ? currentIndex + 1 : 0];
        break;
      case "previousItem":
        nextItem = visibleItems[currentIndex > 0 ? currentIndex - 1 : visibleItems.length - 1];
        break;
      default:
    }
    if (currentItem && nextItem && currentItem !== nextItem) {
      this.moveFocus(currentItem, nextItem);
    }
  }
  moveFocus(from2, to) {
    from2.focused = false;
    to.focused = true;
    this.activeDescendant = to.itemId;
    const modifiedItems = new Array(from2.serialize(), to.serialize());
    const eventArgs = new PanelBarStateChangeEvent();
    eventArgs.items = modifiedItems;
    this.stateChange.emit(eventArgs);
  }
  focusLastItem() {
    this.focusItem("lastItem");
  }
  focusFirstItem() {
    this.focusItem("firstItem");
  }
  focusNextItem() {
    this.focusItem("nextItem");
  }
  focusPreviousItem() {
    this.focusItem("previousItem");
  }
  expandItem() {
    let currentItem = this.allItems.filter((item) => item.focused)[0];
    if (!this.isVisible(currentItem)) {
      currentItem.focused = false;
      currentItem = this.getVisibleParent(currentItem);
    }
    if (currentItem.hasChildItems || currentItem.hasContent) {
      if (!currentItem.expanded) {
        this.onItemAction(currentItem);
      } else if (currentItem.hasChildItems) {
        const firstChildIndex = currentItem.childrenItems.findIndex((item) => !item.disabled);
        if (firstChildIndex > -1) {
          this.moveFocus(currentItem, currentItem.childrenItems[firstChildIndex]);
        }
      }
    }
  }
  collapseItem() {
    const currentItem = this.allItems.filter((item) => item.focused)[0];
    if (currentItem.expanded) {
      this.onItemAction(currentItem);
    } else if (currentItem.parent) {
      this.moveFocus(currentItem, currentItem.parent);
    }
  }
  selectFocusedItem() {
    let focusedItem = this.allItems.filter((item) => item.focused)[0];
    if (!this.isVisible(focusedItem)) {
      focusedItem.focused = false;
      focusedItem = this.getVisibleParent(focusedItem);
    }
    if (focusedItem) {
      focusedItem.onItemAction();
    }
  }
  visibleItems() {
    return this.flatVisibleItems(this.childrenItems);
  }
  flatVisibleItems(listOfItems = new Array(), flattedItems = new Array()) {
    listOfItems.forEach((item) => {
      flattedItems.push(item);
      if (item.expanded && item.hasChildItems) {
        this.flatVisibleItems(item.childrenItems, flattedItems);
      }
    });
    return flattedItems;
  }
};
PanelBarComponent.ɵfac = function PanelBarComponent_Factory(t) {
  return new (t || PanelBarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PanelBarService), ɵɵdirectiveInject(LocalizationService));
};
PanelBarComponent.ɵcmp = ɵɵdefineComponent({
  type: PanelBarComponent,
  selectors: [["kendo-panelbar"]],
  contentQueries: function PanelBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PanelBarItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PanelBarItemComponent, 5);
      ɵɵcontentQuery(dirIndex, PanelBarItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentItems = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentChildItems = _t);
    }
  },
  viewQuery: function PanelBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(PanelBarItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewChildItems = _t);
    }
  },
  hostVars: 12,
  hostBindings: function PanelBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function PanelBarComponent_click_HostBindingHandler($event) {
        return ctx.onComponentClick($event);
      })("focus", function PanelBarComponent_focus_HostBindingHandler() {
        return ctx.onComponentFocus();
      })("blur", function PanelBarComponent_blur_HostBindingHandler() {
        return ctx.onComponentBlur();
      })("keydown", function PanelBarComponent_keydown_HostBindingHandler($event) {
        return ctx.onComponentKeyDown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabIndex", ctx.tabIndex)("role", ctx.role)("aria-activedescendant", ctx.activeDescendant)("dir", ctx.dir);
      ɵɵstyleProp("height", ctx.hostHeight)("overflow", ctx.overflow);
      ɵɵclassProp("k-panelbar", ctx.hostClasses)("k-pos-relative", ctx.hostClasses);
    }
  },
  inputs: {
    expandMode: "expandMode",
    selectable: "selectable",
    animate: "animate",
    height: "height",
    keepItemContent: "keepItemContent",
    items: "items"
  },
  outputs: {
    stateChange: "stateChange",
    select: "select",
    expand: "expand",
    collapse: "collapse",
    itemClick: "itemClick"
  },
  exportAs: ["kendoPanelbar"],
  features: [ɵɵProvidersFeature([PanelBarService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.panelbar"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c72,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [3, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "title", "id", "icon", "iconClass", "svgIcon", "imageUrl", "selected", "expanded", "disabled", "template", "items", "content", 4, "ngIf"], [3, "title", "id", "icon", "iconClass", "svgIcon", "imageUrl", "selected", "expanded", "disabled", "template", "items", "content"], ["kendoWatermarkOverlay", ""]],
  template: function PanelBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c62);
      ɵɵtemplate(0, PanelBarComponent_ng_content_0_Template, 1, 0, "ng-content", 0)(1, PanelBarComponent_ng_template_1_Template, 1, 1, "ng-template", 1)(2, PanelBarComponent_div_2_Template, 1, 0, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.contentChildItems && !ctx.items);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.items == null ? null : ctx.items.length);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [PanelBarItemComponent, WatermarkOverlayComponent, NgIf, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoPanelbar",
      providers: [PanelBarService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.panelbar"
      }],
      selector: "kendo-panelbar",
      template: `
        <ng-content *ngIf="contentChildItems && !items" select="kendo-panelbar-item"></ng-content>
        <ng-template [ngIf]="items?.length">
            <ng-container *ngFor="let item of items">
                <kendo-panelbar-item *ngIf="!item.hidden"
                    [title]="item.title"
                    [id]="item.id"
                    [icon]="item.icon"
                    [iconClass]="item.iconClass"
                    [svgIcon]="item.svgIcon"
                    [imageUrl]="item.imageUrl"
                    [selected]="!!item.selected"
                    [expanded]="!!item.expanded"
                    [disabled]="!!item.disabled"
                    [template]="templateRef"
                    [items]="item.children"
                    [content]="item.content"
                >
                </kendo-panelbar-item>
            </ng-container>
        </ng-template>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: PanelBarService
    }, {
      type: LocalizationService
    }];
  }, {
    expandMode: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    keepItemContent: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    stateChange: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-panelbar"]
    }, {
      type: HostBinding,
      args: ["class.k-pos-relative"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    activeDescendant: [{
      type: HostBinding,
      args: ["attr.aria-activedescendant"]
    }],
    hostHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    overflow: [{
      type: HostBinding,
      args: ["style.overflow"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    template: [{
      type: ContentChild,
      args: [PanelBarItemTemplateDirective, {
        static: false
      }]
    }],
    contentItems: [{
      type: ContentChildren,
      args: [PanelBarItemComponent, {
        descendants: true
      }]
    }],
    contentChildItems: [{
      type: ContentChildren,
      args: [PanelBarItemComponent]
    }],
    viewChildItems: [{
      type: ViewChildren,
      args: [PanelBarItemComponent]
    }],
    onComponentClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onComponentFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onComponentBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onComponentKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var SplitterPaneComponent = class {
  constructor(element, renderer, cdr) {
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.separatorLabel = "Splitter pane";
    this.resizable = true;
    this.collapsible = false;
    this.scrollable = true;
    this.collapsed = false;
    this.orientation = "horizontal";
    this.overlayContent = false;
    this.sizeChange = new EventEmitter();
    this.collapsedChange = new EventEmitter();
    this.ariaRole = "group";
    this.hostClass = true;
    this.forceExpand = false;
    this.isResized = false;
  }
  /**
   * @hidden
   */
  set order(paneOrder) {
    this._order = paneOrder;
    this.setOrderStyles();
  }
  get order() {
    return this._order;
  }
  /**
   * Sets the initial size of the pane.
   * Has to be between the `min` and `max` properties.
   */
  set size(newSize) {
    this._size = newSize;
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, "-ms-flex-preferred-size", newSize);
    this.renderer.setStyle(element, "flex-basis", newSize);
    if (this.staticPaneClass) {
      this.renderer.addClass(element, "k-pane-static");
    } else {
      this.renderer.removeClass(element, "k-pane-static");
    }
  }
  get size() {
    return this._size;
  }
  /**
   * @hidden
   */
  set containsSplitter(value) {
    const element = this.element.nativeElement;
    if (value) {
      this.renderer.addClass(element, "k-pane-flex");
    } else {
      this.renderer.removeClass(element, "k-pane-flex");
    }
  }
  get isHidden() {
    return this.collapsed;
  }
  get staticPaneClass() {
    if (this.forceExpand) {
      return false;
    }
    return !this.resizable && !this.collapsible || this.fixedSize;
  }
  get scrollablePaneClass() {
    return this.scrollable;
  }
  get fixedSize() {
    return this.size && this.size.length > 0;
  }
  ngAfterViewChecked() {
    const element = this.element.nativeElement;
    if (this.isHidden) {
      this.renderer.addClass(element, "k-hidden");
      this.renderer.addClass(element, "hidden");
    } else {
      this.renderer.removeClass(element, "k-hidden");
      this.renderer.removeClass(element, "hidden");
    }
  }
  /**
   * @hidden
   */
  get computedSize() {
    if (this.orientation === "vertical") {
      return this.element.nativeElement.offsetHeight;
    } else {
      return this.element.nativeElement.offsetWidth;
    }
  }
  /**
   * @hidden
   */
  toggleOverlay(show) {
    this.overlayContent = show;
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */
  detectChanges() {
    this.cdr.detectChanges();
  }
  setOrderStyles() {
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, "-ms-flex-order", this.order);
    this.renderer.setStyle(element, "order", this.order);
  }
};
SplitterPaneComponent.ɵfac = function SplitterPaneComponent_Factory(t) {
  return new (t || SplitterPaneComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
SplitterPaneComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitterPaneComponent,
  selectors: [["kendo-splitter-pane"]],
  hostVars: 7,
  hostBindings: function SplitterPaneComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.ariaRole);
      ɵɵclassProp("k-pane", ctx.hostClass)("k-pane-static", ctx.staticPaneClass)("k-scrollable", ctx.scrollablePaneClass);
    }
  },
  inputs: {
    order: "order",
    size: "size",
    separatorLabel: "separatorLabel",
    min: "min",
    max: "max",
    resizable: "resizable",
    collapsible: "collapsible",
    scrollable: "scrollable",
    collapsed: "collapsed",
    orientation: "orientation",
    containsSplitter: "containsSplitter",
    overlayContent: "overlayContent"
  },
  outputs: {
    sizeChange: "sizeChange",
    collapsedChange: "collapsedChange"
  },
  exportAs: ["kendoSplitterPane"],
  ngContentSelectors: _c82,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "k-splitter-overlay k-overlay", 4, "ngIf"], [1, "k-splitter-overlay", "k-overlay"]],
  template: function SplitterPaneComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, SplitterPaneComponent_ng_container_0_Template, 2, 0, "ng-container", 0)(1, SplitterPaneComponent_div_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.collapsed);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.overlayContent);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterPaneComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitterPane",
      selector: "kendo-splitter-pane",
      template: `
        <ng-container *ngIf="!collapsed"><ng-content></ng-content></ng-container>
        <div *ngIf="overlayContent" class="k-splitter-overlay k-overlay"></div>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    order: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    separatorLabel: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    collapsible: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    containsSplitter: [{
      type: Input
    }],
    overlayContent: [{
      type: Input
    }],
    sizeChange: [{
      type: Output
    }],
    collapsedChange: [{
      type: Output
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-pane"]
    }],
    staticPaneClass: [{
      type: HostBinding,
      args: ["class.k-pane-static"]
    }],
    scrollablePaneClass: [{
      type: HostBinding,
      args: ["class.k-scrollable"]
    }]
  });
})();
var shouldTogglePrev = (keyCode, prev, next) => {
  const leftArrow = keyCode === Keys.ArrowLeft;
  const upArrow = keyCode === Keys.ArrowUp;
  const collapsePrev = !prev.collapsed && !next.collapsed && (leftArrow || upArrow);
  const expandPrev = prev.collapsed && !(leftArrow || upArrow);
  return collapsePrev || expandPrev;
};
var shouldToggleNext = (keyCode, prev, next) => {
  const leftArrow = keyCode === Keys.ArrowLeft;
  const upArrow = keyCode === Keys.ArrowUp;
  const collapseNext = !next.collapsed && !prev.collapsed && !(leftArrow || upArrow);
  const expandNext = next.collapsed && (leftArrow || upArrow);
  return collapseNext || expandNext;
};
var shouldToggleOrResize = (keyCode, orientation) => {
  const isHorizontal = orientation === "horizontal";
  const isHorizontalChange = isHorizontal && (keyCode === Keys.ArrowLeft || keyCode === Keys.ArrowRight);
  const isVerticalChange = !isHorizontal && (keyCode === Keys.ArrowUp || keyCode === Keys.ArrowDown);
  return isHorizontalChange || isVerticalChange;
};
var SIZING_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/layout/splitter/panes/#toc-size";
var SplitterService = class {
  constructor(zone) {
    this.zone = zone;
    this.layoutChange = new EventEmitter();
    this.resizeStep = 10;
    this.containerSize = () => {
    };
  }
  tryToggle(paneIndex) {
    const pane = this.pane(paneIndex);
    if (pane.collapsible) {
      pane.collapsed = !pane.collapsed;
      pane.collapsedChange.emit(pane.collapsed);
      this.emit(this.layoutChange, {});
      if (pane.collapsed) {
        pane.detectChanges();
      }
    }
    const notCollapsed = this.panes.filter((p) => !p.collapsed);
    const allHaveFixedSize = notCollapsed.every((p) => p.fixedSize);
    notCollapsed[notCollapsed.length - 1].forceExpand = allHaveFixedSize ? true : false;
    return pane.collapsible;
  }
  togglePane(keyCode, index) {
    const prev = this.pane(index);
    const next = this.pane(index + 1);
    if (shouldTogglePrev(keyCode, prev, next)) {
      this.tryToggle(index);
    } else if (shouldToggleNext(keyCode, prev, next)) {
      this.tryToggle(index + 1);
    }
  }
  resizePane(keyCode, index) {
    const state2 = this.dragState(index);
    const direction = keyCode === Keys.ArrowLeft || keyCode === Keys.ArrowUp;
    const step = direction ? -this.resizeStep : this.resizeStep;
    this.setSize(state2, step);
  }
  toggleContentOverlay(index, show) {
    this.pane(index).toggleOverlay(show);
    this.pane(index + 1).toggleOverlay(show);
  }
  dragState(splitbarIndex) {
    const prev = this.pane(splitbarIndex);
    const next = this.pane(splitbarIndex + 1);
    const total = prev.computedSize + next.computedSize;
    const px = (s) => this.toPixels(s);
    return {
      prev: {
        index: splitbarIndex,
        initialSize: prev.computedSize,
        min: px(prev.min) || total - px(next.max) || 0,
        max: px(prev.max) || total - px(next.min) || total
      },
      next: {
        index: splitbarIndex + 1,
        initialSize: next.computedSize,
        min: px(next.min) || total - px(prev.max) || 0,
        max: px(next.max) || total - px(prev.min) || total
      }
    };
  }
  setSize(state2, delta) {
    const clamp = (min, max, v) => Math.min(max, Math.max(min, v));
    const resize = (paneState, change) => {
      const pane = this.pane(paneState.index);
      const splitterSize = this.containerSize();
      const newSize = clamp(paneState.min, paneState.max, paneState.initialSize + change);
      let size = "";
      if (this.isPercent(pane.size)) {
        size = 100 * newSize / splitterSize + "%";
      } else {
        size = newSize + "px";
      }
      pane.size = size;
      pane.isResized = true;
      this.emit(pane.sizeChange, size);
    };
    const prev = this.pane(state2.prev.index);
    const next = this.pane(state2.next.index);
    if (prev.fixedSize && next.fixedSize) {
      resize(state2.prev, delta);
      resize(state2.next, -delta);
    } else if (next.collapsible || next.fixedSize) {
      resize(state2.next, -delta);
    } else {
      resize(state2.prev, delta);
    }
    this.emit(this.layoutChange, {});
  }
  isDraggable(splitBarIndex) {
    const prev = this.pane(splitBarIndex);
    const next = this.pane(splitBarIndex + 1);
    const betweenResizablePanes = prev.resizable && next.resizable;
    const nearCollapsedPane = prev.collapsed || next.collapsed;
    return betweenResizablePanes && !nearCollapsedPane;
  }
  isStatic(splitBarIndex) {
    const prev = this.pane(splitBarIndex);
    const next = this.pane(splitBarIndex + 1);
    const betweenResizablePanes = prev.resizable && next.resizable;
    const nearCollapsiblePane = prev.collapsible || next.collapsible;
    return !betweenResizablePanes && !nearCollapsiblePane;
  }
  pane(index) {
    if (!this.panes) {
      throw new Error("Panes not initialized");
    }
    if (index < 0 || index >= this.panes.length) {
      throw new Error("Index out of range");
    }
    return this.panes[index];
  }
  configure({
    panes,
    orientation,
    containerSize
  }) {
    this.panes = panes;
    this.panes.forEach((pane, index) => {
      pane.order = index * 2;
      pane.orientation = orientation;
    });
    if (isDevMode()) {
      const allPanesWithSize = panes.length && !panes.some((pane) => !pane.fixedSize);
      const hasResizedPane = panes.length && panes.some((pane) => pane.isResized);
      if (allPanesWithSize && !hasResizedPane) {
        throw new Error(`
                    The Splitter should have at least one pane without a set size.
                    See ${SIZING_DOC_LINK} for more information.
                `);
      }
    }
    this.containerSize = containerSize;
  }
  isPercent(size) {
    return /%$/.test(size);
  }
  toPixels(size) {
    let result = parseFloat(size);
    if (this.isPercent(size)) {
      result = this.containerSize() * result / 100;
    }
    return result;
  }
  emit(emitter, args) {
    if (emitter.observers.length) {
      this.zone.run(() => emitter.emit(args));
    }
  }
};
SplitterService.ɵfac = function SplitterService_Factory(t) {
  return new (t || SplitterService)(ɵɵinject(NgZone));
};
SplitterService.ɵprov = ɵɵdefineInjectable({
  token: SplitterService,
  factory: SplitterService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var stopPropagation = ({
  originalEvent: event
}) => {
  event.stopPropagation();
  event.preventDefault();
};
var preventOnDblClick = (release) => (mouseDown) => of(mouseDown).pipe(delay(150), takeUntil(release));
var classFromObject = (classes) => Object.keys(classes).filter((c) => classes[c]).join(" ");
var createMoveStream = (draggable) => (mouseDown) => draggable.kendoDrag.pipe(takeUntil(draggable.kendoRelease), map(({
  pageX,
  pageY
}) => ({
  originalX: mouseDown.pageX,
  originalY: mouseDown.pageY,
  pageX,
  pageY
})));
var SplitterBarComponent = class {
  constructor(draggable, localization, splitterService, element, renderer) {
    this.draggable = draggable;
    this.localization = localization;
    this.splitterService = splitterService;
    this.element = element;
    this.renderer = renderer;
    this.ariaRole = "separator";
    this.focused = false;
    this.orientation = "horizontal";
    this.index = 0;
    this.subscriptions = new Subscription();
  }
  get hostOrientation() {
    return this.orientation === "horizontal" ? "vertical" : "horizontal";
  }
  get tabIndex() {
    return this.splitterService.isStatic(this.index) ? -1 : 0;
  }
  get hostClasses() {
    const isHorizontal = this.orientation === "horizontal";
    const isDraggable = this.splitterService.isDraggable(this.index);
    const isStatic = this.splitterService.isStatic(this.index);
    return classFromObject({
      "k-focus": this.focused,
      "k-splitbar": true,
      "k-splitbar-horizontal": isHorizontal,
      "k-splitbar-vertical": !isHorizontal,
      "k-splitbar-draggable-horizontal": isHorizontal && isDraggable,
      "k-splitbar-draggable-vertical": !isHorizontal && isDraggable,
      "k-splitbar-static-horizontal": isHorizontal && isStatic,
      "k-splitbar-static-vertical": !isHorizontal && isStatic,
      "k-touch-action-none": isDraggable
    });
  }
  get order() {
    return 2 * this.index + 1;
  }
  ngOnInit() {
    let state2;
    const listener = this.draggable.kendoPress.pipe(tap(stopPropagation), filter(() => this.splitterService.isDraggable(this.index)), tap(() => state2 = this.splitterService.dragState(this.index)), tap(() => this.splitterService.toggleContentOverlay(this.index, true)), switchMap(preventOnDblClick(this.draggable.kendoRelease)), switchMap(createMoveStream(this.draggable))).subscribe(({
      pageX,
      pageY,
      originalX,
      originalY
    }) => {
      let delta;
      if (this.orientation === "vertical") {
        delta = pageY - originalY;
      } else if (this.direction === "rtl") {
        delta = originalX - pageX;
      } else {
        delta = pageX - originalX;
      }
      this.splitterService.setSize(state2, delta);
    });
    this.subscriptions.add(listener);
    this.subscriptions.add(this.draggable.kendoRelease.subscribe(() => this.splitterService.toggleContentOverlay(this.index, false)));
    const element = this.element.nativeElement;
    this.subscriptions.add(this.renderer.listen(element, "keydown", (event) => this.onKeyDown(event)));
    this.subscriptions.add(this.renderer.listen(element, "focusin", () => this.focused = true));
    this.subscriptions.add(this.renderer.listen(element, "focusout", () => this.focused = false));
    this.subscriptions.add(this.renderer.listen(element, "dblclick", () => this.togglePane()));
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  togglePrevious() {
    this.splitterService.tryToggle(this.index);
  }
  toggleNext() {
    this.splitterService.tryToggle(this.index + 1);
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  shouldShowIcon(iconName) {
    const paneIndex = iconName === "prev" ? this.index : this.index + 1;
    const relatedPaneIndex = iconName === "prev" ? this.index + 1 : this.index;
    const pane = this.splitterService.pane(paneIndex);
    const relatedPane = this.splitterService.pane(relatedPaneIndex);
    const isCollapsible = pane.collapsible;
    return isCollapsible && !relatedPane.isHidden;
  }
  previousArrowClass() {
    const pane = this.splitterService.pane(this.index);
    const isCollapsible = pane.collapsible;
    const isCollapsed = pane.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    return classFromObject({
      "caret-alt-left": isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL),
      "caret-alt-right": isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL),
      "caret-alt-up": isCollapsible && !isHorizontal && !isCollapsed,
      "caret-alt-down": isCollapsible && !isHorizontal && isCollapsed
    });
  }
  previousSVGArrowClass() {
    const pane = this.splitterService.pane(this.index);
    const isCollapsible = pane.collapsible;
    const isCollapsed = pane.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    if (isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL)) {
      return caretAltLeftIcon;
    }
    if (isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL)) {
      return caretAltRightIcon;
    }
    if (isCollapsible && !isHorizontal && !isCollapsed) {
      return caretAltUpIcon;
    }
    if (isCollapsible && !isHorizontal && isCollapsed) {
      return caretAltDownIcon;
    }
  }
  nextArrowClass() {
    const pane = this.splitterService.pane(this.index + 1);
    const isCollapsible = pane.collapsible;
    const isCollapsed = pane.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    return classFromObject({
      "caret-alt-right": isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL),
      "caret-alt-left": isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL),
      "caret-alt-down": isCollapsible && !isHorizontal && !isCollapsed,
      "caret-alt-up": isCollapsible && !isHorizontal && isCollapsed
    });
  }
  nextSVGArrowClass() {
    const pane = this.splitterService.pane(this.index + 1);
    const isCollapsible = pane.collapsible;
    const isCollapsed = pane.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    if (isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL)) {
      return caretAltRightIcon;
    }
    if (isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL)) {
      return caretAltLeftIcon;
    }
    if (isCollapsible && !isHorizontal && !isCollapsed) {
      return caretAltDownIcon;
    }
    if (isCollapsible && !isHorizontal && isCollapsed) {
      return caretAltUpIcon;
    }
  }
  togglePane() {
    if (this.expandLast) {
      this.toggleNext();
    } else {
      this.tryToggleNearest();
    }
  }
  get expandLast() {
    const panes = this.splitterService.panes;
    return panes.length === 2 && panes[1].collapsed;
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const shouldToggle = event.ctrlKey || event.metaKey;
    if (keyCode === Keys.Enter) {
      event.preventDefault();
      this.togglePane();
    } else if (shouldToggleOrResize(keyCode, this.orientation)) {
      event.preventDefault();
      if (shouldToggle) {
        this.splitterService.togglePane(keyCode, this.index);
      } else {
        this.splitterService.resizePane(keyCode, this.index);
      }
    }
  }
  tryToggleNearest() {
    const prev = this.index;
    const next = this.index + 1;
    if (!this.splitterService.tryToggle(prev)) {
      this.splitterService.tryToggle(next);
    }
  }
};
SplitterBarComponent.ɵfac = function SplitterBarComponent_Factory(t) {
  return new (t || SplitterBarComponent)(ɵɵdirectiveInject(DraggableDirective, 1), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(SplitterService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
SplitterBarComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitterBarComponent,
  selectors: [["kendo-splitter-bar"]],
  hostVars: 11,
  hostBindings: function SplitterBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.ariaRole)("aria-orientation", ctx.hostOrientation)("tabindex", ctx.tabIndex);
      ɵɵclassMap(ctx.hostClasses);
      ɵɵstyleProp("-ms-flex-order", ctx.order)("order", ctx.order);
      ɵɵclassProp("k-focus", ctx.focused);
    }
  },
  inputs: {
    orientation: "orientation",
    index: "index"
  },
  decls: 3,
  vars: 2,
  consts: [["class", "k-collapse-prev", 3, "click", 4, "ngIf"], [1, "k-resize-handle"], ["class", "k-collapse-next", 3, "click", 4, "ngIf"], [1, "k-collapse-prev", 3, "click"], ["size", "xsmall", 3, "name", "svgIcon"], [1, "k-collapse-next", 3, "click"]],
  template: function SplitterBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SplitterBarComponent_div_0_Template, 2, 2, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵtemplate(2, SplitterBarComponent_div_2_Template, 2, 2, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.shouldShowIcon("prev"));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.shouldShowIcon("next"));
    }
  },
  dependencies: [IconWrapperComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterBarComponent, [{
    type: Component,
    args: [{
      selector: "kendo-splitter-bar",
      template: `
        <div *ngIf="shouldShowIcon('prev')" class="k-collapse-prev" (click)="togglePrevious()">
            <kendo-icon-wrapper
                size="xsmall"
                [name]="previousArrowClass()"
                [svgIcon]="previousSVGArrowClass()"
            ></kendo-icon-wrapper>
        </div>
        <div class="k-resize-handle"></div>
        <div *ngIf="shouldShowIcon('next')" class="k-collapse-next" (click)="toggleNext()">
            <kendo-icon-wrapper
                size="xsmall"
                [name]="nextArrowClass()"
                [svgIcon]="nextSVGArrowClass()"
            ></kendo-icon-wrapper>
        </div>
    `
    }]
  }], function() {
    return [{
      type: DraggableDirective,
      decorators: [{
        type: Host
      }]
    }, {
      type: LocalizationService
    }, {
      type: SplitterService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    hostOrientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    order: [{
      type: HostBinding,
      args: ["style.-ms-flex-order"]
    }, {
      type: HostBinding,
      args: ["style.order"]
    }],
    orientation: [{
      type: Input
    }],
    index: [{
      type: Input
    }]
  });
})();
var SplitterComponent = class {
  constructor(element, splitterService, localization, renderer, enclosingPane) {
    this.element = element;
    this.splitterService = splitterService;
    this.localization = localization;
    this.renderer = renderer;
    this.enclosingPane = enclosingPane;
    this.orientation = "horizontal";
    validatePackage(packageMetadata5);
    if (enclosingPane) {
      enclosingPane.containsSplitter = true;
    }
    this.layoutChange = this.splitterService.layoutChange;
    this.configure = this.configure.bind(this);
  }
  /**
   * The distance in pixels that the separator is moved with during keyboard navigation.
   * @default 10
   */
  set resizeStep(value) {
    this.splitterService.resizeStep = value;
  }
  get resizeStep() {
    return this.splitterService.resizeStep;
  }
  get hostClasses() {
    return true;
  }
  get horizontalHostClasses() {
    return this.orientation === "horizontal";
  }
  get verticalHostClasses() {
    return this.orientation === "vertical";
  }
  get dir() {
    return this.direction;
  }
  set splitbars(splitbars) {
    if (!isPresent4(splitbars) || !isPresent4(this.panes)) {
      return;
    }
    const panesArray = this.panes.toArray();
    const splitBarsArray = splitbars.toArray();
    const components = [...panesArray, ...splitBarsArray].sort((a, b) => a.order - b.order);
    const elements = components.map((component) => component.element.nativeElement);
    panesArray.forEach((pane, i) => {
      if (splitBarsArray[i] && pane.separatorLabel) {
        const splitbar = splitBarsArray[i].element.nativeElement;
        this.renderer.setAttribute(splitbar, "aria-label", pane.separatorLabel);
      }
    });
    elements.forEach((element) => this.renderer.appendChild(this.element.nativeElement, element));
  }
  ngAfterContentInit() {
    this.reconfigure();
  }
  ngOnChanges(changes) {
    if (changes.orientation && !changes.orientation.isFirstChange()) {
      this.reconfigure();
    }
  }
  ngOnDestroy() {
    if (this.enclosingPane) {
      this.enclosingPane.containsSplitter = false;
    }
    this.unsubscribeChanges();
  }
  reconfigure() {
    this.unsubscribeChanges();
    this.configure();
    this.paneChangesSubscription = this.panes.changes.subscribe(this.configure);
  }
  unsubscribeChanges() {
    if (this.paneChangesSubscription) {
      this.paneChangesSubscription.unsubscribe();
      this.paneChangesSubscription = null;
    }
  }
  configure() {
    this.splitterService.configure({
      panes: this.panes.toArray(),
      orientation: this.orientation,
      containerSize: () => {
        if (this.orientation === "vertical") {
          return this.element.nativeElement.clientHeight;
        } else {
          return this.element.nativeElement.clientWidth;
        }
      }
    });
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
};
SplitterComponent.ɵfac = function SplitterComponent_Factory(t) {
  return new (t || SplitterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SplitterService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SplitterPaneComponent, 9));
};
SplitterComponent.ɵcmp = ɵɵdefineComponent({
  type: SplitterComponent,
  selectors: [["kendo-splitter"]],
  contentQueries: function SplitterComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, SplitterPaneComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panes = _t);
    }
  },
  viewQuery: function SplitterComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(SplitterBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.splitbars = _t);
    }
  },
  hostVars: 9,
  hostBindings: function SplitterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-splitter", ctx.hostClasses)("k-splitter-flex", ctx.hostClasses)("k-splitter-horizontal", ctx.horizontalHostClasses)("k-splitter-vertical", ctx.verticalHostClasses);
    }
  },
  inputs: {
    orientation: "orientation",
    splitbarWidth: "splitbarWidth",
    resizeStep: "resizeStep"
  },
  outputs: {
    layoutChange: "layoutChange"
  },
  exportAs: ["kendoSplitter"],
  features: [ɵɵProvidersFeature([SplitterService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.spliter"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c112,
  decls: 2,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["kendoDraggable", "", 3, "index", "orientation", "ngStyle", 4, "ngIf"], ["kendoDraggable", "", 3, "index", "orientation", "ngStyle"]],
  template: function SplitterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c102);
      ɵɵprojection(0);
      ɵɵtemplate(1, SplitterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.panes);
    }
  },
  dependencies: [SplitterBarComponent, NgForOf, NgIf, DraggableDirective, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitter",
      selector: "kendo-splitter",
      providers: [SplitterService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.spliter"
      }],
      template: `
      <ng-content select="kendo-splitter-pane"></ng-content>
      <ng-container *ngFor="
        let pane of panes;
        let index = index;
        let last = last;
      ">
        <kendo-splitter-bar
          kendoDraggable
          *ngIf="!last"
          [index]="index"
          [orientation]="orientation"
          [ngStyle]="{
            width: orientation === 'horizontal' ? splitbarWidth + 'px' : undefined,
            height: orientation === 'vertical' ? splitbarWidth + 'px' : undefined
          }">
        </kendo-splitter-bar>
      </ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: SplitterService
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: SplitterPaneComponent,
      decorators: [{
        type: Optional
      }, {
        type: Host
      }, {
        type: Inject,
        args: [SplitterPaneComponent]
      }]
    }];
  }, {
    orientation: [{
      type: Input
    }],
    splitbarWidth: [{
      type: Input
    }],
    resizeStep: [{
      type: Input
    }],
    layoutChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-splitter"]
    }, {
      type: HostBinding,
      args: ["class.k-splitter-flex"]
    }],
    horizontalHostClasses: [{
      type: HostBinding,
      args: ["class.k-splitter-horizontal"]
    }],
    verticalHostClasses: [{
      type: HostBinding,
      args: ["class.k-splitter-vertical"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    splitbars: [{
      type: ViewChildren,
      args: [SplitterBarComponent]
    }],
    panes: [{
      type: ContentChildren,
      args: [SplitterPaneComponent]
    }]
  });
})();
var TabContentDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
TabContentDirective.ɵfac = function TabContentDirective_Factory(t) {
  return new (t || TabContentDirective)(ɵɵdirectiveInject(TemplateRef));
};
TabContentDirective.ɵdir = ɵɵdefineDirective({
  type: TabContentDirective,
  selectors: [["", "kendoTabContent", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTabContent]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var TabTitleDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
TabTitleDirective.ɵfac = function TabTitleDirective_Factory(t) {
  return new (t || TabTitleDirective)(ɵɵdirectiveInject(TemplateRef));
};
TabTitleDirective.ɵdir = ɵɵdefineDirective({
  type: TabTitleDirective,
  selectors: [["", "kendoTabTitle", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTabTitle]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var TabTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
TabTemplateDirective.ɵfac = function TabTemplateDirective_Factory(t) {
  return new (t || TabTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
TabTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: TabTemplateDirective,
  selectors: [["", "kendoTabTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTabTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var TabStripTabComponent = class {
  constructor() {
    this.disabled = false;
    this._tabDirective = new QueryList();
    this._tabContent = new QueryList();
    this.focused = false;
  }
  get tabContent() {
    return this._tabContent.first;
  }
  get tabTitle() {
    return this._tabTitleDirective.first;
  }
  get tabTemplate() {
    return this._tabDirective.first;
  }
};
TabStripTabComponent.ɵfac = function TabStripTabComponent_Factory(t) {
  return new (t || TabStripTabComponent)();
};
TabStripTabComponent.ɵcmp = ɵɵdefineComponent({
  type: TabStripTabComponent,
  selectors: [["kendo-tabstrip-tab"]],
  contentQueries: function TabStripTabComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, TabContentDirective, 4);
      ɵɵcontentQuery(dirIndex, TabTitleDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabDirective = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabContent = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabTitleDirective = _t);
    }
  },
  inputs: {
    title: "title",
    disabled: "disabled",
    cssClass: "cssClass",
    cssStyle: "cssStyle",
    selected: "selected",
    closable: "closable",
    closeIcon: "closeIcon",
    closeIconClass: "closeIconClass",
    closeSVGIcon: "closeSVGIcon"
  },
  exportAs: ["kendoTabStripTab"],
  decls: 0,
  vars: 0,
  template: function TabStripTabComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripTabComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTabStripTab",
      selector: "kendo-tabstrip-tab",
      template: ``
    }]
  }], null, {
    title: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeIconClass: [{
      type: Input
    }],
    closeSVGIcon: [{
      type: Input
    }],
    _tabDirective: [{
      type: ContentChildren,
      args: [TabTemplateDirective]
    }],
    _tabContent: [{
      type: ContentChildren,
      args: [TabContentDirective]
    }],
    _tabTitleDirective: [{
      type: ContentChildren,
      args: [TabTitleDirective]
    }]
  });
})();
var TabCloseEvent = class {
  /**
   * Constructs the event arguments for the `tabClose` event.
   * @param index - The index of the closed tab.
   * @param tab - The closed tab instance
   */
  constructor(index, tab) {
    this.index = index;
    this.tab = tab;
  }
};
var SelectEvent = class extends PreventableEvent {
  /**
   * Constructs the event arguments for the `select` event.
   * @param index - The index of the selected tab.
   * @param title - The title of the selected tab.
   */
  constructor(index, title) {
    super();
    this.index = index;
    this.title = title;
  }
};
var isTabElement = (target) => {
  const targetId = target.getAttribute("id");
  if (isPresent4(targetId) || targetId.indexOf("k-tabstrip-tab-") >= 0) {
    return true;
  }
  return false;
};
var isTabClosable = (tab, tabStripClosable) => {
  if (tab.closable !== void 0) {
    return tab.closable;
  }
  return tabStripClosable;
};
var tabStripHasScrollButtons = (scrollableSettings) => {
  return scrollableSettings.enabled && scrollableSettings.scrollButtons !== "hidden";
};
var mouseScrollEnabled = (scrollableSettings) => {
  return scrollableSettings.enabled && scrollableSettings.mouseScroll;
};
var getActiveTab = (tabs) => {
  let focusedTab;
  let selectedTab;
  let focusedIndex = -1;
  let selectedIndex = -1;
  tabs.forEach((tab, index) => {
    if (tab.selected) {
      selectedTab = tab;
      selectedIndex = index;
    } else if (tab.focused) {
      focusedTab = tab;
      focusedIndex = index;
    }
  });
  return focusedIndex >= 0 ? {
    tab: focusedTab,
    index: focusedIndex
  } : {
    tab: selectedTab,
    index: selectedIndex
  };
};
var getTabByIndex = (tabs, index) => {
  const filtered = tabs.filter((_tab, i) => i === index);
  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
};
var getTabHeaderByIndex = (tabHeaderContainers, index) => {
  const filtered = tabHeaderContainers.filter((_tabHeader, i) => i === index);
  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
};
var resetTabFocus = (tabs) => {
  tabs.forEach((tab) => {
    tab.focused = false;
  });
};
var resetTabSelection = (tabs) => {
  tabs.forEach((tab) => {
    tab.selected = false;
  });
};
var isTablistHorizontal = (tabPosition) => tabPosition === "top" || tabPosition === "bottom";
var getId$1 = (prefix, tabStripId, tabIndex) => {
  return `${prefix}-${tabStripId}-${tabIndex}`;
};
var TabStripService = class {
  constructor(localization, ngZone) {
    this.localization = localization;
    this.ngZone = ngZone;
  }
  onKeyDown(event) {
    if (!isTabElement(event.target)) {
      return;
    }
    const key = event.keyCode;
    if (this.shouldHandleKey(key)) {
      event.preventDefault();
    } else {
      return;
    }
    if (isNavigationKey(key) || isArrowKey(key)) {
      this.onNavigate(key);
    } else if (key === Keys.Delete) {
      this.onDelete();
    }
  }
  onTabSelect(tab, index) {
    const selectArgs = new SelectEvent(index, tab.title);
    this.owner.tabSelect.emit(selectArgs);
    if (!selectArgs.isDefaultPrevented()) {
      if (tab.selected) {
        this.focusTabHeader(index);
        return;
      }
      this.selectTab(tab, index);
    }
  }
  selectTab(tab, index) {
    resetTabSelection(this.owner.tabs);
    this.focusTabHeader(index);
    tab.selected = true;
    if (this.owner.isScrollable) {
      this.owner.scrollToSelectedTab();
    }
  }
  onNavigate(keyCode) {
    const {
      tab: activeTab,
      index: activeIndex
    } = getActiveTab(this.owner.tabs);
    if (!NgZone.isInAngularZone()) {
      this.ngZone.run(() => {
        if (activeIndex < 0) {
          this.owner.selectTab(this.firstNavigatableIndex());
          return;
        }
        activeTab.focused = false;
        const nextIndex = this.computeNextIndex(activeIndex, keyCode);
        this.activateTab(nextIndex);
      });
    }
  }
  onDelete() {
    const {
      tab: activeTab,
      index: activeTabIndex
    } = getActiveTab(this.owner.tabs);
    if (isTabClosable(activeTab, this.owner.closable) && !activeTab.disabled) {
      this.ngZone.run(() => {
        this.owner.tabClose.emit({
          tab: activeTab,
          index: activeTabIndex
        });
      });
    }
  }
  activateTab(index) {
    const tab = getTabByIndex(this.owner.tabs, index);
    if (tab.disabled) {
      this.focusTabHeader(index);
      tab.focused = true;
    } else {
      this.onTabSelect(tab, index);
    }
  }
  focusTabHeader(index) {
    const tabHeader = getTabHeaderByIndex(this.owner.tabHeaderContainers, index);
    tabHeader.nativeElement.focus();
  }
  shouldHandleKey(keyCode) {
    if (isNavigationKey(keyCode)) {
      return true;
    }
    if (isTablistHorizontal(this.owner.tabPosition) && isHorizontalArrowKey(keyCode)) {
      return true;
    }
    if (!isTablistHorizontal(this.owner.tabPosition) && isVerticalArrowKey(keyCode)) {
      return true;
    }
    if (keyCode === Keys.Delete) {
      return true;
    }
    return false;
  }
  computeNextIndex(activeIndex, keyCode) {
    switch (keyCode) {
      case this.invertKeys(Keys.ArrowLeft, Keys.ArrowRight):
      case this.invertKeys(Keys.ArrowUp, Keys.ArrowDown):
        return this.prevNavigatableIndex(activeIndex);
      case this.invertKeys(Keys.ArrowRight, Keys.ArrowLeft):
      case this.invertKeys(Keys.ArrowDown, Keys.ArrowUp):
        return this.nextNavigatableIndex(activeIndex);
      case Keys.Home:
        return this.firstNavigatableIndex();
      case Keys.End:
        return this.lastNavigatableIndex();
      default:
        return;
    }
  }
  invertKeys(original, inverted) {
    return this.localization.rtl ? inverted : original;
  }
  firstNavigatableIndex() {
    return 0;
  }
  lastNavigatableIndex() {
    return this.owner.tabs.length - 1;
  }
  prevNavigatableIndex(selectedIndex) {
    if (selectedIndex - 1 < 0) {
      return this.lastNavigatableIndex();
    }
    return selectedIndex - 1;
  }
  nextNavigatableIndex(selectedIndex) {
    if (selectedIndex + 1 >= this.owner.tabs.length) {
      return this.firstNavigatableIndex();
    }
    return selectedIndex + 1;
  }
};
TabStripService.ɵfac = function TabStripService_Factory(t) {
  return new (t || TabStripService)(ɵɵinject(LocalizationService), ɵɵinject(NgZone));
};
TabStripService.ɵprov = ɵɵdefineInjectable({
  token: TabStripService,
  factory: TabStripService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripService, [{
    type: Injectable
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, null);
})();
var MOUSE_SCROLL_SPEED = 10;
var BUTTON_SCROLL_SPEED = 100;
var HIDDEN_CLASS = "k-hidden";
var DIRECTION_CLASSES = {
  left: "caret-alt-left",
  right: "caret-alt-right",
  up: "caret-alt-up",
  down: "caret-alt-down"
};
var DEFAULT_SCROLL_BEHAVIOR = "smooth";
var ScrollService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.position = 0;
    this.scrollButtonActiveStateChange = new Subject();
    this.isDisabled = (buttonType) => this.owner[`${buttonType}ScrollButton`].host.nativeElement.classList.contains("k-disabled");
  }
  get tablistElement() {
    return this.owner.tablist.nativeElement;
  }
  get tabstripSize() {
    const hostElement = this.owner.wrapper.nativeElement;
    const wrapperWidth = parseFloat(getComputedStyle(hostElement).width);
    const wrapperHeight = parseFloat(getComputedStyle(hostElement).height);
    return isTablistHorizontal(this.owner.tabPosition) ? wrapperWidth : wrapperHeight;
  }
  get tablistOverflowSize() {
    if (!isDocumentAvailable()) {
      return 0;
    }
    const isHorizontal = isTablistHorizontal(this.owner.tabPosition);
    const overflowSize = Math.floor(this.tablistElement[isHorizontal ? "scrollWidth" : "scrollHeight"] - this.tablistElement.getBoundingClientRect()[isHorizontal ? "width" : "height"]);
    return overflowSize < 0 ? 0 : overflowSize;
  }
  get tabsOverflow() {
    return this.tablistOverflowSize > 0;
  }
  get scrollButtonsSize() {
    if (!this.owner.hasScrollButtons) {
      return 0;
    }
    const prevRect = this.owner.prevScrollButton.hostBoundingClientRect;
    const prevSize = isTablistHorizontal(this.owner.tabPosition) ? prevRect.width : prevRect.height;
    const nextRect = this.owner.nextScrollButton.hostBoundingClientRect;
    const nextSize = isTablistHorizontal(this.owner.tabPosition) ? nextRect.width : nextRect.height;
    return prevSize + nextSize;
  }
  toggleScrollButtonsState() {
    const tabStrip = this.owner;
    if (!tabStrip.hasScrollButtons) {
      return;
    }
    const currentPrevButtonActive = !this.isDisabled("prev");
    const currentNextButtonActive = !this.isDisabled("next");
    const calculatedPrevButtonActive = this.position > 0 && this.tablistOverflowSize > 0;
    const calculatedNextButtonActive = this.position < this.tablistOverflowSize + this.scrollButtonsSize && this.tablistOverflowSize > 0;
    if (calculatedPrevButtonActive !== currentPrevButtonActive) {
      this.ngZone.run(() => this.toggleButtonActiveState("prev", calculatedPrevButtonActive));
    }
    if (calculatedNextButtonActive !== currentNextButtonActive) {
      this.ngZone.run(() => this.toggleButtonActiveState("next", calculatedNextButtonActive));
    }
  }
  scrollToSelectedTab() {
    if (!this.tabsOverflow) {
      return;
    }
    const {
      index: activeIndex
    } = getActiveTab(this.owner.tabs);
    if (activeIndex === -1) {
      return;
    }
    this.position += this.getScrollOffset(activeIndex);
    if (isTablistHorizontal(this.owner.tabPosition)) {
      this.tablistElement.scrollLeft = this.position;
    } else {
      this.tablistElement.scrollTop = this.position;
    }
    this.toggleScrollButtonsState();
    const tabStrip = this.owner;
    if (!tabStrip.hasScrollButtons) {
      return;
    }
    const isFirstTabActive = activeIndex === 0;
    const isLastTabActive = activeIndex === this.owner.tabs.length - 1;
    if (isFirstTabActive && !this.isDisabled("prev")) {
      this.ngZone.run(() => this.toggleButtonActiveState("prev", false));
    }
    if (isLastTabActive && !this.isDisabled("next")) {
      this.ngZone.run(() => this.toggleButtonActiveState("next", false));
    }
  }
  getScrollOffset(activeIndex) {
    if (!isDocumentAvailable()) {
      return 0;
    }
    const isHorizontal = isTablistHorizontal(this.owner.tabPosition);
    this.tablistElement[`scroll${isHorizontal ? "Left" : "Top"}`] = this.position;
    const activeTabRect = this.tablistElement.children[activeIndex].getBoundingClientRect();
    const tablistRect = this.tablistElement.getBoundingClientRect();
    const end = isHorizontal ? "right" : "bottom";
    const start = isHorizontal ? "left" : "top";
    const activeTabStart = activeTabRect[start];
    const activeTabEnd = activeTabRect[end];
    const tablistStart = tablistRect[start];
    const tablistEnd = tablistRect[end];
    const tabEndIsInVisibleRange = activeTabEnd <= tablistEnd;
    const tabStartIsInVisibleRange = activeTabStart >= tablistStart;
    const isWholeTabVisible = tabEndIsInVisibleRange && tabStartIsInVisibleRange;
    if (isWholeTabVisible) {
      return 0;
    }
    if (!tabEndIsInVisibleRange) {
      return activeTabEnd - tablistEnd;
    }
    if (!tabStartIsInVisibleRange) {
      return activeTabStart - tablistStart;
    }
  }
  onMouseScroll(event) {
    event.preventDefault();
    if (!mouseScrollEnabled(this.owner.scrollable)) {
      return;
    }
    const direction = event.deltaY < 0 ? "prev" : "next";
    this.calculateListPosition(direction, this.owner.scrollable.mouseScrollSpeed);
    if (isTablistHorizontal(this.owner.tabPosition)) {
      this.tablistElement.scrollLeft = this.position;
    } else {
      this.tablistElement.scrollTop = this.position;
    }
    this.toggleScrollButtonsState();
  }
  scrollTabs(direction) {
    this.calculateListPosition(direction, this.owner.scrollable.buttonScrollSpeed);
    if (isTablistHorizontal(this.owner.tabPosition) && this.tablistElement) {
      this.tablistElement.scrollTo({
        left: this.position,
        behavior: DEFAULT_SCROLL_BEHAVIOR
      });
    } else {
      this.tablistElement.scrollTo({
        top: this.position,
        behavior: DEFAULT_SCROLL_BEHAVIOR
      });
    }
    this.toggleScrollButtonsState();
  }
  calculateListPosition(direction, scrollSpeed) {
    const adjustedMaxScroll = this.tablistOverflowSize + this.scrollButtonsSize;
    if (direction === "prev" && this.position > 0) {
      this.position = this.position - scrollSpeed <= 0 ? 0 : this.position - scrollSpeed;
    } else if (direction === "next" && this.position < adjustedMaxScroll) {
      if (this.position + scrollSpeed > adjustedMaxScroll) {
        this.position = adjustedMaxScroll;
        return;
      }
      this.position += scrollSpeed;
    }
  }
  restoreScrollPosition() {
    if (isTablistHorizontal(this.owner.tabPosition)) {
      this.tablistElement.scrollLeft = this.position;
    } else {
      this.tablistElement.scrollTop = this.position;
    }
    this.toggleScrollButtonsState();
  }
  toggleButtonActiveState(buttonType, active) {
    this.scrollButtonActiveStateChange.next({
      buttonType,
      active
    });
  }
};
ScrollService.ɵfac = function ScrollService_Factory(t) {
  return new (t || ScrollService)(ɵɵinject(NgZone));
};
ScrollService.ɵprov = ɵɵdefineInjectable({
  token: ScrollService,
  factory: ScrollService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var normalizeSettings = ({
  enabled = true,
  scrollButtons = "auto",
  mouseScroll = true,
  buttonScrollSpeed = BUTTON_SCROLL_SPEED,
  mouseScrollSpeed = MOUSE_SCROLL_SPEED,
  prevButtonIcon,
  nextButtonIcon,
  prevSVGButtonIcon,
  nextSVGButtonIcon
}) => ({
  enabled,
  scrollButtons,
  mouseScroll,
  buttonScrollSpeed,
  mouseScrollSpeed,
  prevButtonIcon,
  nextButtonIcon,
  prevSVGButtonIcon,
  nextSVGButtonIcon
});
var normalizeScrollableSettings = (settings) => normalizeSettings(settings === false ? {
  enabled: false
} : settings);
var TabScrollEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var TabStripScrollableButtonComponent = class {
  constructor(host, renderer, ngZone, localization) {
    this.host = host;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localization = localization;
    this.prev = false;
    this.tabScroll = new EventEmitter();
    this.onClick = new EventEmitter();
    this.caretAltLeftIcon = caretAltLeftIcon;
    this.caretAltRightIcon = caretAltRightIcon;
    this.caretAltUpIcon = caretAltUpIcon;
    this.caretAltDownIcon = caretAltDownIcon;
    this.subs = new Subscription();
    this.clickHandler = (scrollEvent) => {
      const tabStripScrollEvent = this.emitScrollEvent(scrollEvent);
      const isTabStripScrollEventPrevented = tabStripScrollEvent.isDefaultPrevented();
      if (isTabStripScrollEventPrevented) {
        return;
      }
      const buttonType = this.prev ? "prev" : "next";
      this.onClick.emit(buttonType);
    };
  }
  get prevClass() {
    return this.prev;
  }
  get nextClass() {
    return !this.prev;
  }
  get hostBoundingClientRect() {
    return this.host.nativeElement.getBoundingClientRect();
  }
  get iconClass() {
    return this.scrollButtonIconClass;
  }
  get customIconClass() {
    return this.customScrollButtonIconClass;
  }
  get svgIcon() {
    return this.scrollButtonSVGIcon;
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.host.nativeElement, "click", this.clickHandler));
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  toggle(show) {
    this.renderer[show ? "removeClass" : "addClass"](this.host.nativeElement, HIDDEN_CLASS);
  }
  get scrollButtonIconClass() {
    const defaultPrevIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? DIRECTION_CLASSES.left : DIRECTION_CLASSES.right : DIRECTION_CLASSES.up;
    const defaultNextIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? DIRECTION_CLASSES.right : DIRECTION_CLASSES.left : DIRECTION_CLASSES.down;
    if (typeof this.scrollable === "object") {
      const prevIcon = typeof this.scrollable.prevButtonIcon === "undefined" ? defaultPrevIcon : "";
      const nextIcon = typeof this.scrollable.nextButtonIcon === "undefined" ? defaultNextIcon : "";
      if (prevIcon && this.prev) {
        return prevIcon;
      } else if (nextIcon && !this.prev) {
        return nextIcon;
      }
    }
  }
  get customScrollButtonIconClass() {
    if (typeof this.scrollable === "object") {
      const prevIcon = this.scrollable.prevButtonIcon;
      const nextIcon = this.scrollable.nextButtonIcon;
      if (prevIcon && this.prev) {
        return `k-icon ${prevIcon}`;
      }
      if (nextIcon && !this.prev) {
        return `k-icon ${nextIcon}`;
      }
    }
  }
  get scrollButtonSVGIcon() {
    const defaultPrevSVGIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? this.caretAltLeftIcon : this.caretAltRightIcon : this.caretAltUpIcon;
    const defaultNextSVGIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? this.caretAltRightIcon : this.caretAltLeftIcon : this.caretAltDownIcon;
    if (typeof this.scrollable === "object") {
      const prevIcon = this.scrollable.prevSVGButtonIcon !== void 0 ? this.scrollable.prevSVGButtonIcon : defaultPrevSVGIcon;
      const nextIcon = this.scrollable.nextSVGButtonIcon !== void 0 ? this.scrollable.nextSVGButtonIcon : defaultNextSVGIcon;
      if (prevIcon || nextIcon) {
        return this.prev ? prevIcon : nextIcon;
      }
    }
  }
  emitScrollEvent(event) {
    const scrollEvent = new TabScrollEvent({
      originalEvent: event
    });
    this.tabScroll.emit(scrollEvent);
    return scrollEvent;
  }
};
TabStripScrollableButtonComponent.ɵfac = function TabStripScrollableButtonComponent_Factory(t) {
  return new (t || TabStripScrollableButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
};
TabStripScrollableButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: TabStripScrollableButtonComponent,
  selectors: [["", "kendoTabStripScrollableButton", ""]],
  hostVars: 4,
  hostBindings: function TabStripScrollableButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-tabstrip-prev", ctx.prevClass)("k-tabstrip-next", ctx.nextClass);
    }
  },
  inputs: {
    prev: "prev",
    tabPosition: "tabPosition",
    scrollable: "scrollable"
  },
  outputs: {
    tabScroll: "tabScroll",
    onClick: "onClick"
  },
  attrs: _c123,
  decls: 1,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", 3, "name", "customFontClass", "svgIcon"]],
  template: function TabStripScrollableButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "kendo-icon-wrapper", 0);
    }
    if (rf & 2) {
      ɵɵproperty("name", ctx.iconClass)("customFontClass", ctx.customIconClass)("svgIcon", ctx.svgIcon);
    }
  },
  dependencies: [IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripScrollableButtonComponent, [{
    type: Component,
    args: [{
      template: `
        <kendo-icon-wrapper
            [name]="iconClass"
            [customFontClass]="customIconClass"
            [svgIcon]="svgIcon"
            innerCssClass="k-button-icon"
        >
        </kendo-icon-wrapper>
    `,
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoTabStripScrollableButton]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    prevClass: [{
      type: HostBinding,
      args: ["class.k-tabstrip-prev"]
    }],
    nextClass: [{
      type: HostBinding,
      args: ["class.k-tabstrip-next"]
    }],
    prev: [{
      type: Input
    }],
    tabPosition: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    tabScroll: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var TabComponent = class {
  constructor(localization) {
    this.localization = localization;
    this.tabClose = new EventEmitter();
    this.hostClasses = true;
  }
  get activeClass() {
    return this.tab.selected;
  }
  get disabledClass() {
    return this.tab.disabled;
  }
  get focusedClass() {
    return this.tab.focused;
  }
  get tabIndex() {
    return this.tab.selected || this.tab.focused ? 0 : -1;
  }
  get tabClosable() {
    if (this.tab.closable !== void 0) {
      return this.tab.closable;
    }
    return this.tabStripClosable;
  }
  get closeSVGIconClass() {
    if (this.customCloseButtonClasses) {
      return;
    }
    if (this.tab.closeSVGIcon) {
      return this.tab.closeSVGIcon;
    }
    if (this.closeSVGIcon) {
      return this.closeSVGIcon;
    }
    return xIcon;
  }
  get closeButtonClasses() {
    if (!this.customTabstripCloseIcon && this.tabStripCloseIcon && !this.tab.closeIconClass) {
      if (this.tab.closeIcon) {
        return this.tab.closeIcon;
      }
      return this.tabStripCloseIcon;
    }
  }
  get customCloseButtonClasses() {
    if (this.customTabstripCloseIcon || this.tab.closeIconClass) {
      if (this.tab.closeIconClass) {
        return this.tab.closeIconClass;
      }
      return this.customTabstripCloseIcon;
    }
  }
  get closeButtonTitle() {
    return this.localization.get("closeTitle");
  }
  closeTab(index) {
    const closeArgs = new TabCloseEvent(index, this.tab);
    this.tabClose.emit(closeArgs);
  }
};
TabComponent.ɵfac = function TabComponent_Factory(t) {
  return new (t || TabComponent)(ɵɵdirectiveInject(LocalizationService));
};
TabComponent.ɵcmp = ɵɵdefineComponent({
  type: TabComponent,
  selectors: [["", "kendoTabStripTab", ""]],
  hostVars: 13,
  hostBindings: function TabComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-selected", ctx.activeClass)("aria-disabled", ctx.disabledClass)("tabindex", ctx.tabIndex);
      ɵɵclassProp("k-item", ctx.hostClasses)("k-state-default", ctx.hostClasses)("k-active", ctx.activeClass)("k-disabled", ctx.disabledClass)("k-focus", ctx.focusedClass);
    }
  },
  inputs: {
    tab: "tab",
    index: "index",
    tabStripClosable: "tabStripClosable",
    tabStripCloseIcon: "tabStripCloseIcon",
    customTabstripCloseIcon: "customTabstripCloseIcon",
    closeSVGIcon: "closeSVGIcon"
  },
  outputs: {
    tabClose: "tabClose"
  },
  attrs: _c132,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["tabTemplate", ""], ["kendoButton", "", "type", "button", "role", "button", "fillMode", "flat", "class", "k-remove-tab k-icon-button", 3, "icon", "iconClass", "svgIcon", "title", "click", 4, "ngIf"], ["class", "k-link", 4, "ngIf"], [1, "k-link"], ["kendoButton", "", "type", "button", "role", "button", "fillMode", "flat", 1, "k-remove-tab", "k-icon-button", 3, "icon", "iconClass", "svgIcon", "title", "click"]],
  template: function TabComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TabComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, TabComponent_ng_template_1_Template, 0, 0, "ng-template", 1, 2, ɵɵtemplateRefExtractor)(3, TabComponent_button_3_Template, 1, 5, "button", 3);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", !ctx.tab.tabTemplate)("ngIfElse", _r2);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.tab.tabTemplate == null ? null : ctx.tab.tabTemplate.templateRef);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.tabClosable);
    }
  },
  dependencies: [ButtonComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoTabStripTab]",
      template: `
        <ng-container *ngIf="!tab.tabTemplate; else tabTemplate">
            <span class="k-link" *ngIf="!tab.tabTitle">{{ tab.title }}</span>
            <span class="k-link" *ngIf="tab.tabTitle">
                <ng-template [ngTemplateOutlet]="tab.tabTitle?.templateRef">
                </ng-template>
            </span>
        </ng-container>

        <ng-template #tabTemplate [ngTemplateOutlet]="tab.tabTemplate?.templateRef">
        </ng-template>

        <button
            kendoButton
            type="button"
            *ngIf="tabClosable"
            role="button"
            fillMode="flat"
            [icon]="closeButtonClasses"
            [iconClass]="customCloseButtonClasses"
            [svgIcon]="closeSVGIconClass"
            [title]="closeButtonTitle"
            [attr.aria-label]="closeButtonTitle"
            (click)="closeTab(index)"
            class="k-remove-tab k-icon-button"
        ></button>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    tab: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    tabStripClosable: [{
      type: Input
    }],
    tabStripCloseIcon: [{
      type: Input
    }],
    customTabstripCloseIcon: [{
      type: Input
    }],
    closeSVGIcon: [{
      type: Input
    }],
    tabClose: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-item"]
    }, {
      type: HostBinding,
      args: ["class.k-state-default"]
    }],
    activeClass: [{
      type: HostBinding,
      args: ["attr.aria-selected"]
    }, {
      type: HostBinding,
      args: ["class.k-active"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled]"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var TabStripMessages = class extends ComponentMessages {
};
TabStripMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵTabStripMessages_BaseFactory;
  return function TabStripMessages_Factory(t) {
    return (ɵTabStripMessages_BaseFactory || (ɵTabStripMessages_BaseFactory = ɵɵgetInheritedFactory(TabStripMessages)))(t || TabStripMessages);
  };
})();
TabStripMessages.ɵdir = ɵɵdefineDirective({
  type: TabStripMessages,
  selectors: [["kendo-tabstrip-messages-base"]],
  inputs: {
    closeTitle: "closeTitle",
    previousTabButton: "previousTabButton",
    nextTabButton: "nextTabButton"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-tabstrip-messages-base"
    }]
  }], null, {
    closeTitle: [{
      type: Input
    }],
    previousTabButton: [{
      type: Input
    }],
    nextTabButton: [{
      type: Input
    }]
  });
})();
var LocalizedTabStripMessagesDirective = class extends TabStripMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedTabStripMessagesDirective.ɵfac = function LocalizedTabStripMessagesDirective_Factory(t) {
  return new (t || LocalizedTabStripMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedTabStripMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedTabStripMessagesDirective,
  selectors: [["", "kendoTabStripLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TabStripMessages,
    useExisting: forwardRef(() => LocalizedTabStripMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedTabStripMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TabStripMessages,
        useExisting: forwardRef(() => LocalizedTabStripMessagesDirective)
      }],
      selector: `[kendoTabStripLocalizedMessages]`
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var TabStripComponent = class {
  constructor(localization, renderer, wrapper, tabstripService, scrollService, ngZone) {
    this.localization = localization;
    this.renderer = renderer;
    this.wrapper = wrapper;
    this.tabstripService = tabstripService;
    this.scrollService = scrollService;
    this.ngZone = ngZone;
    this.animate = true;
    this.tabPosition = "top";
    this.keepTabContent = false;
    this.closable = false;
    this.closeIcon = "x";
    this.showContentArea = true;
    this.tabSelect = new EventEmitter();
    this.tabClose = new EventEmitter();
    this.tabScroll = new EventEmitter();
    this.hostClasses = true;
    this.tabs = new QueryList();
    this.showLicenseWatermark = false;
    this._scrollableSettings = normalizeScrollableSettings(false);
    this.subscriptions = new Subscription();
    this.subscriptionsArePresent = false;
    this.tabStripId = guid();
    const isValid = validatePackage(packageMetadata5);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.tabstripService.owner = this;
    this.scrollService.owner = this;
    this.subscriptions.add(this.scrollService.scrollButtonActiveStateChange.subscribe((activeButtonSettings) => {
      if (this.hasScrollButtons) {
        const action = activeButtonSettings.active ? "remove" : "add";
        this.renderer[`${action}Class`](this[`${activeButtonSettings.buttonType}ScrollButton`].host.nativeElement, "k-disabled");
      }
    }));
  }
  /**
   * Sets the height of the TabStrip.
   */
  set height(value) {
    this._height = value;
    this.renderer.setStyle(this.wrapper.nativeElement, "height", value);
  }
  get height() {
    return this._height;
  }
  /**
   * Enables the scrolling of the tab list. When set to `true` and the total size of all tabs
   * is greater than the size of the TabStrip container, scroll buttons will be rendered on each end of the tab list.
   *
   * By default, `scrollable` is `false`.
   *
   * @default false
   */
  set scrollable(value) {
    this._scrollableSettings = normalizeScrollableSettings(value);
    if (this.tablist) {
      this.toggleScrollButtons(this.scrollService.tabsOverflow);
      this.attachWheelHandler(this.tablist.nativeElement);
    }
  }
  get scrollable() {
    return this._scrollableSettings;
  }
  /**
   * Defines an SVGIcon to be rendered for the close icon.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set closeSVGIcon(icon) {
    if (isDevMode() && icon && this.closeIcon && this.closeIcon !== "x") {
      throw new Error("Setting both closeIcon and svgIcon options at the same time is not supported.");
    }
    this._closeSVGIcon = icon;
  }
  get closeSVGIcon() {
    return this._closeSVGIcon;
  }
  get tabsAtTop() {
    return this.tabPosition === "top";
  }
  get tabsAtRight() {
    return this.tabPosition === "right";
  }
  get tabsAtBottom() {
    return this.tabPosition === "bottom";
  }
  get tabsAtLeft() {
    return this.tabPosition === "left";
  }
  get dir() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  get tabStripScrollable() {
    return this._scrollableSettings.enabled;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      if (this.scrollService.tabsOverflow) {
        this.toggleScrollButtons(true);
      } else {
        this.toggleScrollButtons(false);
      }
      setTimeout(() => {
        this.scrollToSelectedTab();
      });
    });
    this.initDomEvents();
    this.tabsChangesSub = this.tabs.changes.subscribe(() => {
      this.toggleScrollButtons(this.scrollService.tabsOverflow);
      this.scrollService.toggleScrollButtonsState();
    });
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    const positionChange = changes["tabPosition"];
    if (positionChange) {
      const tabsAtBottomChanged = positionChange.previousValue === "bottom" || positionChange.currentValue === "bottom";
      this.ngZone.onStable.pipe(take(1)).subscribe(() => {
        if (tabsAtBottomChanged) {
          if (this.subscriptionsArePresent) {
            this.subscriptions.unsubscribe();
            this.subscriptions = new Subscription();
            this.subscriptionsArePresent = false;
            this.activeStateChangeSub = this.scrollService.scrollButtonActiveStateChange.subscribe((activeButtonSettings) => {
              if (this.hasScrollButtons) {
                const action = activeButtonSettings.active ? "remove" : "add";
                this.renderer[`${action}Class`](this[`${activeButtonSettings.buttonType}ScrollButton`].host.nativeElement, "k-disabled");
              }
            });
          }
          this.initDomEvents();
        }
        this.scrollService.restoreScrollPosition();
      });
    }
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    if (this.tabsChangesSub) {
      this.tabsChangesSub.unsubscribe();
    }
    if (this.activeStateChangeSub) {
      this.activeStateChangeSub.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get tabsAlignmentStyles() {
    return {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      justify: "space-between"
    }[this.tabAlignment];
  }
  /**
   * @hidden
   */
  get tabListWidth() {
    if (this.tabPosition === "top" || this.tabPosition === "bottom") {
      return "100%";
    }
    return null;
  }
  /**
   * @hidden
   */
  get tabListHeight() {
    if (this.tabPosition === "left" || this.tabPosition === "right") {
      return "100%";
    }
    return null;
  }
  /**
   * @hidden
   */
  get isScrollable() {
    return this._scrollableSettings.enabled;
  }
  /**
   * @hidden
   */
  get hasScrollButtons() {
    return tabStripHasScrollButtons(this._scrollableSettings);
  }
  /**
   * @hidden
   */
  get mouseScrollEnabled() {
    return mouseScrollEnabled(this._scrollableSettings);
  }
  /**
   * @hidden
   */
  get itemsWrapperClass() {
    return isTablistHorizontal(this.tabPosition) ? "k-hstack" : "k-vstack";
  }
  /**
   * Allows the user to select a tab programmatically.
   * @param {number} index - The index of the tab that will be selected.
   */
  selectTab(index) {
    const tab = getTabByIndex(this.tabs, index);
    if (!tab || tab.disabled) {
      return;
    }
    this.tabstripService.selectTab(tab, index);
    this.scrollToSelectedTab();
  }
  /**
   * @hidden
   */
  getTabId(idx2) {
    return getId$1("k-tabstrip-tab", this.tabStripId, idx2);
  }
  /**
   * @hidden
   */
  getTabPanelId(idx2) {
    return getId$1("k-tabstrip-tabpanel", this.tabStripId, idx2);
  }
  /**
   * @hidden
   */
  onTabClick(originalEvent, tabIndex) {
    if (isFocusable(originalEvent.target)) {
      return;
    }
    const targetElement = originalEvent.target;
    const isTargetCloseButton = hasClass(targetElement, "k-remove-tab") || hasClass(targetElement.parentElement, "k-remove-tab");
    if (isTargetCloseButton) {
      return;
    }
    const tab = getTabByIndex(this.tabs, tabIndex);
    this.tabstripService.onTabSelect(tab, tabIndex);
    this.scrollToSelectedTab();
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.scrollService.tabsOverflow) {
      this.toggleScrollButtons(true);
    } else {
      this.toggleScrollButtons(false);
    }
    this.ngZone.runOutsideAngular(() => {
      this.scrollService.toggleScrollButtonsState();
    });
  }
  /**
   * @hidden
   */
  scrollToSelectedTab() {
    if (this._scrollableSettings.enabled) {
      this.scrollService.scrollToSelectedTab();
    }
  }
  /**
   * @hidden
   */
  onScrollButtonClick(buttonType) {
    this.scrollService.scrollTabs(buttonType);
  }
  initDomEvents() {
    if (!this.wrapper || this.subscriptionsArePresent) {
      return;
    }
    const tablist = this.tablist.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(tablist, "keydown", (ev) => {
        this.tabstripService.onKeyDown(ev);
      }));
    });
    this.subscriptions.add(this.renderer.listen(tablist, "focusout", () => {
      resetTabFocus(this.tabs);
    }));
    if (this.isScrollable && this.mouseScrollEnabled) {
      this.attachWheelHandler(tablist);
    }
    this.subscriptionsArePresent = true;
  }
  toggleScrollButtons(tabsOverflow) {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      const scrollButtonsSetting = this._scrollableSettings.scrollButtons;
      const scrollButtonsArePresent = this.prevScrollButton && this.nextScrollButton;
      const shouldShowButtons = scrollButtonsArePresent && tabsOverflow;
      const shouldHideButtons = scrollButtonsArePresent && !tabsOverflow && scrollButtonsSetting !== "visible";
      const alwaysVisible = scrollButtonsSetting === "visible";
      if (shouldHideButtons) {
        this.prevScrollButton.toggle(false);
        this.nextScrollButton.toggle(false);
      } else if (shouldShowButtons || alwaysVisible) {
        this.prevScrollButton.toggle(true);
        this.nextScrollButton.toggle(true);
      }
      if (scrollButtonsArePresent && alwaysVisible) {
        this.ngZone.runOutsideAngular(() => {
          this.scrollService.toggleScrollButtonsState();
        });
      }
    });
  }
  attachWheelHandler(tablist) {
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(tablist, "wheel", (wheelEvent) => {
        const scrollEvent = new TabScrollEvent({
          originalEvent: wheelEvent
        });
        this.tabScroll.emit(scrollEvent);
        const isTabStripScrollEventPrevented = scrollEvent.isDefaultPrevented();
        if (isTabStripScrollEventPrevented || !this.scrollService.tabsOverflow) {
          return;
        }
        this.scrollService.onMouseScroll(wheelEvent);
      }));
    });
  }
};
TabStripComponent.ɵfac = function TabStripComponent_Factory(t) {
  return new (t || TabStripComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TabStripService), ɵɵdirectiveInject(ScrollService), ɵɵdirectiveInject(NgZone));
};
TabStripComponent.ɵcmp = ɵɵdefineComponent({
  type: TabStripComponent,
  selectors: [["kendo-tabstrip"]],
  contentQueries: function TabStripComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabStripTabComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
    }
  },
  viewQuery: function TabStripComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c142, 5);
      ɵɵviewQuery(_c152, 5);
      ɵɵviewQuery(_c16, 5);
      ɵɵviewQuery(_c17, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tablist = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevScrollButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextScrollButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabHeaderContainers = _t);
    }
  },
  hostVars: 15,
  hostBindings: function TabStripComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-tabstrip", ctx.hostClasses)("k-pos-relative", ctx.hostClasses)("k-tabstrip-top", ctx.tabsAtTop)("k-tabstrip-right", ctx.tabsAtRight)("k-tabstrip-bottom", ctx.tabsAtBottom)("k-tabstrip-left", ctx.tabsAtLeft)("k-tabstrip-scrollable", ctx.tabStripScrollable);
    }
  },
  inputs: {
    height: "height",
    animate: "animate",
    tabAlignment: "tabAlignment",
    tabPosition: "tabPosition",
    keepTabContent: "keepTabContent",
    closable: "closable",
    scrollable: "scrollable",
    closeIcon: "closeIcon",
    closeIconClass: "closeIconClass",
    closeSVGIcon: "closeSVGIcon",
    showContentArea: "showContentArea"
  },
  outputs: {
    tabSelect: "tabSelect",
    tabClose: "tabClose",
    tabScroll: "tabScroll"
  },
  exportAs: ["kendoTabStrip"],
  features: [ɵɵProvidersFeature([TabStripService, ScrollService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.tabstrip"
  }]), ɵɵNgOnChangesFeature],
  decls: 9,
  vars: 4,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_0 = goog.getMsg("Close");
      i18n_0 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.tabstrip.closeTitle|The title for the **Close** button in the TabStrip tab.:Close`;
    }
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_1 = goog.getMsg("Previous Tab");
      i18n_1 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.tabstrip.previousTabButton|The title for the **Previous Tab** button when the Tabstrip is scrollable.:Previous Tab`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_2 = goog.getMsg("Next Tab");
      i18n_2 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.tabstrip.nextTabButton|The title for the **Next Tab** button when the Tabstrip is scrollable.:Next Tab`;
    }
    return [["kendoTabStripLocalizedMessages", "", "closeTitle", i18n_0, "previousTabButton", i18n_1, "nextTabButton", i18n_2], [4, "ngIf"], ["heading", ""], ["content", ""], [3, "resize", 4, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "k-tabstrip-items-wrapper", 3, "ngClass"], ["role", "button", "kendoTabStripScrollableButton", "", "class", "k-icon-button k-button k-button-md k-rounded-md k-button-flat k-button-flat-base", 3, "scrollable", "tabPosition", "prev", "title", "tabScroll", "onClick", 4, "ngIf"], ["role", "tablist", 1, "k-reset", "k-tabstrip-items"], ["tablist", ""], [4, "ngFor", "ngForOf"], ["role", "button", "kendoTabStripScrollableButton", "", 1, "k-icon-button", "k-button", "k-button-md", "k-rounded-md", "k-button-flat", "k-button-flat-base", 3, "scrollable", "tabPosition", "prev", "title", "tabScroll", "onClick"], ["prevScrollButton", ""], ["kendoTabStripTab", "", "role", "tab", 3, "ngClass", "ngStyle", "tab", "index", "tabStripClosable", "tabStripCloseIcon", "customTabstripCloseIcon", "closeSVGIcon", "id", "tabClose", "click"], ["tabHeaderContainer", ""], ["nextScrollButton", ""], ["ngFor", "", 3, "ngForOf"], ["role", "tabpanel", 3, "ngClass", "tabIndex", "id", 4, "ngIf"], ["role", "tabpanel", 3, "ngClass", "tabIndex", "id"], [3, "ngTemplateOutlet"], [3, "resize"], ["kendoWatermarkOverlay", ""]];
  },
  template: function TabStripComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵtemplate(1, TabStripComponent_ng_container_1_Template, 3, 2, "ng-container", 1)(2, TabStripComponent_ng_container_2_Template, 3, 2, "ng-container", 1)(3, TabStripComponent_ng_template_3_Template, 6, 11, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, TabStripComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(7, TabStripComponent_kendo_resize_sensor_7_Template, 1, 0, "kendo-resize-sensor", 4)(8, TabStripComponent_div_8_Template, 1, 0, "div", 5);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.tabsAtBottom);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.tabsAtBottom);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.isScrollable);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [TabStripScrollableButtonComponent, TabComponent, ResizeSensorComponent, WatermarkOverlayComponent, LocalizedTabStripMessagesDirective, NgIf, NgTemplateOutlet, NgClass, NgForOf, NgStyle],
  encapsulation: 2,
  data: {
    animation: [trigger("state", [state("active", style({
      opacity: 1
    })), transition("* => active", [style({
      opacity: 0
    }), animate("400ms ease-in")])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripComponent, [{
    type: Component,
    args: [{
      animations: [trigger("state", [state("active", style({
        opacity: 1
      })), transition("* => active", [style({
        opacity: 0
      }), animate("400ms ease-in")])])],
      providers: [TabStripService, ScrollService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.tabstrip"
      }],
      exportAs: "kendoTabStrip",
      selector: "kendo-tabstrip",
      template: `
        <ng-container kendoTabStripLocalizedMessages
            i18n-closeTitle="kendo.tabstrip.closeTitle|The title for the **Close** button in the TabStrip tab."
            closeTitle="Close"

            i18n-previousTabButton="kendo.tabstrip.previousTabButton|The title for the **Previous Tab** button when the Tabstrip is scrollable."
            previousTabButton="Previous Tab"

            i18n-nextTabButton="kendo.tabstrip.nextTabButton|The title for the **Next Tab** button when the Tabstrip is scrollable."
            nextTabButton="Next Tab"
        >
        </ng-container>
        <ng-container *ngIf="!tabsAtBottom">
            <ng-container *ngTemplateOutlet="heading"></ng-container>
            <ng-container *ngIf="showContentArea">
                <ng-container *ngTemplateOutlet="content"></ng-container>
            </ng-container>
        </ng-container>

        <ng-container *ngIf="tabsAtBottom">
        <ng-container *ngIf="showContentArea">
                <ng-container *ngTemplateOutlet="content"></ng-container>
            </ng-container>
            <ng-container *ngTemplateOutlet="heading"></ng-container>
        </ng-container>
        <ng-template #heading>
            <div class="k-tabstrip-items-wrapper" [ngClass]="itemsWrapperClass">
                <span
                    role="button"
                    *ngIf="hasScrollButtons"
                    #prevScrollButton
                    kendoTabStripScrollableButton
                    [scrollable]="scrollable"
                    [tabPosition]="tabPosition"
                    [prev]="true"
                    [title]="localization.get('previousTabButton')"
                    (tabScroll)="tabScroll.emit($event)"
                    class="k-icon-button k-button k-button-md k-rounded-md k-button-flat k-button-flat-base"
                    (onClick)="onScrollButtonClick($event)">
                </span>
                <ul role="tablist" #tablist
                    class="k-reset k-tabstrip-items"
                    [style.justifyContent]="tabsAlignmentStyles"
                    [style.width]="tabListWidth"
                    [style.height]="tabListHeight"
                    [attr.aria-orientation]="tabPosition === 'left' || tabPosition === 'right' ? 'vertical' : 'horizontal'"
                >
                    <ng-container *ngFor="let tab of tabs; let i = index;">
                        <li
                            #tabHeaderContainer
                            kendoTabStripTab
                            [ngClass]="tab.cssClass"
                            [ngStyle]="tab.cssStyle"
                            [tab]="tab"
                            [index]="i"
                            role="tab"
                            [tabStripClosable]="closable"
                            [tabStripCloseIcon]="closeIcon"
                            [customTabstripCloseIcon]="closeIconClass"
                            [closeSVGIcon]="closeSVGIcon"
                            (tabClose)="tabClose.emit($event)"
                            (click)="onTabClick($event, i)"
                            [id]="getTabId(i)"
                            [attr.aria-controls]="(showContentArea && tab.selected) ? getTabPanelId(i) : undefined"></li>
                    </ng-container>
                </ul>
                <span
                    role="button"
                    *ngIf="hasScrollButtons"
                    #nextScrollButton
                    kendoTabStripScrollableButton
                    [scrollable]="scrollable"
                    [tabPosition]="tabPosition"
                    [prev]="false"
                    [title]="localization.get('nextTabButton')"
                    (tabScroll)="tabScroll.emit($event)"
                    class="k-icon-button k-button k-button-md k-rounded-md k-button-flat k-button-flat-base"
                    (onClick)="onScrollButtonClick($event)"></span>
            </div>
        </ng-template>
        <ng-template #content>
            <ng-template ngFor let-tab [ngForOf]="tabs" let-i="index">
                <div
                    [@state]="tab.selected && animate ? 'active' : 'inactive'"
                    *ngIf="tab.selected || keepTabContent"
                    [ngClass]="!this.keepTabContent || tab.selected ? 'k-tabstrip-content k-active' : 'k-tabstrip-content'"
                    [tabIndex]="0"
                    role="tabpanel"
                    [id]="getTabPanelId(i)"
                    [attr.aria-hidden]="!tab.selected"
                    [attr.aria-expanded]="tab.selected"
                    [attr.aria-labelledby]="getTabId(i)"
                    [attr.aria-disabled]="tab.disabled"
                >
                    <ng-template [ngTemplateOutlet]="tab.tabContent?.templateRef">
                    </ng-template>
                </div>
            </ng-template>
        </ng-template>
        <kendo-resize-sensor *ngIf="isScrollable" (resize)="onResize()"></kendo-resize-sensor>
        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: TabStripService
    }, {
      type: ScrollService
    }, {
      type: NgZone
    }];
  }, {
    height: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    tabAlignment: [{
      type: Input
    }],
    tabPosition: [{
      type: Input
    }],
    keepTabContent: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeIconClass: [{
      type: Input
    }],
    closeSVGIcon: [{
      type: Input
    }],
    showContentArea: [{
      type: Input
    }],
    tabSelect: [{
      type: Output
    }],
    tabClose: [{
      type: Output
    }],
    tabScroll: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-tabstrip"]
    }, {
      type: HostBinding,
      args: ["class.k-pos-relative"]
    }],
    tabsAtTop: [{
      type: HostBinding,
      args: ["class.k-tabstrip-top"]
    }],
    tabsAtRight: [{
      type: HostBinding,
      args: ["class.k-tabstrip-right"]
    }],
    tabsAtBottom: [{
      type: HostBinding,
      args: ["class.k-tabstrip-bottom"]
    }],
    tabsAtLeft: [{
      type: HostBinding,
      args: ["class.k-tabstrip-left"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    tabStripScrollable: [{
      type: HostBinding,
      args: ["class.k-tabstrip-scrollable"]
    }],
    tabs: [{
      type: ContentChildren,
      args: [TabStripTabComponent]
    }],
    tablist: [{
      type: ViewChild,
      args: ["tablist", {
        static: false
      }]
    }],
    tabHeaderContainers: [{
      type: ViewChildren,
      args: ["tabHeaderContainer", {
        read: ElementRef
      }]
    }],
    prevScrollButton: [{
      type: ViewChild,
      args: ["prevScrollButton", {
        static: false
      }]
    }],
    nextScrollButton: [{
      type: ViewChild,
      args: ["nextScrollButton", {
        static: false
      }]
    }]
  });
})();
var TabStripCustomMessagesComponent = class extends TabStripMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
TabStripCustomMessagesComponent.ɵfac = function TabStripCustomMessagesComponent_Factory(t) {
  return new (t || TabStripCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
TabStripCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: TabStripCustomMessagesComponent,
  selectors: [["kendo-tabstrip-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: TabStripMessages,
    useExisting: forwardRef(() => TabStripCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function TabStripCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TabStripMessages,
        useExisting: forwardRef(() => TabStripCustomMessagesComponent)
      }],
      selector: "kendo-tabstrip-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DrawerTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DrawerTemplateDirective.ɵfac = function DrawerTemplateDirective_Factory(t) {
  return new (t || DrawerTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DrawerTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DrawerTemplateDirective,
  selectors: [["", "kendoDrawerTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DrawerItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DrawerItemTemplateDirective.ɵfac = function DrawerItemTemplateDirective_Factory(t) {
  return new (t || DrawerItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DrawerItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DrawerItemTemplateDirective,
  selectors: [["", "kendoDrawerItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DrawerHeaderTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DrawerHeaderTemplateDirective.ɵfac = function DrawerHeaderTemplateDirective_Factory(t) {
  return new (t || DrawerHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DrawerHeaderTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DrawerHeaderTemplateDirective,
  selectors: [["", "kendoDrawerHeaderTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerHeaderTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DrawerFooterTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
DrawerFooterTemplateDirective.ɵfac = function DrawerFooterTemplateDirective_Factory(t) {
  return new (t || DrawerFooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
DrawerFooterTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: DrawerFooterTemplateDirective,
  selectors: [["", "kendoDrawerFooterTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerFooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerFooterTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var defaultIsItemExpanded = (_item) => false;
var DrawerService = class {
  constructor() {
    this.selectedIndices = [];
    this.focusIndex = 0;
    this.originalItems = [];
    this.idxCounter = 0;
    this.isItemExpanded = defaultIsItemExpanded;
  }
  init() {
    this.resetViewData();
    this.originalItems = this.owner.items || [];
    const rootItems = this.originalItems.filter((item) => !isPresent4(item.parentId));
    this.populateViewData(rootItems);
  }
  get view() {
    return Array.from(this.viewData);
  }
  changeFocusedItem(items, keyName, renderer) {
    const currentItem = items.get(this.focusIndex);
    let nextItem;
    if (keyName === "arrowUp") {
      if (this.focusIndex === 0) {
        nextItem = items.get(items.length - 1);
        this.focusIndex = items.length - 1;
      } else {
        nextItem = items.get(this.focusIndex - 1);
        this.focusIndex = this.focusIndex - 1;
      }
    } else if (keyName === "arrowDown") {
      if (this.focusIndex === items.length - 1) {
        nextItem = items.get(0);
        this.focusIndex = 0;
      } else {
        nextItem = items.get(this.focusIndex + 1);
        this.focusIndex = this.focusIndex + 1;
      }
    }
    renderer.setAttribute(currentItem.nativeElement, "tabindex", "-1");
    renderer.setAttribute(nextItem.nativeElement, "tabindex", "0");
    nextItem.nativeElement.focus();
  }
  populateViewData(items, level = 0) {
    items.forEach((item) => {
      this.setSelection(item);
      const children = this.loadChildren(item);
      const isExpanded = this.isItemExpanded(item);
      this.viewData.add({
        item,
        index: this.idxCounter++,
        level,
        hasChildren: children.length > 0,
        isExpanded
      });
      if (children.length > 0 && isExpanded) {
        this.populateViewData(children, level + 1);
      }
    });
  }
  resetViewData() {
    this.idxCounter = 0;
    this.viewData = /* @__PURE__ */ new Set();
  }
  loadChildren(item) {
    return this.originalItems.filter((i) => {
      return isPresent4(i.parentId) && i.parentId === item.id;
    });
  }
  onSelect(selectedIdx) {
    this.selectedIndices = [selectedIdx];
    const drawer = this.owner;
    if (drawer.autoCollapse && !drawer.minimized) {
      drawer.toggle(false);
    }
  }
  setSelection(item) {
    if (this.selectedIndices.length === 0 && item.selected) {
      this.selectedIndices.push(this.idxCounter);
    }
  }
  resetSelection() {
    this.selectedIndices = [];
  }
};
DrawerService.ɵfac = function DrawerService_Factory(t) {
  return new (t || DrawerService)();
};
DrawerService.ɵprov = ɵɵdefineInjectable({
  token: DrawerService,
  factory: DrawerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerService, [{
    type: Injectable
  }], null, null);
})();
function miniExpandPush(duration, width, miniWidth) {
  return [style({
    overflow: "hidden",
    flexBasis: `${miniWidth}px`
  }), animate(`${duration}ms ease-in`, style({
    flexBasis: `${width}px`
  }))];
}
function miniCollapsePush(duration, width, miniWidth) {
  return [style({
    overflow: "hidden",
    flexBasis: `${width}px`
  }), animate(`${duration}ms ease-in`, style({
    flexBasis: `${miniWidth}px`
  }))];
}
function miniExpandOverlay(duration, width, miniWidth) {
  return [style({
    width: `${miniWidth}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    width: `${width}px`
  }))];
}
function expandPush(duration, width) {
  return [style({
    overflow: "hidden",
    flexBasis: "0px"
  }), animate(`${duration}ms ease-in`, style({
    flexBasis: `${width}px`
  }))];
}
function collapsePush(duration, width) {
  return [style({
    flexBasis: `${width}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    flexBasis: `0px`
  }))];
}
function expandRTLOverlay(duration) {
  return [style({
    transform: `translateX(100%)`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(0)`
  }))];
}
function expandOverlay(duration, position2) {
  const translateDir = position2 !== "end" ? `-100%` : `100%`;
  return [style({
    transform: `translateX(${translateDir})`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(0)`
  }))];
}
function miniCollapseOverlay(duration, width, miniWidth) {
  return [style({
    width: `${width}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    width: `${miniWidth}px`
  }))];
}
function collapseOverlay(duration, position2) {
  const translateDir = position2 !== "end" ? "-100%" : "100%";
  return [style({
    transform: `translateX(0)`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(${translateDir})`
  }))];
}
function collapseRTLOverlay(duration) {
  return [style({
    transform: `translateX(0)`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(100%)`
  }))];
}
function expandAnimation(settings) {
  const duration = settings.animation.duration;
  const width = settings.width;
  const miniWidth = settings.miniWidth;
  const mode = settings.mode;
  const mini = settings.mini;
  const rtl = settings.rtl;
  const position2 = settings.position;
  if (mini && mode === "push") {
    return miniExpandPush(duration, width, miniWidth);
  }
  if (!mini && mode === "push") {
    return expandPush(duration, width);
  }
  if (!mini && mode === "overlay") {
    return rtl ? expandRTLOverlay(duration) : expandOverlay(duration, position2);
  }
  if (mini && mode === "overlay") {
    return miniExpandOverlay(duration, width, miniWidth);
  }
}
function collapseAnimation(settings) {
  const duration = settings.animation.duration;
  const width = settings.width;
  const miniWidth = settings.miniWidth;
  const mode = settings.mode;
  const mini = settings.mini;
  const rtl = settings.rtl;
  const position2 = settings.position;
  if (mini && mode === "push") {
    return miniCollapsePush(duration, width, miniWidth);
  }
  if (!mini && mode === "push") {
    return collapsePush(duration, width);
  }
  if (!mini && mode === "overlay") {
    return rtl ? collapseRTLOverlay(duration) : collapseOverlay(duration, position2);
  }
  if (mini && mode === "overlay") {
    return miniCollapseOverlay(duration, width, miniWidth);
  }
}
var DRAWER_ITEM_INDEX = "data-kendo-drawer-index";
var DRAWER_LINK_SELECTOR = ".k-drawer-link";
var ACTIVE_NESTED_LINK_SELECTOR = ":focus:not(.k-disabled) .k-drawer-link";
var nestedLink = (element, selector) => element.querySelector(selector);
var DrawerListSelectEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var DrawerItemComponent = class {
  constructor(drawerService, element, renderer) {
    this.drawerService = drawerService;
    this.element = element;
    this.renderer = renderer;
    this.arrowUpIcon = chevronUpIcon;
    this.arrowDownIcon = chevronDownIcon;
  }
  get disabledClass() {
    return this.item.disabled;
  }
  get selectedClass() {
    return this.drawerService.selectedIndices.indexOf(this.index) >= 0;
  }
  get label() {
    return this.item.text ? this.item.text : null;
  }
  ngAfterViewInit() {
    const elem = this.element.nativeElement;
    const link = nestedLink(elem, DRAWER_LINK_SELECTOR);
    if (link) {
      this.renderer.removeAttribute(link, "tabindex");
    }
  }
  get iconClasses() {
    if (this.item.icon) {
      const stripIcon = this.item.icon.replace("k-i-", "");
      return `${stripIcon}`;
    }
  }
  get innerCssClasses() {
    if (this.item.iconClass && this.item.icon) {
      return `${this.item.iconClass}`;
    }
  }
  get customIconClasses() {
    if (!this.item.icon && this.item.iconClass) {
      return this.item.iconClass;
    }
  }
  get item() {
    return this.viewItem.item;
  }
};
DrawerItemComponent.ɵfac = function DrawerItemComponent_Factory(t) {
  return new (t || DrawerItemComponent)(ɵɵdirectiveInject(DrawerService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
DrawerItemComponent.ɵcmp = ɵɵdefineComponent({
  type: DrawerItemComponent,
  selectors: [["", "kendoDrawerItem", ""]],
  hostVars: 7,
  hostBindings: function DrawerItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.disabledClass)("aria-current", ctx.selectedClass)("aria-label", ctx.label);
      ɵɵclassProp("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass);
    }
  },
  inputs: {
    viewItem: "viewItem",
    index: "index",
    itemTemplate: "itemTemplate",
    mini: "mini",
    expanded: "expanded",
    disabled: "disabled",
    cssClass: "cssClass",
    cssStyle: "cssStyle"
  },
  attrs: _c18,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "name", "customFontClass", "svgIcon", "innerCssClass", 4, "ngIf"], [1, "k-item-text"], ["innerCssClass", "k-drawer-toggle", 3, "name", "svgIcon", 4, "ngIf"], [3, "name", "customFontClass", "svgIcon", "innerCssClass"], ["innerCssClass", "k-drawer-toggle", 3, "name", "svgIcon"]],
  template: function DrawerItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DrawerItemComponent_0_Template, 1, 7, null, 0)(1, DrawerItemComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.itemTemplate)("ngIfElse", _r2);
    }
  },
  dependencies: [IconWrapperComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDrawerItem]",
      template: `
        <ng-template *ngIf="itemTemplate; else defaultTemplate"
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{
                $implicit: item,
                isItemExpanded: viewItem.isExpanded,
                hasChildren: viewItem.hasChildren,
                level: viewItem.level
            }">
        </ng-template>

        <ng-template #defaultTemplate>
            <ng-container *ngIf="expanded">
                <kendo-icon-wrapper
                    *ngIf="item.icon || item.iconClass || item.svgIcon"
                    [name]="iconClasses"
                    [customFontClass]="customIconClasses"
                    [svgIcon]="item.svgIcon"
                    [innerCssClass]="innerCssClasses"
                >
                </kendo-icon-wrapper>

                <span class="k-item-text">{{ item.text }}</span>
                <kendo-icon-wrapper
                    *ngIf="viewItem.hasChildren"
                    [name]="viewItem.isExpanded ? 'arrow-chevron-up' : 'arrow-chevron-down'"
                    innerCssClass="k-drawer-toggle"
                    [svgIcon]="viewItem.isExpanded ? arrowUpIcon : arrowDownIcon"
                >
                </kendo-icon-wrapper>
            </ng-container>
            <ng-container *ngIf="mini && !expanded">
                <kendo-icon-wrapper
                    *ngIf="item.icon || item.iconClass || item.svgIcon"
                    [name]="iconClasses"
                    [customFontClass]="customIconClasses"
                    [svgIcon]="item.svgIcon"
                    [innerCssClass]="innerCssClasses"
                >
                </kendo-icon-wrapper>
            </ng-container>
        </ng-template>
    `
    }]
  }], function() {
    return [{
      type: DrawerService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    viewItem: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    mini: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }, {
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    label: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }]
  });
})();
var DrawerListComponent = class {
  constructor(drawerService, renderer, ngZone, element) {
    this.drawerService = drawerService;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.element = element;
    this.view = [];
    this.select = new EventEmitter();
    this.subscriptions = new Subscription();
  }
  ngOnInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  identifyItem(_index, viewItem) {
    return viewItem.item.id ?? viewItem.index;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      this.subscriptions.add(this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this)));
      this.subscriptions.add(this.renderer.listen(nativeElement, "keydown", (e) => {
        const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
        const isArrowUpOrDown = e.keyCode === Keys.ArrowUp || e.keyCode === Keys.ArrowDown;
        if (isEnterOrSpace) {
          this.onEnterOrSpaceKeyDown(e);
        } else if (isArrowUpOrDown) {
          if (e.target.classList.contains("k-drawer-item")) {
            e.preventDefault();
            const keyName = e.keyCode === Keys.ArrowUp ? "arrowUp" : "arrowDown";
            this.drawerService.changeFocusedItem(this.items, keyName, this.renderer);
          }
        }
      }));
    });
  }
  clickHandler(e) {
    const viewItemIdx = this.getDrawerItemIndex(e.target);
    const viewItem = this.view[viewItemIdx];
    const filterItems = this.view.filter((items) => !items.item.separator);
    const selectedItemIndex = filterItems.findIndex((item) => item.index === viewItemIdx);
    if (!viewItem) {
      return;
    }
    if (viewItem.item.disabled) {
      e.preventDefault();
      return;
    }
    const args = {
      index: viewItem.index,
      item: viewItem.item,
      originalEvent: e
    };
    this.ngZone.run(() => {
      const event = new DrawerListSelectEvent(args);
      this.select.emit(event);
      if (!event.isDefaultPrevented()) {
        this.drawerService.focusIndex = selectedItemIndex;
        this.drawerService.onSelect(viewItemIdx);
        this.drawerService.init();
        this.view = this.drawerService.view;
      }
    });
  }
  onEnterOrSpaceKeyDown(e) {
    this.clickHandler(e);
    const link = nestedLink(this.element.nativeElement, ACTIVE_NESTED_LINK_SELECTOR);
    if (link) {
      link.click();
    }
    return false;
  }
  getDrawerItemIndex(target) {
    const item = closestItem(target, DRAWER_ITEM_INDEX, this.element.nativeElement);
    if (item) {
      return itemIndex(item, DRAWER_ITEM_INDEX);
    }
  }
};
DrawerListComponent.ɵfac = function DrawerListComponent_Factory(t) {
  return new (t || DrawerListComponent)(ɵɵdirectiveInject(DrawerService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
DrawerListComponent.ɵcmp = ɵɵdefineComponent({
  type: DrawerListComponent,
  selectors: [["", "kendoDrawerList", ""]],
  viewQuery: function DrawerListComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DrawerItemComponent, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    itemTemplate: "itemTemplate",
    mini: "mini",
    expanded: "expanded",
    view: "view"
  },
  outputs: {
    select: "select"
  },
  attrs: _c20,
  decls: 1,
  vars: 2,
  consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["kendoDrawerItem", "", "role", "menuitem", 3, "class", "viewItem", "index", "mini", "expanded", "itemTemplate", "ngClass", "ngStyle", "tabindex", 4, "ngIf"], ["role", "separator", "class", "k-drawer-item k-drawer-separator", 3, "ngClass", "ngStyle", 4, "ngIf"], ["kendoDrawerItem", "", "role", "menuitem", 3, "viewItem", "index", "mini", "expanded", "itemTemplate", "ngClass", "ngStyle", "tabindex"], ["role", "separator", 1, "k-drawer-item", "k-drawer-separator", 3, "ngClass", "ngStyle"]],
  template: function DrawerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DrawerListComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.view)("ngForTrackBy", ctx.identifyItem);
    }
  },
  dependencies: [DrawerItemComponent, NgForOf, NgIf, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDrawerList]",
      template: `
        <ng-container *ngFor="let v of view; trackBy:identifyItem; let idx = index">
            <li *ngIf="!v.item.separator" kendoDrawerItem
                class="k-drawer-item {{expanded ? ' k-level-' + v.level : ''}}"
                role="menuitem"
                [viewItem]="v"
                [index]="idx"
                [mini]="mini"
                [expanded]="expanded"
                [itemTemplate]="itemTemplate"
                [attr.${DRAWER_ITEM_INDEX}]="v.index"
                [ngClass]="v.item.cssClass"
                [ngStyle]="v.item.cssStyle"
                [tabindex]="v.index === 0 ? '0' : '-1'">
            </li>

            <li *ngIf="v.item.separator"
                role="separator"
                class="k-drawer-item k-drawer-separator"
                [ngClass]="v.item.cssClass"
                [ngStyle]="v.item.cssStyle">
                &nbsp;
            </li>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: DrawerService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ElementRef
    }];
  }, {
    itemTemplate: [{
      type: Input
    }],
    mini: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    items: [{
      type: ViewChildren,
      args: [DrawerItemComponent, {
        read: ElementRef
      }]
    }]
  });
})();
var DEFAULT_ANIMATION = {
  type: "slide",
  duration: 200
};
var DrawerComponent = class {
  constructor(element, builder, localizationService, drawerService) {
    this.element = element;
    this.builder = builder;
    this.localizationService = localizationService;
    this.drawerService = drawerService;
    this.hostClasses = true;
    this.mode = "overlay";
    this.position = "start";
    this.mini = false;
    this.expanded = false;
    this.width = 240;
    this.miniWidth = 50;
    this.autoCollapse = true;
    this.items = [];
    this.animation = DEFAULT_ANIMATION;
    this.expand = new EventEmitter();
    this.collapse = new EventEmitter();
    this.select = new EventEmitter();
    this.expandedChange = new EventEmitter();
    this.showLicenseWatermark = false;
    this.animationEnd = new EventEmitter();
    this.rtl = false;
    const isValid = validatePackage(packageMetadata5);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
    this.drawerService.owner = this;
  }
  get startPositionClass() {
    return this.position === "start";
  }
  get endPositionClass() {
    return this.position === "end";
  }
  get overlayTransofrmStyles() {
    if (this.mode === "push") {
      return;
    }
    if (this.expanded || this.minimized) {
      return `translateX(0px)`;
    }
    return `translateX(-100%)`;
  }
  get flexStyles() {
    if (this.mode === "overlay") {
      return;
    }
    if (!this.expanded && !this.minimized) {
      return 0;
    }
    return this.drawerWidth;
  }
  /**
   * Defines a callback function which determines if an item should be expanded.
   */
  set isItemExpanded(fn) {
    if (isDevMode && isPresent4(fn) && typeof fn !== "function") {
      throw new Error(`isItemExpanded must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this.drawerService.isItemExpanded = fn;
  }
  get isItemExpanded() {
    return this.drawerService.isItemExpanded;
  }
  ngOnChanges(changes) {
    if (changes && changes["items"]) {
      this.drawerService.resetSelection();
      this.drawerService.init();
      this.viewItems = this.drawerService.view;
    }
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get minimized() {
    return this.mini && !this.expanded;
  }
  /**
   * @hidden
   */
  get drawerWidth() {
    return this.minimized ? this.miniWidth : this.width;
  }
  /**
   * Toggles the visibility of the Drawer.
   *
   * @param expanded? - Boolean. Specifies if the Drawer will be expanded or collapsed.
   */
  toggle(expanded) {
    const previous = this.expanded;
    const current = isPresent4(expanded) ? expanded : !previous;
    if (current === previous) {
      return;
    }
    if (current === true) {
      this.setExpanded(true);
    } else if (current === false && !this.animation) {
      this.setExpanded(false);
    }
    if (this.animation) {
      this.animationEnd.pipe(take(1)).subscribe(() => {
        this.onAnimationEnd(current);
      });
      this.animate(current);
    } else {
      this[current ? "expand" : "collapse"].emit();
    }
  }
  /**
   * @hidden
   */
  onSelect(e) {
    this.select.emit(Object.assign(e, {
      sender: this
    }));
  }
  onAnimationEnd(currentExpanded) {
    if (currentExpanded) {
      this.expand.emit();
    } else {
      this.setExpanded(false);
      this.collapse.emit();
    }
  }
  setExpanded(value) {
    this.expanded = value;
    this.expandedChange.emit(value);
  }
  animate(expanded) {
    const settings = {
      mode: this.mode,
      mini: this.mini,
      miniWidth: this.miniWidth,
      width: this.width,
      rtl: this.rtl,
      position: this.position,
      animation: typeof this.animation !== "boolean" ? this.animation : DEFAULT_ANIMATION
    };
    const animation = expanded ? expandAnimation(settings) : collapseAnimation(settings);
    const player = this.createPlayer(animation, this.element.nativeElement);
    player.play();
  }
  createPlayer(animation, animatedElement) {
    const factory = this.builder.build(animation);
    let player = factory.create(animatedElement);
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
    return player;
  }
};
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) {
  return new (t || DrawerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(DrawerService));
};
DrawerComponent.ɵcmp = ɵɵdefineComponent({
  type: DrawerComponent,
  selectors: [["kendo-drawer"]],
  contentQueries: function DrawerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DrawerTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, DrawerFooterTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, DrawerHeaderTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, DrawerItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  hostVars: 11,
  hostBindings: function DrawerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵstyleProp("transform", ctx.overlayTransofrmStyles)("flex-basis", ctx.flexStyles, "px");
      ɵɵclassProp("k-drawer", ctx.hostClasses)("k-drawer-start", ctx.startPositionClass)("k-drawer-end", ctx.endPositionClass);
    }
  },
  inputs: {
    mode: "mode",
    position: "position",
    mini: "mini",
    expanded: "expanded",
    width: "width",
    miniWidth: "miniWidth",
    autoCollapse: "autoCollapse",
    items: "items",
    isItemExpanded: "isItemExpanded",
    animation: "animation"
  },
  outputs: {
    expand: "expand",
    collapse: "collapse",
    select: "select",
    expandedChange: "expandedChange"
  },
  exportAs: ["kendoDrawer"],
  features: [ɵɵProvidersFeature([LocalizationService, DrawerService, {
    provide: L10N_PREFIX,
    useValue: "kendo.drawer"
  }]), ɵɵNgOnChangesFeature],
  decls: 2,
  vars: 2,
  consts: [["class", "k-drawer-wrapper", 3, "width", 4, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [1, "k-drawer-wrapper"], [4, "ngIf"], ["kendoDrawerList", "", "role", "menubar", "orientation", "vertical", 1, "k-drawer-items", 3, "mini", "expanded", "view", "itemTemplate", "select"], [3, "ngTemplateOutlet"], ["kendoWatermarkOverlay", ""]],
  template: function DrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DrawerComponent_div_0_Template, 3, 4, "div", 0)(1, DrawerComponent_div_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.expanded || ctx.mini);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [DrawerListComponent, WatermarkOverlayComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDrawer",
      providers: [LocalizationService, DrawerService, {
        provide: L10N_PREFIX,
        useValue: "kendo.drawer"
      }],
      selector: "kendo-drawer",
      template: `
        <div class="k-drawer-wrapper" *ngIf="expanded || mini" [style.width.px]="drawerWidth">
            <ng-container *ngIf="!drawerTemplate">
                <ng-template *ngIf="headerTemplate"
                    [ngTemplateOutlet]="headerTemplate?.templateRef">
                </ng-template>

                <ul kendoDrawerList
                    role="menubar"
                    orientation="vertical"
                    (select)="onSelect($event)"
                    [mini]="mini"
                    [expanded]="expanded"
                    [view]="viewItems"
                    [itemTemplate]="itemTemplate?.templateRef"
                    class="k-drawer-items">
                </ul>

                <ng-template *ngIf="footerTemplate"
                    [ngTemplateOutlet]="footerTemplate?.templateRef">
                </ng-template>
            </ng-container>

            <ng-template *ngIf="drawerTemplate"
                [ngTemplateOutlet]="drawerTemplate?.templateRef">
            </ng-template>
        </div>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AnimationBuilder
    }, {
      type: LocalizationService
    }, {
      type: DrawerService
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-drawer"]
    }],
    startPositionClass: [{
      type: HostBinding,
      args: ["class.k-drawer-start"]
    }],
    endPositionClass: [{
      type: HostBinding,
      args: ["class.k-drawer-end"]
    }],
    overlayTransofrmStyles: [{
      type: HostBinding,
      args: ["style.transform"]
    }],
    flexStyles: [{
      type: HostBinding,
      args: ["style.flexBasis.px"]
    }],
    mode: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    mini: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    miniWidth: [{
      type: Input
    }],
    autoCollapse: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    isItemExpanded: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    animation: [{
      type: Input
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    drawerTemplate: [{
      type: ContentChild,
      args: [DrawerTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [DrawerFooterTemplateDirective]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [DrawerHeaderTemplateDirective]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [DrawerItemTemplateDirective]
    }]
  });
})();
var DrawerContainerComponent = class {
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.rtl = false;
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  get hostClass() {
    return true;
  }
  get overlayClass() {
    return this.drawer.mode === "overlay";
  }
  get miniClass() {
    return this.drawer.mini && !this.drawer.expanded;
  }
  get pushClass() {
    return this.drawer.mode === "push";
  }
  get isExpandedClass() {
    return this.drawer.expanded;
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get overlay() {
    return isPresent4(this.drawer) && this.drawer.expanded && this.drawer.mode === "overlay";
  }
  /**
   * @hidden
   */
  closeDrawer() {
    if (this.overlay && this.drawer.autoCollapse) {
      this.drawer.toggle(false);
    }
  }
};
DrawerContainerComponent.ɵfac = function DrawerContainerComponent_Factory(t) {
  return new (t || DrawerContainerComponent)(ɵɵdirectiveInject(LocalizationService));
};
DrawerContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: DrawerContainerComponent,
  selectors: [["kendo-drawer-container"]],
  contentQueries: function DrawerContainerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DrawerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawer = _t.first);
    }
  },
  hostVars: 11,
  hostBindings: function DrawerContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-drawer-container", ctx.hostClass)("k-drawer-overlay", ctx.overlayClass)("k-drawer-mini", ctx.miniClass)("k-drawer-push", ctx.pushClass)("k-drawer-expanded", ctx.isExpandedClass);
    }
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.drawer.container"
  }])],
  ngContentSelectors: _c82,
  decls: 2,
  vars: 1,
  consts: [["class", "k-overlay", 3, "click", 4, "ngIf"], [1, "k-overlay", 3, "click"]],
  template: function DrawerContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, DrawerContainerComponent_div_0_Template, 1, 0, "div", 0);
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.overlay);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-drawer-container",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.drawer.container"
      }],
      template: `
        <div class="k-overlay" *ngIf="overlay" (click)="closeDrawer()"></div>
        <ng-content></ng-content>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-drawer-container"]
    }],
    overlayClass: [{
      type: HostBinding,
      args: ["class.k-drawer-overlay"]
    }],
    miniClass: [{
      type: HostBinding,
      args: ["class.k-drawer-mini"]
    }],
    pushClass: [{
      type: HostBinding,
      args: ["class.k-drawer-push"]
    }],
    isExpandedClass: [{
      type: HostBinding,
      args: ["class.k-drawer-expanded"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    drawer: [{
      type: ContentChild,
      args: [DrawerComponent]
    }]
  });
})();
var DrawerContentComponent = class {
  constructor() {
    this.hostClasses = true;
  }
};
DrawerContentComponent.ɵfac = function DrawerContentComponent_Factory(t) {
  return new (t || DrawerContentComponent)();
};
DrawerContentComponent.ɵcmp = ɵɵdefineComponent({
  type: DrawerContentComponent,
  selectors: [["kendo-drawer-content"]],
  hostVars: 2,
  hostBindings: function DrawerContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-drawer-content", ctx.hostClasses);
    }
  },
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function DrawerContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerContentComponent, [{
    type: Component,
    args: [{
      selector: "kendo-drawer-content",
      template: `
        <ng-content></ng-content>
    `,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], function() {
    return [];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-drawer-content"]
    }]
  });
})();
var DrawerSelectEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var StepperStepTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
StepperStepTemplateDirective.ɵfac = function StepperStepTemplateDirective_Factory(t) {
  return new (t || StepperStepTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
StepperStepTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: StepperStepTemplateDirective,
  selectors: [["", "kendoStepperStepTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStepTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoStepperStepTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var StepperLabelTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
StepperLabelTemplateDirective.ɵfac = function StepperLabelTemplateDirective_Factory(t) {
  return new (t || StepperLabelTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
StepperLabelTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: StepperLabelTemplateDirective,
  selectors: [["", "kendoStepperLabelTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperLabelTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoStepperLabelTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var StepperIndicatorTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
StepperIndicatorTemplateDirective.ɵfac = function StepperIndicatorTemplateDirective_Factory(t) {
  return new (t || StepperIndicatorTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
StepperIndicatorTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: StepperIndicatorTemplateDirective,
  selectors: [["", "kendoStepperIndicatorTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperIndicatorTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoStepperIndicatorTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DEFAULT_CURRENT_STEP = 0;
var handlers = {};
handlers[Keys.ArrowLeft] = "left";
handlers[Keys.ArrowRight] = "right";
handlers[Keys.ArrowUp] = "up";
handlers[Keys.ArrowDown] = "down";
handlers[Keys.Home] = "home";
handlers[Keys.End] = "end";
handlers[Keys.Enter] = "enter";
handlers[Keys.Space] = "enter";
var handlersRTL = Object.assign({}, handlers);
handlersRTL[Keys.ArrowLeft] = "right";
handlersRTL[Keys.ArrowRight] = "left";
var StepperActivateEvent$1 = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var StepperService = class {
  constructor(localization, ngZone, changeDetector) {
    this.localization = localization;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.currentStep = DEFAULT_CURRENT_STEP;
    this.triggerValidation = new EventEmitter();
    this.focusedStepChange = new EventEmitter();
  }
  get handlers() {
    return this.localization.rtl ? handlersRTL : handlers;
  }
  emit(event, eventArgs) {
    const stepper = this.owner;
    if (hasObservers(stepper[event])) {
      stepper[event].emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  onActivate(currentIdx, originalEvent) {
    const eventArgs = new StepperActivateEvent$1({
      index: currentIdx,
      step: this.owner.steps[currentIdx],
      originalEvent,
      sender: this.owner
    });
    this.ngZone.run(() => {
      if (!this.emit("activate", eventArgs)) {
        this.currentStep = currentIdx;
        this.owner["currentStepChange"].emit(currentIdx);
        this.changeDetector.detectChanges();
      }
    });
  }
  validateSteps() {
    this.triggerValidation.emit();
  }
  keydown(e) {
    const current = this.focusedStep || this.currentStep;
    const handler = this.handlers[e.keyCode];
    if (!isPresent4(current)) {
      return;
    }
    if (handler) {
      e.preventDefault();
      this[handler](e);
    }
  }
  left() {
    if (!this.isHorizontal) {
      return;
    }
    this.focusPrevStep();
  }
  right() {
    if (!this.isHorizontal) {
      return;
    }
    this.focusNextStep();
  }
  up() {
    if (this.isHorizontal) {
      return;
    }
    this.focusPrevStep();
  }
  down() {
    if (this.isHorizontal) {
      return;
    }
    this.focusNextStep();
  }
  home() {
    this.focusedStep = 0;
    this.focusedStepChange.emit();
  }
  end() {
    this.focusedStep = this.owner.steps.length - 1;
    this.focusedStepChange.emit();
  }
  enter(event) {
    if (this.focusedStep === this.currentStep) {
      return;
    }
    if (this.isStepDisabled(this.focusedStep)) {
      return;
    }
    if (this.owner.linear && this.isPrevOrNextStep(this.focusedStep) === false) {
      return;
    }
    this.onActivate(this.focusedStep, event);
  }
  focus(focusedIdx) {
    this.focusedStep = focusedIdx;
  }
  focusNextStep() {
    if (this.focusedStep < this.owner.steps.length) {
      this.focusedStep += 1;
      this.focusedStepChange.emit();
    }
  }
  focusPrevStep() {
    if (this.focusedStep > 0) {
      this.focusedStep -= 1;
      this.focusedStepChange.emit();
    }
  }
  isStepDisabled(index) {
    return this.owner.steps[index].disabled;
  }
  isPrevOrNextStep(index) {
    return index === this.currentStep + 1 || index === this.currentStep - 1;
  }
  get isHorizontal() {
    return this.owner.orientation === "horizontal";
  }
};
StepperService.ɵfac = function StepperService_Factory(t) {
  return new (t || StepperService)(ɵɵinject(LocalizationService), ɵɵinject(NgZone), ɵɵinject(ChangeDetectorRef));
};
StepperService.ɵprov = ɵɵdefineInjectable({
  token: StepperService,
  factory: StepperService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperService, [{
    type: Injectable
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var STEPPER_STEP_INDEX = "data-kendo-stepper-index";
var StepperStepComponent = class {
  constructor(service, localization, ngZone) {
    this.service = service;
    this.localization = localization;
    this.ngZone = ngZone;
    this.isStepValid = void 0;
    this.shouldCheckValidity = void 0;
    this.checkCircleIcon = checkCircleIcon;
    this.exclamationCircleIcon = exclamationCircleIcon;
    validatePackage(packageMetadata5);
    this.subs = this.service.focusedStepChange.subscribe(() => {
      this.onFocusedStepChange();
    });
    this.subs.add(this.service.triggerValidation.subscribe(() => {
      this.handleValidityChecks();
    }));
  }
  get errorStepClass() {
    if (isPresent4(this.isStepValid)) {
      return !this.isStepValid;
    }
    return false;
  }
  get successStepClass() {
    if (isPresent4(this.isStepValid)) {
      return this.isStepValid;
    }
    return false;
  }
  ngOnInit() {
    this.handleValidityChecks();
  }
  ngOnChanges(changes) {
    if (changes["current"] && !changes["current"].firstChange) {
      this.handleValidityChecks();
    }
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  onFocusedStepChange() {
    this.ngZone.runOutsideAngular(() => {
      if (this.index === this.service.focusedStep) {
        this.stepLink.nativeElement.focus();
      }
    });
  }
  onFocus() {
    this.service.focus(this.index);
  }
  get tabIndexAttr() {
    const active = this.service.focusedStep || this.service.currentStep;
    return this.index === active ? 0 : -1;
  }
  get indicatorIconClass() {
    if (this.step.icon && !this.step.iconClass) {
      return `${this.step.icon}`;
    }
    if (!this.step.icon && !this.step.iconClass && this.shouldCheckValidity) {
      return this.validationIconClasses;
    }
  }
  get customIndicatorIconClass() {
    if (this.step.iconClass) {
      return `${this.step.iconClass}`;
    }
    const renderCustomValidationIcon = !this.step.icon && !this.step.iconClass && this.shouldCheckValidity;
    if (renderCustomValidationIcon) {
      return this.customValidationIconClasses;
    }
  }
  get SVGIndicatorIcon() {
    if (this.step.svgIcon) {
      return this.step.svgIcon;
    }
    if (!this.step.svgIcon && this.shouldCheckValidity) {
      return this.validationSVGIcon;
    }
  }
  get validationIconClasses() {
    if (this.isStepValid) {
      return !this.successIcon ? "check-circle" : "";
    }
    return !this.errorIcon ? "exclamation-circle" : "";
  }
  get customValidationIconClasses() {
    if (this.isStepValid) {
      return this.successIcon ? this.successIcon : "";
    }
    return this.errorIcon ? this.errorIcon : "";
  }
  get validationSVGIcon() {
    if (this.isStepValid) {
      return this.successSVGIcon ? this.successSVGIcon : this.checkCircleIcon;
    }
    return this.errorSVGIcon ? this.errorSVGIcon : this.exclamationCircleIcon;
  }
  get showIndicatorIcon() {
    if (this.shouldCheckValidity) {
      return true;
    }
    if (this.step.icon || this.step.iconClass || this.step.svgIcon) {
      return true;
    }
    return false;
  }
  get showLabelIcon() {
    if (this.shouldCheckValidity) {
      if (this.type === "label") {
        return true;
      }
      if (this.step.icon || this.step.iconClass) {
        return true;
      }
    }
    return false;
  }
  get showLabelText() {
    return this.type === "label" || this.type === "full";
  }
  get indicatorText() {
    const text = this.step.text;
    return text ? text : this.index + 1;
  }
  updateStepValidity() {
    if (typeof this.step.isValid === "boolean") {
      return this.step.isValid;
    }
    if (typeof this.step.isValid === "function") {
      return this.step.isValid(this.index);
    }
    return void 0;
  }
  get showIndicator() {
    return this.type === "indicator" || this.type === "full";
  }
  get showLabel() {
    if (this.type === "label" || this.type === "full") {
      return true;
    }
    return this.step.optional;
  }
  get optionalText() {
    return this.localization.get("optional");
  }
  get transitionDuration() {
    return this.service.owner.animationDuration;
  }
  _shouldCheckValidity() {
    if (isPresent4(this.step.validate)) {
      if (typeof this.step.validate === "boolean") {
        return this.step.validate;
      }
      if (typeof this.step.validate === "function") {
        return this.step.validate(this.index);
      }
    }
    return isPresent4(this.step.isValid) && this.index < this.current;
  }
  handleValidityChecks() {
    this.isStepValid = void 0;
    this.shouldCheckValidity = this._shouldCheckValidity();
    if (this.shouldCheckValidity) {
      this.isStepValid = this.updateStepValidity();
    }
  }
};
StepperStepComponent.ɵfac = function StepperStepComponent_Factory(t) {
  return new (t || StepperStepComponent)(ɵɵdirectiveInject(StepperService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
StepperStepComponent.ɵcmp = ɵɵdefineComponent({
  type: StepperStepComponent,
  selectors: [["", "kendoStepperStep", ""]],
  viewQuery: function StepperStepComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c21, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepLink = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function StepperStepComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-step-error", ctx.errorStepClass)("k-step-success", ctx.successStepClass);
    }
  },
  inputs: {
    step: "step",
    index: "index",
    current: "current",
    type: "type",
    successIcon: "successIcon",
    successSVGIcon: "successSVGIcon",
    errorIcon: "errorIcon",
    errorSVGIcon: "errorSVGIcon",
    svgIcon: "svgIcon",
    indicatorTemplate: "indicatorTemplate",
    labelTemplate: "labelTemplate",
    stepTemplate: "stepTemplate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c222,
  decls: 4,
  vars: 6,
  consts: [["href", "#", 1, "k-step-link", 3, "focus"], ["stepLink", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "k-step-indicator", "aria-hidden", "true", 3, "transition-duration", 4, "ngIf"], ["class", "k-step-label", 4, "ngIf"], ["aria-hidden", "true", 1, "k-step-indicator"], ["innerCssClass", "k-step-indicator-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-step-indicator-text", 4, "ngIf"], ["innerCssClass", "k-step-indicator-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-step-indicator-text"], [1, "k-step-label"], ["class", "k-step-text", 4, "ngIf"], ["aria-hidden", "true", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-step-label-optional", 4, "ngIf"], [1, "k-step-text"], ["aria-hidden", "true", 3, "name", "customFontClass", "svgIcon"], [1, "k-step-label-optional"]],
  template: function StepperStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "a", 0, 1);
      ɵɵlistener("focus", function StepperStepComponent_Template_a_focus_0_listener() {
        return ctx.onFocus();
      });
      ɵɵtemplate(2, StepperStepComponent_2_Template, 1, 5, null, 2)(3, StepperStepComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabIndexAttr)("title", ctx.step.label)("aria-disabled", ctx.step.disabled)("aria-current", ctx.index === ctx.current ? "step" : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.stepTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.stepTemplate);
    }
  },
  dependencies: [IconWrapperComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStepComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoStepperStep]",
      template: `
        <a href='#' class='k-step-link' #stepLink
            [attr.tabindex]='tabIndexAttr'
            [attr.title]='step.label'
            [attr.aria-disabled]='step.disabled'
            [attr.aria-current]='index === current ? "step" : null'
            (focus)='onFocus()'
        >
            <ng-template *ngIf='stepTemplate'
                [ngTemplateOutlet]='stepTemplate'
                [ngTemplateOutletContext]='{ $implicit: step, index: index }'>
            </ng-template>

            <ng-container *ngIf='!stepTemplate'>
                <span *ngIf='showIndicator'
                    class='k-step-indicator'
                    aria-hidden='true'
                    [style.transition-duration.ms]='transitionDuration'
                >
                    <ng-template *ngIf='indicatorTemplate'
                        [ngTemplateOutlet]='indicatorTemplate'
                        [ngTemplateOutletContext]='{ $implicit: step, index: index }'>
                    </ng-template>

                    <ng-container *ngIf='!indicatorTemplate'>
                        <kendo-icon-wrapper
                            *ngIf='showIndicatorIcon'
                            [name]='indicatorIconClass'
                            [customFontClass]='customIndicatorIconClass'
                            [svgIcon]='SVGIndicatorIcon'
                            innerCssClass='k-step-indicator-icon'
                        >
                        </kendo-icon-wrapper>
                        <span class='k-step-indicator-text' *ngIf='!showIndicatorIcon'>{{ indicatorText }}</span>
                    </ng-container>
                </span>

                <span class='k-step-label' *ngIf='showLabel'>
                    <ng-template *ngIf='labelTemplate'
                        [ngTemplateOutlet]='labelTemplate'
                        [ngTemplateOutletContext]='{ $implicit: step, index: index }'>
                    </ng-template>

                    <ng-container *ngIf='!labelTemplate'>
                        <span class='k-step-text' *ngIf='showLabelText'>{{ step.label }}</span>
                        <kendo-icon-wrapper
                            *ngIf='showLabelIcon'
                            aria-hidden='true'
                            [name]='validationIconClasses'
                            [customFontClass]='customValidationIconClasses'
                            [svgIcon]='validationSVGIcon'
                        >
                        </kendo-icon-wrapper>
                        <span class='k-step-label-optional' *ngIf='step.optional'>({{optionalText}})</span>
                    </ng-container>
                </span>
            </ng-container>
        </a>
    `
    }]
  }], function() {
    return [{
      type: StepperService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    step: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    current: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    successSVGIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    errorSVGIcon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    indicatorTemplate: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    stepTemplate: [{
      type: Input
    }],
    stepLink: [{
      type: ViewChild,
      args: ["stepLink", {
        static: true
      }]
    }],
    errorStepClass: [{
      type: HostBinding,
      args: ["class.k-step-error"]
    }],
    successStepClass: [{
      type: HostBinding,
      args: ["class.k-step-success"]
    }]
  });
})();
var StepperListComponent = class {
  constructor(renderer, ngZone, service, element) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.service = service;
    this.element = element;
    this.listKeydown = new EventEmitter();
    this.listClick = new EventEmitter();
  }
  ngOnInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    if (this.domSubs) {
      this.domSubs();
    }
  }
  get maxStepWidth() {
    return this.maxStepDimension("width");
  }
  get maxStepHeight() {
    return this.maxStepDimension("height");
  }
  get focusedStep() {
    return this.service.focusedStep;
  }
  maxStepDimension(dimension) {
    if (dimension === "width" && this.orientation === "vertical") {
      return null;
    }
    if (dimension === "height" && this.orientation === "horizontal") {
      return null;
    }
    return 100 / this.steps.length;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      const clickSubscription = this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this));
      const keydownSubscription = this.renderer.listen(nativeElement, "keydown", (e) => {
        if (hasClass(e.target, "k-step-link")) {
          this.listKeydown.emit(e);
        }
      });
      this.domSubs = () => {
        clickSubscription();
        keydownSubscription();
      };
    });
  }
  clickHandler(e) {
    e.preventDefault();
    const stepIdx = this.getStepIndex(e.target);
    const step = this.steps[stepIdx];
    if (!step || step.disabled) {
      return;
    }
    const eventArgs = {
      stepIdx,
      currentStep: this.currentStep,
      linear: this.linear,
      originalEvent: e
    };
    this.listClick.emit(eventArgs);
  }
  getStepIndex(target) {
    const step = closestItem(target, STEPPER_STEP_INDEX, this.element.nativeElement);
    if (step) {
      return itemIndex(step, STEPPER_STEP_INDEX);
    }
  }
};
StepperListComponent.ɵfac = function StepperListComponent_Factory(t) {
  return new (t || StepperListComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(StepperService), ɵɵdirectiveInject(ElementRef));
};
StepperListComponent.ɵcmp = ɵɵdefineComponent({
  type: StepperListComponent,
  selectors: [["", "kendoStepperList", ""]],
  inputs: {
    linear: "linear",
    stepType: "stepType",
    orientation: "orientation",
    currentStep: "currentStep",
    steps: "steps",
    successIcon: "successIcon",
    successSVGIcon: "successSVGIcon",
    errorIcon: "errorIcon",
    errorSVGIcon: "errorSVGIcon",
    svgIcon: "svgIcon",
    indicatorTemplate: "indicatorTemplate",
    labelTemplate: "labelTemplate",
    stepTemplate: "stepTemplate"
  },
  outputs: {
    listKeydown: "listKeydown",
    listClick: "listClick"
  },
  attrs: _c24,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["kendoStepperStep", "", 1, "k-step", 3, "type", "step", "index", "current", "successIcon", "successSVGIcon", "errorIcon", "errorSVGIcon", "svgIcon", "indicatorTemplate", "labelTemplate", "stepTemplate", "ngClass", "ngStyle"]],
  template: function StepperListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, StepperListComponent_ng_container_0_Template, 2, 33, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.steps);
    }
  },
  dependencies: [StepperStepComponent, NgForOf, NgClass, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoStepperList]",
      template: `
        <ng-container *ngFor='let step of steps; let idx = index'>
            <li kendoStepperStep
                [attr.${STEPPER_STEP_INDEX}]='idx'
                [type]='stepType'
                [step]='step'
                [index]='idx'
                [current]='currentStep'
                [successIcon]='successIcon'
                [successSVGIcon]='successSVGIcon'
                [errorIcon]='errorIcon'
                [errorSVGIcon]='errorSVGIcon'
                [svgIcon]='svgIcon'
                [indicatorTemplate]='indicatorTemplate'
                [labelTemplate]='labelTemplate'
                [stepTemplate]='stepTemplate'
                class='k-step'
                [class.k-step-first]='idx === 0'
                [class.k-step-last]='idx === steps.length - 1'
                [class.k-step-done]='idx < currentStep'
                [class.k-step-current]='idx === currentStep'
                [class.k-step-optional]='step.optional'
                [class.k-disabled]='step.disabled'
                [class.k-focus]='idx === focusedStep'
                [ngClass]='step.cssClass'
                [ngStyle]='step.cssStyle'
                [style.max-width.%] = 'maxStepWidth'
                [style.max-height.%] = 'maxStepHeight'
            >
            </li>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: StepperService
    }, {
      type: ElementRef
    }];
  }, {
    linear: [{
      type: Input
    }],
    stepType: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    currentStep: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    successSVGIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    errorSVGIcon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    indicatorTemplate: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    stepTemplate: [{
      type: Input
    }],
    listKeydown: [{
      type: Output
    }],
    listClick: [{
      type: Output
    }]
  });
})();
var StepperMessages = class extends ComponentMessages {
};
StepperMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵStepperMessages_BaseFactory;
  return function StepperMessages_Factory(t) {
    return (ɵStepperMessages_BaseFactory || (ɵStepperMessages_BaseFactory = ɵɵgetInheritedFactory(StepperMessages)))(t || StepperMessages);
  };
})();
StepperMessages.ɵdir = ɵɵdefineDirective({
  type: StepperMessages,
  selectors: [["kendo-stepper-messages-base"]],
  inputs: {
    optional: "optional"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-stepper-messages-base"
    }]
  }], null, {
    optional: [{
      type: Input
    }]
  });
})();
var LocalizedStepperMessagesDirective = class extends StepperMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedStepperMessagesDirective.ɵfac = function LocalizedStepperMessagesDirective_Factory(t) {
  return new (t || LocalizedStepperMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedStepperMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedStepperMessagesDirective,
  selectors: [["", "kendoStepperLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: StepperMessages,
    useExisting: forwardRef(() => LocalizedStepperMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedStepperMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: StepperMessages,
        useExisting: forwardRef(() => LocalizedStepperMessagesDirective)
      }],
      selector: `
      [kendoStepperLocalizedMessages]
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DEFAULT_ANIMATION_DURATION = 400;
var StepperComponent = class {
  constructor(renderer, elem, localization, stepperService) {
    this.renderer = renderer;
    this.elem = elem;
    this.localization = localization;
    this.stepperService = stepperService;
    this.hostClasses = true;
    this.ariaRole = "navigation";
    this.displayStyle = "grid";
    this.stepType = "indicator";
    this.linear = true;
    this.orientation = "horizontal";
    this.animation = true;
    this.activate = new EventEmitter();
    this.currentStepChange = new EventEmitter();
    this._steps = [];
    this.dynamicRTLSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.stepperService.owner = this;
  }
  get linearClass() {
    return this.linear;
  }
  /**
   * The index of the current step.
   */
  set currentStep(value) {
    this.stepperService.currentStep = value;
  }
  get currentStep() {
    return this.stepperService.currentStep;
  }
  /**
   * The collection of steps that will be rendered in the Stepper.
   * ([see example]({% slug step_appearance_stepper %}))
   */
  set steps(steps) {
    if (isPresent4(steps) && steps.length > 0) {
      this._steps = steps;
    }
  }
  get steps() {
    return this._steps;
  }
  /**
   * Defines an SVG icon to be rendered inside the step indicator instead of the default numeric or text content.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  ngOnInit() {
    this.applyHostStyling();
  }
  ngOnChanges(changes) {
    if (changes["steps"] && !changes["steps"].firstChange) {
      this.applyHostStyling();
    }
    if (changes["orientation"]) {
      this.resetHostStyling();
      this.applyHostStyling();
    }
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  /**
   * Manually triggers the validity check configured by the [isValid]({% slug api_layout_stepperstep %}#toc-isvalid) property of the steps ([see example]({% slug step_validation_stepper %}#toc-triggering-the-validation)).
   *
   * Steps that have their [validate]({% slug api_layout_stepperstep %}#toc-validate) property set to `false`, will not be validated.
   */
  validateSteps() {
    this.stepperService.validateSteps();
  }
  applyHostStyling() {
    const stepFramesStyle = this.orientation === "horizontal" ? "grid-template-columns" : "grid-template-rows";
    const stepFramesValue = `repeat(${this.steps.length * 2}, 1fr)`;
    this.renderer.setStyle(this.elem.nativeElement, stepFramesStyle, stepFramesValue);
  }
  resetHostStyling() {
    this.renderer.removeStyle(this.elem.nativeElement, "grid-template-columns");
    this.renderer.removeStyle(this.elem.nativeElement, "grid-template-rows");
  }
  /**
   * @hidden
   */
  get progressAnimation() {
    return {
      duration: this.animationDuration
    };
  }
  /**
   * @hidden
   */
  get animationDuration() {
    if (typeof this.animation === "number") {
      return this.animation;
    }
    if (typeof this.animation === "boolean" && this.animation) {
      return DEFAULT_ANIMATION_DURATION;
    }
    return 0;
  }
  /**
   * @hidden
   */
  get stepsListStyling() {
    if (this.orientation === "horizontal") {
      return {
        "grid-column-start": 1,
        "grid-column-end": -1
      };
    }
    return {
      "grid-row-start": 1,
      "grid-row-end": -1
    };
  }
  /**
   * @hidden
   */
  get progressBarStyling() {
    if (this.orientation === "horizontal") {
      return {
        "grid-column-start": 2,
        "grid-column-end": this.steps.length * 2
      };
    }
    return {
      "grid-row-start": 2,
      "grid-row-end": this.steps.length * 2
    };
  }
  /**
   * @hidden
   */
  onListKeydown(e) {
    this.stepperService.keydown(e);
  }
  /**
   * @hidden
   */
  onListClick(e) {
    if (e.stepIdx === e.currentStep) {
      this.stepperService.focus(e.stepIdx);
      return;
    }
    if (e.linear && this.stepperService.isPrevOrNextStep(e.stepIdx) === false) {
      return;
    }
    this.stepperService.onActivate(e.stepIdx, e.originalEvent);
  }
  /**
   * @hidden
   */
  get isHorizontal() {
    return this.orientation === "horizontal";
  }
};
StepperComponent.ɵfac = function StepperComponent_Factory(t) {
  return new (t || StepperComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(StepperService));
};
StepperComponent.ɵcmp = ɵɵdefineComponent({
  type: StepperComponent,
  selectors: [["kendo-stepper"]],
  contentQueries: function StepperComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, StepperStepTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, StepperLabelTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, StepperIndicatorTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.indicatorTemplate = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function StepperComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.ariaRole)("dir", ctx.direction);
      ɵɵstyleProp("display", ctx.displayStyle);
      ɵɵclassProp("k-stepper", ctx.hostClasses)("k-stepper-linear", ctx.linearClass);
    }
  },
  inputs: {
    stepType: "stepType",
    linear: "linear",
    orientation: "orientation",
    currentStep: "currentStep",
    steps: "steps",
    svgIcon: "svgIcon",
    successSVGIcon: "successSVGIcon",
    errorSVGIcon: "errorSVGIcon",
    successIcon: "successIcon",
    errorIcon: "errorIcon",
    animation: "animation"
  },
  outputs: {
    activate: "activate",
    currentStepChange: "currentStepChange"
  },
  exportAs: ["kendoStepper"],
  features: [ɵɵProvidersFeature([LocalizationService, StepperService, {
    provide: L10N_PREFIX,
    useValue: "kendo.stepper"
  }]), ɵɵNgOnChangesFeature],
  decls: 3,
  vars: 19,
  consts: () => {
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_3 = goog.getMsg("Optional");
      i18n_3 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_3;
    } else {
      i18n_3 = $localize`:kendo.stepper.optional|The text for the optional segment of the step label:Optional`;
    }
    return [["kendoStepperLocalizedMessages", "", "optional", i18n_3], ["kendoStepperList", "", 1, "k-step-list", 3, "stepType", "linear", "orientation", "steps", "currentStep", "successIcon", "successSVGIcon", "errorIcon", "errorSVGIcon", "svgIcon", "indicatorTemplate", "labelTemplate", "stepTemplate", "ngStyle", "listKeydown", "listClick"], [3, "animation", "max", "label", "orientation", "reverse", "value", "ngStyle", 4, "ngIf"], [3, "animation", "max", "label", "orientation", "reverse", "value", "ngStyle"]];
  },
  template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "ol", 1);
      ɵɵlistener("listKeydown", function StepperComponent_Template_ol_listKeydown_1_listener($event) {
        return ctx.onListKeydown($event);
      })("listClick", function StepperComponent_Template_ol_listClick_1_listener($event) {
        return ctx.onListClick($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, StepperComponent_kendo_progressbar_2_Template, 1, 8, "kendo-progressbar", 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("k-step-list-horizontal", ctx.isHorizontal)("k-step-list-vertical", !ctx.isHorizontal);
      ɵɵproperty("stepType", ctx.stepType)("linear", ctx.linear)("orientation", ctx.orientation)("steps", ctx.steps)("currentStep", ctx.currentStep)("successIcon", ctx.successIcon)("successSVGIcon", ctx.successSVGIcon)("errorIcon", ctx.errorIcon)("errorSVGIcon", ctx.errorSVGIcon)("svgIcon", ctx.svgIcon)("indicatorTemplate", ctx.indicatorTemplate == null ? null : ctx.indicatorTemplate.templateRef)("labelTemplate", ctx.labelTemplate == null ? null : ctx.labelTemplate.templateRef)("stepTemplate", ctx.stepTemplate == null ? null : ctx.stepTemplate.templateRef)("ngStyle", ctx.stepsListStyling);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.steps.length > 0);
    }
  },
  dependencies: [StepperListComponent, ProgressBarComponent, LocalizedStepperMessagesDirective, NgStyle, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoStepper",
      providers: [LocalizationService, StepperService, {
        provide: L10N_PREFIX,
        useValue: "kendo.stepper"
      }],
      selector: "kendo-stepper",
      template: `
        <ng-container kendoStepperLocalizedMessages
            i18n-optional="kendo.stepper.optional|The text for the optional segment of the step label"
            optional="Optional"
         >
        </ng-container>
        <ol kendoStepperList
            [stepType]='stepType'
            [linear]='linear'
            [orientation]='orientation'
            [steps]='steps'
            [currentStep]='currentStep'
            [successIcon]='successIcon'
            [successSVGIcon]='successSVGIcon'
            [errorIcon]='errorIcon'
            [errorSVGIcon]='errorSVGIcon'
            [svgIcon]="svgIcon"
            [indicatorTemplate]='indicatorTemplate?.templateRef'
            [labelTemplate]='labelTemplate?.templateRef'
            [stepTemplate]='stepTemplate?.templateRef'
            class='k-step-list'
            [class.k-step-list-horizontal]='isHorizontal'
            [class.k-step-list-vertical]='!isHorizontal'
            [ngStyle]='stepsListStyling'
            (listKeydown)="onListKeydown($event)"
            (listClick)="onListClick($event)">
        </ol>

        <kendo-progressbar *ngIf='steps.length > 0'
            [attr.aria-hidden]='true'
            [animation]='progressAnimation'
            [max]='steps.length - 1'
            [label]='false'
            [orientation]='orientation'
            [reverse]='!isHorizontal'
            [value]='currentStep'
            [ngStyle]='progressBarStyling'>
        </kendo-progressbar>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: StepperService
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-stepper"]
    }],
    linearClass: [{
      type: HostBinding,
      args: ["class.k-stepper-linear"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    stepType: [{
      type: Input
    }],
    linear: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    currentStep: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    successSVGIcon: [{
      type: Input
    }],
    errorSVGIcon: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    currentStepChange: [{
      type: Output
    }],
    stepTemplate: [{
      type: ContentChild,
      args: [StepperStepTemplateDirective, {
        static: false
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [StepperLabelTemplateDirective, {
        static: false
      }]
    }],
    indicatorTemplate: [{
      type: ContentChild,
      args: [StepperIndicatorTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var StepperActivateEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var StepperCustomMessagesComponent = class extends StepperMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
StepperCustomMessagesComponent.ɵfac = function StepperCustomMessagesComponent_Factory(t) {
  return new (t || StepperCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
StepperCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: StepperCustomMessagesComponent,
  selectors: [["kendo-stepper-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: StepperMessages,
    useExisting: forwardRef(() => StepperCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function StepperCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: StepperMessages,
        useExisting: forwardRef(() => StepperCustomMessagesComponent)
      }],
      selector: "kendo-stepper-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var Messages2 = class extends ComponentMessages {
};
Messages2.ɵfac = /* @__PURE__ */ (() => {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(t) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(Messages2)))(t || Messages2);
  };
})();
Messages2.ɵdir = ɵɵdefineDirective({
  type: Messages2,
  selectors: [["kendoAvatarMessages"]],
  inputs: {
    avatarAlt: "avatarAlt"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages2, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendoAvatarMessages"
    }]
  }], null, {
    avatarAlt: [{
      type: Input
    }]
  });
})();
var LocalizedAvatarMessagesDirective = class extends Messages2 {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedAvatarMessagesDirective.ɵfac = function LocalizedAvatarMessagesDirective_Factory(t) {
  return new (t || LocalizedAvatarMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedAvatarMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedAvatarMessagesDirective,
  selectors: [["", "kendoAvatarLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: Messages2,
    useExisting: forwardRef(() => LocalizedAvatarMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedAvatarMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages2,
        useExisting: forwardRef(() => LocalizedAvatarMessagesDirective)
      }],
      selector: "[kendoAvatarLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DEFAULT_ROUNDED2 = "full";
var DEFAULT_SIZE2 = "medium";
var DEFAULT_THEME_COLOR2 = "primary";
var DEFAULT_FILL_MODE2 = "solid";
var AvatarComponent = class {
  constructor(localization, renderer, element) {
    this.localization = localization;
    this.renderer = renderer;
    this.element = element;
    this.hostClass = true;
    this.border = false;
    this._themeColor = DEFAULT_THEME_COLOR2;
    this._size = DEFAULT_SIZE2;
    this._fillMode = DEFAULT_FILL_MODE2;
    this._rounded = DEFAULT_ROUNDED2;
    validatePackage(packageMetadata5);
  }
  /**
   * @hidden
   */
  get borderClass() {
    return this.border;
  }
  /**
   * @hidden
   */
  get flexBasis() {
    return this.width;
  }
  /**
   * Sets the shape for the avatar.
   * @hidden
   */
  set shape(shape) {
    this.rounded = mapShapeToRounded(shape);
  }
  /**
   * Specifies the size of the avatar
   * ([see example]({% slug appearance_avatar %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   * * `none`
   */
  set size(size) {
    if (size !== this._size) {
      const newSize = size ? size : DEFAULT_SIZE2;
      this.handleClasses("size", newSize);
      this._size = newSize;
    }
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the rounded styling of the avatar
   * ([see example]({% slug appearance_avatar %}#toc-rounded-corners)).
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `full` (Default)
   * * `none`
   */
  set rounded(rounded) {
    if (rounded !== this._rounded) {
      const newRounded = rounded ? rounded : DEFAULT_ROUNDED2;
      this.handleClasses("rounded", newRounded);
      this._rounded = newRounded;
    }
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies the theme color of the avatar.
   * The theme color will be applied as background and border color, while also amending the text color accordingly.
   *
   * The possible values are:
   * * `base`&mdash; Applies the base coloring value.
   * * `primary` (Default)&mdash;Applies coloring based on primary theme color.
   * * `secondary`&mdash;Applies coloring based on secondary theme color.
   * * `tertiary`&mdash; Applies coloring based on tertiary theme color.
   * * `info`&mdash;Applies coloring based on info theme color.
   * * `success`&mdash; Applies coloring based on success theme color.
   * * `warning`&mdash; Applies coloring based on warning theme color.
   * * `error`&mdash; Applies coloring based on error theme color.
   * * `dark`&mdash; Applies coloring based on dark theme color.
   * * `light`&mdash; Applies coloring based on light theme color.
   * * `inverse`&mdash; Applies coloring based on inverted theme color.
   * * `none`&mdash; Removes the styling associated with the theme color.
   */
  set themeColor(themeColor) {
    if (themeColor !== this._themeColor) {
      const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR2;
      this._themeColor = newThemeColor;
      this.handleFillModeAndThemeColorClasses(this.fillMode, this.themeColor);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the appearance fill style of the avatar.
   *
   * The possible values are:
   * * `solid` (Default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    if (fillMode !== this.fillMode) {
      const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE2;
      this._fillMode = newFillMode;
      this.handleFillModeAndThemeColorClasses(this.fillMode, this.themeColor);
    }
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Specifies the appearance fill style of the avatar.
   * Deprecated, left for backward compatibility.
   *
   * @hidden
   */
  set fill(fillMode) {
    this.fillMode = fillMode;
  }
  /**
   * @hidden
   */
  get avatarWidth() {
    return this.width;
  }
  /**
   * @hidden
   */
  get avatarHeight() {
    return this.height;
  }
  /**
   * Defines an SVGIcon to be rendered.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  ngOnInit() {
    this.verifyProperties();
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded"];
    stylingInputs.forEach((input) => {
      this.handleClasses(input, this[input]);
    });
    this.handleFillModeAndThemeColorClasses(this.fillMode, this.themeColor);
  }
  /**
   * @hidden
   */
  get customAvatar() {
    return !(this.imageSrc || this.initials || this.icon || this.iconClass);
  }
  verifyProperties() {
    if (!isDevMode()) {
      return;
    }
    const inputs = [this.icon || this.iconClass, this.imageSrc, this.initials];
    const inputsLength = inputs.filter((value) => value).length;
    if (inputsLength > 1) {
      throw new Error(`
                Invalid property configuration given.
                The kendo-avatar component can accept only one of:
                icon, imageSrc or initials properties.
            `);
    }
  }
  handleClasses(styleType, value) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses2("avatar", styleType, this[styleType], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleFillModeAndThemeColorClasses(fill, themeColor) {
    const wrapperElement = this.element.nativeElement;
    const currentClasses = Array.from(wrapperElement.classList);
    const classesToRemove = currentClasses.filter((cl) => {
      return cl.startsWith("k-avatar-solid") || cl.startsWith("k-avatar-outline");
    });
    classesToRemove.forEach((cl) => this.renderer.removeClass(wrapperElement, cl));
    if (fill !== "none") {
      this.renderer.addClass(wrapperElement, `k-avatar-${fill}`);
    }
    if (fill !== "none" && themeColor !== "none") {
      this.renderer.addClass(wrapperElement, `k-avatar-${fill}-${themeColor}`);
    }
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
};
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) {
  return new (t || AvatarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
AvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: AvatarComponent,
  selectors: [["kendo-avatar"]],
  hostVars: 10,
  hostBindings: function AvatarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("flex-basis", ctx.flexBasis)("width", ctx.avatarWidth)("height", ctx.avatarHeight);
      ɵɵclassProp("k-avatar", ctx.hostClass)("k-avatar-bordered", ctx.borderClass);
    }
  },
  inputs: {
    shape: "shape",
    size: "size",
    rounded: "rounded",
    themeColor: "themeColor",
    fillMode: "fillMode",
    fill: "fill",
    border: "border",
    iconClass: "iconClass",
    width: "width",
    height: "height",
    cssStyle: "cssStyle",
    initials: "initials",
    icon: "icon",
    imageSrc: "imageSrc",
    svgIcon: "svgIcon"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.avatar"
  }])],
  ngContentSelectors: _c82,
  decls: 5,
  vars: 4,
  consts: () => {
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_4 = goog.getMsg("Avatar");
      i18n_4 = MSG__USERS_MANOHARCHENNA_PUBLIC_WORKSPACE_FREELANCE_OMNIA_OMNIA_MOBILE_APP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2020_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_4;
    } else {
      i18n_4 = $localize`:kendo.avatar.avatarAlt|The alt attribute text of the image in the avatar.:Avatar`;
    }
    return [["kendoAvatarLocalizedMessages", "", "avatarAlt", i18n_4], [4, "ngIf"], [1, "k-avatar-image"], [3, "src", "alt", "ngStyle"], [1, "k-avatar-text", 3, "ngStyle"], [1, "k-avatar-icon"], [3, "ngStyle", "name", "customFontClass", "svgIcon"]];
  },
  template: function AvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainer(0, 0);
      ɵɵtemplate(1, AvatarComponent_ng_content_1_Template, 1, 0, "ng-content", 1)(2, AvatarComponent_ng_container_2_Template, 3, 3, "ng-container", 1)(3, AvatarComponent_ng_container_3_Template, 3, 2, "ng-container", 1)(4, AvatarComponent_ng_container_4_Template, 3, 4, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.customAvatar);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageSrc);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.initials);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.icon || ctx.iconClass || ctx.svgIcon);
    }
  },
  dependencies: [IconWrapperComponent, LocalizedAvatarMessagesDirective, NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.avatar"
      }],
      selector: "kendo-avatar",
      template: `
        <ng-container kendoAvatarLocalizedMessages
            i18n-avatarAlt="kendo.avatar.avatarAlt|The alt attribute text of the image in the avatar."
            avatarAlt="Avatar"
        >
        </ng-container>

        <ng-content *ngIf="customAvatar"></ng-content>

        <ng-container *ngIf="imageSrc">
            <span class="k-avatar-image">
                <img src="{{ imageSrc }}" [alt]="textFor('avatarAlt')" [ngStyle]="cssStyle" />
            </span>
        </ng-container>

        <ng-container *ngIf="initials">
            <span class="k-avatar-text" [ngStyle]="cssStyle">{{ initials.substring(0, 2) }}</span>
        </ng-container>

        <ng-container *ngIf="icon || iconClass || svgIcon">
            <span class="k-avatar-icon">
                <kendo-icon-wrapper
                    [ngStyle]="cssStyle"
                    [name]="icon"
                    [customFontClass]="iconClass"
                    [svgIcon]="svgIcon"
                >
                </kendo-icon-wrapper>
            </span>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-avatar"]
    }],
    borderClass: [{
      type: HostBinding,
      args: ["class.k-avatar-bordered"]
    }],
    flexBasis: [{
      type: HostBinding,
      args: ["style.flexBasis"]
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    avatarWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    height: [{
      type: Input
    }],
    avatarHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    cssStyle: [{
      type: Input
    }],
    initials: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    imageSrc: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }]
  });
})();
var AvatarCustomMessagesComponent = class extends Messages2 {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
AvatarCustomMessagesComponent.ɵfac = function AvatarCustomMessagesComponent_Factory(t) {
  return new (t || AvatarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
AvatarCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: AvatarCustomMessagesComponent,
  selectors: [["kendo-avatar-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: Messages2,
    useExisting: forwardRef(() => AvatarCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function AvatarCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages2,
        useExisting: forwardRef(() => AvatarCustomMessagesComponent)
      }],
      selector: "kendo-avatar-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var CardComponent = class {
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.hostClass = true;
    this.orientation = "vertical";
    this.width = "285px";
    this.rtl = false;
    validatePackage(packageMetadata5);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  get widthStyle() {
    return this.width;
  }
  get vertical() {
    return this.orientation === "vertical";
  }
  get horizontal() {
    return this.orientation === "horizontal";
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
};
CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || CardComponent)(ɵɵdirectiveInject(LocalizationService));
};
CardComponent.ɵcmp = ɵɵdefineComponent({
  type: CardComponent,
  selectors: [["kendo-card"]],
  hostVars: 9,
  hostBindings: function CardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵstyleProp("width", ctx.widthStyle);
      ɵɵclassProp("k-card", ctx.hostClass)("k-card-vertical", ctx.vertical)("k-card-horizontal", ctx.horizontal);
    }
  },
  inputs: {
    orientation: "orientation",
    width: "width"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.card.component"
  }])],
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.card.component"
      }],
      template: `
        <ng-content></ng-content>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card"]
    }],
    widthStyle: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-card-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-card-horizontal"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    orientation: [{
      type: Input
    }],
    width: [{
      type: Input
    }]
  });
})();
var CardHeaderComponent = class {
  constructor() {
    this.hostClass = true;
  }
};
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) {
  return new (t || CardHeaderComponent)();
};
CardHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: CardHeaderComponent,
  selectors: [["kendo-card-header"]],
  hostVars: 2,
  hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-card-header", ctx.hostClass);
    }
  },
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function CardHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-header",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-header"]
    }]
  });
})();
var CardBodyComponent = class {
  constructor() {
    this.hostClass = true;
  }
};
CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) {
  return new (t || CardBodyComponent)();
};
CardBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: CardBodyComponent,
  selectors: [["kendo-card-body"]],
  hostVars: 2,
  hostBindings: function CardBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-card-body", ctx.hostClass);
    }
  },
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function CardBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-body",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-body"]
    }]
  });
})();
var CardFooterComponent = class {
  constructor() {
    this.hostClass = true;
  }
};
CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) {
  return new (t || CardFooterComponent)();
};
CardFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: CardFooterComponent,
  selectors: [["kendo-card-footer"]],
  hostVars: 2,
  hostBindings: function CardFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-card-footer", ctx.hostClass);
    }
  },
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function CardFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-footer",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-footer"]
    }]
  });
})();
var CardActionsComponent = class {
  constructor() {
    this.hostClass = true;
    this.orientation = "horizontal";
    this.layout = "start";
    this.action = new EventEmitter();
  }
  get stretchedClass() {
    return this.layout === "stretched";
  }
  get startClass() {
    return this.layout === "start";
  }
  get endClass() {
    return this.layout === "end";
  }
  get centerClass() {
    return this.layout === "center";
  }
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  /**
   * Allows the declarative specification of the Card actions.
   */
  set actions(value) {
    if (Array.isArray(value)) {
      this.actionsArray = value;
    } else if (value instanceof TemplateRef) {
      this.actionsTemplate = value;
    }
  }
  /**
   * @hidden
   */
  onClick(action) {
    this.action.emit(action);
  }
};
CardActionsComponent.ɵfac = function CardActionsComponent_Factory(t) {
  return new (t || CardActionsComponent)();
};
CardActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: CardActionsComponent,
  selectors: [["kendo-card-actions"]],
  hostVars: 16,
  hostBindings: function CardActionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-actions", ctx.hostClass)("k-card-actions", ctx.hostClass)("k-actions-stretched", ctx.stretchedClass)("k-actions-start", ctx.startClass)("k-actions-end", ctx.endClass)("k-actions-center", ctx.centerClass)("k-actions-vertical", ctx.verticalClass)("k-actions-horizontal", ctx.horizontalClass);
    }
  },
  inputs: {
    orientation: "orientation",
    layout: "layout",
    actions: "actions"
  },
  outputs: {
    action: "action"
  },
  ngContentSelectors: _c82,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["type", "button", "class", "k-button k-button-md k-rounded-md", 3, "k-button-solid", "k-button-flat", "k-button-solid-base", "k-button-solid-primary", "k-button-flat-base", "k-button-flat-primary", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "k-button", "k-button-md", "k-rounded-md", 3, "click"], [1, "k-button-text"], [3, "ngTemplateOutlet"]],
  template: function CardActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CardActionsComponent_ng_content_0_Template, 1, 0, "ng-content", 0)(1, CardActionsComponent_ng_container_1_Template, 2, 1, "ng-container", 0)(2, CardActionsComponent_2_Template, 1, 1, null, 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.actionsArray && !ctx.actionsTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.actionsArray);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.actionsTemplate);
    }
  },
  dependencies: [NgIf, NgForOf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardActionsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-actions",
      template: `
        <ng-content *ngIf="!actionsArray && !actionsTemplate"></ng-content>

        <ng-container *ngIf="actionsArray">
            <button
                type="button"
                class="k-button k-button-md k-rounded-md"
                [class.k-button-solid]="!action.flat"
                [class.k-button-flat]="action.flat"
                [class.k-button-solid-base]="!action.primary && !action.flat"
                [class.k-button-solid-primary]="action.primary && !action.flat"
                [class.k-button-flat-base]="!action.primary && action.flat"
                [class.k-button-flat-primary]="action.primary && action.flat"
                (click)="onClick(action)"
                *ngFor="let action of actionsArray"
            >
                <span class="k-button-text">{{ action.text }}</span>
            </button>
        </ng-container>

        <ng-template [ngTemplateOutlet]="actionsTemplate" *ngIf="actionsTemplate"></ng-template>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-card-actions"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-actions-stretched"]
    }],
    startClass: [{
      type: HostBinding,
      args: ["class.k-actions-start"]
    }],
    endClass: [{
      type: HostBinding,
      args: ["class.k-actions-end"]
    }],
    centerClass: [{
      type: HostBinding,
      args: ["class.k-actions-center"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-actions-vertical"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-actions-horizontal"]
    }],
    orientation: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    action: [{
      type: Output
    }]
  });
})();
var CardSeparatorDirective = class {
  constructor() {
    this.hostClass = true;
    this.orientation = "horizontal";
  }
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
};
CardSeparatorDirective.ɵfac = function CardSeparatorDirective_Factory(t) {
  return new (t || CardSeparatorDirective)();
};
CardSeparatorDirective.ɵdir = ɵɵdefineDirective({
  type: CardSeparatorDirective,
  selectors: [["", "kendoCardSeparator", ""]],
  hostVars: 8,
  hostBindings: function CardSeparatorDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("color", ctx.color);
      ɵɵclassProp("k-card-separator", ctx.hostClass)("k-separator-vertical", ctx.verticalClass)("k-separator-horizontal", ctx.horizontalClass);
    }
  },
  inputs: {
    color: "color",
    orientation: "orientation"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSeparatorDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardSeparator]"
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-separator"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-separator-vertical"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-separator-horizontal"]
    }],
    color: [{
      type: HostBinding,
      args: ["style.color"]
    }, {
      type: Input
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var CardTitleDirective = class {
  constructor() {
    this.hostClass = true;
  }
};
CardTitleDirective.ɵfac = function CardTitleDirective_Factory(t) {
  return new (t || CardTitleDirective)();
};
CardTitleDirective.ɵdir = ɵɵdefineDirective({
  type: CardTitleDirective,
  selectors: [["", "kendoCardTitle", ""]],
  hostVars: 2,
  hostBindings: function CardTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-card-title", ctx.hostClass);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardTitle]"
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-title"]
    }]
  });
})();
var CardSubtitleDirective = class {
  constructor() {
    this.hostClass = true;
  }
};
CardSubtitleDirective.ɵfac = function CardSubtitleDirective_Factory(t) {
  return new (t || CardSubtitleDirective)();
};
CardSubtitleDirective.ɵdir = ɵɵdefineDirective({
  type: CardSubtitleDirective,
  selectors: [["", "kendoCardSubtitle", ""]],
  hostVars: 2,
  hostBindings: function CardSubtitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-card-subtitle", ctx.hostClass);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardSubtitle]"
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-subtitle"]
    }]
  });
})();
var CardMediaDirective = class {
  constructor() {
    this.hostClass = true;
  }
};
CardMediaDirective.ɵfac = function CardMediaDirective_Factory(t) {
  return new (t || CardMediaDirective)();
};
CardMediaDirective.ɵdir = ɵɵdefineDirective({
  type: CardMediaDirective,
  selectors: [["", "kendoCardMedia", ""]],
  hostVars: 2,
  hostBindings: function CardMediaDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-card-media", ctx.hostClass);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardMediaDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardMedia]"
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-media"]
    }]
  });
})();
var CardAction = class {
};
var ExpansionPanelTitleDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
ExpansionPanelTitleDirective.ɵfac = function ExpansionPanelTitleDirective_Factory(t) {
  return new (t || ExpansionPanelTitleDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
ExpansionPanelTitleDirective.ɵdir = ɵɵdefineDirective({
  type: ExpansionPanelTitleDirective,
  selectors: [["", "kendoExpansionPanelTitleDirective", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionPanelTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoExpansionPanelTitleDirective]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
function expand(duration, height) {
  return [style({
    overflow: "hidden",
    display: "block",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}`
  }))];
}
function collapse(duration, height) {
  return [style({
    overflow: "hidden",
    height: `${height}`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
var ExpansionPanelActionEvent = class extends PreventableEvent {
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var DEFAULT_DURATION3 = 200;
var CONTENT_HIDDEN_CLASS = "k-hidden";
var ExpansionPanelComponent = class {
  constructor(renderer, hostElement, ngZone, localizationService, builder) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    this.builder = builder;
    this.title = "";
    this.subtitle = "";
    this.disabled = false;
    this.animation = true;
    this.expandedChange = new EventEmitter();
    this.action = new EventEmitter();
    this.expand = new EventEmitter();
    this.collapse = new EventEmitter();
    this.hostClass = true;
    this.focused = false;
    this.animationEnd = new EventEmitter();
    this.subscriptions = new Subscription();
    this._expanded = false;
    this._svgExpandIcon = caretAltDownIcon;
    this._svgCollapseIcon = caretAltUpIcon;
    validatePackage(packageMetadata5);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * Specifies whether the ExpansionPanel is expanded. The property supports two-way binding.
   * ([see example]({% slug interaction_expansionpanel %}#toc-setting-the-initial-state)).
   *
   * @default false
   */
  set expanded(value) {
    if (value === this.expanded) {
      return;
    }
    this._expanded = value;
    if (this.expanded) {
      this.removeContentHiddenClass();
    } else {
      this.addContentHiddenClass();
    }
  }
  get expanded() {
    return this._expanded;
  }
  /**
   * Defines an SVGIcon for the expanded state of the component.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgExpandIcon(icon) {
    if (isDevMode() && icon && this.expandIcon) {
      throw new Error("Setting both expandIcon/svgExpandIcon options at the same time is not supported.");
    }
    this._svgExpandIcon = icon;
  }
  get svgExpandIcon() {
    return this._svgExpandIcon;
  }
  /**
   * Defines an SVGIcon for the collapsed state of the component.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgCollapseIcon(icon) {
    if (isDevMode() && icon && this.collapseIcon) {
      throw new Error("Setting both collapseIcon/svgCollapseIcon options at the same time is not supported.");
    }
    this._svgCollapseIcon = icon;
  }
  get svgCollapseIcon() {
    return this._svgCollapseIcon;
  }
  get expandedClass() {
    return this.expanded && !this.disabled;
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.hostElement.nativeElement, "title");
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    const elem = this.hostElement.nativeElement;
    const header = this.header.nativeElement;
    this.subscriptions.add(this.renderer.listen(header, "focus", () => this.focusExpansionPanel(elem)));
    this.subscriptions.add(this.renderer.listen(header, "blur", () => this.blurExpansionPanel(elem)));
  }
  ngAfterViewInit() {
    this.initDomEvents();
    if (!this.expanded) {
      this.renderer.addClass(this.content.nativeElement, CONTENT_HIDDEN_CLASS);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  initDomEvents() {
    if (!this.hostElement) {
      return;
    }
    if (!this.disabled) {
      this.ngZone.runOutsideAngular(() => {
        const elem = this.hostElement.nativeElement;
        this.subscriptions.add(this.renderer.listen(elem, "keydown", this.keyDownHandler.bind(this)));
      });
    }
  }
  /**
   * @hidden
   */
  keyDownHandler(ev) {
    const isEnterOrSpace = ev.keyCode === Keys.Enter || ev.keyCode === Keys.Space;
    if (!isEnterOrSpace) {
      return;
    }
    if (hasClass(ev.target, "k-expander-header")) {
      ev.preventDefault();
      this.ngZone.run(() => {
        this.onHeaderAction();
      });
    }
  }
  /**
   * @hidden
   */
  onHeaderClick(ev) {
    const header = this.header.nativeElement;
    if (!isFocusable(ev.target) || ev.target === header && !this.disabled) {
      this.onHeaderAction();
    }
  }
  /**
   * @hidden
   */
  onHeaderAction() {
    const eventArgs = new ExpansionPanelActionEvent();
    eventArgs.action = this.expanded ? "collapse" : "expand";
    this.action.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.setExpanded(!this.expanded);
      if (this.expanded) {
        this.removeContentHiddenClass();
      }
      if (this.animation) {
        this.animateContent();
        return;
      }
      if (!this.expanded) {
        this.addContentHiddenClass();
      }
      this.emitExpandCollapseEvent();
    }
  }
  /**
   * @hidden
   */
  get expanderIndicatorClasses() {
    if (this.expanded) {
      return !this.collapseIcon ? `caret-alt-up` : "";
    } else {
      return !this.expandIcon ? `caret-alt-down` : "";
    }
  }
  /**
   * @hidden
   */
  get customExpanderIndicatorClasses() {
    if (this.expanded) {
      return this.collapseIcon ? this.collapseIcon : "";
    } else {
      return this.expandIcon ? this.expandIcon : "";
    }
  }
  /**
   * @hidden
   */
  get expanderSvgIcon() {
    return this.expanded ? this.svgCollapseIcon : this.svgExpandIcon;
  }
  /**
   * Toggles the visibility of the ExpansionPanel
   * ([see example]({% slug interaction_expansionpanel %}#toc-toggling-the-content)).
   *
   * @param expanded? - Boolean. Specifies, whether the ExpansionPanel will be expanded or collapsed.
   */
  toggle(expanded) {
    const previous = this.expanded;
    const current = isPresent4(expanded) ? expanded : !previous;
    if (current === previous) {
      return;
    }
    this.setExpanded(current);
    if (this.expanded) {
      this.removeContentHiddenClass();
    }
    if (this.animation) {
      this.animateContent();
      return;
    }
    if (!this.expanded) {
      this.addContentHiddenClass();
    }
    this.emitExpandCollapseEvent();
  }
  focusExpansionPanel(el) {
    if (!this.focused) {
      this.focused = true;
      this.renderer.addClass(el, "k-focus");
    }
  }
  blurExpansionPanel(el) {
    if (this.focused) {
      this.focused = false;
      this.renderer.removeClass(el, "k-focus");
    }
  }
  setExpanded(value) {
    this._expanded = value;
    this.expandedChange.emit(value);
  }
  animateContent() {
    const duration = typeof this.animation === "boolean" ? DEFAULT_DURATION3 : this.animation;
    const contentHeight = getComputedStyle(this.content.nativeElement).height;
    const animation = this.expanded ? expand(duration, contentHeight) : collapse(duration, contentHeight);
    const player = this.createPlayer(animation, this.content.nativeElement);
    this.animationEnd.pipe(take(1)).subscribe(() => {
      if (!this.expanded) {
        this.addContentHiddenClass();
      }
      this.emitExpandCollapseEvent();
    });
    player.play();
  }
  createPlayer(animation, animatedElement) {
    const factory = this.builder.build(animation);
    let player = factory.create(animatedElement);
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
    return player;
  }
  emitExpandCollapseEvent() {
    this[this.expanded ? "expand" : "collapse"].emit();
  }
  addContentHiddenClass() {
    this.renderer.addClass(this.content.nativeElement, CONTENT_HIDDEN_CLASS);
  }
  removeContentHiddenClass() {
    this.renderer.removeClass(this.content.nativeElement, CONTENT_HIDDEN_CLASS);
  }
};
ExpansionPanelComponent.ɵfac = function ExpansionPanelComponent_Factory(t) {
  return new (t || ExpansionPanelComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(AnimationBuilder));
};
ExpansionPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: ExpansionPanelComponent,
  selectors: [["kendo-expansionpanel"]],
  contentQueries: function ExpansionPanelComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, ExpansionPanelTitleDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplate = _t.first);
    }
  },
  viewQuery: function ExpansionPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c25, 7);
      ɵɵviewQuery(_c04, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function ExpansionPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-expander", ctx.hostClass)("k-expanded", ctx.expandedClass);
    }
  },
  inputs: {
    title: "title",
    subtitle: "subtitle",
    disabled: "disabled",
    expanded: "expanded",
    svgExpandIcon: "svgExpandIcon",
    svgCollapseIcon: "svgCollapseIcon",
    expandIcon: "expandIcon",
    collapseIcon: "collapseIcon",
    animation: "animation"
  },
  outputs: {
    expandedChange: "expandedChange",
    action: "action",
    expand: "expand",
    collapse: "collapse"
  },
  exportAs: ["kendoExpansionPanel"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.expansionpanel"
  }])],
  ngContentSelectors: _c82,
  decls: 10,
  vars: 14,
  consts: [["role", "button", "tabindex", "0", 3, "click"], ["header", ""], [4, "ngIf"], [1, "k-expander-indicator"], [3, "name", "customFontClass", "svgIcon"], [1, "k-expander-content-wrapper", 3, "id"], ["content", ""], [1, "k-expander-content"], ["class", "k-expander-title", 4, "ngIf"], [1, "k-spacer"], ["class", "k-expander-sub-title", 4, "ngIf"], [1, "k-expander-title"], [1, "k-expander-sub-title"], [3, "ngTemplateOutlet"]],
  template: function ExpansionPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵlistener("click", function ExpansionPanelComponent_Template_div_click_0_listener($event) {
        return ctx.onHeaderClick($event);
      });
      ɵɵtemplate(2, ExpansionPanelComponent_ng_container_2_Template, 4, 2, "ng-container", 2)(3, ExpansionPanelComponent_3_Template, 1, 1, null, 2);
      ɵɵelementStart(4, "span", 3);
      ɵɵelement(5, "kendo-icon-wrapper", 4);
      ɵɵelementEnd()();
      ɵɵelementStart(6, "div", 5, 6)(8, "div", 7);
      ɵɵprojection(9);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassProp("k-expander-header", true)("k-disabled", ctx.disabled);
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.expanded && !ctx.disabled)("aria-controls", ctx.title);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.titleTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.titleTemplate);
      ɵɵadvance(2);
      ɵɵproperty("name", ctx.expanderIndicatorClasses)("customFontClass", ctx.customExpanderIndicatorClasses)("svgIcon", ctx.expanderSvgIcon);
      ɵɵadvance();
      ɵɵproperty("id", ctx.title);
      ɵɵadvance(2);
      ɵɵattribute("aria-hidden", !ctx.expanded);
    }
  },
  dependencies: [IconWrapperComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionPanelComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoExpansionPanel",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.expansionpanel"
      }],
      selector: "kendo-expansionpanel",
      template: `
        <div
            #header
            [class.k-expander-header]="true"
            [class.k-disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="expanded && !disabled"
            role="button"
            tabindex="0"
            [attr.aria-controls]="title"
            (click)="onHeaderClick($event)"
        >
            <ng-container *ngIf="!titleTemplate">
                <div *ngIf="title" class="k-expander-title">{{ title }}</div>
                <span class="k-spacer"></span>
                <div *ngIf="subtitle" class="k-expander-sub-title">
                    {{ subtitle }}
                </div>
            </ng-container>
            <ng-template
                *ngIf="titleTemplate"
                [ngTemplateOutlet]="titleTemplate?.templateRef">
            </ng-template>
            <span class="k-expander-indicator">
                <kendo-icon-wrapper
                    [name]="expanderIndicatorClasses"
                    [customFontClass]="customExpanderIndicatorClasses"
                    [svgIcon]="expanderSvgIcon"
                >
                </kendo-icon-wrapper>
            </span>
        </div>
        <div #content [id]="title" class="k-expander-content-wrapper">
            <div class="k-expander-content" [attr.aria-hidden]="!expanded">
                <ng-content></ng-content>
            </div>
        </div>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }, {
      type: AnimationBuilder
    }];
  }, {
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    svgExpandIcon: [{
      type: Input
    }],
    svgCollapseIcon: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    expandedChange: [{
      type: Output
    }],
    action: [{
      type: Output
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    titleTemplate: [{
      type: ContentChild,
      args: [ExpansionPanelTitleDirective, {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    header: [{
      type: ViewChild,
      args: ["header", {
        static: true
      }]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-expander"]
    }],
    expandedClass: [{
      type: HostBinding,
      args: ["class.k-expanded"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var idx = 0;
var getId = (prefix) => {
  return `${prefix}-${++idx}`;
};
var normalizeValue = (value) => {
  return value ? +value : void 0;
};
var isRowItemPresent = (items) => {
  return items.some((item) => isPresent4(item.row));
};
var propsChanged = (initialProps, newProps) => {
  for (let i = 0; i < initialProps.length; i++) {
    if (initialProps[i] !== newProps[i]) {
      return true;
    }
  }
  return false;
};
var getDropTarget = (event) => {
  if (!(isDocumentAvailable() && isPresent4(document.elementsFromPoint))) {
    return [event.target];
  }
  return document.elementsFromPoint(event.clientX, event.clientY).filter((item) => item.classList && (item.classList.contains("k-tilelayout-item") || item.classList.contains("k-layout-item-hint")));
};
var setElementStyles = (renderer, elem, styles) => {
  const props = Object.keys(styles);
  props.forEach((p) => {
    renderer.setStyle(elem, p, styles[p]);
  });
};
var calculateCellFromPosition = (coordinates, tileLayoutElement, gap, cellSize, columns, rtl = false) => {
  const tileLayoutRect = tileLayoutElement.getBoundingClientRect();
  const totalRows = (tileLayoutRect.height - gap.rows) / (cellSize.height + gap.rows);
  const distanceFromTop = coordinates.y - tileLayoutRect.y;
  const distanceFromLeft = coordinates.x - tileLayoutRect.x;
  const distanceFromRight = tileLayoutRect.right - coordinates.x;
  const distanceToCellWidthRatio = Math.floor((rtl ? distanceFromRight : distanceFromLeft) / (gap.columns + cellSize.width));
  const cappedColumnPosition = Math.min(distanceToCellWidthRatio + 1, columns);
  const distanceToCellHeightRatio = Math.floor(distanceFromTop / (gap.rows + cellSize.height));
  const cappedRowPosition = Math.min(distanceToCellHeightRatio + 1, totalRows);
  const col = Math.max(cappedColumnPosition, 0);
  const row = Math.max(cappedRowPosition, 0);
  return {
    row,
    col
  };
};
var shouldResize = (keyCode, col, selectedTile, settings) => {
  const resizeRight = keyCode === Keys.ArrowRight && col + selectedTile.colSpan <= settings.columns;
  const resizeLeft = keyCode === Keys.ArrowLeft && selectedTile.colSpan > 1;
  const resizeDown = keyCode === Keys.ArrowDown;
  const resizeUp = keyCode === Keys.ArrowUp && selectedTile.rowSpan > 1;
  return {
    resizeRight,
    resizeLeft,
    resizeDown,
    resizeUp
  };
};
var shouldReorder = (keyCode, col, selectedTile, settings) => {
  let reorderRight;
  let reorderLeft;
  if (selectedTile.col) {
    reorderRight = keyCode === Keys.ArrowRight && selectedTile.colSpan + col <= settings.columns;
    reorderLeft = keyCode === Keys.ArrowLeft && col > 1;
  } else {
    reorderRight = keyCode === Keys.ArrowRight && selectedTile.colSpan + selectedTile.order < settings.items.length;
    reorderLeft = keyCode === Keys.ArrowLeft && selectedTile.order > 0;
  }
  return {
    reorderLeft,
    reorderRight
  };
};
var getCurrentCol = (selectedTile, settings, rtl) => {
  const rects = selectedTile.elem.nativeElement.getBoundingClientRect();
  const targetSize = {
    rowSpan: selectedTile.rowSpan,
    colSpan: selectedTile.colSpan
  };
  const width = (rects.width - (targetSize.colSpan - 1) * settings.gap.columns) / targetSize.colSpan;
  const height = (rects.height - (targetSize.rowSpan - 1) * settings.gap.rows) / targetSize.rowSpan;
  const {
    col
  } = calculateCellFromPosition({
    x: rects.x,
    y: rects.y
  }, settings.tileLayoutElement, settings.gap, {
    width,
    height
  }, settings.columns, rtl);
  return col;
};
var RESIZE_HANDLE_UNIDIRECTIONAL_SIZE = 9;
var RESIZE_HANDLE_BIDIRECTIONAL_SIZE = 25;
var RESIZE_HANDLE_UNIDIRECTIONAL_OVERLAP = 5;
var RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP = 18;
var DRAGGED_ZINDEX = 10;
var RESIZE_DIRECTIONS = ["ew", "ns", "nwse"];
var RTL_RESIZE_DIRECTIONS = ["ew", "ns", "nesw"];
var RESIZE_HANDLE_DIMENSIONS = {
  // numeric values represent pixels
  ew: {
    width: RESIZE_HANDLE_UNIDIRECTIONAL_SIZE,
    overlapX: RESIZE_HANDLE_UNIDIRECTIONAL_OVERLAP
  },
  ns: {
    height: RESIZE_HANDLE_UNIDIRECTIONAL_SIZE,
    overlapY: RESIZE_HANDLE_UNIDIRECTIONAL_OVERLAP
  },
  nwse: {
    width: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    height: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    overlapX: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP,
    overlapY: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP
  },
  nesw: {
    width: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    height: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    overlapX: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP,
    overlapY: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP
  }
};
var OVERLAP_THRESHOLD = 0.3;
var REVERSE_OVERLAP_THRESHOLD = -0.7;
var HINT_BORDERS_HEIGHT = 2;
var TileLayoutReorderEvent = class extends PreventableEvent {
  /**
   * Constructs the event arguments for the `reorder` event.
   * @param item - The TileLayoutItem being reordered.
   * @param items - The TileLayoutItem collection that holds the currently rendered items and their internal state.
   * @param newIndex - The new order index of the reordered item used to determine its positioning relative to the other items.
   * @param oldIndex - The initial order index of the reordered item used to determine its positioning relative to the other items.
   * @param newCol - The new start column of the reordered item.
   * @param oldCol - The initial start column of the reordered item.
   * @param newRow - The new start row of the reordered item.
   * @param oldRow - The initial start row of the reordered item.
   * @hidden
   */
  constructor(item, items, newIndex, oldIndex, newCol, oldCol, newRow, oldRow) {
    super();
    this.item = item;
    this.items = items;
    this.newIndex = newIndex;
    this.oldIndex = oldIndex;
    this.newCol = newCol;
    this.oldCol = oldCol;
    this.newRow = newRow;
    this.oldRow = oldRow;
  }
};
var TileLayoutResizeEvent = class extends PreventableEvent {
  /**
   * Constructs the event arguments for the `resize` event.
   * @param item - The TileLayoutItem being resized
   * @param items - The TileLayoutItem collection
   * @param newRowSpan - The new rowSpan of the resized item
   * @param oldRowSpan - The initial rowSpan of the resized item
   * @param newColSpan - The new colSpan of the resized item
   * @param oldColSpan - The initial colSpan of the resized item
   * @hidden
   */
  constructor(item, items, newRowSpan, oldRowSpan, newColSpan, oldColSpan) {
    super();
    this.item = item;
    this.items = items;
    this.newRowSpan = newRowSpan;
    this.oldRowSpan = oldRowSpan;
    this.newColSpan = newColSpan;
    this.oldColSpan = oldColSpan;
  }
};
var TileLayoutDraggingService = class {
  constructor(zone, renderer, cdr, localization) {
    this.zone = zone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.localization = localization;
    this.reorderable = new BehaviorSubject(null);
    this.resizable = new BehaviorSubject(null);
    this.reorder = new Subject();
    this.resize = new Subject();
    this.lastDragCursorOffset = {
      x: 0,
      y: 0
    };
    this.localizationSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.rtl = rtl);
  }
  get colStart() {
    return this.currentColStart;
  }
  get rowStart() {
    return this.currentRowStart;
  }
  get itemWrapper() {
    return this.draggedItemWrapper;
  }
  get order() {
    return this.targetOrder;
  }
  ngOnDestroy() {
    this.localizationSubscription.unsubscribe();
  }
  handlePress(originalEvent) {
    const resizing = !!originalEvent.target.classList.contains("k-resize-handle");
    const closestTile = closestInScope(originalEvent.target, (el) => el.classList.contains("k-tilelayout-item"), this.tileLayoutSettings.tileLayoutElement);
    const closestHeader = closestInScope(originalEvent.target, (el) => el.classList.contains("k-tilelayout-item-header"), this.tileLayoutSettings.tileLayoutElement);
    if (!closestTile) {
      return;
    }
    this.zone.run(() => {
      this.draggedItemWrapper = closestTile;
      this.draggedItem = this.tileLayoutSettings.items.find((item) => item.order === +closestTile.style.order);
    });
    const reordering = !resizing && this.reorderable.getValue() && this.draggedItem.reorderable && closestHeader;
    const focusableTarget = isFocusable(originalEvent.target);
    if (!(reordering || resizing) || focusableTarget) {
      return;
    } else {
      originalEvent.preventDefault();
    }
    this.zone.run(() => {
      this.reordering = reordering;
      this.resizing = resizing;
    });
    const tileRect = this.draggedItemWrapper.getBoundingClientRect();
    this.zone.run(() => {
      this.offset = {
        top: originalEvent.clientY - tileRect.top,
        left: originalEvent.clientX - tileRect.left,
        x: tileRect.x,
        y: tileRect.y,
        width: tileRect.width,
        height: tileRect.height
      };
      this.targetSize = {
        rowSpan: this.draggedItem.rowSpan,
        colSpan: this.draggedItem.colSpan
      };
      this.cellSize = {
        width: (tileRect.width - (this.targetSize.colSpan - 1) * this.tileLayoutSettings.gap.columns) / this.targetSize.colSpan,
        height: (tileRect.height - (this.targetSize.rowSpan - 1) * this.tileLayoutSettings.gap.rows) / this.targetSize.rowSpan
      };
      this.lastDragCursorOffset = {
        x: originalEvent.clientX,
        y: originalEvent.clientY
      };
    });
    setElementStyles(this.renderer, this.draggedItemWrapper, {
      left: tileRect.left + window.pageXOffset - window.scrollX + "px",
      top: tileRect.top + window.pageYOffset - window.scrollY + "px",
      width: tileRect.width + "px",
      height: tileRect.height + "px",
      zIndex: DRAGGED_ZINDEX
    });
    setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
      display: "flex",
      height: tileRect.height - HINT_BORDERS_HEIGHT + "px"
    });
    this.zone.run(() => this.targetOrder = this.draggedItem.order);
    this.cdr.markForCheck();
    setElementStyles(this.renderer, this.draggedItemWrapper, {
      position: "fixed"
    });
    if (this.reorderable.getValue() && !resizing) {
      this.zone.run(() => {
        this.currentColStart = this.draggedItem.colStart;
        this.currentRowStart = this.draggedItem.rowStart;
      });
      const headerEl = this.draggedItem.elem.nativeElement.querySelector(".k-tilelayout-item-header");
      this.renderer.addClass(headerEl, "k-cursor-grabbing");
      this.cdr.markForCheck();
    } else if (this.resizable && resizing) {
      this.zone.run(() => {
        this.startingPoint = {
          top: originalEvent.clientY,
          left: originalEvent.clientX
        };
        this.currentResizingColSpan = this.draggedItem.colSpan;
        this.currentResizingRowSpan = this.draggedItem.rowSpan;
        if (this.draggedItem.col) {
          this.currentColStart = this.draggedItem.col.toString();
        }
        if (this.draggedItem.row) {
          this.currentRowStart = this.draggedItem.row.toString();
        }
        this.direction = originalEvent.target.classList[1];
      });
    }
  }
  handleDrag(originalEvent) {
    if (this.draggedItemWrapper) {
      if (this.reordering) {
        this.reorderItems(originalEvent);
      } else if (this.resizing) {
        this.resizeItem(originalEvent);
      }
      this.lastDragCursorOffset = {
        x: originalEvent.clientX,
        y: originalEvent.clientY
      };
    }
  }
  handleRelease(originalEvent) {
    originalEvent.preventDefault();
    if (this.reordering) {
      const initialOrder = this.draggedItem.order;
      const initialCol = this.draggedItem.col;
      const initialRow = this.draggedItem.row;
      const targetCol = normalizeValue(this.currentColStart);
      const targetRow = normalizeValue(this.currentRowStart);
      if (propsChanged([this.targetOrder, targetCol, targetRow], [initialOrder, initialCol, initialRow])) {
        const reorderEvent = new TileLayoutReorderEvent(this.draggedItem, this.tileLayoutSettings.items, this.targetOrder, initialOrder, normalizeValue(this.currentColStart), initialCol, targetRow, initialRow);
        this.reorder.next(reorderEvent);
        if (!reorderEvent.isDefaultPrevented()) {
          if (this.targetOrder > initialOrder) {
            this.zone.run(() => {
              for (let i = initialOrder + 1; i <= this.targetOrder; i++) {
                this.tileLayoutSettings.items.find((item) => item.order === i).order = i - 1;
              }
            });
          } else {
            this.zone.run(() => {
              for (let i = this.targetOrder; i < initialOrder; i++) {
                this.tileLayoutSettings.items.find((item) => item.order === i).order = i + 1;
              }
            });
          }
          this.draggedItem.order = this.targetOrder;
          if (this.draggedItem.col) {
            this.draggedItem.col = +this.currentColStart;
          }
          if (this.draggedItem.row) {
            this.draggedItem.row = +this.currentRowStart;
          }
        }
      }
      this.tileLayoutSettings.tileLayoutElement.appendChild(this.tileLayoutSettings.hintElement);
      this.cdr.markForCheck();
      this.zone.run(() => this.cleanUp());
    } else if (!this.reordering && this.resizing) {
      const initialRowSpan = this.draggedItem.rowSpan;
      const initialColSpan = this.draggedItem.colSpan;
      const {
        targetColSpan,
        targetRowSpan
      } = isRowItemPresent(this.tileLayoutSettings.items) ? this.targetSpan() : {
        targetColSpan: this.currentResizingColSpan,
        targetRowSpan: this.currentResizingRowSpan
      };
      if (propsChanged([initialRowSpan, initialColSpan], [targetRowSpan, targetColSpan])) {
        const resizeEvent = new TileLayoutResizeEvent(this.draggedItem, this.tileLayoutSettings.items, targetRowSpan, initialRowSpan, targetColSpan, initialColSpan);
        this.resize.next(resizeEvent);
        if (!resizeEvent.isDefaultPrevented()) {
          this.draggedItem.colSpan = this.currentResizingColSpan;
          this.draggedItem.rowSpan = this.currentResizingRowSpan;
        }
      }
      this.zone.run(() => this.cleanUp());
    }
  }
  reorderItems(event) {
    const targets = getDropTarget(event);
    const closestTile = targets.find((t) => t !== this.draggedItemWrapper);
    const tileOrder = closestTile ? +closestTile.style.order : +this.draggedItemWrapper.style.order;
    if (this.tileLayoutSettings.autoFlow !== "none") {
      const deltaX = event.clientX - this.lastDragCursorOffset.x;
      const deltaY = event.clientY - this.lastDragCursorOffset.y;
      const directionX = deltaX > 0 ? "right" : deltaX < 0 ? "left" : void 0;
      const directionY = deltaY > 0 ? "down" : deltaX < 0 ? "up" : void 0;
      const rect = this.draggedItemWrapper.getBoundingClientRect();
      const horizontalGap = this.tileLayoutSettings.gap.columns;
      const verticalGap = this.tileLayoutSettings.gap.rows;
      if (directionX && this.draggedItem.col) {
        const {
          col
        } = calculateCellFromPosition({
          x: directionX === "right" ? rect.right - horizontalGap : rect.left + horizontalGap,
          y: event.clientY
        }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
        const targetStartCol = this.getTargetCol(col, directionX);
        this.currentColStart = targetStartCol.toString();
      }
      if (directionY && this.draggedItem.row) {
        const {
          row
        } = calculateCellFromPosition({
          x: event.clientX,
          y: directionY === "down" ? rect.bottom - verticalGap : rect.top + verticalGap
        }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
        const targetStartRow = this.getTargetRow(row, directionY);
        this.currentRowStart = targetStartRow.toString();
      }
    }
    const hintBefore = tileOrder < this.targetOrder;
    const hintAfter = tileOrder > this.targetOrder;
    this.zone.run(() => this.targetOrder = tileOrder);
    if (hintBefore) {
      this.tileLayoutSettings.tileLayoutElement.insertBefore(this.tileLayoutSettings.hintElement, this.tileLayoutSettings.tileLayoutElement.firstChild);
    } else if (hintAfter) {
      this.tileLayoutSettings.tileLayoutElement.appendChild(this.tileLayoutSettings.hintElement);
    }
    setElementStyles(this.renderer, this.draggedItemWrapper, {
      top: event.pageY - this.offset.top - window.scrollY + "px",
      left: event.pageX - this.offset.left - window.scrollX + "px"
    });
    this.cdr.markForCheck();
  }
  resizeItem(event) {
    setElementStyles(this.renderer, this.tileLayoutSettings.tileLayoutElement, {
      cursor: this.direction.split("k-cursor-")[1]
    });
    const currentWidth = this.rtl ? this.offset.width + (this.offset.x - event.clientX) : this.offset.width + (event.clientX - this.startingPoint.left);
    const currentHeight = this.offset.height + (event.clientY - this.startingPoint.top);
    const hintRect = this.tileLayoutSettings.hintElement.getBoundingClientRect();
    const hintWidth = hintRect.width;
    const hintHeight = hintRect.height;
    const horizontalDragDirection = event.clientX - this.lastDragCursorOffset.x;
    const verticalDragDirection = event.clientY - this.lastDragCursorOffset.y;
    const startCol = this.draggedItem.col ? this.draggedItem.col : calculateCellFromPosition({
      x: this.rtl ? hintRect.right : hintRect.x,
      y: hintRect.y
    }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl).col;
    const maxWidth = (this.tileLayoutSettings.columns - startCol) * (this.cellSize.width + this.tileLayoutSettings.gap.columns) + this.cellSize.width;
    const resizeHorizontally = () => {
      setElementStyles(this.renderer, this.draggedItemWrapper, {
        width: Math.min(Math.max(currentWidth, this.cellSize.width), maxWidth) + "px"
      });
      if (this.rtl && currentWidth > this.cellSize.width) {
        const totalWidth = this.tileLayoutSettings.columns * (this.cellSize.width + this.tileLayoutSettings.gap.columns);
        const leftBoundary = this.tileLayoutSettings.tileLayoutElement.getBoundingClientRect().right - totalWidth;
        setElementStyles(this.renderer, this.draggedItemWrapper, {
          left: Math.max(event.clientX, leftBoundary) + "px"
        });
      }
      const deltaX = currentWidth - hintWidth;
      const {
        x,
        y,
        right
      } = this.draggedItem.elem.nativeElement.getBoundingClientRect();
      const {
        col
      } = calculateCellFromPosition({
        x: this.rtl ? right : x,
        y
      }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
      const resizedColSpan = col + this.currentResizingColSpan;
      const expandingCondition = this.rtl ? horizontalDragDirection < 0 : horizontalDragDirection > 0;
      const shrinkingCondition = this.rtl ? horizontalDragDirection > 0 : horizontalDragDirection < 0;
      if (deltaX > OVERLAP_THRESHOLD * this.cellSize.width && expandingCondition && resizedColSpan <= this.tileLayoutSettings.columns) {
        this.currentResizingColSpan++;
      } else if (this.currentResizingColSpan > 1 && shrinkingCondition && deltaX < REVERSE_OVERLAP_THRESHOLD * this.cellSize.width) {
        this.currentResizingColSpan--;
      }
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        gridColumnEnd: `span ${this.currentResizingColSpan}`
      });
    };
    const resizeVertically = () => {
      setElementStyles(this.renderer, this.draggedItemWrapper, {
        height: Math.max(currentHeight, this.cellSize.height) + "px"
      });
      const deltaY = currentHeight - hintHeight;
      if (deltaY > OVERLAP_THRESHOLD * this.cellSize.height && verticalDragDirection > 0) {
        this.currentResizingRowSpan++;
      } else if (this.currentResizingRowSpan > 1 && verticalDragDirection < 0 && deltaY < REVERSE_OVERLAP_THRESHOLD * this.cellSize.height) {
        this.currentResizingRowSpan--;
      }
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        gridRowEnd: `span ${this.currentResizingRowSpan}`
      });
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        height: `${this.calculateHintHeight()}px`
      });
    };
    if (this.direction.indexOf("ew") > -1) {
      resizeHorizontally();
    } else if (this.direction.indexOf("ns") > -1) {
      resizeVertically();
    } else {
      resizeHorizontally();
      resizeVertically();
    }
  }
  cleanUp() {
    this.targetOrder = this.currentResizingColSpan = this.currentColStart = this.currentResizingRowSpan = this.currentRowStart = void 0;
    this.resizing = this.reordering = false;
    this.direction = null;
    if (this.draggedItemWrapper) {
      const grabHandle = this.draggedItemWrapper.querySelector(".k-cursor-grab");
      if (grabHandle) {
        this.renderer.removeClass(grabHandle, "k-cursor-grabbing");
      }
      setElementStyles(this.renderer, this.draggedItemWrapper, {
        top: "",
        left: "",
        display: "",
        width: "",
        height: "",
        zIndex: "",
        position: ""
      });
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        display: "none",
        height: "auto"
      });
      setElementStyles(this.renderer, this.tileLayoutSettings.tileLayoutElement, {
        cursor: "default"
      });
      this.draggedItemWrapper = this.offset = this.draggedItem = this.resizing = this.reordering = this.currentResizingColSpan = this.currentResizingRowSpan = this.startingPoint = void 0;
      this.lastDragCursorOffset = {
        x: 0,
        y: 0
      };
    }
  }
  targetSpan() {
    const itemRect = this.draggedItem.elem.nativeElement.getBoundingClientRect();
    const startingCell = calculateCellFromPosition({
      x: this.rtl ? itemRect.right : itemRect.x,
      y: itemRect.y
    }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
    const targetEndCell = calculateCellFromPosition({
      x: this.rtl ? itemRect.x + OVERLAP_THRESHOLD * this.cellSize.width : itemRect.right - OVERLAP_THRESHOLD * this.cellSize.width,
      y: itemRect.bottom - OVERLAP_THRESHOLD * this.cellSize.height
    }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
    return {
      targetColSpan: targetEndCell.col - startingCell.col + 1,
      targetRowSpan: targetEndCell.row - startingCell.row + 1
    };
  }
  getTargetCol(col, direction) {
    if (this.rtl) {
      return direction === "left" ? col - this.draggedItem.colSpan + 1 : col;
    }
    return direction === "right" ? col - this.draggedItem.colSpan + 1 : col;
  }
  getTargetRow(row, direction) {
    return direction === "down" ? row - this.draggedItem.rowSpan + 1 : row;
  }
  calculateHintHeight() {
    const totalHintCellsHeight = this.currentResizingRowSpan * this.cellSize.height;
    const totalHintGapsHeight = (this.currentResizingRowSpan - 1) * this.tileLayoutSettings.gap.rows;
    const hintHeight = totalHintCellsHeight + totalHintGapsHeight - HINT_BORDERS_HEIGHT;
    return hintHeight;
  }
};
TileLayoutDraggingService.ɵfac = function TileLayoutDraggingService_Factory(t) {
  return new (t || TileLayoutDraggingService)(ɵɵinject(NgZone), ɵɵinject(Renderer2), ɵɵinject(ChangeDetectorRef), ɵɵinject(LocalizationService));
};
TileLayoutDraggingService.ɵprov = ɵɵdefineInjectable({
  token: TileLayoutDraggingService,
  factory: TileLayoutDraggingService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutDraggingService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }];
  }, null);
})();
var TileLayoutKeyboardNavigationService = class {
  constructor(zone, renderer, localization) {
    this.zone = zone;
    this.renderer = renderer;
    this.localization = localization;
    this.navigable = new BehaviorSubject(false);
    this.localizationSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.rtl = rtl);
  }
  ngOnDestroy() {
    this.localizationSubscription.unsubscribe();
  }
  onKeyDown(event, elem, focusableItems, settings) {
    const keyCode = event.keyCode;
    const isTileFocused = document.activeElement === elem;
    const focusedTile = settings.items.find((item) => item.elem.nativeElement === elem);
    const col = getCurrentCol(focusedTile, settings, this.rtl);
    if (keyCode === Keys.Enter && isTileFocused && focusableItems.length > 0) {
      this.changeTabIndex("0", elem, focusableItems);
      focusableItems[0].focus();
    } else if (keyCode === Keys.Escape) {
      this.changeTabIndex("-1", elem, focusableItems);
      elem.focus();
    } else if ((event.ctrlKey || event.metaKey) && isTileFocused && focusedTile.isResizable) {
      event.preventDefault();
      this.zone.run(() => {
        this.resizeItem(keyCode, focusedTile, settings, col);
      });
    } else if (event.shiftKey && isTileFocused && focusedTile.isReorderable) {
      this.zone.run(() => {
        this.reorderItem(keyCode, focusedTile, settings, col);
      });
    } else if (keyCode === Keys.Tab && !isTileFocused) {
      this.keepFocusWithinComponent(event, elem);
    }
  }
  onFocusOut(event, elem, focusableItems) {
    const isTargetFocusable = focusableItems.includes(event.target);
    const isRelatedTargetFocusable = focusableItems.includes(event.relatedTarget);
    if (isTargetFocusable && !isRelatedTargetFocusable) {
      this.changeTabIndex("-1", elem, focusableItems);
      event.relatedTarget?.focus();
    }
  }
  onClick(event, elem, focusableItems) {
    const isTargetFocusable = focusableItems.includes(event.target);
    if (isTargetFocusable) {
      this.changeTabIndex("0", elem, focusableItems);
      event.target.focus();
    }
  }
  changeTabIndex(tabIndex, elem, focusableItems) {
    this.renderer.setAttribute(elem, "tabindex", tabIndex === "0" ? "-1" : "0");
    focusableItems.forEach((focusItem) => {
      this.renderer.setAttribute(focusItem, "tabindex", tabIndex);
    });
  }
  getAllFocusableChildren(parent) {
    return Array.from(parent.querySelectorAll(focusableSelector)).filter((element) => element.offsetParent !== null);
  }
  resizeItem(keyCode, focusedTile, settings, col) {
    const {
      resizeRight,
      resizeLeft,
      resizeDown,
      resizeUp
    } = shouldResize(keyCode, col, focusedTile, settings);
    const resizeHorizontal = resizeLeft || resizeRight;
    const resizeVertical = resizeDown || resizeUp;
    const resizeDir = resizeLeft || resizeUp ? -1 : 1;
    if (resizeHorizontal) {
      focusedTile.colSpan += resizeDir;
    } else if (resizeVertical) {
      focusedTile.rowSpan += resizeDir;
    }
  }
  reorderItem(keyCode, focusedTile, settings, col) {
    const {
      reorderLeft,
      reorderRight
    } = shouldReorder(keyCode, col, focusedTile, settings);
    const onReorderRight = () => {
      const nextTile = this.targetTile(focusedTile, settings.items, 1);
      if (nextTile) {
        focusedTile.order += 1;
        nextTile.order -= 1;
      }
    };
    const onReorderLeft = () => {
      const prevTile = this.targetTile(focusedTile, settings.items, -1);
      if (prevTile) {
        focusedTile.order -= 1;
        prevTile.order += 1;
      }
    };
    if (reorderRight || reorderLeft) {
      const reorderDir = reorderRight ? 1 : -1;
      if (focusedTile.col) {
        focusedTile.col += reorderDir;
      } else {
        reorderRight ? onReorderRight() : onReorderLeft();
      }
    }
  }
  keepFocusWithinComponent(event, wrapper) {
    const [firstFocusable, lastFocusable] = this.getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && event.target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && event.target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
      wrapper.blur();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  getFirstAndLastFocusable(parent) {
    const all = this.getAllFocusableChildren(parent);
    const firstFocusable = all.length > 0 ? all[0] : parent;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
    return [firstFocusable, lastFocusable];
  }
  targetTile(focusedTile, items, offset2) {
    return items.find((item) => item.order === focusedTile.order + offset2);
  }
};
TileLayoutKeyboardNavigationService.ɵfac = function TileLayoutKeyboardNavigationService_Factory(t) {
  return new (t || TileLayoutKeyboardNavigationService)(ɵɵinject(NgZone), ɵɵinject(Renderer2), ɵɵinject(LocalizationService));
};
TileLayoutKeyboardNavigationService.ɵprov = ɵɵdefineInjectable({
  token: TileLayoutKeyboardNavigationService,
  factory: TileLayoutKeyboardNavigationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutKeyboardNavigationService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, null);
})();
var TileLayoutItemHeaderComponent = class {
  constructor(hostEl, renderer) {
    this.hostEl = hostEl;
    this.renderer = renderer;
    this.hostClass = true;
  }
  /**
   * @hidden
   */
  set reorderable(value) {
    const hostElement = this.hostEl.nativeElement;
    if (value) {
      this.renderer.addClass(hostElement, "k-touch-action-none");
      this.renderer.removeClass(hostElement, "k-touch-action-auto");
    } else {
      this.renderer.addClass(hostElement, "k-touch-action-auto");
      this.renderer.removeClass(hostElement, "k-touch-action-none");
    }
  }
};
TileLayoutItemHeaderComponent.ɵfac = function TileLayoutItemHeaderComponent_Factory(t) {
  return new (t || TileLayoutItemHeaderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
TileLayoutItemHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: TileLayoutItemHeaderComponent,
  selectors: [["kendo-tilelayout-item-header"]],
  hostVars: 4,
  hostBindings: function TileLayoutItemHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-tilelayout-item-header", ctx.hostClass)("k-card-header", ctx.hostClass);
    }
  },
  inputs: {
    reorderable: "reorderable"
  },
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function TileLayoutItemHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutItemHeaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout-item-header",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout-item-header"]
    }, {
      type: HostBinding,
      args: ["class.k-card-header"]
    }],
    reorderable: [{
      type: Input
    }]
  });
})();
var TileLayoutResizeHandleDirective = class {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.sizeHandle();
  }
  setHorizontalPosition(element) {
    this.renderer.setStyle(element, this.rtl ? "left" : "right", -RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].overlapX + "px");
  }
  setBottom(element) {
    this.renderer.setStyle(element, "bottom", -RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].overlapY + "px");
  }
  sizeHandle() {
    const element = this.el.nativeElement;
    const handleWidth = RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].width ? `${RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].width}px` : "100%";
    const handleHeight = RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].height ? `${RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].height}px` : "100%";
    this.renderer.setStyle(element, "width", handleWidth);
    this.renderer.setStyle(element, "height", handleHeight);
    if (this.resizeDirection === "ew") {
      this.setHorizontalPosition(element);
    } else if (this.resizeDirection === "ns") {
      this.setBottom(element);
    } else {
      this.setHorizontalPosition(element);
      this.setBottom(element);
    }
  }
};
TileLayoutResizeHandleDirective.ɵfac = function TileLayoutResizeHandleDirective_Factory(t) {
  return new (t || TileLayoutResizeHandleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
TileLayoutResizeHandleDirective.ɵdir = ɵɵdefineDirective({
  type: TileLayoutResizeHandleDirective,
  selectors: [["", "kendoTileLayoutResizeHandle", ""]],
  inputs: {
    resizeDirection: "resizeDirection",
    rtl: "rtl"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutResizeHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTileLayoutResizeHandle]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    resizeDirection: [{
      type: Input
    }],
    rtl: [{
      type: Input
    }]
  });
})();
var TileLayoutItemComponent = class {
  constructor(elem, zone, renderer, localization, draggingService, keyboardNavigationService) {
    this.elem = elem;
    this.zone = zone;
    this.renderer = renderer;
    this.localization = localization;
    this.draggingService = draggingService;
    this.keyboardNavigationService = keyboardNavigationService;
    this.rowSpan = 1;
    this.colSpan = 1;
    this.reorderable = true;
    this.resizable = true;
    this.itemClass = true;
    this.hostRole = "listitem";
    this.titleId = "";
    this.subs = new Subscription();
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
    }));
    this.subs.add(this.draggingService.resizable.subscribe((resizable) => {
      this.resizeDirections = resizable && this.resizable ? this.rtl ? RTL_RESIZE_DIRECTIONS : RESIZE_DIRECTIONS : void 0;
    }));
    this.titleId = getId("k-tilelayout-title");
  }
  /**
   * Determines the order of the tile items within the TileLayout.
   * If not set, the items will receive increasing sequential order in accordance with
   * their position in the DOM when initially rendered.
   */
  set order(value) {
    this._order = value;
    this.renderer.setStyle(this.elem.nativeElement, "order", `${this._order}`);
  }
  get order() {
    return this._order;
  }
  get hostDropEffect() {
    return this.isResizable || this.isReorderable ? "execute" : void 0;
  }
  get hostTabindex() {
    return this.isNavigable ? "0" : void 0;
  }
  get ariaKeyShortcuts() {
    return this.isNavigable ? "Enter" : void 0;
  }
  get hostGrabbed() {
    return this.isResizable || this.isReorderable;
  }
  get hostLabelledBy() {
    return this.title ? this.titleId : void 0;
  }
  get colEnd() {
    return `span ${this.colSpan}`;
  }
  get rowEnd() {
    return `span ${this.rowSpan}`;
  }
  get colStart() {
    return isPresent4(this.col) ? this.col.toString() : void 0;
  }
  get rowStart() {
    return isPresent4(this.row) ? this.row.toString() : void 0;
  }
  /**
   * @hidden
   */
  get isReorderable() {
    return this.reorderable && this.draggingService.reorderable.getValue();
  }
  /**
   * @hidden
   */
  get isNavigable() {
    return this.keyboardNavigationService.navigable.getValue();
  }
  /**
   * @hidden
   */
  get isResizable() {
    return this.resizable && this.draggingService.resizable.getValue();
  }
  ngAfterViewInit() {
    const elem = this.elem.nativeElement;
    const keyboardNavigation = this.keyboardNavigationService;
    this.subs.add(this.draggingService.reorderable.subscribe((reorderable) => {
      this.toggleCursorClass(reorderable && this.reorderable);
      if (this.headers?.first) {
        this.headers.first.reorderable = reorderable && this.reorderable;
      }
    }));
    this.subs.add(keyboardNavigation.navigable.subscribe((isNavigable) => {
      if (isNavigable) {
        this.keyboardNavigationSubs = new Subscription();
        this.focusableItems = keyboardNavigation.getAllFocusableChildren(elem);
        this.zone.runOutsideAngular(() => {
          keyboardNavigation.changeTabIndex("-1", elem, this.focusableItems);
          this.keyboardNavigationSubs.add(this.renderer.listen(elem, "keydown", (event) => keyboardNavigation.onKeyDown(event, elem, this.focusableItems, this.draggingService.tileLayoutSettings)));
          this.keyboardNavigationSubs.add(this.renderer.listen(elem, "click", (event) => keyboardNavigation.onClick(event, elem, this.focusableItems)));
          this.keyboardNavigationSubs.add(this.renderer.listen(elem, "focusout", (event) => keyboardNavigation.onFocusOut(event, elem, this.focusableItems)));
        });
      } else if (this.focusableItems) {
        this.focusableItems.forEach((focusItem) => {
          this.renderer.setAttribute(focusItem, "tabindex", "0");
        });
        this.keyboardNavigationSubs.unsubscribe();
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes["reorderable"] && !changes["reorderable"].firstChange) {
      this.toggleCursorClass(changes["reorderable"].currentValue && this.draggingService.reorderable.getValue());
    }
    if (changes["resizable"]) {
      this.resizeDirections = this.resizable && this.draggingService.resizable.getValue() ? this.rtl ? RTL_RESIZE_DIRECTIONS : RESIZE_DIRECTIONS : void 0;
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.keyboardNavigationSubs) {
      this.keyboardNavigationSubs.unsubscribe();
    }
  }
  toggleCursorClass(isReorderable) {
    const headerEl = this.elem.nativeElement.querySelector(".k-tilelayout-item-header");
    if (!headerEl) {
      return;
    }
    if (isReorderable) {
      this.renderer.addClass(headerEl, "k-cursor-grab");
    } else {
      this.renderer.removeClass(headerEl, "k-cursor-grab");
    }
  }
};
TileLayoutItemComponent.ɵfac = function TileLayoutItemComponent_Factory(t) {
  return new (t || TileLayoutItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(TileLayoutDraggingService), ɵɵdirectiveInject(TileLayoutKeyboardNavigationService));
};
TileLayoutItemComponent.ɵcmp = ɵɵdefineComponent({
  type: TileLayoutItemComponent,
  selectors: [["kendo-tilelayout-item"]],
  contentQueries: function TileLayoutItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TileLayoutItemHeaderComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headers = _t);
    }
  },
  hostVars: 18,
  hostBindings: function TileLayoutItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.hostRole)("aria-dropeffect", ctx.hostDropEffect)("tabindex", ctx.hostTabindex)("aria-keyshortcuts", ctx.ariaKeyShortcuts)("aria-grabbed", ctx.hostGrabbed)("aria-labelledby", ctx.hostLabelledBy);
      ɵɵstyleProp("grid-column-end", ctx.colEnd)("grid-row-end", ctx.rowEnd)("grid-column-start", ctx.colStart)("grid-row-start", ctx.rowStart);
      ɵɵclassProp("k-tilelayout-item", ctx.itemClass)("k-card", ctx.itemClass);
    }
  },
  inputs: {
    title: "title",
    rowSpan: "rowSpan",
    colSpan: "colSpan",
    order: "order",
    col: "col",
    row: "row",
    reorderable: "reorderable",
    resizable: "resizable"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c82,
  decls: 3,
  vars: 2,
  consts: [[3, "reorderable", 4, "ngIf"], [4, "ngIf"], [3, "reorderable"], [1, "k-card-title", 3, "id"], ["kendoTileLayoutResizeHandle", "", 3, "class", "rtl", "resizeDirection", 4, "ngFor", "ngForOf"], ["kendoTileLayoutResizeHandle", "", 3, "rtl", "resizeDirection"]],
  template: function TileLayoutItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TileLayoutItemComponent_kendo_tilelayout_item_header_0_Template, 3, 3, "kendo-tilelayout-item-header", 0);
      ɵɵprojection(1);
      ɵɵtemplate(2, TileLayoutItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.title);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.resizable);
    }
  },
  dependencies: [TileLayoutItemHeaderComponent, NgIf, NgForOf, TileLayoutResizeHandleDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutItemComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout-item",
      template: `
        <kendo-tilelayout-item-header [reorderable]="isReorderable" *ngIf="title">
            <h5 [id]="titleId" class="k-card-title">{{ title }}</h5>
        </kendo-tilelayout-item-header>
        <ng-content></ng-content>
        <ng-container *ngIf="resizable">
            <div
                *ngFor="let dir of resizeDirections"
                class="k-resize-handle k-cursor-{{dir}}-resize k-touch-action-none"
                kendoTileLayoutResizeHandle
                [rtl]="rtl"
                [resizeDirection]="dir">
            </div>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: TileLayoutDraggingService
    }, {
      type: TileLayoutKeyboardNavigationService
    }];
  }, {
    title: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    col: [{
      type: Input
    }],
    row: [{
      type: Input
    }],
    reorderable: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    itemClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout-item"]
    }, {
      type: HostBinding,
      args: ["class.k-card"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostDropEffect: [{
      type: HostBinding,
      args: ["attr.aria-dropeffect"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaKeyShortcuts: [{
      type: HostBinding,
      args: ["attr.aria-keyshortcuts"]
    }],
    hostGrabbed: [{
      type: HostBinding,
      args: ["attr.aria-grabbed"]
    }],
    hostLabelledBy: [{
      type: HostBinding,
      args: ["attr.aria-labelledby"]
    }],
    colEnd: [{
      type: HostBinding,
      args: ["style.grid-column-end"]
    }],
    rowEnd: [{
      type: HostBinding,
      args: ["style.grid-row-end"]
    }],
    colStart: [{
      type: HostBinding,
      args: ["style.grid-column-start"]
    }],
    rowStart: [{
      type: HostBinding,
      args: ["style.grid-row-start"]
    }],
    headers: [{
      type: ContentChildren,
      args: [TileLayoutItemHeaderComponent]
    }]
  });
})();
var autoFlowClasses = {
  column: "k-grid-flow-col",
  row: "k-grid-flow-row",
  "column-dense": "k-grid-flow-col-dense",
  "row-dense": "k-grid-flow-row-dense"
};
var TileLayoutComponent = class {
  constructor(zone, elem, renderer, localization, draggingService, navigationService) {
    this.zone = zone;
    this.elem = elem;
    this.renderer = renderer;
    this.localization = localization;
    this.draggingService = draggingService;
    this.navigationService = navigationService;
    this.columns = 1;
    this.columnWidth = "1fr";
    this.reorderable = false;
    this.resizable = false;
    this.rowHeight = "1fr";
    this.autoFlow = "column";
    this.navigable = false;
    this.reorder = new EventEmitter();
    this.resize = new EventEmitter();
    this.hostClass = true;
    this.hostRole = "list";
    this.showLicenseWatermark = false;
    this.subs = new Subscription();
    this._gap = {
      rows: 16,
      columns: 16
    };
    const isValid = validatePackage(packageMetadata5);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
  }
  /**
   * The numeric values which determine the spacing in pixels between the layout items horizontally and vertically.
   * Properties:
   * * rows - the vertical spacing. Numeric values are treated as pixels. Defaults to `16`.
   * * columns - the horizontal spacing. Numeric values are treated as pixels. Defaults to `16`.
   *
   * When bound to a single numeric value, it will be set to both `rows` and `columns` properties.
   */
  set gap(value) {
    this._gap = typeof value === "number" ? {
      rows: value,
      columns: value
    } : Object.assign(this._gap, value);
  }
  get gap() {
    return this._gap;
  }
  get gapStyle() {
    return `${this.gap.rows}px ${this.gap.columns}px`;
  }
  get currentColStart() {
    return this.draggingService.colStart;
  }
  get currentRowStart() {
    return this.draggingService.rowStart;
  }
  get draggedItemWrapper() {
    return this.draggingService.itemWrapper;
  }
  get targetOrder() {
    return this.draggingService.order;
  }
  ngOnInit() {
    this.applyColStyling();
    this.applyRowStyling();
    this.draggingService.reorderable.next(this.reorderable);
    this.draggingService.resizable.next(this.resizable);
    this.navigationService.navigable.next(this.navigable);
    if (hasObservers(this.reorder)) {
      this.subs.add(this.draggingService.reorder.subscribe((e) => this.reorder.emit(e)));
    }
    if (hasObservers(this.resize)) {
      this.subs.add(this.draggingService.resize.subscribe((e) => this.resize.emit(e)));
    }
    this.subs.add(this.draggingService.reorderable.subscribe((reorderable) => {
      if (reorderable && !this.draggable) {
        this.initializeDraggable();
      }
    }));
    this.subs.add(this.draggingService.resizable.subscribe((resizable) => {
      if (resizable && !this.draggable) {
        this.initializeDraggable();
      }
    }));
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    this.draggingService.tileLayoutSettings = this.draggingServiceConfig();
    this.applyAutoFlow(null, autoFlowClasses[this.autoFlow]);
    this.items.changes.subscribe(() => {
      this.setItemsOrder();
      this.draggingService.tileLayoutSettings.items = this.items.toArray();
    });
  }
  ngAfterContentInit() {
    this.setItemsOrder();
  }
  ngOnChanges(changes) {
    if (changes["columns"] || changes["columnWidth"]) {
      this.applyColStyling();
    }
    if (changes["rowHeight"]) {
      this.applyRowStyling();
    }
    if (isChanged("reorderable", changes)) {
      this.draggingService.reorderable.next(changes["reorderable"].currentValue);
    }
    if (isChanged("resizable", changes)) {
      this.draggingService.resizable.next(changes["resizable"].currentValue);
    }
    if (changes["gap"] || changes["autoFlow"] || changes["columns"]) {
      this.draggingService.tileLayoutSettings = this.draggingServiceConfig();
      if (changes["autoFlow"]) {
        this.applyAutoFlow(autoFlowClasses[changes["autoFlow"].previousValue] || "", autoFlowClasses[changes["autoFlow"].currentValue]);
      }
    }
    if (isChanged("navigable", changes)) {
      this.navigationService.navigable.next(changes["navigable"].currentValue);
    }
  }
  ngOnDestroy() {
    if (this.draggable) {
      this.draggable.destroy();
    }
    this.subs.unsubscribe();
  }
  handlePress({
    originalEvent
  }) {
    this.draggingService.handlePress(originalEvent);
  }
  handleDrag({
    originalEvent
  }) {
    this.draggingService.handleDrag(originalEvent);
  }
  handleRelease({
    originalEvent
  }) {
    this.draggingService.handleRelease(originalEvent);
  }
  applyColStyling() {
    const colWidth = typeof this.columnWidth === "number" ? `${this.columnWidth}px` : this.columnWidth;
    const gridTemplateColumnsStyle = `repeat(${this.columns}, ${colWidth})`;
    this.renderer.setStyle(this.elem.nativeElement, "grid-template-columns", gridTemplateColumnsStyle);
  }
  applyRowStyling() {
    const rowHeight = typeof this.rowHeight === "number" ? `${this.rowHeight}px` : this.rowHeight;
    const gridAutoRowsStyle = `${rowHeight}`;
    this.renderer.setStyle(this.elem.nativeElement, "grid-auto-rows", gridAutoRowsStyle);
  }
  draggingServiceConfig() {
    return {
      tileLayoutElement: this.elem ? this.elem.nativeElement : void 0,
      hintElement: this.hint ? this.hint.nativeElement : void 0,
      gap: this.gap,
      columns: this.columns,
      autoFlow: this.autoFlow,
      items: this.items ? this.items.toArray() : []
    };
  }
  initializeDraggable() {
    this.draggable = new Draggable({
      press: this.handlePress.bind(this),
      drag: this.handleDrag.bind(this),
      release: this.handleRelease.bind(this)
    });
    this.zone.runOutsideAngular(() => this.draggable.bindTo(this.elem.nativeElement));
  }
  applyAutoFlow(classToRemove, classToAdd) {
    const element = this.elem.nativeElement;
    if (classToRemove) {
      this.renderer.removeClass(element, classToRemove);
    }
    if (this.autoFlow !== "none" && isPresent4(classToAdd)) {
      this.renderer.addClass(element, classToAdd);
    }
  }
  setItemsOrder() {
    this.items.forEach((item, index) => {
      if (!isPresent4(item.order)) {
        item.order = index;
      }
    });
  }
};
TileLayoutComponent.ɵfac = function TileLayoutComponent_Factory(t) {
  return new (t || TileLayoutComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(TileLayoutDraggingService), ɵɵdirectiveInject(TileLayoutKeyboardNavigationService));
};
TileLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: TileLayoutComponent,
  selectors: [["kendo-tilelayout"]],
  contentQueries: function TileLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TileLayoutItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  viewQuery: function TileLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c26, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hint = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function TileLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.hostRole)("dir", ctx.direction);
      ɵɵstyleProp("gap", ctx.gapStyle)("padding", ctx.gapStyle);
      ɵɵclassProp("k-tilelayout", ctx.hostClass)("k-pos-relative", ctx.hostClass);
    }
  },
  inputs: {
    columns: "columns",
    columnWidth: "columnWidth",
    gap: "gap",
    reorderable: "reorderable",
    resizable: "resizable",
    rowHeight: "rowHeight",
    autoFlow: "autoFlow",
    navigable: "navigable"
  },
  outputs: {
    reorder: "reorder",
    resize: "resize"
  },
  features: [ɵɵProvidersFeature([LocalizationService, TileLayoutDraggingService, TileLayoutKeyboardNavigationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.tilelayout.component"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c82,
  decls: 4,
  vars: 15,
  consts: [[1, "k-layout-item-hint", "k-layout-item-hint-reorder"], ["hint", ""], ["kendoWatermarkOverlay", "", 4, "ngIf"], ["kendoWatermarkOverlay", ""]],
  template: function TileLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelement(1, "div", 0, 1);
      ɵɵtemplate(3, TileLayoutComponent_div_3_Template, 1, 0, "div", 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵstyleProp("display", "none")("order", ctx.targetOrder)("grid-column-end", ctx.draggedItemWrapper == null ? null : ctx.draggedItemWrapper.style.gridColumnEnd)("grid-row-end", ctx.draggedItemWrapper == null ? null : ctx.draggedItemWrapper.style.gridRowEnd)("grid-column-start", ctx.currentColStart)("grid-row-start", ctx.currentRowStart)("z-index", "1");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [WatermarkOverlayComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout",
      providers: [LocalizationService, TileLayoutDraggingService, TileLayoutKeyboardNavigationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.tilelayout.component"
      }],
      template: `
        <ng-content></ng-content>
        <div #hint class="k-layout-item-hint k-layout-item-hint-reorder"
            [style.display]="'none'"
            [style.order]="targetOrder"
            [style.gridColumnEnd]="draggedItemWrapper?.style.gridColumnEnd"
            [style.gridRowEnd]="draggedItemWrapper?.style.gridRowEnd"
            [style.gridColumnStart]="currentColStart"
            [style.gridRowStart]="currentRowStart"
            [style.zIndex]="'1'">
        </div>
        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: TileLayoutDraggingService
    }, {
      type: TileLayoutKeyboardNavigationService
    }];
  }, {
    columns: [{
      type: Input
    }],
    columnWidth: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    reorderable: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    autoFlow: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    reorder: [{
      type: Output
    }],
    resize: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout"]
    }, {
      type: HostBinding,
      args: ["class.k-pos-relative"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    gapStyle: [{
      type: HostBinding,
      args: ["style.gap"]
    }, {
      type: HostBinding,
      args: ["style.padding"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    items: [{
      type: ContentChildren,
      args: [TileLayoutItemComponent]
    }],
    hint: [{
      type: ViewChild,
      args: ["hint", {
        static: false
      }]
    }]
  });
})();
var TileLayoutItemBodyComponent = class {
  constructor() {
    this.hostClass = true;
    this.minHeight = 0;
  }
};
TileLayoutItemBodyComponent.ɵfac = function TileLayoutItemBodyComponent_Factory(t) {
  return new (t || TileLayoutItemBodyComponent)();
};
TileLayoutItemBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: TileLayoutItemBodyComponent,
  selectors: [["kendo-tilelayout-item-body"]],
  hostVars: 6,
  hostBindings: function TileLayoutItemBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("min-height", ctx.minHeight);
      ɵɵclassProp("k-tilelayout-item-body", ctx.hostClass)("k-card-body", ctx.hostClass);
    }
  },
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function TileLayoutItemBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutItemBodyComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout-item-body",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout-item-body"]
    }, {
      type: HostBinding,
      args: ["class.k-card-body"]
    }],
    minHeight: [{
      type: HostBinding,
      args: ["style.min-height"]
    }]
  });
})();
var exportedModules$a = [AvatarComponent, AvatarCustomMessagesComponent];
var declarations$a = [LocalizedAvatarMessagesDirective, ...exportedModules$a];
var AvatarModule = class {
};
AvatarModule.ɵfac = function AvatarModule_Factory(t) {
  return new (t || AvatarModule)();
};
AvatarModule.ɵmod = ɵɵdefineNgModule({
  type: AvatarModule,
  declarations: [LocalizedAvatarMessagesDirective, AvatarComponent, AvatarCustomMessagesComponent],
  imports: [CommonModule, IconsModule],
  exports: [AvatarComponent, AvatarCustomMessagesComponent]
});
AvatarModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$a],
      exports: [exportedModules$a],
      imports: [CommonModule, IconsModule]
    }]
  }], null, null);
})();
var cardDirectives = [CardTitleDirective, CardSubtitleDirective, CardSeparatorDirective, CardMediaDirective];
var exportedModules$9 = [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, CardActionsComponent, ...cardDirectives];
var declarations$9 = [...exportedModules$9];
var CardModule = class {
};
CardModule.ɵfac = function CardModule_Factory(t) {
  return new (t || CardModule)();
};
CardModule.ɵmod = ɵɵdefineNgModule({
  type: CardModule,
  declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, CardActionsComponent, CardTitleDirective, CardSubtitleDirective, CardSeparatorDirective, CardMediaDirective],
  imports: [CommonModule],
  exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, CardActionsComponent, CardTitleDirective, CardSubtitleDirective, CardSeparatorDirective, CardMediaDirective]
});
CardModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$9],
      exports: [exportedModules$9],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var templateDirectives$1 = [DrawerTemplateDirective, DrawerHeaderTemplateDirective, DrawerFooterTemplateDirective, DrawerItemTemplateDirective];
var exportedModules$8 = [DrawerComponent, DrawerContainerComponent, DrawerContentComponent, ...templateDirectives$1];
var declarations$8 = [DrawerItemComponent, DrawerListComponent, ...exportedModules$8];
var DrawerModule = class {
};
DrawerModule.ɵfac = function DrawerModule_Factory(t) {
  return new (t || DrawerModule)();
};
DrawerModule.ɵmod = ɵɵdefineNgModule({
  type: DrawerModule,
  declarations: [DrawerItemComponent, DrawerListComponent, DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerHeaderTemplateDirective, DrawerFooterTemplateDirective, DrawerItemTemplateDirective],
  imports: [CommonModule, IconsModule, WatermarkModule],
  exports: [DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerHeaderTemplateDirective, DrawerFooterTemplateDirective, DrawerItemTemplateDirective]
});
DrawerModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, IconsModule, WatermarkModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$8],
      exports: [exportedModules$8],
      imports: [CommonModule, IconsModule, WatermarkModule]
    }]
  }], null, null);
})();
var exportedModules$7 = [ExpansionPanelComponent, ExpansionPanelTitleDirective];
var declarations$7 = [...exportedModules$7];
var ExpansionPanelModule = class {
};
ExpansionPanelModule.ɵfac = function ExpansionPanelModule_Factory(t) {
  return new (t || ExpansionPanelModule)();
};
ExpansionPanelModule.ɵmod = ɵɵdefineNgModule({
  type: ExpansionPanelModule,
  declarations: [ExpansionPanelComponent, ExpansionPanelTitleDirective],
  imports: [CommonModule, EventsModule, IconsModule],
  exports: [ExpansionPanelComponent, ExpansionPanelTitleDirective]
});
ExpansionPanelModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, EventsModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionPanelModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$7],
      exports: [exportedModules$7],
      imports: [CommonModule, EventsModule, IconsModule]
    }]
  }], null, null);
})();
var exportedModules$6 = [PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective];
var declarations$6 = [...exportedModules$6];
var PanelBarModule = class {
};
PanelBarModule.ɵfac = function PanelBarModule_Factory(t) {
  return new (t || PanelBarModule)();
};
PanelBarModule.ɵmod = ɵɵdefineNgModule({
  type: PanelBarModule,
  declarations: [PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective],
  imports: [CommonModule, IconsModule, WatermarkModule],
  exports: [PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective]
});
PanelBarModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, IconsModule, WatermarkModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$6],
      exports: [exportedModules$6],
      imports: [CommonModule, IconsModule, WatermarkModule]
    }]
  }], null, null);
})();
var exportedModules$5 = [SplitterComponent, SplitterPaneComponent];
var declarations$5 = [SplitterBarComponent, ...exportedModules$5];
var SplitterModule = class {
};
SplitterModule.ɵfac = function SplitterModule_Factory(t) {
  return new (t || SplitterModule)();
};
SplitterModule.ɵmod = ɵɵdefineNgModule({
  type: SplitterModule,
  declarations: [SplitterBarComponent, SplitterComponent, SplitterPaneComponent],
  imports: [CommonModule, DraggableModule, IconsModule],
  exports: [SplitterComponent, SplitterPaneComponent]
});
SplitterModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, DraggableModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$5],
      exports: [exportedModules$5],
      imports: [CommonModule, DraggableModule, IconsModule]
    }]
  }], null, null);
})();
var templateDirectives = [StepperStepTemplateDirective, StepperLabelTemplateDirective, StepperIndicatorTemplateDirective];
var exportedModules$4 = [StepperComponent, StepperCustomMessagesComponent, ...templateDirectives];
var declarations$4 = [StepperStepComponent, StepperListComponent, LocalizedStepperMessagesDirective, ...exportedModules$4];
var StepperModule = class {
};
StepperModule.ɵfac = function StepperModule_Factory(t) {
  return new (t || StepperModule)();
};
StepperModule.ɵmod = ɵɵdefineNgModule({
  type: StepperModule,
  declarations: [StepperStepComponent, StepperListComponent, LocalizedStepperMessagesDirective, StepperComponent, StepperCustomMessagesComponent, StepperStepTemplateDirective, StepperLabelTemplateDirective, StepperIndicatorTemplateDirective],
  imports: [CommonModule, ProgressBarModule, IconsModule],
  exports: [StepperComponent, StepperCustomMessagesComponent, StepperStepTemplateDirective, StepperLabelTemplateDirective, StepperIndicatorTemplateDirective]
});
StepperModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, ProgressBarModule, IconsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$4],
      exports: [exportedModules$4],
      imports: [CommonModule, ProgressBarModule, IconsModule]
    }]
  }], null, null);
})();
var exportedModules$3 = [TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabComponent, TabStripCustomMessagesComponent, LocalizedTabStripMessagesDirective, TabTemplateDirective];
var declarations$3 = [...exportedModules$3, TabStripScrollableButtonComponent];
var TabStripModule = class {
};
TabStripModule.ɵfac = function TabStripModule_Factory(t) {
  return new (t || TabStripModule)();
};
TabStripModule.ɵmod = ɵɵdefineNgModule({
  type: TabStripModule,
  declarations: [TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabComponent, TabStripCustomMessagesComponent, LocalizedTabStripMessagesDirective, TabTemplateDirective, TabStripScrollableButtonComponent],
  imports: [CommonModule, ResizeSensorModule, IconsModule, ButtonModule, WatermarkModule],
  exports: [TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabComponent, TabStripCustomMessagesComponent, LocalizedTabStripMessagesDirective, TabTemplateDirective]
});
TabStripModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, ResizeSensorModule, IconsModule, ButtonModule, WatermarkModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$3],
      exports: [exportedModules$3],
      imports: [CommonModule, ResizeSensorModule, IconsModule, ButtonModule, WatermarkModule]
    }]
  }], null, null);
})();
var exportedModules$22 = [TileLayoutComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent, TileLayoutItemBodyComponent, TileLayoutResizeHandleDirective];
var declarations$22 = [...exportedModules$22];
var TileLayoutModule = class {
};
TileLayoutModule.ɵfac = function TileLayoutModule_Factory(t) {
  return new (t || TileLayoutModule)();
};
TileLayoutModule.ɵmod = ɵɵdefineNgModule({
  type: TileLayoutModule,
  declarations: [TileLayoutComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent, TileLayoutItemBodyComponent, TileLayoutResizeHandleDirective],
  imports: [CommonModule, WatermarkModule],
  exports: [TileLayoutComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent, TileLayoutItemBodyComponent, TileLayoutResizeHandleDirective]
});
TileLayoutModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, WatermarkModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$22],
      exports: [exportedModules$22],
      imports: [CommonModule, WatermarkModule]
    }]
  }], null, null);
})();
var VERTICAL_SUFFIX = {
  top: "start",
  middle: "center",
  bottom: "end",
  stretch: "stretch"
};
var JUSTIFY_PREFIX = `k-justify-content`;
var GRID_JUSTIFY_PREFIX = `k-justify-items`;
var ALIGN_PREFIX = `k-align-items`;
var normalizeGap = (gap) => {
  if (typeof gap === "number" || typeof gap === "string") {
    return {
      cols: gap,
      rows: gap
    };
  } else {
    const parsedGap = {};
    parsedGap.rows = gap.rows ? gap.rows : 0;
    parsedGap.cols = gap.cols ? gap.cols : 0;
    return parsedGap;
  }
};
var generateGapStyle = (gap) => {
  if (gap.rows === gap.cols) {
    return typeof gap.rows === "number" ? `${gap.rows}px` : gap.rows;
  } else {
    const rowStyle = `${typeof gap.rows === "number" ? gap.rows + "px" : gap.rows}`;
    const colStyle = `${typeof gap.cols === "number" ? gap.cols + "px" : gap.cols}`;
    return `${rowStyle} ${colStyle}`;
  }
};
var generateGridStyle = (items, itemType) => {
  const styling = [];
  items.forEach((item) => {
    if (typeof item === "number") {
      styling.push(`${item}px`);
    } else if (typeof item === "string") {
      styling.push(item);
    } else {
      if (itemType === "rows") {
        const rowHeight = item.height;
        if (rowHeight) {
          styling.push(typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight);
        } else {
          styling.push("0px");
        }
      } else {
        const colWidth = item.width;
        if (colWidth) {
          styling.push(typeof colWidth === "number" ? `${colWidth}px` : colWidth);
        } else {
          styling.push("0px");
        }
      }
    }
  });
  return styling;
};
var validateGridLayoutRowsCols = (arr) => {
  for (const el of arr) {
    const isNum = typeof el === "number";
    const isStr = typeof el === "string";
    const isObject = typeof el === "object" && el !== null;
    if (!isNum && !isStr && !isObject) {
      return false;
    }
  }
  return true;
};
var StackLayoutComponent = class {
  constructor(renderer, element, localization) {
    this.renderer = renderer;
    this.element = element;
    this.localization = localization;
    this.hostClass = true;
    this.gap = 0;
    this.orientation = "horizontal";
    this._align = {
      horizontal: "stretch",
      vertical: "stretch"
    };
    validatePackage(packageMetadata5);
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get dir() {
    return this.direction;
  }
  /**
   * Specifies the horizontal and vertical alignment of the inner StackLayout elements
   * ([see example]({% slug layout_stacklayout %}#toc-alignment)).
   */
  set align(align2) {
    this._align = Object.assign({}, this._align, align2);
    this.handleAlignClasses();
  }
  get align() {
    return this._align;
  }
  ngAfterViewInit() {
    this.handleAlignClasses();
    this.setGap();
  }
  ngOnChanges(changes) {
    if (isChanged("gap", changes)) {
      this.setGap();
    }
    if (isChanged("orientation", changes)) {
      this.handleAlignClasses();
    }
  }
  handleAlignClasses() {
    const elem = this.element.nativeElement;
    if (isPresent4(this.justifyClass)) {
      this.renderer.removeClass(elem, this.justifyClass);
    }
    if (isPresent4(this.alignClass)) {
      this.renderer.removeClass(elem, this.alignClass);
    }
    if (this.orientation === "horizontal") {
      this.justifyClass = `${JUSTIFY_PREFIX}-${this.align.horizontal}`;
      this.alignClass = `${ALIGN_PREFIX}-${VERTICAL_SUFFIX[this.align.vertical]}`;
    } else {
      this.justifyClass = `${JUSTIFY_PREFIX}-${VERTICAL_SUFFIX[this.align.vertical]}`;
      this.alignClass = `${ALIGN_PREFIX}-${this.align.horizontal}`;
    }
    this.renderer.addClass(elem, this.justifyClass);
    this.renderer.addClass(elem, this.alignClass);
  }
  setGap() {
    const parsedGap = isNumber(this.gap) ? `${this.gap}px` : this.gap;
    this.renderer.setStyle(this.element.nativeElement, "gap", parsedGap);
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
};
StackLayoutComponent.ɵfac = function StackLayoutComponent_Factory(t) {
  return new (t || StackLayoutComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
};
StackLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: StackLayoutComponent,
  selectors: [["kendo-stacklayout"]],
  hostVars: 7,
  hostBindings: function StackLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-stack-layout", ctx.hostClass)("k-hstack", ctx.horizontalClass)("k-vstack", ctx.verticalClass);
    }
  },
  inputs: {
    align: "align",
    gap: "gap",
    orientation: "orientation"
  },
  exportAs: ["kendoStackLayout"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.stacklayout"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function StackLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackLayoutComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoStackLayout",
      selector: "kendo-stacklayout",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.stacklayout"
      }],
      template: `
        <ng-content></ng-content>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-stack-layout"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-vstack"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    align: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var exportedModules$13 = [StackLayoutComponent];
var declarations$13 = [...exportedModules$13];
var StackLayoutModule = class {
};
StackLayoutModule.ɵfac = function StackLayoutModule_Factory(t) {
  return new (t || StackLayoutModule)();
};
StackLayoutModule.ɵmod = ɵɵdefineNgModule({
  type: StackLayoutModule,
  declarations: [StackLayoutComponent],
  imports: [CommonModule],
  exports: [StackLayoutComponent]
});
StackLayoutModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackLayoutModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations$13],
      exports: [exportedModules$13],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var GridLayoutComponent = class {
  constructor(renderer, element, localization) {
    this.renderer = renderer;
    this.element = element;
    this.localization = localization;
    this.hostClass = true;
    this.gap = 0;
    this._align = {
      horizontal: "stretch",
      vertical: "stretch"
    };
    validatePackage(packageMetadata5);
  }
  get dir() {
    return this.direction;
  }
  /**
   * Specifies the horizontal and vertical alignment of the inner GridLayout elements
   * ([see example]({% slug layout_gridlayout %}#toc-alignment)).
   */
  set align(align2) {
    this._align = Object.assign({}, this._align, align2);
    this.handleAlignClasses();
  }
  get align() {
    return this._align;
  }
  ngAfterViewInit() {
    this.handleAlignClasses();
    this.handleGridTemplateStyling("rows");
    this.handleGridTemplateStyling("cols");
    this.setGap();
  }
  ngOnChanges(changes) {
    if (isChanged("gap", changes)) {
      this.setGap();
    }
    if (isChanged("rows", changes)) {
      this.handleGridTemplateStyling("rows");
    }
    if (isChanged("cols", changes)) {
      this.handleGridTemplateStyling("cols");
    }
  }
  handleAlignClasses() {
    const elem = this.element.nativeElement;
    if (isPresent4(this.justifyClass)) {
      this.renderer.removeClass(elem, this.justifyClass);
    }
    if (isPresent4(this.alignClass)) {
      this.renderer.removeClass(elem, this.alignClass);
    }
    this.justifyClass = `${GRID_JUSTIFY_PREFIX}-${this.align.horizontal}`;
    this.alignClass = `${ALIGN_PREFIX}-${VERTICAL_SUFFIX[this.align.vertical]}`;
    this.renderer.addClass(elem, this.justifyClass);
    this.renderer.addClass(elem, this.alignClass);
  }
  setGap() {
    const parsedGap = normalizeGap(this.gap);
    const gapStyle = generateGapStyle(parsedGap);
    this.renderer.setStyle(this.element.nativeElement, "gap", gapStyle);
  }
  handleGridTemplateStyling(type) {
    if (!isPresent4(this[type])) {
      return;
    }
    const isValid = validateGridLayoutRowsCols(this[type]);
    if (!isValid && isDevMode()) {
      const valueType = type === "rows" ? "GridLayoutRowSize" : "GridLayoutColSize";
      throw new Error(`The provided ${type} value contains invalid elements. The array supports values of type number, string or ${valueType}.`);
    }
    const gridTemplateStyle = type === "rows" ? "grid-template-rows" : "grid-template-columns";
    const gridStyle = generateGridStyle(this[type], type);
    this.renderer.setStyle(this.element.nativeElement, gridTemplateStyle, gridStyle.join(" "));
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
};
GridLayoutComponent.ɵfac = function GridLayoutComponent_Factory(t) {
  return new (t || GridLayoutComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
};
GridLayoutComponent.ɵcmp = ɵɵdefineComponent({
  type: GridLayoutComponent,
  selectors: [["kendo-gridlayout"]],
  hostVars: 3,
  hostBindings: function GridLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir);
      ɵɵclassProp("k-grid-layout", ctx.hostClass);
    }
  },
  inputs: {
    rows: "rows",
    cols: "cols",
    gap: "gap",
    align: "align"
  },
  exportAs: ["kendoGridLayout"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.gridlayout"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function GridLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridLayoutComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoGridLayout",
      selector: "kendo-gridlayout",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.gridlayout"
      }],
      template: `
        <ng-content></ng-content>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-grid-layout"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    rows: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var GridLayoutItemComponent = class {
  constructor(renderer, element) {
    this.renderer = renderer;
    this.element = element;
  }
  ngOnInit() {
    this.setItemStyle();
  }
  ngOnChanges() {
    this.setItemStyle();
  }
  setItemStyle() {
    const row = this.row || "auto";
    const col = this.col || "auto";
    const rowSpan = this.rowSpan ? `span ${this.rowSpan}` : "auto";
    const colSpan = this.colSpan ? `span ${this.colSpan}` : "auto";
    const gridAreaStyle = `${row} / ${col} / ${rowSpan} / ${colSpan}`;
    this.renderer.setStyle(this.element.nativeElement, "grid-area", gridAreaStyle);
  }
};
GridLayoutItemComponent.ɵfac = function GridLayoutItemComponent_Factory(t) {
  return new (t || GridLayoutItemComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
GridLayoutItemComponent.ɵcmp = ɵɵdefineComponent({
  type: GridLayoutItemComponent,
  selectors: [["kendo-gridlayout-item"]],
  inputs: {
    row: "row",
    col: "col",
    rowSpan: "rowSpan",
    colSpan: "colSpan"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c82,
  decls: 1,
  vars: 0,
  template: function GridLayoutItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridLayoutItemComponent, [{
    type: Component,
    args: [{
      selector: "kendo-gridlayout-item",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    row: [{
      type: Input
    }],
    col: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var exportedModules3 = [GridLayoutComponent, GridLayoutItemComponent];
var declarations3 = [...exportedModules3];
var GridLayoutModule = class {
};
GridLayoutModule.ɵfac = function GridLayoutModule_Factory(t) {
  return new (t || GridLayoutModule)();
};
GridLayoutModule.ɵmod = ɵɵdefineNgModule({
  type: GridLayoutModule,
  declarations: [GridLayoutComponent, GridLayoutItemComponent],
  imports: [CommonModule],
  exports: [GridLayoutComponent, GridLayoutItemComponent]
});
GridLayoutModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridLayoutModule, [{
    type: NgModule,
    args: [{
      declarations: [declarations3],
      exports: [exportedModules3],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var LayoutModule = class {
};
LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};
LayoutModule.ɵmod = ɵɵdefineNgModule({
  type: LayoutModule,
  exports: [AvatarModule, CardModule, DrawerModule, PanelBarModule, ExpansionPanelModule, SplitterModule, StepperModule, TabStripModule, TileLayoutModule, StackLayoutModule, GridLayoutModule]
});
LayoutModule.ɵinj = ɵɵdefineInjector({
  imports: [AvatarModule, CardModule, DrawerModule, PanelBarModule, ExpansionPanelModule, SplitterModule, StepperModule, TabStripModule, TileLayoutModule, StackLayoutModule, GridLayoutModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{
      exports: [AvatarModule, CardModule, DrawerModule, PanelBarModule, ExpansionPanelModule, SplitterModule, StepperModule, TabStripModule, TileLayoutModule, StackLayoutModule, GridLayoutModule]
    }]
  }], null, null);
})();
export {
  AvatarComponent,
  AvatarCustomMessagesComponent,
  AvatarModule,
  CardAction,
  CardActionsComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CardMediaDirective,
  CardModule,
  CardSeparatorDirective,
  CardSubtitleDirective,
  CardTitleDirective,
  DrawerComponent,
  DrawerContainerComponent,
  DrawerContentComponent,
  DrawerFooterTemplateDirective,
  DrawerHeaderTemplateDirective,
  DrawerItemTemplateDirective,
  DrawerModule,
  DrawerSelectEvent,
  DrawerTemplateDirective,
  ExpansionPanelActionEvent,
  ExpansionPanelComponent,
  ExpansionPanelModule,
  ExpansionPanelTitleDirective,
  GridLayoutComponent,
  GridLayoutItemComponent,
  GridLayoutModule,
  LayoutModule,
  LocalizedAvatarMessagesDirective,
  LocalizedStepperMessagesDirective,
  LocalizedTabStripMessagesDirective,
  PanelBarCollapseEvent,
  PanelBarComponent,
  PanelBarContentDirective,
  PanelBarExpandEvent,
  PanelBarExpandMode,
  PanelBarItemClickEvent,
  PanelBarItemComponent,
  PanelBarItemTemplateDirective,
  PanelBarItemTitleDirective,
  PanelBarModule,
  PanelBarSelectEvent,
  PanelBarStateChangeEvent,
  SelectEvent,
  SplitterComponent,
  SplitterModule,
  SplitterPaneComponent,
  StackLayoutComponent,
  StackLayoutModule,
  StepperActivateEvent,
  StepperComponent,
  StepperCustomMessagesComponent,
  StepperIndicatorTemplateDirective,
  StepperLabelTemplateDirective,
  StepperModule,
  StepperStepTemplateDirective,
  TabCloseEvent,
  TabComponent,
  TabContentDirective,
  TabStripComponent,
  TabStripCustomMessagesComponent,
  TabStripModule,
  TabStripTabComponent,
  TabTemplateDirective,
  TabTitleDirective,
  TileLayoutComponent,
  TileLayoutItemBodyComponent,
  TileLayoutItemComponent,
  TileLayoutItemHeaderComponent,
  TileLayoutModule,
  TileLayoutReorderEvent,
  TileLayoutResizeEvent,
  TileLayoutResizeHandleDirective
};
//# sourceMappingURL=@progress_kendo-angular-layout.js.map
