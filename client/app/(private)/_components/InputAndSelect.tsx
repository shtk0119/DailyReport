import React from 'react';
import CreatableSelect from 'react-select/creatable';

const options = [
  { value: 'QUEST', label: 'QUEST' },
  { value: '提出QUEST', label: '提出QUEST' },
  { value: 'AtCoder', label: 'AtCoder' },
  { value: 'Udemy', label: 'Udemy' },
  { value: 'チーム開発', label: 'チーム開発' },
  { value: 'ブログ記事', label: 'ブログ記事' },
];

const InputAndSelect = ({ selectedOption, onChange }) => {
  return (
    <CreatableSelect
      isClearable
      value={selectedOption}
      onChange={onChange}
      options={options}
      placeholder="タスク名を入力 / 選択してください"
    />
  );
};

export default InputAndSelect;
