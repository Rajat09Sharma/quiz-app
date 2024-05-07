import { useEffect, useState } from "react";
export default function QuestionTimer({timeOut,onTimeout,mode}) {
    const [reamingTime,setReamingTime]=useState(timeOut);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            onTimeout();
        },timeOut)
        return ()=>{
            clearTimeout(timer);
        }
    },[timeOut,onTimeout])

    useEffect(()=>{
        const intervalTimer =setInterval(() => {
            setReamingTime(prevs=>prevs-100);
        }, 100);
        return ()=>{
            clearInterval(intervalTimer);
        }
    },[])



    return (
        <progress  max={timeOut} value={reamingTime} className={mode} />
    )
}
