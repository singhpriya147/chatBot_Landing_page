import ChatBot from 'react-simple-chatbot';
const steps = [
  {
    id: '0',
    message: 'Hey Geek!',

    
    trigger: '1',
  },
  {
    id: '1',

   
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',

    
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: ' hi {previousValue}, how can I help you?',
    trigger: 4,
  },
  {
    id: '4',
    options: [
     
      { value: 1, label: 'View Courses' },
      { value: 2, label: 'Read Articles' },
    ],
    trigger: 5,
  },
  {
    id: '5',
    user: true,
    trigger: 6,
  },
  {
    id: '6',
    message: 'you have chosen ${previousValue}',
    end: true,
  },
];

const ChatBotComp = () => {
  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
};
export default ChatBotComp;
