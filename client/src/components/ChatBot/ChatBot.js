import styles from './ChatBot.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Button } from 'react-bootstrap';

const ChatBot = () => {
  const [chatVisible, setChatVisible] = useState(false);
  return (
    <div className={clsx(styles.chat, chatVisible ? styles.active : styles.hidden)}>
      <div
        onClick={() => setChatVisible(!chatVisible)}
        className={clsx(styles.buttonChat, chatVisible ? styles.active : styles.hidden)}>
        Napisz do nas!
      </div>
      <div className={chatVisible ? styles.fullChatBox : styles.chatBox}>
        <div className={styles.chatBoxContainer}>
          <div className={styles.chatContainer}>
            <ul>
              <li>Jak możemy Ci pomóc?</li>
            </ul>
          </div>
        </div>
        <div className={styles.message}>
          <input type='text' style={{ width: '100%'}} placeholder='...'></input>
          <Button className='text-center' variant='dark'>Wyślij</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;