document.addEventListener('DOMContentLoaded', () => {
    // Create the custom cursor element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);
  
    // Move the custom cursor based on mouse movement
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    // Handle the hover effect on the boxes
    document.querySelectorAll('.box').forEach(box => {
      box.addEventListener('mouseenter', (e) => {
        const { left, top, right, bottom } = box.getBoundingClientRect();
        const { clientX, clientY } = e;
  
        let direction = '';
        const horizontal = (clientX - left) / (right - left);
        const vertical = (clientY - top) / (bottom - top);
  
        if (horizontal < 0.5 && vertical < 0.5) {
          direction = 'top-left';
          box.style.transform = 'translate(-10px, -10px)';
        } else if (horizontal > 0.5 && vertical < 0.5) {
          direction = 'top-right';
          box.style.transform = 'translate(10px, -10px)';
        } else if (horizontal < 0.5 && vertical > 0.5) {
          direction = 'bottom-left';
          box.style.transform = 'translate(-10px, 10px)';
        } else {
          direction = 'bottom-right';
          box.style.transform = 'translate(10px, 10px)';
        }
      });
  
      box.addEventListener('mouseleave', () => {
        box.style.transform = 'translate(0, 0)';
      });
    });
  });
  