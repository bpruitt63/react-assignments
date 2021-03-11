### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  
  it is a front end framework/library that helps set up user friendly websites with minimal code repetition

- What is Babel?  
  a program that translates javascript code, most often into code that is compatible with browsers that don't accept newer javascript updates.

- What is JSX?  
  i think it stands for javascript extension.  basically, it turns things that look like html code into valid javascript so that you can render components in react.

- How is a Component created in React?  
  basically you just create a function (or a class in older versions) using jsx, which returns the render of the desired component.

- What are some difference between state and props?  
  props are basically just like arguments passed into a function, except in component functions they are called props, and as far as i know they are always in the form of an object.  state can be set based on what props are passed in, but it is separate from the props.  the main point of state is that it persists through re-renders, so it is a good way of temporarily saving information.

- What does "downward data flow" refer to in React?  
  typically the parent component is considered the 'smart' component, and information is passed downward from the parent into the simpler child components.

- What is a controlled component?  
  a form that is completely controlled by react.  any input is placed into state, and the display and form data comes from what is in state.

- What is an uncontrolled component?  
  the more basic type of form where inputs just go into the form fields and are generally read on submit by retrieving the input values.

- What is the purpose of the `key` prop when rendering a list of components?  
  react uses it to identify components and changes in components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?  
  potential for changed or duplicate keys

- Describe useEffect.  What use cases is it used for in React components?  
  it is a hook that runs every time the component is rendered, or takes an optional argument that defines specifically when it will run.  it is commonly used for API calls, timers, and DOM changes.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?  
  it basically creates a reference for something in the code.  it can be used to access a DOM element, or a timer.  it does not cause rerenders.

- When would you use a ref? When wouldn't you use one?  
  great for timers, or accessing simple DOM elements.  should not be used as a replacement for state.

- What is a custom hook in React? When would you want to write one?  
  just what it sounds like, a hook that you write yourself.  generally you will want to do this if you notice that you are repeating code multiple times throughout your app.
