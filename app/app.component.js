"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Mega Man Bosses';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"row\">\n            <div class=\"large-6 column\">\n                <nav>\n                     <a routerLink=\"/dashboard\">Dashboard</a>\n                     <a routerLink=\"/heroes\">Heroes</a>\n                 </nav>\n              <router-outlet></router-outlet>\n            </div>\n        </div>\n\t",
            styles: ["\n        nav {\n            margin-top: 15px;\n            margin-bottom: 15px;\n        }\n        nav a {\n            padding: 6px 12px;\n            margin-right: 15px;\n            background-color: #eaeaea;\n            border-radius: 4px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map