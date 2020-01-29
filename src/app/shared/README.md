# In short, when using a `Shared Module`:

- **DO** `declare` components, pipes, directives, and `export` them.
- **DO** import `FormsModule`, `ReactiveFormsModule` and other (3rd-party) modules you need.
- **DO** import the `SharedModule` into any other Feature Modules.
- **DO NOT** provide app-wide singleton services in your `SharedModule`. Instead move these to the `CoreModule`.
- **DO NOT** import the `SharedModule` into the `AppModule`.
