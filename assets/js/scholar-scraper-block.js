// Create an element that can be user as an icon and loads the svg file
const icon = wp.element.createElement(
    'img',
    {
        src: js_data.image_data,
    }
);


wp.blocks.registerBlockType('scholar-scraper/scholar-scraper-block', {
    title: 'Scholar Scraper',
    icon: icon,
    category: 'widgets',
    attributes: {
        number_papers_to_show: {
            type: 'number',
            default: js_data.default_number_papers_to_show
        },
        sort_by_field: {
            type: 'string',
            default: js_data.default_sort_by_field
        },
        sort_by_direction: {
            type: 'string',
            default: js_data.default_sort_by_direction
        },
        display_type: {
            type: 'string',
            default: js_data.default_display_type
        },
        allow_search: {
            type: 'boolean',
            default: js_data.default_allow_search
        },
        block_id: {
            type: 'string',
            default: undefined
        }
    },
    edit: function (props) {

        if (props.attributes.block_id === undefined) {
            props.setAttributes({block_id: js_data.default_block_id});
        }

        /**
         * Function called when the user changes the number of papers to show.
         * @param event The event that triggered the function.
         * @since 1.0.0
         */
        function updateNumberPaperToShow(event) {
            // Check that the value is a number
            if (isNaN(event.target.value) || !Number.isInteger(Number(event.target.value)) || event.target.value <= 0) {
                event.preventDefault();
                return;
            }
            props.setAttributes({number_papers_to_show: Number(event.target.value)});
        }

        /**
         * Function called when the user changes the field used to sort the papers.
         * @param event The event that triggered the function.
         * @since 1.0.0
         */
        function updateSortByField(event) {
            // Check that the value is in the list of available sort by fields
            if (!Object.keys(js_data.available_sort_by_fields).includes(event.target.value)) {
                event.preventDefault();
                return;
            }
            props.setAttributes({sort_by_field: event.target.value});
        }

        /**
         * Function called when the user changes the sort direction.
         * @param event The event that triggered the function.
         * @since 1.0.0
         */
        function updateSortByDirection(event) {
            // Check that the value is in the list of available sort by directions
            if (!["asc", "desc"].includes(event.target.value)) {
                event.preventDefault();
                return;
            }
            props.setAttributes({sort_by_direction: event.target.value});
        }

        /**
         * Function called when the user changes the display type.
         * @param event The event that triggered the function.
         * @since 1.1.0
         */
        function updateDisplayType(event) {
            // Check that the value is in the list of available display types
            if (!Object.keys(js_data.available_display_types).includes(event.target.value)) {
                event.preventDefault();
                return;
            }
            props.setAttributes({display_type: event.target.value});
        }

        /**
         * Function called when the user changes the allow search option.
         * @param event The event that triggered the function.
         */
        function updateAllowSearch(event) {
            // Ensure that the value is a boolean
            if (typeof event.target.checked !== "boolean") {
                console.log(event.target.checked);
                event.preventDefault();
                return;
            }
            props.setAttributes({allow_search: event.target.checked});
        }


        return wp.element.createElement(
            'div',
            {className: props.className},
            wp.element.createElement(
                'div',
                {id: 'scholar-scraper-block-hero'},
                wp.element.createElement(
                    'div',
                    {id: 'scholar-scraper-block-icon'},
                    icon,
                ),
                wp.element.createElement(
                    'h4',
                    {id: 'scholar-scraper-block-title'},
                    'Scholar Scraper'
                ),
            ),
            wp.element.createElement(
                'div',
                {id: 'scholar-scraper-block-attributes'},
                wp.element.createElement(
                    'label',
                    {
                        for: "num_articles"
                    },
                    'Number of papers to show:'
                ),
                wp.element.createElement(
                    'input',
                    {
                        name: "num_articles",
                        type: 'number',
                        min: 1,
                        value: props.attributes.number_papers_to_show,
                        onChange: updateNumberPaperToShow
                    }
                ),
                wp.element.createElement(
                    'label',
                    {
                        for: "sort-by",

                    },
                    'Sort by:'
                ),
                wp.element.createElement(
                    'div',
                    {
                        id: "sort-by-container"
                    },
                    wp.element.createElement(
                        'select',
                        {
                            name: "sort-by-field",
                            id: "sort-by-field",
                            onChange: updateSortByField
                        },
                        // On crée une option pour chaque valeur du tableau js_data.available_sort_by
                        // La clé du tableau est la valeur de l'option et la valeur du tableau est le texte affiché
                        Object.keys(js_data.available_sort_by_fields).map(function (key) {
                            return wp.element.createElement(
                                'option',
                                {
                                    value: key,
                                    selected: key === props.attributes.sort_by_field
                                },
                                js_data.available_sort_by_fields[key]
                            )
                        }),
                    ),
                    wp.element.createElement(
                        'select',
                        {
                            name: "sort-by-direction",
                            id: "sort-by-direction",
                            onChange: updateSortByDirection
                        },
                        wp.element.createElement(
                            'option',
                            {
                                value: "asc",
                                selected: "asc" === props.attributes.sort_by_direction
                            },
                            'Ascending'
                        ),
                        wp.element.createElement(
                            'option',
                            {
                                value: "desc",
                                selected: "desc" === props.attributes.sort_by_direction
                            },
                            'Descending'
                        ),
                    ),
                ),
                wp.element.createElement(
                    'label',
                    {
                        for: "display-type",
                    },
                    'Display papers as:'
                ),
                wp.element.createElement(
                    'select',
                    {
                        name: "display-type",
                        id: "display-type",
                        onChange: updateDisplayType
                    },
                    // On crée une option pour chaque valeur du tableau js_data.available_display_types
                    // La clé du tableau est la valeur de l'option et la valeur du tableau est le texte affiché
                    Object.keys(js_data.available_display_types).map(function (key) {
                        return wp.element.createElement(
                            'option',
                            {
                                value: key,
                                selected: key === props.attributes.display_type
                            },
                            js_data.available_display_types[key]
                        )
                    }),
                ),
                wp.element.createElement(
                    'label',
                    {
                        for: "allow-search",
                    },
                    'Allow users to search for papers?'
                ),
                wp.element.createElement(
                    'input',
                    {
                        name: "allow-search",
                        type: 'checkbox',
                        checked: props.attributes.allow_search,
                        onChange: updateAllowSearch
                    }
                ),
            ),
        );
    },
    save: function (props) {
        return null;
    }
})
