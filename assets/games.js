
    document.getElementById('search-input').addEventListener('input', function(event) {
      const searchTerm = event.target.value.toLowerCase();
      const images = document.querySelectorAll('.image-item');

      images.forEach(image => {
        const altText = image.querySelector('img').alt.toLowerCase();
        if (altText.includes(searchTerm)) {
          image.style.display = 'block'; 
        } else {
          image.style.display = 'none'; 
        }
      });
    });


    document.querySelectorAll('.image-item').forEach(item => {
      item.addEventListener('click', function() {
        window.location.href = item.getAttribute('data-url');
      });
    });
