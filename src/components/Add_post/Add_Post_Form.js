import React, { useState } from 'react'
//  import { CountryDropdown} from 'react-country-region-selector';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import axios from 'axios'
import * as yup from "yup";
let Endpoint = "https://tranquil-escarpment-53988.herokuapp.com" || "http://localhost:4001";


export default function Add_Post_Form() {
    const history = useHistory();

    const validationScheme = yup.object().shape({
        message: yup.string().required("Required"),
        name: yup.string().required("Required"),
        place: yup.string().required("Required"),
    })

    function cancelPostPage() {
        return history.push("/");
    }

    return (
        <div className="add-post-wrapper">
            <Formik initialValues={{
                message: "",
                name: "",
                place: "",
            }}
            validationSchema={validationScheme}
                onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true)
                 await axios.post(Endpoint+'/posts/add',  values)
                    .then(function (response) {
                        console.log(response)
                    
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                setSubmitting(false)
            }}>
                {({values, errors, touched, dirty, isValid, isSubmitting})=>(
                    <Form>
                        <div className="input-wrapper">
                            <label htmlFor="name">
                                Name
                                <Field className={`add-input ${errors.name && touched.name ? ("invalid-input") : null}`} name="name" />
                                {errors.name && touched.name ? (
                                    <p className="error-text">
                                        {errors.name}
                                    </p>
                                    ) : null}
                            </label>
                            <label htmlFor="place">
                                Location
                                <Field className={`add-input ${errors.place && touched.place ? ("invalid-input") : null}`} name="place" />
                                {errors.place && touched.place ? (
                                    <p className="error-text">
                                        {errors.place}
                                    </p>
                                    ) : null}
                            </label>
                        </div>
                        <label htmlFor="message">
                            Message
                            <Field className={`add-input ${errors.message && touched.message ? ("invalid-input") : null}`} name="message" as="textarea" />
                            {errors.message && touched.message ? (
                                    <p className="error-text">
                                        {errors.message}
                                    </p>
                            ) : null}
                        </label>
                        <div className="add-post-buttons">
                            <button className="share-btn" type="submit" disabled={isSubmitting || !dirty || !isValid}>
                                {isSubmitting ? (<div className="spinner-wrapper">
                                    <div className="spinner"></div></div>) : "Share"}
                            </button>
                            <button disabled={isSubmitting} onClick={cancelPostPage} className="cancel-btn" type="button">
                                Cancel
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}




