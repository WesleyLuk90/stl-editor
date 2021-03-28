import React, { ChangeEvent } from "react";

export function Controls() {
    function onChange(e: ChangeEvent) {
        e.persist();
        console.log(e);
    }

    return (
        <div>
            <h3>Import</h3>
            <input type="file" onChange={onChange} />
        </div>
    );
}
