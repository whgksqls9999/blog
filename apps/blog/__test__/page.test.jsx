import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Page from '../app/page';

describe('Page 테스트', () => {
  it('Page 컴포넌트 테스트', () => {
    render(<Page />);

    const divElement = screen.getByText('Blog');

    expect(divElement).toBeInTheDocument();
  });
});
