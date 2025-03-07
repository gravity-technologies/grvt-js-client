export interface IConfig {
  // version: `v${number}`
  host: string
}

export const validConfig = (config: IConfig) => {
  if (!config?.host) {
    throw new Error('API requires a host')
  }

  config.host = config.host.endsWith('/')
    ? config.host.slice(0, -1)
    : config.host

  return {
    ...config,
    version: 'v1'
  }
}
