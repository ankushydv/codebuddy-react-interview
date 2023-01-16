import { createContext, useState } from 'react';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(false);
  const [disable, setDisable] = useState(false);

  const values = {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    acceptTermsAndCondition,
    setAcceptTermsAndCondition,
    disable,
    setDisable,
  };

  console.log('fristNma', email, firstName);

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export default FormProvider;
