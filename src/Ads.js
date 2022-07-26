import React from 'react'
import { useQuery } from 'react-query'
export default function Ads() {
    const { data } = useQuery(['session'], () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    adsTitle: '더블유클럽 월 10억 갑니다 여러분 올라 타세요!'
                })
            }, Math.random() * 1000 * 4)
        })
    }, { suspense: true })
    return (

        <div style={{ backgroundColor: 'lightgreen', width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>광고문구: {data.adsTitle}</div>
    )
}
