import React from "react";


const useOpeningForm = (initialValues, callback) => {
    const [values, setValues] = React.useState(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();

        return callback(values)
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value })
    };

    return {
        values,
        handleSubmit,
        handleInputChange
    }
};


export default useOpeningForm;
