import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Survey() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experience: '',
    equipment: '',
    issues: '',
    goals: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('surveys').insert([{ ...formData }]);
    if (!error) {
      setSubmitted(true);
    } else {
      console.error(error);
    }
  };

  if (submitted) {
    return <div>Thank you! Your program will be generated soon.</div>;
  }

  return (
    <div>
      <h1>Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age: <input name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Experience Level: <input name="experience" value={formData.experience} onChange={handleChange} />
        </label>
        <br />
        <label>
          Equipment Available: <input name="equipment" value={formData.equipment} onChange={handleChange} />
        </label>
        <br />
        <label>
          Injuries or Issues: <input name="issues" value={formData.issues} onChange={handleChange} />
        </label>
        <br />
        <label>
          Goals: <input name="goals" value={formData.goals} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
