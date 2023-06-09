import clsx from "clsx";
import {ReactNode} from "react";

export default function Container({children, className}: {children?: ReactNode, className?: string}) {
    return <div className={clsx("flex flex-col gap-2", className)}>
        {children}
    </div>
}