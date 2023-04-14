import {useMemo, useState} from "react";


export function useDeferUntil<T>(value: T, condition: boolean | (() => boolean)): T {
    /*
        This hook defers updates to `value` as long as `condition` is false.
     */

    const [state, setState] = useState<T>(value);

    // I used useMemo instead of useEffect because I don't want updates that
    // should be immediate to be delayed by one render cycle.
    // The setState inside this useMemo should be okay because the state
    // being set is not a dependency and can't cause an infinite loop on its own
    useMemo(() => {
        if (state !== value) {
            if (condition instanceof Function) {
                condition = condition();
            }

            // if not using TS, users may pass any value as condition,
            // and it will get evaluated as boolean
            if (condition) setState(value);
        }
    }, [value, condition]);

    return state;
}