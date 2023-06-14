// Tests that are currently enabled with Turbopack in CI.
// Only tests that are actively testing against Turbopack should
// be enabled here
const enabledTests = [
  // [NOTE]: ref: https://github.com/vercel/next.js/pull/51186#pullrequestreview-1479976003
  // these tests are testing against prod, which doesn't uses turbopack.
  // Enable once we have --build support
  //
  //'test/integration/prerender-invalid-catchall-params/test/index.test.js',
  //'test/integration/prerender-legacy/test/index.test.js',
  //'test/integration/prerender-no-revalidate/test/index.test.js',
  //'test/integration/production-browser-sourcemaps/test/index.test.js',
  //'test/integration/production-nav/test/index.test.js',
  //'test/integration/query-with-encoding/test/index.test.js',
  //'test/integration/react-profiling-mode/test/index.test.js',

  'test/development/acceptance-app/ReactRefreshLogBoxMisc.test.ts',
  'test/development/acceptance-app/ReactRefreshRequire.test.ts',
  'test/development/acceptance-app/dynamic-error.test.ts',
  // 'test/development/acceptance/ReactRefresh.test.ts',
  'test/development/acceptance/ReactRefreshLogBox-scss.test.ts',
  'test/development/acceptance/ReactRefreshLogBoxMisc.test.ts',
  'test/development/api-cors-with-rewrite/index.test.ts',
  'test/development/app-dir/multiple-compiles-single-route/multiple-compiles-single-route.test.ts',
  'test/development/app-hmr/hmr.test.ts',
  'test/development/basic/define-class-fields.test.ts',
  'test/development/basic/emotion-swc.test.ts',
  'test/development/basic/legacy-decorators.test.ts',
  'test/development/basic/tailwind-jit.test.ts',
  'test/development/basic/theme-ui.test.ts',
  'test/development/dotenv-default-expansion/index.test.ts',
  'test/development/jsconfig-path-reloading/index.test.ts',
  'test/development/middleware-warnings/index.test.ts',
  'test/development/project-directory-with-styled-jsx-suffix/index.test.ts',
  'test/development/repeated-dev-edits/repeated-dev-edits.test.ts',
  'test/development/tsconfig-path-reloading/index.test.ts',
  'test/e2e/app-dir/_allow-underscored-root-directory/_allow-underscored-root-directory.test.ts',
  'test/e2e/app-dir/actions/app-action-export.test.ts',
  'test/e2e/app-dir/app-alias/app-alias.test.ts',
  'test/e2e/app-dir/app-client-cache/client-cache.test.ts',
  'test/e2e/app-dir/app-css-pageextensions/index.test.ts',
  'test/e2e/app-dir/app-external/app-external.test.ts',
  'test/e2e/app-dir/app-prefetch/prefetching.test.ts',
  'test/e2e/app-dir/app-validation/validation.test.ts',
  'test/e2e/app-dir/app/standalone.test.ts',
  'test/e2e/app-dir/app/useReportWebVitals.test.ts',
  'test/e2e/app-dir/app/vercel-speed-insights.test.ts',
  'test/e2e/app-dir/asset-prefix/asset-prefix.test.ts',
  'test/e2e/app-dir/async-component-preload/async-component-preload.test.ts',
  'test/e2e/app-dir/autoscroll-with-css-modules/index.test.ts',
  'test/e2e/app-dir/back-button-download-bug/back-button-download-bug.test.ts',
  'test/e2e/app-dir/dynamic/dynamic.test.ts',
  'test/e2e/app-dir/global-error/global-error.test.ts',
  'test/e2e/app-dir/import/import.test.ts',
  'test/e2e/app-dir/interpolability-with-pages/navigation.test.ts',
  'test/e2e/app-dir/layout-params/layout-params.test.ts',
  'test/e2e/app-dir/metadata-missing-metadata-base/index.test.ts',
  'test/e2e/app-dir/metadata-suspense/index.test.ts',
  'test/e2e/app-dir/navigation/navigation.test.ts',
  'test/e2e/app-dir/not-found/not-found.test.ts',
  'test/e2e/app-dir/rewrites-redirects/rewrites-redirects.test.ts',
  'test/e2e/app-dir/route-page-manifest-bug/route-page-manifest-bug.test.ts',
  'test/e2e/app-dir/router-autoscroll/router-autoscroll.test.ts',
  'test/e2e/app-dir/router-stuck-dynamic-static-segment/router-stuck-dynamic-static-segment.test.ts',
  'test/e2e/app-dir/rsc-basic/rsc-basic.test.ts',
  'test/e2e/app-dir/search-params-react-key/layout-params.test.ts',
  'test/e2e/app-dir/searchparams-static-bailout/searchparams-static-bailout.test.ts',
  'test/e2e/app-dir/similar-pages-paths/similar-pages-paths.test.ts',
  'test/e2e/app-dir/test-template/{{ toFileName name }}/{{ toFileName name }}.test.ts',
  'test/e2e/app-dir/underscore-ignore-app-paths/underscore-ignore-app-paths.test.ts',
  'test/e2e/app-dir/use-params/use-params.test.ts',
  'test/e2e/app-dir/use-selected-layout-segment-s/use-selected-layout-segment-s.test.ts',
  'test/e2e/browserslist-extends/index.test.ts',
  'test/e2e/config-promise-export/async-function.test.ts',
  'test/e2e/config-promise-export/promise.test.ts',
  'test/e2e/disable-js-preload/test/index.test.js',
  'test/e2e/dynamic-route-interpolation/index.test.ts',
  'test/e2e/edge-api-endpoints-can-receive-body/index.test.ts',
  'test/e2e/edge-async-local-storage/index.test.ts',
  'test/e2e/edge-compiler-module-exports-preference/index.test.ts',
  'test/e2e/edge-runtime-uses-edge-light-import-specifier-for-packages/edge-runtime-uses-edge-light-import-specifier-for-packages.test.ts',
  'test/e2e/handle-non-hoisted-swc-helpers/index.test.ts',
  'test/e2e/ignore-invalid-popstateevent/without-i18n.test.ts',
  'test/e2e/link-with-api-rewrite/index.test.ts',
  'test/e2e/middleware-base-path/test/index.test.ts',
  'test/e2e/middleware-general/test/index.test.ts',
  'test/e2e/middleware-responses/test/index.test.ts',
  'test/e2e/middleware-shallow-link/index.test.ts',
  'test/e2e/multi-zone/multi-zone.test.ts',
  'test/e2e/new-link-behavior/child-a-tag-error.test.ts',
  'test/e2e/new-link-behavior/index.test.ts',
  'test/e2e/new-link-behavior/material-ui.test.ts',
  'test/e2e/new-link-behavior/stitches.test.ts',
  'test/e2e/new-link-behavior/typescript.test.ts',
  'test/e2e/next-image-forward-ref/index.test.ts',
  'test/e2e/no-eslint-warn-with-no-eslint-config/index.test.ts',
  'test/e2e/nonce-head-manager/index.test.ts',
  'test/e2e/optimized-loading/test/index.test.ts',
  'test/e2e/postcss-config-cjs/index.test.ts',
  'test/e2e/prerender-native-module.test.ts',
  'test/e2e/proxy-request-with-middleware/test/index.test.ts',
  'test/e2e/repeated-forward-slashes-error/repeated-forward-slashes-error.test.ts',
  'test/e2e/ssr-react-context/index.test.ts',
  'test/e2e/styled-jsx/index.test.ts',
  'test/e2e/test-utils-tests/basic/basic.test.ts',
  'test/e2e/trailingslash-with-rewrite/index.test.ts',
  'test/e2e/transpile-packages/index.test.ts',
  'test/e2e/type-module-interop/index.test.ts',
  'test/e2e/undici-fetch/index.test.ts',
  'test/e2e/yarn-pnp/test/with-eslint.test.ts',
  'test/e2e/yarn-pnp/test/with-mdx.test.ts',
  'test/e2e/yarn-pnp/test/with-next-sass.test.ts',
  'test/integration/404-page-app/test/index.test.js',
  'test/integration/404-page-custom-error/test/index.test.js',
  'test/integration/404-page-ssg/test/index.test.js',
  'test/integration/absolute-assetprefix/test/index.test.js',
  'test/integration/amp-export-validation/test/index.test.js',
  'test/integration/amphtml-custom-optimizer/test/index.test.js',
  'test/integration/amphtml-custom-validator/test/index.test.js',
  'test/integration/amphtml-fragment-style/test/index.test.js',
  'test/integration/api-body-parser/test/index.test.js',
  'test/integration/api-catch-all/test/index.test.js',
  'test/integration/app-aspath/test/index.test.js',
  'test/integration/app-dir-export/test/config.test.ts',
  'test/integration/app-dir-export/test/dynamicapiroute-prod.test.ts',
  'test/integration/app-dir-export/test/dynamicpage-prod.test.ts',
  'test/integration/app-dir-export/test/start.test.ts',
  'test/integration/app-dir-export/test/trailing-slash-start.test.ts',
  'test/integration/app-document-style-fragment/test/index.test.js',
  'test/integration/app-dynamic-error/test/index.test.ts',
  'test/integration/app-functional/test/index.test.js',
  'test/integration/app-tree/test/index.test.js',
  'test/integration/app-types/app-types.test.js',
  // TODO: should babel be tested with turbopack?
  'test/integration/babel-custom/test/index.test.js',
  'test/integration/bigint/test/index.test.js',
  'test/integration/catches-missing-getStaticProps/test/index.test.js',
  'test/integration/chunking/test/index.test.js',
  'test/integration/client-404/test/index.test.js',
  'test/integration/client-navigation-a11y/test/index.test.js',
  'test/integration/client-shallow-routing/test/index.test.js',
  'test/integration/config-experimental-warning/test/index.test.js',
  'test/integration/config-promise-error/test/index.test.js',
  'test/integration/config-resolve-alias/test/index.test.js',
  'test/integration/css-customization/test/index.test.js',
  'test/integration/css-features/test/index.test.js',
  'test/integration/css-minify/test/index.test.js',
  'test/integration/custom-error-page-exception/test/index.test.js',
  'test/integration/dedupes-scripts/test/index.test.js',
  'test/integration/development-hmr-refresh/test/index.test.js',
  'test/integration/disable-js/test/index.test.js',
  'test/integration/document-file-dependencies/test/index.test.js',
  'test/integration/document-head-warnings/test/index.test.js',
  'test/integration/duplicate-pages/test/index.test.js',
  'test/integration/dynamic-require/test/index.test.js',
  'test/integration/dynamic-route-rename/test/index.test.js',
  'test/integration/empty-object-getInitialProps/test/index.test.js',
  'test/integration/error-in-error/test/index.test.js',
  'test/integration/error-load-fail/test/index.test.js',
  'test/integration/error-plugin-stack-overflow/test/index.test.js',
  'test/integration/errors-on-output-to-public/test/index.test.js',
  'test/integration/errors-on-output-to-static/test/index.test.js',
  'test/integration/eslint/test/index.test.js',
  'test/integration/externalize-next-server/test/index.test.js',
  'test/integration/externals-esm-loose/test/index.test.js',
  'test/integration/externals-esm/test/index.test.js',
  'test/integration/fallback-modules/test/index.test.js',
  'test/integration/fetch-polyfill-ky-universal/test/index.test.js',
  'test/integration/fetch-polyfill/test/index.test.js',
  'test/integration/filesystempublicroutes/test/index.test.js',
  'test/integration/firebase-grpc/test/index.test.js',
  'test/integration/font-optimization/test/index.test.js',
  'test/integration/future/test/index.test.js',
  'test/integration/getserversideprops-export-error/test/index.test.js',
  'test/integration/gip-identifier/test/index.test.js',
  'test/integration/gsp-build-errors/test/index.test.js',
  'test/integration/gsp-extension/test/index.test.js',
  'test/integration/gssp-pageProps-merge/test/index.test.js',
  'test/integration/handles-export-errors/test/index.test.js',
  'test/integration/hashbang/test/index.test.js',
  'test/integration/hydrate-then-render/test/index.test.js',
  'test/integration/hydration/test/index.test.js',
  'test/integration/image-generation/test/index.test.ts',
  'test/integration/image-optimizer/test/old-sharp.test.ts',
  'test/integration/index-index/test/index.test.js',
  'test/integration/initial-ref/test/index.test.js',
  'test/integration/invalid-config-values/test/index.test.js',
  'test/integration/invalid-document-image-import/test/index.test.js',
  'test/integration/invalid-href/test/index.test.js',
  'test/integration/invalid-page-automatic-static-optimization/test/index.test.js',
  'test/integration/invalid-revalidate-values/test/index.test.js',
  'test/integration/invalid-server-options/test/index.test.js',
  'test/integration/jsconfig-empty/test/index.test.js',
  'test/integration/jsconfig/test/index.test.js',
  'test/integration/json-serialize-original-error/test/index.test.js',
  'test/integration/legacy-ssg-methods-error/test/index.test.js',
  'test/integration/link-ref/test/index.test.js',
  'test/integration/link-with-multiple-child/test/index.test.js',
  'test/integration/link-without-router/test/index.test.js',
  'test/integration/middleware-overrides-node.js-api/test/index.test.ts',
  'test/integration/middleware-prefetch/tests/index.test.js',
  'test/integration/middleware-src/test/index.test.js',
  'test/integration/missing-document-component-error/test/index.test.js',
  'test/integration/mixed-ssg-serverprops-error/test/index.test.js',
  'test/integration/next-dynamic/test/index.test.js',
  'test/integration/next-image-legacy/basic/test/index.test.ts',
  'test/integration/next-image-legacy/custom-resolver/test/index.test.ts',
  'test/integration/next-image-legacy/default/test/static.test.ts',
  'test/integration/next-image-legacy/no-intersection-observer-fallback/test/index.test.ts',
  'test/integration/next-image-legacy/noscript/test/index.test.ts',
  'test/integration/next-image-legacy/react-virtualized/test/index.test.ts',
  'test/integration/next-image-new/react-virtualized/test/index.test.ts',
  'test/integration/no-op-export/test/index.test.js',
  'test/integration/no-page-props/test/index.test.js',
  'test/integration/non-next-dist-exclude/test/index.test.js',
  'test/integration/non-standard-node-env-warning/test/index.test.js',
  'test/integration/not-found-revalidate/test/index.test.js',
  'test/integration/numeric-sep/test/index.test.js',
  'test/integration/ondemand/test/index.test.js',
  'test/integration/optional-chaining-nullish-coalescing/test/index.test.js',
  'test/integration/page-config/test/index.test.js',
  'test/integration/page-extensions/test/index.test.js',
  'test/integration/plugin-mdx-rs/test/index.test.js',
  'test/integration/polyfilling-minimal/test/index.test.js',
  'test/integration/polyfills/test/index.test.js',
  'test/integration/port-env-var/test/index.test.js',
  'test/integration/preload-viewport/test/index.test.js',
  'test/integration/prerender-invalid-paths/test/index.test.js',
  'test/integration/prerender-revalidate/test/index.test.js',
  'test/integration/production-build-dir/test/index.test.js',
  'test/integration/production-config/test/index.test.js',
  'test/integration/production-start-no-build/test/index.test.js',
  'test/integration/production/test/index.test.js',
  'test/integration/re-export-all-exports-from-page-disallowed/test/index.test.js',
  'test/integration/react-streaming/test/index.test.js',
  'test/integration/read-only-source-hmr/test/index.test.js',
  'test/integration/relay-analytics-disabled/test/index.test.js',
  'test/integration/relay-analytics/test/index.test.js',
  'test/integration/render-error-on-module-error/test/index.test.js',
  'test/integration/render-error-on-top-level-error/with-get-initial-props/test/index.test.js',
  'test/integration/render-error-on-top-level-error/without-get-initial-props/test/index.test.js',
  'test/integration/required-server-files-ssr-404/test/index.test.js',
  'test/integration/revalidate-as-path/test/index.test.js',
  'test/integration/rewrites-destination-query-array/test/index.test.js',
  'test/integration/root-optional-revalidate/test/index.test.js',
  'test/integration/route-indexes/test/index.test.js',
  'test/integration/route-load-cancel-css/test/index.test.js',
  'test/integration/route-load-cancel/test/index.test.js',
  'test/integration/router-hash-navigation/test/index.test.js',
  'test/integration/router-is-ready-app-gip/test/index.test.js',
  'test/integration/router-is-ready/test/index.test.js',
  'test/integration/router-prefetch/test/index.test.js',
  'test/integration/scss/test/group-2.test.js',
  'test/integration/src-dir-support-double-dir/test/index.test.js',
  'test/integration/src-dir-support/test/index.test.js',
  'test/integration/ssg-data-404/test/index.test.js',
  'test/integration/ssg-dynamic-routes-404-page/test/index.test.js',
  'test/integration/static-404/test/index.test.js',
  'test/integration/static-page-name/test/index.test.js',
  'test/integration/styled-jsx-plugin/test/index.test.js',
  'test/integration/tsconfig-verifier/test/index.test.js',
  'test/integration/telemetry/test/page-features.test.js',
  'test/integration/turbopack-unsupported-log/index.test.ts',
  'test/integration/turbotrace-with-webpack-worker/test/index.test.js',
  'test/integration/typeof-window-replace/test/index.test.js',
  'test/integration/typescript-baseurl/test/index.test.js',
  'test/integration/typescript-custom-tsconfig/test/index.test.js',
  'test/integration/typescript-filtered-files/test/index.test.js',
  'test/integration/typescript-ignore-errors/test/index.test.js',
  'test/integration/webpack-config-extensionalias/test/index.test.js',
  'test/integration/webpack-config-mainjs/test/index.test.js',
]

module.exports = { enabledTests }
