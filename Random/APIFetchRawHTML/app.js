const apiUrl = "https://jsonplaceholder.typicode.com"

const fetchPosts = async () => {
    try {
        const response = await fetch(`${apiUrl}/posts`) 

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

const listPosts = async (postContainerElementId) => {

    postContainerElementId = document.getElementById(postContainerElementId)

    if (!postContainerElementId) { // if the id does not exist in DOM
        return;
    }
    // fetchPosts().then((posts) => {
    //     if(!posts) {
    //         postContainerElementId.innerHTML = "No posts fetched."
    //         return
    //     }
    //     for (const post of posts) {
    //         postContainerElementId.appendChild(postElement(post))
    //     }
    // }).catch(e => {
    //     console.log(e)
    // })
    try {
        const allPosts = await fetchPosts()
        for (post of allPosts) {
            if (!post) {
                postContainerElementId.innerHTML = "No posts fetched."
                return 
            }
            postContainerElementId.appendChild(postElement(post))
        }
    } catch (e) {
        console.log(e)
    }
}

const postElement = (post) => {
    const anchorElement = document.createElement('a')
    anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`)
    anchorElement.setAttribute('target', '_blank') // opens in new tab
    anchorElement.innerText = post.title

    const postTitleElement = document.createElement('h3')
    postTitleElement.appendChild(anchorElement)

    return postTitleElement
}