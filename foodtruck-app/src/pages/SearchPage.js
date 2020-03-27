import React from "react";
import { useForm } from "../hooks/useForm";
import TruckSearchCard from "../components/TruckSearchCard";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchPage = ({ searchResults, setSearchTerm, setSelectedData }) => {
  const [values, setValues, submitForm] = useForm({ searchTerm: "" }, data => {
    setSearchTerm(values.searchTerm)
  });
  return (
    <Container className="search">
      <Form onSubmit={submitForm}>
        <Label for="searchTerm" style={styles.searchbarLabel}>
          Search for Food Trucks
        </Label>
        <FormGroup  style={styles.searchbarFormGroup}>
          <Input
            id="searchTerm"
            type="text"
            onChange={setValues}
            values={values}
            name="searchTerm"
            className="searchbar-input"
            style={styles.searchbarInput}
            placeholder="Search here"
          />
          <Button color="primary" style={styles.searchbarButton}>Search</Button>
        </FormGroup>
      </Form>
      <div>
        {searchResults && searchResults.map((truck) => <TruckSearchCard key={truck.id} {...truck} setSelectedData={setSelectedData} />)}
      </div>
    </Container>
  );
};

const styles = {
  searchbarFormGroup: {
    display: "flex",
    alignItems: "center",
  },
  searchbarLabel: {
    display: "block"
  },
  searchbarInput: {
    width: "70%",
    display: "inline-block",
    marginRight: 10
  },
  searchbarButton: {
    width: "25%",
    maxWidth: 150,
    background: "#04E799",
    border: "none",
    color: "black",
    fontWeight: 600
  }
};

export default SearchPage;
