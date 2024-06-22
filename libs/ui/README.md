# UI Library

Private ui library for Team Manager application.

## How to add library to project

1. Run build command

    ```bash
    npm run build
    ```

2. Navigate to the dist folder with built library

    ```bash
    cd dist
    ```

3. Pack the library

    ```bash
    npm pack
    ```

4. Open the application. Before adding the library, check if you have required dependencies.
   Check full list - *peerDependencies* - in [package.json](package.json)

5. Add to dependencies
    - key - **@tm/ui**
    - value - **file:*path_to_tgz_file***
      Example:
   ```text
    "@tm/ui": "file:../../TeamManagerUiLib/dist/tm-ui-0.0.1.tgz"
    ```

6. Install package
    ```bash
    npm install
    ```
