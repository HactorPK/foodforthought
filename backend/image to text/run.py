from flask import Flask, request, jsonify
import numpy as np
from ultralytics import YOLO
from flask_cors import CORS
import model

app = Flask(__name__)
CORS(app)
modelOne = YOLO('./weights/last.pt')  # Load the YOLO model

@app.route('/process_images', methods=['POST'])
def process_images():
    images = request.files.getlist('images')
    text_data = request.form.get('text_data')  # Get text data from the request

    if not images and not text_data:
        return jsonify({'success': False, 'message': 'No data received'})

    results = []

    if images:
        for image in images:
            print(f"Received image: {image.filename}, Size: {image.content_length} bytes")
            result = modelOne(image.filename)
            names_dict = result[0].names
            probs = result[0].probs.data.tolist()
            result_name = names_dict[np.argmax(probs)]
            results.append(result_name)

    if text_data:
        print(text_data)
        # Process the text data here if it's available
        # You can replace this with your own logic to handle text-based input
        # For now, let's assume it's space-separated ingredients
        text_results = text_data.split()
        results.extend(text_results)

    user_input = ' '.join(results)
    
    # Make predictions using the saved model and vectorizer
    recipes = make_prediction(user_input)
    
    return jsonify({'success': True, 'results': recipes})

def make_prediction(user_input):
    print('inside make prediction')
    model_save_path = './recipe_model.joblib'
    print('after model_save_path')

    vectorizer_save_path = './tfidf_vectorizer.joblib'

    # Make predictions using the saved model and vectorizer
    recipe_predicted = model.predict_category(user_input, model_save_path, vectorizer_save_path, N=3)
    
    return recipe_predicted

if __name__ == '__main__':
    app.run(debug=True)
