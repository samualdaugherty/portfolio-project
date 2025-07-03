
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BackgroundStripes': typeof import("../components/BackgroundStripes.vue")['default']
    'BetterRecsHeroSection': typeof import("../components/BetterRecsHeroSection.vue")['default']
    'BioSection': typeof import("../components/BioSection.vue")['default']
    'BlogGrid': typeof import("../components/BlogGrid.vue")['default']
    'BlueprintHeroSection': typeof import("../components/BlueprintHeroSection.vue")['default']
    'ContactHeroSection': typeof import("../components/ContactHeroSection.vue")['default']
    'EvergreenBlogPost': typeof import("../components/EvergreenBlogPost.vue")['default']
    'EvergreenFlourish': typeof import("../components/EvergreenFlourish.vue")['default']
    'ExperienceSection': typeof import("../components/ExperienceSection.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'LatestFlourish': typeof import("../components/LatestFlourish.vue")['default']
    'Navigation': typeof import("../components/Navigation.vue")['default']
    'OnwardButton': typeof import("../components/OnwardButton.vue")['default']
    'ProjectShowcase': typeof import("../components/ProjectShowcase.vue")['default']
    'ProjectShowcaseRecs': typeof import("../components/ProjectShowcaseRecs.vue")['default']
    'ProjectShowcaseToday': typeof import("../components/ProjectShowcaseToday.vue")['default']
    'ReadMoreButton': typeof import("../components/ReadMoreButton.vue")['default']
    'SectionHeading': typeof import("../components/SectionHeading.vue")['default']
    'SiteFooter': typeof import("../components/SiteFooter.vue")['default']
    'TLDRHeroSection': typeof import("../components/TLDRHeroSection.vue")['default']
    'TLDRMore': typeof import("../components/TLDRMore.vue")['default']
    'TalkSoon': typeof import("../components/TalkSoon.vue")['default']
    'TheresMore': typeof import("../components/TheresMore.vue")['default']
    'TodayCardHeroSection': typeof import("../components/TodayCardHeroSection.vue")['default']
    'WorkHeroSection': typeof import("../components/WorkHeroSection.vue")['default']
    'WorkProjectShowcase': typeof import("../components/WorkProjectShowcase.vue")['default']
    'WorkforceEquityHeroSection': typeof import("../components/WorkforceEquityHeroSection.vue")['default']
    'WritingHeroSection': typeof import("../components/WritingHeroSection.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBackgroundStripes': LazyComponent<typeof import("../components/BackgroundStripes.vue")['default']>
    'LazyBetterRecsHeroSection': LazyComponent<typeof import("../components/BetterRecsHeroSection.vue")['default']>
    'LazyBioSection': LazyComponent<typeof import("../components/BioSection.vue")['default']>
    'LazyBlogGrid': LazyComponent<typeof import("../components/BlogGrid.vue")['default']>
    'LazyBlueprintHeroSection': LazyComponent<typeof import("../components/BlueprintHeroSection.vue")['default']>
    'LazyContactHeroSection': LazyComponent<typeof import("../components/ContactHeroSection.vue")['default']>
    'LazyEvergreenBlogPost': LazyComponent<typeof import("../components/EvergreenBlogPost.vue")['default']>
    'LazyEvergreenFlourish': LazyComponent<typeof import("../components/EvergreenFlourish.vue")['default']>
    'LazyExperienceSection': LazyComponent<typeof import("../components/ExperienceSection.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../components/HeroSection.vue")['default']>
    'LazyLatestFlourish': LazyComponent<typeof import("../components/LatestFlourish.vue")['default']>
    'LazyNavigation': LazyComponent<typeof import("../components/Navigation.vue")['default']>
    'LazyOnwardButton': LazyComponent<typeof import("../components/OnwardButton.vue")['default']>
    'LazyProjectShowcase': LazyComponent<typeof import("../components/ProjectShowcase.vue")['default']>
    'LazyProjectShowcaseRecs': LazyComponent<typeof import("../components/ProjectShowcaseRecs.vue")['default']>
    'LazyProjectShowcaseToday': LazyComponent<typeof import("../components/ProjectShowcaseToday.vue")['default']>
    'LazyReadMoreButton': LazyComponent<typeof import("../components/ReadMoreButton.vue")['default']>
    'LazySectionHeading': LazyComponent<typeof import("../components/SectionHeading.vue")['default']>
    'LazySiteFooter': LazyComponent<typeof import("../components/SiteFooter.vue")['default']>
    'LazyTLDRHeroSection': LazyComponent<typeof import("../components/TLDRHeroSection.vue")['default']>
    'LazyTLDRMore': LazyComponent<typeof import("../components/TLDRMore.vue")['default']>
    'LazyTalkSoon': LazyComponent<typeof import("../components/TalkSoon.vue")['default']>
    'LazyTheresMore': LazyComponent<typeof import("../components/TheresMore.vue")['default']>
    'LazyTodayCardHeroSection': LazyComponent<typeof import("../components/TodayCardHeroSection.vue")['default']>
    'LazyWorkHeroSection': LazyComponent<typeof import("../components/WorkHeroSection.vue")['default']>
    'LazyWorkProjectShowcase': LazyComponent<typeof import("../components/WorkProjectShowcase.vue")['default']>
    'LazyWorkforceEquityHeroSection': LazyComponent<typeof import("../components/WorkforceEquityHeroSection.vue")['default']>
    'LazyWritingHeroSection': LazyComponent<typeof import("../components/WritingHeroSection.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BackgroundStripes: typeof import("../components/BackgroundStripes.vue")['default']
export const BetterRecsHeroSection: typeof import("../components/BetterRecsHeroSection.vue")['default']
export const BioSection: typeof import("../components/BioSection.vue")['default']
export const BlogGrid: typeof import("../components/BlogGrid.vue")['default']
export const BlueprintHeroSection: typeof import("../components/BlueprintHeroSection.vue")['default']
export const ContactHeroSection: typeof import("../components/ContactHeroSection.vue")['default']
export const EvergreenBlogPost: typeof import("../components/EvergreenBlogPost.vue")['default']
export const EvergreenFlourish: typeof import("../components/EvergreenFlourish.vue")['default']
export const ExperienceSection: typeof import("../components/ExperienceSection.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const LatestFlourish: typeof import("../components/LatestFlourish.vue")['default']
export const Navigation: typeof import("../components/Navigation.vue")['default']
export const OnwardButton: typeof import("../components/OnwardButton.vue")['default']
export const ProjectShowcase: typeof import("../components/ProjectShowcase.vue")['default']
export const ProjectShowcaseRecs: typeof import("../components/ProjectShowcaseRecs.vue")['default']
export const ProjectShowcaseToday: typeof import("../components/ProjectShowcaseToday.vue")['default']
export const ReadMoreButton: typeof import("../components/ReadMoreButton.vue")['default']
export const SectionHeading: typeof import("../components/SectionHeading.vue")['default']
export const SiteFooter: typeof import("../components/SiteFooter.vue")['default']
export const TLDRHeroSection: typeof import("../components/TLDRHeroSection.vue")['default']
export const TLDRMore: typeof import("../components/TLDRMore.vue")['default']
export const TalkSoon: typeof import("../components/TalkSoon.vue")['default']
export const TheresMore: typeof import("../components/TheresMore.vue")['default']
export const TodayCardHeroSection: typeof import("../components/TodayCardHeroSection.vue")['default']
export const WorkHeroSection: typeof import("../components/WorkHeroSection.vue")['default']
export const WorkProjectShowcase: typeof import("../components/WorkProjectShowcase.vue")['default']
export const WorkforceEquityHeroSection: typeof import("../components/WorkforceEquityHeroSection.vue")['default']
export const WritingHeroSection: typeof import("../components/WritingHeroSection.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBackgroundStripes: LazyComponent<typeof import("../components/BackgroundStripes.vue")['default']>
export const LazyBetterRecsHeroSection: LazyComponent<typeof import("../components/BetterRecsHeroSection.vue")['default']>
export const LazyBioSection: LazyComponent<typeof import("../components/BioSection.vue")['default']>
export const LazyBlogGrid: LazyComponent<typeof import("../components/BlogGrid.vue")['default']>
export const LazyBlueprintHeroSection: LazyComponent<typeof import("../components/BlueprintHeroSection.vue")['default']>
export const LazyContactHeroSection: LazyComponent<typeof import("../components/ContactHeroSection.vue")['default']>
export const LazyEvergreenBlogPost: LazyComponent<typeof import("../components/EvergreenBlogPost.vue")['default']>
export const LazyEvergreenFlourish: LazyComponent<typeof import("../components/EvergreenFlourish.vue")['default']>
export const LazyExperienceSection: LazyComponent<typeof import("../components/ExperienceSection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyLatestFlourish: LazyComponent<typeof import("../components/LatestFlourish.vue")['default']>
export const LazyNavigation: LazyComponent<typeof import("../components/Navigation.vue")['default']>
export const LazyOnwardButton: LazyComponent<typeof import("../components/OnwardButton.vue")['default']>
export const LazyProjectShowcase: LazyComponent<typeof import("../components/ProjectShowcase.vue")['default']>
export const LazyProjectShowcaseRecs: LazyComponent<typeof import("../components/ProjectShowcaseRecs.vue")['default']>
export const LazyProjectShowcaseToday: LazyComponent<typeof import("../components/ProjectShowcaseToday.vue")['default']>
export const LazyReadMoreButton: LazyComponent<typeof import("../components/ReadMoreButton.vue")['default']>
export const LazySectionHeading: LazyComponent<typeof import("../components/SectionHeading.vue")['default']>
export const LazySiteFooter: LazyComponent<typeof import("../components/SiteFooter.vue")['default']>
export const LazyTLDRHeroSection: LazyComponent<typeof import("../components/TLDRHeroSection.vue")['default']>
export const LazyTLDRMore: LazyComponent<typeof import("../components/TLDRMore.vue")['default']>
export const LazyTalkSoon: LazyComponent<typeof import("../components/TalkSoon.vue")['default']>
export const LazyTheresMore: LazyComponent<typeof import("../components/TheresMore.vue")['default']>
export const LazyTodayCardHeroSection: LazyComponent<typeof import("../components/TodayCardHeroSection.vue")['default']>
export const LazyWorkHeroSection: LazyComponent<typeof import("../components/WorkHeroSection.vue")['default']>
export const LazyWorkProjectShowcase: LazyComponent<typeof import("../components/WorkProjectShowcase.vue")['default']>
export const LazyWorkforceEquityHeroSection: LazyComponent<typeof import("../components/WorkforceEquityHeroSection.vue")['default']>
export const LazyWritingHeroSection: LazyComponent<typeof import("../components/WritingHeroSection.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
