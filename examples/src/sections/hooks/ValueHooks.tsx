import Container from "../../component/Container";
import {useHover, useMappedHover} from "../../../../src/hooks/hover";
import clsx from "clsx";
import {useDeferredValue, useState} from "react";
import {useDeferUntil} from "../../../../src/hooks/defer";

let listItems: string[] = [];
for (let i = 1; i <= 10; i++) {
    listItems.push(`Item ${i}`)
}

export default function ValueHooks() {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(true);

    const value = useDeferUntil(input, toggle);

    return <Container className="items-start">
        <h2 className="font-mono">
            useDeferUntil(value, condition)
        </h2>

        <div className="flex items-center gap-2">
            <input
                className={clsx(
                    "px-3 py-2 w-32 select-none rounded-lg border border-rose-950 bg-pink-100",
                )}
                value={input}
                placeholder="Value"
                onChange={e => setInput(e.target.value)}
            />

            <input
                type="checkbox"
                checked={toggle}
                onChange={e => setToggle(e.target.checked)}
                className="w-5 h-5 ml-3"
            />
            <p>Condition (checked = true)</p>
        </div>

        <p>Deferred input value: {value}</p>

    </Container>
}