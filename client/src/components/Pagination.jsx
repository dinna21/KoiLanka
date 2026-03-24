import React, { useMemo } from 'react';

function getVisiblePages(currentPage, totalPages) {
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  return pages;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  const visiblePages = useMemo(
    () => getVisiblePages(currentPage, totalPages),
    [currentPage, totalPages]
  );

  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
      <button
        type="button"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm rounded-lg border border-gray-500 text-gray-100 hover:border-orange-500 hover:text-orange-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Prev
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button
            type="button"
            onClick={() => handlePageChange(1)}
            className="px-3 py-2 text-sm rounded-lg border border-gray-500 text-gray-100 hover:border-orange-500 hover:text-orange-300 transition"
          >
            1
          </button>
          {visiblePages[0] > 2 && <span className="px-2 text-gray-400">...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          className={`px-3 py-2 text-sm rounded-lg border transition ${
            page === currentPage
              ? 'border-orange-500 bg-gradient-to-r from-orange-500 to-red-600 text-white'
              : 'border-gray-500 text-gray-100 hover:border-orange-500 hover:text-orange-300'
          }`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <button
            type="button"
            onClick={() => handlePageChange(totalPages)}
            className="px-3 py-2 text-sm rounded-lg border border-gray-500 text-gray-100 hover:border-orange-500 hover:text-orange-300 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        type="button"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm rounded-lg border border-gray-500 text-gray-100 hover:border-orange-500 hover:text-orange-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  );
}
