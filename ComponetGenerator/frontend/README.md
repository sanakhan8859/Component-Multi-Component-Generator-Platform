# 🌿 AI Crop Doctor – Smart Crop Disease Detection System

The **AI Crop Doctor** is a full-stack web application that leverages artificial intelligence to diagnose plant diseases from uploaded leaf images. Designed for farmers and agriculture professionals, the system provides quick and reliable predictions along with remedy suggestions to improve crop yield and reduce losses.



## 📸 Live Demo

Soon....

## 📋 Features

- 🌱 Upload crop leaf images for disease diagnosis
- 🤖 AI-based predictions with confidence scores
- 💡 Remedies and suggestions for detected diseases
- 🧾 Prediction history with images and results
- 🗂️ View or delete previous prediction records
- 🔒 Optional user authentication and personalized history

---

## 🏗️ Tech Stack

| Layer | Tech Used |
|---|---|
| Frontend | React, Axios, Tailwind CSS / Bootstrap |
| Backend | Node.js, Express, Multer |
| AI Model | Python, Flask, TensorFlow / PyTorch |
| Database | MongoDB + Mongoose |
| Storage | Local `/uploads` or AWS S3 |

---

## 🧠 AI Model

- **Dataset**: PlantVillage or similar
- **Architecture**: Convolutional Neural Network (CNN)
- **Output**: Disease name, Confidence %, and Remedies
- **Framework**: TensorFlow / PyTorch

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository


```
git clone [https://github.com/your-username/ai-crop-doctor.git](https://github.com/your-username/ai-crop-doctor.git)
cd ai-crop-doctor

```

### 2️⃣ Start the Flask AI Model Server

```
cd model-api
pip install -r requirements.txt
python app.py
```
### 3️⃣ Start the Node.js Backend
```
cd server
npm install
npm start
```

###  4️⃣ Start the React Frontend 

```
cd client
npm install
npm start
```

---

## 🌱 Future Enhancements

- Add user authentication (JWT)
- Multilingual support (Hindi, Tamil, etc.)
- SMS alerts using Twilio
- Upload via mobile camera (PWA)
- Cloud deployment (Render, AWS, Vercel)