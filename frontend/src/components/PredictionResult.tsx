type PredictionResultProps = {
  result: {
    error?: string;
    triage_prediction: number;
    ethical_note: string;
  };
}

export default function PredictionResult({ result }: PredictionResultProps) {
  if (result.error) return <p style={{ color: 'red' }}>{result.error}</p>;

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Triage Prediction: {result.triage_prediction === 1 ? "🔴 High Priority" : "🟢 Low Priority"}</h3>
      <p><strong>Ethical Note:</strong> {result.ethical_note}</p>
    </div>
  );
}
