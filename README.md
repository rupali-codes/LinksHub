<div align="center">
<img src="https://user-images.githubusercontent.com/78981177/215495029-ff9d4d24-a626-494a-859d-293cb9925f63.png"/>
</div><hr>

# Welcome to LinksHub

LinksHub is a Hub of Links `by Developers for Developers`. Here, we've gathered a collection of all the best and most useful resources, both free and paid, to aid in the development journey.

We recognize that there's a wealth of information available, but often, it's a matter of knowing where to find it. That's why we've made it our mission to bring the right resources to the right developers.

## Demo

You can see the live demo at: https://linkshub.vercel.app

## Tech stack

![Next.js](https://img.shields.io/badge/Next.js-7c3aed?style=for-the-badge&logo=next.js&logoColor=white)
![tailwind css](https://img.shields.io/badge/tailwind_css-7c3aed?style=for-the-badge&logo=tailwindcss&logoColor=white)
![typescript](https://img.shields.io/badge/typescript-7c3aed?style=for-the-badge&logo=typescript&logoColor=white)

## Getting Started

> Prerequisites: Before getting into it make you sure, you have [npm](https://nodejs.org/download) installed

Make sure to follow [CONTRIBUTING guidelines](https://github.com/rupali-codes/LinksHub/blob/main/CONTRIBUTING.md)

### Let's jump right in

Follow these steps to start contributing into LinksHub

1. [Fork](https://github.com/rupali-codes/LinksHub/fork) the project
2. Clone the project to run on your local machine using the following command
   ```sh
   git clone https://github.com/<your_github_username>/LinksHub.git
   ```
3. Get into the root directory
   ```sh
   cd LinksHub
   ```
4. Install all dependencies by running
   ```sh
   npm install
   ```
5. Make your changes and push the code to your Github repo
6. Now, create a pull request

Bingo! You're done

## Want to add your favorite Links into the Hub?

Follow these steps

1. Open `database/data.ts` file
   
2. Copy the following code snippet to add your link/s
   
   ```sh
      {
         id: "",
         name: "",
         description: "",
         url: "",
         category: "",
         subcategory: "",
      }
   ```
   * `id`: +1 to previous id
   * `name`: name of the site 
   * `description`: a short description of the link/site
   * `url`: URL of the site
   * `category`: either could be `frontend` or `backend` 
   * `subcategory`: it could be one of the followings - 
     * For `frontend`
        * animations
        * colors
        * design-inspiration
        * fonts
        * icons
        * illustrations
        * images
        * testing
        * themes-templates
        * ui-generators
      * For `backend`
        * authentication
        * caching
        * security
        * validation
        * security
        * testing


3. Run this command to add your changes
   ```sh
      git add database/data.ts
   ```

4. Commit your changes
   ```sh 
      git commit -m "chore: added new link"
   ```

5. Push your code
   ```sh
      git push origin <your_branch_name>
   ```

6. Create a new [Pull Request]([here](https://github.com/rupali-codes/LinksHub/compare) ) and click on `compare acorss forks`:
      * Select your `repo`
      * Select your `branch`
  
7. Boom! your link will be added as soon as maintainers approves the changes.

## Our Contributors

<a href="https://github.com/rupali-codes/LinksHub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rupali-codes/LinksHub" />
</a>

## License

LinksHub is licensed under the terms of MIT License. check out [LICENSE](https://github.com/rupali-codes/LinksHub/blob/main/LICENSE) for details.

---

We would love to have you, feel free to open issues and pull request and Don't forget to leave a star if you like the project.
