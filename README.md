# 🧠 Mental Health Risk from Social Media Text

An AI-powered system that analyzes social media text and predicts a person's **mental health risk level** using Machine Learning and Natural Language Processing.

> Instead of just detecting emotions, this project estimates how **at‑risk** a person may be —  
**Low • Medium • High**

---

## 🚀 What This Project Does

This system reads text (such as tweets, Reddit posts, or messages) and predicts:

- 🟢 **Low Risk**
- 🟡 **Medium Risk**
- 🔴 **High Risk**

It also provides a **risk probability score**, making it more informative than simple classification.

---

## 🧠 Why This Is Special

Most projects only do:
> “Depressed or Not?”

This project does:
> **“How mentally at‑risk is this person?”**

It models **mental health risk** instead of just emotion or sentiment — making it more realistic and useful for early‑warning systems.

---

## 📊 Dataset

The dataset contains thousands of real social media posts labeled with mental health conditions such as:

- Anxiety  
- Depression  
- Stress  
- Normal  
- Suicidal  

Each post is mapped into a **risk category**:
| Status | Risk |
|--------|------|
| Normal | Low |
| Anxiety, Stress | Medium |
| Depression, Suicidal | High |

*(Dataset not uploaded due to size & privacy)*

---

## 🛠 Tech Stack

- **Python**
- **Pandas & NumPy**
- **NLTK**
- **Scikit‑learn**
- **TF‑IDF**
- **Logistic Regression**
- **Google Colab**

---

## ⚙️ How It Works

1. Text is cleaned (links, punctuation, stopwords removed)
2. TF‑IDF converts text into numbers
3. Labels are mapped to **risk levels**
4. A Machine Learning model learns patterns
5. New text is analyzed to predict **risk + probability**

---

## ✨ Example

**Input**

I feel overwhelmed and emotionally exhausted most of the time.


**Output**

Risk Level: High
High‑Risk Probability: 0.83


---

## 🧪 Try It Yourself

You can type any text into the notebook and get a risk prediction using:

```python
predict_risk("I feel anxious and disconnected from everything")

🎯 Real‑World Applications
Mental health early‑warning systems

Social media safety tools

Crisis support platforms

Wellness tracking apps

📁 Project Files
.ipynb → Full ML pipeline

README.md → Project documentation

Dataset excluded for safety

👨‍💻 Author
HOG RL 123
theiceman07
Mritumjai
AI & Machine Learning Enthusiasts

🧠 This project is for educational and research purposes only — not for medical diagnosis.
