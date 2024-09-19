import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTanstackQuery } from '@kubb/swagger-tanstack-query'
import { pluginTs } from '@kubb/swagger-ts'

export default defineConfig({
  root: '.',
  input: {
    path: './openapi.yml',
  },
  output: {
    path: './src/gen-kubb',
  },
  plugins: [
    pluginOas({}),
    pluginTs({}),
    pluginTanstackQuery({}),
  ],
})
