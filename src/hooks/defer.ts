import {useState} from "react";


export function useDeferUntil<T>(value: T, condition: boolean | (() => boolean)): T {
    /*
        This hook defers updates to `value` as long as `condition` is false.
     */

    const [state, setState] = useState<T>(value);

    if (state !== value) {
        if (condition instanceof Function) {
            condition = condition();
        }

        // if not using TS, users may pass any value as condition,
        // and it will get evaluated as boolean
        if (condition) setState(value);
    }

    return state;
}