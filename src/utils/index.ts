import { type SchemaMap } from '../interfaces'

export * from './json.utils'

export class Utils {
  static jsonReplacerBigInt (key: string, value: any) {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  }

  static jsonReviverBigInt (key: string, value: any) {
    if (typeof value === 'string' && (/^\d+$/.test(value) || /^0x[0-9a-fA-F]+$/.test(value))) {
      return BigInt(value)
    }
    return value
  }

  static coverBigInt (field: string, value: any) {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  }

  static timeout<T = any>(promise: Promise<T>, ms?: number, error?: Error) {
    return Promise.race([
      promise,
      new Promise((resolve, reject) => setTimeout(() => { reject(error) }, ms))
    ]) as Promise<T>
  }

  /**
   * Maps a payload from a lite schema to a full schema or vice versa.
   */
  static schemaMap (payload: any = {}, schemaMaps: SchemaMap | SchemaMap[] = {}, isFullToLite = false): any {
    if (!payload || typeof payload !== 'object') {
      return payload
    }

    const _schemaMaps = (schemaMaps as SchemaMap[])?.[0] || schemaMaps

    if (Array.isArray(payload)) {
      return payload.map((item) => Utils.schemaMap(item, _schemaMaps, isFullToLite))
    }

    const result: Record<string, any> = {}

    for (const [key, value] of Object.entries(payload)) {
      const [_key, schemaMap] = (
        Array.isArray(_schemaMaps[key])
          ? _schemaMaps[key]
          : [_schemaMaps[key]]
      ) as [string, SchemaMap]
      // now only covert bigint hex for non array
      result[_key] = Utils.schemaMap(
        isFullToLite
          ? Utils.coverBigInt(key, value)
          : value,
        schemaMap,
        isFullToLite
      )
    }

    return result
  }
}
