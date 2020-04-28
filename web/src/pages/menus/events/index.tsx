import React, { FC } from 'react';

import { MenuNavProp } from '../../../modules/types';

export const Nav: FC<MenuNavProp> = ({ activeMenuId = 1 }) => {
    return (
        <>
            <li className={ (activeMenuId === 1) ? "active" : "" }><a href="#wedmenu">Holiday</a></li>
            <li className={ (activeMenuId === 2) ? "active" : "" }><a href="#gdmenu">Game Day</a></li>
            <li className={ (activeMenuId === 3) ? "active" : "" }><a href="#hallmenu">Halloween Party</a></li>
            <li className={ (activeMenuId === 4) ? "active" : "" }><a href="#hhdpmenu">Hip Hop Dance Party</a></li>
            <li className={ (activeMenuId === 5) ? "active" : "" }><a href="#horsmenu">Hors D'Oeuvres</a></li>
            <li className={ (activeMenuId === 6) ? "active" : "" }><a href="#icpmenu">Italian Cocktail Party</a></li>
            <li className={ (activeMenuId === 7) ? "active" : "" }><a href="#lnimenu">Ladies Night In</a></li>
            <li className={ (activeMenuId === 8) ? "active" : "" }><a href="#mcnmenu">Monte Carlo Night</a></li>
            <li className={ (activeMenuId === 9) ? "active" : "" }><a href="#nonmenu">New Orleans Night</a></li>
            <li className={ (activeMenuId === 10) ? "active" : "" }><a href="#pspmenu">Paella and Sangria Party</a></li>
            <li className={ (activeMenuId === 11) ? "active" : "" }><a href="#ppmenu">Picnic in the Park</a></li>
            <li className={ (activeMenuId === 12) ? "active" : "" }><a href="#rdtmenu">Romantic Dinner for Two</a></li>
            <li className={ (activeMenuId === 13) ? "active" : "" }><a href="#sbmenu">Shower Brunch Menu</a></li>
            <li className={ (activeMenuId === 14) ? "active" : "" }><a href="#socomenu">Southern Comfort</a></li>
            <li className={ (activeMenuId === 15) ? "active" : "" }><a href="#sccpmenu">Southern Comfort Cocktail Party</a></li>
            <li className={ (activeMenuId === 16) ? "active" : "" }><a href="#tgfmenu">Tuscan Grilled Feast</a></li>
            <li className={ (activeMenuId === 17) ? "active" : "" }><a href="#vegnmenu">Vegas Night</a></li>
            <li className={ (activeMenuId === 18) ? "active" : "" }><a href="#vmpmenu">Venetian Masquerade Party</a></li>
            <li className={ (activeMenuId === 19) ? "active" : "" }><a href="#vdmenu">Valentine's Day Menu</a></li>
            <li className={ (activeMenuId === 20) ? "active" : "" }><a href="#fdpmenu">Fall Dinner Party Menu</a></li>
            <li className={ (activeMenuId === 21) ? "active" : "" }><a href="#stmenu">Surf &amp; Turf Menu</a></li>
        </>
    );
}

