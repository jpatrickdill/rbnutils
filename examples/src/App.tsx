import HoverHooks from "./sections/hooks/HoverHooks";
import clsx from "clsx";
import ValueHooks from "./sections/hooks/ValueHooks";

const sections = [
    {
        title: "Hooks",
        sections: [
            {
                title: "HoverHooks States",
                element: () => <HoverHooks/>
            },
            {
                title: "Value Hooks",
                element: () => <ValueHooks/>
            }
        ]
    },
]

function App() {
    return <div className="w-full min-h-screen bg-pink-200 px-2 pt-12 text-rose-950">
        <div className={clsx(
            "mx-auto max-w-2xl flex flex-col gap-4",
        )}>
            <h1 className="text-3xl font-bold">
                rbnutils examples
            </h1>

            {sections.map(section => <div className="flex flex-col gap-4" key={section.title}>
                <h2 className="text-2xl font-bold">
                    {section.title}
                </h2>

                {section.element ? (
                    (section.element instanceof Function) ? section.element() : section.element
                ) : null}

                {section.sections?.map(sub => <div
                    key={sub.title}
                    className="flex flex-col"
                >
                    <h3 className="text-xl font-bold mb-1">
                        {sub.title}
                    </h3>

                    {sub.element ? (
                        (sub.element instanceof Function) ? sub.element() : sub.element
                    ) : null}
                </div>)}
            </div>)}
        </div>
    </div>
}

export default App
