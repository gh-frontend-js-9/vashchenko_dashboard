import React from "react"

export const EmailInput = (props: any) =>
    <input {...props}
           required
           name='email'
           id='email'
           type='email'
           placeholder='Enter your email'
    />;
