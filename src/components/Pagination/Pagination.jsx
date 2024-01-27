import { PaginationWrapper, PaginationButton } from "./Pagination.styled";

export default function Pagination({
  totalPages,
  activePage,
  handlePageClick,
}) {
  return (
    totalPages > 1 && (
      <PaginationWrapper>
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationButton
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            $active={i + 1 === activePage}
          >
            {i + 1}
          </PaginationButton>
        ))}
      </PaginationWrapper>
    )
  );
}
