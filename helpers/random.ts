import { CoordinateTypes } from "../types";

const getColor = () => "#"+((1<<24)*Math.random()|0).toString(16);
    
const isBiggerZero = () => Math.random() - 0.5 > 0;
    
const getNumber = (from: number, to: number) => Math.floor(Math.random() * to) + from;

const getPosition = (direction: CoordinateTypes, radius: number) => {
    const width = direction === 'x' ? window.innerWidth : window.innerHeight;
    const result = Math.random() * (width - radius);

    return result - radius > width / 2 ? result - radius : result + radius;
}

export const RandomHelper = {
    getColor,
    getNumber,
    isBiggerZero,
    getPosition
}