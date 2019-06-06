# ApiSample

> api sample for Lambda

## Serverless SetUp

official ->https://serverless.com

```$xslt
# install serverless
$ npm install -g serverless
```

## .env setUp

```bash
# make env for NODE_ENV=development
$ cp .env.example .env.dev

# make env for NODE_ENV=production
$ cp .env.example .env.prod
```

## Build Setup
option `:dev` is running NODE_ENV=development
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build[:dev]
$ npm run start[:dev]

# deploy to lambda
$ npm run build[:dev]
$ npm run deploy[:dev]

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
