import React from "react"
import { KomponentB } from "./KomponentB"

export const KomponentC = (value: any) => {
    return (
        <div>
            <KomponentB value={value}/>
        </div>
    )
}