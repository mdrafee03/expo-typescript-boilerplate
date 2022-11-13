import { render, screen } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    render(<App />);
    expect(
      screen.getByText('Open up App.tsx to start working on your app!')
    ).toBeVisible();
  });
});
