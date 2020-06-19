let lastPoint = '';

const numberBreackpoint = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5
};

const getBreakpoint = (screens, normalized=false) => {
    const breakpoint = Object.entries(screens).filter(screen => !!screen[1]).map(screen => screen[0]);
    if(breakpoint.length>0){
        lastPoint = breakpoint[breakpoint.length-1];
    }
    if(normalized) return numberBreackpoint[lastPoint];
    return lastPoint;
};

export default getBreakpoint;