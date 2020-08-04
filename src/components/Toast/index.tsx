import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast'
import { Container } from "./style";
import ToastStyle from './ToastTime'

interface ToastContainerProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastContainerProps> = ({ messages }) => {

  const messagesTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  );

  return (
    <Container>
      {messagesTransitions.map(({ item, key, props }) => (
        <ToastStyle key={key} style={props} message={item} />
      ))}
    </Container>
  );
}

export default Toast;
