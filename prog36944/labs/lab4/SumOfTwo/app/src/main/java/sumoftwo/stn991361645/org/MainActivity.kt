package sumoftwo.stn991361645.org

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button.setOnClickListener {
            val num1Input :String = editNum1.text.toString()
            val num2Input :String = editNum2.text.toString()

            if (num1Input == "") {
                Toast.makeText(this, "Please enter a number in the first input field!", Toast.LENGTH_SHORT).show()
            } else if (num2Input == "") {
                Toast.makeText(this, "Please enter a number in the second input field!", Toast.LENGTH_SHORT).show()
            } else {
                textResult.text = "Result: " + (num1Input.toInt() + num2Input.toInt())
                Toast.makeText (this, "Result " + textResult.text, Toast.LENGTH_LONG).show()
            }
        }
    }
}