import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API;

const response = {};

const usePostForm = (initialValues = {}) => {
  const [values, setFormValue] = useState(initialValues);
  const [isSubmitting, submit] = useState(false);

  useEffect(
    () => {
      if (isSubmitting) {
        const data = { post: values };

        fetch(`${API}/posts`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        })
          .then(res => res.json())
          .then(res => {
            response.post = res.post;
            setFormValue({});
          })
          .catch(err => { response.error = err; })
          .finally(() => submit(false));
      }
    },
    [isSubmitting]
  )

  return { setFormValue, submit, response };
}

export { usePostForm };
