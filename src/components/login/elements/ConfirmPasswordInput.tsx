import React from "react"

export const ConfirmPasswordInput = (props: any) =>
  <input {...props}
         required
         name='confirmationPassword'
         id='confirmPassword'
         type='password'
         placeholder='Confirm your password'
  />;
