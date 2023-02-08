import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/app.ts'],
    target: 'node16',
    sourcemap: true,
    replaceNodeEnv: true,
})
