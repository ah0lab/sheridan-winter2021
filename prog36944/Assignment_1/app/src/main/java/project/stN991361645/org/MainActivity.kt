package project.stN991361645.org

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

import android.widget.ArrayAdapter
import android.widget.AdapterView
import android.widget.Spinner
import android.widget.TextView
import android.widget.RadioGroup
import android.widget.RadioButton
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    var subtotal = 0.00F
    var thePizza = Pizza()
    var deliveryEnabled = false
    var deliveryWasToggled = false
    var lastChecked_rb = 0

    fun updateSubtotal()
    {
        this.subtotal = PizzaPriceEvaluator.evalPizza(thePizza)
        // Update totals label text
        orderTotal.text = "Total: " + subtotal.toString()
    }

    fun addPizzaTopping(topping:Topping)
    {
        // Radio buttons only allow for one topping at a time
        if (!thePizza.hasNoToppings()) {
            thePizza.removeTopping(
                thePizza.getToppingAt(0))
        }
        thePizza.addTopping(topping)
        updateSubtotal()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        // Setup pizza size spinner
        val pizzaSizeOptions = arrayOf("Small", "Medium", "Large")
        val arrayAdapter = ArrayAdapter(this,
            android.R.layout.simple_spinner_item, pizzaSizeOptions)
        val sizeSpinner: Spinner = findViewById(R.id.sizeSpinner)
        sizeSpinner.adapter = arrayAdapter
        // Default to Large Pizza
        sizeSpinner.setSelection(2);

        sizeSpinner.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener {

            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                when(pizzaSizeOptions[position]) {
                    "Small"     -> thePizza.setSize(PizzaSize.SMALL)
                    "Medium"    -> thePizza.setSize(PizzaSize.MEDIUM)
                    "Large"     -> thePizza.setSize(PizzaSize.LARGE)
                }
                updateSubtotal()
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {
                thePizza.setSize(PizzaSize.LARGE)
                updateSubtotal()
            }

        }

        // Setup topping radio buttons
        toppings.setOnCheckedChangeListener { group, checkedId -> run {
            val selectedRadio: RadioButton = findViewById(checkedId)
            when(selectedRadio.text) {
                "Meat"      -> addPizzaTopping(Topping("Meat", ToppingType.MEAT))
                "Cheese"    -> addPizzaTopping(Topping("Cheese", ToppingType.CHEESE))
                "Vegetables"-> addPizzaTopping(Topping("Veg", ToppingType.VEG))
            }

            lastChecked_rb = checkedId
            updateSubtotal()
        }}

        // Set initial delivery options view state
        divider.visibility = View.GONE
        deliveryDetailsHeading.visibility = View.GONE
        label_address.visibility = View.GONE
        input_address.visibility = View.GONE
        button_order.visibility = View.GONE

        // Setup Delivery toggle
        switch_delivery.setOnCheckedChangeListener { buttonView, isChecked -> run {
          if(isChecked) {
              // Hide delivery option details
              divider.visibility = View.VISIBLE
              deliveryDetailsHeading.visibility = View.VISIBLE
              label_address.visibility = View.VISIBLE
              input_address.visibility = View.VISIBLE
              button_order.visibility = View.VISIBLE

              // Toggle delivery so we can charge them
              deliveryEnabled = true
          } else {
              // Show delivery option details
              divider.visibility = View.GONE
              deliveryDetailsHeading.visibility = View.GONE
              label_address.visibility = View.GONE
              input_address.visibility = View.GONE
              button_order.visibility = View.GONE
              deliveryEnabled = false
          }
        }}

        button_order.setOnClickListener{
            // Toast to confirm order
            val toast = Toast.makeText(this, "Order Processed!", Toast.LENGTH_SHORT)

            // Clear form fields
            sizeSpinner.setSelection(2)
            //toppings.clearCheck()
            switch_delivery.toggle()
            input_address.setText("")

            toast.show()
        }

    }

}