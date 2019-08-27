import { useState } from "react";

const useLoginForm = (defaultValues, cookies, callback) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        callback(values, cookies);
        resetValues();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value })
    };

    const resetValues = () => {
        setValues({ ...values, ...defaultValues })
    };

    const [values, setValues] = useState(defaultValues);

    return {
        handleSubmit,
        handleInputChange,
        values
    }
};

export default useLoginForm;
