import React from "react";
import "./Showlist.css";

const Showlist = () => {
  return (
    <section className="Show_list">
      <header className="show_list_header">
        <h2 className="show_list_heading">Popular</h2>

        <div className="show_list_fs">
          <ul className="show_filter">
            <li className="show_filter_item"></li>
            <li className="show_filter_item"></li>
            <li className="show_filter_item"></li>
          </ul>

          <select name="" id="" className="show_sorting">
            <option value="SortBy"></option>
            <option value="Date"></option>
            <option value="Rating"></option>
          </select>
          <select name="" id="" className="show_sorting">
            <option value="Ascending"></option>
            <option value="Descending"></option>
          </select>
        </div>
      </header>
    </section>
  );
};

export default Showlist;
