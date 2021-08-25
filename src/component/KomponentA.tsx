import { useState } from "react";

export const KomponentA = () => {
    const [value, setValue] = useState("")

    const updateValue = (datafromChild: string) => {
    setValue(datafromChild);
  };
};

