import React from "react";



class Header extends React.Component {

  render() {
    return (
      <header className="container">
        <div className="row">
          <div className="col-10 header">
            <h2 className="mainTitle">Employee Directory</h2>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;