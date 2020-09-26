import React from 'react'
import Typed from 'react-typed';
import classes from "./typed.module.css"
export default function TypedSection() {
    return (
        <div style={{height:"150px", margin:"auto", width:"100vw"}} className="container h2  left-center">
                <div className={classes.typed} style={{height:"100px", margin:"auto",width:"86%"}} >
                <Typed
                    strings={[' I use to think money was the ultimate','  But now, I pay more attention to life', " How about you?..."]}
                    typeSpeed={90}
                  
                />
                </div>
        </div>
    )
}
