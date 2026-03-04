const addFun = () => {
  const url = "https://jsonplaceholder.typicode.com/users/1/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      gettingPost(data);
    });
};

const gettingPost = (posts) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
        <h1>${post.title}</h1>
        <p>
          ${post.body}
        </p>
    </div>
    `;
    container.appendChild(card);
  });
};
