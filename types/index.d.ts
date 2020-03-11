declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg' {
  const content: any
  export default content
}

declare namespace JSX {
  interface IntrinsicElements {
    DragonFly: any,
    GlobalNav: any,
    SiteNameIcon: any,
    HomeIntroSection: any
  }
}

declare const graphql: (query: TemplateStringsArray) => void
