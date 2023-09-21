import recipe_model 
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def main():
    user_input = "tomatoes, maize meal, curry powder, boerewors"
    model_save_path = 'backend/recipe_model.joblib'
    vectorizer_save_path = 'backend/tfidf_vectorizer.joblib'

    # Make predictions using the saved model and vectorizer
    recipe_predicted, confidence = recipe_model.predict_category(user_input, model_save_path, vectorizer_save_path, N=3)
    
    print(f"Predicted Recipe: {recipe_predicted} with a confidence of {confidence}")
    print("=" * 20)

def make_prediction(user_input):
    model_save_path = 'backend/recipe_model.joblib'
    vectorizer_save_path = 'backend/tfidf_vectorizer.joblib'

    # Make predictions using the saved model and vectorizer
    recipe_predicted, confidence = recipe_model.predict_category(user_input, model_save_path, vectorizer_save_path, N=3)
    
    return recipe_predicted



if __name__ == "__main__":
    main()
    app.run(debug=True)