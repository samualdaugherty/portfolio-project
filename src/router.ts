import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import Contact from './pages/Contact.vue'
import Writing from './pages/Writing.vue'
import TLDR from './pages/TLDR.vue'
import BlueprintCaseStudy from './pages/BlueprintCaseStudy.vue'
import BetterRecommendationsCaseStudy from './pages/BetterRecommendationsCaseStudy.vue'
import TodayCardCaseStudy from './pages/TodayCardCaseStudy.vue'
import WorkforceEquityInitiativeCaseStudy from './pages/WorkforceEquityInitiativeCaseStudy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/work', component: Work },
  { path: '/work/blueprint-mobile-banking-app', component: BlueprintCaseStudy },
  { path: '/work/better-recommendations', component: BetterRecommendationsCaseStudy },
  { path: '/work/today-card-app', component: TodayCardCaseStudy },
  { path: '/work/workforce-equity-initiative', component: WorkforceEquityInitiativeCaseStudy },
  { path: '/tldr', component: TLDR },
  { path: '/writing', component: Writing },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  },
})

export default router 