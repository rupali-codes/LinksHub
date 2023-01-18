# LinksHub contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> IMPORTANT **Note**
>
> **Pull Requests having no issue associated with them will not be accepted. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.
- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them
- [Node.js](https://nodejs.org/) is installed.

## How to Contribute

- Look at the existing [**Issues**](https://github.com/rupali-codes/LinksHub/issues) or [**create a new issue**](https://github.com/rupali-codes/LinksHub/issues/new/choose)!
- [**Fork the Repo**](https://github.com/rupali-codes/LinksHub/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/rupali-codes/LinksHub/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

## Appending new Links

- Go to `database/data.ts` create new object in the data array with the following pattern
  ```sh
    id: +1 previous element,
    name:'', //name of the site
    description:'', //define what the site does in a short way
    url:'', //add the valid site url
    category:'', //can only be frontend or backend
    subcategory:'' //what best describes the site. for example: images, fonts etc
  ```

**Important!**

- Do not make duplicate entries (always confirm that an entry does not exist by searching through the JSON file.
- Ensure that your entries are error-free by double-checking before staging your changes.
- Your entries should follow the above structure.

## Making pull requests

1. When you submit a pull request, several tests are automatically run
   as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. If your pull request has merge conflicts with the `main` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `main` branch into your branch (`git pull upstream main`), and then pushing the updated branch to your fork (`git push`).

3. Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review. In such cases, the reviewer has the right to close your pull request and ask that you submit a separate pull request for each logical set of changes that belong together.

4. Link the issue you have resolved in the Pull Request Template (e.g Closes/Fixes #99).
5. Use [Conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) for your changes.
6. Do not re-open a pull request that a reviewer has closed.
   - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.

## Remarks

If something is missing here, or you feel something is not well described, either directly create a PR or [create an issue](https://github.com/rupali-codes/LinksHub/issues).