from flask import Flask, request, jsonify
import numpy as np
from ultralytics import YOLO
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
model = YOLO('./weights/last.pt')  # Load the YOLO model
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
        result = model(image.filename)
        names_dict = result[0].names
        probs = result[0].probs.data.tolist()
        result_name = names_dict[np.argmax(probs)]
        results.append(result_name)

    return jsonify({'success': True, 'results': results})

if __name__ == '__main__':
    app.run(debug=True)