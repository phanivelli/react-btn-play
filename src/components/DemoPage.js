import React, { useEffect, useState } from "react";
import { arr } from "../constants/constants";

export default function DemoPage() {
  const [isChecked, setIsChecked] = useState(new Array(arr.length).fill(false));
  const [isDisabled, setIsDisabled] = useState(
    new Array(arr.length).fill(true)
  );

  const [copyArr, setCopyArr] = useState([...arr]);

  const onCheckBoxClick = (pos) => {
    let checkedState = isChecked.map((item, i) => (i === pos ? !item : item));
    setIsChecked(checkedState);

    let disabledState = isDisabled.map((item, i) => (i === pos ? !item : item));
    setIsDisabled(disabledState);
  };

  const handleDelete = (index) => {
    let filterArr = copyArr.filter((_, key) => {
      return key !== index;
    });
    setCopyArr(filterArr);
  };
  return (
    <>
      <ul>
        {copyArr.map((ele, index) => {
          return (
            <>
              <li key={index}>
                <input
                  type="checkbox"
                  checked={isChecked[index]}
                  onChange={() => onCheckBoxClick(index)}
                />
                {ele}
                <button
                  disabled={isDisabled[index]}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
