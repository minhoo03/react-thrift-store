import React from 'react'
import { useForm } from "react-hook-form"

export default function RegisterPage() {

    const { register, watch, formState:{errors}, handleSubmit } = useForm({mode: 'onChange'})
    console.log(watch('email', 'name'));
    const onSubmit = data => console.log(data)

    return (
        <div className="auth_wrapper">
            <h3>Register</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <lable>Email</lable>
                <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i}) }/>
                {errors.email && errors.email.type === 'required' && <p>Email field is required</p>}

                <lable>Name</lable>
                <input type="text" name="name" {...register('name', { required: true, maxLength: 10 })} />
                {errors.name && errors.name.type === 'required' && <p>This field is required.</p>}
                {errors.name && errors.name.type === 'maxLength' && <p>Your input exceed maximum length.</p>}
                
                <input type="submit" />
            </form>

        </div>
    )
}
