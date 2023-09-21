import model
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def main():
    user_input = "apple banana"
    # Make predictions using the saved model and vectorizer
    recipes = make_prediction(user_input)
    print(f"Predicted Recipe: {recipes} ")
    print("=" * 20)

def make_prediction(user_input):
    model_save_path = 'backend/recipe_model.joblib'
    vectorizer_save_path = 'backend/tfidf_vectorizer.joblib'

    # Make predictions using the saved model and vectorizer
    recipe_predicted = model.predict_category(user_input, model_save_path, vectorizer_save_path, N=3)
    
    return recipe_predicted



if __name__ == "__main__":
    main()