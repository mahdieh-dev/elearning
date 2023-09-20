function mapNavigation() {
    const headerItems = [
        {label: "Home", link: "/"},
        {label: "Blog", link: "/blog"},
        {label: "About Us", link: "/aboutus"},
        {label: "Contact Us", link: "/contactus"},
    ];

    document.getElementById("nav-header").innerHTML = headerItems
        .map(
            (el) => `
    <li class="header-item" onclick=${el.link} >${el.label}</li>
    `
        )
        .join("");
}

mapNavigation()

function renderArticles() {
    const articles = [
        {
            image: 'https://picsum.photos/200?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!'
        },
        {
            image: 'https://picsum.photos/200?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!'
        },
        {
            image: 'https://picsum.photos/200?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!'
        },
        {
            image: 'https://picsum.photos/200?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!'
        },
        {
            image: 'https://picsum.photos/200?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!'
        },
    ]

    document.getElementById('blog-section').innerHTML = articles.map(el =>
        `<article class="article-card">
            <img
                    src=${el.image}
                    alt=${el.alt}
            />
            <h3>${el.title}</h3>
        </article>`
    ).join("")
}

renderArticles()

function onMenuIconClick(x) {
    x.classList.toggle("change")
    document.getElementById('nav-header').classList.toggle('change')
}
