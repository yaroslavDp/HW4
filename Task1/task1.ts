interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function renderPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  return posts;
}

renderPosts()
  .then((posts) => {
    const postsContainer = document.createElement("div");
    posts.forEach((post) => {
      const postItem = document.createElement("div");
      postItem.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postItem);
    });
    document.body.appendChild(postsContainer);
  }).catch((error) => console.error(error));