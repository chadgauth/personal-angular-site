module.exports = { contents: "\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst app_component_1 = require(\"./app.component\");\r\nconst core_1 = require(\"@angular/core\");\r\nconst platform_browser_1 = require(\"@angular/platform-browser\");\r\nlet AppModule = class AppModule {\r\n};\r\nAppModule = __decorate([\r\n    core_1.NgModule({\r\n        declarations: [app_component_1.AppComponent],\r\n        imports: [platform_browser_1.BrowserModule.withServerTransition({ appId: 'chad' })],\r\n        bootstrap: [app_component_1.AppComponent],\r\n    })\r\n], AppModule);\r\nexports.AppModule = AppModule;\r\n",
dependencies: ["./app.component","@angular/core","@angular/platform-browser"],
sourceMap: {},
headerContent: undefined,
mtime: 1567454106521,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
