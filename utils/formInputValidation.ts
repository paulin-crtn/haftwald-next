/**
 * Validate fullname
 *
 * @param str
 * @returns
 */
export function validateFullname(str: string) {
  // Initialization
  const value: string = str.trim();
  let error: string = "";
  // Validation
  if (value.length === 0) {
    error = "Vous devez remplir ce champs";
  } else if (value.length < 3) {
    error = "Le champs doit faire au moins 3 caractères";
  } else if (value.length > 29) {
    error = "Le champs doit faire moins de 30 caractères";
  }
  // Return
  return error;
}

/**
 * Validate email
 *
 * @param str
 * @returns
 */
export function validateEmail(str: string) {
  // Initialization
  const value: string = str.trim();
  let error: string = "";
  // Validation
  if (value.length === 0) {
    error = "Vous devez remplir ce champs";
  } else if (value.length > 29) {
    error = "Le champs doit faire moins de 30 caractères";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    error = "Veuillez renseigner une adresse email valide";
  }
  // Return
  return error;
}

/**
 * Validate message
 *
 * @param str
 * @returns
 */
export function validateMessage(str: string) {
  // Initialization
  const value: string = str.trim();
  let error: string = "";
  // Validation
  if (value.length > 9999) {
    error = "Le champs doit faire moins de 1000 caractères";
  }
  // Return
  return error;
}
