/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/email/send/route";
exports.ids = ["app/api/email/send/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Fsend%2Froute&page=%2Fapi%2Femail%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Fsend%2Froute.ts&appDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Fsend%2Froute&page=%2Fapi%2Femail%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Fsend%2Froute.ts&appDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/request-meta */ \"(rsc)/./node_modules/next/dist/server/request-meta.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/server/lib/trace/tracer */ \"(rsc)/./node_modules/next/dist/server/lib/trace/tracer.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/shared/lib/router/utils/app-paths */ \"next/dist/shared/lib/router/utils/app-paths\");\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/base-http/node */ \"(rsc)/./node_modules/next/dist/server/base-http/node.js\");\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/web/spec-extension/adapters/next-request */ \"(rsc)/./node_modules/next/dist/server/web/spec-extension/adapters/next-request.js\");\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/lib/trace/constants */ \"(rsc)/./node_modules/next/dist/server/lib/trace/constants.js\");\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/server/instrumentation/utils */ \"(rsc)/./node_modules/next/dist/server/instrumentation/utils.js\");\n/* harmony import */ var next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/server/send-response */ \"(rsc)/./node_modules/next/dist/server/send-response.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(rsc)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dist/server/lib/cache-control */ \"(rsc)/./node_modules/next/dist/server/lib/cache-control.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dist/lib/constants */ \"(rsc)/./node_modules/next/dist/lib/constants.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dist/shared/lib/no-fallback-error.external */ \"next/dist/shared/lib/no-fallback-error.external\");\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/server/response-cache */ \"(rsc)/./node_modules/next/dist/server/response-cache/index.js\");\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _Users_chaseottimo_Coding_Projects_wall_streetr_src_app_api_email_send_route_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/app/api/email/send/route.ts */ \"(rsc)/./src/app/api/email/send/route.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/email/send/route\",\n        pathname: \"/api/email/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/email/send/route\"\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    resolvedPagePath: \"/Users/chaseottimo/Coding Projects/wall-streetr/src/app/api/email/send/route.ts\",\n    nextConfigOutput,\n    userland: _Users_chaseottimo_Coding_Projects_wall_streetr_src_app_api_email_send_route_ts__WEBPACK_IMPORTED_MODULE_16__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\nasync function handler(req, res, ctx) {\n    var _nextConfig_experimental;\n    let srcPage = \"/api/email/send/route\";\n    // turbopack doesn't normalize `/index` in the page name\n    // so we need to to process dynamic routes properly\n    // TODO: fix turbopack providing differing value from webpack\n    if (false) {} else if (srcPage === '/index') {\n        // we always normalize /index specifically\n        srcPage = '/';\n    }\n    const multiZoneDraftMode = false;\n    const prepareResult = await routeModule.prepare(req, res, {\n        srcPage,\n        multiZoneDraftMode\n    });\n    if (!prepareResult) {\n        res.statusCode = 400;\n        res.end('Bad Request');\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n        return null;\n    }\n    const { buildId, params, nextConfig, isDraftMode, prerenderManifest, routerServerContext, isOnDemandRevalidate, revalidateOnlyGenerated, resolvedPathname } = prepareResult;\n    const normalizedSrcPage = (0,next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__.normalizeAppPath)(srcPage);\n    let isIsr = Boolean(prerenderManifest.dynamicRoutes[normalizedSrcPage] || prerenderManifest.routes[resolvedPathname]);\n    if (isIsr && !isDraftMode) {\n        const isPrerendered = Boolean(prerenderManifest.routes[resolvedPathname]);\n        const prerenderInfo = prerenderManifest.dynamicRoutes[normalizedSrcPage];\n        if (prerenderInfo) {\n            if (prerenderInfo.fallback === false && !isPrerendered) {\n                throw new next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError();\n            }\n        }\n    }\n    let cacheKey = null;\n    if (isIsr && !routeModule.isDev && !isDraftMode) {\n        cacheKey = resolvedPathname;\n        // ensure /index and / is normalized to one key\n        cacheKey = cacheKey === '/index' ? '/' : cacheKey;\n    }\n    const supportsDynamicResponse = // If we're in development, we always support dynamic HTML\n    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports\n    // dynamic HTML.\n    !isIsr;\n    // This is a revalidation request if the request is for a static\n    // page and it is not being resumed from a postponed render and\n    // it is not a dynamic RSC request then it is a revalidation\n    // request.\n    const isRevalidate = isIsr && !supportsDynamicResponse;\n    const method = req.method || 'GET';\n    const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.getTracer)();\n    const activeSpan = tracer.getActiveScopeSpan();\n    const context = {\n        params,\n        prerenderManifest,\n        renderOpts: {\n            experimental: {\n                cacheComponents: Boolean(nextConfig.experimental.cacheComponents),\n                authInterrupts: Boolean(nextConfig.experimental.authInterrupts)\n            },\n            supportsDynamicResponse,\n            incrementalCache: (0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'incrementalCache'),\n            cacheLifeProfiles: (_nextConfig_experimental = nextConfig.experimental) == null ? void 0 : _nextConfig_experimental.cacheLife,\n            isRevalidate,\n            waitUntil: ctx.waitUntil,\n            onClose: (cb)=>{\n                res.on('close', cb);\n            },\n            onAfterTaskError: undefined,\n            onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext)\n        },\n        sharedContext: {\n            buildId\n        }\n    };\n    const nodeNextReq = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextRequest(req);\n    const nodeNextRes = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextResponse(res);\n    const nextReq = next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.NextRequestAdapter.fromNodeNextRequest(nodeNextReq, (0,next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.signalFromNodeResponse)(res));\n    try {\n        const invokeRouteModule = async (span)=>{\n            return routeModule.handle(nextReq, context).finally(()=>{\n                if (!span) return;\n                span.setAttributes({\n                    'http.status_code': res.statusCode,\n                    'next.rsc': false\n                });\n                const rootSpanAttributes = tracer.getRootSpanAttributes();\n                // We were unable to get attributes, probably OTEL is not enabled\n                if (!rootSpanAttributes) {\n                    return;\n                }\n                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest) {\n                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);\n                    return;\n                }\n                const route = rootSpanAttributes.get('next.route');\n                if (route) {\n                    const name = `${method} ${route}`;\n                    span.setAttributes({\n                        'next.route': route,\n                        'http.route': route,\n                        'next.span_name': name\n                    });\n                    span.updateName(name);\n                } else {\n                    span.updateName(`${method} ${req.url}`);\n                }\n            });\n        };\n        const handleResponse = async (currentSpan)=>{\n            var _cacheEntry_value;\n            const responseGenerator = async ({ previousCacheEntry })=>{\n                try {\n                    if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry) {\n                        res.statusCode = 404;\n                        // on-demand revalidate always sets this header\n                        res.setHeader('x-nextjs-cache', 'REVALIDATED');\n                        res.end('This page could not be found');\n                        return null;\n                    }\n                    const response = await invokeRouteModule(currentSpan);\n                    req.fetchMetrics = context.renderOpts.fetchMetrics;\n                    let pendingWaitUntil = context.renderOpts.pendingWaitUntil;\n                    // Attempt using provided waitUntil if available\n                    // if it's not we fallback to sendResponse's handling\n                    if (pendingWaitUntil) {\n                        if (ctx.waitUntil) {\n                            ctx.waitUntil(pendingWaitUntil);\n                            pendingWaitUntil = undefined;\n                        }\n                    }\n                    const cacheTags = context.renderOpts.collectedTags;\n                    // If the request is for a static response, we can cache it so long\n                    // as it's not edge.\n                    if (isIsr) {\n                        const blob = await response.blob();\n                        // Copy the headers from the response.\n                        const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.toNodeOutgoingHttpHeaders)(response.headers);\n                        if (cacheTags) {\n                            headers[next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER] = cacheTags;\n                        }\n                        if (!headers['content-type'] && blob.type) {\n                            headers['content-type'] = blob.type;\n                        }\n                        const revalidate = typeof context.renderOpts.collectedRevalidate === 'undefined' || context.renderOpts.collectedRevalidate >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? false : context.renderOpts.collectedRevalidate;\n                        const expire = typeof context.renderOpts.collectedExpire === 'undefined' || context.renderOpts.collectedExpire >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? undefined : context.renderOpts.collectedExpire;\n                        // Create the cache entry for the response.\n                        const cacheEntry = {\n                            value: {\n                                kind: next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__.CachedRouteKind.APP_ROUTE,\n                                status: response.status,\n                                body: Buffer.from(await blob.arrayBuffer()),\n                                headers\n                            },\n                            cacheControl: {\n                                revalidate,\n                                expire\n                            }\n                        };\n                        return cacheEntry;\n                    } else {\n                        // send response without caching if not ISR\n                        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, response, context.renderOpts.pendingWaitUntil);\n                        return null;\n                    }\n                } catch (err) {\n                    // if this is a background revalidate we need to report\n                    // the request error here as it won't be bubbled\n                    if (previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) {\n                        await routeModule.onRequestError(req, err, {\n                            routerKind: 'App Router',\n                            routePath: srcPage,\n                            routeType: 'route',\n                            revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                                isRevalidate,\n                                isOnDemandRevalidate\n                            })\n                        }, routerServerContext);\n                    }\n                    throw err;\n                }\n            };\n            const cacheEntry = await routeModule.handleResponse({\n                req,\n                nextConfig,\n                cacheKey,\n                routeKind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n                isFallback: false,\n                prerenderManifest,\n                isRoutePPREnabled: false,\n                isOnDemandRevalidate,\n                revalidateOnlyGenerated,\n                responseGenerator,\n                waitUntil: ctx.waitUntil\n            });\n            // we don't create a cacheEntry for ISR\n            if (!isIsr) {\n                return null;\n            }\n            if ((cacheEntry == null ? void 0 : (_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_15__.CachedRouteKind.APP_ROUTE) {\n                var _cacheEntry_value1;\n                throw Object.defineProperty(new Error(`Invariant: app-route received invalid cache entry ${cacheEntry == null ? void 0 : (_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), \"__NEXT_ERROR_CODE\", {\n                    value: \"E701\",\n                    enumerable: false,\n                    configurable: true\n                });\n            }\n            if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode')) {\n                res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');\n            }\n            // Draft mode should never be cached\n            if (isDraftMode) {\n                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');\n            }\n            const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.fromNodeOutgoingHttpHeaders)(cacheEntry.value.headers);\n            if (!((0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isIsr)) {\n                headers.delete(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER);\n            }\n            // If cache control is already set on the response we don't\n            // override it to allow users to customize it via next.config\n            if (cacheEntry.cacheControl && !res.getHeader('Cache-Control') && !headers.get('Cache-Control')) {\n                headers.set('Cache-Control', (0,next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__.getCacheControlHeader)(cacheEntry.cacheControl));\n            }\n            await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(cacheEntry.value.body, {\n                headers,\n                status: cacheEntry.value.status || 200\n            }));\n            return null;\n        };\n        // TODO: activeSpan code path is for when wrapped by\n        // next-server can be removed when this is no longer used\n        if (activeSpan) {\n            await handleResponse(activeSpan);\n        } else {\n            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest, {\n                    spanName: `${method} ${req.url}`,\n                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.SpanKind.SERVER,\n                    attributes: {\n                        'http.method': method,\n                        'http.target': req.url\n                    }\n                }, handleResponse));\n        }\n    } catch (err) {\n        // if we aren't wrapped by base-server handle here\n        if (!activeSpan && !(err instanceof next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError)) {\n            await routeModule.onRequestError(req, err, {\n                routerKind: 'App Router',\n                routePath: normalizedSrcPage,\n                routeType: 'route',\n                revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                    isRevalidate,\n                    isOnDemandRevalidate\n                })\n            });\n        }\n        // rethrow so that we can handle serving error page\n        // If this is during static generation, throw the error again.\n        if (isIsr) throw err;\n        // Otherwise, send a 500 response.\n        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(null, {\n            status: 500\n        }));\n        return null;\n    }\n}\n\n//# sourceMappingURL=app-route.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbCUyRnNlbmQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmVtYWlsJTJGc2VuZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmVtYWlsJTJGc2VuZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmNoYXNlb3R0aW1vJTJGQ29kaW5nJTIwUHJvamVjdHMlMkZ3YWxsLXN0cmVldHIlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGY2hhc2VvdHRpbW8lMkZDb2RpbmclMjBQcm9qZWN0cyUyRndhbGwtc3RyZWV0ciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCZpc0dsb2JhbE5vdEZvdW5kRW5hYmxlZD0hIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2Q7QUFDUztBQUNPO0FBQ0s7QUFDbUM7QUFDakQ7QUFDTztBQUNmO0FBQ3NDO0FBQ3pCO0FBQ007QUFDQztBQUNoQjtBQUMwQztBQUM1RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLE9BQW9DLElBQUksQ0FBRTtBQUN2RCx3QkFBd0IsTUFBdUM7QUFDL0Q7QUFDQTtBQUNB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QUNsRTtBQUNBLGtCQUFrQiw2RUFBWTtBQUM5QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2RUFBNkUsZ0ZBQWM7QUFDM0YsaUNBQWlDLFFBQVEsRUFBRSxRQUFRO0FBQ25ELDBCQUEwQix1RUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLE1BQU07QUFDTjtBQUNBLDRDQUE0Qyw2RkFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyRkFBbUI7QUFDckQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkVBQVk7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0IHsgZ2V0UmVxdWVzdE1ldGEgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yZXF1ZXN0LW1ldGFcIjtcbmltcG9ydCB7IGdldFRyYWNlciwgU3BhbktpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvdHJhY2UvdHJhY2VyXCI7XG5pbXBvcnQgeyBub3JtYWxpemVBcHBQYXRoIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hcHAtcGF0aHNcIjtcbmltcG9ydCB7IE5vZGVOZXh0UmVxdWVzdCwgTm9kZU5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Jhc2UtaHR0cC9ub2RlXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdEFkYXB0ZXIsIHNpZ25hbEZyb21Ob2RlUmVzcG9uc2UgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1leHRlbnNpb24vYWRhcHRlcnMvbmV4dC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBCYXNlU2VydmVyU3BhbiB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi90cmFjZS9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFJldmFsaWRhdGVSZWFzb24gfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9pbnN0cnVtZW50YXRpb24vdXRpbHNcIjtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3NlbmQtcmVzcG9uc2VcIjtcbmltcG9ydCB7IGZyb21Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycywgdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0Q2FjaGVDb250cm9sSGVhZGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL2NhY2hlLWNvbnRyb2xcIjtcbmltcG9ydCB7IElORklOSVRFX0NBQ0hFLCBORVhUX0NBQ0hFX1RBR1NfSEVBREVSIH0gZnJvbSBcIm5leHQvZGlzdC9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOb0ZhbGxiYWNrRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbm8tZmFsbGJhY2stZXJyb3IuZXh0ZXJuYWxcIjtcbmltcG9ydCB7IENhY2hlZFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3Jlc3BvbnNlLWNhY2hlXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2NoYXNlb3R0aW1vL0NvZGluZyBQcm9qZWN0cy93YWxsLXN0cmVldHIvc3JjL2FwcC9hcGkvZW1haWwvc2VuZC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZW1haWwvc2VuZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2VtYWlsL3NlbmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2VtYWlsL3NlbmQvcm91dGVcIlxuICAgIH0sXG4gICAgZGlzdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX0RJU1RfRElSIHx8ICcnLFxuICAgIHJlbGF0aXZlUHJvamVjdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX1BST0pFQ1RfRElSIHx8ICcnLFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2NoYXNlb3R0aW1vL0NvZGluZyBQcm9qZWN0cy93YWxsLXN0cmVldHIvc3JjL2FwcC9hcGkvZW1haWwvc2VuZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzLCBjdHgpIHtcbiAgICB2YXIgX25leHRDb25maWdfZXhwZXJpbWVudGFsO1xuICAgIGxldCBzcmNQYWdlID0gXCIvYXBpL2VtYWlsL3NlbmQvcm91dGVcIjtcbiAgICAvLyB0dXJib3BhY2sgZG9lc24ndCBub3JtYWxpemUgYC9pbmRleGAgaW4gdGhlIHBhZ2UgbmFtZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gdG8gcHJvY2VzcyBkeW5hbWljIHJvdXRlcyBwcm9wZXJseVxuICAgIC8vIFRPRE86IGZpeCB0dXJib3BhY2sgcHJvdmlkaW5nIGRpZmZlcmluZyB2YWx1ZSBmcm9tIHdlYnBhY2tcbiAgICBpZiAocHJvY2Vzcy5lbnYuVFVSQk9QQUNLKSB7XG4gICAgICAgIHNyY1BhZ2UgPSBzcmNQYWdlLnJlcGxhY2UoL1xcL2luZGV4JC8sICcnKSB8fCAnLyc7XG4gICAgfSBlbHNlIGlmIChzcmNQYWdlID09PSAnL2luZGV4Jykge1xuICAgICAgICAvLyB3ZSBhbHdheXMgbm9ybWFsaXplIC9pbmRleCBzcGVjaWZpY2FsbHlcbiAgICAgICAgc3JjUGFnZSA9ICcvJztcbiAgICB9XG4gICAgY29uc3QgbXVsdGlab25lRHJhZnRNb2RlID0gcHJvY2Vzcy5lbnYuX19ORVhUX01VTFRJX1pPTkVfRFJBRlRfTU9ERTtcbiAgICBjb25zdCBwcmVwYXJlUmVzdWx0ID0gYXdhaXQgcm91dGVNb2R1bGUucHJlcGFyZShyZXEsIHJlcywge1xuICAgICAgICBzcmNQYWdlLFxuICAgICAgICBtdWx0aVpvbmVEcmFmdE1vZGVcbiAgICB9KTtcbiAgICBpZiAoIXByZXBhcmVSZXN1bHQpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgICAgIHJlcy5lbmQoJ0JhZCBSZXF1ZXN0Jyk7XG4gICAgICAgIGN0eC53YWl0VW50aWwgPT0gbnVsbCA/IHZvaWQgMCA6IGN0eC53YWl0VW50aWwuY2FsbChjdHgsIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgYnVpbGRJZCwgcGFyYW1zLCBuZXh0Q29uZmlnLCBpc0RyYWZ0TW9kZSwgcHJlcmVuZGVyTWFuaWZlc3QsIHJvdXRlclNlcnZlckNvbnRleHQsIGlzT25EZW1hbmRSZXZhbGlkYXRlLCByZXZhbGlkYXRlT25seUdlbmVyYXRlZCwgcmVzb2x2ZWRQYXRobmFtZSB9ID0gcHJlcGFyZVJlc3VsdDtcbiAgICBjb25zdCBub3JtYWxpemVkU3JjUGFnZSA9IG5vcm1hbGl6ZUFwcFBhdGgoc3JjUGFnZSk7XG4gICAgbGV0IGlzSXNyID0gQm9vbGVhbihwcmVyZW5kZXJNYW5pZmVzdC5keW5hbWljUm91dGVzW25vcm1hbGl6ZWRTcmNQYWdlXSB8fCBwcmVyZW5kZXJNYW5pZmVzdC5yb3V0ZXNbcmVzb2x2ZWRQYXRobmFtZV0pO1xuICAgIGlmIChpc0lzciAmJiAhaXNEcmFmdE1vZGUpIHtcbiAgICAgICAgY29uc3QgaXNQcmVyZW5kZXJlZCA9IEJvb2xlYW4ocHJlcmVuZGVyTWFuaWZlc3Qucm91dGVzW3Jlc29sdmVkUGF0aG5hbWVdKTtcbiAgICAgICAgY29uc3QgcHJlcmVuZGVySW5mbyA9IHByZXJlbmRlck1hbmlmZXN0LmR5bmFtaWNSb3V0ZXNbbm9ybWFsaXplZFNyY1BhZ2VdO1xuICAgICAgICBpZiAocHJlcmVuZGVySW5mbykge1xuICAgICAgICAgICAgaWYgKHByZXJlbmRlckluZm8uZmFsbGJhY2sgPT09IGZhbHNlICYmICFpc1ByZXJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vRmFsbGJhY2tFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBjYWNoZUtleSA9IG51bGw7XG4gICAgaWYgKGlzSXNyICYmICFyb3V0ZU1vZHVsZS5pc0RldiAmJiAhaXNEcmFmdE1vZGUpIHtcbiAgICAgICAgY2FjaGVLZXkgPSByZXNvbHZlZFBhdGhuYW1lO1xuICAgICAgICAvLyBlbnN1cmUgL2luZGV4IGFuZCAvIGlzIG5vcm1hbGl6ZWQgdG8gb25lIGtleVxuICAgICAgICBjYWNoZUtleSA9IGNhY2hlS2V5ID09PSAnL2luZGV4JyA/ICcvJyA6IGNhY2hlS2V5O1xuICAgIH1cbiAgICBjb25zdCBzdXBwb3J0c0R5bmFtaWNSZXNwb25zZSA9IC8vIElmIHdlJ3JlIGluIGRldmVsb3BtZW50LCB3ZSBhbHdheXMgc3VwcG9ydCBkeW5hbWljIEhUTUxcbiAgICByb3V0ZU1vZHVsZS5pc0RldiA9PT0gdHJ1ZSB8fCAvLyBJZiB0aGlzIGlzIG5vdCBTU0cgb3IgZG9lcyBub3QgaGF2ZSBzdGF0aWMgcGF0aHMsIHRoZW4gaXQgc3VwcG9ydHNcbiAgICAvLyBkeW5hbWljIEhUTUwuXG4gICAgIWlzSXNyO1xuICAgIC8vIFRoaXMgaXMgYSByZXZhbGlkYXRpb24gcmVxdWVzdCBpZiB0aGUgcmVxdWVzdCBpcyBmb3IgYSBzdGF0aWNcbiAgICAvLyBwYWdlIGFuZCBpdCBpcyBub3QgYmVpbmcgcmVzdW1lZCBmcm9tIGEgcG9zdHBvbmVkIHJlbmRlciBhbmRcbiAgICAvLyBpdCBpcyBub3QgYSBkeW5hbWljIFJTQyByZXF1ZXN0IHRoZW4gaXQgaXMgYSByZXZhbGlkYXRpb25cbiAgICAvLyByZXF1ZXN0LlxuICAgIGNvbnN0IGlzUmV2YWxpZGF0ZSA9IGlzSXNyICYmICFzdXBwb3J0c0R5bmFtaWNSZXNwb25zZTtcbiAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kIHx8ICdHRVQnO1xuICAgIGNvbnN0IHRyYWNlciA9IGdldFRyYWNlcigpO1xuICAgIGNvbnN0IGFjdGl2ZVNwYW4gPSB0cmFjZXIuZ2V0QWN0aXZlU2NvcGVTcGFuKCk7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBwcmVyZW5kZXJNYW5pZmVzdCxcbiAgICAgICAgcmVuZGVyT3B0czoge1xuICAgICAgICAgICAgZXhwZXJpbWVudGFsOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVDb21wb25lbnRzOiBCb29sZWFuKG5leHRDb25maWcuZXhwZXJpbWVudGFsLmNhY2hlQ29tcG9uZW50cyksXG4gICAgICAgICAgICAgICAgYXV0aEludGVycnVwdHM6IEJvb2xlYW4obmV4dENvbmZpZy5leHBlcmltZW50YWwuYXV0aEludGVycnVwdHMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VwcG9ydHNEeW5hbWljUmVzcG9uc2UsXG4gICAgICAgICAgICBpbmNyZW1lbnRhbENhY2hlOiBnZXRSZXF1ZXN0TWV0YShyZXEsICdpbmNyZW1lbnRhbENhY2hlJyksXG4gICAgICAgICAgICBjYWNoZUxpZmVQcm9maWxlczogKF9uZXh0Q29uZmlnX2V4cGVyaW1lbnRhbCA9IG5leHRDb25maWcuZXhwZXJpbWVudGFsKSA9PSBudWxsID8gdm9pZCAwIDogX25leHRDb25maWdfZXhwZXJpbWVudGFsLmNhY2hlTGlmZSxcbiAgICAgICAgICAgIGlzUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgIHdhaXRVbnRpbDogY3R4LndhaXRVbnRpbCxcbiAgICAgICAgICAgIG9uQ2xvc2U6IChjYik9PntcbiAgICAgICAgICAgICAgICByZXMub24oJ2Nsb3NlJywgY2IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQWZ0ZXJUYXNrRXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uSW5zdHJ1bWVudGF0aW9uUmVxdWVzdEVycm9yOiAoZXJyb3IsIF9yZXF1ZXN0LCBlcnJvckNvbnRleHQpPT5yb3V0ZU1vZHVsZS5vblJlcXVlc3RFcnJvcihyZXEsIGVycm9yLCBlcnJvckNvbnRleHQsIHJvdXRlclNlcnZlckNvbnRleHQpXG4gICAgICAgIH0sXG4gICAgICAgIHNoYXJlZENvbnRleHQ6IHtcbiAgICAgICAgICAgIGJ1aWxkSWRcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgbm9kZU5leHRSZXEgPSBuZXcgTm9kZU5leHRSZXF1ZXN0KHJlcSk7XG4gICAgY29uc3Qgbm9kZU5leHRSZXMgPSBuZXcgTm9kZU5leHRSZXNwb25zZShyZXMpO1xuICAgIGNvbnN0IG5leHRSZXEgPSBOZXh0UmVxdWVzdEFkYXB0ZXIuZnJvbU5vZGVOZXh0UmVxdWVzdChub2RlTmV4dFJlcSwgc2lnbmFsRnJvbU5vZGVSZXNwb25zZShyZXMpKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBpbnZva2VSb3V0ZU1vZHVsZSA9IGFzeW5jIChzcGFuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlTW9kdWxlLmhhbmRsZShuZXh0UmVxLCBjb250ZXh0KS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKCFzcGFuKSByZXR1cm47XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHAuc3RhdHVzX2NvZGUnOiByZXMuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgJ25leHQucnNjJzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByb290U3BhbkF0dHJpYnV0ZXMgPSB0cmFjZXIuZ2V0Um9vdFNwYW5BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgLy8gV2Ugd2VyZSB1bmFibGUgdG8gZ2V0IGF0dHJpYnV0ZXMsIHByb2JhYmx5IE9URUwgaXMgbm90IGVuYWJsZWRcbiAgICAgICAgICAgICAgICBpZiAoIXJvb3RTcGFuQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnNwYW5fdHlwZScpICE9PSBCYXNlU2VydmVyU3Bhbi5oYW5kbGVSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5leHBlY3RlZCByb290IHNwYW4gdHlwZSAnJHtyb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnNwYW5fdHlwZScpfScuIFBsZWFzZSByZXBvcnQgdGhpcyBOZXh0LmpzIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qc2ApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gcm9vdFNwYW5BdHRyaWJ1dGVzLmdldCgnbmV4dC5yb3V0ZScpO1xuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7bWV0aG9kfSAke3JvdXRlfWA7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbmV4dC5yb3V0ZSc6IHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHAucm91dGUnOiByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICduZXh0LnNwYW5fbmFtZSc6IG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udXBkYXRlTmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnVwZGF0ZU5hbWUoYCR7bWV0aG9kfSAke3JlcS51cmx9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gYXN5bmMgKGN1cnJlbnRTcGFuKT0+e1xuICAgICAgICAgICAgdmFyIF9jYWNoZUVudHJ5X3ZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VHZW5lcmF0b3IgPSBhc3luYyAoeyBwcmV2aW91c0NhY2hlRW50cnkgfSk9PntcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFJlcXVlc3RNZXRhKHJlcSwgJ21pbmltYWxNb2RlJykgJiYgaXNPbkRlbWFuZFJldmFsaWRhdGUgJiYgcmV2YWxpZGF0ZU9ubHlHZW5lcmF0ZWQgJiYgIXByZXZpb3VzQ2FjaGVFbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbi1kZW1hbmQgcmV2YWxpZGF0ZSBhbHdheXMgc2V0cyB0aGlzIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcigneC1uZXh0anMtY2FjaGUnLCAnUkVWQUxJREFURUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lbmQoJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW52b2tlUm91dGVNb2R1bGUoY3VycmVudFNwYW4pO1xuICAgICAgICAgICAgICAgICAgICByZXEuZmV0Y2hNZXRyaWNzID0gY29udGV4dC5yZW5kZXJPcHRzLmZldGNoTWV0cmljcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlbmRpbmdXYWl0VW50aWwgPSBjb250ZXh0LnJlbmRlck9wdHMucGVuZGluZ1dhaXRVbnRpbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0ZW1wdCB1c2luZyBwcm92aWRlZCB3YWl0VW50aWwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IHdlIGZhbGxiYWNrIHRvIHNlbmRSZXNwb25zZSdzIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nV2FpdFVudGlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LndhaXRVbnRpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC53YWl0VW50aWwocGVuZGluZ1dhaXRVbnRpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1dhaXRVbnRpbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZVRhZ3MgPSBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkVGFncztcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgaXMgZm9yIGEgc3RhdGljIHJlc3BvbnNlLCB3ZSBjYW4gY2FjaGUgaXQgc28gbG9uZ1xuICAgICAgICAgICAgICAgICAgICAvLyBhcyBpdCdzIG5vdCBlZGdlLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJc3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBoZWFkZXJzIGZyb20gdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHRvTm9kZU91dGdvaW5nSHR0cEhlYWRlcnMocmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVUYWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tORVhUX0NBQ0hFX1RBR1NfSEVBREVSXSA9IGNhY2hlVGFncztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZGVyc1snY29udGVudC10eXBlJ10gJiYgYmxvYi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSBibG9iLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZhbGlkYXRlID0gdHlwZW9mIGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRSZXZhbGlkYXRlID09PSAndW5kZWZpbmVkJyB8fCBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkUmV2YWxpZGF0ZSA+PSBJTkZJTklURV9DQUNIRSA/IGZhbHNlIDogY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZFJldmFsaWRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcmUgPSB0eXBlb2YgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZEV4cGlyZSA9PT0gJ3VuZGVmaW5lZCcgfHwgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZEV4cGlyZSA+PSBJTkZJTklURV9DQUNIRSA/IHVuZGVmaW5lZCA6IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRFeHBpcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNhY2hlIGVudHJ5IGZvciB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUVudHJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IENhY2hlZFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBCdWZmZXIuZnJvbShhd2FpdCBibG9iLmFycmF5QnVmZmVyKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZUVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCByZXNwb25zZSB3aXRob3V0IGNhY2hpbmcgaWYgbm90IElTUlxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VuZFJlc3BvbnNlKG5vZGVOZXh0UmVxLCBub2RlTmV4dFJlcywgcmVzcG9uc2UsIGNvbnRleHQucmVuZGVyT3B0cy5wZW5kaW5nV2FpdFVudGlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYSBiYWNrZ3JvdW5kIHJldmFsaWRhdGUgd2UgbmVlZCB0byByZXBvcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgZXJyb3IgaGVyZSBhcyBpdCB3b24ndCBiZSBidWJibGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0NhY2hlRW50cnkgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZpb3VzQ2FjaGVFbnRyeS5pc1N0YWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByb3V0ZU1vZHVsZS5vblJlcXVlc3RFcnJvcihyZXEsIGVyciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcktpbmQ6ICdBcHAgUm91dGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVBhdGg6IHNyY1BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVUeXBlOiAncm91dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGVSZWFzb246IGdldFJldmFsaWRhdGVSZWFzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT25EZW1hbmRSZXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJvdXRlclNlcnZlckNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyeSA9IGF3YWl0IHJvdXRlTW9kdWxlLmhhbmRsZVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgbmV4dENvbmZpZyxcbiAgICAgICAgICAgICAgICBjYWNoZUtleSxcbiAgICAgICAgICAgICAgICByb3V0ZUtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgICAgICAgICAgaXNGYWxsYmFjazogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJlcmVuZGVyTWFuaWZlc3QsXG4gICAgICAgICAgICAgICAgaXNSb3V0ZVBQUkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzT25EZW1hbmRSZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHJldmFsaWRhdGVPbmx5R2VuZXJhdGVkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlR2VuZXJhdG9yLFxuICAgICAgICAgICAgICAgIHdhaXRVbnRpbDogY3R4LndhaXRVbnRpbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBjcmVhdGUgYSBjYWNoZUVudHJ5IGZvciBJU1JcbiAgICAgICAgICAgIGlmICghaXNJc3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoY2FjaGVFbnRyeSA9PSBudWxsID8gdm9pZCAwIDogKF9jYWNoZUVudHJ5X3ZhbHVlID0gY2FjaGVFbnRyeS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jYWNoZUVudHJ5X3ZhbHVlLmtpbmQpICE9PSBDYWNoZWRSb3V0ZUtpbmQuQVBQX1JPVVRFKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jYWNoZUVudHJ5X3ZhbHVlMTtcbiAgICAgICAgICAgICAgICB0aHJvdyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3IEVycm9yKGBJbnZhcmlhbnQ6IGFwcC1yb3V0ZSByZWNlaXZlZCBpbnZhbGlkIGNhY2hlIGVudHJ5ICR7Y2FjaGVFbnRyeSA9PSBudWxsID8gdm9pZCAwIDogKF9jYWNoZUVudHJ5X3ZhbHVlMSA9IGNhY2hlRW50cnkudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfY2FjaGVFbnRyeV92YWx1ZTEua2luZH1gKSwgXCJfX05FWFRfRVJST1JfQ09ERVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkU3MDFcIixcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFnZXRSZXF1ZXN0TWV0YShyZXEsICdtaW5pbWFsTW9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcigneC1uZXh0anMtY2FjaGUnLCBpc09uRGVtYW5kUmV2YWxpZGF0ZSA/ICdSRVZBTElEQVRFRCcgOiBjYWNoZUVudHJ5LmlzTWlzcyA/ICdNSVNTJyA6IGNhY2hlRW50cnkuaXNTdGFsZSA/ICdTVEFMRScgOiAnSElUJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEcmFmdCBtb2RlIHNob3VsZCBuZXZlciBiZSBjYWNoZWRcbiAgICAgICAgICAgIGlmIChpc0RyYWZ0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAncHJpdmF0ZSwgbm8tY2FjaGUsIG5vLXN0b3JlLCBtYXgtYWdlPTAsIG11c3QtcmV2YWxpZGF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGZyb21Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyhjYWNoZUVudHJ5LnZhbHVlLmhlYWRlcnMpO1xuICAgICAgICAgICAgaWYgKCEoZ2V0UmVxdWVzdE1ldGEocmVxLCAnbWluaW1hbE1vZGUnKSAmJiBpc0lzcikpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmRlbGV0ZShORVhUX0NBQ0hFX1RBR1NfSEVBREVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGNhY2hlIGNvbnRyb2wgaXMgYWxyZWFkeSBzZXQgb24gdGhlIHJlc3BvbnNlIHdlIGRvbid0XG4gICAgICAgICAgICAvLyBvdmVycmlkZSBpdCB0byBhbGxvdyB1c2VycyB0byBjdXN0b21pemUgaXQgdmlhIG5leHQuY29uZmlnXG4gICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS5jYWNoZUNvbnRyb2wgJiYgIXJlcy5nZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnKSAmJiAhaGVhZGVycy5nZXQoJ0NhY2hlLUNvbnRyb2wnKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdDYWNoZS1Db250cm9sJywgZ2V0Q2FjaGVDb250cm9sSGVhZGVyKGNhY2hlRW50cnkuY2FjaGVDb250cm9sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzZW5kUmVzcG9uc2Uobm9kZU5leHRSZXEsIG5vZGVOZXh0UmVzLCBuZXcgUmVzcG9uc2UoY2FjaGVFbnRyeS52YWx1ZS5ib2R5LCB7XG4gICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGNhY2hlRW50cnkudmFsdWUuc3RhdHVzIHx8IDIwMFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRPRE86IGFjdGl2ZVNwYW4gY29kZSBwYXRoIGlzIGZvciB3aGVuIHdyYXBwZWQgYnlcbiAgICAgICAgLy8gbmV4dC1zZXJ2ZXIgY2FuIGJlIHJlbW92ZWQgd2hlbiB0aGlzIGlzIG5vIGxvbmdlciB1c2VkXG4gICAgICAgIGlmIChhY3RpdmVTcGFuKSB7XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVSZXNwb25zZShhY3RpdmVTcGFuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRyYWNlci53aXRoUHJvcGFnYXRlZENvbnRleHQocmVxLmhlYWRlcnMsICgpPT50cmFjZXIudHJhY2UoQmFzZVNlcnZlclNwYW4uaGFuZGxlUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgICBzcGFuTmFtZTogYCR7bWV0aG9kfSAke3JlcS51cmx9YCxcbiAgICAgICAgICAgICAgICAgICAga2luZDogU3BhbktpbmQuU0VSVkVSLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC5tZXRob2QnOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC50YXJnZXQnOiByZXEudXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBoYW5kbGVSZXNwb25zZSkpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZW4ndCB3cmFwcGVkIGJ5IGJhc2Utc2VydmVyIGhhbmRsZSBoZXJlXG4gICAgICAgIGlmICghYWN0aXZlU3BhbiAmJiAhKGVyciBpbnN0YW5jZW9mIE5vRmFsbGJhY2tFcnJvcikpIHtcbiAgICAgICAgICAgIGF3YWl0IHJvdXRlTW9kdWxlLm9uUmVxdWVzdEVycm9yKHJlcSwgZXJyLCB7XG4gICAgICAgICAgICAgICAgcm91dGVyS2luZDogJ0FwcCBSb3V0ZXInLFxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aDogbm9ybWFsaXplZFNyY1BhZ2UsXG4gICAgICAgICAgICAgICAgcm91dGVUeXBlOiAncm91dGUnLFxuICAgICAgICAgICAgICAgIHJldmFsaWRhdGVSZWFzb246IGdldFJldmFsaWRhdGVSZWFzb24oe1xuICAgICAgICAgICAgICAgICAgICBpc1JldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGlzT25EZW1hbmRSZXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldGhyb3cgc28gdGhhdCB3ZSBjYW4gaGFuZGxlIHNlcnZpbmcgZXJyb3IgcGFnZVxuICAgICAgICAvLyBJZiB0aGlzIGlzIGR1cmluZyBzdGF0aWMgZ2VuZXJhdGlvbiwgdGhyb3cgdGhlIGVycm9yIGFnYWluLlxuICAgICAgICBpZiAoaXNJc3IpIHRocm93IGVycjtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZW5kIGEgNTAwIHJlc3BvbnNlLlxuICAgICAgICBhd2FpdCBzZW5kUmVzcG9uc2Uobm9kZU5leHRSZXEsIG5vZGVOZXh0UmVzLCBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgc3RhdHVzOiA1MDBcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Fsend%2Froute&page=%2Fapi%2Femail%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Fsend%2Froute.ts&appDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/email/send/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/email/send/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_gmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/gmail */ \"(rsc)/./src/lib/gmail.ts\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\n\n\n// Send email via Gmail API\nasync function POST(request) {\n    try {\n        const { contactId, subject, body, userId, attachments = [] } = await request.json();\n        if (!contactId || !subject || !body || !userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing required fields'\n            }, {\n                status: 400\n            });\n        }\n        const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://sxcrdtwpcewncmbjfepu.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY);\n        // Get user's Gmail account\n        const { data: emailAccount, error: accountError } = await supabase.from('user_email_accounts').select('*').eq('user_id', userId).eq('provider', 'gmail').single();\n        if (accountError || !emailAccount) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Gmail account not connected'\n            }, {\n                status: 400\n            });\n        }\n        // Get contact information\n        const { data: contact, error: contactError } = await supabase.from('contacts').select('*').eq('id', contactId).single();\n        if (contactError || !contact) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Contact not found'\n            }, {\n                status: 404\n            });\n        }\n        // Create Gmail client\n        const gmailClient = (0,_lib_gmail__WEBPACK_IMPORTED_MODULE_1__.createGmailClient)(emailAccount.access_token, emailAccount.refresh_token);\n        // Send email with attachments\n        const result = await (0,_lib_gmail__WEBPACK_IMPORTED_MODULE_1__.sendEmail)(gmailClient, contact.email || '', subject, body, emailAccount.email || '', attachments);\n        // Store email in history\n        const { error: historyError } = await supabase.from('email_history').insert({\n            contact_id: contactId,\n            user_email_account_id: emailAccount.id,\n            direction: 'sent',\n            subject,\n            content: body,\n            gmail_message_id: result.id,\n            sent_at: new Date().toISOString()\n        });\n        if (historyError) {\n            console.error('Error storing email history:', historyError);\n        }\n        // Update contact stage to 'intro_sent' if currently 'not_contacted'\n        if (contact.stage === 'not_contacted') {\n            const { error: stageError } = await supabase.from('contacts').update({\n                stage: 'intro_sent',\n                last_activity: new Date().toISOString()\n            }).eq('id', contactId);\n            if (stageError) {\n                console.error('Error updating contact stage:', stageError);\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            messageId: result.id,\n            message: 'Email sent successfully'\n        });\n    } catch (error) {\n        console.error('Error sending email:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to send email'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsRUFBRSxPQUFPdkMsT0FBTztRQUNkZ0MsUUFBUWhDLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF1QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvY2hhc2VvdHRpbW8vQ29kaW5nIFByb2plY3RzL3dhbGwtc3RyZWV0ci9zcmMvYXBwL2FwaS9lbWFpbC9zZW5kL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBjcmVhdGVHbWFpbENsaWVudCwgc2VuZEVtYWlsIH0gZnJvbSAnQC9saWIvZ21haWwnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuLy8gU2VuZCBlbWFpbCB2aWEgR21haWwgQVBJXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgY29udGFjdElkLCBzdWJqZWN0LCBib2R5LCB1c2VySWQsIGF0dGFjaG1lbnRzID0gW10gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIFxuICAgIGlmICghY29udGFjdElkIHx8ICFzdWJqZWN0IHx8ICFib2R5IHx8ICF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBmaWVsZHMnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcbiAgICAgIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkhXG4gICAgKTtcbiAgICBcbiAgICAvLyBHZXQgdXNlcidzIEdtYWlsIGFjY291bnRcbiAgICBjb25zdCB7IGRhdGE6IGVtYWlsQWNjb3VudCwgZXJyb3I6IGFjY291bnRFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCd1c2VyX2VtYWlsX2FjY291bnRzJylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLmVxKCd1c2VyX2lkJywgdXNlcklkKVxuICAgICAgLmVxKCdwcm92aWRlcicsICdnbWFpbCcpXG4gICAgICAuc2luZ2xlKCk7XG4gICAgXG4gICAgaWYgKGFjY291bnRFcnJvciB8fCAhZW1haWxBY2NvdW50KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0dtYWlsIGFjY291bnQgbm90IGNvbm5lY3RlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gR2V0IGNvbnRhY3QgaW5mb3JtYXRpb25cbiAgICBjb25zdCB7IGRhdGE6IGNvbnRhY3QsIGVycm9yOiBjb250YWN0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnY29udGFjdHMnKVxuICAgICAgLnNlbGVjdCgnKicpXG4gICAgICAuZXEoJ2lkJywgY29udGFjdElkKVxuICAgICAgLnNpbmdsZSgpO1xuICAgIFxuICAgIGlmIChjb250YWN0RXJyb3IgfHwgIWNvbnRhY3QpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQ29udGFjdCBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIENyZWF0ZSBHbWFpbCBjbGllbnRcbiAgICBjb25zdCBnbWFpbENsaWVudCA9IGNyZWF0ZUdtYWlsQ2xpZW50KFxuICAgICAgZW1haWxBY2NvdW50LmFjY2Vzc190b2tlbixcbiAgICAgIGVtYWlsQWNjb3VudC5yZWZyZXNoX3Rva2VuXG4gICAgKTtcbiAgICBcbiAgICAvLyBTZW5kIGVtYWlsIHdpdGggYXR0YWNobWVudHNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kRW1haWwoXG4gICAgICBnbWFpbENsaWVudCxcbiAgICAgIGNvbnRhY3QuZW1haWwgfHwgJycsXG4gICAgICBzdWJqZWN0LFxuICAgICAgYm9keSxcbiAgICAgIGVtYWlsQWNjb3VudC5lbWFpbCB8fCAnJyxcbiAgICAgIGF0dGFjaG1lbnRzXG4gICAgKTtcbiAgICBcbiAgICAvLyBTdG9yZSBlbWFpbCBpbiBoaXN0b3J5XG4gICAgY29uc3QgeyBlcnJvcjogaGlzdG9yeUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ2VtYWlsX2hpc3RvcnknKVxuICAgICAgLmluc2VydCh7XG4gICAgICAgIGNvbnRhY3RfaWQ6IGNvbnRhY3RJZCxcbiAgICAgICAgdXNlcl9lbWFpbF9hY2NvdW50X2lkOiBlbWFpbEFjY291bnQuaWQsXG4gICAgICAgIGRpcmVjdGlvbjogJ3NlbnQnLFxuICAgICAgICBzdWJqZWN0LFxuICAgICAgICBjb250ZW50OiBib2R5LFxuICAgICAgICBnbWFpbF9tZXNzYWdlX2lkOiByZXN1bHQuaWQsXG4gICAgICAgIHNlbnRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pO1xuICAgIFxuICAgIGlmIChoaXN0b3J5RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0b3JpbmcgZW1haWwgaGlzdG9yeTonLCBoaXN0b3J5RXJyb3IpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjb250YWN0IHN0YWdlIHRvICdpbnRyb19zZW50JyBpZiBjdXJyZW50bHkgJ25vdF9jb250YWN0ZWQnXG4gICAgaWYgKGNvbnRhY3Quc3RhZ2UgPT09ICdub3RfY29udGFjdGVkJykge1xuICAgICAgY29uc3QgeyBlcnJvcjogc3RhZ2VFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgLmZyb20oJ2NvbnRhY3RzJylcbiAgICAgICAgLnVwZGF0ZSh7IFxuICAgICAgICAgIHN0YWdlOiAnaW50cm9fc2VudCcsXG4gICAgICAgICAgbGFzdF9hY3Rpdml0eTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgIH0pXG4gICAgICAgIC5lcSgnaWQnLCBjb250YWN0SWQpO1xuICAgICAgXG4gICAgICBpZiAoc3RhZ2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjb250YWN0IHN0YWdlOicsIHN0YWdlRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxuICAgICAgbWVzc2FnZUlkOiByZXN1bHQuaWQsXG4gICAgICBtZXNzYWdlOiAnRW1haWwgc2VudCBzdWNjZXNzZnVsbHknXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBlbWFpbCcgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZUdtYWlsQ2xpZW50Iiwic2VuZEVtYWlsIiwiY3JlYXRlQ2xpZW50IiwiUE9TVCIsInJlcXVlc3QiLCJjb250YWN0SWQiLCJzdWJqZWN0IiwiYm9keSIsInVzZXJJZCIsImF0dGFjaG1lbnRzIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSIsImRhdGEiLCJlbWFpbEFjY291bnQiLCJhY2NvdW50RXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJjb250YWN0IiwiY29udGFjdEVycm9yIiwiZ21haWxDbGllbnQiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwicmVzdWx0IiwiZW1haWwiLCJoaXN0b3J5RXJyb3IiLCJpbnNlcnQiLCJjb250YWN0X2lkIiwidXNlcl9lbWFpbF9hY2NvdW50X2lkIiwiaWQiLCJkaXJlY3Rpb24iLCJjb250ZW50IiwiZ21haWxfbWVzc2FnZV9pZCIsInNlbnRfYXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb25zb2xlIiwic3RhZ2UiLCJzdGFnZUVycm9yIiwidXBkYXRlIiwibGFzdF9hY3Rpdml0eSIsInN1Y2Nlc3MiLCJtZXNzYWdlSWQiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/email/send/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/gmail.ts":
/*!**************************!*\
  !*** ./src/lib/gmail.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GMAIL_REDIRECT_URI: () => (/* binding */ GMAIL_REDIRECT_URI),\n/* harmony export */   GMAIL_SCOPES: () => (/* binding */ GMAIL_SCOPES),\n/* harmony export */   createGmailClient: () => (/* binding */ createGmailClient),\n/* harmony export */   createOAuth2Client: () => (/* binding */ createOAuth2Client),\n/* harmony export */   exchangeCodeForTokens: () => (/* binding */ exchangeCodeForTokens),\n/* harmony export */   generateAuthUrl: () => (/* binding */ generateAuthUrl),\n/* harmony export */   getMessageDetails: () => (/* binding */ getMessageDetails),\n/* harmony export */   getRecentMessages: () => (/* binding */ getRecentMessages),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail),\n/* harmony export */   setupGmailWatch: () => (/* binding */ setupGmailWatch)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! googleapis */ \"(rsc)/./node_modules/googleapis/build/src/index.js\");\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-auth-library */ \"(rsc)/./node_modules/google-auth-library/build/src/index.js\");\n\n\n// Gmail API configuration\nconst GMAIL_SCOPES = [\n    'https://www.googleapis.com/auth/gmail.send',\n    'https://www.googleapis.com/auth/gmail.readonly',\n    'https://www.googleapis.com/auth/gmail.modify',\n    'https://www.googleapis.com/auth/userinfo.email',\n    'https://www.googleapis.com/auth/userinfo.profile'\n];\nconst GMAIL_REDIRECT_URI = `${\"http://localhost:3000\"}/api/auth/gmail/callback`;\n// Create OAuth2 client\nconst createOAuth2Client = ()=>{\n    return new google_auth_library__WEBPACK_IMPORTED_MODULE_0__.OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, GMAIL_REDIRECT_URI);\n};\n// Generate OAuth2 URL\nconst generateAuthUrl = (userId)=>{\n    const oauth2Client = createOAuth2Client();\n    return oauth2Client.generateAuthUrl({\n        access_type: 'offline',\n        scope: GMAIL_SCOPES,\n        state: userId,\n        prompt: 'consent'\n    });\n};\n// Exchange code for tokens\nconst exchangeCodeForTokens = async (code)=>{\n    const oauth2Client = createOAuth2Client();\n    try {\n        const { tokens } = await oauth2Client.getToken(code);\n        return tokens;\n    } catch (error) {\n        console.error('Error exchanging code for tokens:', error);\n        throw new Error('Failed to exchange code for tokens');\n    }\n};\n// Get user info from Google\nconst getUserInfo = async (accessToken)=>{\n    const oauth2Client = createOAuth2Client();\n    oauth2Client.setCredentials({\n        access_token: accessToken\n    });\n    try {\n        const oauth2 = googleapis__WEBPACK_IMPORTED_MODULE_1__.google.oauth2({\n            version: 'v2',\n            auth: oauth2Client\n        });\n        const response = await oauth2.userinfo.get();\n        return response.data;\n    } catch (error) {\n        console.error('Error getting user info:', error);\n        throw new Error('Failed to get user info');\n    }\n};\n// Create Gmail API client with tokens\nconst createGmailClient = (accessToken, refreshToken)=>{\n    const oauth2Client = createOAuth2Client();\n    oauth2Client.setCredentials({\n        access_token: accessToken,\n        refresh_token: refreshToken\n    });\n    return googleapis__WEBPACK_IMPORTED_MODULE_1__.google.gmail({\n        version: 'v1',\n        auth: oauth2Client\n    });\n};\n// Send email via Gmail API with attachments\nconst sendEmail = async (gmailClient, to, subject, body, from, attachments = [])=>{\n    const boundary = '----=_Part_' + Math.random().toString(36).substr(2, 9);\n    // Create multipart message\n    let message = [\n        `To: ${to}`,\n        `From: ${from}`,\n        `Subject: ${subject}`,\n        `MIME-Version: 1.0`,\n        `Content-Type: multipart/mixed; boundary=\"${boundary}\"`,\n        '',\n        `--${boundary}`,\n        `Content-Type: text/plain; charset=UTF-8`,\n        `Content-Transfer-Encoding: 7bit`,\n        '',\n        body\n    ].join('\\n');\n    // Add attachments if any\n    for (const attachment of attachments){\n        message += [\n            '',\n            `--${boundary}`,\n            `Content-Type: ${attachment.contentType}`,\n            `Content-Disposition: attachment; filename=\"${attachment.filename}\"`,\n            `Content-Transfer-Encoding: base64`,\n            '',\n            attachment.content\n        ].join('\\n');\n    }\n    // Close the multipart message\n    message += `\\n--${boundary}--`;\n    const encodedMessage = Buffer.from(message).toString('base64').replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n    try {\n        const response = await gmailClient.users.messages.send({\n            userId: 'me',\n            requestBody: {\n                raw: encodedMessage\n            }\n        });\n        return response.data;\n    } catch (error) {\n        console.error('Error sending email:', error);\n        throw new Error('Failed to send email');\n    }\n};\n// Set up Gmail push notifications (watch request)\nconst setupGmailWatch = async (gmailClient, topicName, webhookUrl)=>{\n    try {\n        const response = await gmailClient.users.watch({\n            userId: 'me',\n            requestBody: {\n                topicName: topicName,\n                labelIds: [\n                    'INBOX'\n                ]\n            }\n        });\n        console.log('Gmail watch setup successful:', response.data);\n        return response.data;\n    } catch (error) {\n        console.error('Error setting up Gmail watch:', error);\n        throw new Error('Failed to setup Gmail watch');\n    }\n};\n// Get recent messages from Gmail\nconst getRecentMessages = async (gmailClient, maxResults = 10, query = 'is:unread')=>{\n    try {\n        const response = await gmailClient.users.messages.list({\n            userId: 'me',\n            maxResults: maxResults,\n            q: query\n        });\n        return response.data;\n    } catch (error) {\n        console.error('Error fetching recent messages:', error);\n        throw new Error('Failed to fetch recent messages');\n    }\n};\n// Get full message details\nconst getMessageDetails = async (gmailClient, messageId)=>{\n    try {\n        const response = await gmailClient.users.messages.get({\n            userId: 'me',\n            id: messageId,\n            format: 'full'\n        });\n        return response.data;\n    } catch (error) {\n        console.error('Error fetching message details:', error);\n        throw new Error('Failed to fetch message details');\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdDLGFBQXFCLEVBQUUsRUFDdkJDLFFBQWdCLFdBQVc7SUFFM0IsSUFBSTtRQUNGLE1BQU0xQyxXQUFXLE1BQU1TLFlBQVlvQixLQUFLLENBQUNDLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDO1lBQ3JEL0QsUUFBUTtZQUNSNkQsWUFBWUE7WUFDWkcsR0FBR0Y7UUFDTDtRQUVBLE9BQU8xQyxTQUFTRyxJQUFJO0lBQ3RCLEVBQUUsT0FBT2IsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxNQUFNLElBQUlFLE1BQU07SUFDbEI7QUFDRixFQUFFO0FBRUYsMkJBQTJCO0FBQ3BCLE1BQU1xRCxvQkFBb0IsT0FDL0JwQyxhQUNBcUM7SUFFQSxJQUFJO1FBQ0YsTUFBTTlDLFdBQVcsTUFBTVMsWUFBWW9CLEtBQUssQ0FBQ0MsUUFBUSxDQUFDNUIsR0FBRyxDQUFDO1lBQ3BEdEIsUUFBUTtZQUNSbUUsSUFBSUQ7WUFDSkUsUUFBUTtRQUNWO1FBRUEsT0FBT2hELFNBQVNHLElBQUk7SUFDdEIsRUFBRSxPQUFPYixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE1BQU0sSUFBSUUsTUFBTTtJQUNsQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFzZW90dGltby9Db2RpbmcgUHJvamVjdHMvd2FsbC1zdHJlZXRyL3NyYy9saWIvZ21haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSAnZ29vZ2xlYXBpcyc7XG5pbXBvcnQgeyBPQXV0aDJDbGllbnQgfSBmcm9tICdnb29nbGUtYXV0aC1saWJyYXJ5JztcblxuLy8gR21haWwgQVBJIGNvbmZpZ3VyYXRpb25cbmV4cG9ydCBjb25zdCBHTUFJTF9TQ09QRVMgPSBbXG4gICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2dtYWlsLnNlbmQnLFxuICAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9nbWFpbC5yZWFkb25seScsXG4gICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2dtYWlsLm1vZGlmeScsXG4gICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLmVtYWlsJyxcbiAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8ucHJvZmlsZScsXG5dO1xuXG5leHBvcnQgY29uc3QgR01BSUxfUkVESVJFQ1RfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTH0vYXBpL2F1dGgvZ21haWwvY2FsbGJhY2tgO1xuXG4vLyBDcmVhdGUgT0F1dGgyIGNsaWVudFxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9BdXRoMkNsaWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBPQXV0aDJDbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICBHTUFJTF9SRURJUkVDVF9VUklcbiAgKTtcbn07XG5cbi8vIEdlbmVyYXRlIE9BdXRoMiBVUkxcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUF1dGhVcmwgPSAodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgb2F1dGgyQ2xpZW50ID0gY3JlYXRlT0F1dGgyQ2xpZW50KCk7XG4gIFxuICByZXR1cm4gb2F1dGgyQ2xpZW50LmdlbmVyYXRlQXV0aFVybCh7XG4gICAgYWNjZXNzX3R5cGU6ICdvZmZsaW5lJyxcbiAgICBzY29wZTogR01BSUxfU0NPUEVTLFxuICAgIHN0YXRlOiB1c2VySWQsIC8vIFBhc3MgQ2xlcmsgdXNlciBJRCBpbiBzdGF0ZVxuICAgIHByb21wdDogJ2NvbnNlbnQnLCAvLyBGb3JjZSBjb25zZW50IHNjcmVlbiB0byBnZXQgcmVmcmVzaCB0b2tlblxuICB9KTtcbn07XG5cbi8vIEV4Y2hhbmdlIGNvZGUgZm9yIHRva2Vuc1xuZXhwb3J0IGNvbnN0IGV4Y2hhbmdlQ29kZUZvclRva2VucyA9IGFzeW5jIChjb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgb2F1dGgyQ2xpZW50ID0gY3JlYXRlT0F1dGgyQ2xpZW50KCk7XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBhd2FpdCBvYXV0aDJDbGllbnQuZ2V0VG9rZW4oY29kZSk7XG4gICAgcmV0dXJuIHRva2VucztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleGNoYW5naW5nIGNvZGUgZm9yIHRva2VuczonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZXhjaGFuZ2UgY29kZSBmb3IgdG9rZW5zJyk7XG4gIH1cbn07XG5cbi8vIEdldCB1c2VyIGluZm8gZnJvbSBHb29nbGVcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jIChhY2Nlc3NUb2tlbjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG9hdXRoMkNsaWVudCA9IGNyZWF0ZU9BdXRoMkNsaWVudCgpO1xuICBcbiAgb2F1dGgyQ2xpZW50LnNldENyZWRlbnRpYWxzKHtcbiAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc1Rva2VuLFxuICB9KTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc3Qgb2F1dGgyID0gZ29vZ2xlLm9hdXRoMih7IHZlcnNpb246ICd2MicsIGF1dGg6IG9hdXRoMkNsaWVudCB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9hdXRoMi51c2VyaW5mby5nZXQoKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHVzZXIgaW5mbzonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHVzZXIgaW5mbycpO1xuICB9XG59O1xuXG4vLyBDcmVhdGUgR21haWwgQVBJIGNsaWVudCB3aXRoIHRva2Vuc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUdtYWlsQ2xpZW50ID0gKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIHJlZnJlc2hUb2tlbjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG9hdXRoMkNsaWVudCA9IGNyZWF0ZU9BdXRoMkNsaWVudCgpO1xuICBcbiAgb2F1dGgyQ2xpZW50LnNldENyZWRlbnRpYWxzKHtcbiAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbixcbiAgfSk7XG4gIFxuICByZXR1cm4gZ29vZ2xlLmdtYWlsKHsgdmVyc2lvbjogJ3YxJywgYXV0aDogb2F1dGgyQ2xpZW50IH0pO1xufTtcblxuLy8gU2VuZCBlbWFpbCB2aWEgR21haWwgQVBJIHdpdGggYXR0YWNobWVudHNcbmV4cG9ydCBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoXG4gIGdtYWlsQ2xpZW50OiBhbnksXG4gIHRvOiBzdHJpbmcsXG4gIHN1YmplY3Q6IHN0cmluZyxcbiAgYm9keTogc3RyaW5nLFxuICBmcm9tOiBzdHJpbmcsXG4gIGF0dGFjaG1lbnRzOiBBcnJheTx7IGZpbGVuYW1lOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgY29udGVudFR5cGU6IHN0cmluZyB9PiA9IFtdXG4pID0+IHtcbiAgY29uc3QgYm91bmRhcnkgPSAnLS0tLT1fUGFydF8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICBcbiAgLy8gQ3JlYXRlIG11bHRpcGFydCBtZXNzYWdlXG4gIGxldCBtZXNzYWdlID0gW1xuICAgIGBUbzogJHt0b31gLFxuICAgIGBGcm9tOiAke2Zyb219YCxcbiAgICBgU3ViamVjdDogJHtzdWJqZWN0fWAsXG4gICAgYE1JTUUtVmVyc2lvbjogMS4wYCxcbiAgICBgQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvbWl4ZWQ7IGJvdW5kYXJ5PVwiJHtib3VuZGFyeX1cImAsXG4gICAgJycsXG4gICAgYC0tJHtib3VuZGFyeX1gLFxuICAgIGBDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9VVRGLThgLFxuICAgIGBDb250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiA3Yml0YCxcbiAgICAnJyxcbiAgICBib2R5LFxuICBdLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFkZCBhdHRhY2htZW50cyBpZiBhbnlcbiAgZm9yIChjb25zdCBhdHRhY2htZW50IG9mIGF0dGFjaG1lbnRzKSB7XG4gICAgbWVzc2FnZSArPSBbXG4gICAgICAnJyxcbiAgICAgIGAtLSR7Ym91bmRhcnl9YCxcbiAgICAgIGBDb250ZW50LVR5cGU6ICR7YXR0YWNobWVudC5jb250ZW50VHlwZX1gLFxuICAgICAgYENvbnRlbnQtRGlzcG9zaXRpb246IGF0dGFjaG1lbnQ7IGZpbGVuYW1lPVwiJHthdHRhY2htZW50LmZpbGVuYW1lfVwiYCxcbiAgICAgIGBDb250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiBiYXNlNjRgLFxuICAgICAgJycsXG4gICAgICBhdHRhY2htZW50LmNvbnRlbnQsXG4gICAgXS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8vIENsb3NlIHRoZSBtdWx0aXBhcnQgbWVzc2FnZVxuICBtZXNzYWdlICs9IGBcXG4tLSR7Ym91bmRhcnl9LS1gO1xuXG4gIGNvbnN0IGVuY29kZWRNZXNzYWdlID0gQnVmZmVyLmZyb20obWVzc2FnZSkudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgLnJlcGxhY2UoLz0rJC8sICcnKTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnbWFpbENsaWVudC51c2Vycy5tZXNzYWdlcy5zZW5kKHtcbiAgICAgIHVzZXJJZDogJ21lJyxcbiAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgIHJhdzogZW5jb2RlZE1lc3NhZ2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZW1haWw6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHNlbmQgZW1haWwnKTtcbiAgfVxufTtcblxuLy8gU2V0IHVwIEdtYWlsIHB1c2ggbm90aWZpY2F0aW9ucyAod2F0Y2ggcmVxdWVzdClcbmV4cG9ydCBjb25zdCBzZXR1cEdtYWlsV2F0Y2ggPSBhc3luYyAoXG4gIGdtYWlsQ2xpZW50OiBhbnksXG4gIHRvcGljTmFtZTogc3RyaW5nLFxuICB3ZWJob29rVXJsOiBzdHJpbmdcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ21haWxDbGllbnQudXNlcnMud2F0Y2goe1xuICAgICAgdXNlcklkOiAnbWUnLFxuICAgICAgcmVxdWVzdEJvZHk6IHtcbiAgICAgICAgdG9waWNOYW1lOiB0b3BpY05hbWUsXG4gICAgICAgIGxhYmVsSWRzOiBbJ0lOQk9YJ10sIC8vIFdhdGNoIGZvciBtZXNzYWdlcyBpbiBJTkJPWFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnR21haWwgd2F0Y2ggc2V0dXAgc3VjY2Vzc2Z1bDonLCByZXNwb25zZS5kYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIHVwIEdtYWlsIHdhdGNoOicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBzZXR1cCBHbWFpbCB3YXRjaCcpO1xuICB9XG59O1xuXG4vLyBHZXQgcmVjZW50IG1lc3NhZ2VzIGZyb20gR21haWxcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRNZXNzYWdlcyA9IGFzeW5jIChcbiAgZ21haWxDbGllbnQ6IGFueSxcbiAgbWF4UmVzdWx0czogbnVtYmVyID0gMTAsXG4gIHF1ZXJ5OiBzdHJpbmcgPSAnaXM6dW5yZWFkJ1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnbWFpbENsaWVudC51c2Vycy5tZXNzYWdlcy5saXN0KHtcbiAgICAgIHVzZXJJZDogJ21lJyxcbiAgICAgIG1heFJlc3VsdHM6IG1heFJlc3VsdHMsXG4gICAgICBxOiBxdWVyeSxcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZWNlbnQgbWVzc2FnZXM6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHJlY2VudCBtZXNzYWdlcycpO1xuICB9XG59O1xuXG4vLyBHZXQgZnVsbCBtZXNzYWdlIGRldGFpbHNcbmV4cG9ydCBjb25zdCBnZXRNZXNzYWdlRGV0YWlscyA9IGFzeW5jIChcbiAgZ21haWxDbGllbnQ6IGFueSxcbiAgbWVzc2FnZUlkOiBzdHJpbmdcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ21haWxDbGllbnQudXNlcnMubWVzc2FnZXMuZ2V0KHtcbiAgICAgIHVzZXJJZDogJ21lJyxcbiAgICAgIGlkOiBtZXNzYWdlSWQsXG4gICAgICBmb3JtYXQ6ICdmdWxsJyxcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtZXNzYWdlIGRldGFpbHM6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIG1lc3NhZ2UgZGV0YWlscycpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImdvb2dsZSIsIk9BdXRoMkNsaWVudCIsIkdNQUlMX1NDT1BFUyIsIkdNQUlMX1JFRElSRUNUX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUFBfVVJMIiwiY3JlYXRlT0F1dGgyQ2xpZW50IiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiZ2VuZXJhdGVBdXRoVXJsIiwidXNlcklkIiwib2F1dGgyQ2xpZW50IiwiYWNjZXNzX3R5cGUiLCJzY29wZSIsInN0YXRlIiwicHJvbXB0IiwiZXhjaGFuZ2VDb2RlRm9yVG9rZW5zIiwiY29kZSIsInRva2VucyIsImdldFRva2VuIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJnZXRVc2VySW5mbyIsImFjY2Vzc1Rva2VuIiwic2V0Q3JlZGVudGlhbHMiLCJhY2Nlc3NfdG9rZW4iLCJvYXV0aDIiLCJ2ZXJzaW9uIiwiYXV0aCIsInJlc3BvbnNlIiwidXNlcmluZm8iLCJnZXQiLCJkYXRhIiwiY3JlYXRlR21haWxDbGllbnQiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZ21haWwiLCJzZW5kRW1haWwiLCJnbWFpbENsaWVudCIsInRvIiwic3ViamVjdCIsImJvZHkiLCJmcm9tIiwiYXR0YWNobWVudHMiLCJib3VuZGFyeSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsIm1lc3NhZ2UiLCJqb2luIiwiYXR0YWNobWVudCIsImNvbnRlbnRUeXBlIiwiZmlsZW5hbWUiLCJjb250ZW50IiwiZW5jb2RlZE1lc3NhZ2UiLCJCdWZmZXIiLCJyZXBsYWNlIiwidXNlcnMiLCJtZXNzYWdlcyIsInNlbmQiLCJyZXF1ZXN0Qm9keSIsInJhdyIsInNldHVwR21haWxXYXRjaCIsInRvcGljTmFtZSIsIndlYmhvb2tVcmwiLCJ3YXRjaCIsImxhYmVsSWRzIiwibG9nIiwiZ2V0UmVjZW50TWVzc2FnZXMiLCJtYXhSZXN1bHRzIiwicXVlcnkiLCJsaXN0IiwicSIsImdldE1lc3NhZ2VEZXRhaWxzIiwibWVzc2FnZUlkIiwiaWQiLCJmb3JtYXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/gmail.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "./work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "next/dist/shared/lib/no-fallback-error.external":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external");

/***/ }),

/***/ "next/dist/shared/lib/router/utils/app-paths":
/*!**************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/app-paths" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/app-paths");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions","vendor-chunks/googleapis","vendor-chunks/google-auth-library","vendor-chunks/googleapis-common","vendor-chunks/math-intrinsics","vendor-chunks/gaxios","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/jws","vendor-chunks/call-bind-apply-helpers","vendor-chunks/json-bigint","vendor-chunks/google-logging-utils","vendor-chunks/get-proto","vendor-chunks/gcp-metadata","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/gtoken","vendor-chunks/url-template","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/safe-buffer","vendor-chunks/jwa","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/extend","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bignumber.js","vendor-chunks/base64-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Femail%2Fsend%2Froute&page=%2Fapi%2Femail%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Fsend%2Froute.ts&appDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchaseottimo%2FCoding%20Projects%2Fwall-streetr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!")));
module.exports = __webpack_exports__;

})();