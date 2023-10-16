
import Section from '../UI/Section';

import TaskForm from './TaskForm';

import useHttpRequest from '../../hooks/use-httpRequest';

const NewTask = (props) => {


  const createTask = (taskText,taskData)=>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

 
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttpRequest()

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url:'https://react-practice-26b5f-default-rtdb.firebaseio.com/tasks.json',
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: { text: taskText },

  }, createTask.bind(null, taskText));
};

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
