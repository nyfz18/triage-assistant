from flask import Flask, request, jsonify
import joblib
import numpy as np
from ethics import check_ethics

app = Flask(__name__)

# Load the trained model
try:
    model = joblib.load("model.pkl")
except FileNotFoundError:
    raise RuntimeError("model.pkl not found. Run train_model.py first.")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    required_fields = ['age', 'heart_rate', 'oxygen_sat', 'diabetes', 'asthma']
    
    # Validate input
    if not all(field in data for field in required_fields):
        return jsonify({"error": f"Missing required fields. Required: {required_fields}"}), 400

    # Prepare input for prediction
    input_data = np.array([[data['age'], data['heart_rate'], data['oxygen_sat'], data['diabetes'], data['asthma']]])
    prediction = int(model.predict(input_data)[0])  # 0 or 1

    # Run ethics layer
    ethical_note, ethical_flag = check_ethics(data)

    return jsonify({
        "triage_prediction": prediction,
        "ethical_note": ethical_note,
        "ethical_flag": ethical_flag
    })

if __name__ == "__main__":
    app.run(debug=True)
