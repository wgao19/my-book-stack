# My Book Stack

This repo is used to learn and explain about annotating higher order components with Flow after 0.89.

**🚧 Note** This repo is currently under work in progress and will be updated frequently while this note is present. Questions and discussions are welcome via issues.

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

### Input positions

<!--TODO -->

## Annotating components with hocs

<!--TODO -->

### Using `React.Config`

<!--TODO -->

### Connected components with React Redux

<!--TODO -->

### Components wrapped with nested hocs

## References

- [Asking for required annotations](https://medium.com/flow-type/asking-for-required-annotations-64d4f9c1edf8) from 0.85.
- `React.AbstractComponent`, `React.Config` from 0.89
