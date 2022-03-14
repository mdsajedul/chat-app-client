import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import chatIcon from '../../../Assets/images/icon/chat-svgrepo-com.svg'
import './login.css';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        // <div className='containerflex items-center bg-neutral-200'>
        //     <div className='h-screen flex justify-center items-center '>
                <div className='h-full grid grid-cols-2 content-center'>
                    <div>
                        <div className=' m-auto flex justify-center '>
                            <img src={chatIcon} alt="" width="300px" />
                        </div>
                    </div>
                    <div className='  p-5 rounded flex justify-center  '>
                        
                        <div>
                            <h1 className='text-3xl'>Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mt-3'>
                                    <FontAwesomeIcon className='absolute p-2' icon={faUser}/>
                                    <input type="text" className='pl-8 py-1 rounded-lg input-field' defaultValue="" placeholder='Type your username' {...register("username",{required:true})} />
                                </div>
                                <div className='mt-3'>
                                <FontAwesomeIcon className='absolute p-2' icon={faLock}/>
                                    <input type="password" className='pl-8 py-1 rounded-lg input-field' placeholder='Type your password' {...register("password", { required: true })} />
                                </div>
        
                                {errors.exampleRequired && <span>This field is required</span>}
                                
                                <div className='mt-3'>
                                    <button className='w-full bg-[#324A5E] p-1 rounded-lg text-[#FAFAFA]'  type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
    );
};

export default Login;