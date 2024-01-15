import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as IndexImport } from './routes/index'
import { Route as SearchAnimalImport } from './routes/search/$animal'

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchAnimalRoute = SearchAnimalImport.update({
  path: '/$animal',
  getParentRoute: () => SearchRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/search/$animal': {
      preLoaderRoute: typeof SearchAnimalImport
      parentRoute: typeof SearchImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  SearchRoute.addChildren([SearchAnimalRoute]),
])
