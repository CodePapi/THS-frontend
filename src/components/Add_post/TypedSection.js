import React from 'react'
import Typed from 'react-typed';

export default function TypedSection() {
    return (
        <div className="add-post-wrapper typed-section">
            <p>
                <Typed
                    strings={[' I use to think money was the ultimate','  But now, I pay more attention to life', " How about you?..."]}
                    typeSpeed={90}
                    
                />
            </p>
        </div>
    )
}
