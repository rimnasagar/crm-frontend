import React from 'react'
import {Row,Col,Container,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import PropTypes from 'prop-types';

const ResetPassword = ({handleOnChange,handleOnResetSubmit,formSwitcher,email}) => {
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
        width:'80px',
        alignItems:'center',
        
      }
      
  return (
    <Container style={containerStyle}>
        <Row>
            <Col>
             <h1 style={h1style}>Reset Password</h1>
             <hr/>
             <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                <FormGroup>
                    <Label>Email Address</Label><br/>
                    <Input type="email" name="email" value={email} placeholder="Enter Email"  onChange={handleOnChange}/><hr/>
                </FormGroup>
               
                <Button style={buttonStyle} type="submit">Reset Password</Button>
             </Form>

            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#' onClick={() => formSwitcher("login")}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}

export default ResetPassword;

ResetPassword.propTypes = {
    handleOnChange : PropTypes.func.isRequired,
    handleOnResetSubmit : PropTypes.func.isRequired,
    formSwitcher : PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
     
    }
