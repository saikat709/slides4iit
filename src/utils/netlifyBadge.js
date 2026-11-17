/**
 * Netlify Badge Auto-Hider
 * Netlify snippet injection inserts a floating badge (id="nl-badge") dynamically.
 * This utility immediately suppresses and removes it via DOM query and MutationObserver.
 */
export function suppressNetlifyBadge() {
  if (typeof document === 'undefined') return;

  const removeBadge = () => {
    const badges = document.querySelectorAll('#nl-badge, [id*="nl-badge"], .netlify-badge');
    badges.forEach((el) => {
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('opacity', '0', 'important');
      el.style.setProperty('pointer-events', 'none', 'important');
      try {
        el.remove();
      } catch {
        // Ignored if element cannot be removed
      }
    });
  };

  // Immediate check
  removeBadge();

  // On DOM ready and window load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeBadge);
  }
  window.addEventListener('load', removeBadge);

  // MutationObserver to catch asynchronous injection by Netlify
  if (typeof MutationObserver !== 'undefined' && document.body) {
    const observer = new MutationObserver(() => {
      removeBadge();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}
