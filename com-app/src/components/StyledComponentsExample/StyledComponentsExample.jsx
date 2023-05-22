import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 20px;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "palevioletred" : "white")};
  color: ${(props) => (props.$primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em"
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password"
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

export default function StyledComponentsExample() {
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <div>
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        {/* Notice we can still use the size attr from Input */}
        <PasswordInput placeholder="A bigger password input" size="2em" />
      </div>
    </>
  );
}
