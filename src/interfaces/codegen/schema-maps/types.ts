export interface SchemaMap {
  [key: string]: string | Array<string | SchemaMap | SchemaMap[] | SchemaMap[][]>
}

export interface SchemaPairMap {
  FULL_TO_LITE: SchemaMap
  LITE_TO_FULL: SchemaMap
}
