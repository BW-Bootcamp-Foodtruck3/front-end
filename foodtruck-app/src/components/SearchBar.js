import React from "react";
import { useForm } from "../hooks/useForm";
import { Form, FormGroup, Label, Input } from "reactstrap";

const SearchBar = () => {
  const [values, setValues, submitForm ] = useForm({ searchTerm: "" }, data => {
    console.log(data);
  });
  return (
    <div>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="searchTerm">Search Foodtrucks</Label>
          <Input
            id="searchTerm"
            type="text"
            onChange={setValues}
            values={values}
            name="searchTerm"
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
