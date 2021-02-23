package project.stN991361645.org

class PizzaPriceEvaluator {

    companion object {
        // Prices
        private val _cheesePrice: Float = 1.50F
        private val _meatPrice: Float = 2.00F
        private val _vegPrice: Float = 0.50F
        private val _smallPrice: Float = 5.00F
        private val _mediumPrice: Float = 8.00F
        private val _largePrice: Float = 11.00F


        private fun evalToppingsPrice(toppings:Iterator<Topping>): Float
        {
            var subtotal = 0.00F

            toppings.forEach {
                when (it.getType()) {
                    ToppingType.CHEESE  -> subtotal += _cheesePrice
                    ToppingType.MEAT    -> subtotal += _meatPrice
                    ToppingType.VEG     -> subtotal += _vegPrice
                }
            }

            return subtotal
        }

        private fun evalSizePrice(size: PizzaSize): Float
        {
            var subtotal = 0.00F

            when (size) {
                PizzaSize.SMALL     -> subtotal += _smallPrice
                PizzaSize.MEDIUM    -> subtotal += _mediumPrice
                PizzaSize.LARGE     -> subtotal += _largePrice
            }

            return subtotal
        }

        fun evalPizza(pizza:Pizza): Float {
            var subtotal = 0.00F

            subtotal += evalToppingsPrice(pizza.getToppings())
            subtotal += evalSizePrice(pizza.getSize())

            return subtotal
        }

    }

}