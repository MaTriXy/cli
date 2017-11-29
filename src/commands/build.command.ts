import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class BuildCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(folders: string[], rootFolder: string) {
        this.log('build').info('Build all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            libs.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processLib(folder: string, rootFolder: string) {
        this.log('build').info('Build lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            lib.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApps(folders: string[], rootFolder: string) {
        this.log('build').info('Build all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            apps.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApp(folder: string, rootFolder: string) {
        this.log('build').info('Build app ' + this.options.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            app.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
}