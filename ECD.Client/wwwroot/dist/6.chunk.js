webpackJsonp([6],{

/***/ 463:
/* exports provided: EditorsModule */
/* all exports used */
/*!*************************************************!*\
  !*** ./src/app/pages/editors/editors.module.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(/*! @angular/common */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(/*! @angular/forms */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ckeditor__ = __webpack_require__(/*! ng2-ckeditor */ 771);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ckeditor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(/*! ../../theme/nga.module */ 29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editors_routing__ = __webpack_require__(/*! ./editors.routing */ 701);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editors_component__ = __webpack_require__(/*! ./editors.component */ 618);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ckeditor_ckeditor_component__ = __webpack_require__(/*! ./components/ckeditor/ckeditor.component */ 617);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditorsModule\", function() { return EditorsModule; });\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar EditorsModule = (function () {\r\n    function EditorsModule() {\r\n    }\r\n    EditorsModule = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"NgModule\"])({\r\n            imports: [\r\n                __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"CommonModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_2__angular_forms__[\"FormsModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__[\"a\" /* NgaModule */],\r\n                __WEBPACK_IMPORTED_MODULE_3_ng2_ckeditor__[\"CKEditorModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_5__editors_routing__[\"a\" /* routing */]\r\n            ],\r\n            declarations: [\r\n                __WEBPACK_IMPORTED_MODULE_6__editors_component__[\"a\" /* Editors */],\r\n                __WEBPACK_IMPORTED_MODULE_7__components_ckeditor_ckeditor_component__[\"a\" /* Ckeditor */]\r\n            ]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], EditorsModule);\r\n    return EditorsModule;\r\n}());\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2VkaXRvcnMubW9kdWxlLnRzPzgwODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcclxuaW1wb3J0IHsgTmdhTW9kdWxlIH0gZnJvbSAnLi4vLi4vdGhlbWUvbmdhLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyByb3V0aW5nIH0gICAgICAgZnJvbSAnLi9lZGl0b3JzLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBFZGl0b3JzIH0gZnJvbSAnLi9lZGl0b3JzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENrZWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE5nYU1vZHVsZSxcclxuICAgIENLRWRpdG9yTW9kdWxlLFxyXG4gICAgcm91dGluZ1xyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFZGl0b3JzLFxyXG4gICAgQ2tlZGl0b3JcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JzTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvcGFnZXMvZWRpdG9ycy9lZGl0b3JzLm1vZHVsZS50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWdCQTtBQUFBO0FBQ0E7QUFkQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 617:
/* exports provided: Ckeditor */
/* exports used: Ckeditor */
/*!*************************************************************************!*\
  !*** ./src/app/pages/editors/components/ckeditor/ckeditor.component.ts ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_loader__ = __webpack_require__(/*! ./ckeditor.loader */ 700);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_loader__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ckeditor__ = __webpack_require__(/*! ckeditor */ 763);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ckeditor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_ckeditor_scss__ = __webpack_require__(/*! style-loader!./ckeditor.scss */ 875);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_ckeditor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_style_loader_ckeditor_scss__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Ckeditor; });\n\r\n\r\n\r\n\r\nvar Ckeditor = (function () {\r\n    function Ckeditor() {\r\n        this.ckeditorContent = '<p>Hello CKEditor</p>';\r\n        this.config = {\r\n            uiColor: '#F0F3F4',\r\n            height: '600',\r\n        };\r\n    }\r\n    Ckeditor = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"Component\"])({\r\n            selector: 'ckeditor-component',\r\n            template: __webpack_require__(/*! ./ckeditor.html */ 825),\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], Ckeditor);\r\n    return Ckeditor;\r\n}());\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjE3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2NvbXBvbmVudHMvY2tlZGl0b3IvY2tlZGl0b3IuY29tcG9uZW50LnRzP2M5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgJy4vY2tlZGl0b3IubG9hZGVyJztcclxuaW1wb3J0ICdja2VkaXRvcic7XHJcbmltcG9ydCAnc3R5bGUtbG9hZGVyIS4vY2tlZGl0b3Iuc2Nzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NrZWRpdG9yLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2tlZGl0b3IuaHRtbCcpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENrZWRpdG9yIHtcclxuICBwdWJsaWMgY2tlZGl0b3JDb250ZW50OnN0cmluZyA9ICc8cD5IZWxsbyBDS0VkaXRvcjwvcD4nO1xyXG4gIHB1YmxpYyBjb25maWcgPSB7XHJcbiAgICB1aUNvbG9yOiAnI0YwRjNGNCcsXHJcbiAgICBoZWlnaHQ6ICc2MDAnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvcGFnZXMvZWRpdG9ycy9jb21wb25lbnRzL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBYkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQVdBO0FBQUE7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 618:
/* exports provided: Editors */
/* exports used: Editors */
/*!****************************************************!*\
  !*** ./src/app/pages/editors/editors.component.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 2);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Editors; });\n\r\nvar Editors = (function () {\r\n    function Editors() {\r\n    }\r\n    Editors = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"Component\"])({\r\n            selector: 'editors',\r\n            template: \"<router-outlet></router-outlet>\"\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], Editors);\r\n    return Editors;\r\n}());\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2VkaXRvcnMuY29tcG9uZW50LnRzPzIxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlZGl0b3JzJyxcclxuICB0ZW1wbGF0ZTogYDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL3BhZ2VzL2VkaXRvcnMvZWRpdG9ycy5jb21wb25lbnQudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBTUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUlBO0FBQUE7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 642:
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/ng2-ckeditor/lib/ckeditor.component.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Imports\nvar core_1 = __webpack_require__(/*! @angular/core */ 2);\nvar forms_1 = __webpack_require__(/*! @angular/forms */ 10);\n/**\n * CKEditor component\n * Usage :\n *  <ckeditor [(ngModel)]=\"data\" [config]=\"{...}\" debounce=\"500\"></ckeditor>\n */\nvar CKEditorComponent = (function () {\n    /**\n     * Constructor\n     */\n    function CKEditorComponent(zone) {\n        this.change = new core_1.EventEmitter();\n        this.ready = new core_1.EventEmitter();\n        this.blur = new core_1.EventEmitter();\n        this.focus = new core_1.EventEmitter();\n        this._value = '';\n        this.zone = zone;\n    }\n    Object.defineProperty(CKEditorComponent.prototype, \"value\", {\n        get: function () { return this._value; },\n        set: function (v) {\n            if (v !== this._value) {\n                this._value = v;\n                this.onChange(v);\n            }\n        },\n        enumerable: true,\n        configurable: true\n    });\n    ;\n    /**\n     * On component destroy\n     */\n    CKEditorComponent.prototype.ngOnDestroy = function () {\n        var _this = this;\n        if (this.instance) {\n            setTimeout(function () {\n                _this.instance.removeAllListeners();\n                _this.instance.destroy();\n                _this.instance = null;\n            });\n        }\n    };\n    /**\n     * On component view init\n     */\n    CKEditorComponent.prototype.ngAfterViewInit = function () {\n        // Configuration\n        this.ckeditorInit(this.config || {});\n    };\n    /**\n     * Value update process\n     */\n    CKEditorComponent.prototype.updateValue = function (value) {\n        var _this = this;\n        this.zone.run(function () {\n            _this.value = value;\n            _this.onChange(value);\n            _this.onTouched();\n            _this.change.emit(value);\n        });\n    };\n    /**\n     * CKEditor init\n     */\n    CKEditorComponent.prototype.ckeditorInit = function (config) {\n        var _this = this;\n        if (!CKEDITOR) {\n            console.error('Please include CKEditor in your page');\n            return;\n        }\n        // CKEditor replace textarea\n        this.instance = CKEDITOR.replace(this.host.nativeElement, config);\n        // Set initial value\n        this.instance.setData(this.value);\n        // listen for instanceReady event\n        this.instance.on('instanceReady', function (evt) {\n            // send the evt to the EventEmitter\n            _this.ready.emit(evt);\n        });\n        // CKEditor change event\n        this.instance.on('change', function () {\n            _this.onTouched();\n            var value = _this.instance.getData();\n            // Debounce update\n            if (_this.debounce) {\n                if (_this.debounceTimeout)\n                    clearTimeout(_this.debounceTimeout);\n                _this.debounceTimeout = setTimeout(function () {\n                    _this.updateValue(value);\n                    _this.debounceTimeout = null;\n                }, parseInt(_this.debounce));\n            }\n            else {\n                _this.updateValue(value);\n            }\n        });\n        // CKEditor blur event\n        this.instance.on('blur', function (evt) {\n            _this.blur.emit(evt);\n        });\n        // CKEditor focus event\n        this.instance.on('focus', function (evt) {\n            _this.focus.emit(evt);\n        });\n    };\n    /**\n     * Implements ControlValueAccessor\n     */\n    CKEditorComponent.prototype.writeValue = function (value) {\n        this._value = value;\n        if (this.instance)\n            this.instance.setData(value);\n    };\n    CKEditorComponent.prototype.onChange = function (_) { };\n    CKEditorComponent.prototype.onTouched = function () { };\n    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };\n    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };\n    CKEditorComponent.decorators = [\n        { type: core_1.Component, args: [{\n                    selector: 'ckeditor',\n                    providers: [\n                        {\n                            provide: forms_1.NG_VALUE_ACCESSOR,\n                            useExisting: core_1.forwardRef(function () { return CKEditorComponent; }),\n                            multi: true\n                        }\n                    ],\n                    template: \"<textarea #host></textarea>\",\n                },] },\n    ];\n    /** @nocollapse */\n    CKEditorComponent.ctorParameters = [\n        { type: core_1.NgZone, },\n    ];\n    CKEditorComponent.propDecorators = {\n        'config': [{ type: core_1.Input },],\n        'debounce': [{ type: core_1.Input },],\n        'change': [{ type: core_1.Output },],\n        'ready': [{ type: core_1.Output },],\n        'blur': [{ type: core_1.Output },],\n        'focus': [{ type: core_1.Output },],\n        'host': [{ type: core_1.ViewChild, args: ['host',] },],\n        'value': [{ type: core_1.Input },],\n    };\n    return CKEditorComponent;\n}());\nexports.CKEditorComponent = CKEditorComponent;\n//# sourceMappingURL=ckeditor.component.js.map//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9uZzItY2tlZGl0b3IvbGliL2NrZWRpdG9yLmNvbXBvbmVudC5qcz9jNTgyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gSW1wb3J0c1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBmb3Jtc18xID0gcmVxdWlyZSgnQGFuZ3VsYXIvZm9ybXMnKTtcbi8qKlxuICogQ0tFZGl0b3IgY29tcG9uZW50XG4gKiBVc2FnZSA6XG4gKiAgPGNrZWRpdG9yIFsobmdNb2RlbCldPVwiZGF0YVwiIFtjb25maWddPVwiey4uLn1cIiBkZWJvdW5jZT1cIjUwMFwiPjwvY2tlZGl0b3I+XG4gKi9cbnZhciBDS0VkaXRvckNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDS0VkaXRvckNvbXBvbmVudCh6b25lKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuYmx1ciA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuZm9jdXMgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnpvbmUgPSB6b25lO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ0tFZGl0b3JDb21wb25lbnQucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIDtcbiAgICAvKipcbiAgICAgKiBPbiBjb21wb25lbnQgZGVzdHJveVxuICAgICAqL1xuICAgIENLRWRpdG9yQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogT24gY29tcG9uZW50IHZpZXcgaW5pdFxuICAgICAqL1xuICAgIENLRWRpdG9yQ29tcG9uZW50LnByb3RvdHlwZS5uZ0FmdGVyVmlld0luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENvbmZpZ3VyYXRpb25cbiAgICAgICAgdGhpcy5ja2VkaXRvckluaXQodGhpcy5jb25maWcgfHwge30pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmFsdWUgdXBkYXRlIHByb2Nlc3NcbiAgICAgKi9cbiAgICBDS0VkaXRvckNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy56b25lLnJ1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgX3RoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ0tFZGl0b3IgaW5pdFxuICAgICAqL1xuICAgIENLRWRpdG9yQ29tcG9uZW50LnByb3RvdHlwZS5ja2VkaXRvckluaXQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghQ0tFRElUT1IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBpbmNsdWRlIENLRWRpdG9yIGluIHlvdXIgcGFnZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENLRWRpdG9yIHJlcGxhY2UgdGV4dGFyZWFcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcbiAgICAgICAgLy8gbGlzdGVuIGZvciBpbnN0YW5jZVJlYWR5IGV2ZW50XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBldnQgdG8gdGhlIEV2ZW50RW1pdHRlclxuICAgICAgICAgICAgX3RoaXMucmVhZHkuZW1pdChldnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ0tFZGl0b3IgY2hhbmdlIGV2ZW50XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuaW5zdGFuY2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VUaW1lb3V0KVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlSW50KF90aGlzLmRlYm91bmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDS0VkaXRvciBibHVyIGV2ZW50XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBfdGhpcy5ibHVyLmVtaXQoZXZ0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENLRWRpdG9yIGZvY3VzIGV2ZW50XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXMuZW1pdChldnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICAgKi9cbiAgICBDS0VkaXRvckNvbXBvbmVudC5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh2YWx1ZSk7XG4gICAgfTtcbiAgICBDS0VkaXRvckNvbXBvbmVudC5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgIENLRWRpdG9yQ29tcG9uZW50LnByb3RvdHlwZS5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgQ0tFZGl0b3JDb21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgIENLRWRpdG9yQ29tcG9uZW50LnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgIENLRWRpdG9yQ29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdja2VkaXRvcicsXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IGZvcm1zXzEuTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGNvcmVfMS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIENLRWRpdG9yQ29tcG9uZW50OyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8dGV4dGFyZWEgI2hvc3Q+PC90ZXh0YXJlYT5cIixcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIENLRWRpdG9yQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5OZ1pvbmUsIH0sXG4gICAgXTtcbiAgICBDS0VkaXRvckNvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgJ2NvbmZpZyc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICdkZWJvdW5jZSc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICdjaGFuZ2UnOiBbeyB0eXBlOiBjb3JlXzEuT3V0cHV0IH0sXSxcbiAgICAgICAgJ3JlYWR5JzogW3sgdHlwZTogY29yZV8xLk91dHB1dCB9LF0sXG4gICAgICAgICdibHVyJzogW3sgdHlwZTogY29yZV8xLk91dHB1dCB9LF0sXG4gICAgICAgICdmb2N1cyc6IFt7IHR5cGU6IGNvcmVfMS5PdXRwdXQgfSxdLFxuICAgICAgICAnaG9zdCc6IFt7IHR5cGU6IGNvcmVfMS5WaWV3Q2hpbGQsIGFyZ3M6IFsnaG9zdCcsXSB9LF0sXG4gICAgICAgICd2YWx1ZSc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgfTtcbiAgICByZXR1cm4gQ0tFZGl0b3JDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5DS0VkaXRvckNvbXBvbmVudCA9IENLRWRpdG9yQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2tlZGl0b3IuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZzItY2tlZGl0b3IvbGliL2NrZWRpdG9yLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 700:
/* unknown exports provided */
/*!**********************************************************************!*\
  !*** ./src/app/pages/editors/components/ckeditor/ckeditor.loader.ts ***!
  \**********************************************************************/
/***/ (function(module, exports) {

eval("window['CKEDITOR_BASEPATH'] = '/ckeditor/';\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2NvbXBvbmVudHMvY2tlZGl0b3IvY2tlZGl0b3IubG9hZGVyLnRzPzIwMWQiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93WydDS0VESVRPUl9CQVNFUEFUSCddID0gJy9ja2VkaXRvci8nO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL3NyYy9hcHAvcGFnZXMvZWRpdG9ycy9jb21wb25lbnRzL2NrZWRpdG9yL2NrZWRpdG9yLmxvYWRlci50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 701:
/* exports provided: routing */
/* exports used: routing */
/*!**************************************************!*\
  !*** ./src/app/pages/editors/editors.routing.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(/*! @angular/router */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editors_component__ = __webpack_require__(/*! ./editors.component */ 618);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ckeditor_ckeditor_component__ = __webpack_require__(/*! ./components/ckeditor/ckeditor.component */ 617);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return routing; });\n\r\n\r\n\r\n// noinspection TypeScriptValidateTypes\r\nvar routes = [\r\n    {\r\n        path: '',\r\n        component: __WEBPACK_IMPORTED_MODULE_1__editors_component__[\"a\" /* Editors */],\r\n        children: [\r\n            { path: 'ckeditor', component: __WEBPACK_IMPORTED_MODULE_2__components_ckeditor_ckeditor_component__[\"a\" /* Ckeditor */] }\r\n        ]\r\n    }\r\n];\r\nvar routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__[\"RouterModule\"].forChild(routes);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2VkaXRvcnMucm91dGluZy50cz85NGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBFZGl0b3JzIH0gZnJvbSAnLi9lZGl0b3JzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENrZWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudCc7XHJcblxyXG4vLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IEVkaXRvcnMsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6ICdja2VkaXRvcicsIGNvbXBvbmVudDogQ2tlZGl0b3IgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2VkaXRvcnMucm91dGluZy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 763:
/* unknown exports provided */
/*!********************************!*\
  !*** ./~/ckeditor/ckeditor.js ***!
  \********************************/
/***/ (function(module, exports) {


/***/ }),

/***/ 770:
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/ng2-ckeditor/lib/ckeditor.module.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar core_1 = __webpack_require__(/*! @angular/core */ 2);\nvar common_1 = __webpack_require__(/*! @angular/common */ 14);\nvar ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ 642);\n/**\n * CKEditorModule\n */\nvar CKEditorModule = (function () {\n    function CKEditorModule() {\n    }\n    CKEditorModule.decorators = [\n        { type: core_1.NgModule, args: [{\n                    imports: [\n                        common_1.CommonModule\n                    ],\n                    declarations: [\n                        ckeditor_component_1.CKEditorComponent,\n                    ],\n                    exports: [\n                        ckeditor_component_1.CKEditorComponent,\n                    ]\n                },] },\n    ];\n    /** @nocollapse */\n    CKEditorModule.ctorParameters = [];\n    return CKEditorModule;\n}());\nexports.CKEditorModule = CKEditorModule;\n//# sourceMappingURL=ckeditor.module.js.map//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9uZzItY2tlZGl0b3IvbGliL2NrZWRpdG9yLm1vZHVsZS5qcz9hN2Q0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbW1vbicpO1xudmFyIGNrZWRpdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9ja2VkaXRvci5jb21wb25lbnQnKTtcbi8qKlxuICogQ0tFZGl0b3JNb2R1bGVcbiAqL1xudmFyIENLRWRpdG9yTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDS0VkaXRvck1vZHVsZSgpIHtcbiAgICB9XG4gICAgQ0tFZGl0b3JNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbl8xLkNvbW1vbk1vZHVsZVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNrZWRpdG9yX2NvbXBvbmVudF8xLkNLRWRpdG9yQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBja2VkaXRvcl9jb21wb25lbnRfMS5DS0VkaXRvckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQ0tFZGl0b3JNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBbXTtcbiAgICByZXR1cm4gQ0tFZGl0b3JNb2R1bGU7XG59KCkpO1xuZXhwb3J0cy5DS0VkaXRvck1vZHVsZSA9IENLRWRpdG9yTW9kdWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2tlZGl0b3IubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZzItY2tlZGl0b3IvbGliL2NrZWRpdG9yLm1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 771:
/* unknown exports provided */
/* exports used: CKEditorModule */
/*!*************************************!*\
  !*** ./~/ng2-ckeditor/lib/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ckeditor_module_1 = __webpack_require__(/*! ./ckeditor.module */ 770);\nexports.CKEditorModule = ckeditor_module_1.CKEditorModule;\nvar ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ 642);\nexports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;\n//# sourceMappingURL=index.js.map//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9uZzItY2tlZGl0b3IvbGliL2luZGV4LmpzP2Q1M2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY2tlZGl0b3JfbW9kdWxlXzEgPSByZXF1aXJlKCcuL2NrZWRpdG9yLm1vZHVsZScpO1xuZXhwb3J0cy5DS0VkaXRvck1vZHVsZSA9IGNrZWRpdG9yX21vZHVsZV8xLkNLRWRpdG9yTW9kdWxlO1xudmFyIGNrZWRpdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9ja2VkaXRvci5jb21wb25lbnQnKTtcbmV4cG9ydHMuQ0tFZGl0b3JDb21wb25lbnQgPSBja2VkaXRvcl9jb21wb25lbnRfMS5DS0VkaXRvckNvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9uZzItY2tlZGl0b3IvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NzFcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 799:
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************************!*\
  !*** ./~/raw-loader!./~/sass-loader!./src/app/pages/editors/components/ckeditor/ckeditor.scss ***!
  \************************************************************************************************/
/***/ (function(module, exports) {

eval("module.exports = \".cke_source {\\n  color: #7d7d7d !important; }\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2NvbXBvbmVudHMvY2tlZGl0b3IvY2tlZGl0b3Iuc2Nzcz9kOWI1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIuY2tlX3NvdXJjZSB7XFxuICBjb2xvcjogIzdkN2Q3ZCAhaW1wb3J0YW50OyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmF3LWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvYXBwL3BhZ2VzL2VkaXRvcnMvY29tcG9uZW50cy9ja2VkaXRvci9ja2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OTlcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 825:
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/app/pages/editors/components/ckeditor/ckeditor.html ***!
  \*****************************************************************/
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\">\\r\\n  <div class=\\\"col-md-12\\\">\\r\\n    <ba-card title=\\\"ckeditor\\\" baCardClass=\\\"with-scroll\\\">\\r\\n      <ckeditor [(ngModel)]=\\\"ckeditorContent\\\" [config]=\\\"config\\\"></ckeditor>\\r\\n    </ba-card>\\r\\n  </div>\\r\\n</div>\\r\\n\"//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2NvbXBvbmVudHMvY2tlZGl0b3IvY2tlZGl0b3IuaHRtbD8wNjhjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgPGJhLWNhcmQgdGl0bGU9XFxcImNrZWRpdG9yXFxcIiBiYUNhcmRDbGFzcz1cXFwid2l0aC1zY3JvbGxcXFwiPlxcclxcbiAgICAgIDxja2VkaXRvciBbKG5nTW9kZWwpXT1cXFwiY2tlZGl0b3JDb250ZW50XFxcIiBbY29uZmlnXT1cXFwiY29uZmlnXFxcIj48L2NrZWRpdG9yPlxcclxcbiAgICA8L2JhLWNhcmQ+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2NvbXBvbmVudHMvY2tlZGl0b3IvY2tlZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gODI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 875:
/* unknown exports provided */
/*!**********************************************************************************!*\
  !*** ./~/style-loader!./src/app/pages/editors/components/ckeditor/ckeditor.scss ***!
  \**********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../../../~/raw-loader!../../../../../../~/sass-loader!./ckeditor.scss */ 799);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../../../../~/style-loader/addStyles.js */ 6)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../../../../../node_modules/raw-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./ckeditor.scss\", function() {\n\t\t\tvar newContent = require(\"!!../../../../../../node_modules/raw-loader/index.js!../../../../../../node_modules/sass-loader/index.js!./ckeditor.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODc1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3JzL2NvbXBvbmVudHMvY2tlZGl0b3IvY2tlZGl0b3Iuc2Nzcz9mMzg1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ja2VkaXRvci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2NrZWRpdG9yLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYXctbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2NrZWRpdG9yLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIhLi9zcmMvYXBwL3BhZ2VzL2VkaXRvcnMvY29tcG9uZW50cy9ja2VkaXRvci9ja2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NzVcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

});