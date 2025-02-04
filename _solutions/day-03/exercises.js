/* 
Exercises: Level 1
What is a module?
A module refers to a reusable and self-contained unit of code, or a file or a directory, that has a specific functionality or a set of related functionalities. Modules in React typically correspond to individual files or directories that contain components or utility functions.

What is package?
A Package is a module or a collection of modules. For instance, React, ReactDOM are packages.

What is the difference between a module and a package?
Module is a self-contained piece of code, or file or directory containing several units of code, that has a specific functionality to be used within a project whereas a package is a collection of these modules that make up a library or framework that can be used in projects.

What is NPM?
It is a command-line tool and a registry of open-source JavaScript packages and libraries that enables developers to discover, install, manage, and publish packages for their projects.
 - package.json file, specifying the required packages and their versions - npm installs them
 - a command-line tool that provides a set of commands to interact with the package ecosystem
 - NPM registry is a public repository of thousands of open-source JavaScript packages and libraries
 - NPM provides a mechanism to define custom scripts in the package.json file. These scripts can be executed using the npm run command. 
 - NPM enables developers to publish their own packages to the registry, making them available for others to use

What is Webpack?
Webpack is a popular module bundler for JavaScript applications.

How do you create a new React project?
create-react-app name-of-your-project

What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
 - package.json: The package.json file is at the root of a React project and contains metadata about the project, as well as a list of dependencies and scripts. It includes information about the project's name, version, description, entry points, dependencies, and more. Developers can manage project dependencies, scripts, and other project-specific configurations using this file.

 - package-lock.json:The package-lock.json file is automatically generated when dependencies are installed or updated using npm. It is used to lock the versions of installed packages, ensuring that the same versions are installed consistently across different development environments. It helps maintain reproducible builds by preventing automatic upgrades to newer versions of packages.

 - gitignore:The .gitignore file specifies files and directories that should not be tracked or committed by Git, the version control system. It helps exclude unnecessary files, build artifacts, and sensitive information from being included in the repository. 
 
 - node_modules:node_modules directory is created when dependencies are installed using a package manager, such as npm or Yarn. It contains the installed packages and their dependencies. The node_modules directory can be quite large and is typically not included in the version control system, as it can be regenerated by running package installation commands (e.g., npm install or yarn) based on the package.json file. It contains the actual code of the installed packages and their dependencies.

 - public: contains static files that are publicly accessible and served by the web server. It typically includes the HTML file(s), favicon.ico, and other assets like images, fonts, or static documents. 

*/