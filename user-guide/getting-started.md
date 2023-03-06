# Quick start

Here are the steps to get started with Scholar Scraper.

?> In the following steps, we will refer to the version of the plugin as `X.Y.Z`. \
You should replace this version number with the actual version number of the plugin you downloaded.

## Prerequisites

To use the plugin, you need to have a Wordpress website. \
If you don't have a Wordpress website, you can create one for free on 
[Wordpress.com][wordpress-com] or [Wordpress.org][wordpress-org]. \
But I assume that you already have a Wordpress website otherwise you wouldn't be reading this guide.

!> The plugin has been tested with **Wordpress 6.1.1** and **PHP 8.1.10**. \
It should work with older versions of Wordpress and PHP but it has not been tested.

!> The plugin requires the [**Python 3**][python-3] interpreter to be installed on the server. \
To check if Python 3 is installed on your server, you can install the plugin [WPTerm][wpterm] 
and use it to run the following command in the terminal: `python3 --version`. \
If the command returns the version of Python 3, then you are good to go. \
If the command returns an error, you need to install Python 3 on your server, you can find 
instructions on the web.

Once you have a Wordpress website with Python 3 installed, you can start the installation of the plugin.

<br/>

## Download the plugin

The first step it to download the plugin from the Github
repository : [latest release][github-latest-release]. \
Download the source code. The download of an archive named 
`Scholar-Scraper-Wordpress-Plugin-X.Y.Z.zip` should start.

<br/>

## Install the Wordpress plugin

Now that you have downloaded the plugin, you can install it in your Wordpress website. \
There are two ways to install the plugin :

<details open>
<summary>

### Option 1 : Wordpress Plugin Manager

</summary>


The easiest way to install the plugin is to use the Wordpress Plugin Manager. \
Go to the `Plugins` page in your Wordpress admin panel and click on the `Add New` button. \
Now click on the `Upload Plugin` button and select the `Scholar-Scraper-Wordpress-Plugin-X.Y.Z.zip` 
file you downloaded earlier. \
Click on the `Install Now` button and then on the `Activate Plugin` button.

</details>

<br/>

<details>
<summary>

### Option 2 : Manual installation

</summary>

If you prefer to install the plugin manually, you can unzip the `Scholar-Scraper-Wordpress-Plugin-X.Y.Z.zip` file and
upload the `scholar-scraper` folder to the `wp-content/plugins` folder of your Wordpress installation. \
Then go to the `Plugins` page in your Wordpress admin panel and activate the plugin.
</details>

<br/>

## Configure the plugin

Now that the plugin is installed, you can configure it. \
In the vertical navigation bar on the left, click on the `Scholar Scraper` menu item (the icon should 
look like a square academic cap). \
You should see the plugin configuration page. Like the following :

![Plugin configuration page](../_assets/images/plugin-configuration-page.jpg ':size=100%')

?> The plugin configuration options are explained in the [Configuration Guide][configuration-guide]

<br/>

## Include the Google Scholar papers in a page or post

Now that the plugin is installed and configured, you can include the Google Scholar papers in a page or post. \
To do so, you can use the Gutenberg block provided by the plugin. \
To add the Gutenberg block to a page or post, click on the `Add block` button in the editor and search
for `Scholar Scraper`. \
You should see the `Scholar Scraper` block in the search results. Click on it to add it to the page or post.

![Gutenberg block](../_assets/images/gutenberg-block.jpg ':size=100%')

?> The Gutenberg block options are explained in the [Gutenberg Block Guide][gutenberg-block-guide].


<!-- References -->
[wordpress-com]: https://wordpress.com/
[wordpress-org]: https://wordpress.org/
[python-3]: https://www.python.org/downloads/
[wpterm]: https://wordpress.org/plugins/wpterm/
[github-latest-release]: https://github.com/guillaume-elambert/Scholar-Scraper-Wordpress-Plugin/releases/latest
[configuration-guide]: /user-guide/configuration-guide
[gutenberg-block-guide]: /user-guide/gutenberg-block-guide