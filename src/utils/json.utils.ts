export class JsonUtils {
  static parse <T = any>(text?: string | null, reviver?: Parameters<typeof JSON.parse>[1], _default?: T): T {
    try {
      return text
        ? JSON.parse(text, reviver) as T
        : _default as T
    } catch (error) {
      console.warn('JsonUtils.parse error', { text, error })
      return _default as T
    }
  }
}
