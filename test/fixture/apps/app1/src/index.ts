import { TestApp1RuI18n } from './i18n/ru.i18n';
export { TestApp1RuI18n } from './i18n/ru.i18n';
import { Model3 } from './shared/models/model3.model';
export { Model3 } from './shared/models/model3.model';
import { Service3Service } from './shared/services/service3.service';
export { Service3Service } from './shared/services/service3.service';
export const TestApp1Modules: any[] = [];
export const TestApp1Components: any[] = [];
export const TestApp1Shareds: any[] = [TestApp1RuI18n, Model3];
export const TestApp1Services: any[] = [Service3Service];
export const TestApp1Pipes: any[] = [];