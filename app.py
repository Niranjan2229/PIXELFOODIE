from flask import Flask, render_template, request, jsonify  # type: ignore
import pandas as pd  # type: ignore
from sklearn.feature_extraction.text import TfidfVectorizer  # type: ignore
from sklearn.metrics.pairwise import cosine_similarity  # type: ignore
import re
import os
from dotenv import load_dotenv  # type: ignore

load_dotenv()

app = Flask(__name__)


df = pd.read_csv('IndianFoodDatasetCSV.csv')
df = pd.read_csv('IndianFoodDatasetCSV.csv', usecols=['RecipeName', 'Ingredients', 'Instructions'])

def clean_ingredients(text):
    text = str(text).lower()
    
    stop_patterns = r'\d+|cup|tablespoon|tsp|tbsp|teaspoon|gram|gms|kg|finely|chopped|sliced|peeled|washed|grated|to taste'
    text = re.sub(stop_patterns, '', text)
   
    text = re.sub(r'[^a-zA-Z\s,]', '', text)
    return " ".join(text.split())

df['Clean_Ingredients'] = df['Ingredients'].apply(clean_ingredients)

vectorizer = TfidfVectorizer(ngram_range=(1, 1), stop_words='english')
matrix = vectorizer.fit_transform(df['Clean_Ingredients'])

@app.route('/')
def home():
    firebase_config = {
        'apiKey': os.getenv('FIREBASE_API_KEY', ''),
        'authDomain': os.getenv('FIREBASE_AUTH_DOMAIN', ''),
        'projectId': os.getenv('FIREBASE_PROJECT_ID', ''),
        'storageBucket': os.getenv('FIREBASE_STORAGE_BUCKET', ''),
        'messagingSenderId': os.getenv('FIREBASE_MESSAGING_SENDER_ID', ''),
        'appId': os.getenv('FIREBASE_APP_ID', ''),
        'measurementId': os.getenv('FIREBASE_MEASUREMENT_ID', '')
    }
    return render_template('login.html', firebase_config=firebase_config)

@app.route('/home')
def index_page():
    return render_template('index.html')

@app.route('/login')
@app.route('/login.html')
def login_page():
    firebase_config = {
        'apiKey': os.getenv('FIREBASE_API_KEY', ''),
        'authDomain': os.getenv('FIREBASE_AUTH_DOMAIN', ''),
        'projectId': os.getenv('FIREBASE_PROJECT_ID', ''),
        'storageBucket': os.getenv('FIREBASE_STORAGE_BUCKET', ''),
        'messagingSenderId': os.getenv('FIREBASE_MESSAGING_SENDER_ID', ''),
        'appId': os.getenv('FIREBASE_APP_ID', ''),
        'measurementId': os.getenv('FIREBASE_MEASUREMENT_ID', '')
    }
    return render_template('login.html', firebase_config=firebase_config)

@app.route('/recipe-detail.html')
def recipe_detail():
    return render_template('recipe-detail.html')

@app.route('/category-results')
@app.route('/category-results.html')
def category_result():
    return render_template('category-results.html')

@app.route('/ml-model')
def ai_matcher():
    return render_template('ai_finder.html')


@app.route('/about.html')
def about_page():
    return render_template('about.html')

@app.route('/recipes.html')
def recipes_page():
    return render_template('recipes.html')

@app.route('/admin.html')
def admin_page():
    return render_template('admin.html')

@app.route('/ai_finder.html')
def ai_finder_page():
    return render_template('ai_finder.html')

@app.route('/category.html')
def category_page():
    # Keep the old route just in case
    return render_template('categories.html')

@app.route('/categories.html')
def categories_page():
    return render_template('categories.html')

@app.route('/category-results.html')
def category_results_page():
    return render_template('category-results.html')

@app.route('/forgot-password.html')
def forgot_password_page():
    return render_template('forgot-password.html')

from flask import send_from_directory  # type: ignore
@app.route('/data/<path:filename>')
def serve_data(filename):
    return send_from_directory('data', filename)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    raw_input = data.get('ingredients', '').lower()
    
    user_ingredients = list(set([x.strip() for x in raw_input.split(',') if x.strip()]))
    
    if not user_ingredients: return jsonify([])

    results = []
    seen_recipes = set()

    for index, row in df.iterrows():
        recipe_name = row['RecipeName']
        if recipe_name in seen_recipes: continue
            
        recipe_ingredients_str = str(row['Clean_Ingredients']).lower()
        recipe_items_count = len(recipe_ingredients_str.split())
        
        if recipe_items_count == 0: continue

        matches = sum(1 for item in user_ingredients if item in recipe_ingredients_str)
        user_coverage = matches / len(user_ingredients)
        
        if user_coverage >= 0.5:
            recipe_coverage = matches / recipe_items_count
            
    
            final_score = (user_coverage * 0.95) + (recipe_coverage * 0.05)
            
            display_percent = min(round(final_score * 100), 98)
            
            results.append({
                "recipe_name": recipe_name,
                "ingredients": row['Ingredients'],
                "instructions": row['Instructions'],
                "match_val": final_score,
                "match": f"{display_percent}%"
            })
            seen_recipes.add(recipe_name)

    final_results = sorted(results, key=lambda x: x['match_val'], reverse=True)[:21]  # type: ignore
    
    return jsonify(final_results)

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
