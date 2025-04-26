fetch('components/category.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('category-container').innerHTML = data;
    });
