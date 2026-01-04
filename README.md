# GFGBQ-Team-unocoders


###Problem Statement
###Silent Disease Early Detection Engine
(Detect What Patients Don’t Even Know They Have)
A large percentage of life threatening diseases (diabetes, hypertension, liver disorders, mental health conditions, early cardiac risk) remain undiagnosed for years because symptoms are mild, ignored, or fragmented across reports. Healthcare systems rely heavily on reactive diagnosis rather than predictive
prevention.

##Challenge
Build an AI-driven early risk detection system that:
Aggregates non-obvious health signals, such as:
  Lab trends over time
  Lifestyle data (sleep, activity, nutrition)
  Stress & mental health indicators
  Family history patterns
Detects silent or early stage diseases before clinical diagnosis
Generates risk probability scores, not binary outcomes
Provides preventive action recommendations for patients and doctors


###Project Name
EarlyGuard — AI-Powered Silent Disease Risk Detection


###Team Name
UnoCoders


###Deployed Link


###Video Demonstration Link


###Presentation
https://drive.google.com/file/d/1Pk15ATJfSBvDeF4dnXkH8BZDTFmmjKsx/view?usp=drive_link


###Project Overview
EarlySignal is a full-stack, AI-driven healthcare risk assessment system designed to detect silent or early-stage diseases using machine learning.
Instead of producing binary outcomes (disease / no disease), EarlySignal focuses on predictive prevention by generating risk probability scores, enabling users and healthcare platforms to identify potential health threats before symptoms become clinically visible.

⚠️ Disclaimer
This project is built for educational and hackathon purposes only. It does not provide medical diagnoses or clinical recommendations.


###Core Features

**🔬 ML-Based Risk Prediction**
Predicts disease likelihood as a continuous probability score, enabling early intervention.

**📊 Explainable AI Insights**
Highlights key contributing factors behind elevated risk scores to ensure transparency and trust.

**🧪 Multi-Dataset Training**
Models trained on publicly available Kaggle datasets for diabetes and heart disease.

**⚡ Real-Time Inference**
Fast, API-based predictions served via Flask for seamless frontend integration.

**🧩 Modular Architecture**
Clear separation of frontend, backend, and ML pipeline, ensuring maintainability and scalability.


##Machine Learning Pipeline

**Dataset Ingestion**
Raw health data is collected and preprocessed for consistency and quality.

**Feature Engineering**
Clinical and demographic attributes are transformed into predictive features.

**Model Training**
Logistic Regression models are trained and optimized using scikit-learn.

**Real-Time Inference**
Deployed models generate instant risk scores via REST APIs.

**Explainable AI Outputs**
Feature contributions are surfaced to explain why a risk score is high.


##Tech Stack
**Frontend**
React (Antigravity-generated UI)
HTML, CSS, JavaScript
npm

**Backend**
Python
Flask
REST APIs
Machine Learning
scikit-learn (Logistic Regression)
Pandas
NumPy

**Data**
Kaggle Diabetes Dataset
Kaggle Heart Disease Dataset

**Package Managers**
npm
pip


###Setup & Installation Instructions
**Prerequisites**

Ensure the following are installed on your system:
Python 3.9+
Node.js 18+
npm

##Backend Setup (Flask + ML)
# Clone the repository
git clone <your-repo-link>
cd backend

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python app.py

Frontend Setup (React)
cd frontend

# Install dependencies
npm install

# Start development server
npm start

###Usage Instructions

*User inputs basic health parameters via the frontend.

*Data is sent to the Flask backend through REST APIs.

*The ML model processes the data and generates:

  A risk probability score
  Explainable insights highlighting contributing factors
  Results are displayed in real time on the UI.


###Screenshots
