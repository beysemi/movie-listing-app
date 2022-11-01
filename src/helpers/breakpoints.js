const breakpoints = {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
}
const mediaQueriesType = {
    up: 'min-width',
    down: 'max-width',
}

const up = (breakpoint, css) => {
    return `@media (${mediaQueriesType.up}: ${breakpoints[breakpoint]}){
        ${css}
    }`
}
const down = (breakpoint, css) => {
    return `@media (${mediaQueriesType.up}: ${breakpoints[breakpoint]}){
        ${css}
    }`
}

export { up, down };