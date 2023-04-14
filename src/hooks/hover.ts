import {HTMLProps, useState} from "react";

export type HoverHookReturn = [
    boolean,
    {
        onMouseEnter: () => void,
        onMouseLeave: () => void
    }
]

export function useHover(): HoverHookReturn {
    /*
        Hook for detecting element mouse hovers. Not compatible with
        onMouseEnter and onMouseLeave events, as these power this hook.

        Returns hover state and props to be passed to element you're detecting hover for:

        @example
        const [hover, hoverProps] = hover();

        return <p {...hoverProps}>
            {hover ? "Hovering!" : "Not hovering!"}
        </p>
    */

    const [hovering, setHovering] = useState(false);

    const hoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false)
    }

    return [hovering, hoverProps];
}

export type MappedHoverReturn = [
    string | number | undefined,
    (id: string | number) => {
        onMouseEnter: () => void,
        onMouseLeave: () => void
    }
]

export function useMappedHover(): MappedHoverReturn {
    /*
        HoverHooks utility for use in mapped elements.

        @example
        const [hovering, register] = useMappedHover();

        return <ul>
            {data.map(item => <li
                key={item.id}
                {...register(item.id)}
            >
                {hovering === item.id ? "Hovering" : "Not hovering"}
            </li>)}
        </ul>
     */

    const [hovering, setHovering] = useState<string | number>();

    const register = (id: string | number) => ({
        onMouseEnter: () => setHovering(id),
        onMouseLeave: () => {
            if (hovering === id) setHovering(undefined)
        }
    });

    return [hovering, register];
}