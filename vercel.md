[10:37:14.537] Running build in Washington, D.C., USA (East) – iad1
[10:37:14.692] Cloning github.com/Ismailhajjix/achrafservices (Branch: main, Commit: 1c5e832)
[10:37:15.153] Cloning completed: 461.000ms
[10:37:15.317] Previous build cache not available
[10:37:15.527] Running "vercel build"
[10:37:15.919] Vercel CLI 41.0.3
[10:37:16.248] Installing dependencies...
[10:37:30.574] 
[10:37:30.575] added 538 packages in 14s
[10:37:30.575] 
[10:37:30.576] 169 packages are looking for funding
[10:37:30.576]   run `npm fund` for details
[10:37:30.630] Detected Next.js version: 15.1.7
[10:37:30.634] Running "npm run build"
[10:37:30.875] 
[10:37:30.876] > my-v0-project@0.1.0 build
[10:37:30.876] > next build
[10:37:30.876] 
[10:37:31.521] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[10:37:31.522] This information is used to shape Next.js' roadmap and prioritize features.
[10:37:31.522] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[10:37:31.522] https://nextjs.org/telemetry
[10:37:31.522] 
[10:37:31.580]    ▲ Next.js 15.1.7
[10:37:31.581]    - Experiments (use with caution):
[10:37:31.581]      · optimizeCss
[10:37:31.581]      · typedRoutes
[10:37:31.581]      · webpackBuildWorker
[10:37:31.582] 
[10:37:31.651]    Creating an optimized production build ...
[10:37:34.225] (node:214) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[10:37:34.244] (Use `node --trace-deprecation ...` to show where the warning was created)
[10:37:46.205] (node:286) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
[10:37:46.205] (Use `node --trace-deprecation ...` to show where the warning was created)
[10:37:55.277]  ✓ Compiled successfully
[10:37:55.281]    Linting and checking validity of types ...
[10:38:02.273] 
[10:38:02.274] Failed to compile.
[10:38:02.274] 
[10:38:02.274] ./app/appointment/page.tsx
[10:38:02.275] 7:39  Warning: 'MessageSquare' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.275] 119:11  Warning: 'ServiceCategory' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.275] 184:14  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.275] 247:78  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[10:38:02.275] 
[10:38:02.275] ./app/error.tsx
[10:38:02.275] 8:3  Warning: 'reset' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.275] 
[10:38:02.276] ./app/global-error.tsx
[10:38:02.276] 8:3  Warning: 'reset' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.276] 
[10:38:02.276] ./app/not-found.tsx
[10:38:02.276] 2:8  Warning: 'Link' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.276] 
[10:38:02.277] ./app/policies/contact/page.tsx
[10:38:02.289] 3:64  Warning: 'Settings' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.290] 
[10:38:02.290] ./components/application/header.tsx
[10:38:02.290] 3:10  Warning: 'cn' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.290] 
[10:38:02.290] ./components/error-page.tsx
[10:38:02.290] 5:15  Warning: 'Route' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.291] 
[10:38:02.291] ./components/footer/footer.tsx
[10:38:02.291] 6:10  Warning: 'motion' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.291] 
[10:38:02.291] ./components/header/client-header.tsx
[10:38:02.291] 13:3  Warning: 'Globe2' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.291] 18:3  Warning: 'ChevronDown' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.292] 23:3  Warning: 'Globe' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.292] 25:3  Warning: 'Users' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.292] 26:3  Warning: 'Building2' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.292] 27:3  Warning: 'FileCheck' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 28:3  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 29:3  Warning: 'Landmark' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 30:3  Warning: 'BadgeCheck' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 34:10  Warning: 'Input' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 114:9  Warning: 'navigationItems' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 122:9  Warning: 'mobileNavigationItems' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.293] 130:9  Warning: 'menuItems' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.294] 
[10:38:02.294] ./components/header/header-skeleton.tsx
[10:38:02.294] 3:10  Warning: 'motion' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.294] 
[10:38:02.297] ./components/header/mobile-menu.tsx
[10:38:02.309] 4:10  Warning: 'Menu' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 4:16  Warning: 'X' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 6:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 
[10:38:02.310] ./components/layouts/policy-layout-client.tsx
[10:38:02.310] 3:10  Warning: 'motion' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 
[10:38:02.310] ./components/layouts/policy-page.tsx
[10:38:02.310] 3:15  Warning: 'ReactNode' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 
[10:38:02.310] ./components/sections/__tests__/setup.ts
[10:38:02.310] 7:47  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[10:38:02.310] 13:35  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[10:38:02.310] 19:20  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[10:38:02.310] 25:20  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[10:38:02.310] 
[10:38:02.310] ./components/sections/choose-your-destination.tsx
[10:38:02.310] 3:18  Warning: 'AnimatePresence' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:10  Warning: 'ChevronDown' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:23  Warning: 'Clock' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:30  Warning: 'Euro' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:36  Warning: 'GraduationCap' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:51  Warning: 'Briefcase' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:62  Warning: 'Home' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:68  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 5:76  Warning: 'ArrowRight' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 6:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 8:10  Warning: 'Card' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 8:16  Warning: 'CardHeader' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 8:28  Warning: 'CardContent' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 10:10  Warning: 'cn' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.310] 18:11  Warning: 'Country' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 255:7  Warning: 'countryDetails' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 2787:10  Warning: 'hoveredCountry' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 2787:26  Warning: 'setHoveredCountry' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 
[10:38:02.311] ./components/sections/contact-form.tsx
[10:38:02.311] 7:24  Warning: 'Phone' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 7:44  Warning: 'ArrowRight' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 106:16  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[10:38:02.311] 
[10:38:02.311] ./components/sections/hero.tsx
[10:38:02.311] 3:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 4:10  Warning: 'Input' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:10  Warning: 'Search' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:48  Warning: 'Star' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 153:9  Warning: 'handleContactClick' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 229:9  Warning: 'handleContactClick' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 337:51  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[10:38:02.311] 
[10:38:02.311] ./components/sections/team-member.tsx
[10:38:02.311] 6:10  Warning: 'Facebook' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 6:29  Warning: 'Instagram' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 
[10:38:02.311] ./components/sections/testimonials.tsx
[10:38:02.311] 991:16  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[10:38:02.311] 991:50  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[10:38:02.311] 
[10:38:02.311] ./components/sections/vip-services-client.tsx
[10:38:02.311] 5:10  Warning: 'Users' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:17  Warning: 'Building2' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:28  Warning: 'FileCheck' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:39  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:47  Warning: 'Landmark' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.311] 5:57  Warning: 'BadgeCheck' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 5:69  Warning: 'MessageSquare' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 5:84  Warning: 'HomeIcon' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 5:94  Warning: 'Briefcase' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 5:105  Warning: 'Globe' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 
[10:38:02.312] ./components/sections/vip-services.tsx
[10:38:02.312] 4:10  Warning: 'motion' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 4:18  Warning: 'AnimatePresence' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 4:35  Warning: 'useScroll' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 4:46  Warning: 'useTransform' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 5:8  Warning: 'Link' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 7:10  Warning: 'useInView' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 8:10  Warning: 'useRef' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 8:18  Warning: 'useState' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 8:28  Warning: 'useEffect' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 14:9  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[10:38:02.312] 282:7  Warning: 'styles' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 
[10:38:02.312] ./components/sections/working-process.tsx
[10:38:02.312] 3:18  Warning: 'AnimatePresence' is defined but never used.  @typescript-eslint/no-unused-vars
[10:38:02.312] 
[10:38:02.312] ./components/theme-provider.tsx
[10:38:02.312] 8:18  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[10:38:02.312] 
[10:38:02.312] ./components/ui/use-toast.ts
[10:38:02.312] 18:7  Warning: 'actionTypes' is assigned a value but only used as a type.  @typescript-eslint/no-unused-vars
[10:38:02.312] 
[10:38:02.312] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[10:38:02.317] Error: Command "npm run build" exited with 1
[10:38:02.655] 