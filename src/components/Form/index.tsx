import React from 'react';
import {useForm} from '@formspree/react';
import './style.scss';

const Form: React.FC = () => {
  const [state, handleSubmit] = useForm('mqkwpjjl');

  if (state.succeeded) {
    return <div className="thanks">Obrigado pelo contato!</div>;
  }

  return (
    <div className="contact-container">
      <form method="POST" className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-info">
            <label>Seu nome</label>
            <input type="text" name="_name" />
          </div>
          <div className="contact-info">
            <label>Seu email</label>
            <input type="email" name="_replyto" />
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-info">
            <label> Sua messagem</label>
            <textarea name="message"></textarea>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
