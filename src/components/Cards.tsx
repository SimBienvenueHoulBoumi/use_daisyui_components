import React from 'react'

interface Props {
    title: string,
    body: JSX.Element,
}

export default function Cards(props: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-none">
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            {props.body}
        </div>
    </div>
  )
}
