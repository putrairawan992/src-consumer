import validate from 'validate.js';

export default function validateClass(fieldName, value, validation, field, equality = null, equalityValue = null) {
  // Validate.js validates your values as an object
  // e.g. var form = {email: 'email@example.com'}
  // Line 8-9 creates an object based on the field name and field value
  if (value === false) {
    value = '';
  }
  const formValues = {};
  formValues[fieldName] = value;
  if (equality) {
    formValues[equality] = equalityValue;
  }


  // Line 13-14 creates an temporary form with the validation fields
  // e.g. var formFields = {
  //                        email: {
  //                         presence: {
  //                          message: 'Email is blank'
  //                         }
  //                       }
  const formFields = {};
  formFields[fieldName] = validation[field];
  // The formValues and validated against the formFields
  // the variable result hold the error messages of the field
  const result = validate(formValues, formFields);

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0];
  }

  return null;
}
