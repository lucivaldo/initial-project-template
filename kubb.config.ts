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
    clean: true,
  },
  plugins: [
    pluginOas({}),
    pluginTs({}),
    pluginTanstackQuery({
      mutate: {
        methods: ['get', 'post', 'put', 'patch', 'delete'],
        variablesType: 'mutate',
      },
    }),
  ],
})
