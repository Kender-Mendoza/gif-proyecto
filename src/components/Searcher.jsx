import { useState } from "react";

export const Searcher = ({ onAddCategory }) => {
  const [inputvalue, setInputValue] = useState('');

  const onChange = (e) => {
    const category = e.target.value;
    setInputValue(category);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const category = inputvalue.trim();

    if(category.length < 1) return;

    onAddCategory(category);
    setInputValue('');
  };

  return (
    <form className="row g-2 mt-2" onSubmit={ onSubmit }>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          placeholder="write someting"
          value={ inputvalue }
          onChange={ onChange } />
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3"> Search </button>
      </div>
    </form>
  )
}
