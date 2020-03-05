import React from "react"

export const NameInput = (props: any) =>
    <input {...props}
           required
           name='name'
           id='name'
           type='text'
           placeholder='Enter your name'
    />;
