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
                    width: 2
                },
                // {
                //     width: 1
                // },
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