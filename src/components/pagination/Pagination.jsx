import  { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

export function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}