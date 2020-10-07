import React from "react";
import Typed from "react-typed";

export default function TypedSection() {
  return (
    <div className="add-post-wrapper typed-section">
      <p>
        <Typed
          strings={[
            `Movies don’t get more plot twists that 2020 
                    2020? Hmmm I don’t recall, I don’t know her                                              
                    The year I achieved more in my sleep`,
          ]}
          typeSpeed={90}
        />
      </p>
    </div>
  );
}
