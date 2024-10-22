// Object to store page names and corresponding URLs
const pages = {
    "home page": "index.html",
    "post list": "post_list.html",
    "2192004": "2192004.html",
    
};

function navigateToPage() {
    // Get the input value
    const input = document.getElementById("searchInput").value.toLowerCase();

    // Check if the input matches any key in the pages object
    if (pages[input]) {
        // If a match is found, navigate to the corresponding URL
        window.location.href = pages[input];
    } else {
        // Alert the user if the page is not found
        alert("Page not found!");
    }
}
