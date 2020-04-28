import React, { FC } from 'react';

export const Nav: FC = () => {
    return (
        <>
            <li className="active"><a href="#soups">Soups</a></li>
            <li><a href="#salads">Salads</a></li>
            <li><a href="#healthy">Healthy Options</a></li>
            <li><a href="#pasta">Fresh Pasta and Sauces</a></li>
            <li><a href="#poultry">Poultry</a></li>
            <li><a href="#seafood">Seafood</a></li>
            <li><a href="#meatloaf">Meatloaf Variations</a></li>
            <li><a href="#pork">Pork</a></li>
            <li><a href="#beef">Beef and Veal</a></li>
            <li><a href="#veggies">Sides and Vegetarian</a></li>
            <li><a href="#desserts">Desserts</a></li>
        </>
    );
}

export const MenuList: FC = () => {  
    return (
        <>
            <div className="menu">
                <div className="header"><span id="soups"></span>Soups</div>
                <div>         
                    <ul>
                        <li>Gazpacho</li>
                        <li>Italian Wedding Soup</li>
                        <li>Baked Potato Soup</li>
                        <li>Split Pea</li>
                        <li>Ham and Bean</li>
                        <li>Broccoli Cheddar</li>
                        <li>Potato Leek</li> 
                        <li>Carrot and Ginger</li>
                        <li>Wisconsin Cheddar and Beer</li>
                        <li>Tomato and Fennel</li>
                        <li>Cold Cucumber</li>
                        <li>Clam Chowder</li>
                        <li>Seafood Bisque</li>
                        <li>Maryland Crab Soup</li>
                        <li>French Onion</li>
                        <li>Cream of Tomato</li>
                        <li>Chicken and Dumpling</li>
                        <li>Roasted Turkey Noodle</li>
                        <li>Black Bean</li> 
                        <li>Roasted Corn</li>
                        <li>Mixed Vegetable</li>
                        <li>Beef and Vegetable</li>
                        <li>Mexican Chicken and Corn Soup</li>
                        <li>Beef Chili</li>
                        <li>Turkey Chili</li>
                        <li>Vegetarian Bean Chili</li>
                        <li>White Chicken Chili</li>
                        <li>Chicken and Rice</li>
                        <li>Chestnut Soup</li>
                        <li>Pumpkin</li>
                        <li>Butternut Squash</li>
                        <li>Escarole and Bean</li>
                        <li>Cream of Mushroom</li>
                        <li>Pistou</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="salads"></span>Salads</div>
                <div>         
                    <ul>
                        <li>Caesar</li>
                        <li>Mixed Green</li>
                        <li>Pear and Stilton Cheese</li>
                        <li>Pasta Salad</li>
                        <li>Coleslaw</li>
                        <li>Classic Potato Salad</li>
                        <li>Red Potato Salad</li>
                        <li>German Potato Salad</li>
                        <li>Asian Cucumber Salad</li>
                        <li>Creamy Cucumber Salad</li>
                        <li>Guacamole</li>
                        <li>Tomato Salsa</li>
                        <li>Tropical Salsa</li>
                        <li>Italian Antipasto</li>
                        <li>Italian Cucumber, Tomato and Pepper</li>
                        <li>Greek</li>
                        <li>Bruschetta</li>
                        <li>Caprese</li>
                        <li>Tomato and Watermelon with Feta Cheese</li>
                        <li>Balsamic Radicchio with Pear and Hazelnuts</li>
                        <li>Lemon Parmesan Arugula</li>
                        <li>Raw Asparagus</li>
                        <li>Grilled Vegetable and Herbed Goat Cheese</li>
                        <li>Yum – Thai style spicy salad</li>
                        <li>Roasted Beet Salad with Slivered Almonds and Gorgonzola</li>
                        <li>Roasted Beet Napoleon with Mixed Greens and Hazelnuts</li>
                        <li>Marinated Mushrooms</li>
                        <li>
                            <div className="sub-header">Salad Dressings</div>
                            <ul>
                                <li>Champagne Vinaigrette</li>
                                <li>Raspberry Vinaigrette</li>
                                <li>Buttermilk Ranch</li>
                                <li>French</li>
                                <li>Balsamic Vinaigrette</li>
                                <li>Lemon Vinaigrette</li>
                                <li>House Italian</li>
                                <li>Creamy Italian</li>
                                <li>Roasted Tomato Balsamic Vinaigrette</li>
                                <li>Caesar</li>
                                <li>Peppercorn Ranch</li>
                                <li>Roquefort Cheese</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="healthy"></span>Healthy Options</div>
                <div className="summary font-bold">
                    Below are some low calorie sauces for chicken, fish, shrimp, turkey breast, pork
                    tenderloin, or lean beef. They are served with an appropriate vegetable and a rice,
                    quinoa, cous cous, pasta or potato according to your desired plan. There will not
                    be an additional vegetable if the sauce is vegetable heavy (like ratatouille). Feel
                    free to let Chef Laura know what you would like it served with if you have a preference.
                </div>
                <ul>
                    <li>Blueberry Salsa or Sauce</li>
                    <li>Mango Salsa or Sauce</li>
                    <li>Grapefruit Salsa or Sauce</li>
                    <li>Orange Salsa or Sauce</li>
                    <li>Tropical Fruit Salsa</li>
                    <li>Grapefruit Salsa or Sauce</li>
                    <li>Pineapple Salsa or Sauce</li>
                    <li>Tomato Salsa</li>
                    <li>Peach Salsa or Sauce</li>
                    <li>Apricot Salsa or Sauce</li>
                    <li>Pomegranate Sauce</li>
                    <li>Raspberry Sauce</li>
                    <li>Strawberry Salsa or Sauce</li>
                    <li>Pomodoro Sauce – Tomato Basil</li>
                    <li>Black Bean, Corn and Tomato Salsa</li>
                    <li>Chunky Tomato Mint Sauce</li>
                    <li>Tomato Gazpacho</li>
                    <li>Cucumber Gazpacho</li>
                    <li>Avocado Gazpacho</li>
                    <li>Pear and Rosemary Sauce</li>
                    <li>Grape and Shallot Sauce</li>
                    <li>Balsamic Glaze</li>
                    <li>Balsamic Fig Glaze</li>
                    <li>Balsamic Truffle Glaze</li>
                    <li>Strawberry Balsamic Glaze</li>
                    <li>Pomegranate Balsamic Glaze</li>
                    <li>Roasted Red Pepper</li>
                    <li>Mediterranean with Grape Tomatoes, Capers, Olives, Lemon and White Wine</li>
                    <li>Florentine</li>
                    <li>Tarragon and Greek Yogurt</li>
                    <li>Greek Yogurt, Lemon, and Horseradish</li>
                    <li>Butternut Squash</li>
                    <li>Roasted Eggplant and Tomato</li>
                    <li>Fennel, Orange and Grapefruit</li>
                    <li>Ratatouille – Eggplant, Tomatoes, Capers, Yellow Squash and Zucchini</li>
                    <li>Caponata – Eggplant, Tomatoes, Capers, Olives, Yellow Squash and Zucchini</li>
                    <li>Vera Cruz – Peppers, Capers, Onion, Cumin, Tomatoes, Chilies and Tomato</li>
                    <li>Cacciatore – Tomatoes, Peppers and Mushrooms</li>
                    <li>Chinese Five Spice, Agave and Lime Juice</li>
                    <li>Lemon Dijon</li>
                    <li>Jamaican Jerk</li>
                </ul>

                <div className="sub-header">
                    Below are higher calorie sauces, but made with olive oil or coconut oil
                </div>
                <ul>
                    <li>Piccata - Lemon Caper</li>
                    <li>Marsala - Mushroom</li>
                    <li>Scampi – White Wine, Parsley and Lemon Juice</li>
                    <li>Basil and Pine Nut Pesto</li>
                    <li>Basil and Walnut Pesto</li>
                    <li>Dill, Parsley and Pine Nut Pesto</li>
                    <li>Sun Dried Tomato Pesto</li>
                    <li>Tzatziki – Made with 0% fat greek yogurt unless higher fat is requested</li>
                    <li>Tabouleh - Parsley Salad, Burghul, Tomatoes, Onions, Mint, Olive Oil, Lemon Juice</li>
                    <li>Baba ghanoush – Eggplant Puree</li>
                    <li>Puttenesca – Olives, Anchovies, Tomato and Chili Flake</li>
                    <li>Spanish Romenesco – Roasted Red Peppers, Smoked Paprika and Almonds</li>
                    <li>Crushed Walnut, Almond or Pecan Crusted Protein</li>
                    <li>Buffalo Sauce</li>
                </ul>
                <div className="summary">
                    If you like cream sauces let me know and I can make them with coconut oil based butter
                    and skim milk, but I rarely if ever buy low fat or fat free cheese.
                </div>

                <div className="sub-header">
                    Stir Fry – Your protein choice, fresh garlic and ginger made with Coconut Oil over
                    Brown Rice, Quinoa or Soba Noodles
                </div>
                <ul>
                    <li>Broccoli</li>
                    <li>Green Beans, Sesame Seeds, and Chili Oil</li>
                    <li>Broccoli, Carrots, and Snow Peas</li>
                    <li>Mushrooms and Sweet Peppers</li>
                    <li>Baby Bok Choy in Oyster Sauce</li>
                    <li>Napa Cabbage, Peppers and Carrots</li>
                    <li>Spinach and Sesame Seeds</li>
                    <li>Basil and Chilies</li>
                    <li>Mushrooms, Peppers and Scallions</li>
                    <li>Peppers, Snow Peas, and Carrots</li>
                    <li>
                        Asian Sauces: Soy and Rice Wine, Sweet and Sour, Oyster, Peanut, Teriyaki, Black
                        Bean, Green Curry
                    </li>
                </ul>

                <div className="sub-header">
                    Fresh Made Hummus Flavors – Great for lunch with Pita and your favorite grilled protein
                </div>
                <ul>
                    <li>Roasted Garlic</li>
                    <li>Roasted Red Pepper</li>
                    <li>Roasted Chili Pepper</li>
                    <li>Pumpkin</li>
                    <li>Butternut Squash</li>
                    <li>Artichoke</li>
                    <li>Eggplant</li>
                    <li>Lemon</li>
                    <li>Edamame</li>
                    <li>Roasted Beet</li>
                </ul>

                <div className="sub-header">
                    Low Calorie and High Fiber Stews – Nonfat Greek Yogurt Used where Cream is mentioned
                </div>
                <ul>
                    <li>Cabbage, Carrot and Tomato</li>
                    <li>Sausage, Kale and Lentil</li>
                    <li>African Peanut Stew</li>
                    <li>Escarole and Bean</li>
                    <li>Tomato Gazpacho</li>
                    <li>Cucumber Gazpacho</li>
                    <li>Avocado Gazpacho</li>
                    <li>Mexican Chicken</li>
                    <li>Butternut Squash</li>
                    <li>Black Bean, Pepper, Winter Squash, Corn and Tomato</li>
                    <li>Vegetarian Chili made with wheat berries, black beans and red kidney beans</li>
                    <li>Lean Protein and Vegetable</li>
                    <li>Carrot and Ginger</li>
                    <li>Broccoli and Potato Soup</li>
                    <li>Cream of Tomato</li>
                    <li>Beef Chili</li>
                    <li>Wild Mushroom</li>
                    <li>White Chicken Chili</li>
                    <li>Turkey Chili</li>
                    <li>Minestrone</li>
                    <li>Seafood Cioppino</li>
                    <li>Turkey Meatball, Whole Wheat Orzo and Spinach</li>
                    <li>Roasted Root Vegetable</li>
                </ul>

                <div className="sub-header">
                    Salads as a Meal – some assembly required
                </div>
                <ul>
                    <li>Greek Yogurt Chicken, Tuna, or Shrimp Salad</li>
                    <li>Grilled Lemon Thyme Chicken Breast or Turkey Breast</li>
                    <li>Grilled or Broiled Shrimp</li>
                    <li>Grilled Steak</li>
                    <li>Grilled or Broiled Mahi Mahi</li>
                    <li>Grilled or Broiled Scallops</li>
                    <li>Grilled or Broiled Salmon</li>
                    <li>BLT Salad using real pork bacon and not turkey bacon</li>
                </ul>
                <div className="summary">
                    Salads will come with packaged greens, your desired protein, grape tomatoes and home
                    made dressing
                </div>
                <div className="summary">
                    Vinaigrettes made with Olive Oil or Canola, Balsamic, Pomegranate, Champagne, Red
                    Wine, French, Citrus, Raspberry, Asian Ginger Peanut, Mexican Cumin Lime, Agave
                    Dijon, or White Balsamic
                </div>
                <div className="summary">
                    Creamy dressings made with Nonfat Greek Yogurt - Ranch, Russian, Blue Cheese or Creamy
                    Italian
                </div>
    
                <div className="summary font-bold">
                    * No sugar is added. Agave is used for anything that may need it
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="pasta"></span>Fresh Pasta and Sauces</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Lasagna Choices</div>
                            <ul>
                                <li>Fresh Italian Sausage Lasagna</li>
                                <li>Primavera Lasagna</li>
                                <li>Butternut Squash Lasagna</li>
                                <li>Florentine Lasagna</li>
                                <li>Seafood Lasagna</li>
                                <li>Three Mushroom Lasagna</li>
                                <li>Mac &amp; Cheese</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Gnocchi Flavors</div>
                            <ul>
                                <li>Original Potato</li>
                                <li>Whole Wheat</li>
                                <li>Sweet Potato</li>
                                <li>Butternut Squash</li>
                                <li>Ricotta</li>
                                <li>Spinach</li>
                                <li>Roasted Garlic</li>
                                <li>Roasted Tomato</li>
                                <li>Pumpkin (Available in Fall)</li>
                                <li>Roman Style</li>
                                <li>French Style</li>
                                <li>Herbed</li>
                                <li>Squid Ink</li>
                                <li>Red Beet</li>
                                <li>Polenta</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Sauce Choices</div>
                            <ul>
                                <li>Pomodoro</li>
                                <li>Alfredo</li>
                                <li>Marinara</li>
                                <li>Seafood Cream</li>
                                <li>Bolognese</li>
                                <li>Pesto</li>
                                <li>Gorgonzola Walnut Cream Sauce</li>
                                <li>Vodka Pink Cream Sauce</li>
                                <li>Carbonara</li>
                                <li>Sage Butter</li>
                                <li>Mushroom Ragu</li>
                                <li>Putenesca</li>
                                <li>Spinach Pistachio Pesto</li>
                                <li>Roasted Pepper</li>
                                <li>Arrabiata – Spicy Red Sauce</li>
                            </ul>
                            <strong>
                                *Feel free to add a protein to any pasta sauce to make it an entrée! 
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="poultry"></span>Poultry</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Roast Chicken Dinner Variations</div>
                            <ul>
                                <li>
                                    <div className="sub-header">BBQ</div>
                                    <ul>
                                        <li>BBQ Marinaded and Basted</li>
                                        <li>Potato Salad</li>
                                        <li>Corn on the Cob</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">French</div>
                                    <ul>
                                        <li>Seasoned with Herbs de Provence</li>
                                        <li>Dijon Tarragon Sauce</li>
                                        <li>Potatoes Dauphine</li>
                                        <li>Ratatouille</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Italian</div>
                                    <ul>
                                        <li>Balsamic Citrus Glazed Roast Chicken</li>
                                        <li>Sicilian Caponata</li>
                                        <li>Roasted Rosemary and Olive Oil Fingerling Potatoes</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Mexican</div>
                                    <ul>
                                        <li>Tequila, Chili and Lime</li>
                                        <li>Corn and Black Bean Salad</li>
                                        <li>Mexican Rice</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">German</div>
                                    <ul>
                                        <li>German Beer and Thyme</li>
                                        <li>Gruyere Spaetzle</li>
                                        <li>Asparagus with Hollandaise</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Greek</div>
                                    <ul>
                                        <li>Lemon and Oregano Seasoned</li>
                                        <li>Orzo Pasta</li>
                                        <li>Braised Green Beans and Tomatoes</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Peruvian</div>
                                    <ul>
                                        <li>Peruvian Rubbed</li>
                                        <li>Roasted Yucca</li>
                                        <li>Creamy cheese sauce</li>
                                        <li>Mixed Green Salad</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Chicken Breast Variations</div>
                            <ul>
                                <li>Picatta – Lemon and Capers in White Wine Sauce</li>
                                <li>Florentine – Spinach in White Wine Sauce</li>
                                <li>Parmesan - Lightly breaded and pan fried and baked with Fresh Mozzarella and Marinara Sauce</li>
                                <li>Marsala - Wild Mushroom and Marsala Sauce</li>
                                <li>Saltimbocca – Wrapped in Sage and Prosciutto and Lightly Breaded</li>
                                <li>Apricot Puree and White Wine</li>
                                <li>Pecan Crusted with Raspberry Gastrique Sauce</li>
                                <li>Milanese – Lightly Breaded and served with Parsley and Fresh Lemon</li>
                                <li>Teriyaki – Marinated in Teriyaki Sauce and Pineapple Juice</li>
                                <li>BBQ</li>
                                <li>Tequila Lime Marinated</li>
                                <li>Chicken Cordon Bleu</li>
                                <li>Buffalo - Breaded and Dressed in Buffalo Sauce with Fresh Blue Cheese Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Mixed Chicken Pieces</div>
                            <ul>
                                <li>Green Curry with Red Bell Peppers</li>
                                <li>Yellow Curry with Potatoes</li>
                                <li>Chicken Cacciatore – Peppers, Mushrooms and Tomato Sauce</li>
                                <li>Chicken Pot Pie</li>
                                <li>Chicken and Dumplings</li> 
                                <li>Coq au Vin – Red Wine, Mushrooms, Pearl Onions and Bacon</li>
                                <li>Chicken Basquaise – Peppers, Mushrooms, Tomatoes and White Wine</li>
                                <li>Chicken and Waffles</li>
                                <li>Lemon Chicken</li>
                                <li>40 Clove Garlic Chicken</li>
                                <li>Chicken Chasseur – Mushrooms, Tomato Sauce and Tarragon</li>
                                <li>Moroccan Chicken with Lemon and Green Olives</li>
                                <li>Cayenne and Maple Glazed</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Turkey</div>
                            <ul>
                                <li>Roast Turkey</li>
                                <li>Turkey Florentine Meatloaf with Tomato Sauce</li>
                                <li>Turkey and Roasted Pepper Meatloaf with Gouda Cheese Sauce</li>
                                <li>Thanksgiving Turkey Meatloaf with Sage and Cornbread and Gravy</li>
                                <li>Turkey Meatballs</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="seafood"></span>Seafood</div>
                <div>
                    <ul>
                        <li>Pan Seared Salmon with Seafood Risotto</li>
                        <li>Shrimp Scampi and Linguine</li>
                        <li>Potato Crusted Rockfish with Beurre Blanc</li>
                        <li>Skate Wings with White Wine and Caper Sauce</li>
                        <li>Bouillabaisse – French Style Seafood Stew</li>
                        <li>Chesapeake Bay Seafood Stew</li>
                        <li>Cacciucco – Tuscan Style Seafood Stew</li>
                        <li>Cioppino – San Francisco Style Italian American Fish Stew</li> 
                        <li>Fruitti Di Mare and Linguine</li>
                        <li>Roasted Clams over Linguine</li>
                        <li>Seared Ahi Tuna with Asian Slaw</li>
                        <li>Macadamia Encrusted Mahi Mahi</li>
                        <li>Seared Salmon with Parsley and Dill Pesto</li>
                        <li>Tuna Tartar</li>
                        <li>Crab and Avacado Salad</li>
                        <li>Tilapia Fish Tacos</li>
                        <li>Ceviche</li>
                        <li>Shrimp and Grits</li>
                        <li>Seared Scallops with Sorrel Cream Sauce</li>
                        <li>Shrimp Spring Rolls</li>
                        <li>Tuna Burgers</li>
                        <li>Salmon Burgers</li>
                        <li>Maryland Style Crab Cakes</li>
                        <li>Lo Carb Crab Cakes binded with Scallop Mousse</li>
                        <li>Italian Crab Cake with Roasted Portabello and Herbed Butter</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="meatloaf"></span>Meatloaf Variations</div>
                <div>
                    <ul>
                        <li>Traditional Meatloaf with Gravy</li>
                        <li>Italian Meatloaf with Tomato Sauce</li>
                        <li>Turkey Florentine Meatloaf with Tomato Sauce</li>
                        <li>Turkey and Roasted Pepper Meatloaf with Gouda Cheese Sauce</li>
                        <li>Thanksgiving Turkey Meatloaf with Sage and Cornbread and Gravy</li>
                        <li>Bacon Cheeseburger Meatloaf with Cheddar Cheese Sauce, Bacon and Caramelized Shallots</li>
                        <li>Rosemary Meatloaf with Gorgonzola Filling and Dijon Sauce</li>
                        <li>Meatloaf Roulade with Provolone, Spinach and Proscuitto with Tomato Sauce</li>
                        <li>Vegetarian Lentil Loaf with Roasted Pepper Sauce</li>
                        <li>BBQ Meatloaf with Cheddar Cheese Sauce and Apple wood Smoked Bacon</li>
                        <li>Meatloaf Stuffed Peppers with Tomato Sauce</li>
                        <li>Alpine Swiss Meatloaf with Swiss Cheese Sauce and Sautéed Baby Portabellas</li>
                        <li>Meatloaf Bourguignon with Caramelized Pearl Onions, Bacon and Sautéed Mushrooms and Bordelaise Sauce</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="pork"></span>Pork</div>
                <div>
                    <ul>
                        <li>Pork Satay with Thai Peanut Sauce</li>
                        <li>Breaded Pork Cutlets with Caramelized Onions and Gravy</li>
                        <li>Pork T-Bone and Sauerkraut with Fresh Applesauce</li>
                        <li>Maple Glazed Pork Chops</li>
                        <li>BBQ Baby Back Ribs</li>
                        <li>Italian Sausage, Peppers, Mushrooms and Onions</li>
                        <li>Jambalaya</li>
                        <li>Sweet and Sour Pork</li>
                        <li>North Carolina Style Pulled Pork</li>
                        <li>Pork Chops with Sweet Potato and Pecan Gravy</li>
                        <li>Porkette – Italian Style Pulled Pork</li>
                        <li>Apricot-Dijon Glazed Pork Tenderloin</li>
                        <li>Dirty Rice with Sausage</li>
                        <li>Baked Ham with Tangerine Glaze</li>
                        <li>Baked Ham with Brown Sugar Glaze</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="beef"></span>Beef and Veal</div>
                <div>
                    <ul>
                        <li>Veal Scaloppini</li>
                        <li>Veal Piccata</li>
                        <li>Veal Parmesan</li>
                        <li>Veal Milanese</li>
                        <li>Veal Saltimbocca</li>
                        <li>Veal Marsala</li>
                        <li>Veal Osso Bucco</li>
                        <li>Beef Bourguignon with Caramelized Pearl Onions, Bacon and Sautéed Mushrooms and Bordelaise Sauce</li>
                        <li>Guinness Pot Roast</li>
                        <li>Beef Stew</li>
                        <li>Grilled Steak – Your Favorite Cut</li>
                        <li>Texas Chili</li>
                        <li>Braised Chuck Roast</li> 
                        <li>Halupkis – Stuffed Cabbage</li>
                        <li>Beef Stroganoff</li>
                        <li>Beef Curry</li>
                        <li>Beef Pepper Steak</li>
                        <li>Italian Meatballs</li>
                        <li>Irish Corned Beef Brisket</li>
                        <li>Texas Style BBQ Beef Brisket</li>
                        <li>Stuffed Peppers</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="veggies"></span>Sides and Vegetarian (<a href="/media/menus/vegmenu.pdf" target="_blank">Menu</a>)</div>
                <div>
                    <ul>
                        <li>Sweet Potato Casserole</li>
                        <li>Mashed Potatoes and Gravy</li>
                        <li>Green Bean Casserole</li>
                        <li>Green Beans with Shallot Vinaigrette</li>
                        <li>Eggplant Parmesan</li> 
                        <li>Roasted Lemon Asparagus</li>
                        <li>Roasted Mixed Vegetables</li>
                        <li>Balsamic Sautéed Mushrooms and Peppers</li>
                        <li>Broccoli and/or Cauliflower Cheddar Gratin</li>
                        <li>Roasted Acorn Squash with Amaretto Glaze</li>
                        <li>Roasted Butternut Squash with Cinnamon Glaze</li>
                        <li>Glazed Carrots</li>
                        <li>Cream of Corn</li>
                        <li>Cornbread Stuffing</li>
                        <li>Oyster Stuffing</li>
                        <li>Cranberry Sauce</li>
                        <li>Cranberry Gelatin with Walnuts, Celery and Apples</li>
                        <li>Braised Cabbage</li>
                        <li>Polenta</li>
                        <li>Sautéed Swiss Chard</li>
                        <li>Roasted Fingerling Potatoes</li>
                        <li>Roasted Beets</li>
                        <li>Balsamic Roasted Cipolline Onions</li>
                        <li>Ratatouille</li>
                        <li>Sicilian Caponata</li>
                        <li>Red Beans and Rice</li>
                        <li>Spanish Rice</li>
                        <li>Black Beans</li>
                        <li>Dirty Black-eyed Peas</li>
                        <li>Escarole and Canellini Beans</li>
                        <li>Baked Potato</li> 
                        <li>Lemon Broccoli</li>
                        <li>Roasted Tomatoes</li>
                        <li>Rice Pilaf</li>
                        <li>Sautéed Spicy Broccolini</li>
                        <li>Sautéed Spinach with Garlic</li>
                        <li>Braised Artichokes</li>
                        <li>Stuffed Artichokes</li>
                        <li>Scalloped Potatoes</li>
                        <li>Savory Zucchini Corn Bread</li>
                        <li>Sautéed Zucchini and Yellow Squash</li>
                        <li>Cheesy Spaetzel</li>
                        <li>Huluski - Polish Egg Dumplings and Cabbage</li>
                        <li>Macaroni and Cheese</li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <div className="header"><span id="desserts"></span>Desserts</div>
                <div className="summary">
                    All desserts are made to order with the sweetener of your choice: Splenda, Swerve, Agave Nectar, Sugar, or Honey
                </div>
                <div>
                    <ul>
                        <li>Lemoncello Cake with Marscapone Cream Icing and Fresh Fruit</li>
                        <li>Cherry Clafoutis</li>
                        <li>Mama’s Apple Pie</li>
                        <li>Peach Tart</li>
                        <li>Apple Spice Cake with Chocolate Pastry Cream Icing</li>
                        <li>Decadent Chocolate Cake with Chocolate Mousse</li>
                        <li>Pistachio Mousse</li>
                        <li>Crème Brule</li>
                        <li>Nectarine and Blueberry Cobbler</li>
                        <li>Cinnamon and Raisin Rice Pudding</li>
                        <li>Mango and Coconut Milk Rice Pudding</li>
                        <li>Tiramisu</li>
                        <li>Ricotta Cheese cake</li>
                        <li>Pineapple Roulade</li>
                        <li>Upside Down Pineapple Cake</li>
                        <li>Upside Down Pear Chocolate Cake</li>
                        <li>White Chocolate Mousse with Raspberry Couli</li>
                        <li>Nutella Cake with Raspberry Icing</li>
                        <li>Chocolate and Nut Covered Fruit</li>
                    </ul>
                </div>
            </div>
        </>
    );
}