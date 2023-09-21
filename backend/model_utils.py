import pandas as pd
import os
import json
from PIL import Image

def jsonify(recipe_name):
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

    # Construct the JSON object
    json_result = {
        "Recipe": recipe_dict["Recipe"],
        "Ingredients": recipe_dict["Ingredients"],
        "Instructions": recipe_dict["Instructions"],
        "Cooking time": recipe_dict["Cooking time"],
        "Health rating": recipe_dict["Health rating"],
        "Category": recipe_dict["Category"]
    }

    # Check if an image with the same name exists in the local folder
    image_filename = f"images/{recipe_name}.jpg"  # Assuming the images are in JPG format
    if os.path.isfile(image_filename):
            json_result["Image"] = image_filename
    else:
         json_result["Image"] ="images/default"

    return json_result


def find_recipe_info(recipes):
    """Takes in a list of recipes and returns all them in a json format, with each recipe having it's own data

    Args:
        recipes (_type_): _description_
    """
    data = {}
    i=1
    for r in recipes:
        data[i]=jsonify(r)
        i=i+1   

    return data

recipes = ['Apple Salad', 'Apple Grape Salad', 'Fruit Salad with Apricot Dressing']

print(find_recipe_info(recipes))