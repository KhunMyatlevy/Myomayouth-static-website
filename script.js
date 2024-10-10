document.addEventListener("DOMContentLoaded", function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('post-list');
            posts.forEach(post => {
                const postItem = document.createElement('div');
                postItem.classList.add('post-item');

                // Create link for post summary at the very top
                const postLink = document.createElement('a');
                postLink.href = post.url;
                postLink.textContent = post.summary; // Use summary as link text
                postLink.classList.add('post-summary'); // Optional: add a class for styling

                // Append the summary link first
                postItem.appendChild(postLink);

                // Create an element for the image
                if (post.image) {
                    const img = document.createElement('img');
                    img.src = post.image;
                    img.alt = post.title + " Image";
                    img.classList.add('post-image');
                    postItem.appendChild(img); // Then append image
                }

                // Create an element for the post date
                const postDate = document.createElement('p');
                postDate.textContent = post.date; // Set the date text
                postDate.classList.add('post-date'); // Optional: add a class for styling

                postItem.appendChild(postDate); // Append date last
                postList.appendChild(postItem); // Append postItem to the post list
            });
        })
        .catch(error => console.error('Error loading posts:', error));
});

