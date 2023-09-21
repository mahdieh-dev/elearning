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
            image: 'https://picsum.photos/100?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta fugiat ipsa labore non pariatur rem repellat sapiente veritatis voluptas"
        },
        {
            image: 'https://picsum.photos/100?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta fugiat ipsa labore non pariatur rem repellat sapiente veritatis voluptas"
        },
        {
            image: 'https://picsum.photos/100?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta fugiat ipsa labore non pariatur rem repellat sapiente veritatis voluptas"
        },
        {
            image: 'https://picsum.photos/100?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta fugiat ipsa labore non pariatur rem repellat sapiente veritatis voluptas"
        },
        {
            image: 'https://picsum.photos/100?1',
            alt: "dummy image for blog posts",
            title: 'Code Optimization Made Easy!',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta fugiat ipsa labore non pariatur rem repellat sapiente veritatis voluptas"
        },
    ]

    document.getElementById('blog-section').innerHTML = articles.map(el =>
        `<article class="article-card">
            <img
                    src=${el.image}
                    alt=${el.alt}
            />
            <div class="article-card-text-container">
                <h3>${el.title}</h3>
                <p>${el.description.slice(0, 50) + "..."}</p>
            </div>
        </article>`
    ).join("")
}

renderArticles()

function onMenuIconClick(x) {
    x.classList.toggle("change")
    document.getElementById('nav-header').classList.toggle('change')
}
