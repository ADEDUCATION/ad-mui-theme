# Use this storybook to test your components

This storybook is a good place to test your components. You can use it to test your components with different props.

## Installation

### Clone the repository

```bash
$ git clone https://github.com/ADEDUCATION/ad-mui-theme.git
```

### Install dependencies

```bash
$ cd ./storybook
$ yarn
```

### Run storybook

```bash
$ yarn storybook
```

## Use this storybook with local package

### Pack the package

```bash
$ cd ../
$ npm run pack
```

### Get path of the package

```bash
pwd
#copy the path
```

### Install the package in storybook

```bash
$ cd ./storybook
```

Replace in `package.json` the path of the package with the path you copied

```json
{
  "dependencies": {
    "ad-mui-theme-package": "path/to/your/package"
  }
}
```

Install the package and all dependencies.

```bash
$ yarn
```

### Run storybook

```bash
$ yarn storybook
```
