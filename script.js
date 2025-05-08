function searchFunction() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("searchResult");

    if (query.includes("highlight") || query.includes("boss")) {
        result.textContent = "Try the 'Boss Battle Highlight' from April!";
    } else {
        result.textContent = "No results found. Try searching for 'highlight' or 'boss'.";
    }
    return false;
}