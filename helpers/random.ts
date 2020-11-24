import { CoordinateTypes } from "../types";

const getColor = () => "#"+((1<<24)*Math.random()|0).toString(16);
    
const isBiggerZero = () => Math.random() - 0.5 > 0;
    
const getNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const getPosition = (direction: CoordinateTypes, radius: number) => {
    const width = direction === 'x' ? window.innerWidth : window.innerHeight;
    const result = Math.random() * (width - radius);

    return result - radius > width / 2 ? result - radius : result + radius;
}

const getPercentFromNumber = (number: number, percent: number) => number * percent;

export const RandomHelper = {
    getColor,
    getNumber,
    isBiggerZero,
    getPosition,
    getPercentFromNumber
}