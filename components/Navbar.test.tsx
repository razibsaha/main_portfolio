import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'; // Adjust path as necessary
import { NavItemName } from '../types'; // Adjust path as necessary

// Mock next/router
// Define a mutable variable for pathname
let mockPathname = '/';
const mockPush = jest.fn();
const mockEventsOn = jest.fn();
const mockEventsOff = jest.fn();
const mockBeforePopState = jest.fn(() => null);
const mockPrefetch = jest.fn(() => null);

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: mockPathname,
    route: mockPathname, // Use the mutable variable
    query: {},
    asPath: mockPathname, // Use the mutable variable
    push: mockPush,
    events: {
      on: mockEventsOn,
      off: mockEventsOff,
    },
    beforePopState: mockBeforePopState,
    prefetch: mockPrefetch,
  })),
}));

// Mock NavItem to simplify Navbar testing and focus on Navbar logic
// We can check if NavItem receives correct props
jest.mock('./NavItem', () => {
  const MockNavItem = ({ active, setActive, name, route }: { active: NavItemName, setActive: (name: NavItemName) => void, name: NavItemName, route: string }) => (
    <div data-testid={`nav-item-${name}`} onClick={() => setActive(name)}>
      {name} - Active: {active === name ? 'true' : 'false'} - Route: {route}
    </div>
  );
  MockNavItem.displayName = 'MockNavItem';
  return MockNavItem;
});


describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset mocks and mockPathname before each test
    mockPathname = '/'; // Default to '/'
    mockPush.mockClear();
    mockEventsOn.mockClear();
    mockEventsOff.mockClear();
    mockBeforePopState.mockClear();
    mockPrefetch.mockClear();
    // Ensure useRouter mock is reset to use the potentially updated mockPathname
    (jest.requireMock('next/router').useRouter as jest.Mock).mockImplementation(() => ({
        pathname: mockPathname,
        route: mockPathname,
        query: {},
        asPath: mockPathname,
        push: mockPush,
        events: { on: mockEventsOn, off: mockEventsOff },
        beforePopState: mockBeforePopState,
        prefetch: mockPrefetch,
      }));
  });

  it('renders correctly with default route "/"', () => {
    render(<Navbar />);
    // Check if the active state display shows 'About'
    expect(screen.getByText('About')).toBeInTheDocument();

    // Check if all NavItems are rendered
    expect(screen.getByTestId('nav-item-About')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-Resume')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-Projects')).toBeInTheDocument();

    // Check props passed to NavItem for 'About'
    expect(screen.getByTestId('nav-item-About')).toHaveTextContent('About - Active: true - Route: /');
  });

  it('updates active item based on pathname from useRouter', () => {
    // Change the mocked pathname for this test
    mockPathname = '/projects';
    // The beforeEach hook will ensure useRouter uses this new pathname for the next render

    render(<Navbar />);
    // Active display should show 'Projects'
    expect(screen.getByText('Projects')).toBeInTheDocument();

    // NavItem 'Projects' should now be active
    expect(screen.getByTestId('nav-item-Projects')).toHaveTextContent('Projects - Active: true - Route: /projects');
    // NavItem 'About' should not be active
    expect(screen.getByTestId('nav-item-About')).toHaveTextContent('About - Active: false - Route: /');
  });

  it('passes correct props to NavItem components', () => {
    render(<Navbar />);
    // About
    expect(screen.getByTestId('nav-item-About')).toHaveTextContent('About - Active: true - Route: /');
    // Resume
    expect(screen.getByTestId('nav-item-Resume')).toHaveTextContent('Resume - Active: false - Route: /resume');
    // Projects
    expect(screen.getByTestId('nav-item-Projects')).toHaveTextContent('Projects - Active: false - Route: /projects');
  });

  // Note: Testing the onClick behavior of NavItem within Navbar might be redundant
  // if NavItem itself is well-tested. The mock already allows checking if setActive
  // would be called, but the core logic in Navbar is driven by pathname.
});
