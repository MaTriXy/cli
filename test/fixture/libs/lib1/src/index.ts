import { TestLib1RuI18n } from './i18n/ru.i18n';
export { TestLib1RuI18n } from './i18n/ru.i18n';
import { Service1Service } from './shared/services/service1.service';
export { Service1Service } from './shared/services/service1.service';
import { Model1 } from './shared/models/model1.model';
export { Model1 } from './shared/models/model1.model';
export const TestLib1Modules: any[] = [];
export const TestLib1Components: any[] = [];
export const TestLib1Shareds: any[] = [TestLib1RuI18n, Model1];
export const TestLib1Services: any[] = [Service1Service];
export const TestLib1Pipes: any[] = [];