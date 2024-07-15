document.addEventListener("DOMContentLoaded", function() {
    const guang = document.getElementById('guang');
    const backgrounds = ['background1', 'background2'];
    
    function setRandomBackground() {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        guang.className = 'guang ' + backgrounds[randomIndex];
    }

    setRandomBackground();
    
    setInterval(setRandomBackground, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchSuggestions = document.getElementById("search-suggestions");

    searchInput.addEventListener("focus", function() {
        searchSuggestions.style.display = "block";
    });

    searchInput.addEventListener("blur", function() {
        setTimeout(() => {
            searchSuggestions.style.display = "none";
        }, 200); 
    });

    searchSuggestions.addEventListener("mousedown", function(event) {
        if (event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            searchSuggestions.style.display = "none";
        }
    });
});
