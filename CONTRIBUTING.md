# LinksHub contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note** 
>
> **Pull Requests having no issue associated with them will not be accepted. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

> **An automated process has been implemented to ensure timely management of Pull Requests (PRs) on this platform. PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them

- [Node.js](https://nodejs.org/) is installed.

---
## How to Contribute 🤔

- Look at the existing [**Issues**](https://github.com/rupali-codes/LinksHub/issues) or [**create a new issue**](https://github.com/rupali-codes/LinksHub/issues/new/choose)!
- [**Fork the Repo**](https://github.com/rupali-codes/LinksHub/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/rupali-codes/LinksHub/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

### Appending new Links 🔗

> ✨ You can also create [issue(s)](https://github.com/rupali-codes/LinksHub/issues/new/choose) for inserting your links and someone else will take care of them.

#### 🌟Follow these steps to get your Links added into the Hub

* A newly created category and subcategory should be added to the [data.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/data.ts) & [index.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/index.ts) files
* Each category has its own folder with its name
* Every subcategory should be placed in its respective category folder
  
  > i.e images should be inside Frontend folder

* To add a new category ensure to create a folder with it's name
  
  > i.e Resources

* Make sure to export the newly created json file on the index file

The subcategory object should follow this pattern

  ```sh
    name:'', 
    description:'',
    url:'',
    category:'', 
    subcategory:''
  ```

  #### Details 
  
  * `name`: name of the site
  
  * `description`: define what the site does in a 
  short para
  
  * `url`: add the valid site url
  * `category`: could be one of the existing categories or create a new one by following the 
  above instructions
  * `subcategory`: could be one of the existing categories or create a new one by following the above instructions

**NOTE**
   When adding *YouTube* channel link, please specify *language* of the channel they are using to teach in for example English, Hindi, Spanish etc. In cases where the language is NOT specified, then just remove the `language` property. 

  
> **⚠️Important**
>
> - **Do not** make duplicate entries. Always confirm that an entry does not exist by searching through the JSON file.
> - Ensure that your entries are error-free by double-checking before staging your changes.
> - Your entries should follow the above structure.

--- 
## Issues
* Select an issue template from [issues](https://github.com/rupali-codes/LinksHub/issues/new/choose) tab. Otherwise, choose **Other** if it doesn't match what you're looking for.
* When creating an issue, make sure you fill up all the fields properly. 
* Make sure that you are NOT raising a **duplicate issue**.
* If you want to work on the issue, please click on the *I am willing to work on this issue* checkmark. 
* **Note:** If you are apart of GSSoC'23, please check the *I am a GSSoC'23 contributor* check mark as shown in the image below:  
![issue checkmark for gssoc'23](https://github.com/CBID2/LinksHub-my-version-/assets/105683440/c31b245d-420a-4513-bb58-d6be8b2fcdb1)
 * **Do not create the PR until you have confirmed with the maintainers that you are participating in this program** 
 
* If you aren't the owner of the issue, please comment that you're willing to work on the issue and wait for maintainers to assign you the issue. Also, don't work on the issue if you're NOT assigned.
* Please do **not** start working on the issue if you aren't yet assigned.
* Work on only **ONE** issue at a time. 
  
**Closing the issue**

* If you decide to close the issue, please leave a brief comment describing why(e.g., I'm busy with other obligations.) before you do. 
* **Note:** If the Pull Request associated with the issue gets merged and the issue still remains open, it's **your** responsibility to close the issue. 

## Commits
* Please keep your commit messages short and clear.
* Use `type: subject` format for writing your commit messages. `type` could be one the followings:
  * `feat`: use this if you're adding any new feature
  * `fix`: use this if you're fixing anything in the codebase
  * `chore`: use this when you're adding new links/resources AND when making any small changes
  (ex. chore: added *resource_name* in *subcategory* *category* )
If you need more tips, check out [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
## Making Pull Requests

1. When you submit a pull request, several tests are automatically run
   as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. If your pull request has merge conflicts with the `main` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `main` branch into your branch (`git pull upstream main`), and then pushing the updated branch to your fork (`git push`).

3. Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review. In such cases, the reviewer has the right to close your pull request and ask that you submit a separate pull request for each logical set of changes that belong together.

4. Link the issue you have resolved in the Pull Request Template (e.g Closes/Fixes #99).
5. Use [Conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) for your changes.
6. Do not re-open a pull request that a reviewer has closed.
   - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.

--- 
## Remarks ✅

- If something is missing here, or you feel something is not well described, either create a PR, [raise an issue](https://github.com/rupali-codes/LinksHub/issues), or [do a code review of the person’s PR](https://www.freecodecamp.org/news/code-review-tips/) (ensure that your review conforms to the [Code of Conduct](https://github.com/CBID2/LinksHub-my-version-/blob/main/CODE_OF_CONDUCT.md))


