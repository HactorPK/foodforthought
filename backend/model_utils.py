import pandas as pd
import os
import json
from PIL import Image

def jsonify(recipe_name, user_ingredients):
    """_summary_

    Args:
        Places recipe data into a json

    Returns:
        _type_: _description_
    """
    # Load the Excel file into a pandas DataFrame
    df = pd.read_excel('backend/data/Recipes.xlsx')

       # Search for the recipe name in the 'Recipe' column
    recipe_data = df[df['Recipe'] == recipe_name]

    if recipe_data.empty:
        return None  # Recipe not found

    # Convert the matched row to a dictionary
    recipe_dict = recipe_data.iloc[0].to_dict()
    missing_ingredients = find_missing_ingredients(user_ingredients,recipe_dict["Ingredients"])
    print(missing_ingredients)

    # Construct the JSON object
    json_result = {
        "dishName": recipe_dict["Recipe"],
        "ingredients": recipe_dict["Ingredients"],
        "instructions": recipe_dict["Instructions"],
        "cookingTime": recipe_dict["Cooking time"],
        "healthRating": recipe_dict["Health rating"],
        "category": recipe_dict["Category"],
        "missingIngredients": missing_ingredients,
    }

    # Check if an image with the same name exists in the local folder
    image_filename = f"images/{recipe_name}.jpg"  # Assuming the images are in JPG format
    if os.path.isfile(image_filename):
            json_result["Image"] = image_filename
    else:
         json_result["Image"] ="images/default"

    return json_result


def find_recipe_info(recipes, user_ingredients):
    """Takes in a list of recipes and returns all them in a json format, with each recipe having it's own data

    Args:
        recipes (_type_): _description_
    """
    data = {}
    i=1
    for r in recipes:
        data[i]=jsonify(r, user_ingredients)
        i=i+1   

    return data

def find_missing_ingredients(user_ingredients, full_ingredients):
    # Split string A and string B into lists of ingredients
    ingredients_a = [ingredient.strip() for ingredient in full_ingredients.split(',')]
    ingredients_b = [ingredient.strip() for ingredient in user_ingredients.split(',')]

    # Create a set of ingredients from string B for efficient lookup
    ingredients_set_b = set(ingredients_b)

    # Find ingredients in string A but not in string B
    extra_ingredients = [ingredient for ingredient in ingredients_a if ingredient not in ingredients_set_b]

    return extra_ingredients
     
