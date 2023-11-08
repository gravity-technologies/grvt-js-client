export interface IConfig {
    version: 'v1';
    host: string;
}
export declare const validConfig: (config: IConfig) => IConfig;
