import React, { Component } from "react";

class Rules extends Component {
  state = {

  }


  render() {
    return (
      <div >


        <div className="landing__nav container">
          <div className="row">

            <div className="col-6">
              <a href="/rules">
                <figcaption className="landing__img-caption">
                  Rules</figcaption>
                <img className="landing__img" src="https://toppng.com/public/uploads/preview/whistle-11530975730zyj5qkg7xt.png" />
              </a>
            </div>

            <div className="col-6">
              <a href="/">
                <figcaption className="landing__img-caption">
                  Play</figcaption>
                <img className="landing__img" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png" />
              </a>
            </div>



          </div>
        </div>
      </div>
    )
  }
}

export default Rules;