import { useState } from 'react';

type PatientFormData = {
  age: string;
  heart_rate: string;
  oxygen_sat: string;
  diabetes: boolean;
  asthma: boolean;
};

type PatientFormProps = {
  onSubmit: (formData: PatientFormData) => void;
};

const PatientForm = ({ onSubmit }: PatientFormProps) => {
  const [formData, setFormData] = useState({
    age: '',
    heart_rate: '',
    oxygen_sat: '',
    diabetes: false,
    asthma: false,
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // stops page refresh
    onSubmit(formData); // calls parent function (App.jsx)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="age" value={formData.age} onChange={handleChange} />
      <input name="heart_rate" value={formData.heart_rate} onChange={handleChange} />
      <input name="oxygen_sat" value={formData.oxygen_sat} onChange={handleChange} />
      <label>
        Diabetes:
        <input type="checkbox" name="diabetes" checked={formData.diabetes} onChange={handleChange} />
      </label>
      <label>
        Asthma:
        <input type="checkbox" name="asthma" checked={formData.asthma} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
