package project.stN991361645.org

class Pizza
{
    private var _size: PizzaSize
    private var _toppings: ArrayList<Topping>

    constructor (size:PizzaSize, toppings: ArrayList<Topping>)
    {
        this._size = size
        this._toppings = toppings
    }

    constructor()
    {
        this._size = PizzaSize.LARGE
        this._toppings = arrayListOf<Topping>()
    }

    fun addTopping(topping:Topping)
    {
        this._toppings.add(topping)
    }
    fun removeTopping(topping:Topping)
    {
        this._toppings.remove(topping)
    }

    fun hasNoToppings(): Boolean
    {
        return this._toppings.size == 0
    }

    fun getToppingAt(index:Int): Topping
    {
        return this._toppings[index]
    }
    fun getToppings() : Iterator<Topping>
    {
        return this._toppings.iterator()
    }

    fun getSize() : PizzaSize
    {
       return this._size
    }
    fun setSize(newSize:PizzaSize)
    {
        this._size = newSize;
    }
}