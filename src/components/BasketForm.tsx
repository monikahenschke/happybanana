import React from "react";
import styled from "styled-components";

import { ProductCardTitle } from "../styles/components";
import { FlexColumn } from "../styles/flex";

interface BasketFormProps {
  watch: any;
  errors: any;
  register: any;
}

const BasketForm = ({ watch, errors, register }: BasketFormProps) => {
  const { firstname, lastname, email, postcode, city, housenumber, street } =
    watch();

  return (
    <StyledBasketForm>
      <FlexColumn>
        <ProductCardTitle>
          <>TWOJE DANE</>
        </ProductCardTitle>
        <Fields>
          <Row1>
            <Field>
              <InputWrapper>
                <StyledInput
                  aria-describedby="firstnameErrorMessage"
                  id="firstname"
                  aria-label="firstname"
                  type="text"
                  {...register("firstname", {
                    required: "required",
                    minLength: {
                      value: 2,
                      message: "too short firstname",
                    },
                  })}
                ></StyledInput>
                <StyledLabel
                  data-testid="labelTest"
                  htmlFor="firstname"
                  className={firstname && "hide"}
                >
                  {!firstname && "IMIĘ*"}
                </StyledLabel>
              </InputWrapper>
              <ErrorMessage id="firstnameErrorMessage">
                {errors.firstname && errors.firstname.message}
              </ErrorMessage>
            </Field>
            <Field>
              <InputWrapper>
                <StyledInput
                  aria-describedby="lastnameErrorMessage"
                  id="lastname"
                  aria-label="lastname"
                  type="text"
                  {...register("lastname", {
                    required: "required",
                    minLength: {
                      value: 2,
                      message: "too short lastname",
                    },
                  })}
                ></StyledInput>
                <StyledLabel
                  data-testid="labelTest"
                  htmlFor="lastname"
                  className={lastname && "hide"}
                >
                  {!lastname && "NAZWISKO*"}
                </StyledLabel>
              </InputWrapper>
              <ErrorMessage id="lastnameErrorMessage">
                {errors.lastname && errors.lastname.message}
              </ErrorMessage>
            </Field>
          </Row1>
          <Field>
            <InputWrapper>
              <StyledInput
                aria-describedby="emailErrorMessage"
                id="email"
                aria-label="email"
                type="text"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              ></StyledInput>
              <StyledLabel
                data-testid="labelTest"
                htmlFor="email"
                className={email && "hide"}
              >
                {!email && "E-MAIL*"}
              </StyledLabel>
            </InputWrapper>
            <ErrorMessage id="emailErrorMessage">
              {errors.email && errors.email.message}
            </ErrorMessage>
          </Field>
          <Row2>
            <Field>
              <InputWrapper>
                <StyledInput
                  aria-describedby="postcodeErrorMessage"
                  id="postcode"
                  aria-label="postcode"
                  type="text"
                  {...register("postcode", {
                    required: "required",
                  })}
                ></StyledInput>
                <StyledLabel
                  data-testid="labelTest"
                  htmlFor="postcode"
                  className={postcode && "hide"}
                >
                  {!postcode && "KOD POCZTOWY*"}
                </StyledLabel>
              </InputWrapper>
              <ErrorMessage id="postcodeErrorMessage">
                {errors.postcode && errors.postcode.message}
              </ErrorMessage>
            </Field>
            <Field>
              <InputWrapper>
                <StyledInput
                  aria-describedby="cityErrorMessage"
                  id="city"
                  aria-label="city"
                  type="text"
                  {...register("city", {
                    required: "required",
                  })}
                ></StyledInput>
                <StyledLabel
                  data-testid="labelTest"
                  htmlFor="lastname"
                  className={city && "hide"}
                >
                  {!city && "MIASTO*"}
                </StyledLabel>
              </InputWrapper>
              <ErrorMessage id="cityErrorMessage">
                {errors.city && errors.city.message}
              </ErrorMessage>
            </Field>
          </Row2>
          <Row3>
            <Field>
              <InputWrapper>
                <StyledInput
                  aria-describedby="streetErrorMessage"
                  id="street"
                  aria-label="street"
                  type="text"
                  {...register("street", {
                    required: "required",
                  })}
                ></StyledInput>
                <StyledLabel
                  data-testid="labelTest"
                  htmlFor="street"
                  className={street && "hide"}
                >
                  {!street && "ULICA*"}
                </StyledLabel>
              </InputWrapper>
              <ErrorMessage id="streetErrorMessage">
                {errors.street && errors.street.message}
              </ErrorMessage>
            </Field>
            <Field>
              <InputWrapper>
                <StyledInput
                  aria-describedby="housenumberMessage"
                  id="housenumber"
                  aria-label="housenumber"
                  type="text"
                  {...register("housenumber", {
                    required: "required",
                  })}
                ></StyledInput>
                <StyledLabel
                  data-testid="labelTest"
                  htmlFor="housenumber"
                  className={housenumber && "hide"}
                >
                  {!housenumber && "NR DOMU*"}
                </StyledLabel>
              </InputWrapper>
              <ErrorMessage id="housenumberMessage">
                {errors.housenumber && errors.housenumber.message}
              </ErrorMessage>
            </Field>
          </Row3>
        </Fields>
      </FlexColumn>
    </StyledBasketForm>
  );
};

const Field = styled.div`
  margin-right: 10px;
  flex-grow: 1;
`;
const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledBasketForm = styled.div`
  flex-grow: 1;
`;
const Row = styled.div`
  display: flex;
`;

const Row1 = styled(Row)`
  color: green;
`;

const Row2 = styled(Row)`
  color: orange;
`;
const Row3 = styled(Row)`
  color: violet;
`;
const ErrorMessage = styled.div`
  font-size: 12px;
  height: 20px;
  width: 100% !important;
`;
const StyledLabel = styled.label`
  position: absolute;
  left: 15px;
  font-size: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.black};

  &.hide {
    visibility: hidden;
    display: none;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0;
  padding-left: 15px;
  font-size: 14px;
  margin: 0px;
  border: none;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  margin-right: 7px;
  font-weight: 500;
  &:focus {
    outline: 1px solid black;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

export default BasketForm;
