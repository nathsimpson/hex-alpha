# Releasing process

Here are the basic steps for releasing:

1. Switch to master branch and pull latest
2. Update the version in package.json
3. Update CHANGELOG.md
4. Commit to master `Release vX.X.X`
5. `git tag vX.X.X`
6. Push to npm with `npm publish`
7. `git push`
8. `git push --tags`
