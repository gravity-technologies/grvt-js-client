export * from './schema-maps'

export class Utils {
  /**
   * Maps a payload from a lite schema to a full schema or vice versa.
   */
  static schemaMap (payload: any = {}, schemaMaps: Record<string, string> = {}) {
    const result: Record<string, any> = {}

    for (const [key, value] of Object.entries(payload)) {
      const _key = schemaMaps[key] || key

      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          result[_key] = value.map((item) => Utils.schemaMap(item, schemaMaps))
        } else {
          result[_key] = Utils.schemaMap(value, schemaMaps)
        }
      } else {
        result[_key] = value
      }
    }

    return result
  }
}
