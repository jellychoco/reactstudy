import React, { useEffect, useState } from 'react'
// import { fetch } from 'react-fetch'
import { useQuery } from 'react-query'
import { hooks } from './api'
import { getUserUrl, fetchProfileData, fetchUser } from './api'
export default function User() {
    const { data } = useQuery(['todos'], () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                fetch(getUserUrl()).then((value) => {
                    res(value.json())

                })
            }, Math.random() * 1000 * 2)
        })
    }, { suspense: true })

    return (
        <div style={{ backgroundColor: 'pink', width: '100%', height: '300px', justifyContent: 'center', alignItems: "center", display: 'flex' }}>
            <div>
                name: {data.name}
            </div>
            <div>
                email: {data.email}
            </div>
        </div>
    )
}
