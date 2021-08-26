import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function FormGroup() {
    return (
        <Form unstackable>
        <Form.Group>
      
          <Form.Input icon='tags' width={12} label='Decription' placeholder='New things'></Form.Input>
       <Form.Input width={4} label='Value' placeholder='100.00' icon='rupees' iconPosition='left'></Form.Input>
       
       
        </Form.Group>
        <ButtonSaveOrCancel/>
        </Form>
    )}
    
export default FormGroup
