import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from '../../ui/Icons';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-2.5">
      <label htmlFor="username" className="text-sm font-semibold">
        What should we call you?
      </label>

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id="username"
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input grow"
        />
        <Button type="primary" disabled={!username}>
          Start ordering
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
}

export default CreateUser;
