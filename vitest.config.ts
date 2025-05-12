import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    // any custom Vitest config you require
    test: {
        environment: 'nuxt',
        environmentOptions: {
            nuxt: {
                rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
                domEnvironment: 'happy-dom', // 'happy-dom' (default)
                overrides: {
                    // other Nuxt config you want to pass
                }
            },
            mock: {
                intersectionObserver: true,
                indexedDb: true,
            }
        }
    }
})
