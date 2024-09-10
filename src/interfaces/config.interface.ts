export interface IConfig {
  version: `v${number | string}`
  host: string
}

export const validConfig = (config: IConfig) => {
  if (config?.version !== 'v1') {
    throw new Error('API only supports v1')
  }

  if (!config?.host) {
    throw new Error('API requires a host')
  }

  config.host = config.host.endsWith('/')
    ? config.host.slice(0, -1)
    : config.host

  return config
}
