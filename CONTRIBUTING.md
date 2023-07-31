# LinksHub contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests having no issue associated with them will not be accepted. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform. PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them

- [Node.js](https://nodejs.org/) is installed.

---

## How to Contribute 🤔

- Look at the existing [**Issues**](https://github.com/rupali-codes/LinksHub/issues) or [**create a new issue**](https://github.com/rupali-codes/LinksHub/issues/new/choose)!
- [**Fork the Repo**](https://github.com/rupali-codes/LinksHub/fork). Then, create a branch for any issue that you are working on. Finally, start working! 😊.
- Create a **[Pull Request](https://github.com/rupali-codes/LinksHub/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

### Appending new Categories 🔗

> ✨ You can also create [issue(s)](https://github.com/rupali-codes/LinksHub/issues/new/choose) for inserting your categories and someone else will take care of them.

#### 🌟Follow these steps to add your Category/Subcategory to the Hub

- To add a newly created category or subcategory, include them in the [data.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/data.ts) & [index.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/index.ts) files located in the `database` folder.
- Each category has its own folder with its name
- Ensure that every subcategory is placed in its respective category folder.

  > For example, if `images` is a subcategory, it should be inside the `frontend` folder, which is a category.

- To add a new category, create a folder with its name.

  > For example, create a folder named `Resources`

- If you want to add a new subcategory, add it in [data.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/data.ts) under the correct category, and provide the appropriate `url`. You can refer to the examples in the file.

- Make sure to export the newly created JSON file in the index file.

- There are a couple of additional steps you need to follow:

  - Navigate to `types/index.ts`.

    - If you are adding a category, include the name of the category used in `database/data.ts` in the `Category` type.

      > For example, if you are adding a category called `open source`, add it to the `export type` statement in the appropriate style.

    - If you are adding a subcategory, include the name of the JSON file used for the subcategory in the `SubCategory` type.

      > For example, if you are adding a subcategory using the file `online-code-editors.json`, add `online-code-editors` to the `export type` statement in the appropriate style.

  - If you are adding a subcategory, go to `components/TopBar/CategoryDescriptions.ts` and add the subcategory name used when exporting the name in `database/index.ts`, along with a concise description in the correct format.

    > For example, if you export the subcategory name as `onlineCodeEditors` in `database/index.ts`, add the same name to `CategoryDescriptions.ts` using the following style:

    > subcategoryName: 'description of this subcategory'

  - You can check out similar examples [here](components/TopBar/CategoryDescriptions.ts). It's essential to add a description when submitting a pull request to add a subcategory; to merge it in the codebase.

### Appending new Links 🔗

> ✨ You can also create [issue(s)](https://github.com/rupali-codes/LinksHub/issues/new/choose) to suggest new links, and someone else will take care of them.

#### 🌟Follow these steps to add your links to the Hub

- Choose the category and subcategory under which you want to add the resource.

- Locate the appropriate structure: `database/category_name/subcategory_name.json`

> For example, to add a resource in the `fonts` subcategory under the `frontend` category, navigate to `database/frontend/fonts.json`.

- The values in the JSON file should follow this pattern for the subcategory object:

  ```sh
    name:'',
    description:'',
    url:'',
    category:'',
    subcategory:''
  ```

  #### Details

  - `name`: Name of the site

  - `description`: A brief description of what the site does
  - `url`: Add a valid URL of the site
  - `category`: Choose an existing category or create a new one following the instructions mentioned above.
  - `subcategory`: Choose an existing subcategory or create a new one following the instructions mentioned above.
  - `language`: This field is included for some of the resources, such as _React_ resources or _YouTube_ channel links. If multiple languages are involved, prioritize English if available. Otherwise, choose a language that you deem necessary.

- You can use [JSONLint](https://jsonlint.com/) to check the correctness of the JSON to avoid failing tests during pull requests.

**NOTE**
When adding _YouTube_ channel link, please specify _the language_ of the channel they are using to teach for example English, Hindi, Spanish etc. In cases where the language is NOT specified, then just remove the `language` property.

> **⚠️Important**
>
> - **Do not** make duplicate entries. Always confirm that an entry does not exist by searching through the JSON file.
> - Ensure that your entries are error-free by double-checking before staging your changes.
> - Your entries should follow the above structure.

---

### Adding and Updating Category Description 📝
> ✨ You can also create [issue(s)](https://github.com/rupali-codes/LinksHub/issues/new/choose) to suggest new descriptions. The maintainers will review them and then assign them.

#### 🌟Follow these steps to add your links to the Hub

- Choose the category and subcategory under which you want to add a description.
- Locate the file: `components/TopBar/CategoryDescriptions.ts`
- Add or update the description in front of the subcategory name.

  > For example, to add the description of the `fonts` subcategory under the `frontend` category, you would do the following: 

  ```js
  const categoryDescriptions: CategoryDescriptions = {
    //frontend
    -                      //other subcatogery
    -
    fonts: 'New Description here',
    -
    -
  ```

---

## Issues

- Select an issue template from the [issues](https://github.com/rupali-codes/LinksHub/issues/new/choose) tab. Otherwise, choose **Other** if it doesn't match what you're looking for.
- When creating an issue, make sure you fill up all the fields properly.
- Make sure that you are NOT raising a **duplicate issue**.
- If you want to work on the issue, please click on the _I am willing to work on this issue_ checkmark.
- **Note:** If you are apart of GSSoC'23, please check the _I am a GSSoC'23 contributor_ check mark as shown in the image below:  
  ![issue checkmark for gssoc'23](https://github.com/CBID2/LinksHub-my-version-/assets/105683440/c31b245d-420a-4513-bb58-d6be8b2fcdb1)
- **Do not create the PR until you have confirmed with the maintainers that you are participating in this program**

- If you aren't the owner of the issue, please comment that you're willing to work on the issue and wait for maintainers to assign you the issue. Also, don't work on the issue if you're NOT assigned.
- Please do **not** start working on the issue if you aren't yet assigned.
- Work on only **ONE** issue at a time.

**Closing the issue**

- If you decide to close the issue, please leave a brief comment describing why(e.g., I'm busy with other obligations.) before you do.
- **Note:** If the Pull Request associated with the issue gets merged and the issue still remains open, it's **your** responsibility to close the issue.

## Commits

- Please keep your commit messages short and clear.
- Use the `type: subject` format for writing your commit messages. `type` could be one of the following:
  - `feat`: use this if you're adding any new feature
  - `fix`: use this if you're fixing anything in the codebase
  - `chore`: use this when you're adding new links/resources AND when making any small changes
    (ex. chore: add _resource_name_ in _subcategory_name_ _category_name_ )
    If you need more tips, check out [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Making Pull Requests

1. When you submit a pull request, several tests are automatically run
   as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review. In such cases, the reviewer has the right to close your pull request and ask that you submit a separate pull request for each logical set of changes that belong together.

3. Link the issue you have resolved in the Pull Request Template (e.g. Closes/Fixes #99).
4. Use [Conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) for your changes.
5. Do not re-open a pull request that a reviewer has closed.
   - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.
     > **Note**
     > If your pull request has merge conflicts with the `main` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `main` branch into your branch (`git pull upstream main`), and then pushing the updated branch to your fork (`git push`). If you need more tips, check out [Resolving a merge conflict on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).

---

## Remarks ✅

- If something is missing here, or you feel something is not well described, either create a PR, [raise an issue](https://github.com/rupali-codes/LinksHub/issues), or [do a code review of the person’s PR](https://www.freecodecamp.org/news/code-review-tips/) (ensure that your review conforms to the [Code of Conduct](https://github.com/CBID2/LinksHub-my-version-/blob/main/CODE_OF_CONDUCT.md))
