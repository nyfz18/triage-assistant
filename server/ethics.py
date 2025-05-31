# ethics.py

def check_ethics(patient_data):
    messages = []
    ethical_flag = False

    # Example 1: Don't discriminate solely based on age
    if patient_data['age'] > 80:
        messages.append("Age > 80: Ensure age alone does not exclude patient.")
        ethical_flag = True

    # Example 2: Equity check for comorbidities
    if patient_data['diabetes'] and patient_data['asthma']:
        messages.append("Multiple comorbidities detected. Consider social equity.")
    
    if not messages:
        messages.append("No ethical conflicts found.")
    
    return " ".join(messages), ethical_flag
