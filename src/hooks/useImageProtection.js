import { useEffect } from 'react';

export function useImageProtection() {
  useEffect(() => {
    // Prevent right-click on images
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG' || e.target.classList.contains('drop-art') || e.target.classList.contains('product-art')) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent drag and drop of images
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG' || e.target.closest('.drop-art') || e.target.closest('.product-art')) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent keyboard shortcuts for saving/printing
    const handleKeyDown = (e) => {
      // Ctrl+S or Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
      }
      // Ctrl+P or Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+S (Save As)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
