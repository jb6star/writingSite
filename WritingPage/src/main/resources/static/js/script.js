document.addEventListener("DOMContentLoaded", () => {
    const addQuoteBtn = document.getElementById("addQuoteBtn");
    const quoteContainer = document.getElementById("quoteContainer");

    addQuoteBtn.addEventListener("click", async () => {
        const title = document.getElementById("title").value;
        const quoteText = document.getElementById("quoteText").value;
        const author = document.getElementById("author").value;

        if (title && quoteText && author) {
            // 데이터 준비
            const quoteData = {
                title: title,
                text: quoteText,
                author: author
            };

            try {
                // 서버로 POST 요청 보내기
                const response = await fetch('/api/quotes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(quoteData),
                });

                if (response.ok) {
                    const result = await response.json();

                    // 성공 시 노트패드에 새 카드 추가
                    const quoteCard = document.createElement("div");
                    quoteCard.classList.add("quoteCard");

                    quoteCard.innerHTML = `
                        <div class="quoteTitle">${title}</div>
                        <div class="quoteText">"${quoteText}"</div>
                        <div class="quoteAuthor">- ${author}</div>
                    `;

                    quoteContainer.appendChild(quoteCard);

                    // 입력 필드 초기화
                    document.getElementById("title").value = "";
                    document.getElementById("quoteText").value = "";
                    document.getElementById("author").value = "";

                    alert("Quote added successfully!");
                } else {
                    alert("Failed to add quote. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        } else {
            alert("Please fill in all fields!");
        }
    });
});
