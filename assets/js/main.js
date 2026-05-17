// Safely handle the welcome message template if it exists
const template = document.getElementById('welcome-msg');
if (template) {
  document.body.appendChild(template.content);
}

// Premium SPA-like Page Exit Transition Handler
document.addEventListener('click', (e) => {
  // Find the closest anchor tag if clicked element is nested (like an icon or text inside a link)
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  const target = link.getAttribute('target');

  // Intercept only internal links, excluding hashes, mailto/tel protocols, and new tabs
  if (href && 
      !href.startsWith('#') && 
      !href.startsWith('mailto:') && 
      !href.startsWith('tel:') && 
      target !== '_blank' && 
      link.hostname === window.location.hostname) {
    
    e.preventDefault();
    const destination = link.href;
    
    // Trigger smooth exit animation
    document.body.classList.add('fade-out');
    
    // Wait for the exit animation to complete before navigating
    setTimeout(() => {
      window.location.href = destination;
    }, 220); // Syncs with the 0.25s fade-out in main.css
  }
});