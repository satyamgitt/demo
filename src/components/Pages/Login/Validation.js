const Validation = (values) => {
    let errors = {};
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

    if (!values.name) {
        errors.name = "Name is required."
    }

    if (!values.email) {
        errors.email = "Email is required."
    } else if (!values.email.includes("@")) {
        errors.email = "Please provide Valid Email."
    }
    if (!values.password) {
        errors.password = "password is required."
    } else if (values.password.length < 8) {
        errors.password = "Password must 8 charectors"
    } else if (values.password !== pass) {
        errors.password = "Password must be between 7 to 15 characters which contain at least one numeric digit and a special character"
    }

    return errors;
};

export default Validation;