import { useSpring, config } from 'react-spring';


export const useScaleSpring = (scaleVal: number, isHover: boolean) => {
    const spring = useSpring({
      transform: isHover ? `scale(${scaleVal})` : 'scale(1)',
      config: config.wobbly,
    });
  
    return { spring };
};

export const useHoverSpring = (isHover: boolean) => {
    const spring = useSpring({
        from: {opacity: isHover ? 0 : 1},
        to: {opacity: isHover ? 1 : 0},
        config: {duration: 1000, delay: 1000}
    });
  
    return { spring };
};

export const useOpacitySpring = (duration: number, delay: number) => {
    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: duration },
        delay: delay
    });
  
    return { spring };
};


export const useFilterSpring = (start: boolean = false) => {
    const [{ freq, factor, scale, opacity }] = useSpring(() => ({
        from: { factor: 5, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
        to: { factor: 30, opacity: 1, scale: 1, freq: '0.0, 0.0' },
        config: { duration: 1500, }
    }),[start]);
  
    return { freq, factor, scale, opacity };
};