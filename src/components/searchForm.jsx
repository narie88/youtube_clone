import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search." onChange={onChange} />
      <button type="submit">S</button>
    </form>
  );
};

export default SearchForm;
