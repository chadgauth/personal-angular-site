module.exports = { contents: "\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst core_1 = require(\"@angular/core\");\r\nlet AppComponent = class AppComponent {\r\n    constructor() {\r\n        this.name = 'Chad\\'s 2019';\r\n        this.subHeader = 'mother mary comforts me';\r\n        this.speakers = ['Chad Gauthier', 'Manuel Simmons'];\r\n    }\r\n};\r\nAppComponent = __decorate([\r\n    core_1.Component({\r\n        selector: 'app-root',\r\n        template: `\r\n        <h1>{{name}} site</h1>\r\n        <h2>{{subHeader}}</h2>\r\n        <ul>\r\n            <li *ngFor=\"let speaker of speakers\">{{speaker}}</li>\r\n        </ul>\r\n    `\r\n    })\r\n], AppComponent);\r\nexports.AppComponent = AppComponent;\r\n",
dependencies: ["@angular/core"],
sourceMap: {},
headerContent: undefined,
mtime: 1567453653189,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
