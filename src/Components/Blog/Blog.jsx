import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 01 : When should you use context API? <br />
          Ans: <br />
          The Context API in React is a way to share data between components
          without having to pass props down through multiple levels of the
          component tree. It provides a way to manage global state that can be
          accessed by any component in the application. <br />
          So, we should consider using the Context API in React when we have
          data that needs to be shared across multiple components in our
          application, and when prop drilling becomes difficult to manage.
          <br />
        </p>
      </div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 02 : What is a custom hook? <br />
          Ans: <br />
          In React, a custom hook is a function that allows us to reuse logic
          across different components. It is a way to extract component logic
          into reusable functions that can be used across the application. A
          custom hook is just a regular JavaScript function that uses one or
          more of the built-in React hooks, such as useState, useEffect, or
          useContext
        </p>
      </div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 03 : What is useRef? <br />
          Ans: <br />
          In React, useRef is a hook that provides a way to access and
          manipulate DOM nodes or React elements directly. It is used to create
          a mutable reference that can be used to store and update data that
          persists between renders. <br />
          One common use case for useRef is to access DOM nodes or React
          elements directly. For example, we can create a ref object using
          useRef, and then attach it to a input or button element using the ref
          attribute. This allows us to directly manipulate the DOM node or
          element using JavaScript, without having to query the DOM.
        </p>
      </div>
      <div className="md:me-96 md:pe-80 md:ms-16 text-black text-lg p-4 mt-4">
        <p>
          Question 04 : What is useMemo? <br />
          Ans: <br />
          In React, useMemo is a hook that allows us to optimize the performance
          of our application by memoizing the result of a function call. It is
          used to memoize expensive computations so that they are only
          re-calculated when the inputs to the function change. <br />
          useMemo takes two arguments, the first argument is a function that
          performs the expensive computation, and the second argument is an
          array of dependencies. The function is only re-evaluated when one of
          the dependencies changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
