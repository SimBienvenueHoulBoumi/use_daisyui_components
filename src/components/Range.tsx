import React from 'react'

interface Props {
    min: number,
    max: number,
    value: number,
    setValue: (value: number) => void,
    step: number,
}

export default function Range(props: Props) {
  return (
    <>
        <input
        type="range"
        min={0}
        max={props.max}
        value={props.value}
        className="range"
        step={props.step}
        onChange={(e) => props.setValue(parseInt(e.target.value))}
      />
      <div className="w-full flex justify-between text-xs px-2">
        {[...Array(props.max / props.step + 1)].map((_, index) => (
          <span key={index}>|</span>
        ))}
      </div>
      {props.value}
    </>
  )
}
