import { FC } from "react";

interface PaginatedMenuProps {
  page: number;
  leftButtonDisabled: boolean;
  leftButtonClick: () => void;
  rightButtonDisabled: boolean;
  rightButtonClick: () => void;
}

const PaginatedMenu: FC<PaginatedMenuProps> = ({ page, leftButtonDisabled, leftButtonClick, rightButtonDisabled, rightButtonClick }) => {
  return (
    <div className="menu">
      <button disabled={leftButtonDisabled} onClick={leftButtonClick}>
        Previous
      </button>
      <span className="span-title">Page {page + 1}</span>
      <button disabled={rightButtonDisabled} onClick={rightButtonClick}>
        Next
      </button>
    </div>
  )
}

export default PaginatedMenu;