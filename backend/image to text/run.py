from flask import Flask, request, jsonify
import numpy as np
from ultralytics import YOLO
from flask_cors import CORS
import model
app = Flask(__name__)
CORS(app)
modelOne = YOLO('./weights/last.pt')  # Load the YOLO model
print('value')

@app.route('/process_images', methods=['POST'])
def process_images():
    # Handle the uploaded images here
    images = request.files.getlist('images')
    print(len(images))
    results = []
    for image in images:
        print(f"Received image: {image.filename}, Size: {image.content_length} bytes")
        # Process each image with the model
        # Replace 'banana.jpeg' with the image data from 'image'
        result = modelOne(image.filename)
        names_dict = result[0].names
        probs = result[0].probs.data.tolist()
        result_name = names_dict[np.argmax(probs)]
        results.append(result_name)

    user_input = "'"+' '.join(results)+"'"
    # Make predictions using the saved model and vectorizer
    print(user_input)
    recipes = make_prediction(user_input)
    # print(f"Predicted Recipe: {recipes} ")
    print("=" * 20)
    
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
