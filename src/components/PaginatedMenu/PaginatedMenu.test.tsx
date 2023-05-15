/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PaginatedMenu from './PaginatedMenu';

describe('PaginatedMenu Component', () => {
  test('The component is in the document', () => {
    render(<PaginatedMenu
      page={1}
      leftButtonDisabled={true}
      leftButtonClick={() => null}
      rightButtonDisabled={false}
      rightButtonClick={() => null}
    />);
  });

  test('The title shows the correct page number', () => {
    render(<PaginatedMenu
      page={2}
      leftButtonDisabled={false}
      leftButtonClick={() => null}
      rightButtonDisabled={false}
      rightButtonClick={() => null}
    />);
    const title = screen.getByText('Page 3');
    
    expect(title).toBeInTheDocument();
  });

  test('The buttons should be disabled with true on the prop', () => {
    render(<PaginatedMenu
      page={1}
      leftButtonDisabled={true}
      leftButtonClick={() => null}
      rightButtonDisabled={true}
      rightButtonClick={() => null}
    />)
    const leftButton = screen.getByText('Previous');
    const rightButton = screen.getByText('Next');

    expect(leftButton).toBeDisabled();
    expect(rightButton).toBeDisabled();
  });

  test('The buttons should be enabled with false on the prop', () => {
    render(<PaginatedMenu
      page={1}
      leftButtonDisabled={false}
      leftButtonClick={() => null}
      rightButtonDisabled={false}
      rightButtonClick={() => null}
    />)
    const leftButton = screen.getByText('Previous');
    const rightButton = screen.getByText('Next');

    expect(leftButton).not.toBeDisabled();
    expect(rightButton).not.toBeDisabled();
  });
});
