
import React, { useState, useTransition } from 'react'

export default function WithoutTransition() {
    const [text, setText] = useState([])




    const handleText = (e) => {
        // setText(Math.pow(alphabet.length, alphabet.length))

        setText(new Array(Math.pow(e.target.value.length, 3)).fill(1))

    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
                <input type='text' onChange={handleText} />
            </div>

            <div style={{ border: '3px solid lightblue', display: 'flex', width: '100%', flexWrap: 'wrap', }}>
                {text.map(alphabet => {
                    return <div style={{ width: '5px', height: '5px', backgroundColor: 'red', margin: '1px' }}></div>
                })}
            </div>
        </div>
    )
}
