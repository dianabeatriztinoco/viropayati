const fizzBuzz = (x, y) => {
    for(i = x, i <= y + 1, i++){
        if(i % 3 == 0){
            console.log("fizz")
        }

        if(i % 5 == 0 ){
            console.log("buzz")
        }

    }
}

fizzBuzz(1, 500)


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Bagel_types", {
            index: {
                allowNull: false, 
                autoIncrement: true, 
                primaryKey: true, // automatically not allowed to be null. 
                type: Sequelize.INTEGER
            }, 

            toppings: {
                allowNull: false, 
                type: Sequelize.VARCHAR
            }, 

            cost: {
                allowNull: false, 
                type: Sequelize.INTEGER
            },

            creation_date: {
                allowNull: false, 
                type: Sequelize.DATE
            }
        }
    }
}




// PHP

$text = "apples";

<?php


echo str_replace("p", "q", $text);

?>



const checkboxes = document.querySelectorAll('input[type="checkbox"]:unchecked')



checkboxes.checked = true 