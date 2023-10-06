import {  useState } from 'react'

export const useCounter = (min, max) => {
    const [count, setCount] = useState(1)
    const addCount = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }
    const restCount = () => {
        if (count > min) {
            setCount(count - 1)
        }
    }
    return {count , addCount, restCount}
}