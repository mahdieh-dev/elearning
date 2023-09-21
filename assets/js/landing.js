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

function onMenuIconClick(x) {
    x.classList.toggle("change")
    document.getElementById('nav-header').classList.toggle('change')
}

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

    document.getElementById('articles-container').innerHTML = articles.map(el =>
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

function renderLanguages() {
    const languages = [
        {
            title: 'RUST',
            image: '/assets/images/rust.png',
        },
        {
            title: 'GO',
            image: '/assets/images/go.png',
        },
        {
            title: 'PYTHON',
            image: '/assets/images/python.png',
        },
    ]

    document.getElementById('languages-container').innerHTML = languages.map(el => `
    <div class="language-card">
        <img src=${el.image} alt="logo of the ${el.title} programming language" >
        <h3>${el.title}</h3>
    </div>
    `).join("")
}

renderLanguages()


