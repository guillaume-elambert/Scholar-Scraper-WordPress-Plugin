# Configuration guide

In this guide, we will explain how to configure the plugin.

## Access the plugin configuration page

To access the plugin configuration page, go to the `Plugins` page in your Wordpress admin panel and click on
the `Scholar Scraper` menu item (the icon should look like a square academic cap).

You should see the plugin configuration page. Like the following :

![Plugin configuration page](../_assets/images/plugin-configuration-page-annotated.jpg ':size=100%')

<br/>

## Configuration sections

The plugin configuration page is divided into several sections. Each section corresponds to "theme" of configuration
options. The sections are :

| Number  |                  Section Name                  | Description                                                                                                                    |
|:-------:|:----------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------|
|  :one:  | [`Scholar Scraper settings`](#scholar-scraper) | Configuration options related to the plugin behavior. It is the main configuration section.                                    |
|  :two:  |            [`Cron settings`](#cron)            | Section containing all the options related to the background execution of the plugin.                                          |
| :three: |       [`Python configuration`](#python)        | This section is used for technical purposes. It is not recommended to change the options if you don't know what you are doing. |

<br/>

## Scholar Scraper settings

This section contains all the options related to the plugin behavior. It is the main configuration section.

![Scholar Scraper settings section](../_assets/images/plugin-configuration-annotated-section-1.jpg ':size=100%')

| Number  |                    Option name                     | Description                                                                                                                                                                                                                                                                                                                                              |
|:-------:|:--------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  :one:  |               `Role of researchers`                | This option allows you to specify the Wordpress roles associated to the researchers. The plugin will use this information to determine from which users it should fetch the Google Scholar data.                                                                                                                                                         |
|  :two:  | `Metadata key associated to the Google Scholar ID` | This option allows you to specify the metadata key associated to the Google Scholar ID. The plugin will use this information to determine from which users it should fetch the Google Scholar data.<p class="warn">If you do not know what a metadata key is or how to create one, you can check the [Wordpress documentation][wp-doc-custom-field].</p> |
| :three: |                `Number of threads`                 | This option allows you to specify the number of threads used to fetch the Google Scholar data. The more threads you use, the faster the plugin will fetch the data. However, if you use too many threads, it might fail or cause performance.                                                                                                            |

<br/>

## Cron settings

This section contains all the options related to the background execution of the plugin.

![Cron settings section](../_assets/images/plugin-configuration-annotated-section-2.jpg ':size=100%')

| Number |   Option name    | Description                                                                                                                                                                                                                                                                                                                                  |
|:------:|:----------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| :one:  | `Cron frequency` | This option allows you to specify the frequency of the background execution of the plugin. The plugin will fetch the Google Scholar data of the users associated to the specified roles and metadata key. The plugin will fetch the data only if the user has not already been fetched or if the user has been updated since the last fetch. |
| :two:  | `Retry interval` | This option allows you to specify the interval of time waited before retrying to fetch the Google Scholar data if the fetch failed.                                                                                                                                                                                                          |

<br/>

## Python configuration

This section is used for technical purposes. It is not recommended to change the options if you don't know what you are
doing.

![Python configuration section](../_assets/images/plugin-configuration-annotated-section-3.jpg ':size=100%')

| Number |  Option name  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:------:|:-------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| :one:  | `Python path` | This option allows you to specify the path to the Python executable. The plugin will use this information to execute the [Scholar Scraper Python API][scholar-scraper-python-api]. <div class="warn">If you do not know where Python is installed, you can check : <ul><li>for Linux servers (usual for production) : [Python documentation for Unix][python-doc-unix]</li><li>for Windows servers (mainly local development) : [Python documentation for Windows][python-doc-windows]</li><li>for Mac servers (also local development) : [Python documentation for Mac][python-doc-mac]</li></ul></div> |
| :two:  |  `Pip path`   | This option allows you to specify the path to the Pip executable. The plugin will use this information to install the [Scholar Scraper Python API][scholar-scraper-python-api]. <p class="warn">If you do not know where Pip is installed, you can check : [Pip installation documentation][pip-doc-install] </p>                                                                                                                                                                                                                                                                                        |

<!-- References -->

[scholar-scraper-python-api]: https://github.com/guillaume-elambert/Scholar-Scraper-Python-API

[wp-doc-custom-field]: https://wordpress.org/documentation/article/assign-custom-fields/

[python-doc-unix]: https://docs.python.org/3/using/unix.html

[python-doc-windows]: https://docs.python.org/3/using/windows.html

[python-doc-mac]: https://docs.python.org/3/using/mac.html

[pip-doc-install]: https://pip.pypa.io/en/stable/installation/