export const MenuList: React.FC = () => {
    return (
        <>
            <div id="1" className="menu">
                <div className="header"><span id="wedmenu"></span>Holiday</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Entrées</div>
                            <ul>
                                <li>Citrus and Herb Roasted Turkey</li>
                                <li>Ham with Brown Sugar Glaze</li>
                                <li>Lemon and Thyme Roasted Chicken</li>
                                <li>Lasagna – Vegetarian, Seafood or Italian Sausage and Beef</li>
                                <li>Stuffed Shells – Vegetarian, Seafood or Italian Sausage and Beef</li>
                                <li>Roast Beef au Jus with Creamy Horseradish Sauce</li>
                                <li>Cider Roast Pork Loin</li>
                                <li>Tilapia en Papillote</li>
                                <li>Lamb Moussaka</li>
                                <li>Eggplant Parmesan</li>
                                <li>Shrimp Etouffee</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Soups</div>
                            <ul>
                                <li>Butternut Squash</li>
                                <li>Potato and Leek</li>
                                <li>French Provencal Vegetable Soup</li>
                                <li>Italian Wedding Soup</li>
                                <li>Chestnut Cream</li>
                                <li>Pumpkin</li>
                                <li>Wisconsin Cheddar and Beer</li>
                                <li>Mushroom Cream</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salads</div>
                            <ul>
                                <li>Caesar with House Made Croutons</li>
                                <li>Baby Mixed Green</li>
                                <li>Fresh Pear and Stilton Cheese with Romaine Lettuce</li>
                                <li>Cranberry, Candied Walnuts and Bleu Cheese with Spinach</li>
                                <li>Pasta Salad</li>
                                <li>Coleslaw</li>
                                <li>Italian Antipasto</li>
                                <li>Italian Cucumber, Tomato and Pepper</li>
                                <li>Greek – Tomato, Cucumber and Feta</li>
                                <li>Caprese – Tomato, Mozzarella and Basil</li>
                                <li>Radicchio with Poached Pear and Hazelnuts</li>
                                <li>Lemon Parmesan Arugula</li>
                                <li>Roasted Beet Salad with Goat Cheese</li>
                                <li>Minted Citrus Salad</li>
                                <li>Boston Bibb with Crispy Proscuitto, Mushroom Chips, Blue Cheese and Pear</li>
                                <li>
                                    <div className="sub-header">Homemade Salad Dressings</div>
                                    <ul>
                                        <li>Champagne Vinaigrette</li>
                                        <li>Raspberry Vinaigrette</li>
                                        <li>Buttermilk Ranch</li>
                                        <li>French</li>
                                        <li>Basil Oil</li>
                                        <li>Roquefort Cheese</li>
                                        <li>Honey Dijon</li>
                                        <li>Red Wine and Oregano</li>
                                        <li>Balsamic Vinaigrette</li>
                                        <li>Lemon Vinaigrette</li>
                                        <li>House Italian</li>
                                        <li>Roasted Tomato Balsamic Vinaigrette</li>
                                        <li>Caesar</li>
                                        <li>Peppercorn Ranch</li>
                                        <li>Warm Bacon</li>
                                        <li>Hazelnut Citrus Vinaigrette</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Sides</div>
                            <ul>
                                <li>Sweet Potato Casserole with Brown Sugar and Pecan Crumble</li>
                                <li>Mashed Potatoes and Gravy</li>
                                <li>Green Bean Casserole</li>
                                <li>Green Beans with Shallot Vinaigrette</li>
                                <li>Braised Collard Greens</li>
                                <li>Rice Pilaf</li>
                                <li>Italian Sautéed Zucchini and Tomatoes</li>
                                <li>Roasted Asparagus with Parmesan</li>
                                <li>Steamed Mixed Vegetables with Lemon Sauce</li>
                                <li>Broccoli and/or Cauliflower Cheddar Gratin</li>
                                <li>Roasted Acorn Squash with Amaretto Glaze</li>
                                <li>Roasted Butternut Squash with Cinnamon Glaze</li>
                                <li>Glazed Carrots</li>
                                <li>Cream of Corn</li>
                                <li>Vichy Carrots</li>
                                <li>Cornbread Stuffing</li>
                                <li>Oyster Stuffing</li>
                                <li>Cranberry Sauce</li>
                                <li>Berry Gelatin with Walnuts, Celery and Apples</li>
                                <li>Braised Cabbage</li>
                                <li>Stuffed Artichokes</li>
                                <li>Leek and Garlic Potato Gratin</li>
                                <li>English Peas</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Breads</div>
                            <ul>
                                <li>Yeast Rolls</li>
                                <li>Biscuits</li>
                                <li>Garlic Knots</li>
                                <li>French Baguette Rolls</li>
                                <li>With Honey Butter or Herb, Shallot and Garlic Butter</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Specialty Drinks*</div>
                            <ul>
                                <li>Hot Spiced Apple Cider</li>
                                <li>Amaretto Hot Chocolate</li>
                                <li>Peppermint Hot Chocolate</li>
                                <li>White Sangria</li>
                                <li>Red Sangria</li>
                                <li>Rose Sangria</li>
                                <li>Tuscan Sangria</li>
                                <li>Lemonade</li>
                                <li>Sweet Southern Iced Tea</li>
                                <li>Green Iced Tea</li>
                                <li>Moroccan Mint Iced Tea</li>
                                <li>Strawberry Lime White Iced Tea</li>
                                <li>Margarita, Daiquiri or Smoothie Base – Lime, Lemon, Mango, Strawberry, Mango, Sour Apple and Pear</li>
                                <li>Beer Margarita</li>
                                <li>Cranberry Champagne</li>
                                <li>Mojito Bar with Mint, Simple Syrup, Lime Juice, Pomegranate Juice, Pear Nectar, Apricot Nectar and Various Berries</li>
                                <li>Bloody Mary Bar with Tomato Juice, Celery, Olives, Hot Sauce, A-1, and Pickled Garlic, Asparagus and Onions</li>
                            </ul>
                            <div className="summary"><b>*Alcohol is not included but can be added on site by Chef Laura</b></div>
                        </li>
                        <li>
                            <div className="sub-header">Appetizer Platters</div>
                            <ul>
                                <li>
                                    <div className="sub-header">Option A (feeds 8 - 10)</div>
                                    <ul>
                                        <li>Italian Antipasto Tray</li>
                                        <li>Assorted Cheese and Fruit Tray</li>
                                        <li>Vegetable Tray with Ranch or Blue Cheese Dip</li>
                                        <li>Chicken or Pork Satay with Peanut Butter and Lime Sauce</li>
                                        <li>Caprese Skewers with Balsamic Reduction</li>
                                        <li>Pate au Chou with Assorted Fillings</li>
                                        <li>Filo Dough Cups with Assorted Fillings</li>
                                        <li>Tomato Bruschetta with Grilled Garlic Crostini</li>
                                        <li>Baked Brie with Honey and Almonds and Dipping Bread</li>
                                        <li>Roasted Vegetables with House Made Ricotta and Pesto</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Option B (feeds 8 - 10)</div>
                                    <ul>
                                        <li>Guacamole and Salsa with Tortilla Chips</li>
                                        <li>Fresh Hummus with Pita Chips</li>
                                        <li>Spinach and Artichoke Dip with Tortilla Chips</li>
                                        <li>French Onion Dip with Homemade Potato Chips</li>
                                        <li>Rosemary and Cannellini Bean Spread with Garlic Crostini</li>
                                        <li>Roasted Artichoke Spread with Garlic Crostini</li>
                                        <li>Bacon and Wisconsin Cheddar Spread with Toasted Potato Bread</li>
                                        <li>Shrimp Cocktail with Cocktail Sauce and Lemon Wedges</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="2" className="menu">
                <div className="header"><span id="gdmenu"></span>Game Day</div>
                <div>         
                    <ul>
                        <li>
                            <div className="sub-header">Finger Food</div>
                            <ul>
                                <li>Hot Garlic Wings</li>
                                <li>Sticky Sweet Thai Chili Wings</li>
                                <li>Cheddar Stuffed Jalapeños</li>
                                <li>
                                    Stuffed Potato Footballs:
                                    Beef, Mushrooms, and Gouda
                                    Bacon and Cheddar
                                    Pizza Lovers
                                    Roasted Garlic, Chives, and White Cheddar
                                </li>
                                <li>BBQ Shrimp</li>
                                <li>Steak Bites</li>
                                <li>Corn Bread Muffins</li>
                                <li>7 Layer Dip with Fresh Salsa, Guacamole and Tortilla Chips</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Main Dishes</div>
                            <ul>
                                <li>Chili with Cheddar, Scallions and Sour Cream</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Sandwiches</div>
                            <ul>
                                <li>Italian Sausage and Peppers</li>
                                <li>Italian Meatballs</li>
                                <li>Kielbasa and Hotdogs in Sauerkraut</li>
                                <li>Fresh Ground Chuck Burger with Bacon and Cheddar</li>
                                <li>Fresh Ground Chuck Burger with Blue Cheese Cream Sauce and Applewood Smoked Bacon</li>
                                <li>Fresh Ground Chuck with Caramelized Onions, Sautéed Mushrooms and Swiss Cheese</li>
                                <li>Italian Cannellini Bean Veggie Burger with Fresh Mozzarella, Tomato and Basil Oil</li>
                                <li>Turkey Florentine Burger with Smoked Gouda Sauce</li>
                                <li>Thai Chicken Burger with Peanut Butter Sauce</li>
                                <li>Balsamic Grilled Portobello Mushroom with Roasted Peppers and Mozzarella</li>
                                <li>Indian Garbanzo Bean Veggie Burger with Yogurt Sauce</li>
                                <li>Mexican Black Bean Veggie Burger with Cheddar Cheese, Salsa and Guacamole</li>
                                <li>Barbeque Style Chicken Brest with Cheddar, Ranch Dressing, and Bacon</li>
                                <li>Buffalo Style Chicken Brest with Blue Cheese Sauce and Applewood Smoked Bacon</li>
                                <li>Teriyaki Style Chicken Brest with Ham, Pineapple, and Provolone</li>
                                <li>Tequila Chili Lime Chicken Brest with Salsa and Guacamole</li>
                                <li>Tandoori Style with Mango Chutney, Yogurt Sauce and Grilled Naan Bread</li>
                            </ul>
                            <div className="summary">
                                <b>*Burgers and Sandwiches include Buns, Condiments, Sliced Tomatoes, Lettuce Leaves, Sliced Onions and Bread and Butter Pickles</b>
                            </div>
                        </li>
                        <li>
                            <div className="sub-header">Side Salads</div>
                            <ul>
                                <li>Coleslaw</li>
                                <li>Mexican Coleslaw</li>
                                <li>North Carolina Style Coleslaw</li>
                                <li>Macaroni Salad</li>
                                <li>Italian Pasta Salad</li>
                                <li>Traditional Potato Salad</li>
                                <li>Sweet Potato Salad</li>
                                <li>Honey Dijon Red Potato Salad</li>
                                <li>Mixed Fruit Salad</li>
                                <li>Three Bean Salad</li>
                                <li>Baked Beans - Vegetarian or Bacon</li>
                                <li>Corn and Black Bean Salad</li>
                                <li>Roasted Beet Salad with Goat Cheese</li>
                                <li>Lemon Orzo Salad with Grape Tomatoes</li>
                                <li>Raw Asparagus Salad</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Brownie Variations</div>
                            <ul>
                                <li>Mascarpone Cream Swirled Chocolate Brownies</li>
                                <li>Cherries and Chocolate Brownies</li>
                                <li>Rocky Road Chocolate Brownies</li>
                                <li>Peanut Butter and Chocolate Brownies</li>
                                <li>Raspberry Glazed Chocolate Brownies</li>
                                <li>Coconut Pecan Chocolate Brownies</li>
                                <li>Mint Chocolate Brownies</li>
                                <li>German Chocolate Brownies</li>
                                <li>Chocolate Ganache Brownies</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">House Made Drinks</div>
                            <ul>
                                <li>Lemonade</li>
                                <li>Raspberry Lemonade</li>
                                <li>Southern Sweet Tea</li>
                                <li>Peach Sweet Tea</li>
                                <li>Arnold Palmer</li>
                                <li>Berry Fruit Punch</li>
                                <li>Beer Sangria with Lime and Pear</li>
                                <li>White Sangria with your Favorite Fruits</li>
                                <li>Red Sangria with your Favorite Fruits</li>
                                <li>Smoothie, Daiquiri, Mojito or Margarita Base: Strawberry, Peach, Mango, Raspberry, Lime, Lemon</li>
                            </ul>
                            <div className="summary">
                                <b>*You pick the Sweetener Used for the Simple Syrup-Agave, Honey, Raw Brown Sugar, White Sugar, or Splenda</b>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="3" className="menu">
                <div className="header"><span id="hallmenu"></span>Halloween Party</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Food</div>
                            <ul>
                                <li>Vampire Blood Tomato Soup with Parmesan Crisp</li>
                                <li>Jack-O-Lantern Cheese Ball with Crackers</li>
                                <li>Blood Red Beets and Goat Cheese with Citrus Hazelnut Dressing</li>
                                <li>Wicked Chicken Wings</li>
                                <li>Sweet Potato and Squid Ink Gnocchi with Sage Butter Sauce</li>
                                <li>Deviled Egg Assortment – Original, Crab, and Bacon</li>
                                <li>Fleshy Salmon Toasts</li>
                                <li>Pumpkin Beer Braised Beef Empanadas</li>
                                <li>Jack-O-Lantern Sliders</li>
                                <li>Bloody Hot Salsa with Blue Tortilla Chips</li>
                                <li>Spider Web Baked Brie</li>
                                <li>Creepy Rice Crispies</li>
                                <li>Apples with Salted Caramel Dip</li>
                                <li>Pumpkin Cupcakes with Cream Cheese Icing</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Drinks</div>
                            <ul>
                                <li>Witches Brew – Cider, Cranberry Juice, Fall Spices and Dark Rum</li>
                                <li>Spooky Punch – Strawberry Smoothie, OJ, 7-up and Vodka</li>
                                <li>Bloody Mary Bar Stocked with Tomato Juice, Hot Sauce, Celery, Horseradish, A-1, and Olives</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="4" className="menu">
                <div className="header"><span id="hhdpmenu"></span>Hip Hop Dance Party</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Drinks</div>
                            <ul>
                                <li>Welch’s Grape Shooters*</li>
                                <li>Southern Comfort Punch*</li>
                            </ul>
                            <div className="summary"><b>*If you choose for the drinks to include alcohol, it must be purchased by host</b></div>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>T-Bone Steaks with Worcestershire Chive Butter</li>
                                <li>Fried Chicken with Pecan Honey Glaze</li>
                                <li>Shrimp Etouffee</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Sides</div>
                            <ul>
                                <li>Sweet Potato Casserole</li>
                                <li>Mac-n-Cheese</li>
                                <li>Collard Greens</li>
                                <li>Watermelon Salad with Mint Vinaigrette</li>
                                <li>Jalapeño and Cheese Corn Bread</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Peanut Butter and Welch’s Grape Bars</li>
                                <li>Sweet Potato Pie</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="5" className="menu">
                <div className="header"><span id="horsmenu"></span>Hors D'Oeuvres</div>
                <div>
                    <ul>
                        <li>Prosciutto Wrapped Melon</li>
                        <li>Roasted Balsamic Tomato and Goat Cheese Terrine</li>
                        <li>French Pearl Onion Pastry</li>
                        <li>Green Apple, Raspberry Confiture and Brie</li>
                        <li>Mini Croque Monsieur with Béchamel</li>
                        <li>Clams Casino</li>
                        <li>Grilled Vegetable and Goat Cheese Roulade</li>
                        <li>Caprese Skewer with Balsamic Reduction</li>
                        <li>Crab Stuffed Mushrooms</li>
                        <li>Prosciutto Wrapped Steamed Asparagus</li>
                        <li>Pancetta Wrapped Shrimp with Basil Oil</li>
                        <li>Smoked Salmon Pate au Chou</li>
                        <li>Fresh Vegetable and Goat Cheese Éclair</li>
                        <li>Bacon Wrapped Scallops with Lemon Chive Sauce</li>
                        <li>Grilled Eggplant, House Made Ricotta, Pesto over Tomato Sauce</li>
                        <li>Cherry Tomatoes Stuffed with Gorgonzola</li>
                        <li>Breseola and Goat Cheese Purses</li>
                        <li>Pork Satay Skewer with Peanut Sauce</li>
                        <li>Rosemary Lamb Chops with Mint Yogurt Dip – 2 per person</li>
                        <li>Tuna Tartar on Toast</li>
                        <li>Melon Soup with Crispy Prosciutto</li>
                        <li>Shrimp and Grits Cocktail Glass</li>
                        <li>Collard Green Wrap with Crisp Bacon and Julienned Leeks and Carrots</li>
                        <li>Mini Jalapeño Cornbread Muffins</li>
                        <li>Toasted Potato Bread Topped with North Carolina BBQ Pulled Pork and Slaw</li>
                        <li>Mini Fried Mac and Cheese</li>
                        <li>Buttermilk Waffle Topped with a Fried Chicken Piece with a Syrup Sweetened Gravy</li>
                        <li>Sweet Potato Perogi Filled with Mascarpone Cheese Topped with Candied Pecans</li>
                        <li>Guacamole and Salsa with Tortilla Chips Platter</li>
                        <li>Antipasto Platter – Assortment of Italian Meats, Cheeses and Salads</li>
                        <li>Sliced Vegetable Platter with Ranch Dip</li>
                        <li>Shrimp with Pineapple Salsa</li>
                        <li>Assorted Cheese and Fruit Tray</li>
                        <li>Fresh Made Potato Chips with French Onion Dip</li>
                        <li>Deviled Egg Platter – Assortment of Three Types – Traditional, Crab, and Bacon</li>
                        <li>Roasted Pepper and Garlic Flavored Hummus with Pita and Vegetables</li>
                        <li>Smoked Salmon, Cucumber, Cream Cheese and Dill on Thin White Bread</li>
                        <li>Cranberry Walnut Chicken Salad on Toasted Potato Bread</li>
                        <li>Prosciutto, Blue Cheese, and Fig Spread on Foccacia</li>
                        <li>Tandori Chicken and Minted Yogurt Sauce on Grilled Naan Bread</li>
                        <li>Cherry Tomato, Mozzarella and Basil on Polenta Tarts with Balsamic Reduction</li>
                        <li>Parmesan Crisps with Herbed Mascarpone</li>
                        <li>Roasted Butternut Squash, Toasted Hazelnuts and Asagio Cheese Bruschetta on Crostini</li>
                        <li>Grilled Eggplant, Roasted Pepper, Fresh Ricotta and Pesto Rolatini</li>
                        <li>Italian Sausage, Pepper and Tomato Sauce on Garlic Crostini</li>
                        <li>Tomato, Garlic and Basil Bruschetta on Crostini</li>
                    </ul>
                </div>
                <div className="summary"><b>All items are 3 per person unless otherwise noted</b></div>
            </div>
            <div id="6" className="menu">
                <div className="header"><span id="icpmenu"></span>Italian Cocktail Party (Bruschetta Bar)</div>
                <div className="summary">Italian Ciabatta Bread Toasts with a variety of toppings</div>
                <div>
                    <ul>
                        <li>Chopped Plum Tomatoes, Basil and Garlic</li>
                        <li>Olive Tapinade</li>
                        <li>Cannellini Bean Spread</li>
                        <li>Sweet Italian Sausage in Tomato Sauce</li>
                        <li>Grilled Balsamic Vegetables</li>
                        <li>Roasted Red and Yellow Peppers in an Anchovy based sauce (Bagna Cauda)</li>
                        <li>Mixed Italian Meats - including Mortadella, Genoa Salami, Bresaola, Prosciutto and Capacola Ham</li>
                        <li>Mixed Italian cheeses - including Fresh Mozzarella, Parmesan Cheese, Gorgonzola, Tallegio, and Fontina</li>
                        <li>Marinated Mushrooms</li>
                        <li>Poached Artichokes</li>
                        <li>Ricotta Stuffed Dates</li>
                    </ul>
                </div>
            </div>
            <div id="7" className="menu">
                <div className="header"><span id="lnimenu"></span>Ladies Night In</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Canapés</div>
                            <ul>
                                <li>Pinot Grigio Mussels</li>
                                <li>Proscuitto Wrapped Asparagus</li>
                                <li>Polenta Tartlettes with Tomato, Basil and Buffalo Mozzarella</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad</div>
                            <ul>
                                <li>Baby Arugula with Lemon Dressing Garnished with a Parmesan Crisp</li>
                                <li>Mixed Greens with Wine Poached Pear, Roquefort Cheese and Champagne Vinaigrette</li>
                                <li>Baby Spinach with Raspberries and Goat Cheese with Raspberry Vinaigrette</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Soup</div>
                            <ul>
                                <li>Cream of Chestnut Soup</li>
                                <li>Gingered Carrot Soup</li>
                                <li>Cream of Tomato Basil</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Seared Salmon over Seafood Broth Risotto</li>
                                <li>Mediterranean Chicken with Cherry Tomato, Kalamatas, Capers and Feta over Rice</li>
                                <li>Petite Beef Filet with Carmel-Merlot Sauce and Roasted Root Vegetables and Fingerling Potatoes</li>
                                <li>Butternut Squash Orzo Pasta with Pecorino Cheese Garnished with Caramelized Apples</li>
                                <li>Linguini with Clams and Cherry Tomatoes</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Luscious Chocolate Nutella Mousse with Fresh Raspberries</li>
                                <li>Pear and Almond Tart with Mascarpone Cream</li>
                                <li>Cherry Clafoutis</li>
                                <li>Crème Brulee</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Drinks</div>
                            <ul>
                                <li>Mojito Bar with Mint, Simple Syrup, Lime Juice, Pomegranate Juice, Pear Nectar, Apricot Nectar and Various Berries</li>
                                <li>Bloody Mary Bar with Tomato Juice, Celery, Olives, Hot Sauce, A-1, Pickled Garlic, Asparagus and Onions</li>
                                <li>Strawberry Lime Rose Sangria</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="8" className="menu">
                <div className="header"><span id="mcnmenu"></span>Monte Carlo Night</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Canapés</div>
                            <ul>
                                <li>French Pearl Onion Pastry</li>
                                <li>Green Apple, Raspberry Confiture and Brie</li>
                                <li>Mini Croque Monsieur</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad</div>
                            <ul>
                                <li>Mixed Greens with Wine Poached Pear, Roquefort Cheese and Champagne Vinaigrette</li>
                                <li>Mixed Baby Greens with Raspberries and Goat Cheese with Raspberry Vinaigrette</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Lemon Thyme Roasted Chicken au Jus</li>
                                <li>Steak au Poivre with Cognac Cream Sauce</li>
                                <li>Duck a la Orange</li>
                                <li>Mussels in White Wine, Parsley and Garlic</li>
                                <li>Herbed Potato Gnocchi with Truffled Béchamel Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Sides</div>
                            <ul>
                                <li>French Cut Green Beans with Shallot Vinaigrette</li>
                                <li>Tomato Provencal</li>
                                <li>French Lentils, Pearl Onions and Bacon Lardon</li>
                                <li>Leek and Garlic Potato Gratin</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Pear and Almond Tart</li>
                                <li>Strawberry Genoise Cake with White Chocolate Mousse</li>
                                <li>Crème Brulee</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="9" className="menu">
                <div className="header"><span id="nonmenu"></span>New Orleans Night</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Canapés</div>
                            <ul>
                                <li>Oysters with Champagne Zabaglione</li>
                                <li>Muffuletta Sliders</li>
                                <li>Catfish Nuggets with Remoulade Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad</div>
                            <ul>
                                <li>Baby Greens Tossed in Sherry Wine-Bacon Vinaigrette with Blackberries and Warm Pistachio Crusted Goat Cheese</li>
                                <li>Arugula and Radicchio Tossed in Lemon Vinaigrette with Parmesan, Bresaola and Roasted Sweet Peppers</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Fra Diavolo Jambalaya with Andouille Sausage, Shrimp, Crab, Lobster and Mussels</li>
                                <li>Petite Filet with Béarnaise sauce, Asparagus and Potatoes Au Gratin</li>
                                <li>Buttermilk Fried Chicken with Bourbon Mashed Sweet Potatoes, Toasted Candied Pecans and Fatback Braised Green Beans</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Apple Beignets with Cinnamon Glaze</li>
                                <li>Sweet Potato Flan with Crème Anglaise and Candied Pecans</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="10" className="menu">
                <div className="header"><span id="pspmenu"></span>Paella and Sangria Party</div>
                <div>
                    <ul>
                        <li>Local Farm Fresh Gazpacho with Ceviche Topping</li>
                        <li>
                            <div className="sub-header">Paella</div>
                            <ul>
                                <li>
                                    <div className="sub-header">Black Squid Paella</div>
                                    <ul>
                                        <li>Fresh Squid</li>
                                        <li>Squid Ink</li>
                                        <li>Artichokes</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Vegetable Paella</div>
                                    <ul>
                                        <li>Eggplant</li>
                                        <li>Zucchini</li>
                                        <li>Yellow Squash</li>
                                        <li>Mushrooms</li>
                                        <li>Green Peas</li>
                                        <li>Asparagus</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Chicken and Mushroom Paella</div>
                                    <ul>
                                        <li>Chicken Thighs</li>
                                        <li>Oyster Mushrooms</li>
                                        <li>Shitake Mushrooms</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="sub-header">Shrimp and Asparagus Paella</div>
                                    <ul>
                                        <li>Shrimp</li>
                                        <li>Asparagus</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Sangria</div>
                            <ul>
                                <li>Fuzzy Navel Sangria</li>
                                <li>Rose Wine and Raspberry Sangria</li>
                                <li>Red Wine and Pineapple Sangria</li>
                                <li>White Wine and Strawberry Sangria</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="11" className="menu">
                <div className="header"><span id="ppmenu"></span>Picnic in the Park</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Appetizers</div>
                            <ul>
                                <li>Guacamole and Salsa with Tortilla Chips Platter</li>
                                <li>Antipasto Platter – Assortment of Italian Meats, Cheeses and Salads</li>
                                <li>Sliced Vegetable Platter with Ranch Dip</li>
                                <li>Shrimp with Pineapple Salsa</li>
                                <li>Cheese and Fruit Tray</li>
                                <li>Fresh Made Potato Chips with French Onion Dip</li>
                                <li>Deviled Egg Platter – Assortment of Three Types – Traditional, Crab, and Bacon</li>
                                <li>Hummus with Pita and Vegetables</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Burger Variations*</div>
                            <ul>
                                <li>Fresh Ground Chuck Burger with Bacon and Cheddar</li>
                                <li>Fresh Ground Chuck Burger with Blue Cheese Cream Sauce and Applewood Smoked Bacon</li>
                                <li>Fresh Ground Chuck with Caramelized Onions, Sautéed Mushrooms and Swiss Cheese</li>
                                <li>Italian Veggie Burger with Fresh Mozzarella and Tomato</li>
                                <li>Turkey Florentine Burger with Smoked Gouda Sauce</li>
                                <li>Thai Chicken Burger with Peanut Butter Sauce</li>
                                <li>Balsamic Grilled Portobello Mushroom with Roasted Peppers and Mozzarella</li>
                            </ul>
                            <b><i>*Burgers include Buns, Condiments, Sliced Tomatoes, Lettuce Leaves, Sliced Onions and Bread and Butter Pickles</i></b>
                        </li>
                        <li>
                            <div className="sub-header">Chicken Breast Sandwich Variations*</div>
                            <ul>
                                <li>Barbeque Style with Cheddar, Ranch Dressing, and Bacon</li>
                                <li>Buffalo Style with Blue Cheese Sauce and Applewood Smoked Bacon</li>
                                <li>Teriyaki Style with Ham, Pineapple, and Provolone</li>
                                <li>Tequila Chili Lime Style with Mango Chutney</li>
                                <li>Tandoori Style with Tomato Chutney and Grilled Naan Bread</li>
                            </ul>
                            <b><i>*Sandwiches include Buns, Condiments, Sliced Tomatoes, Lettuce Leaves, Sliced Onions and Bread and Butter Pickles</i></b>
                        </li>
                        <li>
                            <div className="sub-header">Picnic Sides</div>
                            <ul>
                                <li>Coleslaw</li>
                                <li>Mexican Coleslaw</li>
                                <li>North Carolina Style Coleslaw</li>
                                <li>Macaroni Salad</li>
                                <li>Italian Pasta Salad</li>
                                <li>Traditional Potato Salad</li>
                                <li>Sweet Potato Salad</li>
                                <li>Honey Dijon Red Potato Salad</li>
                                <li>Mixed Fruit Salad</li>
                                <li>Three Bean Salad</li>
                                <li>Baked Beans</li>
                                <li>Corn and Black Bean Salad</li>
                                <li>Roasted Beet Salad with Goat Cheese</li>
                                <li>Lemon Orzo Salad with Grape Tomatoes</li>
                                <li>Raw Asparagus Salad</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Brownie Variations</div>
                            <ul>
                                <li>Mascarpone Cream Swirled Chocolate Brownies</li>
                                <li>Cherries and Chocolate Brownies</li>
                                <li>Rocky Road Chocolate Brownies</li>
                                <li>Peanut Butter and Chocolate Brownies</li>
                                <li>Raspberry Glazed Chocolate Brownies</li>
                                <li>Coconut Pecan Caramel Chocolate Brownies</li>
                                <li>Mint Chocolate Brownies</li>
                                <li>German Chocolate Brownies</li>
                                <li>Chocolate Ganache Brownies</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">House Made Drinks</div>
                            <ul>
                                <li>Lemonade</li>
                                <li>Raspberry Lemonade</li>
                                <li>Southern Sweet Tea</li>
                                <li>Peach Sweet Tea</li>
                                <li>Arnold Palmer</li>
                                <li>Berry Fruit Punch</li>
                                <li>White Sangria with your Favorite Fruits</li>
                                <li>Red Sangria with your Favorite Fruits</li>
                                <li>Smoothie, Daiquiri, Mojito or Margarita Base: Strawberry, Peach, Mango, Raspberry, Lime, Lemon</li>
                            </ul>
                            <b><i>You pick the sweetener used for the simple syrup - Agave, Honey, Raw Brown Sugar, White Sugar, or Splenda</i></b>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="12" className="menu">
                <div className="header"><span id="rdtmenu"></span>Romantic Dinner for Two</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Canapés</div>
                            <ul>
                                <li>Oysters with Champagne Zabaglione Gratin</li>
                                <li>Butternut Squash and Asagio Cheese Bruschetta</li>
                                <li>Steak Tartar in Hard Boiled Egg Half with Béarnaise Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Soup</div>
                            <ul>
                                <li>Cream of Chestnut soup Garnished Roasted Fennel and Chopped Chestnuts</li>
                                <li>Sweet Potato Bisque Garnished with Chopped Apple and Pecan</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad</div>
                            <ul>
                                <li>Warm Shaved Fennel with Pink Grapefruit</li>
                                <li>Roasted Red Beet and Goat Cheese Napoleon with Hazelnut Citrus Vinaigrette</li>
                                <li>Butter Lettuce Salad with Crispy Prosciutto, Oyster Mushroom Chips, Blue Cheese and Pears</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Grilled Eggplant, Roasted Pepper, Ricotta and Pesto Rolatini with Tomato Sauce</li>
                                <li>Cider Roast Pork Loin with Apple and Fig Compote and Roasted Butternut and Acorn Squash with Amaretto and Sage Sauce</li>
                                <li>Braised Leg of Lamb with Roasted Root Vegetables over Creamy Polenta</li>
                                <li>Roasted Lemon and Thyme Chicken with Ratatouille and Roasted Fingerling Potatoes</li>
                                <li>Seared Salmon over Saffron and Fennel Risotto with Clams and Mussels</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Apple and Cranberry Crisp with Vanilla Ice Cream</li>
                                <li>Upside Down Pear Chocolate Cake with Crème Anglaise</li>
                                <li>White Chocolate Mousse with Raspberry Couli</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="13" className="menu">
                <div className="header"><span id="sbmenu"></span>Shower Brunch Menu</div>
                <div>
                    <ul>
                        <li>Quiche Lorraine – Bacon and Gruyere Cheese</li>
                        <li>Quiche Florentine – Spinach, Leek and Fontina Cheese</li>
                        <li>Chesapeake Bay Quiche – Crabmeat, Swiss Cheese and Old Bay</li>
                        <li>Cucumber, Dill and Cream Cheese Tea Sandwich</li>
                        <li>Smoked Salmon, Egg Salad and Crème Fraiche Tea Sandwich</li>
                        <li>Fried Green Tomatoes with Corn and Avocado Salsa</li>
                        <li>Caramelized French Onion Tart</li>
                        <li>Candied Apple Wood Smoked Bacon</li>
                        <li>Chicken, Apple and Fennel Sausage</li>
                        <li>Baked French Toast</li>
                        <li>Brie en Croute with Raspberry Confiture</li>
                        <li>Blueberry Scones</li>
                        <li>Fresh Cinnamon Rolls</li>
                        <li>
                            <div className="sub-header">Drinks</div>
                            <ul>
                                <li>Coffee Punch</li>
                                <li>Southern Sweet Peach Black Iced or Hot Tea</li>
                                <li>Strawberry Lime Iced or Hot White Tea</li>
                                <li>Pineapple Ginger Iced or Hot Green Tea</li>
                                <li>Fresh Margarita Base</li>
                                <li>Fresh Daiquiri Base</li>
                                <li>Bloody Mary Bar</li>
                                <li>Fresh Orange Juice</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="14" className="menu">
                <div className="header"><span id="socomenu"></span>Southern Comfort</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">First Course</div>
                            <ul>
                                <li>Individual Shrimp and Grits Cocktail Glass</li>
                                <li>Southern Deviled Eggs</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Main Course</div>
                            <ul>
                                <li>Fried Chicken and Buttermilk Waffles with Syrup Sweetened Gravy</li>
                                <li>Braised Collard Greens with Country Ham</li>
                                <li>Mac and Cheese</li>
                                <li>Cornbread Muffins</li>
                                <li>Southern Comfort Punch - Southern Comfort, Pineapple Juice, Apricot Nectar, and Lemon Lime Soda</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Assorted Pie Display</div>
                            <ul>
                                <li>Sweet Potato Pie</li>
                                <li>Lemon Meringue Pie</li>
                                <li>Pecan Pie</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="15" className="menu">
                <div className="header"><span id="sccpmenu"></span>Southern Comfort Cocktail Party</div>
                <div>
                    <ul>
                        <li>Individual Shrimp and Grits Cocktail Glass</li>
                        <li>Collard Green Wrap with Crisp Bacon and Julienned Leeks and Carrots</li>
                        <li>Mini Cornbread Muffins</li>
                        <li>Toasted Potato Bread Topped with North Carolina BBQ Pulled Pork and Slaw</li>
                        <li>Mini Fried Mac and Cheese</li>
                        <li>Buttermilk Waffle Toasted Crisp Topped with a Fried Chicken Piece with a Syrup Sweetened Gravy</li>
                        <li>Sweet Potato Perogi Filled with Mascarpone Cheese Topped with Candied Pecans</li>
                        <li>Southern Comfort Punch</li>
                    </ul>
                </div>
            </div>
            <div id="16" className="menu">
                <div className="header"><span id="tgfmenu"></span>Tuscan Grilled Feast</div>
                <div>
                    <ul>
                        <li>Grilled Garlic Italian Loaf with Cherry Tomato Bruschetta and Fresh Mozzarella and Basil</li>
                        <li>Grilled Romaine Cesar Salad</li>
                        <li>Rosemary and Garlic Marinated Ribeye Steaks</li>
                        <li>Pancetta Wrapped Grilled Shrimp</li>
                        <li>Grilled Asparagus with Lemon Oil and Shaved Parmesan</li>
                        <li>Balsamic Cipollini Onions</li>
                        <li>White Wine and Parsley Marinated Baby Portobello Mushrooms</li>
                        <li>Roasted Fingerling Potatoes</li>
                        <li>Dessert Grilled Polenta with Grilled Balsamic Plums</li>
                        <li>Suggested drink: Tuscan Sangria (suggested drink; <b><i>*Host must purchase alcohol</i></b></li>
                    </ul>
                </div>
                <div className="summary"><b>Chef will prep non-alcohol related ingredients at party!</b></div>
            </div>
            <div id="17" className="menu">
                <div className="header"><span id="vegnmenu"></span>Vegas Night</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Canapés</div>
                            <ul>
                                <li>Clams Casino</li>
                                <li>Grilled Vegetable and Goat Cheese Roulade</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad</div>
                            <ul>
                                <li>Cesar Salad</li>
                                <li>Wedge Salad with Crumbled Blue Cheese and Bacon with Buttermilk Ranch Dressing</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Cowboy Ribeye with Garlic and Leek Scalloped Potatoes</li>
                                <li>Seafood Puttanesca over Linguine</li>
                                <li>Organic Chicken with Roasted Fingerling Potatoes and Glazed Carrot Coins</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Assorted Chocolate Covered Fruit</li>
                                <li>Decadent Chocolate cake with White Chocolate Mousse</li>
                                <li>Luscious Berry Tart with Apricot Glaze</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="18" className="menu">
                <div className="header"><span id="vmpmenu"></span>Venetian Masquerade Party</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Canapés</div>
                            <ul>
                                <li>Caprese Skewer with Balsamic Reduction</li>
                                <li>Crab Stuffed Mushrooms</li>
                                <li>Prosciutto Wrapped Steamed Asparagus</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad</div>
                            <ul>
                                <li>Baby Arugula, Sweet Grape Tomatoes with Lemon Dressing Garnished with a Parmesan Crisp</li>
                                <li>Mixed Greens with Marinated Mushrooms and Roasted Tomato Balsamic Vinaigrette</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Seared Salmon over Risotto</li>
                                <li>Mixed Shellfish with Squid Ink Linguini in Seafood Cream Sauce</li>
                                <li>Veal Picatta with Roasted Fingerling Potatoes and Asparagus Tips</li>
                                <li>Chicken Marsala over Mushroom Risotto</li>
                                <li>Rosemary Sirloin Skewer with Sautéed Spinach and Gorgonzola Mashed Potatoes</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Tiramisu</li>
                                <li>Various Biscotti Tray</li>
                                <li>Luscious Nutella Cake</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="19" className="menu">
                <div className="header"><span id="vdmenu"></span>Valentine's Day Menu</div>
                <div>         
                    <ul>
                        <li>
                            <div className="sub-header">Appetizers</div>
                            <ul>
                                <li>Roasted Beet, Goat Cheese and Walnut Tart</li>
                                <li>Pancetta Wrapped Scallops with Lemon Chive Butter</li>
                                <li>Sun Dried Tomatoes and Goat Cheese Stuffed Mushrooms</li>
                                <li>Sun Dried Tomato and Lemon and Parsley Ricotta Brushetta</li>
                                <li>Balsamic sautéed Peppers and Mushroom and Goat Cheese Brushetta</li>
                                <li>Fennel Sausage Stuffed Mushrooms</li>
                                <li>Spanish Antipasto with Chorizo, Serrano Ham, Machego Cheese, Piquillo red peppers, Marcona Almonds and Manzanilla Olives</li>
                                <li>Prosciutto, Roasted Red Peppers and Fresh Mozzarella over Baby Greens</li>
                                <li>Aphrodisiac Raw Oysters with Red Wine and Shallot Mignonette</li>
                                <li>Oyster or Clams casino</li>
                                <li>Pan Seared Lamb Chops with Chocolate Merlot Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad Choices</div>
                            <ul>
                                <li>Roasted Beet and Goat Cheese Napoleon with Citrus Hazelnut Dressing</li>
                                <li>Spinach Salad with Oranges and red onion with Champagne Citrus Vinaigrette</li>
                                <li>Fennel Salad with Oranges, Pomegranate Seeds and Olives with Orange Champagne Vinaigrette</li>
                                <li>Roasted Beets with Burrata Cheese and Arugula with Balsamic Glaze and Lemon Olive Oil</li>
                                <li>Mixed Greens with Pomegranate Seeds, Goat Cheese and Balsamic Vinaigrette</li>
                                <li>Spinach with Dried Cranberries, Blue Cheese, Candied Walnuts and Balsamic Vinaigrette</li>
                                <li>Pear, Stilton Blue Cheese, Candied Pecans over Romaine with Champagne Vinaigrette</li>
                                <li>Pan Fried Oysters over Wilted Greens</li>
                                <li>Spanish Salad with Mixed greens, Serrano Ham, Machego, Red Onion, Olives and Sherry Vinaigrette</li>
                                <li>Radicchio, Toasted Hazelnuts, Truffled Cheese, and Red Wine Poached Pear dressed with Balsamic Vinaigrette</li>
                                <li>Italian Bresola with Arugula, Marinated Shitake, Shaved Parmesan dressed with Goat Cheese Cream and Lemon Oil</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Soups</div>
                            <ul>
                                <li>Amaretto Butternut Squash Soup</li>
                                <li>Mushroom and Sherry Soup with Crouton and Gruyere Au Gratin</li>
                                <li>Oyster Chowder</li>
                                <li>Roasted Red Pepper Soup with Mascarpone and Crouton</li>
                                <li>Carrot and Ginger Soup with Garnished with Greek Yogurt, Chive and Nutmeg</li>
                                <li>Tomato Basil Soup with Parmesan Crouton</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Lobster Thermidor Ramekin in Beurre Blanc</li>
                                <li>Roasted Beet and Goat Cheese Ravioli in Tarragon Butter</li>
                                <li>Beef Tenderloin with Balsamic Fig Glaze, Pan Seared Large Scallop, Asparagus and Mascarpone Potato Puree</li>
                                <li>New York Strip with Charred Radicchio and Potatoes</li>
                                <li>Filet Mignon with Chocolate Merlot Sauce with Parmesan Mashed Potatoes and with Julienne Carrot, Zucchini and Yellow Squash</li>
                                <li>Pan Seared Scallops with Broccolini and Red Potatoes</li>
                                <li>Roasted Chicken with Sun Dried Tomato-Almond Pesto and Roasted Potatoes</li>
                                <li>Shrimp and Spinach with Pink Vodka Sauce over Penne</li>
                                <li>Sun Dried Tomato and Goat Cheese Stuffed Chicken Breast with Sautéed Zucchini and Yellow Squash</li>
                                <li>Pan Seared Duck Breast with Cherry Sauce over Pureed Potato with Julienne Carrot, Zucchini and Yellow Squash</li>
                                <li>Spinach, Prosciutto and Provolone Beef Roulade Cooked Tomato Sauce – Brasciole with Parsley Potatoes</li>
                                <li>Cornmeal Coated Pan Fried Oysters with Red Peppers and Cabbage Slaw</li>
                                <li>Snapper Vera Cruz in Tomato Sauce with Peppers and Olives with Roasted Potatoes</li>
                                <li>Chicken Cacciatore with Tomatoes, Mushrooms and Peppers over Penne</li>
                                <li>Agave Glazed Salmon with Strawberry Salsa, Asparagus and Coconut Basmati Rice</li>
                                <li>Crispy Skin Salmon with Lemon Dijon Tarragon Butter with Baby Red Potatoes and Crisp Asparagus</li>
                                <li>Ginger Syrup glazed Salmon with Tangerine Ginger Relish with Baby Potatoes and Haricot Vert</li>
                                <li>Squid and Squid Ink Pasta with Pancetta and Artichokes</li>
                                <li>Pan Seared Chicken Breast Balsamic Strawberry Sauce with Green Beans, Almonds and Rice</li>
                                <li>Potato Gnocchi with Black Truffle Cream Sauce</li>
                                <li>Pan Seared Stuffed Pork Chop with Mashed Potatoes and Gravy with Green Bean and Mushroom Saute</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Amaretto Chocolate Fondue with Fresh Fruit</li>
                                <li>Nuts and Berries Fondue with Frangelico and Chambord with White Chocolate and Fresh Fruit</li>
                                <li>Strawberry Bread Pudding with Strawberry Fragoli Liquor Sauce</li>
                                <li>Vanilla Ice Cream with Balsamic Strawberries</li>
                                <li>Makin’ Whoopie Pies – Chocolate Cakes filled with Vanilla Frosting</li>
                                <li>Cherry Clafoutis</li>
                                <li>Amaretto Poached Pears with Vanilla Ice Cream and Toasted Almonds</li>
                                <li>Chocolate Hazelnut Heart Shaped Cake with Raspberries</li>
                                <li>Crème Brulee in Heart Shaped Ramekin</li>
                                <li>Raspberry Bundt cake with Vanilla Whipped Cream</li>
                                <li>Orange Polenta Cake with Candied Orange and Shaved Parmegano Reggiano</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Drinks</div>
                            <ul>
                                <li>Mulled Red Wine with Pears</li>
                                <li>Tuscan Chianti Sangria with Oranges, Cinnamon, and Clove</li>
                                <li>Amaretto Hot Chocolate with Fresh Whipped Cream</li>
                                <li>Strawberry Proscecco Cocktail with Fragoli and Fresh Strawberry</li>
                                <li>Raspberry Proscecco Cocktail with Chambord and Fresh Raspberry</li>
                                <li>Nuts and Berries Cocktail with Mulled Fresh Strawberries, Chambord, Frangelico and Heavy Cream</li>
                                <li>Beauty and the Beast – Jager and Tequila Rose with Mulled Fresh Strawberries</li>
                                <li>Fresh Strawberry and Mint Mojito</li>
                            </ul>
                            <strong>
                                <i>All alcohol must be purchased by host</i>
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="20" className="menu">
                <div className="header"><span id="fdpmenu"></span>Fall Dinner Party Menu</div>
                <div>
                    <div className="italic">
                        <ul>
                            <li>$500 for 4 choices for parties of 4 or less / $85 per person for parties of 5 or more</li>
                            <li>$25 per child Ages 6- 12 if children are eating the same food.</li>
                            <li>If special ingredients need to be purchased for them it will be at least $100, but adjusted depending on amount of children present.</li>
                            <li>Drink Set up - $8/person</li>
                        </ul>
                    </div>
                    <ul>
                        <li>
                            <div className="sub-header">Appetizers</div>
                            <ul>
                                <li>Mini Beef Wellingtons with Spinach or Mushrooms</li>
                                <li>Broiled Mussels, Clams and Shrimp in Garlic, Shallot and Parsley Butter with Crusty Bread</li>
                                <li>Butternut Squash and Feta in Phyllo Pie</li>
                                <li>Beef Tenderloin ad Horseradish Crostini</li>
                                <li>New Orleans BBQ shrimp</li>
                                <li>Herb Crusted Lamb Chops</li>
                                <li>Veal and Pork Meat Ball Braised in Tomato Sauce over Slow Roasted Polenta topped with Aged Parmigiano</li>
                                <li>Ahi Poke Salad</li>
                                <li>Antipasto with Prosciutto, Salami, Olives, Provolone, and Roasted Red Peppers</li>
                                <li>Steak Tartar with Roasted Garlic Aioli</li>
                                <li>Smoked Salmon over Potato and Chive Pancakes Topped with Mascarpone</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad Choices</div>
                            <ul>
                                <li>Roasted Beet and Goat Cheese Napoleon with Citrus Hazelnut Dressing</li>
                                <li>Spinach with Dried Cranberries, Blue Cheese, Candied Walnuts and Balsamic Vinaigrette</li>
                                <li>Pear, Stilton Blue Cheese, Candied Pecans over Romaine with Champagne Vinaigrette</li>
                                <li>Radicchio, Mixed greens, Toasted Hazelnuts, Truffled Cheese, and Red Wine Poached Pear dressed with Balsamic Vinaigrette</li>
                                <li>Italian Bresola with Arugula, Marinated Shitake, Shaved Parmesan dressed with Goat Cheese Cream and Lemon Oil</li>
                                <li>Roasted Butternut Squash, Cranberries, Goat cheese and Pumpkin Seeds over Mixed Greens with Warm Cider Vinaigrette</li>
                                <li>Apple, Candied Pecans, Celery, Dried Cherries and Brie over Mixed Greens with Maple Balsamic Dressing</li>
                                <li>Bacon, Mushroom, Red Onion and Hard Boiled Egg over Spinach with Warm Bacon Dressing</li>
                                <li>Warm Mushroom Salad with Prosciutto, Sun Dried tomatoes over Arugula with Shaved Parmesan</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Soups</div>
                            <ul>
                                <li>Butternut Squash Soup with garnished with Apple, Bacon and Crème Fraiche</li>
                                <li>Mushroom and Sherry Soup with Crouton and Gruyere Au Gratin</li>
                                <li>Cream of Chestnut soup Garnished Roasted Fennel and Chopped Chestnuts</li>
                                <li>Cream of Celery Root Soup Garnished with Mushroom Duxelle</li>
                                <li>Potato Soup Garnished with Irish Cheddar, Applewood Bacon and Sour Cream</li>
                                <li>Pumpkin Soup Garnished with Cranberry Apple Relish</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Entrees</div>
                            <ul>
                                <li>Pan Seared Bone In Pork Chop with Apple and Fig Compote with Brussel Sprouts over Winter Squash Puree</li>
                                <li>Sirloin Steak Pinwheel with Spinach, Goat Cheese, Pine Nuts and Roasted Peppers in Tomato Sauce over Mashed Potatoes</li>
                                <li>Roasted Lemon and Thyme Chicken with Roasted Cauliflower, Raisins and Pine Nuts over Mashed Sweet Potatoes</li>
                                <li>Pan Seared Bone in Pork Chop with Crispy Brussel Sprouts with Bacon over Celery Root Puree</li>
                                <li>Pancetta Wrapped Pork or Turkey Tenderloin with Apricot Pinot Grigio Sauce with Assorted Vegetables over Mashed Potatoes</li>
                                <li>Snapper Vera Cruz with Zucchini, Peppers, Capers and Onions over Turmeric Rice</li>
                                <li>Pan Seared Ribeye Topped with Chicago Style Horseradish Mashed Potatoes with Sherry Thyme Mushrooms and Peppers</li>
                                <li>Broiled Mussels, Clams and Shrimp in Garlic, Shallot and Parsley Butter over Linguini</li>
                                <li>Pan Seared Halibut Topped with Mushroom Marsala over Risotto</li>
                                <li>Tuscan Ribeye with Lemon, Garlic and Rosemary with Roasted Sweet Potatoes, Shallots and Parsnips</li>
                                <li>Pan Seared Scallops with Roasted Beets, Beet Greens Topped with Beet and Orange Gremolata over Risotto</li>
                                <li>Fish or Chicken Piccata over Linguini with Asparagus</li>
                                <li>Chicken Cacciatore with Bone in Chicken Legs and Thighs over Penne with Mushrooms, Peppers and Onions</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Vegetarian</div>
                            <ul>
                                <li>Ricotta, Spinach, Artichoke, Parsley and Basil Stuffed Shells in Tomato Sauce (Portabellas or peppers can be used to keep it gluten free)</li>
                                <li>Butternut Squash Gnocchi in Butter Sage Sauce</li>
                                <li>Baby Bella, Shitake, Trumpet and Oyster Mushroom Risotto or Pasta finished with Marsala, Cream, Butter, Aged Parmesan and Truffle Oil</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Vegan</div>
                            <ul>
                                <li>Sweet Potato, Spinach, Parsley, Basil and Silken Tofu Stuffed Shells in Tomato Sauce topped with Vegan Parmesan</li>
                                <li>Zoodles with Sun Dried Tomatoes, Capers, Roasted Peppers and Shitake Mushrooms with Lemon Oil Topped with Fresh Basil</li>
                                <li>Baby Bella, Shitake, Oyster Risotto Finished Soy Cream, Vegan Parmesan and Truffle Oil</li>
                                <li>Spinach, Pepper and Risotto Stuffed Portobello topped with Vegan Mozzarella with a Side of Cubed Butternut Squash</li>
                                <li>Sausage and Peppers in Tomato Sauce over Rigatoni with Vegan Mozzarella</li>
                                <li>Grilled Zucchini, Eggplant, Red Pepper and Vegan Mozzarella Stromboli</li>
                                <li>Quinoa and Cranberry Stuffed Acorn Squash with apricot and Apple Compote</li>
                                <li>Roasted Cauliflower and Chickpeas over Quinoa with Myer Lemon Dijon Sauce Topped with Parsley</li>
                                <li>Beet and Lentil Cake Stuffed Portabello topped with Vegan Sour Cream and Fresh Herbs</li>
                                <li>Wild Rice, Dried Fruit and Walnut Stuffed Acorn Squash with Amaretto Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Desserts</div>
                            <ul>
                                <li>Honey Crisp Apple and Walnut Cake with Chocolate Sauce</li>
                                <li>Bread Pudding with Bourbon Sauce</li>
                                <li>Pumpkin Cake with Cream Cheese and Amaretto Frosting</li>
                                <li>Apple Crisp with Vanilla Ice Cream</li>
                                <li>Camembert Feuillete with Apricot Syrup and Pistachios</li>
                                <li>Apple Strudel</li>
                                <li>Crème Brulee</li>
                                <li>Wine Poached Pears and Vanilla Ice Cream with Mulled Wine Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Drinks (All alcohol must be purchased by host)</div>
                            <ul>
                                <li>Mulled Red Wine with Pears</li>
                                <li>Tuscan Chianti Sangria with Oranges</li>
                                <li>Amaretto Hot Chocolate with Fresh Whipped Cream</li>
                                <li>Cape Cod Cocktail with Cranberries, Limes Slices, Lemon Lime Soda and Vodka</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="21" className="menu">
                <div className="header"><span id="stmenu"></span>Surf &amp; Turf Menu</div>
                <div>
                    <ul>
                        <li>
                            <div className="sub-header">Pricing</div>
                            <ul>
                                <li>All Parties are a $500 Minimum</li>
                                <li>
                                    One Choice from Surf and One Choice from Turf, Two Accompaniments, Two Sides, 
                                    One Appetizer, and One Salad or Soup - $100/Person*
                                </li>
                                <li>Add Dessert - $15/person/Choice</li>
                                <li>Add more appetizers - $15/person/choice</li>
                                <li>Add Soup - $5/person</li>
                                <li>Add Specialty Drink - $5/person</li>
                                <li>When over 10 people please add an assistant on site fee of $150</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Prime Steak &amp; Chops</div>
                            <ul>
                                <li>Ribeye</li>
                                <li>Pork Chop</li>
                                <li>Lamb Chop</li>
                                <li>Bone-In Veal Chop</li>
                                <li>New York Strip</li>
                                <li>Porterhouse</li>
                                <li>Center-Cut Filet Mignon</li>
                                <li>Red Wine Braised Leg of Lamb</li>
                                <li>Veal Osso Bucco</li>
                                <li>Veal Chop</li>
                                <li>
                                    <div className="summary">Your favorite cut of beef with any two of the following accompaniments:</div>
                                    <ul>
                                        <li>Rosemary Cabernet Sauce</li>
                                        <li>Olive Tapenade Sauce</li>
                                        <li>Lemon Horseradish Cream</li>
                                        <li>Blueberry Sauce</li>
                                        <li>Blackberry Sauce</li>
                                        <li>Chocolate Merlot Sauce</li>
                                        <li>Chimichurri</li>
                                        <li>Béarnaise Sauce</li>
                                        <li>Roasted Garlic Thyme Butter</li>
                                        <li>Blue Cheese and Shallot Butter</li>
                                        <li>Gremolata – Garlic, Lemon Zest and Parsley</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Surf Entrees</div>
                            <ul>
                                <li>Honey Glazed Salmon Fillet with Blueberry Sauce</li>
                                <li>Jumbo Pinot Grigio Shrimp Scampi</li>
                                <li>Pan Seared Scallops with Lemon Chive Sauce</li>
                                <li>Jumbo Lump Crab Cakes in Portobello (available April – December) with Remoulade Sauce</li>
                                <li>Cranberry Goat Cheese Salmon Cakes</li>
                                <li>Jumbo Old Bay Shrimp</li>
                                <li>Coconut Crusted Shrimp with Sweet Thai Chili Sauce</li>
                                <li>Seafood Alfredo</li>
                                <li>Spicy Seafood Sauté</li>
                                <li>Chilean Seabass Fillet with Roasted Red Pepper Sauce</li>
                                <li>Sole or Trout Meuniere (Skate may be available upon request)</li>
                                <li>Sole or Trout Picatta (Skate may be available upon request and availability)</li>
                                <li>Pan Seared Whole or Filleted Branzino with Reduced Balsamic (Seasonal)</li>
                                <li>Snapper Vera Cruz</li>
                                <li>Rockfish Ratatouille</li>
                                <li>Lobster Tail with Drawn Butter</li>
                                <li>Alaskan King Crab Legs with Drawn Butter</li>
                                <li>Macadamia Nut Crusted Mahi Mahi and Pineapple Salsa</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Side Dishes</div>
                            <ul>
                                <li>White Wine, Butter and Thyme Mushrooms</li>
                                <li>Red Wine, Butter and Rosemary </li>
                                <li>Balsamic Mushrooms and Peppers</li>
                                <li>Roasted Italian Vegetables in Balsamic Sauce (Eggplant, Zucchini, Mushrooms and Peppers)</li>
                                <li>Broccolini with Garlic and Chili Flake</li>
                                <li>Steamed Jumbo Asparagus with Hollandaise Sauce</li>
                                <li>Grilled Jumbo Asparagus with Shaved Parmesan</li>
                                <li>Broccoli with Orange Marmalade Sauce</li>
                                <li>Creamed Spinach</li>
                                <li>Creamed Corn</li>
                                <li>Sautéed Brussels Sprouts with Bacon and Garlic</li>
                                <li>Garlicky Spinach</li>
                                <li>Green Bean, Red Pepper and Shallot Sautee</li>
                                <li>French Ratatouille</li>
                                <li>Italian Capanota</li>
                                <li>Traditional Macaroni and Cheese</li>
                                <li>Bacon &amp; Onion Macaroni &amp; Cheese</li>
                                <li>Truffled Macaroni &amp; Cheese</li>
                                <li>Spatzle with appropriate sauce based on Accompaniments</li>
                                <li>Gnocchi with appropriate sauce based on Accompaniments</li>
                                <li>Jumbo Baked Potato with Butter and Sour Cream</li>
                                <li>Lyonnaise Potatoes</li>
                                <li>Sour Cream Mashed Potatoes</li>
                                <li>Chicago Style Horseradish Mashed Potatoes</li>
                                <li>"Twice Baked" Au Gratin Potatoes with Cheddar and Bacon</li>
                                <li>Garlic and Leek Potato Gratin with Gruyere and Parmesan</li>
                                <li>Herb and Garlic Roasted Baby Potatoes</li>
                                <li>Jumbo Baked Sweet Potato with Cinnamon Honey Butter</li>
                                <li>Bourbon mashed Sweet Potatoes</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Appetizer Platters</div>
                            <ul>
                                <li>Mini Beef Wellingtons with Spinach or Mushrooms</li>
                                <li>Lemon Thyme Tuna Tartar on Foccacia</li>
                                <li>Mussels or Clams in a Tomato, Garlic and White Wine Broth</li>
                                <li>Bacon Wrapped Blue Cheese Stuffed Dates</li>
                                <li>Spinach and Goat Cheese Stuffed Mushrooms (V)</li>
                                <li>Sausage and Mozzarella Stuffed Mushrooms</li>
                                <li>Crab Stuffed Mushrooms (Available April- December</li>
                                <li>Pancetta Wrapped Shrimp with Pesto</li>
                                <li>Beef Tenderloin and Horseradish Crostini</li>
                                <li>Salami Rolls with Mascarpone, Shaved Fennel, Olive and Orange Zes</li>
                                <li>Smoked Salmon, Cream Fraiche and Chive Canapes</li>
                                <li>Mushroom Duxelle Pinwheels (V)</li>
                                <li>Croque Monsieur Sandwiches</li>
                                <li>Oysters with Champagne Zabaglione Gratin</li>
                                <li>Italian Antipasto Tray</li>
                                <li>Assorted Cheese and Fruit Tray (V)</li>
                                <li>Vegetable Tray with Ranch Dip (V)</li>
                                <li>Chicken or Pork Satay with Peanut Butter and Lime Sauce</li>
                                <li>Caprese Skewers with Balsamic Reduction (v)</li>
                                <li>Pate au Chou with Assorted Fillings</li>
                                <li>Filo Dough Cups with Assorted Fillings</li>
                                <li>Tomato Basil Bruschetta with Grilled Garlic Crostini (V)</li>
                                <li>Baked Brie with Honey, Sliced Almonds and Baguette Slices (V)</li>
                                <li>Roasted Vegetables with House Made Ricotta and Pesto (V)</li>
                                <li>Warm Crab Dip with Baguette Slices</li>
                                <li>Cheese Ball with Crackers and Sliced Apples and Pears</li>
                                <li>Pepper and Chive Coated Goat Cheese Ball with Crackers (V)</li>
                                <li>Prosciutto Wrapped Steamed Asparagus</li>
                                <li>Assorted Fresh Fruit with Creamy Dip (V)</li>
                                <li>Guacamole and Salsa with Tortilla Chips (V)</li>
                                <li>Fresh Hummus with Pita Triangles (V)</li>
                                <li>Spinach and Artichoke Dip with Tortilla Chips (V)</li>
                                <li>French Onion Dip with Potato Chips (V)</li>
                                <li>Rosemary and Cannellini Bean Spread with Garlic Crostini (V)</li>
                                <li>Roasted Artichoke Spread with Garlic Crostini (V)</li>
                                <li>Bacon and Wisconsin Cheddar Spread with Toasted Potato Bread</li>
                                <li>Butternut Squash Puree and Asagio with Crostini (V)</li>
                                <li>Soup Choices:</li>
                                <li>Butternut Squash</li>
                                <li>Potato and Leek</li>
                                <li>French Lentil</li>
                                <li>Celery Root in the Winter/Spring</li>
                                <li>Gazpacho in the Summer/Fall</li>
                                <li>Italian Wedding Soup</li>
                                <li>Sherry Cream of Mushroom</li>
                                <li>Wisconsin Cheddar and Beer</li>
                                <li>Carrot and Ginger</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Salad Choices</div>
                            <ul>
                                <li>Caesar</li>
                                <li>Baby Mixed Green with Cucumber and Carrot</li>
                                <li>Fresh Pear and Stilton Cheese with Romaine Lettuce</li>
                                <li>Cranberry, Candied Walnuts and Bleu Cheese with Spinach</li>
                                <li>Italian Cucumber, Tomato and Pepper</li>
                                <li>Greek – Tomato, Cucumber, Kalamata and Feta</li>
                                <li>Caprese – Tomato, Mozzarella and Basil with Balsamic Vinaigrette (Tomatoes are roasted out of Season)</li>
                                <li>Radicchio, Mixed Green with Wine Poached Pear and Hazelnuts</li>
                                <li>Lemon Parmesan Arugula</li>
                                <li>Roasted Beet and Goat Cheese Napoleon</li>
                                <li>Minted Citrus Salad over Greens</li>
                                <li>Spinach, Bacon and Hard Boiled Egg</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Home Made Salad Dressings</div>
                            <ul>
                                <li>Champagne Vinaigrette</li>
                                <li>Raspberry Vinaigrette</li>
                                <li>Buttermilk Ranch</li>
                                <li>French</li>
                                <li>Roquefort Cheese</li>
                                <li>Honey Dijon</li>
                                <li>Red Wine and Oregano</li>
                                <li>Balsamic Vinaigrette</li>
                                <li>Lemon Vinaigrette</li>
                                <li>House Italian</li>
                                <li>Roasted Tomato Balsamic Vinaigrette</li>
                                <li>Caesar</li>
                                <li>Peppercorn Ranch</li>
                                <li>Warm Bacon</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Bread Choices</div>
                            <ul>
                                <li>Yeast Rolls</li>
                                <li>Biscuits</li>
                                <li>Garlic Knots</li>
                                <li>French Baguette Rolls</li>
                                <li>Foccacia</li>
                                <li>Dessert Options:</li>
                                <li>Spiced Apple Cake with Chocolate Pastry Cream</li>
                                <li>Pumpkin Roll with Cream Cheese Filling</li>
                                <li>Seasonal Cobbler with Vanilla ice Cream</li>
                                <li>Italian Orange Amaretto Pound Cake with Seasonal Fruit</li>
                                <li>Tiramisu</li>
                                <li>Chocolate mouse with Fresh Fruit</li>
                                <li>Chocolate Hazelnut Cake with Fresh Raspberries</li>
                                <li>Baklava</li>
                                <li>Chocolate and Nut Covered Fruit</li>
                                <li>Bread Pudding with Bourbon Sauce</li>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-header">Specialty Drink (alcohol is not included)</div>
                            <ul>
                                <li>Hot Spiced Apple Cider</li>
                                <li>Amaretto Hot Chocolate</li>
                                <li>Peppermint Hot Chocolate</li>
                                <li>White Sangria</li>
                                <li>Red Sangria</li>
                                <li>Rose Sangria</li>
                                <li>Lemonade</li>
                                <li>Sweet Southern Iced Tea</li>
                                <li>Green Iced Tea</li>
                                <li>Moroccan Mint Iced Tea</li>
                                <li>Strawberry Lime White Iced Tea</li>
                                <li>Margarita, Daiquiri or Smoothie Base –</li>
                                <li>Lime, Lemon, Mango, Strawberry, Mango, Sour Apple and Pear</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="summary">
                    <div className="font-bold">
                        *Each guest can pick their steak cut, but chef must know 48 hours in advance.
                        Don’t be afraid to invite the vegan or vegetarian!  I can make a substitute for them.
                    </div>
                </div>
                <div className="summary">All rentals if needed are ordered and paid for by host.</div>
                <div className="summary">Chef arrives 2-3 hours before party.</div>
                <div className="summary">All Alcohol to drink is purchased by host.</div>
            </div>
        </>
    );
}