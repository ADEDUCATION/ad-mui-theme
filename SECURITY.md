## How to deploy

Run the following commands to deploy the package to npm.

These commands trigger a workflow that will build the package, publish it to npm, and create a new Github version.

⚠️ The new version takes the version of the tag so be careful, the tag of the new version must be greater than the last published version. Otherwise, the workflow will fail. ⚠️

```bash
$ git add <files>
$ git commit -m "<message>"
$ git tag <newVersion>
$ git push --tags
```
