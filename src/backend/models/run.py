from ultralytics import YOLO
import numpy as np
# Load a pretrained YOLOv8n model
model = YOLO('yolov8n.pt')

# Define path to the image file
source = './cabbage.jpg'

# Run inference on the source
results = model(source)  # list of Results objects

names_dict = results[0].names
probs = results[0].probs.data.tolist()
print(names_dict)
print(probs)
print(names_dict[np.argmax(probs)])