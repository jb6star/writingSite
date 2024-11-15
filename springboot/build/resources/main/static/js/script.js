const addQuoteBtn = document.getElementById("addQuoteBtn");
const quoteContainer = document.getElementById("quoteContainer");

addQuoteBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const quoteText = document.getElementById("quoteText").value;
    const author = document.getElementById("author").value;

    if (title && quoteText && author) {
        // Create a new quote card
        const quoteCard = document.createElement("div");
        quoteCard.classList.add("quoteCard");

        // Set inner HTML for the quote card
        quoteCard.innerHTML = `
            <div class="quoteTitle">${title}</div>
            <div class="quoteText">"${quoteText}"</div>
            <div class="quoteAuthor">- ${author}</div>
        `;

        // Add the new quote card to the container
        quoteContainer.appendChild(quoteCard);

        // Clear the form fields
        document.getElementById("title").value = "";
        document.getElementById("quoteText").value = "";
        document.getElementById("author").value = "";
    } else {
        alert("Please fill in all fields!");
    }
});
