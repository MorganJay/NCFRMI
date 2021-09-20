import React from 'react'

const WhatWeDo = (props) => {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>What We Do</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default WhatWeDo
