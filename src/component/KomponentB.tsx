import React from "react"

export const KomponentB = (updateValue: any) => {
    return (
        <div>
                <KomponentB update={updateValue} />
                <textarea onChange={(e) => updateValue.update(e.target.value)}></textarea>
        </div>
    )
}