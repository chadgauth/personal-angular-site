import 'zone.js/dist/zone';
import 'core-js/proposals/reflect-metadata';
import { AppServerModule } from './src/app/app-server.module';

import { renderModule } from '@angular/platform-server';
import * as fs from 'fs';

renderModule(AppServerModule, {
    document: fs.readFileSync('src/index.html').toString()
}).then(result => {
    fs.writeFileSync('dist/index.html', result);
})