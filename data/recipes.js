const recipes = [
    {
        id: 1,
        title: "Fluffy Blueberry Pancakes",
        categories: ["Western", "Breakfast", "Vegetarian", "Desserts", "Sweet"],
        time: "20 min",
        rating: 4.8,
        image: "assets/recipe_pancakes.png",
        video: "https://www.youtube.com/embed/Sa0vl4sXCjA",
        description: "Classic Western Vegetarian breakfast. Start your day with these light and fluffy pancakes, topped with fresh blueberries and maple syrup.",
        ingredients: [
            "1 ½ cups all-purpose flour",
            "3 ½ teaspoons baking powder",
            "1 tablespoon white sugar",
            "1 ¼ cups milk",
            "1 egg",
            "3 tablespoons butter, melted",
            "1 cup fresh blueberries"
        ],
        instructions: [
            "In a large bowl, sift together the flour, baking powder, salt and sugar.",
            "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
            "Fold in the blueberries gently.",
            "Heat a lightly oiled griddle or frying pan over medium high heat.",
            "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Brown on both sides and serve hot."
        ]
    },
    {
        id: 2,
        title: "Spicy Schezwan Noodles",
        categories: ["Chinese", "Dinner", "Vegetarian", "Spicy", "Main Course", "Street Food"],
        time: "15 min",
        rating: 3.9,
        image: "assets/recipe_noodles.png",
        video: "https://www.youtube.com/embed/YOiOXW_ibVw",
        description: "Hot and spicy noodles tossed with fresh vegetables and chatpata aromatic spices.",
        ingredients: [
            "200g boiled noodles",
            "2 tbsp oil",
            "1 cup mixed veggies (carrot, capsicum, cabbage)",
            "1 tbsp ginger-garlic paste",
            "2 tbsp Schezwan sauce",
            "1 tbsp soy sauce",
            "1 tsp vinegar",
            "Salt and pepper to taste",
            "Spring onions for garnish"
        ],
        instructions: [
            "Boil the noodles al dente and drain. Toss with a little oil to prevent sticking.",
            "Heat oil in a wok on high flame. Add ginger-garlic paste and sauté for 30 seconds.",
            "Add the chopped veggies and stir-fry for 2-3 minutes (keep them crunchy!).",
            "Add Schezwan sauce, soy sauce, and vinegar. Mix well.",
            "Toss in the boiled noodles and season with salt and pepper.",
            "Stir-fry on high heat for another minute to blend flavors.",
            "Garnish with chopped spring onions and serve piping hot!"
        ]
    },
    {
        id: 3,
        title: "Spicy Basil Pasta",
        categories: ["Western", "Dinner", "Vegetarian", "Main Course"],
        time: "35 min",
        rating: 4.7,
        image: "assets/hero_food_platter.png",
        video: "https://www.youtube.com/embed/EUrit0U4N1M",
        description: "A simple yet flavorful Western Italian Vegetarian pasta dish with fresh basil, garlic, and a kick of chili flakes.",
        ingredients: [
            "300g pasta (your choice)",
            "3 tbsp olive oil",
            "4 cloves garlic, minced",
            "1 tsp chili flakes",
            "1 cup fresh basil leaves",
            "1/2 cup grated parmesan cheese",
            "Salt to taste"
        ],
        instructions: [
            "Cook pasta in salted water until al dente. Reserve 1/2 cup of pasta water.",
            "In a pan, heat olive oil and sauté garlic until fragrant (don't burn!).",
            "Add chili flakes and a ladle of pasta water to create an emulsion.",
            "Toss in the cooked pasta and coat well.",
            "Turn off heat and stir in fresh basil leaves and parmesan cheese.",
            "Serve immediately with extra cheese on top."
        ]
    },
    {
        id: 4,
        title: "Herb Grilled Chicken",
        categories: ["Western", "Dinner", "Non-Veg Delicacies", "Main Course", "Tandoori & Grills", "Gluten-Free"],
        time: "30 min",
        rating: 4.8,
        image: "assets/recipe_grilled_chicken.png",
        video: "https://www.youtube.com/embed/KF-h5T2K5HA",
        description: "Juicy Western Non-Veg chicken breast grilled to perfection with fresh herbs, lemon, and roasted veggies.",
        ingredients: [
            "2 chicken breasts",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "1 tsp dried oregano",
            "1 tsp dried thyme",
            "1 tsp garlic powder",
            "Salt and black pepper",
            "Vegetables for side (carrots, asparagus)"
        ],
        instructions: [
            "Mix olive oil, lemon juice, herbs, garlic powder, salt, and pepper in a bowl.",
            "Rub the marinade over the chicken breasts and let sit for 15 minutes.",
            "Preheat grill or grill pan over medium-high heat.",
            "Grill chicken for 6-7 minutes per side until fully cooked (internal temp 165°F).",
            "Grill the vegetables alongside the chicken until tender-crisp.",
            "Let chicken rest for 5 minutes before slicing. Serve with veggies."
        ]
    },
    {
        id: 5,
        title: "Spicy Fish Fry",
        categories: ["South Indian", "Dinner", "Non-Veg Delicacies", "Seafood", "Fried Snacks", "Gluten-Free"],
        time: "25 min",
        rating: 4.9,
        image: "assets/recipe_fish_fry.png",
        video: "https://www.youtube.com/embed/gXgd4GCWHPs",
        description: "Crispy and spicy South Indian Non-Veg fish fry marinated in aromatic masala.",
        ingredients: [
            "500g fish fillets (King fish or Seer fish)",
            "2 tbsp red chili powder",
            "1 tbsp coriander powder",
            "1/2 tsp turmeric powder",
            "1 tbsp ginger-garlic paste",
            "1 tbsp lemon juice",
            "Salt to taste",
            "Oil for shallow frying",
            "Curry leaves for garnish"
        ],
        instructions: [
            "Make a paste of chili powder, coriander powder, turmeric, ginger-garlic paste, lemon juice, and salt with a little water.",
            "Coat the fish fillets thoroughly with this masala paste.",
            "Marinate for at least 30 minutes in the refrigerator.",
            "Heat oil in a pan. Place fish pieces and fry on medium heat.",
            "Flip and cook until both sides are crispy and reddish-brown.",
            "Fry some curry leaves in the same oil and garnish the fish.",
            "Serve hot with onion rings and lemon wedges."
        ]
    },
    {
        id: 6,
        title: "Kashmiri Mutton Rogan Josh",
        categories: ["North Indian", "Dinner", "Non-Veg Delicacies", "Curries & Gravies", "Main Course", "Gluten-Free"],
        time: "50 min",
        rating: 4.8,
        image: "assets/recipe_mutton_curry.png",
        video: "https://www.youtube.com/embed/yMEhhmqYYZM",
        description: "North Indian Non-Veg rich and aromatic lamb dish cooked with traditional Kashmiri spices.",
        ingredients: [
            "500g mutton/lamb pieces",
            "2 onions, sliced",
            "1/2 cup yogurt, whisked",
            "1 tbsp Kashmiri red chili powder",
            "1/2 tsp ginger powder (soonth)",
            "1/2 tsp fennel powder (saunf)",
            "Whole spices (cinnamon, cardamom, cloves)",
            "3 tbsp ghee or oil",
            "Salt to taste"
        ],
        instructions: [
            "Heat ghee in a pressure cooker or heavy pot. Add whole spices.",
            "Add onions and fry until golden brown.",
            "Add mutton pieces and sear on high heat for 5 minutes.",
            "Lower heat, add chili powder, ginger powder, fennel powder, and salt. Mix well.",
            "Add yogurt gradually, stirring constantly to prevent curdling.",
            "Add 1 cup water, cover, and cook until meat is tender (3-4 whistles in cooker).",
            "Simmer until the gravy thickens and oil floats on top.",
            "Garnish with fresh coriander and serve with Naan or Rice."
        ]
    },
    {
        id: 7,
        title: "Butter Chicken (Murg Makhani)",
        categories: ["North Indian", "Dinner", "Non-Veg Delicacies", "Curries & Gravies", "Main Course", "Gluten-Free"],
        time: "45 min",
        rating: 4.9,
        image: "assets/recipe_butter_chicken.png",
        video: "https://www.youtube.com/embed/RKNogWbAivY",
        description: "North Indian Classic Non-Veg chicken curry in a rich, creamy, and buttery tomato sauce.",
        ingredients: [
            "500g chicken thigh, cubed",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp red chili powder",
            "4 large tomatoes, pureed",
            "2 tbsp butter + 1 tbsp oil",
            "1/2 cup fresh cream",
            "1 tbsp kasuri methi (dried fenugreek)",
            "Salt and sugar to taste"
        ],
        instructions: [
            "Marinate chicken with yogurt, half of the ginger-garlic paste, chili powder, and salt. Let sit for 30 mins.",
            "Grill or shallow fry the chicken pieces until charred. Set aside.",
            "Heat butter in a pan. Add remaining ginger-garlic paste and sauté.",
            "Add tomato puree, chili powder, and cook until oil separates.",
            "Add the grilled chicken and a little water. Simmer for 10-15 mins.",
            "Stir in fresh cream and crushed kasuri methi.",
            "Serve hot with Naan or Jeera Rice."
        ]
    },
    {
        id: 8,
        title: "Palak Paneer",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Gluten-Free", "Vegetarian"],
        time: "30 min",
        rating: 4.7,
        image: "assets/recipe_palak_paneer.png",
        video: "https://www.youtube.com/embed/5lVLxEr_qgM",
        description: "Cottage cheese cubes cooked in a smooth, nutritious spinach gravy.",
        ingredients: [
            "250g paneer, cubed",
            "2 bunches spinach (palak), blanched",
            "1 onion, chopped",
            "1 tomato, chopped",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "2 tbsp fresh cream",
            "1 tbsp ghee"
        ],
        instructions: [
            "Blanch spinach leaves in boiling water for 2 mins, then dip in ice water. Blend to a smooth puree.",
            "Heat ghee in a pan. Add cumin seeds and onions. Sauté until golden.",
            "Add ginger-garlic paste and tomatoes. Cook until soft.",
            "Pour in the spinach puree and spices. Simmer for 5 minutes.",
            "Add paneer cubes and cooked for 2 more minutes.",
            "Finish with fresh cream and serve hot with Roti."
        ]
    },
    {
        id: 9,
        title: "Hyderabadi Chicken Biryani",
        categories: ["South Indian", "Dinner", "Non-Veg Delicacies", "Rice & Biryani", "Main Course", "Gluten-Free"],
        time: "60 min",
        rating: 5.0,
        image: "assets/recipe_hyderabadi_chicken_biryani.png",
        video: "https://www.youtube.com/embed/zO8H2Fas6bI",
        description: "South Indian Special Non-Veg. Aromatic basmati rice and chicken cooked together with spices in the 'Dum' style.",
        ingredients: [
            "500g chicken pieces",
            "2 cups basmati rice, soaked",
            "1 cup fried onions (birista)",
            "1/2 cup yogurt",
            "2 tbsp biryani masala",
            "Whole spices (bay leaf, cloves, cardamom)",
            "Saffron milk",
            "Fresh mint and coriander leaves",
            "Ghee"
        ],
        instructions: [
            "Marinate chicken with yogurt, spices, herbs, and half of the fried onions for 1 hour.",
            "Boil water with whole spices and salt. Cook rice until 70% done. Drain.",
            "In a heavy pot, layer the marinated chicken at the bottom.",
            "Spread the semi-cooked rice over the chicken.",
            "Top with saffron milk, ghee, and remaining fried onions.",
            "Seal the pot with dough or foil and cook on low heat (Dum) for 25-30 minutes.",
            "Fluff gently and serve with Raita."
        ]
    },
    {
        id: 10,
        title: "Crispy Masala Dosa",
        categories: ["South Indian", "Breakfast", "Snack", "Vegetarian", "Street Food", "Gluten-Free", "Vegetarian"],
        time: "20 min",
        rating: 4.8,
        image: "assets/recipe_masala_dosa.png",
        video: "https://www.youtube.com/embed/mKJksaeri8M",
        description: "South Indian Vegetarian crispy rice crepe filled with spiced potato masala.",
        ingredients: [
            "2 cups dosa batter (fermented)",
            "4 boiled potatoes, mashed",
            "1 onion, sliced",
            "1 tsp mustard seeds",
            "1/2 tsp turmeric powder",
            "Green chilies and curry leaves",
            "Oil or Ghee"
        ],
        instructions: [
            "For masala: Heat oil, pop mustard seeds. Add chilies, onions, turmeric and sauté.",
            "Add mashed potatoes and salt. Mix well and set aside.",
            "Heat a tawa (griddle). Pour a ladle of batter and spread it thin.",
            "Drizzle oil/ghee around the edges. Cook until crisp and golden.",
            "Place a dollop of potato masala in the center and fold.",
            "Serve hot with Sambhar and Coconut Chutney."
        ]
    },
    {
        id: 11,
        title: "Chole Bhature",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Main Course", "Street Food", "Vegetarian"],
        time: "90 min",
        rating: 4.9,
        image: "assets/recipe_chole_bhature.png",
        video: "https://www.youtube.com/embed/QbyXsYOTJD4",
        description: "North Indian Vegetarian classic feature spicy chickpea curry and fluffy deep-fried bread.",
        ingredients: [
            "2 cups chickpeas (kabuli chana), soaked overnight",
            "2 cups all-purpose flour (maida) for bhature",
            "1/2 cup yogurt",
            "2 onions, finely chopped",
            "2 tomatoes, pureed",
            "2 tbsp chole masala",
            "Tea bags (for color)",
            "Oil for deep frying"
        ],
        instructions: [
            "Pressure cook chickpeas with tea bags and salt until tender.",
            "For Bhature: Knead flour with yogurt, salt, and water. Rest for 2 hours.",
            "For Chole: Sauté onions, ginger garlic paste, tomato puree, and spices. Add chickpeas and simmer.",
            "Roll out the dough into circles and deep fry in hot oil until they puff up.",
            "Serve the hot bhature with spicy chole, onions, and pickles."
        ]
    },
    {
        id: 12,
        title: "Dal Makhani",
        categories: ["North Indian", "Dinner", "Dal & Lentils", "Main Course", "Vegetarian", "Gluten-Free"],
        time: "8 hours",
        rating: 4.8,
        image: "assets/recipe_dal_makhani.png",
        video: "https://www.youtube.com/embed/dOiwccflDkY",
        description: "North Indian Vegetarian creamy, slow-cooked black lentils flavored with butter and authentic spices.",
        ingredients: [
            "1 cup whole black urad dal, soaked overnight",
            "1/4 cup kidney beans (rajma)",
            "4 tbsp butter",
            "1/2 cup fresh cream",
            "1 tbsp ginger-garlic paste",
            "1 cup tomato puree",
            "1 tsp garam masala",
            "Salt to taste"
        ],
        instructions: [
            "Pressure cook dal and rajma with salt until very soft.",
            "Mash the dal slightly.",
            "Heat butter in a pot. Add ginger-garlic paste and tomato puree. Cook well.",
            "Add the cooked dal and spices. Add water and simmer on low heat for 1 hour.",
            "Finish with fresh cream and more butter.",
            "Serve with Naan or Rice."
        ]
    },
    {
        id: 13,
        title: "Mumbai Pav Bhaji",
        categories: ["West Indian", "Dinner", "Street Food", "Vegetarian", "Main Course"],
        time: "40 min",
        rating: 4.9,
        image: "assets/recipe_pav_bhaji_updated.png",
        video: "https://www.youtube.com/embed/dz6eh3U5zEM",
        description: "Spicy mashed vegetable curry served with buttered soft bread rolls.",
        ingredients: [
            "2 cups mixed veggies (potatoes, cauliflower, peas, carrots), boiled",
            "2 onions, chopped",
            "2 capsicums, chopped",
            "3 tbsp Pav Bhaji masala",
            "4 tbsp butter",
            "1 tbsp lemon juice",
            "8 Pav (bread rolls)",
            "Coriander for garnish"
        ],
        instructions: [
            "Mash the boiled vegetables.",
            "Heat butter on a large tawa or pan. Sauté onions, capsicum, and ginger-garlic paste.",
            "Add tomatoes and spices (Pav Bhaji masala, chili powder). Cook until mushy.",
            "Add mashed veggies and water. Mash and cook until blended.",
            "Add lemon juice and butter.",
            "Toast the pav with butter on a pan.",
            "Serve bhaji topped with butter, onions, and coriander alongside pav."
        ]
    },
    {
        id: 14,
        title: "Punjabi Samosa",
        categories: ["North Indian", "Snack", "Fried Snacks", "Street Food", "Vegetarian"],
        time: "45 min",
        rating: 4.8,
        image: "assets/recipe_punjabi_samosa.png",
        video: "https://www.youtube.com/embed/Y-7WvrwtrYQ",
        description: "Crispy fried pastry shells filled with spiced potatoes and peas.",
        ingredients: [
            "2 cups all-purpose flour",
            "4 potatoes, boiled and cubed",
            "1/2 cup green peas",
            "1 tsp mustard seeds",
            "1 tsp coriander powder",
            "1/2 tsp garam masala",
            "Green chilies and ginger",
            "Oil for deep frying"
        ],
        instructions: [
            "Mix flour, salt, and oil. Knead into a stiff dough. Rest for 20 mins.",
            "Heat oil, add cumin, ginger, chilies, and peas.",
            "Add potatoes and spices. Mix well and cool.",
            "Divide dough into balls, roll into ovals, cut in half.",
            "Form a cone, fill with stuffing, seal the edges with water.",
            "Deep fry in medium hot oil until golden brown and crispy.",
            "Serve with Tamarind and Green Chutney."
        ]
    },
    {
        id: 15,
        title: "Aloo Gobi Masala",
        category: "Dinner",
        time: "30 min",
        rating: 4.6,
        image: "assets/recipe_aloo_gobi_updated.png",
        video: "https://www.youtube.com/embed/8VWW5xVjEjw", // Hebbar's Aloo Gobi
        description: "Classic cauliflower and potato curry stir-fried with ginger and spices.",
        ingredients: [
            "1 cauliflower (gobi), cut into florets",
            "2 potatoes (aloo), cubed",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1 tsp cumin seeds",
            "1 tsp turmeric powder",
            "1 tbsp coriander powder",
            "Fresh coriander leaves"
        ],
        instructions: [
            "Heat oil in a pan. Fry potatoes and cauliflower until golden. Remove.",
            "In the same oil, add cumin and onions. Sauté until translucent.",
            "Add tomatoes and spices. Cook until oil separates.",
            "Add the fried veggies and salt. Mix well.",
            "Cover and cook on low heat for 10 minutes until tender.",
            "Garnish with coriander and serve with Roti."
        ]
    },
    {
        id: 16,
        title: "Paneer Tikka Masala",
        category: "Dinner",
        time: "45 min",
        rating: 4.9,
        image: "assets/recipe_paneer_tikka_masala.png",
        video: "https://www.youtube.com/embed/BwIJHI4KdIE",
        description: "North Indian Vegetarian marinated grilled paneer cubes simmered in spicy gravy.",
        ingredients: [
            "250g paneer, cubed",
            "1 cup yogurt",
            "1 tbsp besan (gram flour)",
            "2 tbsp tandoori masala",
            "1 tbsp ginger-garlic paste",
            "Capsicum and onion cubes",
            "For Gravy: Onion-tomato masala base, cream, kasuri methi"
        ],
        instructions: [
            "Marinate paneer and veggies in yogurt, besan, and spices for 30 mins.",
            "Grill on a pan or in oven until charred.",
            "Prepare a gravy by sautéing onions, tomatoes, and spices.",
            "Add the grilled paneer and veggies to the gravy.",
            "Add water to adjust consistency and simmer for 5 mins.",
            "Finish with charcoal smoke (dhungar) for authentic flavor if desired.",
            "Serve hot with Butter Naan."
        ]
    },
    {
        id: 17,
        title: "Nasi Lemak",
        category: "Breakfast",
        time: "45 min",
        rating: 5.0,
        image: "assets/recipe_nasi_lemak.png",
        video: "https://www.youtube.com/embed/GDzpsXNBBAk",
        description: "The national dish of Malaysia aka Malaysian. Fragrant coconut rice served with sambal, anchovies, peanuts, and boiled egg. Non-Veg.",
        ingredients: [
            "2 cups rice",
            "1 cup coconut milk",
            "1 pandan leaf",
            "1 cup anchovies (ikan bilis)",
            "1/2 cup peanuts",
            "Sambal paste",
            "Cucumber slices",
            "Boiled eggs"
        ],
        instructions: [
            "Cook rice with coconut milk, salt, and pandan leaf.",
            "Fry peanuts and anchovies until crispy.",
            "Prepare or heat up spicy sambal.",
            "Serve the fragrant rice with sambal, fried condiments, cucumber, and egg.",
            "Add fried chicken or rendang for a complete meal."
        ]
    },
    {
        id: 18,
        title: "Iffa Chicken",
        category: "Dinner",
        time: "55 min",
        rating: 5.0,
        image: "assets/recipe_iffa_chicken.png",
        video: "https://www.youtube.com/embed/DZtqRaHYsf8",
        description: "Special Non-Veg Iffa Chicken. A spicy, aromatic red gravy chicken dish cooked with secret spices and herbs. A popular choice for feast.",
        ingredients: [
            "1 kg chicken, cut into pieces",
            "2 tbsp ginger-garlic paste",
            "1 cup yogurt",
            "3 tbsp Iffa special spice mix (chili, coriander, cumin, garam masala)",
            "2 onions, fried",
            "2 tomatoes, pureed",
            "Fresh coriander and mint",
            "Oil and Ghee"
        ],
        instructions: [
            "Marinate chicken with yogurt, ginger-garlic paste, and spices for 1 hour.",
            "Heat oil in a heavy bottom pan. Add whole spices.",
            "Add tomato puree and cook until oil separates.",
            "Add the marinated chicken and fry on high heat for 5 minutes.",
            "Lower the flame, cover, and cook until chicken is tender and gravy is thick.",
            "Garnish with fried onions and fresh herbs.",
            "Serve hot with Naan or Rice."
        ]
    },
    {
        id: 19,
        title: "Rajma Chawal",
        categories: ["North Indian", "Lunch", "Curries & Gravies", "Comfort Food", "Vegetarian", "Gluten-Free"],
        time: "45 min",
        rating: 4.8,
        image: "assets/recipe_rajma_chawal.png",
        video: "https://www.youtube.com/embed/asY7cq6j0xE",
        description: "A comfort food classic. Red kidney beans cooked in a spicy onion-tomato gravy, served with steamed rice.",
        ingredients: [
            "1 cup kidney beans (rajma)",
            "2 onions, chopped",
            "2 tomatoes, pureed",
            "1 tbsp ginger-garlic paste",
            "Spices: Cumin, coriander, garam masala",
            "Fresh coriander",
            "Rice for serving"
        ],
        instructions: [
            "Soak rajma overnight and pressure cook until soft.",
            "Sauté onions and ginger-garlic paste until golden.",
            "Add tomato puree and spices. Cook until oil separates.",
            "Add cooked rajma and simmer for 15 minutes.",
            "Mash a few beans to thicken gravy.",
            "Serve hot over steamed rice."
        ]
    },
    {
        id: 20,
        title: "Kadai Paneer",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Spicy", "Vegetarian", "Gluten-Free"],
        time: "35 min",
        rating: 4.7,
        image: "assets/recipe_kadai_paneer_new.png",
        video: "https://www.youtube.com/embed/JadvONTwPbY",
        description: "Spicy and flavorful cottage cheese cooked with bell peppers and freshly ground coriander seeds.",
        ingredients: [
            "250g paneer cubes",
            "1 capsicum, cubed",
            "1 onion, cubed",
            "2 tomatoes, chopped",
            "1 tbsp Kadai masala (coriander seeds, dry chilies)",
            "Ginger julienne",
            "Cream"
        ],
        instructions: [
            "Toast coriander seeds and dry red chilies. Grind coarsely.",
            "Sauté onions and capsicum on high heat. Remove.",
            "Cook tomatoes with ginger-garlic paste and spices.",
            "Add the freshly ground kadai masala.",
            "Toss in paneer and veggies. Mix well.",
            "Garnish with ginger julienne."
        ]
    },
    {
        id: 21,
        title: "Malai Kofta",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Rich", "Vegetarian"],
        time: "50 min",
        rating: 4.9,
        image: "assets/recipe_malai_kofta_new.png",
        video: "https://www.youtube.com/embed/IIGLJKD0t_8",
        description: "Fried potato and paneer dumplings (koftas) in a rich, creamy, and mildly sweet white gravy.",
        ingredients: [
            "Kofta: Boiled potatoes, paneer, cornflour, raisins",
            "Gravy: Cashew paste, onion paste, cream, milk",
            "Cardamom powder",
            "Saffron",
            "Sugar/Honey"
        ],
        instructions: [
            "Mix potato and paneer, stuff with raisins, form balls and fry.",
            "Boil onion and cashew, grind to fine paste.",
            "Cook paste in butter, add spices and milk.",
            "Simmer until thick and creamy.",
            "Pour hot gravy over koftas just before serving."
        ]
    },
    {
        id: 22,
        title: "Shahi Paneer",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Rich", "Vegetarian", "Gluten-Free"],
        time: "40 min",
        rating: 4.8,
        image: "assets/recipe_shahi_paneer_new.png",
        video: "https://www.youtube.com/embed/Y7jdlcU4EfM",
        description: "Royal cottage cheese curry. Paneer cubes in a thick, creamy gravy made of onions, yogurt, and nuts.",
        ingredients: [
            "250g paneer",
            "1/2 cup yogurt",
            "1/4 cup cashew paste",
            "1 onion, pureed",
            "Saffron and cardamom",
            "Cream",
            "Ghee"
        ],
        instructions: [
            "Fry onion paste in ghee until golden.",
            "Add ginger-garlic and tomato puree.",
            "Stir in whisked yogurt and cashew paste.",
            "Add spices and simmer on low heat.",
            "Add paneer and finish with saffron milk/cream."
        ]
    },
    {
        id: 23,
        title: "Chicken Tikka Masala",
        categories: ["North Indian", "Dinner", "Non-Veg Delicacies", "Curries & Gravies", "Main Course", "Gluten-Free"],
        time: "50 min",
        rating: 4.9,
        image: "assets/recipe_chicken_tikka_masala_new.png",
        video: "https://www.youtube.com/embed/n7EmpanX7io",
        description: "Roasted marinated chicken chunks in a spiced curry sauce. A worldwide favorite.",
        ingredients: [
            "Chicken Tikka (grilled)",
            "2 onions, finely chopped",
            "2 tomatoes, pureed",
            "Cream",
            "Garam masala",
            "Dried fenugreek leaves (kasuri methi)"
        ],
        instructions: [
            "Prepare chicken tikka (marinate and grill).",
            "Make gravy with onions, tomatoes, and spices.",
            "Add the grilled chicken pieces to the simmering sauce.",
            "Finish with cream and coriander.",
            "Serve with Naan."
        ]
    },
    {
        id: 24,
        title: "Tandoori Chicken",
        categories: ["North Indian", "Dinner", "Tandoori & Grills", "Non-Veg Delicacies", "Main Course", "Gluten-Free"],
        time: "40 min",
        rating: 5.0,
        image: "assets/recipe_tandoori_chicken_apt.png",
        video: "https://www.youtube.com/embed/A3lcRok1zf8",
        description: "Iconic roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red color.",
        ingredients: [
            "Chicken legs/thighs",
            "Yogurt",
            "Tandoori masala",
            "Red chili powder",
            "Lemon juice",
            "Ginger-garlic paste"
        ],
        instructions: [
            "Make deep cuts on chicken pieces.",
            "Marinate with all ingredients for at least 4 hours.",
            "Roast in a tandoor or oven at 200°C for 25-30 mins.",
            "Baste with butter midway.",
            "Serve with mint chutney and lemon."
        ]
    },
    {
        id: 25,
        title: "Sarson Da Saag",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Main Course", "Seasonal", "Vegetarian", "Gluten-Free"],
        time: "60 min",
        rating: 4.7,
        image: "assets/recipe_sarson_da_saag_apt.jpg",
        video: "https://www.youtube.com/embed/hI-in8nsU_Q",
        description: "Traditional Punjabi winter dish made from mustard greens and spices.",
        ingredients: [
            "Mustard greens (sarson)",
            "Spinach (palak)",
            "Maize flour (makki atta)",
            "Ginger, garlic, green chilies",
            "Ghee"
        ],
        instructions: [
            "Cook greens until soft, then blend coarsely.",
            "Cook with maize flour to thicken.",
            "Temper with ghee, garlic, and red chilies.",
            "Serve hot with a dollop of white butter."
        ]
    },
    {
        id: 26,
        title: "Makki Di Roti",
        categories: ["North Indian", "Lunch", "Indian Breads", "Main Course", "Gluten-Free", "Vegetarian"],
        time: "30 min",
        rating: 4.6,
        image: "assets/recipe_makki_di_roti_apt.jpg",
        video: "https://www.youtube.com/embed/So3ji_IVHvs",
        description: "Rustic cornmeal flatbread, best enjoyed with Sarson Da Saag.",
        ingredients: [
            "2 cups Maize flour (makki atta)",
            "Warm water",
            "Salt",
            "Carom seeds (ajwain)",
            "Ghee"
        ],
        instructions: [
            "Knead flour with warm water into a soft dough.",
            "Pat between palms to form a thick disc.",
            "Cook on a tawa with ghee until brown spots appear.",
            "Top with white butter."
        ]
    },
    {
        id: 27,
        title: "Dum Aloo",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Spicy", "Vegetarian", "Gluten-Free"],
        time: "45 min",
        rating: 4.7,
        image: "assets/recipe_dum_aloo_apt.jpg",
        video: "https://www.youtube.com/embed/ZBwB53EvrRo",
        description: "Baby potatoes cooked in a spicy yogurt-based gravy under slow steam (dum).",
        ingredients: [
            "Baby potatoes, boiled and fried",
            "Yogurt",
            "Fennel powder",
            "Ginger powder",
            "Kashmiri chili powder"
        ],
        instructions: [
            "Prick potatoes and fry until golden.",
            "Whisk yogurt with spices.",
            "Heat oil, add cumin, then the yogurt mixture.",
            "Cook until oil separates, add potatoes and water.",
            "Cover and cook on low heat for 15 mins."
        ]
    },
    {
        id: 28,
        title: "Bhindi Masala",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Main Course", "Dry Veg", "Vegetarian", "Gluten-Free"],
        time: "25 min",
        rating: 4.5,
        image: "assets/recipe_bhindi_masala_apt.jpg",
        video: "https://www.youtube.com/embed/hAGdUqKiPCE",
        description: "Stir-fried okra with onions and tomatoes, spiced with mango powder.",
        ingredients: [
            "500g Bhindi (okra), chopped",
            "2 onions, sliced",
            "1 tomato, chopped",
            "Amchur (mango powder)",
            "Turmeric, chili powder"
        ],
        instructions: [
            "Sauté onions until soft.",
            "Add bhindi and cook on medium flame (do not cover to avoid slime).",
            "Add spices and tomatoes halfway through.",
            "Cook until tender and dry."
        ]
    },
    {
        id: 29,
        title: "Jeera Aloo",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Main Course", "Dry Veg", "Vegetarian", "Gluten-Free"],
        time: "20 min",
        rating: 4.4,
        image: "assets/recipe_jeera_aloo_apt.jpg",
        video: "https://www.youtube.com/embed/E_NJm7-Lcdk",
        description: "Simple and delicious potatoes tossed with cumin seeds and spices.",
        ingredients: [
            "4 potatoes, boiled and cubed",
            "1 tbsp Cumin seeds",
            "Green chilies",
            "Turmeric, chili powder",
            "Coriander leaves"
        ],
        instructions: [
            "Heat oil, crackle cumin seeds.",
            "Add chilies and spices.",
            "Toss in potatoes and coat well.",
            "Roast for 5-7 minutes until crispy edges form.",
            "Garnish with coriander."
        ]
    },
    {
        id: 30,
        title: "Mutter Paneer",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Vegetarian", "Gluten-Free"],
        time: "35 min",
        rating: 4.8,
        image: "assets/recipe_mutter_paneer_apt.jpg",
        video: "https://www.youtube.com/embed/VyUSHuzyL4g",
        description: "A popular vegetarian dish consisting of peas and paneer in a tomato based sauce.",
        ingredients: [
            "Paneer cubes",
            "Green peas",
            "Tomato puree",
            "Onion paste",
            "Garam masala",
            "Cream"
        ],
        instructions: [
            "Fry paneer cubes lightly (optional).",
            "Cook onion and tomato paste with spices.",
            "Add peas and water, simmer until peas are cooked.",
            "Add paneer and garam masala.",
            "Simmer for 5 mins and serve."
        ]
    },
    {
        id: 31,
        title: "Dal Tadka",
        categories: ["North Indian", "Dinner", "Dal & Lentils", "Main Course", "Comfort Food", "Vegetarian", "Gluten-Free"],
        time: "30 min",
        rating: 4.8,
        image: "assets/recipe_dal_tadka_apt.jpg",
        video: "https://www.youtube.com/embed/8c_scYUN5uc",
        description: "Yellow lentils tempered with ghee, garlic, and dried red chilies.",
        ingredients: [
            "1 cup Toor dal (pigeon peas)",
            "Onion, tomato, green chili",
            "Ghee",
            "Garlic, cumin, muster seeds",
            "Dried red chilies"
        ],
        instructions: [
            "Pressure cook dal with turmeric and salt.",
            "Heat ghee in a pan. Add cumin, mustard, garlic, and chilies.",
            "Add onions and tomatoes, sauté.",
            "Pour tadka over the boiled dal.",
            "Garnish with coriander."
        ]
    },
    {
        id: 32,
        title: "Amritsari Kulcha",
        categories: ["North Indian", "Lunch", "Indian Breads", "Street Food", "Vegetarian"],
        time: "60 min",
        rating: 4.9,
        image: "assets/recipe_amritsari_kulcha_apt.jpg",
        video: "https://www.youtube.com/embed/bNCMNsHKz3A",
        description: "Stuffed flatbread from Amritsar, baked in a tandoor, usually served with chole.",
        ingredients: [
            "Maida (flour)",
            "Potatoes (boiled)",
            "Anardana (pomegranate seeds)",
            "Coriander seeds",
            "Butter"
        ],
        instructions: [
            "Make a soft dough with flour.",
            "Prepare spicy potato stuffing.",
            "Stuff dough balls, roll out gently.",
            "Bake in tandoor or on tawa until crisp.",
            "Crush with hands and top with butter."
        ]
    },
    {
        id: 33,
        title: "Aloo Paratha",
        categories: ["North Indian", "Breakfast", "Indian Breads", "Main Course", "Comfort Food", "Vegetarian"],
        time: "30 min",
        rating: 4.9,
        image: "assets/recipe_aloo_paratha_apt.jpg",
        video: "https://www.youtube.com/embed/Q5bc18KbTzs",
        description: "Whole wheat flatbread stuffed with a spiced potato mixture.",
        ingredients: [
            "Whole wheat flour dough",
            "Boiled potatoes",
            "Green chilies, coriander",
            "Ajwain, amchur, garam masala",
            "Butter/Ghee"
        ],
        instructions: [
            "Mash potatoes with spices.",
            "Encapsulate stuffing in dough ball.",
            "Roll out carefully.",
            "Roast on tawa with ghee until golden brown.",
            "Serve with curd and pickle."
        ]
    },
    {
        id: 34,
        title: "Vegetable Pulao",
        categories: ["North Indian", "Lunch", "Rice & Biryani", "Main Course", "Vegetarian", "Gluten-Free"],
        time: "40 min",
        rating: 4.6,
        image: "assets/recipe_veg_pulao_apt.jpg",
        video: "https://www.youtube.com/embed/wcZEdbd6NH4",
        description: "Fragrant rice dish cooked with mixed vegetables and whole spices.",
        ingredients: [
            "Basmati rice",
            "Carrots, peas, beans",
            "Whole spices (bay leaf, cloves)",
            "Ghee",
            "Cashews (optional)"
        ],
        instructions: [
            "Sauté spices and veggies in ghee.",
            "Add soaked rice and water (1:2 ratio).",
            "Cover and cook until rice is fluffy.",
            "Fluff with a fork and serve."
        ]
    },
    {
        id: 35,
        title: "Jeera Rice",
        categories: ["North Indian", "Lunch", "Rice & Biryani", "Main Course", "Vegetarian", "Gluten-Free"],
        time: "20 min",
        rating: 4.5,
        image: "assets/recipe_jeera_rice_apt.jpg",
        video: "https://www.youtube.com/embed/zvn17Jgk6mE",
        description: "Basmati rice flavored with cumin seeds.",
        ingredients: [
            "1 cup Basmati rice",
            "1 tbsp Cumin seeds (jeera)",
            "Ghee",
            "Salt"
        ],
        instructions: [
            "Cook rice and set aside.",
            "Heat ghee, sizzle cumin seeds.",
            "Toss cooked rice gently with the cumin.",
            "Serve as a side to curries."
        ]
    },
    {
        id: 36,
        title: "Gajar Ka Halwa",
        categories: ["North Indian", "Desserts", "Sweet", "Vegetarian", "Gluten-Free"],
        time: "60 min",
        rating: 5.0,
        image: "assets/recipe_gajar_halwa_apt.jpg",
        video: "https://www.youtube.com/embed/OXD_8ObOkSs",
        description: "Traditional carrot pudding made with fresh carrots, milk, sugar, and nuts.",
        ingredients: [
            "1 kg red carrots, grated",
            "1 liter milk",
            "Sugar",
            "Ghee",
            "Cardamom, nuts"
        ],
        instructions: [
            "Simmer carrots in milk until milk evaporates.",
            "Add sugar and cook until thick.",
            "Roast in ghee for richness.",
            "Garnish with almonds and pistachios."
        ]
    },
    {
        id: 37,
        title: "Gulab Jamun",
        categories: ["North Indian", "Desserts", "Sweet", "Vegetarian"],
        time: "45 min",
        rating: 5.0,
        image: "assets/recipe_gulab_jamun_apt.jpg",
        video: "https://www.youtube.com/embed/7uCqAtSVJU4",
        description: "Soft berry-sized balls made of milk solids, soaked in rose flavored sugar syrup.",
        ingredients: [
            "Khoya (milk solids) or milk powder",
            "Flour",
            "Sugar syrup with rose water",
            "Oil for frying"
        ],
        instructions: [
            "Knead khoya and flour into soft dough.",
            "Form small smooth balls.",
            "Deep fry on low heat until dark brown.",
            "Soak in warm sugar syrup for 2 hours."
        ]
    },
    {
        id: 38,
        title: "Rice Kheer",
        categories: ["North Indian", "Desserts", "Sweet", "Vegetarian", "Gluten-Free"],
        time: "45 min",
        rating: 4.8,
        image: "assets/recipe_rice_kheer_apt.jpg",
        video: "https://www.youtube.com/embed/4OgBldTs0us",
        description: "Creamy rice pudding flavored with cardamom and saffron.",
        ingredients: [
            "1 liter Full cream milk",
            "1/4 cup Rice, soaked",
            "Sugar",
            "Nuts and raisins"
        ],
        instructions: [
            "Boil milk and add rice.",
            "Simmer stirring occasionally until rice is soft and milk thickens.",
            "Add sugar and cook for 5 more mins.",
            "Garnish with nuts and serve chilled or warm."
        ]
    },
    {
        id: 39,
        title: "Chicken Korma",
        categories: ["North Indian", "Dinner", "Non-Veg Delicacies", "Curries & Gravies", "Main Course", "Rich", "Gluten-Free"],
        time: "50 min",
        rating: 4.8,
        image: "assets/recipe_chicken_korma_apt.jpg",
        video: "https://www.youtube.com/embed/JbwGvXnR0UU",
        description: "Mild and creamy chicken curry cooked with yogurt, cream, and nut paste.",
        ingredients: [
            "Chicken",
            "Yogurt",
            "Almond/Cashew paste",
            "Onions (fried paste)",
            "Whole spices"
        ],
        instructions: [
            "Sauté whole spices.",
            "Add chicken and sear.",
            "Add yogurt and nut paste, cook on low heat.",
            "Add fried onion paste for thickness.",
            "Simmer until chicken is tender."
        ]
    },
    {
        id: 40,
        title: "Pindi Chole",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Main Course", "Spicy", "Vegetarian", "Gluten-Free"],
        time: "60 min",
        rating: 4.9,
        image: "assets/recipe_pindi_chole_apt.jpg",
        video: "https://www.youtube.com/embed/0b3UzQLztRk",
        description: "Spicy chickpea dry curry from Rawalpindi, dark in color and rich in flavor.",
        ingredients: [
            "Chickpeas",
            "Tea bag (for color)",
            "Anardana powder",
            "Chole masala",
            "Ginger julienne"
        ],
        instructions: [
            "Boil chickpeas with tea bag.",
            "Heat oil, add spices directly to oil.",
            "Add chickpeas and toss well.",
            "Cook until moisture evaporates and masala coats the beans.",
            "Serve with Bhature or Kulcha."
        ]
    },
    {
        id: 41,
        title: "Baingan Bharta",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Dry Veg", "Vegetarian", "Gluten-Free"],
        time: "40 min",
        rating: 4.7,
        image: "assets/recipe_baingan_bharta_apt.jpg",
        video: "https://www.youtube.com/embed/U-Km4u20cI8",
        description: "Smoky mashed eggplant dish cooked with onions, tomatoes and spices.",
        ingredients: [
            "Large eggplant (bharta baingan)",
            "Onion, tomato, garlic",
            "Coriander leaves",
            "Oil"
        ],
        instructions: [
            "Roast eggplant on open flame until charred.",
            "Peel skin and mash flesh.",
            "Sauté onion, garlic, tomatoes.",
            "Add mashed eggplant and cook for 10 mins.",
            "Garnish with coriander."
        ]
    },
    {
        id: 42,
        title: "Methi Malai Matar",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Rich", "Vegetarian", "Gluten-Free"],
        time: "35 min",
        rating: 4.8,
        image: "assets/recipe_methi_malai_matar_apt.jpg",
        video: "https://www.youtube.com/embed/NdrOTENRabA",
        description: "Creamy curry made with fresh fenugreek leaves (methi), peas, and cream.",
        ingredients: [
            "Fresh methi leaves",
            "Green peas",
            "Cream",
            "Onion-cashew paste",
            "Garam masala"
        ],
        instructions: [
            "Sauté methi leaves to reduce bitterness.",
            "Prepare white gravy with onion-cashew paste.",
            "Add peas and cooked methi.",
            "Simmer with milk/cream.",
            "Serve sweet and creamy."
        ]
    },
    {
        id: 43,
        title: "Paneer Bhurji",
        categories: ["North Indian", "Breakfast", "Vegetarian Curries", "Main Course", "Dry Veg", "Vegetarian", "Gluten-Free"],
        time: "20 min",
        rating: 4.7,
        image: "assets/recipe_paneer_bhurji_apt.jpg",
        video: "https://www.youtube.com/embed/KgW--wj5iBM",
        description: "Scrambled cottage cheese cooked with onions, tomatoes and spices.",
        ingredients: [
            "Crumbled paneer",
            "Onions, chopped",
            "Tomatoes, chopped",
            "Green chilies",
            "Turmeric, Pav Bhaji masala (optional)"
        ],
        instructions: [
            "Sauté onions and chilies.",
            "Add tomatoes and cook until soft.",
            "Add spices.",
            "Toss in crumbled paneer and mix quickly.",
            "Serve hot with paratha or bread."
        ]
    },
    {
        id: 44,
        title: "Idli Sambar",
        categories: ["South Indian", "Breakfast", "Vegetarian", "Healthy", "Gluten-Free"],
        time: "30 min",
        rating: 4.9,
        image: "assets/recipe_idli_sambar.png",
        video: "https://www.youtube.com/embed/_QLLo1b5Zcw",
        description: "Soft steamed rice cakes served with spicy lentil soup (sambar) and coconut chutney.",
        ingredients: [
            "Idli batter (fermented)",
            "Toor dal",
            "Mixed vegetables (drumstick, carrot)",
            "Sambar powder",
            "Tamarind extract"
        ],
        instructions: [
            "Steam idli batter in molds.",
            "Cook dal and vegetables separately.",
            "Mix dal, veggies, tamarind, and spice powder.",
            "Simmer sambar and temper with mustard seeds.",
            "Serve moist idlis with hot sambar."
        ]
    },
    {
        id: 45,
        title: "Medu Vada",
        categories: ["South Indian", "Breakfast", "Snack", "Vegetarian", "Fried Snacks", "Gluten-Free"],
        time: "40 min",
        rating: 4.8,
        image: "assets/recipe_medu_vada.png",
        video: "https://www.youtube.com/embed/Zjm9fQBBHiM",
        description: "Crispy, donut-shaped lentil fritters, fluffy on the inside and crunchy on the outside.",
        ingredients: [
            "Urad dal (soaked and ground)",
            "Black peppercorns",
            "Green chilies",
            "Curry leaves",
            "Oil for frying"
        ],
        instructions: [
            "Grind soaked dal to a fluffy batter.",
            "Mix in spices and herbs.",
            "Shape into donuts with wet hands.",
            "Deep fry in hot oil until golden crisp.",
            "Serve with coconut chutney."
        ]
    },
    {
        id: 46,
        title: "Appam with Stew",
        categories: ["South Indian", "Dinner", "Vegetarian", "Kerala", "Gluten-Free"],
        time: "45 min",
        rating: 4.9,
        image: "assets/recipe_appam_stew.png",
        video: "https://www.youtube.com/embed/V40jJdhPp2I",
        description: "Lacy fermented rice pancakes served with a mild, aromatic coconut milk vegetable stew.",
        ingredients: [
            "Appam batter (rice & coconut milk)",
            "Mixed vegetables",
            "Thick coconut milk",
            "Whole spices",
            "Ginger & green chilies"
        ],
        instructions: [
            "Pour batter in appam chatty, swirl to form lace edges.",
            "Cover and cook until center is fluffy.",
            "Cook veggies with spices and thin coconut milk.",
            "Finish stew with thick coconut milk.",
            "Serve hot appams with creamy stew."
        ]
    },
    {
        id: 47,
        title: "Puttu & Kadala Curry",
        categories: ["South Indian", "Breakfast", "Kerala", "Vegetarian", "Healthy"],
        time: "50 min",
        rating: 4.8,
        image: "assets/recipe_puttu_kadala.png",
        video: "https://www.youtube.com/embed/835wrI5L26E",
        description: "Steamed rice cake cylinders layered with coconut, paired with spicy black chickpea curry.",
        ingredients: [
            "Rice flour (roasted)",
            "Grated coconut",
            "Black chickpeas (soaked)",
            "Roasted coconut paste",
            "Spices"
        ],
        instructions: [
            "Mix rice flour with water until crumbly.",
            "Layer flour and coconut in puttu maker and steam.",
            "Cook chickpeas with spices and coconut paste.",
            "Serve the steamed puttu with hot curry."
        ]
    },
    {
        id: 48,
        title: "Chettinad Chicken",
        categories: ["South Indian", "Dinner", "Non-Veg Delicacies", "Spicy", "Main Course"],
        time: "55 min",
        rating: 5.0,
        image: "assets/recipe_chicken_chettinad.png",
        video: "https://www.youtube.com/embed/K2miSXNP_nI",
        description: "Fiery aromatic chicken curry from the Chettinad region, made with fresh ground spices.",
        ingredients: [
            "Chicken pieces",
            "Freshly grated coconut",
            "Dried red chilies",
            "Black peppercorns",
            "Fennel seeds",
            "Curry leaves"
        ],
        instructions: [
            "Roast spices and coconut, grind to a paste.",
            "Sauté onions and curry leaves.",
            "Add chicken and roast until browned.",
            "Add the ground paste and water.",
            "Simmer until chicken is tender and oil floats."
        ]
    },
    {
        id: 49,
        title: "Ven Pongal",
        categories: ["South Indian", "Breakfast", "Vegetarian", "Comfort Food", "Gluten-Free"],
        time: "30 min",
        rating: 4.8,
        image: "assets/recipe_ven_pongal.png",
        video: "https://www.youtube.com/embed/GLSSQn4P8rg",
        description: "Savory porridge made of rice and moong dal, tempered with ghee, pepper, and cashews.",
        ingredients: [
            "Rice and Moong Dal",
            "Ghee (clarified butter)",
            "Black peppercorns",
            "Cumin seeds",
            "Cashew nuts",
            "Ginger"
        ],
        instructions: [
            "Pressure cook rice and dal until mushy.",
            "Heat generous amount of ghee.",
            "Fry cashews, pepper, cumin, and ginger.",
            "Pour tempering over the cooked rice/dal.",
            "Mix well and serve with chutney."
        ]
    },
    {
        id: 50,
        title: "Curd Rice",
        categories: ["South Indian", "Lunch", "Vegetarian", "Comfort Food"],
        time: "15 min",
        rating: 4.9,
        image: "assets/recipe_curd_rice.png",
        video: "https://www.youtube.com/embed/8wm3Hfjvx3E",
        description: "Cooling dish of soft mashed rice mixed with yogurt and tempered with spices.",
        ingredients: [
            "Cooked rice (mashed)",
            "Fresh yogurt (curd)",
            "Milk",
            "Mustard seeds",
            "Pomegranate seeds",
            "Coriander"
        ],
        instructions: [
            "Mix mashed rice with yogurt and milk.",
            "Heat oil, crackle mustard seeds and curry leaves.",
            "Pour over the curd rice.",
            "Garnish with pomegranate and coriander.",
            "Serve chilled with pickle."
        ]
    },
    {
        id: 51,
        title: "Bisibelebath",
        categories: ["South Indian", "Lunch", "Vegetarian", "Main Course", "Spicy"],
        time: "45 min",
        rating: 4.8,
        image: "assets/recipe_bisibelebath.png",
        video: "https://www.youtube.com/embed/ChCbRH8lBQE",
        description: "Spicy, tangy, and flavorful lentil-rice dish loaded with vegetables and aromatic spices.",
        ingredients: [
            "Rice and Toor Dal",
            "Bisi Bele Bath powder",
            "Tamarind pulp",
            "Mixed vegetables",
            "Ghee",
            "Cashews"
        ],
        instructions: [
            "Cook rice and dal together.",
            "Boil veggies in tamarind water with spice powder.",
            "Mix rice/dal with the spicy vegetable stew.",
            "Simmer with ghee.",
            "Garnish with fried cashews and boondi."
        ]
    },
    {
        id: 52,
        title: "Mysore Pak",
        categories: ["South Indian", "Desserts", "Sweet", "Vegetarian", "Gluten-Free"],
        time: "40 min",
        rating: 4.9,
        image: "assets/recipe_mysore_pak.png",
        video: "https://www.youtube.com/embed/jkoGehGWw08",
        description: "Rich and melt-in-the-mouth sweet made from gram flour, generous amounts of ghee, and sugar.",
        ingredients: [
            "Besan (Gram flour)",
            "Sugar syrup",
            "Ghee (lots of it)",
            "Oil"
        ],
        instructions: [
            "Roast besan in ghee.",
            "Prepare single-string sugar syrup.",
            "Add besan mixture and cook stirring continuously.",
            "Add hot ghee in batches until porous texture forms.",
            "Set in a tray and cut into squares."
        ]
    },
    {
        id: 53,
        title: "Malabar Parotta & Kurma",
        categories: ["South Indian", "Dinner", "Main Course", "Vegetarian"],
        time: "60 min",
        rating: 5.0,
        image: "assets/recipe_malabar_parotta_kurma_user.jpg",
        video: "https://www.youtube.com/embed/BD7wsI61lHQ",
        description: "Flaky, layered flatbread from Kerala served with a rich and spicy mixed vegetable coconut curry.",
        ingredients: [
            "Maida (All-purpose flour)",
            "Vegetables for Kurma",
            "Coconut paste",
            "Spices (fennel, cinnamon)",
            "Oil for layering"
        ],
        instructions: [
            "Knead soft dough, rest, roll thin, pleat and coil.",
            "Cook parotta on tawa with oil, crush to release layers.",
            "For Kurma: Sauté spices, onions, veggies.",
            "Add coconut paste and simmer.",
            "Serve hot flaky parotta with kurma."
        ]
    },
    {
        id: 54,
        title: "Mumbai Vada Pav",
        categories: ["West Indian", "Snack", "Street Food", "Vegetarian", "Spicy"],
        time: "30 min",
        rating: 4.9,
        image: "assets/recipe_vada_pav_special.jpg",
        video: "https://www.youtube.com/embed/r4saZD0J_gU",
        description: "The Indian Burger! Spicy deep-fried potato dumpling placed inside a bread bun (pav) with chutneys and fried chili.",
        ingredients: [
            "4 Potatoes, boiled and mashed",
            "6 Pav buns",
            "Green Chilies, Ginger, Garlic paste",
            "Mustard seeds, Curry leaves",
            "Besan (Gram flour) batter",
            "Sweet and Spicy Chutneys",
            "Fried green chilies for garnish"
        ],
        instructions: [
            "Sauté mustard seeds, curry leaves, and chili-ginger-garlic paste.",
            "Mix with mashed potatoes, turmeric, and salt. Shape into balls.",
            "Dip balls in thick besan batter and deep fry until golden.",
            "Slather chutneys inside the pav.",
            "Place the hot vada inside and serve with fried chili."
        ]
    },
    {
        id: 55,
        title: "Pav Bhaji",
        categories: ["West Indian", "Dinner", "Street Food", "Vegetarian", "Spicy"],
        time: "40 min",
        rating: 4.9,
        image: "assets/recipe_pav_bhaji_special.jpg",
        video: "https://www.youtube.com/embed/dz6eh3U5zEM",
        description: "A spicy mashed vegetable curry served with buttery toasted soft bread rolls. A Mumbai street food classic.",
        ingredients: [
            "Mixed vegetables (potatoes, cauliflower, peas, carrots)",
            "4 Onions, chopped",
            "4 Tomatoes, chopped",
            "2 tbsp Pav Bhaji Masala",
            "Butter (lots of it)",
            "Pav buns",
            "Lemon and coriander"
        ],
        instructions: [
            "Boil and mash all vegetables.",
            "Sauté onions, ginger-garlic paste, and tomatoes in butter.",
            "Add Pav Bhaji masala and chili powder. Cook well.",
            "Add mashed veggies and water. Simmer and mash further.",
            "Toast pav in butter.",
            "Serve bhaji topped with a dollop of butter, onions, and lemon."
        ]
    },
    {
        id: 56,
        title: "Spicy Misal Pav",
        categories: ["West Indian", "Breakfast", "Spicy", "Street Food", "Vegetarian"],
        time: "45 min",
        rating: 4.8,
        image: "assets/recipe_misal_pav.png",
        video: "https://www.youtube.com/embed/kaJzwCD8uvY",
        description: "A spicy sprout curry topped with farsan (crispy mix), onions, and lemon, served with pav bread.",
        ingredients: [
            "2 cups Sprouted Matki (Moth beans)",
            "Misal Masala (Godaa Masala)",
            "Onions and Tomatoes",
            "Farsan/Sev for topping",
            "Pav buns",
            "Lemon juice",
            "Oil and Mustard seeds"
        ],
        instructions: [
            "Cook sprouts with turmeric and salt.",
            "Prepare spicy gravy (kat/rassa) with onions, coconut, tomatoes, and masala.",
            "Mix sprouts into the gravy and simmer.",
            "To serve: Pour ladle of sprouts and gravy in a bowl.",
            "Top generously with farsan and chopped onions.",
            "Serve hot with pav and lemon wedge."
        ]
    },
    {
        id: 57,
        title: "Parsi Mutton Dhansak",
        categories: ["West Indian", "Dinner", "Non-Veg Delicacies", "Curries", "Parsi"],
        time: "1 hr 30 min",
        rating: 4.9,
        image: "assets/recipe_dhansak_special.jpg",
        video: "https://www.youtube.com/embed/5-pJOvg3X8Q",
        description: "A rich and tangy Parsi meat and lentil stew served with caramelized brown rice.",
        ingredients: [
            "500g Mutton",
            "Mixed Lentils (Toor Dal, Masoor Dal)",
            "Vegetables (Pumpkin, Eggplant)",
            "Dhansak Masala",
            "Tamarind pulp",
            "Fresh Methi (Fenugreek leaves)"
        ],
        instructions: [
            "Boil lentils and vegetables with mutton until tender.",
            "Sauté spices and Dhansak masala in oil.",
            "Add the cooked dal-mutton mixture and mash the veggies slightly.",
            "Add tamarind juice for tanginess.",
            "Serve with caramelized brown rice and kachumber salad."
        ]
    },
    {
        id: 58,
        title: "Goan Fish Curry",
        categories: ["West Indian", "Dinner", "Non-Veg Delicacies", "Seafood", "Goan", "Gluten-Free"],
        time: "30 min",
        rating: 4.9,
        image: "assets/recipe_goan_fish_curry_special.jpg",
        video: "https://www.youtube.com/embed/xDr7KQ8FgPs",
        description: "Tangy and spicy fish curry made with coconut milk and kokum, a staple of Goa.",
        ingredients: [
            "500g Kingfish or Pomfret slices",
            "1 cup Fresh Coconut, grated",
            "6 Kashmiri Red Chilies",
            "1 tbsp Coriander seeds",
            "Kokum petals",
            "Green chilies",
            "Turmeric and Salt"
        ],
        instructions: [
            "Grind coconut, red chilies, and coriander seeds to a fine paste.",
            "Boil the paste with water, green chilies, and turmeric.",
            "Add fish slices and kokum.",
            "Simmer for 5-7 minutes until fish is cooked (do not overcook).",
            "Serve steaming hot with boiled rice."
        ]
    },
    {
        id: 59,
        title: "Maharashtrian Puran Poli",
        categories: ["West Indian", "Dessert", "Sweet", "Vegetarian", "Festive"],
        time: "1 hr",
        rating: 4.8,
        image: "assets/recipe_puran_poli_special.jpg",
        video: "https://www.youtube.com/embed/4z4vXDqjZtw",
        description: "Traditional sweet flatbread stuffed with a sweet lentil filling, enjoyed with ghee.",
        ingredients: [
            "1 cup Chana Dal (Split chickpea)",
            "1 cup Jaggery",
            "Cardamom and Nutmeg powder",
            "Maida/Wheat flour dough",
            "Ghee"
        ],
        instructions: [
            "Cook Chana dal until soft, drain excess water.",
            "Cook dal with jaggery until thick (Puran). Flavor with cardamom.",
            "Make dough, place a ball of Puran inside, and seal.",
            "Roll gently into thin rotis.",
            "Roast on a tawa with ghee until golden spots appear."
        ]
    },
    {
        id: 60,
        title: "Gujarati Khandvi",
        categories: ["West Indian", "Snack", "Vegetarian", "Gluten-Free", "Light"],
        time: "30 min",
        rating: 4.7,
        image: "assets/recipe_khandvi_special.jpg",
        video: "https://www.youtube.com/embed/7iDHxXBmYII",
        description: "Soft, melt-in-the-mouth rolls made from gram flour and yogurt batter, tempered with mustard seeds.",
        ingredients: [
            "1 cup Besan (Gram flour)",
            "1 cup Yogurt + 2 cups Water",
            "Turmeric and Ginger-Green chili paste",
            "Mustard seeds and Sesame seeds for tempering",
            "Coriander and Coconut for garnish"
        ],
        instructions: [
            "Mix besan, yogurt, water, and spices to a smooth batter.",
            "Cook mixture on low heat, stirring constantly until thick.",
            "Spread hot batter thinly on a greased surface immediately.",
            "Cut into strips and roll them up tightly.",
            "Pour tempering of mustard and sesame seeds over rolls.",
            "Garnish with coriander and coconut."
        ]
    },
    {
        id: 61,
        title: "Surti Undhiyu",
        categories: ["West Indian", "Dinner", "Vegetarian", "Winter Special", "Gujarati"],
        time: "1 hr 15 min",
        rating: 5.0,
        image: "assets/recipe_undhiyu_special.jpg",
        video: "https://www.youtube.com/embed/76WP69qtDi8",
        description: "A classic Gujarati mixed vegetable dish cooked with fenugreek dumplings (muthiya) and aromatic spices.",
        ingredients: [
            "Mixed veggies: Papdi, Purple Yam, Sweet Potato, Baby Brinjal",
            "Methi Muthiya (Fenugreek dumplings)",
            "Green Garlic and Tuvar Lilva",
            "Coconut-Coriander masala paste",
            "Oil and Carom seeds (Ajwain)"
        ],
        instructions: [
            "Stuff brinjals and potatoes with green masala.",
            "Layer vegetables in a heavy pot or pressure cooker.",
            "Add muthiya and oil.",
            "Cook on slow flame until all vegetables are tender.",
            "Serve hot with Puri and Shrikhand."
        ]
    },
    {
        id: 62,
        title: "Methi Thepla",
        categories: ["West Indian", "Breakfast", "Vegetarian", "Gujarati", "Travel Food"],
        time: "20 min",
        rating: 4.8,
        image: "assets/recipe_thepla_special.jpg",
        video: "https://www.youtube.com/embed/l-6wWsZoFpE",
        description: "Flavorful and soft Indian flatbread made with whole wheat flour, fresh fenugreek leaves, and spices.",
        ingredients: [
            "2 cups Wheat flour",
            "1 cup Fresh Methi leaves, chopped",
            "2 tbsp Yogurt",
            "Red chili powder, Turmeric, Cumin",
            "Sesame seeds",
            "Oil for kneading and roasting"
        ],
        instructions: [
            "Mix flour, chopped methi, spices, yogurt, and oil.",
            "Knead into a soft dough adding little water.",
            "Roll into thin circles.",
            "Roast on a hot tawa with a little oil until brown spots appear.",
            "Serve with pickles and yogurt."
        ]
    },
    {
        id: 63,
        title: "Goan Chicken Xacuti",
        categories: ["West Indian", "Dinner", "Non-Veg Delicacies", "Goan", "Spicy"],
        time: "50 min",
        rating: 4.9,
        image: "assets/recipe_chicken_xacuti_special.jpg",
        video: "https://www.youtube.com/embed/rDNnZtSUj8M",
        description: "A complex and fiery Goan chicken curry made with roasted spices and fresh coconut.",
        ingredients: [
            "1 kg Chicken, curry cut",
            "1 cup Fresh Coconut, grated and roasted",
            "Kashmiri Red Chilies (8-10)",
            "Whole Spices (Cloves, Cinnamon, Star Anise)",
            "Poppy seeds and Tamarind",
            "Onions and Nutmeg"
        ],
        instructions: [
            "Roast coconut and spices until fragrant and dark brown.",
            "Grind to a smooth Xacuti paste.",
            "Sauté onions, then add chicken and sear.",
            "Add the Xacuti masala paste and water.",
            "Simmer until chicken is tender.",
            "Finish with a pinch of nutmeg powder."
        ]
    },

    // ── I. North Indian Classics ──────────────────────────────────────────────
    {
        id: 64,
        title: "Amritsari Kulcha (Stuffed)",
        categories: ["North Indian", "Lunch", "Indian Breads", "Street Food", "Vegetarian"],
        time: "75 min",
        rating: 4.9,
        image: "assets/recipe_amritsari_kulcha_apt.jpg",
        video: "https://www.youtube.com/embed/bNCMNsHKz3A",
        description: "A crisp, multi-layered leavened bread stuffed with spiced mashed potatoes and pomegranate seeds — the pride of Amritsar.",
        ingredients: [
            "2 cups Maida (all-purpose flour)",
            "1 tsp instant yeast",
            "1 tsp sugar",
            "1/2 cup warm milk",
            "2 tbsp oil",
            "Salt to taste",
            "For stuffing: 3 boiled potatoes, mashed",
            "2 tbsp anardana (pomegranate seeds)",
            "1 tsp coriander powder",
            "1 tsp chaat masala",
            "2 green chilies, chopped",
            "Fresh coriander leaves",
            "Butter for topping"
        ],
        instructions: [
            "Dissolve yeast and sugar in warm milk. Let sit for 10 minutes until frothy.",
            "Mix flour, salt, oil, and yeast mixture into a soft dough. Knead well and rest for 1 hour.",
            "Prepare stuffing: mix mashed potatoes with anardana, coriander powder, chaat masala, green chilies, and coriander.",
            "Divide dough into balls. Flatten each, place a spoonful of stuffing in the center.",
            "Seal and roll gently into a thick disc.",
            "Cook on a very hot tawa (or bake at 230°C) until puffed and crisp with char spots.",
            "Slather generously with white butter and crush lightly before serving.",
            "Serve warm with chole or pickled onions."
        ]
    },
    {
        id: 65,
        title: "Dal Makhani (36-Hour Style)",
        categories: ["North Indian", "Dinner", "Dal & Lentils", "Main Course", "Vegetarian", "Gluten-Free"],
        time: "36 hrs",
        rating: 5.0,
        image: "assets/recipe_dal_makhani.png",
        video: "https://www.youtube.com/embed/dOiwccflDkY",
        description: "Slow-cooked black lentils with white butter and cream, finished with a charcoal smoke (dhungar) — the restaurant-style 36-hour rendition.",
        ingredients: [
            "1 cup whole black urad dal, soaked overnight",
            "1/4 cup kidney beans (rajma), soaked overnight",
            "6 tbsp white butter",
            "1/2 cup fresh cream",
            "1 tbsp ginger-garlic paste",
            "1 cup tomato puree",
            "1 tsp Kashmiri red chili powder",
            "1 tsp garam masala",
            "For dhungar: 1 piece charcoal, ghee",
            "Salt to taste"
        ],
        instructions: [
            "Pressure cook soaked dal and rajma with salt and water until very soft (8-10 whistles).",
            "Mash dal lightly with the back of a ladle.",
            "Heat white butter in a heavy pot. Add ginger-garlic paste and sauté until golden.",
            "Add tomato puree, chili powder, and cook until oil separates (15-20 minutes).",
            "Add the mashed dal. Simmer on the lowest flame, stirring occasionally for several hours — ideally overnight.",
            "For dhungar: heat a piece of charcoal until red-hot. Place in a small bowl in the dal pot. Pour ghee on it, cover immediately for 5 minutes to smoke.",
            "Remove charcoal, stir in cream and finish with more white butter.",
            "Serve with garlic naan or rice."
        ]
    },
    {
        id: 66,
        title: "Paneer Kundan Kaliyan",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Rich", "Vegetarian", "Awadhi"],
        time: "55 min",
        rating: 4.8,
        image: "assets/recipe_shahi_paneer_new.png",
        video: "https://www.youtube.com/embed/Y7jdlcU4EfM",
        description: "A regal Awadhi dish featuring paneer in a golden-hued gravy enriched with yogurt and saffron — fit for royalty.",
        ingredients: [
            "300g paneer, cut into thick pieces",
            "1 cup whisked yogurt",
            "1/4 cup cashew paste",
            "1 large onion, fried and pureed",
            "A generous pinch of saffron soaked in warm milk",
            "1/4 tsp turmeric powder",
            "1/2 tsp white pepper powder",
            "1/4 tsp green cardamom powder",
            "2 tbsp ghee",
            "1 tsp rose water",
            "Salt to taste",
            "Edible gold leaf for garnish (optional)"
        ],
        instructions: [
            "Heat ghee in a heavy pan. Add the fried onion puree and cashew paste. Sauté on low heat for 5 minutes.",
            "Whisk yogurt with turmeric, white pepper, and salt. Add to the pan slowly, stirring constantly.",
            "Cook on low heat until the gravy thickens and turns a beautiful golden color.",
            "Add the saffron-infused milk and cardamom powder. Stir gently.",
            "Slide in the paneer pieces and cook for 5-7 minutes, basting them with the gravy.",
            "Finish with rose water and a few drops of kewra (pandanus) water.",
            "Garnish with saffron strands and optional gold leaf.",
            "Serve with warqi paratha or sheermal."
        ]
    },
    {
        id: 67,
        title: "Lucknowi Galouti Kebab",
        categories: ["North Indian", "Snack", "Tandoori & Grills", "Non-Veg Delicacies", "Awadhi"],
        time: "1 hr 30 min",
        rating: 5.0,
        image: "assets/recipe_mutton_curry.png",
        video: "https://www.youtube.com/embed/yMEhhmqYYZM",
        description: "Finely minced lamb kebabs that literally melt in the mouth, flavored with over 100 aromatic spices — the signature dish of Lucknow.",
        ingredients: [
            "500g very finely minced lamb (raan)",
            "2 tbsp raw papaya paste (meat tenderizer)",
            "2 tbsp fried onion (birista), ground to paste",
            "1 tbsp ginger-garlic paste",
            "2 tbsp roasted gram flour (besan)",
            "1 tsp garam masala (preferably Lucknowi style with mace & ittar)",
            "1/2 tsp Kashmiri red chili powder",
            "1/4 tsp green cardamom powder",
            "A pinch of kewra water",
            "Ghee for shallow frying",
            "Salt to taste"
        ],
        instructions: [
            "Mince the lamb twice through a fine mincer for an ultra-smooth texture.",
            "Marinate mince with raw papaya paste for 2 hours to tenderize.",
            "Add all remaining ingredients except ghee. Mix thoroughly in one direction for 5 minutes.",
            "Refrigerate the mixture for 30 minutes.",
            "Divide into equal portions and flatten into patties on greased palms.",
            "Heat ghee in a flat pan on very low heat. Place kebabs gently.",
            "Fry slowly until a pale crust forms on the bottom, then flip ONCE. The kebabs should barely be touched.",
            "Serve immediately on a bed of sheermal with mint chutney and onion rings."
        ]
    },
    {
        id: 68,
        title: "Pindi Chole (Rawalpindi Style)",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Main Course", "Spicy", "Vegetarian", "Gluten-Free"],
        time: "8 hrs",
        rating: 4.9,
        image: "assets/recipe_pindi_chole_apt.jpg",
        video: "https://www.youtube.com/embed/0b3UzQLztRk",
        description: "A rustic, dark, and spicy chickpea preparation from the Rawalpindi region, uniquely made without onion or garlic.",
        ingredients: [
            "2 cups chickpeas (kabuli chana), soaked overnight",
            "2 black tea bags (for dark color)",
            "1 tbsp anardana powder (dry pomegranate seeds)",
            "2 tbsp amchur (dry mango powder)",
            "1 tsp black cardamom powder",
            "1 tbsp coriander powder",
            "1 tsp cumin powder",
            "1 tsp Kashmiri red chili powder",
            "1/2 tsp asafoetida (hing)",
            "3 tbsp oil",
            "Ginger julienne for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Pressure cook chickpeas with tea bags and salt until very soft. Remove tea bags.",
            "Heat oil in a heavy kadai. Add hing — NO onion or garlic is added.",
            "Add all dry spices and roast in the oil for 30 seconds.",
            "Add the boiled chickpeas with very little cooking water and toss well.",
            "Mash a few chickpeas to create a thick, dry masala coating.",
            "Cook on medium heat, stirring, until the masala coats every chickpea.",
            "Garnish with ginger julienne and green chilies.",
            "Serve with Bhature or Amritsari Kulcha."
        ]
    },
    {
        id: 69,
        title: "Palak Paneer (Silk Version)",
        categories: ["North Indian", "Dinner", "Vegetarian Curries", "Main Course", "Gluten-Free", "Vegetarian", "Healthy"],
        time: "35 min",
        rating: 4.9,
        image: "assets/recipe_palak_paneer.png",
        video: "https://www.youtube.com/embed/5lVLxEr_qgM",
        description: "Fresh spinach blanched and pureed into a vibrant, silky green sauce with cubes of pan-seared paneer — the velvety restaurant secret version.",
        ingredients: [
            "4 large bunches fresh spinach (palak)",
            "300g paneer, cut into cubes",
            "1 onion, finely chopped",
            "1 tomato, chopped",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1/2 tsp garam masala",
            "1/4 tsp nutmeg powder",
            "3 tbsp fresh cream",
            "2 tbsp ghee + 1 tbsp oil",
            "Salt to taste"
        ],
        instructions: [
            "Blanch spinach in boiling salted water for 90 seconds ONLY. Immediately plunge into ice-cold water to preserve vibrant color.",
            "Blend blanched spinach to a super smooth, silky puree. Do not add water.",
            "Pan-sear paneer cubes in 1 tbsp ghee with a pinch of salt until golden. Set aside.",
            "Heat remaining ghee + oil. Crackle cumin, then sauté onions until golden.",
            "Add ginger-garlic paste and tomato. Cook until completely softened.",
            "Pour in the smooth spinach puree. Add garam masala, nutmeg, and salt. Simmer for 3-4 minutes.",
            "Stir in fresh cream and add paneer cubes.",
            "Serve hot with butter naan. Do NOT overcook — the green color must stay vibrant."
        ]
    },

    // ── II. South Indian & Coastal ────────────────────────────────────────────
    {
        id: 70,
        title: "Hyderabadi Mutton Biryani (Kacchi)",
        categories: ["South Indian", "Dinner", "Non-Veg Delicacies", "Rice & Biryani", "Main Course", "Gluten-Free"],
        time: "3 hrs",
        rating: 5.0,
        image: "assets/recipe_hyderabadi_chicken_biryani.png",
        video: "https://www.youtube.com/embed/zO8H2Fas6bI",
        description: "The pinnacle of rice dishes, using the 'Kacchi' method where raw marinated meat is cooked directly with long-grain basmati rice — slow-sealed perfection.",
        ingredients: [
            "1 kg mutton, bone-in pieces",
            "3 cups aged basmati rice, soaked for 45 mins",
            "1 cup yogurt",
            "1 cup fried onions (birista)",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tbsp Kashmiri red chili powder",
            "Juice of 1 lemon",
            "Saffron soaked in warm milk",
            "Fresh mint and coriander leaves",
            "3 tbsp ghee",
            "Whole spices: bay leaf, cloves, cardamom, cinnamon, star anise",
            "Salt to taste"
        ],
        instructions: [
            "Marinate mutton with yogurt, ginger-garlic paste, biryani masala, chili powder, lemon juice, half the fried onions, salt, and herbs. Marinate for at least 2 hours.",
            "Boil water with whole spices and salt. Add soaked rice and cook until 70% done (grains should break but have a firm white center). Drain immediately.",
            "In a HEAVY-bottomed pot or degchi, spread the RAW marinated mutton at the bottom.",
            "Layer the 70% cooked rice over the mutton generously.",
            "Drizzle saffron milk, ghee, and remaining fried onions over the rice.",
            "Seal the pot airtight with dough (atta) around the lid edge.",
            "Cook on HIGH heat for 15 minutes, then on the LOWEST flame for 35-40 minutes.",
            "Break the seal at the table and gently mix from the bottom. Serve with raita and mirchi ka salan."
        ]
    },
    {
        id: 71,
        title: "Chettinad Pepper Chicken",
        categories: ["South Indian", "Dinner", "Non-Veg Delicacies", "Spicy", "Main Course", "Gluten-Free"],
        time: "60 min",
        rating: 5.0,
        image: "assets/recipe_chicken_chettinad.png",
        video: "https://www.youtube.com/embed/K2miSXNP_nI",
        description: "A fiery Tamil Nadu specialty utilizing freshly ground black pepper, kalpasi (stone flower), and curry leaves — an explosion of bold flavors.",
        ingredients: [
            "1 kg chicken, curry cut",
            "2 tbsp fresh black peppercorns",
            "1 tsp fennel seeds (sombu)",
            "2 pieces kalpasi (stone flower)",
            "1 star anise",
            "A small piece of marathi mokku",
            "2 sprigs fresh curry leaves",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "1 tbsp ginger-garlic paste",
            "1/4 cup grated coconut, roasted",
            "1 tbsp coriander powder",
            "3 tbsp oil",
            "Salt to taste"
        ],
        instructions: [
            "Dry roast peppercorns, fennel, kalpasi, star anise, and marathi mokku until fragrant. Grind coarsely.",
            "Roast grated coconut separately until golden and dry. Grind with a little water to a paste.",
            "Heat oil in a kadai. Fry curry leaves until crisp.",
            "Add onions and sauté until deep golden brown (this is key for flavor).",
            "Add ginger-garlic paste and tomatoes. Cook until mushy and oil separates.",
            "Add chicken pieces and sear on high heat for 5 minutes.",
            "Add the freshly ground spice mixture, coconut paste, and salt. Mix well.",
            "Add 1 cup water, cover, and cook on low heat until chicken is tender and gravy is thick.",
            "Finish with an extra handful of fresh curry leaves. Serve with parotta or rice."
        ]
    },
    {
        id: 72,
        title: "Meen Moilee",
        categories: ["South Indian", "Dinner", "Non-Veg Delicacies", "Seafood", "Kerala", "Gluten-Free"],
        time: "30 min",
        rating: 4.8,
        image: "assets/recipe_goan_fish_curry_special.jpg",
        video: "https://www.youtube.com/embed/xDr7KQ8FgPs",
        description: "A mild and fragrant Kerala fish curry prepared in thick coconut milk with ginger and green chilies — elegant and subtly spiced.",
        ingredients: [
            "500g firm white fish (Karimeen / Pearl Spot or Basa)",
            "1 can (400ml) thick coconut milk",
            "1/2 cup thin coconut milk",
            "1 large onion, sliced thinly",
            "4 green chilies, slit",
            "1 inch ginger, julienned",
            "4 cloves garlic, sliced",
            "1/2 tsp turmeric powder",
            "1 sprig curry leaves",
            "2 tbsp coconut oil",
            "Juice of 1/2 lime",
            "Salt to taste"
        ],
        instructions: [
            "Heat coconut oil in a wide clay pot or pan. Add sliced onions, green chilies, ginger, and garlic.",
            "Sauté on medium heat until onions are soft and translucent — do NOT brown them.",
            "Add turmeric and curry leaves. Stir for 30 seconds.",
            "Pour in thin coconut milk and bring to a gentle simmer.",
            "Slide in the fish pieces. Cook for 5-6 minutes, gently spooning gravy over the fish.",
            "Pour in the thick coconut milk. Swirl the pan gently — do NOT stir with a spoon.",
            "Simmer on low heat for 3-4 minutes (do not boil after adding thick coconut milk).",
            "Finish with lime juice. Serve with appam or steamed rice."
        ]
    },
    {
        id: 73,
        title: "Ghee Roast Dosa",
        categories: ["South Indian", "Breakfast", "Vegetarian", "Street Food", "Gluten-Free"],
        time: "25 min",
        rating: 4.9,
        image: "assets/recipe_masala_dosa.png",
        video: "https://www.youtube.com/embed/mKJksaeri8M",
        description: "A thin, fermented crepe roasted with pure cow ghee until it achieves a deep golden, crystalline, perfectly crispy crunch.",
        ingredients: [
            "2 cups fermented dosa batter",
            "3-4 tbsp pure cow ghee (not oil)",
            "Salt to taste",
            "For serving: coconut chutney and sambar"
        ],
        instructions: [
            "Ensure your dosa batter is well-fermented (slightly sour) and at room temperature.",
            "Heat a cast iron tawa on HIGH heat until very hot. Sprinkle water — it should evaporate instantly.",
            "Reduce to medium heat. Pour one ladle of batter and spread it in a thin circular motion from center outward.",
            "Drizzle 1 tsp ghee around the edges immediately.",
            "Cook on medium heat (do not rush) until the bottom turns a DEEP GOLDEN brown and the edges lift.",
            "Drizzle another 1 tsp ghee over the surface. Flip IF desired for extra crispness.",
            "Cook until the dosa is uniformly golden and has a crystalline, almost lacey texture.",
            "Fold and serve HOT immediately with sambar and coconut chutney."
        ]
    },
    {
        id: 74,
        title: "Malabar Parotta",
        categories: ["South Indian", "Dinner", "Main Course", "Indian Breads", "Kerala"],
        time: "90 min",
        rating: 4.9,
        image: "assets/recipe_malabar_parotta_kurma_user.jpg",
        video: "https://www.youtube.com/embed/BD7wsI61lHQ",
        description: "A flaky, spiraled flatbread from the Malabar coast, known for its incredibly soft layers that tear apart beautifully.",
        ingredients: [
            "3 cups Maida (all-purpose flour)",
            "1 tsp sugar",
            "1 tsp salt",
            "1/2 cup warm water (approx)",
            "1/2 cup oil (divided, for kneading and layering)",
            "1 egg (optional, for softness)"
        ],
        instructions: [
            "Knead flour, sugar, salt, egg, and 2 tbsp oil with enough water into an extremely soft, pliable dough.",
            "Rest covered for 1 hour — this is crucial for gluten relaxation.",
            "Divide into balls. Apply oil on surface. Let rest another 20 minutes.",
            "On an oiled surface (NOT floured), roll each ball into a very thin large sheet.",
            "Drizzle oil all over the surface. Fold into pleats like a fan (accordion style).",
            "Roll the pleated strip into a tight coil from one end. Tuck the end underneath.",
            "Flatten coils gently with your palm to a round disc.",
            "Cook on a hot tawa with oil, pressing gently with a spatula.",
            "Once cooked, pick up with both hands and clap/crush to separate layers. Serve immediately."
        ]
    },
    {
        id: 75,
        title: "Chicken 65 (Hotel Style)",
        categories: ["South Indian", "Snack", "Fried Snacks", "Non-Veg Delicacies", "Street Food", "Spicy"],
        time: "40 min",
        rating: 5.0,
        image: "assets/recipe_chicken_65.png",
        video: "https://www.youtube.com/embed/DZtqRaHYsf8",
        description: "The legendary deep-fried appetizer from Chennai, marinated in ginger, garlic, and red chili with a classic tempering of curry leaves and green chilies.",
        ingredients: [
            "500g chicken thigh, boneless, bite-sized pieces",
            "1 tbsp ginger-garlic paste",
            "2 tbsp red chili powder (Kashmiri for color + hot chili for kick)",
            "1 tbsp coriander powder",
            "1/2 tsp turmeric",
            "2 tbsp maida (flour)",
            "2 tbsp corn flour",
            "1 egg",
            "Juice of 1 lemon",
            "Oil for deep frying",
            "For tempering: curry leaves, green chilies slit, 4 cloves garlic",
            "Salt to taste"
        ],
        instructions: [
            "Mix chicken with ginger-garlic paste, chili powders, coriander, turmeric, lemon juice, and salt. Marinate 30 minutes.",
            "Add maida, cornflour, and egg to the marinade. Mix to coat evenly (batter should be thick).",
            "Heat oil for deep frying to 180°C. Fry chicken in batches for 5-6 minutes until crispy. Drain.",
            "For tempering: in 2 tbsp hot oil, fry curry leaves, slit green chilies, and sliced garlic until crisp.",
            "Toss the fried chicken in this tempering.",
            "Optionally, add a dash of red food color in the tempering oil for the classic restaurant hue.",
            "Garnish with lemon wedges and onion rings. Serve sizzling hot."
        ]
    },

    // ── III. Regional Specialties & High-Protein ──────────────────────────────
    {
        id: 76,
        title: "Bengali Shorshe Ilish",
        categories: ["East Indian", "Dinner", "Non-Veg Delicacies", "Seafood", "Bengali", "Gluten-Free"],
        time: "30 min",
        rating: 5.0,
        image: "assets/recipe_fish_fry.png",
        video: "https://www.youtube.com/embed/gXgd4GCWHPs",
        description: "Hilsa fish cooked in a pungent mustard oil and mustard seed paste — a hallmark of East Indian cuisine and Bengali soul food.",
        ingredients: [
            "4 Hilsa (Ilish) fish steaks",
            "3 tbsp black mustard seeds",
            "1 tbsp yellow mustard seeds",
            "4 green chilies",
            "1/2 tsp turmeric powder",
            "2 tbsp raw mustard oil (+ more for cooking)",
            "1 tsp nigella seeds (kalonji)",
            "Salt to taste"
        ],
        instructions: [
            "Soak black and yellow mustard seeds with green chilies in water for 20 minutes. Grind to a smooth paste.",
            "Marinate fish steaks with turmeric and salt.",
            "Heat mustard oil in a pan until it reaches smoking point (to remove pungency). Let it cool slightly.",
            "Add kalonji seeds. They will splutter.",
            "Add the mustard-chili paste and turmeric. Sauté for 2 minutes — it will smell intense.",
            "Add 1/2 cup water and bring to a simmer.",
            "Place fish steaks in the gravy. Drizzle raw mustard oil over the top.",
            "Cover and cook on low heat for 8-10 minutes. Do NOT stir — shake the pan gently.",
            "Serve with steamed white rice. The raw mustard oil drizzle at the end is essential."
        ]
    },
    {
        id: 77,
        title: "Laal Maas",
        categories: ["North Indian", "Dinner", "Non-Veg Delicacies", "Curries & Gravies", "Rajasthani", "Spicy", "Gluten-Free"],
        time: "1 hr 30 min",
        rating: 5.0,
        image: "assets/recipe_laal_maas.png",
        video: "https://www.youtube.com/embed/yMEhhmqYYZM",
        description: "A smoky, fiery Rajasthani mutton curry characterized by the intense heat of authentic dried Mathania chilies — not for the faint-hearted.",
        ingredients: [
            "1 kg mutton on bone",
            "15 dried Mathania or Kashmiri red chilies, soaked in warm water",
            "1 cup plain yogurt",
            "2 large onions, finely sliced",
            "2 tbsp ginger-garlic paste",
            "1 tsp turmeric powder",
            "1 tsp cumin seeds",
            "3-4 cloves",
            "2 bay leaves",
            "5 tbsp mustard oil",
            "Salt to taste",
            "Fresh coriander for garnish"
        ],
        instructions: [
            "Soak dried red chilies in warm water for 30 minutes, then blend to a smooth, thick paste.",
            "Heat mustard oil to smoking point in a heavy iron kadai. Add cumin, cloves, and bay leaves.",
            "Add sliced onions and fry on medium-high heat until very dark and caramelized — this gives the signature color.",
            "Add ginger-garlic paste and sauté for 2 minutes.",
            "Add the red chili paste. Fry for 10-12 minutes on medium heat until oil separates.",
            "Add mutton pieces, turmeric, and salt. Sear on high heat for 5 minutes.",
            "Reduce heat, add whisked yogurt gradually, stirring constantly.",
            "Add water and pressure cook for 3-4 whistles, then open-cook to reduce gravy.",
            "Garnish with coriander. Serve with bajra roti or missi roti."
        ]
    },
    {
        id: 78,
        title: "Misal Pav (Protein Special)",
        categories: ["West Indian", "Breakfast", "Spicy", "Street Food", "Vegetarian", "Healthy"],
        time: "45 min",
        rating: 4.8,
        image: "assets/recipe_misal_pav.png",
        video: "https://www.youtube.com/embed/kaJzwCD8uvY",
        description: "A spicy Maharashtrian sprout-based curry topped with crunchy farsan — excellent clean-bulking protein with big Nashik-style flavor.",
        ingredients: [
            "2 cups mixed sprouts (Matki/Moth beans, Moong, Kala Chana)",
            "2 onions (one for gravy, one for topping)",
            "2 tomatoes, chopped",
            "1 tbsp goda masala (Maharashtrian)",
            "1 tsp red chili powder",
            "1/2 tsp turmeric",
            "1/4 cup grated coconut, dry roasted",
            "2 tbsp oil",
            "Mustard seeds, curry leaves",
            "For topping: Farsan/Sev, raw onion, fresh coriander, lemon",
            "6 Pav buns (buttered and toasted)"
        ],
        instructions: [
            "Pressure cook sprouts with salt until soft but NOT mushy.",
            "Dry roast coconut and grind with a little water to a paste.",
            "Heat oil. Crackle mustard seeds and curry leaves. Add chopped onion and sauté.",
            "Add tomatoes, goda masala, chili powder, and turmeric. Cook until oil separates.",
            "Add coconut paste and cook for 5 minutes.",
            "Add cooked sprouts and enough water for a spicy, thin gravy (kat/rassa).",
            "Simmer for 15 minutes until flavors meld.",
            "To serve: Ladle sprouts into a bowl, pour the spicy rassa over it.",
            "Top with a mountain of farsan, raw onion, coriander, and a squeeze of lemon.",
            "Serve with toasted buttered pav on the side."
        ]
    },
    {
        id: 79,
        title: "Goan Prawn Balchao",
        categories: ["West Indian", "Dinner", "Non-Veg Delicacies", "Seafood", "Goan", "Spicy"],
        time: "45 min",
        rating: 4.9,
        image: "assets/recipe_goan_fish_curry_special.jpg",
        video: "https://www.youtube.com/embed/xDr7KQ8FgPs",
        description: "A tangy, fiery, pickle-like prawn preparation made with a dried shrimp paste and vinegar-based masala — Goa's bold, intensely preserved treasure.",
        ingredients: [
            "500g medium prawns, cleaned and deveined",
            "2 tbsp dried shrimp (galmbo), ground to paste",
            "8 Kashmiri red chilies",
            "6 cloves garlic",
            "1 inch ginger",
            "1 tsp cumin seeds",
            "1/2 tsp turmeric",
            "1/2 tsp black pepper",
            "4 tbsp malt vinegar (or toddy vinegar)",
            "2 onions, finely chopped",
            "2 tbsp oil",
            "1 tsp sugar",
            "Salt to taste"
        ],
        instructions: [
            "Grind Kashmiri chilies, garlic, ginger, cumin, turmeric, and pepper with vinegar to a smooth paste.",
            "Mix dried shrimp paste into this masala.",
            "Heat oil in a pan. Fry onions until very dark brown — almost caramelized.",
            "Add the chili-vinegar masala to the onions. Fry on medium heat for 8-10 minutes until oil separates.",
            "Add cleaned prawns and dried shrimp paste. Toss well.",
            "Add sugar, adjust salt (the dried shrimp and vinegar are both salty).",
            "Cook prawns for 5-7 minutes — just until pink and cooked through. Do not overcook.",
            "The balchao should be thick, tangy, and spicy. It tastes even better the next day."
        ]
    },
    {
        id: 80,
        title: "Sattu Paratha",
        categories: ["East Indian", "Breakfast", "Indian Breads", "Healthy", "Vegetarian", "High Protein"],
        time: "30 min",
        rating: 4.7,
        image: "assets/recipe_aloo_paratha_apt.jpg",
        video: "https://www.youtube.com/embed/Q5bc18KbTzs",
        description: "A nutrient-dense flatbread stuffed with roasted gram flour (Sattu), famous in Bihar and Jharkhand for its extraordinary high protein content.",
        ingredients: [
            "2 cups whole wheat flour",
            "1.5 cups Sattu (roasted chana dal flour)",
            "1 onion, very finely chopped",
            "2 green chilies, finely chopped",
            "1 tbsp mustard oil (for stuffing)",
            "1 tsp ajwain (carom seeds)",
            "1 tsp kalonji (nigella seeds)",
            "1 tbsp raw mango pickle (achar) or lemon juice",
            "Fresh coriander, chopped",
            "Salt and chili powder to taste",
            "Ghee for roasting"
        ],
        instructions: [
            "Knead wheat flour with a pinch of salt and water into a soft dough. Cover and rest.",
            "Mix Sattu with chopped onion, green chilies, ajwain, kalonji, mustard oil, pickle/lemon juice, coriander, and salt.",
            "The stuffing should be moist but NOT wet — add a few drops of water if crumbly.",
            "Divide dough into balls. Flatten, place a generous mound of Sattu stuffing.",
            "Seal the dough around the filling and GENTLY roll out without breaking.",
            "Roast on a hot tawa with ghee on both sides until golden brown spots appear.",
            "Serve hot with a dollop of white butter, lassi, and raw onion."
        ]
    },
    {
        id: 81,
        title: "Stuffed Bharwan Bhindi",
        categories: ["North Indian", "Lunch", "Vegetarian Curries", "Dry Veg", "Main Course", "Vegetarian", "Gluten-Free"],
        time: "30 min",
        rating: 4.6,
        image: "assets/recipe_bhindi_masala_apt.jpg",
        video: "https://www.youtube.com/embed/hAGdUqKiPCE",
        description: "Tender okra slit and filled with a roasted peanut and dry spice masala for a crunchy, flavor-packed side dish.",
        ingredients: [
            "500g tender bhindi (okra), washed and dried thoroughly",
            "For stuffing:",
            "3 tbsp roasted peanuts, coarsely ground",
            "1 tsp coriander powder",
            "1 tsp cumin powder",
            "1/2 tsp turmeric powder",
            "1 tsp red chili powder",
            "1 tsp amchur (dry mango powder)",
            "1/2 tsp garam masala",
            "Salt to taste",
            "3 tbsp oil for cooking"
        ],
        instructions: [
            "Ensure bhindi is completely dry (moisture causes sliminess).",
            "Slit each bhindi lengthwise from top almost to the bottom, keeping them intact.",
            "Mix roasted ground peanuts with all the dry spices and salt.",
            "Fill each bhindi with the peanut-spice stuffing, pressing it in gently.",
            "Heat oil in a wide pan. Place bhindi in a single layer.",
            "Cook on MEDIUM heat without a lid (very important to avoid slime).",
            "Turn carefully every 2-3 minutes until evenly cooked and slightly crispy.",
            "Serve with rotis — the peanut stuffing gives a beautiful crunch."
        ]
    },

    // ── IV. Premium Desserts ──────────────────────────────────────────────────
    {
        id: 82,
        title: "Kaju Katli (Silver Leaf)",
        categories: ["North Indian", "Desserts", "Sweet", "Vegetarian", "Gluten-Free", "Festive"],
        time: "40 min",
        rating: 5.0,
        image: "assets/recipe_kaju_katli.png",
        video: "https://www.youtube.com/embed/7uCqAtSVJU4",
        description: "A perfectly smooth, diamond-shaped cashew fudge finished with edible silver foil (varak) — the undisputed gold standard of Indian gifting.",
        ingredients: [
            "2 cups raw cashews (kaju)",
            "1 cup sugar",
            "1/2 cup water",
            "1/4 tsp cardamom powder",
            "1 tsp ghee",
            "Edible silver leaf (chandi ka varak)",
            "Rose water (optional)"
        ],
        instructions: [
            "Grind raw cashews in a dry blender to an extremely fine powder without running too long (to avoid oil release).",
            "Make sugar syrup with 1/2 cup water to exactly ONE-STRING consistency.",
            "Add cashew powder to the syrup off the heat (or on very low flame). Mix vigorously.",
            "Cook on low heat, stirring constantly, until the mixture comes together into a ball and leaves the sides of the pan.",
            "Add cardamom and ghee. Mix and remove from heat.",
            "While still warm (NOT hot), knead into a smooth dough.",
            "Roll between butter paper to an even 1cm thickness.",
            "Apply silver leaf gently on top. Cut into diamond shapes.",
            "Store between butter paper in an airtight box."
        ]
    },
    {
        id: 83,
        title: "Shahi Tukda",
        categories: ["North Indian", "Desserts", "Sweet", "Vegetarian", "Rich", "Festive", "Mughlai"],
        time: "45 min",
        rating: 4.9,
        image: "assets/recipe_rice_kheer_apt.jpg",
        video: "https://www.youtube.com/embed/4OgBldTs0us",
        description: "A rich 'royal piece' — golden fried bread soaked in saffron-infused milk (rabri) and garnished with silver-blanched nuts — a Mughal legacy dessert.",
        ingredients: [
            "6 slices thick white bread, crusts removed",
            "For Rabri: 1 liter full cream milk",
            "4 tbsp sugar",
            "A generous pinch of saffron soaked in warm milk",
            "1/4 tsp cardamom powder",
            "2 tbsp rose water",
            "For frying: Ghee",
            "For sugar syrup: 1/2 cup sugar + 1/2 cup water + saffron",
            "Garnish: Blanched pistachios, almonds, silver leaf (varak)"
        ],
        instructions: [
            "Prepare Rabri: Boil milk in a wide pan on medium heat. Stir frequently and scrape the cream from the sides.",
            "Reduce milk to 1/3 of its original volume until thick. Add sugar, saffron milk, cardamom, and rose water. Chill.",
            "Prepare sugar syrup: Boil sugar and water to a thin syrup. Add saffron.",
            "Cut bread into triangles or rectangles. Deep-fry in ghee until golden and crispy.",
            "Immediately dip hot fried bread in warm sugar syrup for 30 seconds. Drain and arrange in a dish.",
            "Pour the cold, thick rabri generously over the bread.",
            "Garnish lavishly with blanched and slivered pistachios, almonds, and silver leaf.",
            "Chill for 1 hour before serving — the bread should be soaked through with saffron rabri."
        ]
    }
];

