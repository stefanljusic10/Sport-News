import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NewsContext from '../utils/context';
import Dropdown from '../components/AdminPanel/Dropdown';
import Hashtags from '../components/AdminPanel/Hashtags';
import Button from '../components/Button/Button';
import { editSelectedNews } from "../utils/editSelectedNews";
import moment from "moment";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const EditNews = () => {
    const {id} = useParams()
    const { reloadNews, setReloadNews } = useContext(NewsContext)
    const navigate = useNavigate()
    const editNews = JSON.parse(sessionStorage.getItem('editNews'))
    const parsedDate = (dateValue) => moment(dateValue).format("YYYY-MM-DD")

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
          author: editNews?.author,
          headline: editNews?.headline,
          category: { primary: editNews?.category.primary, secondary: editNews?.category.secondary },
          date: new Date(editNews.date.seconds * 1000),
          image: editNews?.image,
          tags: [...editNews.tags],
          text: editNews?.text,
        }}
        validationSchema={formValidation}
        onSubmit={(val) => {
          editSelectedNews(id, val, reloadNews, setReloadNews)
          .then(() => {
            setReloadNews(!reloadNews)
            navigate("/admin")
          })
          .catch(error => {
            console.log(error);
          })
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form id="createNews">
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
                <input type="date" value={parsedDate(values.date)} onChange={(e) => setFieldValue("date", new Date(e.target.value))} />
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
            <Button text='EDIT' btnClass='btn btnEdit' />
          </Form>
        )}
      </Formik>
    );
}

export default EditNews