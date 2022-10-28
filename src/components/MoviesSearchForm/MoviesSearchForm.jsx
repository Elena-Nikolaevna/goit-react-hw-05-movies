import { Form, FormInput, FormBtn } from "./MoviesSearchForm.styled";
import PropTypes from "prop-types";

export const MoviesSearchForm = ({ onSubmit }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const searchQuery = evt.target.elements.search.value.trim();

        if(searchQuery.length === 0) {
            return alert("Please, enter your request")
        }
        
        onSubmit(searchQuery);

        evt.currentTarget.reset();
    }
   
    return <Form onSubmit={handleSubmit}>
        <FormInput type="text" name="search"/>
        <FormBtn type="submit">Search</FormBtn>
    </Form>
}

MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}