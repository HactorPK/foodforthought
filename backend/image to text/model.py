import numpy as np
import joblib
import model_utils


# Function to make N recipe predictions based on user input
print('inside model now')
def predict_category(input_text, model_path, vectorizer_path, N=3):
    print('inside predictCategory now')
    # Load the trained model and TF-IDF vectorizer
    model = joblib.load(model_path)
    print('got joblib')
    tfidf_vectorizer = joblib.load(vectorizer_path)
    print('got model and tfidf')
    # Vectorize the input text using the loaded TF-IDF vectorizer
    input_tfidf = tfidf_vectorizer.transform([input_text])

    # Get probabilities for each recipe
    probabilities = model.predict_proba(input_tfidf)[0]

    # Get the top N categories with the highest probabilities
    top_indices = np.argsort(-probabilities)[:N]  # Sort in descending order and get top N indices
    top_categories = [model.classes_[i] for i in top_indices]  # Get recipe labels

    recipedata = model_utils.find_recipe_info(top_categories)

    return recipedata


