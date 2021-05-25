import * as React from 'react';
import './App.css'

interface ILifeEventProps {
    title: string
}

export default function LifeEvent(props: ILifeEventProps) {
    return (
        <div className="lifeevent">
            {props.title}
        </div>
    )
}
