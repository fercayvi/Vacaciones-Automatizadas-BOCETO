import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  showLabel = true,
  className = '',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none border ${
        isDark
          ? 'bg-gray-800 text-amber-300 border-gray-700 hover:bg-gray-700 hover:border-gray-600 shadow-xs'
          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300 shadow-2xs'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-gray-600 transition-transform duration-200 -hover:rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="font-medium">
          {isDark ? 'Tema Claro' : 'Tema Oscuro'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
