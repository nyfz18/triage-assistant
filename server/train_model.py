import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import joblib

# Create synthetic data (can replace with real CSV later)
data = pd.DataFrame({
    'age': [25, 80, 40, 70, 55, 30],
    'heart_rate': [90, 100, 85, 110, 95, 88],
    'oxygen_sat': [98, 85, 92, 88, 90, 99],
    'diabetes': [0, 1, 0, 1, 0, 0],
    'asthma': [0, 0, 1, 0, 1, 0],
    'triage_level': [0, 1, 0, 1, 1, 0]  # 1 = High Priority, 0 = Low
})

X = data.drop('triage_level', axis=1)
y = data['triage_level']

# Train a simple model
model = DecisionTreeClassifier()
model.fit(X, y)

# Save the model
joblib.dump(model, 'model.pkl')
print("Model saved to model.pkl")
