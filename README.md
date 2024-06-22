# TeamManagerUiLib Workspace

Private NX Angular workspace with ui library for Team Manager application.

#### Instructions for installing the library can be found [***here***](libs/ui/README.md)

## Steps to create workspace like that:

1. Create workspace
    ```bash
    npx nx create-nx-workspace@latest TeamManagerUiLib
    ```

   **Note**: choose ***none stack*** and ***standalone project***

2. Remove all files/paths/code (like src file) related to *vite* and *vitest*
3. Add angular to project
    ```bash
    npx nx add @nx/angular
    ```

4. Create libs file and generate publishable library
    ```bash
    npx nx g @nx/angular:library ui --publishable --import-path=@tm/ui --directory=libs/ui
    ```

5. Start coding :)

## Helpful commands

#### Generate component

```bash
npx nx g @nx/angular:component spinner --directory=libs/ui/src/lib/representation --inlineTemplate
```

#### Entry point library

```bash
npx nx g @nx/angular:library-second-entry-point --library=ui --name=core
```




