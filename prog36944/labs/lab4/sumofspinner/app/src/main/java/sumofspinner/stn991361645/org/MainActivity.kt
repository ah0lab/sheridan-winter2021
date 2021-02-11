package sumofspinner.stn991361645.org

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ArrayAdapter
import android.widget.Spinner
import android.widget.AdapterView
import android.widget.TextView
import android.widget.Button
import android.widget.Toast

import kotlinx.android.synthetic.main.activity_main.*

enum class Operation {
    ADD,
    SUB,
    MUL,
    DIV
}

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val operations = arrayOf ("+", "-", "*", "/")

        var operation :Operation = Operation.ADD

        val arrayAdapter = ArrayAdapter (this,
            android.R.layout.simple_spinner_dropdown_item, operations)

        val s: Spinner = findViewById (R.id.spinner)
        s.adapter = arrayAdapter

        s.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener {
                override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                    when(position) {
                        0 -> operation = Operation.ADD
                        1 -> operation = Operation.SUB
                        2 -> operation = Operation.MUL
                        3 -> operation = Operation.DIV
                        else -> {operation = Operation.ADD}
                    }
                }
                override fun onNothingSelected(parent: AdapterView<*>?) {
                    TODO("Not yet implemented")
                }

            }

        button.setOnClickListener {
            var result: Int = 0
            val num1Input :String = editNum1.text.toString()
            val num2Input :String = editNum2.text.toString()

            if (num1Input == "") {
                Toast.makeText (this, "Please enter a number in the first input field!",
                    Toast.LENGTH_SHORT).show()
            } else if (num2Input == "") {
                Toast.makeText(this, "Please enter a number in the second input field!",
                    Toast.LENGTH_SHORT ).show()
            } else {
               when (operation) {
                   Operation.ADD -> result = num1Input.toInt() + num2Input.toInt()
                   Operation.SUB -> result = num1Input.toInt() - num2Input.toInt()
                   Operation.MUL -> result = num1Input.toInt() * num2Input.toInt()
                   Operation.DIV -> {
                       if (num2Input.toInt() <= 0) {
                           result = 0
                           Toast.makeText(this, "Cannot divide by 0!", Toast.LENGTH_SHORT ).show()
                       } else {
                           result = num1Input.toInt() / num2Input.toInt()
                       }
                   }
               }
            }
            textResult.text = "Result: " + result
        }
    }
}