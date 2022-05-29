# Elfsight Widget Universe Home Task Template

Hi,

We're happy to welcome you to the next stage of our hiring process — the home task.

To keep consistency across all candidates' submissions, we kindly ask you to clone this repository and use it as a starting point. However, we would like you to feel free to customize it or use any other tool of your choice if you want. In that case, please provide us with a guide on how to build and run your solution.

Please note, that you may be asked to add new features during the further interview session.

## The task

Implement the [ComboBox](https://en.wikipedia.org/wiki/Combo_box) component that meets the requirements enlisted below.

### Functional

- It's a controlled component accepting `value` _(string)_ and `onChange` props.
- It accepts a list of options (values for autocompletion);
- Optionally, a default value could be specified;
- The drop-down list is displayed while the control is focused.
- When a user is typing, the list of options is filtered in accordance with the input.
- The value changes when a user changes focus, presses `Enter` or choices a value from drop-down list.

### Non-functional

- It is implemented with `TypeScript` and `React`, while the choice of tool for styling is up to you.
- The component is free of bugs and works smoothly.
- It looks nice (to your taste).
- No library which contains ready-to-use form components is used. However, using any other utility you may find appropriate for the project is not limited.
- The component's features are showcased in Storybook.
- _(recommended)_ It is covered with tests.

**Please, feel free to go beyond the requirements if you think it would be beneficial for UX/DX.**

## How to start

**Make sure you have LTS version of Node and NPM installed on your machine.**

After installing dependencies it's ready for development. Please, execute `npm start` to run the Storybook.

You can find an empty `ComboBox` component and the corresponding story file in the `src/components/combo-box` directory.

---

Please, don't hesitate to reach out to us if you have any questions or in case you face an issue.

We wish you the best. Happy codding!

Elfsight Engineering Team.
