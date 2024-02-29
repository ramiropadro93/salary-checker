import React from 'react';
import styles from '../public/Dropdown.module.css';
function DropdownV2(props: any) {
  return (
    <select name={props.name} onChange={props.onChange} className={styles.dropdown}>
      <option value="">All</option>
      {props.options.map((option: any) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default DropdownV2;
