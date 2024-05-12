import {theme} from "./Theme";

export const font = ({family, weight, color, lineHeight, fMax, fMin}:PropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360)*(${fMax} - ${fMin}) + ${fMin}px );
`

type PropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fMax?: number
    fMin?: number
}