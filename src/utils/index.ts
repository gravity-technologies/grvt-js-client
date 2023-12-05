import { HexStringMap, type SchemaMap } from '../interfaces'

export class Utils {
  static coverBigInt (field: string, value: any) {
    if (typeof value === 'bigint') {
      return HexStringMap.includes(field)
        ? `0x${value.toString(16)}`
        : value.toString()
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
    if (typeof payload !== 'object') {
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
