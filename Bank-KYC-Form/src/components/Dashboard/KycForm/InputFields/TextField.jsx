import PropTypes from "prop-types";

const TextField = (props) => {
    const { name, label, placeholder, type, register, errorMessage } = props;
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>

            <input
                className="input-field peer"
                id={name}
                placeholder={placeholder}
                type={type}
                name={name}
                {...register(name)}
            />
            
            <span className="error">{errorMessage}</span>
        </div>
    );
};

{/* <label> is linked to the input using htmlFor={name}
<input> receives:
styling via className
props like id, placeholder, type, name
{...register(name)} connects it to React Hook Form
<span> displays any error message if present */}

// TextField is a functional component.
// It destructures props:
// name: field name (used in id, name, and register)
// label: text to show as the label
// placeholder: input placeholder
// type: e.g., "text", "password", "email"
// register: function from React Hook Form to register the field
// errorMessage: validation error string to display



TextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    register: PropTypes.func,
    errorMessage: PropTypes.string
};

// This ensures that correct types are passed as props. Helps during development with warnings in the console if 
// something is wrong.
// Note: options and defaultValue aren't used in your current JSX. You can safely remove them unless you
//  plan to extend the component for select inputs or pre-filled values.

export default TextField;