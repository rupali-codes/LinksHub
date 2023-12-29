# LinksHub Contributing Guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> **⚠️IMPORTANT**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**
>
> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform.**
>
> **PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**

## Prerequisites ⚠️

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

- Make sure you have [Node.js](https://nodejs.org/) installed.
- Make sure you have [PNPM](https://pnpm.io/installation) installed.

---

## How to Contribute 🤔

To get started, look at the existing [**Issues**](https://github.com/rupali-codes/LinksHub/issues) or [**create a new issue**](https://github.com/rupali-codes/LinksHub/issues/new/choose)!

### Setup guidelines 🪜
Follow these steps to setup LinksHub on your local machine

1. [Fork](https://github.com/rupali-codes/LinksHub/fork) the project
2. Clone the project to run on your local machine using the following command:

   ```sh
   git clone https://github.com/<your_github_username>/LinksHub.git
   ```

3. Get into the root directory

   ```sh
   cd LinksHub
   ```

4. Install all dependencies by running

   ```sh
   pnpm install
   ```

5. Create your branch

   ```sh
   git checkout -b <your_branch_name>
   ```

6. Run and view the application on localhost

   ```sh
   pnpm run dev
   ```

> **P.S**: If you have `docker` installed in your system, you can follow these steps to set up the environment:
>
> 1. After forking and cloning the repo(as mentioned above), get into the project directory:
>
> ```bash
> cd LinksHub/
> ```
>
> 2. Start the docker container with:
>
> ```bash
> docker-compose up
> ```
>
> 3. Now start adding your changes.
> **Note:** You don't need to restart the container again and again after starting it once, because the changes you make will reflect in the container instantly.

7. Make your changes before staging them.

8. Stage your changes

   ```sh
   git add <filename>
   ```

9. Commit your changes

   ```sh
   git commit -m "<your-commit-message>"
   ```

10. Push your changes to your branch

    ```sh
    git push origin "<your_branch_name>"
    ```

11. Create a [PULL REQUEST](https://github.com/rupali-codes/linkshub/compare) 💣

    > Click _compare across forks_ if you don't see your branch

---

### Appending new Categories 🔗

> ✨ You can also create [issue(s)](https://github.com/rupali-codes/LinksHub/issues/new/choose) for inserting your categories and someone else will take care of them.

#### 🌟Follow these steps to add your Category/Subcategory to the Hub

- To add a newly created category or subcategory, include them in the [data.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/data.ts) & [index.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/index.ts) files located in the `database` folder.
- Each category has its own folder with its name
- Ensure that every subcategory is placed in its respective category folder.

  > For example, if `images` is a subcategory, it should be inside the `frontend` folder, which is a category.

- To add a new category, create a folder with its name.

  > For example, create a folder named `Resources`

- If you want to add a new `subcategory`, add it in [data.ts](https://github.com/rupali-codes/LinksHub/blob/main/database/data.ts) under the correct category, and provide the appropriate `URL`. You can refer to the examples in the file.

- Make sure to export the newly created JSON file in the index file.

- There are a couple of additional steps you need to follow:

  - Navigate to `types/index.ts`.

    - If you are adding a category, include the name of the category used in `database/data.ts` in the `Category` type.

      > For example, if you are adding a category called `open source`, add it to the `export type` statement in the appropriate style.

  - If you are adding a subcategory, go to `components/TopBar/CategoryDescriptions.ts` and add the subcategory name used when exporting the name in `database/index.ts`, along with a concise description in the correct format.

    > For example, if you export the subcategory name as `onlineCodeEditors` in `database/index.ts`, add the same name to `CategoryDescriptions.ts` using the following style:
    > `subcategory name:` `description of this subcategory`

  - Here's how it looks altogether:

  ```ts
  //category
   subcategory name: 
   `description of subcategory`,
   ```

> [!NOTE]  
> It's essential to add a description when submitting a pull request to add a subcategory to merge it in the codebase.

---

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
When adding _YouTube_ channel links, please specify _the language_ of the channel they are using to teach for example English, Hindi, Spanish, etc. In cases where the language is not specified, then just remove the `language` property.

> **⚠️Important**
>
> - **Do not** make duplicate entries. Always confirm that an entry does not exist by searching through the JSON file.
> - Ensure that your entries are error-free by double-checking before staging your changes.
> - Your entries should follow the above structure.

---

### Adding and Updating Category Description 📝
>
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
  }
  ```

---

## Issues 🎃

- Select an issue template from the [issues](https://github.com/rupali-codes/LinksHub/issues/new/choose) tab. Otherwise, choose **Other** if it doesn't match what you're looking for.
- When creating an issue, make sure you fill up all the fields properly.
- Make sure that you are NOT raising a **duplicate issue**.
- If you want to work on the issue, please click on the _I am willing to work on this issue_ checkmark.
- Add the point label that corresponds to the issue. See [our levels chart]() to help you.
- **Note:** If you aren't the owner of the issue, please comment that you're willing to work on the issue and wait for maintainers to assign you the issue. Also, don't work on the issue if you're NOT assigned.
- Please do **not** start working on the issue if you aren't yet assigned and have the `ready 🚀` label.
- Work on only **ONE** issue at a time.

**Closing the issue** 📍

- If you decide to close the issue, please leave a brief comment describing why(e.g., I'm busy with other obligations.) before you do.
- **Note:** If the Pull Request associated with the issue gets merged and the issue still remains open, it's **your** responsibility to close the issue.

## Commits Message Guidelines 💬

We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.
   - `test`: Adding or improving tests.
   - `chore`: General maintenance tasks, build changes, etc.

2. **Scope** (Optional): The scope provides context for the commit, indicating the specific part of the project being affected. Use a short description in lowercase (e.g., `auth`, `navbar`, `README`).

3. **Description**: A brief and meaningful description of the changes made. Start with a capital letter and use the imperative mood (e.g., "Add new feature" instead of "Added new feature").

4. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

#### ✔️ Examples of Valid Commit Messages

- `feat: Add user authentication feature`
- `fix(auth): Resolve login page redirect issue`
- `docs: Update installation instructions`
- `style: Format code according to project guidelines`
- `refactor(navbar): Improve responsiveness`
- `test: Add unit tests for API endpoints`
- `chore: Update dependencies to latest versions`
- `fix: Handle edge case in data processing (#456)`

#### ❌ Examples of Invalid Commit Messages

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`

### Commit Example with Commitlint

```bash
git commit -m "feat(auth): Implement user signup process (#789)"
```

---

## Making Pull Requests 💥

1. When you submit a pull request, several tests are automatically run
   as GitHub Actions. If any of these tests fail, it is your responsibility to try and resolve the underlying issue(s). If you don't know how to resolve the underlying issue(s), you can ask for help.

2. Each pull request should contain a single logical change or related set of changes that make sense to submit together. If a pull request becomes too large or contains too many unrelated changes, it becomes too difficult to review. In such cases, the reviewer has the right to close your pull request and ask that you submit a separate pull request for each logical set of changes that belong together.

3. Link the issue you have resolved in the Pull Request Template (e.g. Closes/Fixes #99).
4. Use our [Commit messages Guidelines](https://github.com/rupali-codes/LinksHub/blob/main/CONTRIBUTING.md#commits-message-guidelines-) for your changes.
5. Do not re-open a pull request that a reviewer has closed.
   - Make sure to tick the "Allow edits from maintainers" box. This allows us to directly make minor edits / refactors and saves a lot of time.
     > **Note**
     > If your pull request has merge conflicts with the `main` branch (GitHub checks for this automatically and notifies you), you are responsible for resolving them. You can do this by merging the `main` branch into your branch (`git pull upstream main`), and then pushing the updated branch to your fork (`git push`). If you need more tips, check out [Resolving a merge conflict on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).

---

## Remarks ✅

- If something is missing here, or you feel something is not well described, either create a PR, [raise an issue](https://github.com/rupali-codes/LinksHub/issues), or [do a code review of the person’s PR](https://www.freecodecamp.org/news/code-review-tips/) (ensure that your review conforms to the [Code of Conduct](https://github.com/CBID2/LinksHub-my-version-/blob/main/CODE_OF_CONDUCT.md))

- You can tag maintainers for any kind of difficulty using `@username`. You can find the list of maintainer usernames [here](https://github.com/rupali-codes/LinksHub/blob/maintainers_info/README.md#maintainers-).

### Levels

We came up with this chart so you can gauge the issue's difficulty and pick ones that fit within your skillset:
| Points              | Contribution                                                                |
|---------------------|-----------------------------------------------------------------------------|
| `priority: low`:    | Addition of new links/categories or doing any small task (e.g fixing typos) |
| `priority: medium`: | Modifying an existing feature                                               |
| `priority: high`:   | Making completely new feature                                               |
