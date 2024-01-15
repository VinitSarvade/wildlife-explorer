import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/search/$animal').createRoute({
  component: SearchResults,
});

export default function SearchResults() {
  return <h1>Results</h1>;
}
