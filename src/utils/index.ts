export * from './schema-maps'

export class Utils {
  /**
   * Maps a payload from a lite schema to a full schema or vice versa.
   */
  static schemaMap (payload: any = {}, schemaMaps: Record<string, string> = {}): any {
    if (typeof payload !== 'object') {
      return payload
    }

    if (Array.isArray(payload)) {
      return payload.map((item) => Utils.schemaMap(item, schemaMaps))
    }

    const result: Record<string, any> = {}

    for (const [key, value] of Object.entries(payload)) {
      const _key = schemaMaps[key] || key
      result[_key] = Utils.schemaMap(value, schemaMaps)
    }

    return result
  }
}
