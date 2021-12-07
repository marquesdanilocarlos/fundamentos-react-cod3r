import { cloneElement } from "react";

export function Familia(props) {
    console.log(props);
    return (
        <div>
            {props.children.map((child) => {
                return cloneElement(child, { ...props });
            })}
        </div>
    );
}
