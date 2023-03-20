# Known issues

Here is a list of known issues with the plugin:

## The plugin does not retrieve information from all users

I (the author of the plugin) have noticed that sometimes, the plugin does not retrieve information from all users. 

!> It can happen if **the number of users is high** resulting in Google blocking the requests and there is no proxy available. \
If this happens, you can try to reduce the number of users and try again but otherwise, there is nothing that can be done.


!> An other reason for this issue is that **the server messed up with the Python execution** the plugin is based on. \
If this happens, you can set the [`Number of threads`][scraper-settings] setting to `1` and [manually restart the process][force-scraping]. 

<!-- References -->
[scraper-settings]: /user-guide/configuration-guide?id=scholar-scraper-settings
[force-scraping]: /user-guide/getting-started?id=forcing-the-plugin-to-retrieve-information-from-google-scholar