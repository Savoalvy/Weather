export const routes = {
  home: () => '/',
  about: () => '/about',
  weather: (city: string) => `/weather/${city}`
};
