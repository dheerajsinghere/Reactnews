import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, detail } = this.props;

    if (title != null  && description !=null && imageUrl  !=null) {
      return (
        <>
          <div className="col-xs-12 col-sm-4">
            <div className="card">
              <a className="img-card" href={detail} target="_blank">
                <img src={imageUrl} />
              </a>
              <div className="card-content">
                <h4 className="card-title">
                  <a href={detail} target="_blank">
                    {title}...
                  </a>
                </h4>
                <p className="">{description}...</p>
              </div>
              <div className="card-read-more">
                <a
                  href={detail}
                  target="_blank"
                  className="btn btn-link btn-block"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Newsitem;
