const loadBtn = document.getElementById('loadBtn');
const output = document.getElementById('output');
const message = document.getElementById('message');

async function loadData() {
       output.innerHTML = "<p>Loading data...</p>";
console.log("button clicked");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const users = await response.json();
        message.inneText = "";

        users.forEach(user => {
            output.innerHTML += `
            <div class="user">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
            </div>
            `;
        });
    } catch (error) {
        message.innerText = "Oops! Something went wrong." + error.message;
        console.error("Error:", error);
    }
}
loadBtn.addEventListener('click', loadData);