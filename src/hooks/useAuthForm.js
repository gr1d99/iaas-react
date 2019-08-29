import { useState } from "react";

const useAuthForm = (defaultValues, callback) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        callback(values);
        resetValues();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value })
    };

    const resetValues = () => { setValues({ ...values, ...defaultValues }) };

    const [values, setValues] = useState(defaultValues);

    return { handleSubmit, handleInputChange, values }
};

export default useAuthForm;
