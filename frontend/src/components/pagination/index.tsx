import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  totalItems: number;
  page: number;
  onChange: (page: number) => void;
  itemsPerPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  page,
  onChange,
  itemsPerPage = 9,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [inputValue, setInputValue] = useState(page.toString());

  useEffect(() => {
    setInputValue(page.toString());
  }, [page]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d*$/.test(val)) {
      setInputValue(val);

      if (val !== '') {
        let num = Number(val);
        if (num < 1) num = 1;
        if (num > totalPages) num = totalPages;
        if (num !== page) {
          onChange(num);
        }
      }
    }
  };

  const handleInputBlur = () => {
    let num = Number(inputValue);
    if (!num || num < 1) num = 1;
    if (num > totalPages) num = totalPages;

    if (num !== page) {
      onChange(num);
    } else {
      setInputValue(num.toString());
    }
  };

  const prevPage = () => {
    if (page > 1) onChange(page - 1);
  };

  const nextPage = () => {
    if (page < totalPages) onChange(page + 1);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className={styles.input}
      />
      <span className={styles.pagesText}>
        of {totalPages} pages
      </span>
      <button
        onClick={prevPage}
        disabled={page <= 1}
        className={styles.button}
      >
        &lt;
      </button>
      <button
        onClick={nextPage}
        disabled={page >= totalPages}
        className={styles.button}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
