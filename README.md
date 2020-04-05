# Deploy React app (static web page) to Azure Blob

## Create Azure Storage

If we won't use a existed azure resource group. First we need to create one.

```
az group create --location australiaeast --name rg-tutorial
```

then we can create azure storage inside our resource group

```
az storage account create --name quoteapp1 -g rg-tutorial --sku Standard_ZRS
```

## Set storage to serve the static web page

```
az storage blob service-properties update --account-name quoteapp1 --static-website --404-document 404.html --index-document index.html
```

## Upload React App to Azure Blob

```
az storage blob upload-batch -s . -d '$web' --account-name quoteapp1
```

## Get web pages url

```
az storage account show -n quoteapp1 -g rg-tutorial --query "primaryEndpoints.web" --output tsv
```
