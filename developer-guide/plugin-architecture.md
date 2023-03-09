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

Here is a quick description of the files and folders of the plugin.

?> This section is a summary of the plugin's structure. \
You can find more information about each main files and folders in
the [following section](/developer-guide/plugin-architecture?id=description-of-main-files).

| File/Folder                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`scholar_scraper.php`](/developer-guide/plugin-architecture?id=entry-point-scholar_scraperphp "See more about this file")        | This file is the main file of the plugin. It contains the plugin's header and the plugin's activation and deactivation functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`src`](/developer-guide/plugin-architecture?id=sources-of-the-plugin-src "See more about this folder")                           | This folder contains all the plugin's source code. It contains the following files and subfolders:<ul><li>`GoogleScholarScraping.php`: Contains the functions used to scrape Google Scholar.</li><li>`Model`: Contains the classes used to represent the scraped data (see the [PHPDoc][phpdoc]).</li><li>`Scheduling.php`: Contains the functions used to schedule the scraping.</li><li>`ScriptExecution`: Contains the functions used to execute the Python script.</li><li>`SettingsPage`: Contains the functions used to register the plugin's settings.</li><li>`Template`: Contains the functions used to display the scraped data.</li><li>`init_plugin.php`: Contains the functions used to initialise the plugin.</li><li>`utils.php`: Contains the utility functions used by the plugin.</li></ul> |
| [`config.php`](/developer-guide/plugin-architecture?id=plugin-configuration-constants-configphp "See more about this file")       | This file contains all the plugin's configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`results.json`](/developer-guide/plugin-architecture?id=retrieved-results-resultsjson-and-resultsser "See more about this file") | This file contains the results of the last scraping. It is used by the plugin to display the results of the last scraping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`results.ser`](/developer-guide/plugin-architecture?id=retrieved-results-resultsjson-and-resultsser "See more about this file")  | This file contains the serialised results of the last scraping. It is used by the plugin to display the results of the last scraping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`assets`](/developer-guide/plugin-architecture?id=plugin-assets-assets "See more about this folder")                             | This folder contains all the assets used by the plugin. It contains the following subfolders:<ul><li>`css`   : Contains the CSS files used by the plugin.</li><li>`images`: Contains the image files used by the plugin.</li><li>`js`    : Contains the JavaScript files used by the plugin.</li><li>`python`: Contains the Python files used by the plugin.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `readme.txt`                                                                                                                      | This file contains the plugin's description. It is used by Wordpress to display the plugin's description on the plugin's page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<br/>

## Description of main files

In this section, we will go deeper into the description of the main files of the plugin, those that are essential to its
operation. \
We will therefore not describe the files used to style the pages of the plugin (CSS and JS files).

### Plugin configuration constants — `config.php`

This file contains the plugin's configuration. \
It contains the following constants:

| Constant name                      | Description                                                                                                                               |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `PLUGIN_NAME`                      | The plugin's name.                                                                                                                        |
| `SCHOLAR_SCRAPER_VERSION`          | The plugin's version.                                                                                                                     |
| `PLUGIN_URL`                       | The plugin's URL.                                                                                                                         |
| `PLUGIN_SLUG`                      | The plugin's slug.                                                                                                                        |
| `PLUGIN_ICON_BASE64`               | The plugin's icon in base64 format.                                                                                                       |
| `PLUGIN_ICON`                      | The CSS class of the plugin's icon.                                                                                                       |
| `OPTION_GROUP`                     | The option group used to register the plugin's settings (see the [Settings API documentation][settings-api-doc]).                         |
| `DEFAULT_NUMBER_OF_PAPERS_TO_SHOW` | The default number of papers to show when rendering the Gutenberg block.                                                                  |
| `DEFAULT_PAPERS_SORT_FIELD`        | The default field used to sort the papers when rendering the Gutenberg block.                                                             |
| `DEFAULT_PAPERS_SORT_DIRECTION`    | The default direction used to sort the papers when rendering the Gutenberg block.                                                         |
| `PAPERS_DISPLAY_TYPES`             | The types of display available for the Gutenberg block rendering.                                                                         |
| `DEFAULT_NUMBER_LINES_ABSTRACT`    | The default number of lines to display for the abstract of the papers when rendering the Gutenberg block (depending on the display type). |
| `DEFAULT_PAPERS_DISPLAY_TYPE`      | The default type of display used to render the Gutenberg block.                                                                           |
| `DEFAULT_PAPERS_ALLOW_SEARCH`      | Boolean indicating if the Gutenberg block allows the user to search for papers by default.                                                |
| `SEARCH_DELAY`                     | The delay (in milliseconds) between the end of the user's input and the execution of the search.                                          |
| `CUSTOM_CRON_FREQUENCIES`          | The custom cron frequencies used by the plugin.                                                                                           |
| `PLUGIN_SETTINGS`                  | The settings available in the plugin's settings page.                                                                                     |
| `PYTHON_SCRIPT_PATH`               | The default path to the Python script used to scrape Google Scholar.                                                                      |
| `PYTHON_REQUIREMENTS_PATH`         | The default path to the Python requirements file.                                                                                         |
| `CRON_HOOK_NAME`                   | The name of the cron hook used by the plugin to schedule the scraping.                                                                    |
| `CRON_HOOK_IMMEDIATE_NAME`         | The name of the cron hook used by the plugin to schedule the scraping immediately.                                                        |
| `CRON_TRANSIENT`                   | The name of the transient used by the plugin to detect if scraping is in progress.                                                        |
| `CRON_TRANSIENT_RESET_AFTER`       | The number of seconds after which the transient is reset.                                                                                 |
| `STARTING_CRON_TIME`               | The starting time of the cron (based on UTC).                                                                                             |
| `LOG_FILE`                         | The path to the log file used by the plugin.                                                                                              |
| `RESULTS_FILE`                     | The path to the file containing the results of the last scraping.                                                                         |
| `SERIALIZED_RESULTS_FILE`          | The path to the file containing the serialised results of the last scraping.                                                              |

