"use client"

import Cards from "@/components/Cards";
import Range from "@/components/Range";
import React, { useState } from "react";

export default function Home() {
  const max = 100;
  const min = 0;
  const step = 20;

  const [value, setValue] = useState(0);

  return (
    <>
      <Cards 
        title="Test Range"
        body={
          <Range
            min={min}
            max={max}
            value={value}
            setValue={setValue}
            step={step}
          />
        }
      />
    </>
  );
}
