import Container from "../../component/Container";
import {useHover, useMappedHover} from "../../../../src/hooks/hover";
import clsx from "clsx";

let listItems: string[] = [];
for (let i = 1; i <= 10; i++) {
    listItems.push(`Item ${i}`)
}

export default function HoverHooks() {
    const [hover1, hover1props] = useHover();
    const [mappedHover, register] = useMappedHover();

    return <Container className="items-start">
        <h2 className="font-mono">
            useHover()
        </h2>

        <div
            className={clsx(
                "px-3 py-2 w-32 text-center select-none rounded-lg border border-rose-950",
                {"bg-rose-950 text-pink-200": hover1}
            )}
            {...hover1props}
        >
            {hover1 ? "Hovering" : "Not hovering"}
        </div>

        <h2 className="mt-2 font-mono">
            useMappedHover()
        </h2>

        <div className="flex gap-2 flex-wrap">
            {listItems.map(item => <div
                key={item} {...register(item)}
                className={clsx(
                    "px-3 py-2 w-32 text-center select-none rounded-lg border border-rose-950",
                    {"bg-rose-950 text-pink-200": mappedHover === item}
                )}
            >
                {mappedHover === item ? "Hovering" : "Not hovering"}
            </div>)}
        </div>
    </Container>
}