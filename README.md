# Deploy React app (static web page) to Azure Blob

## Get Ready

Login azure from your azure cli.

```
az login
```

If we won't use any# existed azure resource group. First we need to create one.

```
az group create --location australiaeast --name rg-tutorial
```

## Deploying Api

### Create Service Plan and Azure Webapp

First we need to create service plan to create a webapp.

```
az appservice plan create --name sp-phoneBook --resource-group rg-tutorial --sku FREE
```

Then we can create the webapp

```
az webapp create --name wa-tutorial --resource-group rg-tutorial --plan sp-tutorial
```

### Get publish Url

To findout the ftp url to upload our code use below command.

```
az webapp deployment list-publishing-profiles --name wa-tutorial --resource-group rg-tutorial
```

### Upload Api

```
az webapp deployment source config-zip --resource-group rg-tutorial --name wa-tutorial --src ./app.zip
```

## Deploying Client App

### Create Azure Storage

Create azure storage inside the resource group

```
az storage account create --name quoteapp1 -g rg-tutorial --sku Standard_ZRS
```

### Set storage to serve the static web page

```
az storage blob service-properties update --account-name quoteapp1 --static-website --404-document 404.html --index-document index.html
```

### Upload React App to Azure Blob

```
az storage blob upload-batch -s . -d '$web' --account-name quoteapp1
```

### Get web pages url

```
az storage account show -n quoteapp1 -g rg-tutorial --query "primaryEndpoints.web" --output tsv
```
