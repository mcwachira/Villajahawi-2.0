import { type SchemaTypeDefinition } from 'sanity'

import blockContent from '@/src/schemaTypes/blockContent'
import category from '@/src/schemaTypes/category'
import post from '@/src/schemaTypes/post'
import author from '@/src/schemaTypes/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
}
