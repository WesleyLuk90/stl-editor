import React, { ChangeEvent } from "react";

export function Import({ onImport }: { onImport: (file: File) => void }) {
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const file = (e.target.files ?? [])[0];
        if (file != null) {
            onImport(file);
        }
        e.target.value = "";
    }
    return (
        <div>
            <h3>Import</h3>
            <input type="file" onChange={onChange} />
        </div>
    );
}
