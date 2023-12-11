import React from 'react'
import {Row,Col,Container,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import PropTypes from 'prop-types';

const LoginForm = ({handleOnChange,handleOnSubmit,formSwitcher,email,password}) => {
    const containerStyle = {
        backgroundColor: '#acacd8', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow:'0px 0px 15px -5px'
      };
      const h1style = {
        color:'rgb(86 86 186)'
      }
      const buttonStyle = {
        color:'rgb(86 86 186)',
        borderRadius: '8px',
        width:'60px',
        alignItems:'center',
        
      }
      
  return (
    <Container style={containerStyle}>
        <Row>
            <Col>
             <h1 style={h1style}>Client Login</h1>
             <hr/>
             <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <FormGroup>
                    <Label>Email Address</Label><br/>
                    <Input type="email" name="email" value={email} placeholder="Enter Email"  onChange={handleOnChange}/><hr/>
                </FormGroup>
                <FormGroup>
                    <Label>Email Password</Label><br/>
                    <Input type="password" name="password" value={password} placeholder="Enter Password"  onChange={handleOnChange}/><hr/>
                </FormGroup>
                <Button style={buttonStyle} type="submit">Login</Button>
             </Form>

            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#' onClick={() => formSwitcher("reset")}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}

export default LoginForm;

LoginForm.propTypes = {
    handleOnChange : PropTypes.func.isRequired,
    handleOnSubmit : PropTypes.func.isRequired,
    formSwitcher : PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired   
    }
