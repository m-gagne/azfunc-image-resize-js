# Azure Functions - Image Resizing - JavaScript


An Azure Function for resizing images (in blob storage) using Node (JavaScript).

## Configuration


### App Settings

Copy `appsettings.sample.json` to `appsettings.json` and edit as required.

* `ImageStore` : connection string to storage account that contains the images to be resized
* `AzureWebJobsStorage` : connection string to storage account to be used by Azure Functions for logging and tracking
* `ImageResizeMaxWidth` : Maximum width of image when resized
