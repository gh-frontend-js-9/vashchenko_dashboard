import React from "react"

export const PasswordInput = (props: any) =>
    <input {...props}
           required
           name='password'
           id='password'
           type='password'
           placeholder='Enter your password'
    />;
