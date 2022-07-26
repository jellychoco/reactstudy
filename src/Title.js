import React from 'react'
import { useQuery } from 'react-query'
export default function Title() {
    const { data } = useQuery(['compnay'], () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    wclub: new Date().toLocaleString()
                })
            }, Math.random() * 1000 * 3)
        })
    }, { suspense: true })

    return (
        <div style={{ fontSize: '3rem', textAlign: 'center' }}>{JSON.stringify(data.wclub)}</div>
    )
}
