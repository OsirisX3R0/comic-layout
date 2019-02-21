// Config object blueprint
// let config = {
//     width,
//     cols,
//     gutters,
//     panel: {
//         image,
//         background,
//         border: {
//             width,
//             style,
//             color
//         }
//         height,
//         padding,
//         gutters
//     },
//     panels: [
//         {
//             width,
//             cols,
//             rows,
//             nested: [
//                 {
//                     width,
//                     height
//                 }
//             ]
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
            // Create div for panel
            let div = document.createElement("div");

            // Apply config
            div.style.boxSizing = "border-box";

            if (config.panel.image)
                div.style.backgroundImage = `url(${config.panel.image})`;   

            if (config.panel.background)
                div.style.backgroundColor = config.panel.background;

            if (config.panel.border)
                div.style.border = `${config.panel.border.width} ${config.panel.border.style} ${config.panel.border.color}`;

            div.style.height = config.panel.height;
            div.style.padding = config.panel.padding;
            div.style.gridGap = config.panel.gutters;
            div.style.gridColumn = `span ${panel.width}`;

            if (panel.nested) {
                div.style.display = "grid";
                div.style.padding = 0;
                div.style.background = "none";
                if (panel.cols)
                    div.style.gridTemplateColumns = `repeat(${panel.cols}, 1fr)`;
                if (panel.rows)
                    div.style.gridTemplateRows = `repeat(${panel.rows}, 1fr)`;

                panel.nested.forEach((nest, index) => {
                    let nested = document.createElement("div");
                    
                    if (config.panel.background)
                        nested.style.backgroundColor = config.panel.background;

                    nested.style.padding = config.panel.padding;

                    if (nest.width)
                        nested.style.gridColumn = `span ${nest.width}`;
                    if (nest.height)
                        nested.style.gridRow = `span ${nest.height}`;

                    nested.innerHTML = `Nested Panel ${index + 1}`
                    div.appendChild(nested);
                });
            } else {
                div.innerHTML = `Panel ${index + 1}`;
            }

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

let complex = new Comic("layout2", {
    width: "800px",
    cols: 4,
    gutters: "15px",
    panel: {
        background: "#444",
        height: "250px",
        padding: "10px",
        gutters: "15px"
    },
    panels: [
        {
            width: 4
        },
        {
            width: 2
        },
        {
            width: 2,
            cols: 3,
            nested: [
                {
                    width: 1
                },
                {
                    width: 1
                },
                {
                    width: 1
                },
                {
                    width: 3
                }
            ]
        },
        {
            width: 1,
            cols: 1,
            rows: 2,
            nested: [
                {
                    width: 1,
                    height: 1
                },
                {
                    width: 1,
                    height: 1
                }
            ]
        },
        {
            width: 3
        },
        {
            width: 2,
            cols: 4,
            nested: [
                {
                    width: 1
                },
                {
                    width: 1
                },
                {
                    width: 1
                },
                {
                    width: 1
                }
            ]
        },
        {
            width: 2
        }
    ]
});