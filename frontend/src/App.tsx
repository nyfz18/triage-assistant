import PatientForm from './components/PatientForm'
import PredictionResult from './components/PredictionResult'
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Prediction failed:', error);
    }
  };

  return (
    <div>
      <h1>Triage Assistant</h1>
      <PatientForm onSubmit={handleFormSubmit} />
      {result !== null && <PredictionResult result={result} />}
    </div>
  );
}

export default App;
