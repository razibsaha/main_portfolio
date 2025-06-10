import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar'; // Adjust path as necessary
import { resume, socialMedia, contactInfo, typewriterOptions } from '../data'; // Adjust path

// Mock next/themes
const mockSetTheme = jest.fn();
let mockCurrentTheme = 'light'; // Variable to control the theme returned by the mock

jest.mock('next-themes', () => ({
  useTheme: jest.fn().mockImplementation(() => ({ // useTheme is now jest.fn() whose implementation can be changed
    theme: mockCurrentTheme,
    setTheme: mockSetTheme,
  })),
}));

// Mock next/image
jest.mock('next/image', () => {
  const MockImage = ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />;
  MockImage.displayName = 'MockImage';
  return MockImage;
});

// Mock typewriter-effect
jest.mock('typewriter-effect', () => {
  const MockTypewriter = ({ options }: { options: any }) => (
    <div data-testid="typewriter">
      {options.strings.join(', ')}
    </div>
  );
  MockTypewriter.displayName = 'MockTypewriter';
  return MockTypewriter;
});

// Mock window.open
global.open = jest.fn();

describe('Sidebar Component', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    mockSetTheme.mockClear();
    (global.open as jest.Mock).mockClear();
    // Reset theme to default for each test
    mockCurrentTheme = 'light';
    // Ensure the mock implementation is reset if it was changed in a test
    (jest.requireMock('next-themes').useTheme as jest.Mock).mockImplementation(() => ({
      theme: mockCurrentTheme,
      setTheme: mockSetTheme,
    }));
  });

  it('renders basic information correctly', () => {
    render(<Sidebar />);
    expect(screen.getByText('Razib Saha')).toBeInTheDocument();
    expect(screen.getByText('Hi, I am')).toBeInTheDocument();
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
    expect(screen.getByTestId('typewriter')).toHaveTextContent(typewriterOptions.strings.join(', '));
  });

  it('renders the resume download link correctly', () => {
    render(<Sidebar />);
    const downloadLink = screen.getByText('Download Resume').closest('a');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', resume.url);
    expect(downloadLink).toHaveAttribute('download', resume.filename);
  });

  it('renders social media links correctly', () => {
    render(<Sidebar />);
    socialMedia.forEach(social => {
      const linkElement = screen.getByTestId(`social-link-${social.name}`);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', social.url);
    });
  });

  it('renders contact information correctly', () => {
    render(<Sidebar />);
    expect(screen.getByText(contactInfo.location)).toBeInTheDocument();
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument();
    expect(screen.getByText(contactInfo.phone)).toBeInTheDocument();
  });

  it('calls window.open with mailto link when "Email me" button is clicked', () => {
    render(<Sidebar />);
    const emailButton = screen.getByRole('button', { name: /email me/i });
    fireEvent.click(emailButton);
    expect(global.open).toHaveBeenCalledWith(`mailto:${contactInfo.email}`);
  });

  it('calls setTheme when theme changer is clicked', () => {
    // Initial global mock for useTheme returns { theme: 'light', setTheme }

    // First render and first click
    const { rerender } = render(<Sidebar />);
    const themeChangerLabel = screen.getByTestId('theme-changer-label');
    expect(themeChangerLabel).toBeInTheDocument();

    fireEvent.click(themeChangerLabel);
    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith('dark'); // Assuming default is 'light'

    // Setup for second click: simulate theme is now 'dark'
    mockSetTheme.mockClear();
    mockCurrentTheme = 'dark'; // Change the underlying variable for the mock
    // No need to change mockReturnValue here if useTheme's mockImplementation reads mockCurrentTheme
    rerender(<Sidebar />);

    fireEvent.click(themeChangerLabel);
    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('renders the avatar image', () => {
    render(<Sidebar />);
    const avatarImage = screen.getByAltText('avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'test-file-stub'); // From our fileMock.js
  });
});
