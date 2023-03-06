# Plugin structure

This section describes the plugin's structure and how it is organized.

## Tree view

The plugin is structured as follows:

<pre><code style="line-height: 1em; font-size: 1em; padding: 0 5px 1em 5px;">
.
├── LICENSE
├── assets
│     ├── css
│     │     ├── scholar-scraper-block.css
│     │     ├── scholar-scraper-font
│     │     │     ├── css
│     │     │     │     └── scholar-scraper.css
│     │     │     └── fonts
│     │     │         ├── scholar-scraper.eot
│     │     │         ├── scholar-scraper.svg
│     │     │         ├── scholar-scraper.ttf
│     │     │         └── scholar-scraper.woff
│     │     ├── scholar-scraper-result-page.css
│     │     ├── scholar-scraper-search-form.css
│     │     └── scholar-scraper-settings-page.css
│     ├── img
│     │     └── google-scholar.svg
│     ├── js
│     │     ├── scholar-scraper-block.js
│     │     ├── scholar-scraper-search-form.js
│     │     └── scholar-scraper-settings-page.js
│     └── python
│         ├── requirements.txt
│         └── scholar-python-api.py
├── config.php
├── readme.txt
├── results.json
├── results.ser
├── scholar_scraper.php
└── src
    ├── GoogleScholarScraping.php
    ├── Model
    │     ├── GenericCollection.php
    │     ├── ScholarAuthor.php
    │     ├── ScholarAuthorCollection.php
    │     ├── ScholarCoauthor.php
    │     ├── ScholarCoauthorCollection.php
    │     ├── ScholarPublication.php
    │     ├── ScholarPublicationCollection.php
    │     └── index.php
    ├── Scheduling.php
    ├── ScriptExecution
    │     ├── BashExecution.php
    │     ├── FunctionType.php
    │     └── index.php
    ├── SettingsPage
    │     ├── SettingsFormatting.php
    │     ├── SettingsRegistration.php
    │     └── index.php
    ├── Template
    │     ├── PublicationCardTemplate.php
    │     ├── PublicationListTemplate.php
    │     └── SearchForm.php
    ├── index.php
    ├── init_plugin.php
    └── utils.php
</code></pre>

<br/>

## Global description of the files and folders

| File/Folder           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `assets`              | This folder contains all the assets used by the plugin. It contains the following subfolders:<ul><li>`css`   : Contains the CSS files used by the plugin.</li><li>`images`: Contains the image files used by the plugin.</li><li>`js`    : Contains the JavaScript files used by the plugin.</li><li>`python`: Contains the Python files used by the plugin.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `config.php`          | This file contains all the plugin's configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `readme.txt`          | This file contains the plugin's description. It is used by Wordpress to display the plugin's description on the plugin's page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `results.json`        | This file contains the results of the last scraping. It is used by the plugin to display the results of the last scraping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `results.ser`         | This file contains the serialised results of the last scraping. It is used by the plugin to display the results of the last scraping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `scholar_scraper.php` | This file is the main file of the plugin. It contains the plugin's header and the plugin's activation and deactivation functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `src`                 | This folder contains all the plugin's source code. It contains the following files and subfolders:<ul><li>`GoogleScholarScraping.php`: Contains the functions used to scrape Google Scholar.</li><li>`Model`: Contains the classes used to represent the scraped data (see the [PHPDoc][phpdoc]).</li><li>`Scheduling.php`: Contains the functions used to schedule the scraping.</li><li>`ScriptExecution`: Contains the functions used to execute the Python script.</li><li>`SettingsPage`: Contains the functions used to register the plugin's settings.</li><li>`Template`: Contains the functions used to display the scraped data.</li><li>`init_plugin.php`: Contains the functions used to initialise the plugin.</li><li>`utils.php`: Contains the utility functions used by the plugin.</li></ul> |

<!-- References -->
[phpdoc]: /developer-guide/phpdoc/