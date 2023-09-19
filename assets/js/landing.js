function mapNavigation() {
  const headerItems = [
    { label: "Home", link: "/" },
    { label: "Blog", link: "/blog" },
    { label: "About Us", link: "/aboutus" },
    { label: "Contact Us", link: "/contactus" },
  ];

  document.getElementById("nav-header").innerHTML = headerItems
    .map(
      (el) => `
    <a href=${el.link}><li class="header-item">${el.label}</li></a>
    `
    )
    .join("");
}
