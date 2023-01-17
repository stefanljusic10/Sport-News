import React from "react";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import Hashtags from "./Hashtags";
import { addNews } from "../../utils/addNews";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useNews } from "../../zustand/store";

const CreateNews = () => {
  const setNews = useNews(state => state.setNews)
  const navigate = useNavigate()

  const formValidation = Yup.object().shape({
    author: Yup.string().required("This field is required!"),
    headline: Yup.string().required("This field is required!"),
    category: Yup.object().shape({
      primary: Yup.string().required("This field is required!"),
      secondary: Yup.string().required("This field is required!")
    }),
    date: Yup.date().required("This field is required!"),
    image: Yup.string().required("This field is required!"),
    tags: Yup.array().min(2, "At least two tags must be included"),
    text: Yup.string().required("This field is required!").min(100, "Text must contain minimum 100 characters")
  });

  return (
    <Formik
      initialValues={{
        author: "",
        headline: "",
        category: { primary: "", secondary: "" },
        date: "",
        image: "",
        tags: [],
        text: "",
      }}
      validationSchema={formValidation}
      onSubmit={(val) => { 
        addNews(val)
        .then(() => {
          setNews()
          navigate("/")
        })
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="formNews">
          <h2>Create piece of news</h2>
          <div className="formBox">
            <div>
              <Field name="author" placeholder="author..." />
              {errors.author && touched.author ? <div className="error">{errors.author}</div> : <div></div>}
            </div>
            <div>
              <Field name="headline" placeholder="headline..." />
              {errors.headline && touched.headline ? <div className="error">{errors.headline}</div> : <div></div>}
            </div>
            <div>
              <input type="date" placeholder="date..." onChange={(e) => values.date = new Date(e.target.value)} />
              {errors.date && touched.date ? <div className="error">{errors.date}</div> : <div></div>}
            </div>
            <div>
              <Field name="image" placeholder="image..." />
              {errors.image && touched.image ? <div className="error">{errors.image}</div> : <div></div>}
            </div>
            <div>
              <Dropdown
                category="primary"
                setFieldValue={setFieldValue}
                formikCategories={values.category}
              />
              {errors.category && touched.category ? <div className="error">{errors.category.primary}</div> : <div></div>}
            </div>
            {values.category.primary && (
              <div>
                <Dropdown
                  category="secondary"
                  setFieldValue={setFieldValue}
                  formikCategories={values.category}
                />
                {errors.category && touched.category ? <div className="error">{errors.category.secondary}</div> : <div></div>}
              </div>
            )}
            <div className="text">
              <Field name="text" as="textarea" placeholder="type text..." />
              {errors.text && touched.text ? <div className="error">{errors.text}</div> : <div></div>}
            </div>
            <div className="tags">
              <Hashtags valueTags={values.tags} setFieldValue={setFieldValue} />
              {errors.tags && touched.tags ? <div className="error">{errors.tags}</div> : <div></div>}
            </div>
          </div>
          <Button text="CREATE" btnClass="btn btnCreate" />
        </Form>
      )}
    </Formik>
  );
};

export default CreateNews;
