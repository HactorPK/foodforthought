from flask import Flask, request, jsonify
from yolo import YOLO  # Assuming YOLO is your model module
from PIL import Image
import io
import uuid
app = Flask(__name__)

model = YOLO('./models/imagreco.pt')

@app.route('/process_images', methods=['POST'])
def process_images():
    try:
        # Assuming you are sending the images as files in a multipart/form-data request
        uploaded_files = request.files.getlist("images")

        results = []
        for file in uploaded_files:
            img_bytes = file.read()
            img = Image.open(io.BytesIO(img_bytes))
            img_path = f"/tmp/{uuid.uuid4().hex}.jpg"  # Save the image temporarily
            img.save(img_path)
            result = model(img_path)
            results.append(result)

        for idx, result in enumerate(results):
            print(f"Result for image {idx + 1}:")
            print(result)

        # Process 'results' as needed

        return jsonify({"success": True, "results": results})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)