// Detect Loading finished on Docsify
// Do not create a new file, just add this code to the existing $docsify object
let router;

window.$docsify = {
    name: 'Scholar Scraper',
    repo: 'https://github.com/guillaume-elambert/Scholar-Scraper-Wordpress-Plugin',
    coverpage: true,
    loadSidebar: true,
    loadNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    search: {
        noData: 'No results!',
        paths: 'auto',
        placeholder: 'Search',
    },
    themeColor: '#25798A',
    pagination: {
        crossChapter: true,
        crossChapterText: true,
    },
    auto2top: true,
    plugins: [
        function (hook, vm) {
            router = vm;

            hook.doneEach(function () {
                handleUrlPointingToDetails(vm.route.query.id);
                handleLinksInSummary();
            });

            hook.beforeEach(function (markdown) {
                url = 'https://github.com/guillaume-elambert/Scholar-Scraper-Wordpress-Plugin/blob/docs/' + vm.route.file;
                let editMarkdown = '[:memo: Edit Document](' + url + ')\n';
                // Get the next and previous links



                return (
                    editMarkdown +
                    markdown
                );
            });

        }
    ]
}


/**
 * Check if the URL contains a search parameter "id" and if so open the corresponding <details> element if needed.
 * @param {string} id The id of the element that will be focused when the page will be loaded
 */
function handleUrlPointingToDetails(id = '') {

    if (!id || id === '') {
        return;
    }

    const element = document.getElementById(id);
    let details;
    // Check that the element exists and is inside a <details> element
    if (element && (details = element.closest('details'))) {
        details.setAttribute('open', '');
    }
}


/**
 * Function to handle links inside <details> elements.
 */
function handleLinksInSummary() {
    document.querySelectorAll('details > summary a').forEach(function (link) {
        //Get the first parent node of the link that is a <details> element
        var details = link.closest('details');

        // Add a click event listener to the link
        link.addEventListener("click", function (event) {

            const toUrl = new URL(link.href);

            // Entrering : the outgoing link is not an external link
            //          => we want to push the new URL to the browser history without reloading the page
            if (toUrl.origin === window.location.origin) {
                // Push the new URL to the browser history without reloading the page
                window.history.pushState(null, null, link.href);

                // Set the url to the link href but without reloading the page
                event.preventDefault();
            }


            details.toggleAttribute('open');
        });
    });
}