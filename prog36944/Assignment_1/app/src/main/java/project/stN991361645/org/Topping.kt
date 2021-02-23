package project.stN991361645.org

class Topping
{
    private var _name: String
    private var _type: ToppingType

    constructor(name: String, type: ToppingType)
    {
        this._name = name
        this._type = type
    }

    fun getName(): String
    {
        return this._name
    }
    fun setName(newName: String)
    {
        this._name = newName
    }

    fun getType(): ToppingType
    {
        return this._type
    }
    fun setType(newType: ToppingType)
    {
        this._type = newType
    }
}