let users = [
    {
        image : "https://picsum.photos/id/111/200/200"
    },
    {
        image : "https://picsum.photos/id/222/200/200"
    },
    {
        image : "https://picsum.photos/id/113/200/200"
    },
    {
        image : "https://picsum.photos/id/444/200/200"
    },
    {
        image : "https://picsum.photos/id/555/200/200"
    },
    {
        image : "https://picsum.photos/id/666/200/200"
    },
]

let count = 2;
let get = async (page) => {
    // await axios('...')

    let sliced = users.slice(page*count, (page+1)*count);

    const images = document.getElementById("images");
    images.innerHTML = "";
    for (let i = 0; i < sliced.length; ++i) {
        const user = sliced[i];

        images.innerHTML += `
        <div>
            <img src="${user.image}" / >
            <p>${page*count + i }</p>   
        </div>
        `
    }
}
get(0);

let pageCount = users.length / count;
const pagination = document.getElementById("pagination");
for (let i = 0; i < pageCount; ++i) {
    const button = document.createElement("button");
    button.innerHTML = `${i+1}`;
    button.onclick = async () => {
        await get(i);
    }
    pagination.appendChild(button);
}
