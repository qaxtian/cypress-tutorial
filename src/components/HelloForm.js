import React from 'react'

export default props =>
    <div>
        <form onSubmit={props.handleHelloSubmit}>
            <input
                data-testid="hello-world-input"
                type='text'
                value={props.currentHello}
                onChange={props.handleHelloChange}
                className="hello-input"
                placeholder="type `Hello`" />
        </form>
        <p data-testid="hello-world-output">{props.currentHello.length ? `${props.currentHello}, World!` : ''}</p>
    </div>
