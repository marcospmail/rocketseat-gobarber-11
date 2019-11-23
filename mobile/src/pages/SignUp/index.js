import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
