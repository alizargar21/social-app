const typeRequire = "REQUIRE";
export const validatorRequire = () => ({
  type: typeRequire,
});
//validators = array of functions for validate.
//u can see example usage on newPosts & Input Component 
export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === typeRequire) {
      isValid = isValid && value.trim().length > 0;
    }
    return isValid;
  }
};
