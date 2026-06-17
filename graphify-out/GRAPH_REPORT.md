# Graph Report - frontend  (2026-06-12)

## Corpus Check
- 275 files · ~610,584 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1022 nodes · 1112 edges · 182 communities (160 shown, 22 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3e0f0d84`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 115|Community 115]]
- [[_COMMUNITY_Community 130|Community 130]]
- [[_COMMUNITY_Community 149|Community 149]]

## God Nodes (most connected - your core abstractions)
1. `DynamicKazniisaPage()` - 75 edges
2. `compilerOptions` - 14 edges
3. `getFirstImage()` - 8 edges
4. `Header()` - 6 edges
5. `buttonVariants` - 6 edges
6. `scripts` - 5 edges
7. `useCarousel()` - 5 edges
8. `useFormField()` - 5 edges
9. `useSidebar()` - 5 edges
10. `getSnippet()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AlertDialogAction()` --calls--> `buttonVariants`  [INFERRED]
  src/components/ui/alert-dialog.tsx → src/components/ui/button.tsx
- `AlertDialogCancel()` --calls--> `buttonVariants`  [INFERRED]
  src/components/ui/alert-dialog.tsx → src/components/ui/button.tsx
- `Calendar()` --calls--> `buttonVariants`  [INFERRED]
  src/components/ui/calendar.tsx → src/components/ui/button.tsx
- `PaginationLink()` --calls--> `buttonVariants`  [INFERRED]
  src/components/ui/pagination.tsx → src/components/ui/button.tsx
- `NewsViewer()` --calls--> `getFirstImage()`  [EXTRACTED]
  src/components/newsviewer/index.js → src/utils/newsHelpers.js

## Import Cycles
- None detected.

## Communities (182 total, 22 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (57): dependencies, 2gis, @2gis/mapgl, 2gis-maps, axios, bootstrap, @editorjs/checklist, @editorjs/code (+49 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (17): mockNews, centers, Hero(), KazakhstanMap, offices, presidentialMessages, Main(), Login() (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (15): IncomeAndExpensesComponent(), AddVacancyComponent(), AdministrationComponent(), AntiCorruptionComponent(), NewsManager, CertificateOfAccreditationComponent(), CorporateDocumentComponent(), FinancialReportsComponent() (+7 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (19): Providers(), BasicBreadcrumbs(), breadcrumbNameMap, ToasterContext(), categories, Footer(), latestNews, offices (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (8): Sidebar(), SidebarContext, SidebarContextProps, SidebarMenuButton(), sidebarMenuButtonVariants, SidebarRail(), SidebarTrigger(), useSidebar()

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (7): AlertDialogAction(), AlertDialogCancel(), Button(), buttonVariants, Calendar(), PaginationLink(), PaginationLinkProps

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (7): BlogData, BlogItem(), HeaderInfo, featuresData, SingleFeature(), SingleTestimonial(), testimonialData

### Community 7 - "Community 7"
Cohesion: 0.10
Nodes (6): authSlice, initialState, loginAction(), loginInspectorAction(), sendCodeToEmailAction(), verifyCodeAction()

### Community 10 - "Community 10"
Cohesion: 0.13
Nodes (13): BlockButton(), DocumentEditor(), HOTKEYS, initialValue, InsertImageButton(), isBlockActive(), isMarkActive(), MarkButton() (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (16): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+8 more)

### Community 12 - "Community 12"
Cohesion: 0.12
Nodes (5): DialogCompositionContext, DialogContent(), useDialogComposition(), Input(), Textarea()

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (3): AddProfileData(), Header(), KazakhstanMap

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer, axios, eslint, eslint-config-next, jwt-decode, next, postcss (+7 more)

### Community 18 - "Community 18"
Cohesion: 0.19
Nodes (12): CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions, CarouselPlugin (+4 more)

### Community 19 - "Community 19"
Cohesion: 0.18
Nodes (3): EditorJSRenderer(), CATEGORIES, NewsEditorJS

### Community 20 - "Community 20"
Cohesion: 0.18
Nodes (4): Item(), ItemMedia(), itemMediaVariants, itemVariants

### Community 21 - "Community 21"
Cohesion: 0.17
Nodes (3): initialState, token, userPostsSlice

### Community 23 - "Community 23"
Cohesion: 0.23
Nodes (9): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItemContext, FormItemContextValue, FormLabel(), FormMessage() (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.22
Nodes (7): ChartConfig, ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), THEMES, useChart()

### Community 30 - "Community 30"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 31 - "Community 31"
Cohesion: 0.22
Nodes (3): createPostSlice, initialState, token

### Community 32 - "Community 32"
Cohesion: 0.22
Nodes (3): createStorySlice, initialState, token

### Community 33 - "Community 33"
Cohesion: 0.28
Nodes (4): InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants

### Community 35 - "Community 35"
Cohesion: 0.29
Nodes (5): CreateDocument(), createDocumentAction(), createDocumentByTemplateAction(), getAllAdminTemplateAction(), getAllProjectDocumentsAction()

### Community 36 - "Community 36"
Cohesion: 0.36
Nodes (3): innerPageData, PageHeader(), Sidebar()

### Community 42 - "Community 42"
Cohesion: 0.33
Nodes (4): ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 45 - "Community 45"
Cohesion: 0.33
Nodes (4): excludePaths, fs, innerDir, path

### Community 46 - "Community 46"
Cohesion: 0.33
Nodes (4): ProjectDetails, ProjectRender, addProjectAction(), getAllUserProjectsAction()

### Community 47 - "Community 47"
Cohesion: 0.40
Nodes (4): Authors, Demo, Editor KazNIISA, Run Locally

### Community 58 - "Community 58"
Cohesion: 0.50
Nodes (3): compilerOptions, paths, @/*

## Knowledge Gaps
- **166 isolated node(s):** `fs`, `path`, `innerDir`, `excludePaths`, `@/*` (+161 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DynamicKazniisaPage()` connect `Community 9` to `Community 129`, `Community 131`, `Community 132`, `Community 133`, `Community 134`, `Community 135`, `Community 8`, `Community 136`, `Community 137`, `Community 138`, `Community 141`, `Community 144`, `Community 146`, `Community 147`, `Community 151`, `Community 152`, `Community 153`, `Community 154`, `Community 155`, `Community 156`, `Community 157`, `Community 158`, `Community 159`, `Community 160`, `Community 161`, `Community 172`, `Community 173`, `Community 174`, `Community 175`, `Community 176`, `Community 177`, `Community 82`, `Community 85`, `Community 88`, `Community 89`, `Community 90`, `Community 91`, `Community 92`, `Community 93`, `Community 94`, `Community 96`, `Community 98`, `Community 99`, `Community 100`, `Community 101`, `Community 107`, `Community 109`, `Community 111`, `Community 112`, `Community 113`, `Community 114`, `Community 118`, `Community 119`, `Community 124`, `Community 125`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 0` to `Community 30`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 17` to `Community 30`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `fs`, `path`, `innerDir` to the rest of the system?**
  _166 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.03508771929824561 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10037878787878787 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09462365591397849 - nodes in this community are weakly interconnected._