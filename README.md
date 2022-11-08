# thx-modal

# Description

A React modal created for developers, with easy configuration and styling.

## Table of Contents

-   [Installation](#installation)
-   [Minimal exepmple](#minimal-exepmple)
-   [Examples](#examples)
-   [Demos](#demos)
-   [Dependencies](#dependencies)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```bash
    $ npm install thx-modal
    $ yarn add thx-modal
```

## Minimal exepmple

Here is a simple example of thx-modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Modal, { useModal } from "thx-modal";

const App = () => {
	// modal hook that's allow you to toggle modal by Id
	const { openedModals, toggleModal } = useModal();

	return (
		<div>
			<button onClick={() => toggleModal("id_of_modal")}>Display modal</button>
			<Modal
				id={"id_of_modal"}
				isOpen={openedModals["id_of_modal"]}
				onClose={() => toggleModal("id_of_modal")}>

                    <h1>My modal</h1>
                    <blockquote>The cake is a lie !</blockquote>
			</Modal>
		</div>
	);
};
```

You can find more examples in the `examples` section.

## Exemples

All props you can pass to the modal

### Base props

| Props     | Require | type     | Description                                                                                                           |
| --------- | :-----: | -------- | --------------------------------------------------------------------------------------------------------------------- |
| id        |   ✔️    | string   | Id of modal, used to identify modal                                                                                   |
| isOpen    |   ✔️    | Boolean  | For better integration, use the`openedModals` property of `useModal()` hook, state will contain in openedModals[`id`] |
| onClose   |   ✔️    | function | Function that toggle oppened state of modal. For better integration, use`toggleModals()` of the `useModal()` hook     |
| className |   ❌    | string   | Modal class default is`__thxModal__`. Add classes through this props                                                  |

All other props are optionnal.

### Content

| Props     | type                                 | Description                                                                        |
| --------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| title     | string                               | Title of modal                                                                     |
| header    | HtmlElement, string, customComponent | Will be placed into `<header>`<br />exemple: header={`<h1>`This is a modal`</h1>`} |
| content   | HtmlElement, string, customComponent | Content of the modal<br />exemple: header={"This is a content"}                    |
| footer    | HtmlElement, string, customComponent | Will be placed into `<footer>`<br />exemple: footer={"End of modal"}               |
| closeText | string                               | Text into close button                                                             |
| closeBtn  | HtmlElement, customComponent         | Custom close button, trigger close function on click                               |
| children  | HtmlElement, string, customComponent | Use modal as a container                                                           |

You must have at least one of `content` or `children` props or anything in children of modal !

### Styles

| Props           | type         | Description                                                                                                             |
| --------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| theme           | string       | Choose the theme color ! theme must be a color in hexadecimal ("`#262626`")                                             |
| modalSize       | string       | Size of the modal (accepted values: "sm", "lg", "xl")                                                                   |
| width           | string       | Chose width of modal (ex: `25%` )                                                                                       |
| height          | string       | Chose height of modal (ex: `520px` )                                                                                    |
| textColor       | Object       | Change color of text                                                                                                    |
| backgroundStyle | Object, bool | Style of background, if false, it remove the background                                                                 |
| modalStyle      | Object       | Style of modal, will override all default styles                                                                        |
| headerStyle     | Object       | Style of header, will override all default styles                                                                       |
| contentStyle    | Object       | Style of content, will override all default styles                                                                      |
| footerStyle     | Object       | Style of footer, will override all default styles                                                                       |
| animationOpen   | string       | Choose animation when modal appear ("slide-up", "slide-down", "slide-left", "slide-right", "fade-in", "scale-up")       |
| animationClose  | string       | Choose animation when modal disappear ("slide-up", "slide-down", "slide-left", "slide-right", "fade-out", "scale-down") |

### Behaviors

| Props        | type    | Description                                                                  |
| ------------ | ------- | ---------------------------------------------------------------------------- |
| exitExisting | Bool    | If true, close all open modals                                               |
| exitOnEscape | Bool    | Close modal if user type on "Escape" key                                     |
| exitOnClick  | Bool    | Close modal if user click out of modal                                       |
| isDialog     | Bool    | If isDialog true, a close event must be triggered to close the modal         |
| index        | Integer | Index of modal, if you open multiple modals, you can choose order with index |

### Callbacks

| Props        | type     | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| asyncContent | Function | Asynchronous content will replace content already in place in the modal |
| whenRender   | Function | Function called when the modal is closing                               |



## Dependencies

- "prop-types": "^15.8.1"
- "react": "^18.2.0",
- "react-dom": "^18.2.0"