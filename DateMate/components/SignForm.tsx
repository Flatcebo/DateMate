import React, {useRef} from 'react';
import BorderedInput from './BorderedInput';

function SignForm({isSignUp, onSubmit, form, createChangeTextHandler}: any) {
  const passwordRef: any = useRef();
  const confirmPasswordRef: any = useRef();

  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEdition={() => passwordRef.current.focus()}
      />
      <BorderedInput
        placeholder="비밀번호"
        secureTextEntry
        hasMarginBottom={isSignUp}
        value={form.password}
        onChangeText={createChangeTextHandler('password')}
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderedInput
          placeholder="비밀번호 확인"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={createChangeTextHandler('confirmPassword')}
          ref={confirmPasswordRef}
          returnKeyType="done"
          onSubmitEdition={onSubmit}
        />
      )}
    </>
  );
}

export default SignForm;