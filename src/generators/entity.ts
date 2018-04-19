import * as inflection from 'inflection';
import * as _ from 'lodash';
import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';


export class EntityGenerator extends Base {

    name = 'entity';

    constructor(public rootFolder?: string) {
        super(null, rootFolder);
    }
    async proccess(customOptions?: {
        entityName: string,
        project: Project,
        appName: string,
        pkField: string,
        fields: string,
        dateFields: string,
        coreLib: string,
        platformLib: string,
        appFolder: string,
        coreFolder: string,
        platformFolder: string,
        template: string
    }) {
        let rootFolder = path.resolve(this.rootFolder);
        let entityName = '';
        let appName =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].name) ?
                customOptions && customOptions.project.appsConfigs[0].name : 'app';
        let appFolder =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].localPath) ?
                customOptions && customOptions.project.appsConfigs[0].localPath : 'app';
        let coreLib =
            (customOptions && customOptions.project.libsConfigs[0] && customOptions &&
                customOptions.project.libsConfigs[0].shortName) ?
                customOptions && customOptions.project.libsConfigs[0].shortName : 'core';
        let platformLib =
            (customOptions && customOptions.project.libsConfigs[1] && customOptions &&
                customOptions.project.libsConfigs[1].shortName) ?
                customOptions && customOptions.project.libsConfigs[1].shortName : 'web';
        let coreData =
            (customOptions && customOptions.project.libsConfigs[0]) ?
                customOptions && customOptions.project.libsConfigs[0] : {};
        let platformData =
            (customOptions && customOptions.project.libsConfigs[1]) ?
                customOptions && customOptions.project.libsConfigs[1] : {};
        let coreFolder =
            (customOptions && customOptions.project.libsConfigs[0] && customOptions &&
                customOptions.project.libsConfigs[0].localPath) ?
                customOptions && customOptions.project.libsConfigs[0].localPath : 'core';
        let platformFolder =
            (customOptions && customOptions.project.libsConfigs[1] && customOptions &&
                customOptions.project.libsConfigs[1].localPath) ?
                customOptions && customOptions.project.libsConfigs[1].localPath : 'web';
        let template: string = 'web-entity';
        let pkField: string = 'id';
        let fields: string[] = [
            'name',
            'title',
            'createdAt',
            'updatedAt'
        ];
        let dateFields: string[] = [
            'createdAt',
            'updatedAt'
        ];
        if (customOptions && customOptions.template) {
            template = customOptions.template;
        }
        if (customOptions && customOptions.entityName) {
            entityName = customOptions.entityName;
        }
        if (customOptions && customOptions.appName) {
            appName = customOptions.appName;
        }
        if (customOptions && customOptions.appFolder) {
            appFolder = customOptions.appFolder;
        }
        if (customOptions && customOptions.coreLib) {
            coreLib = customOptions.coreLib;
        }
        if (customOptions && customOptions.platformLib) {
            platformLib = customOptions.platformLib;
        }/*
        if (customOptions && customOptions.coreData) {
            coreData = customOptions.coreData;
        }
        if (customOptions && customOptions.platformData) {
            platformData = customOptions.platformData;
        }*/
        if (customOptions && customOptions.coreFolder) {
            coreFolder = customOptions.coreFolder;
        }
        if (customOptions && customOptions.platformFolder) {
            platformFolder = customOptions.platformFolder;
        }
        if (customOptions && customOptions.pkField) {
            pkField = customOptions.pkField;
        }
        if (customOptions && customOptions.fields) {
            fields = customOptions.fields.split(',').map(word => _.trim(word, '\'\"').trim());
        }
        if (customOptions && customOptions.dateFields) {
            dateFields = customOptions.dateFields.split(',').map(word => _.trim(word, '\'\"').trim());
        }
        const options = _.merge(
            {
                'app': {
                    'name': _.kebabCase(appName),
                    'classPrefix': _.upperFirst(_.camelCase(appName)),
                    'title': _.upperFirst(_.words(appName).join(' '))
                },
                'libs': {
                    'core': coreLib,
                    'platform': platformLib,
                    'coreData': coreData,
                    'platformData': platformData,
                    'coreFolder': coreFolder,
                    'platformFolder': platformFolder
                },
                'entity': {
                    'list': {
                        'name': {
                            'kebab': _.kebabCase(inflection.pluralize(entityName)),
                            'camel': _.upperFirst(_.camelCase(inflection.pluralize(entityName))),
                            'lower': {
                                'camel': _.camelCase(inflection.pluralize(entityName))
                            },
                            'caption': _.upperFirst(_.words(inflection.pluralize(entityName)).join(' ')),
                            'snake': _.snakeCase(inflection.pluralize(entityName))
                        }
                    },
                    'name': {
                        'kebab': _.kebabCase(entityName),
                        'camel': _.upperFirst(_.camelCase(entityName)),
                        'lower': {
                            'camel': _.camelCase(entityName)
                        },
                        'caption': _.upperFirst(_.words(entityName).join(' ')),
                        'snake': _.snakeCase(entityName)
                    },
                    'item': {
                        'name': {
                            'caption': _.words(entityName).join(' ').toLowerCase()
                        }
                    },
                    'table': {
                        'fields': {
                            'names': fields,
                            'dates': dateFields
                        },
                        'pk': {
                            'name': pkField
                        }
                    }
                }
            }
        );
        return await this.srcgen(
            rootFolder,
            'generatorEntity',
            template,
            options,
            rootFolder
        );
    }
}