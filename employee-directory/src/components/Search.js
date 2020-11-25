import React from "react";


function searchForm(props) {
  return (
    <div className="form-group">
      <label htmlFor="search">Search: </label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="search"
        id="search"
      />
    </div>
  )
}

export default searchForm;