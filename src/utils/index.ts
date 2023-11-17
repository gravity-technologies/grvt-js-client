export * from './schema-maps'

interface SchemaMap {
  [key: string]: string | Array<string | SchemaMap>
}

export class Utils {
  static timeout<T = any>(promise: Promise<T>, ms?: number, error?: Error) {
    return Promise.race([
      promise,
      new Promise((resolve, reject) => setTimeout(() => { reject(error) }, ms))
    ]) as Promise<T>
  }

  /**
   * Maps a payload from a lite schema to a full schema or vice versa.
   */
  static schemaMap (payload: any = {}, schemaMaps: SchemaMap = {}): any {
    if (typeof payload !== 'object') {
      return payload
    }

    if (Array.isArray(payload)) {
      return payload.map((item) => Utils.schemaMap(item, schemaMaps))
    }

    const result: Record<string, any> = {}

    for (const [key, value] of Object.entries(payload)) {
      const [_key, schemaMap] = (
        Array.isArray(schemaMaps[key])
          ? schemaMaps[key]
          : [schemaMaps[key]]
      ) as [string, SchemaMap]
      result[_key] = Utils.schemaMap(value, schemaMap)
    }

    return result
  }
}
