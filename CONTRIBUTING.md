# Contributing to KoiCareLanka

Thank you for considering contributing to KoiCareLanka! We welcome contributions from the community to help make this platform better for Sri Lanka's koi enthusiasts.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors. Please:

- Be respectful and considerate
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/KoiLanka.git
   cd KoiLanka
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/dinna21/KoiLanka.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Set up environment variables** (see README.md)
6. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

For feature requests:
- Check if the feature has already been requested
- Provide a clear use case
- Explain how it benefits the community
- Include mockups or examples if possible

### Code Contributions

We welcome:
- Bug fixes
- New features
- Documentation improvements
- Performance optimizations
- UI/UX enhancements

## Development Guidelines

### Project Structure

Follow the existing project structure:
- `/src/app` - Next.js pages and API routes
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configurations
- `/src/models` - Database models
- `/src/data` - Static data files

### Component Guidelines

- Use TypeScript for all new code
- Create reusable, single-responsibility components
- Use meaningful component and variable names
- Add prop types and interfaces
- Include JSDoc comments for complex logic

Example:
```typescript
interface KoiCardProps {
  name: string;
  breed: string;
  price: number;
  image: string;
  onSelect?: () => void;
}

/**
 * Display card for a single koi with image, details, and actions
 */
export function KoiCard({ name, breed, price, image, onSelect }: KoiCardProps) {
  // Component implementation
}
```

### API Route Guidelines

- Follow RESTful conventions
- Use proper HTTP status codes
- Validate input data
- Handle errors gracefully
- Include authentication where needed

```typescript
export async function POST(request: NextRequest) {
  try {
    // Authenticate
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validate input
    const body = await request.json();
    // ... validation logic

    // Process request
    // ... business logic

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
```

### Database Guidelines

- Use Mongoose models for all database operations
- Add proper validation and constraints
- Index frequently queried fields
- Use transactions for multi-document operations

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow existing color scheme (orange/red theme)
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes
- Maintain consistent spacing and typography

## Pull Request Process

1. **Update your fork** with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Make your changes** in your feature branch

3. **Test your changes** thoroughly:
   ```bash
   npm run lint
   npm run build
   npm run dev
   ```

4. **Commit your changes** with clear messages:
   ```bash
   git add .
   git commit -m "feat: add koi filtering by size"
   ```

   Use conventional commit format:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Adding tests
   - `chore:` Maintenance

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub:
   - Provide a clear title and description
   - Reference related issues
   - Include screenshots for UI changes
   - List any breaking changes

7. **Address review feedback** if requested

8. **Celebrate!** 🎉 Your contribution will be reviewed and merged

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define interfaces for props and data structures
- Avoid `any` types (use `unknown` if needed)
- Enable strict mode

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multiline objects/arrays
- Use async/await instead of promises chains
- Keep functions small and focused

### Naming Conventions

- **Components**: PascalCase (`KoiCard.tsx`)
- **Functions**: camelCase (`getUserData()`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)
- **Interfaces**: PascalCase with `I` prefix (`IUser`)
- **Types**: PascalCase (`UserRole`)

### File Organization

```typescript
// 1. Imports
import React from 'react';
import { useSession } from 'next-auth/react';

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Constants
const DEFAULT_PAGE_SIZE = 10;

// 4. Main Component
export default function Component({ ...props }: Props) {
  // ...
}

// 5. Helper Components
const HelperComponent = () => {
  // ...
}

// 6. Utility Functions
function helperFunction() {
  // ...
}
```

## Testing

While we don't have extensive tests yet, when adding new features:

1. Manually test all functionality
2. Test on different browsers
3. Test responsive design
4. Test edge cases and error scenarios
5. Document testing steps in your PR

Future: We'll add automated testing with Jest and React Testing Library.

## Need Help?

- Check existing issues and pull requests
- Review the documentation
- Ask questions in GitHub Discussions
- Contact maintainers if needed

## Recognition

Contributors will be recognized in:
- Contributors section in README
- Release notes
- Project documentation

Thank you for contributing to KoiCareLanka! Together, we're building something special for Sri Lanka's koi community. 🐟
