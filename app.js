// Getting elements 
let profileName = document.getElementById("name");
let profileLink = document.getElementById("profileLink");
let userLocation = document.getElementById("location");
let created = document.getElementById("created");
let profileImage = document.getElementById("profileImage");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let repo = document.getElementById("repo");
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn")
let apiUrl = "https://api.github.com/users/"

let getdata = () => {
// Fetch Data 
let data = new Promise((resolve, reject) => {
    fetch(apiUrl + search.value)
        .then(async (res) => resolve(await res.json()))
        .catch((err) => reject(err))
});
data
    .then((res) => {
        const date = new Date(res.created_at);
        const formattedDate = date.toLocaleDateString();
        profileName.innerText = res.name
        profileLink.innerHTML = res.html_url
        userLocation.innerText = res.location
        created.innerText = formattedDate
        profileImage.src = res.avatar_url
        followers.innerText = res.followers
        following.innerText = res.following
        repo.innerText = res.public_repos
})
    .catch((err) => console.log(err))
}
searchBtn.addEventListener("click", getdata)


