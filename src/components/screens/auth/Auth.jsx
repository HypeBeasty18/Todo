import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Loader from '../../ui/Loader'


const Auth = () => {
  
  const isLoading = false

  const navigate = useNavigate()

  const {register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })



  const onSubmit = () => {
    e.preventDefault();

}

  return (
    <div className='flex justify-center mt-52'>
      <div>
        <div>
          <img className='flex mx-auto mb-10 ' src='/favicon.svg'/>
          <h1 className='text-3xl font-semibold text-center mb-10'>Todo for you</h1>
        </div>
        {isLoading && <Loader/>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='block mx-auto px-1 mb-5 text-lg w-60 h-8  text-black'
          type='email'
          placeholder='Enter your email'
          {...register('email', {
            required: 'Email is required'
          })}
          />
          <input className='block mx-auto px-1 mb-5 text-lg w-60 h-8  text-black'
          type='password'
          placeholder='Enter your password'
          {...register('password', {
            required: 'Password is required', 
            minLength: {
              value: 5,
              message: "Minimum 5 characters"
            }
          })}
          />
          <div className='text-red-700 ml-2 mt-[-10px]  text-lg mb-2 '>
            {(errors?.email || errors?.password)  && <p>{(errors?.email?.message || errors?.password?.message) || "Error"}</p>}
          </div>

          <div className='text-base  mb-7'>
            <span>You don't have an account ?</span>
            {' '}
            <a  className='text-blue-400 hover:underline hover:text-blue-500 ' onClick={() => setType('login')} href='/signup'>Сreate it</a>
          </div>
          <div className='flex gap-2 justify-center '>
          <button onClick={() => navigate('/')} className='bg-zinc-500 px-5 py-1 hover:bg-zinc-700' type='button'>Back</button>
          <button onClick={() => setType('register')} className='bg-sky-900 px-5 py-1 hover:bg-sky-950' type='submit' disabled={!isValid} >Log in</button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default Auth