<br/>

### Entry point — `scholar_scraper.php`

This file is the entry point of the plugin. \
It does nothing more than importing setting some global variables and importing the `config.php`
and `src/init_plugin.php` files.

<br/>

### Sources of the plugin — `src/`

This folder contains all the plugin's source code.

#### Main plugin file — `src/init_plugin.php`

This file contains the functions used to :

* Install the plugin
* Deactivate the plugin
* Initialise the plugin for lambda users (includes the style and script files, etc.)
* Initialise the plugin for administrators (same as above + add the menu, require the needed files, etc.)
* Register the Gutenberg block (see the [Gutenberg block editor documentation][bloc-editor-doc])

<div class="spacing"></div>

#### Utility functions — `src/utils.php`

This file contains the utility functions used by the plugin.
Examples of utility functions contained in this file:

* `scholar_scraper_get_settings_or_default` : get the value of a setting in database or return the default value if the
  setting is not set
* `scholar_scraper_log` : log a message in the plugin's log file
* `scholar_scraper_cast_object_to_class` : cast an object to a class

<div class="spacing"></div>

#### Scheduling functions — `src/Scheduling.php`

This file contains the functions used to schedule the scraping of Google Scholar.
It contains the following functions:

* `scholar_scraper_schedule_event` : schedule the scraping of Google Scholar
* `scholar_scraper_unschedule_event` : unschedule the scraping of Google Scholar
* `scholar_scraper_update_schedule_event` : update the schedule of the scraping of Google Scholar
* `scholar_scraper_get_schedule_interval` : get the interval of a cron frequency

<div class="spacing"></div>

#### Scraping functions — `src/GoogleScholarScraping.php`

This is the file containing all the functions used to scrape Google Scholar. \
It contains the following functions that :

* Install the Python requirements
* Execute the Python script
* Handle the results of the scraping

<div class="spacing"></div>

#### Papers display templates — `src/Template/`

These files contain the templates used to display the papers in the Gutenberg block.

?> Refer to the [`Model\ScholarPublication`][phpdoc-publication] class to know the properties of the papers.

<div class="spacing"></div>

#### Script execution — `src/ScriptExecution/`

This function contains the files used to execute the Python script. \
It contains the following files:

* `src/ScriptExecution/BashExecution.php` : contains the functions used to execute a process in Bash
* `src/ScriptExecution/FunctionType.php` : contains the possible types of functions used to execute a process

<div class="spacing"></div>

#### Models — `src/Model/`

This folder contains the files used to define the models used by the plugin. \
Their purpose is to define the structure of the data used by the plugin. \

?> Refer to the [PHPDoc documentation][phpdoc] to know more about the models.

<div class="spacing"></div>

#### Settings page — `src/SettingsPage/`

This folder contains the files used to display the plugin's settings page.

##### Settings formatting — `src/SettingsPage/SettingsFormatting.php`

This file contains the functions used to format the settings of the plugin. \
It ensures that the settings are correctly formatted before being saved in the database.

##### Settings registration — `src/SettingsPage/SettingsRegistration.php`

This file contains the functions used to register the settings of the plugin. \
It registers the settings using the [WordPress Settings API][settings-api-doc].

<br/>

### Retrieved results — `results.json` and `results.ser`

These files contain the results of the last scraping executed by the plugin. \
The `results.json` file contains the results in JSON format. \
The `results.ser` file contains the results in serialised format (PHP format, used to improve the performance of the
plugin).

!> The plugin does not save the results of the scraping in the database !

<br/>

### Plugin assets — `assets/`

This folder contains the plugin's assets (CSS, JS, images and Python files).

#### Scholar Scraper Python script — `assets/python/scholar-python-api.py`

This file contains the Python script used to scrape Google Scholar. \
It is executed by the plugin to scrape Google Scholar.

#### Gutenberg block content declaration — `assets/js/scholar-scraper-block.js`

This file contains the declaration of the Gutenberg block elements. \
It is used to declare the block's name, its icon, its category, its attributes and its edit function.

?> If you want to learn more about the Gutenberg block editor, you can read
the [Gutenberg block editor documentation][bloc-editor-doc].

!> This file is only used as a 'front end' file. All the block's logic is implemented in
the [`scholar_scraper.php`](/developer-guide/plugin-architecture?id=entry-point-scholar_scraperphp) file.

<br/>

### Index files — `*/index.php`

Those files are used to include all the files in the folder.

<!-- References -->

[phpdoc]: /developer-guide/phpdoc/
[phpdoc-publication]: /developer-guide/phpdoc/ScholarPublication
[bloc-editor-doc]: https://developer.wordpress.org/block-editor/
[settings-api-doc]: https://developer.wordpress.org/plugins/settings/settings-api/
