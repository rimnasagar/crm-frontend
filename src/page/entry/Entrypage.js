import React,{useState} from 'react'
import './entry.style.css'
import LoginForm from '../../components/login/Login.comp'
import ResetPassword from '../../components/password-reset/passwordReset.comp'

const Entrypage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [formLoad, setFormLoad] = useState('login')

const handleOnChange = (e) => {
  const {name,value} = e.target;
  switch(name){
    case 'email':setEmail(value)
    break;
    case 'password':setPassword(value)
    break;
    default:
    break;
  }
}
const handleOnSubmit = (e) => {
  e.preventDefault()
  if(!email || !password)
  {
    alert("Fill up the form")
  }
}
const handleOnResetSubmit = (e) => {
  e.preventDefault()
  if(!email)
  {
    alert("Please enter email")
  }
}
const formSwitcher = (formType) => {
  setFormLoad(formType)

}
  return (
    <div className='entry-page'>
      {formLoad === 'login' &&
      <LoginForm handleOnChange = {handleOnChange}
    email = {email}
    password = {password}
    handleOnSubmit = {handleOnSubmit}
    formSwitcher = {formSwitcher} />
  }
  {formLoad === 'reset' &&
     <ResetPassword handleOnChange = {handleOnChange}
    email = {email}
    handleOnResetSubmit = {handleOnResetSubmit}
    formSwitcher = {formSwitcher}/>}
    </div>
  )
}

export default Entrypage