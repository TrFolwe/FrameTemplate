const frames = [{
    id: 0,
    name: "Home",
    href: "./frames/HomeFrame.html",
    firstSelected: true
}, {
    id: 1,
    name: "Contact",
    href: "./frames/ContactFrame.html"
}, {
    id: 2,
    name: "Image",
    href: "./frames/ImageFrame.html"
}];

frames.forEach(frame => {
    document.querySelector(".frame-btns").innerHTML += `<a ${frame.firstSelected && 'selected'} class="frameLink" href="${frame.href}" target="myFrame">${frame.name}</a>`;
})

const frameLinkElements = document.querySelectorAll("a.frameLink");
frameLinkElements.forEach(i => i.addEventListener("click", (e) => {
    const { target } = e;
    target.setAttribute("selected", "");
    Array.from(frameLinkElements).filter(i => !i.isEqualNode(target) && i.hasAttribute("selected")).forEach(i => i.removeAttribute("selected"))
}));