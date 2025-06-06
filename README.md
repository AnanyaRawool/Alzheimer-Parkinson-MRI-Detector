# Alzheimer-Parkinson-MRI-Detector
This project is a brain disease prediction web application that helps detect Alzheimer’s and Parkinson’s disease using MRI scans. It uses a Convolutional Neural Network (CNN) trained on MRI images to classify whether the brain is healthy or affected. The frontend is built using HTML, CSS, and JavaScript, and the backend is powered by Flask and TensorFlow. The application provides a clean, eye-soothing interface where users can upload MRI images and instantly get predictions.
```
The file structure is organized into a Flask project format:
All frontend files like stylesheets and scripts are stored in the static folder.
HTML templates are placed inside the templates directory.
The main server logic is in server.py
```
**To run the project:**
```
Clone the repository and navigate into it.
Install the required dependencies using pip install (pip install tensorflow and pip install tensorflow flask pillow numpy).
Run server.py to start the Flask development server.
Open http://localhost:8080 in your browser to use the app.
```
**File Structure**
```
alzheimer-parkinson-detector/
├── server.py                      # Flask server handling upload and prediction
├── alzheimer_disease_prediction_model.keras  # Trained model file
├── static/
│   ├── style.css               # Custom styles for UI
│   └── script.js               # JavaScript for frontend functionality
├── templates/
│   └── index.html              # Frontend interface
└── README.md

```
