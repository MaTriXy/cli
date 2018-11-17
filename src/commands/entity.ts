import { Command, flags } from '@oclif/command';
import { readFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { AngularEntity } from './angular-entity';
import { NestJSEntity } from './nestjs-entity';

export class Entity extends Command {
  static description = 'generate backend dto, entity, service and controller for NestJS backend and generate frontend model, service, grid, lookup input, modal for edit row in grid, modal for select items from grid with items for Angular 6+ application based on Rucken template';
  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'entity singular name on ke-bab case', required: true }),
    fields: flags.string({ char: 'f', description: 'entity fields', default: '[name]' }),
    username: flags.string({ char: 'u', description: 'username' }),
    email: flags.string({ char: 'e', description: 'email' }),
    app: flags.string({ char: 'a', description: 'application name in angular.json and .nestcli.json' }),
    core: flags.string({ char: 'c', description: 'core library name in angular.json and .nestcli.json' }),
    web: flags.string({ char: 'w', description: 'web library name in angular.json' }),
    time: flags.string({ description: 'timestamp for create migration (default: current datetime)' })
  };
  static args = [{ name: 'folder' }];
  async run() {
    const { args, flags } = this.parse(Entity);
    const folder = args.folder;
    const frontendFolder = args.folder + '/frontend';
    const name = flags.name;
    const fields = flags.fields;
    const username = flags.username;
    const email = flags.email;
    const app = flags.app;
    const core = flags.core;
    const web = flags.web;
    const time = flags.time;
    const errorMessage = 'Before create entity, you must create project: rucken new -n demo -u demo -e demo@demo.demo';
    let templateBackend = '';
    let templateFrontend = '';

    try {
      const ruckenJsonFile = resolvePath(folder, 'rucken.json');
      const ruckenJson: any = JSON.parse(readFileSync(ruckenJsonFile, 'utf8').toString());
      if (
        !ruckenJson.backend ||
        !ruckenJson.frontend
      ) {
        console.error(errorMessage);
        return Promise.resolve();
      }
      if (ruckenJson.backend === 'nestjs') {
        ruckenJson.backend = '@rucken/schematics:nestjs';
      }
      if (ruckenJson.frontend === 'angular') {
        ruckenJson.frontend = '@rucken/schematics:angular';
      }
      templateBackend = ruckenJson.backend + '-entity';
      templateFrontend = ruckenJson.frontend + '-entity';
      // tslint:disable-next-line:no-unused
    } catch (error) {
      console.error(errorMessage);
      return Promise.resolve();
    }

    try {
      await this.runNestJSEntity(
        templateBackend,
        folder,
        name,
        fields,
        username,
        email,
        app,
        core,
        time
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.runAngularEntity(
        templateFrontend,
        frontendFolder,
        name,
        fields,
        username,
        email,
        app,
        core,
        web
      );
    } catch (error) {
      console.error(error);
    }
  }
  private runNestJSEntity(
    templateBackend: string,
    folder: string,
    name: string,
    fields?: string,
    username?: string,
    email?: string,
    app?: string,
    core?: string,
    time?: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const args = [folder, '--name', name, '--template', templateBackend];
        if (fields) {
          args.push('--fields');
          args.push(fields);
        }
        if (username) {
          args.push('--username');
          args.push(username);
        }
        if (email) {
          args.push('--email');
          args.push(email);
        }
        if (app) {
          args.push('--app');
          args.push(app);
        }
        if (core) {
          args.push('--core');
          args.push(core);
        }
        if (time) {
          args.push('--time');
          args.push(time);
        }
        await NestJSEntity.run(args);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  private runAngularEntity(
    templateFrontend: string,
    folder: string,
    name: string,
    fields?: string,
    username?: string,
    email?: string,
    app?: string,
    core?: string,
    web?: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const args = [folder, '--name', name, '--template', templateFrontend];
        if (fields) {
          args.push('--fields');
          args.push(fields);
        }
        if (username) {
          args.push('--username');
          args.push(username);
        }
        if (email) {
          args.push('--email');
          args.push(email);
        }
        if (app) {
          args.push('--app');
          args.push(app);
        }
        if (core) {
          args.push('--core');
          args.push(core);
        }
        if (web) {
          args.push('--web');
          args.push(web);
        }
        await AngularEntity.run(args);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}