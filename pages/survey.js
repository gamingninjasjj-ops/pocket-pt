import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import NavBar from '../components/NavBar';

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

  return (
    <div>
      <NavBar />
      {submitted ? (
        <p>Thank you for completing the survey!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
          <label>Age: <input type="text" name="age" value={formData.age} onChange={handleChange} /></label>
          <label>Experience: <input type="text" name="experience" value={formData.experience} onChange={handleChange} /></label>
          <label>Equipment: <input type="text" name="equipment" value={formData.equipment} onChange={handleChange} /></label>
          <label>Issues: <input type="text" name="issues" value={formData.issues} onChange={handleChange} /></label>
          <label>Goals: <input type="text" name="goals" value={formData.goals} onChange={handleChange} /></label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
