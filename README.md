# React Hooks Exploration

## Goals

1. Keep the strong division between render and logic

* Render should be separately exportable so it can be
  * snaphotted in all its property states
  * storybooked in all its property states
 
2. Retain Aspect-Oriented Layering

Outer component consists of one or more behavioural layers that add props to an
internal, dump, props-only, render component.

3. Retain Layered Static TypeDefs

External component: behaviour layers + internal render component
Internal render props = External Props + Props added by Each Layer

4. Reduce HOC hell.

Prefer custom hooks to wrapper components

5. Logic should be testable as basic functions

How to mock downstream hooks? (don't pull in subtrees of transitive hooks)

## Open Questions

* Folder structure
* How to do Redux cleanly
* How to unit test a custom hook?
* How to test a component with mocked hooks?

## TODO:
* Refactor idiomatic React JS quip
* Microapp plop generator
* Update micro-app, pw, terminal, async-action to 16.8
