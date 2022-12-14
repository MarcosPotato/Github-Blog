import { keyframes } from "styled-components"

export const fade = keyframes`
    from{
        opacity: 0;
        transform: scale(0.9);
    } to {
        opacity: 1;
        transform: scale(1);
    }
`