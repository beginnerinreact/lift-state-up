import { useState } from "react";
import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";

export const ComponentA = () => {
    const [value, setValue] = useState("");
    const updateValue = (datafromChild : string) => {
      setValue(datafromChild);
    };
    return (
      <div className="ParentComponent">
        A<ComponentB update={updateValue} />
        <ComponentC value={value} />
      </div>
    );
  };
