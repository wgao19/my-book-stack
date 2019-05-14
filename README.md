# My Book Stack

This repo is used to learn and explain about annotating higher order components with Flow after 0.89.

**🚧 Note** This repo is currently under work in progress and will be updated frequently while this note is present. Most of the segments are either very sketchy or outline only. Questions and discussions are welcome via issues.

## Background

In 0.85, Flow released a major fix in their typecheck cycle that caused many new errors, mainly around type inference that spans over a file import-export cycle.

Consequently, a lot of annotations on components that are wrapped around by hocs are broken. One major victims are connected components with React Redux.

In 0.89, Flow released a couple of new features to help annotating higher order components. With `React.AbstractComponent` and `React.Config`, we can annotate hocs more easily and declaratively.

This repo serves as a playground (since Flow Try does not provide an environment for cross-file use cases) as well as an exploration on how to properly annotate higher order components with Flow after 0.89.

<!--TODO -->

## Understanding

<!--TODO -->

A high-level summary of what is asked for, the motivation, and where and what to annotate at each step.

|  | hoc definition | component definition | component instantiation |
| --- | --- | --- | --- |
| motivation | infer wrapped component prop types | type safety of component | correctly use component |
| where to annotate | type generics | return position | n/a (inferred) |
| what to annotate | injected props | component prop types | n/a (inferred) |
| how | type generics for wrapped component, return component with injected props taken away | (wip) | no need to pass in |

### Input positions

- What are input positions
- What are required to annotate when:
  - Putting `// @flow` on files of functional components
  - Putting `// @flow` on files of class components
  - Introducing React Redux's libdefs

<!--TODO -->

## Annotating the hoc

- What the hoc knows: props it is injecting
- What the hoc asks: props of the component it wraps around
- So that: it can tell Flow the final props of the component the hoc returns

## Annotating components wrapped around by hocs

- What exactly are the props
- What Flow needs to know
- What is the best place to annotate

<!--TODO -->

### Connected components with React Redux

- We normally don't annotate the `connect` hoc, we can use the libdef provided by Flow Typed
  - Flow Typed is community maintained repo that contains Flow annotations for libraries
  - Separated by library versions, React Redux is supported up to v5 (but v6+ has little public API changes)
- How errors are reported makes it easy for us to try to annotate at function call with parameter type. But this will likely complicate the problem
- Recommend annotating at return position

<!--TODO -->

### Components wrapped with nested hocs

- Do not try to annotate each layer of nested hocs, it is unnecessary and it complicates the problem

<!--TODO -->

### Using `React.Config`

- Used to annotate default props without taking them off from required props
- Using `React.Config` to annotate `withVariations`, a generic hoc that feeds in some props before component instantiation
  - It is debatable whether this is a good practice or not, here is only to show that it is possible to properly annotate the process
- Similar to TS's `optionalize`?

<!--TODO -->

## Related

- [Asking for required annotations](https://medium.com/flow-type/asking-for-required-annotations-64d4f9c1edf8) from 0.85.
- `React.AbstractComponent`, `React.Config` from [0.89](https://github.com/facebook/flow/releases/tag/v0.89.0)
