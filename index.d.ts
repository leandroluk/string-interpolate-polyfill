declare module 'NodeJS' {
  interface Global {
    String: String;
  }
}
declare global {
  interface String {
    interpolate<T = any>(
      view: T | import('mustache/index').Context,
      partials?: import('mustache/index').PartialsOrLookupFn,
      config?: import('mustache/index').OpeningAndClosingTags | import('mustache/index').RenderOptions
    ): string;
  }
}
