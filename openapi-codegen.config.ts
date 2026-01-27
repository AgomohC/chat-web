import {
  generateSchemaTypes,
  generateReactQueryComponents
} from "@openapi-codegen/typescript"
import { defineConfig } from "@openapi-codegen/cli"
export default defineConfig({
  neurachat: {
    from: {
      relativePath: "./core/api-config/openapi.json",
      source: "file"
    },
    outputDir: "./core/api-client",
    to: async (context) => {
      const filenamePrefix = "neurachat"
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix
      })
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles
      })
    }
  }
})
