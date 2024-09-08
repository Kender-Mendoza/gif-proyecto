import { useState } from "react";

interface addCategory {
  onAddCategory: (category: string) => void
}

export const Searcher: React.FC<addCategory> = ({ onAddCategory }): any => {
  const [inputvalue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const category = e.target.value;
    setInputValue(category);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const category = inputvalue.trim();

    if (category.length < 1) return;

    onAddCategory(category);
    setInputValue('');
  };

  return (
    <form className="row g-2 mt-2" onSubmit={onSubmit}>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          placeholder="write someting"
          value={inputvalue}
          onChange={onChange} />
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3"> Search </button>
      </div>
    </form>
  )
}
