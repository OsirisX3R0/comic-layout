// Config object
// let config = {
//     width,
//     cols,
//     gutters,
//     panel: {
//         image,
//         background,
//         height,
//         padding,
//         gutters
//     },
//     panels: [
//         {
//             width
//         }
//     ]
// }
class Comic {
    constructor(selector, config) {
        this.selector = selector;
        this.config = config;

        // Get the selected element
        let comic = document.getElementById(selector);

        // Set basic configuration
        comic.style.width = config.width;
        comic.style.display = "grid";
        comic.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
        comic.style.gridGap = config.gutters;

        // Insert panels
        config.panels.forEach((panel, index) => {
            let div = document.createElement("div");
            if (config.panel.image)
                div.style.backgroundImage = `url(${config.panel.image})`;
            div.style.backgroundColor = config.panel.background;
            div.style.height = config.panel.height;
            div.style.padding = config.panel.padding;
            div.style.gridGap = config.panel.gutters;
            div.style.gridColumn = `span ${panel.width}`;
            div.innerHTML = `Panel ${index + 1}`;
            comic.appendChild(div);
        });
    }
}

let simple = new Comic("layout1", {
    width: "800px",
    cols: 4,
    gutters: "15px",
    panel: {
        background: "#444",
        height: "250px",
        padding: "10px",
        gutters: "15px"
    },
    panels: [{
            width: 4
        },
        {
            width: 2
        },
        {
            width: 2
        },
        {
            width: 1
        },
        {
            width: 3
        },
        {
            width: 2
        },
        {
            width: 2
        }
    ]
});