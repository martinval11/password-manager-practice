import { render } from '@testing-library/react';

import Nav from './Nav';

describe('<Nav />', () => {
  test('Nav component renders', () => {
    render(<Nav />);
  });
});
